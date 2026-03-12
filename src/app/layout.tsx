import type { Metadata, Viewport } from "next";

import { Fira_Code, Inter } from "next/font/google";

import ScrollAnimation from "@/components/animation/ScrollHide";
import Beams from "@/components/Beams";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { siteConfig } from "@/constants/site";
import "./globals.css";

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
  metadataBase: new URL(siteConfig.url),
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
        <ScrollAnimation
          className="fixed top-0 left-0 right-0 z-50"
          direction="up"
        >
          <Navbar />
        </ScrollAnimation>

        <div className="hidden dark:block fixed inset-0 -z-10 pointer-events-none">
          <Beams
            beamHeight={30}
            beamNumber={20}
            beamWidth={3}
            lightColor="#ffffff"
            noiseIntensity={1.75}
            rotation={30}
            scale={0.2}
            speed={2}
          />
        </div>

        <div className="block dark:hidden fixed inset-0 -z-10 pointer-events-none">
          {/* <ColorBends
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.1}
            transparent
            autoRotate={0}
          /> */}
        </div>

        <main className="relative">{children}</main>
        <Sidebar />
      </body>
    </html>
  );
}
