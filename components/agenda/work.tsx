"use client";

import { Card, CardBody } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";
import React, { useEffect } from "react";
import { CgAtlasian } from "react-icons/cg";
import Link from "next/link";

import { experienceGroups } from "@/config/expriences";

export const Work = () => {
  const [isVertical, setIsVertical] = React.useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth > 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col max-w-4xl items-center justify-center w-full py-8 px-4">
      <h2 className="flex items-center text-2xl font-bold mb-8 w-full">
        <span className="text-primary mr-3">04.</span>
        Some Things I’ve Built
        <span className="ml-4 mr-1 lg:mx-4 lg:mr-3 h-px w-full flex-1 bg-slate-300" />
      </h2>
      <Tabs
        aria-label="Options"
        className="transition-all duration-500"
        classNames={{
          cursor: "",
          tabList: "flex overflow-x-auto flex-nowrap w-[90vw] lg:w-full",
          tab: "bg-transparent",
          tabContent: "",
        }}
        color="primary"
        isVertical={isVertical}
        radius="sm"
        variant="underlined"
      >
        {experienceGroups.map((group) => (
          <Tab
            key={group.title}
            className="!justify-start"
            title={
              <div className="flex items-start space-x-2 min-w-max">
                {group.icon}
                <span className="font-bold">{group.title}</span>
              </div>
            }
          >
            <Card className="transition-all duration-500">
              <CardBody>
                <h1 className="flex gap-1 text-lg font-semibold my-2">
                  {group.jobTittle}
                  <div className="text-primary">@</div>
                  <Link
                    className="relative inline-block text-primary transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:h-[0.5px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full"
                    href={group.href}
                    target="_blank"
                  >
                    {group.hashtag}
                  </Link>
                </h1>
                <p className="text-sm text-gray-400 mb-4">{group.time}</p>
                <ul>
                  {group.description.map((desc, index) => (
                    <li key={index} className="mb-2 flex items-center gap-2">
                      <div className="rotate-90 text-primary">
                        <CgAtlasian />
                      </div>
                      <div>{desc}</div>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
