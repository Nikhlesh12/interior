import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  const external = href.startsWith("http");
  const styles = `group inline-flex items-center gap-5 border px-6 py-4 text-[10px] font-semibold uppercase tracking-[.17em] transition-colors duration-500 ${light ? "border-white/35 text-white hover:bg-white hover:text-black" : "border-[var(--line)] hover:bg-[var(--ink)] hover:text-[var(--paper)]"}`;
  const content = <><span>{children}</span><ArrowUpRight size={15} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" /></>;
  return external
    ? <a href={href} target="_blank" rel="noreferrer" className={styles} data-cursor="OPEN">{content}</a>
    : <Link href={href} className={styles} data-cursor="OPEN">{content}</Link>;
}
