import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'red': 'hsl(0, 78%, 62%)',
        'cyan': 'hsl(180, 62%, 55%)',
        'orange': 'hsl(34, 97%, 64%)',
        'blue': 'hsl(212, 86%, 64%)',
        'very-dark-blue': 'hsl(234, 12%, 34%)',
        'grayish-blue': 'hsl(229, 6%, 66%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
};
export default config;
