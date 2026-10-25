"use client"

import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
import Input from '../../../../components/ui/Input';
import Button from '../../../../components/ui/Button';
import useForgetPassword from '../../../hooks/useForgetPassword';
import Label from '../../../../components/ui/Label';

const ForgetPassword = () => {
    const {
        submitHandler1,
        submitHandler2,
        submitHandler3,

        email,
        otp,
        password,

        emailChangeHandler,
        otpChangeHandler,
        passwordChangeHandler,

        page
    } = useForgetPassword();

    return (
        <div className="w-[74%] h-screen p-7 flex items-center justify-center">
            <div className='py-3 px-4 rounded-lg bg-zinc-300 w-[60%]  ' >
                <div className='flex items-center gap-5 '>
                    <Link
                        href="/auth/login"
                        className='text-xl text-zinc-400  '
                    >
                        <FaArrowLeft />
                    </Link>
                    <h1 className='text-md font-semibold tracking-tight leading-none text-red-500 capitalize '>
                        forget password
                    </h1>
                </div>
                {page == 1 && (
                    <form
                        className='mt-4 text-black'
                        onSubmit={submitHandler1}
                    >
                        <Label
                            label="email"
                            className='text-sm  tracking-tight capitalize '
                        />
                        <Input
                            placeholder="Enter your email..."
                            type="email"
                            name="email"
                            value={email}
                            onChange={emailChangeHandler}
                            className="w-full p-3 border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                        />
                        <Button
                            type="submit"
                            text="sent otp"
                            className='mt-4 bg-blue-500 w-full p-3 capitalize rounded-md cursor-pointer hover:bg-blue-600 mb-2 text-white font-semibold '
                        />
                    </form>
                )}
                {page == 2 && (
                    <form
                        className='mt-4 text-black'
                        onSubmit={submitHandler2}
                    >
                        <Label
                            label="otp"
                            className='text-sm  tracking-tight capitalize '
                        />
                        <Input
                            placeholder="Enter your otp..."
                            type="text"
                            name="otp"
                            value={otp}
                            onChange={otpChangeHandler}
                            className="w-full p-3 border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                        />
                        <Button
                            type="submit"
                            text="verify otp"
                            className='mt-4 bg-blue-500 w-full p-3 capitalize rounded-md cursor-pointer hover:bg-blue-600 mb-2 text-white font-semibold '
                        />
                    </form>
                )}
                {page == 3 && (
                    <form
                        className='mt-4 text-black'
                        onSubmit={submitHandler3}
                    >
                        <Label
                            label="new password"
                            className='text-sm  tracking-tight capitalize '
                        />
                        <Input
                            placeholder="Enter your new password..."
                            type="password"
                            name="newPassword"
                            value={password.newPassword}
                            onChange={passwordChangeHandler}
                            className="w-full p-3 mb-2 border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                        />
                        <Label
                            label="comfirm password"
                            className='text-sm  tracking-tight capitalize '
                        />
                        <Input
                            label="comfirm password"
                            placeholder="Enter your comfirm password..."
                            type="password"
                            name="confirmPassword"
                            value={password.confirmPassword}
                            onChange={passwordChangeHandler}
                            className="w-full p-3 border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                        />
                        <Button
                            type="submit"
                            text="change"
                            className='mt-4 bg-blue-500 w-full p-3 capitalize rounded-md cursor-pointer hover:bg-blue-600 mb-2 text-white font-semibold '
                        />
                    </form>
                )}
            </div>
        </div>
    )
}

export default ForgetPassword
