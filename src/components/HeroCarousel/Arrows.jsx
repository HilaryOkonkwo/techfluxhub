import { memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Arrows - Navigation arrows for carousel
 * Left and right arrow buttons with hover effects
 */
const Arrows = memo(function Arrows({
    onPrev,
    onNext,
    disabled
}) {
    return (
        <>
            {/* Left Arrow */}
            <button
                onClick={onPrev}
                disabled={disabled}
                aria-label="Previous slide"
                className="
          absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14
          rounded-full bg-white/10 backdrop-blur-md
          border border-white/20
          flex items-center justify-center
          text-white/80 hover:text-white
          hover:bg-white/20 hover:scale-110
          transition-all duration-300 ease-out
          disabled:opacity-30 disabled:cursor-not-allowed
          disabled:hover:scale-100
          focus:outline-none focus:ring-2 focus:ring-white/50
        "
            >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={onNext}
                disabled={disabled}
                aria-label="Next slide"
                className="
          absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14
          rounded-full bg-white/10 backdrop-blur-md
          border border-white/20
          flex items-center justify-center
          text-white/80 hover:text-white
          hover:bg-white/20 hover:scale-110
          transition-all duration-300 ease-out
          disabled:opacity-30 disabled:cursor-not-allowed
          disabled:hover:scale-100
          focus:outline-none focus:ring-2 focus:ring-white/50
        "
            >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
            </button>
        </>
    );
});

export default Arrows;
