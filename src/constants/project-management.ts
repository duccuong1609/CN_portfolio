import {
  LayoutDashboard,
  CheckSquare,
  BarChart3,
  Users2,
  ShieldCheck,
  Briefcase,
  Globe,
} from "lucide-react";

export const projectManagementContent = {
  hero: {
    badge: "Full Stack Project",
    title: "Project Management System",
    description:
      "A comprehensive open-source workspace for managing projects, tasks, and teams with real-time analytics and multi-workspace support.",
    liveDemo: "#", // pointer-event-none
    viewCode: "https://github.com/duccuong1609/pm_fe",
    image: "/pm.jpg",
  },
  overview: {
    title: "Project Overview",
    description:
      "Built to streamline team collaboration, this Project Management System provides a unified interface for tracking productivity. It features a robust architecture capable of handling complex task dependencies and real-time team interactions.",
    details: [
      { icon: Briefcase, label: "Category", value: "Management Tool" },
      { icon: Globe, label: "Architecture", value: "Monolith-to-Service" },
      { icon: ShieldCheck, label: "Security", value: "JWT & Role-based Auth" },
    ],
  },
  features: {
    title: "Enterprise-Grade Features",
    items: [
      {
        icon: LayoutDashboard,
        title: "Multiple Workspaces",
        description:
          "Create and manage separate environments for different organizations or project groups with independent data isolation.",
      },
      {
        icon: CheckSquare,
        title: "Advanced Task Tracking",
        description:
          "Assign tasks, set due dates, track progress, and manage task statuses with a streamlined Kanban-inspired workflow.",
      },
      {
        icon: BarChart3,
        title: "Real-time Analytics",
        description:
          "Gain insights into project health, team velocity, and task completion rates with interactive data visualizations.",
      },
      {
        icon: Users2,
        title: "Team Collaboration",
        description:
          "Invite members, manage granular roles (Admin, Member, Viewer), and monitor team activity across all projects.",
      },
    ],
  },
  techStack: {
    title: "The Tech Stack",
    items: [
      { name: "React 18", icon: "NextJS" },
      { name: "Tailwind CSS", icon: "TailwindCSS" },
      { name: "Redux Toolkit", icon: "Prisma" }, // Using Prisma icon as placeholder for state management if needed, but I'll map them better
      { name: "Node.js", icon: "Vercel" },
      { name: "Express", icon: "TypeScript" },
      { name: "PostgreSQL", icon: "Postgresql" },
    ],
  },
  showcase: {
    title: "Platform Visuals",
    images: ["/pm/pm.jpg", "/pm/pm2.jpg", "/pm/pm3.jpg", "/pm/pm4.jpg"],
  },
};
