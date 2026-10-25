"use client";

import React from 'react'
import SocialSignup from '../signup/SocialSignup'
import AuthDivider from '../signup/AuthDivider'
import Input from '../../../../components/ui/Input'
import Button from '../../../../components/ui/Button'
import SignupFooter from '../signup/SignupFooter'
import SignupHeader from '../signup/SignupHeader'
import useLogin from '../../../hooks/useLogin'
import Link from 'next/link';
import Label from '../../../../components/ui/Label';

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
                    <Label
                        label="email"
                        className='text-sm tracking-tight capitalize '
                    />
                    <Input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        error={error.email}
                        className="w-full p-3 mb-2  border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                    />

                    <Label
                        label="password"
                        className='text-sm  tracking-tight capitalize '
                    />
                    <Input
                        type="password"
                        placeholder="Enter Your Password"
                        name='password'
                        value={formData.password}
                        onChange={changeHandler}
                        error={error.password}
                        className="w-full p-3  border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                    />
                    <Link
                        href="/auth/forget-password"
                        className='text-red-500 capitalize tracking-tight leading-none w-full flex mt-5 items-center justify-end '
                    >
                        forget password
                    </Link>
                    <Button
                        text="login"
                        submit="submit"
                        className='mt-4 bg-blue-500 w-full p-3 capitalize rounded-md cursor-pointer hover:bg-blue-600 mb-2 text-white font-semibold '
                    />
                </form>
                <SignupFooter />
            </div>
        </div>
    )
}

export default LoginForm
//10:30 to 