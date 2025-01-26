"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import GlowingCursor from "./cursor/GlowingCursor";
import HeroTitle from "./hero/HeroTitle";
import HeroButtons from "./hero/HeroButtons";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <GlowingCursor />

      <div className="absolute inset-0">
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <Sphere args={[1, 100, 150]} scale={2.4}>
            <meshStandardMaterial
              color="#2a0845"
              wireframe
              roughness={0.5}
              metalness={0.5}
            />
          </Sphere>
        </Canvas>
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <HeroTitle />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-8 text-2xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent"
          >
            Full Stack & Flutter Developer
          </motion.p>
          
          <HeroButtons />
        </div>
      </div>
    </section>
  );
}