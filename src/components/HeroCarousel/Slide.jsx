import { memo } from 'react';
import { motion } from 'framer-motion';

/**
 * Slide - Individual carousel slide component
 * Displays title, subtitle, and CTA button with animations
 */
const Slide = memo(function Slide({
    slide,
    isActive,
    index
}) {
    const { bgGradient, bgPattern, title, subtitle, ctaText, ctaLink } = slide;

    // Animation variants for content
    const contentVariants = {
        enter: {
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        center: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 1.02,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.6, 1]
            }
        }
    };

    // Staggered animation for individual elements
    const itemVariants = {
        enter: { opacity: 0, y: 20 },
        center: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className="absolute inset-0 w-full h-full"
            initial="enter"
            animate={isActive ? "center" : "exit"}
            exit="exit"
            variants={contentVariants}
            data-parallax-content
        >
            {/* Background Layer */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${bgGradient} ${bgPattern}`}
                data-parallax-bg
            />

            {/* Additional texture overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Content Container */}
            <div className="relative z-20 flex items-center justify-center w-full h-full px-4">
                <div className="text-center max-w-4xl">
                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-bold tracking-tight text-white mb-4
              drop-shadow-lg
            "
                    >
                        {title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="
              text-lg md:text-xl lg:text-2xl 
              text-white/90 mb-8 max-w-2xl mx-auto
              drop-shadow-md
            "
                    >
                        {subtitle}
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants}>
                        <a
                            href={ctaLink}
                            className="
                inline-block px-8 py-4 
                bg-white text-black 
                font-semibold rounded-md 
                hover:shadow-xl hover:shadow-white/20
                hover:scale-105 
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-white/50
              "
                        >
                            {ctaText}
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
});

export default Slide;
