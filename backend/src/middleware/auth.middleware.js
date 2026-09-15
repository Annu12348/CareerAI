import mongoUserRepository from "../respositories/implementations/mongoUserRepository.js";
import AppError from "../utils/error.js";
import { accessTokenVerify } from "../utils/token.js";

const mongoUserRepositories = new mongoUserRepository()

export const authenticationUser = async (req, res, next) => {
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
        throw new AppError("Authentication required", 401);
    }

    const decoded = accessTokenVerify(accessToken);

    const user = await mongoUserRepositories.findById(decoded._id)

    req.id = user._id;
    req.user = user

    next();
}