/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#6F4E37', // dark_wood_brown
          light: '#E6D4B8', // warm_beige
        },
        accent: {
          green: '#4F7942', // forest_green
          amber: '#FFC97E', // soft_amber
        },
        neutral: {
          dark: '#333333', // rich_charcoal
          light: '#F9F8F4', // off_white
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
} 