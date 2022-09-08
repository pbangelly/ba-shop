const colors = require('tailwindcss/colors');

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      "title": ['Italianno'],
      "body": ['Libre']
    },
    container:{
      center: true,
    },
    colors:{
      white: colors.white,
      red: colors.red,
      indigo: colors.indigo,
      violet: colors.violet, 
      fuchsia: colors.fuchsia,

    },
    // extend: {
    //   backgroundImage: {
    //     'hero': "url('../lib/images/banner.jpeg')",
    //   }
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
