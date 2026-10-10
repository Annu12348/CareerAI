import jwt from "jsonwebtoken"
import { config } from "../config/config.js"
import AppError from "./error.js"
import crypto from "crypto"

export const generateAccessToken = (user) => {
    const access = jwt.sign(
        { _id: user._id, user: user.role },
        config.JWT_ACCESS_SECRET_KEY,
        { expiresIn: "15M" }
    )

    return access
}

export const generateRefreshToken = (user) => {
    const refresh = jwt.sign(
        { _id: user._id, user: user.role },
        config.JWT_REFRESH_SECRET_KEY,
        { expiresIn: "7d" }
    )

    return refresh;
}

export const accessTokenVerify = (token) => {
    try {
        const decoded = jwt.verify(
            token,
            config.JWT_ACCESS_SECRET_KEY
        );

        return decoded;

    } catch (error) {
        if (error.name === "TokenExpiredError") {
            throw new AppError("Access token expired", 401);
        }

        throw new AppError("Invalid access token", 401);
    }
};

export const refreshTokenVerify = (token) => {
    try {
        const decoded = jwt.verify(
            token,
            config.JWT_REFRESH_SECRET_KEY
        );

        return decoded;
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            throw new AppError("Refresh token expired", 401);
        }

        throw new AppError("Invalid refresh token", 401);
    }
}

export const generateResetToken = () => {
    return crypto.randomBytes(32).toString("hex")
}

export const hashResetToken = (token) => {
    return crypto.createHash("sha256").update(token).digest("hex")
}