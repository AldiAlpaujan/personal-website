'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Marquee } from '@/lib/shadcn/ui/marquee';
import { cn } from '@/lib/shadcn/utils';
import { techIcons, TechIconType } from '@/lib/shadcn/variable';

export default function TechList(props: { reverse?: boolean }) {
  const [shuffledTech, setShuffledTech] = useState<TechIconType[]>([]);

  useEffect(() => {
    const shuffled = [...techIcons].sort(() => Math.random() - 0.5);
    setShuffledTech(shuffled);
  }, []);

  return (
    <Marquee pauseOnHover reverse={props.reverse}>
      <div className="w-fit flex gap-2">
        {shuffledTech.map((e) => (
          <div
            key={e.name}
            className="flex shrink-0 bg-project-card items-center gap-2 rounded-full border px-3 py-1.5"
          >
            <Image
              src={e.icon}
              alt={'tech icon'}
              width={18}
              height={18}
              className={cn('size-[18px]', e.themeCamo && 'dark:invert dark:brightness-0')}
            />
            <p>{e.label}</p>
          </div>
        ))}
      </div>
    </Marquee>
  );
}
