"use client";
import React from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import SignupHeader from "./SignupHeader";
import SocialSignup from "./SocialSignup";
import AuthDivider from "./AuthDivider";
import SignupFooter from "./SignupFooter";
import useSignup from "../../../hooks/useSignup";
import Label from "../../../../components/ui/Label";


const SignupForm = () => {
    const { formData, error, changeHandler, submitHandler } = useSignup()

    return (
        <div className="w-[74%] h-[100vh] p-7 flex items-center justify-center">
            <div className="w-[78%] border-2 border-zinc-100 py-3 px-5 shadow text-black rounded-lg">
                <SignupHeader
                    textLeft="Create your account"
                    textRight="Already have an account?"
                    text="Sign in"
                    link="/auth/login"
                />
                <SocialSignup />
                <AuthDivider />
                <form
                    onSubmit={submitHandler}
                    className="mt-4"
                >
                    <Label
                        label="First Name"
                        className='text-sm  tracking-tight capitalize '
                    />
                    <Input
                        text="text"
                        placeholder="Enter Your First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                        error={error.firstName}
                        className="w-full p-3 mb-2 border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                    />
                    <Label
                        label="last Name"
                        className='text-sm  tracking-tight capitalize '
                    />
                    <Input
                        text="text"
                        placeholder="Enter Your lsst Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                        error={error.lastName}
                        className="w-full p-3 mb-2 border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                    />
                    <Label
                        label="email"
                        className='text-sm  tracking-tight capitalize '
                    />
                    <Input
                        text="text"
                        placeholder="Enter Your email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        error={error.email}
                        className="w-full p-3 mb-2 border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                    />
                    <Label
                        label="password"
                        className='text-sm  tracking-tight capitalize '
                    />
                    <Input
                        type="password"
                        placeholder="Enter Your password"
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        error={error.password}
                        className="w-full p-3  border rounded-md font-sans tracking-tight leading-none border-zinc-200 text-sm"
                    />
                    <Button text="create account" submit="submit" />
                </form>
                <SignupFooter />
            </div>
        </div>
    );
};

export default SignupForm;