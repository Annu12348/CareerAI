import { OAuth2Client } from "google-auth-library"
import { config } from "../config.js"

const googleClient = new OAuth2Client(
    config.GOOGLE_CLIENT_ID,
    config.GOOGLE_CLIENT_SECRET,
    config.GOOGLE_CALLBACK_URL
)

const googleConfig = {
    client: googleClient,

    clientId: config.GOOGLE_CLIENT_ID,
    callbackUrl: config.GOOGLE_CALLBACK_URL,

    scopes: ["openid", "email", "profile"],

    stateCookieName: "google_oauth_state",

    stateCookieOptions: {
        httpOnly: true,
        secure: config.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 5 * 60 * 1000,
    }
}

export default googleConfig;