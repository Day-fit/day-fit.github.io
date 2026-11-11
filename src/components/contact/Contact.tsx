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
                as="p"
                delay={0.08}
                className="text-base leading-relaxed sm:text-lg"
            >
                Open to backend internship or junior opportunity, part-time
                alongside school.
            </ScrollReveal>
            <ScrollReveal className="mt-8" delay={0.12}>
                <Link
                    href="mailto:dawid.socha@proton.me"
                    size="large"
                    isExternal
                    variant="secondary"
                >
                    dawid.socha@proton.me
                </Link>
            </ScrollReveal>
        </GenericSection>
    )
}
