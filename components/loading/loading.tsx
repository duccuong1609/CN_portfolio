"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";
import ScrollAnimation from "../animation/scroll-hide";

import { motionTime } from "@/config/motion.time";
import { loadingTime } from "@/config/loading.time";

export function PreLoading({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [fadeOut, setFadeOut] = React.useState(false);
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setFadeIn(true), loadingTime.fadeIn);
      }, loadingTime.fadeOut);
    }, loadingTime.loading);

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
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: motionTime.layout.motionDiv.duration }}
            >
              <motion.nav
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: motionTime.layout.motionNav.duration,
                  delay: motionTime.layout.motionNav.delay,
                }}
              >
                <ScrollAnimation className="hidden lg:block">
                  <Navbar />
                </ScrollAnimation>
                <Navbar className="lg:hidden" />
              </motion.nav>
              <motion.main
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{
                  duration: motionTime.layout.motionMain.duration,
                  delay: motionTime.layout.motionMain.delay,
                }}
              >
                <main className="container mx-auto pt-10 lg:pt-0 px-6 flex-grow">
                  {children}
                </main>
              </motion.main>
              <motion.footer
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: motionTime.layout.motionFooter.duration,
                  delay: motionTime.layout.motionFooter.delay,
                }}
              >
                <Sidebar />
              </motion.footer>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
