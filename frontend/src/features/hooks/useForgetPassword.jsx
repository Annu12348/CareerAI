"use client"
import React, { useState } from 'react'
import { forgetPassword, resetPassword, verifyOtpApi } from '../services/auth.service';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

const useForgetPassword = () => {
    const [page, setPage] = useState(1)
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({})
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")
    const [password, setPassword] = useState({
        newPassword: "",
        confirmPassword: ""
    })

    const forgetPasswordApi = async () => {
        try {
            setLoading(true)
            setError({})
            const result = await forgetPassword(email);
            toast.success(result.data.message)
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

    const verifyotpdApi = async () => {
        try {
            setLoading(true)
            setError({})
            const result = await verifyOtpApi(email, otp);
            toast.success(result.data.message)
            setPage(3)
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

    const resetPasswordApi = async () => {
        try {
            setLoading(true)
            setError({})
            const result = await resetPassword(password);
            toast.success(result.data.message)
            router.push("/auth/login")
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

    const submitHandler1 = (e) => {
        e.preventDefault()
        forgetPasswordApi()
    }

    const submitHandler2 = (e) => {
        e.preventDefault();
        verifyotpdApi()
    }

    const submitHandler3 = (e) => {
        e.preventDefault();
        resetPasswordApi()
    }
    return {
        submitHandler1,
        submitHandler2,
        submitHandler3,

        emailChangeHandler,
        otpChangeHandler,
        passwordChangeHandler,

        otp,
        email,
        password,

        page,
        error,
        loading,
    }
}

export default useForgetPassword
