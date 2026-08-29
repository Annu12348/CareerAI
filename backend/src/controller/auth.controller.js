import authServices from "../services/auth.service.js";

class authController {
    constructor() {
        this.authServices = new authServices()
    }

    async register(req, res, next) {
        try {
            const { firstName, lastName, email, password } = req.body

            const user = await this.authServices.authRegister({
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

            const result = await this.authServices.authLogin(email, password)

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
            console.error(error)
            next(error);
        }
    }
}

export default authController;