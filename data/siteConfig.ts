export const siteConfig = {
  name: "Atelier Arka",
  shortName: "AA",
  descriptor: "Interior Architecture · Objects",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://atelierarka.example.com",
  email: "studio@atelierarka.in",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "14, The Design District, Bengaluru, Karnataka 560001",
  socials: {
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
  },
  whatsappMessage:
    "Hello, I visited your website and would like to discuss my interior design requirements.",
};

export function whatsappUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
