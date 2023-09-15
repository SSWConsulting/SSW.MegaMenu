(function(c,n){typeof exports=="object"&&typeof module!="undefined"?n(exports,require("react"),require("classnames"),require("@fortawesome/react-fontawesome"),require("@fortawesome/free-solid-svg-icons"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","classnames","@fortawesome/react-fontawesome","@fortawesome/free-solid-svg-icons","react-dom"],n):(c=typeof globalThis!="undefined"?globalThis:c||self,n(c.MegaMenu={},c.React,c.cs,c.reactFontawesome,c.freeSolidSvgIcons,c.ReactDOM))})(this,function(c,n,s,F,H,pe){"use strict";var Pe=Object.defineProperty,We=Object.defineProperties;var Te=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var Ue=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var fe=(c,n,s)=>n in c?Pe(c,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[n]=s,x=(c,n)=>{for(var s in n||(n={}))Ue.call(n,s)&&fe(c,s,n[s]);if(me)for(var s of me(n))Le.call(n,s)&&fe(c,s,n[s]);return c},J=(c,n)=>We(c,Te(n));const O={MegaMenu:"_MegaMenu_nc8do_17",menuContent:"_menuContent_nc8do_35",menuMobile:"_menuMobile_nc8do_40",visibleXs:"_visibleXs_nc8do_45",visibleSm:"_visibleSm_nc8do_46",sbToggleLeft:"_sbToggleLeft_nc8do_59",menuSearch:"_menuSearch_nc8do_80",searchBox:"_searchBox_nc8do_88"},k={menuDrop:"_menuDrop_1gqj6_1","inline-block":"_inline-block_1gqj6_28",Menu:"_Menu_1gqj6_46",hiddenXs:"_hiddenXs_1gqj6_60",hiddenSm:"_hiddenSm_1gqj6_65",ignore:"_ignore_1gqj6_69","cursor-pointer":"_cursor-pointer_1gqj6_73"},ge={MenuImg:"_MenuImg_1chf9_1"},g={Popular:"_Popular_p6zl5_1",ignore:"_ignore_p6zl5_6",ClickableMenuItem:"_ClickableMenuItem_p6zl5_11",NonClickableMenuItem:"_NonClickableMenuItem_p6zl5_16",level1:"_level1_p6zl5_22",level2:"_level2_p6zl5_49",map:"_map_p6zl5_74",featVideo:"_featVideo_p6zl5_79"},ve=({item:e,index:r})=>{const o=[g.NonClickableMenuItem,g.level1,g.level2,g.ignore,g.ClickableMenuItem],u=e.data.navigateUrlOnMobileOnly?s(g.NonClickableMenuItem,g.level1):e.data.cssClass?s(o[e.data.cssClass],g.level1):g.level1;return n.createElement(n.Fragment,null,e.level===1&&n.createElement("li",{key:r,className:u},(!e.data.navigateUrl||e.data.navigateUrlOnMobileOnly)&&n.createElement("span",{className:s(g.ignore,"unstyled")},e.data.text),e.data.navigateUrl&&!e.data.navigateUrlOnMobileOnly&&n.createElement("a",{href:e.data.navigateUrl?e.data.navigateUrl:null,className:s(g.ignore,"unstyled")},e.data.text)),e.level===2&&n.createElement("li",{key:r,className:e.data.cssClass?s(o[e.data.cssClass],g.ClickableMenuItem,g.level2):s(g.ClickableMenuItem,g.level2)},n.createElement("a",{href:e.data.navigateUrl?e.data.navigateUrl:null,className:s(g.ignore,"unstyled")},e.data.text)))},Q={colMd3:"_colMd3_qrlih_1",MenuWrapper:"_MenuWrapper_qrlih_11",level1:"_level1_qrlih_23",level2:"_level2_qrlih_44"},_e=({items:e})=>{const r=u=>{let a=u.length;return u.forEach(E=>{E.children&&(a+=E.children.length)}),a},o=u=>{let a=[];a.push([]);let E=r(u),j=0,C=0;return u.forEach(t=>{t.breakListBefore&&(C++,j=0,a.push([])),a[C].push({level:1,data:t}),t.children&&t.children.forEach(m=>{m.breakListBefore&&(j++,(m.breakListBefore||j>E/C)&&(C++,j=0,a.push([]))),a[C].push({level:2,data:m})})}),a.map((t,m)=>n.createElement("ul",{key:m,className:Q.colMd3},t.map((b,f)=>n.createElement(ve,{key:f,item:b}))))};return n.createElement("div",{className:Q.MenuWrapper},o(e))},be=({item:e,prefix:r})=>n.createElement(n.Fragment,null,e.src&&n.createElement("div",{className:ge.MenuImg},n.createElement("img",{src:e.src,alt:e.text,loading:"eager"})),n.createElement(_e,{items:e.children})),he=e=>n.createElement("div",{className:s(k.menuDrop,k.hiddenXs,k.hiddenSm)},n.createElement("ul",null,e.menuModel&&e.menuModel.menuItems.map((r,o)=>n.createElement("li",{key:o},!r.children&&n.createElement("a",{href:r.navigateUrl?r.navigateUrl:null,className:s(k.ignore,"unstyled")},r.text)," ",r.children&&n.createElement(n.Fragment,null,n.createElement("div",{role:"presentation",className:s(k.ignore,k["cursor-pointer"],k["inline-block"],"unstyled")},r.text," ",n.createElement(F.FontAwesomeIcon,{icon:H.faAngleDown})),n.createElement("div",{className:k.Menu},n.createElement(be,{item:r,prefix:e.prefix}))))))),Me={menuItems:[{text:"Services",groupImageUrlWeb:"https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-Services.png",children:[]},{text:"Products",groupImageUrlWeb:"https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-Products.png",children:[]},{text:"Training",groupImageUrlWeb:"https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-Training.png",children:[]},{text:"User Group",groupImageUrlWeb:"https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-UserGroup.png",children:[]},{text:"Rules",groupImageUrlWeb:"https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-Standards.png",children:[]},{text:"About Us",groupImageUrlWeb:"https://raw.githubusercontent.com/SSWConsulting/SSW.MegaMenu/main/lib/assets/images/Menu-Banner-AboutUs.png",children:[]},{text:"SSW TV",cssClass:"ignore no-dropdown menu-ssw-tv",navigateUrl:"http://tv.ssw.com",target:"_blank"}]},we="https://www.google.com.au/search?q=site:ssw.com.au%20";class Ee extends n.Component{menu_Search(r){window&&window.open(we+r)}handleKeyDownOnMenuSearchInput(r){r.key==="Enter"&&this.menu_Search(r.target.value)}render(){const{menuModel:r}=this.props;return n.createElement("div",{className:O.MegaMenu},n.createElement("div",{className:O.menuContent},n.createElement("div",{className:s(O.menuMobile,O.visibleXs,O.visibleSm)},n.createElement("div",{className:O.sbToggleLeft,onClick:o=>this.props.onClickToggle(o)},n.createElement(F.FontAwesomeIcon,{icon:H.faBars}))),n.createElement(he,{prefix:this.props.prefix,menuModel:r}),n.createElement("div",{className:O.menuSearch},n.createElement("input",{type:"text",className:O.searchBox,onKeyDown:o=>this.handleKeyDownOnMenuSearchInput(o)}))))}}const Z=e=>e?J(x({},e),{menuItems:e.menuItems.map(r=>J(x({},r),{src:r.groupImageUrlWeb}))}):{};class R extends n.Component{constructor(r){super(r),this.state={menuModel:Z(Me),menuLoaded:!1}}componentDidMount(){let r=this;fetch("https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json").then(o=>o.json()).then(function(o){r.setState({menuModel:Z(o),menuLoaded:!0})}).catch(function(o){console.log(o)})}render(){const{menuModel:r,menuLoaded:o}=this.state;return n.createElement(Ee,x({menuModel:r,menuLoaded:o},this.props))}}const d={sbSlidebar:"_sbSlidebar_13nfl_1",sbLeft:"_sbLeft_13nfl_26",menuDrop:"_menuDrop_13nfl_29",fa:"_fa_13nfl_73",open:"_open_13nfl_85",dropdownMenu:"_dropdownMenu_13nfl_95",navbarCollapse:"_navbarCollapse_13nfl_130",collapse:"_collapse_13nfl_144",dropdown:"_dropdown_13nfl_95",ignore:"_ignore_13nfl_157",dropdownToggle:"_dropdownToggle_13nfl_161",navbarNav:"_navbarNav_13nfl_188"},Se=e=>{const[r,o]=n.useState(null);return n.useEffect(()=>{r||fetch("https://SSWConsulting.github.io/SSW.Website.Menu.json/menu.json").then(u=>u.json()).then(u=>{o(u)}).catch(u=>{console.error(u)})},[]),n.createElement("div",{ref:e.innerRef,className:s(d.sbSlidebar,d.sbLeft,e.className),style:{left:e.isMenuOpened?"0":"-84vw"},onClick:u=>Ne(u)},n.createElement("div",{className:s(d.menuDrop,d.navbarCollapse)},n.createElement("ul",{className:d.navbarNav},r&&r.menuItems.map((u,a)=>n.createElement(ee,{item:u,key:a})))))},ee=({item:e})=>!e.children||e.navigateUrlOnMobileOnly?n.createElement("li",{className:d.dropdown},n.createElement("a",{href:e.navigateUrl?e.navigateUrl:null,className:s(d.ignore,"unstyled")},e.text)):e.children?n.createElement("li",{className:d.dropdown},n.createElement("div",{role:"presentation",className:s(d.dropdownToggle)},e.text," ",n.createElement(F.FontAwesomeIcon,{icon:H.faAngleDown})),n.createElement("ul",{className:d.dropdownMenu},e.children.map((r,o)=>n.createElement(ee,{item:r,key:o})))):n.createElement(n.Fragment,null),V=e=>{var o;var r=document.getElementsByClassName(s(d.dropdown,d.open));for(let u of r)u!==((o=e.parentNode)==null?void 0:o.parentNode)&&(u.className=d.dropdown)},ne=e=>{e.className=d.dropdown},re=e=>{V(e),e.className=s(d.dropdown,d.open)},Ne=e=>{e.target.parentNode.className===d.dropdown?(V(e.target.parentNode),re(e.target.parentNode)):e.target.parentNode.parentNode.className===d.dropdown?(V(e.target.parentNode),re(e.target.parentNode.parentNode)):e.target.parentNode.className===s(d.dropdown,d.open)?ne(e.target.parentNode):e.target.parentNode.parentNode.className===s(d.dropdown,d.open)&&ne(e.target.parentNode.parentNode)},te=n.forwardRef((e,r)=>n.createElement(Se,x({innerRef:r},e)));var I=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function Ce(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oe={},ae={};(function(e){var r=I&&I.__assign||function(){return r=Object.assign||function(_){for(var h,y=1,W=arguments.length;y<W;y++){h=arguments[y];for(var L in h)Object.prototype.hasOwnProperty.call(h,L)&&(_[L]=h[L])}return _},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o;(function(_){_.Browser="browser",_.Server="server",_.Native="native"})(o=e.Device||(e.Device={}));var u=o.Browser,a=o.Server,E=o.Native,j=!!(typeof window!="undefined"&&window.document&&window.document.createElement),C=typeof navigator!="undefined"&&navigator.product=="ReactNative",t=C?E:j?u:a,m={isBrowser:t===u,isServer:t===a,isNative:t===E,device:t,canUseWorkers:typeof Worker!="undefined",canUseEventListeners:t===u&&!!window.addEventListener,canUseViewport:t===u&&!!window.screen},b=function(){for(var _=[],h=0;h<arguments.length;h++)_[h]=arguments[h];return _.reduce(function(y,W){return r(r({},y),W)},{})},f=function(_){return Object.keys(_).map(function(h){return _[h]})},v=function(){return b((f(m),m))},U=v();e.weAreServer=function(){m.isServer=!0,U=v()},e.useSSR=function(){return U},e.default=e.useSSR})(ae),function(e){var r=I&&I.__assign||function(){return r=Object.assign||function(t){for(var m,b=1,f=arguments.length;b<f;b++){m=arguments[b];for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&(t[v]=m[v])}return t},r.apply(this,arguments)},o=I&&I.__rest||function(t,m){var b={};for(var f in t)Object.prototype.hasOwnProperty.call(t,f)&&m.indexOf(f)<0&&(b[f]=t[f]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,f=Object.getOwnPropertySymbols(t);v<f.length;v++)m.indexOf(f[v])<0&&Object.prototype.propertyIsEnumerable.call(t,f[v])&&(b[f[v]]=t[f[v]]);return b},u=I&&I.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n,E=pe,j=u(ae);e.errorMessage1="You must either add a `ref` to the element you are interacting with or pass an `event` to openPortal(e) or togglePortal(e).";function C(t){t===void 0&&(t={});var m=t.closeOnOutsideClick,b=m===void 0?!0:m,f=t.closeOnEsc,v=f===void 0?!0:f,U=t.bindTo,_=t.isOpen,h=_===void 0?!1:_,y=t.onOpen,W=t.onClose,L=t.onPortalClick,q=o(t,["closeOnOutsideClick","closeOnEsc","bindTo","isOpen","onOpen","onClose","onPortalClick"]),le=j.default(),w=le.isServer,K=le.isBrowser,se=a.useState(h),ke=se[0],Ie=se[1],T=a.useRef(ke),D=a.useCallback(function(l){T.current=l,Ie(l)},[]),S=a.useRef(),p=a.useRef(K?document.createElement("div"):null);a.useEffect(function(){K&&!p.current&&(p.current=document.createElement("div"))},[K,p]);var X=a.useMemo(function(){if(!w)return U&&E.findDOMNode(U)||document.body},[w,U]),B=function(l){if(!l)return{portal:p,targetEl:S,event:l};var i=l||{};i.persist&&i.persist(),i.portal=p,i.targetEl=S,i.event=l;var M=l.currentTarget;return!S.current&&M&&M!==document&&(S.current=i.currentTarget),i},ue=Object.entries(q).reduce(function(l,i){var M=i[0],N=i[1];return l[M]=function($){w||N(B($))},l},{}),A=a.useCallback(function(l){if(!w){var i=B(l);if(S.current==null)throw setTimeout(function(){return D(!0)},0),Error(e.errorMessage1);y&&y(i),D(!0)}},[w,p,D,S,y]),P=a.useCallback(function(l){if(!w){var i=B(l);W&&T.current&&W(i),T.current&&D(!1)}},[w,W,D]),ie=a.useCallback(function(l){return T.current?P(l):A(l)},[P,A]),G=a.useCallback(function(l){return l.key==="Escape"&&v?P(l):void 0},[v,P]),Y=a.useCallback(function(l){var i=function(M){return M.current.contains(l.target)};i(p)||l.button!==0||!T.current||i(S)||b&&P(l)},[w,P,b,p]),ce=a.useCallback(function(l){if(!(w||!(p.current instanceof HTMLElement))){var i=B(l);p.current.contains(i.target)&&L&&L(i),Y(l)}},[Y]),z=a.useRef({});a.useEffect(function(){if(!w&&!(!(X instanceof HTMLElement)||!(p.current instanceof HTMLElement))){var l={onScroll:"scroll",onWheel:"wheel"},i=p.current;return X.appendChild(p.current),Object.entries(l).forEach(function(M){var N=M[0],$=M[1];q[N]&&(z.current[N]=function(je){return q[N](B(je))},document.addEventListener($,z.current[N]))}),document.addEventListener("keydown",G),document.addEventListener("mousedown",ce),function(){Object.entries(l).forEach(function(M){var N=M[0],$=M[1];q[N]&&(document.removeEventListener($,z.current[N]),delete z.current[N])}),document.removeEventListener("keydown",G),document.removeEventListener("mousedown",ce),X.removeChild(i)}}},[w,Y,G,X,p]);var de=a.useCallback(function(l){var i=l.children;return p.current!=null?E.createPortal(i,p.current):null},[p]);return Object.assign([A,P,T.current,de,ie,S,p],r(r({isOpen:T.current,openPortal:A,ref:S,closePortal:P,togglePortal:ie,Portal:de,portalRef:p},ue),{bind:r({ref:S},ue)}))}e.default=C}(oe);const ye=Ce(oe),Oe=e=>{const{Portal:r,openPortal:o,isOpen:u}=ye({closeOnOutsideClick:!0,closeOnEsc:!0});return n.createElement("div",{className:e.className,style:e.style},n.createElement(R,{onClickToggle:a=>o(a)}),u&&n.createElement(r,null,n.createElement(te,{isMenuOpened:u})))};c.Menu=R,c.MenuBar=Oe,c.MobileMenu=te,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
