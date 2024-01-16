/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  daisyui: {
    themes: ["lemonade"],
  },
  theme: {
    extend: {
      fontFamily: {
        'medieval': ['MedievalSharp', 'cursive'],
        // 'groovy': ['abstractGroovy'],
        // 'shrikhand': ['Shrikhand', 'cursive'],
        // 'karla': ['Karla', 'sans-serif'],
      },
      screens: {
        'xs': '450px',
        'smX': '500px',
        'sm': '650px',
        'md-pad': '815px',
        'md-icon': '860px',
        'mdX': '900px',
        'project-md': '1000px',
        'lg': '1150px',
        'lgX': '1160px',
        'xlX': '1300px',
      },
    },
  },
  plugins: [require("daisyui")],
}