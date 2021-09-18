module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js/ts/jsx/tsx}",
    "./Layout/**/*.{js/ts/jsx/tsx}",
    "./hooks/**/*.{js/ts/jsx/tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-bg": "url('/assets/images/bg.jpg')",
      }),
    },
    listStyleType: {
      none: "none",
      alpha: "lower-alpha",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "lower-roman",
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
    borderWidth: ["responsive", "hover", "focus"],
    fontSize: ["responsive", "hover", "focus"],
    fontWeight: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [],
};
