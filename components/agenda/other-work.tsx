"use client";

import { Card, CardBody } from "@heroui/card";
import React, { useState } from "react";
import { CiFolderOn } from "react-icons/ci";

import ScrollFadeIn from "../animation/scroll-fade-in";
import ResumeButton from "../button/resume-button";

import { otherWorkGroups } from "@/config/other-works";
import { ITEMS_PER_LOAD } from "@/config/constant-setting";

export const OtherWork = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const isExpanded = visibleCount >= otherWorkGroups.length;

  const handleToggle = () => {
    if (isExpanded) {
      setVisibleCount(ITEMS_PER_LOAD);
    } else {
      /* prev callback function: good for updating state continuously */
      setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
    }
  };

  return (
    <div className="flex flex-col max-w-4xl xl:max-w-5xl items-center justify-center w-full py-8">
      <h2 className="flex items-center justify-center text-2xl font-bold w-full">
        Other Project
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8 w-full">
        {otherWorkGroups.slice(0, visibleCount).map((group, index) => {
          const isNewItem = index >= visibleCount - ITEMS_PER_LOAD;
          const delay = isNewItem
            ? (index - (visibleCount - ITEMS_PER_LOAD)) * 0.1
            : 0;

          return (
            <ScrollFadeIn key={index} delay={delay}>
              <div className="group cursor-pointer h-full">
                <Card
                  className="group-hover:-translate-y-1 transition-all duration-300 h-full"
                  radius="sm"
                >
                  <CardBody className="p-4 lg:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <CiFolderOn className="text-primary mb-2" size={48} />
                      <div className="flex items-right gap-2">
                        {group.href.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1 mr-2"
                            href={link.href}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                    <h1 className="font-bold text-lg group-hover:text-primary">
                      {group.title}
                    </h1>
                    <div className="my-4">{group.description}</div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {group.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-sm mr-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </ScrollFadeIn>
          );
        })}
      </div>

      {/* Toggle Button */}
      {otherWorkGroups.length > ITEMS_PER_LOAD && (
        <div className="mt-12">
          <ResumeButton className="p-6 px-8 rounded-sm" onPress={handleToggle}>
            {isExpanded ? "Show Less" : "Show More"}
          </ResumeButton>
        </div>
      )}
    </div>
  );
};
