import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'custom-dark-bg': "#15151B",
        'custom-indigo': '#977CCC',
        'custom-indigo-200': "#DAC7FF",
        'custom-dark-indigo': "#6424A0",
        'custom-placeholder': "#9B9B9B",
        'custom-dark-placeholder': "#A0A0A0",
        'custom-ring': "#3E3E3E",
        'custom-dark-text': "#F4F4F4",
        'custom-dark-chip': "#62447D",
        'custom-chip-bg': "#D2D2D2"
      }
    },
  },
  plugins: [],
};
export default config;
