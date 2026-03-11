import { useState, useCallback, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './Slide';
import Dots from './Dots';
import Arrows from './Arrows';
import { useParallax } from './hooks/useParallax';
import { useAutoAdvance } from './hooks/useAutoAdvance';
import { useSwipe } from './hooks/useSwipe';
import { placeholderSlides } from './constants';

/**
 * HeroCarousel - Main carousel component
 * Apple-style edge-to-edge parallax carousel with:
 * - Auto-advance with progress indicator
 * - Keyboard navigation
 * - Touch swipe support
 * - Parallax scroll effects
 */
const HeroCarousel = ({ slides = placeholderSlides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const carouselRef = useRef(null);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // Initialize parallax effect
    useParallax(carouselRef, {
        speed: 0.3,
        fadeThreshold: 300,
        disabled: isMobile
    });

    // Initialize auto-advance with progress
    const handleAdvance = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
    }, [slides.length]);

    useAutoAdvance({
        interval: 5000,
        isPaused,
        onAdvance: handleAdvance,
        setProgress
    });

    // Initialize swipe detection
    useSwipe({
        onSwipeLeft: handleAdvance,
        onSwipeRight: () => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setProgress(0);
        },
        threshold: 50,
        disabled: isMobile
    });

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                setProgress(0);
            } else if (e.key === 'ArrowRight') {
                handleAdvance();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleAdvance, slides.length]);

    // Navigation handlers
    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
        setProgress(0);
    }, []);

    const goToPrev = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
    }, [slides.length]);

    const goToNext = useCallback(() => {
        handleAdvance();
    }, [handleAdvance]);

    return (
        <section
            ref={carouselRef}
            className="
        w-full h-screen md:h-hero 
        relative 
        overflow-hidden
        bg-navy-dark
      "
            data-swipe-container
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
        >
            {/* Slides */}
            <AnimatePresence mode="wait">
                {slides.map((slide, index) => (
                    index === currentSlide && (
                        <Slide
                            key={slide.id}
                            slide={slide}
                            isActive={index === currentSlide}
                            index={index}
                        />
                    )
                ))}
            </AnimatePresence>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10 pointer-events-none" />

            {/* Navigation Arrows */}
            <Arrows
                onPrev={goToPrev}
                onNext={goToNext}
                disabled={false}
            />

            {/* Pagination Dots with Progress */}
            <Dots
                totalSlides={slides.length}
                currentSlide={currentSlide}
                progress={progress}
                onDotClick={goToSlide}
            />
        </section>
    );
};

export default HeroCarousel;
