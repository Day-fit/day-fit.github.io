import * as React from 'react'

type GenericSectionProps = {
    children: React.ReactNode
    title: React.ReactNode
    sectionTitle: string
}

export default function GenericSection({
    children,
    title,
    sectionTitle,
}: GenericSectionProps) {
    return (
        <section className="flex flex-row pb-20 [counter-increment:section]">
            <div className="mt-5 flex flex-row lg:w-1/4 shrink-0 min-w-0 gap-x-2">
                <span
                    aria-hidden="true"
                    className="before:content-[counter(section,decimal-leading-zero)]"
                />
                <span className="text-muted-text">{sectionTitle}</span>
            </div>

            <div className="lg:w-3/4 shrink-0 min-w-0 flex flex-col text-left">
                <h2 className="text-6xl mb-20 text-wrap">{title}</h2>
                {children}
            </div>
        </section>
    )
}
