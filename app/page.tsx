import { title, subtitle } from "@/components/primitives";
import ResumeButton from "@/components/button/resume-button";
import ScrollFadeIn from "@/components/animation/scroll-fade-in";
import { About } from "@/features/porfolio/components/about";
import { Skill } from "@/features/porfolio/components/skill";
import { Experience } from "@/features/porfolio/components/experience";
import { Work } from "@/features/porfolio/components/work";
import { OtherWork } from "@/features/porfolio/components/other-work";
import { Contact } from "@/features/porfolio/components/contact";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-start px-6 max-w-4xl text-left justify-center min-h-[100vh] h-screen">
        <span className={subtitle({ class: "text-primary mb-4", size: "lg" })}>
          Hi, my name is&nbsp;
        </span>
        <span className={title({ size: "xl" })}>
          Nguyen Duc&nbsp;
          <span className={title({ color: "cyan", size: "xl" })}>
            Cuong.&nbsp;
          </span>
        </span>

        <br />
        <span
          className={title({ size: "xl", color: "foreground", class: "-mt-4" })}
        >
          I am fullstack developer.
        </span>
        <div
          className={subtitle({
            class: "mt-8 text-clip max-w-xl text-left",
            size: "xs",
          })}
        >
          Hi there! I create web apps and enjoy learning new tech. This site is
          where I share and growth as a developer. It’s a space for me to
          reflect on my experiences, document what I’ve learned.
        </div>
        <ResumeButton
          className="text-sm lg:text-md my-8 py-3 lg:py-7 rounded-s rounded-e"
          size="lg"
        >
          <div className="px-4">Check out my resume!</div>
        </ResumeButton>
      </div>
      <ScrollFadeIn delay={0.1}>
        <About />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.1}>
        <Skill />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.1}>
        <Experience />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.1}>
        <Work />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.1}>
        <OtherWork />
      </ScrollFadeIn>
      <ScrollFadeIn delay={0.1}>
        <Contact />
      </ScrollFadeIn>
    </section>
  );
}
