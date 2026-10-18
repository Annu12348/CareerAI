import React from 'react'
import Link from 'next/link'
import { FaBriefcase } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineFileJpg } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { CiStickyNote } from "react-icons/ci";
import { BsJournalCode } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaChessQueen } from "react-icons/fa";

const SideBar = () => {
    const linksTop = [
        {
            icon: <AiFillHome />,
            texts: "Dashboard",
            href: "#Dashboard"
        },
        {
            icon: <AiOutlineFileJpg />,
            texts: "my resumes",
            href: "#my-resumes"
        },
        {
            icon: <IoChatbubbleEllipsesOutline />,
            texts: "AI chat",
            href: "#ai-chat"
        },
        {
            icon: <FaUserGroup />,
            texts: "Interview Prep",
            href: "#Interview-Prep"
        },
        {
            icon: <FaCode />,
            texts: "code review",
            href: "#code-review"
        },
        {
            icon: <CiStickyNote />,
            texts: "Notes",
            href: "#notes"
        },
        {
            icon: <BsJournalCode />,
            texts: "job recommendations",
            href: "#job-recommendations"
        }
    ]

    const linksBottom = [
        {
            icon: <CgProfile />,
            texts: "profile",
            href: "#profile"
        },
        {
            icon: <IoSettings />,
            texts: "settings",
            href: "#settings"
        }
    ]
    return (
        <div className='w-[16%] fixed inset-0 py-3 px-3 h-screen bg-black '>
            <Link
                href="/"
                className='flex items-center gap-3'
            >
                <span className='text-xl mb-1 text-blue-400 '>
                    <FaBriefcase />
                </span>
                <h1 className='text-xl font-bold tracking-tight leading-none'>
                    Career
                    <span className='text-blue-600'>
                        AI
                    </span>
                </h1>
            </Link>
            <div className='mt-5 flex flex-col gap-6 border-b pb-3.5 border-zinc-800 '>
                {linksTop.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className='flex items-center gap-3 text-sm capitalize tracking-tight leading-none '
                    >
                        <span className='text-xl mb-0.5 '>
                            {link.icon}
                        </span>
                        {link.texts}
                    </Link>
                ))}
            </div>
            <div className='mt-3 flex flex-col gap-6 border-zinc-800'>
                {linksBottom.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className='flex items-center gap-3 text-sm capitalize tracking-tight leading-none '
                    >
                        <span className='text-xl mb-0.5 '>
                            {link.icon}
                        </span>
                        {link.texts}
                    </Link>
                ))}
                <button
                    className='bg-red-500 rounded flex items-center justify-center gap-2  p-3 tracking-normal leading-none capitalize cursor-pointer '
                >
                    <span className='text-xl rotate-270 font-bold '>
                        <IoIosLogOut />
                    </span>
                    logout
                </button>
            </div>
            <div className='p-3 border mt-7 rounded border-zinc-500'>
                <h1 className='text-amber-600 tracking-tight leading-none text-xl'>
                    <FaChessQueen />
                </h1>
                <h1 className='text-sm my-1.5 font-semibold '>Upgrade to Pro</h1>
                <p className='text-[12px] my-1.5'>Get full access to all AI features, premium templates and more</p>
                <button className='bg-blue-500 text-sm tracking-tight leading-none w-full rounded p-2'>
                    Go Pro
                </button>
            </div>
        </div>
    )
}

export default SideBar
