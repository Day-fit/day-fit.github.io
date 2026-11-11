import * as React from 'react'

type GenericSectionProps = {
    children: React.ReactNode
    number: number
    title: React.ReactNode
    sectionTitle: string
}

export default function GenericSection({
    children,
    number,
    title,
    sectionTitle,
}: GenericSectionProps) {
    return (
        <section className="flex flex-row">
            <div className="mt-5 flex flex-row lg:w-1/4 shrink-0 min-w-0 gap-x-2">
                <span>{number.toString().padStart(2, '0')}</span>
                <span className="text-muted-text"> {sectionTitle}</span>
            </div>

            <div className="lg:w-3/4 shrink-0 min-w-0 flex flex-col text-left">
                <h2 className="text-6xl mb-20 text-wrap">{title}</h2>
                {children}
            </div>
        </section>
    )
}
