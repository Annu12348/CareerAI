import instance from "../../lib/axios/client"

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

export const forgetPassword = async (email) => {
    return await instance.post("/auth/forget-password", {email}, {
        withCredentials: true
    })
}

export const verifyOtpApi = async (email, otp) => {
    return await instance.post("/auth/otp-verify", {email, otp}, {
        withCredentials: true
    })
}

export const resetPassword = async (password) => {
    return await instance.post("/auth/reset-password", password, {
        withCredentials: true
    })
}
