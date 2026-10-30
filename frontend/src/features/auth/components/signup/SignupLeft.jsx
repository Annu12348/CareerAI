
{/*import Image from "next/image";
import {
  MdAirplanemodeActive,
  MdAutoAwesome,
  MdOutlineWorkOutline,
} from "react-icons/md";
import {
  FaCompass,
  FaFileAlt,
  FaMicrophone,
  FaSearch,
} from "react-icons/fa";

const features = [
  {
    icon: FaFileAlt,
    title: "AI Resume Builder",
    description: "Create professional ATS-friendly resumes.",
  },
  {
    icon: FaMicrophone,
    title: "AI Interview Practice",
    description: "Practice interviews with AI assistance.",
  },
  {
    icon: MdAutoAwesome,
    title: "AI Roadmap Generator",
    description: "Build personalized learning roadmaps.",
  },
  {
    icon: FaSearch,
    title: "AI Code Reviewer",
    description: "Improve code quality and development skills.",
  },
  {
    icon: FaCompass,
    title: "AI Career Guidance",
    description: "Get guidance for your career journey.",
  },
];

export default function SignupLeft() {
  return (
    <aside className="relative hidden min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 px-8 py-10 text-white md:flex md:w-[40%] md:flex-col lg:px-12">
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative z-10 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-cyan-300 ring-1 ring-white/15">
          <MdAirplanemodeActive />
        </span>

        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            CareerAI
          </h1>
          <p className="text-xs tracking-wider text-blue-200">
            AI CAREER COPILOT
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-16 max-w-lg">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/10 px-4 py-2 text-xs font-medium text-cyan-200">
          <MdAutoAwesome />
          Your career journey starts here
        </span>

        <h2 className="mt-6 text-3xl font-bold leading-tight lg:text-4xl">
          Your AI-Powered
          <span className="block text-cyan-300">
            Career Companion
          </span>
        </h2>

        <p className="mt-5 max-w-md text-sm leading-7 text-blue-100/80 lg:text-base">
          Build better resumes, prepare for interviews, improve
          your skills and move closer to your dream career.
        </p>
      </div>

      <div className="relative z-10 mt-12 space-y-6">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-xl text-cyan-300">
                <Icon />
              </div>

              <div>
                <h3 className="text-sm font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs text-blue-200/80">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-between gap-4 pt-10">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-blue-100">
            <MdOutlineWorkOutline className="text-cyan-300" />
            Build your dream career
          </p>
          <p className="mt-2 max-w-xs text-xs leading-5 text-blue-200/70">
            One platform for your professional growth.
          </p>
        </div>

        <div className="relative h-28 w-28 shrink-0 lg:h-36 lg:w-36">
          <Image
            src="/download.png"
            alt="CareerAI assistant illustration"
            fill
            sizes="(max-width: 1024px) 112px, 144px"
            className="object-contain"
            priority={false}
          />
        </div>
      </div>
    </aside>
  );
*/}


import React from 'react'
import Image from "next/image";
import {
  MdAirplanemodeActive,
  MdAutoAwesome,
  MdOutlineWorkOutline,
} from "react-icons/md";
import {
  FaCompass,
  FaFileAlt,
  FaMicrophone,
  FaSearch,
} from "react-icons/fa";

const SignupLeft = () => {

  const features = [
    {
      icon: FaFileAlt,
      title: "AI Resume Builder",
      description: "Create professional ATS-friendly resumes.",
    },
    {
      icon: FaMicrophone,
      title: "AI Interview Practice",
      description: "Practice interviews with AI assistance.",
    },
    {
      icon: MdAutoAwesome,
      title: "AI Roadmap Generator",
      description: "Build personalized learning roadmaps.",
    },
    {
      icon: FaSearch,
      title: "AI Code Reviewer",
      description: "Improve code quality and development skills.",
    },
    {
      icon: FaCompass,
      title: "AI Career Guidance",
      description: "Get guidance for your career journey.",
    },
  ];

  return (
    <aside className="relative hidden h-screen w-full overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 px-8 py-5 text-white md:flex md:w-[30%] md:flex-col lg:px-7">
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"></div>
      <div className="relative z-10 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-2xl text-cyan-300 ring-1 ring-white/15">
          <MdAirplanemodeActive />
        </span>
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            CareerAI
          </h1>
          <p className="text-xs capitalize tracking-wider text-blue-200">
            AI Career Copilot
          </p>
        </div>
      </div>

      <div className="relative z-10 mt-8 max-w-lg">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-white/10 px-4 py-2 text-xs font-medium text-cyan-200">
          <MdAutoAwesome />
          Your career journey starts here
        </span>

        <h2 className="mt-3 tracking-tight text-3xl font-bold leading-tight lg:text-4xl">
          Your AI-Powered
          <span className="block text-cyan-300">
            Career Companion
          </span>
        </h2>

        <p className="mt-1  max-w-md text-sm leading-7 text-blue-100/80 lg:text-base">
          Build better resumes, prepare for interviews, improve
          your skills and move closer to your dream career.
        </p>
      </div>

      <div className="relative z-10 mt-4 space-y-5">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div key={feature.title} className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-xl text-cyan-300">
                <Icon />
              </div>

              <div>
                <h3 className="text-sm font-semibold">
                  {feature.title}
                </h3>
                <p className="mt-1 text-xs text-blue-200/80">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-7 ">
        <div>
          <p className="flex items-center tracking-tight leading-none gap-2 text-sm font-semibold text-blue-100">
            <MdOutlineWorkOutline className="text-cyan-300" />
            Build your dream career
          </p>
          <p className="mt-2 max-w-xs tracking-tight leading-none text-xs leading-5 text-blue-200/70">
            One platform for your professional growth.
          </p>
        </div>
      </div>

    </aside>
  )
}

export default SignupLeft
