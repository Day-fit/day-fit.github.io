import { lazy, Suspense, useId, useLayoutEffect, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type DetailTab = {
    id: string
    label: string
    content: ReactNode
}

const MossyArchitecture = lazy(() => import('./MossyArchitecture.tsx'))

const tabs: DetailTab[] = [
    {
        id: 'problem',
        label: 'The problem',
        content:
            'Most of self-hosted password managers require the user to open ports on the router or use a VPN to access this vault. I wanted to build something that will provide privacy of self-hosted service, while preserving comfort of using cloud password manager',
    },
    {
        id: 'constraints',
        label: 'Constraints',
        content: (
            <ul className="list-disc pl-5">
                <li>No port forwarding or VPN required to access vault</li>
                <li>
                    Self-hosted part should work in simple stack, so it will be
                    not a problem to run it on budget device
                </li>
                <li>
                    Every sensitive information (credentials, notes, and
                    encryption keys) cannot leave from either client or vault
                    unencrypted
                </li>
                <li>
                    Even the vault cannot read the secrets. Whole app follows
                    E2EE flow
                </li>
                <li>
                    App is build in microservices, to showoff skills, not to
                    handle real load (that being said, it's scalable, and
                    handling huge load would not be a problem when running it
                    with multiple replicas)
                </li>
            </ul>
        ),
    },
    {
        id: 'architecture',
        label: 'Architecture',
        content: (
            <div className="flex flex-col gap-6">
                <div className="space-y-3">
                    <p>
                        <span className="font-semibold">Device trust:</span>{' '}
                        Login combines account credentials with proof of
                        possession from the device. New devices need approval
                        from a trusted one, and users can block devices they no
                        longer trust.
                    </p>
                    <p>
                        <span className="font-semibold">Idempotency:</span>{' '}
                        Device enrollment supports retries, so a repeated
                        request can return the previous result instead of
                        repeating the operation.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: 'testing',
        label: 'Testing',
        content:
            "For testing Mossy I've created CI pipeline that runs tests then PR is opened. When working on backend I try to keep working in TDD flow. Backend is using Mockito and JUnit 5 for testing, Frontend and Web-extension are tested with playwright and vitest",
    },
    {
        id: 'trade-offs',
        label: 'Trade-offs',
        content: (
            <div className="flex flex-col gap-y-1.5">
                <p>
                    <span className="font-semibold">Microservices:</span> as
                    I've said before, I've chosen this architecture to improve
                    my knowledge and skills in distributed systems. Tradeoff of
                    this architecture is distributed systems tax
                </p>
                <p>
                    <span className="font-semibold">Relay:</span> Remote access
                    via external relay adds latency, and access to passwords is
                    dependent from relay status (However, In near future I will
                    add relay-free mode to mitigate this)
                </p>
                <p>
                    <span className="font-semibold">E2EE:</span> If backend or
                    vault is compromised passwords are safe, however client's
                    code is now critical for data safety (if frontend or web
                    extension will be compromised, then attacker might have
                    access to encryption keys)
                </p>
                <p>
                    <span className="font-semibold">Self-hosting</span> User is
                    now responsible for maintaining and updating their server
                </p>
            </div>
        ),
    },
]

type TabContentProps = {
    tab: DetailTab
    panelId: string
    tabId: string
    isActive: boolean
    onHeightChange: (height: number) => void
}

function TabContent({
    tab,
    panelId,
    tabId,
    isActive,
    onHeightChange,
}: TabContentProps) {
    const contentRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const content = contentRef.current
        if (!content || !isActive) return

        const observer = new ResizeObserver(() => {
            onHeightChange(content.getBoundingClientRect().height)
        })
        observer.observe(content)

        return () => observer.disconnect()
    }, [isActive, onHeightChange])

    return (
        <div
            ref={contentRef}
            id={panelId}
            role="tabpanel"
            aria-labelledby={tabId}
            aria-hidden={!isActive}
            inert={!isActive}
            tabIndex={isActive ? 0 : -1}
            className="pt-6 text-secondary-text leading-relaxed focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary-text"
        >
            {tab.id === 'architecture' ? (
                <div className="flex flex-col gap-6">
                    {isActive && (
                        <Suspense
                            fallback={
                                <div
                                    className="flex h-96 items-center justify-center text-muted-text sm:h-104"
                                    role="status"
                                >
                                    Loading diagram…
                                </div>
                            }
                        >
                            <MossyArchitecture />
                        </Suspense>
                    )}
                    {tab.content}
                </div>
            ) : (
                tab.content
            )}
        </div>
    )
}

export default function MossyDetails() {
    const id = useId()
    const [activeTab, setActiveTab] = useState(0)
    const [contentHeight, setContentHeight] = useState<number>()
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
    const shouldReduceMotion = useReducedMotion()

    function handleKeyDown(
        event: KeyboardEvent<HTMLButtonElement>,
        index: number,
    ) {
        let nextIndex: number

        switch (event.key) {
            case 'ArrowRight':
                nextIndex = (index + 1) % tabs.length
                break
            case 'ArrowLeft':
                nextIndex = (index - 1 + tabs.length) % tabs.length
                break
            case 'Home':
                nextIndex = 0
                break
            case 'End':
                nextIndex = tabs.length - 1
                break
            default:
                return
        }

        event.preventDefault()
        tabRefs.current[nextIndex]?.focus()
    }

    return (
        <div className="mt-8 min-w-0">
            <div
                role="tablist"
                aria-label="Mossy project details"
                className="flex gap-x-5 overflow-x-auto border-b border-border [scrollbar-color:var(--color-border)_var(--color-background)] scrollbar-thin sm:gap-x-6"
            >
                {tabs.map((tab, index) => (
                    <button
                        key={tab.id}
                        ref={(element) => {
                            tabRefs.current[index] = element
                        }}
                        id={`${id}-tab-${tab.id}`}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === index}
                        aria-controls={`${id}-panel-${tab.id}`}
                        tabIndex={activeTab === index ? 0 : -1}
                        onClick={() => setActiveTab(index)}
                        onFocus={(event) => {
                            setActiveTab(index)
                            event.currentTarget.scrollIntoView({
                                block: 'nearest',
                                inline: 'nearest',
                            })
                        }}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        className={`min-h-11 shrink-0 cursor-pointer border-b-2 px-1 py-3 text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary-text motion-reduce:transition-none ${
                            activeTab === index
                                ? 'border-primary-text text-primary-text'
                                : 'border-transparent text-muted-text hover:border-border hover:text-primary-text'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <motion.div
                initial={false}
                animate={{ height: contentHeight ?? 'auto' }}
                transition={{
                    duration: shouldReduceMotion ? 0 : 0.3,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden"
            >
                {tabs.map((tab, index) => (
                    <motion.div
                        key={tab.id}
                        hidden={activeTab !== index}
                        initial={false}
                        animate={{ opacity: activeTab === index ? 1 : 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
                    >
                        <TabContent
                            tab={tab}
                            panelId={`${id}-panel-${tab.id}`}
                            tabId={`${id}-tab-${tab.id}`}
                            isActive={activeTab === index}
                            onHeightChange={setContentHeight}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
