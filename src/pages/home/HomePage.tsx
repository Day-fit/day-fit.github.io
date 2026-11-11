import Hero from '../../components/hero/Hero.tsx'
import ScrollDown from '../../components/hero/ScrollDown.tsx'
import PortfolioSections from './PortfolioSections.tsx'

export default function HomePage() {
    return (
        <main className="w-full">
            <div className="w-full space-y-6 text-center *:px-10">
                <Hero />
                <ScrollDown />
                <PortfolioSections />
            </div>
        </main>
    )
}
