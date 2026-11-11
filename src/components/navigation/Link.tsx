import { GoLinkExternal } from 'react-icons/go'

type externalLinkProps = {
    isExternal?: boolean
    href?: string
    children: string
}

export default function Link({
    href,
    isExternal = false,
    children,
}: externalLinkProps) {
    return (
        <div className="flex flex-col gap-y-0.5">
            <div className="flex items-center gap-x-2">
                <a
                    className="text-xl"
                    href={href}
                    target={isExternal ? '_blank' : '_self'}
                >
                    <h3>{children}</h3>
                </a>
                <GoLinkExternal />
            </div>
            <div className="w-full bg-border h-0.5" />
        </div>
    )
}
