interface IsotipoIconProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function IsotipoIcon({ color = "currentColor", size = 48, className }: IsotipoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 90"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* Phone body */}
      <rect x="22" y="4" width="30" height="44" rx="5" ry="5" />
      {/* Warning triangle */}
      <path d="M37 16 L29 30 L45 30 Z" />
      <line x1="37" y1="22" x2="37" y2="26" />
      <circle cx="37" cy="28.5" r="1" fill={color} stroke="none" />
      {/* Hand - wrist/palm base */}
      <path d="M28 58 L28 36 C28 34.3 29.3 33 31 33 C32.7 33 34 34.3 34 36 L34 45" />
      {/* Index finger */}
      <path d="M34 45 L34 33 C34 31.3 35.3 30 37 30 C38.7 30 40 31.3 40 33 L40 45" />
      {/* Middle finger */}
      <path d="M40 45 L40 34 C40 32.3 41.3 31 43 31 C44.7 31 46 32.3 46 34 L46 45" />
      {/* Ring finger */}
      <path d="M46 45 L46 38 C46 36.3 47.3 35 49 35 C50.7 35 52 36.3 52 38 L52 49" />
      {/* Palm outline */}
      <path d="M28 58 C28 54 24 52 22 56 L22 64 C22 71 27 76 34 76 L46 76 C53 76 58 71 58 64 L58 58 C58 52 54 49 52 49" />
    </svg>
  );
}
