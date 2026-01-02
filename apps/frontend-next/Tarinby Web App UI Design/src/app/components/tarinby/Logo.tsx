import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ size = 'md', showText = true }: LogoProps) {
  const dimensions = {
    sm: { icon: 32, text: 18, spacing: 8 },
    md: { icon: 48, text: 28, spacing: 12 },
    lg: { icon: 64, text: 40, spacing: 16 }
  };

  const dim = dimensions[size];

  return (
    <div className="flex items-center" style={{ gap: `${dim.spacing}px` }}>
      {/* SVG Logo Icon */}
      <svg
        width={dim.icon}
        height={dim.icon}
        viewBox="0 0 240 218"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Green V */}
          <linearGradient id="g" x1="40" y1="80" x2="140" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#87CF38"/>
            <stop offset="1" stopColor="#0D921C"/>
          </linearGradient>

          {/* Blue Arrow/Check */}
          <linearGradient id="b" x1="225" y1="25" x2="80" y2="155" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#0EA1DE"/>
            <stop offset="1" stopColor="#067ADA"/>
          </linearGradient>

          {/* Soft shadow */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25"/>
          </filter>
        </defs>

        {/* Green check (V) */}
        <path
          d="M 224 102 L 206 85 L 126 165 L 66 107 L 30 107 L 125 201 Z"
          fill="url(#g)"
          filter="url(#shadow)"
        />

        {/* Blue rising arrow/check */}
        <path
          d="M 222 29
             L 169 55
             L 179 60
             L 180 62
             L 126 115
             L 117 107
             L 84 108
             L 114 139
             L 126 149
             L 203 74
             L 217 83
             Z"
          fill="url(#b)"
          filter="url(#shadow)"
        />
      </svg>
      
      {showText && (
        <div className="flex items-baseline" style={{ fontSize: `${dim.text}px` }}>
          <span className="font-bold text-white tracking-tight">
            Tarin
          </span>
          <span className="font-bold tracking-tight" style={{ color: '#0ea5e9' }}>
            by
          </span>
        </div>
      )}
    </div>
  );
}