import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import mongoAuthRepository from "../respositories/implementations/mongoAuthRepositories.js";
import AppError from "../utils/error.js";
import { config } from "../config/config.js";

class authServices {
    constructor() {
        this.mongoAuthRepository = new mongoAuthRepository();
    }

    async authRegister(data, email) {
        const existsUser = await this.mongoAuthRepository.authFindByEmail(email);

        if (existsUser) {
            throw new AppError("User already exists", 401)
        }

        data.password = await bcrypt.hash(data.password, 10)

        const user = await this.mongoAuthRepository.authRegister(data);

        if (!user) {
            throw new Error("user created error", 401)
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            config.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        )

        return {
            user, 
            token
        };
    }
}

export default authServices;