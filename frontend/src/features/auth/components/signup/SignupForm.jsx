"use client";
import React from "react";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import SignupHeader from "./SignupHeader";
import SocialSignup from "./SocialSignup";
import AuthDivider from "./AuthDivider";
import SignupFooter from "./SignupFooter";
import useSignup from "../../hooks/useSignup";


const SignupRight = () => {
    const { formData, error, changeHandler, submitHandler } = useSignup()
    console.log(error)

    return (
        <div className="w-[74%] h-[100vh] p-7 flex items-center justify-center">
            <div className="w-[78%] border-2 border-zinc-100 py-3 px-5 shadow text-black rounded-lg">
                <SignupHeader />
                <SocialSignup />
                <AuthDivider />
                <form
                    onSubmit={submitHandler}
                    className="mt-4"
                >
                    <Input
                        label='First Name'
                        text="text"
                        placeholder="Enter Your First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}
                        error={error.firstName}
                    />
                    <Input
                        label='last Name'
                        text="text"
                        placeholder="Enter Your lsst Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                        error={error.lastName}
                    />
                    <Input
                        label='email'
                        text="text"
                        placeholder="Enter Your email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        error={error.email}
                    />
                    <Input
                        label='password'
                        text="password"
                        placeholder="Enter Your password"
                        name="password"
                        value={formData.password}
                        onChange={changeHandler}
                        error={error.password}
                    />
                    <Button />
                </form>
                <SignupFooter />
            </div>
        </div>
    );
};

export default SignupRight;