"use client";

import axios from "axios";
import {
  Eye,
  GitFork,
  Github,
  Linkedin,
  MessageSquare,
  Star,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";

import { siteConfig } from "@/constants/site";

export const Contact = () => {
  const [githubStats, setGithubStats] = useState<any>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const res = await axios.get("/api/github-stats");

        setGithubStats(res.data);
      } catch {
        // Silent catch for portfolio build stability
      }
    };

    fetchGitHubStats();
  }, []);

  const socialLinks = [
    {
      href: siteConfig.links.github,
      icon: <Github size={22} />,
      label: "GitHub",
    },
    {
      href: siteConfig.links.linkedin,
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
    },
    {
      href: siteConfig.links.twitter,
      icon: <Twitter size={22} />,
      label: "Twitter",
    },
    {
      href: siteConfig.links.discord,
      icon: <MessageSquare size={22} />,
      label: "Discord",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen px-4 py-4" id="contact">
      <div className="flex-1 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-primary font-mono text-sm">06. Contact</p>
          <h2 className="font-bold text-4xl md:text-5xl text-center">
            Get In Touch
          </h2>
          <p className="max-w-xl text-center text-muted-foreground text-sm leading-relaxed my-4">
            My inbox is always open. Whether you have a question, a
            collaboration in mind, or just want to connect — I&apos;m always
            open to meaningful conversations and will do my best to respond
            promptly.
          </p>
          <a href="mailto:duccuong16092003@gmail.com">
            <button className="px-8 py-3 rounded-sm border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-mono text-sm">
              Say Hello!
            </button>
          </a>
        </div>
      </div>

      <footer className="w-full flex flex-col gap-3 items-center justify-center py-8">
        {/* Social icons (mobile only) */}
        <div className="flex gap-4 lg:hidden">
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
        </div>

        {/* Credit */}
        <a
          className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          href="https://github.com/duccuong1609"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>Designed &amp; built by</span>
          <span className="text-primary">Cuong Nguyen</span>
          <span className="hidden lg:inline">— inspired by</span>
          <span className="hidden lg:inline text-primary">Brittany Chiang</span>
        </a>

        {/* GitHub stats */}
        <a
          className="flex items-center gap-4 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          href="https://github.com/duccuong1609/CN_portfolio.git"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="flex gap-1 items-center">
            <Star className="text-primary" size={14} />
            <span className="text-primary">
              {githubStats?.stargazers_count || 0}
            </span>
          </span>
          <span className="flex gap-1 items-center">
            <GitFork className="text-primary" size={14} />
            <span className="text-primary">
              {githubStats?.forks_count || 0}
            </span>
          </span>
          <span className="flex gap-1 items-center">
            <Eye className="text-primary" size={14} />
            <span className="text-primary">
              {githubStats?.watchers_count || 0}
            </span>
          </span>
        </a>
      </footer>
    </div>
  );
};
