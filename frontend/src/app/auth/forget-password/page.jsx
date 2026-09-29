import React from 'react'
import SignupLeft from '../../../features/auth/components/signup/SignupLeft'
import ForgetPassword from '../../../features/auth/components/forget-Password/ForgetPassword'

const page = () => {
  return (
    <div className='w-full min-h-screen text-white  '>
      <div className='w-full md:flex bg-white overflow-hidden '>
        <SignupLeft />
        <ForgetPassword />
      </div>
    </div>
  )
}

export default page
