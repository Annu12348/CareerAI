import githubConfig from "../config/github/github.config.js";
import mongoUserRepository from "../respositories/implementations/mongoUserRepository.js";
import AppError from "../utils/error.js";
import axios from "axios"
import crypto from "crypto"

class GithubService {
    constructor() {
        this.mongoUserRepository = new mongoUserRepository()
    }

    generateState() {
        return crypto.randomBytes(32).toString("hex");
    }

    // 2. Generate GitHub Auth Redirect URL
    generateAuthUrl(state) {
        if (!state) {
            throw new AppError("OAuth state is required", 401);
        }

        const params = new URLSearchParams({
            client_id: githubConfig.clientId,
            redirect_uri: githubConfig.callbackUrl,
            scope: githubConfig.scopes.join(" "),
            state,
        });

        return `${githubConfig.authEndpoint}?${params.toString()}`;
    }

    // 3. Verify GitHub User & Fetch Profile + Verified Email
    async verifyGithubUser(code) {
        if (!code || typeof code !== "string") {
            throw new AppError("GitHub authorization code is required", 400);
        }

        // Step A: Exchange code for Access Token
        const tokenResponse = await axios.post(
            githubConfig.tokenEndpoint,
            {
                client_id: githubConfig.clientId,
                client_secret: githubConfig.clientSecret,
                code,
                redirect_uri: githubConfig.callbackUrl,
            },
            {
                headers: {
                    Accept: "application/json", // GitHub returns urlencoded by default if not specified, or we handle query string
                },
            }
        );

        // GitHub token response application/x-www-form-urlencoded format me bhi aa sakta hai
        let accessToken = tokenResponse.data.access_token;
        if (!accessToken && typeof tokenResponse.data === "string") {
            const parsedData = new URLSearchParams(tokenResponse.data);
            accessToken = parsedData.get("access_token");
        }

        if (!accessToken) {
            throw new AppError("Failed to obtain access token from GitHub", 401);
        }

        // Step B: Fetch User Profile from GitHub API
        const userResponse = await axios.get(githubConfig.userApiEndpoint, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json",
            },
        });

        const githubUserData = userResponse.data;

        if (!githubUserData?.id || !githubUserData?.login) {
            throw new AppError("Invalid GitHub account information", 401);
        }

        // Step C: Fetch Primary & Verified Email (Kyunki GitHub par email private ho sakti hai)
        const emailsResponse = await axios.get(githubConfig.userEmailsEndpoint, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json",
            },
        });

        const emails = emailsResponse.data;
        const primaryEmailObj = emails.find(
            (email) => email.primary === true && email.verified === true
        ) || emails.find((email) => email.verified === true);

        if (!primaryEmailObj || !primaryEmailObj.email) {
            throw new AppError("No verified email found on your GitHub account", 403);
        }

        const fullName = githubUserData.name || githubUserData.login || "GitHub User";
        const nameParts = fullName.trim().split(" ");
        const firstName = nameParts[0] || "GitHub";
        const lastName = nameParts.slice(1).join(" ") || "User";

        return {
            githubId: githubUserData.id.toString(),
            email: primaryEmailObj.email.trim().toLowerCase(),
            firstName,
            lastName,
            profileImage: githubUserData.avatar_url || null,
            emailVerified: true,
        };
    }

    // 4. Find User by GitHub ID
    async findGithubUser(githubId) {
        if (!githubId) {
            throw new AppError("GitHub ID is required", 400);
        }

        return await this.mongoUserRepository.findByGithubId(githubId)
    }

    async createGithubUser(data) {
        if (!data?.githubId || !data?.email) {
            throw new AppError("Invalid GitHub user information", 400);
        }

        const user = await this.mongoUserRepository.register({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            isVerified: data.emailVerified,
            profileImage: {
                url: data.profileImage,
                fileId: null,
                filePath: null,
            },
            authProviders: [
                {
                    provider: "github",
                    providerId: data.githubId,
                },
            ],
            role: "user",
        });

        return user;
    }

    async handleGithubAuthWithMode(githubUser, authMode) {
        const existingUser = await this.mongoUserRepository.findByEmail(githubUser.email);

        // 1. Signup Mode: Agar email pehle se exist karti hai, toh login par redirect karo
        if (authMode === "signup" && existingUser) {
            return {
                status: "REDIRECT_TO_LOGIN",
                message: "Email already exists. Please login.",
            };
        }

        if (authMode === "login" && !existingUser) {
            return {
                status: "REDIRECT_TO_SIGNUP",
                message: "Account not found. Please sign up.",
            };
        }

        let user = await this.findGithubUser(githubUser.githubId);

        if (!user && existingUser) {
            // Agar email match ho gayi par GitHub provider link nahi hai, toh account link kar do
            user = await this.mongoUserRepository.linkGithubAccount(existingUser._id, githubUser.githubId);
            if (!user) {
                user = existingUser;
            }
        }

        if (!user) {
            user = await this.createGithubUser(githubUser);
        }

        return {
            status: "SUCCESS",
            user,
        };
    }
}

export default GithubService;