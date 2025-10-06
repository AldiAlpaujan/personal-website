'use client';

import Image from 'next/image';
import photo from '@/assets/my photo.png';
import { useSidebarContext } from '@/stores/SidebarContext';

export default function SidebarHeader() {
  const { collapse } = useSidebarContext();
  return (
    <div
      data-collapse={collapse}
      className="absolute top-[-80px]  left-0 right-0 transition-all duration-500 flex flex-col items-center justify-center gap-3.5 data-[collapse=true]:top-5 "
    >
      <Image
        src={photo}
        alt="my photo"
        data-collapse={collapse}
        className="rounded-lg size-40 transition-all duration-500 data-[collapse=true]:size-20 data-[collapse=true]:rounded-[40px]"
      />
      <div className="flex flex-col items-center gap-0.5 transition-all duration-500">
        <h1 className="font-bold text-lg">Aldi Muhamad Alpaujan</h1>
        <p className="font-normal text-secondary-foreground">Software Engineer</p>
      </div>
    </div>
  );
}
