import { useLayoutEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import {
    motion,
    useAnimationControls,
    useInView,
    useReducedMotion,
} from 'motion/react'

const elements = {
    div: motion.div,
    article: motion.article,
    h2: motion.h2,
    p: motion.p,
}

type ScrollRevealProps = {
    as?: keyof typeof elements
    children: ReactNode
    className?: string
    delay?: number
}

export default function ScrollReveal({
    as = 'div',
    children,
    className,
    delay = 0,
}: ScrollRevealProps) {
    const shouldReduceMotion = useReducedMotion()
    const ref = useRef<HTMLDivElement>(null)
    const controls = useAnimationControls()
    const isInView = useInView(ref, {
        once: true,
        margin: '0px 0px -24px 0px',
    })
    const Element = elements[as]

    useLayoutEffect(() => {
        if (shouldReduceMotion) {
            controls.set({ opacity: 1, y: 0 })
        } else if (isInView) {
            void controls.start({ opacity: 1, y: 0 })
        } else {
            controls.set({ opacity: 0, y: 12 })
        }
    }, [controls, isInView, shouldReduceMotion])

    return (
        <Element
            ref={ref}
            className={className}
            initial={false}
            animate={controls}
            transition={{
                duration: shouldReduceMotion ? 0 : 0.45,
                delay: shouldReduceMotion ? 0 : delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </Element>
    )
}
