"use client";

import { IconBrandTelegram } from "@tabler/icons-react";
import { motion } from "motion/react";

export function FloatingTelegramButton() {
  return (
    <motion.a
      href="https://t.me/komilova_sh_7"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#229ED9] shadow-lg shadow-[#229ED9]/25 backdrop-blur-xl transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#229ED9]/30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact via Telegram"
    >
      <IconBrandTelegram className="h-7 w-7 text-white" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-500" />
      </span>
    </motion.a>
  );
}
