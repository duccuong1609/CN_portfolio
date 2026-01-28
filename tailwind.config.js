import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-150vh) rotate(10deg)' },
          '100%': { transform: 'translateX(150vw) rotate(10deg)' },
        },
      },
      animation: {
        slide: 'slide linear infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#5ef0d0",
              foreground: "#000000",
            },
            focus: "#5ef0d0",
          },
        },
      },
    }),
  ],
};

module.exports = config;
