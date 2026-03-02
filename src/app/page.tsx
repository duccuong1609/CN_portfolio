import type { Metadata } from "next";

import { About } from "@/features/portfolio/components/about";
import { Skill } from "@/features/portfolio/components/skill";
import { Experience } from "@/features/portfolio/components/experience";
import { Work } from "@/features/portfolio/components/work";
import { OtherWork } from "@/features/portfolio/components/other-work";
import { Contact } from "@/features/portfolio/components/contact";
import ScrollFadeIn from "@/components/animation/ScrollFadeIn";
import ResumeButton from "@/components/button/ResumeButton";
import { siteConfig } from "@/constants/site";
import { Award } from "@/features/portfolio/components/award";

export const metadata: Metadata = {
  title: "Nguyen Duc Cuong | Fullstack Developer",
  description: siteConfig.description,
};

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* Hero */}
      <div className="flex flex-col items-start px-6 max-w-4xl text-left justify-center min-h-screen pt-20">
        <p className="text-primary font-mono text-sm mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          Nguyen Duc <span className="text-primary">Cuong.</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mt-2 leading-tight">
          I build things for the web.
        </h2>
        <p className="mt-6 max-w-lg text-muted-foreground text-sm leading-relaxed">
          Hi there! I create web apps and enjoy learning new tech. This site is
          where I share and grow as a developer. It&apos;s a space for me to
          reflect on my experiences and document what I&apos;ve learned.
        </p>
        <a
          className="mt-10"
          href={siteConfig.resume.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ResumeButton className="text-sm py-3 px-6">
            Check out my resume!
          </ResumeButton>
        </a>
      </div>

      {/* Sections */}
      <ScrollFadeIn className="w-full flex flex-col items-center" delay={0.1}>
        <About />
      </ScrollFadeIn>
      <ScrollFadeIn className="w-full flex flex-col items-center" delay={0.1}>
        <Skill />
      </ScrollFadeIn>
      <ScrollFadeIn className="w-full flex flex-col items-center" delay={0.1}>
        <Experience />
      </ScrollFadeIn>
      <ScrollFadeIn className="w-full flex flex-col items-center" delay={0.1}>
        <Work />
      </ScrollFadeIn>
      <ScrollFadeIn className="w-full flex flex-col items-center" delay={0.1}>
        <OtherWork />
      </ScrollFadeIn>
      <ScrollFadeIn className="w-full flex flex-col items-center" delay={0.1}>
        <Award />
      </ScrollFadeIn>
      <ScrollFadeIn className="w-full flex flex-col items-center" delay={0.1}>
        <Contact />
      </ScrollFadeIn>
    </section>
  );
}
