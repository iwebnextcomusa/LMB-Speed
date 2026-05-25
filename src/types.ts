export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string; // Name of Lucide icon
  features: string[];
  basePrice?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  vehicle: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: "tuning" | "fabrication" | "engine" | "upgrade" | "all";
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteEstimateItem {
  id: string;
  name: string;
  price: number;
  category: string;
}
