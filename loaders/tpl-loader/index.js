const { tplReplace } = require("../utils");
const { getOptions } = require("loader-utils");

function tplLoader(source) {
  // 去掉空字符串
  source = source.replace(/\s+/g, "");
  const { log } = getOptions(this);
  // 这个 log 会在 app.js 中执行，因此是在浏览器中输出
  const _log = log
    ? `console.log('compiled the file which is from ${this.resourcePath}')`
    : "";

  // loader 是在 node.js 环境中运行的，因此这个 console.log 是终端命令行中输出
  console.log(source);
  
  return `
    export default (options) => {
      ${tplReplace.toString()}
      ${_log.toString()}
      return tplReplace('${source}', options);
    }
  `;
}

module.exports = tplLoader;
