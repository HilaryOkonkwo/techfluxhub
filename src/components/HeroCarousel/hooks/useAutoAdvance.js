import { useEffect, useRef, useCallback } from 'react';

/**
 * useAutoAdvance - Auto-advance carousel with progress tracking
 * @param {Object} config - Configuration options
 * @param {number} config.interval - Time between advances in ms
 * @param {boolean} config.isPaused - Whether to pause auto-advance
 * @param {Function} config.onAdvance - Callback when slide advances
 * @param {Function} config.setProgress - Callback to update progress (0-100)
 */
export function useAutoAdvance({
    interval = 5000,
    isPaused,
    onAdvance,
    setProgress
}) {
    const timerRef = useRef(null);
    const rafRef = useRef(null);
    const startTimeRef = useRef(null);

    const resetTimer = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        startTimeRef.current = Date.now();
        setProgress(0);
    }, [setProgress]);

    useEffect(() => {
        // Reset when paused state changes
        if (isPaused) {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            return;
        }

        // Start fresh
        startTimeRef.current = Date.now();
        setProgress(0);

        const updateProgress = () => {
            if (isPaused) return;

            const elapsed = Date.now() - startTimeRef.current;
            const newProgress = Math.min((elapsed / interval) * 100, 100);
            setProgress(newProgress);

            if (newProgress < 100) {
                rafRef.current = requestAnimationFrame(updateProgress);
            }
        };

        // Start progress animation
        rafRef.current = requestAnimationFrame(updateProgress);

        // Set timer for next slide
        timerRef.current = setTimeout(() => {
            onAdvance();
        }, interval);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [onAdvance, interval, isPaused, setProgress]);

    return { resetTimer };
}

export default useAutoAdvance;
