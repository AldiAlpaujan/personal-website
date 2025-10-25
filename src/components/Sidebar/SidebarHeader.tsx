'use client';

import Image from 'next/image';
import { cn } from '@/lib/shadcn/utils';
import { useSidebarContext } from '@/stores/SidebarContext';

export default function SidebarHeader() {
  const { collapse } = useSidebarContext();
  return (
    <div
      data-collapse={collapse}
      className={cn(
        'flex flex-col w-fit justify-center transition-all duration-500 gap-3.5',
        'md:w-full md:items-center md:absolute md:top-[-80px] md:left-0 md:right-0 md:data-[collapse=true]:top-5'
      )}
    >
      <Image
        src={'/images/photo.png'}
        width={128}
        height={128}
        alt="my photo"
        data-collapse={collapse}
        className="rounded-full md:rounded-lg size-24 md:size-32 lg:size-36 2xl:size-40 transition-all duration-500 data-[collapse=true]:size-16 data-[collapse=true]:lg:size-18 data-[collapse=true]:2xl:size-20 data-[collapse=true]:rounded-[40px]"
      />
      <div className={cn('flex flex-col gap-0.5 transition-all duration-500', 'md:items-center')}>
        <h1 className="font-bold text-lg">Aldi Muhamad Alpaujan</h1>
        <p className="font-normal text-secondary-foreground">Software Engineer</p>
      </div>
    </div>
  );
}
