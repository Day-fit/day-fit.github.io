import Hero from '../../components/hero/Hero.tsx'
import PortfolioSections from './PortfolioSections.tsx'
import About from '../../components/about/About.tsx'
import Contact from '../../components/contact/Contact.tsx'
import Footer from '../../components/layout/Footer.tsx'

export default function HomePage() {
    return (
        <>
            <main className="w-full">
                <div className="w-full space-y-6 text-center">
                    <Hero />
                    <PortfolioSections />
                    <About />
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    )
}
