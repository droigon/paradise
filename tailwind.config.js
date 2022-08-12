/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'dark-logo':
          "url('./images/logo.png')",
        'hero':
        "url('../public/1.webp')",
      }),
    },
  },
  plugins: [],
}
