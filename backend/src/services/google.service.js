import crypto from "crypto"
import mongoUserRepository from "../respositories/implementations/mongoUserRepository.js";
import AppError from "../utils/error.js";
import googleConfig from "../config/google/google.config.js";

class GoogleServices {
    constructor() {
        this.mongoUserRepository = new mongoUserRepository()
    }

    generateState() {
        return crypto.randomBytes(32).toString("hex")
    }

    generateAuthUrl(state) {
        if (!state) {
            throw new AppError("OAuth state is required", 401)
        }

        const googleAuth = googleConfig.client.generateAuthUrl({
            access_type: "online",
            scope: googleConfig.scopes,
            state,
            prompt: "select_account",
            response_type: "code"
        })

        return googleAuth;
    }

    async verifyGoogleUser(code) {
        if (!code || typeof code !== "string") {
            throw new AppError("Google authorization code is required", 400)
        }

        const { tokens } = await googleConfig.client.getToken({
            code,
            redirect_uri: googleConfig.callbackUrl
        })

        if (!tokens.id_token) {
            throw new AppError("Google ID token not received", 401)
        }

        const ticket = await googleConfig.client.verifyIdToken({
            idToken: tokens.id_token,
            audience: googleConfig.clientId
        })

        const payload = ticket.getPayload();

        if (!payload?.sub || !payload.email) {
            throw new AppError("Invalid Google account information", 401);
        }

        if (payload.email_verified !== true) {
            throw new AppError("Google email is not verified", 403);
        }

        return {
            googleId: payload.sub,
            email: payload.email.trim().toLowerCase(),
            firstName: payload.given_name || "Google",
            lastName: payload.family_name || "User",
            profileImage: payload.picture || null,
            emailVerified: true,
        }
    }

    async findGoogleUser(googleId) {
        if (!googleId) {
            throw new AppError("Google ID is required", 400)
        }

        const google = await this.mongoUserRepository.findByGoogleId(googleId)

        return google;
    }

    //5
    async createGoogleUser(data) {
        if (!data?.googleId || !data?.email) {
            throw new Error("Invalid Google user information", 400);
        }

        const google = await this.mongoUserRepository.register({
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
                    provider: "google",
                    providerId: data.googleId,
                },
            ],
            role: "user",
        })

        return google;
    }

    async findOrCreateUser(googleUser) {
        let user = await this.findGoogleUser(
            googleUser.googleId
        )

        if (user) {
            return {
                user,
                isNewUser: false,
                isLinked: false
            }
        }

        const existsEmailUser = await this.mongoUserRepository.findByEmail(
            googleUser.email
        )

        if (existsEmailUser) {
            return {
                user: null,
                existingUser: existsEmailUser,
                isNewUser: false,
                isLinked: false,
                requiresAccountLinking: true,
            };
        }

        try {
            const newUser = await this.createGoogleUser(
                googleUser
            );

            return {
                user: newUser,
                isNewUser: true,
                isLinked: false,
                requiresAccountLinking: false,
            };
        } catch (error) {
            if (error.code === 11000) {
                const existingUser = await this.findGoogleUser(
                    googleUser.googleId
                );

                if (existingUser) {
                    return {
                        user: existingUser,
                        isNewUser: false,
                        isLinked: false,
                        requiresAccountLinking: false,
                    };
                }
            }
            throw error;
        }
    }

    async handleGoogleAuthWithMode(googleUser, authMode) {
        const existingUser = await this.mongoUserRepository.findByEmail(googleUser.email);

        if (authMode === "signup" && existingUser) {
            return {
                status: "REDIRECT_TO_LOGIN",
                message: "Email already exists. Please login."
            }
        }

        if (authMode === "login" && !existingUser) {
            return {
                status: "REDIRECT_TO_SIGNUP",
                message: "Account not found. Please sign up."
            };
        }

        const userResult = await this.findOrCreateUser(googleUser);
        const user = userResult.user || userResult.existingUser;

        return {
            status: "SUCCESS",
            user
        };
    }

    async linkGoogleAccount(userId, googleUser) {
        if (!userId || !googleUser?.googleId) {
            throw new AppError("User ID and Google ID are required", 400);
        }

        const existingGoogleUser = await this.findGoogleUser(
            googleUser.googleId
        );

        if (existingGoogleUser) {
            if (existingGoogleUser._id.toString() === userId.toString()) {
                return existingGoogleUser;
            }

            throw new AppError("This Google account is already linked to another user", 400);
        }

        const updatedUser = await this.mongoUserRepository.linkGoogleAccount(
            userId,
            googleUser.googleId
        );

        if (!updatedUser) {
            throw new AppError("Unable to link Google account", 404);
        }

        return updatedUser;
    }
}

export default GoogleServices;