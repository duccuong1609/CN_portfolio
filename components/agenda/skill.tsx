"use client";

import { Card, CardBody } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";

import { skillGroups } from "@/config/skills";

// Component hiển thị skill, có thể lồng skill con
const SkillItem = ({ skill }: { skill: any }) => (
  <div>
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-lg border shadow-sm hover:-translate-x-2 hover:-translate-y-2 transtion-all duration-500 cursor-pointer bg-background hover:shadow-[3px_3px_0_0_hsl(var(--heroui-primary))]"
      style={{
        background: `linear-gradient(90deg, hsl(var(--heroui-default)) ${skill.progress}%, hsl(var(--heroui-background)) ${skill.progress}%)`,
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
            className={`flex items-center gap-2 px-3 py-1 rounded border border-dashed hover:border-solid hover:border-primary border-slate-300 text-sm hover:-translate-x-2 hover:-translate-y-2 transtion-all duration-500 cursor-pointer hover:shadow-[3px_3px_0_0_hsl(var(--heroui-primary))]`}
            style={{
              background: `linear-gradient(90deg, hsl(var(--heroui-default)) ${child.progress}%, hsl(var(--heroui-background)) ${child.progress}%)`,
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

export const Skill = () => (
  <div className="flex flex-col items-center w-full py-8 px-4 bg-transparent">
    <h2 className="flex items-center text-2xl font-bold mb-8 w-full">
      <span className="text-primary mr-3">02.</span>
      My Skills
      <span className="ml-4 h-px w-full flex-1" />
    </h2>
    <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-lg font-semibold mb-4 flex gap-2 items-center pointer-events-none">
            {group.icon}
            {group.title}
            <span className="ml-4 h-px w-full bg-slate-300 flex-1" />
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {group.skills.map((skill) => (
              <SkillItem key={skill.label} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="flex lg:hidden w-full flex-col">
      <Tabs aria-label="Options" className="transition-all duration-500">
        {skillGroups.map((group) => (
          <Tab
            key={group.title}
            title={
              <span className="flex items-center gap-2">
                {group.icon}
                {group.title}
              </span>
            }
          >
            <Card className="transition-all duration-500">
              <CardBody>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {group.skills.map((skill) => (
                    <SkillItem key={skill.label} skill={skill} />
                  ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  </div>
);
