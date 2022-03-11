module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spotifyBlack: "#121212",
      },
      fontFamily: {
        spotifyFont: "Circular Std",
      },
    },
  },
  plugins: [require("daisyui"), require("./lib/scrollbar.js")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1db954",
          secondary: "#f2e2ae",
          accent: "#d6561b",
          neutral: "#212121",
          "neutral-focus": "#535353",
          "base-100": "#b3b3b3",
          info: "#5EC5ED",
          success: "#1DE293",
          warning: "#E17509",
          error: "#FB6089",
        },
      },
    ],
  },
}
