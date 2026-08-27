import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { validationSignup } from '../validator/auth.validator';
import { signupApi } from '../services/auth.service';
import { setUser } from '../../../redux/slice/authSlice';

const useSignup = () => {
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    useNavigate()
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

    const signup = async () => {
        try {
            setLoading(true);
            const result = await signupApi(formData)
            dispatch(setUser(result.data.data))

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(error)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

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
        changeHandler,
        submitHandler
    }
}

export default useSignup
