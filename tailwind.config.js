/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#222222",
        foreground: "#ededed",
        primary: "#fc5508",
        secondary: "#fef701",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        128: "32rem", // Custom spacing, useful for larger layouts
        144: "36rem",
      },
      screens: {
        sm: "640px", // Mobile: from 640px and above
        md: "768px", // Tablet: from 768px and above
        lg: "1024px", // Desktop: from 1024px and above
        xl: "1280px", // Large desktop: from 1280px and above
      },
      boxShadow: {
        xl: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        "2xl": "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
