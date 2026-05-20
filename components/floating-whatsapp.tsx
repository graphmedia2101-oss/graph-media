"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { config, whatsappMessages } from "@/lib/config";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-3 glass rounded-xl p-4 min-w-[200px]"
          >
            <p className="text-cream text-sm font-medium mb-1">Need help?</p>
            <p className="text-beige/60 text-xs">Chat with us on WhatsApp</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={config.whatsapp.getLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-gold rounded-full flex items-center justify-center gold-glow cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 text-black" />
      </motion.a>
    </div>
  );
}
