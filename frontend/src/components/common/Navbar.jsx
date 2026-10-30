
"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FiSearch,
  FiBell,
  FiChevronDown,
  FiUser,
  FiSettings,
  FiLogOut,
  FiCheck,
} from "react-icons/fi";

const DEFAULT_NOTIFICATIONS = [
  {
    id: "welcome",
    title: "Welcome to CareerAI",
    message: "Complete your profile to personalize your experience.",
    time: "Get started",
    unread: true,
    href: "/auth/profile",
  },
  {
    id: "resume",
    title: "Resume tip",
    message: "Keep your resume updated with your latest skills.",
    time: "Career tip",
    unread: true,
    href: "/users/resumes",
  },
  {
    id: "career",
    title: "Explore your career",
    message: "Explore tools to prepare for your next opportunity.",
    time: "Career tip",
    unread: true,
    href: "/users/job-recommendations",
  },
];

function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "U";
}

export default function TopNavbar({
  user = null,
  notifications = DEFAULT_NOTIFICATIONS,
  unreadCount,
  onLogout,
  onNotificationClick,
  onMarkAllRead,
  onSearch,
}) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [localNotifications, setLocalNotifications] =
    useState(notifications);

  const profileRef = useRef(null);
  const notificationsRef = useRef(null);
  const searchRef = useRef(null);

  const displayName = user?.name || user?.fullName || "Your Profile";
  const displayRole = user?.role || "CareerAI Member";
  const avatarUrl = user?.avatar || user?.profileImage || "";
  const email = user?.email || "";

  const computedUnreadCount = localNotifications.filter(
    (notification) => notification.unread
  ).length;

  const badgeCount =
    typeof unreadCount === "number"
      ? Math.max(0, unreadCount)
      : computedUnreadCount;

  useEffect(() => {
    setLocalNotifications(notifications);
  }, [notifications]);

  const closeMenus = useCallback(() => {
    setProfileOpen(false);
    setNotificationsOpen(false);
  }, []);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }

      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setNotificationsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        closeMenus();
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeMenus]);

  useEffect(() => {
    function handleShortcut(event) {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        searchRef.current?.focus();
      }

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  function handleSearchSubmit(event) {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    if (typeof onSearch === "function") {
      onSearch(query);
      return;
    }

    router.push(`/users/search?q=${encodeURIComponent(query)}`);
  }

  function handleMarkAllRead() {
    setLocalNotifications((previous) =>
      previous.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );

    onMarkAllRead?.();
  }

  function handleNotificationClick(notification) {
    setLocalNotifications((previous) =>
      previous.map((item) =>
        item.id === notification.id
          ? { ...item, unread: false }
          : item
      )
    );

    onNotificationClick?.(notification);
    setNotificationsOpen(false);

    if (notification.href) {
      router.push(notification.href);
    }
  }

  async function handleLogout() {
    setProfileOpen(false);

    if (typeof onLogout === "function") {
      await onLogout();
      return;
    }

    // Connect your existing authentication logout flow here.
    router.push("/auth/login");
  }

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="flex h-[72px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        {/* Left: Search only */}
        <form
          onSubmit={handleSearchSubmit}
          role="search"
          className="w-full max-w-[460px]"
        >
          <label htmlFor="careerai-global-search" className="sr-only">
            Search jobs, skills, or anything
          </label>

          <div className="group flex h-11 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 transition focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-500/10">
            <FiSearch
              aria-hidden="true"
              className="shrink-0 text-lg text-slate-400 transition group-focus-within:text-indigo-500"
            />

            <input
              ref={searchRef}
              id="careerai-global-search"
              type="search"
              name="q"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search jobs, skills, or anything..."
              autoComplete="off"
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />

            <kbd className="hidden shrink-0 rounded-md border border-slate-200 bg-white px-1.5 py-1 text-[10px] font-medium text-slate-400 sm:inline-flex">
              Ctrl K
            </kbd>
          </div>
        </form>

        {/* Right: Notifications and profile */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <button
              type="button"
              onClick={() => {
                setNotificationsOpen((previous) => !previous);
                setProfileOpen(false);
              }}
              aria-label={`Notifications, ${badgeCount} unread`}
              aria-expanded={notificationsOpen}
              aria-haspopup="dialog"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <FiBell aria-hidden="true" className="text-xl" />

              {badgeCount > 0 && (
                <span className="absolute right-1 top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full border-2 border-white bg-red-500 px-0.5 text-[9px] font-bold leading-none text-white">
                  {badgeCount > 99 ? "99+" : badgeCount}
                </span>
              )}
            </button>

            {notificationsOpen && (
              <section
                role="dialog"
                aria-label="Notifications"
                className="absolute right-0 top-12 z-50 w-[min(90vw,360px)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10"
              >
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900">
                      Notifications
                    </h2>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {badgeCount} unread
                    </p>
                  </div>

                  {badgeCount > 0 && (
                    <button
                      type="button"
                      onClick={handleMarkAllRead}
                      className="text-xs font-medium text-indigo-600 hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                <div className="max-h-[min(60vh,380px)] overflow-y-auto">
                  {localNotifications.length > 0 ? (
                    localNotifications.map((notification) => (
                      <button
                        key={notification.id}
                        type="button"
                        onClick={() =>
                          handleNotificationClick(notification)
                        }
                        className="flex w-full gap-3 border-b border-slate-100 px-4 py-3 text-left transition last:border-b-0 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
                      >
                        <span
                          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                            notification.unread
                              ? "bg-indigo-500"
                              : "bg-transparent"
                          }`}
                        />

                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-medium text-slate-800">
                            {notification.title}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-slate-500">
                            {notification.message}
                          </span>
                          {notification.time && (
                            <span className="mt-1.5 block text-[10px] text-slate-400">
                              {notification.time}
                            </span>
                          )}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-10 text-center">
                      <FiCheck className="mx-auto text-2xl text-slate-300" />
                      <p className="mt-2 text-sm text-slate-600">
                        You&apos;re all caught up.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          <div className="h-8 w-px bg-slate-200" aria-hidden="true" />

          {/* Profile dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              onClick={() => {
                setProfileOpen((previous) => !previous);
                setNotificationsOpen(false);
              }}
              aria-label="Open profile menu"
              aria-expanded={profileOpen}
              aria-haspopup="menu"
              className="flex max-w-[220px] items-center gap-2 rounded-xl p-1.5 text-left transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:gap-3 sm:pl-2"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200">
                {avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={avatarUrl}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ) : (
                  getInitials(displayName)
                )}
              </span>

              <span className="hidden min-w-0 text-left sm:block">
                <span className="block truncate text-sm font-semibold text-slate-800">
                  {displayName}
                </span>
                <span className="mt-0.5 block truncate text-xs capitalize text-slate-500">
                  {displayRole}
                </span>
              </span>

              <FiChevronDown
                aria-hidden="true"
                className={`hidden shrink-0 text-slate-400 transition-transform sm:block ${
                  profileOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {profileOpen && (
              <div
                role="menu"
                aria-label="Profile options"
                className="absolute right-0 top-12 z-50 w-[min(85vw,260px)] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/10"
              >
                <div className="border-b border-slate-100 px-3 py-3">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {displayName}
                  </p>
                  {email && (
                    <p className="mt-1 truncate text-xs text-slate-500">
                      {email}
                    </p>
                  )}
                </div>

                <Link
                  href="/auth/profile"
                  role="menuitem"
                  onClick={closeMenus}
                  className="mt-2 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <FiUser aria-hidden="true" className="text-base" />
                  My Profile
                </Link>

                <Link
                  href="/users/settings"
                  role="menuitem"
                  onClick={closeMenus}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <FiSettings aria-hidden="true" className="text-base" />
                  Settings
                </Link>

                <div className="my-2 border-t border-slate-100" />

                <button
                  type="button"
                  role="menuitem"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 transition hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                >
                  <FiLogOut aria-hidden="true" className="text-base" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
