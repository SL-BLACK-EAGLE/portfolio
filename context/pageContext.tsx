"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Lenis from "@studio-freight/lenis";
import debounce from "@/util/debounce";

const PageContext = createContext<Lenis | null>(null);

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reqIdRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let lastHeight = 0;
    let hideNav = false;
    let isScrolled = false;

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      debounce(() => (lastHeight = scroll))();

      if (lastHeight < scroll && scroll > 160 && !hideNav) {
        document.body.classList.add("hide_header");
        hideNav = true;
      }
      if (lastHeight >= scroll && scroll > 160 && hideNav) {
        document.body.classList.remove("hide_header");
        hideNav = false;
      }

      if (lastHeight < scroll && scroll > 220 && !isScrolled) {
        document.body.classList.add("scrolled");
        isScrolled = true;
      }

      if (lastHeight >= scroll && scroll < 220 && isScrolled) {
        document.body.classList.remove("scrolled");
        isScrolled = false;
      }
    });

    setLenis(lenis);
    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      lenis?.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(reqIdRef.current!);
    };
  }, [lenis]);

  const memoedValue = useMemo(() => lenis, [lenis]);

  return (
    <PageContext.Provider value={memoedValue}>{children}</PageContext.Provider>
  );
};
export default function usePage() {
  return useContext(PageContext);
}
