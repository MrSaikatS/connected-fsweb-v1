"use client";

import dynamic from "next/dynamic";
import { useMediaQuery } from "usehooks-ts";

const DesktopMenu = dynamic(() => import("./DesktopMenu"), {
  ssr: false,
});

const MobileMenu = dynamic(() => import("./MobileMenu"), {
  ssr: false,
});

const AppMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return <>{isDesktop ? <DesktopMenu /> : <MobileMenu />}</>;
};

export default AppMenu;
