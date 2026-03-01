"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useState } from "react";

import { ThemeSwitch } from "@/components/ThemeSwitch";
import ResumeButton from "@/components/button/ResumeButton";
import { motionTime } from "@/constants/motion-time";
import { siteConfig } from "@/constants/site";

export const Navbar = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setActiveHref(window.location.hash || siteConfig.navItems[0].href);
  }, []);

  if (!isMounted) {
    return (
      <div className={className}>
        <header className="hidden lg:flex items-center justify-between px-8 py-4 backdrop-blur-md bg-background/80 border-b border-border/40 opacity-0">
          <div className="w-10 h-10" />
          <nav className="flex items-center gap-6" />
        </header>
      </div>
    );
  }

  return (
    <div className={className}>
      <motion.header
        animate={{ opacity: 1, y: 0 }}
        className="hidden lg:flex items-center justify-between px-8 py-4 backdrop-blur-md bg-background/80 border-b border-border/40"
        initial={{ opacity: 0, y: -20 }}
        transition={{
          duration: motionTime.layout.motionNav.duration,
          delay: motionTime.layout.motionNav.delay,
        }}
      >
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: motionTime.layout.motionDiv.duration,
            delay: motionTime.layout.motionDiv.delay,
          }}
        >
          <NextLink className="flex items-center gap-2" href="/">
            <Image
              alt="Logo"
              className="transition-all duration-500 hover:drop-shadow-[0_5px_5px_var(--color-primary)]"
              height={40}
              src="/logo/logo.png"
              width={40}
            />
            <span className="font-bold text-foreground uppercase tracking-tight">
              Cuong Nguyen
            </span>
          </NextLink>
        </motion.div>

        <nav className="flex items-center gap-6">
          <ul className="flex gap-2">
            {siteConfig.navItems.map((item, index) => (
              <li key={item.href}>
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -30 }}
                  transition={{
                    duration: motionTime.layout.motionDiv.duration,
                    delay:
                      motionTime.layout.motionDiv.delay +
                      motionTime.item.delay * index,
                  }}
                >
                  <NextLink
                    className={`px-3 py-1 text-sm transition-all duration-300 font-medium ${
                      activeHref === item.href
                        ? "text-primary bg-primary/5 rounded-md"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    href={item.href}
                    onClick={() => setActiveHref(item.href)}
                  >
                    <span className="text-primary font-mono text-xs mr-1 opacity-70">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {item.label}
                  </NextLink>
                </motion.div>
              </li>
            ))}
          </ul>

          {siteConfig.resume && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -30 }}
              transition={{
                duration: motionTime.navbar.resumeButton.duration,
                delay: motionTime.navbar.resumeButton.delay,
              }}
            >
              <a
                href={siteConfig.resume.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <ResumeButton>{siteConfig.resume.label}</ResumeButton>
              </a>
            </motion.div>
          )}
        </nav>
      </motion.header>

      <div className="lg:hidden">
        <motion.header
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between px-5 py-3 backdrop-blur-md bg-background/90 border-b border-border/40"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <NextLink className="flex items-center gap-2" href="/">
            <Image alt="Logo" height={36} src="/logo/logo.png" width={36} />
            <span className="font-bold text-sm tracking-tight">
              CUONG NGUYEN
            </span>
          </NextLink>

          <div className="flex items-center gap-2">
            <a
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github size={20} />
            </a>
            <ThemeSwitch />
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </motion.header>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-6 pt-16"
              exit={{ opacity: 0, x: "100%" }}
              initial={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {siteConfig.navMenuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NextLink
                    className={`text-xl font-bold transition-colors duration-300 ${
                      activeHref === item.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    href={item.href}
                    onClick={() => {
                      setActiveHref(item.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="text-primary font-mono text-sm mr-2 opacity-70">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {item.label}
                  </NextLink>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
