"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projectCategories, projects } from "@/data/projects";

export function PortfolioGrid(){const [filter,setFilter]=useState<(typeof projectCategories)[number]>("All");const list=filter==="All"?projects:projects.filter(p=>p.category===filter);return <><div className="no-scrollbar flex gap-7 overflow-x-auto border-b border-[var(--line)] pb-5">{projectCategories.map(c=><button key={c} onClick={()=>setFilter(c)} className={`whitespace-nowrap text-[10px] uppercase tracking-[.16em] ${filter===c?"text-accent":"text-muted"}`}>{c}</button>)}</div><motion.div layout className="mt-14 grid gap-x-6 gap-y-20 md:grid-cols-2"> <AnimatePresence>{list.map((p,i)=><motion.article layout initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.97}} key={p.slug} className={`${i%3===1?"md:mt-24":""}`}><Link href={`/portfolio/${p.slug}`} data-cursor="VIEW"><div className={`image-cover ${i%2?"aspect-[4/5]":"aspect-[5/4]"}`}><Image src={p.cover} alt={p.title} fill sizes="(max-width:768px) 100vw, 50vw"/></div><div className="mt-5 flex justify-between border-t border-[var(--line)] pt-4"><div><h2 className="serif text-3xl md:text-4xl">{p.title}</h2><p className="mt-2 text-[9px] uppercase tracking-[.15em] text-muted">{p.location} · {p.year}</p></div><span className="text-[9px] uppercase tracking-[.15em] text-accent">{p.category}</span></div></Link></motion.article>)}</AnimatePresence></motion.div></>}
