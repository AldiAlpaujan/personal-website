'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ProviderValue {
  collapse: boolean;
}

const SidebarContext = createContext<ProviderValue | null>(null);
const SidebarContextProvider = (props: { children: ReactNode }) => {
  const [collapse, setCollapse] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 100) {
      setCollapse(true);
    } else {
      setCollapse(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <SidebarContext.Provider value={{ collapse }}>{props.children}</SidebarContext.Provider>;
};

const useSidebarContext = () => useContext(SidebarContext)!;

export { SidebarContext, useSidebarContext };
export default SidebarContextProvider;
