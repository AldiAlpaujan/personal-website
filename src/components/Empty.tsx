'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Empty(props: { title: string; description: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        src={`/images/empty-${resolvedTheme}.png`}
        alt="Empty-Image"
        width={105.8}
        height={105.8}
        className="mb-6"
      />
      <h1 className="font-bold text-xl mb-1">{props.title}</h1>
      <p className="text-sm text-tertiary-foreground w-[200px] text-center">{props.description}</p>
    </div>
  );
}
