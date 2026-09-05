"use client"

import React, { useState } from 'react'
import { validationLogin } from '../validator/auth.validator';
import { loginApi } from '../services/auth.service';
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/slice/authSlice';

const useLogin = () => {
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const login = async () => {
        try {
            setLoading(true)

            const result = await loginApi(formData);
            dispatch(setUser(result.data.data))
            router.push("/")
        } catch (error) {
            console.error("signup error:", error);

            setError({
                general:
                    error?.response?.data?.message ||
                    "Signup failed. Please try again.",
            })
        } finally {
            setLoading(false)
        }
    }

    const changeHandler = (e) => {
        const { value, name } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

        setError((prev) => ({
            ...prev,
            [name]: "",
            general: ""
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const validationError = validationLogin(formData)

        if (Object.keys(validationError).length > 0) {
            setError(validationError)
            return;
        }

        setError({})

        login()

    }

    return {
        error,
        loading,
        formData,
        changeHandler,
        submitHandler
    }
}

export default useLogin
