import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import mongoAuthRepository from "../respositories/implementations/mongoAuthRepositories.js";
import AppError from "../utils/error.js";
import { config } from "../config/config.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";

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

        return user;
    }

    async authLogin(email, password) {
       email = email.trim().toLowerCase();

        const user = await this.mongoAuthRepository.authFindByEmail(email);

        if (!user) {
            throw new AppError("Invalid email or password.", 401)
        }

        const matchPassword = await bcrypt.compare(password, user.password)

        if (!matchPassword) {
            throw new AppError("Invalid email or password.", 401)
        }

        const access = generateAccessToken(user)
        const refresh = generateRefreshToken(user)

        return {
            user,
            access,
            refresh
        };
    }
}

export default authServices;