import React from 'react'

const ResumeStats = () => {
    const stats = [
        {
            id: 1,
            title: 'Total Resumes',
            value: '08',
            icon: '📄',
            iconBg: 'bg-sky-100',
            iconColor: 'text-blue-600',
        },
        {
            id: 2,
            title: 'Completed',
            value: '05',
            icon: '✓',
            iconBg: 'bg-emerald-100',
            iconColor: 'text-emerald-600',
        },
        {
            id: 3,
            title: 'Drafts',
            value: '03',
            icon: '✎',
            iconBg: 'bg-purple-100',
            iconColor: 'text-purple-600',
        },
    ]

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat) => (
                <div
                    key={stat.id}
                    className="flex min-h-[80px] items-center gap-3 rounded-lg border border-slate-100 bg-white px-3 py-3 shadow-[0_2px_10px_rgba(15,23,42,0.025)] transition-shadow duration-200 hover:shadow-md sm:gap-4 sm:px-4"
                >
                    {/* Icon */}
                    <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${stat.iconBg} ${stat.iconColor}`}
                    >
                        {stat.id === 1 ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="27"
                                height="27"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <path d="M14 2v6h6" />
                                <path d="M8 13h8" />
                                <path d="M8 17h8" />
                            </svg>
                        ) : stat.id === 2 ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="27"
                                height="27"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="9" />
                                <path d="m8 12 2.5 2.5L16 9" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="27"
                                height="27"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L10 16l-4 1 1-4Z" />
                                <path d="m15 5 3 3" />
                            </svg>
                        )}
                    </div>

                    {/* Stats Information */}
                    <div className="min-w-0">
                        <h3 className="text-2xl font-bold leading-none tracking-tight text-slate-900">
                            {stat.value}
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                            {stat.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ResumeStats