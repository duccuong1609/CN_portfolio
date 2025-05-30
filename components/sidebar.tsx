import { Link } from "@heroui/link";
import { AiFillLinkedin } from "react-icons/ai";
import { FaKaggle } from "react-icons/fa";

import { ThemeSwitch } from "./theme-switch";
import { DiscordIcon, GithubIcon, TwitterIcon } from "./icons";

import { siteConfig } from "@/config/site";

export const Sidebar = () => {
  return (
    <div className="hidden fixed bottom-0 lg:flex px-11 w-full justify-between pointer-events-none">
      <div className="z-50 flex pointer-events-auto flex-col items-center space-y-5">
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
        <ThemeSwitch />
        <div className="w-px h-[90px] bg-slate-300 mt-4" />
      </div>
      <div className="z-50 pointer-events-auto flex flex-col items-center justify-between">
        <Link
          className="text-default-500 hover:text-primary transition-all duration-500 ease-in-out hover:-translate-y-1"
          href="#"
          style={{ writingMode: "vertical-lr" }}
        >
          duccuong16092003@gmail.com
        </Link>
        <div className="w-px h-[90px] bg-slate-300 mt-2" />
      </div>
    </div>
  );
};
