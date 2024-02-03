/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-dark": "#202124",
        "c-light-dark": "#3c4043",
        atomOneDark:"rgb(40 44 52)"
      },
    },
  },
  plugins: [],
};
