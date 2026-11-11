import GenericSection from '../layout/GenericSection.tsx'

export default function About() {
    return (
        <GenericSection
            sectionTitle={'About'}
            title={'Little bit about myself'}
        >
            <p className={'text-lg'}>
                My name is Dawid. I started coding when I was 13, it all started
                when I wanted to write plugins for my minecraft server, so I've
                watched some Java tutorials and my parents bought a book ("Think
                Java"), programming was so fun to me that I decided to further
                educate about programming. Currently I'm a fourth-year student
                at technical high school, specializing in programming. I'm
                developing backend systems (such as Mossy), and each day I'm
                learning more and more about distributing systems (just compare
                Mossy to Encryptify, it's miles ahead).
            </p>
            <div className="mt-10">
                <h3 className="text-2xl">My stack</h3>
                <dl className="mt-6 grid gap-x-12 gap-y-6 sm:grid-cols-2">
                    <div>
                        <dt className="font-semibold">Languages</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-secondary-text">
                            Java and Kotlin are my main languages. I also use
                            TypeScript and JavaScript for web apps.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Frameworks</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-secondary-text">
                            Spring Boot for backend services, React for
                            frontends and WXT for browser extensions.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Infrastructure</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-secondary-text">
                            PostgreSQL, MySQL and Redis for storage and caching;
                            RabbitMQ (including Streams) and Kafka for
                            messaging; MinIO for files.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold">CI/CD</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-secondary-text">
                            Docker, Kubernetes, Helm, Argo CD and GitHub Actions
                            for container builds and automated deployments.
                        </dd>
                    </div>
                </dl>
            </div>
        </GenericSection>
    )
}
