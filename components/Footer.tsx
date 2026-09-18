import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig, whatsappUrl } from "@/data/siteConfig";

export function Footer() {
  return <footer className="bg-[#11110f] pb-8 pt-24 text-[#eee9df] md:pt-36">
    <div className="container-site">
      <p className="eyebrow text-[#b79067]">A considered life, by design</p>
      <h2 className="serif mt-6 max-w-5xl text-[clamp(3.8rem,9vw,9rem)] leading-[.82] tracking-[-.055em]">Spaces that feel<br/><i>as good as they look.</i></h2>
      <div className="mt-20 grid gap-12 border-y border-white/15 py-12 md:grid-cols-4">
        <div><p className="eyebrow mb-5 text-white/45">Navigate</p>{[["Home","/"],["About","/about"],["Portfolio","/portfolio"],["Furniture","/furniture"],["Contact","/contact"]].map(x=><Link className="mb-2 block text-sm" key={x[1]} href={x[1]}>{x[0]}</Link>)}</div>
        <div className="md:col-span-2"><p className="eyebrow mb-5 text-white/45">What we do</p><div className="grid grid-cols-2 gap-x-5">{services.slice(0,6).map(s=><span className="mb-2 text-sm" key={s.number}>{s.title}</span>)}</div></div>
        <div><p className="eyebrow mb-5 text-white/45">Begin a conversation</p><a className="mb-2 block text-sm" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a className="mb-2 block text-sm" href={`tel:${siteConfig.phone.replaceAll(" ","")}`}>{siteConfig.phone}</a><a className="text-sm text-[#b79067]" href={whatsappUrl()} target="_blank">WhatsApp us →</a></div>
      </div>
      <div className="flex flex-wrap items-end justify-between gap-8 pt-8"><div><p className="serif text-4xl">Atelier Arka</p><p className="mt-2 text-[9px] uppercase tracking-[.2em] text-white/40">Interior Architecture · Objects</p></div><div className="flex gap-6 text-[10px] uppercase tracking-[.15em]"><a href={siteConfig.socials.instagram}>Instagram</a><a href={siteConfig.socials.pinterest}>Pinterest</a><a href="#top" aria-label="Back to top"><ArrowUp size={15}/></a></div><p className="w-full text-[9px] uppercase tracking-[.12em] text-white/35 md:w-auto">© {new Date().getFullYear()} Atelier Arka</p></div>
    </div>
  </footer>;
}
