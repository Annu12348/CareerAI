import instance from "../../../lib/axios/client"

export const signupApi = async (data) => {
    return await instance.post("/auth/register", data, {
        withCredentials: true
    })
}

export const loginApi = async (data) => {
    return await instance.post("/auth/login", data, {
        withCredentials: true
    })
}