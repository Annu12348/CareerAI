import bcrypt from "bcryptjs"
import crypto from "crypto";
import mongoUserRepository from "../respositories/implementations/mongoUserRepository.js";
import AppError from "../utils/error.js";
import { generateAccessToken, generateRefreshToken, refreshTokenVerify } from "../utils/token.js";
import redis from "../redis/redis.js";
import { emailQueue } from "../queues/email.queue.js";

const OTP_TTL = 300;
const OTP_MAX_ATTEMPTS = 5;
const RESET_TOKEN_TTL = 600;

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

    async forgetPassword(email) {
        email = email.trim().toLowerCase()

        const user = await this.mongoUserRepository.findByEmail(email);

        if (!user) {
            throw new AppError("If the account exists, an OTP has been sent.", 404);
        }

        const otp = crypto.randomInt(100000, 1000000).toString()

        const otpKey = `password-reset:otp:${email}`

        const attemptKey = `password-reset:attempts:${email}`

        await redis.set(
            otpKey,
            otp,
            {
                EX: OTP_TTL
            }
        )

        await redis.set(
            attemptKey,
            "0",
            {
                EX: 300
            }
        )

        const r = await emailQueue.add(
            "sentOtp",
            {
                email,
                otp
            },
            {
                attempts: 3,
                backoff: {
                    type: "exponential",
                    delay: 2000
                },
                removeOnComplete: true,
                removeOnFail: {
                    count: 100
                }
            }
        )

        return {
            message: "If the account exists, an OTP has been sent."
        };
    }

    async verifyOtp(email, otp) {
        email = email.trim().toLowerCase()

        const otpKey = `password-reset:otp:${email}`
        const attemptKey = `password-reset-attemps:${email}`

        if (!/^\d{6}$/.test(otp)) {
            throw new AppError("Invalid otp", 400)
        }

        const storedOtp = await redis.get(otpKey)

        if (!storedOtp) {
            throw new AppError("OTP expired or not found", 400)
        }

        const attempts = Number(await redis.get(attemptKey)) || 0;

        if (attempts >= OTP_MAX_ATTEMPTS) {
            await redis.del(otpKey)
            await redis.del(attemptKey)
            
            throw new AppError(
                "Too many invalid attempts. Please request a new OTP.",
                429
            );
        }

        if (storedOtp !== otp) {
            const newAttempts = await redis.incr(attemptKey);

            if (newAttempts === 1) {
                await redis.expire(attemptKey, OTP_TTL)
            }

            if (newAttempts >= OTP_MAX_ATTEMPTS) {
                await redis.del(otpKey);
                await redis.del(attemptKey);

                throw new AppError(
                    "Too many invalid attempts. Please request a new OTP.",
                    429
                )
            }

            throw new AppError(
                "Invalid OTP",
                400
            );
        };


        await redis.del(otpKey)
        await redis.del(attemptKey)

        const resetToken = crypto.randomBytes(32).toString("hex")
        const resetTokenHash = crypto.createHash("sha256").update(resetToken).digest("hex");
        const resetKey = `password-reset:verified:${resetTokenHash}`

        await redis.set(
            resetKey,
            email,
            {
                EX: RESET_TOKEN_TTL
            }
        )

        return {
            message: "OTP verified successfully",
            resetToken
        }
    }
}

export default userServices;
//10:00 - 