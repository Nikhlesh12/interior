"use client";
import { useEffect } from "react";

export function MotionSystem() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cleanup = () => {};
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      const gsap = gsapModule.default;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.to(".architectural-grid", { backgroundPositionX: "8vw", ease: "none", scrollTrigger: { trigger: ".architectural-grid", start: "top bottom", end: "bottom top", scrub: 1.2 } });
        gsap.fromTo("footer h2", { xPercent: -2 }, { xPercent: 2, ease: "none", scrollTrigger: { trigger: "footer", start: "top bottom", end: "bottom bottom", scrub: 1 } });
      });
      cleanup = () => context.revert();
    });
    return () => cleanup();
  }, []);
  return null;
}
