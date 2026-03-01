import { Github, ExternalLink } from "lucide-react";

export const workGroups = [
  {
    features: "Featured Project",
    image: "/mem.jpg",
    title: "MEM Movies",
    link: "/mem-movies",
    description:
      "A modern movie streaming platform that allows users to watch movies online seamlessly. The website provides advanced search and filtering features by genre, release year, and rating, delivering a smooth and user-friendly viewing experience across devices.",
    href: [
      {
        label: "github",
        icon: <Github size={20} />,
        href: "",
      },
      {
        label: "demo",
        icon: <ExternalLink size={20} />,
        href: "https://mem-movies.netlify.app",
      },
    ],
    tags: ["NextJS", "TypeScript", "TailwindCSS", "shadcn/ui", "React"],
  },
  {
    features: "Featured Project",
    image: "/pm.jpg",
    title: "Project Management System",
    link: "/project-management-system",
    description:
      "A comprehensive project management system designed to streamline project workflows within an organization. The platform facilitates efficient task management, progress tracking, and team collaboration. It provides managers with tools to monitor project timelines, generate insightful reports, and ensure compliance with project requirements, ultimately enhancing operational efficiency and project success rates.",
    href: [
      {
        label: "github",
        icon: <Github size={20} />,
        href: "",
      },
      {
        label: "demo",
        icon: <ExternalLink size={20} />,
        href: "",
      },
    ],
    tags: ["React", "TypeScript", "TailwindCSS", "shadcn/ui", "NodeJS"],
  }
];
