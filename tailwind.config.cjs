// tailwind.config.cjs

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx, md, mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        linkactive: "rgba(153, 103, 0, 1)",
        buttongreen: "rgba(60, 123, 78, 1)",
        backgroudgreen: "rgba(1, 73, 33, 1)",
      },
      fontFamily: {
        poppins: ["Work Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
