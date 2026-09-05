import jwt from "jsonwebtoken"
import { config } from "../config/config.js"
import AppError from "./error.js"

export const generateAccessToken = (user) => {
    const access = jwt.sign(
        { _id: user._id, user: user.role },
        config.JWT_ACCESS_SECRET_KEY,
        { expiresIn: "1M" }
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
            throw new AppError("Access token expired", 401);
        }

        throw new AppError("Invalid access token", 401);
    }
}