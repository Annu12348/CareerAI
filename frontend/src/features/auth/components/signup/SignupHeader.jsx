import Link from 'next/link'
import React from 'react'

const SignupHeader = () => {
    return (
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
    )
}

export default SignupHeader
