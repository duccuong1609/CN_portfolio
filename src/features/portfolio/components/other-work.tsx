"use client";

import { useState } from "react";
import { FolderOpen } from "lucide-react";

import { otherWorkGroups } from "@/constants/other-works";
import { ITEMS_PER_LOAD } from "@/constants/settings";
import ScrollFadeIn from "@/components/animation/ScrollFadeIn";

export const OtherWork = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const isExpanded = visibleCount >= otherWorkGroups.length;

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(ITEMS_PER_LOAD);
    } else {
      setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
    }
  };

  return (
    <div className="flex flex-col max-w-4xl xl:max-w-5xl items-center justify-center w-full py-16 px-4">
      <h2 className="flex items-center justify-center text-2xl font-bold w-full mb-8">
        Other Projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full">
        {otherWorkGroups.slice(0, visibleCount).map((group, index) => {
          const isNewItem = index >= visibleCount - ITEMS_PER_LOAD;
          const delay = isNewItem
            ? (index - (visibleCount - ITEMS_PER_LOAD)) * 0.1
            : 0;

          return (
            <ScrollFadeIn key={index} delay={delay}>
              <div className="group cursor-pointer h-full rounded-lg border border-border bg-card p-5 flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex items-center justify-between">
                  <FolderOpen
                    className="text-primary"
                    size={36}
                    strokeWidth={1.5}
                  />
                  <div className="flex gap-2">
                    {group.href.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        aria-label={link.label}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
                <h3 className="font-bold text-base group-hover:text-primary transition-colors duration-300">
                  {group.title}
                </h3>
                <p className="text-sm text-muted-foreground flex-1">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {group.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFadeIn>
          );
        })}
      </div>

      {otherWorkGroups.length > ITEMS_PER_LOAD && (
        <div className="mt-10">
          <button
            className="px-8 py-3 rounded-sm border border-primary text-primary hover:bg-primary/10 transition-all duration-300 text-sm font-mono"
            onClick={handleToggle}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};
