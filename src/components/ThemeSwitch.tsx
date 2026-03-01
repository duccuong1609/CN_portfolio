"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitch = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = saved ? saved === "dark" : prefersDark;

    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;

    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`p-1 text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 ${className ?? ""}`}
      onClick={toggle}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
