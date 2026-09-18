"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { whatsappUrl } from "@/data/siteConfig";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0,1], [0,150]);
  const scale = useTransform(scrollYProgress, [0,1], [1,1.09]);
  return <section ref={ref} id="top" className="grain relative min-h-[100svh] overflow-hidden bg-black text-white">
    <motion.div className="absolute inset-0" style={{ y, scale }}><Image src="/images/hero-atelier-arka.png" alt="Warm limestone living room opening to a coastal courtyard" fill priority sizes="100vw" className="object-cover object-[62%_center]" /></motion.div>
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/5" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/25" />
    <div className="container-site relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-32 md:pb-12">
      <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:1, delay:1.55 }}>
        <p className="eyebrow mb-7 text-white/70">Interiors · Architecture · Furniture</p>
        <h1 className="serif max-w-5xl text-[clamp(3.8rem,8.6vw,9rem)] leading-[.83] tracking-[-.055em]">Spaces with<br/><i className="font-normal">a quieter kind</i><br/>of presence.</h1>
      </motion.div>
      <div className="mt-10 flex flex-col items-start justify-between gap-8 border-t border-white/25 pt-6 md:flex-row md:items-end">
        <p className="max-w-sm text-sm leading-6 text-white/72">We shape enduring environments through architecture, material intelligence and a precise understanding of how you live.</p>
        <div className="flex flex-wrap gap-3"><ArrowLink href="/portfolio" light>Explore projects</ArrowLink><ArrowLink href={whatsappUrl()} light>Book consultation</ArrowLink></div>
      </div>
      <a href="#introduction" className="absolute bottom-10 right-0 hidden items-center gap-3 text-[9px] uppercase tracking-[.2em] md:flex"><span>Scroll to enter</span><ArrowDown size={14}/></a>
      <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 rotate-90 text-[8px] uppercase tracking-[.24em] text-white/55 xl:block">18.5204° N · 73.8567° E</div>
    </div>
  </section>;
}
