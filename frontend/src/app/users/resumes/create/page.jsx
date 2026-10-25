import React from 'react';
import Link from 'next/link';
import { CiDesktop } from "react-icons/ci";
import SideBar from '../../../../components/common/SideBar'
import Navbar from '../../../../components/common/Navbar'
import Button from '../../../../components/ui/Button'

const page = () => {
    return (
        <div className='w-full min-h-screen text-white  '>
            <SideBar />
            <div className='w-[84.5%] ml-59.5 bg-zinc-200 h-screen '>
                <Navbar />
                <div className='p-4 w-full flex items-start justify-between'>
                    <div className='w-[55%] p-3 shadow rounded bg-white '>
                        <h1 className='text-black font-semibold capitalize leading-none mb-2 tracking-tight  '>ceate resume</h1>
                        <p className='text-black text-[13px] tracking-tight leading-none '>
                            Build your professional resume and stand out from the crowd. full in your details and create a stunning resume in minutes.
                        </p>
                    </div>
                    <div className='w-[44%] p-3 shadow rounded bg-white '>
                        <div className='flex items-start justify-between '>
                            <h1 className='text-black font-semibold capitalize leading-none mb-2 tracking-tight  '>
                                resume preview
                            </h1>
                            <div className='flex items-start gap-2 '>
                                <div className='border border-zinc-400 w-fit rounded px-3 py-1 flex items-center justify-between gap-2 '>
                                    <span className='text-black text-xl  '>
                                        <CiDesktop />
                                    </span>
                                    <Button
                                        text="desktop"
                                        className='capitalize text-md tracking-tight leading-none text-black '
                                    />
                                </div>
                                <Button
                                    text="create resume"
                                    className='bg-blue-500 text-[10px] px-2 py-2 capitalize rounded-md cursor-pointer hover:bg-blue-600 mb-2 text-white font-semibold '
                                />
                            </div>
                        </div>
                        <p className='text-black text-[12px] tracking-tight leading-none '>
                            This is how your resume will look. You can make changes anytimes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
