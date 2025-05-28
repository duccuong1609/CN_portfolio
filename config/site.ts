export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CN's Portfolio",
  description: "A showcase of my work and experience",
  navItems: [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Experience",
      href: "/docs",
    },
    {
      label: "Work",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Experience",
      href: "/docs",
    },
    {
      label: "Work",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/blog",
    },
    {
      label: "Logout",
      href: "/logout",
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
