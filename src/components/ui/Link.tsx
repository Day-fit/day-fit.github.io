import { GoArrowRight, GoLinkExternal } from 'react-icons/go'

type LinkProps = {
    isExternal?: boolean
    href?: string
    children: string
    variant?: 'primary' | 'secondary'
}

export default function Link({
    href,
    isExternal = false,
    children,
    variant = 'primary',
}: LinkProps) {
    const Icon = isExternal ? GoLinkExternal : GoArrowRight
    const appearance =
        variant === 'primary'
            ? 'border-primary-text bg-primary-text text-background hover:border-white hover:bg-white'
            : 'border-border text-primary-text hover:border-muted-text hover:bg-surface'

    return (
        <a
            className={`group inline-flex min-h-12 shrink-0 items-center justify-center gap-5 rounded-sm border px-5 py-3 text-base font-semibold whitespace-nowrap transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-text motion-safe:active:scale-[0.98] motion-reduce:transition-none ${appearance}`}
            href={href}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
        >
            <span>{children}</span>
            <Icon
                aria-hidden="true"
                className={`size-5 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                    isExternal
                        ? 'motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5'
                        : 'motion-safe:group-hover:translate-x-1'
                }`}
            />
        </a>
    )
}
