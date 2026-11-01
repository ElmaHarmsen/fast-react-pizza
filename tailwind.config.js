/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    // to not overwrite standard tailwind css put it in extend
    extend: {
      colors: {
        pizza: "#ccc",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
