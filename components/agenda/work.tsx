"use client";

import { Card, CardBody } from "@heroui/card";
import React from "react";
import Link from "next/link";

import { Illustration } from "../illustration";
import ScrollFadeIn from "../animation/scroll-fade-in";

import { workGroups } from "@/config/work";

export const Work = () => {
  return (
    <div className="flex flex-col max-w-4xl xl:max-w-5xl items-center justify-center w-full py-8">
      <h2 className="flex items-center text-2xl font-bold w-full">
        <span className="text-primary mr-3">04.</span>
        Some Things I’ve Built
        <span className="ml-4 h-px w-full flex-1 bg-slate-300" />
      </h2>
      {workGroups.map((group, index) => (
        <ScrollFadeIn key={index} delay={0.1}>
          <div className="my-12 hidden w-full lg:grid grid-cols-12 gap-3">
            {index % 2 === 0 ? (
              <>
                {/* Left illustration */}
                <Illustration group={group} />
                {/* Right content */}
                <div className="relative flex flex-col items-end justify-center col-span-5 -ml-36 z-10 py-10 gap-1">
                  <h1 className="text-primary">{group.features}</h1>
                  <h1 className="font-bold text-2xl">{group.title}</h1>
                  <Card
                    className="my-4 shadow-[0_20px_30px_-20px_hsl(var(--heroui-default))]"
                    radius="sm"
                  >
                    <CardBody>
                      <div className="m-4 text-right">{group.description}</div>
                    </CardBody>
                  </Card>
                  <ul className="flex gap-4">
                    {group.tags.map((tag, tagIndex) => (
                      <li key={tagIndex} className="text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-4">
                    {group.href.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1"
                        href={link.href}
                        target="_blank"
                      >
                        {link.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Left content */}
                <div className="relative flex flex-col items-start justify-center col-span-5 -mr-36 z-10 py-10 gap-1">
                  <h1 className="text-primary">{group.features}</h1>
                  <h1 className="font-bold text-2xl">{group.title}</h1>
                  <Card
                    className="my-4 shadow-[0_20px_30px_-20px_hsl(var(--heroui-default))]"
                    radius="sm"
                  >
                    <CardBody>
                      <div className="m-4 text-left">{group.description}</div>
                    </CardBody>
                  </Card>
                  <ul className="flex gap-4">
                    {group.tags.map((tag, tagIndex) => (
                      <li key={tagIndex} className="text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-4">
                    {group.href.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1"
                        href={link.href}
                        target="_blank"
                      >
                        {link.icon}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Right Illustration */}
                <Illustration group={group} />
              </>
            )}
          </div>
        </ScrollFadeIn>
      ))}
      {workGroups.map((group, index) => (
        <div key={index} className="my-8 lg:hidden w-full">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="items-center text-left">
              <Card
                className="my-4 overflow-hidden relative shadow-xl border border-primary/10 group"
                radius="sm"
              >
                <Illustration
                  className="absolute inset-0 w-full h-full z-0 brightness-50"
                  group={group}
                />
                <CardBody className="flex flex-col gap-4 p-6 md:p-12">
                  <h1 className="text-primary">{group.features}</h1>
                  <h1 className="font-bold text-2xl group-hover:text-primary transition-all duration-500 cursor-pointer">
                    {group.title}
                  </h1>
                  <div className="my-4">{group.description}</div>
                  <ul className="flex flex-wrap gap-4">
                    {group.tags.map((tag, tagIndex) => (
                      <li key={tagIndex} className="text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4 mt-4">
                    {group.href.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1"
                        href={link.href}
                        target="_blank"
                      >
                        {link.icon}
                      </Link>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
