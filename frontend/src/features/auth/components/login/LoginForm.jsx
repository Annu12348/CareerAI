"use client";

import React from 'react'
import SocialSignup from '../signup/SocialSignup'
import AuthDivider from '../signup/AuthDivider'
import Input from '../../../../components/ui/Input'
import Button from '../../../../components/ui/Button'
import SignupFooter from '../signup/SignupFooter'
import SignupHeader from '../signup/SignupHeader'
import useLogin from '../../hooks/useLogin'

const LoginForm = () => {
    const { error, loading, formData, changeHandler, submitHandler } = useLogin()
    return (
        <div className="w-[74%] h-[100vh] p-7 flex items-center justify-center">
            <div className="w-[78%] border-2 border-zinc-100 py-3 px-5 shadow text-black rounded-lg">
                <SignupHeader
                    textLeft="Welcome Back👍"
                    textRight="Don't have an account"
                    text="Sign up"
                    link="/auth/signup"
                />

                <SocialSignup />
                <AuthDivider />
                <form
                    onSubmit={submitHandler}
                    className="mt-4"
                >

                    <Input
                        label="email"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        error={error.email}
                    />

                    <Input
                        label="password"
                        type="password"
                        placeholder="Enter Your Password"
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        error={error.password}
                    />

                    <Button text="login" submit="submit" />
                </form>
                <SignupFooter />
            </div>
        </div>
    )
}

export default LoginForm
//10:30 to 