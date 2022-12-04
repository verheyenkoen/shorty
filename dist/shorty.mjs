const de = "aria-checked", pe = "aria-description", fe = "aria-describedby", me = "aria-expanded", ge = "aria-haspopup", Ee = "aria-hidden", ve = "aria-label", be = "aria-labelledby", he = "aria-modal", ye = "aria-pressed", we = "aria-selected", Ae = "aria-valuemin", Se = "aria-valuemax", Me = "aria-valuenow", Ne = "aria-valuetext", G = "abort", Y = "beforeunload", j = "blur", J = "change", K = "contextmenu", z = "DOMContentLoaded", X = "DOMMouseScroll", Z = "error", $ = "focus", _ = "focusin", tt = "focusout", et = "gesturechange", nt = "gestureend", ot = "gesturestart", st = "keydown", ct = "keypress", rt = "keyup", it = "load", at = "click", ut = "dblclick", lt = "mousedown", dt = "mouseup", pt = "hover", ft = "mouseenter", mt = "mouseleave", gt = "mousein", Et = "mouseout", vt = "mouseover", bt = "mousemove", ht = "mousewheel", yt = "move", wt = "orientationchange", At = "pointercancel", St = "pointerdown", Mt = "pointerleave", Nt = "pointermove", Tt = "pointerup", kt = "readystatechange", Dt = "reset", Ct = "resize", Lt = "select", Ot = "selectend", It = "selectstart", zt = "scroll", xt = "submit", Vt = "touchstart", Bt = "touchmove", Ht = "touchcancel", Pt = "touchend", Ut = "unload", Te = {
  DOMContentLoaded: z,
  DOMMouseScroll: X,
  abort: G,
  beforeunload: Y,
  blur: j,
  change: J,
  click: at,
  contextmenu: K,
  dblclick: ut,
  error: Z,
  focus: $,
  focusin: _,
  focusout: tt,
  gesturechange: et,
  gestureend: nt,
  gesturestart: ot,
  hover: pt,
  keydown: st,
  keypress: ct,
  keyup: rt,
  load: it,
  mousedown: lt,
  mousemove: bt,
  mousein: gt,
  mouseout: Et,
  mouseenter: ft,
  mouseleave: mt,
  mouseover: vt,
  mouseup: dt,
  mousewheel: ht,
  move: yt,
  orientationchange: wt,
  pointercancel: At,
  pointerdown: St,
  pointerleave: Mt,
  pointermove: Nt,
  pointerup: Tt,
  readystatechange: kt,
  reset: Dt,
  resize: Ct,
  scroll: zt,
  select: Lt,
  selectend: Ot,
  selectstart: It,
  submit: xt,
  touchcancel: Ht,
  touchend: Pt,
  touchmove: Bt,
  touchstart: Vt,
  unload: Ut
}, ke = "loadstart", De = {
  start: "mousedown",
  end: "mouseup",
  move: "mousemove",
  cancel: "mouseleave"
}, Ce = { down: "mousedown", up: "mouseup" }, Le = "onmouseleave" in document ? ["mouseenter", "mouseleave"] : ["mouseover", "mouseout"], Oe = {
  start: "touchstart",
  end: "touchend",
  move: "touchmove",
  cancel: "touchcancel"
}, Ie = { in: "focusin", out: "focusout" }, ze = {
  Backspace: "Backspace",
  Tab: "Tab",
  Enter: "Enter",
  Shift: "Shift",
  Control: "Control",
  Alt: "Alt",
  Pause: "Pause",
  CapsLock: "CapsLock",
  Escape: "Escape",
  Scape: "Space",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  Insert: "Insert",
  Delete: "Delete",
  Meta: "Meta",
  ContextMenu: "ContextMenu",
  ScrollLock: "ScrollLock"
}, xe = "Alt", Ve = "ArrowDown", Be = "ArrowUp", He = "ArrowLeft", Pe = "ArrowRight", Ue = "Backspace", Fe = "CapsLock", We = "Control", Re = "Delete", Qe = "Enter", qe = "Escape", Ge = "Insert", Ye = "Meta", je = "Pause", Je = "ScrollLock", Ke = "Shift", Xe = "Space", Ze = "Tab", Ft = "animationDuration", Wt = "animationDelay", x = "animationName", k = "animationend", Rt = "transitionDuration", Qt = "transitionDelay", D = "transitionend", V = "transitionProperty", $e = "addEventListener", _e = "removeEventListener", tn = {
  linear: "linear",
  easingSinusoidalIn: "cubic-bezier(0.47,0,0.745,0.715)",
  easingSinusoidalOut: "cubic-bezier(0.39,0.575,0.565,1)",
  easingSinusoidalInOut: "cubic-bezier(0.445,0.05,0.55,0.95)",
  easingQuadraticIn: "cubic-bezier(0.550,0.085,0.680,0.530)",
  easingQuadraticOut: "cubic-bezier(0.250,0.460,0.450,0.940)",
  easingQuadraticInOut: "cubic-bezier(0.455,0.030,0.515,0.955)",
  easingCubicIn: "cubic-bezier(0.55,0.055,0.675,0.19)",
  easingCubicOut: "cubic-bezier(0.215,0.61,0.355,1)",
  easingCubicInOut: "cubic-bezier(0.645,0.045,0.355,1)",
  easingQuarticIn: "cubic-bezier(0.895,0.03,0.685,0.22)",
  easingQuarticOut: "cubic-bezier(0.165,0.84,0.44,1)",
  easingQuarticInOut: "cubic-bezier(0.77,0,0.175,1)",
  easingQuinticIn: "cubic-bezier(0.755,0.05,0.855,0.06)",
  easingQuinticOut: "cubic-bezier(0.23,1,0.32,1)",
  easingQuinticInOut: "cubic-bezier(0.86,0,0.07,1)",
  easingExponentialIn: "cubic-bezier(0.95,0.05,0.795,0.035)",
  easingExponentialOut: "cubic-bezier(0.19,1,0.22,1)",
  easingExponentialInOut: "cubic-bezier(1,0,0,1)",
  easingCircularIn: "cubic-bezier(0.6,0.04,0.98,0.335)",
  easingCircularOut: "cubic-bezier(0.075,0.82,0.165,1)",
  easingCircularInOut: "cubic-bezier(0.785,0.135,0.15,0.86)",
  easingBackIn: "cubic-bezier(0.6,-0.28,0.735,0.045)",
  easingBackOut: "cubic-bezier(0.175,0.885,0.32,1.275)",
  easingBackInOut: "cubic-bezier(0.68,-0.55,0.265,1.55)"
}, en = "offsetHeight", nn = "offsetWidth", on = "scrollHeight", sn = "scrollWidth", cn = "tabindex", rn = navigator.userAgentData, A = rn, { userAgent: an } = navigator, S = an, W = /iPhone|iPad|iPod|Android/i;
let O = !1;
A ? O = A.brands.some((t) => W.test(t.brand)) : O = W.test(S);
const un = O, R = /(iPhone|iPod|iPad)/, ln = A ? A.brands.some((t) => R.test(t.brand)) : R.test(S), dn = S ? S.includes("Firefox") : !1, { head: M } = document, pn = ["webkitPerspective", "perspective"].some((t) => t in M.style), qt = (t, e, n, o) => {
  const s = o || !1;
  t.addEventListener(e, n, s);
}, Gt = (t, e, n, o) => {
  const s = o || !1;
  t.removeEventListener(e, n, s);
}, Yt = (t, e, n, o) => {
  const s = (c) => {
    (c.target === t || c.currentTarget === t) && (n.apply(t, [c]), Gt(t, e, s, o));
  };
  qt(t, e, s, o);
}, jt = () => {
}, fn = (() => {
  let t = !1;
  try {
    const e = Object.defineProperty({}, "passive", {
      get: () => (t = !0, t)
    });
    Yt(document, z, jt, e);
  } catch {
  }
  return t;
})(), mn = ["webkitTransform", "transform"].some((t) => t in M.style), gn = "ontouchstart" in window || "msMaxTouchPoints" in navigator, En = ["webkitAnimation", "animation"].some((t) => t in M.style), vn = ["webkitTransition", "transition"].some((t) => t in M.style), Jt = (t, e) => t.getAttribute(e), bn = (t, e, n) => e.getAttributeNS(t, n), hn = (t, e) => t.hasAttribute(e), yn = (t, e, n) => e.hasAttributeNS(t, n), B = (t, e, n) => t.setAttribute(e, n), wn = (t, e, n, o) => e.setAttributeNS(t, n, o), An = (t, e) => t.removeAttribute(e), Sn = (t, e, n) => e.removeAttributeNS(t, n), Mn = (t, ...e) => {
  t.classList.add(...e);
}, Nn = (t, ...e) => {
  t.classList.remove(...e);
}, Tn = (t, e) => t.classList.contains(e), { body: kn } = document, { documentElement: Dn } = document, Cn = (t) => Array.from(t), m = (t) => t != null && typeof t == "object" || !1, a = (t) => m(t) && typeof t.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some((e) => t.nodeType === e) || !1, u = (t) => a(t) && t.nodeType === 1 || !1, w = /* @__PURE__ */ new Map(), C = {
  set: (t, e, n) => {
    if (!u(t))
      return;
    w.has(e) || w.set(e, /* @__PURE__ */ new Map()), w.get(e).set(t, n);
  },
  getAllFor: (t) => w.get(t) || null,
  get: (t, e) => {
    if (!u(t) || !e)
      return null;
    const n = C.getAllFor(e);
    return t && n && n.get(t) || null;
  },
  remove: (t, e) => {
    const n = C.getAllFor(e);
    !n || !u(t) || (n.delete(t), n.size === 0 && w.delete(e));
  }
}, Ln = (t, e) => C.get(t, e), p = (t) => typeof t == "string" || !1, H = (t) => m(t) && t.constructor.name === "Window" || !1, P = (t) => a(t) && t.nodeType === 9 || !1, d = (t) => H(t) ? t.document : P(t) ? t : a(t) ? t.ownerDocument : window.document, b = (t) => Object.entries(t), Kt = (t) => {
  if (!t)
    return;
  if (p(t))
    return d().createElement(t);
  const { tagName: e } = t, n = Kt(e);
  if (!n)
    return;
  const o = { ...t };
  return delete o.tagName, b(o).forEach(([s, c]) => {
    p(s) && p(c) && B(n, s, c);
  }), n;
}, Xt = (t, e) => {
  if (!t || !e)
    return;
  if (p(e))
    return d().createElementNS(t, e);
  const { tagName: n } = e, o = Xt(t, n);
  if (!o)
    return;
  const s = { ...e };
  return delete s.tagName, b(s).forEach(([c, i]) => {
    p(c) && p(i) && B(o, c, i);
  }), o;
}, U = (t, e) => t.dispatchEvent(e), On = (t, e, n) => n.indexOf(t) === e, f = (t, e) => {
  const n = getComputedStyle(t), o = e.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
  return n.getPropertyValue(o);
}, Zt = (t) => {
  const e = f(t, x), n = f(t, Wt), o = n.includes("ms") ? 1 : 1e3, s = e && e !== "none" ? parseFloat(n) * o : 0;
  return Number.isNaN(s) ? 0 : s;
}, $t = (t) => {
  const e = f(t, x), n = f(t, Ft), o = n.includes("ms") ? 1 : 1e3, s = e && e !== "none" ? parseFloat(n) * o : 0;
  return Number.isNaN(s) ? 0 : s;
}, In = (t, e) => {
  let n = 0;
  const o = new Event(k), s = $t(t), c = Zt(t);
  if (s) {
    const i = (l) => {
      l.target === t && (e.apply(t, [l]), t.removeEventListener(k, i), n = 1);
    };
    t.addEventListener(k, i), setTimeout(() => {
      n || U(t, o);
    }, s + c + 17);
  } else
    e.apply(t, [o]);
}, _t = (t) => {
  const e = f(t, V), n = f(t, Qt), o = n.includes("ms") ? 1 : 1e3, s = e && e !== "none" ? parseFloat(n) * o : 0;
  return Number.isNaN(s) ? 0 : s;
}, te = (t) => {
  const e = f(t, V), n = f(t, Rt), o = n.includes("ms") ? 1 : 1e3, s = e && e !== "none" ? parseFloat(n) * o : 0;
  return Number.isNaN(s) ? 0 : s;
}, zn = (t, e) => {
  let n = 0;
  const o = new Event(D), s = te(t), c = _t(t);
  if (s) {
    const i = (l) => {
      l.target === t && (e.apply(t, [l]), t.removeEventListener(D, i), n = 1);
    };
    t.addEventListener(D, i), setTimeout(() => {
      n || U(t, o);
    }, s + c + 17);
  } else
    e.apply(t, [o]);
}, xn = (t) => Float32Array.from(Array.from(t)), Vn = (t) => Float64Array.from(Array.from(t)), Bn = (t, e) => t.focus(e), Hn = (t, e) => m(t) && (Object.hasOwn(t, e) || e in t), I = (t) => ["true", !0].includes(t) ? !0 : ["false", !1].includes(t) ? !1 : ["null", "", null, void 0].includes(t) ? null : t !== "" && !Number.isNaN(+t) ? +t : t, ee = (t) => t.toLowerCase(), Pn = (t, e, n, o) => {
  const s = { ...n }, c = { ...t.dataset }, i = { ...e }, l = {}, g = "title";
  return b(c).forEach(([r, E]) => {
    const T = o && typeof r == "string" && r.includes(o) ? r.replace(o, "").replace(/[A-Z]/g, (le) => ee(le)) : r;
    l[T] = I(E);
  }), b(s).forEach(([r, E]) => {
    s[r] = I(E);
  }), b(e).forEach(([r, E]) => {
    r in s ? i[r] = s[r] : r in l ? i[r] = l[r] : i[r] = r === g ? Jt(t, g) : E;
  }), i;
}, F = (t, ...e) => Object.assign(t, ...e), Un = (t) => Object.keys(t), Fn = (t) => Object.values(t), Wn = (t, e) => {
  const n = new CustomEvent(t, {
    cancelable: !0,
    bubbles: !0
  });
  return m(e) && F(n, e), n;
}, Rn = { passive: !0 }, Qn = (t) => t.offsetHeight, qn = (t, e) => {
  b(e).forEach(([n, o]) => {
    if (o && p(n) && n.includes("--"))
      t.style.setProperty(n, o);
    else {
      const s = {};
      s[n] = o, F(t.style, s);
    }
  });
}, L = (t) => m(t) && t.constructor.name === "Map" || !1, ne = (t) => typeof t == "number" || !1, v = /* @__PURE__ */ new Map(), Gn = {
  set: (t, e, n, o) => {
    !u(t) || (o && o.length ? (v.has(t) || v.set(t, /* @__PURE__ */ new Map()), v.get(t).set(o, setTimeout(e, n))) : v.set(t, setTimeout(e, n)));
  },
  get: (t, e) => {
    if (!u(t))
      return null;
    const n = v.get(t);
    return e && n && L(n) ? n.get(e) || null : ne(n) ? n : null;
  },
  clear: (t, e) => {
    if (!u(t))
      return;
    const n = v.get(t);
    e && e.length && L(n) ? (clearTimeout(n.get(e)), n.delete(e), n.size === 0 && v.delete(t)) : (clearTimeout(n), v.delete(t));
  }
}, Yn = (t) => t.toUpperCase(), y = (t, e) => {
  const { width: n, height: o, top: s, right: c, bottom: i, left: l } = t.getBoundingClientRect();
  let g = 1, r = 1;
  if (e && u(t)) {
    const { offsetWidth: E, offsetHeight: T } = t;
    g = E > 0 ? Math.round(n) / E : 1, r = T > 0 ? Math.round(o) / T : 1;
  }
  return {
    width: n / g,
    height: o / r,
    top: s / r,
    right: c / g,
    bottom: i / r,
    left: l / g,
    x: l / g,
    y: s / r
  };
}, jn = (t) => d(t).body, N = (t) => d(t).documentElement, Jn = (t) => d(t).head, Kn = (t) => {
  const e = H(t), n = e ? t.scrollX : t.scrollLeft, o = e ? t.scrollY : t.scrollTop;
  return { x: n, y: o };
}, oe = (t) => a(t) && t.constructor.name === "ShadowRoot" || !1, Xn = (t) => t.nodeName === "HTML" ? t : u(t) && t.assignedSlot || a(t) && t.parentNode || oe(t) && t.host || N(t), se = (t) => {
  if (!u(t))
    return !1;
  const { width: e, height: n } = y(t), { offsetWidth: o, offsetHeight: s } = t;
  return Math.round(e) !== o || Math.round(n) !== s;
}, Zn = (t, e, n) => {
  const o = u(e), s = y(t, o && se(e)), c = { x: 0, y: 0 };
  if (o) {
    const i = y(e, !0);
    c.x = i.x + e.clientLeft, c.y = i.y + e.clientTop;
  }
  return {
    x: s.left + n.x - c.x,
    y: s.top + n.y - c.y,
    width: s.width,
    height: s.height
  };
};
let Q = 0, q = 0;
const h = /* @__PURE__ */ new Map(), ce = (t, e) => {
  let n = e ? Q : q;
  if (e) {
    const o = ce(t), s = h.get(o) || /* @__PURE__ */ new Map();
    h.has(o) || h.set(o, s), L(s) && !s.has(e) ? (s.set(e, n), Q += 1) : n = s.get(e);
  } else {
    const o = t.id || t;
    h.has(o) ? n = h.get(o) : (h.set(o, n), q += 1);
  }
  return n;
}, $n = (t) => {
  var e;
  return t ? P(t) ? t.defaultView : a(t) ? (e = t == null ? void 0 : t.ownerDocument) == null ? void 0 : e.defaultView : t : window;
}, re = (t) => Array.isArray(t) || !1, _n = (t) => a(t) && t.nodeName === "CANVAS" || !1, ie = (t) => u(t) && !!t.shadowRoot || !1, to = (t) => a(t) && [1, 2, 3, 4, 5, 6, 7, 8].some((e) => t.nodeType === e) || !1, eo = (t) => {
  if (!a(t))
    return !1;
  const { top: e, bottom: n } = y(t), { clientHeight: o } = N(t);
  return e <= o && n >= 0;
}, no = (t) => {
  if (!a(t))
    return !1;
  const { clientWidth: e, clientHeight: n } = N(t), { top: o, left: s, bottom: c, right: i } = y(t, !0);
  return o >= 0 && s >= 0 && c <= n && i <= e;
}, oo = (t) => re(t) && t.every(u) || !1, so = (t) => typeof t == "function" || !1, co = (t) => m(t) && t.constructor.name === "HTMLCollection" || !1, ro = (t) => u(t) && t.tagName === "IMG" || !1, io = (t) => {
  if (!p(t))
    return !1;
  try {
    JSON.parse(t);
  } catch {
    return !1;
  }
  return !0;
}, ao = (t) => m(t) && t.constructor.name === "WeakMap" || !1, uo = (t) => a(t) && ["SVG", "Image", "Video", "Canvas"].some((e) => t.constructor.name.includes(e)) || !1, lo = (t) => m(t) && t.constructor.name === "NodeList" || !1, po = (t) => N(t).dir === "rtl", fo = (t) => a(t) && t.constructor.name.includes("SVG") || !1, mo = (t) => a(t) && ["TABLE", "TD", "TH"].includes(t.nodeName) || !1, ae = (t, e) => t ? t.closest(e) || ae(t.getRootNode().host, e) : null, go = (t, e) => u(t) ? t : (a(e) ? e : d()).querySelector(t), ue = (t, e) => (a(e) ? e : d()).getElementsByTagName(t), Eo = (t) => [...ue("*", t)].filter(ie), vo = (t, e) => d(e).getElementById(t) || null, bo = (t, e) => (a(e) ? e : d()).querySelectorAll(t), ho = (t, e) => (e && a(e) ? e : d()).getElementsByClassName(
  t
), yo = (t, e) => t.matches(e), wo = {
  ariaChecked: de,
  ariaDescription: pe,
  ariaDescribedBy: fe,
  ariaExpanded: me,
  ariaHidden: Ee,
  ariaHasPopup: ge,
  ariaLabel: ve,
  ariaLabelledBy: be,
  ariaModal: he,
  ariaPressed: ye,
  ariaSelected: we,
  ariaValueMin: Ae,
  ariaValueMax: Se,
  ariaValueNow: Me,
  ariaValueText: Ne,
  nativeEvents: Te,
  abortEvent: G,
  blurEvent: j,
  moveEvent: yt,
  changeEvent: J,
  errorEvent: Z,
  resetEvent: Dt,
  resizeEvent: Ct,
  scrollEvent: zt,
  submitEvent: xt,
  loadEvent: it,
  loadstartEvent: ke,
  unloadEvent: Ut,
  readystatechangeEvent: kt,
  beforeunloadEvent: Y,
  orientationchangeEvent: wt,
  contextmenuEvent: K,
  DOMContentLoadedEvent: z,
  DOMMouseScrollEvent: X,
  selectEvent: Lt,
  selectendEvent: Ot,
  selectstartEvent: It,
  mouseClickEvents: Ce,
  mouseclickEvent: at,
  mousedblclickEvent: ut,
  mousedownEvent: lt,
  mouseupEvent: dt,
  mousehoverEvent: pt,
  mouseHoverEvents: Le,
  mouseenterEvent: ft,
  mouseleaveEvent: mt,
  mouseinEvent: gt,
  mouseoutEvent: Et,
  mouseoverEvent: vt,
  mousemoveEvent: bt,
  mousewheelEvent: ht,
  mouseSwipeEvents: De,
  touchEvents: Oe,
  touchstartEvent: Vt,
  touchmoveEvent: Bt,
  touchcancelEvent: Ht,
  touchendEvent: Pt,
  pointercancelEvent: At,
  pointerdownEvent: St,
  pointerleaveEvent: Mt,
  pointermoveEvent: Nt,
  pointerupEvent: Tt,
  focusEvents: Ie,
  focusEvent: $,
  focusinEvent: _,
  focusoutEvent: tt,
  gesturechangeEvent: et,
  gestureendEvent: nt,
  gesturestartEvent: ot,
  bezierEasings: tn,
  animationDuration: Ft,
  animationDelay: Wt,
  animationName: x,
  animationEndEvent: k,
  transitionDuration: Rt,
  transitionDelay: Qt,
  transitionEndEvent: D,
  transitionProperty: V,
  isMobile: un,
  isApple: ln,
  isFirefox: dn,
  support3DTransform: pn,
  supportPassive: fn,
  supportTransform: mn,
  supportTouch: gn,
  supportAnimation: En,
  supportTransition: vn,
  addEventListener: $e,
  removeEventListener: _e,
  keyboardEventKeys: ze,
  keydownEvent: st,
  keypressEvent: ct,
  keyupEvent: rt,
  keyAlt: xe,
  keyArrowDown: Ve,
  keyArrowLeft: He,
  keyArrowRight: Pe,
  keyArrowUp: Be,
  keyBackspace: Ue,
  keyCapsLock: Fe,
  keyControl: We,
  keyDelete: Re,
  keyEnter: Qe,
  keyEscape: qe,
  keyInsert: Ge,
  keyMeta: Ye,
  keyPause: je,
  keyScrollLock: Je,
  keyShift: Ke,
  keySpace: Xe,
  keyTab: Ze,
  offsetHeight: en,
  offsetWidth: nn,
  scrollHeight: on,
  scrollWidth: sn,
  userAgentData: A,
  userAgent: S,
  tabindex: cn,
  addClass: Mn,
  removeClass: Nn,
  hasClass: Tn,
  on: qt,
  off: Gt,
  one: Yt,
  documentBody: kn,
  documentElement: Dn,
  documentHead: M,
  dispatchEvent: U,
  distinct: On,
  Data: C,
  getInstance: Ln,
  createElement: Kt,
  createElementNS: Xt,
  createCustomEvent: Wn,
  toUpperCase: Yn,
  toLowerCase: ee,
  Timer: Gn,
  emulateAnimationEnd: In,
  emulateTransitionEnd: zn,
  isElementInScrollRange: eo,
  isElementInViewport: no,
  passiveHandler: Rn,
  getElementAnimationDuration: $t,
  getElementAnimationDelay: Zt,
  getElementTransitionDuration: te,
  getElementTransitionDelay: _t,
  getNodeScroll: Kn,
  getParentNode: Xn,
  getRectRelativeToOffsetParent: Zn,
  getWindow: $n,
  isArray: re,
  isCanvas: _n,
  isString: p,
  isCustomElement: ie,
  isElement: to,
  isJSON: io,
  isMap: L,
  isWeakMap: ao,
  isNode: a,
  isNumber: ne,
  isHTMLElement: u,
  isHTMLImageElement: ro,
  isSVGElement: fo,
  isNodeList: lo,
  isHTMLCollection: co,
  isScaledElement: se,
  isTableElement: mo,
  isShadowRoot: oe,
  isDocument: P,
  isElementsArray: oo,
  isFunction: so,
  isObject: m,
  isWindow: H,
  isMedia: uo,
  isRTL: po,
  closest: ae,
  querySelector: go,
  getCustomElements: Eo,
  getElementById: vo,
  querySelectorAll: bo,
  getElementsByClassName: ho,
  getElementsByTagName: ue,
  matches: yo,
  hasOwn: Hn,
  normalizeValue: I,
  normalizeOptions: Pn,
  reflow: Qn,
  noop: jt,
  focus: Bn,
  getUID: ce,
  ArrayFrom: Cn,
  Float32ArrayFrom: xn,
  Float64ArrayFrom: Vn,
  ObjectAssign: F,
  ObjectEntries: b,
  ObjectKeys: Un,
  ObjectValues: Fn,
  getBoundingClientRect: y,
  getDocument: d,
  getDocumentBody: jn,
  getDocumentElement: N,
  getDocumentHead: Jn,
  getElementStyle: f,
  setElementStyle: qn,
  hasAttribute: hn,
  hasAttributeNS: yn,
  getAttribute: Jt,
  getAttributeNS: bn,
  setAttribute: B,
  setAttributeNS: wn,
  removeAttribute: An,
  removeAttributeNS: Sn
};
export {
  wo as default
};
//# sourceMappingURL=shorty.mjs.map
