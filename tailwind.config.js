module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotocondensed: ["Roboto Condensed", "sans-serif"],
        robotoslab: ["Roboto Slab", "sans-serif"],
      },
      backgroundImage: {
        profileIcon: "url('media/img/profile.png')",
        imageIcon: "url('media/img/image.png')",
        applicationIcon: "url('media/img/applications.png')",
        businessfinanceIcon: "url('media/img/business_finance.png')",
      },
    },
  },
  variants: {},
  plugins: [],
};
