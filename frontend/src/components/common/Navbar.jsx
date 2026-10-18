"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const { user } = useSelector(store => store.Auth)
    const [mounted, setMounted] = useState(false)
    const userId = user?._id ?? user?.id;

    useEffect(() => {
        setMounted(true)
    }, [])


    return (
        <div className='bg-zinc-600 p-3 w-full flex items-center justify-between'>
            <Link
                href='/'
            >
                Home
            </Link>
            <div className='flex items-center gap-2'>
                <button
                    className=' text-sm text-red-500 cursor-pointer rounded capitalize font-sans font-semibold tracking-tight leading-none'
                >
                    logout
                </button>
                <Link
                    className='bg-blue-500 hover:bg-blue-400 py-3 px-6 rounded capitalize font-sans font-semibold tracking-tight leading-none'
                    href='/auth/login'
                >
                    login
                </Link>
                <Link
                    className='bg-blue-500 hover:bg-blue-400 py-3 px-6 rounded capitalize font-sans font-semibold tracking-tight leading-none'
                    href='/auth/signup'
                >
                    signup
                </Link>
                {mounted && userId ? (
                    <Link
                        className='bg-blue-500 overflow-hidden hover:bg-blue-400 w-11 h-11 rounded-full capitalize font-sans font-semibold tracking-tight leading-none'
                        href={`/auth/profile/${userId}`}
                    >
                        <img
                            className='w-full h-full object-cover  '
                            src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
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
