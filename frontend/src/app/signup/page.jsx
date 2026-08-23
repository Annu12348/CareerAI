import React from 'react'
import SignupLeft from '../../components/auth/SignupLeft';
import SignupRight from '../../components/auth/SignupRight';

const page = () => {
    return (
        <div className='w-full min-h-screen bg-black text-white  '>
            <div className='w-full md:flex bg-white overflow-hidden '>
               <SignupLeft />
               <SignupRight />
            </div>
        </div>
    )
}

export default page
