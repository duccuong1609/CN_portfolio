import { title, subtitle } from "@/components/primitives";
import ResumeButton from "@/components/button/resume-button";
import { About } from "@/components/about/about";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 lg:py-8 md:py-10">
      <div className="inline-block px-6 max-w-4xl text-left justify-center h-screen">
        <span className={subtitle({ class: "text-primary mb-4", size: "lg" })}>
          Hi, my name is&nbsp;
        </span>
        <span className={title({ size: "xl" })}>Nguyen Duc&nbsp;</span>
        <span className={title({ color: "cyan", size: "xl" })}>
          Cuong.&nbsp;
        </span>
        <br />
        <span className={title({ size: "xl", color: "foreground" })}>
          I am fullstack developer.
        </span>
        <div
          className={subtitle({
            class: "mt-8 text-clip max-w-2xl text-justify",
            size: "xs",
          })}
        >
          Hi there! I enjoy building web applications and discovering new
          technologies along the way. This is my personal website where I share
          the projects I’ve created, the things I’ve learned, and some thoughts
          from my journey as a developer. It’s a space for me to document what I
          care about and how I’ve grown through building and learning.
        </div>
        <ResumeButton
          className="text-sm lg:text-md my-8 py-3 lg:py-7 rounded-s rounded-e"
          size="lg"
        >
          <div className="px-4">Check out my resume!</div>
        </ResumeButton>
      </div>
      <About />
      {/* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */}

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    </section>
  );
}
