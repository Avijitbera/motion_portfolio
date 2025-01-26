"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export default function ParticleCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      addParticle(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const addParticle = (x: number, y: number) => {
    const newParticle: Particle = {
      id: Date.now(),
      x,
      y,
      opacity: 1,
    };

    setParticles((prev) => [...prev.slice(-5), newParticle]);
  };

  return (
    <>
      <div
        className="pointer-events-none fixed z-50 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transition: 'all 0.15s ease',
        }}
      />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
          initial={{ x: particle.x, y: particle.y, opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          style={{ left: particle.x, top: particle.y }}
        />
      ))}
    </>
  );
}