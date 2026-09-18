"use client";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  useEffect(() => {
    if (!matchMedia("(pointer:fine)").matches) return;
    const move = (e: MouseEvent) => { if (ref.current) ref.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0)`; };
    const over = (e: MouseEvent) => { const el = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]"); setLabel(el?.dataset.cursor || ""); };
    addEventListener("mousemove", move); addEventListener("mouseover", over);
    return () => { removeEventListener("mousemove", move); removeEventListener("mouseover", over); };
  }, []);
  return <div ref={ref} className={`pointer-events-none fixed left-0 top-0 z-[300] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-[8px] tracking-[.2em] text-white mix-blend-difference backdrop-blur-sm transition-[width,height] duration-300 md:flex ${label ? "h-16 w-16" : "h-3 w-3"}`}>{label}</div>;
}
