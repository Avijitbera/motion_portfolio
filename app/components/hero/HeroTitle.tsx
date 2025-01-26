"use client";

import { motion } from "framer-motion";

export default function HeroTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-6xl font-bold text-transparent"
        animate={{ 
          textShadow: [
            "0 0 5px rgba(124, 58, 237, 0)",
            "0 0 20px rgba(124, 58, 237, 0.5)",
            "0 0 5px rgba(124, 58, 237, 0)"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        Avijit Bera
      </motion.h1>
    </motion.div>
  );
}