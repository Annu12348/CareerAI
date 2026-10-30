import React, { useState } from 'react'

const ResumeFilters = ({
    searchQuery = '',
    onSearchChange,
    selectedStatus = 'All Status',
    onStatusChange,
    selectedTemplate = 'All Templates',
    onTemplateChange,
    onFilterClick,
}) => {
    const [statusOpen, setStatusOpen] = useState(false)
    const [templateOpen, setTemplateOpen] = useState(false)

    const statusOptions = [
        'All Status',
        'Draft',
        'Completed',
    ]

    const templateOptions = [
        'All Templates',
        'Modern template',
        'Classic template',
        'Professional template',
        'Creative template',
    ]

    const selectClass =
        'flex h-[46px] w-full items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 text-[13px] font-medium text-slate-700 outline-none transition hover:border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100'

    const Dropdown = ({
        label,
        options,
        isOpen,
        setIsOpen,
        onChange,
    }) => (
        <div className="relative min-w-0">
            <button
                type="button"
                className={selectClass}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="truncate">{label}</span>

                <svg
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute left-0 top-full z-30 mt-2 w-full min-w-[160px] overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => {
                                onChange?.(option)
                                setIsOpen(false)
                            }}
                            className={`block w-full px-4 py-2.5 text-left text-xs transition hover:bg-blue-50 hover:text-blue-700 ${
                                label === option
                                    ? 'bg-blue-50 font-semibold text-blue-700'
                                    : 'text-slate-600'
                            }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )

    return (
        <section className="w-full">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_165px_165px_48px] sm:items-center">

                {/* Search Input */}
                <div className="relative min-w-0">
                    <svg
                        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-4-4" />
                    </svg>

                    <input
                        type="search"
                        value={searchQuery}
                        onChange={(event) =>
                            onSearchChange?.(event.target.value)
                        }
                        placeholder="Search resumes by title..."
                        aria-label="Search resumes by title"
                        className="h-[46px] w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-[13px] text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-blue-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {/* Status Dropdown */}
                <Dropdown
                    label={selectedStatus}
                    options={statusOptions}
                    isOpen={statusOpen}
                    setIsOpen={(open) => {
                        setStatusOpen(open)
                        if (open) setTemplateOpen(false)
                    }}
                    onChange={onStatusChange}
                />

                {/* Templates Dropdown */}
                <Dropdown
                    label={selectedTemplate}
                    options={templateOptions}
                    isOpen={templateOpen}
                    setIsOpen={(open) => {
                        setTemplateOpen(open)
                        if (open) setStatusOpen(false)
                    }}
                    onChange={onTemplateChange}
                />

                {/* Additional Filters Button */}
                <button
                    type="button"
                    onClick={onFilterClick}
                    aria-label="More filters"
                    title="More filters"
                    className="flex h-[46px] w-full items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 sm:w-12"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M4 21v-7" />
                        <path d="M4 10V3" />
                        <path d="M12 21v-9" />
                        <path d="M12 8V3" />
                        <path d="M20 21v-5" />
                        <path d="M20 12V3" />
                        <path d="M2 14h4" />
                        <path d="M10 8h4" />
                        <path d="M18 16h4" />
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default ResumeFilters