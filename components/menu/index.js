"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/createSuper"));
var _react = _interopRequireDefault(require("react"));
var _indexModule = _interopRequireDefault(require("./index.module.css"));
var _desktopMenu = _interopRequireDefault(require("./desktop-menu"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _classnames = _interopRequireDefault(require("classnames"));
var _MenuBannerServices = _interopRequireDefault(require("../../assets/images/Menu-Banner-Services.png"));
var _MenuBannerProducts = _interopRequireDefault(require("../../assets/images/Menu-Banner-Products.png"));
var _MenuBannerTraining = _interopRequireDefault(require("../../assets/images/Menu-Banner-Training.png"));
var _MenuBannerUserGroup = _interopRequireDefault(require("../../assets/images/Menu-Banner-UserGroup.png"));
var _MenuBannerStandards = _interopRequireDefault(require("../../assets/images/Menu-Banner-Standards.png"));
var _MenuBannerAboutUs = _interopRequireDefault(require("../../assets/images/Menu-Banner-AboutUs.png"));
var searchUrl = "https://www.google.com.au/search?q=site:ssw.com.au%20";
var Menu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Menu, _React$Component);
  var _super = (0, _createSuper2.default)(Menu);
  function Menu() {
    (0, _classCallCheck2.default)(this, Menu);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(Menu, [{
    key: "menu_Search",
    value: function menu_Search(search) {
      if (window) {
        window.open(searchUrl + search);
      }
    }
  }, {
    key: "handleKeyDownOnMenuSearchInput",
    value: function handleKeyDownOnMenuSearchInput(event) {
      if (event.key === 'Enter') {
        this.menu_Search(event.target.value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var menuModel = this.props.menuModel;
      return (
        /*#__PURE__*/
        // this.state.menuModel &&
        _react.default.createElement("div", {
          className: _indexModule.default.MegaMenu
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _indexModule.default.menuContent
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: (0, _classnames.default)(_indexModule.default.menuMobile, _indexModule.default.visibleXs, _indexModule.default.visibleSm)
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _indexModule.default.sbToggleLeft,
          onClick: function onClick() {
            return _this.props.onClickToggle();
          }
        }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faBars
        }))), /*#__PURE__*/_react.default.createElement(_desktopMenu.default, {
          prefix: this.props.prefix,
          menuModel: menuModel
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: _indexModule.default.menuSearch
        }, /*#__PURE__*/_react.default.createElement("input", {
          type: "text",
          className: _indexModule.default.searchBox,
          onKeyDown: function onKeyDown(event) {
            return _this.handleKeyDownOnMenuSearchInput(event);
          }
        }))))
      );
    }
  }]);
  return Menu;
}(_react.default.Component); // This is a temporary workaround
// Ideally the images should be hosted and the image url passed in via https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json
var imageLibrary = {
  "Menu-Banner-Services.png": _MenuBannerServices.default,
  "Menu-Banner-Products.png": _MenuBannerProducts.default,
  "Menu-Banner-Training.png": _MenuBannerTraining.default,
  "Menu-Banner-UserGroup.png": _MenuBannerUserGroup.default,
  "Menu-Banner-Standards.png": _MenuBannerStandards.default,
  "Menu-Banner-AboutUs.png": _MenuBannerAboutUs.default
};
var Wrapper = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2.default)(Wrapper, _React$Component2);
  var _super2 = (0, _createSuper2.default)(Wrapper);
  function Wrapper(props) {
    var _this2;
    (0, _classCallCheck2.default)(this, Wrapper);
    _this2 = _super2.call(this, props);
    _this2.state = {
      menuModel: require('../../assets/data/menu.json'),
      menuLoaded: false
    };
    return _this2;
  }
  (0, _createClass2.default)(Wrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentComponent = this;
      fetch('https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json').then(function (res) {
        return res.json();
      }).then(function (response) {
        currentComponent.setState({
          menuModel: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, response), {}, {
            menuItems: response.menuItems.map(function (menuItem) {
              return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, menuItem), {}, {
                src: imageLibrary[menuItem.groupImageUrl]
              });
            })
          })
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        menuModel = _this$state.menuModel,
        menuLoaded = _this$state.menuLoaded;
      return /*#__PURE__*/_react.default.createElement(Menu, Object.assign({
        menuModel: menuModel,
        menuLoaded: menuLoaded
      }, this.props));
    }
  }]);
  return Wrapper;
}(_react.default.Component);
var _default = Wrapper;
exports.default = _default;