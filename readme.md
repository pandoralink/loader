# 安装相应的包

```shell
# 1.
# 删掉原有 package.json 中的 dependencies 中的内容
# 直接安装，可以避免版本兼容性的问题
npm install webpack webpack-cli webpack-dev-server
npm install babel-loader @babel/core html-webpack-plugin
```

```shell
# 2.
# 直接安装
npm install
```

然后运行就完事了

```
npm run dev
```

# 感谢

感谢 up 主[前端小野森森-1](https://space.bilibili.com/378372969)制作这么好的教程

[【全网首发:已完结】手写自己的『模板编译 loader』【Webpack 专题课】](https://www.bilibili.com/video/BV1LD4y1X7FB)
