"use client";

import { motion } from "framer-motion";
import { Github, Play } from "lucide-react";
import Image from "next/image";

import ResumeButton from "@/components/button/ResumeButton";
import { memMoviesContent } from "@/constants/mem-movies";

export default function Hero() {
  const { hero } = memMoviesContent;

  return (
    <section className="relative w-full flex flex-col lg:flex-row items-center gap-12 py-20 px-4 md:px-0">
      <div className="flex-1 space-y-6">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-widest"
          initial={{ opacity: 0, scale: 0.9 }}
        >
          {hero.badge}
        </motion.div>
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
        >
          MEM <span className="text-primary">Movies</span>
        </motion.h1>
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="text-muted-foreground text-lg leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          {hero.description}
        </motion.p>
        <div className="flex flex-wrap gap-4 relative z-10">
          <a
            className="inline-block"
            href={hero.liveDemo}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ResumeButton className="flex cursor-pointer items-center gap-2 px-6 py-3">
              <Play fill="currentColor" size={18} />
              Live Demo
            </ResumeButton>
          </a>

          <a
            className="inline-block"
            href={hero.viewCode}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ResumeButton className="flex items-center gap-2 px-6 py-3 border-border text-foreground hover:shadow-[3px_3px_0_0_var(--color-primary)]/20">
              <Github size={18} />
              View Code
            </ResumeButton>
          </a>
        </div>
      </div>

      <motion.a
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 relative w-full aspect-video md:aspect-16/10 max-w-2xl rounded-xl overflow-hidden shadow-2xl shadow-primary/20 group cursor-pointer block z-0"
        href={hero.liveDemo}
        initial={{ opacity: 0, x: 50 }}
        rel="noopener noreferrer"
        target="_blank"
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Image
          fill
          priority
          alt={hero.title}
          className="object-fill transition-all duration-700 group-hover:scale-105 group-hover:brightness-50"
          fetchPriority="high"
          src={hero.image}
        />

        {/* Overlay layer */}
        <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="p-5 rounded-full bg-primary/90 text-background backdrop-blur-sm shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
            <Play fill="currentColor" size={32} />
          </div>
        </div>
      </motion.a>
    </section>
  );
}
