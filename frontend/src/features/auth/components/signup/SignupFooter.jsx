import React from 'react'
import { MdOutlineSecurity } from 'react-icons/md'

const SignupFooter = () => {
    return (
        <>
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
        </>
    )
}

export default SignupFooter
