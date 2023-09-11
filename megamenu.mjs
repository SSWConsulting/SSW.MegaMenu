var U = Object.defineProperty, W = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var v = Object.getOwnPropertySymbols;
var O = Object.prototype.hasOwnProperty, B = Object.prototype.propertyIsEnumerable;
var N = (e, t, a) => t in e ? U(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[t] = a, g = (e, t) => {
  for (var a in t || (t = {}))
    O.call(t, a) && N(e, a, t[a]);
  if (v)
    for (var a of v(t))
      B.call(t, a) && N(e, a, t[a]);
  return e;
}, M = (e, t) => W(e, D(t));
import n, { useEffect as L } from "react";
import o from "classnames";
import { FontAwesomeIcon as f } from "@fortawesome/react-fontawesome";
import { faAngleDown as k, faBars as j } from "@fortawesome/free-solid-svg-icons";
import T from "react-useportal";
const q = "_MegaMenu_nc8do_17", $ = "_menuContent_nc8do_35", P = "_menuMobile_nc8do_40", z = "_visibleXs_nc8do_45", X = "_visibleSm_nc8do_46", F = "_sbToggleLeft_nc8do_59", R = "_menuSearch_nc8do_80", A = "_searchBox_nc8do_88", u = {
  MegaMenu: q,
  menuContent: $,
  menuMobile: P,
  visibleXs: z,
  visibleSm: X,
  sbToggleLeft: F,
  menuSearch: R,
  searchBox: A
}, V = "_menuDrop_1gqj6_1", K = "_Menu_1gqj6_46", G = "_hiddenXs_1gqj6_60", H = "_hiddenSm_1gqj6_65", J = "_ignore_1gqj6_69", i = {
  menuDrop: V,
  "inline-block": "_inline-block_1gqj6_28",
  Menu: K,
  hiddenXs: G,
  hiddenSm: H,
  ignore: J,
  "cursor-pointer": "_cursor-pointer_1gqj6_73"
}, Q = "_MenuImg_1chf9_1", Y = {
  MenuImg: Q
}, Z = "_Popular_p6zl5_1", ee = "_ignore_p6zl5_6", ne = "_ClickableMenuItem_p6zl5_11", te = "_NonClickableMenuItem_p6zl5_16", ae = "_level1_p6zl5_22", le = "_level2_p6zl5_49", se = "_map_p6zl5_74", oe = "_featVideo_p6zl5_79", r = {
  Popular: Z,
  ignore: ee,
  ClickableMenuItem: ne,
  NonClickableMenuItem: te,
  level1: ae,
  level2: le,
  map: se,
  featVideo: oe
}, re = ({ item: e, index: t }) => {
  const a = [
    r.NonClickableMenuItem,
    r.level1,
    r.level2,
    r.ignore,
    r.ClickableMenuItem
  ], l = e.data.navigateUrlOnMobileOnly ? o(r.NonClickableMenuItem, r.level1) : e.data.cssClass ? o(a[e.data.cssClass], r.level1) : r.level1;
  return /* @__PURE__ */ n.createElement(n.Fragment, null, e.level === 1 && /* @__PURE__ */ n.createElement("li", { key: t, className: l }, (!e.data.navigateUrl || e.data.navigateUrlOnMobileOnly) && /* @__PURE__ */ n.createElement("span", { className: o(r.ignore, "unstyled") }, e.data.text), e.data.navigateUrl && !e.data.navigateUrlOnMobileOnly && /* @__PURE__ */ n.createElement(
    "a",
    {
      href: e.data.navigateUrl ? e.data.navigateUrl : null,
      className: o(r.ignore, "unstyled")
    },
    e.data.text
  )), e.level === 2 && /* @__PURE__ */ n.createElement(
    "li",
    {
      key: t,
      className: e.data.cssClass ? o(a[e.data.cssClass], r.ClickableMenuItem, r.level2) : o(r.ClickableMenuItem, r.level2)
    },
    /* @__PURE__ */ n.createElement(
      "a",
      {
        href: e.data.navigateUrl ? e.data.navigateUrl : null,
        className: o(r.ignore, "unstyled")
      },
      e.data.text
    )
  ));
}, ce = "_colMd3_qrlih_1", ue = "_MenuWrapper_qrlih_11", ie = "_level1_qrlih_23", de = "_level2_qrlih_44", S = {
  colMd3: ce,
  MenuWrapper: ue,
  level1: ie,
  level2: de
}, me = ({ items: e }) => {
  const t = (l) => {
    let c = l.length;
    return l.forEach((_) => {
      _.children && (c += _.children.length);
    }), c;
  }, a = (l) => {
    let c = [];
    c.push([]);
    let _ = t(l), h = 0, m = 0;
    return l.forEach((d) => {
      d.breakListBefore && (m++, h = 0, c.push([])), c[m].push({ level: 1, data: d }), d.children && d.children.forEach((p) => {
        p.breakListBefore && (h++, (p.breakListBefore || h > _ / m) && (m++, h = 0, c.push([]))), c[m].push({ level: 2, data: p });
      });
    }), c.map((d, p) => /* @__PURE__ */ n.createElement("ul", { key: p, className: S.colMd3 }, d.map((I, x) => /* @__PURE__ */ n.createElement(re, { key: x, item: I }))));
  };
  return /* @__PURE__ */ n.createElement("div", { className: S.MenuWrapper }, a(e));
}, pe = ({ item: e, prefix: t }) => /* @__PURE__ */ n.createElement(n.Fragment, null, e.src && /* @__PURE__ */ n.createElement("div", { className: Y.MenuImg }, /* @__PURE__ */ n.createElement(
  "img",
  {
    src: e.src,
    alt: e.text,
    loading: "eager"
  }
)), /* @__PURE__ */ n.createElement(me, { items: e.children })), ge = (e) => /* @__PURE__ */ n.createElement("div", { className: o(i.menuDrop, i.hiddenXs, i.hiddenSm) }, /* @__PURE__ */ n.createElement("ul", null, e.menuModel && e.menuModel.menuItems.map((t, a) => /* @__PURE__ */ n.createElement("li", { key: a }, !t.children && /* @__PURE__ */ n.createElement(
  "a",
  {
    href: t.navigateUrl ? t.navigateUrl : null,
    className: o(i.ignore, "unstyled")
  },
  t.text
), " ", t.children && /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(
  "div",
  {
    role: "presentation",
    className: o(
      i.ignore,
      i["cursor-pointer"],
      i["inline-block"],
      "unstyled"
    )
  },
  t.text,
  " ",
  /* @__PURE__ */ n.createElement(f, { icon: k })
), /* @__PURE__ */ n.createElement("div", { className: i.Menu }, /* @__PURE__ */ n.createElement(pe, { item: t, prefix: e.prefix }))))))), _e = [
  {
    text: "Services",
    groupImageUrl: "https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-Services.png",
    children: []
  },
  {
    text: "Products",
    groupImageUrl: "https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-Products.png",
    children: []
  },
  {
    text: "Training",
    groupImageUrl: "https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-Training.png",
    children: []
  },
  {
    text: "User Group",
    groupImageUrl: "https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-UserGroup.png",
    children: []
  },
  {
    text: "Rules",
    groupImageUrl: "https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-Standards.png",
    children: []
  },
  {
    text: "About Us",
    groupImageUrl: "https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-AboutUs.png",
    children: []
  },
  {
    text: "SSW TV",
    cssClass: "ignore no-dropdown menu-ssw-tv",
    navigateUrl: "http://tv.ssw.com",
    target: "_blank"
  }
], he = {
  menuItems: _e
}, Me = "https://www.google.com.au/search?q=site:ssw.com.au%20";
class be extends n.Component {
  menu_Search(t) {
    window && window.open(Me + t);
  }
  handleKeyDownOnMenuSearchInput(t) {
    t.key === "Enter" && this.menu_Search(t.target.value);
  }
  render() {
    const { menuModel: t } = this.props;
    return (
      // this.state.menuModel &&
      /* @__PURE__ */ n.createElement("div", { className: u.MegaMenu }, /* @__PURE__ */ n.createElement("div", { className: u.menuContent }, /* @__PURE__ */ n.createElement(
        "div",
        {
          className: o(
            u.menuMobile,
            u.visibleXs,
            u.visibleSm
          )
        },
        /* @__PURE__ */ n.createElement(
          "div",
          {
            className: u.sbToggleLeft,
            onClick: (a) => this.props.onClickToggle(a)
          },
          /* @__PURE__ */ n.createElement(f, { icon: j })
        )
      ), /* @__PURE__ */ n.createElement(
        ge,
        {
          prefix: this.props.prefix,
          menuModel: t
        }
      ), /* @__PURE__ */ n.createElement("div", { className: u.menuSearch }, /* @__PURE__ */ n.createElement(
        "input",
        {
          type: "text",
          className: u.searchBox,
          onKeyDown: (a) => this.handleKeyDownOnMenuSearchInput(a)
        }
      ))))
    );
  }
}
const E = (e) => e ? M(g({}, e), {
  menuItems: e.menuItems.map((t) => M(g({}, t), {
    src: t.groupImageUrl
  }))
}) : {};
class fe extends n.Component {
  constructor(t) {
    super(t), this.state = {
      menuModel: E(he),
      menuLoaded: !1
    };
  }
  componentDidMount() {
    let t = this;
    fetch("https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json").then((a) => a.json()).then(function(a) {
      t.setState({
        menuModel: E(a),
        menuLoaded: !0
      });
    }).catch(function(a) {
      console.log(a);
    });
  }
  render() {
    const { menuModel: t, menuLoaded: a } = this.state;
    return /* @__PURE__ */ n.createElement(be, g({ menuModel: t, menuLoaded: a }, this.props));
  }
}
const ve = "_sbSlidebar_13nfl_1", Ne = "_sbLeft_13nfl_26", Se = "_menuDrop_13nfl_29", Ee = "_fa_13nfl_73", we = "_open_13nfl_85", Ce = "_dropdownMenu_13nfl_95", ke = "_navbarCollapse_13nfl_130", ye = "_collapse_13nfl_144", Ie = "_dropdown_13nfl_95", xe = "_ignore_13nfl_157", Ue = "_dropdownToggle_13nfl_161", We = "_navbarNav_13nfl_188", s = {
  sbSlidebar: ve,
  sbLeft: Ne,
  menuDrop: Se,
  fa: Ee,
  open: we,
  dropdownMenu: Ce,
  navbarCollapse: ke,
  collapse: ye,
  dropdown: Ie,
  ignore: xe,
  dropdownToggle: Ue,
  navbarNav: We
}, De = (e) => {
  const [t, a] = n.useState(null);
  return L(() => {
    t || fetch("https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json").then((l) => l.json()).then((l) => {
      a(l);
    }).catch((l) => {
      console.error(l);
    });
  }, []), /* @__PURE__ */ n.createElement(
    "div",
    {
      ref: e.innerRef,
      className: o(s.sbSlidebar, s.sbLeft, e.className),
      style: { left: e.isMenuOpened ? "0" : "-84vw" },
      onClick: (l) => Oe(l)
    },
    /* @__PURE__ */ n.createElement("div", { className: o(s.menuDrop, s.navbarCollapse) }, /* @__PURE__ */ n.createElement("ul", { className: s.navbarNav }, t && t.menuItems.map(
      (l, c) => /* @__PURE__ */ n.createElement(y, { item: l, key: c })
    )))
  );
}, y = ({ item: e }) => !e.children || e.navigateUrlOnMobileOnly ? /* @__PURE__ */ n.createElement("li", { className: s.dropdown }, /* @__PURE__ */ n.createElement(
  "a",
  {
    href: e.navigateUrl ? e.navigateUrl : null,
    className: o(s.ignore, "unstyled")
  },
  e.text
)) : e.children ? /* @__PURE__ */ n.createElement("li", { className: s.dropdown }, /* @__PURE__ */ n.createElement("div", { role: "presentation", className: o(s.dropdownToggle) }, e.text, " ", /* @__PURE__ */ n.createElement(f, { icon: k })), /* @__PURE__ */ n.createElement("ul", { className: s.dropdownMenu }, e.children.map(
  (t, a) => /* @__PURE__ */ n.createElement(y, { item: t, key: a })
))) : /* @__PURE__ */ n.createElement(n.Fragment, null), b = (e) => {
  var a;
  var t = document.getElementsByClassName(o(s.dropdown, s.open));
  for (let l of t)
    l !== ((a = e.parentNode) == null ? void 0 : a.parentNode) && (l.className = s.dropdown);
}, w = (e) => {
  e.className = s.dropdown;
}, C = (e) => {
  b(e), e.className = o(s.dropdown, s.open);
}, Oe = (e) => {
  e.target.parentNode.className === s.dropdown ? (b(e.target.parentNode), C(e.target.parentNode)) : e.target.parentNode.parentNode.className === s.dropdown ? (b(e.target.parentNode), C(e.target.parentNode.parentNode)) : e.target.parentNode.className === o(s.dropdown, s.open) ? w(e.target.parentNode) : e.target.parentNode.parentNode.className === o(s.dropdown, s.open) && w(e.target.parentNode.parentNode);
}, Be = n.forwardRef((e, t) => /* @__PURE__ */ n.createElement(De, g({ innerRef: t }, e))), ze = (e) => {
  const { Portal: t, openPortal: a, isOpen: l } = T({
    closeOnOutsideClick: !0,
    closeOnEsc: !0
  });
  return /* @__PURE__ */ n.createElement("div", { className: e.className, style: e.style }, /* @__PURE__ */ n.createElement(fe, { onClickToggle: (c) => a(c) }), l && /* @__PURE__ */ n.createElement(t, null, /* @__PURE__ */ n.createElement(Be, { isMenuOpened: l })));
};
export {
  fe as Menu,
  ze as MenuBar,
  Be as MobileMenu
};
