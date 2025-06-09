"use client";

import { Link } from "@heroui/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaKaggle, FaRegStar } from "react-icons/fa";
import { CgGitFork } from "react-icons/cg";
import { GrOverview } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";

import { REPOSITORY_LINK } from "@/config/constant-setting";
import { siteConfig } from "@/config/site";
import ResumeButton from "@/components/button/resume-button";
import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/icons";

export const Contact = () => {
  const [githubStats, setGithubStats] = useState<any>(null);

  const fetchGitHubStats = async () => {
    try {
      const res = await axios.get("/api/github-stats");
      const data = res.data;

      setGithubStats(data);
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error("Failed to fetch GitHub stats:", err.message);
    }
  };

  useEffect(() => {
    fetchGitHubStats();
  }, []);

  return (
    <div className="flex flex-col min-h-screen px-4 py-4" id="contact">
      <div className="flex-1 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center">
          <h2 className="flex items-center justify-center mb-4 w-full">
            <span className="text-primary mr-3">05. Contact</span>
          </h2>
          <h1 className="font-bold text-5xl text-center w-full">
            Get In Touch
          </h1>
          <div className="max-w-xl text-center my-12">
            My inbox is always open. Whether you have a question, a
            collaboration in mind, or just want to connect — I’m always open to
            meaningful conversations and will do my best to respond promptly.
          </div>
          <Link href="mailto:duccuong16092003@gmail.com" target="_blank" aria-label="Mail">
            <ResumeButton className="p-6 px-8 rounded-sm">
              Say Hello!
            </ResumeButton>
          </Link>
        </div>
      </div>

      <footer className="w-full flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-3 lg:hidden my-4">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1" />
          </Link>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <AiFillLinkedin
              className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1"
              size={25}
            />
          </Link>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1" />
          </Link>
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <FaKaggle
              className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1"
              size={25}
            />
          </Link>
        </div>
        <Link
          isExternal
          className="flex flex-wrap items-center gap-1 text-current"
          href="https://github.com/duccuong1609"
          title="my github"
        >
          <span className="text-default-600">Designed & built by</span>
          <p className="text-primary">Cuong Nguyen</p>
          <span className="hidden lg:block text-default-600">
            — inspired by{" "}
          </span>
          <p className="hidden lg:block text-primary">Brittany Chiang</p>
        </Link>
        <Link
          isExternal
          className="flex items-center gap-3 text-current"
          href="https://github.com/duccuong1609/CN_portfolio.git"
          title="github"
        >
          <div className="flex gap-1 items-center">
            <FaRegStar className="text-primary font-bold" size={15} />
            <p className="text-primary">{githubStats?.stargazers_count || 0}</p>
          </div>
          <div className="flex gap-1 items-center">
            <CgGitFork className="text-primary font-bold" size={15} />
            <p className="text-primary">{githubStats?.forks_count || 0}</p>
          </div>
          <div className="flex gap-1 items-center">
            <GrOverview className="text-primary font-bold" size={15} />
            <p className="text-primary">{githubStats?.watchers_count || 0}</p>
          </div>
        </Link>
      </footer>
    </div>
  );
};
