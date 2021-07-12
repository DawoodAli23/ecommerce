module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      admin: {
        light: "#e4eaec",
        dark: "#526069",
        darkblue: "#3e8ef7",
        lightblue: "#0bb2d4",
        seagreen: "#17b3a3",
        orange: "#eb6709",
        red: "#ff4c52",
        purple: "#9463f7",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
