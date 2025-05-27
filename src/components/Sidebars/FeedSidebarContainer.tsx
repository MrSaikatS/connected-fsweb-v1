"use client";

import { ReactNode, useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

type FeedSidebarContainerProps = {
  children: ReactNode;
};

const FeedSidebarContainer = ({ children }: FeedSidebarContainerProps) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };

    // Initial check
    checkIsDesktop();

    // Add listener
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addEventListener("change", checkIsDesktop);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", checkIsDesktop);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return null;
  }

  return isDesktop ? <ScrollArea>{children}</ScrollArea> : <></>;
};

export default FeedSidebarContainer;
