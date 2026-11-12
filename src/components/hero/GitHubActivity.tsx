import { useEffect, useId, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

type ContributionDay = {
    date: string
    count: number
    level: 0 | 1 | 2 | 3 | 4
}

type ActivityState =
    | { status: 'loading' }
    | { status: 'ready'; days: ContributionDay[] }
    | { status: 'error' }

const profileUrl = 'https://github.com/Day-fit'
const activityUrl =
    'https://github-contributions-api.jogruber.de/v4/Day-fit?y=last'
const levelColors = [
    'var(--color-surface)',
    'var(--color-border)',
    'color-mix(in srgb, var(--color-primary-text) 50%, var(--color-background))',
    'var(--color-muted-text)',
    'var(--color-primary-text)',
]
const dayInMilliseconds = 24 * 60 * 60 * 1000
const cellSize = 10
const cellStep = 13
const leftPadding = 28
const topPadding = 20
const monthFormat = new Intl.DateTimeFormat('en', {
    month: 'short',
    timeZone: 'UTC',
})
const dateFormat = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
})

function isContributionDay(value: unknown): value is ContributionDay {
    return (
        typeof value === 'object' &&
        value !== null &&
        'date' in value &&
        typeof value.date === 'string' &&
        /^\d{4}-\d{2}-\d{2}$/.test(value.date) &&
        Number.isFinite(Date.parse(`${value.date}T00:00:00Z`)) &&
        'count' in value &&
        typeof value.count === 'number' &&
        Number.isInteger(value.count) &&
        value.count >= 0 &&
        'level' in value &&
        typeof value.level === 'number' &&
        Number.isInteger(value.level) &&
        value.level >= 0 &&
        value.level <= 4
    )
}

function readContributions(value: unknown): ContributionDay[] {
    if (
        typeof value !== 'object' ||
        value === null ||
        !('contributions' in value) ||
        !Array.isArray(value.contributions) ||
        value.contributions.length === 0 ||
        !value.contributions.every(isContributionDay)
    ) {
        throw new Error('Invalid contribution data')
    }

    return [...value.contributions].sort((first, second) =>
        first.date.localeCompare(second.date),
    )
}

function ContributionCalendar({ days }: { days: ContributionDay[] }) {
    const id = useId()
    const firstDate = new Date(`${days[0].date}T00:00:00Z`)
    const firstSunday =
        firstDate.getTime() - firstDate.getUTCDay() * dayInMilliseconds
    const position = (date: Date) => {
        const dayIndex = Math.round(
            (date.getTime() - firstSunday) / dayInMilliseconds,
        )
        return {
            column: Math.floor(dayIndex / 7),
            row: dayIndex % 7,
        }
    }
    const lastPosition = position(
        new Date(`${days[days.length - 1].date}T00:00:00Z`),
    )
    const width = leftPadding + (lastPosition.column + 1) * cellStep + 12
    const height = topPadding + 7 * cellStep - 3
    const total = days.reduce((sum, day) => sum + day.count, 0)
    const monthLabels: { label: string; column: number }[] = []

    for (const day of days) {
        const date = new Date(`${day.date}T00:00:00Z`)
        const { column } = position(date)

        if (monthLabels.length === 0 || date.getUTCDate() === 1) {
            const previous = monthLabels[monthLabels.length - 1]
            if (previous && column - previous.column < 2) continue
            monthLabels.push({ label: monthFormat.format(date), column })
        }
    }

    return (
        <>
            <svg
                viewBox={`0 0 ${width} ${height}`}
                className="block w-full min-w-xl sm:min-w-0"
                role="img"
                aria-labelledby={`${id}-title ${id}-description`}
            >
                <title id={`${id}-title`}>
                    Day-fit's GitHub contribution activity
                </title>
                <desc id={`${id}-description`}>
                    {total.toLocaleString('en')} contributions in the last year.
                    Lighter squares indicate more activity.
                </desc>
                {monthLabels.map(({ label, column }) => (
                    <text
                        key={column}
                        x={leftPadding + column * cellStep}
                        y={10}
                        fill="var(--color-muted-text)"
                        fontSize={10}
                    >
                        {label}
                    </text>
                ))}
                {[
                    { label: 'Mon', row: 1 },
                    { label: 'Wed', row: 3 },
                    { label: 'Fri', row: 5 },
                ].map(({ label, row }) => (
                    <text
                        key={label}
                        x={0}
                        y={topPadding + row * cellStep + cellSize / 2}
                        dominantBaseline="middle"
                        fill="var(--color-muted-text)"
                        fontSize={10}
                    >
                        {label}
                    </text>
                ))}
                {days.map((day) => {
                    const date = new Date(`${day.date}T00:00:00Z`)
                    const { column, row } = position(date)

                    return (
                        <rect
                            key={day.date}
                            x={leftPadding + column * cellStep}
                            y={topPadding + row * cellStep}
                            width={cellSize}
                            height={cellSize}
                            rx={2}
                            fill={levelColors[day.level]}
                        >
                            <title>
                                {day.count}{' '}
                                {day.count === 1
                                    ? 'contribution'
                                    : 'contributions'}{' '}
                                on {dateFormat.format(date)}
                            </title>
                        </rect>
                    )
                })}
            </svg>
        </>
    )
}

