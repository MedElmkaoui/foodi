import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#39DB4A',
        secondary : '#C1F1C6',
        'meta-red' : '#FF6868',
        gray : '#4A4A4A',
        lightgray : '#eeefee'
      },
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
