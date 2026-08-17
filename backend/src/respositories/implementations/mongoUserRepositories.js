import userModel from "../../model/user.model.js";
import AppError from "../../utils/error.js";
import IUserRepository from "../contracts/IUserRepositories.js";

class mongoUserRepository extends IUserRepository {
    async userRegister(data) {
        try {
            const user = await userModel.create(data)
            return user;
        } catch (error) {
           throw new AppError(`failed to user register: ${error.message}`, 500, error) 
        }
    }
}

export default mongoUserRepository;