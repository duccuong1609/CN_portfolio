"use client";

import { useState } from "react";
import Link from "next/link";
import { Triangle } from "lucide-react";

import { experienceGroups } from "@/constants/experiences";

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(experienceGroups[0].title);
  const activeGroup = experienceGroups.find((g) => g.title === activeTab);

  return (
    <div
      className="flex flex-col max-w-4xl items-center justify-center w-full py-16 px-4"
      id="experience"
    >
      <h2 className="flex items-center text-2xl font-bold mb-8 w-full">
        <span className="text-primary mr-3">03.</span>
        Where I&apos;ve Worked
        <span className="ml-4 h-px flex-1 bg-border" />
      </h2>

      <div className="flex flex-col lg:flex-row w-full gap-4">
        {/* Tab list */}
        <div className="flex lg:flex-col lg:overflow-x-visible border-b lg:border-b-0 lg:border-l border-border">
          {experienceGroups.map((group) => (
            <button
              key={group.title}
              className={`flex items-center gap-2 px-5 py-3 text-sm whitespace-nowrap transition-all duration-200 border-b-2 lg:border-b-0 lg:border-l-2 -mb-px lg:mb-0 lg:-ml-px text-left ${
                activeTab === group.title
                  ? "border-primary text-primary bg-primary/5"
                  : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
              onClick={() => setActiveTab(group.title)}
            >
              {group.icon}
              <span className="font-medium">{group.title}</span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeGroup && (
          <div className="flex-1 rounded-lg border border-border bg-card p-6">
            <h3 className="flex gap-1 text-lg font-semibold mb-1">
              {activeGroup.jobTittle}
              <span className="text-primary">@</span>
              <Link
                className="relative inline-block text-primary transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                href={activeGroup.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {activeGroup.hashtag}
              </Link>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {activeGroup.time}
            </p>
            <ul className="flex flex-col gap-2">
              {activeGroup.description.map((desc, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <Triangle
                    className="text-primary mt-0.5 shrink-0 rotate-90"
                    fill="currentColor"
                    size={12}
                  />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
