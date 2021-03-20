module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      black: "#000",
      blue: "#A2DCF6",
      darkBlue: "#4f80b5",
      purple: "#6F61A8",
      breadPurple: "#D0ABC5",
      salmon: "#F0999E",
      green: "#8BDAD5",
      yellowAccent: "#FAFF98",
    },
    fontFamily: {
      domaineSans: '"Domaine Sans Text", sans-serif',
    },
    gridTemplateColumns: {
      headerGrid: "300px 1fr",
    },
    backgroundImage: {
      chairHero: "url('/chairs.png')",
      homesHero: "url('/homes.png')",
      computersHero: "url('/computers.png')",
      dogsHero: "url('/dogs.png')",
      breadHero: "url('/bread.png')",
      coffee: "url('/Coffee.png')",
      portrait: "url('/portrait.webp')",
      yellowTexture: "url('/yellow-texture.png')",
      homepage: "url('/home-night.webp')",
    },
    backgroundSize: {
      500: "500px",
      btn: "37px 32px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
