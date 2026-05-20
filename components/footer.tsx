"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { config } from "@/lib/config";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/graph_media_2020/", label: "Instagram" },
];

const footerLinks = {
  services: [
    { name: "Logo Design", href: "#services" },
    { name: "Brand Identity", href: "#services" },
    { name: "Packaging Design", href: "#services" },
    { name: "Printing Services", href: "#services" },
    { name: "Motion Graphics", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-gold/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-serif font-bold gold-gradient-text mb-4">
              GRAPH MEDIA
            </div>
            <p className="text-beige/60 text-sm leading-relaxed mb-6">
              Premium branding agency crafting exceptional brand experiences for businesses worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-beige/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-beige/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm text-beige/60">
              <p>graphmedia2101@gmail.com</p>
              <p>WhatsApp: +{config.whatsapp.number}</p>
              <p>Worldwide Service</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-beige/40 text-sm">
            &copy; {new Date().getFullYear()} GRAPH MEDIA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-beige/40">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
