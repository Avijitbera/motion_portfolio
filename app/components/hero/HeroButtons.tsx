"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="flex justify-center gap-4"
    >
      <motion.button
        onClick={() => scrollToSection('contact')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
      >
        Contact Me
      </motion.button>
      <motion.button
        onClick={() => scrollToSection('projects')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-lg border border-primary px-6 py-3 text-white hover:bg-primary/10 border-solid border-white"
      >
        View Projects
      </motion.button>
    </motion.div>
  );
}