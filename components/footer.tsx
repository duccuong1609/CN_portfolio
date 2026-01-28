"use client";

import { Link } from "@heroui/link";
import { DiscordIcon, GithubIcon, TwitterIcon } from "./icons";
import { siteConfig } from "@/config/site";
import { AiFillLinkedin } from "react-icons/ai";
import { FaKaggle, FaRegStar } from "react-icons/fa";
import { CgGitFork } from "react-icons/cg";
import { GrOverview } from "react-icons/gr";
import { useEffect, useState } from "react";
import axios from "axios";
import ScrollFadeIn from "./animation/scroll-fade-in";

interface GitHubStats {
    stargazers_count?: number;
    forks_count?: number;
    watchers_count?: number;
}

export default function Footer() {
    const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);

    const fetchGitHubStats = async () => {
        try {
            const res = await axios.get("/api/github-stats");
            const data = res.data;

            setGithubStats(data);
        } catch (err) {
            const error = err as Error;
            console.error("Failed to fetch GitHub stats:", error.message);
        }
    };

    useEffect(() => {
        fetchGitHubStats();
    }, []);

    return (
        <footer className="w-full flex flex-col gap-2 py-4">
            <ScrollFadeIn delay={0.1}>
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
                    className="flex flex-wrap items-center gap-1 text-current justify-center"
                    href="https://github.com/duccuong1609"
                    title="my github"
                >
                    <span className="text-default-600">Designed & built by</span>
                    <p className="text-primary">Cuong Nguyen</p>
                    <span className="hidden lg:block text-default-600">
                        — inspired by
                    </span>
                    <p className="hidden lg:block text-primary">Brittany Chiang</p>
                </Link>
                <Link
                    isExternal
                    className="flex gap-3 text-current justify-center"
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
            </ScrollFadeIn>
        </footer>
    )
}