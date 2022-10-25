/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontSize: {
      xxs: ".5rem", // 8px
      xs: ".625rem", // 10px
      sm: ".75rem", // 12px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.375rem", // 22px
      "1xl": "1.75rem", // 28px
      "2xl": "2.5rem", // 40px
      "3xl": "4.375rem", // 70px
      "4xl": "5.625rem", // 90px
      "5xl": "10rem", // 160px
      "6xl": "17.5rem", // 290px
    },

    screens: {
      xs: "425px",
      // => @media (min-width: 425px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      "up-to-md": { max: "1024px" },
      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }

      xl: "1920",
      // => @media (min-width: 1280px) { ... }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1rem",
        lg: "11.25rem",
        xl: "11.25rem",
      },
    },

    extend: {
      borderWidth: {
        1: "1px",
      },
      letterSpacing: {
        "02": "0.2em",
        "03": "0.3em",
      },
      colors: {
        main: "var(--color-main)",
        "02": "var(--color-02)",
        "03": "var(--color-03)",
        "04": "var(--color-04)",
        "05": "var(--color-05)",
        "06": "var(--color-06)",
        "07": "var(--color-07)",
        "08": "var(--color-08)",
        "09": "var(--color-09)",
        success: "var(--color-success)",
        11: "var(--color-11)",
        error: "var(--color-error)",
        13: "var(--color-13)",
      },
    },
  },
  plugins: [],
};
