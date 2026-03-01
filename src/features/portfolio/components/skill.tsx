"use client";

import { useState } from "react";

import { skillGroups } from "@/constants/skills";

const SkillItem = ({ skill }: { skill: any }) => (
  <div>
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border shadow-sm hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-card"
      style={{
        background: `linear-gradient(90deg, color-mix(in oklch, var(--primary) 15%, var(--card)) ${skill.progress}%, var(--card) ${skill.progress}%)`,
      }}
    >
      <span className="text-xl">{skill.icon}</span>
      <span className="text-sm">{skill.label}</span>
    </div>
    {skill.children && (
      <div className="ml-6 mt-1 flex flex-col gap-1">
        {skill.children.map((child: any) => (
          <div
            key={child.label}
            className="flex items-center gap-2 px-3 py-1 rounded border border-dashed border-border hover:border-primary text-sm hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{
              background: `linear-gradient(90deg, color-mix(in oklch, var(--primary) 10%, var(--card)) ${child.progress}%, var(--card) ${child.progress}%)`,
            }}
          >
            <span className="text-lg">{child.icon}</span>
            <span className="text-xs">{child.label}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export const Skill = () => {
  const [activeTab, setActiveTab] = useState(skillGroups[0].title);
  const activeGroup = skillGroups.find((g) => g.title === activeTab);

  return (
    <div className="flex flex-col items-center w-full py-16 px-4" id="skill">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="flex items-center text-2xl font-bold mb-8 w-full">
          <span className="text-primary mr-3">02.</span>
          My Skills
          <span className="ml-4 h-px flex-1 bg-border" />
        </h2>

        {/* Desktop: all groups */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold mb-4 flex gap-2 items-center pointer-events-none">
                {group.icon}
                {group.title}
                <span className="ml-4 h-px flex-1 bg-border" />
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {group.skills.map((skill) => (
                  <SkillItem key={skill.label} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: tabbed view */}
        <div className="flex lg:hidden w-full flex-col gap-4">
          <div className="flex gap-1 border-b border-border pb-0 scrollbar-none">
            {skillGroups.map((group) => (
              <button
                key={group.title}
                className={`flex items-center gap-2 px-4 py-2 text-sm whitespace-nowrap transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === group.title
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveTab(group.title)}
              >
                {group.icon}
                {group.title}
              </button>
            ))}
          </div>
          {activeGroup && (
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {activeGroup.skills.map((skill) => (
                  <SkillItem key={skill.label} skill={skill} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
