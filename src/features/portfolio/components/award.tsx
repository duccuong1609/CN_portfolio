import { ExternalLink, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ScrollFadeIn from "@/components/animation/ScrollFadeIn";
import { awards } from "@/constants/award";

export const Award = () => {
  return (
    <div
      className="flex flex-col max-w-4xl xl:max-w-5xl items-center justify-center w-full py-16"
      id="award"
    >
      <h2 className="flex items-center text-2xl font-bold w-full px-4 mb-4">
        <span className="text-primary mr-3">05.</span>
        Awards
        <span className="ml-4 h-px flex-1 bg-border" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4">
        {awards.map((award, index) => (
          <ScrollFadeIn key={index} delay={0.1 * (index + 1)}>
            <div className="group relative h-full flex flex-col p-6 rounded-xl border border-border bg-card/40 backdrop-blur-sm hover:bg-card/60 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Trophy size={24} />
                </div>
                {award.href && (
                  <Link
                    aria-label={`View award: ${award.title}`}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    href={award.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink size={20} />
                  </Link>
                )}
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {award.description}
                </p>

                {/* Award Images */}
                {award.images && award.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 flex-1">
                    {award.images.map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative overflow-hidden h-full rounded-md border border-border/50 shadow-xs group/img flex-1"
                      >
                        <Image
                          alt={`${award.title} - ${imgIdx + 1}`}
                          className="object-cover h-full w-full transition-transform duration-500 group-hover/img:scale-110"
                          height={100}
                          src={img}
                          width={150}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-auto">
                <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">
                  {award.date}
                </span>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
};
