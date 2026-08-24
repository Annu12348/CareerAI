import React from 'react'
import SignupLeft from '../../../features/auth/components/signup/SignupLeft'
import SignupForm from '../../../features/auth/components/signup/SignupForm'

const page = () => {
    return (
        <div className='w-full min-h-screen text-white  '>
            <div className='w-full md:flex bg-white overflow-hidden '>
                <SignupLeft />
                <SignupForm />
            </div>
        </div>
    )
}

export default page
