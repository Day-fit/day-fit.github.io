import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

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
    const Element = elements[as]

    return (
        <Element
            className={className}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -24px 0px' }}
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
