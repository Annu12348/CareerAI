"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa";
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const page = () => {
  const [page, setPage] = useState(1)
  return (
    <div className='w-full h-screen flex items-center justify-center '>
      <div className='py-3 px-4 rounded-lg bg-zinc-300 w-[30%]  ' >
        <div className='flex items-center gap-5 '>
          <Link
            href="/auth/login"
            className='text-xl text-zinc-400  '
          >
            <FaArrowLeft />
          </Link>
          <h1 className='text-md font-semibold tracking-tight leading-none text-red-500 capitalize '>
            forget password
          </h1>
        </div>
        <form className='mt-4'>
          {page == 1 && (
            <>
              <Input
                label="email"
                placeholder="Enter your email..."
                type="email"
                name="email"
              />
              <Button type="submit" text="sent otp" />
            </>
          )}
          {page == 2 && (
            <>
              <Input
                label="OTP"
                placeholder="Enter your otp..."
                type="number"
                name="otp"
              />
              <Button type="submit" text="verify otp" />
            </>
          )}
          {page == 3 && (
            <>
              <Input
                label="old password"
                placeholder="Enter your old password..."
                type="password"
                name="password"
              />

              <Input
                label="comfirm password"
                placeholder="Enter your comfirm password..."
                type="password"
                name="password"
              />
              <Button type="submit" text="change" />
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default page
