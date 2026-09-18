"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/data/siteConfig";

const nav = [["Home", "/"], ["About", "/about"], ["Portfolio", "/portfolio"], ["Furniture", "/furniture"], ["Contact", "/contact"]];

export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(true);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 50); fn(); addEventListener("scroll", fn, { passive: true }); return () => removeEventListener("scroll", fn); }, []);
  useEffect(() => { setDark((localStorage.getItem("arka-theme") || "dark") === "dark"); }, []);
  useEffect(() => setMenu(false), [path]);
  const toggleTheme = () => { const n = !dark; setDark(n); document.documentElement.dataset.theme = n ? "dark" : "light"; localStorage.setItem("arka-theme", n ? "dark" : "light"); };
  return <>
    <header className={`fixed left-0 top-0 z-50 w-full transition-all duration-700 ${scrolled ? "py-3" : "py-5 md:py-7"}`}>
      <div className={`container-site flex h-14 items-center justify-between px-4 transition-all duration-700 md:px-6 ${scrolled ? "border border-[var(--line)] bg-[var(--nav)] shadow-[0_10px_35px_rgba(0,0,0,.08)] backdrop-blur-xl" : path === "/" ? "text-white" : ""}`}>
        <Link href="/" className="group flex items-center gap-3" aria-label="Atelier Arka home">
          <span className="serif grid h-8 w-8 place-items-center border border-current text-lg italic">A</span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[.2em] sm:block">{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link key={href} href={href} className={`link-line text-[10px] uppercase tracking-[.16em] ${path === href ? "opacity-100" : "opacity-65 hover:opacity-100"}`}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="grid h-10 w-10 place-items-center" aria-label="Toggle color theme">{dark ? <Sun size={15} /> : <Moon size={15} />}</button>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="hidden border border-current px-4 py-3 text-[9px] font-semibold uppercase tracking-[.15em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] sm:block">Book a consultation</a>
          <button onClick={() => setMenu(true)} className="grid h-10 w-10 place-items-center lg:hidden" aria-label="Open menu"><Menu size={20} /></button>
        </div>
      </div>
    </header>
    <AnimatePresence>{menu && <motion.div className="fixed inset-0 z-[100] bg-[#14130f] text-[#eee9df]" initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .75, ease: [.76,0,.24,1] }}>
      <div className="container-site flex h-full flex-col py-6">
        <div className="flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.25em]">{siteConfig.name}</span><button onClick={() => setMenu(false)} aria-label="Close menu" className="p-3"><X /></button></div>
        <nav className="my-auto" aria-label="Mobile navigation">{nav.map(([label, href], i) => <motion.div key={href} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .2 + i * .08 }}><Link href={href} className="serif block border-b border-white/15 py-3 text-[clamp(2.7rem,13vw,5rem)] leading-none">{label}</Link></motion.div>)}</nav>
        <div className="grid grid-cols-2 gap-6 border-t border-white/15 pt-6 text-xs text-white/60"><p>{siteConfig.address}</p><div><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br/><a href={whatsappUrl()} target="_blank">WhatsApp →</a></div></div>
      </div>
    </motion.div>}</AnimatePresence>
  </>;
}
