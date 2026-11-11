import Hero from './components/home-sections/Hero.tsx'
import ScrollDown from './components/home-sections/ScrollDown.tsx'
import Sections from './components/home-sections/Sections.tsx'

export default function App() {
    return (
        <main className="w-full">
            <div className="w-full space-y-6 text-center *:px-10">
                <Hero />
                <ScrollDown />
                <Sections />
            </div>
        </main>
    )
}
