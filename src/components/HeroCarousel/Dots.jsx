import { memo } from 'react';

/**
 * Dots - Pagination dots with progress gauge
 * Shows current slide indicator with animated progress bar
 */
const Dots = memo(function Dots({
    totalSlides,
    currentSlide,
    progress,
    onDotClick
}) {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md">
                {Array.from({ length: totalSlides }).map((_, index) => {
                    const isActive = index === currentSlide;

                    return (
                        <button
                            key={index}
                            onClick={() => onDotClick(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`
                relative rounded-full transition-all duration-300
                ${isActive
                                    ? 'w-6 h-2 bg-white/30 overflow-hidden'
                                    : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                                }
              `}
                        >
                            {isActive && (
                                <span
                                    className="absolute top-0 left-0 h-full bg-gauge-blue transition-all duration-100 ease-linear"
                                    style={{ width: `${progress}%` }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
});

export default Dots;
