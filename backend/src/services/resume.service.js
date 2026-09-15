import mongoResumeRepository from "../respositories/implementations/mongoResumeRepository.js";
import mongoUserRepository from "../respositories/implementations/mongoUserRepository.js";
import AppError from "../utils/error.js";

class ResumeSevices {
    constructor () {
        this.mongoUserRespositoys = new mongoUserRepository()
        this.mongoResumeRespository = new mongoResumeRepository()
    }

    async create (data, userId) {
        data.personalInfo.email = data.personalInfo.email.toLowerCase().trim()

        const resume = await this.mongoResumeRespository.create(data);

        if(!resume) {
            throw new AppError("resume not created", 401)
        }

        return resume;
    }
}

export default ResumeSevices;