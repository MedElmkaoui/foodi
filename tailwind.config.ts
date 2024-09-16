import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'x-toggle': 'x-toggle 2s ease-in-out infinite',
        'y-toggle': 'y-toggle 2s ease-in-out infinite',
      },
      keyframes: {
        'x-toggle': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(50px)' }, // Adjust the value as needed
        },
        'y-toggle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(50px)' }, // Adjust the value as needed
        },
      },
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
