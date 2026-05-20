"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { config, whatsappMessages } from "@/lib/config";
import type { PortfolioItem, Category } from "@/lib/sheets";

interface PortfolioSectionProps {
  portfolio: PortfolioItem[];
  categories: Category[];
}

export function PortfolioSection({ portfolio, categories }: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95" />
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6"
          >
            Featured <span className="gold-gradient-text">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-beige/70 max-w-2xl mx-auto text-lg"
          >
            Explore our curated collection of premium branding projects that
            showcase our commitment to excellence and creativity.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-gold text-black gold-glow-sm"
                  : "glass text-beige/70 hover:text-gold hover:border-gold/50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item, index) => (
              <motion.a
                key={item.id}
                href={config.whatsapp.getLink(whatsappMessages.portfolio(item.title, item.category))}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="text-gold text-xs font-medium uppercase tracking-wider mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-cream mb-2 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-beige/60 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-medium">Inquire Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 rounded-xl transition-colors duration-300" />
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={config.whatsapp.getLink("Hello! I'd like to see more of your portfolio work.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold/50 text-gold font-semibold rounded hover:bg-gold/10 transition-colors"
          >
            View Full Portfolio
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
