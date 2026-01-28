import { title, subtitle } from "@/components/primitives";
import ResumeButton from "@/components/button/resume-button";
import ScrollFadeIn from "@/components/animation/scroll-fade-in";
import { About } from "@/features/about";
import { Skill } from "@/features/skill";
import { Experience } from "@/features/experience";
import { Work } from "@/features/work";
import { OtherWork } from "@/features/other-work";
import { Contact } from "@/features/contact";
import Footer from "@/components/footer";
import { Fragment } from "react";
import { Introduce } from "@/features/introduce";
import Background from "@/components/background";

export default function Home() {
  return (
    <Fragment>
      <Background />
      <main className="relative z-10">
        <Introduce />
        <About />
        <Skill />
        <Experience />
        <Work />
        <OtherWork />
        <Contact />
        <Footer />
      </main>
    </Fragment>
  );
}
