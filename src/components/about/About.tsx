import GenericSection from '../layout/GenericSection.tsx'
import ScrollReveal from '../motion/ScrollReveal.tsx'

export default function About() {
    return (
        <GenericSection
            sectionTitle={'About'}
            title={<>A little bit <br/> about myself.</>}
        >
            <ScrollReveal
                as="p"
                delay={0.08}
                className="text-base leading-relaxed sm:text-lg"
            >
                My name is Dawid. I started coding when I was 13, it all started
                when I wanted to write plugins for my minecraft server, so I've
                watched some Java tutorials and my parents bought a book ("Think
                Java"), programming was so fun to me that I decided to further
                educate about programming. Currently I'm a fourth-year student
                at technical high school, specializing in programming. I'm
                developing backend systems such as Mossy.
            </ScrollReveal>
            <ScrollReveal className="mt-10" delay={0.08}>
                <h3 className="text-2xl">My stack</h3>
                <dl className="mt-6 grid gap-x-12 gap-y-6 sm:grid-cols-2">
                    <div>
                        <dt className="font-semibold">Where I'm strongest</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-secondary-text">
                            Kotlin and Java with Spring Boot are where I feel
                            most confident.
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
            </ScrollReveal>
        </GenericSection>
    )
}
