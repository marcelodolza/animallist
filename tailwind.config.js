module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        "1/2": "50%",
      },
      scale: {
        "-1": "-1",
        300: "3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
