const path = require('path');
// const  BASE_URL = 'http://localhost:8888'
const  BASE_URL = 'http://106.14.167.231:3000'
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      '@': resolve("src"),
      'components': resolve("src/components")
    }
  },
  devServer:{
    proxy: {
      '/user':{
        target: BASE_URL,
        changeOrgin: true,
        pathRewrite:{
          '^/user': ''
        }
      }
    }

  },
  rules: [
    {
      test: /\.md$/,
      use: "raw-loader"
    }]
}