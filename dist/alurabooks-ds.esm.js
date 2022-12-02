import React from 'react';
import styled from 'styled-components';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

var _templateObject;
var BotaoEstilizado = /*#__PURE__*/styled.button(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n\tbackground: #EB9B00;\n\tpadding: 16px 32px;\n\tborder: 2px solid #EB9B00 ;\n\tcolor: #FFF;\n\tfont-size: 20px;\n\tcursor: pointer;\n\t&:hover {\n\t\tbackground:#B87900;\n\t\tborder: 2px solid #B87900;\n\t}\n"])));
var AbBotao = function AbBotao() {
  return React.createElement(BotaoEstilizado, null, "Clique Aqui!");
};

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, children || "the snozzberries taste like snozzberries");
};

export { AbBotao, Thing };
//# sourceMappingURL=alurabooks-ds.esm.js.map
