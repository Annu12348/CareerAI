import ResumeSevices from "../services/resume.service.js";
import AppError from "../utils/error.js";

class ResumeController {
    constructor() {
        this.ResumeService = new ResumeSevices();
    }

    async create(req, res, next) {
        try {
            const userId = req.id;

            const resume = await this.ResumeService.create(req.body, userId);

            res.status(201).json({
                success: true,
                message: "Resume created successfully",
                data: resume
            })
        } catch (error) {
            next(error)
        }
    }

    async updateResumeProfileImage(req, res, next) {
        try {
            const userId = req.id
            const { resumeId } = req.params;

            const resume = await this.ResumeService.updateResumeProfileImage(
                userId,
                resumeId,
                req.file
            )

            res.status(200).json({
                success: true,
                message: "Resume profile image updated successfully",
                data: resume
            })
        } catch (error) {
            next(error)
        }
    }
}

export default ResumeController;