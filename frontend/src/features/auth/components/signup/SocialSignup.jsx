import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'

const SocialSignup = () => {
    return (
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
    )
}

export default SocialSignup
