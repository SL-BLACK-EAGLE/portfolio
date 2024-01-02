import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import Lenis from "@studio-freight/lenis";

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

    setLenis(lenis);
    return () => {
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    const animate = (time) => {
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
