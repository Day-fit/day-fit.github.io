import { FaAngleDown } from 'react-icons/fa'
import { motion, stagger, useReducedMotion } from 'framer-motion'

export default function ScrollDown() {
    const shouldReduceMotion = useReducedMotion()

    const arrowVariants = {
        idle: { opacity: 0.5 },
        animate: shouldReduceMotion
            ? {}
            : {
                  opacity: [0.5, 1, 0.5],
                  transition: { duration: 1.2, repeat: Infinity },
              },
    }

    return (
        <div className="flex flex-row gap-x-2 items-center justify-end mt-32">
            <h3>Scroll down to explore</h3>

            <motion.div
                variants={{
                    animate: {
                        transition: {
                            delayChildren: stagger(0.3),
                        },
                    },
                }}
                animate="animate"
                className="flex flex-col"
            >
                <motion.span variants={arrowVariants}>
                    <FaAngleDown className="-mb-2" />
                </motion.span>
                <motion.span variants={arrowVariants}>
                    <FaAngleDown />
                </motion.span>
            </motion.div>
        </div>
    )
}
