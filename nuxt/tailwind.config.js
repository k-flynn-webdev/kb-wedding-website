module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    base: true,
    themes: [
      {
        mytheme: {
          primary: "red",
          secondary: "yellow",
          accent: "#ffebf4",
          neutral: "#8b9cac",
          "base-100": "#f3f4f6",
          info: "#9db2e1",
          success: "#22b472",
          warning: "#f8b21b",
          error: "#f0383b",
        },
      },
      // "bumblebee",
    ],
  },
};
