import { useEffect, useRef, useCallback } from 'react';

/**
 * useParallax - Creates a parallax scroll effect
 * @param {React.RefObject} containerRef - Reference to the carousel container
 * @param {Object} options - Configuration options
 * @param {number} options.speed - Parallax speed (0-1, lower is slower)
 * @param {number} options.fadeThreshold - Scroll distance before fade starts
 * @param {boolean} options.disabled - Disable parallax on mobile
 */
export function useParallax(containerRef, { speed = 0.3, fadeThreshold = 300, disabled = false } = {}) {
    const animationRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (disabled || !containerRef.current) return;

        const scrollY = window.scrollY;
        const rect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate how much of the hero is visible
        const heroTop = rect.top;
        const heroHeight = rect.height;

        // Only apply effect when hero is in or near viewport
        if (heroTop > viewportHeight || heroTop + heroHeight < 0) return;

        // Calculate parallax transform
        const transformValue = scrollY * speed;

        // Calculate fade and scale based on scroll position
        let opacityValue = 1;
        let scaleValue = 1;

        if (scrollY > 0) {
            const fadeProgress = Math.min(scrollY / fadeThreshold, 1);
            opacityValue = 1 - fadeProgress;
            scaleValue = 1 - (fadeProgress * 0.1);
        }

        // Apply transforms using requestAnimationFrame for smooth scrolling
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }

        animationRef.current = requestAnimationFrame(() => {
            const slides = containerRef.current?.querySelectorAll('[data-parallax-content]');
            slides?.forEach((slide) => {
                slide.style.transform = `translateY(${transformValue}px) scale(${scaleValue})`;
                slide.style.opacity = opacityValue.toString();
            });

            const backgrounds = containerRef.current?.querySelectorAll('[data-parallax-bg]');
            backgrounds?.forEach((bg) => {
                bg.style.transform = `translateY(${transformValue * 0.4}px)`;
            });
        });
    }, [containerRef, speed, fadeThreshold, disabled]);

    useEffect(() => {
        if (disabled) return;

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [handleScroll, disabled]);

    // eslint-disable-next-line react-refresh/only-export-components
    return {};
}

export default useParallax;
