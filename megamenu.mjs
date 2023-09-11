var pe = Object.defineProperty, ge = Object.defineProperties;
var ve = Object.getOwnPropertyDescriptors;
var ne = Object.getOwnPropertySymbols;
var _e = Object.prototype.hasOwnProperty, he = Object.prototype.propertyIsEnumerable;
var te = (e, n, r) => n in e ? pe(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, x = (e, n) => {
  for (var r in n || (n = {}))
    _e.call(n, r) && te(e, r, n[r]);
  if (ne)
    for (var r of ne(n))
      he.call(n, r) && te(e, r, n[r]);
  return e;
}, F = (e, n) => ge(e, ve(n));
import t, { useEffect as be } from "react";
import f from "classnames";
import { FontAwesomeIcon as K } from "@fortawesome/react-fontawesome";
import { faAngleDown as se, faBars as Me } from "@fortawesome/free-solid-svg-icons";
import Ee from "react-dom";
const we = "_MegaMenu_nc8do_17", Se = "_menuContent_nc8do_35", Ne = "_menuMobile_nc8do_40", Ce = "_visibleXs_nc8do_45", ye = "_visibleSm_nc8do_46", Oe = "_sbToggleLeft_nc8do_59", ke = "_menuSearch_nc8do_80", je = "_searchBox_nc8do_88", k = {
  MegaMenu: we,
  menuContent: Se,
  menuMobile: Ne,
  visibleXs: Ce,
  visibleSm: ye,
  sbToggleLeft: Oe,
  menuSearch: ke,
  searchBox: je
}, Pe = "_menuDrop_1gqj6_1", Ie = "_Menu_1gqj6_46", Ue = "_hiddenXs_1gqj6_60", Le = "_hiddenSm_1gqj6_65", Te = "_ignore_1gqj6_69", j = {
  menuDrop: Pe,
  "inline-block": "_inline-block_1gqj6_28",
  Menu: Ie,
  hiddenXs: Ue,
  hiddenSm: Le,
  ignore: Te,
  "cursor-pointer": "_cursor-pointer_1gqj6_73"
}, We = "_MenuImg_1chf9_1", De = {
  MenuImg: We
}, Be = "_Popular_p6zl5_1", xe = "_ignore_p6zl5_6", Re = "_ClickableMenuItem_p6zl5_11", $e = "_NonClickableMenuItem_p6zl5_16", qe = "_level1_p6zl5_22", ze = "_level2_p6zl5_49", Xe = "_map_p6zl5_74", He = "_featVideo_p6zl5_79", g = {
  Popular: Be,
  ignore: xe,
  ClickableMenuItem: Re,
  NonClickableMenuItem: $e,
  level1: qe,
  level2: ze,
  map: Xe,
  featVideo: He
}, Ae = ({ item: e, index: n }) => {
  const r = [
    g.NonClickableMenuItem,
    g.level1,
    g.level2,
    g.ignore,
    g.ClickableMenuItem
  ], s = e.data.navigateUrlOnMobileOnly ? f(g.NonClickableMenuItem, g.level1) : e.data.cssClass ? f(r[e.data.cssClass], g.level1) : g.level1;
  return /* @__PURE__ */ t.createElement(t.Fragment, null, e.level === 1 && /* @__PURE__ */ t.createElement("li", { key: n, className: s }, (!e.data.navigateUrl || e.data.navigateUrlOnMobileOnly) && /* @__PURE__ */ t.createElement("span", { className: f(g.ignore, "unstyled") }, e.data.text), e.data.navigateUrl && !e.data.navigateUrlOnMobileOnly && /* @__PURE__ */ t.createElement(
    "a",
    {
      href: e.data.navigateUrl ? e.data.navigateUrl : null,
      className: f(g.ignore, "unstyled")
    },
    e.data.text
  )), e.level === 2 && /* @__PURE__ */ t.createElement(
    "li",
    {
      key: n,
      className: e.data.cssClass ? f(r[e.data.cssClass], g.ClickableMenuItem, g.level2) : f(g.ClickableMenuItem, g.level2)
    },
    /* @__PURE__ */ t.createElement(
      "a",
      {
        href: e.data.navigateUrl ? e.data.navigateUrl : null,
        className: f(g.ignore, "unstyled")
      },
      e.data.text
    )
  ));
}, Fe = "_colMd3_qrlih_1", Ve = "_MenuWrapper_qrlih_11", Ke = "_level1_qrlih_23", Ge = "_level2_qrlih_44", re = {
  colMd3: Fe,
  MenuWrapper: Ve,
  level1: Ke,
  level2: Ge
}, Ye = ({ items: e }) => {
  const n = (s) => {
    let o = s.length;
    return s.forEach((E) => {
      E.children && (o += E.children.length);
    }), o;
  }, r = (s) => {
    let o = [];
    o.push([]);
    let E = n(s), y = 0, N = 0;
    return s.forEach((a) => {
      a.breakListBefore && (N++, y = 0, o.push([])), o[N].push({ level: 1, data: a }), a.children && a.children.forEach((i) => {
        i.breakListBefore && (y++, (i.breakListBefore || y > E / N) && (N++, y = 0, o.push([]))), o[N].push({ level: 2, data: i });
      });
    }), o.map((a, i) => /* @__PURE__ */ t.createElement("ul", { key: i, className: re.colMd3 }, a.map((_, d) => /* @__PURE__ */ t.createElement(Ae, { key: d, item: _ }))));
  };
  return /* @__PURE__ */ t.createElement("div", { className: re.MenuWrapper }, r(e));
}, Je = ({ item: e, prefix: n }) => /* @__PURE__ */ t.createElement(t.Fragment, null, e.src && /* @__PURE__ */ t.createElement("div", { className: De.MenuImg }, /* @__PURE__ */ t.createElement(
  "img",
  {
    src: e.src,
    alt: e.text,
    loading: "eager"
  }
)), /* @__PURE__ */ t.createElement(Ye, { items: e.children })), Qe = (e) => /* @__PURE__ */ t.createElement("div", { className: f(j.menuDrop, j.hiddenXs, j.hiddenSm) }, /* @__PURE__ */ t.createElement("ul", null, e.menuModel && e.menuModel.menuItems.map((n, r) => /* @__PURE__ */ t.createElement("li", { key: r }, !n.children && /* @__PURE__ */ t.createElement(
  "a",
  {
    href: n.navigateUrl ? n.navigateUrl : null,
    className: f(j.ignore, "unstyled")
  },
  n.text
), " ", n.children && /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(
  "div",
  {
    role: "presentation",
    className: f(
      j.ignore,
      j["cursor-pointer"],
      j["inline-block"],
      "unstyled"
    )
  },
  n.text,
  " ",
  /* @__PURE__ */ t.createElement(K, { icon: se })
), /* @__PURE__ */ t.createElement("div", { className: j.Menu }, /* @__PURE__ */ t.createElement(Je, { item: n, prefix: e.prefix }))))))), Ze = [
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
], en = {
  menuItems: Ze
}, nn = "https://www.google.com.au/search?q=site:ssw.com.au%20";
class tn extends t.Component {
  menu_Search(n) {
    window && window.open(nn + n);
  }
  handleKeyDownOnMenuSearchInput(n) {
    n.key === "Enter" && this.menu_Search(n.target.value);
  }
  render() {
    const { menuModel: n } = this.props;
    return (
      // this.state.menuModel &&
      /* @__PURE__ */ t.createElement("div", { className: k.MegaMenu }, /* @__PURE__ */ t.createElement("div", { className: k.menuContent }, /* @__PURE__ */ t.createElement(
        "div",
        {
          className: f(
            k.menuMobile,
            k.visibleXs,
            k.visibleSm
          )
        },
        /* @__PURE__ */ t.createElement(
          "div",
          {
            className: k.sbToggleLeft,
            onClick: (r) => this.props.onClickToggle(r)
          },
          /* @__PURE__ */ t.createElement(K, { icon: Me })
        )
      ), /* @__PURE__ */ t.createElement(
        Qe,
        {
          prefix: this.props.prefix,
          menuModel: n
        }
      ), /* @__PURE__ */ t.createElement("div", { className: k.menuSearch }, /* @__PURE__ */ t.createElement(
        "input",
        {
          type: "text",
          className: k.searchBox,
          onKeyDown: (r) => this.handleKeyDownOnMenuSearchInput(r)
        }
      ))))
    );
  }
}
const ae = (e) => e ? F(x({}, e), {
  menuItems: e.menuItems.map((n) => F(x({}, n), {
    src: n.groupImageUrl
  }))
}) : {};
class rn extends t.Component {
  constructor(n) {
    super(n), this.state = {
      menuModel: ae(en),
      menuLoaded: !1
    };
  }
  componentDidMount() {
    let n = this;
    fetch("https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json").then((r) => r.json()).then(function(r) {
      n.setState({
        menuModel: ae(r),
        menuLoaded: !0
      });
    }).catch(function(r) {
      console.log(r);
    });
  }
  render() {
    const { menuModel: n, menuLoaded: r } = this.state;
    return /* @__PURE__ */ t.createElement(tn, x({ menuModel: n, menuLoaded: r }, this.props));
  }
}
const an = "_sbSlidebar_13nfl_1", on = "_sbLeft_13nfl_26", ln = "_menuDrop_13nfl_29", sn = "_fa_13nfl_73", cn = "_open_13nfl_85", un = "_dropdownMenu_13nfl_95", dn = "_navbarCollapse_13nfl_130", mn = "_collapse_13nfl_144", fn = "_dropdown_13nfl_95", pn = "_ignore_13nfl_157", gn = "_dropdownToggle_13nfl_161", vn = "_navbarNav_13nfl_188", u = {
  sbSlidebar: an,
  sbLeft: on,
  menuDrop: ln,
  fa: sn,
  open: cn,
  dropdownMenu: un,
  navbarCollapse: dn,
  collapse: mn,
  dropdown: fn,
  ignore: pn,
  dropdownToggle: gn,
  navbarNav: vn
}, _n = (e) => {
  const [n, r] = t.useState(null);
  return be(() => {
    n || fetch("https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json").then((s) => s.json()).then((s) => {
      r(s);
    }).catch((s) => {
      console.error(s);
    });
  }, []), /* @__PURE__ */ t.createElement(
    "div",
    {
      ref: e.innerRef,
      className: f(u.sbSlidebar, u.sbLeft, e.className),
      style: { left: e.isMenuOpened ? "0" : "-84vw" },
      onClick: (s) => hn(s)
    },
    /* @__PURE__ */ t.createElement("div", { className: f(u.menuDrop, u.navbarCollapse) }, /* @__PURE__ */ t.createElement("ul", { className: u.navbarNav }, n && n.menuItems.map(
      (s, o) => /* @__PURE__ */ t.createElement(ce, { item: s, key: o })
    )))
  );
}, ce = ({ item: e }) => !e.children || e.navigateUrlOnMobileOnly ? /* @__PURE__ */ t.createElement("li", { className: u.dropdown }, /* @__PURE__ */ t.createElement(
  "a",
  {
    href: e.navigateUrl ? e.navigateUrl : null,
    className: f(u.ignore, "unstyled")
  },
  e.text
)) : e.children ? /* @__PURE__ */ t.createElement("li", { className: u.dropdown }, /* @__PURE__ */ t.createElement("div", { role: "presentation", className: f(u.dropdownToggle) }, e.text, " ", /* @__PURE__ */ t.createElement(K, { icon: se })), /* @__PURE__ */ t.createElement("ul", { className: u.dropdownMenu }, e.children.map(
  (n, r) => /* @__PURE__ */ t.createElement(ce, { item: n, key: r })
))) : /* @__PURE__ */ t.createElement(t.Fragment, null), V = (e) => {
  var r;
  var n = document.getElementsByClassName(f(u.dropdown, u.open));
  for (let s of n)
    s !== ((r = e.parentNode) == null ? void 0 : r.parentNode) && (s.className = u.dropdown);
}, oe = (e) => {
  e.className = u.dropdown;
}, le = (e) => {
  V(e), e.className = f(u.dropdown, u.open);
}, hn = (e) => {
  e.target.parentNode.className === u.dropdown ? (V(e.target.parentNode), le(e.target.parentNode)) : e.target.parentNode.parentNode.className === u.dropdown ? (V(e.target.parentNode), le(e.target.parentNode.parentNode)) : e.target.parentNode.className === f(u.dropdown, u.open) ? oe(e.target.parentNode) : e.target.parentNode.parentNode.className === f(u.dropdown, u.open) && oe(e.target.parentNode.parentNode);
}, bn = t.forwardRef((e, n) => /* @__PURE__ */ t.createElement(_n, x({ innerRef: n }, e)));
var P = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function Mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ue = {}, ie = {};
(function(e) {
  var n = P && P.__assign || function() {
    return n = Object.assign || function(v) {
      for (var h, C = 1, I = arguments.length; C < I; C++) {
        h = arguments[C];
        for (var T in h)
          Object.prototype.hasOwnProperty.call(h, T) && (v[T] = h[T]);
      }
      return v;
    }, n.apply(this, arguments);
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r;
  (function(v) {
    v.Browser = "browser", v.Server = "server", v.Native = "native";
  })(r = e.Device || (e.Device = {}));
  var s = r.Browser, o = r.Server, E = r.Native, y = !!(typeof window != "undefined" && window.document && window.document.createElement), N = typeof navigator != "undefined" && navigator.product == "ReactNative", a = N ? E : y ? s : o, i = {
    isBrowser: a === s,
    isServer: a === o,
    isNative: a === E,
    device: a,
    canUseWorkers: typeof Worker != "undefined",
    canUseEventListeners: a === s && !!window.addEventListener,
    canUseViewport: a === s && !!window.screen
  }, _ = function() {
    for (var v = [], h = 0; h < arguments.length; h++)
      v[h] = arguments[h];
    return v.reduce(function(C, I) {
      return n(n({}, C), I);
    }, {});
  }, d = function(v) {
    return Object.keys(v).map(function(h) {
      return v[h];
    });
  }, p = function() {
    return _((d(i), i));
  }, L = p();
  e.weAreServer = function() {
    i.isServer = !0, L = p();
  }, e.useSSR = function() {
    return L;
  }, e.default = e.useSSR;
})(ie);
(function(e) {
  var n = P && P.__assign || function() {
    return n = Object.assign || function(a) {
      for (var i, _ = 1, d = arguments.length; _ < d; _++) {
        i = arguments[_];
        for (var p in i)
          Object.prototype.hasOwnProperty.call(i, p) && (a[p] = i[p]);
      }
      return a;
    }, n.apply(this, arguments);
  }, r = P && P.__rest || function(a, i) {
    var _ = {};
    for (var d in a)
      Object.prototype.hasOwnProperty.call(a, d) && i.indexOf(d) < 0 && (_[d] = a[d]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
      for (var p = 0, d = Object.getOwnPropertySymbols(a); p < d.length; p++)
        i.indexOf(d[p]) < 0 && Object.prototype.propertyIsEnumerable.call(a, d[p]) && (_[d[p]] = a[d[p]]);
    return _;
  }, s = P && P.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var o = t, E = Ee, y = s(ie);
  e.errorMessage1 = "You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).";
  function N(a) {
    a === void 0 && (a = {});
    var i = a.closeOnOutsideClick, _ = i === void 0 ? !0 : i, d = a.closeOnEsc, p = d === void 0 ? !0 : d, L = a.bindTo, v = a.isOpen, h = v === void 0 ? !1 : v, C = a.onOpen, I = a.onClose, T = a.onPortalClick, R = r(a, ["closeOnOutsideClick", "closeOnEsc", "bindTo", "isOpen", "onOpen", "onClose", "onPortalClick"]), G = y.default(), M = G.isServer, X = G.isBrowser, Y = o.useState(h), de = Y[0], me = Y[1], U = o.useRef(de), W = o.useCallback(function(l) {
      U.current = l, me(l);
    }, []), w = o.useRef(), m = o.useRef(X ? document.createElement("div") : null);
    o.useEffect(function() {
      X && !m.current && (m.current = document.createElement("div"));
    }, [X, m]);
    var $ = o.useMemo(function() {
      if (!M)
        return L && E.findDOMNode(L) || document.body;
    }, [M, L]), D = function(l) {
      if (!l)
        return { portal: m, targetEl: w, event: l };
      var c = l || {};
      c.persist && c.persist(), c.portal = m, c.targetEl = w, c.event = l;
      var b = l.currentTarget;
      return !w.current && b && b !== document && (w.current = c.currentTarget), c;
    }, J = Object.entries(R).reduce(function(l, c) {
      var b = c[0], S = c[1];
      return l[b] = function(B) {
        M || S(D(B));
      }, l;
    }, {}), q = o.useCallback(function(l) {
      if (!M) {
        var c = D(l);
        if (w.current == null)
          throw setTimeout(function() {
            return W(!0);
          }, 0), Error(e.errorMessage1);
        C && C(c), W(!0);
      }
    }, [M, m, W, w, C]), O = o.useCallback(function(l) {
      if (!M) {
        var c = D(l);
        I && U.current && I(c), U.current && W(!1);
      }
    }, [M, I, W]), Q = o.useCallback(function(l) {
      return U.current ? O(l) : q(l);
    }, [O, q]), H = o.useCallback(function(l) {
      return l.key === "Escape" && p ? O(l) : void 0;
    }, [p, O]), A = o.useCallback(function(l) {
      var c = function(b) {
        return b.current.contains(l.target);
      };
      c(m) || l.button !== 0 || !U.current || c(w) || _ && O(l);
    }, [M, O, _, m]), Z = o.useCallback(function(l) {
      if (!(M || !(m.current instanceof HTMLElement))) {
        var c = D(l);
        m.current.contains(c.target) && T && T(c), A(l);
      }
    }, [A]), z = o.useRef({});
    o.useEffect(function() {
      if (!M && !(!($ instanceof HTMLElement) || !(m.current instanceof HTMLElement))) {
        var l = {
          onScroll: "scroll",
          onWheel: "wheel"
        }, c = m.current;
        return $.appendChild(m.current), Object.entries(l).forEach(function(b) {
          var S = b[0], B = b[1];
          R[S] && (z.current[S] = function(fe) {
            return R[S](D(fe));
          }, document.addEventListener(B, z.current[S]));
        }), document.addEventListener("keydown", H), document.addEventListener("mousedown", Z), function() {
          Object.entries(l).forEach(function(b) {
            var S = b[0], B = b[1];
            R[S] && (document.removeEventListener(B, z.current[S]), delete z.current[S]);
          }), document.removeEventListener("keydown", H), document.removeEventListener("mousedown", Z), $.removeChild(c);
        };
      }
    }, [M, A, H, $, m]);
    var ee = o.useCallback(function(l) {
      var c = l.children;
      return m.current != null ? E.createPortal(c, m.current) : null;
    }, [m]);
    return Object.assign([q, O, U.current, ee, Q, w, m], n(n({
      isOpen: U.current,
      openPortal: q,
      ref: w,
      closePortal: O,
      togglePortal: Q,
      Portal: ee,
      portalRef: m
    }, J), { bind: n({ ref: w }, J) }));
  }
  e.default = N;
})(ue);
const En = /* @__PURE__ */ Mn(ue), kn = (e) => {
  const { Portal: n, openPortal: r, isOpen: s } = En({
    closeOnOutsideClick: !0,
    closeOnEsc: !0
  });
  return /* @__PURE__ */ t.createElement("div", { className: e.className, style: e.style }, /* @__PURE__ */ t.createElement(rn, { onClickToggle: (o) => r(o) }), s && /* @__PURE__ */ t.createElement(n, null, /* @__PURE__ */ t.createElement(bn, { isMenuOpened: s })));
};
export {
  rn as Menu,
  kn as MenuBar,
  bn as MobileMenu
};
