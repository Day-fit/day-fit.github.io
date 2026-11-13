import Link from '../ui/Link.tsx'
import GitHubActivity from './GitHubActivity.tsx'
import ScrollDown from './ScrollDown.tsx'

export default function Hero() {
    return (
        <section className="flex min-h-dvh w-full flex-col px-6 py-6 sm:px-10 sm:py-8">
            <div className="grid flex-1 items-center gap-8 py-6 sm:gap-10 sm:py-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
                <div className="min-w-0 text-left">
                    <h1 className="text-6xl leading-none sm:text-8xl xl:text-9xl">
                        Dawid <br />
                        Socha.
                    </h1>
                </div>

                <div className="flex min-w-0 flex-col items-end justify-end gap-2 text-right">
                    <h2 className="w-full text-3xl sm:text-4xl">
                        Java & Kotlin <br />
                        Backend Developer
                    </h2>
                    <div className="w-full bg-border h-0.5" />

                    <p className="mb-6 text-base sm:mb-10 sm:text-lg">
                        Building web apps focused on scalability, asynchronous
                        communication and security. Specializing in microservice
                        architecture.
                    </p>

                    <div className="flex flex-wrap items-center justify-end gap-3">
                        <Link href="#projects">Explore my work</Link>
                        <Link
                            href={`${import.meta.env.BASE_URL}cv.pdf`}
                            isExternal
                            variant="secondary"
                        >
                            View CV
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid items-end gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
                <GitHubActivity />
                <ScrollDown />
            </div>
        </section>
    )
}
