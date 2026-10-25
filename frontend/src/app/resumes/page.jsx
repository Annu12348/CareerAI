import React from 'react';
import Link from 'next/link';

const page = () => {
    return (
        <div className='w-full min-h-screen bg-black text-white flex items-center justify-center '>
            <Link href="/resumes/create">
                Resumes
            </Link>
        </div>
    )
}

export default page
