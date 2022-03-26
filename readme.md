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

# 手写 vue 模板语法

_注，仅实现 string and number 类型数据与模板绑定_

```
<div>{{ data }}</div>
...
data = 3
...

最终会变成

<div>3</div>
```

## 细节

`loader` 返回的是一个**函数**，`import` 时需要执行！

## 难点

1. 提取 `<template></template>` 和 `<script></script>` 中的内容，看起来很简单，其实第一步去掉空字符串没做好，你的正则匹配就没有用了
2. 提取数据，由于我想直接在 `info.vue` 中使用数据驱动视图，所以采用了 `const data = {xxx: x,...}` 的方式，后面证实这种定义方式反而会影响取出数据，因为我们只需要 `{xxx: x,...}` 而不是 `const data = `

## 总结

难在正则，说的没错

# 感谢

感谢 up 主[前端小野森森-1](https://space.bilibili.com/378372969)制作这么好的教程

[【全网首发:已完结】手写自己的『模板编译 loader』【Webpack 专题课】](https://www.bilibili.com/video/BV1LD4y1X7FB)
