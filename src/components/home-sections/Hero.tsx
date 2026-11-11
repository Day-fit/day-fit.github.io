import Link from '../navigation/Link.tsx'

export default function Hero() {
    return (
        <section className="flex items-center p-10 w-full  flex-col justify-between gap-y-6 lg:flex-row">
            <div className="min-w-0 w-full shrink-0 text-left lg:w-1/3">
                <h1 className="text-9xl ">
                    Dawid <br />
                    Socha.
                </h1>
            </div>

            <div className="flex flex-col gap-2 items-end justify-end min-w-0 w-full shrink-0 text-right lg:w-1/3">
                <h4 className="text-4xl w-full">
                    Java & Kotlin <br />
                    Backend Developer
                </h4>
                <div className="w-full bg-border h-0.5" />

                <p className="text-lg mb-10">
                    Building web apps focused on scalability, asynchronous
                    communication and security. Specializing in microservice
                    architecture.
                </p>

                <div className="flex flex-wrap items-center justify-end gap-3">
                    <Link href="#Projects">Explore my work</Link>
                    <Link
                        href={`${import.meta.env.BASE_URL}cv.pdf`}
                        isExternal
                        variant="secondary"
                    >
                        View CV
                    </Link>
                </div>
            </div>
        </section>
    )
}
