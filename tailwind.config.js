/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./screens/.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "../screens/**/*.{js,jsx,ts,tsx}",
    "../../screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      white:'#FFFFFF',
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#00B876",
      lightGreen:"#d0f7e9",
      lighterGreen :"#ecfaf5",
      black:"#000000",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",

    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
