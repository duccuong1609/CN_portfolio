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
      href: "/cv/CV.pdf",
    },
  ],
  links: {
    github: "https://github.com/duccuong1609",
    linkedin: "https://www.linkedin.com/in/cuong-nguyen-682509348/",
    twitter: "https://x.com/",
    discord: "https://discord.gg/DWWpra2u",
    kaggle: "https://www.kaggle.com/cuongnguyen16",
  },
  resume: {
    href: "/cv/CV.pdf",
    label: "Resume",
  },
};
