module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://18.219.216.158:8000/predict",
        // target: "http://127.0.0.1:8000/",
      },
    },
  },
};
