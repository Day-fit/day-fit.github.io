import ProjectSection from './ProjectSection.tsx'
import GenericSection from '../layout/GenericSection.tsx'
import MossyDetails from './MossyDetails.tsx'

export default function ProjectShowcase() {
    return (
        <GenericSection title={'Projects'} sectionTitle={'Projects'}>
            <ProjectSection
                name={'Mossy'}
                description={
                    'My biggest projects yet; E2EE password manager build on hybrid architecture,' +
                    ' where user hosts a vault, and hosted backend is used as a relay to access' +
                    ' the vault remotly (when not in LAN). Does not require user to open ports on his side,' +
                    ' as vault uses outbound connection to reach the relay system.' +
                    ' Microservice architecture, device trust based on proof of possession, ' +
                    'and idempotent device enrollment.'
                }
                from={'February 2026'}
                isActivelyDeveloped={true}
                iconSrc={`${import.meta.env.BASE_URL}mossy-creature.webp`}
                technologies={[
                    'Kotlin',
                    'Spring Boot',
                    'TypeScript',
                    'React',
                    'WXT',
                    'WebAuthn',
                    'PostgreSQL',
                    'Redis',
                    'RabbitMQ',
                    'Kafka',
                    'Docker',
                    'GitHub Actions',
                ]}
                repositoryUrl="https://github.com/Day-fit/Mossy"
                badge={
                    <a
                        href="https://github.com/Day-fit/Mossy/tags"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Mossy tags on GitHub (opens in a new tab)"
                        className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-text"
                    >
                        <img
                            src="https://img.shields.io/github/v/tag/Day-fit/Mossy"
                            alt="Latest GitHub tag for Mossy"
                            height={20}
                            className="h-5 w-auto"
                        />
                    </a>
                }
            >
                <MossyDetails />
            </ProjectSection>
            <ProjectSection
                name="Aurora"
                description={
                    'CV builder with PDF export, AI-assisted translation and CV generation from GitHub profiles. ' +
                    'PDFs are generated from FreeMarker templates using iText. ' +
                    'Written in Kotlin and Spring Boot; AI tasks run through RabbitMQ Streams, ' +
                    'with progress updates sent over WebSockets.'
                }
                from="October 2025"
                isActivelyDeveloped={false}
                to="January 2026"
                technologies={[
                    'Kotlin',
                    'Spring Boot',
                    'TypeScript',
                    'Next.js',
                    'PostgreSQL',
                    'Redis',
                    'RabbitMQ',
                    'MinIO',
                    'Docker',
                    'GitHub Actions',
                ]}
                repositoryUrl="https://github.com/Day-fit/Aurora"
            />
            <ProjectSection
                name="Encryptify"
                description={
                    'Cloud storage with browser-side file encryption; my first microservice project. ' +
                    'Includes file and folder management, with encrypted files stored in MinIO. ' +
                    'Deployed on Kubernetes with Helm and Argo CD, with GitHub Actions building images ' +
                    'and updating a separate deployment repo on each release.'
                }
                from="July 2025"
                isActivelyDeveloped={false}
                to="October 2025"
                technologies={[
                    'Java',
                    'Spring Boot',
                    'TypeScript',
                    'Next.js',
                    'PostgreSQL',
                    'Redis',
                    'RabbitMQ',
                    'MinIO',
                    'Kubernetes',
                    'Helm',
                    'Argo CD',
                    'GitHub Actions',
                ]}
                repositoryUrl="https://github.com/Day-fit/Encryptify"
            />
        </GenericSection>
    )
}
