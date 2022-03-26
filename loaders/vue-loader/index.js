const { tplReplace } = require("../utils");
const { getOptions } = require("loader-utils");

function vueLoader(source) {
  // 去掉空字符串，不然你的匹配可能失效
  source = source.replace(/\s+/g, "");
  result = /.*<template>(.*?)<\/template>.*<script>(.*?)<\/script>/.exec(
    source
  );
  // 模板 HTML
  const template = result[1];
  // data 数据内容 {}
  const srcipt = /constdata=(.*?)\;$/g.exec(result[2])[1];
  const { log } = getOptions(this);
  // 这个 log 会在 app.js 中执行，因此是在浏览器中输出
  const _log = log
    ? `console.log('compiled the file which is from ${this.resourcePath}')`
    : "";

  // loader 是在 node.js 环境中运行的，因此这个 console.log 是终端命令行中输出
  console.log(srcipt);

  return `
    export default () => {
      ${tplReplace.toString()}
      ${_log.toString()}
      return tplReplace('${template}', ${srcipt});
    }
  `;
}

module.exports = vueLoader;
