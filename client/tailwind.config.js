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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        bg: "var(--bg)",
        text: "var(--text)",
        softBg: "var(--softBg)",
        softText: "var(--softText)",
        darkSoftBg: "var(--darkSoftBg)",
        darkSoftText: "var(--darkSoftText)",
        hoverBg: "var(--hoverBg)",
        darkHoverBg: "var(--darkHoverBg)"
      },
    },
  },
  plugins: [],
};
