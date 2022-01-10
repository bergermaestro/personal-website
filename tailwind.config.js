module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: {
          400: "#15293A",
          900: "#132434",
        },
        brandTeal: "#58B7B7",
        brandOrange: "#ED9665"
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
        'crete-round': ['"Crete Round"', 'serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
}


