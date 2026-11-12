import GenericSection from '../layout/GenericSection.tsx'
import Link from '../ui/Link.tsx'
import ScrollReveal from '../motion/ScrollReveal.tsx'

export default function Contact() {
    return (
        <GenericSection
            title={
                <>
                    Let's work <br /> together.
                </>
            }
            sectionTitle={'Contact'}
        >
            <ScrollReveal
                delay={0.08}
                className="rounded-md bg-background p-4 sm:p-6"
            >
                <p className="text-base leading-relaxed sm:text-lg">
                    Open to backend internship or junior opportunity, part-time
                    alongside school.
                </p>
                <div className="mt-8">
                    <Link
                        href="mailto:dawid.socha@proton.me"
                        size="large"
                        isExternal
                        variant="secondary"
                    >
                        dawid.socha@proton.me
                    </Link>
                </div>
            </ScrollReveal>
        </GenericSection>
    )
}
