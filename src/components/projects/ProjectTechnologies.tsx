import { FaJava } from 'react-icons/fa'
import {
    SiApachekafka,
    SiArgo,
    SiDocker,
    SiGithubactions,
    SiHelm,
    SiKotlin,
    SiKubernetes,
    SiMinio,
    SiNextdotjs,
    SiPostgresql,
    SiRabbitmq,
    SiReact,
    SiRedis,
    SiSpringboot,
    SiTypescript,
    SiWebauthn,
    SiWxt,
} from 'react-icons/si'

const technologyIcons = {
    Java: FaJava,
    Kotlin: SiKotlin,
    TypeScript: SiTypescript,
    'Spring Boot': SiSpringboot,
    React: SiReact,
    'Next.js': SiNextdotjs,
    WXT: SiWxt,
    WebAuthn: SiWebauthn,
    PostgreSQL: SiPostgresql,
    Redis: SiRedis,
    RabbitMQ: SiRabbitmq,
    Kafka: SiApachekafka,
    MinIO: SiMinio,
    Docker: SiDocker,
    Kubernetes: SiKubernetes,
    Helm: SiHelm,
    'Argo CD': SiArgo,
    'GitHub Actions': SiGithubactions,
}

export type ProjectTechnology = keyof typeof technologyIcons

type ProjectTechnologiesProps = {
    technologies: readonly ProjectTechnology[]
}

export default function ProjectTechnologies({
    technologies,
}: ProjectTechnologiesProps) {
    return (
        <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => {
                const Icon = technologyIcons[technology]

                return (
                    <li
                        key={technology}
                        className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-2.5 py-1 text-xs font-medium text-secondary-text"
                    >
                        <Icon
                            aria-hidden="true"
                            className="size-3.5 shrink-0 text-muted-text"
                        />
                        <span>{technology}</span>
                    </li>
                )
            })}
        </ul>
    )
}
