import jwt from "jsonwebtoken"
import { config } from "../config/config.js"

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