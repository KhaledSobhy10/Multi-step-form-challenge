/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      UbuntuRegular: ["UbuntuRegular", "serif"],
      UbuntuBold: ["UbuntuBold", "serif"],
      UbuntuMedium: ["UbuntuMedium", "serif"],
    },

    extend: {
      colors: {
        "marine-blue": "#02295A",
        "purplish-blue": "#473DFF",
        "pastel-blue": "#ADBEFF",
        "light-blue": "#BFE2FD",
        "strawberry-red": "#ED3548",
        "cool-gray": "#9699AB",
        "light-gray": "#D6D9E6",
        magnolia: "#F0F6FF",
        alabaster: "#FAFBFF",
        white: "#FFFFFF",
      },
      backgroundImage: {
        desktopIndicator: "url('/src/assets/images/bg-sidebar-desktop.svg')",
      },
    },
  },
  plugins: [],
};
