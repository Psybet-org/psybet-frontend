const { DESKTOP_WIDTH } = require("./config");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#F8F2F2",
          800: "#242526",
          900: "#393232"
        },
        red: {
          100: "#C93B3B"
        }
      },
      fontFamily: {
        consolas: "Consolas",
      },
      maxWidth: {
        layout: "1200px",
      },
      screens: {
        desktop: `${DESKTOP_WIDTH}px`,
      },
    },
  },
  plugins: [],
};
