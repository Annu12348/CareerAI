
"use client";

import { SidebarProvider, useSidebar } from "@/components/common/SideBar";
import SideBar from "@/components/common/SideBar";
import Navbar from "@/components/common/Navbar";
import ResumeRight from "./ResumeForm";
import ResumePreview from "./ResumePreview";

function CreateResumeContent() {
  const { collapsed } = useSidebar();

  return (
    <div className="min-h-screen w-full bg-zinc-200">
      <SideBar />

      <main
        className={[
          "min-h-screen w-full bg-zinc-200 transition-[margin,width] duration-200",
          "lg:ml-[250px] lg:w-[calc(100%-250px)]",
          "xl:ml-[260px] xl:w-[calc(100%-260px)]",
          collapsed ? "lg:ml-[76px] lg:w-[calc(100%-76px)]" : "",
        ].join(" ")}
      >
        <Navbar />

        <div className="p-3 ">
          <div className="flex gap-3 ">
            {/* Create Resume Section */}
            <ResumeRight />

            {/* Resume Preview Section */}
            <ResumePreview />
          </div>
        </div>
      </main>
    </div>
  );
}

export default function CreateResume() {
  return (
    <SidebarProvider>
      <CreateResumeContent />
    </SidebarProvider>
  );
}
