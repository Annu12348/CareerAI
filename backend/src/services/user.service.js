import bcrypt from "bcryptjs"
import mongoUserRepository from "../respositories/implementations/mongoUserRepository.js";
import AppError from "../utils/error.js";
import { generateAccessToken, generateRefreshToken, refreshTokenVerify } from "../utils/token.js";
import redis from "../redis/redis.js";
import { emailQueue } from "../queues/email.queue.js";

class userServices {
    constructor() {
        this.mongoUserRepository = new mongoUserRepository();
    }

    async register(data, email) {
        const existsUser = await this.mongoUserRepository.findByEmail(email);

        if (existsUser) {
            throw new AppError("User already exists", 401)
        }

        data.password = await bcrypt.hash(data.password, 10)

        const user = await this.mongoUserRepository.register(data);

        if (!user) {
            throw new Error("user created error", 401)
        }

        return user;
    }

    async login(email, password) {
        email = email.trim().toLowerCase();

        const user = await this.mongoUserRepository.findByEmail(email);

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

    async refreshToken(refreshToken) {
        const decoded = await refreshTokenVerify(refreshToken)

        const user = await this.mongoUserRepository.findById(decoded._id)

        if (!user) {
            throw new AppError("User not found", 401);
        }

        const newAccessToken = generateAccessToken(user)

        return newAccessToken;
    }

    async email(email) {
        const user = await this.mongoUserRepository.findByEmail(email);

        if (!user) {
            throw new AppError("User not found", 404);
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString()

        await redis.set(
            `password-reset: ${email}`,
            otp,
            "EX",
            300
        )

        await emailQueue.add(
            "sentOtp",
            {
                email,
                otp
            }
        )

        return {
            message: "OTP sent successfully",
        };
    }
}

export default userServices;