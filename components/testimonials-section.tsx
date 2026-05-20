"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/sheets";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black to-black/95" />
      
      {/* Gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold font-medium mb-4 tracking-wider uppercase text-sm"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6"
          >
            Client <span className="gold-gradient-text">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-beige/70 max-w-2xl mx-auto text-lg"
          >
            Hear from businesses we have helped transform through premium branding and design.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-2xl p-8 relative group hover:glass-gold transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-12 h-12 text-gold" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-beige/80 text-lg leading-relaxed mb-8 relative z-10">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                  <span className="text-black font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-cream">{testimonial.name}</div>
                  <div className="text-sm text-gold">{testimonial.role}</div>
                  <div className="text-sm text-beige/60">{testimonial.company}</div>
                </div>
              </div>

              {/* Gold glow on hover */}
              <div className="absolute inset-0 rounded-2xl gold-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
