/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#ebdfd7",
        gray: {
          "100": "#8d8d8d",
          "200": "#24292f",
          "300": "#171717",
          "400": "#060606",
          "500": "#000606",
          "600": "rgba(6, 6, 6, 0.4)",
          "700": "rgba(255, 255, 255, 0.77)",
          "800": "rgba(255, 255, 255, 0.34)",
          "900": "rgba(27, 31, 36, 0.15)",
        },
        mediumseagreen: {
          "100": "#47bd69",
          "200": "#2da44e",
        },
        dimgray: "rgba(79, 82, 87, 0.15)",
        white: "#fff",
        lightgray: "#d0d7de",
        whitesmoke: {
          "100": "#f6f8fa",
          "200": "#f1f1f1",
        },
        darkslategray: {
          "100": "#292d32",
          "200": "rgba(41, 45, 50, 0.44)",
        },
        crimson: "#ff204e",
        gainsboro: "#e6e6e6",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        sm: "14px",
        "36xl": "55px",
        "29xl": "48px",
        mid: "17px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
