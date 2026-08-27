import instance from "../../../lib/axios/client"

export const signupApi = async (data) => {
    return await instance.post("/auth/register", data, {
        withCredentials: true
    })
}