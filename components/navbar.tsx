import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
// import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
// import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";

import ResumeButton from "./button/resume-button";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  // TwitterIcon,
  GithubIcon,
  // DiscordIcon,
  // SearchIcon,
  // Logo,
} from "@/components/icons";
import { motionTime } from "@/config/motion.time";

export const Navbar = () => {
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <HeroUINavbar className="p-5" maxWidth="2xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{
              duration: motionTime.layout.motionDiv.duration,
              delay: motionTime.layout.motionDiv.delay,
            }}
          >
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Image
                alt="Logo"
                className="transition-all !duration-500 ease-in-out hover:drop-shadow-[0_5px_5px_hsl(var(--heroui-primary))]"
                height={48}
                src={"/logo/logo.png"}
                width={48}
              />
              <p className="font-bold text-inherit">CUONG NGUYEN</p>
            </NextLink>
          </motion.div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href} className="px-1">
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{
                  duration: motionTime.layout.motionDiv.duration,
                  delay:
                    motionTime.layout.motionDiv.delay +
                    motionTime.item.delay * index,
                }}
              >
                <NextLink
                  // className={clsx(
                  //   linkStyles({ color: "foreground" }),
                  //   "data-[active=true]:text-primary data-[active=true]:font-medium",
                  // )}
                  className="px-1 hover:text-primary transition-all !duration-1000 ease-in-out"
                  href={item.href}
                >
                  <span className="text-primary mr-1">{index + 1}.</span>
                  {item.label}
                </NextLink>
              </motion.div>
            </NavbarItem>
          ))}
        </ul>
        {siteConfig.resume && (
          <NavbarItem className="hidden lg:flex">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, y: -50 }}
              transition={{
                duration: motionTime.navbar.resumeButton.duration,
                delay: motionTime.navbar.resumeButton.delay,
              }}
            >
              <ResumeButton className="rounded-sm">
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={siteConfig.resume.href}
                >
                  {siteConfig.resume.label}
                </NextLink>
              </ResumeButton>
            </motion.div>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-10 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <ResumeButton className="w-full">
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                        ? "primary"
                        : "foreground"
                  }
                  href="#"
                  size="lg"
                >
                  {item.label}
                </Link>
              </ResumeButton>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
