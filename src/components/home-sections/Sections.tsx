import ExperienceSection from '../ExperienceSection.tsx'
import ExperienceShowcase from '../ExperienceShowcase.tsx'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Sections() {
    return (
        <div className="bg-surface pt-10 [counter-reset:section]">
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
        </div>
    )
}
