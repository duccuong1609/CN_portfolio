import { Link } from "@heroui/link";
import ResumeButton from "@/components/button/resume-button";
import ScrollFadeIn from "@/components/animation/scroll-fade-in";

export const Contact = () => {
  return (
    <section className="flex flex-col min-h-screen items-center justify-center px-4 py-4" id="contact">
      <ScrollFadeIn delay={0.1}>
        <div className="flex flex-col items-center justify-center">
          <h2 className="flex items-center justify-center mb-4 w-full">
            <span className="text-primary mr-3">05. Contact</span>
          </h2>
          <h1 className="font-bold text-5xl text-center w-full">
            Get In Touch
          </h1>
          <div className="max-w-xl text-center my-12">
            My inbox is always open. Whether you have a question, a
            collaboration in mind, or just want to connect — I’m always open to
            meaningful conversations and will do my best to respond promptly.
          </div>
          <Link href="mailto:duccuong16092003@gmail.com" target="_blank" aria-label="Mail">
            <ResumeButton className="p-6 px-8 rounded-sm">
              Say Hello!
            </ResumeButton>
          </Link>
        </div>
      </ScrollFadeIn>
    </section>
  );
};
