/**
 * mode development production
 * entry 入口文件
 * output path filename 打包输出路径
 * devtool source-map
 * module rules Loader
 * plugins 插件
 * devServer 开发服务器
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: resolve(__dirname, "src/app.js"),
  output: {
    path: resolve(__dirname, "build"),
    filename: "app.js",
  },
  devtool: "source-map",
  resolveLoader: {
    // 配置 loader 位置可以为哪个文件夹
    modules: ["node_modules", resolve(__dirname, "loaders")],
  },
  module: {
    rules: [
      {
        test: /\.tpl$/,
        use: [
          "babel-loader",
          {
            loader: "tpl-loader",
            options: {
              log: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html"),
    }),
  ],
  devServer: {
    port: 3000,
  },
};
