'use client';

import { useSidebarContext } from '@/stores/SidebarContext';
import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';
import SidebarToggle from './SidebarToggle';

export default function SidebarMobile() {
  const { mobileOpen, toggleMobile } = useSidebarContext();

  return (
    <>
      <div
        data-show={mobileOpen}
        onClick={toggleMobile}
        className="absolute hidden z-[49] w-full h-full data-[show=true]:block"
      />
      <div
        data-show={mobileOpen}
        className="absolute z-50 h-screen w-[90%] xs:w-[65%] sm:w-[45%] translate-x-[-100%] data-[show=true]:translate-x-0 transition-all duration-500"
      >
        <nav className="relative bg-background h-full rounded-r-[10px] border p-5 pb-3 transition-all duration-500">
          <div className="flex justify-between">
            <SidebarHeader />
            <SidebarToggle />
          </div>
          <SidebarMenu />
        </nav>
      </div>
    </>
  );
}
