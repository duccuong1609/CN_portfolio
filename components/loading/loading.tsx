"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "@heroui/link";

import { Navbar } from "../navbar";

export function PreLoading({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [fadeOut, setFadeOut] = React.useState(false);
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setFadeIn(true), 10);
      }, 500);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className={`h-screen transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <DotLottieReact autoplay src="loading.json" />
        </div>
      ) : (
        <div
          className={`relative flex flex-col h-screen transition-opacity duration-500 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <Navbar />
          <main className="container mx-auto pt-16 px-6 flex-grow">
            {children}
          </main>
          <footer className="w-full flex items-center justify-center py-3">
            <Link
              isExternal
              className="flex items-center gap-1 text-current"
              href="https://heroui.com?utm_source=next-app-template"
              title="heroui.com homepage"
            >
              <span className="text-default-600">Powered by</span>
              <p className="text-primary">HeroUI</p>
            </Link>
          </footer>
        </div>
      )}
    </>
  );
}
