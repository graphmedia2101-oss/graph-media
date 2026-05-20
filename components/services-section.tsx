"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Palette,
  Fingerprint,
  Package,
  Printer,
  Play,
  Share2,
  Signpost,
  Megaphone,
  Globe,
  PartyPopper,
} from "lucide-react";
import { config, whatsappMessages } from "@/lib/config";

const services = [
  {
    icon: Palette,
    title: "Logo Design",
    description: "Distinctive logos that capture your brand essence and leave lasting impressions.",
  },
  {
    icon: Fingerprint,
    title: "Brand Identity",
    description: "Complete visual identity systems that tell your unique brand story.",
  },
  {
    icon: Package,
    title: "Packaging Design",
    description: "Premium packaging that elevates your product and delights customers.",
  },
  {
    icon: Printer,
    title: "Printing Services",
    description: "High-quality print production with premium finishes and materials.",
  },
  {
    icon: Play,
    title: "Motion Graphics",
    description: "Dynamic animations that bring your brand to life across digital platforms.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    description: "Scroll-stopping content that grows your audience and engagement.",
  },
  {
    icon: Signpost,
    title: "Signage Design",
    description: "Impactful signage solutions for retail, corporate, and outdoor spaces.",
  },
  {
    icon: Megaphone,
    title: "Outdoor Advertising",
    description: "Bold outdoor campaigns that capture attention and drive results.",
  },
  {
    icon: Globe,
    title: "Website Graphics",
    description: "Web visuals that enhance user experience and strengthen brand presence.",
  },
  {
    icon: PartyPopper,
    title: "Event Branding",
    description: "Memorable event experiences through cohesive visual branding.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      {/* Gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6"
          >
            What We <span className="gold-gradient-text">Create</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-beige/70 max-w-2xl mx-auto text-lg"
          >
            From concept to completion, we deliver comprehensive branding solutions
            that transform businesses and create lasting impressions.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={config.whatsapp.getLink(whatsappMessages.service(service.title))}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass rounded-xl p-6 cursor-pointer transition-all duration-300 hover:glass-gold"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors gold-glow-sm">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-cream mb-2 group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-beige/60 leading-relaxed">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-4 flex items-center gap-2 text-gold/0 group-hover:text-gold/80 transition-all">
                <span className="text-xs font-medium">Inquire Now</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="text-xs"
                >
                  &rarr;
                </motion.span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
