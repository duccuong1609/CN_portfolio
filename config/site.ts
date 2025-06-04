export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CN's Portfolio",
  description: "A showcase of my work and experience",
  navItems: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skill",
      href: "#skill",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skill",
      href: "#skill",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Contact",
      href: "#contact",
    },
    {
      label: "Resume",
      href: "/resume",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
  resume: {
    href: "https://github.com/heroui-inc/heroui",
    label: "Resume",
  },
};
