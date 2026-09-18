import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["400", "500", "600"], display: "swap" });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: { default: `${siteConfig.name} — Interior Architecture & Objects`, template: `%s — ${siteConfig.name}` },
  description: "Luxury interior design, architecture and bespoke furniture shaped with quiet confidence and meticulous craft.",
  openGraph: { type: "website", siteName: siteConfig.name, images: ["/images/hero-atelier-arka.png"] },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": ["ProfessionalService", "LocalBusiness"], name: siteConfig.name, url: siteConfig.siteUrl, telephone: siteConfig.phone, email: siteConfig.email, address: siteConfig.address };
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Providers><Header /><main>{children}</main><Footer /></Providers>
      </body>
    </html>
  );
}
