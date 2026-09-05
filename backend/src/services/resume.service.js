import mongoResumeRepository from "../respositories/implementations/mongoResumeRepository.js";

class ResumeSevices {
    constructor () {
        this.mongoResumeRespository = new mongoResumeRepository()
    }

    async create (data) {
        const resume = await this.mongoResumeRespository.create(data);
        return resume;
    }
}

export default ResumeSevices;