"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { CustomCursor } from "./ui/CustomCursor";
import { Loader } from "./ui/Loader";
import { MotionSystem } from "./ui/MotionSystem";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const finishLoading = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const saved = localStorage.getItem("arka-theme") || "dark";
    document.documentElement.dataset.theme = saved;
  }, []);

  useEffect(() => {
    if (reduced) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: .9 });
    let raf = 0;
    const loop = (time: number) => { lenis.raf(time); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, [reduced]);

  return <>
    <Loader onComplete={finishLoading} />
    <MotionSystem />
    <CustomCursor />
    <AnimatePresence mode="wait">
      <motion.div key={pathname} initial={reduced ? false : { opacity: 0 }} animate={{ opacity: loaded ? 1 : 0 }} exit={{ opacity: 0 }} transition={{ duration: .55 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  </>;
}
