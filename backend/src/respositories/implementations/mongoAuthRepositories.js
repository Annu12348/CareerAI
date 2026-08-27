import userModel from "../../model/user.model.js";
import AppError from "../../utils/error.js";
import IAuthRepository from "../contracts/IAuthRepositories.js";

class mongoAuthRepository extends IAuthRepository {
    async authRegister(data) {
        try {
            const res = await userModel.create(data);
            const user = res.toObject();
            delete user.password
            return user;
        } catch (error) {
           throw new AppError(`Failed to register user: ${error.message}`, 500, error) 
        }
    }

    async authFindByEmail (email) {
        try {
            const user = await userModel.findOne({email});
            return user;
        } catch (error) {
           throw new AppError(`Failed to find user by email: ${error.message}`, 500, error) 
        }
    }
}

export default mongoAuthRepository;