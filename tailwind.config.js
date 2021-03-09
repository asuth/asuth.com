module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
      green: "#8BDAD5",
      yellowAccent: "#FAFF98",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
