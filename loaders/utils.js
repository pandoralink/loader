function tplReplace(template, replaceObject) {
  return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
    console.log(replaceObject, key);
    return replaceObject[key];
  });
}

module.exports = {
  tplReplace,
};
