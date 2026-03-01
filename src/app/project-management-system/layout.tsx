import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Management System - Enterprise Workspace | Nguyen Duc Cuong",
  description:
    "A comprehensive open-source workspace for managing projects, tasks, and teams with real-time analytics and multi-workspace support.",
  openGraph: {
    title: "Project Management System - Enterprise Workspace",
    description:
      "Explore the features and tech stack behind this project management platform.",
    images: [{ url: "/pm/pm.jpg" }],
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {children}
    </div>
  );
}
