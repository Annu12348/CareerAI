
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
} from "react";

import {
  FaBriefcase,
  FaCode,
  FaChessQueen,
} from "react-icons/fa";

import {
  AiFillHome,
  AiOutlineFileJpg,
} from "react-icons/ai";

import {
  IoMdChatbubbles,
  IoMdSettings,
  IoIosLogOut,
} from "react-icons/io";

import { FaUserGroup } from "react-icons/fa6";
import { CiStickyNote } from "react-icons/ci";
import { BsJournalCode } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import {
  HiOutlineMenuAlt2,
  HiOutlineX,
} from "react-icons/hi";

const SidebarContext = createContext(null);

export function useSidebar() {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "useSidebar must be used within a SidebarProvider."
    );
  }

  return context;
}

export function SidebarProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((previous) => !previous);
  };

  return (
    <SidebarContext.Provider
      value={{ collapsed, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

const linksTop = [
  {
    id: "dashboard",
    icon: AiFillHome,
    text: "Dashboard",
    href: "/users/dashboard",
  },
  {
    id: "resumes",
    icon: AiOutlineFileJpg,
    text: "My Resumes",
    href: "/users/resumes",
  },
  {
    id: "ai-chat",
    icon: IoMdChatbubbles,
    text: "AI Chat",
    href: "/users/ai-chat",
  },
  {
    id: "interview-prep",
    icon: FaUserGroup,
    text: "Interview Prep",
    href: "/users/interview-prep",
  },
  {
    id: "code-review",
    icon: FaCode,
    text: "Code Review",
    href: "/users/code-review",
  },
  {
    id: "notes",
    icon: CiStickyNote,
    text: "Notes",
    href: "/users/notes",
  },
  {
    id: "job-recommendations",
    icon: BsJournalCode,
    text: "Job Recommendations",
    href: "/users/job-recommendations",
  },
];

const linksBottom = [
  {
    id: "profile",
    icon: CgProfile,
    text: "Profile",
    href: "/auth/profile",
  },
  {
    id: "settings",
    icon: IoMdSettings,
    text: "Settings",
    href: "/users/settings",
  },
];

function isActiveRoute(pathname, href) {
  if (!pathname || !href) return false;

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

function SidebarLink({
  item,
  pathname,
  onNavigate,
  collapsed,
}) {
  const Icon = item.icon;
  const active = isActiveRoute(pathname, item.href);

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      title={collapsed ? item.text : undefined}
      className={[
        "group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5",
        "text-sm font-medium transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-indigo-400 focus-visible:ring-offset-2",
        "focus-visible:ring-offset-[#10131d]",
        collapsed ? "justify-center" : "",
        active
          ? "bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-400/20"
          : "text-slate-400 hover:bg-white/[0.06] hover:text-white",
      ].join(" ")}
    >
      <Icon
        aria-hidden="true"
        className={[
          "shrink-0 text-xl transition-colors",
          active
            ? "text-indigo-300"
            : "text-slate-400 group-hover:text-white",
        ].join(" ")}
      />

      {!collapsed && (
        <span className="min-w-0 flex-1">
          {item.text}
        </span>
      )}

      {!collapsed && active && (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"
        />
      )}
    </Link>
  );
}

export default function SideBar({
  onLogout,
  onUpgrade,
}) {
  const pathname = usePathname();
  const { collapsed, toggleSidebar } = useSidebar();

  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  function handleLogout() {
    if (typeof onLogout === "function") {
      onLogout();
    }
  }

  function handleUpgrade() {
    if (typeof onUpgrade === "function") {
      onUpgrade();
    }
  }

  return (
    <>
      {/* Mobile menu trigger */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={mobileOpen}
        aria-controls="careerai-sidebar"
        className="fixed left-4 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-[#10131d] text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 lg:hidden"
      >
        <HiOutlineMenuAlt2 size={22} />
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
        />
      )}

      <aside
        id="careerai-sidebar"
        aria-label="CareerAI navigation"
        className={[
          "fixed inset-y-0 left-0 z-50 flex h-dvh flex-col border-r border-white/[0.07] bg-[#10131d] text-white",
          "transition-[width,transform] duration-200 ease-out",
          "w-[min(82vw,280px)]",
          collapsed ? "lg:w-[76px]" : "lg:w-[250px] xl:w-[260px]",
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
      >
        {/* Brand */}
        <div
          className={[
            "flex h-[72px] shrink-0 items-center border-b border-white/[0.07] px-5",
            collapsed ? "lg:justify-center lg:px-2" : "justify-between",
          ].join(" ")}
        >
          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="CareerAI home"
            className="group flex min-w-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 ring-1 ring-inset ring-indigo-400/20">
              <FaBriefcase size={21} aria-hidden="true" />
            </span>

            {!collapsed && (
              <span className="text-xl font-bold leading-none tracking-tight">
                Career
                <span className="text-indigo-400">AI</span>

                <span className="mt-1.5 block text-[10px] font-medium tracking-[0.16em] text-slate-500">
                  YOUR AI CAREER COPILOT
                </span>
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close navigation menu"
            className="rounded-lg p-2 text-slate-400 hover:bg-white/[0.06] hover:text-white lg:hidden"
          >
            <HiOutlineX size={21} />
          </button>
        </div>

        {/* Desktop collapse button */}
        <div className="hidden shrink-0 border-b border-white/[0.07] p-2 lg:block">
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label={
              collapsed ? "Expand sidebar" : "Collapse sidebar"
            }
            aria-expanded={!collapsed}
            className="flex min-h-10 w-full items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
          >
            {collapsed ? (
              <HiOutlineMenuAlt2 size={22} />
            ) : (
              <HiOutlineX size={22} />
            )}
          </button>
        </div>

        {/* Scrollable navigation */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-5 [scrollbar-color:#34394a_transparent] [scrollbar-width:thin]">
          {!collapsed && (
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Workspace
            </p>
          )}

          <nav
            aria-label="Main navigation"
            className="space-y-1"
          >
            {linksTop.map((item) => (
              <SidebarLink
                key={item.id}
                item={item}
                pathname={pathname}
                onNavigate={closeMobileMenu}
                collapsed={collapsed}
              />
            ))}
          </nav>

          <div className="my-5 border-t border-white/[0.08]" />

          {!collapsed && (
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Account
            </p>
          )}

          <nav
            aria-label="Account navigation"
            className="space-y-1"
          >
            {linksBottom.map((item) => (
              <SidebarLink
                key={item.id}
                item={item}
                pathname={pathname}
                onNavigate={closeMobileMenu}
                collapsed={collapsed}
              />
            ))}
          </nav>
        </div>

        {/* Bottom actions */}
        <div className="shrink-0 space-y-4 border-t border-white/[0.07] p-3">
          {!collapsed && (
            <section className="rounded-xl border border-indigo-400/20 bg-gradient-to-br from-indigo-500/15 to-violet-500/[0.06] p-4">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-amber-400/10 text-amber-400">
                <FaChessQueen size={20} aria-hidden="true" />
              </div>

              <h2 className="text-sm font-semibold text-white">
                Upgrade to Pro
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-slate-400">
                Get full access to AI features, premium templates and more.
              </p>

              <button
                type="button"
                onClick={handleUpgrade}
                className="mt-3 inline-flex min-h-10 w-full items-center justify-center rounded-lg bg-indigo-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-indigo-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10131d]"
              >
                Go Pro
              </button>
            </section>
          )}

          {collapsed && (
            <button
              type="button"
              onClick={handleUpgrade}
              title="Upgrade to Pro"
              aria-label="Upgrade to Pro"
              className="flex min-h-10 w-full items-center justify-center rounded-lg text-amber-400 transition hover:bg-white/[0.06]"
            >
              <FaChessQueen size={20} aria-hidden="true" />
            </button>
          )}

          <button
            type="button"
            onClick={handleLogout}
            title={collapsed ? "Logout" : undefined}
            className={[
              "inline-flex min-h-11 w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-rose-300 transition hover:bg-rose-500/10 hover:text-rose-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400",
              collapsed ? "justify-center" : "",
            ].join(" ")}
          >
            <IoIosLogOut
              aria-hidden="true"
              className="shrink-0 text-xl"
            />

            {!collapsed && "Logout"}
          </button>

          {!collapsed && (
            <p className="px-1 text-[10px] text-slate-600">
              CareerAI · Your career, accelerated
            </p>
          )}
        </div>
      </aside>
    </>
  );
}
