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
                    Where I've
                    <br />
                    worked.
                </>
            }
            sectionTitle="Experience"
        >
            <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
                {children}
            </div>
        </GenericSection>
    )
}
