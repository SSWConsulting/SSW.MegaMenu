"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _indexModule = _interopRequireDefault(require("./index.module.css"));
var _classnames = _interopRequireDefault(require("classnames"));
var DropdownItem = function DropdownItem(_ref) {
  var item = _ref.item,
    index = _ref.index;
  var stylesList = [_indexModule.default.NonClickableMenuItem, _indexModule.default.level1, _indexModule.default.level2, _indexModule.default.ignore, _indexModule.default.ClickableMenuItem];
  var l1Class = item.data.navigateUrlOnMobileOnly ? (0, _classnames.default)(_indexModule.default.NonClickableMenuItem, _indexModule.default.level1) : item.data.cssClass ? (0, _classnames.default)(stylesList[item.data.cssClass], _indexModule.default.level1) : _indexModule.default.level1;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, item.level === 1 && /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    className: l1Class
  }, (!item.data.navigateUrl || item.data.navigateUrlOnMobileOnly) && /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(_indexModule.default.ignore, 'unstyled')
  }, item.data.text), item.data.navigateUrl && !item.data.navigateUrlOnMobileOnly && /*#__PURE__*/_react.default.createElement("a", {
    href: item.data.navigateUrl ? item.data.navigateUrl : null,
    className: (0, _classnames.default)(_indexModule.default.ignore, 'unstyled')
  }, item.data.text)), item.level === 2 && /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    className: item.data.cssClass ? (0, _classnames.default)(stylesList[item.data.cssClass], _indexModule.default.ClickableMenuItem, _indexModule.default.level2) : (0, _classnames.default)(_indexModule.default.ClickableMenuItem, _indexModule.default.level2)
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: item.data.navigateUrl ? item.data.navigateUrl : null,
    className: (0, _classnames.default)(_indexModule.default.ignore, 'unstyled')
  }, item.data.text)));
};
var _default = DropdownItem;
exports.default = _default;