import { useEffect, useRef, useCallback } from 'react';

/**
 * useSwipe - Touch swipe detection for carousel
 * @param {Object} config - Configuration options
 * @param {Function} config.onSwipeLeft - Callback when swiped left (next slide)
 * @param {Function} config.onSwipeRight - Callback when swiped right (prev slide)
 * @param {number} config.threshold - Minimum swipe distance in pixels
 * @param {boolean} config.disabled - Disable swipe detection
 */
export function useSwipe({
    onSwipeLeft,
    onSwipeRight,
    threshold = 50,
    disabled = false
}) {
    const touchStartRef = useRef({ x: 0, y: 0 });
    const touchEndRef = useRef({ x: 0, y: 0 });

    const handleTouchStart = useCallback((e) => {
        if (disabled) return;
        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
        touchEndRef.current = { ...touchStartRef.current };
    }, [disabled]);

    const handleTouchMove = useCallback((e) => {
        if (disabled) return;
        touchEndRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        };
    }, [disabled]);

    const handleTouchEnd = useCallback(() => {
        if (disabled) return;

        const deltaX = touchEndRef.current.x - touchStartRef.current.x;
        const deltaY = touchEndRef.current.y - touchStartRef.current.y;

        // Only register as swipe if horizontal movement is greater than vertical
        // This prevents accidental swipes when scrolling vertically
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
            if (deltaX > 0) {
                // Swiped right - go to previous
                onSwipeRight?.();
            } else {
                // Swiped left - go to next
                onSwipeLeft?.();
            }
        }
    }, [disabled, threshold, onSwipeLeft, onSwipeRight]);

    useEffect(() => {
        if (disabled) return;

        const container = document.querySelector('[data-swipe-container]');
        if (!container) return;

        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: true });
        container.addEventListener('touchend', handleTouchEnd, { passive: true });

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    }, [disabled, handleTouchStart, handleTouchMove, handleTouchEnd]);

    // eslint-disable-next-line react-refresh/only-export-components
    return {};
}

export default useSwipe;