export default function GitHubActivity() {
    const shouldReduceMotion = useReducedMotion()
    const [activity, setActivity] = useState<ActivityState>({
        status: 'loading',
    })
    const calendarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const controller = new AbortController()
        let cancelled = false
        const timeout = window.setTimeout(() => controller.abort(), 10000)

        async function loadActivity() {
            try {
                const response = await fetch(activityUrl, {
                    signal: controller.signal,
                })
                if (!response.ok) throw new Error('Could not load activity')
                const days = readContributions(await response.json())
                if (!cancelled) setActivity({ status: 'ready', days })
            } catch {
                if (!cancelled) setActivity({ status: 'error' })
            } finally {
                window.clearTimeout(timeout)
            }
        }

        void loadActivity()

        return () => {
            cancelled = true
            controller.abort()
            window.clearTimeout(timeout)
        }
    }, [])

    useEffect(() => {
        if (activity.status === 'ready' && calendarRef.current) {
            calendarRef.current.scrollLeft = calendarRef.current.scrollWidth
        }
    }, [activity])

    return (
        <figure
            className="min-w-0 w-full"
            aria-label="GitHub contribution activity"
        >
            {activity.status === 'loading' && (
                <div
                    role="status"
                    className="flex min-h-36 animate-pulse flex-col justify-center gap-3 motion-reduce:animate-none"
                >
                    <span className="sr-only">Loading GitHub activity…</span>
                    <div
                        aria-hidden="true"
                        className="h-24 w-full rounded bg-surface"
                    />
                    <div
                        aria-hidden="true"
                        className="flex items-center justify-between gap-4"
                    >
                        <div className="h-3 w-48 max-w-1/2 rounded bg-surface" />
                        <div className="h-3 w-28 rounded bg-surface" />
                    </div>
                </div>
            )}
            {activity.status === 'error' && (
                <p className="min-h-36 py-8 text-sm text-muted-text">
                    Activity couldn't be loaded.{' '}
                    <a
                        href={profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4"
                    >
                        View on GitHub
                    </a>
                </p>
            )}
            {activity.status === 'ready' && (
                <motion.div
                    initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
                >
                    <div
                        ref={calendarRef}
                        className="overflow-x-auto pb-2 [scrollbar-color:var(--color-border)_var(--color-background)] scrollbar-thin focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-text"
                        tabIndex={0}
                        role="region"
                        aria-label="Scrollable GitHub contribution calendar"
                    >
                        <ContributionCalendar days={activity.days} />
                    </div>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-muted-text">
                        <p>
                            {activity.days
                                .reduce((sum, day) => sum + day.count, 0)
                                .toLocaleString('en')}{' '}
                            contributions in the last year
                        </p>
                        <div
                            className="flex items-center gap-1"
                            aria-label="Contribution levels from less to more"
                        >
                            <span className="mr-1">Less</span>
                            {levelColors.map((color) => (
                                <span
                                    key={color}
                                    aria-hidden="true"
                                    className="size-2.5 rounded-xs"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                            <span className="ml-1">More</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </figure>
    )
}
