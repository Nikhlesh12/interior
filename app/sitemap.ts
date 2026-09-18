import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
export default function sitemap():MetadataRoute.Sitemap{const pages=["","/about","/portfolio","/furniture","/contact"];return [...pages.map(p=>({url:`${siteConfig.siteUrl}${p}`,lastModified:new Date(),changeFrequency:"monthly" as const,priority:p===""?1:.8})),...projects.map(p=>({url:`${siteConfig.siteUrl}/portfolio/${p.slug}`,lastModified:new Date(),changeFrequency:"yearly" as const,priority:.7}))]}
