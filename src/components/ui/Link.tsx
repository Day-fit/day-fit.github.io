import { GoArrowRight, GoLinkExternal } from 'react-icons/go'

type LinkProps = {
    isExternal?: boolean
    href?: string
    children: string
    variant?: 'primary' | 'secondary'
    size?: 'default' | 'large'
}

export default function Link({
    href,
    isExternal = false,
    children,
    variant = 'primary',
    size = 'default',
}: LinkProps) {
    const Icon = isExternal ? GoLinkExternal : GoArrowRight
    const appearance =
        variant === 'primary'
            ? 'border-primary-text bg-primary-text text-background hover:border-white hover:bg-white'
            : 'border-border text-primary-text hover:border-muted-text hover:bg-surface'
    const dimensions =
        size === 'large'
            ? 'min-h-16 gap-3 px-4 py-4 text-base sm:min-h-20 sm:gap-8 sm:px-8 sm:py-5 sm:text-2xl'
            : 'min-h-12 gap-5 px-5 py-3 text-base'

    return (
        <a
            className={`group inline-flex max-w-full items-center justify-center rounded-sm border font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-text motion-safe:active:scale-[0.98] motion-reduce:transition-none ${appearance} ${dimensions}`}
            href={href}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
        >
            <span className="min-w-0 text-left [overflow-wrap:anywhere]">
                {children}
            </span>
            <Icon
                aria-hidden="true"
                className={`${size === 'large' ? 'size-7' : 'size-5'} shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                    isExternal
                        ? 'motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5'
                        : 'motion-safe:group-hover:translate-x-1'
                }`}
            />
        </a>
    )
}
