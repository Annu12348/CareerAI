import githubConfig from "../config/github/github.config.js";
import crypto from "crypto";
import GithubService from "../services/github.service.js"
import { generateAccessToken, generateRefreshToken } from "../utils/token.js"; // Aapke project ke path ke mutabiq
import { accessCookieOptions, refreshCookieOptions } from "../config/cookie/cookie.config.js";

class GithubController {
    constructor() {
        this.GithubServices = new GithubService()
    }

    async githubLoginInit(req, res, next) {
        try {
            const state = this.GithubServices.generateState();
            const authUrl = this.GithubServices.generateAuthUrl(state);

            res.cookie(
                githubConfig.stateCookieName,
                state,
                githubConfig.stateCookieOptions,
            )

            res.cookie(
                "github_auth_mode",
                "login",
                githubConfig.stateCookieOptions
            )

            res.status(200).json({
                success: true,
                message: "GitHub login URL generated successfully",
                data: { authUrl },
            })
        } catch (error) {
            next(error)
        }
    }

    githubSignupInit = async (req, res, next) => {
        try {
            const state = this.GithubServices.generateState();
            const authUrl = this.GithubServices.generateAuthUrl(state);

            res.cookie(
                githubConfig.stateCookieName,
                state,
                githubConfig.stateCookieOptions
            )

            res.cookie(
                "github_auth_mode",
                "signup",
                githubConfig.stateCookieOptions
            )

            res.status(200).json({
                success: true,
                message: "GitHub signup URL generated successfully",
                data: { authUrl },
            })
        } catch (error) {
            next(error)
        }
    }

    async githubCallback(req, res, next) {
        try {
            const { code, state, error, error_description } = req.query;

            const savedState = req.cookies[githubConfig.stateCookieName];
            const authMode = req.cookies["github_auth_mode"] || "login";

            res.clearCookie(githubConfig.stateCookieName, githubConfig.stateCookieOptions);
            res.clearCookie("github_auth_mode", githubConfig.stateCookieOptions);

            if (error) {
                return res.redirect(
                    `http://localhost:3000/auth/login?error=${encodeURIComponent(error_description || "github_access_denied")}`
                );
            }

            console.log({ code, state, savedState });

            if (
                typeof code !== "string" ||
                typeof state !== "string" ||
                typeof savedState !== "string"
            ) {
                return res.redirect("http://localhost:3000/auth/login?error=invalid_github_callback");
            }

            const receivedBuffer = Buffer.from(state);
            const savedBuffer = Buffer.from(savedState);

            if (
                receivedBuffer.length !== savedBuffer.length ||
                !crypto.timingSafeEqual(receivedBuffer, savedBuffer)
            ) {
                return res.redirect("http://localhost:3000/auth/login?error=invalid_oauth_state");
            }

            const githubUser = await this.GithubServices.verifyGithubUser(code);

            // Step B: Run Strict Cross-Validation Mode Handler
            const authResult = await this.GithubServices.handleGithubAuthWithMode(githubUser, authMode);

            if (authResult.status === "REDIRECT_TO_LOGIN") {
                return res.redirect("http://localhost:3000/auth/login?error=email_already_exists");
            }

            if (authResult.status === "REDIRECT_TO_SIGNUP") {
                return res.redirect("http://localhost:3000/auth/signup?error=account_not_found");
            }

            const user = authResult.user;

            if (!user) {
                return res.redirect("http://localhost:3000/auth/login?error=authentication_failed");
            }

            // Step C: Generate JWT / Auth Tokens using project utilities (Google ki tarah)
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);

            res.cookie("accessToken", accessToken, accessCookieOptions);
            res.cookie("refreshToken", refreshToken, refreshCookieOptions);

            // Final success redirect
            return res.redirect("http://localhost:3000/users/resumes");
        } catch (error) {
            next(error);
        }
    }
}

export default GithubController;