"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

import { projectManagementContent } from "@/constants/project-management";

const IconMap: { [key: string]: any } = {
  "React 18": SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Redux Toolkit": SiRedux,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  Express: SiExpress,
};

export default function TechStack() {
  const { techStack } = projectManagementContent;

  return (
    <section className="py-24 text-center">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {techStack.title}
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6">
        {techStack.items.map((tech, index) => {
          const Icon = IconMap[tech.name] || SiReact;

          return (
            <motion.div
              key={index}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Icon className="text-xl text-primary group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm tracking-tight">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
