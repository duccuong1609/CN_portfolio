import {
  Zap,
  Users,
  Sparkles,
  Monitor,
  Calendar,
  User,
  Target,
} from "lucide-react";

export const memMoviesContent = {
  hero: {
    badge: "Featured Project",
    title: "MEM Movies",
    description:
      "A high-performance cinematic streaming platform built with Next.js 16 and React 19. Delivering a lightning-fast browsing experience with real-time search, advanced filtering, and a modular neon-themed UI.",
    liveDemo: "https://mem-movies.netlify.app",
    viewCode: "https://github.com",
    image: "/mem.jpg",
  },
  overview: {
    title: "Project Overview",
    description:
      "MEM Movies was engineered to bridge the gap between web-based media libraries and native streaming applications. By utilizing Server Components and cutting-edge React 19 features, it achieves sub-second hydration and near-instant navigation across thousands of titles.",
    details: [
      { icon: Calendar, label: "Tech Stack", value: "Next.js 16 & React 19" },
      { icon: User, label: "Auth Provider", value: "Clerk Authentication" },
      {
        icon: Target,
        label: "State Engine",
        value: "TanStack Query & Zustand",
      },
    ],
  },
  features: {
    title: "Key Features",
    items: [
      {
        icon: Zap,
        title: "Smart Filtering",
        description:
          "Advanced pill-based and drawer filtering system for precise content discovery by genre, rating, and year.",
      },
      {
        icon: Users,
        title: "Personal Library",
        description:
          "Secure user accounts managed by Clerk, allowing users to build and manage their own movie and TV show collections.",
      },
      {
        icon: Sparkles,
        title: "TanStack Virtualization",
        description:
          "Ultra-smooth scrolling through large movie catalogs using TanStack Virtual for optimal DOM performance.",
      },
      {
        icon: Monitor,
        title: "Adaptive Streaming",
        description:
          "Modular video player architecture supporting trailers, dynamic theme adjustment, and cross-device responsiveness.",
      },
    ],
  },
  techStack: {
    title: "The Tech Stack",
    items: [
      { name: "NextJS 16", icon: "NextJS" },
      { name: "React 19", icon: "TypeScript" },
      { name: "TailwindCSS v4", icon: "TailwindCSS" },
      { name: "Clerk Auth", icon: "Vercel" },
      { name: "TanStack Query", icon: "Prisma" },
    ],
  },
  showcase: {
    title: "Visual Showcase",
    images: [
      "/mem/mem-1.jpg",
      "/mem/mem-2.jpg",
      "/mem/mem-3.jpg",
      "/mem/mem-4.jpg",
    ],
  },
};
