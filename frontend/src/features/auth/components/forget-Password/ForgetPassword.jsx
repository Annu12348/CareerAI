"use client"

import React from 'react'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
import Input from '../../../../components/ui/Input';
import Button from '../../../../components/ui/Button';
import useForgetPassword from '../../../hooks/useForgetPassword';

const ForgetPassword = () => {
    const { submitHandler, page, email, emailChangeHandler, otp, otpChangeHandler, password, passwordChangeHandler } = useForgetPassword();
    
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
                        onSubmit={submitHandler}
                    >
                        <Input
                            label="email"
                            placeholder="Enter your email..."
                            type="email"
                            name="email"
                            value={email}
                            onChange={emailChangeHandler}
                        />
                        <Button type="submit" text="sent otp" />
                    </form>
                )}
                {page == 2 && (
                    <form
                        className='mt-4 text-black'
                        onSubmit={submitHandler}
                    >
                        <Input
                            label="OTP"
                            placeholder="Enter your otp..."
                            type="number"
                            name="otp"
                            value={otp}
                            onChange={otpChangeHandler}
                        />
                        <Button type="submit" text="verify otp" />
                    </form>
                )}
                {page == 3 && (
                    <form
                        className='mt-4 text-black'
                        onSubmit={submitHandler}
                    >
                        <Input
                            label="old password"
                            placeholder="Enter your old password..."
                            type="password"
                            name="oldPassword"
                            value={password.oldPassword}
                            onChange={passwordChangeHandler}
                        />

                        <Input
                            label="comfirm password"
                            placeholder="Enter your comfirm password..."
                            type="password"
                            name="confirmPassword"
                            value={password.confirmPassword}
                            onChange={passwordChangeHandler}
                        />
                        <Button type="submit" text="change" />
                    </form>
                )}
            </div>
        </div>
    )
}

export default ForgetPassword
