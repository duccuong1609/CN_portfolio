"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

import { memMoviesContent } from "@/constants/mem-movies";
import Gallery from "@/components/Gallery";

export default function VisualShowcase() {
  const { showcase } = memMoviesContent;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <section className="py-24 space-y-12">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, x: -20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        {showcase.title}
      </motion.h2>

      <div className="columns-1 md:columns-2 gap-8 space-y-8 [column-fill:balance]">
        {showcase.images.map((image: string, index: number) => (
          <motion.div
            key={index}
            className="break-inside-avoid mb-8 relative rounded-2xl overflow-hidden border border-border group shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            onClick={() => openGallery(index)}
          >
            <Image
              alt={`${showcase.title} ${index + 1}`}
              className="w-full h-auto transition-all duration-700 group-hover:scale-105 group-hover:brightness-50"
              height={800}
              src={image}
              width={1200}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="p-3 rounded-full bg-primary/90 text-background mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <Maximize2 size={24} />
              </div>
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                Click to expand
              </span>
            </div>

            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 group-hover:ring-primary/20 transition-all pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <Gallery
        images={showcase.images}
        initialIndex={activeIndex}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
}
