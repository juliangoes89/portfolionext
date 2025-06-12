import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-color":"#27AE60",
        "gray-color":"#828282",
        "card-color":"#212121",
        "color-background":"#171717",
        "menu-color":"#172554"
      },
      backgroundImage:{
        "open-menu": `url('/menu.svg')`,
        "close-menu": `url('/close.svg')`
      }
    },
  },
  plugins: [],
} satisfies Config;
