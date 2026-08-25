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

            res.cookie("token", user.token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
            });

            res.status(201).json({
                message: "gfdf",
                data: user.user,
            })
        } catch (error) {
            next(error)
        }
    }
}

export default authController;