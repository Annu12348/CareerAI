class IResumeRepository {
    async create(data, userId) {
        throw new Error("method not implement");
    }

    async findByIdResume(resumeId, userId) {
        throw new Error("method not implement");
    }

    async resumeProfileUpadate(resumeId, userId, image) {
        throw new Error("method not implement");
    }
}

export default IResumeRepository;