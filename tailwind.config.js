/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: "#141416",
          surface: "#1A1A1E",
          card: "#202024",
        },
        lime: {
          accent: "#CCFF00",
          bright: "#D4FF00",
        },
        graphite: {
          100: "#27272A",
          300: "#52525B",
          400: "#71717A",
          500: "#A1A1AA",
          600: "#D4D4D8",
          700: "#E4E4E7",
        }
      },
      fontFamily: {
        display: ["'Bebas Neue'", "'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      }
    },
  },
  plugins: [],
};
