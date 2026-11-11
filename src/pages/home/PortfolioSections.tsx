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
                    <div className="flex flex-row gap-x-40 items-center">
                        <div>
                            <div className="text-4xl flex flex-row gap-x-2 items-center">
                                <span>7.5 min </span>
                                <FaLongArrowAltRight />
                                <span>5 min</span>
                            </div>
                            <p className="text-sm text-secondary-text">
                                E2E test execution time reduction
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl flex flex-row gap-x-2 items-center">
                                <span>4.2 min </span>
                                <FaLongArrowAltRight />
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
            <ProjectShowcase/>
        </div>
    )
}
