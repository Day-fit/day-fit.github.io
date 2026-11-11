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
            <div className="flex flex-row w-full justify-between mb-5">
                <div>
                    <h3 className="text-3xl">{company}</h3>
                    <p className="text-muted-text">{role}</p>
                </div>
                <div>
                    <span>{period}</span>
                    {isLatest && (
                        <span className="bg-background rounded-md py-1 px-3 ml-2">
                            Latest
                        </span>
                    )}
                </div>
            </div>
            <Line />
            <p className="text-secondary-text">{description}</p>
            {children != null && <div className="mt-10">{children}</div>}
        </article>
    )
}
