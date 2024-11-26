/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This includes all files in your `src` folder.
    "./public/index.html",        // Include any HTML files if you use Tailwind there.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
