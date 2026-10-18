import React from 'react';
import { cn } from '../utils/cn';

interface YellowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const YellowButton: React.FC<YellowButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display uppercase tracking-wider font-bold transition-transform duration-150 active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-none";
  
  const variants = {
    primary: "bg-brand-yellow text-black hover:bg-[#E5C200] border-none shadow-none",
    secondary: "bg-white text-black hover:bg-neutral-200 border-none",
    outline: "bg-transparent text-white border border-white/30 hover:border-brand-yellow hover:text-brand-yellow"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs tracking-widest",
    md: "px-5 py-2.5 text-sm tracking-widest",
    lg: "px-8 py-3.5 text-base tracking-widest"
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="ml-2 inline-block">{icon}</span>}
    </button>
  );
};
