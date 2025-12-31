import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // 👈 Add this line here!

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        testColor: "#ff00ff",
      },
    },

    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1040px",
        "2xl": "1440px",
      },
    },
  },

  plugins: [],
} satisfies Config;
