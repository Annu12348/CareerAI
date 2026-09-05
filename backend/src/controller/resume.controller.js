import ResumeSevices from "../services/resume.service.js";

class ResumeController {
    constructor () {
        this.ResumeService = new ResumeSevices();
    }

    async create(req, res, next) {
        try {
            const resume = await this.ResumeService.create(req.body);

            res.status(201).json({
                message: "resume success fully created",
                data: resume
            })
        } catch (error) {
            next(error)
        }
    }
}

export default ResumeController;