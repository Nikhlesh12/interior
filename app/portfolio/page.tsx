import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PortfolioGrid } from "@/components/PortfolioGrid";
export const metadata:Metadata={title:"Portfolio",description:"Explore residential, commercial, hospitality and architectural projects by Atelier Arka.",alternates:{canonical:"/portfolio"}};
export default function PortfolioPage(){return <><PageHero eyebrow="Selected work / 2016—2026" title="A gallery of" italic="lived experience." intro="Homes, retreats and workplaces shaped around people, place and the passage of time."/><section className="pb-28 md:pb-44"><div className="container-site"><PortfolioGrid/></div></section></>}
