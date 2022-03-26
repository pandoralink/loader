import tpl from "./info.tpl";
import vueTemplate from "./info.vue"

const oApp = document.querySelector("#app");

const info = tpl({
  name: "小野森森",
  age: 34,
  career: "Web开发老师",
  hobby: "旅行、钢琴",
});

console.log(info);

oApp.innerHTML = info;

// 加载 info.vue 内容
const node = document.createElement('div');
node.innerHTML = vueTemplate();
oApp.appendChild(node);