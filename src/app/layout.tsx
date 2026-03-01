import type { Metadata, Viewport } from "next";

import { Fira_Code, Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/constants/site";
import { Sidebar } from "@/components/Sidebar";
import ScrollAnimation from "@/components/animation/ScrollHide";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | Cuong Nguyen`,
  },
  description: siteConfig.description,
  keywords: [
    "Nguyen Duc Cuong",
    "fullstack developer",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
    "Vietnam developer",
  ],
  authors: [{ name: "Nguyen Duc Cuong", url: siteConfig.url }],
  creator: "Nguyen Duc Cuong",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@cuongnguyen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/logo/logo.png",
    shortcut: "/logo/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9fafb" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="dark" lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased relative min-h-screen bg-background text-foreground overflow-x-hidden`}
      >
        <ScrollAnimation className="fixed top-0 left-0 right-0 z-50" direction="up">
          <Navbar />
        </ScrollAnimation>

        <main>{children}</main>

        <Sidebar />
      </body>
    </html>
  );
}
