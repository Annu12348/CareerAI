import instance from "../../lib/axios/client"

export const createResumeApi = async (data) => {
    return await instance.post("/resumes/create", data, {
        withCredentials: true
    })
}