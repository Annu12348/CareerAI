import AppError from "../utils/error.js";
import { accessTokenVerify } from "../utils/token.js";

export const authenticationUser = async (req, res, next) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
        throw new AppError("Authentication required", 401);
    }

    const decoded = accessTokenVerify(accessToken);

    console.log(decoded._id)

    req.user = decoded;

    next();
}