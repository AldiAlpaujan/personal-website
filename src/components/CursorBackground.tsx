'use client';

import { CSSProperties, useEffect, useRef } from 'react';

const DOT_GRID =
  'bg-[radial-gradient(#757575_1px,transparent_1px)] [background-size:16px_16px]';

// Radius of the bright "spotlight" that follows the cursor.
const SPOTLIGHT =
  'radial-gradient(circle 320px at var(--cursor-x) var(--cursor-y), #000 0%, #000 20%, transparent 75%)';

export default function CursorBackground() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotlightRef.current;
    if (!el) return;

    let rafId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    function paint() {
      el!.style.setProperty('--cursor-x', `${x}px`);
      el!.style.setProperty('--cursor-y', `${y}px`);
      rafId = 0;
    }

    function onMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
      if (!rafId) rafId = requestAnimationFrame(paint);
    }

    paint();
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const spotlightStyle: CSSProperties = {
    '--cursor-x': '50%',
    '--cursor-y': '50%',
    maskImage: SPOTLIGHT,
    WebkitMaskImage: SPOTLIGHT,
  } as CSSProperties;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-background">
      {/* faint grid always visible everywhere */}
      <div className={`absolute inset-0 opacity-[0.15] ${DOT_GRID}`} />
      {/* bright grid revealed only around the cursor */}
      <div ref={spotlightRef} className={`absolute inset-0 opacity-40 ${DOT_GRID}`} style={spotlightStyle} />
    </div>
  );
}
