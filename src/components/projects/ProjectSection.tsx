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
}: ProjectSectionProps) {
    return (
        <article className=" rounded-md bg-background p-3 mb-4">
            <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    {iconSrc && (
                        <img
                            className="size-16 shrink-0 object-contain"
                            src={iconSrc}
                            alt={`${name} icon`}
                            width={64}
                            height={64}
                        />
                    )}
                    <h3 className="text-3xl">{name}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
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
            <p className="text-secondary-text">{description}</p>
            {technologies && technologies.length > 0 && (
                <ProjectTechnologies technologies={technologies} />
            )}
            {children}
            {repositoryUrl && (
                <div className="mt-6 flex justify-end">
                    <Link href={repositoryUrl} isExternal variant="secondary">
                        View repository
                    </Link>
                </div>
            )}
        </article>
    )
}
