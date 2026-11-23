import { config } from "../config";

export const githubConfig = {
    clientId: config.GITHUB_CLIENT_ID,
    clientSecret: config.GITHUB_CLIENT_SECRET,
    callbackUrl: config.GITHUB_CALLBACK_URL,

    // 2. Official GitHub OAuth Endpoints
    authEndpoint: "https://github.com/login/oauth/authorize",
    tokenEndpoint: "https://github.com/login/oauth/access_token",
    userApiEndpoint: "https://api.github.com/user",
    userEmailsEndpoint: "https://api.github.com/user/emails",

    // 3. Required Scopes (User ki profile aur verified email access karne ke liye)
    scopes: ["user:email"],
}