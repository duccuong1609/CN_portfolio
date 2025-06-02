import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaPython,
  FaJava,
  FaDatabase,
  FaGithub,
  FaDocker,
  FaJs,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSwagger,
  SiFastapi,
  SiOdoo,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiNextdotjs,
  SiMui,
  SiNginx,
  SiHeroku,
  SiExpress,
  SiNestjs,
  SiTensorflow,
  SiPytorch,
  SiSpringboot,
  SiHibernate,
  SiRedis,
  SiVercel,
  SiPostman,
  SiNodered,
  SiVultr,
  SiHuggingface,
  SiNeo4J,
  SiNotion,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

export const skillGroups = [
  {
    title: "Frontend",
    icon: <FaReact style={{ color: "#22d3ee" }} />,
    skills: [
      {
        label: "React",
        icon: <FaReact style={{ color: "#22d3ee" }} />,
        progress: 90,
        children: [
          {
            label: "Next.js",
            icon: <SiNextdotjs className="text-foreground" />,
            progress: 80,
          },
          {
            label: "HeroUI",
            icon: <SiHeroku style={{ color: "#818cf8" }} />,
            progress: 70,
          },
          {
            label: "MUI",
            icon: <SiMui style={{ color: "#2563eb" }} />,
            progress: 75,
          },
        ],
      },
      {
        label: "Angular",
        icon: <FaAngular style={{ color: "#dc2626" }} />,
        progress: 60,
      },
      {
        label: "HTML/CSS",
        icon: <SiHtml5 style={{ color: "#fb923c" }} />,
        progress: 95,
        children: [
          {
            label: "Tailwind CSS",
            icon: <SiTailwindcss style={{ color: "#0ea5e9" }} />,
            progress: 85,
          },
          {
            label: "Bootstrap",
            icon: <SiBootstrap style={{ color: "#a21caf" }} />,
            progress: 80,
          },
        ],
      },
      {
        label: "TypeScript",
        icon: <SiTypescript style={{ color: "#2563eb" }} />,
        progress: 85,
      },
      {
        label: "JavaScript",
        icon: <FaJs style={{ color: "#fde047" }} />,
        progress: 95,
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
        progress: 85,
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
        label: "Python",
        icon: <FaPython style={{ color: "#2563eb" }} />,
        progress: 80,
        children: [
          {
            label: "FastAPI",
            icon: <SiFastapi style={{ color: "#22d3ee" }} />,
            progress: 75,
          },
          {
            label: "Odoo",
            icon: <SiOdoo style={{ color: "#6d28d9" }} />,
            progress: 90,
          },
          {
            label: "TensorFlow",
            icon: <SiTensorflow style={{ color: "#f59e42" }} />,
            progress: 60,
          },
          {
            label: "PyTorch",
            icon: <SiPytorch style={{ color: "#ef4444" }} />,
            progress: 60,
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
          {
            label: "Swing",
            icon: <FaJava style={{ color: "#f97316" }} />,
            progress: 60,
          },
          {
            label: "Hibernate",
            icon: <SiHibernate style={{ color: "#facc15" }} />,
            progress: 60,
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
        progress: 80,
      },
      {
        label: "PostgreSQL",
        icon: <SiPostgresql style={{ color: "#1d4ed8" }} />,
        progress: 75,
      },
      {
        label: "SQL Server",
        icon: <DiMsqlServer style={{ color: "#dc2626" }} />,
        progress: 60,
      },
      {
        label: "MySQL",
        icon: <SiMysql style={{ color: "#facc15" }} />,
        progress: 70,
      },
      {
        label: "Neo4j",
        icon: <SiNeo4J style={{ color: "#22d3ee" }} />,
        progress: 50,
      },
      {
        label: "Notion",
        icon: <SiNotion style={{ color: "#f97316" }} />,
        progress: 40,
      },
    ],
  },
  {
    title: "Tool",
    icon: <FaGithub style={{ color: "#a3a3a3" }} />,
    skills: [
      {
        label: "Swagger",
        icon: <SiSwagger style={{ color: "#22d3ee" }} />,
        progress: 70,
      },
      {
        label: "GitHub",
        icon: <FaGithub style={{ color: "#a3a3a3" }} />,
        progress: 90,
      },
      {
        label: "Docker",
        icon: <FaDocker style={{ color: "#0ea5e9" }} />,
        progress: 75,
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
        label: "NodeRed",
        icon: <SiNodered style={{ color: "#dc2626" }} />,
        progress: 60,
      },
      {
        label: "Redis",
        icon: <SiRedis style={{ color: "#dc2626" }} />,
        progress: 65,
      },
      {
        label: "Vercel",
        icon: <SiVercel className="text-foreground" />,
        progress: 60,
      },
      {
        label: "VPS",
        icon: <SiVultr style={{ color: "#2563eb" }} />,
        progress: 70,
      },
      {
        label: "Railway",
        icon: <SiHeroku style={{ color: "#818cf8" }} />,
        progress: 30,
      },
      {
        label: "Hugging Face",
        icon: <SiHuggingface style={{ color: "#f97316" }} />,
        progress: 80,
      },
    ],
  },
];
