import githubConfig from "../config/github/github.config.js";
import GithubService from "../services/github.service.js"

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
                
            })
        } catch (error) {
            next(error)
        }
    }
}

export default GithubController;