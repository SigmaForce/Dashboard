/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
          950: "#1e1e1e",
        },
        blue: {
          50: "#e7f5ff",
          100: "#d0ebff",
          200: "#a5d8ff",
          300: "#74c0fc",
          400: "#4dabf7",
          500: "#339af0",
          600: "#228be6",
          700: "#1c7ed6",
          800: "#1971c2",
          900: "#1864ab",
        },
        green: {
          50: "#ebfbee",
          100: "#d3f9d8",
          200: "#b2f2bb",
          300: "#8ce99a",
          400: "#69db7c",
          500: "#51cf66",
          600: "#40c057",
          700: "#37b24d",
          800: "#2f9e44",
          900: "#2b8a3e",
        },
        red: {
          50: "#fff5f5",
          100: "#ffe3e3",
          200: "#ffc9c9",
          300: "#ffa8a8",
          400: "#ff8787",
          500: "#ff6b6b",
          600: "#fa5252",
          700: "#f03e3e",
          800: "#e03131",
          900: "#c92a2a",
        },
      },
    },
  },
  plugins: [],
};
