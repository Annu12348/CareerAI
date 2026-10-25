import instance from "../../lib/axios/client"

export const signupApi = async (data) => {
    return await instance.post("/users/register", data, {
        withCredentials: true
    })
}

export const loginApi = async (data) => {
    return await instance.post("/users/login", data, {
        withCredentials: true
    })
}

export const forgetPassword = async (email) => {
    return await instance.post("/users/forget-password", {email}, {
        withCredentials: true
    })
}

export const verifyOtpApi = async (email, otp) => {
    return await instance.post("/users/otp-verify", {email, otp}, {
        withCredentials: true
    })
}

export const resetPassword = async (password) => {
    return await instance.post("/users/reset-password", password, {
        withCredentials: true
    })
}
