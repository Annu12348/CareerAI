import React, { useState } from 'react'

const ResumeRight = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [profileImage, setProfileImage] = useState(null)

    const [formData, setFormData] = useState({
        fullName: 'Annu Singh',
        email: 'annu@example.com',
        phone: '+91 98765 43210',
        location: 'Indore, Madhya Pradesh',
        linkedin: 'https://linkedin.com/in/annu-singh',
        github: 'https://github.com/annu-singh',
        portfolio: 'https://annusingh.dev',
        summary:
            'Motivated and detail-oriented Full Stack Developer with a passion for building scalable web applications. Skilled in MERN stack, problem-solving and creating user-friendly solutions. Always eager to learn new technologies and contribute to team success.',
        status: 'Draft',
        visibility: 'Private',
    })

    const steps = [
        'Personal Information',
        'Education',
        'Experience',
        'Skills',
        'Projects',
        'Review',
    ]

    const updateField = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleImageChange = (e) => {
        const file = e.target.files?.[0]

        if (file) {
            setProfileImage(URL.createObjectURL(file))
        }
    }

    const inputClass =
        'mt-1.5 h-[34px] w-full rounded-md border border-blue-100 bg-white px-3 text-[11px] text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'

    const labelClass =
        'block text-[11px] font-semibold text-slate-800'

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 6))
    }

    const previousStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1))
    }

    const renderInput = (label, name, required = false, type = 'text') => (
        <div>
            <label htmlFor={name} className={labelClass}>
                {label}
                {required && <span className="ml-1 text-red-500">*</span>}
            </label>

            <input
                id={name}
                type={type}
                name={name}
                value={formData[name]}
                onChange={updateField}
                required={required}
                className={inputClass}
            />
        </div>
    )

    return (
        <section className="w-full min-w-0 rounded-xl border border-blue-50 bg-white p-3 shadow-sm sm:p-4">

            {/* Page Heading */}
            <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                    Create Resume
                </h1>

                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                    Build your professional resume and stand out from the crowd.
                    Fill in your details and create a stunning resume in minutes.
                </p>
            </div>

            {/* Step Navigation */}
            <div className="mt-4 overflow-x-auto rounded-lg border border-blue-100 p-1.5">
                <div className="flex min-w-[520px] items-center">
                    {steps.map((step, index) => {
                        const stepNumber = index + 1
                        const active = currentStep === stepNumber
                        const completed = currentStep > stepNumber

                        return (
                            <React.Fragment key={step}>
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(stepNumber)}
                                    className={`flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-2 text-[10px] transition ${
                                        active
                                            ? 'bg-blue-600 font-semibold text-white shadow-sm'
                                            : completed
                                              ? 'bg-blue-50 text-blue-700'
                                              : 'text-slate-600 hover:bg-slate-50'
                                    }`}
                                >
                                    <span
                                        className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[10px] font-semibold ${
                                            active
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-slate-100 text-slate-700'
                                        }`}
                                    >
                                        {completed ? '✓' : stepNumber}
                                    </span>

                                    <span className="whitespace-nowrap">
                                        {step}
                                    </span>
                                </button>

                                {index !== steps.length - 1 && (
                                    <div className="mx-1 h-5 w-px shrink-0 bg-slate-100" />
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>

            {/* Form Container */}
            <form
                onSubmit={(e) => {
                    e.preventDefault()

                    if (currentStep < 6) {
                        nextStep()
                    } else {
                        alert('Resume details submitted successfully!')
                    }
                }}
            >
                <div className="mt-3 rounded-lg border border-blue-100">

                    {/* Personal Information */}
                    {currentStep === 1 && (
                        <div>
                            <div className="flex items-start gap-3 border-b border-blue-50 p-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-lg text-white">
                                    ♙
                                </div>

                                <div>
                                    <h2 className="text-sm font-bold text-slate-900">
                                        Personal Information
                                    </h2>

                                    <p className="mt-1 text-[10px] text-slate-500">
                                        Tell us about yourself. This information
                                        will appear at the top of your resume.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-3 p-3">

                                {/* Profile Image */}
                                <div className="flex items-center gap-4">
                                    <div className="relative flex h-[84px] w-[84px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100">
                                        {profileImage ? (
                                            <img
                                                src={profileImage}
                                                alt="Profile"
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <svg
                                                viewBox="0 0 100 100"
                                                className="h-16 w-16 text-slate-300"
                                                fill="currentColor"
                                            >
                                                <circle cx="50" cy="32" r="17" />
                                                <path d="M16 87 C17 62 33 53 50 53 C67 53 83 62 84 87 Z" />
                                            </svg>
                                        )}

                                        <label
                                            htmlFor="profileImage"
                                            className="absolute bottom-0 right-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-blue-600 text-xs text-white"
                                            title="Upload profile photo"
                                        >
                                            📷
                                        </label>
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <label className={labelClass}>
                                            Profile Image
                                        </label>

                                        <p className="mt-1 text-[10px] text-slate-500">
                                            Upload a professional photo (JPG,
                                            PNG, WEBP)
                                        </p>

                                        <input
                                            id="profileImage"
                                            type="file"
                                            accept="image/jpeg,image/png,image/webp"
                                            onChange={handleImageChange}
                                            className="mt-2 block w-full max-w-[330px] cursor-pointer rounded-md border border-blue-100 text-[10px] text-slate-600 file:mr-3 file:cursor-pointer file:border-0 file:border-r file:border-blue-100 file:bg-slate-50 file:px-2 file:py-2 file:text-[10px] file:font-medium"
                                        />

                                        <p className="mt-1 text-[10px] text-slate-400">
                                            Recommended size: 400 × 400px
                                        </p>
                                    </div>
                                </div>

                                {/* Name and Email */}
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {renderInput('Full Name', 'fullName', true)}
                                    {renderInput('Email Address', 'email', true, 'email')}
                                </div>

                                {/* Phone and Location */}
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {renderInput('Phone Number', 'phone')}
                                    {renderInput('Location', 'location')}
                                </div>

                                {/* LinkedIn and Github */}
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {renderInput('LinkedIn URL', 'linkedin', false, 'url')}
                                    {renderInput('GitHub URL', 'github', false, 'url')}
                                </div>

                                {/* Portfolio */}
                                {renderInput('Portfolio URL', 'portfolio', false, 'url')}

                                {/* Professional Summary */}
                                <div>
                                    <label
                                        htmlFor="summary"
                                        className="flex items-center gap-2 text-[11px] font-bold text-slate-800"
                                    >
                                        <span className="text-blue-600">▤</span>
                                        Professional Summary
                                    </label>

                                    <textarea
                                        id="summary"
                                        name="summary"
                                        value={formData.summary}
                                        onChange={updateField}
                                        maxLength={3000}
                                        rows={4}
                                        className="mt-2 w-full resize-y rounded-md border border-blue-100 px-3 py-2 text-[11px] leading-5 text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                                    />

                                    <p className="text-right text-[10px] text-slate-400">
                                        {formData.summary.length}/3000
                                    </p>
                                </div>
                            </div>

                            {/* Status and Visibility */}
                            <div className="border-t border-blue-100 p-3">
                                <h3 className="flex items-center gap-2 text-[11px] font-bold text-slate-800">
                                    <span className="text-blue-600">⚙</span>
                                    Status &amp; Visibility
                                </h3>

                                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="status"
                                            className={labelClass}
                                        >
                                            Resume Status
                                        </label>

                                        <div className="relative">
                                            <select
                                                id="status"
                                                name="status"
                                                value={formData.status}
                                                onChange={updateField}
                                                className={inputClass}
                                            >
                                                <option value="Draft">Draft</option>
                                                <option value="Published">Published</option>
                                                <option value="Archived">Archived</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="visibility"
                                            className={labelClass}
                                        >
                                            Visibility
                                        </label>

                                        <select
                                            id="visibility"
                                            name="visibility"
                                            value={formData.visibility}
                                            onChange={updateField}
                                            className={inputClass}
                                        >
                                            <option value="Private">🔒 Private</option>
                                            <option value="Public">🌐 Public</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Education */}
                    {currentStep === 2 && (
                        <div className="p-4">
                            <h2 className="text-sm font-bold text-slate-900">
                                Education
                            </h2>

                            <p className="mt-1 text-[10px] text-slate-500">
                                Add your educational qualifications.
                            </p>

                            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className={labelClass}>Degree</label>
                                    <input
                                        className={inputClass}
                                        placeholder="B.Tech in Computer Science"
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>University / College</label>
                                    <input
                                        className={inputClass}
                                        placeholder="ABC University"
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>Start Year</label>
                                    <input
                                        type="number"
                                        className={inputClass}
                                        placeholder="2020"
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>End Year</label>
                                    <input
                                        type="number"
                                        className={inputClass}
                                        placeholder="2024"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label className={labelClass}>Description</label>
                                    <textarea
                                        rows={3}
                                        className={`${inputClass} h-auto`}
                                        placeholder="Achievements, grades, relevant coursework..."
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Experience */}
                    {currentStep === 3 && (
                        <div className="p-4">
                            <h2 className="text-sm font-bold text-slate-900">
                                Work Experience
                            </h2>

                            <p className="mt-1 text-[10px] text-slate-500">
                                Highlight your professional experience.
                            </p>

                            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className={labelClass}>Job Title</label>
                                    <input
                                        className={inputClass}
                                        placeholder="Frontend Developer"
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>Company</label>
                                    <input
                                        className={inputClass}
                                        placeholder="Company name"
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>Start Date</label>
                                    <input
                                        type="month"
                                        className={inputClass}
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>End Date</label>
                                    <input
                                        type="month"
                                        className={inputClass}
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label className={labelClass}>Responsibilities</label>
                                    <textarea
                                        rows={4}
                                        className={`${inputClass} h-auto`}
                                        placeholder="Describe your responsibilities and achievements..."
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Skills */}
                    {currentStep === 4 && (
                        <div className="p-4">
                            <h2 className="text-sm font-bold text-slate-900">
                                Skills
                            </h2>

                            <p className="mt-1 text-[10px] text-slate-500">
                                Add the skills that make you stand out.
                            </p>

                            <div className="mt-4">
                                <label className={labelClass}>
                                    Technical Skills
                                </label>

                                <textarea
                                    rows={3}
                                    className={`${inputClass} h-auto`}
                                    placeholder="JavaScript, React, Node.js, Express.js, MongoDB"
                                />
                            </div>

                            <div className="mt-4">
                                <label className={labelClass}>
                                    Soft Skills
                                </label>

                                <textarea
                                    rows={3}
                                    className={`${inputClass} h-auto`}
                                    placeholder="Communication, Teamwork, Problem Solving"
                                />
                            </div>

                            <div className="mt-4">
                                <label className={labelClass}>
                                    Languages
                                </label>

                                <input
                                    className={inputClass}
                                    placeholder="English, Hindi"
                                />
                            </div>
                        </div>
                    )}

                    {/* Projects */}
                    {currentStep === 5 && (
                        <div className="p-4">
                            <h2 className="text-sm font-bold text-slate-900">
                                Projects
                            </h2>

                            <p className="mt-1 text-[10px] text-slate-500">
                                Showcase your best work and personal projects.
                            </p>

                            <div className="mt-4 space-y-4">
                                <div>
                                    <label className={labelClass}>Project Name</label>
                                    <input
                                        className={inputClass}
                                        placeholder="CareerAI Platform"
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>Technologies Used</label>
                                    <input
                                        className={inputClass}
                                        placeholder="React, Node.js, MongoDB"
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>Project URL</label>
                                    <input
                                        type="url"
                                        className={inputClass}
                                        placeholder="https://example.com"
                                    />
                                </div>

                                <div>
                                    <label className={labelClass}>Project Description</label>
                                    <textarea
                                        rows={4}
                                        className={`${inputClass} h-auto`}
                                        placeholder="Describe your project, features and contributions..."
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Review */}
                    {currentStep === 6 && (
                        <div className="p-4">
                            <h2 className="text-sm font-bold text-slate-900">
                                Review Your Resume
                            </h2>

                            <p className="mt-1 text-[10px] text-slate-500">
                                Review your personal information before submitting.
                            </p>

                            <div className="mt-4 rounded-lg border border-blue-100 p-4">
                                {profileImage && (
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="mb-3 h-16 w-16 rounded-full object-cover"
                                    />
                                )}

                                <h3 className="text-lg font-bold text-slate-900">
                                    {formData.fullName || 'Your Name'}
                                </h3>

                                <p className="mt-1 text-xs text-blue-600">
                                    {formData.email}
                                </p>

                                <p className="mt-2 text-xs text-slate-600">
                                    {formData.phone}
                                </p>

                                <p className="mt-1 text-xs text-slate-600">
                                    {formData.location}
                                </p>

                                <h4 className="mt-5 text-sm font-bold text-slate-900">
                                    Professional Summary
                                </h4>

                                <p className="mt-2 whitespace-pre-line text-xs leading-5 text-slate-600">
                                    {formData.summary || 'No summary added yet.'}
                                </p>

                                <div className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-600">
                                    <p>
                                        <strong>Status:</strong> {formData.status}
                                    </p>

                                    <p className="mt-1">
                                        <strong>Visibility:</strong> {formData.visibility}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Bottom Navigation */}
                <div className="mt-3 flex items-center justify-between gap-3">
                    <button
                        type="button"
                        onClick={previousStep}
                        disabled={currentStep === 1}
                        className="rounded-md border border-blue-100 bg-slate-50 px-5 py-2.5 text-[10px] font-medium text-slate-500 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        ← Previous
                    </button>

                    <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-5 py-2.5 text-[10px] font-semibold text-white shadow-sm transition hover:bg-blue-700"
                    >
                        {currentStep === 6
                            ? 'Save Resume ✓'
                            : `Next: ${steps[currentStep]} →`}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ResumeRight