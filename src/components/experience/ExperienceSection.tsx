import type { ReactNode } from 'react'
import Line from '../ui/Line.tsx'
import ScrollReveal from '../motion/ScrollReveal.tsx'

type ExperienceSectionProps = {
    company: string
    logoSrc?: string
    role: string
    period: string
    description: ReactNode
    children?: ReactNode
    isLatest?: boolean
}

export default function ExperienceSection({
    company,
    logoSrc,
    role,
    period,
    description,
    children,
    isLatest = false,
}: ExperienceSectionProps) {
    return (
        <ScrollReveal
            as="article"
            className="bg-background p-4 sm:p-6 rounded-md"
            delay={0.08}
        >
            <div className="mb-5 flex w-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    {logoSrc && (
                        <img
                            src={logoSrc}
                            alt=""
                            width={64}
                            height={48}
                            className="h-10 w-14 shrink-0 object-contain grayscale invert mix-blend-screen sm:h-12 sm:w-16"
                        />
                    )}
                    <div className="min-w-0">
                        <h3 className="text-2xl sm:text-3xl">{company}</h3>
                        <p className="text-muted-text">{role}</p>
                    </div>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2 text-sm sm:text-base">
                    <span>{period}</span>
                    {isLatest && (
                        <span className="bg-surface rounded-md py-1 px-3">
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
        </ScrollReveal>
    )
}
