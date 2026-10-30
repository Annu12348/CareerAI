import React from 'react'
import resumePreviewData from '../constants/ResumePreviewData'

const ResumePreview = ({ data = resumePreviewData }) => {
    const {
        personalInfo,
        summary,
        skills,
        languages,
        interests,
        education,
        experience,
        projects,
        certifications,
        achievements,
    } = data

    const SectionHeading = ({ icon, title }) => (
        <h3 className="mb-2 flex items-center gap-2 text-[10px] font-bold text-slate-900 sm:text-[11px]">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-blue-50 text-[10px] text-blue-600">
                {icon}
            </span>

            <span>{title}</span>
        </h3>
    )

    const TimelineItem = ({ children }) => (
        <div className="relative min-w-0 pl-3">
            <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full border-2 border-blue-500 bg-white" />

            {children}
        </div>
    )

    const SidebarItem = ({ icon, children, href }) => (
        <div className="flex min-w-0 items-start gap-1.5 text-[7px] leading-[1.5] sm:text-[8px]">
            <span className="shrink-0 text-[9px] text-white">
                {icon}
            </span>

            {href ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 break-all text-blue-50 hover:text-white"
                >
                    {children}
                </a>
            ) : (
                <span className="min-w-0 break-words text-blue-50">
                    {children}
                </span>
            )}
        </div>
    )

    return (
        <section className="w-full min-w-0 rounded-xl border border-slate-100 bg-white p-3 shadow-sm sm:p-4 xl:w-[40%]">

            {/* Preview Header */}
            <div className="flex items-center justify-between gap-2">
                <h2 className="text-base font-bold tracking-tight text-slate-900">
                    Resume Preview
                </h2>

                <div className="flex shrink-0 items-center gap-1.5">
                    <button
                        type="button"
                        className="flex items-center gap-1 rounded-md border border-blue-100 px-2 py-1.5 text-[9px] font-medium text-slate-600 transition hover:bg-slate-50"
                    >
                        <span className="text-blue-600">▣</span>
                        Desktop
                    </button>

                    <button
                        type="button"
                        className="rounded-md bg-blue-600 px-2.5 py-1.5 text-[9px] font-semibold text-white transition hover:bg-blue-700"
                    >
                        Create Resume
                    </button>
                </div>
            </div>

            <p className="mt-1 text-[10px] leading-4 text-slate-500">
                This is how your resume will look. You can make changes anytime.
            </p>

            <div className="my-3 border-t border-slate-100" />

            {/* Resume Document */}
            <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">

                <div className="grid grid-cols-[34%_66%]">

                    {/* LEFT SIDEBAR */}
                    <aside className="min-w-0 bg-gradient-to-b from-[#09294b] to-[#00172f] px-2 py-4 text-white sm:px-3 sm:py-5">

                        {/* Profile */}
                        <div className="flex flex-col items-center text-center">
                            {personalInfo.profileImage ? (
                                <img
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.fullName}
                                    className="h-12 w-12 rounded-full border-2 border-white object-cover sm:h-16 sm:w-16"
                                />
                            ) : (
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-600 text-lg font-bold sm:h-16 sm:w-16">
                                    {personalInfo.fullName?.charAt(0) || 'U'}
                                </div>
                            )}

                            <h3 className="mt-2 break-words text-[10px] font-bold sm:text-sm">
                                {personalInfo.fullName}
                            </h3>

                            <p className="mt-1 text-[8px] leading-3 text-blue-100 sm:text-[10px]">
                                {personalInfo.designation}
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mt-4 space-y-2">
                            <SidebarItem icon="✉">
                                {personalInfo.email}
                            </SidebarItem>

                            <SidebarItem icon="☎">
                                {personalInfo.phone}
                            </SidebarItem>

                            <SidebarItem icon="♦">
                                {personalInfo.location}
                            </SidebarItem>

                            {personalInfo.linkedin && (
                                <SidebarItem
                                    icon="◉"
                                    href={personalInfo.linkedin}
                                >
                                    {personalInfo.linkedin.replace(/^https?:\/\//, '')}
                                </SidebarItem>
                            )}

                            {personalInfo.github && (
                                <SidebarItem
                                    icon="◉"
                                    href={personalInfo.github}
                                >
                                    {personalInfo.github.replace(/^https?:\/\//, '')}
                                </SidebarItem>
                            )}

                            {personalInfo.portfolio && (
                                <SidebarItem
                                    icon="◎"
                                    href={personalInfo.portfolio}
                                >
                                    {personalInfo.portfolio.replace(/^https?:\/\//, '')}
                                </SidebarItem>
                            )}
                        </div>

                        {/* Skills */}
                        {skills?.length > 0 && (
                            <div className="mt-5 border-t border-white/20 pt-3">
                                <h3 className="mb-2 flex items-center gap-1.5 text-[10px] font-bold">
                                    <span>⚙</span>
                                    Skills
                                </h3>

                                <div className="flex flex-wrap gap-1">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-md bg-[#244b76] px-1.5 py-1 text-[7px] leading-none text-white sm:text-[8px]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Languages */}
                        {languages?.length > 0 && (
                            <div className="mt-5 border-t border-white/20 pt-3">
                                <h3 className="mb-2 flex items-center gap-1.5 text-[10px] font-bold">
                                    <span>♧</span>
                                    Languages
                                </h3>

                                <div className="space-y-1.5">
                                    {languages.map((language) => (
                                        <p
                                            key={language}
                                            className="break-words text-[8px] leading-3 text-blue-50"
                                        >
                                            {language}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Interests */}
                        {interests?.length > 0 && (
                            <div className="mt-5 border-t border-white/20 pt-3">
                                <h3 className="mb-3 flex items-center gap-1.5 text-[10px] font-bold">
                                    <span>♧</span>
                                    Interests
                                </h3>

                                <div className="space-y-2">
                                    {interests.map((interest, index) => (
                                        <div
                                            key={interest}
                                            className="flex items-center gap-1.5 text-[8px] text-blue-50"
                                        >
                                            <span>
                                                {['⌕', '✈', '▤', '◎'][index % 4]}
                                            </span>

                                            <span>{interest}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className="min-w-0 px-2.5 py-4 sm:px-3 sm:py-5">

                        {/* Professional Summary */}
                        {summary && (
                            <section className="border-b border-slate-100 pb-3">
                                <SectionHeading
                                    icon="▣"
                                    title="Professional Summary"
                                />

                                <p className="break-words text-[8px] leading-[1.65] text-slate-600 sm:text-[9px]">
                                    {summary}
                                </p>
                            </section>
                        )}

                        {/* Education */}
                        {education?.length > 0 && (
                            <section className="border-b border-slate-100 py-3">
                                <SectionHeading
                                    icon="▦"
                                    title="Education"
                                />

                                <div className="space-y-3">
                                    {education.map((item) => (
                                        <TimelineItem key={item.id}>
                                            <h4 className="break-words text-[9px] font-bold leading-4 text-slate-900 sm:text-[10px]">
                                                {item.degree}
                                            </h4>

                                            <p className="mt-0.5 break-words text-[8px] text-slate-600">
                                                {item.institution}
                                            </p>

                                            <p className="mt-1 flex flex-wrap items-center gap-1 text-[7px] text-slate-500 sm:text-[8px]">
                                                <span>▣</span>
                                                {item.startYear} - {item.endYear}
                                            </p>
                                        </TimelineItem>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Experience */}
                        {experience?.length > 0 && (
                            <section className="border-b border-slate-100 py-3">
                                <SectionHeading
                                    icon="▣"
                                    title="Experience"
                                />

                                <div className="space-y-3">
                                    {experience.map((item) => (
                                        <TimelineItem key={item.id}>
                                            <h4 className="break-words text-[9px] font-bold text-slate-900 sm:text-[10px]">
                                                {item.designation}
                                            </h4>

                                            <p className="mt-0.5 break-words text-[8px] text-slate-600">
                                                {item.company}
                                            </p>

                                            <p className="mt-1 flex items-center gap-1 text-[7px] text-slate-500 sm:text-[8px]">
                                                <span>▣</span>
                                                {item.startDate} - {item.endDate}
                                            </p>

                                            {item.responsibilities?.length > 0 && (
                                                <ul className="mt-2 list-disc space-y-1 pl-3 text-[7px] leading-[1.6] text-slate-600 sm:text-[8px]">
                                                    {item.responsibilities.map(
                                                        (responsibility, index) => (
                                                            <li key={index}>
                                                                {responsibility}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            )}
                                        </TimelineItem>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Projects */}
                        {projects?.length > 0 && (
                            <section className="border-b border-slate-100 py-3">
                                <SectionHeading
                                    icon="♧"
                                    title="Projects"
                                />

                                <div className="space-y-3">
                                    {projects.map((project) => (
                                        <TimelineItem key={project.id}>
                                            <h4 className="break-words text-[9px] font-bold text-slate-900 sm:text-[10px]">
                                                {project.name}
                                            </h4>

                                            <p className="mt-0.5 break-words text-[8px] text-slate-600">
                                                {project.role}
                                                {project.technologies
                                                    ? ` | ${project.technologies}`
                                                    : ''}
                                            </p>

                                            {project.description?.length > 0 && (
                                                <ul className="mt-2 list-disc space-y-1 pl-3 text-[7px] leading-[1.6] text-slate-600 sm:text-[8px]">
                                                    {project.description.map(
                                                        (description, index) => (
                                                            <li key={index}>
                                                                {description}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            )}

                                            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[7px] text-blue-600 sm:text-[8px]">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="break-all hover:underline"
                                                    >
                                                        ↗ Live Demo
                                                    </a>
                                                )}

                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="break-all hover:underline"
                                                    >
                                                        ◉ GitHub
                                                    </a>
                                                )}
                                            </div>
                                        </TimelineItem>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Certifications */}
                        {certifications?.length > 0 && (
                            <section className="border-b border-slate-100 py-3">
                                <SectionHeading
                                    icon="▣"
                                    title="Certifications"
                                />

                                <div className="space-y-3">
                                    {certifications.map((item) => (
                                        <TimelineItem key={item.id}>
                                            <h4 className="break-words text-[9px] font-bold text-slate-900 sm:text-[10px]">
                                                {item.name}
                                            </h4>

                                            <p className="mt-0.5 text-[8px] text-slate-600">
                                                {item.issuer}
                                            </p>

                                            <p className="mt-1 text-[7px] text-slate-500 sm:text-[8px]">
                                                ▣ {item.date}
                                            </p>
                                        </TimelineItem>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Achievements */}
                        {achievements?.length > 0 && (
                            <section className="pt-3">
                                <SectionHeading
                                    icon="♧"
                                    title="Achievements"
                                />

                                <ul className="list-disc space-y-1 pl-3 text-[7px] leading-[1.6] text-slate-600 sm:text-[8px]">
                                    {achievements.map((achievement, index) => (
                                        <li key={index}>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Resume Footer */}
                        <div className="mt-4 flex items-center justify-center gap-2 text-center text-[7px] italic text-slate-500">
                            <span className="h-px w-4 shrink-0 bg-blue-200" />

                            <span>Build Your Future with AI</span>

                            <span className="h-px w-4 shrink-0 bg-blue-200" />
                        </div>
                    </main>
                </div>
            </div>

            {/* Preview Notice */}
            <div className="mt-3 flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50/60 p-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                    i
                </span>

                <p className="text-[9px] leading-4 text-blue-700">
                    This is a preview. Your resume will be saved as a draft
                    and you can continue editing it later.
                </p>
            </div>
        </section>
    )
}

export default ResumePreview