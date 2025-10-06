'use client';

import { useEffect, useState } from 'react';
import { ChevronsLeftRight, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/lib/shadcn/ui/button';
import { capitalizeText } from '@/lib/shadcn/utils';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <Button
      size={'lg'}
      data-active={true}
      variant={'sidebar'}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? <MoonIcon className="size-5" /> : <SunIcon className="size-5" />}
      <p className="flex-1 text-start text-base">{capitalizeText(resolvedTheme ?? '')}</p>
      <ChevronsLeftRight />
    </Button>
  );
}
