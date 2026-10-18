"use client"

import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from '../../../../components/common/SideBar'
import { FaCamera } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { PiLink } from "react-icons/pi";
import Link from 'next/link';
import { SiLeetcode } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { FaJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GiProgression } from "react-icons/gi";
import { BiSolidFilePdf } from "react-icons/bi";
import { GrInProgress } from "react-icons/gr";
import { FaBrain } from "react-icons/fa";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { LuClock } from "react-icons/lu";

const page = () => {
  const { user } = useSelector(store => store.Auth)

  const skills = [
    {
      skill: "MERN Stack"
    },
    {
      skill: "Ract"
    },
    {
      skill: "Node"
    },
    {
      skill: "Express"
    },
    {
      skill: "MongoDB"
    },
    {
      skill: "Javascript"
    },
    {
      skill: "Problem Solving"
    },
    {
      skill: "AI/ML"
    }
  ]

  const links = [
    {
      href: "/",
      text: "overview"
    },
    {
      href: "/",
      text: "resumes"
    },
    {
      href: "/",
      text: "skills"
    },
    {
      href: "/",
      text: "experience"
    },
    {
      href: "/",
      text: "education"
    },
    {
      href: "/",
      text: "projects"
    },
    {
      href: "/",
      text: "Achievements"
    }
  ]

  const progressSkills = [
    {
      icon: <FaJs />,
      skill: "javascript",
      level: "Advanced",
    },
    //intermediate, advanced, basic
    {
      icon: <SiExpress />,
      skill: "express.js",
      level: "Basic",
    },
    {
      icon: <FaReact />,
      skill: "react.js",
      level: "Intermediate"
    },
    {
      icon: <RiNextjsFill />,
      skill: "next.js",
      level: "Advanced"
    },
    {
      icon: <FaNode />,
      skill: "node.js",
      level: "Intermediate"
    },
    {
      icon: <RiTailwindCssFill />,
      skill: "tailwind CSS",
      level: "Basic"
    },
    {
      icon: <RiNextjsFill />,
      skill: "Git & GitHub",
      level: "Advanced"
    },
    {
      icon: <FaReact />,
      skill: "mongoDB",
      level: "Intermediate"
    },
  ]

  const resumes = [
    {
      icon: <BiSolidFilePdf />,
      total: 3,
      text: "total resumes"
    },
    {
      icon: <FaBrain />,
      total: 2,
      text: "AI generated"
    },
    {
      icon: <GrInProgress />,
      total: "56%",
      text: "Avg. ATS Score"
    },
    {
      icon: <RiDashboardHorizontalFill />,
      total: 5,
      text: "templates used"
    }
  ]

  return (
    <div className='w-full flex min-h-screen  text-white '>
      <SideBar />
      <div className='w-[84%] min-h-screen ml-60.5 bg-zinc-100 p-3 '>
        <div className='w-full h-[25vh] overflow-hidden rounded-lg relative'>
          <img
            className="w-full h-full object-cover "
            src="https://plus.unsplash.com/premium_photo-1789574559740-110baaf35a3a?w=600&auto=format&fit=crop&q=60"
            alt="Profile banner"
            loading="lazy"
          />
          <div className='w-full h-full absolute top-0 flex p-5 items-center gap-5 '>
            <div className='w-[20vh] h-[20vh] border-3 border-blue-950 overflow-hidden rounded-full  '>
              <img
                className="w-full h-full object-cover "
                alt="Profile banner"
                loading="lazy"
                src="https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              />
              <h1 className='text-xl z-20 absolute bottom-10 left-34 cursor-pointer '>
                <FaCamera />
              </h1>
            </div>
            <div>
              <h1 className='flex items-center gap-1 text-md capitalize mb-2 font-semibold tracking-tight leading-none '>
                {user?.firstName}{" "}{user?.lastName}
                <span className='text-blue-500 text-xl '>
                  <MdVerified />
                </span>
              </h1>
              <p className='text-sm text-zinc-200 tracking-tight leading-none font-light '>
                MERN Stack Developer | AI Enthusiast
              </p>
              <div className='flex items-center mt-4 gap-5  '>
                <h1 className='flex gap-2  items-center '>
                  <span className='text-zinc-200'>
                    <FaLocationDot />
                  </span>
                  <span className='text-sm text-zinc-200'>
                    Indore, Madhya Pradesh, India
                  </span>
                </h1>
                <p className='text-sm bg-black px-4 py-1 opacity-40 tracking-tight leading-none rounded-full '>
                  Available for opportunities
                </p>
              </div>
              <div className='text-zinc-500 text-2xl flex gap-4 mt-2  '>
                <Link
                  href='https://www.linkedin.com/in/annu-singh-458ab9292/?isSelfProfile=true'
                  target='_blank'
                  className='text-blue-500'
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href='https://github.com/Annu12348'
                  target='_blank'
                  className='text-black'
                >
                  <FaGithub />
                </Link>
                <Link
                  href='https://leetcode.com/u/AnnuSingh1234/'
                  target='_blank'
                  className='text-red-500'
                >
                  <SiLeetcode />
                </Link>
                <Link
                  href='https://portfolio-annu-singh-nj6n.onrender.com/'
                  target='_blank'
                  className='text-black'
                >
                  <PiLink />
                </Link>
              </div>
            </div>
            <button className='px-4 absolute top-2 cursor-pointer right-2  py-3 capitalize font-semibold border flex items-center gap-4 border-zinc-400 tracking-tight leading-none rounded '>
              <span className='text-xl'>
                <CiEdit />
              </span>
              edit profile
            </button>
          </div>
        </div>
        <div className="p-2 text-black flex items-center gap-9 capitalize font-semibold text-sm  bg-white shadow rounded mt-1 ">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>



        <div className='flex text-black justify-between '>
          <div className=' mt-5 w-[60%]  ' >
            <div className='w-full bg-white rounded py-4 px-5 shadow '>
              <div className='flex items-center justify-between'>
                <div className='text-black flex items-center gap-4   '>
                  <h1 className='text-black text-2xl  '>
                    <CiUser />
                  </h1>
                  <h1 className='font-bold tracking-tight leading-none '>
                    About Me
                  </h1>
                </div>
                <button className='text-blue-500 capitalize text-sm cursor-pointer flex items-center gap-1 '>
                  <span className='text-xl'>
                    <CiEdit />
                  </span>
                  edit
                </button>
              </div>
              <p className='tracking-tight text-sm mt-3 text-zinc-800 '>
                I am a MERN Stack Developer with 1 year of experience in building web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. I have experience with REST APIs, authentication, Redux, Socket.IO, and AI integration. I am passionate about learning new technologies and building scalable, production-ready applications.
              </p>
              <div className='text-black mt-3 border-b pb-5 border-zinc-200 flex items-center gap-3 '>
                {skills.map((item, index) => (
                  <h1
                    key={index}
                    className='text-blue-900 font-semibold tracking-tight leading-none text-[11px] py-2 rounded-full px-4 bg-zinc-400 '
                  >
                    {item.skill}
                  </h1>
                ))}
              </div>
              <div className='text-black mt-4 flex items-center '>
                <div className='w-[50%] border-r flex flex-col gap-6 border-zinc-300 p-2 '>
                  <div className='flex items-center gap-4 '>
                    <h1 className='text-blue-500 text-2xl rounded-full p-1.5  bg-zinc-200  '>
                      <CgMail />
                    </h1>
                    <div>
                      <h1 className='text-md font-bold tracking-tight leading-none  '>Email</h1>
                      <p className='text-sm mt-1 text-zinc-400 tracking-tight '>annu37752@gmail.com</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <h1 className='text-black text-2xl rounded-full p-1.5  bg-zinc-200  '>
                      <FaPhone />
                    </h1>
                    <div>
                      <h1 className='text-md font-bold tracking-tight leading-none  '>Phone</h1>
                      <p className='text-sm mt-1 tracking-tight text-zinc-400 '>+91 8959732124</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <h1 className='text-blue-500 text-2xl rounded-full p-1.5  bg-zinc-200  '>
                      <FaLocationDot />
                    </h1>
                    <div>
                      <h1 className='text-md font-bold tracking-tight leading-none  '>Location</h1>
                      <p className='text-sm mt-1 text-zinc-400 tracking-tight '>Indore, Madhya Pradesh, India</p>
                    </div>
                  </div>
                </div>

                <div className='w-[50%] flex flex-col gap-6  p-2 pl-7 '>
                  <div className='flex items-center gap-4 '>
                    <h1 className='text-blue-500 text-2xl rounded-full p-1.5  bg-zinc-200  '>
                      <FaLinkedin />
                    </h1>
                    <div>
                      <h1 className='text-md font-bold tracking-tight leading-none  '>Linkedin</h1>
                      <p className='text-sm mt-1 text-zinc-400 tracking-tight '>linkedin.com/in/annu-singh-458ab9292</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <h1 className='text-black text-2xl rounded-full p-1.5  bg-zinc-200  '>
                      <FaGithub />
                    </h1>
                    <div>
                      <h1 className='text-md font-bold tracking-tight leading-none  '>Github</h1>
                      <p className='text-sm text-zinc-400 mt-1 tracking-tight '>github.com/Annu12348</p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4 '>
                    <h1 className='text-blue-500 text-2xl rounded-full p-1.5  bg-zinc-200  '>
                      <PiLink />
                    </h1>
                    <div>
                      <h1 className='text-md font-bold tracking-tight leading-none  '>Portfolio</h1>
                      <p className='text-sm mt-1 text-zinc-400 tracking-tight '>portfolio-annu-singh-nj6n.onrender.com/</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='shadow  mt-2 bg-white rounded py-4 px-5 '>
              <div className='flex items-center justify-between'>
                <div className='text-black flex items-center gap-4   '>
                  <h1 className='text-blue-500 text-2xl  '>
                    <GiSkills />
                  </h1>
                  <h1 className='font-bold tracking-tight leading-none '>
                    Skills
                  </h1>
                </div>
                <button className='text-blue-500 capitalize text-sm cursor-pointer  '>
                  edit
                </button>
              </div>

              <div className='mt-6 w-full flex items-center justify-between flex-wrap gap-4 '>
                {progressSkills.map((progress, index) => (
                  <div key={index} className='flex items-center gap-3 '>
                    <h1 className={`${progress.skill === "javascript" ? "text-amber-300" : progress.skill === "express.js" ? "text-black" : progress.skill === "react.js" ? "text-blue-500" : progress.skill === "next.js" ? "text-black" : progress.skill === "node.js" ? "text-green-700" : progress.skill === "tailwind CSS" ? "text-blue-500" : progress.skill === "Git & GitHub" ? "text-red-500" : progress.skill === "mongoDB" ? "text-green-700" : ""} text-4xl `}>
                      {progress.icon}
                    </h1>
                    <div>
                      <div className='flex items-center justify-between '>
                        <h1 className='text-sm capitalize font-semibold tracking-tight leading-none  '> {progress.skill}</h1>
                        <p className='text-sm capitalize text-zinc-400 tracking-tight leading-none '> {progress.level}</p>
                      </div>
                      <div className='h-1 mt-1.5 rounded-full w-[40vh] overflow-hidden bg-zinc-200 '>
                        <div className={`bg-blue-500 rounded-full ${progress.level === "Basic" ? "w-[30%]" : progress.level === "Intermediate" ? "w-[50%]" : progress.level === "Advanced" ? "w-[80%]" : ""} h-full `}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>









          <div className='w-[39%] mt-2 '>
            <div className='w-full bg-white px-2 py-3 shadow rounded-lg '>
              <div className='flex items-center justify-between'>
                <div className='text-black flex items-center gap-4   '>
                  <h1 className='text-zinc-500 mb-1 text-2xl  '>
                    <GiProgression />
                  </h1>
                  <h1 className='font-bold capitalize text-sm tracking-tight leading-none '>
                    resumes state
                  </h1>
                </div>
                <button className='text-blue-500 capitalize text-sm cursor-pointer  '>
                  view all
                </button>
              </div>
              <div className='w-full mt-2 flex items-center justify-between flex-wrap gap-2 '>
                {resumes.map((resume, index) => (
                  <div key={index} className='w-[49%] flex items-center gap-2 rounded shadow border border-zinc-200 py-3 px-3 '>
                    <h1 className='p-2 bg-zinc-200 rounded-full text-blue-500 text-xl '>
                      {resume.icon}
                    </h1>
                    <div>
                      <p className='text-sm tracking-tight leading-none  '>{resume.total}</p>
                      <h1 className='text-sm tracking-tight leading-none mt-1 capitalize font-semibold '>{resume.text}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>




            <div className='px-2 py-3 shadow rounded-lg w-full mt-2 bg-white '>
              <div className='flex items-center justify-between'>
                <div className='text-black flex items-center gap-4   '>
                  <h1 className='text-zinc-500 mb-1 text-2xl  '>
                    <LuClock />
                  </h1>
                  <h1 className='font-bold capitalize text-sm tracking-tight leading-none '>
                    recent activity
                  </h1>
                </div>
                <button className='text-blue-500 capitalize text-sm cursor-pointer  '>
                  view all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
