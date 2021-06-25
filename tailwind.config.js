module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
      },
      animation: {
        stripes: "stripes 10s linear infinite",
      },
      keyframes: {
        stripes: {
          "100%": { backgroundPosition: "200px 0" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
