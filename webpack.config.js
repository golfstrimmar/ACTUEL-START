const path = require("path");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: {
    main: "./src/js/index.js",
  },

  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "/",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  devServer: {
    compress: true,
    port: 8001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["@babel/preset-env", { modules: false }]],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/,
      },
       {
        test: /\.pug$/,
        loader: 'vue-pug-loader'
      }
    ],
  },

  resolve: {
    alias: {
      "%modules%": path.resolve(__dirname, "src/blocks/modules"),
      "%components%": path.resolve(__dirname, "src/blocks/components"),
    },
  },
  plugins: [new VueLoaderPlugin()],
};
