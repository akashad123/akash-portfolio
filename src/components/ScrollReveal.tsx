import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

export interface TextSegment {
  text: string;
  isHighlight?: boolean;
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
  enableBlur?: boolean;
  blurStrength?: number;
  baseOpacity?: number;
}

/**
 * Individual character unit that gracefully unblurs, fades in, and settles into position
 * strictly tied to scroll progress (React Bits ScrollReveal pattern).
 */
const Character: React.FC<CharacterProps> = ({
  char,
  progress,
  range,
  isHighlight = false,
  enableBlur = true,
  blurStrength = 4,
  baseOpacity = 0.15,
}) => {
  const opacity = useTransform(progress, range, [baseOpacity, 1]);
  const blurVal = useTransform(progress, range, [enableBlur ? blurStrength : 0, 0]);
  const y = useTransform(progress, range, [4, 0]);

  // Clean transition to 'none' when sharp to prevent any subpixel raster blur
  const filter = useTransform(blurVal, (v) => (v <= 0.15 ? 'none' : `blur(${v.toFixed(1)}px)`));

  return (
    <motion.span
      style={{
        opacity,
        filter,
        y,
        display: 'inline-block',
        willChange: 'opacity, filter, transform',
      }}
      className={`transition-colors duration-100 ${
        isHighlight ? 'text-brand-yellow font-extrabold' : 'text-black'
      }`}
    >
      {char}
    </motion.span>
  );
};

export interface ScrollRevealProps {
  segments?: TextSegment[];
  text?: string;
  className?: string;
  baseOpacity?: number;
  enableBlur?: boolean;
  blurStrength?: number;
  containerRef?: React.RefObject<HTMLElement | null>;
}

/**
 * ScrollReveal:
 * Displays text with a letter-by-letter unblur and opacity reveal tied to scroll progression.
 * Words are preserved with whitespace-nowrap wrappers to ensure clean typography wrapping.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  segments,
  text,
  className = '',
  baseOpacity = 0.15,
  enableBlur = true,
  blurStrength = 4,
  containerRef,
}) => {
  const localRef = useRef<HTMLDivElement>(null);
  const targetRef = (containerRef || localRef) as React.RefObject<HTMLElement>;

  // Map scroll progress across viewport entry
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.85', 'center 0.45'],
  });

  // Normalize inputs to segments
  const normalizedSegments = useMemo<TextSegment[]>(() => {
    if (segments && segments.length > 0) return segments;
    if (text) return [{ text, isHighlight: false }];
    return [];
  }, [segments, text]);

  // Compute total non-whitespace characters for linear pacing
  const totalChars = useMemo(() => {
    return normalizedSegments.reduce((sum, seg) => {
      return sum + seg.text.replace(/\s+/g, '').length;
    }, 0);
  }, [normalizedSegments]);

  let charCounter = 0;

  return (
    <span ref={localRef} className={`inline ${className}`}>
      {normalizedSegments.map((segment, sIdx) => {
        // Split segment into words
        const words = segment.text.trim().split(/\s+/).filter(Boolean);

        const renderedWords = words.map((word, wIdx) => {
          const chars = word.split('');
          const charElements = chars.map((char, cIdx) => {
            const idx = charCounter++;
            const start = (idx / Math.max(1, totalChars)) * 0.88;
            const end = Math.min(1, start + 0.12);

            return (
              <Character
                key={`${sIdx}-${wIdx}-${cIdx}`}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
                isHighlight={segment.isHighlight}
                enableBlur={enableBlur}
                blurStrength={blurStrength}
                baseOpacity={baseOpacity}
              />
            );
          });

          return (
            <span
              key={`${sIdx}-${wIdx}`}
              className="inline-block whitespace-nowrap mr-[0.25em]"
            >
              {charElements}
            </span>
          );
        });

        if (segment.isHighlight) {
          return (
            <span
              key={sIdx}
              className="text-brand-yellow bg-black px-2 sm:px-2.5 py-0.5 inline-block mx-1 my-1 shadow-sm rounded-none align-middle"
            >
              {renderedWords}
            </span>
          );
        }

        return (
          <React.Fragment key={sIdx}>
            {renderedWords}
          </React.Fragment>
        );
      })}
    </span>
  );
};
