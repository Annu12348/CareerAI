"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Input from "../ui/Input"

const Navbar = () => {
    const { user } = useSelector(store => store.Auth)
    const profileImage = user?.profileImage?.url || "No Image"
    const [mounted, setMounted] = useState(false)
    const userId = user?._id ?? user?.id;

    useEffect(() => {
        setMounted(true)
    }, [])


    return (
        <div className='bg-white shadow py-1 px-3 w-full flex items-center justify-between'>
            <Input
            type='search'
            placeholder='Search job, skill or anything..'
            name='search'
            className='border-2 bg-zinc-100 text-sm outline-none px-2 py-1.5 rounded-lg w-[40%] tracking-tight leading-none  text-black border-zinc-200 '
             />
            <div className='flex items-center gap-2'>
                {mounted && userId ? (
                    <Link
                        className='bg-blue-500 overflow-hidden hover:bg-blue-400 w-11 h-11 rounded-full capitalize font-sans font-semibold tracking-tight leading-none'
                        href={`/auth/profile/${userId}`}
                    >
                        <img
                            className='w-full h-full object-cover  '
                            src={profileImage}
                        />
                    </Link>
                ) : (
                    <div
                        className="w-11 h-11 rounded-full bg-zinc-500"
                        aria-hidden="true"
                    />
                )}
            </div>
        </div>
    )
}

export default Navbar
