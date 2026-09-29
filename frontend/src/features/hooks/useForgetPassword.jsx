"use client"
import React, { useState } from 'react'
import { forgetPassword } from '../services/auth.service';

const useForgetPassword = () => {
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({})
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [password, setPassword] = useState({
        oldPassword: "",
        confirmPassword: ""
    })

    const forgetPasswordApi = async () => {
        try {
            setLoading(true)
            setError({})
            const result = await forgetPassword(email);
            console.log(result.data)
            setPage(2)
        } catch (error) {
            console.error("forget-password email error:", error)

            setError({
                general:
                    error?.response?.data?.message ||
                    "forget-password email failed. Please try again.",
            })
        } finally {
            setLoading(false)
        }
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const otpChangeHandler = (e) => {
        setOtp(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        const { name, value } = e.target;

        setPassword(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()

        forgetPasswordApi()

        setEmail("")
        setOtp("")
        setPassword({
            oldPassword: "",
            confirmPassword: ""
        })
    }
    return {
        submitHandler,
        page,
        email,
        emailChangeHandler,
        otp,
        otpChangeHandler,
        password,
        passwordChangeHandler,
        loading,
        error
    }
}

export default useForgetPassword
