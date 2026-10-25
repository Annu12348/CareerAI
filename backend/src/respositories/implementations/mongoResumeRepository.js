import mongoose from "mongoose";
import resumeModel from "../../model/resume.model.js";
import AppError from "../../utils/error.js";
import IResumeRepository from "../contracts/IResumeRepository.js";

class mongoResumeRepository extends IResumeRepository {
    async create(data, userId) {
        try {
            const resume = await resumeModel.create({
                ...data,
                userId,
            })

            return resume;
        } catch (error) {
            throw new AppError(`Failed to create resume: ${error.message}`, 500)
        }
    }

    async findByIdResume(resumeId, userId) {
        try {
            if (!mongoose.isValidObjectId(resumeId)) {
                return null;
            }

            const resume = await resumeModel.findOne({
                _id: resumeId,
                userId,
                deletedAt: null
            })

            return resume;
        } catch (error) {
            throw new AppError(`failed to find resume: ${error.message}`, 500)
        }
    }

    async resumeProfileUpadate(userId, resumeId, image) {
        try {
            if (
                !mongoose.isValidObjectId(userId) ||
                !mongoose.isValidObjectId(resumeId)
            ) {
                throw new AppError("Invalid userId or resumeId", 400);
            }

            const resume = await resumeModel.findOneAndUpdate(
                {
                    _id: resumeId,
                    userId: userId
                },
                {
                    $set: {
                        "personalInfo.profileImage": image
                    }
                },
                {
                    new: true,
                    runValidators: true
                }
            )

            return resume;
        } catch (error) {
            throw new AppError(`failed to update resume: ${error.message}`, 500)
        }
    }
}

export default mongoResumeRepository;