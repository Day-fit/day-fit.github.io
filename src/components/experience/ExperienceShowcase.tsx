import type { ReactNode } from 'react'
import GenericSection from '../layout/GenericSection.tsx'

type ExperienceShowcaseProps = {
    children: ReactNode
}

export default function ExperienceShowcase({
    children,
}: ExperienceShowcaseProps) {
    return (
        <GenericSection
            title={
                <>
                    Practical engineering.
                    <br />
                    Measurable results.
                </>
            }
            sectionTitle="Experience"
        >
            <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
                {children}
            </div>
        </GenericSection>
    )
}
