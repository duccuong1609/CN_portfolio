"use client";

import Link from "next/link";
import Image from "next/image";

import { workGroups } from "@/constants/works";
import ScrollFadeIn from "@/components/animation/ScrollFadeIn";

export const Work = () => {
  return (
    <div
      className="flex flex-col max-w-4xl xl:max-w-5xl items-center justify-center w-full py-16"
      id="work"
    >
      <h2 className="flex items-center text-2xl font-bold w-full px-4 mb-4">
        <span className="text-primary mr-3">04.</span>
        Some Things I&apos;ve Built
        <span className="ml-4 h-px flex-1 bg-border" />
      </h2>

      {workGroups.map((group, index) => (
        <ScrollFadeIn key={index} delay={0.1}>
          {/* Desktop layout */}
          <Link
            className="my-12 hidden w-full lg:grid grid-cols-12 gap-3 group cursor-pointer"
            href={group.link || "#"}
          >
            {index % 2 === 0 ? (
              <>
                {/* Left: image */}
                <div className="col-span-7 relative rounded-lg overflow-hidden">
                  <Image
                    alt={group.title}
                    className="w-full h-full object-cover rounded-lg brightness-75 group-hover:brightness-100 transition-all duration-500"
                    height={400}
                    src={group.image}
                    width={700}
                  />
                </div>
                {/* Right: content */}
                <div className="relative flex flex-col items-end justify-center col-span-5 -ml-24 z-10 py-10 gap-2">
                  <p className="text-primary text-sm">{group.features}</p>
                  <h3 className="font-bold text-2xl group-hover:text-primary transition-colors duration-300">
                    {group.title}
                  </h3>
                  <div className="my-2 rounded-md border border-border bg-card/95 backdrop-blur-sm shadow-xl p-4 text-right text-sm text-muted-foreground">
                    {group.description}
                  </div>
                  <ul className="flex flex-wrap justify-end gap-3 text-xs text-muted-foreground font-mono">
                    {group.tags.map((tag, tagIndex) => (
                      <li key={tagIndex}>{tag}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-2">
                    {group.href.map((link, linkIndex) => (
                      <div
                        key={linkIndex}
                        aria-label={link.label}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(
                            link.href,
                            "_blank",
                            "noopener,noreferrer",
                          );
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(
                              link.href,
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }
                        }}
                      >
                        {link.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Left: content */}
                <div className="relative flex flex-col items-start justify-center col-span-5 -mr-24 z-10 py-10 gap-2">
                  <p className="text-primary text-sm">{group.features}</p>
                  <h3 className="font-bold text-2xl group-hover:text-primary transition-colors duration-300">
                    {group.title}
                  </h3>
                  <div className="my-2 rounded-md border border-border bg-card/95 backdrop-blur-sm shadow-xl p-4 text-left text-sm text-muted-foreground">
                    {group.description}
                  </div>
                  <ul className="flex flex-wrap gap-3 text-xs text-muted-foreground font-mono">
                    {group.tags.map((tag, tagIndex) => (
                      <li key={tagIndex}>{tag}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-2">
                    {group.href.map((link, linkIndex) => (
                      <div
                        key={linkIndex}
                        aria-label={link.label}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(
                            link.href,
                            "_blank",
                            "noopener,noreferrer",
                          );
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(
                              link.href,
                              "_blank",
                              "noopener,noreferrer",
                            );
                          }
                        }}
                      >
                        {link.icon}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right: image */}
                <div className="col-span-7 relative rounded-lg overflow-hidden">
                  <Image
                    alt={group.title}
                    className="w-full h-full object-cover rounded-lg brightness-75 group-hover:brightness-100 transition-all duration-500"
                    height={400}
                    src={group.image}
                    width={700}
                  />
                </div>
              </>
            )}
          </Link>

          {/* Mobile layout */}
          <Link
            className="my-6 lg:hidden block w-full px-4"
            href={group.link || "#"}
          >
            <div className="rounded-lg border border-border bg-card overflow-hidden shadow-xl group">
              <div className="relative overflow-hidden">
                <Image
                  alt={group.title}
                  className="w-full object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
                  height={300}
                  src={group.image}
                  width={700}
                />
              </div>
              <div className="p-4 flex flex-col gap-3">
                <p className="text-primary text-sm">{group.features}</p>
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors duration-300">
                  {group.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {group.description}
                </p>
                <ul className="flex flex-wrap gap-2 text-xs text-muted-foreground font-mono">
                  {group.tags.map((tag, tagIndex) => (
                    <li key={tagIndex}>{tag}</li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  {group.href.map((link, linkIndex) => (
                    <div
                      key={linkIndex}
                      aria-label={link.label}
                      className="text-muted-foreground hover:text-primary transition-all duration-300 cursor-pointer"
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(link.href, "_blank", "noopener,noreferrer");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(
                            link.href,
                            "_blank",
                            "noopener,noreferrer",
                          );
                        }
                      }}
                    >
                      {link.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </ScrollFadeIn>
      ))}
    </div>
  );
};
