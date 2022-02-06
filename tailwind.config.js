module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      screens: {
        mf: "990px",
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        "slide-in-right": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
            opacity: 0,
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        "slide-in-left": {
          "0%": {
            "-webkit-transform": "translateX(-120%)",
            transform: "translateX(-120%)",
            opacity: 0,
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },
      animation: {
        "slide-in-left": "slide-in-left 0.7s ease-out forwards",
        "slide-in-right": "slide-in-right 0.7s ease-out forwards",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
