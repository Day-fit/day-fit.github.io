import GenericSection from '../layout/GenericSection.tsx'

export default function About() {
    return (
        <GenericSection
            sectionTitle={'About'}
            title={'Little bit about myself'}
        >
            <p className="text-base leading-relaxed sm:text-lg">
                I started coding at 13 because I wanted to write plugins for my
                Minecraft server. I learned Java from tutorials and "Think
                Java", a book my parents bought me. I'm now a fourth-year
                student at a technical high school, specializing in programming.
                I build backend systems like Mossy, focusing on authentication,
                asynchronous communication and microservices.
            </p>
            <div className="mt-10">
                <h3 className="text-2xl">My stack</h3>
                <dl className="mt-6 grid gap-x-12 gap-y-6 sm:grid-cols-2">
                    <div>
                        <dt className="font-semibold">Where I'm strongest</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-secondary-text">
                            Kotlin and Java with Spring Boot are where I feel
                            most confident, from building APIs to authentication
                            and communication between services.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Data & messaging</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-secondary-text">
                            I'm also comfortable integrating RabbitMQ with
                            backend services, and I work with SQL databases and
                            caching.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Frontend when needed</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-secondary-text">
                            I use TypeScript and React to build interfaces for
                            my projects, and WXT for browser extensions.
                        </dd>
                    </div>
                    <div>
                        <dt className="font-semibold">Building & shipping</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-secondary-text">
                            I also handle container builds and CI/CD pipelines,
                            using Docker and GitHub Actions to automate testing
                            and delivery.
                        </dd>
                    </div>
                </dl>
            </div>
        </GenericSection>
    )
}
