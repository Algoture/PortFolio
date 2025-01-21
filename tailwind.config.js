/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        card: "var(--card)",
        darkcard: "var(--darkcard)",
        navIcon: "var(--navIcon)",
        stroke: "var(--strokeWidth)",
      },
      boxShadow: {
        sh: "0px 2px 3px -1px rgba(0, 0, 0, .1), 0px 1px 0px 0px rgba(25, 28, 33, .02), 0px 0px 0px 1px rgba(25, 28, 33, .08)",
      },
      
    },
  },
  plugins: [],
};
