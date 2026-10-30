import React from 'react'

const resumes = [
    {
        id: 1,
        title: 'Full Stack Developer Resume',
        template: 'Modern',
        updatedAt: 'Oct 28, 2026',
        status: 'Completed',
        initials: 'FS',
        color: 'blue',
        name: 'Annu Singh',
        role: 'Full Stack Developer',
        skills: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id: 2,
        title: 'Frontend Developer Resume',
        template: 'Professional',
        updatedAt: 'Oct 26, 2026',
        status: 'Completed',
        initials: 'FE',
        color: 'purple',
        name: 'Annu Singh',
        role: 'Frontend Developer',
        skills: ['React', 'JavaScript', 'CSS'],
    },
    {
        id: 3,
        title: 'Backend Developer Resume',
        template: 'Classic',
        updatedAt: 'Oct 25, 2026',
        status: 'Draft',
        initials: 'BE',
        color: 'emerald',
        name: 'Annu Singh',
        role: 'Backend Developer',
        skills: ['Node.js', 'Express', 'SQL'],
    },
    {
        id: 4,
        title: 'MERN Stack Developer',
        template: 'Modern',
        updatedAt: 'Oct 22, 2026',
        status: 'Completed',
        initials: 'ME',
        color: 'orange',
        name: 'Annu Singh',
        role: 'MERN Stack Developer',
        skills: ['MongoDB', 'Express', 'React'],
    },
    {
        id: 5,
        title: 'Software Engineer Resume',
        template: 'Professional',
        updatedAt: 'Oct 20, 2026',
        status: 'Draft',
        initials: 'SE',
        color: 'pink',
        name: 'Annu Singh',
        role: 'Software Engineer',
        skills: ['JavaScript', 'Git', 'DSA'],
    },
    {
        id: 6,
        title: 'React Developer Resume',
        template: 'Creative',
        updatedAt: 'Oct 18, 2026',
        status: 'Completed',
        initials: 'RD',
        color: 'cyan',
        name: 'Annu Singh',
        role: 'React Developer',
        skills: ['React', 'Redux', 'Tailwind'],
    },
]

const colorStyles = {
    blue: {
        avatar: 'bg-blue-100 text-blue-700',
        accent: 'bg-blue-600',
        light: 'bg-blue-50',
    },
    purple: {
        avatar: 'bg-purple-100 text-purple-700',
        accent: 'bg-purple-600',
        light: 'bg-purple-50',
    },
    emerald: {
        avatar: 'bg-emerald-100 text-emerald-700',
        accent: 'bg-emerald-600',
        light: 'bg-emerald-50',
    },
    orange: {
        avatar: 'bg-orange-100 text-orange-700',
        accent: 'bg-orange-500',
        light: 'bg-orange-50',
    },
    pink: {
        avatar: 'bg-pink-100 text-pink-700',
        accent: 'bg-pink-600',
        light: 'bg-pink-50',
    },
    cyan: {
        avatar: 'bg-cyan-100 text-cyan-700',
        accent: 'bg-cyan-600',
        light: 'bg-cyan-50',
    },
}

