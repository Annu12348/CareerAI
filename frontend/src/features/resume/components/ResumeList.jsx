"use client";

import { SidebarProvider, useSidebar } from "@/components/common/SideBar";
import SideBar from "@/components/common/SideBar";
import Navbar from "@/components/common/Navbar";
import Link from "next/link"
import ResumeStatus from "./ResumeStatus";
import ResumeFilters from "./ResumeFilters";
import ResumeGrid from "./ResumeGrid";
import ResumePagination from "./ResumePegination";

function ResumeListContent() {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen w-full bg-slate-50">
      <SideBar />

      <main
        className={[
          "min-h-screen w-full transition-[margin,width] duration-200",
          "lg:ml-[250px] lg:w-[calc(100%-250px)]",
          "xl:ml-[260px] xl:w-[calc(100%-260px)]",
          collapsed ? "lg:ml-[76px] lg:w-[calc(100%-76px)]" : "",
        ].join(" ")}
      >
        <Navbar />

        <div className="space-y-5 p-4 sm:p-6">

          {/* Page Heading */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                My Resumes
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage all your resumes in one place.
              </p>
            </div>

            <Link
              href="/users/resumes/create"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800"
            >
              <span className="text-xl leading-none">+</span>
              Create Resume
            </Link>
          </div>

          {/* Resume Statistics */}
          <ResumeStatus />

          {/* Search and Filters */}
          <ResumeFilters />
          <ResumeGrid />
          <ResumePagination />

          {/* Resume Cards 
          <ResumeGrid />

          {/* Pagination 
          <ResumePagination />
          */}

        </div>
      </main>
    </div>
  );
}

export default function ResumeList() {
  return (
    <SidebarProvider>
      <ResumeListContent />
    </SidebarProvider>
  );
}