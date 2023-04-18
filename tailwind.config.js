/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "base-primary-bold": "#000037",
        "base-primary-semibold": "#12204D",
        "base-primary-secondary": "#08539A",
        "base-primary-normal": "#6E7DA5",
        "base-primary-light": "#888FB0",
        "base-primary-extralight": "#F4F6FF",
        "base-primary-thin": "#5B6591",
        "base-blue-primary": "#0796E5",
        "base-blue-secondary": "#559BD9",
        "base-blue-medium": "#809FB8",
        "base-blue-light": "#0796E51F",
        "base-blue-thin": "#E1F4FE",
        "base-gray": "#808D93",
        "base-gray-medium": "#4A5056",
        "base-gray-light": "#ebebeb",
        "base-body": "#F9F9F9",
        "base-black": "#2A2F31",
        "base-black-medium": "#212121",
        "base-green-medium": "#09A262",
        "base-green-light": "#09A2621F",
        "base-red": "#E53935",
        "base-red-light": "#E539351A",
      },
    },
    screens: {
      xxs: "200px",
      // => @media (min-width: 200px) { ... }

      xs: "350px",
      // => @media (min-width: 350px) { ... }

      max_xs: { max: "350px" },
      // => @media (max-width: 350px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      max_sm: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      max_md: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
