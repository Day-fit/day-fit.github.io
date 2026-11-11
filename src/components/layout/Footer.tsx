import { GoArrowUpRight } from 'react-icons/go'

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Day-fit' },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/dawid-socha-66193a34b/',
    },
]

export default function Footer() {
    return (
        <footer className="bg-background px-6 pb-6 font-normal sm:px-10">
            <div className="flex flex-col gap-3 pt-4 text-xs sm:flex-row sm:items-center sm:justify-between">
                <p className="text-muted-text/80">
                    © {new Date().getFullYear()} Dawid Socha
                </p>
                <nav
                    aria-label="Social links"
                    className="flex items-center gap-5"
                >
                    {socialLinks.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${label} (opens in a new tab)`}
                            className="group inline-flex min-h-8 items-center gap-1 text-secondary-text transition-colors hover:text-primary-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-text motion-reduce:transition-none"
                        >
                            {label}
                            <GoArrowUpRight
                                aria-hidden="true"
                                className="size-3"
                            />
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    )
}
