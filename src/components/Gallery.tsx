"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryProps {
    images: string[];
    initialIndex?: number;
    isOpen: boolean;
    onClose: () => void;
}

export default function Gallery({ images, initialIndex = 0, isOpen, onClose }: GalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, initialIndex]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, handleNext, handlePrev]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-100 flex items-center justify-center bg-background/95 backdrop-blur-md"
                    onClick={onClose}
                >
                    {/* Controls */}
                    <div className="absolute top-6 right-6 flex items-center gap-4 z-110">
                        <span className="text-muted-foreground font-mono text-xs tracking-tighter">
                            {currentIndex + 1} / {images.length}
                        </span>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full bg-card border border-border text-foreground hover:text-primary hover:border-primary/50 transition-all"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className="absolute left-6 p-3 rounded-full bg-card/50 border border-border/50 text-foreground hover:text-primary hover:bg-card transition-all z-110 hidden md:block"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className="absolute right-6 p-3 rounded-full bg-card/50 border border-border/50 text-foreground hover:text-primary hover:bg-card transition-all z-110 hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Image Container */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full h-full max-w-5xl max-h-[80vh] px-4 flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/20 shadow-2xl">
                            <Image
                                src={images[currentIndex]}
                                alt={`Gallery image ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Thumbnails */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-110 px-4 overflow-hidden max-w-full">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                                className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${idx === currentIndex ? "border-primary scale-110" : "border-transparent opacity-50 hover:opacity-100"
                                    }`}
                            >
                                <Image src={img} alt="thumbnail" fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
