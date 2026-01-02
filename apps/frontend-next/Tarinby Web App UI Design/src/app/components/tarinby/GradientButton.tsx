import React from 'react';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function GradientButton({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: GradientButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white hover:opacity-90 shadow-lg shadow-blue-500/20',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border',
    outline: 'border-2 border-transparent bg-clip-padding hover:bg-secondary/50 relative overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#3b82f6] before:to-[#10b981] before:p-[2px] before:rounded-xl'
  };

  return (
    <button
      className={`
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        rounded-xl font-medium transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
