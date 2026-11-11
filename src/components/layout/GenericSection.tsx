import * as React from 'react'
import ScrollReveal from '../motion/ScrollReveal.tsx'

type GenericSectionProps = {
    id?: string
    children: React.ReactNode
    title: React.ReactNode
    sectionTitle: string
}

export default function GenericSection({
    id,
    children,
    title,
    sectionTitle,
}: GenericSectionProps) {
    return (
        <section
            id={id}
            className="grid w-full gap-y-6 bg-surface px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-4 lg:pt-10 lg:pb-20 [counter-increment:section]"
        >
            <ScrollReveal className="flex min-w-0 items-start gap-x-2 text-sm sm:text-base lg:mt-5">
                <span
                    aria-hidden="true"
                    className="before:content-[counter(section,decimal-leading-zero)]"
                />
                <span className="text-muted-text">{sectionTitle}</span>
            </ScrollReveal>

            <div className="flex min-w-0 flex-col text-left lg:col-span-3">
                <ScrollReveal
                    as="h2"
                    delay={0.06}
                    className="mb-10 text-4xl text-balance sm:mb-14 sm:text-5xl xl:mb-20 xl:text-6xl"
                >
                    {title}
                </ScrollReveal>
                {children}
            </div>
        </section>
    )
}
