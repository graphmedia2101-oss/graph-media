"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { config, whatsappMessages } from "@/lib/config";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black" />
      
      {/* Gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-gold rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm"
            >
              Start Your Project
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-cream mb-6"
            >
              Ready to <span className="gold-gradient-text gold-text-glow">Transform</span> Your Brand?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-beige/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            >
              Let&apos;s discuss how we can elevate your business through premium branding and creative design. Your success story starts here.
            </motion.p>

            <motion.a
              href={config.whatsapp.getLink(whatsappMessages.startBrand)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-black font-bold text-lg rounded-lg luxury-btn gold-glow group"
            >
              <MessageCircle className="w-6 h-6" />
              Let&apos;s Build Your Brand
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              icon: MessageCircle,
              title: "WhatsApp",
              value: "Message Us",
              link: config.whatsapp.getLink(whatsappMessages.general),
            },
            {
              icon: Mail,
              title: "Email",
              value: "graphmedia2101@gmail.com",
              link: "mailto:graphmedia2101@gmail.com",
            },
            {
              icon: MapPin,
              title: "Location",
              value: "Worldwide Service",
              link: "#",
            },
          ].map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl p-6 flex items-center gap-4 hover:glass-gold transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-sm text-beige/60">{item.title}</div>
                <div className="font-semibold text-cream group-hover:text-gold transition-colors">
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
