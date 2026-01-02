import React from 'react';

interface RTLInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function RTLInput({ label, error, className = '', ...props }: RTLInputProps) {
  return (
    <div className="w-full" dir="rtl">
      {label && (
        <label className="block text-sm font-medium mb-2 text-foreground">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 bg-input-background border border-input rounded-xl
          text-foreground placeholder:text-muted-foreground
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          transition-all
          ${error ? 'border-destructive' : ''}
          ${className}
        `}
        dir="rtl"
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}

interface RTLSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function RTLSelect({ label, error, options, className = '', ...props }: RTLSelectProps) {
  return (
    <div className="w-full" dir="rtl">
      {label && (
        <label className="block text-sm font-medium mb-2 text-foreground">
          {label}
        </label>
      )}
      <select
        className={`
          w-full px-4 py-3 bg-input-background border border-input rounded-xl
          text-foreground
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          transition-all cursor-pointer
          ${error ? 'border-destructive' : ''}
          ${className}
        `}
        dir="rtl"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}

interface RTLTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function RTLTextarea({ label, error, className = '', ...props }: RTLTextareaProps) {
  return (
    <div className="w-full" dir="rtl">
      {label && (
        <label className="block text-sm font-medium mb-2 text-foreground">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-3 bg-input-background border border-input rounded-xl
          text-foreground placeholder:text-muted-foreground
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          transition-all resize-vertical min-h-[100px]
          ${error ? 'border-destructive' : ''}
          ${className}
        `}
        dir="rtl"
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
}
