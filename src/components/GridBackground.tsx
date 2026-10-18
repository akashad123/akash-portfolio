import React from 'react';

interface GridBackgroundProps {
  theme?: 'dark' | 'light';
  columns?: number;
}

export const GridBackground: React.FC<GridBackgroundProps> = ({ theme = 'dark', columns = 6 }) => {
  const borderColor = theme === 'dark' ? 'border-white/10' : 'border-black/5';

  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 flex justify-between px-4 sm:px-8 md:px-16 max-w-screen-2xl mx-auto">
      {Array.from({ length: columns }).map((_, index) => (
        <div
          key={index}
          className={`h-full w-px border-l ${borderColor} hidden sm:block ${
            index > 3 ? 'hidden md:block' : ''
          }`}
        />
      ))}
    </div>
  );
};
