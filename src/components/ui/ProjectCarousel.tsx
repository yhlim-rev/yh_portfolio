"use client";

import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  children: React.ReactNode[];
  visibleCount?: number;
}

export default function ProjectCarousel({ children, visibleCount = 3 }: ProjectCarouselProps) {
  const total = children.length;
  const [index, setIndex] = useState(0);
  const [cols, setCols] = useState(visibleCount);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640)       setCols(1);
      else if (window.innerWidth < 1024) setCols(2);
      else                               setCols(visibleCount);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [visibleCount]);

  const maxIndex = Math.max(0, total - cols);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(maxIndex, i + 1)), [maxIndex]);

  const translateX = -(index * (100 / cols));

  return (
    <div className="carousel-wrapper group relative">
      {/* Left arrow — sits outside the overflow-hidden viewport */}
      <button
        onClick={prev}
        disabled={index === 0}
        aria-label="Previous"
        className={cn(
          "carousel-arrow arrow-left",
          "absolute -left-5 top-[45%] -translate-y-1/2 z-20",
          "w-9 h-9 flex items-center justify-center rounded-full",
          "bg-stone-900/90 border border-stone-700 text-stone-300",
          "shadow-xl backdrop-blur-sm"
        )}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Clipping viewport — padding-y gives cards room to lift on hover */}
      <div className="overflow-hidden py-4 -my-4 px-1 -mx-1">
        <div
          className="carousel-track flex"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {children.map((child, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2.5"
              style={{ width: `${100 / cols}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Right arrow */}
      <button
        onClick={next}
        disabled={index >= maxIndex}
        aria-label="Next"
        className={cn(
          "carousel-arrow arrow-right",
          "absolute -right-5 top-[45%] -translate-y-1/2 z-20",
          "w-9 h-9 flex items-center justify-center rounded-full",
          "bg-stone-900/90 border border-stone-700 text-stone-300",
          "shadow-xl backdrop-blur-sm"
        )}
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      {maxIndex > 0 && (
        <div className="flex justify-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "rounded-full transition-all duration-300",
                i === index
                  ? "w-5 h-1.5 bg-copper-500"
                  : "w-1.5 h-1.5 bg-stone-700 hover:bg-stone-500"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
