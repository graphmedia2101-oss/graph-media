import { config } from "@/lib/config";

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

// Fetch data from Google Sheets
async function fetchSheetData<T>(sheetName: string): Promise<T[]> {
  if (!config.sheets.id || !config.sheets.apiKey) {
    return [];
  }

  try {
    const response = await fetch(config.sheets.getSheetUrl(sheetName), {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error(`Failed to fetch ${sheetName}:`, response.statusText);
      return [];
    }

    const data = await response.json();
    
    if (!data.values || data.values.length < 2) {
      return [];
    }

    const headers = data.values[0] as string[];
    const rows = data.values.slice(1) as string[][];

    return rows.map((row, index) => {
      const item: Record<string, string> = { id: String(index + 1) };
      headers.forEach((header, i) => {
        item[header.toLowerCase().replace(/\s+/g, "")] = row[i] || "";
      });
      return item as T;
    });
  } catch (error) {
    console.error(`Error fetching ${sheetName}:`, error);
    return [];
  }
}

export async function getPortfolio(): Promise<PortfolioItem[]> {
  const data = await fetchSheetData<PortfolioItem>("Portfolio");
  return data.length > 0 ? data : defaultPortfolio;
}

export async function getCategories(): Promise<Category[]> {
  const data = await fetchSheetData<Category>("Categories");
  return data.length > 0 ? data : defaultCategories;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await fetchSheetData<Testimonial>("Testimonials");
  return data.length > 0 ? data : defaultTestimonials;
}

// Default/Demo data when Google Sheets is not connected
export const defaultPortfolio: PortfolioItem[] = [
  {
    id: "1",
    title: "Luxe Cosmetics Brand",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "Complete brand identity for luxury cosmetics line",
  },
  {
    id: "2",
    title: "Artisan Coffee Packaging",
    category: "Packaging Design",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop",
    description: "Premium packaging for artisan coffee brand",
  },
  {
    id: "3",
    title: "Royal Hotel Stationery",
    category: "Logo Design",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop",
    description: "Elegant stationery suite for luxury hotel",
  },
  {
    id: "4",
    title: "Fashion Week Campaign",
    category: "Social Media Design",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop",
    description: "Dynamic social media campaign for fashion week",
  },
  {
    id: "5",
    title: "Premium Watch Brand",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    description: "Sophisticated brand identity for luxury watches",
  },
  {
    id: "6",
    title: "Organic Skincare Line",
    category: "Packaging Design",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=600&fit=crop",
    description: "Eco-friendly packaging for organic skincare",
  },
  {
    id: "7",
    title: "Tech Startup Logo",
    category: "Logo Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    description: "Modern minimalist logo for tech startup",
  },
  {
    id: "8",
    title: "Restaurant Signage",
    category: "Signage Design",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop",
    description: "Elegant signage for fine dining restaurant",
  },
];

export const defaultCategories: Category[] = [
  { id: "1", name: "All", description: "View all projects" },
  { id: "2", name: "Brand Identity", description: "Complete brand systems" },
  { id: "3", name: "Logo Design", description: "Distinctive logos" },
  { id: "4", name: "Packaging Design", description: "Premium packaging" },
  { id: "5", name: "Social Media Design", description: "Digital content" },
  { id: "6", name: "Signage Design", description: "Environmental graphics" },
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    company: "Luxe Beauty Co.",
    role: "CEO",
    content: "GRAPH MEDIA transformed our brand completely. Their attention to detail and understanding of luxury aesthetics is unmatched. Our sales increased by 40% after the rebrand.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    company: "Artisan Coffee House",
    role: "Founder",
    content: "The packaging design exceeded our expectations. Every customer comments on how premium our products look. Truly world-class design work.",
    rating: 5,
  },
  {
    id: "3",
    name: "Emma Williams",
    company: "Royal Hotels Group",
    role: "Marketing Director",
    content: "Professional, creative, and incredibly talented team. They delivered our brand identity on time and the quality speaks for itself. Highly recommended!",
    rating: 5,
  },
  {
    id: "4",
    name: "David Park",
    company: "TechVision Labs",
    role: "Co-Founder",
    content: "GRAPH MEDIA understands how to create a brand that resonates. Our logo and identity system perfectly captures our innovative spirit.",
    rating: 5,
  },
];
