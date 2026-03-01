import { ChartAreaIcon } from "lucide-react";
import {
  FaDatabase,
  FaDocker,
  FaGithub,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaShopify,
} from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiHtml5,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiRedis,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Frontend",
    icon: <FaReact style={{ color: "#22d3ee" }} />,
    skills: [
      {
        label: "React",
        icon: <FaReact style={{ color: "#22d3ee" }} />,
        progress: 100,
        children: [
          {
            label: "Next.js",
            icon: <SiNextdotjs className="text-foreground" />,
            progress: 90,
          },
        ],
      },
      {
        label: "HTML/CSS",
        icon: <SiHtml5 style={{ color: "#fb923c" }} />,
        progress: 100,
        children: [
          {
            label: "Tailwind CSS",
            icon: <SiTailwindcss style={{ color: "#0ea5e9" }} />,
            progress: 100,
          },
          {
            label: "Bootstrap",
            icon: <SiBootstrap style={{ color: "#a21caf" }} />,
            progress: 100,
          },
        ],
      },
      {
        label: "JavaScript",
        icon: <FaJs style={{ color: "#fde047" }} />,
        progress: 95,
        children: [
          {
            label: "TypeScript",
            icon: <SiTypescript style={{ color: "#2563eb" }} />,
            progress: 90,
          },
        ],
      },
      {
        label: "Polaris React",
        icon: <FaShopify style={{ color: "#22d3ee" }} />,
        progress: 80,
        children: [
          {
            label: "Polaris Viz",
            icon: <ChartAreaIcon style={{ color: "#22d3ee" }} />,
            progress: 80,
          },
        ],
      },
      {
        label: "TanStack React",
        icon: <FaReact style={{ color: "#22d3ee" }} />,
        progress: 80,
        children: [
          {
            label: "React Query",
            icon: <FaReact style={{ color: "#22d3ee" }} />,
            progress: 80,
          },
          {
            label: "React Virtual",
            icon: <FaReact style={{ color: "#22d3ee" }} />,
            progress: 80,
          },
        ],
      },
      {
        label: "State Management",
        icon: <FaReact style={{ color: "#22d3ee" }} />,
        progress: 80,
        children: [
          {
            label: "Redux",
            icon: <FaReact style={{ color: "#22d3ee" }} />,
            progress: 80,
          },
          {
            label: "Zustand",
            icon: <FaReact style={{ color: "#22d3ee" }} />,
            progress: 80,
          },
        ],
      },
    ],
  },
  {
    title: "Backend",
    icon: <FaNodeJs style={{ color: "#16a34a" }} />,
    skills: [
      {
        label: "NodeJS",
        icon: <FaNodeJs style={{ color: "#16a34a" }} />,
        progress: 100,
        children: [
          {
            label: "Express",
            icon: <SiExpress className="text-foreground" />,
            progress: 80,
          },
          {
            label: "NestJS",
            icon: <SiNestjs style={{ color: "#dc2626" }} />,
            progress: 70,
          },
        ],
      },
      {
        label: "Java",
        icon: <FaJava style={{ color: "#f97316" }} />,
        progress: 70,
        children: [
          {
            label: "Spring Boot",
            icon: <SiSpringboot style={{ color: "#15803d" }} />,
            progress: 65,
          },
        ],
      },
    ],
  },
  {
    title: "Database",
    icon: <FaDatabase style={{ color: "#a21caf" }} />,
    skills: [
      {
        label: "MongoDB",
        icon: <SiMongodb style={{ color: "#15803d" }} />,
        progress: 85,
      },
      {
        label: "PostgreSQL",
        icon: <SiPostgresql style={{ color: "#1d4ed8" }} />,
        progress: 85,
      },
    ],
  },
  {
    title: "Tool",
    icon: <FaGithub style={{ color: "#a3a3a3" }} />,
    skills: [
      {
        label: "GitHub",
        icon: <FaGithub style={{ color: "#a3a3a3" }} />,
        progress: 100,
      },
      {
        label: "Docker",
        icon: <FaDocker style={{ color: "#0ea5e9" }} />,
        progress: 85,
      },
      {
        label: "Nginx",
        icon: <SiNginx style={{ color: "#15803d" }} />,
        progress: 60,
      },
      {
        label: "Postman",
        icon: <SiPostman style={{ color: "#f97316" }} />,
        progress: 80,
      },
      {
        label: "Redis",
        icon: <SiRedis style={{ color: "#dc2626" }} />,
        progress: 65,
      },
      {
        label: "Vercel",
        icon: <SiVercel className="text-foreground" />,
        progress: 90,
      },
    ],
  },
];
