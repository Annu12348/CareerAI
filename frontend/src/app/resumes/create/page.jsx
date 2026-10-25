import React from 'react';
import Link from 'next/link';
import SideBar from '../../../components/common/SideBar';
import Navbar from '../../../components/common/Navbar'

const page = () => {
    return (
        <div className='w-full min-h-screen text-white  '>
            <SideBar />
            <div className='w-[84.5%] ml-59.5 bg-zinc-200 h-screen '>
                <Navbar />
                <div className='p-4 mt-1 w-full flex items-center justify-between'>
                    <div className='w-[60%] p-2 shadow rounded bg-white '>
                        <h1 className='text-black'>ceate resume</h1>
                        <p className='text-black'>
                            Build your professional resume and stand out from the crowd. full in your details and create a stunning resume in minutes.
                        </p>
                    </div>
                    <div className='w-[39%] p-2 shadow rounded bg-white '></div>
                </div>
            </div>
        </div>
    )
}

export default page
