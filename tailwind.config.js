/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        kecil: "8px",
      },
      colors: {
        oren: "#FF9F00",
        abu: "#727272",
        hitam: "#1B1B1B",
        soft: "#F3F3F3",
        putih: "#FFFFFF",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
