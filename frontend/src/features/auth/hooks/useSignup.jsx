import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { validationSignup } from '../validator/auth.validator';
import { signupApi } from '../services/auth.service';
import { setUser } from '../../../redux/slice/authSlice';

const useSignup = () => {
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

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

    const signup = async () => {
        try {
            setLoading(true);

            const result = await signupApi(formData)
            dispatch(setUser(result.data.data))
            router.push("/auth/login");
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

    const submitHandler = (e) => {
        e.preventDefault();

        if (loading) return;

        const validationError = validationSignup(formData);

        if (Object.keys(validationError).length > 0) {
            setError(validationError);
            return;
        }

        setError({})
        signup()
        console.log(formData)
    }
    return {
        formData,
        error,
        loading,
        changeHandler,
        submitHandler
    }
}

export default useSignup
