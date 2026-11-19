import { config } from "../config/config.js";
import { accessCookieOptions, refreshCookieOptions } from "../config/cookie/cookie.config.js";
import googleConfig from "../config/google/google.config.js";
import GoogleServices from "../services/google.service.js";
import crypto from "crypto";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";

const frontendUrl = config.FRONT_END_URLS

class GoogleController {
    constructor() {
        this.GooglrService = new GoogleServices()
    }

    async googleAuth(req, res, next) {
        try {
            const state = await this.GooglrService.generateState()

            res.cookie(
                googleConfig.stateCookieName,
                state,
                googleConfig.stateCookieOptions,
            );

            const authUrl = await this.GooglrService.generateAuthUrl(state)

            res.status(200).json({
                data: authUrl
            })
        } catch (error) {
            next(error)
        }
    }

    async googleCallback(req, res, next) {
        try {
            const { code, state, error } = req.query;

            console.log("CALLBACK QUERY:", req.query);

            console.log("CALLBACK COOKIES:", req.cookies);

            console.log("STATE COOKIE NAME:", googleConfig.stateCookieName);

            const savedState = req.cookies?.[
                googleConfig.stateCookieName
            ]

            res.clearCookie(
                googleConfig.stateCookieName,
                googleConfig.stateCookieOptions
            )

            if (error) {
                return res.redirect(
                    "http://localhost:3000/auth/login?error=google_access_denied"
                    //`${frontendUrl}/login?error=google_access_denied`
                );
            }

            console.log({ code, state, savedState })

            if (
                typeof code !== "string" ||
                typeof state !== "string" ||
                typeof savedState !== "string"
            ) {
                return res.redirect(
                    "http://localhost:3000/auth/login?error=invalid_google_callback"
                    //`${frontendUrl}/login?error=invalid_google_callback`
                );
            }

            const receivedBuffer = Buffer.from(state);
            const savedBuffer = Buffer.from(savedState);

            if (
                receivedBuffer.length !== savedBuffer.length ||
                !crypto.timingSafeEqual(
                    receivedBuffer,
                    savedBuffer
                )
            ) {
                return res.redirect(
                    //`${frontendUrl}/login?error=invalid_oauth_state`
                    "http://localhost:3000/auth/login?error=invalid_oauth_state"
                )
            }

            const googleUser = await this.GooglrService.verifyGoogleUser(code)
            const user = await this.GooglrService.findOrCreateUser(googleUser)

            //wrong with import
            const accessToken = generateAccessToken(user);
            const refreshToken = generateRefreshToken(user);

            res.cookie(
                "accessToken",
                accessToken,
                accessCookieOptions,
            )

            res.cookie(
                "refreshToken",
                refreshToken,
                refreshCookieOptions
            );

            return res.redirect(
                //`${frontendUrl}/dashboard`
                "http://localhost:3000/users/resumes"
            );

        } catch (error) {
            next(error)
        }
    }
}

export default GoogleController;