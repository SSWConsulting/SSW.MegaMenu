"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createForOfIteratorHelper"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createSuper"));
var _react = _interopRequireDefault(require("react"));
var _indexModule = require("./index.module.css");
var _classnames = _interopRequireDefault(require("classnames"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _axios = _interopRequireDefault(require("axios"));
var MobileMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MobileMenu, _React$Component);
  var _super = (0, _createSuper2.default)(MobileMenu);
  //const DesktopMenu = ({prefix}) => {
  function MobileMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MobileMenu);
    _this = _super.call(this, props);
    _this.state = {
      menuModel: null
    };
    return _this;
  }
  (0, _createClass2.default)(MobileMenu, [{
    key: "loadMenuModel",
    value: function loadMenuModel() {
      if (!this.state.menuModel) {
        var currentComponent = this;
        _axios.default.get('https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json').then(function (response) {
          currentComponent.setState({
            menuModel: response.data
          });
        }).catch(function (error) {
          console.log(error);
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadMenuModel();
    }
  }, {
    key: "closeOpenedElements",
    value: function closeOpenedElements(element) {
      var openedItems = document.getElementsByClassName((0, _classnames.default)(_indexModule.dropdown, _indexModule.open));
      var _iterator = (0, _createForOfIteratorHelper2.default)(openedItems),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _element$parentNode;
          var item = _step.value;
          if (item !== ((_element$parentNode = element.parentNode) === null || _element$parentNode === void 0 ? void 0 : _element$parentNode.parentNode)) {
            item.className = _indexModule.dropdown;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "openElement",
    value: function openElement(element) {
      this.closeOpenedElements(element);
      element.className = (0, _classnames.default)(_indexModule.dropdown, _indexModule.open);
    }
  }, {
    key: "closeElement",
    value: function closeElement(element) {
      element.className = _indexModule.dropdown;
    }
  }, {
    key: "openItem",
    value: function openItem(event) {
      if (event.target.parentNode.className === _indexModule.dropdown) {
        this.closeOpenedElements(event.target.parentNode);
        this.openElement(event.target.parentNode);
      } else if (event.target.parentNode.parentNode.className === _indexModule.dropdown) {
        this.closeOpenedElements(event.target.parentNode);
        this.openElement(event.target.parentNode.parentNode);
      } else if (event.target.parentNode.className === (0, _classnames.default)(_indexModule.dropdown, _indexModule.open)) {
        this.closeElement(event.target.parentNode);
      } else if (event.target.parentNode.parentNode.className === (0, _classnames.default)(_indexModule.dropdown, _indexModule.open)) {
        this.closeElement(event.target.parentNode.parentNode);
      }
    }
  }, {
    key: "renderMenuItems",
    value: function renderMenuItems(item, index) {
      var _this2 = this;
      if (!item.children || item.navigateUrlOnMobileOnly) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: index,
          className: _indexModule.dropdown
        }, /*#__PURE__*/_react.default.createElement("a", {
          href: item.navigateUrl ? item.navigateUrl : null,
          className: (0, _classnames.default)(_indexModule.ignore, 'unstyled')
        }, item.text));
      } else if (item.children) {
        return /*#__PURE__*/_react.default.createElement("li", {
          key: index,
          className: _indexModule.dropdown
        }, /*#__PURE__*/_react.default.createElement("a", {
          className: (0, _classnames.default)(_indexModule.dropdownToggle, 'unstyled')
        }, item.text, " ", /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faAngleDown
        })), /*#__PURE__*/_react.default.createElement("ul", {
          className: _indexModule.dropdownMenu
        }, item.children.map(function (item, index) {
          return _this2.renderMenuItems(item, index);
        })));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)(_indexModule.sbSlidebar, _indexModule.sbLeft),
        style: {
          width: this.props.isMenuOpened ? '84vw' : '0px'
        },
        onClick: function onClick(event) {
          return _this3.openItem(event);
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)(_indexModule.menuDrop, _indexModule.navbarCollapse)
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: _indexModule.navbarNav
      }, this.state.menuModel && this.state.menuModel.menuItems.map(function (item, index) {
        return _this3.renderMenuItems(item, index);
      }))));
    }
  }]);
  return MobileMenu;
}(_react.default.Component);
var _default = MobileMenu;
exports.default = _default;