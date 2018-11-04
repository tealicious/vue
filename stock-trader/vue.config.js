const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    }
  },
  baseUrl: process.env.NODE_ENV === "production" ? "/cointrader/" : "/"
};
