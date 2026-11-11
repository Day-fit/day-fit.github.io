import GenericSection from '../GenericSection.tsx'
import Line from '../Line.tsx'
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Sections() {
    return (
        <div className="bg-surface pt-10">
            <GenericSection
                title={
                    <>
                        Practical engineering.
                        <br />
                        Measurable results.
                    </>
                }
                sectionTitle={'Experience'}
                number={1}
            >
                <div className="flex flex-row w-full justify-between mb-5">
                    <div>
                        <h3 className="text-3xl">WPP Enterprise Solutions</h3>
                        <p className="text-muted-text">
                            Software development internship
                        </p>
                    </div>
                    <span>October 2026</span>
                </div>
                <Line />
                <p className="text-secondary-text mb-10">
                    Worked on backend authentication, test reliability and CI/CD
                    automation, alongside frontend development.
                </p>

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
            </GenericSection>
        </div>
    )
}
