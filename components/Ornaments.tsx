export function Paisley({ className = "", strokeWidth = 1.4 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 100 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M62 8C40 8 20 26 20 54c0 20 14 30 30 34 12 3 20 10 20 22 0 14-12 22-26 22-16 0-28-10-30-26"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M58 20C44 20 32 32 32 50c0 14 10 21 21 24 9 2.5 15 7.5 15 16.5 0 10-8.5 16-19 16"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.75}
        strokeLinecap="round"
        opacity={0.7}
      />
      <circle cx="66" cy="16" r="2.4" fill="currentColor" opacity={0.9} />
      <circle cx="52" cy="30" r="1.4" fill="currentColor" opacity={0.6} />
      <circle cx="44" cy="46" r="1.1" fill="currentColor" opacity={0.5} />
    </svg>
  );
}

export function KalkaDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-saffron" />
      <Paisley className="h-6 w-5 text-saffron rotate-90" strokeWidth={2} />
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-saffron" />
    </div>
  );
}

/** Repeating watermark field used behind the hero and dark sections */
export function PaisleyField({ className = "" }: { className?: string }) {
  const positions = [
    { top: "4%", left: "2%", size: 90, rot: -12, op: 0.14 },
    { top: "58%", left: "-2%", size: 130, rot: 8, op: 0.1 },
    { top: "10%", left: "88%", size: 110, rot: 20, op: 0.12 },
    { top: "62%", left: "90%", size: 90, rot: -18, op: 0.14 },
    { top: "36%", left: "46%", size: 60, rot: 4, op: 0.06 },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {positions.map((p, i) => (
        <Paisley
          key={i}
          className="absolute text-saffron"
          strokeWidth={1}
          {...{
            style: {
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size * 1.4,
              transform: `rotate(${p.rot}deg)`,
              opacity: p.op,
            },
          }}
        />
      ))}
    </div>
  );
}

/** Small corner flourish for cards */
export function CornerFlourish({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} aria-hidden="true">
      <path d="M2 30C2 14 14 2 30 2" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
      <circle cx="2" cy="30" r="2" fill="currentColor" opacity="0.8" />
      <circle cx="30" cy="2" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  );
}
