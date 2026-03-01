"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, AnimatePresence } from "framer-motion";

import { Sidebar } from "@/components/Sidebar";
import ScrollAnimation from "@/components/animation/ScrollHide";
import { motionTime } from "@/constants/motion-time";
import { loadingTime } from "@/constants/loading-time";

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
          className={`h-screen flex items-center justify-center transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <DotLottieReact autoplay src="loading.json" />
        </div>
      ) : (
        <div
          className={`relative flex flex-col min-h-screen transition-opacity duration-500 ${
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
              <motion.main
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{
                  duration: motionTime.layout.motionMain.duration,
                  delay: motionTime.layout.motionMain.delay,
                }}
              >
                {children}
              </motion.main>
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{
                  duration: motionTime.layout.motionFooter.duration,
                  delay: motionTime.layout.motionFooter.delay,
                }}
              >
                <ScrollAnimation className="hidden lg:block">
                  <Sidebar />
                </ScrollAnimation>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
