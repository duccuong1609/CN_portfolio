"use client";

import { Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { FaKaggle } from "react-icons/fa";

import { ThemeSwitch } from "@/components/ThemeSwitch";
import { siteConfig } from "@/constants/site";
import ScrollAnimation from "./animation/ScrollHide";
import React from "react";

export const Sidebar = () => {
  const socialLinks = [
    {
      href: siteConfig.links.github,
      icon: <Github size={20} />,
      label: "GitHub",
    },
    {
      href: siteConfig.links.linkedin,
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: siteConfig.links.twitter,
      icon: <Twitter size={20} />,
      label: "Twitter",
    },
    {
      href: siteConfig.links.discord,
      icon: <MessageSquare size={20} />,
      label: "Discord",
    },
    {
      href: siteConfig.links.kaggle,
      icon: <FaKaggle size={20} />,
      label: "Kaggle",
    },
  ];

  return (
    <React.Fragment>
      {/* Left: social icons */}
      <ScrollAnimation className="hidden md:block fixed w-fit bottom-0 left-4" direction="down">
        <div className="z-50 w-fit flex pointer-events-auto flex-col items-center space-y-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              aria-label={link.label}
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.icon}
            </a>
          ))}
          <ThemeSwitch />
          <div className="w-px h-[90px] bg-border mt-2" />
        </div>
      </ScrollAnimation>

      {/* Right: email */}
      <ScrollAnimation className="hidden md:block fixed w-fit bottom-0 right-4" direction="down">
        <div className="z-50 w-fit pointer-events-auto flex flex-col items-center">
          <a
            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 text-xs font-mono tracking-widest"
            href="mailto:duccuong16092003@gmail.com"
            style={{ writingMode: "vertical-lr" }}
          >
            duccuong16092003@gmail.com
          </a>
          <div className="w-px h-[90px] bg-border mt-2" />
        </div>
      </ScrollAnimation>
    </React.Fragment>
  );
};
