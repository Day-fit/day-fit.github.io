import type { ReactNode } from 'react'
import Line from '../ui/Line.tsx'
import Link from '../ui/Link.tsx'
import ProjectTechnologies from './ProjectTechnologies.tsx'
import type { ProjectTechnology } from './ProjectTechnologies.tsx'

type ProjectSectionProps = {
    name: string
    description: string
    from: string
    children?: ReactNode
    iconSrc?: string
    badge?: ReactNode
    technologies?: readonly ProjectTechnology[]
    repositoryUrl?: string
    websiteUrl?: string
} & (
    | {
          isActivelyDeveloped: false
          to: string
      }
    | {
          isActivelyDeveloped: true
          to?: never
      }
)

export default function ProjectSection({
    name,
    description,
    isActivelyDeveloped,
    from,
    to,
    children,
    iconSrc,
    badge,
    technologies,
    repositoryUrl,
    websiteUrl,
}: ProjectSectionProps) {
    return (
        <article className="mb-4 min-w-0 rounded-md bg-background p-4 sm:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    {iconSrc && (
                        <img
                            className="size-12 shrink-0 object-contain grayscale sm:size-16"
                            src={iconSrc}
                            alt={`${name} icon`}
                            width={64}
                            height={64}
                        />
                    )}
                    <h3 className="text-2xl sm:text-3xl">{name}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base">
                    <span>
                        {from} – {isActivelyDeveloped ? 'Present' : to}
                    </span>
                    {badge ??
                        (isActivelyDeveloped && (
                            <span className="bg-surface rounded-md py-1 px-3">
                                Actively maintained
                            </span>
                        ))}
                </div>
            </div>
            <Line />
            <p className="text-secondary-text leading-relaxed">{description}</p>
            {technologies && technologies.length > 0 && (
                <ProjectTechnologies technologies={technologies} />
            )}
            {children}
            {(repositoryUrl || websiteUrl) && (
                <div className="mt-6 flex flex-wrap justify-end gap-3">
                    {websiteUrl && (
                        <Link href={websiteUrl} isExternal variant="secondary">
                            Visit website
                        </Link>
                    )}
                    {repositoryUrl && (
                        <Link
                            href={repositoryUrl}
                            isExternal
                            variant="secondary"
                        >
                            View repository
                        </Link>
                    )}
                </div>
            )}
        </article>
    )
}
