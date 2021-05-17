module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        "screen-50vh": "50vh",
        "screen-70vh": "70vh",
      }),
      backgroundPosition: (theme) => ({
        "top-center": "top center",
      }),
    },
    fontFamily: {
      helvetica: ["Helvetica Neue", "Arial", "sans-serif"],
      body: ["Roboto", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
