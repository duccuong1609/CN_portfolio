import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full py-8 gap-10 px-4 l">
      <div className="flex flex-col items-start justify-start gap-3">
        <h2 className="flex items-center text-2xl font-bold mb-4 w-full">
          <span className="text-primary mr-3">01.</span>
          About Me
          <span className="ml-4 h-px w-full bg-slate-300 flex-1" />
        </h2>
        <div className="text-md text-justify max-w-xl">
          Hello! My name is Cuong, and I’m currently a Computer Science student
          at Industrial University of Ho Chi Minh City. I enjoy building things
          for the web — anything from small, fun ideas to more complete
          applications.
        </div>
        <div className="text-md text-justify max-w-xl">
          My interest in web development started back when I was in my second
          year of university. I was tasked with creating basic websites for
          class assignments, and one day, I decided to make a simple game-themed
          webpage using only HTML and CSS. That small project sparked something
          in me — and since then, I’ve been hooked.
        </div>
        <div className="text-md text-justify max-w-xl">
          Fast forward to today, I’ve had the opportunity to work on real-world
          projects, collaborate with others, and constantly learn new
          technologies along the way. I’m especially passionate about building
          clean, accessible, and meaningful digital experiences.
        </div>
      </div>
      <div className="relative after:content-[''] after:absolute after:top-[14px] hover:after:top-[24px] hover:after:left-[24px] transition-all duration-400 hover:-translate-x-2 hover:-translate-y-2 after:transition-all after:duration-400 after:left-[14px] after:w-full after:h-full after:border-2 after:border-primary after:rounded-lg after:-z-10 z-0">
        <Image
          alt="about"
          className="rounded-lg border-2 border-primary"
          height={300}
          src="/about.jpg"
          width={300}
        />
      </div>
    </div>
  );
};
