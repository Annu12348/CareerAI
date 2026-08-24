import React, { useState } from 'react'
import { validationSignup } from '../validator/auth.validator';

const useSignup = () => {
    const [error, setError] = useState({});
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
            [name]: ""
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const validationError = validationSignup(formData);
        if (Object.keys(validationError).length > 0) {
            setError(validationError);
            return;
        }

        setError({})
        console.log(formData)
    }
    return {
        formData,
        error,
        changeHandler,
        submitHandler
    }
}

export default useSignup
