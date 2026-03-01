"use client";

import { motion } from "framer-motion";
import { memMoviesContent } from "@/constants/mem-movies";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiPrisma,
    SiVercel,
    SiPostgresql
} from "react-icons/si";

const IconMap: { [key: string]: any } = {
    NextJS: SiNextdotjs,
    TypeScript: SiTypescript,
    TailwindCSS: SiTailwindcss,
    Prisma: SiPrisma,
    Vercel: SiVercel,
    PostgreSQL: SiPostgresql,
};

export default function TechStack() {
    const { techStack } = memMoviesContent;

    return (
        <section className="py-24 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12"
            >
                {techStack.title}
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-6">
                {techStack.items.map((tech, index) => {
                    const Icon = IconMap[tech.icon] || SiNextdotjs;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                        >
                            <Icon className="text-xl text-primary group-hover:scale-110 transition-transform" />
                            <span className="font-mono text-sm tracking-tight">{tech.name}</span>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
