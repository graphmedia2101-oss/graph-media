"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { config, whatsappMessages } from "@/lib/config";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // GSAP animations for floating elements
    const floatingElements = document.querySelectorAll(".floating-element");
    floatingElements.forEach((el, i) => {
      gsap.to(el, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-5, 5)",
        duration: "random(3, 5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black/90" />
      
      {/* Gold accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm text-gold font-medium">Premium Branding Agency</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight text-balance"
            >
              <span className="text-cream">Crafting</span>{" "}
              <span className="gold-gradient-text gold-text-glow">Premium</span>{" "}
              <span className="text-cream">Brand Experiences</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-beige/80 max-w-xl leading-relaxed"
            >
              {config.company.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href={config.whatsapp.getLink(whatsappMessages.startBrand)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black font-semibold rounded luxury-btn gold-glow group"
              >
                Start Your Brand
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/50 text-gold font-semibold rounded hover:bg-gold/10 transition-colors"
              >
                Explore Portfolio
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-8 pt-8 border-t border-gold/20"
            >
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "10+", label: "Years Experience" },
                { value: "200+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold gold-gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-beige/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Floating Showcase */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            {/* Floating mockup elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="floating-element absolute top-[10%] right-[10%] w-64 h-40 glass rounded-lg overflow-hidden gold-glow-sm"
            >
              <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gold font-serif text-xl mb-2">Business Card</div>
                  <div className="text-beige/60 text-sm">Premium Design</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="floating-element absolute top-[30%] left-[5%] w-48 h-48 glass rounded-lg overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-br from-black to-black/80 flex items-center justify-center border border-gold/20">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <span className="text-black font-serif font-bold text-2xl">G</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="floating-element absolute bottom-[20%] right-[5%] w-56 h-72 glass rounded-lg overflow-hidden"
            >
              <div className="w-full h-full bg-gradient-to-b from-black via-black/90 to-gold/10 flex flex-col items-center justify-center p-6">
                <div className="text-gold font-serif text-lg mb-4">Packaging</div>
                <div className="w-full h-32 bg-gradient-to-br from-gold/10 to-transparent rounded border border-gold/20" />
                <div className="text-beige/60 text-xs mt-4">Luxury Box Design</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="floating-element absolute bottom-[10%] left-[20%] w-40 h-24 glass rounded-lg overflow-hidden gold-glow-sm"
            >
              <div className="w-full h-full bg-gradient-to-r from-gold/20 to-gold/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gold font-serif text-sm">Letterhead</div>
                  <div className="text-beige/60 text-xs">Stationery</div>
                </div>
              </div>
            </motion.div>

            {/* Gold gradient orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
