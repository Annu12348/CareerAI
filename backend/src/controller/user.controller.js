import userModel from "../model/user.model.js";
import userServices from "../services/user.service.js";

class userController {
    constructor () {
        this.userServices = new userServices()
    }

    async register(req, res) {
        try {
            const { firstName, lastName, email, password } = req.body

            const user = await this.userServices.userRegister({
                firstName,
                lastName,
                email,
                password
            })

            res.status(201).json({
                message: "gfdf",
                data: user
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                mesaaage: "failed to user register"
            })
        }
    }
}

export default userController;