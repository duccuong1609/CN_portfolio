import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEM Movies - Cinematic Streaming Platform | Nguyen Duc Cuong",
  description:
    "A deep dive into MEM Movies, a next-generation cinematic streaming platform built for high-fidelity visuals and real-time social interaction.",
  openGraph: {
    title: "MEM Movies - Cinematic Streaming Platform",
    description: "Explore the features and tech stack behind MEM Movies.",
    images: [{ url: "/mem.jpg" }],
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
