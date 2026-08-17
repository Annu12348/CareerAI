import mongoUserRepository from "../respositories/implementations/mongoUserRepositories.js";

class userServices {
    constructor () {
        this.mongoUserRepository = new mongoUserRepository();
    }

    async userRegister (data) {
        const user = await this.mongoUserRepository.userRegister(data);

        return user;
    }
}

export default userServices;