'use strict';
/* module.exports = function (str) {
  var content;
  content = str.content;
  content = content.replace(/#####\s/g, "###### ");
  content = content.replace(/####\s/g, "##### ");
  content = content.replace(/###\s/g, "#### ");
  content = content.replace(/##\s/g, "### ");
  content = content.replace(/#\s/g, "## ");
  str.content = content;
  return str;
}; */
module.exports = function (str) {
  var content;
  content = str.content;
  content = content.replace(/#####\s/g, "###### ");
  content = content.replace(/####\s/g, "##### ");
  content = content.replace(/###\s/g, "#### ");
  content = content.replace(/##\s/g, "### ");
  content = content.replace(/#\s/g, "## ");
  str.content = content;
  return str;
};

