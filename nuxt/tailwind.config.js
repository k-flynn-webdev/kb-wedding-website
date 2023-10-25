module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    base: true,
    themes: [
      {
        mytheme: {
          primary: "#e5c8ca",
          secondary: "#1d384e",
          accent: "#1d384e",
          neutral: "#1d384e",
          "base-100": "#f3f4f6",
          info: "#9db2e1",
          success: "#22b472",
          warning: "#f8b21b",
          error: "#f0383b",
        },
      },
      "bumblebee",
    ],
  },
};
