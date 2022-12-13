"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _dropdownItem = _interopRequireDefault(require("./dropdown-item"));
var _indexModule = require("./index.module.css");
var Dropdown = function Dropdown(_ref) {
  var items = _ref.items;
  var CountChildren = function CountChildren(items) {
    var count = items.length;
    items.forEach(function (level1) {
      if (level1.children) {
        count += level1.children.length;
      }
    });
    return count;
  };
  var createDropDown = function createDropDown(items) {
    var blocks = [];
    blocks.push([]);
    var countChildren = CountChildren(items);
    var currentIndex = 0;
    var currentColumn = 0;
    items.forEach(function (level1Item) {
      if (level1Item.breakListBefore) {
        currentColumn++;
        currentIndex = 0;
        blocks.push([]);
      }
      blocks[currentColumn].push({
        level: 1,
        data: level1Item
      });
      if (level1Item.children) {
        level1Item.children.forEach(function (level2Item) {
          if (level2Item.breakListBefore) {
            currentIndex++;
            if (level2Item.breakListBefore || currentIndex > countChildren / currentColumn) {
              currentColumn++;
              currentIndex = 0;
              blocks.push([]);
            }
          }
          blocks[currentColumn].push({
            level: 2,
            data: level2Item
          });
        });
      }
    });
    return blocks.map(function (column, index) {
      return /*#__PURE__*/_react.default.createElement("ul", {
        key: index,
        className: _indexModule.colMd3
      }, column.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(_dropdownItem.default, {
          key: index,
          item: item
        });
      }));
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _indexModule.MenuWrapper
  }, createDropDown(items));
};
var _default = Dropdown;
exports.default = _default;