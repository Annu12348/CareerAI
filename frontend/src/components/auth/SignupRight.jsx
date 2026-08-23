"use client";
import React, { useState } from "react";
import Link from "next/link"; import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { validationSignup } from "../../validator/auth.validator";

const SignupRight = () => {
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validationSignup(formData);

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        setError({});
    };

    return (
        <div className="w-[74%] h-[100vh] p-7 flex items-center justify-center">
            <div className="w-[78%] border-2 border-zinc-100 py-3 px-5 shadow text-black rounded-lg">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl font-semibold tracking-tight">
                            Create your account
                        </h1>
                        <p className="text-sm tracking-tight font-light">
                            Join thousands of learners and developers
                        </p>
                    </div>
                    <p className="text-sm tracking-tight">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-blue-600"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
                <div className="flex items-center mt-5 justify-center gap-10">
                    <button
                        type="button"
                        className="p-2 border flex font-bold rounded-lg border-zinc-300 w-[47%] justify-center items-center gap-5"
                    >
                        <span className="text-3xl">
                            <FcGoogle />
                        </span>
                        Sign up with Google
                    </button>
                    <button
                        type="button"
                        className="p-2 border flex font-bold rounded-lg border-zinc-300 w-[47%] justify-center items-center gap-5"
                    >
                        <span className="text-3xl">
                            <FaGithub />
                        </span>
                        Sign up with GitHub
                    </button>
                </div>
                <div className="w-full mt-6 flex items-center justify-center gap-2">
                    <div className="h-[2px] bg-zinc-200 w-[48%]" />
                    <span className="text-[12px] text-zinc-400">
                        OR
                    </span>
                    <div className="h-[2px] bg-zinc-200 w-[48%]" />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-4"
                >
                    <div>
                        <label
                            htmlFor="firstName"
                            className="text-sm capitalize font-extralight tracking-tight leading-none"
                        >
                            First Name
                        </label>
                        <input
                            className="w-full border border-zinc-300 rounded-md outline-none text-sm tracking-tight leading-none p-3 text-black"
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={changeHandler}
                        />
                        {error.firstName && (
                            <p className="text-red-500 text-xs mt-1">
                                {error.firstName}
                            </p>
                        )}
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="lastName"
                            className="text-sm capitalize font-extralight tracking-tight leading-none"
                        >
                            Last Name
                        </label>
                        <input
                            className="w-full border border-zinc-300 rounded-md outline-none text-sm tracking-tight leading-none p-3 text-black"
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={changeHandler}
                        />
                        {error.lastName && (
                            <p className="text-red-500 text-xs mt-1">
                                {error.lastName}
                            </p>
                        )}
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="email"
                            className="text-sm capitalize font-extralight tracking-tight leading-none"
                        >
                            Email
                        </label>
                        <input
                            className="w-full border border-zinc-300 rounded-md outline-none text-sm tracking-tight leading-none p-3 text-black"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={changeHandler}
                        />
                        {error.email && (
                            <p className="text-red-500 text-xs mt-1">
                                {error.email}
                            </p>
                        )}
                    </div>
                    <div className="mt-3">
                        <label
                            htmlFor="password"
                            className="text-sm capitalize font-extralight tracking-tight leading-none"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            className="w-full border border-zinc-300 rounded-md outline-none text-sm tracking-tight leading-none p-3 text-black"
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={changeHandler}
                        />
                        {error.password && (
                            <p className="text-red-500 text-xs mt-1">
                                {error.password}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full capitalize text-white tracking-tight bg-blue-900 mt-5 p-3 rounded-lg font-semibold"
                    >
                        Create Account
                    </button>
                    <p className="text-center font-semibold text-zinc-400 mt-3 text-[13px]">
                        By creating an account, you agree to our{" "}
                        <span className="text-blue-500">
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-blue-500">
                            Privacy Policy
                        </span>
                    </p>
                    <p className="mt-3 text-center pb-5 flex items-center text-[13px] font-semibold text-zinc-400 justify-center">
                        <span className="text-blue-500 text-xl mr-2">
                            <MdOutlineSecurity />
                        </span>
                        Your data is protected with enterprise-grade security
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignupRight;