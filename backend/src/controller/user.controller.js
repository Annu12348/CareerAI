import userServices from "../services/user.service.js";
import AppError from "../utils/error.js";

class userController {
    constructor() {
        this.userServices = new userServices()
    }

    async register(req, res, next) {
        try {
            const { firstName, lastName, email, password } = req.body

            const user = await this.userServices.register({
                firstName,
                lastName,
                email,
                password
            })

            res.status(201).json({
                success: true,
                message: "Successfully register in",
                data: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role,
                    avatar: user.avatar,
                    isVerified: user.isVerified,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }
            })
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const result = await this.userServices.login(email, password)

            res.cookie("accessToken", result.access, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production"
                        ? "none"
                        : "lax",
                maxAge: 15 * 60 * 1000,
            });

            res.cookie("refreshToken", result.refresh, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production"
                        ? "none"
                        : "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000
            });

            res.status(200).json({
                success: true,
                message: "Successfully logged in",
                data: {
                    _id: result.user._id,
                    firstName: result.user.firstName,
                    lastName: result.user.lastName,
                    email: result.user.email,
                    role: result.user.role,
                    avatar: result.user.avatar,
                    isVerified: result.user.isVerified,
                    createdAt: result.user.createdAt,
                    updatedAt: result.user.updatedAt
                },
            })
        } catch (error) {
            next(error);
        }
    }

    async refresh(req, res, next) {
        try {
            const refresh = req.cookies.refreshToken;

            if (!refresh) {
                throw new AppError("Refresh token not found", 404)
            }

            const newAccessToken = await this.userServices.refreshToken(refresh)

            res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production"
                        ? "none"
                        : "lax",
                maxAge: 15 * 60 * 1000,
            });

            res.status(200).json({
                success: true,
                message: "Access token refreshed successfully"
            })
        } catch (error) {
            next(error)
        }
    }

    async forgetPassword(req, res, next) {
        try {
            const { email } = req.body;

            const user = await this.userServices.forgetPassword(email);

            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }

    async otpVerify(req, res, next) {
        try {
            const { email, otp } = req.body

            const result = await this.userServices.verifyOtp(email, otp)

            res.cookie("password_reset_token", result.resetToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production"
                        ? "none"
                        : "lax",
            });

            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    async updatePasswordByEmail(req, res, next) {
        try {
            const { newPassword } = req.body;
            const resetToken = req.cookies.password_reset_token

            res.clearCookie("password_reset_token", {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite:
                    process.env.NODE_ENV === "production"
                        ? "none"
                        : "lax",
                maxAge: 10 * 60 * 1000,
            })

            const result = await this.userServices.updatePasswordByEmail(resetToken, newPassword)

            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }
}

export default userController;