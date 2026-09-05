import resumeModel from "../../model/resume.model.js";
import AppError from "../../utils/error.js";
import IResumeRepository from "../contracts/IResumeRepository.js";

class mongoResumeRepository extends IResumeRepository {
    async create(data) {
        try {
            const resume = await resumeModel.create(data)
            return resume;
        } catch (error) {
            throw new AppError(`Failed to resume create: ${error.message}`, 500)
        }
    }
}

export default mongoResumeRepository;