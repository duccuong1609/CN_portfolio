import ResumeButton from "@/components/button/resume-button";
import { subtitle, title } from "@/components/primitives";

export function Introduce() {
    return (
        <section className="flex flex-col items-start px-6 text-left justify-center min-h-[100vh] h-screen" id="introduce">
            <span className={subtitle({ class: "text-primary mb-4", size: "lg" })}>
                Hi, my name is&nbsp;
            </span>
            <h1 className={title({ size: "xl" })}>
                Nguyen Duc&nbsp;
                <span className={title({ color: "cyan", size: "xl" })}>
                    Cuong.&nbsp;
                </span>
            </h1>

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
        </section>
    )
}