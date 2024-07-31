/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mid-bg': '#dcdcdc', // Light gray background
        // 'mid-text': '#333333', // Dark gray text
        // 'mid-border': '#dddddd', // Light gray border
        // 'mid-accent': '#007acc', // A neutral accent color
      },
    },
  },
  plugins: [],
}

