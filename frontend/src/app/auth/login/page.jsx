import React from 'react'
import SignupLeft from '../../../features/auth/components/signup/SignupLeft'
import LoginForm from '../../../features/auth/components/login/LoginForm'

const page = () => {
  return (
    <div className='w-full min-h-screen text-white  '>
      <div className='w-full md:flex bg-white overflow-hidden '>
        <SignupLeft />
        <LoginForm />
      </div>
    </div>
  )
}

export default page
