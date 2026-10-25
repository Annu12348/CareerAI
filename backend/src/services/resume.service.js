import mongoResumeRepository from "../respositories/implementations/mongoResumeRepository.js";
import mongoUserRepository from "../respositories/implementations/mongoUserRepository.js";
import AppError from "../utils/error.js";
import imagekitService from "./imagekit.service.js";

class ResumeSevices {
    constructor() {
        this.mongoUserRespositoys = new mongoUserRepository()
        this.mongoResumeRespository = new mongoResumeRepository()
    }

    async create(data, userId) {
        if (!userId) {
            throw new AppError("Authentication required", 401)
        }

        const personalInfo = data.personalInfo;

        if (!personalInfo || typeof personalInfo !== "object") {
            throw new AppError("Personal information is required", 400)
        }

        const resumeData = {
            title: data.title,
            personalInfo: {
                fullName: personalInfo.fullName,
                email: personalInfo.email?.trim().toLowerCase(),
                phone: personalInfo.phone,
                location: personalInfo.location,
                profileImage: personalInfo.profileImage,
                linkedin: personalInfo.linkedin,
                github: personalInfo.github,
                portfolio: personalInfo.portfolio,
            },
            summary: data.summary,
            skills: data.skills,
            education: data.education,
            experience: data.experience,
            projects: data.projects,
            certifications: data.certifications,
            achievements: data.achievements,
            template: data.template,
            targetJobRole: data.targetJobRole,
            targetJobDescription: data.targetJobDescription,
        }

        const resume = await this.mongoResumeRespository.create(resumeData, userId);

        if (!resume) {
            throw new AppError("resume not created", 500)
        }

        return resume;
    }

    async updateResumeProfileImage(userId, resumeId, file) {
        if (!userId) {
            throw new AppError("Authentication required", 401);
        }

        if (!resumeId) {
            throw new AppError("resumeId is required", 401);
        }

        if (!file) {
            throw new AppError("Resume profile image is required", 400);
        }

        const existingResume = await this.mongoResumeRespository.findByIdResume(
            resumeId,
            userId,
        )

        if (!existingResume) {
            throw new AppError("Resume not found or access denied", 404);
        }

        const uploadedImage = await imagekitService.uploadImage(
            file,
            String(userId),
            "resume"
        );

        let updatedResume;

        try {
            updatedResume = await this.mongoResumeRespository.resumeProfileUpadate(
                userId,
                resumeId,
                uploadedImage,
            )

            if (!updatedResume) {
                throw new AppError("Resume not found or access denied", 404)
            }
        } catch (error) {
            try {
                await imagekitService.deleteImage(uploadedImage.fileId);
            } catch (cleanupError) {
                console.error("New resume image cleanup failed", {
                    fileId: uploadedImage.fileId
                })
            }
            throw error;
        }

        const oldFileId = existingResume?.personalInfo?.profileImage?.fileId

        if (oldFileId && oldFileId !== uploadedImage.fileId) {
            try {
                await imagekitService.deleteImage(oldFileId);
            } catch (cleanupError) {
                console.error("Old resume image cleanup failed", {
                    fileId: oldFileId,
                });
            }
        }

        return updatedResume;
    }
}

export default ResumeSevices;