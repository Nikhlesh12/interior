export type Project = {
  slug: string;
  title: string;
  location: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Architecture" | "Furniture";
  year: string;
  area: string;
  cover: string;
  gallery: string[];
  description: string;
  philosophy: string;
  challenge: string;
  solution: string;
  materials: string[];
};

const images = {
  warm: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88",
  villa: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88",
  penthouse: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=88",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88",
  hotel: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=88",
  retail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88",
  detail: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=2200&q=88",
  stone: "https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=2200&q=88",
};

export const projects: Project[] = [
  { slug: "courtyard-house", title: "The Courtyard House", location: "Alibaug", category: "Residential", year: "2026", area: "8,400 sq. ft.", cover: images.warm, gallery: [images.warm, images.detail, images.stone], description: "A quiet coastal home composed around shadow, stone and the changing arc of daylight.", philosophy: "Rooms are treated as pauses in a continuous landscape rather than isolated enclosures.", challenge: "To make a generous retreat feel intimate while remaining open to sea air and monsoon light.", solution: "A sequence of sheltered courts modulates scale, climate and privacy across the residence.", materials: ["Honed limestone", "Smoked oak", "Hand-finished plaster", "Aged bronze"] },
  { slug: "monsoon-villa", title: "Monsoon Villa", location: "Goa", category: "Architecture", year: "2025", area: "11,200 sq. ft.", cover: images.villa, gallery: [images.villa, images.stone, images.penthouse], description: "Tropical modernism shaped by deep overhangs, planted thresholds and rooms open to rain.", philosophy: "Architecture should choreograph climate, not seal it out.", challenge: "Balance strong monsoon protection with year-round permeability.", solution: "Layered verandas and shaded water courts create natural ventilation and soft reflected light.", materials: ["Laterite", "Teak", "Lime render", "Flamed granite"] },
  { slug: "skyline-residence", title: "Skyline Residence", location: "Mumbai", category: "Residential", year: "2025", area: "5,600 sq. ft.", cover: images.penthouse, gallery: [images.penthouse, images.warm, images.detail], description: "A restrained penthouse where art, horizon and beautifully resolved joinery hold the space.", philosophy: "Luxury is the removal of noise and the precision of what remains.", challenge: "Unify two apartments without losing human scale.", solution: "A central timber spine conceals services while framing long, calm views across the city.", materials: ["Travertine", "Oak veneer", "Patinated brass", "Natural linen"] },
  { slug: "common-ground", title: "Common Ground", location: "Bengaluru", category: "Commercial", year: "2024", area: "18,000 sq. ft.", cover: images.office, gallery: [images.office, images.detail, images.villa], description: "A workplace imagined as a series of communal rooms, gardens and focused ateliers.", philosophy: "Good workplaces offer choice, dignity and a sense of belonging.", challenge: "Create multiple work modes in a deep corporate floorplate.", solution: "Daylit internal streets connect collaborative lounges with acoustic work sanctuaries.", materials: ["Recycled timber", "Acoustic felt", "Blackened steel", "Terrazzo"] },
  { slug: "house-of-stillness", title: "House of Stillness", location: "Udaipur", category: "Hospitality", year: "2024", area: "26,000 sq. ft.", cover: images.hotel, gallery: [images.hotel, images.stone, images.warm], description: "An intimate retreat rooted in the tactile quiet of Rajasthan's stone architecture.", philosophy: "Hospitality begins with a sense of refuge.", challenge: "Reference local history without resorting to pastiche.", solution: "Contemporary courtyards, carved screens and local craft are expressed with radical restraint.", materials: ["Makrana marble", "Sandstone", "Cane", "Burnished lime"] },
  { slug: "form-and-grain", title: "Form & Grain", location: "New Delhi", category: "Furniture", year: "2026", area: "3,100 sq. ft.", cover: images.retail, gallery: [images.retail, images.detail, images.penthouse], description: "A gallery for collectible furniture, using shadow and mass to give each object its own field.", philosophy: "An object is best understood when the room gives it silence.", challenge: "Create a retail experience without visible retail conventions.", solution: "Monolithic platforms and focused natural light transform browsing into a slow procession.", materials: ["Microcement", "Walnut", "Bronze", "Raw silk"] },
];

export const projectCategories = ["All", "Residential", "Commercial", "Hospitality", "Architecture", "Furniture"] as const;