const ResumeDocumentPreview = ({ resume, styles }) => (
    <div className="relative h-[190px] overflow-hidden bg-slate-100 px-5 pt-4">
        {/* Resume paper */}
        <div className="mx-auto flex h-[230px] max-w-[260px] overflow-hidden rounded-t-sm border border-slate-200 bg-white shadow-md transition-transform duration-300 group-hover:-translate-y-1">
            {/* Document sidebar */}
            <div className={`w-[31%] shrink-0 ${styles.light} p-2`}>
                <div
                    className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[8px] font-bold ${styles.avatar}`}
                >
                    AS
                </div>

                <div className={`mx-auto mt-2 h-1 w-12 rounded ${styles.accent}`} />

                <div className="mt-3 space-y-1.5">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-1 rounded bg-slate-200"
                            style={{ width: `${65 + (index % 3) * 10}%` }}
                        />
                    ))}
                </div>

                <div className={`mt-4 h-1 w-10 rounded ${styles.accent}`} />

                <div className="mt-2 space-y-1.5">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-1 rounded bg-slate-200"
                            style={{ width: `${60 + (index % 2) * 20}%` }}
                        />
                    ))}
                </div>
            </div>

            {/* Document content */}
            <div className="min-w-0 flex-1 p-2.5">
                <h4 className="truncate text-[9px] font-bold text-slate-800">
                    {resume.name}
                </h4>

                <p className="mt-1 truncate text-[6px] text-slate-500">
                    {resume.role}
                </p>

                <div className={`mt-2 h-1 w-12 rounded ${styles.accent}`} />

                <div className="mt-2 space-y-1.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-1 rounded bg-slate-200"
                            style={{ width: `${70 + (index % 3) * 10}%` }}
                        />
                    ))}
                </div>

                <div className={`mt-3 h-1 w-10 rounded ${styles.accent}`} />

                <div className="mt-2 space-y-1.5">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-1 rounded bg-slate-200"
                            style={{ width: `${65 + (index % 2) * 15}%` }}
                        />
                    ))}
                </div>

                <div className={`mt-3 h-1 w-12 rounded ${styles.accent}`} />

                <div className="mt-2 space-y-1.5">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="h-1 rounded bg-slate-200"
                            style={{ width: `${60 + (index % 2) * 20}%` }}
                        />
                    ))}
                </div>
            </div>
        </div>

        {/* Template label */}
        <span className="absolute bottom-3 right-3 rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-600 shadow-sm">
            {resume.template}
        </span>
    </div>
)

const ResumeGrid = ({
    data = resumes,
    onPreview,
    onEdit,
    onDownload,
    onDelete,
}) => {
    if (!data.length) {
        return (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
                    ▤
                </div>

                <h3 className="mt-4 text-base font-semibold text-slate-900">
                    No resumes found
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    Try changing your search or filters.
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3">
            {data.map((resume) => {
                const styles = colorStyles[resume.color] || colorStyles.blue
                const isCompleted = resume.status === 'Completed'

                return (
                    <article
                        key={resume.id}
                        className="group min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                    >
                        {/* Resume preview */}
                        <ResumeDocumentPreview
                            resume={resume}
                            styles={styles}
                        />

                        {/* Card information */}
                        <div className="p-4">
                            <div className="flex items-start justify-between gap-2">
                                <div className="min-w-0">
                                    <h3 className="truncate text-sm font-semibold text-slate-900">
                                        {resume.title}
                                    </h3>

                                    <p className="mt-1 text-xs text-slate-500">
                                        Updated {resume.updatedAt}
                                    </p>
                                </div>

                                <span
                                    className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[10px] font-medium ${
                                        isCompleted
                                            ? 'bg-emerald-50 text-emerald-700'
                                            : 'bg-amber-50 text-amber-700'
                                    }`}
                                >
                                    <span
                                        className={`h-1.5 w-1.5 rounded-full ${
                                            isCompleted
                                                ? 'bg-emerald-500'
                                                : 'bg-amber-500'
                                        }`}
                                    />

                                    {resume.status}
                                </span>
                            </div>

                            {/* Skills */}
                            <div className="mt-3 flex flex-wrap gap-1.5">
                                {resume.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
                                <button
                                    type="button"
                                    onClick={() => onPreview?.(resume)}
                                    className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                    >
                                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                    Preview
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onEdit?.(resume)}
                                    className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-blue-600 text-xs font-medium text-white transition hover:bg-blue-700"
                                >
                                    <svg
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="m16 4 4 4L8 20H4v-4Z" />
                                        <path d="m14 6 4 4" />
                                    </svg>
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onDownload?.(resume)}
                                    className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <path d="m7 10 5 5 5-5" />
                                        <path d="M12 15V3" />
                                    </svg>
                                    Download
                                </button>

                                <button
                                    type="button"
                                    onClick={() => onDelete?.(resume)}
                                    className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-red-100 text-xs font-medium text-red-600 transition hover:bg-red-50"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                    >
                                        <path d="M3 6h18" />
                                        <path d="M8 6V4h8v2" />
                                        <path d="m19 6-1 14H6L5 6" />
                                        <path d="M10 11v5M14 11v5" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default ResumeGrid