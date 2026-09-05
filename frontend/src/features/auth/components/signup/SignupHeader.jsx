import Link from 'next/link'
import React from 'react'

const SignupHeader = ({ textLeft, textRight, text, link }) => {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-xl font-semibold tracking-tight">
                    {textLeft}
                </h1>
                <p className="text-sm tracking-tight font-light">
                    Join thousands of learners and developers
                </p>
            </div>
            <p className="text-sm tracking-tight">
                {textRight}{" "}
                <Link
                    href={link}
                    className="text-blue-600"
                >
                    {text}
                </Link>
            </p>
        </div>
    )
}

export default SignupHeader
