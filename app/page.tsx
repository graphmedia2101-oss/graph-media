import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { getPortfolio, getCategories, getTestimonials } from "@/lib/sheets";

export default async function Home() {
  // Fetch data from Google Sheets (or use defaults)
  const [portfolio, categories, testimonials] = await Promise.all([
    getPortfolio(),
    getCategories(),
    getTestimonials(),
  ]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection portfolio={portfolio} categories={categories} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
