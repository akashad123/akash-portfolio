import React, { useRef, useState, useMemo, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export interface TextSegment {
  text: string;
  isHighlight?: boolean;
}

interface CharacterProps {
  char: string;
  isRevealed: boolean;
  isHighlight?: boolean;
}

/**
 * Lively Kinetic Character Component:
 * Each letter pops up from below with physical spring bounce, dynamic rotation,
 * and crisp opacity. Zero blur for high-contrast clarity and lifelike motion.
 */
const Character: React.FC<CharacterProps> = ({
  char,
  isRevealed,
  isHighlight = false,
}) => {
  return (
    <motion.span
      initial={false}
      animate={
        isRevealed
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateZ: 0,
            }
          : {
              opacity: 0,
              y: 28,
              scale: 0.65,
              rotateZ: -6,
            }
      }
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 14,
        mass: 0.5,
      }}
      whileHover={
        isRevealed
          ? {
              scale: 1.22,
              y: -4,
              rotateZ: 2,
              transition: { type: 'spring', stiffness: 500, damping: 15 },
            }
          : undefined
      }
      style={{ willChange: 'transform, opacity' }}
      className={`inline-block select-none cursor-default transition-colors duration-150 ${
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
  containerRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Kinetic ScrollReveal:
 * Unlocks text character-by-character with physical spring motion as you scroll down.
 * Prevents mid-word line breaking using whitespace-nowrap wrappers around words.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  segments,
  text,
  className = '',
  containerRef,
}) => {
  const localRef = useRef<HTMLSpanElement>(null);
  const targetRef = (containerRef || localRef) as React.RefObject<HTMLElement>;

  // Track scroll progress as Section 02 traverses the viewport
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.88', 'center 0.42'],
  });

  const [currentProgress, setCurrentProgress] = useState(0);

  // Sync scroll progression in real time
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setCurrentProgress(latest);
  });

  // Ensure initial evaluation if page is loaded already scrolled into view
  useEffect(() => {
    setCurrentProgress(scrollYProgress.get());
  }, [scrollYProgress]);

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
            // Calculate activation threshold for each letter
            const charThreshold = (idx / Math.max(1, totalChars)) * 0.82;
            const isRevealed = currentProgress >= charThreshold;

            return (
              <Character
                key={`${sIdx}-${wIdx}-${cIdx}`}
                char={char}
                isRevealed={isRevealed}
                isHighlight={segment.isHighlight}
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
