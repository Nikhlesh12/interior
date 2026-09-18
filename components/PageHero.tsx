import Image from "next/image";
export function PageHero({ eyebrow, title, italic, image, intro }: { eyebrow:string; title:string; italic?:string; image?:string; intro?:string }) {
  return <section id="top" className="relative min-h-[78svh] overflow-hidden pt-36 md:pt-44">{image&&<><Image src={image} alt="" fill priority className="object-cover" sizes="100vw"/><div className="absolute inset-0 bg-black/50"/></>}<div className={`container-site relative z-10 flex min-h-[60svh] flex-col justify-end pb-14 ${image?"text-white":""}`}><p className="eyebrow text-accent">{eyebrow}</p><h1 className="serif display-xl mt-7 max-w-6xl">{title}<br/>{italic&&<i>{italic}</i>}</h1>{intro&&<p className={`mt-10 max-w-xl text-sm leading-7 ${image?"text-white/70":"text-muted"}`}>{intro}</p>}</div></section>;
}
