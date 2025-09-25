import { motion, Variants } from "motion/react"

function Loading() {
    const dotVariants: Variants = {
        jump: {
            y: -30,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="jump"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="flex justify-center items-center gap-2.5"
        >
            <motion.div
                className="w-5 h-5 rounded-full bg-[#ff0088] will-change-transform"
                variants={dotVariants}
            />
            <motion.div
                className="w-5 h-5 rounded-full bg-[#ff0088] will-change-transform"
                variants={dotVariants}
            />
            <motion.div
                className="w-5 h-5 rounded-full bg-[#ff0088] will-change-transform"
                variants={dotVariants}
            />
        </motion.div>
    )
}

export default Loading
