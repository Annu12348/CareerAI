import React from 'react'
import SignupLeft from '../../../features/auth/components/signup/SignupLeft'
import SignupRight from '../../../features/auth/components/signup/SignupForm'

const page = () => {
  return (
    <div className='w-full min-h-screen text-white  '>
      <div className='w-full md:flex bg-white overflow-hidden '>
        <SignupLeft />
        <SignupRight />
      </div>
    </div>
  )
}

export default page
