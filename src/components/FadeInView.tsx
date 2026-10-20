import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { fadeInTransition, sectionInitial, sectionWhileInView, sectionViewportConfig } from '../utils/motion';

interface FadeInViewProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Reusable viewport fade-in wrapper component using Framer Motion.
 */
export const FadeInView: React.FC<FadeInViewProps> = ({
  children,
  className = '',
  delay = 0,
  ...props
}) => {
  return (
    <motion.div
      initial={sectionInitial}
      whileInView={sectionWhileInView}
      viewport={sectionViewportConfig}
      transition={{ ...fadeInTransition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
