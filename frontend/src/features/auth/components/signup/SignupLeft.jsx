import React from 'react'
import { MdAirplanemodeActive } from "react-icons/md";
import { FaCompass, FaFileAlt, FaMagic, FaMicrophone, FaSearch } from "react-icons/fa";

const SignupLeft = () => {
    return (
        <div className='hidden md:block pt-3 bg-blue-800 w-[26%] flex items-start justify-center flex-col  '>
            <div className='flex px-5 items-center gap-2'>
                <span className='text-3xl rotate-50 text-cyan-300 mb-1 '>
                    <MdAirplanemodeActive />
                </span>
                <h1 className='text-2xl font-semibold tracking-tight leading-none '>
                    AI Career Copilot
                </h1>
            </div>
            <div className='mt-6 px-5'>
                <h1 className='text-2xl capitalize w-[70%] tracking-tight font-semibold '>
                    your AI-Powered Career Companion
                </h1>
                <p className='text-sm font-light mt-4 w-[75.4%] '>
                    Get AI guidance for resumes, inherviews, roadmaps, and skills to land your dream job faster.
                </p>
            </div>
            <div className='mt-7 px-5 flex gap-5 items-center  '>
                <span className='text-xl text-zinc-400'><FaFileAlt /></span>
                <div>
                    <h1 className='text-md capitalize tracking-tight font-semibold '>aI resume builder</h1>
                    <h1 className='text-sm text-zinc-300 tracking-tight'>Create ATS-friendly resums</h1>
                </div>
            </div>
            <div className='mt-3 px-5 flex gap-5 items-center  '>
                <span className='text-xl text-zinc-400'><FaMicrophone /></span>
                <div>
                    <h1 className='text-md capitalize tracking-tight font-semibold '>aI interview practice</h1>
                    <h1 className='text-sm text-zinc-300 tracking-tight'>real-time AI mock interview</h1>
                </div>
            </div>
            <div className='mt-3 px-5 flex gap-5 items-center  '>
                <span className='text-xl text-zinc-400'><FaMagic /></span>
                <div>
                    <h1 className='text-md capitalize tracking-tight font-semibold '>aI roadmap generator</h1>
                    <h1 className='text-sm text-zinc-300 tracking-tight'>Personalized learning paths</h1>
                </div>
            </div>
            <div className='mt-3 px-5 flex gap-5 items-center  '>
                <span className='text-xl text-zinc-400'><FaSearch /></span>
                <div>
                    <h1 className='text-md capitalize tracking-tight font-semibold '>aI code reviewer</h1>
                    <h1 className='text-sm text-zinc-300 tracking-tight'>improve your code quality</h1>
                </div>
            </div>
            <div className='mt-3 px-5 flex gap-5 items-center  '>
                <span className='text-xl text-zinc-400'><FaCompass /></span>
                <div>
                    <h1 className='text-md capitalize tracking-tight font-semibold '>aI career guidance</h1>
                    <h1 className='text-sm text-zinc-300 tracking-tight'>Get expert AI career advice</h1>
                </div>
            </div>
            <div className='w-full h-[27.93vh] '>
                <img
                    className='w-full h-full object-cover  '
                    src='/download.png'
                    alt='robote images'
                />
            </div>
        </div>
    )
}

export default SignupLeft
