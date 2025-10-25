'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useMatchWidth } from '@/hooks/useMatchWidth';

interface ProviderValue {
  collapse: boolean;

  mobileOpen: boolean;
  toggleMobile: () => void;
}

const SidebarContext = createContext<ProviderValue | null>(null);
const SidebarContextProvider = (props: { children: ReactNode }) => {
  const pathname = usePathname();
  const isMatch = useMatchWidth(768);
  const [collapse, setCollapse] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 100) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };

  const toggleMobile = () => {
    if (mobileOpen) {
      setMobileOpen(false);
      document.body.style.overflow = 'auto';
      document.getElementById('main-layout')?.classList.remove('blur-xs');
    } else {
      setMobileOpen(true);
      document.body.style.overflow = 'hidden';
      document.getElementById('main-layout')?.classList.add('blur-xs');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      toggleMobile();
    }
  }, [pathname, isMatch]);

  return (
    <SidebarContext.Provider value={{ collapse, mobileOpen, toggleMobile }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

const useSidebarContext = () => useContext(SidebarContext)!;

export { SidebarContext, useSidebarContext };
export default SidebarContextProvider;
