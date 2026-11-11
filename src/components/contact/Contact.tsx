import GenericSection from '../layout/GenericSection.tsx'
import Link from '../ui/Link.tsx'

export default function Contact() {
    return (
        <GenericSection
            title={
                <>
                    Let's work <br /> together
                </>
            }
            sectionTitle={'Contact'}
        >
            <p className="text-lg">
                Open to a paid backend internship or junior opportunity,
                part-time alongside school.
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
        </GenericSection>
    )
}
