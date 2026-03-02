"use client";

import { motion } from "framer-motion";

import { memMoviesContent } from "@/constants/mem-movies";

export default function Overview() {
  const { overview, features } = memMoviesContent;

  return (
    <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            {overview.title}
            <span className="h-px w-12 bg-primary/60" />
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg italic">
            &quot;{overview.description}&quot;
          </p>
        </div>

        <div className="space-y-6">
          {overview.details.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 group"
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="p-3 rounded-lg bg-card border border-border text-primary group-hover:border-primary/40 transition-colors">
                <detail.icon size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">
                  {detail.label}
                </p>
                <p className="font-semibold">{detail.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <h2 className="col-span-full text-3xl font-bold mb-2 flex items-center gap-3">
          {features.title}
          <span className="h-px w-12 bg-primary/60" />
        </h2>
        {features.items.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group shadow-sm hover:shadow-md"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4 text-primary p-2 w-fit rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-background transition-colors">
              <feature.icon size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
