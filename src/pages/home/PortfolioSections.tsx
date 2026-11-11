import ExperienceSection from '../../components/experience/ExperienceSection.tsx'
import ExperienceShowcase from '../../components/experience/ExperienceShowcase.tsx'
import { FaLongArrowAltRight } from 'react-icons/fa'
import ProjectShowcase from '../../components/projects/ProjectShowcase.tsx'

export default function PortfolioSections() {
    return (
        <div className="[counter-reset:section] flex flex-col gap-y-3">
            <ExperienceShowcase>
                <ExperienceSection
                    company="WPP Enterprise Solutions"
                    role="Software development internship"
                    period="October 2026"
                    description="Worked on backend refactoring, authentication, test reliability and CI/CD automation."
                    isLatest={true}
                >
                    <div className="grid gap-8 sm:grid-cols-2 xl:gap-16">
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-2xl whitespace-nowrap tabular-nums sm:text-3xl xl:text-4xl">
                                <span>7.5 min </span>
                                <FaLongArrowAltRight
                                    aria-hidden="true"
                                    className="shrink-0"
                                />
                                <span>5 min</span>
                            </div>
                            <p className="text-sm text-secondary-text">
                                E2E test execution time reduction
                            </p>
                        </div>

                        <div className="min-w-0">
                            <div className="flex items-center gap-2 text-2xl whitespace-nowrap tabular-nums sm:text-3xl xl:text-4xl">
                                <span>4.2 min </span>
                                <FaLongArrowAltRight
                                    aria-hidden="true"
                                    className="shrink-0"
                                />
                                <span>2 min</span>
                            </div>
                            <p className="text-sm text-secondary-text">
                                E2E test execution time reduction after enabling
                                parallel test execution
                            </p>
                        </div>
                    </div>
                </ExperienceSection>
                <ExperienceSection
                    company={'VML Enterprise Solutions'}
                    role={'Software development internship'}
                    period={'March 2026'}
                    description={
                        'Worked on design consistency and other frontend improvements'
                    }
                />
            </ExperienceShowcase>
            <ProjectShowcase />
        </div>
    )
}
