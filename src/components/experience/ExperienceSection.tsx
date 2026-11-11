import type { ReactNode } from 'react'
import Line from '../ui/Line.tsx'

type ExperienceSectionProps = {
    company: string
    role: string
    period: string
    description: ReactNode
    children?: ReactNode
    isLatest?: boolean
}

export default function ExperienceSection({
    company,
    role,
    period,
    description,
    children,
    isLatest = false,
}: ExperienceSectionProps) {
    return (
        <article>
            <div className="mb-5 flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="min-w-0">
                    <h3 className="text-2xl sm:text-3xl">{company}</h3>
                    <p className="text-muted-text">{role}</p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2 text-sm sm:text-base">
                    <span>{period}</span>
                    {isLatest && (
                        <span className="bg-background rounded-md py-1 px-3">
                            Latest
                        </span>
                    )}
                </div>
            </div>
            <Line />
            <p className="text-secondary-text leading-relaxed">{description}</p>
            {children != null && (
                <div className="mt-6 sm:mt-10">{children}</div>
            )}
        </article>
    )
}
