// docs/_snowpack/pkg/common/_commonjsHelpers-8c19dec8.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}

// docs/_snowpack/pkg/common/index-04edb6a1.js
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var react_production_min = createCommonjsModule(function(module, exports) {
  var n = 60103, p = 60106;
  exports.Fragment = 60107;
  exports.StrictMode = 60108;
  exports.Profiler = 60114;
  var q = 60109, r = 60110, t = 60112;
  exports.Suspense = 60113;
  var u = 60115, v = 60116;
  if (typeof Symbol === "function" && Symbol.for) {
    var w = Symbol.for;
    n = w("react.element");
    p = w("react.portal");
    exports.Fragment = w("react.fragment");
    exports.StrictMode = w("react.strict_mode");
    exports.Profiler = w("react.profiler");
    q = w("react.provider");
    r = w("react.context");
    t = w("react.forward_ref");
    exports.Suspense = w("react.suspense");
    u = w("react.memo");
    v = w("react.lazy");
  }
  var x = typeof Symbol === "function" && Symbol.iterator;
  function y2(a) {
    if (a === null || typeof a !== "object")
      return null;
    a = x && a[x] || a["@@iterator"];
    return typeof a === "function" ? a : null;
  }
  function z(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var A = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, B2 = {};
  function C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B2;
    this.updater = c || A;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function(a, b) {
    if (typeof a !== "object" && typeof a !== "function" && a != null)
      throw Error(z(85));
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  C.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function D2() {
  }
  D2.prototype = C.prototype;
  function E(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B2;
    this.updater = c || A;
  }
  var F2 = E.prototype = new D2();
  F2.constructor = E;
  objectAssign(F2, C.prototype);
  F2.isPureReactComponent = true;
  var G2 = {current: null}, H2 = Object.prototype.hasOwnProperty, I2 = {key: true, ref: true, __self: true, __source: true};
  function J(a, b, c) {
    var e, d = {}, k = null, h = null;
    if (b != null)
      for (e in b.ref !== void 0 && (h = b.ref), b.key !== void 0 && (k = "" + b.key), b)
        H2.call(b, e) && !I2.hasOwnProperty(e) && (d[e] = b[e]);
    var g = arguments.length - 2;
    if (g === 1)
      d.children = c;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++)
        f[m] = arguments[m + 2];
      d.children = f;
    }
    if (a && a.defaultProps)
      for (e in g = a.defaultProps, g)
        d[e] === void 0 && (d[e] = g[e]);
    return {$$typeof: n, type: a, key: k, ref: h, props: d, _owner: G2.current};
  }
  function K(a, b) {
    return {$$typeof: n, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner};
  }
  function L(a) {
    return typeof a === "object" && a !== null && a.$$typeof === n;
  }
  function escape(a) {
    var b = {"=": "=0", ":": "=2"};
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b[a2];
    });
  }
  var M2 = /\/+/g;
  function N2(a, b) {
    return typeof a === "object" && a !== null && a.key != null ? escape("" + a.key) : b.toString(36);
  }
  function O2(a, b, c, e, d) {
    var k = typeof a;
    if (k === "undefined" || k === "boolean")
      a = null;
    var h = false;
    if (a === null)
      h = true;
    else
      switch (k) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case n:
            case p:
              h = true;
          }
      }
    if (h)
      return h = a, d = d(h), a = e === "" ? "." + N2(h, 0) : e, Array.isArray(d) ? (c = "", a != null && (c = a.replace(M2, "$&/") + "/"), O2(d, b, c, "", function(a2) {
        return a2;
      })) : d != null && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M2, "$&/") + "/") + a)), b.push(d)), 1;
    h = 0;
    e = e === "" ? "." : e + ":";
    if (Array.isArray(a))
      for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = e + N2(k, g);
        h += O2(k, b, c, f, d);
      }
    else if (f = y2(a), typeof f === "function")
      for (a = f.call(a), g = 0; !(k = a.next()).done; )
        k = k.value, f = e + N2(k, g++), h += O2(k, b, c, f, d);
    else if (k === "object")
      throw b = "" + a, Error(z(31, b === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return h;
  }
  function P2(a, b, c) {
    if (a == null)
      return a;
    var e = [], d = 0;
    O2(a, e, "", "", function(a2) {
      return b.call(c, a2, d++);
    });
    return e;
  }
  function Q(a) {
    if (a._status === -1) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(function(b2) {
        a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
      }, function(b2) {
        a._status === 0 && (a._status = 2, a._result = b2);
      });
    }
    if (a._status === 1)
      return a._result;
    throw a._result;
  }
  var R2 = {current: null};
  function S2() {
    var a = R2.current;
    if (a === null)
      throw Error(z(321));
    return a;
  }
  var T2 = {ReactCurrentDispatcher: R2, ReactCurrentBatchConfig: {transition: 0}, ReactCurrentOwner: G2, IsSomeRendererActing: {current: false}, assign: objectAssign};
  exports.Children = {map: P2, forEach: function(a, b, c) {
    P2(a, function() {
      b.apply(this, arguments);
    }, c);
  }, count: function(a) {
    var b = 0;
    P2(a, function() {
      b++;
    });
    return b;
  }, toArray: function(a) {
    return P2(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!L(a))
      throw Error(z(143));
    return a;
  }};
  exports.Component = C;
  exports.PureComponent = E;
  exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T2;
  exports.cloneElement = function(a, b, c) {
    if (a === null || a === void 0)
      throw Error(z(267, a));
    var e = objectAssign({}, a.props), d = a.key, k = a.ref, h = a._owner;
    if (b != null) {
      b.ref !== void 0 && (k = b.ref, h = G2.current);
      b.key !== void 0 && (d = "" + b.key);
      if (a.type && a.type.defaultProps)
        var g = a.type.defaultProps;
      for (f in b)
        H2.call(b, f) && !I2.hasOwnProperty(f) && (e[f] = b[f] === void 0 && g !== void 0 ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (f === 1)
      e.children = c;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++)
        g[m] = arguments[m + 2];
      e.children = g;
    }
    return {
      $$typeof: n,
      type: a.type,
      key: d,
      ref: k,
      props: e,
      _owner: h
    };
  };
  exports.createContext = function(a, b) {
    b === void 0 && (b = null);
    a = {$$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null};
    a.Provider = {$$typeof: q, _context: a};
    return a.Consumer = a;
  };
  exports.createElement = J;
  exports.createFactory = function(a) {
    var b = J.bind(null, a);
    b.type = a;
    return b;
  };
  exports.createRef = function() {
    return {current: null};
  };
  exports.forwardRef = function(a) {
    return {$$typeof: t, render: a};
  };
  exports.isValidElement = L;
  exports.lazy = function(a) {
    return {$$typeof: v, _payload: {_status: -1, _result: a}, _init: Q};
  };
  exports.memo = function(a, b) {
    return {$$typeof: u, type: a, compare: b === void 0 ? null : b};
  };
  exports.useCallback = function(a, b) {
    return S2().useCallback(a, b);
  };
  exports.useContext = function(a, b) {
    return S2().useContext(a, b);
  };
  exports.useDebugValue = function() {
  };
  exports.useEffect = function(a, b) {
    return S2().useEffect(a, b);
  };
  exports.useImperativeHandle = function(a, b, c) {
    return S2().useImperativeHandle(a, b, c);
  };
  exports.useLayoutEffect = function(a, b) {
    return S2().useLayoutEffect(a, b);
  };
  exports.useMemo = function(a, b) {
    return S2().useMemo(a, b);
  };
  exports.useReducer = function(a, b, c) {
    return S2().useReducer(a, b, c);
  };
  exports.useRef = function(a) {
    return S2().useRef(a);
  };
  exports.useState = function(a) {
    return S2().useState(a);
  };
  exports.version = "17.0.2";
});
var react = createCommonjsModule(function(module) {
  {
    module.exports = react_production_min;
  }
});

// docs/_snowpack/pkg/react.js
var useEffect = react.useEffect;
var useRef = react.useRef;
var useState = react.useState;

// docs/_snowpack/pkg/react-dom.js
var scheduler_production_min = createCommonjsModule(function(module, exports) {
  var f, g, h, k;
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l = performance;
    exports.unstable_now = function() {
      return l.now();
    };
  } else {
    var p = Date, q = p.now();
    exports.unstable_now = function() {
      return p.now() - q;
    };
  }
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var t = null, u = null, w = function() {
      if (t !== null)
        try {
          var a = exports.unstable_now();
          t(true, a);
          t = null;
        } catch (b) {
          throw setTimeout(w, 0), b;
        }
    };
    f = function(a) {
      t !== null ? setTimeout(f, 0, a) : (t = a, setTimeout(w, 0));
    };
    g = function(a, b) {
      u = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(u);
    };
    exports.unstable_shouldYield = function() {
      return false;
    };
    k = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var x = window.setTimeout, y2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var z = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      typeof z !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var A = false, B2 = null, C = -1, D2 = 5, E = 0;
    exports.unstable_shouldYield = function() {
      return exports.unstable_now() >= E;
    };
    k = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var F2 = new MessageChannel(), G2 = F2.port2;
    F2.port1.onmessage = function() {
      if (B2 !== null) {
        var a = exports.unstable_now();
        E = a + D2;
        try {
          B2(true, a) ? G2.postMessage(null) : (A = false, B2 = null);
        } catch (b) {
          throw G2.postMessage(null), b;
        }
      } else
        A = false;
    };
    f = function(a) {
      B2 = a;
      A || (A = true, G2.postMessage(null));
    };
    g = function(a, b) {
      C = x(function() {
        a(exports.unstable_now());
      }, b);
    };
    h = function() {
      y2(C);
      C = -1;
    };
  }
  function H2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < I2(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function J(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function K(a) {
    var b = a[0];
    if (b !== void 0) {
      var c = a.pop();
      if (c !== b) {
        a[0] = c;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m = 2 * (d + 1) - 1, n = a[m], v = m + 1, r = a[v];
            if (n !== void 0 && 0 > I2(n, c))
              r !== void 0 && 0 > I2(r, n) ? (a[d] = r, a[v] = c, d = v) : (a[d] = n, a[m] = c, d = m);
            else if (r !== void 0 && 0 > I2(r, c))
              a[d] = r, a[v] = c, d = v;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function I2(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return c !== 0 ? c : a.id - b.id;
  }
  var L = [], M2 = [], N2 = 1, O2 = null, P2 = 3, Q = false, R2 = false, S2 = false;
  function T2(a) {
    for (var b = J(M2); b !== null; ) {
      if (b.callback === null)
        K(M2);
      else if (b.startTime <= a)
        K(M2), b.sortIndex = b.expirationTime, H2(L, b);
      else
        break;
      b = J(M2);
    }
  }
  function U2(a) {
    S2 = false;
    T2(a);
    if (!R2)
      if (J(L) !== null)
        R2 = true, f(V2);
      else {
        var b = J(M2);
        b !== null && g(U2, b.startTime - a);
      }
  }
  function V2(a, b) {
    R2 = false;
    S2 && (S2 = false, h());
    Q = true;
    var c = P2;
    try {
      T2(b);
      for (O2 = J(L); O2 !== null && (!(O2.expirationTime > b) || a && !exports.unstable_shouldYield()); ) {
        var d = O2.callback;
        if (typeof d === "function") {
          O2.callback = null;
          P2 = O2.priorityLevel;
          var e = d(O2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? O2.callback = e : O2 === J(L) && K(L);
          T2(b);
        } else
          K(L);
        O2 = J(L);
      }
      if (O2 !== null)
        var m = true;
      else {
        var n = J(M2);
        n !== null && g(U2, n.startTime - b);
        m = false;
      }
      return m;
    } finally {
      O2 = null, P2 = c, Q = false;
    }
  }
  var W2 = k;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    R2 || Q || (R2 = true, f(V2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return P2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return J(L);
  };
  exports.unstable_next = function(a) {
    switch (P2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = P2;
    }
    var c = P2;
    P2 = b;
    try {
      return a();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = W2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = P2;
    P2 = a;
    try {
      return b();
    } finally {
      P2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    typeof c === "object" && c !== null ? (c = c.delay, c = typeof c === "number" && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = {id: N2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1};
    c > d ? (a.sortIndex = c, H2(M2, a), J(L) === null && a === J(M2) && (S2 ? h() : S2 = true, g(U2, c - d))) : (a.sortIndex = e, H2(L, a), R2 || Q || (R2 = true, f(V2)));
    return a;
  };
  exports.unstable_wrapCallback = function(a) {
    var b = P2;
    return function() {
      var c = P2;
      P2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        P2 = c;
      }
    };
  };
});
var scheduler = createCommonjsModule(function(module) {
  {
    module.exports = scheduler_production_min;
  }
});
function y(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!react)
  throw Error(y(227));
var ba = new Set();
var ca = {};
function da(a, b) {
  ea(a, b);
  ea(a + "Capture", b);
}
function ea(a, b) {
  ca[a] = b;
  for (a = 0; a < b.length; a++)
    ba.add(b[a]);
}
var fa = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined");
var ha = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
var ia = Object.prototype.hasOwnProperty;
var ja = {};
var ka = {};
function la(a) {
  if (ia.call(ka, a))
    return true;
  if (ia.call(ja, a))
    return false;
  if (ha.test(a))
    return ka[a] = true;
  ja[a] = true;
  return false;
}
function ma(a, b, c, d) {
  if (c !== null && c.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c !== null)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function na(a, b, c, d) {
  if (b === null || typeof b === "undefined" || ma(a, b, c, d))
    return true;
  if (d)
    return false;
  if (c !== null)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function B(a, b, c, d, e, f, g) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
  this.removeEmptyString = g;
}
var D = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  D[a] = new B(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  D[b] = new B(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  D[a] = new B(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  D[a] = new B(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  D[a] = new B(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  D[a] = new B(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  D[a] = new B(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  D[a] = new B(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  D[a] = new B(a, 5, false, a.toLowerCase(), null, false, false);
});
var oa = /[\-:]([a-z])/g;
function pa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(oa, pa);
  D[b] = new B(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, false, false);
});
D.xlinkHref = new B("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  D[a] = new B(a, 1, false, a.toLowerCase(), null, true, true);
});
function qa(a, b, c, d) {
  var e = D.hasOwnProperty(b) ? D[b] : null;
  var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f || (na(b, c, e, d) && (c = null), d || e === null ? la(b) && (c === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = c === null ? e.type === 3 ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, c === null ? a.removeAttribute(b) : (e = e.type, c = e === 3 || e === 4 && c === true ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}
var ra = react.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
var sa = 60103;
var ta = 60106;
var ua = 60107;
var wa = 60108;
var xa = 60114;
var ya = 60109;
var za = 60110;
var Aa = 60112;
var Ba = 60113;
var Ca = 60120;
var Da = 60115;
var Ea = 60116;
var Fa = 60121;
var Ga = 60128;
var Ha = 60129;
var Ia = 60130;
var Ja = 60131;
if (typeof Symbol === "function" && Symbol.for) {
  E = Symbol.for;
  sa = E("react.element");
  ta = E("react.portal");
  ua = E("react.fragment");
  wa = E("react.strict_mode");
  xa = E("react.profiler");
  ya = E("react.provider");
  za = E("react.context");
  Aa = E("react.forward_ref");
  Ba = E("react.suspense");
  Ca = E("react.suspense_list");
  Da = E("react.memo");
  Ea = E("react.lazy");
  Fa = E("react.block");
  E("react.scope");
  Ga = E("react.opaque.id");
  Ha = E("react.debug_trace_mode");
  Ia = E("react.offscreen");
  Ja = E("react.legacy_hidden");
}
var E;
var Ka = typeof Symbol === "function" && Symbol.iterator;
function La(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = Ka && a[Ka] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
var Ma;
function Na(a) {
  if (Ma === void 0)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      Ma = b && b[1] || "";
    }
  return "\n" + Ma + a;
}
var Oa = false;
function Pa(a, b) {
  if (!a || Oa)
    return "";
  Oa = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", {set: function() {
        throw Error();
      }}), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (k) {
          var d = k;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (k) {
          d = k;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (k) {
        d = k;
      }
      a();
    }
  } catch (k) {
    if (k && d && typeof k.stack === "string") {
      for (var e = k.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f[h]) {
          if (g !== 1 || h !== 1) {
            do
              if (g--, h--, 0 > h || e[g] !== f[h])
                return "\n" + e[g].replace(" at new ", " at ");
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Oa = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Na(a) : "";
}
function Qa(a) {
  switch (a.tag) {
    case 5:
      return Na(a.type);
    case 16:
      return Na("Lazy");
    case 13:
      return Na("Suspense");
    case 19:
      return Na("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Pa(a.type, false), a;
    case 11:
      return a = Pa(a.type.render, false), a;
    case 22:
      return a = Pa(a.type._render, false), a;
    case 1:
      return a = Pa(a.type, true), a;
    default:
      return "";
  }
}
function Ra(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ua:
      return "Fragment";
    case ta:
      return "Portal";
    case xa:
      return "Profiler";
    case wa:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ca:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case za:
        return (a.displayName || "Context") + ".Consumer";
      case ya:
        return (a._context.displayName || "Context") + ".Provider";
      case Aa:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case Da:
        return Ra(a.type);
      case Fa:
        return Ra(a._render);
      case Ea:
        b = a._payload;
        a = a._init;
        try {
          return Ra(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c !== "undefined" && typeof c.get === "function" && typeof c.set === "function") {
    var e = c.get, f = c.set;
    Object.defineProperty(a, b, {configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    }});
    Object.defineProperty(a, b, {enumerable: c.enumerable});
    return {getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    }};
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return objectAssign({}, b, {defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c != null ? c : a._wrapperState.initialChecked});
}
function Za(a, b) {
  var c = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c = Sa(b.value != null ? b.value : c);
  a._wrapperState = {initialChecked: d, initialValue: c, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null};
}
function $a(a, b) {
  b = b.checked;
  b != null && qa(a, "checked", b, false);
}
function ab(a, b) {
  $a(a, b);
  var c = Sa(b.value), d = b.type;
  if (c != null)
    if (d === "number") {
      if (c === 0 && a.value === "" || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? bb(a, b.type, c) : b.hasOwnProperty("defaultValue") && bb(a, b.type, Sa(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function cb(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  c !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c !== "" && (a.name = c);
}
function bb(a, b, c) {
  if (b !== "number" || Xa(a.ownerDocument) !== a)
    c == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
function db(a) {
  var b = "";
  react.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function eb(a, b) {
  a = objectAssign({children: void 0}, b);
  if (b = db(b.children))
    a.children = b;
  return a;
}
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function gb(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return objectAssign({}, b, {value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue});
}
function hb(a, b) {
  var c = b.value;
  if (c == null) {
    c = b.children;
    b = b.defaultValue;
    if (c != null) {
      if (b != null)
        throw Error(y(92));
      if (Array.isArray(c)) {
        if (!(1 >= c.length))
          throw Error(y(93));
        c = c[0];
      }
      b = c;
    }
    b == null && (b = "");
    c = b;
  }
  a._wrapperState = {initialValue: Sa(c)};
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  c != null && (c = "" + c, c !== a.value && (a.value = c), b.defaultValue == null && a.defaultValue !== c && (a.defaultValue = c));
  d != null && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var kb = {html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg"};
function lb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function mb(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? lb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var nb;
var ob = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== kb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    nb = nb || document.createElement("div");
    nb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = nb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function pb(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && c.nodeType === 3) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var qb = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var rb = ["Webkit", "ms", "Moz", "O"];
Object.keys(qb).forEach(function(a) {
  rb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    qb[b] = qb[a];
  });
});
function sb(a, b, c) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c || typeof b !== "number" || b === 0 || qb.hasOwnProperty(a) && qb[a] ? ("" + b).trim() : b + "px";
}
function tb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = c.indexOf("--") === 0, e = sb(c, b[c], d);
      c === "float" && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var ub = objectAssign({menuitem: true}, {area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true});
function vb(a, b) {
  if (b) {
    if (ub[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(y(137, a));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(y(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(y(62));
  }
}
function wb(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
var yb = null;
var zb = null;
var Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if (typeof yb !== "function")
      throw Error(y(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb(a, b, c, d, e) {
  return a(b, c, d, e);
}
function Ib() {
}
var Jb = Gb;
var Kb = false;
var Lb = false;
function Mb() {
  if (zb !== null || Ab !== null)
    Ib(), Fb();
}
function Nb(a, b, c) {
  if (Lb)
    return a(b, c);
  Lb = true;
  try {
    return Jb(a, b, c);
  } finally {
    Lb = false, Mb();
  }
}
function Ob(a, b) {
  var c = a.stateNode;
  if (c === null)
    return null;
  var d = Db(c);
  if (d === null)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && typeof c !== "function")
    throw Error(y(231, b, typeof c));
  return c;
}
var Pb = false;
if (fa)
  try {
    Qb = {};
    Object.defineProperty(Qb, "passive", {get: function() {
      Pb = true;
    }});
    window.addEventListener("test", Qb, Qb);
    window.removeEventListener("test", Qb, Qb);
  } catch (a) {
    Pb = false;
  }
var Qb;
function Rb(a, b, c, d, e, f, g, h, k) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l);
  } catch (n) {
    this.onError(n);
  }
}
var Sb = false;
var Tb = null;
var Ub = false;
var Vb = null;
var Wb = {onError: function(a) {
  Sb = true;
  Tb = a;
}};
function Xb(a, b, c, d, e, f, g, h, k) {
  Sb = false;
  Tb = null;
  Rb.apply(Wb, arguments);
}
function Yb(a, b, c, d, e, f, g, h, k) {
  Xb.apply(this, arguments);
  if (Sb) {
    if (Sb) {
      var l = Tb;
      Sb = false;
      Tb = null;
    } else
      throw Error(y(198));
    Ub || (Ub = true, Vb = l);
  }
}
function Zb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.flags & 1026) !== 0 && (c = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c : null;
}
function $b(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function ac(a) {
  if (Zb(a) !== a)
    throw Error(y(188));
}
function bc(a) {
  var b = a.alternate;
  if (!b) {
    b = Zb(a);
    if (b === null)
      throw Error(y(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (e === null)
      break;
    var f = e.alternate;
    if (f === null) {
      d = e.return;
      if (d !== null) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c)
          return ac(e), a;
        if (f === d)
          return ac(e), b;
        f = f.sibling;
      }
      throw Error(y(188));
    }
    if (c.return !== d.return)
      c = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c) {
            g = true;
            c = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(y(189));
      }
    }
    if (c.alternate !== d)
      throw Error(y(190));
  }
  if (c.tag !== 3)
    throw Error(y(188));
  return c.stateNode.current === c ? a : b;
}
function cc(a) {
  a = bc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function dc(a, b) {
  for (var c = a.alternate; b !== null; ) {
    if (b === a || b === c)
      return true;
    b = b.return;
  }
  return false;
}
var ec;
var fc;
var gc;
var hc;
var ic = false;
var jc = [];
var kc = null;
var lc = null;
var mc = null;
var nc = new Map();
var oc = new Map();
var pc = [];
var qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a, b, c, d, e) {
  return {blockedOn: a, domEventName: b, eventSystemFlags: c | 16, nativeEvent: e, targetContainers: [d]};
}
function sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      kc = null;
      break;
    case "dragenter":
    case "dragleave":
      lc = null;
      break;
    case "mouseover":
    case "mouseout":
      mc = null;
      break;
    case "pointerover":
    case "pointerout":
      nc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      oc.delete(b.pointerId);
  }
}
function tc(a, b, c, d, e, f) {
  if (a === null || a.nativeEvent !== f)
    return a = rc(b, c, d, e, f), b !== null && (b = Cb(b), b !== null && fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  e !== null && b.indexOf(e) === -1 && b.push(e);
  return a;
}
function uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return kc = tc(kc, a, b, c, d, e), true;
    case "dragenter":
      return lc = tc(lc, a, b, c, d, e), true;
    case "mouseover":
      return mc = tc(mc, a, b, c, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), true;
  }
  return false;
}
function vc(a) {
  var b = wc(a.target);
  if (b !== null) {
    var c = Zb(b);
    if (c !== null) {
      if (b = c.tag, b === 13) {
        if (b = $b(c), b !== null) {
          a.blockedOn = b;
          hc(a.lanePriority, function() {
            scheduler.unstable_runWithPriority(a.priority, function() {
              gc(c);
            });
          });
          return;
        }
      } else if (b === 3 && c.stateNode.hydrate) {
        a.blockedOn = c.tag === 3 ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function xc(a) {
  if (a.blockedOn !== null)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (c !== null)
      return b = Cb(c), b !== null && fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function zc(a, b, c) {
  xc(a) && c.delete(b);
}
function Ac() {
  for (ic = false; 0 < jc.length; ) {
    var a = jc[0];
    if (a.blockedOn !== null) {
      a = Cb(a.blockedOn);
      a !== null && ec(a);
      break;
    }
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (c !== null) {
        a.blockedOn = c;
        break;
      }
      b.shift();
    }
    a.blockedOn === null && jc.shift();
  }
  kc !== null && xc(kc) && (kc = null);
  lc !== null && xc(lc) && (lc = null);
  mc !== null && xc(mc) && (mc = null);
  nc.forEach(zc);
  oc.forEach(zc);
}
function Bc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, ic || (ic = true, scheduler.unstable_scheduleCallback(scheduler.unstable_NormalPriority, Ac)));
}
function Cc(a) {
  function b(b2) {
    return Bc(b2, a);
  }
  if (0 < jc.length) {
    Bc(jc[0], a);
    for (var c = 1; c < jc.length; c++) {
      var d = jc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  kc !== null && Bc(kc, a);
  lc !== null && Bc(lc, a);
  mc !== null && Bc(mc, a);
  nc.forEach(b);
  oc.forEach(b);
  for (c = 0; c < pc.length; c++)
    d = pc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < pc.length && (c = pc[0], c.blockedOn === null); )
    vc(c), c.blockedOn === null && pc.shift();
}
function Dc(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var Ec = {animationend: Dc("Animation", "AnimationEnd"), animationiteration: Dc("Animation", "AnimationIteration"), animationstart: Dc("Animation", "AnimationStart"), transitionend: Dc("Transition", "TransitionEnd")};
var Fc = {};
var Gc = {};
fa && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete Ec.animationend.animation, delete Ec.animationiteration.animation, delete Ec.animationstart.animation), "TransitionEvent" in window || delete Ec.transitionend.transition);
function Hc(a) {
  if (Fc[a])
    return Fc[a];
  if (!Ec[a])
    return a;
  var b = Ec[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Gc)
      return Fc[a] = b[c];
  return a;
}
var Ic = Hc("animationend");
var Jc = Hc("animationiteration");
var Kc = Hc("animationstart");
var Lc = Hc("transitionend");
var Mc = new Map();
var Nc = new Map();
var Oc = [
  "abort",
  "abort",
  Ic,
  "animationEnd",
  Jc,
  "animationIteration",
  Kc,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Lc,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Pc(a, b) {
  for (var c = 0; c < a.length; c += 2) {
    var d = a[c], e = a[c + 1];
    e = "on" + (e[0].toUpperCase() + e.slice(1));
    Nc.set(d, b);
    Mc.set(d, e);
    da(e, [d]);
  }
}
var Qc = scheduler.unstable_now;
Qc();
var F = 8;
function Rc(a) {
  if ((1 & a) !== 0)
    return F = 15, 1;
  if ((2 & a) !== 0)
    return F = 14, 2;
  if ((4 & a) !== 0)
    return F = 13, 4;
  var b = 24 & a;
  if (b !== 0)
    return F = 12, b;
  if ((a & 32) !== 0)
    return F = 11, 32;
  b = 192 & a;
  if (b !== 0)
    return F = 10, b;
  if ((a & 256) !== 0)
    return F = 9, 256;
  b = 3584 & a;
  if (b !== 0)
    return F = 8, b;
  if ((a & 4096) !== 0)
    return F = 7, 4096;
  b = 4186112 & a;
  if (b !== 0)
    return F = 6, b;
  b = 62914560 & a;
  if (b !== 0)
    return F = 5, b;
  if (a & 67108864)
    return F = 4, 67108864;
  if ((a & 134217728) !== 0)
    return F = 3, 134217728;
  b = 805306368 & a;
  if (b !== 0)
    return F = 2, b;
  if ((1073741824 & a) !== 0)
    return F = 1, 1073741824;
  F = 8;
  return a;
}
function Sc(a) {
  switch (a) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function Tc(a) {
  switch (a) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, a));
  }
}
function Uc(a, b) {
  var c = a.pendingLanes;
  if (c === 0)
    return F = 0;
  var d = 0, e = 0, f = a.expiredLanes, g = a.suspendedLanes, h = a.pingedLanes;
  if (f !== 0)
    d = f, e = F = 15;
  else if (f = c & 134217727, f !== 0) {
    var k = f & ~g;
    k !== 0 ? (d = Rc(k), e = F) : (h &= f, h !== 0 && (d = Rc(h), e = F));
  } else
    f = c & ~g, f !== 0 ? (d = Rc(f), e = F) : h !== 0 && (d = Rc(h), e = F);
  if (d === 0)
    return 0;
  d = 31 - Vc(d);
  d = c & ((0 > d ? 0 : 1 << d) << 1) - 1;
  if (b !== 0 && b !== d && (b & g) === 0) {
    Rc(b);
    if (e <= F)
      return b;
    F = e;
  }
  b = a.entangledLanes;
  if (b !== 0)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - Vc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function Wc(a) {
  a = a.pendingLanes & -1073741825;
  return a !== 0 ? a : a & 1073741824 ? 1073741824 : 0;
}
function Xc(a, b) {
  switch (a) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return a = Yc(24 & ~b), a === 0 ? Xc(10, b) : a;
    case 10:
      return a = Yc(192 & ~b), a === 0 ? Xc(8, b) : a;
    case 8:
      return a = Yc(3584 & ~b), a === 0 && (a = Yc(4186112 & ~b), a === 0 && (a = 512)), a;
    case 2:
      return b = Yc(805306368 & ~b), b === 0 && (b = 268435456), b;
  }
  throw Error(y(358, a));
}
function Yc(a) {
  return a & -a;
}
function Zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function $c(a, b, c) {
  a.pendingLanes |= b;
  var d = b - 1;
  a.suspendedLanes &= d;
  a.pingedLanes &= d;
  a = a.eventTimes;
  b = 31 - Vc(b);
  a[b] = c;
}
var Vc = Math.clz32 ? Math.clz32 : ad;
var bd = Math.log;
var cd = Math.LN2;
function ad(a) {
  return a === 0 ? 32 : 31 - (bd(a) / cd | 0) | 0;
}
var dd = scheduler.unstable_UserBlockingPriority;
var ed = scheduler.unstable_runWithPriority;
var fd = true;
function gd(a, b, c, d) {
  Kb || Ib();
  var e = hd, f = Kb;
  Kb = true;
  try {
    Hb(e, a, b, c, d);
  } finally {
    (Kb = f) || Mb();
  }
}
function id(a, b, c, d) {
  ed(dd, hd.bind(null, a, b, c, d));
}
function hd(a, b, c, d) {
  if (fd) {
    var e;
    if ((e = (b & 4) === 0) && 0 < jc.length && -1 < qc.indexOf(a))
      a = rc(null, a, b, c, d), jc.push(a);
    else {
      var f = yc(a, b, c, d);
      if (f === null)
        e && sc(a, d);
      else {
        if (e) {
          if (-1 < qc.indexOf(a)) {
            a = rc(f, a, b, c, d);
            jc.push(a);
            return;
          }
          if (uc(f, a, b, c, d))
            return;
          sc(a, d);
        }
        jd(a, b, d, null, c);
      }
    }
  }
}
function yc(a, b, c, d) {
  var e = xb(d);
  e = wc(e);
  if (e !== null) {
    var f = Zb(e);
    if (f === null)
      e = null;
    else {
      var g = f.tag;
      if (g === 13) {
        e = $b(f);
        if (e !== null)
          return e;
        e = null;
      } else if (g === 3) {
        if (f.stateNode.hydrate)
          return f.tag === 3 ? f.stateNode.containerInfo : null;
        e = null;
      } else
        f !== e && (e = null);
    }
  }
  jd(a, b, d, e, c);
  return null;
}
var kd = null;
var ld = null;
var md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f) : f[c]);
    this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === false) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  objectAssign(b.prototype, {preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : typeof a2.returnValue !== "unknown" && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : typeof a2.cancelBubble !== "unknown" && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd});
  return b;
}
var sd = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0};
var td = rd(sd);
var ud = objectAssign({}, sd, {view: 0, detail: 0});
var vd = rd(ud);
var wd;
var xd;
var yd;
var Ad = objectAssign({}, ud, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return a.relatedTarget === void 0 ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && a.type === "mousemove" ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
}});
var Bd = rd(Ad);
var Cd = objectAssign({}, Ad, {dataTransfer: 0});
var Dd = rd(Cd);
var Ed = objectAssign({}, ud, {relatedTarget: 0});
var Fd = rd(Ed);
var Gd = objectAssign({}, sd, {animationName: 0, elapsedTime: 0, pseudoElement: 0});
var Hd = rd(Gd);
var Id = objectAssign({}, sd, {clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
}});
var Jd = rd(Id);
var Kd = objectAssign({}, sd, {data: 0});
var Ld = rd(Kd);
var Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
};
var Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
};
var Od = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = objectAssign({}, ud, {key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = od(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return a.type === "keypress" ? od(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? od(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}});
var Rd = rd(Qd);
var Sd = objectAssign({}, Ad, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0});
var Td = rd(Sd);
var Ud = objectAssign({}, ud, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd});
var Vd = rd(Ud);
var Wd = objectAssign({}, sd, {propertyName: 0, elapsedTime: 0, pseudoElement: 0});
var Xd = rd(Wd);
var Yd = objectAssign({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
});
var Zd = rd(Yd);
var $d = [9, 13, 27, 32];
var ae = fa && "CompositionEvent" in window;
var be = null;
fa && "documentMode" in document && (be = document.documentMode);
var ce = fa && "TextEvent" in window && !be;
var de = fa && (!ae || be && 8 < be && 11 >= be);
var ee = String.fromCharCode(32);
var fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return $d.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return a === "compositionend" || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var le = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!le[a.type] : b === "textarea" ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({event: c, listeners: b}));
}
var pe = null;
var qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if (a === "change")
    return b;
}
var we = false;
if (fa) {
  if (fa) {
    ye = "oninput" in document;
    if (!ye) {
      ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = typeof ze.oninput === "function";
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
var xe;
var ye;
var ze;
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if (a.propertyName === "value" && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    a = re;
    if (Kb)
      a(b);
    else {
      Kb = true;
      try {
        Gb(a, b);
      } finally {
        Kb = false, Mb();
      }
    }
  }
}
function Ce(a, b, c) {
  a === "focusin" ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : a === "focusout" && Ae();
}
function De(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return te(qe);
}
function Ee(a, b) {
  if (a === "click")
    return te(b);
}
function Fe(a, b) {
  if (a === "input" || a === "change")
    return te(b);
}
function Ge(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = typeof Object.is === "function" ? Object.is : Ge;
var Ie = Object.prototype.hasOwnProperty;
function Je(a, b) {
  if (He(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++)
    if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]]))
      return false;
  return true;
}
function Ke(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Le(a, b) {
  var c = Ke(a);
  a = 0;
  for (var d; c; ) {
    if (c.nodeType === 3) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return {node: c, offset: b - a};
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Ke(c);
  }
}
function Me(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? Me(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Ne() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Oe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var Pe = fa && "documentMode" in document && 11 >= document.documentMode;
var Qe = null;
var Re = null;
var Se = null;
var Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : c.nodeType === 9 ? c : c.ownerDocument;
  Te || Qe == null || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Oe(d) ? d = {start: d.selectionStart, end: d.selectionEnd} : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = {anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset}), Se && Je(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({event: b, listeners: d}), b.target = Qe)));
}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Pc(Oc, 2);
for (var Ve = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), We = 0; We < Ve.length; We++)
  Nc.set(Ve[We], 0);
ea("onMouseEnter", ["mouseout", "mouseover"]);
ea("onMouseLeave", ["mouseout", "mouseover"]);
ea("onPointerEnter", ["pointerout", "pointerover"]);
ea("onPointerLeave", ["pointerout", "pointerover"]);
da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
da("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
var Ye = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Yb(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = (b & 4) !== 0;
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k = h.instance, l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f = k;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k = h.instance;
          l = h.currentTarget;
          h = h.listener;
          if (k !== f && e.isPropagationStopped())
            break a;
          Ze(e, h, l);
          f = k;
        }
    }
  }
  if (Ub)
    throw a = Vb, Ub = false, Vb = null, a;
}
function G(a, b) {
  var c = $e(b), d = a + "__bubble";
  c.has(d) || (af(b, a, 2, false), c.add(d));
}
var bf = "_reactListening" + Math.random().toString(36).slice(2);
function cf(a) {
  a[bf] || (a[bf] = true, ba.forEach(function(b) {
    Ye.has(b) || df(b, false, a, null);
    df(b, true, a, null);
  }));
}
function df(a, b, c, d) {
  var e = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, f = c;
  a === "selectionchange" && c.nodeType !== 9 && (f = c.ownerDocument);
  if (d !== null && !b && Ye.has(a)) {
    if (a !== "scroll")
      return;
    e |= 2;
    f = d;
  }
  var g = $e(f), h = a + "__" + (b ? "capture" : "bubble");
  g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
}
function af(a, b, c, d) {
  var e = Nc.get(b);
  switch (e === void 0 ? 2 : e) {
    case 0:
      e = gd;
      break;
    case 1:
      e = id;
      break;
    default:
      e = hd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Pb || b !== "touchstart" && b !== "touchmove" && b !== "wheel" || (e = true);
  d ? e !== void 0 ? a.addEventListener(b, c, {capture: true, passive: e}) : a.addEventListener(b, c, true) : e !== void 0 ? a.addEventListener(b, c, {passive: e}) : a.addEventListener(b, c, false);
}
function jd(a, b, c, d, e) {
  var f = d;
  if ((b & 1) === 0 && (b & 2) === 0 && d !== null)
    a:
      for (; ; ) {
        if (d === null)
          return;
        var g = d.tag;
        if (g === 3 || g === 4) {
          var h = d.stateNode.containerInfo;
          if (h === e || h.nodeType === 8 && h.parentNode === e)
            break;
          if (g === 4)
            for (g = d.return; g !== null; ) {
              var k = g.tag;
              if (k === 3 || k === 4) {
                if (k = g.stateNode.containerInfo, k === e || k.nodeType === 8 && k.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; h !== null; ) {
            g = wc(h);
            if (g === null)
              return;
            k = g.tag;
            if (k === 5 || k === 6) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Nb(function() {
    var d2 = f, e2 = xb(c), g2 = [];
    a: {
      var h2 = Mc.get(a);
      if (h2 !== void 0) {
        var k2 = td, x = a;
        switch (a) {
          case "keypress":
            if (od(c) === 0)
              break a;
          case "keydown":
          case "keyup":
            k2 = Rd;
            break;
          case "focusin":
            x = "focus";
            k2 = Fd;
            break;
          case "focusout":
            x = "blur";
            k2 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k2 = Fd;
            break;
          case "click":
            if (c.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k2 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k2 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k2 = Vd;
            break;
          case Ic:
          case Jc:
          case Kc:
            k2 = Hd;
            break;
          case Lc:
            k2 = Xd;
            break;
          case "scroll":
            k2 = vd;
            break;
          case "wheel":
            k2 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k2 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k2 = Td;
        }
        var w = (b & 4) !== 0, z = !w && a === "scroll", u = w ? h2 !== null ? h2 + "Capture" : null : h2;
        w = [];
        for (var t = d2, q; t !== null; ) {
          q = t;
          var v = q.stateNode;
          q.tag === 5 && v !== null && (q = v, u !== null && (v = Ob(t, u), v != null && w.push(ef(t, v, q))));
          if (z)
            break;
          t = t.return;
        }
        0 < w.length && (h2 = new k2(h2, x, null, c, e2), g2.push({event: h2, listeners: w}));
      }
    }
    if ((b & 7) === 0) {
      a: {
        h2 = a === "mouseover" || a === "pointerover";
        k2 = a === "mouseout" || a === "pointerout";
        if (h2 && (b & 16) === 0 && (x = c.relatedTarget || c.fromElement) && (wc(x) || x[ff]))
          break a;
        if (k2 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k2) {
            if (x = c.relatedTarget || c.toElement, k2 = d2, x = x ? wc(x) : null, x !== null && (z = Zb(x), x !== z || x.tag !== 5 && x.tag !== 6))
              x = null;
          } else
            k2 = null, x = d2;
          if (k2 !== x) {
            w = Bd;
            v = "onMouseLeave";
            u = "onMouseEnter";
            t = "mouse";
            if (a === "pointerout" || a === "pointerover")
              w = Td, v = "onPointerLeave", u = "onPointerEnter", t = "pointer";
            z = k2 == null ? h2 : ue(k2);
            q = x == null ? h2 : ue(x);
            h2 = new w(v, t + "leave", k2, c, e2);
            h2.target = z;
            h2.relatedTarget = q;
            v = null;
            wc(e2) === d2 && (w = new w(u, t + "enter", x, c, e2), w.target = q, w.relatedTarget = z, v = w);
            z = v;
            if (k2 && x)
              b: {
                w = k2;
                u = x;
                t = 0;
                for (q = w; q; q = gf(q))
                  t++;
                q = 0;
                for (v = u; v; v = gf(v))
                  q++;
                for (; 0 < t - q; )
                  w = gf(w), t--;
                for (; 0 < q - t; )
                  u = gf(u), q--;
                for (; t--; ) {
                  if (w === u || u !== null && w === u.alternate)
                    break b;
                  w = gf(w);
                  u = gf(u);
                }
                w = null;
              }
            else
              w = null;
            k2 !== null && hf(g2, h2, k2, w, false);
            x !== null && z !== null && hf(g2, z, x, w, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k2 = h2.nodeName && h2.nodeName.toLowerCase();
        if (k2 === "select" || k2 === "input" && h2.type === "file")
          var J = ve;
        else if (me(h2))
          if (we)
            J = Fe;
          else {
            J = De;
            var K = Ce;
          }
        else
          (k2 = h2.nodeName) && k2.toLowerCase() === "input" && (h2.type === "checkbox" || h2.type === "radio") && (J = Ee);
        if (J && (J = J(a, d2))) {
          ne(g2, J, c, e2);
          break a;
        }
        K && K(a, h2, d2);
        a === "focusout" && (K = h2._wrapperState) && K.controlled && h2.type === "number" && bb(h2, "number", h2.value);
      }
      K = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(K) || K.contentEditable === "true")
            Qe = K, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var Q;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var L = "onCompositionStart";
              break b;
            case "compositionend":
              L = "onCompositionEnd";
              break b;
            case "compositionupdate":
              L = "onCompositionUpdate";
              break b;
          }
          L = void 0;
        }
      else
        ie ? ge(a, c) && (L = "onCompositionEnd") : a === "keydown" && c.keyCode === 229 && (L = "onCompositionStart");
      L && (de && c.locale !== "ko" && (ie || L !== "onCompositionStart" ? L === "onCompositionEnd" && ie && (Q = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), K = oe(d2, L), 0 < K.length && (L = new Ld(L, a, null, c, e2), g2.push({event: L, listeners: K}), Q ? L.data = Q : (Q = he(c), Q !== null && (L.data = Q))));
      if (Q = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({event: e2, listeners: d2}), e2.data = Q);
    }
    se(g2, b);
  });
}
function ef(a, b, c) {
  return {instance: a, listener: b, currentTarget: c};
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; a !== null; ) {
    var e = a, f = e.stateNode;
    e.tag === 5 && f !== null && (e = f, f = Ob(a, c), f != null && d.unshift(ef(a, f, e)), f = Ob(a, b), f != null && d.push(ef(a, f, e)));
    a = a.return;
  }
  return d;
}
function gf(a) {
  if (a === null)
    return null;
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function hf(a, b, c, d, e) {
  for (var f = b._reactName, g = []; c !== null && c !== d; ) {
    var h = c, k = h.alternate, l = h.stateNode;
    if (k !== null && k === d)
      break;
    h.tag === 5 && l !== null && (h = l, e ? (k = Ob(c, f), k != null && g.unshift(ef(c, k, h))) : e || (k = Ob(c, f), k != null && g.push(ef(c, k, h))));
    c = c.return;
  }
  g.length !== 0 && a.push({event: b, listeners: g});
}
function jf() {
}
var kf = null;
var lf = null;
function mf(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function nf(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var of = typeof setTimeout === "function" ? setTimeout : void 0;
var pf = typeof clearTimeout === "function" ? clearTimeout : void 0;
function qf(a) {
  a.nodeType === 1 ? a.textContent = "" : a.nodeType === 9 && (a = a.body, a != null && (a.textContent = ""));
}
function rf(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function sf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c = a.data;
      if (c === "$" || c === "$!" || c === "$?") {
        if (b === 0)
          return a;
        b--;
      } else
        c === "/$" && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var tf = 0;
function uf(a) {
  return {$$typeof: Ga, toString: a, valueOf: a};
}
var vf = Math.random().toString(36).slice(2);
var wf = "__reactFiber$" + vf;
var xf = "__reactProps$" + vf;
var ff = "__reactContainer$" + vf;
var yf = "__reactEvents$" + vf;
function wc(a) {
  var b = a[wf];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[ff] || c[wf]) {
      c = b.alternate;
      if (b.child !== null || c !== null && c.child !== null)
        for (a = sf(a); a !== null; ) {
          if (c = a[wf])
            return c;
          a = sf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[wf] || a[ff];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function ue(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(y(33));
}
function Db(a) {
  return a[xf] || null;
}
function $e(a) {
  var b = a[yf];
  b === void 0 && (b = a[yf] = new Set());
  return b;
}
var zf = [];
var Af = -1;
function Bf(a) {
  return {current: a};
}
function H(a) {
  0 > Af || (a.current = zf[Af], zf[Af] = null, Af--);
}
function I(a, b) {
  Af++;
  zf[Af] = a.current;
  a.current = b;
}
var Cf = {};
var M = Bf(Cf);
var N = Bf(false);
var Df = Cf;
function Ef(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Cf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Ff(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Gf() {
  H(N);
  H(M);
}
function Hf(a, b, c) {
  if (M.current !== Cf)
    throw Error(y(168));
  I(M, b);
  I(N, c);
}
function If(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(y(108, Ra(b) || "Unknown", e));
  return objectAssign({}, c, d);
}
function Jf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Cf;
  Df = M.current;
  I(M, a);
  I(N, N.current);
  return true;
}
function Kf(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(y(169));
  c ? (a = If(a, b, Df), d.__reactInternalMemoizedMergedChildContext = a, H(N), H(M), I(M, a)) : H(N);
  I(N, c);
}
var Lf = null;
var Mf = null;
var Nf = scheduler.unstable_runWithPriority;
var Of = scheduler.unstable_scheduleCallback;
var Pf = scheduler.unstable_cancelCallback;
var Qf = scheduler.unstable_shouldYield;
var Rf = scheduler.unstable_requestPaint;
var Sf = scheduler.unstable_now;
var Tf = scheduler.unstable_getCurrentPriorityLevel;
var Uf = scheduler.unstable_ImmediatePriority;
var Vf = scheduler.unstable_UserBlockingPriority;
var Wf = scheduler.unstable_NormalPriority;
var Xf = scheduler.unstable_LowPriority;
var Yf = scheduler.unstable_IdlePriority;
var Zf = {};
var $f = Rf !== void 0 ? Rf : function() {
};
var ag = null;
var bg = null;
var cg = false;
var dg = Sf();
var O = 1e4 > dg ? Sf : function() {
  return Sf() - dg;
};
function eg() {
  switch (Tf()) {
    case Uf:
      return 99;
    case Vf:
      return 98;
    case Wf:
      return 97;
    case Xf:
      return 96;
    case Yf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function fg(a) {
  switch (a) {
    case 99:
      return Uf;
    case 98:
      return Vf;
    case 97:
      return Wf;
    case 96:
      return Xf;
    case 95:
      return Yf;
    default:
      throw Error(y(332));
  }
}
function gg(a, b) {
  a = fg(a);
  return Nf(a, b);
}
function hg(a, b, c) {
  a = fg(a);
  return Of(a, b, c);
}
function ig() {
  if (bg !== null) {
    var a = bg;
    bg = null;
    Pf(a);
  }
  jg();
}
function jg() {
  if (!cg && ag !== null) {
    cg = true;
    var a = 0;
    try {
      var b = ag;
      gg(99, function() {
        for (; a < b.length; a++) {
          var c = b[a];
          do
            c = c(true);
          while (c !== null);
        }
      });
      ag = null;
    } catch (c) {
      throw ag !== null && (ag = ag.slice(a + 1)), Of(Uf, ig), c;
    } finally {
      cg = false;
    }
  }
}
var kg = ra.ReactCurrentBatchConfig;
function lg(a, b) {
  if (a && a.defaultProps) {
    b = objectAssign({}, b);
    a = a.defaultProps;
    for (var c in a)
      b[c] === void 0 && (b[c] = a[c]);
    return b;
  }
  return b;
}
var mg = Bf(null);
var ng = null;
var og = null;
var pg = null;
function qg() {
  pg = og = ng = null;
}
function rg(a) {
  var b = mg.current;
  H(mg);
  a.type._context._currentValue = b;
}
function sg(a, b) {
  for (; a !== null; ) {
    var c = a.alternate;
    if ((a.childLanes & b) === b)
      if (c === null || (c.childLanes & b) === b)
        break;
      else
        c.childLanes |= b;
    else
      a.childLanes |= b, c !== null && (c.childLanes |= b);
    a = a.return;
  }
}
function tg(a, b) {
  ng = a;
  pg = og = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && ((a.lanes & b) !== 0 && (ug = true), a.firstContext = null);
}
function vg(a, b) {
  if (pg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      pg = a, b = 1073741823;
    b = {context: a, observedBits: b, next: null};
    if (og === null) {
      if (ng === null)
        throw Error(y(308));
      og = b;
      ng.dependencies = {lanes: 0, firstContext: b, responders: null};
    } else
      og = og.next = b;
  }
  return a._currentValue;
}
var wg = false;
function xg(a) {
  a.updateQueue = {baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null}, effects: null};
}
function yg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = {baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects});
}
function zg(a, b) {
  return {eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null};
}
function Ag(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c = a.pending;
    c === null ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
}
function Bg(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (d !== null && (d = d.updateQueue, c === d)) {
    var e = null, f = null;
    c = c.firstBaseUpdate;
    if (c !== null) {
      do {
        var g = {eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null};
        f === null ? e = f = g : f = f.next = g;
        c = c.next;
      } while (c !== null);
      f === null ? e = f = b : f = f.next = b;
    } else
      e = f = b;
    c = {baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects};
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  a === null ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function Cg(a, b, c, d) {
  var e = a.updateQueue;
  wg = false;
  var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (h !== null) {
    e.shared.pending = null;
    var k = h, l = k.next;
    k.next = null;
    g === null ? f = l : g.next = l;
    g = k;
    var n = a.alternate;
    if (n !== null) {
      n = n.updateQueue;
      var A = n.lastBaseUpdate;
      A !== g && (A === null ? n.firstBaseUpdate = l : A.next = l, n.lastBaseUpdate = k);
    }
  }
  if (f !== null) {
    A = e.baseState;
    g = 0;
    n = l = k = null;
    do {
      h = f.lane;
      var p = f.eventTime;
      if ((d & h) === h) {
        n !== null && (n = n.next = {
          eventTime: p,
          lane: 0,
          tag: f.tag,
          payload: f.payload,
          callback: f.callback,
          next: null
        });
        a: {
          var C = a, x = f;
          h = b;
          p = c;
          switch (x.tag) {
            case 1:
              C = x.payload;
              if (typeof C === "function") {
                A = C.call(p, A, h);
                break a;
              }
              A = C;
              break a;
            case 3:
              C.flags = C.flags & -4097 | 64;
            case 0:
              C = x.payload;
              h = typeof C === "function" ? C.call(p, A, h) : C;
              if (h === null || h === void 0)
                break a;
              A = objectAssign({}, A, h);
              break a;
            case 2:
              wg = true;
          }
        }
        f.callback !== null && (a.flags |= 32, h = e.effects, h === null ? e.effects = [f] : h.push(f));
      } else
        p = {eventTime: p, lane: h, tag: f.tag, payload: f.payload, callback: f.callback, next: null}, n === null ? (l = n = p, k = A) : n = n.next = p, g |= h;
      f = f.next;
      if (f === null)
        if (h = e.shared.pending, h === null)
          break;
        else
          f = h.next, h.next = null, e.lastBaseUpdate = h, e.shared.pending = null;
    } while (1);
    n === null && (k = A);
    e.baseState = k;
    e.firstBaseUpdate = l;
    e.lastBaseUpdate = n;
    Dg |= g;
    a.lanes = g;
    a.memoizedState = A;
  }
}
function Eg(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = c;
        if (typeof e !== "function")
          throw Error(y(191, e));
        e.call(d);
      }
    }
}
var Fg = new react.Component().refs;
function Gg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = c === null || c === void 0 ? b : objectAssign({}, b, c);
  a.memoizedState = c;
  a.lanes === 0 && (a.updateQueue.baseState = c);
}
var Kg = {isMounted: function(a) {
  return (a = a._reactInternals) ? Zb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = Hg(), e = Ig(a), f = zg(d, e);
  f.tag = 1;
  f.payload = b;
  c !== void 0 && c !== null && (f.callback = c);
  Ag(a, f);
  Jg(a, e, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = Hg(), d = Ig(a), e = zg(c, d);
  e.tag = 2;
  b !== void 0 && b !== null && (e.callback = b);
  Ag(a, e);
  Jg(a, d, c);
}};
function Lg(a, b, c, d, e, f, g) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Je(c, d) || !Je(e, f) : true;
}
function Mg(a, b, c) {
  var d = false, e = Cf;
  var f = b.contextType;
  typeof f === "object" && f !== null ? f = vg(f) : (e = Ff(b) ? Df : M.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Ef(a, e) : Cf);
  b = new b(c, f);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Kg;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Ng(a, b, c, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
}
function Og(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = Fg;
  xg(a);
  var f = b.contextType;
  typeof f === "object" && f !== null ? e.context = vg(f) : (f = Ff(b) ? Df : M.current, e.context = Ef(a, f));
  Cg(a, c, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  typeof f === "function" && (Gg(a, b, f, c), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Kg.enqueueReplaceState(e, e.state, null), Cg(a, c, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.flags |= 4);
}
var Pg = Array.isArray;
function Qg(a, b, c) {
  a = c.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (c.tag !== 1)
          throw Error(y(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(y(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Fg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(y(284));
    if (!c._owner)
      throw Error(y(290, a));
  }
  return a;
}
function Rg(a, b) {
  if (a.type !== "textarea")
    throw Error(y(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b));
}
function Sg(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c2, b2.lastEffect = c2) : b2.firstEffect = b2.lastEffect = c2;
      c2.nextEffect = null;
      c2.flags = 8;
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Tg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return c2;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c2 ? (b2.flags = 2, c2) : d2;
    b2.flags = 2;
    return c2;
  }
  function g(b2) {
    a && b2.alternate === null && (b2.flags = 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Ug(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c2, d2) {
    if (b2 !== null && b2.elementType === c2.type)
      return d2 = e(b2, c2.props), d2.ref = Qg(a2, b2, c2), d2.return = a2, d2;
    d2 = Vg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Qg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l(a2, b2, c2, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = Wg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function n(a2, b2, c2, d2, f2) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Xg(c2, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function A(a2, b2, c2) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Ug("" + b2, a2.mode, c2), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case sa:
          return c2 = Vg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Qg(a2, null, b2), c2.return = a2, c2;
        case ta:
          return b2 = Wg(b2, a2.mode, c2), b2.return = a2, b2;
      }
      if (Pg(b2) || La(b2))
        return b2 = Xg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Rg(a2, b2);
    }
    return null;
  }
  function p(a2, b2, c2, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c2 === "string" || typeof c2 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c2, d2);
    if (typeof c2 === "object" && c2 !== null) {
      switch (c2.$$typeof) {
        case sa:
          return c2.key === e2 ? c2.type === ua ? n(a2, b2, c2.props.children, d2, e2) : k(a2, b2, c2, d2) : null;
        case ta:
          return c2.key === e2 ? l(a2, b2, c2, d2) : null;
      }
      if (Pg(c2) || La(c2))
        return e2 !== null ? null : n(a2, b2, c2, d2, null);
      Rg(a2, c2);
    }
    return null;
  }
  function C(a2, b2, c2, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case sa:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, d2.type === ua ? n(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case ta:
          return a2 = a2.get(d2.key === null ? c2 : d2.key) || null, l(b2, a2, d2, e2);
      }
      if (Pg(d2) || La(d2))
        return a2 = a2.get(c2) || null, n(b2, a2, d2, e2, null);
      Rg(b2, d2);
    }
    return null;
  }
  function x(e2, g2, h2, k2) {
    for (var l2 = null, t = null, u = g2, z = g2 = 0, q = null; u !== null && z < h2.length; z++) {
      u.index > z ? (q = u, u = null) : q = u.sibling;
      var n2 = p(e2, u, h2[z], k2);
      if (n2 === null) {
        u === null && (u = q);
        break;
      }
      a && u && n2.alternate === null && b(e2, u);
      g2 = f(n2, g2, z);
      t === null ? l2 = n2 : t.sibling = n2;
      t = n2;
      u = q;
    }
    if (z === h2.length)
      return c(e2, u), l2;
    if (u === null) {
      for (; z < h2.length; z++)
        u = A(e2, h2[z], k2), u !== null && (g2 = f(u, g2, z), t === null ? l2 = u : t.sibling = u, t = u);
      return l2;
    }
    for (u = d(e2, u); z < h2.length; z++)
      q = C(u, e2, z, h2[z], k2), q !== null && (a && q.alternate !== null && u.delete(q.key === null ? z : q.key), g2 = f(q, g2, z), t === null ? l2 = q : t.sibling = q, t = q);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  function w(e2, g2, h2, k2) {
    var l2 = La(h2);
    if (typeof l2 !== "function")
      throw Error(y(150));
    h2 = l2.call(h2);
    if (h2 == null)
      throw Error(y(151));
    for (var t = l2 = null, u = g2, z = g2 = 0, q = null, n2 = h2.next(); u !== null && !n2.done; z++, n2 = h2.next()) {
      u.index > z ? (q = u, u = null) : q = u.sibling;
      var w2 = p(e2, u, n2.value, k2);
      if (w2 === null) {
        u === null && (u = q);
        break;
      }
      a && u && w2.alternate === null && b(e2, u);
      g2 = f(w2, g2, z);
      t === null ? l2 = w2 : t.sibling = w2;
      t = w2;
      u = q;
    }
    if (n2.done)
      return c(e2, u), l2;
    if (u === null) {
      for (; !n2.done; z++, n2 = h2.next())
        n2 = A(e2, n2.value, k2), n2 !== null && (g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
      return l2;
    }
    for (u = d(e2, u); !n2.done; z++, n2 = h2.next())
      n2 = C(u, e2, z, n2.value, k2), n2 !== null && (a && n2.alternate !== null && u.delete(n2.key === null ? z : n2.key), g2 = f(n2, g2, z), t === null ? l2 = n2 : t.sibling = n2, t = n2);
    a && u.forEach(function(a2) {
      return b(e2, a2);
    });
    return l2;
  }
  return function(a2, d2, f2, h2) {
    var k2 = typeof f2 === "object" && f2 !== null && f2.type === ua && f2.key === null;
    k2 && (f2 = f2.props.children);
    var l2 = typeof f2 === "object" && f2 !== null;
    if (l2)
      switch (f2.$$typeof) {
        case sa:
          a: {
            l2 = f2.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l2) {
                switch (k2.tag) {
                  case 7:
                    if (f2.type === ua) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f2.type) {
                      c(a2, k2.sibling);
                      d2 = e(k2, f2.props);
                      d2.ref = Qg(a2, k2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f2.type === ua ? (d2 = Xg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Vg(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Qg(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case ta:
          a: {
            for (k2 = f2.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Wg(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
      }
    if (typeof f2 === "string" || typeof f2 === "number")
      return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Ug(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
    if (Pg(f2))
      return x(a2, d2, f2, h2);
    if (La(f2))
      return w(a2, d2, f2, h2);
    l2 && Rg(a2, f2);
    if (typeof f2 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 22:
        case 0:
        case 11:
        case 15:
          throw Error(y(152, Ra(a2.type) || "Component"));
      }
    return c(a2, d2);
  };
}
var Yg = Sg(true);
var Zg = Sg(false);
var $g = {};
var ah = Bf($g);
var bh = Bf($g);
var ch = Bf($g);
function dh(a) {
  if (a === $g)
    throw Error(y(174));
  return a;
}
function eh(a, b) {
  I(ch, b);
  I(bh, a);
  I(ah, $g);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : mb(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = mb(b, a);
  }
  H(ah);
  I(ah, b);
}
function fh() {
  H(ah);
  H(bh);
  H(ch);
}
function gh(a) {
  dh(ch.current);
  var b = dh(ah.current);
  var c = mb(b, a.type);
  b !== c && (I(bh, a), I(ah, c));
}
function hh(a) {
  bh.current === a && (H(ah), H(bh));
}
var P = Bf(0);
function ih(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c = b.memoizedState;
      if (c !== null && (c = c.dehydrated, c === null || c.data === "$?" || c.data === "$!"))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.flags & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var jh = null;
var kh = null;
var lh = false;
function mh(a, b) {
  var c = nh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.flags = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}
function oh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = b.nodeType !== 1 || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function ph(a) {
  if (lh) {
    var b = kh;
    if (b) {
      var c = b;
      if (!oh(a, b)) {
        b = rf(c.nextSibling);
        if (!b || !oh(a, b)) {
          a.flags = a.flags & -1025 | 2;
          lh = false;
          jh = a;
          return;
        }
        mh(jh, c);
      }
      jh = a;
      kh = rf(b.firstChild);
    } else
      a.flags = a.flags & -1025 | 2, lh = false, jh = a;
  }
}
function qh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  jh = a;
}
function rh(a) {
  if (a !== jh)
    return false;
  if (!lh)
    return qh(a), lh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !nf(b, a.memoizedProps))
    for (b = kh; b; )
      mh(a, b), b = rf(b.nextSibling);
  qh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(y(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c = a.data;
          if (c === "/$") {
            if (b === 0) {
              kh = rf(a.nextSibling);
              break a;
            }
            b--;
          } else
            c !== "$" && c !== "$!" && c !== "$?" || b++;
        }
        a = a.nextSibling;
      }
      kh = null;
    }
  } else
    kh = jh ? rf(a.stateNode.nextSibling) : null;
  return true;
}
function sh() {
  kh = jh = null;
  lh = false;
}
var th = [];
function uh() {
  for (var a = 0; a < th.length; a++)
    th[a]._workInProgressVersionPrimary = null;
  th.length = 0;
}
var vh = ra.ReactCurrentDispatcher;
var wh = ra.ReactCurrentBatchConfig;
var xh = 0;
var R = null;
var S = null;
var T = null;
var yh = false;
var zh = false;
function Ah() {
  throw Error(y(321));
}
function Bh(a, b) {
  if (b === null)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Ch(a, b, c, d, e, f) {
  xh = f;
  R = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  vh.current = a === null || a.memoizedState === null ? Dh : Eh;
  a = c(d, e);
  if (zh) {
    f = 0;
    do {
      zh = false;
      if (!(25 > f))
        throw Error(y(301));
      f += 1;
      T = S = null;
      b.updateQueue = null;
      vh.current = Fh;
      a = c(d, e);
    } while (zh);
  }
  vh.current = Gh;
  b = S !== null && S.next !== null;
  xh = 0;
  T = S = R = null;
  yh = false;
  if (b)
    throw Error(y(300));
  return a;
}
function Hh() {
  var a = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
  T === null ? R.memoizedState = T = a : T = T.next = a;
  return T;
}
function Ih() {
  if (S === null) {
    var a = R.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = S.next;
  var b = T === null ? R.memoizedState : T.next;
  if (b !== null)
    T = b, S = a;
  else {
    if (a === null)
      throw Error(y(310));
    S = a;
    a = {memoizedState: S.memoizedState, baseState: S.baseState, baseQueue: S.baseQueue, queue: S.queue, next: null};
    T === null ? R.memoizedState = T = a : T = T.next = a;
  }
  return T;
}
function Jh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function Kh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = S, e = d.baseQueue, f = c.pending;
  if (f !== null) {
    if (e !== null) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null, k = e;
    do {
      var l = k.lane;
      if ((xh & l) === l)
        h !== null && (h = h.next = {lane: 0, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null}), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      else {
        var n = {
          lane: l,
          action: k.action,
          eagerReducer: k.eagerReducer,
          eagerState: k.eagerState,
          next: null
        };
        h === null ? (g = h = n, f = d) : h = h.next = n;
        R.lanes |= l;
        Dg |= l;
      }
      k = k.next;
    } while (k !== null && k !== e);
    h === null ? f = d : h.next = g;
    He(d, b.memoizedState) || (ug = true);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c.lastRenderedState = d;
  }
  return [b.memoizedState, c.dispatch];
}
function Lh(a) {
  var b = Ih(), c = b.queue;
  if (c === null)
    throw Error(y(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f = b.memoizedState;
  if (e !== null) {
    c.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    He(f, b.memoizedState) || (ug = true);
    b.memoizedState = f;
    b.baseQueue === null && (b.baseState = f);
    c.lastRenderedState = f;
  }
  return [f, d];
}
function Mh(a, b, c) {
  var d = b._getVersion;
  d = d(b._source);
  var e = b._workInProgressVersionPrimary;
  if (e !== null)
    a = e === d;
  else if (a = a.mutableReadLanes, a = (xh & a) === a)
    b._workInProgressVersionPrimary = d, th.push(b);
  if (a)
    return c(b._source);
  th.push(b);
  throw Error(y(350));
}
function Nh(a, b, c, d) {
  var e = U;
  if (e === null)
    throw Error(y(349));
  var f = b._getVersion, g = f(b._source), h = vh.current, k = h.useState(function() {
    return Mh(e, b, c);
  }), l = k[1], n = k[0];
  k = T;
  var A = a.memoizedState, p = A.refs, C = p.getSnapshot, x = A.source;
  A = A.subscribe;
  var w = R;
  a.memoizedState = {refs: p, source: b, subscribe: d};
  h.useEffect(function() {
    p.getSnapshot = c;
    p.setSnapshot = l;
    var a2 = f(b._source);
    if (!He(g, a2)) {
      a2 = c(b._source);
      He(n, a2) || (l(a2), a2 = Ig(w), e.mutableReadLanes |= a2 & e.pendingLanes);
      a2 = e.mutableReadLanes;
      e.entangledLanes |= a2;
      for (var d2 = e.entanglements, h2 = a2; 0 < h2; ) {
        var k2 = 31 - Vc(h2), v = 1 << k2;
        d2[k2] |= a2;
        h2 &= ~v;
      }
    }
  }, [c, b, d]);
  h.useEffect(function() {
    return d(b._source, function() {
      var a2 = p.getSnapshot, c2 = p.setSnapshot;
      try {
        c2(a2(b._source));
        var d2 = Ig(w);
        e.mutableReadLanes |= d2 & e.pendingLanes;
      } catch (q) {
        c2(function() {
          throw q;
        });
      }
    });
  }, [b, d]);
  He(C, c) && He(x, b) && He(A, d) || (a = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: n}, a.dispatch = l = Oh.bind(null, R, a), k.queue = a, k.baseQueue = null, n = Mh(e, b, c), k.memoizedState = k.baseState = n);
  return n;
}
function Ph(a, b, c) {
  var d = Ih();
  return Nh(d, a, b, c);
}
function Qh(a) {
  var b = Hh();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = {pending: null, dispatch: null, lastRenderedReducer: Jh, lastRenderedState: a};
  a = a.dispatch = Oh.bind(null, R, a);
  return [b.memoizedState, a];
}
function Rh(a, b, c, d) {
  a = {tag: a, create: b, destroy: c, deps: d, next: null};
  b = R.updateQueue;
  b === null ? (b = {lastEffect: null}, R.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, c === null ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Sh(a) {
  var b = Hh();
  a = {current: a};
  return b.memoizedState = a;
}
function Th() {
  return Ih().memoizedState;
}
function Uh(a, b, c, d) {
  var e = Hh();
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, void 0, d === void 0 ? null : d);
}
function Vh(a, b, c, d) {
  var e = Ih();
  d = d === void 0 ? null : d;
  var f = void 0;
  if (S !== null) {
    var g = S.memoizedState;
    f = g.destroy;
    if (d !== null && Bh(d, g.deps)) {
      Rh(b, c, f, d);
      return;
    }
  }
  R.flags |= a;
  e.memoizedState = Rh(1 | b, c, f, d);
}
function Wh(a, b) {
  return Uh(516, 4, a, b);
}
function Xh(a, b) {
  return Vh(516, 4, a, b);
}
function Yh(a, b) {
  return Vh(4, 2, a, b);
}
function Zh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function $h(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Vh(4, 2, Zh.bind(null, b, a), c);
}
function ai() {
}
function bi(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ci(a, b) {
  var c = Ih();
  b = b === void 0 ? null : b;
  var d = c.memoizedState;
  if (d !== null && b !== null && Bh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function di(a, b) {
  var c = eg();
  gg(98 > c ? 98 : c, function() {
    a(true);
  });
  gg(97 < c ? 97 : c, function() {
    var c2 = wh.transition;
    wh.transition = 1;
    try {
      a(false), b();
    } finally {
      wh.transition = c2;
    }
  });
}
function Oh(a, b, c) {
  var d = Hg(), e = Ig(a), f = {lane: e, action: c, eagerReducer: null, eagerState: null, next: null}, g = b.pending;
  g === null ? f.next = f : (f.next = g.next, g.next = f);
  b.pending = f;
  g = a.alternate;
  if (a === R || g !== null && g === R)
    zh = yh = true;
  else {
    if (a.lanes === 0 && (g === null || g.lanes === 0) && (g = b.lastRenderedReducer, g !== null))
      try {
        var h = b.lastRenderedState, k = g(h, c);
        f.eagerReducer = g;
        f.eagerState = k;
        if (He(k, h))
          return;
      } catch (l) {
      } finally {
      }
    Jg(a, e, d);
  }
}
var Gh = {readContext: vg, useCallback: Ah, useContext: Ah, useEffect: Ah, useImperativeHandle: Ah, useLayoutEffect: Ah, useMemo: Ah, useReducer: Ah, useRef: Ah, useState: Ah, useDebugValue: Ah, useDeferredValue: Ah, useTransition: Ah, useMutableSource: Ah, useOpaqueIdentifier: Ah, unstable_isNewReconciler: false};
var Dh = {readContext: vg, useCallback: function(a, b) {
  Hh().memoizedState = [a, b === void 0 ? null : b];
  return a;
}, useContext: vg, useEffect: Wh, useImperativeHandle: function(a, b, c) {
  c = c !== null && c !== void 0 ? c.concat([a]) : null;
  return Uh(4, 2, Zh.bind(null, b, a), c);
}, useLayoutEffect: function(a, b) {
  return Uh(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Hh();
  b = b === void 0 ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Hh();
  b = c !== void 0 ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = {pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b};
  a = a.dispatch = Oh.bind(null, R, a);
  return [d.memoizedState, a];
}, useRef: Sh, useState: Qh, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Qh(a), c = b[0], d = b[1];
  Wh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Qh(false), b = a[0];
  a = di.bind(null, a[1]);
  Sh(a);
  return [a, b];
}, useMutableSource: function(a, b, c) {
  var d = Hh();
  d.memoizedState = {refs: {getSnapshot: b, setSnapshot: null}, source: a, subscribe: c};
  return Nh(d, a, b, c);
}, useOpaqueIdentifier: function() {
  if (lh) {
    var a = false, b = uf(function() {
      a || (a = true, c("r:" + (tf++).toString(36)));
      throw Error(y(355));
    }), c = Qh(b)[1];
    (R.mode & 2) === 0 && (R.flags |= 516, Rh(5, function() {
      c("r:" + (tf++).toString(36));
    }, void 0, null));
    return b;
  }
  b = "r:" + (tf++).toString(36);
  Qh(b);
  return b;
}, unstable_isNewReconciler: false};
var Eh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Kh, useRef: Th, useState: function() {
  return Kh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Kh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Kh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Kh(Jh)[0];
}, unstable_isNewReconciler: false};
var Fh = {readContext: vg, useCallback: bi, useContext: vg, useEffect: Xh, useImperativeHandle: $h, useLayoutEffect: Yh, useMemo: ci, useReducer: Lh, useRef: Th, useState: function() {
  return Lh(Jh);
}, useDebugValue: ai, useDeferredValue: function(a) {
  var b = Lh(Jh), c = b[0], d = b[1];
  Xh(function() {
    var b2 = wh.transition;
    wh.transition = 1;
    try {
      d(a);
    } finally {
      wh.transition = b2;
    }
  }, [a]);
  return c;
}, useTransition: function() {
  var a = Lh(Jh)[0];
  return [
    Th().current,
    a
  ];
}, useMutableSource: Ph, useOpaqueIdentifier: function() {
  return Lh(Jh)[0];
}, unstable_isNewReconciler: false};
var ei = ra.ReactCurrentOwner;
var ug = false;
function fi(a, b, c, d) {
  b.child = a === null ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
}
function gi(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  tg(b, e);
  d = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, d, e);
  return b.child;
}
function ii(a, b, c, d, e, f) {
  if (a === null) {
    var g = c.type;
    if (typeof g === "function" && !ji(g) && g.defaultProps === void 0 && c.compare === null && c.defaultProps === void 0)
      return b.tag = 15, b.type = g, ki(a, b, g, d, e, f);
    a = Vg(c.type, null, d, b, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if ((e & f) === 0 && (e = g.memoizedProps, c = c.compare, c = c !== null ? c : Je, c(e, d) && a.ref === b.ref))
    return hi(a, b, f);
  b.flags |= 1;
  a = Tg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ki(a, b, c, d, e, f) {
  if (a !== null && Je(a.memoizedProps, d) && a.ref === b.ref)
    if (ug = false, (f & e) !== 0)
      (a.flags & 16384) !== 0 && (ug = true);
    else
      return b.lanes = a.lanes, hi(a, b, f);
  return li(a, b, c, d, f);
}
function mi(a, b, c) {
  var d = b.pendingProps, e = d.children, f = a !== null ? a.memoizedState : null;
  if (d.mode === "hidden" || d.mode === "unstable-defer-without-hiding")
    if ((b.mode & 4) === 0)
      b.memoizedState = {baseLanes: 0}, ni(b, c);
    else if ((c & 1073741824) !== 0)
      b.memoizedState = {baseLanes: 0}, ni(b, f !== null ? f.baseLanes : c);
    else
      return a = f !== null ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {baseLanes: a}, ni(b, a), null;
  else
    f !== null ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, ni(b, d);
  fi(a, b, e, c);
  return b.child;
}
function oi(a, b) {
  var c = b.ref;
  if (a === null && c !== null || a !== null && a.ref !== c)
    b.flags |= 128;
}
function li(a, b, c, d, e) {
  var f = Ff(c) ? Df : M.current;
  f = Ef(b, f);
  tg(b, e);
  c = Ch(a, b, c, d, f, e);
  if (a !== null && !ug)
    return b.updateQueue = a.updateQueue, b.flags &= -517, a.lanes &= ~e, hi(a, b, e);
  b.flags |= 1;
  fi(a, b, c, e);
  return b.child;
}
function pi(a, b, c, d, e) {
  if (Ff(c)) {
    var f = true;
    Jf(b);
  } else
    f = false;
  tg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), Mg(b, c, d), Og(b, c, d, e), d = true;
  else if (a === null) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l = c.contextType;
    typeof l === "object" && l !== null ? l = vg(l) : (l = Ff(c) ? Df : M.current, l = Ef(b, l));
    var n = c.getDerivedStateFromProps, A = typeof n === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    A || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l) && Ng(b, g, d, l);
    wg = false;
    var p = b.memoizedState;
    g.state = p;
    Cg(b, d, g, e);
    k = b.memoizedState;
    h !== d || p !== k || N.current || wg ? (typeof n === "function" && (Gg(b, c, n, d), k = b.memoizedState), (h = wg || Lg(b, c, h, d, p, k, l)) ? (A || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.flags |= 4)) : (typeof g.componentDidMount === "function" && (b.flags |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : (typeof g.componentDidMount === "function" && (b.flags |= 4), d = false);
  } else {
    g = b.stateNode;
    yg(a, b);
    h = b.memoizedProps;
    l = b.type === b.elementType ? h : lg(b.type, h);
    g.props = l;
    A = b.pendingProps;
    p = g.context;
    k = c.contextType;
    typeof k === "object" && k !== null ? k = vg(k) : (k = Ff(c) ? Df : M.current, k = Ef(b, k));
    var C = c.getDerivedStateFromProps;
    (n = typeof C === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== A || p !== k) && Ng(b, g, d, k);
    wg = false;
    p = b.memoizedState;
    g.state = p;
    Cg(b, d, g, e);
    var x = b.memoizedState;
    h !== A || p !== x || N.current || wg ? (typeof C === "function" && (Gg(b, c, C, d), x = b.memoizedState), (l = wg || Lg(b, c, l, d, p, x, k)) ? (n || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x, k), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x, k)), typeof g.componentDidUpdate === "function" && (b.flags |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.flags |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), b.memoizedProps = d, b.memoizedState = x), g.props = d, g.state = x, g.context = k, d = l) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 256), d = false);
  }
  return qi(a, b, c, d, f, e);
}
function qi(a, b, c, d, e, f) {
  oi(a, b);
  var g = (b.flags & 64) !== 0;
  if (!d && !g)
    return e && Kf(b, c, false), hi(a, b, f);
  d = b.stateNode;
  ei.current = b;
  var h = g && typeof c.getDerivedStateFromError !== "function" ? null : d.render();
  b.flags |= 1;
  a !== null && g ? (b.child = Yg(b, a.child, null, f), b.child = Yg(b, null, h, f)) : fi(a, b, h, f);
  b.memoizedState = d.state;
  e && Kf(b, c, true);
  return b.child;
}
function ri(a) {
  var b = a.stateNode;
  b.pendingContext ? Hf(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Hf(a, b.context, false);
  eh(a, b.containerInfo);
}
var si = {dehydrated: null, retryLane: 0};
function ti(a, b, c) {
  var d = b.pendingProps, e = P.current, f = false, g;
  (g = (b.flags & 64) !== 0) || (g = a !== null && a.memoizedState === null ? false : (e & 2) !== 0);
  g ? (f = true, b.flags &= -65) : a !== null && a.memoizedState === null || d.fallback === void 0 || d.unstable_avoidThisFallback === true || (e |= 1);
  I(P, e & 1);
  if (a === null) {
    d.fallback !== void 0 && ph(b);
    a = d.children;
    e = d.fallback;
    if (f)
      return a = ui(b, a, e, c), b.child.memoizedState = {baseLanes: c}, b.memoizedState = si, a;
    if (typeof d.unstable_expectedLoadTime === "number")
      return a = ui(b, a, e, c), b.child.memoizedState = {baseLanes: c}, b.memoizedState = si, b.lanes = 33554432, a;
    c = vi({mode: "visible", children: a}, b.mode, c, null);
    c.return = b;
    return b.child = c;
  }
  if (a.memoizedState !== null) {
    if (f)
      return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {baseLanes: c} : {baseLanes: e.baseLanes | c}, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  if (f)
    return d = wi(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = e === null ? {baseLanes: c} : {baseLanes: e.baseLanes | c}, f.childLanes = a.childLanes & ~c, b.memoizedState = si, d;
  c = xi(a, b, d.children, c);
  b.memoizedState = null;
  return c;
}
function ui(a, b, c, d) {
  var e = a.mode, f = a.child;
  b = {mode: "hidden", children: b};
  (e & 2) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = b) : f = vi(b, e, 0, null);
  c = Xg(c, e, d, null);
  f.return = a;
  c.return = a;
  f.sibling = c;
  a.child = f;
  return c;
}
function xi(a, b, c, d) {
  var e = a.child;
  a = e.sibling;
  c = Tg(e, {mode: "visible", children: c});
  (b.mode & 2) === 0 && (c.lanes = d);
  c.return = b;
  c.sibling = null;
  a !== null && (a.nextEffect = null, a.flags = 8, b.firstEffect = b.lastEffect = a);
  return b.child = c;
}
function wi(a, b, c, d, e) {
  var f = b.mode, g = a.child;
  a = g.sibling;
  var h = {mode: "hidden", children: c};
  (f & 2) === 0 && b.child !== g ? (c = b.child, c.childLanes = 0, c.pendingProps = h, g = c.lastEffect, g !== null ? (b.firstEffect = c.firstEffect, b.lastEffect = g, g.nextEffect = null) : b.firstEffect = b.lastEffect = null) : c = Tg(g, h);
  a !== null ? d = Tg(a, d) : (d = Xg(d, f, e, null), d.flags |= 2);
  d.return = b;
  c.return = b;
  c.sibling = d;
  b.child = c;
  return d;
}
function yi(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  sg(a.return, b);
}
function zi(a, b, c, d, e, f) {
  var g = a.memoizedState;
  g === null ? a.memoizedState = {isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e, lastEffect: f} : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c, g.tailMode = e, g.lastEffect = f);
}
function Ai(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  fi(a, b, d.children, c);
  d = P.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.flags |= 64;
  else {
    if (a !== null && (a.flags & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && yi(a, c);
          else if (a.tag === 19)
            yi(a, c);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(P, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; c !== null; )
          a = c.alternate, a !== null && ih(a) === null && (e = c), c = c.sibling;
        c = e;
        c === null ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zi(b, false, e, c, f, b.lastEffect);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && ih(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        zi(b, true, c, null, f, b.lastEffect);
        break;
      case "together":
        zi(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function hi(a, b, c) {
  a !== null && (b.dependencies = a.dependencies);
  Dg |= b.lanes;
  if ((c & b.childLanes) !== 0) {
    if (a !== null && b.child !== a.child)
      throw Error(y(153));
    if (b.child !== null) {
      a = b.child;
      c = Tg(a, a.pendingProps);
      b.child = c;
      for (c.return = b; a.sibling !== null; )
        a = a.sibling, c = c.sibling = Tg(a, a.pendingProps), c.return = b;
      c.sibling = null;
    }
    return b.child;
  }
  return null;
}
var Bi;
var Ci;
var Di;
var Ei;
Bi = function(a, b) {
  for (var c = b.child; c !== null; ) {
    if (c.tag === 5 || c.tag === 6)
      a.appendChild(c.stateNode);
    else if (c.tag !== 4 && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Ci = function() {
};
Di = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    dh(ah.current);
    var f = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f = [];
        break;
      case "option":
        e = eb(a, e);
        d = eb(a, d);
        f = [];
        break;
      case "select":
        e = objectAssign({}, e, {value: void 0});
        d = objectAssign({}, d, {value: void 0});
        f = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f = [];
        break;
      default:
        typeof e.onClick !== "function" && typeof d.onClick === "function" && (a.onclick = jf);
    }
    vb(c, d);
    var g;
    c = null;
    for (l in e)
      if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && e[l] != null)
        if (l === "style") {
          var h = e[l];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          l !== "dangerouslySetInnerHTML" && l !== "children" && l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (ca.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
    for (l in d) {
      var k = d[l];
      h = e != null ? e[l] : void 0;
      if (d.hasOwnProperty(l) && k !== h && (k != null || h != null))
        if (l === "style")
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k)
              k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
          } else
            c || (f || (f = []), f.push(l, c)), c = k;
        else
          l === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, k != null && h !== k && (f = f || []).push(l, k)) : l === "children" ? typeof k !== "string" && typeof k !== "number" || (f = f || []).push(l, "" + k) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && (ca.hasOwnProperty(l) ? (k != null && l === "onScroll" && G("scroll", a), f || h === k || (f = [])) : typeof k === "object" && k !== null && k.$$typeof === Ga ? k.toString() : (f = f || []).push(l, k));
    }
    c && (f = f || []).push("style", c);
    var l = f;
    if (b.updateQueue = l)
      b.flags |= 4;
  }
};
Ei = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Fi(a, b) {
  if (!lh)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; b !== null; )
          b.alternate !== null && (c = b), b = b.sibling;
        c === null ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; c !== null; )
          c.alternate !== null && (d = c), c = c.sibling;
        d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function Gi(a, b, c) {
  var d = b.pendingProps;
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return Ff(b.type) && Gf(), null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      d = b.stateNode;
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (a === null || a.child === null)
        rh(b) ? b.flags |= 4 : d.hydrate || (b.flags |= 256);
      Ci(b);
      return null;
    case 5:
      hh(b);
      var e = dh(ch.current);
      c = b.type;
      if (a !== null && b.stateNode != null)
        Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(y(166));
          return null;
        }
        a = dh(ah.current);
        if (rh(b)) {
          d = b.stateNode;
          c = b.type;
          var f = b.memoizedProps;
          d[wf] = b;
          d[xf] = f;
          switch (c) {
            case "dialog":
              G("cancel", d);
              G("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xe.length; a++)
                G(Xe[a], d);
              break;
            case "source":
              G("error", d);
              break;
            case "img":
            case "image":
            case "link":
              G("error", d);
              G("load", d);
              break;
            case "details":
              G("toggle", d);
              break;
            case "input":
              Za(d, f);
              G("invalid", d);
              break;
            case "select":
              d._wrapperState = {wasMultiple: !!f.multiple};
              G("invalid", d);
              break;
            case "textarea":
              hb(d, f), G("invalid", d);
          }
          vb(c, f);
          a = null;
          for (var g in f)
            f.hasOwnProperty(g) && (e = f[g], g === "children" ? typeof e === "string" ? d.textContent !== e && (a = ["children", e]) : typeof e === "number" && d.textContent !== "" + e && (a = ["children", "" + e]) : ca.hasOwnProperty(g) && e != null && g === "onScroll" && G("scroll", d));
          switch (c) {
            case "input":
              Va(d);
              cb(d, f, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f.onClick === "function" && (d.onclick = jf);
          }
          d = a;
          b.updateQueue = d;
          d !== null && (b.flags |= 4);
        } else {
          g = e.nodeType === 9 ? e : e.ownerDocument;
          a === kb.html && (a = lb(c));
          a === kb.html ? c === "script" ? (a = g.createElement("div"), a.innerHTML = "<script></script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(c, {is: d.is}) : (a = g.createElement(c), c === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[wf] = b;
          a[xf] = d;
          Bi(a, b, false, false);
          b.stateNode = a;
          g = wb(c, d);
          switch (c) {
            case "dialog":
              G("cancel", a);
              G("close", a);
              e = d;
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", a);
              e = d;
              break;
            case "video":
            case "audio":
              for (e = 0; e < Xe.length; e++)
                G(Xe[e], a);
              e = d;
              break;
            case "source":
              G("error", a);
              e = d;
              break;
            case "img":
            case "image":
            case "link":
              G("error", a);
              G("load", a);
              e = d;
              break;
            case "details":
              G("toggle", a);
              e = d;
              break;
            case "input":
              Za(a, d);
              e = Ya(a, d);
              G("invalid", a);
              break;
            case "option":
              e = eb(a, d);
              break;
            case "select":
              a._wrapperState = {wasMultiple: !!d.multiple};
              e = objectAssign({}, d, {value: void 0});
              G("invalid", a);
              break;
            case "textarea":
              hb(a, d);
              e = gb(a, d);
              G("invalid", a);
              break;
            default:
              e = d;
          }
          vb(c, e);
          var h = e;
          for (f in h)
            if (h.hasOwnProperty(f)) {
              var k = h[f];
              f === "style" ? tb(a, k) : f === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && ob(a, k)) : f === "children" ? typeof k === "string" ? (c !== "textarea" || k !== "") && pb(a, k) : typeof k === "number" && pb(a, "" + k) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (ca.hasOwnProperty(f) ? k != null && f === "onScroll" && G("scroll", a) : k != null && qa(a, f, k, g));
            }
          switch (c) {
            case "input":
              Va(a);
              cb(a, d, false);
              break;
            case "textarea":
              Va(a);
              jb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + Sa(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              f = d.value;
              f != null ? fb(a, !!d.multiple, f, false) : d.defaultValue != null && fb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof e.onClick === "function" && (a.onclick = jf);
          }
          mf(c, d) && (b.flags |= 4);
        }
        b.ref !== null && (b.flags |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        Ei(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(y(166));
        c = dh(ch.current);
        dh(ah.current);
        rh(b) ? (d = b.stateNode, c = b.memoizedProps, d[wf] = b, d.nodeValue !== c && (b.flags |= 4)) : (d = (c.nodeType === 9 ? c : c.ownerDocument).createTextNode(d), d[wf] = b, b.stateNode = d);
      }
      return null;
    case 13:
      H(P);
      d = b.memoizedState;
      if ((b.flags & 64) !== 0)
        return b.lanes = c, b;
      d = d !== null;
      c = false;
      a === null ? b.memoizedProps.fallback !== void 0 && rh(b) : c = a.memoizedState !== null;
      if (d && !c && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (P.current & 1) !== 0)
          V === 0 && (V = 3);
        else {
          if (V === 0 || V === 3)
            V = 4;
          U === null || (Dg & 134217727) === 0 && (Hi & 134217727) === 0 || Ii(U, W);
        }
      if (d || c)
        b.flags |= 4;
      return null;
    case 4:
      return fh(), Ci(b), a === null && cf(b.stateNode.containerInfo), null;
    case 10:
      return rg(b), null;
    case 17:
      return Ff(b.type) && Gf(), null;
    case 19:
      H(P);
      d = b.memoizedState;
      if (d === null)
        return null;
      f = (b.flags & 64) !== 0;
      g = d.rendering;
      if (g === null)
        if (f)
          Fi(d, false);
        else {
          if (V !== 0 || a !== null && (a.flags & 64) !== 0)
            for (a = b.child; a !== null; ) {
              g = ih(a);
              if (g !== null) {
                b.flags |= 64;
                Fi(d, false);
                f = g.updateQueue;
                f !== null && (b.updateQueue = f, b.flags |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                d = c;
                for (c = b.child; c !== null; )
                  f = c, a = d, f.flags &= 2, f.nextEffect = null, f.firstEffect = null, f.lastEffect = null, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = a, f.child = null, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = a === null ? null : {lanes: a.lanes, firstContext: a.firstContext}), c = c.sibling;
                I(P, P.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          d.tail !== null && O() > Ji && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        }
      else {
        if (!f)
          if (a = ih(g), a !== null) {
            if (b.flags |= 64, f = true, c = a.updateQueue, c !== null && (b.updateQueue = c, b.flags |= 4), Fi(d, true), d.tail === null && d.tailMode === "hidden" && !g.alternate && !lh)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * O() - d.renderingStartTime > Ji && c !== 1073741824 && (b.flags |= 64, f = true, Fi(d, false), b.lanes = 33554432);
        d.isBackwards ? (g.sibling = b.child, b.child = g) : (c = d.last, c !== null ? c.sibling = g : b.child = g, d.last = g);
      }
      return d.tail !== null ? (c = d.tail, d.rendering = c, d.tail = c.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = O(), c.sibling = null, b = P.current, I(P, f ? b & 1 | 2 : b & 1), c) : null;
    case 23:
    case 24:
      return Ki(), a !== null && a.memoizedState !== null !== (b.memoizedState !== null) && d.mode !== "unstable-defer-without-hiding" && (b.flags |= 4), null;
  }
  throw Error(y(156, b.tag));
}
function Li(a) {
  switch (a.tag) {
    case 1:
      Ff(a.type) && Gf();
      var b = a.flags;
      return b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 3:
      fh();
      H(N);
      H(M);
      uh();
      b = a.flags;
      if ((b & 64) !== 0)
        throw Error(y(285));
      a.flags = b & -4097 | 64;
      return a;
    case 5:
      return hh(a), null;
    case 13:
      return H(P), b = a.flags, b & 4096 ? (a.flags = b & -4097 | 64, a) : null;
    case 19:
      return H(P), null;
    case 4:
      return fh(), null;
    case 10:
      return rg(a), null;
    case 23:
    case 24:
      return Ki(), null;
    default:
      return null;
  }
}
function Mi(a, b) {
  try {
    var c = "", d = b;
    do
      c += Qa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f) {
    e = "\nError generating stack: " + f.message + "\n" + f.stack;
  }
  return {value: a, source: b, stack: e};
}
function Ni(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Oi = typeof WeakMap === "function" ? WeakMap : Map;
function Pi(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  c.payload = {element: null};
  var d = b.value;
  c.callback = function() {
    Qi || (Qi = true, Ri = d);
    Ni(a, b);
  };
  return c;
}
function Si(a, b, c) {
  c = zg(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c.payload = function() {
      Ni(a, b);
      return d(e);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch === "function" && (c.callback = function() {
    typeof d !== "function" && (Ti === null ? Ti = new Set([this]) : Ti.add(this), Ni(a, b));
    var c2 = b.stack;
    this.componentDidCatch(b.value, {componentStack: c2 !== null ? c2 : ""});
  });
  return c;
}
var Ui = typeof WeakSet === "function" ? WeakSet : Set;
function Vi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c) {
        Wi(a, c);
      }
    else
      b.current = null;
}
function Xi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.flags & 256 && a !== null) {
        var c = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c : lg(b.type, c), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
      b.flags & 256 && qf(b.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function Yi(a, b, c) {
  switch (c.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          if ((a.tag & 3) === 3) {
            var d = a.create;
            a.destroy = d();
          }
          a = a.next;
        } while (a !== b);
      }
      b = c.updateQueue;
      b = b !== null ? b.lastEffect : null;
      if (b !== null) {
        a = b = b.next;
        do {
          var e = a;
          d = e.next;
          e = e.tag;
          (e & 4) !== 0 && (e & 1) !== 0 && (Zi(c, a), $i(c, a));
          a = d;
        } while (a !== b);
      }
      return;
    case 1:
      a = c.stateNode;
      c.flags & 4 && (b === null ? a.componentDidMount() : (d = c.elementType === c.type ? b.memoizedProps : lg(c.type, b.memoizedProps), a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate)));
      b = c.updateQueue;
      b !== null && Eg(c, b, a);
      return;
    case 3:
      b = c.updateQueue;
      if (b !== null) {
        a = null;
        if (c.child !== null)
          switch (c.child.tag) {
            case 5:
              a = c.child.stateNode;
              break;
            case 1:
              a = c.child.stateNode;
          }
        Eg(c, b, a);
      }
      return;
    case 5:
      a = c.stateNode;
      b === null && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c.memoizedState === null && (c = c.alternate, c !== null && (c = c.memoizedState, c !== null && (c = c.dehydrated, c !== null && Cc(c))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function aj(a, b) {
  for (var c = a; ; ) {
    if (c.tag === 5) {
      var d = c.stateNode;
      if (b)
        d = d.style, typeof d.setProperty === "function" ? d.setProperty("display", "none", "important") : d.display = "none";
      else {
        d = c.stateNode;
        var e = c.memoizedProps.style;
        e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null;
        d.style.display = sb("display", e);
      }
    } else if (c.tag === 6)
      c.stateNode.nodeValue = b ? "" : c.memoizedProps;
    else if ((c.tag !== 23 && c.tag !== 24 || c.memoizedState === null || c === a) && c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === a)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function bj(a, b) {
  if (Mf && typeof Mf.onCommitFiberUnmount === "function")
    try {
      Mf.onCommitFiberUnmount(Lf, b);
    } catch (f) {
    }
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var c = a = a.next;
        do {
          var d = c, e = d.destroy;
          d = d.tag;
          if (e !== void 0)
            if ((d & 4) !== 0)
              Zi(b, c);
            else {
              d = b;
              try {
                e();
              } catch (f) {
                Wi(d, f);
              }
            }
          c = c.next;
        } while (c !== a);
      }
      break;
    case 1:
      Vi(b);
      a = b.stateNode;
      if (typeof a.componentWillUnmount === "function")
        try {
          a.props = b.memoizedProps, a.state = b.memoizedState, a.componentWillUnmount();
        } catch (f) {
          Wi(b, f);
        }
      break;
    case 5:
      Vi(b);
      break;
    case 4:
      cj(a, b);
  }
}
function dj(a) {
  a.alternate = null;
  a.child = null;
  a.dependencies = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.return = null;
  a.updateQueue = null;
}
function ej(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function fj(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (ej(b))
        break a;
      b = b.return;
    }
    throw Error(y(160));
  }
  var c = b;
  b = c.stateNode;
  switch (c.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(y(161));
  }
  c.flags & 16 && (pb(b, ""), c.flags &= -17);
  a:
    b:
      for (c = a; ; ) {
        for (; c.sibling === null; ) {
          if (c.return === null || ej(c.return)) {
            c = null;
            break a;
          }
          c = c.return;
        }
        c.sibling.return = c.return;
        for (c = c.sibling; c.tag !== 5 && c.tag !== 6 && c.tag !== 18; ) {
          if (c.flags & 2)
            continue b;
          if (c.child === null || c.tag === 4)
            continue b;
          else
            c.child.return = c, c = c.child;
        }
        if (!(c.flags & 2)) {
          c = c.stateNode;
          break a;
        }
      }
  d ? gj(a, c, b) : hj(a, c, b);
}
function gj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.nodeType === 8 ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (c.nodeType === 8 ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, c !== null && c !== void 0 || b.onclick !== null || (b.onclick = jf));
  else if (d !== 4 && (a = a.child, a !== null))
    for (gj(a, b, c), a = a.sibling; a !== null; )
      gj(a, b, c), a = a.sibling;
}
function hj(a, b, c) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (hj(a, b, c), a = a.sibling; a !== null; )
      hj(a, b, c), a = a.sibling;
}
function cj(a, b) {
  for (var c = b, d = false, e, f; ; ) {
    if (!d) {
      d = c.return;
      a:
        for (; ; ) {
          if (d === null)
            throw Error(y(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f = false;
              break a;
            case 3:
              e = e.containerInfo;
              f = true;
              break a;
            case 4:
              e = e.containerInfo;
              f = true;
              break a;
          }
          d = d.return;
        }
      d = true;
    }
    if (c.tag === 5 || c.tag === 6) {
      a:
        for (var g = a, h = c, k = h; ; )
          if (bj(g, k), k.child !== null && k.tag !== 4)
            k.child.return = k, k = k.child;
          else {
            if (k === h)
              break a;
            for (; k.sibling === null; ) {
              if (k.return === null || k.return === h)
                break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
      f ? (g = e, h = c.stateNode, g.nodeType === 8 ? g.parentNode.removeChild(h) : g.removeChild(h)) : e.removeChild(c.stateNode);
    } else if (c.tag === 4) {
      if (c.child !== null) {
        e = c.stateNode.containerInfo;
        f = true;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (bj(a, c), c.child !== null) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; c.sibling === null; ) {
      if (c.return === null || c.return === b)
        return;
      c = c.return;
      c.tag === 4 && (d = false);
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
}
function ij(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var c = b.updateQueue;
      c = c !== null ? c.lastEffect : null;
      if (c !== null) {
        var d = c = c.next;
        do
          (d.tag & 3) === 3 && (a = d.destroy, d.destroy = void 0, a !== void 0 && a()), d = d.next;
        while (d !== c);
      }
      return;
    case 1:
      return;
    case 5:
      c = b.stateNode;
      if (c != null) {
        d = b.memoizedProps;
        var e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;
        if (f !== null) {
          c[xf] = d;
          a === "input" && d.type === "radio" && d.name != null && $a(c, d);
          wb(a, e);
          b = wb(a, d);
          for (e = 0; e < f.length; e += 2) {
            var g = f[e], h = f[e + 1];
            g === "style" ? tb(c, h) : g === "dangerouslySetInnerHTML" ? ob(c, h) : g === "children" ? pb(c, h) : qa(c, g, h, b);
          }
          switch (a) {
            case "input":
              ab(c, d);
              break;
            case "textarea":
              ib(c, d);
              break;
            case "select":
              a = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, f = d.value, f != null ? fb(c, !!d.multiple, f, false) : a !== !!d.multiple && (d.defaultValue != null ? fb(c, !!d.multiple, d.defaultValue, true) : fb(c, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(y(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      c = b.stateNode;
      c.hydrate && (c.hydrate = false, Cc(c.containerInfo));
      return;
    case 12:
      return;
    case 13:
      b.memoizedState !== null && (jj = O(), aj(b.child, true));
      kj(b);
      return;
    case 19:
      kj(b);
      return;
    case 17:
      return;
    case 23:
    case 24:
      aj(b, b.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function kj(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c = a.stateNode;
    c === null && (c = a.stateNode = new Ui());
    b.forEach(function(b2) {
      var d = lj.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function mj(a, b) {
  return a !== null && (a = a.memoizedState, a === null || a.dehydrated !== null) ? (b = b.memoizedState, b !== null && b.dehydrated === null) : false;
}
var nj = Math.ceil;
var oj = ra.ReactCurrentDispatcher;
var pj = ra.ReactCurrentOwner;
var X = 0;
var U = null;
var Y = null;
var W = 0;
var qj = 0;
var rj = Bf(0);
var V = 0;
var sj = null;
var tj = 0;
var Dg = 0;
var Hi = 0;
var uj = 0;
var vj = null;
var jj = 0;
var Ji = Infinity;
function wj() {
  Ji = O() + 500;
}
var Z = null;
var Qi = false;
var Ri = null;
var Ti = null;
var xj = false;
var yj = null;
var zj = 90;
var Aj = [];
var Bj = [];
var Cj = null;
var Dj = 0;
var Ej = null;
var Fj = -1;
var Gj = 0;
var Hj = 0;
var Ij = null;
var Jj = false;
function Hg() {
  return (X & 48) !== 0 ? O() : Fj !== -1 ? Fj : Fj = O();
}
function Ig(a) {
  a = a.mode;
  if ((a & 2) === 0)
    return 1;
  if ((a & 4) === 0)
    return eg() === 99 ? 1 : 2;
  Gj === 0 && (Gj = tj);
  if (kg.transition !== 0) {
    Hj !== 0 && (Hj = vj !== null ? vj.pendingLanes : 0);
    a = Gj;
    var b = 4186112 & ~Hj;
    b &= -b;
    b === 0 && (a = 4186112 & ~a, b = a & -a, b === 0 && (b = 8192));
    return b;
  }
  a = eg();
  (X & 4) !== 0 && a === 98 ? a = Xc(12, Gj) : (a = Sc(a), a = Xc(a, Gj));
  return a;
}
function Jg(a, b, c) {
  if (50 < Dj)
    throw Dj = 0, Ej = null, Error(y(185));
  a = Kj(a, b);
  if (a === null)
    return null;
  $c(a, b, c);
  a === U && (Hi |= b, V === 4 && Ii(a, W));
  var d = eg();
  b === 1 ? (X & 8) !== 0 && (X & 48) === 0 ? Lj(a) : (Mj(a, c), X === 0 && (wj(), ig())) : ((X & 4) === 0 || d !== 98 && d !== 99 || (Cj === null ? Cj = new Set([a]) : Cj.add(a)), Mj(a, c));
  vj = a;
}
function Kj(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  c !== null && (c.lanes |= b);
  c = a;
  for (a = a.return; a !== null; )
    a.childLanes |= b, c = a.alternate, c !== null && (c.childLanes |= b), c = a, a = a.return;
  return c.tag === 3 ? c.stateNode : null;
}
function Mj(a, b) {
  for (var c = a.callbackNode, d = a.suspendedLanes, e = a.pingedLanes, f = a.expirationTimes, g = a.pendingLanes; 0 < g; ) {
    var h = 31 - Vc(g), k = 1 << h, l = f[h];
    if (l === -1) {
      if ((k & d) === 0 || (k & e) !== 0) {
        l = b;
        Rc(k);
        var n = F;
        f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
      }
    } else
      l <= b && (a.expiredLanes |= k);
    g &= ~k;
  }
  d = Uc(a, a === U ? W : 0);
  b = F;
  if (d === 0)
    c !== null && (c !== Zf && Pf(c), a.callbackNode = null, a.callbackPriority = 0);
  else {
    if (c !== null) {
      if (a.callbackPriority === b)
        return;
      c !== Zf && Pf(c);
    }
    b === 15 ? (c = Lj.bind(null, a), ag === null ? (ag = [c], bg = Of(Uf, jg)) : ag.push(c), c = Zf) : b === 14 ? c = hg(99, Lj.bind(null, a)) : (c = Tc(b), c = hg(c, Nj.bind(null, a)));
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Nj(a) {
  Fj = -1;
  Hj = Gj = 0;
  if ((X & 48) !== 0)
    throw Error(y(327));
  var b = a.callbackNode;
  if (Oj() && a.callbackNode !== b)
    return null;
  var c = Uc(a, a === U ? W : 0);
  if (c === 0)
    return null;
  var d = c;
  var e = X;
  X |= 16;
  var f = Pj();
  if (U !== a || W !== d)
    wj(), Qj(a, d);
  do
    try {
      Rj();
      break;
    } catch (h) {
      Sj(a, h);
    }
  while (1);
  qg();
  oj.current = f;
  X = e;
  Y !== null ? d = 0 : (U = null, W = 0, d = V);
  if ((tj & Hi) !== 0)
    Qj(a, 0);
  else if (d !== 0) {
    d === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), c = Wc(a), c !== 0 && (d = Tj(a, c)));
    if (d === 1)
      throw b = sj, Qj(a, 0), Ii(a, c), Mj(a, O()), b;
    a.finishedWork = a.current.alternate;
    a.finishedLanes = c;
    switch (d) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        Uj(a);
        break;
      case 3:
        Ii(a, c);
        if ((c & 62914560) === c && (d = jj + 500 - O(), 10 < d)) {
          if (Uc(a, 0) !== 0)
            break;
          e = a.suspendedLanes;
          if ((e & c) !== c) {
            Hg();
            a.pingedLanes |= a.suspendedLanes & e;
            break;
          }
          a.timeoutHandle = of(Uj.bind(null, a), d);
          break;
        }
        Uj(a);
        break;
      case 4:
        Ii(a, c);
        if ((c & 4186112) === c)
          break;
        d = a.eventTimes;
        for (e = -1; 0 < c; ) {
          var g = 31 - Vc(c);
          f = 1 << g;
          g = d[g];
          g > e && (e = g);
          c &= ~f;
        }
        c = e;
        c = O() - c;
        c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * nj(c / 1960)) - c;
        if (10 < c) {
          a.timeoutHandle = of(Uj.bind(null, a), c);
          break;
        }
        Uj(a);
        break;
      case 5:
        Uj(a);
        break;
      default:
        throw Error(y(329));
    }
  }
  Mj(a, O());
  return a.callbackNode === b ? Nj.bind(null, a) : null;
}
function Ii(a, b) {
  b &= ~uj;
  b &= ~Hi;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - Vc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Lj(a) {
  if ((X & 48) !== 0)
    throw Error(y(327));
  Oj();
  if (a === U && (a.expiredLanes & W) !== 0) {
    var b = W;
    var c = Tj(a, b);
    (tj & Hi) !== 0 && (b = Uc(a, b), c = Tj(a, b));
  } else
    b = Uc(a, 0), c = Tj(a, b);
  a.tag !== 0 && c === 2 && (X |= 64, a.hydrate && (a.hydrate = false, qf(a.containerInfo)), b = Wc(a), b !== 0 && (c = Tj(a, b)));
  if (c === 1)
    throw c = sj, Qj(a, 0), Ii(a, b), Mj(a, O()), c;
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Uj(a);
  Mj(a, O());
  return null;
}
function Vj() {
  if (Cj !== null) {
    var a = Cj;
    Cj = null;
    a.forEach(function(a2) {
      a2.expiredLanes |= 24 & a2.pendingLanes;
      Mj(a2, O());
    });
  }
  ig();
}
function Wj(a, b) {
  var c = X;
  X |= 1;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function Xj(a, b) {
  var c = X;
  X &= -2;
  X |= 8;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
}
function ni(a, b) {
  I(rj, qj);
  qj |= b;
  tj |= b;
}
function Ki() {
  qj = rj.current;
  H(rj);
}
function Qj(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  c !== -1 && (a.timeoutHandle = -1, pf(c));
  if (Y !== null)
    for (c = Y.return; c !== null; ) {
      var d = c;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Gf();
          break;
        case 3:
          fh();
          H(N);
          H(M);
          uh();
          break;
        case 5:
          hh(d);
          break;
        case 4:
          fh();
          break;
        case 13:
          H(P);
          break;
        case 19:
          H(P);
          break;
        case 10:
          rg(d);
          break;
        case 23:
        case 24:
          Ki();
      }
      c = c.return;
    }
  U = a;
  Y = Tg(a.current, null);
  W = qj = tj = b;
  V = 0;
  sj = null;
  uj = Hi = Dg = 0;
}
function Sj(a, b) {
  do {
    var c = Y;
    try {
      qg();
      vh.current = Gh;
      if (yh) {
        for (var d = R.memoizedState; d !== null; ) {
          var e = d.queue;
          e !== null && (e.pending = null);
          d = d.next;
        }
        yh = false;
      }
      xh = 0;
      T = S = R = null;
      zh = false;
      pj.current = null;
      if (c === null || c.return === null) {
        V = 1;
        sj = b;
        Y = null;
        break;
      }
      a: {
        var f = a, g = c.return, h = c, k = b;
        b = W;
        h.flags |= 2048;
        h.firstEffect = h.lastEffect = null;
        if (k !== null && typeof k === "object" && typeof k.then === "function") {
          var l = k;
          if ((h.mode & 2) === 0) {
            var n = h.alternate;
            n ? (h.updateQueue = n.updateQueue, h.memoizedState = n.memoizedState, h.lanes = n.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var A = (P.current & 1) !== 0, p = g;
          do {
            var C;
            if (C = p.tag === 13) {
              var x = p.memoizedState;
              if (x !== null)
                C = x.dehydrated !== null ? true : false;
              else {
                var w = p.memoizedProps;
                C = w.fallback === void 0 ? false : w.unstable_avoidThisFallback !== true ? true : A ? false : true;
              }
            }
            if (C) {
              var z = p.updateQueue;
              if (z === null) {
                var u = new Set();
                u.add(l);
                p.updateQueue = u;
              } else
                z.add(l);
              if ((p.mode & 2) === 0) {
                p.flags |= 64;
                h.flags |= 16384;
                h.flags &= -2981;
                if (h.tag === 1)
                  if (h.alternate === null)
                    h.tag = 17;
                  else {
                    var t = zg(-1, 1);
                    t.tag = 2;
                    Ag(h, t);
                  }
                h.lanes |= 1;
                break a;
              }
              k = void 0;
              h = b;
              var q = f.pingCache;
              q === null ? (q = f.pingCache = new Oi(), k = new Set(), q.set(l, k)) : (k = q.get(l), k === void 0 && (k = new Set(), q.set(l, k)));
              if (!k.has(h)) {
                k.add(h);
                var v = Yj.bind(null, f, l, h);
                l.then(v, v);
              }
              p.flags |= 4096;
              p.lanes = b;
              break a;
            }
            p = p.return;
          } while (p !== null);
          k = Error((Ra(h.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");
        }
        V !== 5 && (V = 2);
        k = Mi(k, h);
        p = g;
        do {
          switch (p.tag) {
            case 3:
              f = k;
              p.flags |= 4096;
              b &= -b;
              p.lanes |= b;
              var J = Pi(p, f, b);
              Bg(p, J);
              break a;
            case 1:
              f = k;
              var K = p.type, Q = p.stateNode;
              if ((p.flags & 64) === 0 && (typeof K.getDerivedStateFromError === "function" || Q !== null && typeof Q.componentDidCatch === "function" && (Ti === null || !Ti.has(Q)))) {
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var L = Si(p, f, b);
                Bg(p, L);
                break a;
              }
          }
          p = p.return;
        } while (p !== null);
      }
      Zj(c);
    } catch (va) {
      b = va;
      Y === c && c !== null && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Pj() {
  var a = oj.current;
  oj.current = Gh;
  return a === null ? Gh : a;
}
function Tj(a, b) {
  var c = X;
  X |= 16;
  var d = Pj();
  U === a && W === b || Qj(a, b);
  do
    try {
      ak();
      break;
    } catch (e) {
      Sj(a, e);
    }
  while (1);
  qg();
  X = c;
  oj.current = d;
  if (Y !== null)
    throw Error(y(261));
  U = null;
  W = 0;
  return V;
}
function ak() {
  for (; Y !== null; )
    bk(Y);
}
function Rj() {
  for (; Y !== null && !Qf(); )
    bk(Y);
}
function bk(a) {
  var b = ck(a.alternate, a, qj);
  a.memoizedProps = a.pendingProps;
  b === null ? Zj(a) : Y = b;
  pj.current = null;
}
function Zj(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if ((b.flags & 2048) === 0) {
      c = Gi(c, b, qj);
      if (c !== null) {
        Y = c;
        return;
      }
      c = b;
      if (c.tag !== 24 && c.tag !== 23 || c.memoizedState === null || (qj & 1073741824) !== 0 || (c.mode & 4) === 0) {
        for (var d = 0, e = c.child; e !== null; )
          d |= e.lanes | e.childLanes, e = e.sibling;
        c.childLanes = d;
      }
      a !== null && (a.flags & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = b.firstEffect), b.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = b.firstEffect), a.lastEffect = b.lastEffect), 1 < b.flags && (a.lastEffect !== null ? a.lastEffect.nextEffect = b : a.firstEffect = b, a.lastEffect = b));
    } else {
      c = Li(b);
      if (c !== null) {
        c.flags &= 2047;
        Y = c;
        return;
      }
      a !== null && (a.firstEffect = a.lastEffect = null, a.flags |= 2048);
    }
    b = b.sibling;
    if (b !== null) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (b !== null);
  V === 0 && (V = 5);
}
function Uj(a) {
  var b = eg();
  gg(99, dk.bind(null, a, b));
  return null;
}
function dk(a, b) {
  do
    Oj();
  while (yj !== null);
  if ((X & 48) !== 0)
    throw Error(y(327));
  var c = a.finishedWork;
  if (c === null)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(y(177));
  a.callbackNode = null;
  var d = c.lanes | c.childLanes, e = d, f = a.pendingLanes & ~e;
  a.pendingLanes = e;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= e;
  a.mutableReadLanes &= e;
  a.entangledLanes &= e;
  e = a.entanglements;
  for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
    var k = 31 - Vc(f), l = 1 << k;
    e[k] = 0;
    g[k] = -1;
    h[k] = -1;
    f &= ~l;
  }
  Cj !== null && (d & 24) === 0 && Cj.has(a) && Cj.delete(a);
  a === U && (Y = U = null, W = 0);
  1 < c.flags ? c.lastEffect !== null ? (c.lastEffect.nextEffect = c, d = c.firstEffect) : d = c : d = c.firstEffect;
  if (d !== null) {
    e = X;
    X |= 32;
    pj.current = null;
    kf = fd;
    g = Ne();
    if (Oe(g)) {
      if ("selectionStart" in g)
        h = {start: g.selectionStart, end: g.selectionEnd};
      else
        a:
          if (h = (h = g.ownerDocument) && h.defaultView || window, (l = h.getSelection && h.getSelection()) && l.rangeCount !== 0) {
            h = l.anchorNode;
            f = l.anchorOffset;
            k = l.focusNode;
            l = l.focusOffset;
            try {
              h.nodeType, k.nodeType;
            } catch (va) {
              h = null;
              break a;
            }
            var n = 0, A = -1, p = -1, C = 0, x = 0, w = g, z = null;
            b:
              for (; ; ) {
                for (var u; ; ) {
                  w !== h || f !== 0 && w.nodeType !== 3 || (A = n + f);
                  w !== k || l !== 0 && w.nodeType !== 3 || (p = n + l);
                  w.nodeType === 3 && (n += w.nodeValue.length);
                  if ((u = w.firstChild) === null)
                    break;
                  z = w;
                  w = u;
                }
                for (; ; ) {
                  if (w === g)
                    break b;
                  z === h && ++C === f && (A = n);
                  z === k && ++x === l && (p = n);
                  if ((u = w.nextSibling) !== null)
                    break;
                  w = z;
                  z = w.parentNode;
                }
                w = u;
              }
            h = A === -1 || p === -1 ? null : {start: A, end: p};
          } else
            h = null;
      h = h || {start: 0, end: 0};
    } else
      h = null;
    lf = {focusedElem: g, selectionRange: h};
    fd = false;
    Ij = null;
    Jj = false;
    Z = d;
    do
      try {
        ek();
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Ij = null;
    Z = d;
    do
      try {
        for (g = a; Z !== null; ) {
          var t = Z.flags;
          t & 16 && pb(Z.stateNode, "");
          if (t & 128) {
            var q = Z.alternate;
            if (q !== null) {
              var v = q.ref;
              v !== null && (typeof v === "function" ? v(null) : v.current = null);
            }
          }
          switch (t & 1038) {
            case 2:
              fj(Z);
              Z.flags &= -3;
              break;
            case 6:
              fj(Z);
              Z.flags &= -3;
              ij(Z.alternate, Z);
              break;
            case 1024:
              Z.flags &= -1025;
              break;
            case 1028:
              Z.flags &= -1025;
              ij(Z.alternate, Z);
              break;
            case 4:
              ij(Z.alternate, Z);
              break;
            case 8:
              h = Z;
              cj(g, h);
              var J = h.alternate;
              dj(h);
              J !== null && dj(J);
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    v = lf;
    q = Ne();
    t = v.focusedElem;
    g = v.selectionRange;
    if (q !== t && t && t.ownerDocument && Me(t.ownerDocument.documentElement, t)) {
      g !== null && Oe(t) && (q = g.start, v = g.end, v === void 0 && (v = q), "selectionStart" in t ? (t.selectionStart = q, t.selectionEnd = Math.min(v, t.value.length)) : (v = (q = t.ownerDocument || document) && q.defaultView || window, v.getSelection && (v = v.getSelection(), h = t.textContent.length, J = Math.min(g.start, h), g = g.end === void 0 ? J : Math.min(g.end, h), !v.extend && J > g && (h = g, g = J, J = h), h = Le(t, J), f = Le(t, g), h && f && (v.rangeCount !== 1 || v.anchorNode !== h.node || v.anchorOffset !== h.offset || v.focusNode !== f.node || v.focusOffset !== f.offset) && (q = q.createRange(), q.setStart(h.node, h.offset), v.removeAllRanges(), J > g ? (v.addRange(q), v.extend(f.node, f.offset)) : (q.setEnd(f.node, f.offset), v.addRange(q))))));
      q = [];
      for (v = t; v = v.parentNode; )
        v.nodeType === 1 && q.push({element: v, left: v.scrollLeft, top: v.scrollTop});
      typeof t.focus === "function" && t.focus();
      for (t = 0; t < q.length; t++)
        v = q[t], v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
    }
    fd = !!kf;
    lf = kf = null;
    a.current = c;
    Z = d;
    do
      try {
        for (t = a; Z !== null; ) {
          var K = Z.flags;
          K & 36 && Yi(t, Z.alternate, Z);
          if (K & 128) {
            q = void 0;
            var Q = Z.ref;
            if (Q !== null) {
              var L = Z.stateNode;
              switch (Z.tag) {
                case 5:
                  q = L;
                  break;
                default:
                  q = L;
              }
              typeof Q === "function" ? Q(q) : Q.current = q;
            }
          }
          Z = Z.nextEffect;
        }
      } catch (va) {
        if (Z === null)
          throw Error(y(330));
        Wi(Z, va);
        Z = Z.nextEffect;
      }
    while (Z !== null);
    Z = null;
    $f();
    X = e;
  } else
    a.current = c;
  if (xj)
    xj = false, yj = a, zj = b;
  else
    for (Z = d; Z !== null; )
      b = Z.nextEffect, Z.nextEffect = null, Z.flags & 8 && (K = Z, K.sibling = null, K.stateNode = null), Z = b;
  d = a.pendingLanes;
  d === 0 && (Ti = null);
  d === 1 ? a === Ej ? Dj++ : (Dj = 0, Ej = a) : Dj = 0;
  c = c.stateNode;
  if (Mf && typeof Mf.onCommitFiberRoot === "function")
    try {
      Mf.onCommitFiberRoot(Lf, c, void 0, (c.current.flags & 64) === 64);
    } catch (va) {
    }
  Mj(a, O());
  if (Qi)
    throw Qi = false, a = Ri, Ri = null, a;
  if ((X & 8) !== 0)
    return null;
  ig();
  return null;
}
function ek() {
  for (; Z !== null; ) {
    var a = Z.alternate;
    Jj || Ij === null || ((Z.flags & 8) !== 0 ? dc(Z, Ij) && (Jj = true) : Z.tag === 13 && mj(a, Z) && dc(Z, Ij) && (Jj = true));
    var b = Z.flags;
    (b & 256) !== 0 && Xi(a, Z);
    (b & 512) === 0 || xj || (xj = true, hg(97, function() {
      Oj();
      return null;
    }));
    Z = Z.nextEffect;
  }
}
function Oj() {
  if (zj !== 90) {
    var a = 97 < zj ? 97 : zj;
    zj = 90;
    return gg(a, fk);
  }
  return false;
}
function $i(a, b) {
  Aj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function Zi(a, b) {
  Bj.push(b, a);
  xj || (xj = true, hg(97, function() {
    Oj();
    return null;
  }));
}
function fk() {
  if (yj === null)
    return false;
  var a = yj;
  yj = null;
  if ((X & 48) !== 0)
    throw Error(y(331));
  var b = X;
  X |= 32;
  var c = Bj;
  Bj = [];
  for (var d = 0; d < c.length; d += 2) {
    var e = c[d], f = c[d + 1], g = e.destroy;
    e.destroy = void 0;
    if (typeof g === "function")
      try {
        g();
      } catch (k) {
        if (f === null)
          throw Error(y(330));
        Wi(f, k);
      }
  }
  c = Aj;
  Aj = [];
  for (d = 0; d < c.length; d += 2) {
    e = c[d];
    f = c[d + 1];
    try {
      var h = e.create;
      e.destroy = h();
    } catch (k) {
      if (f === null)
        throw Error(y(330));
      Wi(f, k);
    }
  }
  for (h = a.current.firstEffect; h !== null; )
    a = h.nextEffect, h.nextEffect = null, h.flags & 8 && (h.sibling = null, h.stateNode = null), h = a;
  X = b;
  ig();
  return true;
}
function gk(a, b, c) {
  b = Mi(c, b);
  b = Pi(a, b, 1);
  Ag(a, b);
  b = Hg();
  a = Kj(a, 1);
  a !== null && ($c(a, 1, b), Mj(a, b));
}
function Wi(a, b) {
  if (a.tag === 3)
    gk(a, a, b);
  else
    for (var c = a.return; c !== null; ) {
      if (c.tag === 3) {
        gk(c, a, b);
        break;
      } else if (c.tag === 1) {
        var d = c.stateNode;
        if (typeof c.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d))) {
          a = Mi(b, a);
          var e = Si(c, a, 1);
          Ag(c, e);
          e = Hg();
          c = Kj(c, 1);
          if (c !== null)
            $c(c, 1, e), Mj(c, e);
          else if (typeof d.componentDidCatch === "function" && (Ti === null || !Ti.has(d)))
            try {
              d.componentDidCatch(b, a);
            } catch (f) {
            }
          break;
        }
      }
      c = c.return;
    }
}
function Yj(a, b, c) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  b = Hg();
  a.pingedLanes |= a.suspendedLanes & c;
  U === a && (W & c) === c && (V === 4 || V === 3 && (W & 62914560) === W && 500 > O() - jj ? Qj(a, 0) : uj |= c);
  Mj(a, b);
}
function lj(a, b) {
  var c = a.stateNode;
  c !== null && c.delete(b);
  b = 0;
  b === 0 && (b = a.mode, (b & 2) === 0 ? b = 1 : (b & 4) === 0 ? b = eg() === 99 ? 1 : 2 : (Gj === 0 && (Gj = tj), b = Yc(62914560 & ~Gj), b === 0 && (b = 4194304)));
  c = Hg();
  a = Kj(a, b);
  a !== null && ($c(a, b, c), Mj(a, c));
}
var ck;
ck = function(a, b, c) {
  var d = b.lanes;
  if (a !== null)
    if (a.memoizedProps !== b.pendingProps || N.current)
      ug = true;
    else if ((c & d) !== 0)
      ug = (a.flags & 16384) !== 0 ? true : false;
    else {
      ug = false;
      switch (b.tag) {
        case 3:
          ri(b);
          sh();
          break;
        case 5:
          gh(b);
          break;
        case 1:
          Ff(b.type) && Jf(b);
          break;
        case 4:
          eh(b, b.stateNode.containerInfo);
          break;
        case 10:
          d = b.memoizedProps.value;
          var e = b.type._context;
          I(mg, e._currentValue);
          e._currentValue = d;
          break;
        case 13:
          if (b.memoizedState !== null) {
            if ((c & b.child.childLanes) !== 0)
              return ti(a, b, c);
            I(P, P.current & 1);
            b = hi(a, b, c);
            return b !== null ? b.sibling : null;
          }
          I(P, P.current & 1);
          break;
        case 19:
          d = (c & b.childLanes) !== 0;
          if ((a.flags & 64) !== 0) {
            if (d)
              return Ai(a, b, c);
            b.flags |= 64;
          }
          e = b.memoizedState;
          e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null);
          I(P, P.current);
          if (d)
            break;
          else
            return null;
        case 23:
        case 24:
          return b.lanes = 0, mi(a, b, c);
      }
      return hi(a, b, c);
    }
  else
    ug = false;
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
      a = b.pendingProps;
      e = Ef(b, M.current);
      tg(b, c);
      e = Ch(null, b, d, a, e, c);
      b.flags |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (Ff(d)) {
          var f = true;
          Jf(b);
        } else
          f = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        xg(b);
        var g = d.getDerivedStateFromProps;
        typeof g === "function" && Gg(b, d, g, a);
        e.updater = Kg;
        b.stateNode = e;
        e._reactInternals = b;
        Og(b, d, a, c);
        b = qi(null, b, d, true, f, c);
      } else
        b.tag = 0, fi(null, b, e, c), b = b.child;
      return b;
    case 16:
      e = b.elementType;
      a: {
        a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        f = e._init;
        e = f(e._payload);
        b.type = e;
        f = b.tag = hk(e);
        a = lg(e, a);
        switch (f) {
          case 0:
            b = li(null, b, e, a, c);
            break a;
          case 1:
            b = pi(null, b, e, a, c);
            break a;
          case 11:
            b = gi(null, b, e, a, c);
            break a;
          case 14:
            b = ii(null, b, e, lg(e.type, a), d, c);
            break a;
        }
        throw Error(y(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), li(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), pi(a, b, d, e, c);
    case 3:
      ri(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(y(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      yg(a, b);
      Cg(b, d, null, c);
      d = b.memoizedState.element;
      if (d === e)
        sh(), b = hi(a, b, c);
      else {
        e = b.stateNode;
        if (f = e.hydrate)
          kh = rf(b.stateNode.containerInfo.firstChild), jh = b, f = lh = true;
        if (f) {
          a = e.mutableSourceEagerHydrationData;
          if (a != null)
            for (e = 0; e < a.length; e += 2)
              f = a[e], f._workInProgressVersionPrimary = a[e + 1], th.push(f);
          c = Zg(b, null, d, c);
          for (b.child = c; c; )
            c.flags = c.flags & -3 | 1024, c = c.sibling;
        } else
          fi(a, b, d, c), sh();
        b = b.child;
      }
      return b;
    case 5:
      return gh(b), a === null && ph(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, nf(d, e) ? g = null : f !== null && nf(d, f) && (b.flags |= 16), oi(a, b), fi(a, b, g, c), b.child;
    case 6:
      return a === null && ph(b), null;
    case 13:
      return ti(a, b, c);
    case 4:
      return eh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Yg(b, null, d, c) : fi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), gi(a, b, d, e, c);
    case 7:
      return fi(a, b, b.pendingProps, c), b.child;
    case 8:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return fi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(mg, h._currentValue);
        h._currentValue = f;
        if (g !== null)
          if (h = g.value, f = He(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
            if (g.children === e.children && !N.current) {
              b = hi(a, b, c);
              break a;
            }
          } else
            for (h = b.child, h !== null && (h.return = b); h !== null; ) {
              var k = h.dependencies;
              if (k !== null) {
                g = h.child;
                for (var l = k.firstContext; l !== null; ) {
                  if (l.context === d && (l.observedBits & f) !== 0) {
                    h.tag === 1 && (l = zg(-1, c & -c), l.tag = 2, Ag(h, l));
                    h.lanes |= c;
                    l = h.alternate;
                    l !== null && (l.lanes |= c);
                    sg(h.return, c);
                    k.lanes |= c;
                    break;
                  }
                  l = l.next;
                }
              } else
                g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
              if (g !== null)
                g.return = h;
              else
                for (g = h; g !== null; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  h = g.sibling;
                  if (h !== null) {
                    h.return = g.return;
                    g = h;
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        fi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, tg(b, c), e = vg(e, f.unstable_observedBits), d = d(e), b.flags |= 1, fi(a, b, d, c), b.child;
    case 14:
      return e = b.type, f = lg(e, b.pendingProps), f = lg(e.type, f), ii(a, b, e, f, d, c);
    case 15:
      return ki(a, b, b.type, b.pendingProps, d, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : lg(d, e), a !== null && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, Ff(d) ? (a = true, Jf(b)) : a = false, tg(b, c), Mg(b, d, e), Og(b, d, e, c), qi(null, b, d, true, a, c);
    case 19:
      return Ai(a, b, c);
    case 23:
      return mi(a, b, c);
    case 24:
      return mi(a, b, c);
  }
  throw Error(y(156, b.tag));
};
function ik(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.flags = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function nh(a, b, c, d) {
  return new ik(a, b, c, d);
}
function ji(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function hk(a) {
  if (typeof a === "function")
    return ji(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === Aa)
      return 11;
    if (a === Da)
      return 14;
  }
  return 2;
}
function Tg(a, b) {
  var c = a.alternate;
  c === null ? (c = nh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = b === null ? null : {lanes: b.lanes, firstContext: b.firstContext};
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Vg(a, b, c, d, e, f) {
  var g = 2;
  d = a;
  if (typeof a === "function")
    ji(a) && (g = 1);
  else if (typeof a === "string")
    g = 5;
  else
    a:
      switch (a) {
        case ua:
          return Xg(c.children, e, f, b);
        case Ha:
          g = 8;
          e |= 16;
          break;
        case wa:
          g = 8;
          e |= 1;
          break;
        case xa:
          return a = nh(12, c, b, e | 8), a.elementType = xa, a.type = xa, a.lanes = f, a;
        case Ba:
          return a = nh(13, c, b, e), a.type = Ba, a.elementType = Ba, a.lanes = f, a;
        case Ca:
          return a = nh(19, c, b, e), a.elementType = Ca, a.lanes = f, a;
        case Ia:
          return vi(c, e, f, b);
        case Ja:
          return a = nh(24, c, b, e), a.elementType = Ja, a.lanes = f, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case ya:
                g = 10;
                break a;
              case za:
                g = 9;
                break a;
              case Aa:
                g = 11;
                break a;
              case Da:
                g = 14;
                break a;
              case Ea:
                g = 16;
                d = null;
                break a;
              case Fa:
                g = 22;
                break a;
            }
          throw Error(y(130, a == null ? a : typeof a, ""));
      }
  b = nh(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f;
  return b;
}
function Xg(a, b, c, d) {
  a = nh(7, a, d, b);
  a.lanes = c;
  return a;
}
function vi(a, b, c, d) {
  a = nh(23, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  return a;
}
function Ug(a, b, c) {
  a = nh(6, a, null, b);
  a.lanes = c;
  return a;
}
function Wg(a, b, c) {
  b = nh(4, a.children !== null ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = {containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation};
  return b;
}
function jk(a, b, c) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = null;
  this.callbackPriority = 0;
  this.eventTimes = Zc(0);
  this.expirationTimes = Zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = Zc(0);
  this.mutableSourceEagerHydrationData = null;
}
function kk(a, b, c) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {$$typeof: ta, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c};
}
function lk(a, b, c, d) {
  var e = b.current, f = Hg(), g = Ig(e);
  a:
    if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || c.tag !== 1)
          throw Error(y(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (h !== null);
        throw Error(y(171));
      }
      if (c.tag === 1) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h);
          break a;
        }
      }
      c = h;
    } else
      c = Cf;
  b.context === null ? b.context = c : b.pendingContext = c;
  b = zg(f, g);
  b.payload = {element: a};
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  Ag(e, b);
  Jg(e, g, f);
  return g;
}
function mk(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function nk(a, b) {
  a = a.memoizedState;
  if (a !== null && a.dehydrated !== null) {
    var c = a.retryLane;
    a.retryLane = c !== 0 && c < b ? c : b;
  }
}
function ok(a, b) {
  nk(a, b);
  (a = a.alternate) && nk(a, b);
}
function pk() {
  return null;
}
function qk(a, b, c) {
  var d = c != null && c.hydrationOptions != null && c.hydrationOptions.mutableSources || null;
  c = new jk(a, b, c != null && c.hydrate === true);
  b = nh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  c.current = b;
  b.stateNode = c;
  xg(b);
  a[ff] = c.current;
  cf(a.nodeType === 8 ? a.parentNode : a);
  if (d)
    for (a = 0; a < d.length; a++) {
      b = d[a];
      var e = b._getVersion;
      e = e(b._source);
      c.mutableSourceEagerHydrationData == null ? c.mutableSourceEagerHydrationData = [b, e] : c.mutableSourceEagerHydrationData.push(b, e);
    }
  this._internalRoot = c;
}
qk.prototype.render = function(a) {
  lk(a, this._internalRoot, null, null);
};
qk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  lk(null, a, null, function() {
    b[ff] = null;
  });
};
function rk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function sk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c; c = a.lastChild; )
      a.removeChild(c);
  return new qk(a, 0, b ? {hydrate: true} : void 0);
}
function tk(a, b, c, d, e) {
  var f = c._reactRootContainer;
  if (f) {
    var g = f._internalRoot;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = mk(g);
        h.call(a2);
      };
    }
    lk(b, g, a, e);
  } else {
    f = c._reactRootContainer = sk(c, d);
    g = f._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = mk(g);
        k.call(a2);
      };
    }
    Xj(function() {
      lk(b, g, a, e);
    });
  }
  return mk(g);
}
ec = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 4, b);
    ok(a, 4);
  }
};
fc = function(a) {
  if (a.tag === 13) {
    var b = Hg();
    Jg(a, 67108864, b);
    ok(a, 67108864);
  }
};
gc = function(a) {
  if (a.tag === 13) {
    var b = Hg(), c = Ig(a);
    Jg(a, c, b);
    ok(a, c);
  }
};
hc = function(a, b) {
  return b();
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      ab(a, c);
      b = c.name;
      if (c.type === "radio" && b != null) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(y(90));
            Wa(d);
            ab(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, b != null && fb(a, !!c.multiple, b, false);
  }
};
Gb = Wj;
Hb = function(a, b, c, d, e) {
  var f = X;
  X |= 4;
  try {
    return gg(98, a.bind(null, b, c, d, e));
  } finally {
    X = f, X === 0 && (wj(), ig());
  }
};
Ib = function() {
  (X & 49) === 0 && (Vj(), Oj());
};
Jb = function(a, b) {
  var c = X;
  X |= 2;
  try {
    return a(b);
  } finally {
    X = c, X === 0 && (wj(), ig());
  }
};
function uk(a, b) {
  var c = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rk(b))
    throw Error(y(200));
  return kk(a, b, null, c);
}
var vk = {Events: [Cb, ue, Db, Eb, Fb, Oj, {current: false}]};
var wk = {findFiberByHostInstance: wc, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"};
var xk = {bundleType: wk.bundleType, version: wk.version, rendererPackageName: wk.rendererPackageName, rendererConfig: wk.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ra.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = cc(a);
  return a === null ? null : a.stateNode;
}, findFiberByHostInstance: wk.findFiberByHostInstance || pk, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yk.isDisabled && yk.supportsFiber)
    try {
      Lf = yk.inject(xk), Mf = yk;
    } catch (a) {
    }
}
var yk;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vk;
var createPortal = uk;
var findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternals;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(y(188));
    throw Error(y(268, Object.keys(a)));
  }
  a = cc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
var flushSync = function(a, b) {
  var c = X;
  if ((c & 48) !== 0)
    return a(b);
  X |= 1;
  try {
    if (a)
      return gg(99, a.bind(null, b));
  } finally {
    X = c, ig();
  }
};
var hydrate = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, true, c);
};
var render = function(a, b, c) {
  if (!rk(b))
    throw Error(y(200));
  return tk(null, a, b, false, c);
};
var unmountComponentAtNode = function(a) {
  if (!rk(a))
    throw Error(y(40));
  return a._reactRootContainer ? (Xj(function() {
    tk(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[ff] = null;
    });
  }), true) : false;
};
var unstable_batchedUpdates = Wj;
var unstable_createPortal = function(a, b) {
  return uk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
var unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!rk(c))
    throw Error(y(200));
  if (a == null || a._reactInternals === void 0)
    throw Error(y(38));
  return tk(a, b, c, false, d);
};
var version = "17.0.2";
var reactDom_production_min = {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  createPortal,
  findDOMNode,
  flushSync,
  hydrate,
  render,
  unmountComponentAtNode,
  unstable_batchedUpdates,
  unstable_createPortal,
  unstable_renderSubtreeIntoContainer,
  version
};
var reactDom = createCommonjsModule(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
});
var react_dom_default = reactDom;

// docs/dist/gun.js
var gun = GUN(["https://juegojuego.herokuapp.com/gun"]);
var gun_default = gun;

// docs/dist/Register.js
function Register({teamName, setTeamName}) {
  const [name, setName] = useState("");
  return /* @__PURE__ */ react.createElement("form", {
    onSubmit: (e) => {
      e.preventDefault();
      window.location.hash = name;
    }
  }, /* @__PURE__ */ react.createElement("div", {
    className: "Register"
  }, /* @__PURE__ */ react.createElement("h1", null, "Nombre del jugador o equipo"), /* @__PURE__ */ react.createElement("input", {
    type: "text",
    value: name,
    onChange: (e) => setName(e.target.value),
    autoFocus: true
  }), /* @__PURE__ */ react.createElement("input", {
    type: "submit",
    value: "Listo!"
  })));
}
var Register_default = Register;

// docs/_snowpack/pkg/howler.js
var howler = createCommonjsModule(function(module, exports) {
  /*!
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */
  (function() {
    var HowlerGlobal2 = function() {
      this.init();
    };
    HowlerGlobal2.prototype = {
      init: function() {
        var self2 = this || Howler2;
        self2._counter = 1e3;
        self2._html5AudioPool = [];
        self2.html5PoolSize = 10;
        self2._codecs = {};
        self2._howls = [];
        self2._muted = false;
        self2._volume = 1;
        self2._canPlayEvent = "canplaythrough";
        self2._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
        self2.masterGain = null;
        self2.noAudio = false;
        self2.usingWebAudio = true;
        self2.autoSuspend = true;
        self2.ctx = null;
        self2.autoUnlock = true;
        self2._setup();
        return self2;
      },
      volume: function(vol) {
        var self2 = this || Howler2;
        vol = parseFloat(vol);
        if (!self2.ctx) {
          setupAudioContext();
        }
        if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
          self2._volume = vol;
          if (self2._muted) {
            return self2;
          }
          if (self2.usingWebAudio) {
            self2.masterGain.gain.setValueAtTime(vol, Howler2.ctx.currentTime);
          }
          for (var i = 0; i < self2._howls.length; i++) {
            if (!self2._howls[i]._webAudio) {
              var ids = self2._howls[i]._getSoundIds();
              for (var j = 0; j < ids.length; j++) {
                var sound2 = self2._howls[i]._soundById(ids[j]);
                if (sound2 && sound2._node) {
                  sound2._node.volume = sound2._volume * vol;
                }
              }
            }
          }
          return self2;
        }
        return self2._volume;
      },
      mute: function(muted) {
        var self2 = this || Howler2;
        if (!self2.ctx) {
          setupAudioContext();
        }
        self2._muted = muted;
        if (self2.usingWebAudio) {
          self2.masterGain.gain.setValueAtTime(muted ? 0 : self2._volume, Howler2.ctx.currentTime);
        }
        for (var i = 0; i < self2._howls.length; i++) {
          if (!self2._howls[i]._webAudio) {
            var ids = self2._howls[i]._getSoundIds();
            for (var j = 0; j < ids.length; j++) {
              var sound2 = self2._howls[i]._soundById(ids[j]);
              if (sound2 && sound2._node) {
                sound2._node.muted = muted ? true : sound2._muted;
              }
            }
          }
        }
        return self2;
      },
      stop: function() {
        var self2 = this || Howler2;
        for (var i = 0; i < self2._howls.length; i++) {
          self2._howls[i].stop();
        }
        return self2;
      },
      unload: function() {
        var self2 = this || Howler2;
        for (var i = self2._howls.length - 1; i >= 0; i--) {
          self2._howls[i].unload();
        }
        if (self2.usingWebAudio && self2.ctx && typeof self2.ctx.close !== "undefined") {
          self2.ctx.close();
          self2.ctx = null;
          setupAudioContext();
        }
        return self2;
      },
      codecs: function(ext) {
        return (this || Howler2)._codecs[ext.replace(/^x-/, "")];
      },
      _setup: function() {
        var self2 = this || Howler2;
        self2.state = self2.ctx ? self2.ctx.state || "suspended" : "suspended";
        self2._autoSuspend();
        if (!self2.usingWebAudio) {
          if (typeof Audio !== "undefined") {
            try {
              var test = new Audio();
              if (typeof test.oncanplaythrough === "undefined") {
                self2._canPlayEvent = "canplay";
              }
            } catch (e) {
              self2.noAudio = true;
            }
          } else {
            self2.noAudio = true;
          }
        }
        try {
          var test = new Audio();
          if (test.muted) {
            self2.noAudio = true;
          }
        } catch (e) {
        }
        if (!self2.noAudio) {
          self2._setupCodecs();
        }
        return self2;
      },
      _setupCodecs: function() {
        var self2 = this || Howler2;
        var audioTest = null;
        try {
          audioTest = typeof Audio !== "undefined" ? new Audio() : null;
        } catch (err) {
          return self2;
        }
        if (!audioTest || typeof audioTest.canPlayType !== "function") {
          return self2;
        }
        var mpegTest = audioTest.canPlayType("audio/mpeg;").replace(/^no$/, "");
        var ua2 = self2._navigator ? self2._navigator.userAgent : "";
        var checkOpera = ua2.match(/OPR\/([0-6].)/g);
        var isOldOpera = checkOpera && parseInt(checkOpera[0].split("/")[1], 10) < 33;
        var checkSafari = ua2.indexOf("Safari") !== -1 && ua2.indexOf("Chrome") === -1;
        var safariVersion = ua2.match(/Version\/(.*?) /);
        var isOldSafari = checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15;
        self2._codecs = {
          mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType("audio/mp3;").replace(/^no$/, ""))),
          mpeg: !!mpegTest,
          opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
          ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
          wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType("audio/wav")).replace(/^no$/, ""),
          aac: !!audioTest.canPlayType("audio/aac;").replace(/^no$/, ""),
          caf: !!audioTest.canPlayType("audio/x-caf;").replace(/^no$/, ""),
          m4a: !!(audioTest.canPlayType("audio/x-m4a;") || audioTest.canPlayType("audio/m4a;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
          m4b: !!(audioTest.canPlayType("audio/x-m4b;") || audioTest.canPlayType("audio/m4b;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
          mp4: !!(audioTest.canPlayType("audio/x-mp4;") || audioTest.canPlayType("audio/mp4;") || audioTest.canPlayType("audio/aac;")).replace(/^no$/, ""),
          weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
          webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
          dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
          flac: !!(audioTest.canPlayType("audio/x-flac;") || audioTest.canPlayType("audio/flac;")).replace(/^no$/, "")
        };
        return self2;
      },
      _unlockAudio: function() {
        var self2 = this || Howler2;
        if (self2._audioUnlocked || !self2.ctx) {
          return;
        }
        self2._audioUnlocked = false;
        self2.autoUnlock = false;
        if (!self2._mobileUnloaded && self2.ctx.sampleRate !== 44100) {
          self2._mobileUnloaded = true;
          self2.unload();
        }
        self2._scratchBuffer = self2.ctx.createBuffer(1, 1, 22050);
        var unlock = function(e) {
          while (self2._html5AudioPool.length < self2.html5PoolSize) {
            try {
              var audioNode = new Audio();
              audioNode._unlocked = true;
              self2._releaseHtml5Audio(audioNode);
            } catch (e2) {
              self2.noAudio = true;
              break;
            }
          }
          for (var i = 0; i < self2._howls.length; i++) {
            if (!self2._howls[i]._webAudio) {
              var ids = self2._howls[i]._getSoundIds();
              for (var j = 0; j < ids.length; j++) {
                var sound2 = self2._howls[i]._soundById(ids[j]);
                if (sound2 && sound2._node && !sound2._node._unlocked) {
                  sound2._node._unlocked = true;
                  sound2._node.load();
                }
              }
            }
          }
          self2._autoResume();
          var source = self2.ctx.createBufferSource();
          source.buffer = self2._scratchBuffer;
          source.connect(self2.ctx.destination);
          if (typeof source.start === "undefined") {
            source.noteOn(0);
          } else {
            source.start(0);
          }
          if (typeof self2.ctx.resume === "function") {
            self2.ctx.resume();
          }
          source.onended = function() {
            source.disconnect(0);
            self2._audioUnlocked = true;
            document.removeEventListener("touchstart", unlock, true);
            document.removeEventListener("touchend", unlock, true);
            document.removeEventListener("click", unlock, true);
            document.removeEventListener("keydown", unlock, true);
            for (var i2 = 0; i2 < self2._howls.length; i2++) {
              self2._howls[i2]._emit("unlock");
            }
          };
        };
        document.addEventListener("touchstart", unlock, true);
        document.addEventListener("touchend", unlock, true);
        document.addEventListener("click", unlock, true);
        document.addEventListener("keydown", unlock, true);
        return self2;
      },
      _obtainHtml5Audio: function() {
        var self2 = this || Howler2;
        if (self2._html5AudioPool.length) {
          return self2._html5AudioPool.pop();
        }
        var testPlay = new Audio().play();
        if (testPlay && typeof Promise !== "undefined" && (testPlay instanceof Promise || typeof testPlay.then === "function")) {
          testPlay.catch(function() {
            console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
          });
        }
        return new Audio();
      },
      _releaseHtml5Audio: function(audio) {
        var self2 = this || Howler2;
        if (audio._unlocked) {
          self2._html5AudioPool.push(audio);
        }
        return self2;
      },
      _autoSuspend: function() {
        var self2 = this;
        if (!self2.autoSuspend || !self2.ctx || typeof self2.ctx.suspend === "undefined" || !Howler2.usingWebAudio) {
          return;
        }
        for (var i = 0; i < self2._howls.length; i++) {
          if (self2._howls[i]._webAudio) {
            for (var j = 0; j < self2._howls[i]._sounds.length; j++) {
              if (!self2._howls[i]._sounds[j]._paused) {
                return self2;
              }
            }
          }
        }
        if (self2._suspendTimer) {
          clearTimeout(self2._suspendTimer);
        }
        self2._suspendTimer = setTimeout(function() {
          if (!self2.autoSuspend) {
            return;
          }
          self2._suspendTimer = null;
          self2.state = "suspending";
          var handleSuspension = function() {
            self2.state = "suspended";
            if (self2._resumeAfterSuspend) {
              delete self2._resumeAfterSuspend;
              self2._autoResume();
            }
          };
          self2.ctx.suspend().then(handleSuspension, handleSuspension);
        }, 3e4);
        return self2;
      },
      _autoResume: function() {
        var self2 = this;
        if (!self2.ctx || typeof self2.ctx.resume === "undefined" || !Howler2.usingWebAudio) {
          return;
        }
        if (self2.state === "running" && self2.ctx.state !== "interrupted" && self2._suspendTimer) {
          clearTimeout(self2._suspendTimer);
          self2._suspendTimer = null;
        } else if (self2.state === "suspended" || self2.state === "running" && self2.ctx.state === "interrupted") {
          self2.ctx.resume().then(function() {
            self2.state = "running";
            for (var i = 0; i < self2._howls.length; i++) {
              self2._howls[i]._emit("resume");
            }
          });
          if (self2._suspendTimer) {
            clearTimeout(self2._suspendTimer);
            self2._suspendTimer = null;
          }
        } else if (self2.state === "suspending") {
          self2._resumeAfterSuspend = true;
        }
        return self2;
      }
    };
    var Howler2 = new HowlerGlobal2();
    var Howl2 = function(o) {
      var self2 = this;
      if (!o.src || o.src.length === 0) {
        console.error("An array of source files must be passed with any new Howl.");
        return;
      }
      self2.init(o);
    };
    Howl2.prototype = {
      init: function(o) {
        var self2 = this;
        if (!Howler2.ctx) {
          setupAudioContext();
        }
        self2._autoplay = o.autoplay || false;
        self2._format = typeof o.format !== "string" ? o.format : [o.format];
        self2._html5 = o.html5 || false;
        self2._muted = o.mute || false;
        self2._loop = o.loop || false;
        self2._pool = o.pool || 5;
        self2._preload = typeof o.preload === "boolean" || o.preload === "metadata" ? o.preload : true;
        self2._rate = o.rate || 1;
        self2._sprite = o.sprite || {};
        self2._src = typeof o.src !== "string" ? o.src : [o.src];
        self2._volume = o.volume !== void 0 ? o.volume : 1;
        self2._xhr = {
          method: o.xhr && o.xhr.method ? o.xhr.method : "GET",
          headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
          withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false
        };
        self2._duration = 0;
        self2._state = "unloaded";
        self2._sounds = [];
        self2._endTimers = {};
        self2._queue = [];
        self2._playLock = false;
        self2._onend = o.onend ? [{fn: o.onend}] : [];
        self2._onfade = o.onfade ? [{fn: o.onfade}] : [];
        self2._onload = o.onload ? [{fn: o.onload}] : [];
        self2._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
        self2._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
        self2._onpause = o.onpause ? [{fn: o.onpause}] : [];
        self2._onplay = o.onplay ? [{fn: o.onplay}] : [];
        self2._onstop = o.onstop ? [{fn: o.onstop}] : [];
        self2._onmute = o.onmute ? [{fn: o.onmute}] : [];
        self2._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
        self2._onrate = o.onrate ? [{fn: o.onrate}] : [];
        self2._onseek = o.onseek ? [{fn: o.onseek}] : [];
        self2._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
        self2._onresume = [];
        self2._webAudio = Howler2.usingWebAudio && !self2._html5;
        if (typeof Howler2.ctx !== "undefined" && Howler2.ctx && Howler2.autoUnlock) {
          Howler2._unlockAudio();
        }
        Howler2._howls.push(self2);
        if (self2._autoplay) {
          self2._queue.push({
            event: "play",
            action: function() {
              self2.play();
            }
          });
        }
        if (self2._preload && self2._preload !== "none") {
          self2.load();
        }
        return self2;
      },
      load: function() {
        var self2 = this;
        var url = null;
        if (Howler2.noAudio) {
          self2._emit("loaderror", null, "No audio support.");
          return;
        }
        if (typeof self2._src === "string") {
          self2._src = [self2._src];
        }
        for (var i = 0; i < self2._src.length; i++) {
          var ext, str;
          if (self2._format && self2._format[i]) {
            ext = self2._format[i];
          } else {
            str = self2._src[i];
            if (typeof str !== "string") {
              self2._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
              continue;
            }
            ext = /^data:audio\/([^;,]+);/i.exec(str);
            if (!ext) {
              ext = /\.([^.]+)$/.exec(str.split("?", 1)[0]);
            }
            if (ext) {
              ext = ext[1].toLowerCase();
            }
          }
          if (!ext) {
            console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
          }
          if (ext && Howler2.codecs(ext)) {
            url = self2._src[i];
            break;
          }
        }
        if (!url) {
          self2._emit("loaderror", null, "No codec support for selected audio sources.");
          return;
        }
        self2._src = url;
        self2._state = "loading";
        if (window.location.protocol === "https:" && url.slice(0, 5) === "http:") {
          self2._html5 = true;
          self2._webAudio = false;
        }
        new Sound2(self2);
        if (self2._webAudio) {
          loadBuffer(self2);
        }
        return self2;
      },
      play: function(sprite, internal) {
        var self2 = this;
        var id2 = null;
        if (typeof sprite === "number") {
          id2 = sprite;
          sprite = null;
        } else if (typeof sprite === "string" && self2._state === "loaded" && !self2._sprite[sprite]) {
          return null;
        } else if (typeof sprite === "undefined") {
          sprite = "__default";
          if (!self2._playLock) {
            var num = 0;
            for (var i = 0; i < self2._sounds.length; i++) {
              if (self2._sounds[i]._paused && !self2._sounds[i]._ended) {
                num++;
                id2 = self2._sounds[i]._id;
              }
            }
            if (num === 1) {
              sprite = null;
            } else {
              id2 = null;
            }
          }
        }
        var sound2 = id2 ? self2._soundById(id2) : self2._inactiveSound();
        if (!sound2) {
          return null;
        }
        if (id2 && !sprite) {
          sprite = sound2._sprite || "__default";
        }
        if (self2._state !== "loaded") {
          sound2._sprite = sprite;
          sound2._ended = false;
          var soundId = sound2._id;
          self2._queue.push({
            event: "play",
            action: function() {
              self2.play(soundId);
            }
          });
          return soundId;
        }
        if (id2 && !sound2._paused) {
          if (!internal) {
            self2._loadQueue("play");
          }
          return sound2._id;
        }
        if (self2._webAudio) {
          Howler2._autoResume();
        }
        var seek = Math.max(0, sound2._seek > 0 ? sound2._seek : self2._sprite[sprite][0] / 1e3);
        var duration = Math.max(0, (self2._sprite[sprite][0] + self2._sprite[sprite][1]) / 1e3 - seek);
        var timeout = duration * 1e3 / Math.abs(sound2._rate);
        var start = self2._sprite[sprite][0] / 1e3;
        var stop = (self2._sprite[sprite][0] + self2._sprite[sprite][1]) / 1e3;
        sound2._sprite = sprite;
        sound2._ended = false;
        var setParams = function() {
          sound2._paused = false;
          sound2._seek = seek;
          sound2._start = start;
          sound2._stop = stop;
          sound2._loop = !!(sound2._loop || self2._sprite[sprite][2]);
        };
        if (seek >= stop) {
          self2._ended(sound2);
          return;
        }
        var node = sound2._node;
        if (self2._webAudio) {
          var playWebAudio = function() {
            self2._playLock = false;
            setParams();
            self2._refreshBuffer(sound2);
            var vol = sound2._muted || self2._muted ? 0 : sound2._volume;
            node.gain.setValueAtTime(vol, Howler2.ctx.currentTime);
            sound2._playStart = Howler2.ctx.currentTime;
            if (typeof node.bufferSource.start === "undefined") {
              sound2._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
            } else {
              sound2._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
            }
            if (timeout !== Infinity) {
              self2._endTimers[sound2._id] = setTimeout(self2._ended.bind(self2, sound2), timeout);
            }
            if (!internal) {
              setTimeout(function() {
                self2._emit("play", sound2._id);
                self2._loadQueue();
              }, 0);
            }
          };
          if (Howler2.state === "running" && Howler2.ctx.state !== "interrupted") {
            playWebAudio();
          } else {
            self2._playLock = true;
            self2.once("resume", playWebAudio);
            self2._clearTimer(sound2._id);
          }
        } else {
          var playHtml5 = function() {
            node.currentTime = seek;
            node.muted = sound2._muted || self2._muted || Howler2._muted || node.muted;
            node.volume = sound2._volume * Howler2.volume();
            node.playbackRate = sound2._rate;
            try {
              var play = node.play();
              if (play && typeof Promise !== "undefined" && (play instanceof Promise || typeof play.then === "function")) {
                self2._playLock = true;
                setParams();
                play.then(function() {
                  self2._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self2._emit("play", sound2._id);
                  } else {
                    self2._loadQueue();
                  }
                }).catch(function() {
                  self2._playLock = false;
                  self2._emit("playerror", sound2._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                  sound2._ended = true;
                  sound2._paused = true;
                });
              } else if (!internal) {
                self2._playLock = false;
                setParams();
                self2._emit("play", sound2._id);
              }
              node.playbackRate = sound2._rate;
              if (node.paused) {
                self2._emit("playerror", sound2._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                return;
              }
              if (sprite !== "__default" || sound2._loop) {
                self2._endTimers[sound2._id] = setTimeout(self2._ended.bind(self2, sound2), timeout);
              } else {
                self2._endTimers[sound2._id] = function() {
                  self2._ended(sound2);
                  node.removeEventListener("ended", self2._endTimers[sound2._id], false);
                };
                node.addEventListener("ended", self2._endTimers[sound2._id], false);
              }
            } catch (err) {
              self2._emit("playerror", sound2._id, err);
            }
          };
          if (node.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
            node.src = self2._src;
            node.load();
          }
          var loadedNoReadyState = window && window.ejecta || !node.readyState && Howler2._navigator.isCocoonJS;
          if (node.readyState >= 3 || loadedNoReadyState) {
            playHtml5();
          } else {
            self2._playLock = true;
            self2._state = "loading";
            var listener = function() {
              self2._state = "loaded";
              playHtml5();
              node.removeEventListener(Howler2._canPlayEvent, listener, false);
            };
            node.addEventListener(Howler2._canPlayEvent, listener, false);
            self2._clearTimer(sound2._id);
          }
        }
        return sound2._id;
      },
      pause: function(id2) {
        var self2 = this;
        if (self2._state !== "loaded" || self2._playLock) {
          self2._queue.push({
            event: "pause",
            action: function() {
              self2.pause(id2);
            }
          });
          return self2;
        }
        var ids = self2._getSoundIds(id2);
        for (var i = 0; i < ids.length; i++) {
          self2._clearTimer(ids[i]);
          var sound2 = self2._soundById(ids[i]);
          if (sound2 && !sound2._paused) {
            sound2._seek = self2.seek(ids[i]);
            sound2._rateSeek = 0;
            sound2._paused = true;
            self2._stopFade(ids[i]);
            if (sound2._node) {
              if (self2._webAudio) {
                if (!sound2._node.bufferSource) {
                  continue;
                }
                if (typeof sound2._node.bufferSource.stop === "undefined") {
                  sound2._node.bufferSource.noteOff(0);
                } else {
                  sound2._node.bufferSource.stop(0);
                }
                self2._cleanBuffer(sound2._node);
              } else if (!isNaN(sound2._node.duration) || sound2._node.duration === Infinity) {
                sound2._node.pause();
              }
            }
          }
          if (!arguments[1]) {
            self2._emit("pause", sound2 ? sound2._id : null);
          }
        }
        return self2;
      },
      stop: function(id2, internal) {
        var self2 = this;
        if (self2._state !== "loaded" || self2._playLock) {
          self2._queue.push({
            event: "stop",
            action: function() {
              self2.stop(id2);
            }
          });
          return self2;
        }
        var ids = self2._getSoundIds(id2);
        for (var i = 0; i < ids.length; i++) {
          self2._clearTimer(ids[i]);
          var sound2 = self2._soundById(ids[i]);
          if (sound2) {
            sound2._seek = sound2._start || 0;
            sound2._rateSeek = 0;
            sound2._paused = true;
            sound2._ended = true;
            self2._stopFade(ids[i]);
            if (sound2._node) {
              if (self2._webAudio) {
                if (sound2._node.bufferSource) {
                  if (typeof sound2._node.bufferSource.stop === "undefined") {
                    sound2._node.bufferSource.noteOff(0);
                  } else {
                    sound2._node.bufferSource.stop(0);
                  }
                  self2._cleanBuffer(sound2._node);
                }
              } else if (!isNaN(sound2._node.duration) || sound2._node.duration === Infinity) {
                sound2._node.currentTime = sound2._start || 0;
                sound2._node.pause();
                if (sound2._node.duration === Infinity) {
                  self2._clearSound(sound2._node);
                }
              }
            }
            if (!internal) {
              self2._emit("stop", sound2._id);
            }
          }
        }
        return self2;
      },
      mute: function(muted, id2) {
        var self2 = this;
        if (self2._state !== "loaded" || self2._playLock) {
          self2._queue.push({
            event: "mute",
            action: function() {
              self2.mute(muted, id2);
            }
          });
          return self2;
        }
        if (typeof id2 === "undefined") {
          if (typeof muted === "boolean") {
            self2._muted = muted;
          } else {
            return self2._muted;
          }
        }
        var ids = self2._getSoundIds(id2);
        for (var i = 0; i < ids.length; i++) {
          var sound2 = self2._soundById(ids[i]);
          if (sound2) {
            sound2._muted = muted;
            if (sound2._interval) {
              self2._stopFade(sound2._id);
            }
            if (self2._webAudio && sound2._node) {
              sound2._node.gain.setValueAtTime(muted ? 0 : sound2._volume, Howler2.ctx.currentTime);
            } else if (sound2._node) {
              sound2._node.muted = Howler2._muted ? true : muted;
            }
            self2._emit("mute", sound2._id);
          }
        }
        return self2;
      },
      volume: function() {
        var self2 = this;
        var args = arguments;
        var vol, id2;
        if (args.length === 0) {
          return self2._volume;
        } else if (args.length === 1 || args.length === 2 && typeof args[1] === "undefined") {
          var ids = self2._getSoundIds();
          var index = ids.indexOf(args[0]);
          if (index >= 0) {
            id2 = parseInt(args[0], 10);
          } else {
            vol = parseFloat(args[0]);
          }
        } else if (args.length >= 2) {
          vol = parseFloat(args[0]);
          id2 = parseInt(args[1], 10);
        }
        var sound2;
        if (typeof vol !== "undefined" && vol >= 0 && vol <= 1) {
          if (self2._state !== "loaded" || self2._playLock) {
            self2._queue.push({
              event: "volume",
              action: function() {
                self2.volume.apply(self2, args);
              }
            });
            return self2;
          }
          if (typeof id2 === "undefined") {
            self2._volume = vol;
          }
          id2 = self2._getSoundIds(id2);
          for (var i = 0; i < id2.length; i++) {
            sound2 = self2._soundById(id2[i]);
            if (sound2) {
              sound2._volume = vol;
              if (!args[2]) {
                self2._stopFade(id2[i]);
              }
              if (self2._webAudio && sound2._node && !sound2._muted) {
                sound2._node.gain.setValueAtTime(vol, Howler2.ctx.currentTime);
              } else if (sound2._node && !sound2._muted) {
                sound2._node.volume = vol * Howler2.volume();
              }
              self2._emit("volume", sound2._id);
            }
          }
        } else {
          sound2 = id2 ? self2._soundById(id2) : self2._sounds[0];
          return sound2 ? sound2._volume : 0;
        }
        return self2;
      },
      fade: function(from, to, len, id2) {
        var self2 = this;
        if (self2._state !== "loaded" || self2._playLock) {
          self2._queue.push({
            event: "fade",
            action: function() {
              self2.fade(from, to, len, id2);
            }
          });
          return self2;
        }
        from = Math.min(Math.max(0, parseFloat(from)), 1);
        to = Math.min(Math.max(0, parseFloat(to)), 1);
        len = parseFloat(len);
        self2.volume(from, id2);
        var ids = self2._getSoundIds(id2);
        for (var i = 0; i < ids.length; i++) {
          var sound2 = self2._soundById(ids[i]);
          if (sound2) {
            if (!id2) {
              self2._stopFade(ids[i]);
            }
            if (self2._webAudio && !sound2._muted) {
              var currentTime = Howler2.ctx.currentTime;
              var end = currentTime + len / 1e3;
              sound2._volume = from;
              sound2._node.gain.setValueAtTime(from, currentTime);
              sound2._node.gain.linearRampToValueAtTime(to, end);
            }
            self2._startFadeInterval(sound2, from, to, len, ids[i], typeof id2 === "undefined");
          }
        }
        return self2;
      },
      _startFadeInterval: function(sound2, from, to, len, id2, isGroup) {
        var self2 = this;
        var vol = from;
        var diff = to - from;
        var steps = Math.abs(diff / 0.01);
        var stepLen = Math.max(4, steps > 0 ? len / steps : len);
        var lastTick = Date.now();
        sound2._fadeTo = to;
        sound2._interval = setInterval(function() {
          var tick = (Date.now() - lastTick) / len;
          lastTick = Date.now();
          vol += diff * tick;
          vol = Math.round(vol * 100) / 100;
          if (diff < 0) {
            vol = Math.max(to, vol);
          } else {
            vol = Math.min(to, vol);
          }
          if (self2._webAudio) {
            sound2._volume = vol;
          } else {
            self2.volume(vol, sound2._id, true);
          }
          if (isGroup) {
            self2._volume = vol;
          }
          if (to < from && vol <= to || to > from && vol >= to) {
            clearInterval(sound2._interval);
            sound2._interval = null;
            sound2._fadeTo = null;
            self2.volume(to, sound2._id);
            self2._emit("fade", sound2._id);
          }
        }, stepLen);
      },
      _stopFade: function(id2) {
        var self2 = this;
        var sound2 = self2._soundById(id2);
        if (sound2 && sound2._interval) {
          if (self2._webAudio) {
            sound2._node.gain.cancelScheduledValues(Howler2.ctx.currentTime);
          }
          clearInterval(sound2._interval);
          sound2._interval = null;
          self2.volume(sound2._fadeTo, id2);
          sound2._fadeTo = null;
          self2._emit("fade", id2);
        }
        return self2;
      },
      loop: function() {
        var self2 = this;
        var args = arguments;
        var loop, id2, sound2;
        if (args.length === 0) {
          return self2._loop;
        } else if (args.length === 1) {
          if (typeof args[0] === "boolean") {
            loop = args[0];
            self2._loop = loop;
          } else {
            sound2 = self2._soundById(parseInt(args[0], 10));
            return sound2 ? sound2._loop : false;
          }
        } else if (args.length === 2) {
          loop = args[0];
          id2 = parseInt(args[1], 10);
        }
        var ids = self2._getSoundIds(id2);
        for (var i = 0; i < ids.length; i++) {
          sound2 = self2._soundById(ids[i]);
          if (sound2) {
            sound2._loop = loop;
            if (self2._webAudio && sound2._node && sound2._node.bufferSource) {
              sound2._node.bufferSource.loop = loop;
              if (loop) {
                sound2._node.bufferSource.loopStart = sound2._start || 0;
                sound2._node.bufferSource.loopEnd = sound2._stop;
                if (self2.playing(ids[i])) {
                  self2.pause(ids[i], true);
                  self2.play(ids[i], true);
                }
              }
            }
          }
        }
        return self2;
      },
      rate: function() {
        var self2 = this;
        var args = arguments;
        var rate, id2;
        if (args.length === 0) {
          id2 = self2._sounds[0]._id;
        } else if (args.length === 1) {
          var ids = self2._getSoundIds();
          var index = ids.indexOf(args[0]);
          if (index >= 0) {
            id2 = parseInt(args[0], 10);
          } else {
            rate = parseFloat(args[0]);
          }
        } else if (args.length === 2) {
          rate = parseFloat(args[0]);
          id2 = parseInt(args[1], 10);
        }
        var sound2;
        if (typeof rate === "number") {
          if (self2._state !== "loaded" || self2._playLock) {
            self2._queue.push({
              event: "rate",
              action: function() {
                self2.rate.apply(self2, args);
              }
            });
            return self2;
          }
          if (typeof id2 === "undefined") {
            self2._rate = rate;
          }
          id2 = self2._getSoundIds(id2);
          for (var i = 0; i < id2.length; i++) {
            sound2 = self2._soundById(id2[i]);
            if (sound2) {
              if (self2.playing(id2[i])) {
                sound2._rateSeek = self2.seek(id2[i]);
                sound2._playStart = self2._webAudio ? Howler2.ctx.currentTime : sound2._playStart;
              }
              sound2._rate = rate;
              if (self2._webAudio && sound2._node && sound2._node.bufferSource) {
                sound2._node.bufferSource.playbackRate.setValueAtTime(rate, Howler2.ctx.currentTime);
              } else if (sound2._node) {
                sound2._node.playbackRate = rate;
              }
              var seek = self2.seek(id2[i]);
              var duration = (self2._sprite[sound2._sprite][0] + self2._sprite[sound2._sprite][1]) / 1e3 - seek;
              var timeout = duration * 1e3 / Math.abs(sound2._rate);
              if (self2._endTimers[id2[i]] || !sound2._paused) {
                self2._clearTimer(id2[i]);
                self2._endTimers[id2[i]] = setTimeout(self2._ended.bind(self2, sound2), timeout);
              }
              self2._emit("rate", sound2._id);
            }
          }
        } else {
          sound2 = self2._soundById(id2);
          return sound2 ? sound2._rate : self2._rate;
        }
        return self2;
      },
      seek: function() {
        var self2 = this;
        var args = arguments;
        var seek, id2;
        if (args.length === 0) {
          if (self2._sounds.length) {
            id2 = self2._sounds[0]._id;
          }
        } else if (args.length === 1) {
          var ids = self2._getSoundIds();
          var index = ids.indexOf(args[0]);
          if (index >= 0) {
            id2 = parseInt(args[0], 10);
          } else if (self2._sounds.length) {
            id2 = self2._sounds[0]._id;
            seek = parseFloat(args[0]);
          }
        } else if (args.length === 2) {
          seek = parseFloat(args[0]);
          id2 = parseInt(args[1], 10);
        }
        if (typeof id2 === "undefined") {
          return 0;
        }
        if (typeof seek === "number" && (self2._state !== "loaded" || self2._playLock)) {
          self2._queue.push({
            event: "seek",
            action: function() {
              self2.seek.apply(self2, args);
            }
          });
          return self2;
        }
        var sound2 = self2._soundById(id2);
        if (sound2) {
          if (typeof seek === "number" && seek >= 0) {
            var playing = self2.playing(id2);
            if (playing) {
              self2.pause(id2, true);
            }
            sound2._seek = seek;
            sound2._ended = false;
            self2._clearTimer(id2);
            if (!self2._webAudio && sound2._node && !isNaN(sound2._node.duration)) {
              sound2._node.currentTime = seek;
            }
            var seekAndEmit = function() {
              if (playing) {
                self2.play(id2, true);
              }
              self2._emit("seek", id2);
            };
            if (playing && !self2._webAudio) {
              var emitSeek = function() {
                if (!self2._playLock) {
                  seekAndEmit();
                } else {
                  setTimeout(emitSeek, 0);
                }
              };
              setTimeout(emitSeek, 0);
            } else {
              seekAndEmit();
            }
          } else {
            if (self2._webAudio) {
              var realTime = self2.playing(id2) ? Howler2.ctx.currentTime - sound2._playStart : 0;
              var rateSeek = sound2._rateSeek ? sound2._rateSeek - sound2._seek : 0;
              return sound2._seek + (rateSeek + realTime * Math.abs(sound2._rate));
            } else {
              return sound2._node.currentTime;
            }
          }
        }
        return self2;
      },
      playing: function(id2) {
        var self2 = this;
        if (typeof id2 === "number") {
          var sound2 = self2._soundById(id2);
          return sound2 ? !sound2._paused : false;
        }
        for (var i = 0; i < self2._sounds.length; i++) {
          if (!self2._sounds[i]._paused) {
            return true;
          }
        }
        return false;
      },
      duration: function(id2) {
        var self2 = this;
        var duration = self2._duration;
        var sound2 = self2._soundById(id2);
        if (sound2) {
          duration = self2._sprite[sound2._sprite][1] / 1e3;
        }
        return duration;
      },
      state: function() {
        return this._state;
      },
      unload: function() {
        var self2 = this;
        var sounds = self2._sounds;
        for (var i = 0; i < sounds.length; i++) {
          if (!sounds[i]._paused) {
            self2.stop(sounds[i]._id);
          }
          if (!self2._webAudio) {
            self2._clearSound(sounds[i]._node);
            sounds[i]._node.removeEventListener("error", sounds[i]._errorFn, false);
            sounds[i]._node.removeEventListener(Howler2._canPlayEvent, sounds[i]._loadFn, false);
            sounds[i]._node.removeEventListener("ended", sounds[i]._endFn, false);
            Howler2._releaseHtml5Audio(sounds[i]._node);
          }
          delete sounds[i]._node;
          self2._clearTimer(sounds[i]._id);
        }
        var index = Howler2._howls.indexOf(self2);
        if (index >= 0) {
          Howler2._howls.splice(index, 1);
        }
        var remCache = true;
        for (i = 0; i < Howler2._howls.length; i++) {
          if (Howler2._howls[i]._src === self2._src || self2._src.indexOf(Howler2._howls[i]._src) >= 0) {
            remCache = false;
            break;
          }
        }
        if (cache && remCache) {
          delete cache[self2._src];
        }
        Howler2.noAudio = false;
        self2._state = "unloaded";
        self2._sounds = [];
        self2 = null;
        return null;
      },
      on: function(event, fn, id2, once) {
        var self2 = this;
        var events = self2["_on" + event];
        if (typeof fn === "function") {
          events.push(once ? {id: id2, fn, once} : {id: id2, fn});
        }
        return self2;
      },
      off: function(event, fn, id2) {
        var self2 = this;
        var events = self2["_on" + event];
        var i = 0;
        if (typeof fn === "number") {
          id2 = fn;
          fn = null;
        }
        if (fn || id2) {
          for (i = 0; i < events.length; i++) {
            var isId = id2 === events[i].id;
            if (fn === events[i].fn && isId || !fn && isId) {
              events.splice(i, 1);
              break;
            }
          }
        } else if (event) {
          self2["_on" + event] = [];
        } else {
          var keys = Object.keys(self2);
          for (i = 0; i < keys.length; i++) {
            if (keys[i].indexOf("_on") === 0 && Array.isArray(self2[keys[i]])) {
              self2[keys[i]] = [];
            }
          }
        }
        return self2;
      },
      once: function(event, fn, id2) {
        var self2 = this;
        self2.on(event, fn, id2, 1);
        return self2;
      },
      _emit: function(event, id2, msg) {
        var self2 = this;
        var events = self2["_on" + event];
        for (var i = events.length - 1; i >= 0; i--) {
          if (!events[i].id || events[i].id === id2 || event === "load") {
            setTimeout(function(fn) {
              fn.call(this, id2, msg);
            }.bind(self2, events[i].fn), 0);
            if (events[i].once) {
              self2.off(event, events[i].fn, events[i].id);
            }
          }
        }
        self2._loadQueue(event);
        return self2;
      },
      _loadQueue: function(event) {
        var self2 = this;
        if (self2._queue.length > 0) {
          var task = self2._queue[0];
          if (task.event === event) {
            self2._queue.shift();
            self2._loadQueue();
          }
          if (!event) {
            task.action();
          }
        }
        return self2;
      },
      _ended: function(sound2) {
        var self2 = this;
        var sprite = sound2._sprite;
        if (!self2._webAudio && sound2._node && !sound2._node.paused && !sound2._node.ended && sound2._node.currentTime < sound2._stop) {
          setTimeout(self2._ended.bind(self2, sound2), 100);
          return self2;
        }
        var loop = !!(sound2._loop || self2._sprite[sprite][2]);
        self2._emit("end", sound2._id);
        if (!self2._webAudio && loop) {
          self2.stop(sound2._id, true).play(sound2._id);
        }
        if (self2._webAudio && loop) {
          self2._emit("play", sound2._id);
          sound2._seek = sound2._start || 0;
          sound2._rateSeek = 0;
          sound2._playStart = Howler2.ctx.currentTime;
          var timeout = (sound2._stop - sound2._start) * 1e3 / Math.abs(sound2._rate);
          self2._endTimers[sound2._id] = setTimeout(self2._ended.bind(self2, sound2), timeout);
        }
        if (self2._webAudio && !loop) {
          sound2._paused = true;
          sound2._ended = true;
          sound2._seek = sound2._start || 0;
          sound2._rateSeek = 0;
          self2._clearTimer(sound2._id);
          self2._cleanBuffer(sound2._node);
          Howler2._autoSuspend();
        }
        if (!self2._webAudio && !loop) {
          self2.stop(sound2._id, true);
        }
        return self2;
      },
      _clearTimer: function(id2) {
        var self2 = this;
        if (self2._endTimers[id2]) {
          if (typeof self2._endTimers[id2] !== "function") {
            clearTimeout(self2._endTimers[id2]);
          } else {
            var sound2 = self2._soundById(id2);
            if (sound2 && sound2._node) {
              sound2._node.removeEventListener("ended", self2._endTimers[id2], false);
            }
          }
          delete self2._endTimers[id2];
        }
        return self2;
      },
      _soundById: function(id2) {
        var self2 = this;
        for (var i = 0; i < self2._sounds.length; i++) {
          if (id2 === self2._sounds[i]._id) {
            return self2._sounds[i];
          }
        }
        return null;
      },
      _inactiveSound: function() {
        var self2 = this;
        self2._drain();
        for (var i = 0; i < self2._sounds.length; i++) {
          if (self2._sounds[i]._ended) {
            return self2._sounds[i].reset();
          }
        }
        return new Sound2(self2);
      },
      _drain: function() {
        var self2 = this;
        var limit = self2._pool;
        var cnt = 0;
        var i = 0;
        if (self2._sounds.length < limit) {
          return;
        }
        for (i = 0; i < self2._sounds.length; i++) {
          if (self2._sounds[i]._ended) {
            cnt++;
          }
        }
        for (i = self2._sounds.length - 1; i >= 0; i--) {
          if (cnt <= limit) {
            return;
          }
          if (self2._sounds[i]._ended) {
            if (self2._webAudio && self2._sounds[i]._node) {
              self2._sounds[i]._node.disconnect(0);
            }
            self2._sounds.splice(i, 1);
            cnt--;
          }
        }
      },
      _getSoundIds: function(id2) {
        var self2 = this;
        if (typeof id2 === "undefined") {
          var ids = [];
          for (var i = 0; i < self2._sounds.length; i++) {
            ids.push(self2._sounds[i]._id);
          }
          return ids;
        } else {
          return [id2];
        }
      },
      _refreshBuffer: function(sound2) {
        var self2 = this;
        sound2._node.bufferSource = Howler2.ctx.createBufferSource();
        sound2._node.bufferSource.buffer = cache[self2._src];
        if (sound2._panner) {
          sound2._node.bufferSource.connect(sound2._panner);
        } else {
          sound2._node.bufferSource.connect(sound2._node);
        }
        sound2._node.bufferSource.loop = sound2._loop;
        if (sound2._loop) {
          sound2._node.bufferSource.loopStart = sound2._start || 0;
          sound2._node.bufferSource.loopEnd = sound2._stop || 0;
        }
        sound2._node.bufferSource.playbackRate.setValueAtTime(sound2._rate, Howler2.ctx.currentTime);
        return self2;
      },
      _cleanBuffer: function(node) {
        var self2 = this;
        var isIOS = Howler2._navigator && Howler2._navigator.vendor.indexOf("Apple") >= 0;
        if (Howler2._scratchBuffer && node.bufferSource) {
          node.bufferSource.onended = null;
          node.bufferSource.disconnect(0);
          if (isIOS) {
            try {
              node.bufferSource.buffer = Howler2._scratchBuffer;
            } catch (e) {
            }
          }
        }
        node.bufferSource = null;
        return self2;
      },
      _clearSound: function(node) {
        var checkIE = /MSIE |Trident\//.test(Howler2._navigator && Howler2._navigator.userAgent);
        if (!checkIE) {
          node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
        }
      }
    };
    var Sound2 = function(howl) {
      this._parent = howl;
      this.init();
    };
    Sound2.prototype = {
      init: function() {
        var self2 = this;
        var parent = self2._parent;
        self2._muted = parent._muted;
        self2._loop = parent._loop;
        self2._volume = parent._volume;
        self2._rate = parent._rate;
        self2._seek = 0;
        self2._paused = true;
        self2._ended = true;
        self2._sprite = "__default";
        self2._id = ++Howler2._counter;
        parent._sounds.push(self2);
        self2.create();
        return self2;
      },
      create: function() {
        var self2 = this;
        var parent = self2._parent;
        var volume = Howler2._muted || self2._muted || self2._parent._muted ? 0 : self2._volume;
        if (parent._webAudio) {
          self2._node = typeof Howler2.ctx.createGain === "undefined" ? Howler2.ctx.createGainNode() : Howler2.ctx.createGain();
          self2._node.gain.setValueAtTime(volume, Howler2.ctx.currentTime);
          self2._node.paused = true;
          self2._node.connect(Howler2.masterGain);
        } else if (!Howler2.noAudio) {
          self2._node = Howler2._obtainHtml5Audio();
          self2._errorFn = self2._errorListener.bind(self2);
          self2._node.addEventListener("error", self2._errorFn, false);
          self2._loadFn = self2._loadListener.bind(self2);
          self2._node.addEventListener(Howler2._canPlayEvent, self2._loadFn, false);
          self2._endFn = self2._endListener.bind(self2);
          self2._node.addEventListener("ended", self2._endFn, false);
          self2._node.src = parent._src;
          self2._node.preload = parent._preload === true ? "auto" : parent._preload;
          self2._node.volume = volume * Howler2.volume();
          self2._node.load();
        }
        return self2;
      },
      reset: function() {
        var self2 = this;
        var parent = self2._parent;
        self2._muted = parent._muted;
        self2._loop = parent._loop;
        self2._volume = parent._volume;
        self2._rate = parent._rate;
        self2._seek = 0;
        self2._rateSeek = 0;
        self2._paused = true;
        self2._ended = true;
        self2._sprite = "__default";
        self2._id = ++Howler2._counter;
        return self2;
      },
      _errorListener: function() {
        var self2 = this;
        self2._parent._emit("loaderror", self2._id, self2._node.error ? self2._node.error.code : 0);
        self2._node.removeEventListener("error", self2._errorFn, false);
      },
      _loadListener: function() {
        var self2 = this;
        var parent = self2._parent;
        parent._duration = Math.ceil(self2._node.duration * 10) / 10;
        if (Object.keys(parent._sprite).length === 0) {
          parent._sprite = {__default: [0, parent._duration * 1e3]};
        }
        if (parent._state !== "loaded") {
          parent._state = "loaded";
          parent._emit("load");
          parent._loadQueue();
        }
        self2._node.removeEventListener(Howler2._canPlayEvent, self2._loadFn, false);
      },
      _endListener: function() {
        var self2 = this;
        var parent = self2._parent;
        if (parent._duration === Infinity) {
          parent._duration = Math.ceil(self2._node.duration * 10) / 10;
          if (parent._sprite.__default[1] === Infinity) {
            parent._sprite.__default[1] = parent._duration * 1e3;
          }
          parent._ended(self2);
        }
        self2._node.removeEventListener("ended", self2._endFn, false);
      }
    };
    var cache = {};
    var loadBuffer = function(self2) {
      var url = self2._src;
      if (cache[url]) {
        self2._duration = cache[url].duration;
        loadSound(self2);
        return;
      }
      if (/^data:[^;]+;base64,/.test(url)) {
        var data = atob(url.split(",")[1]);
        var dataView = new Uint8Array(data.length);
        for (var i = 0; i < data.length; ++i) {
          dataView[i] = data.charCodeAt(i);
        }
        decodeAudioData(dataView.buffer, self2);
      } else {
        var xhr = new XMLHttpRequest();
        xhr.open(self2._xhr.method, url, true);
        xhr.withCredentials = self2._xhr.withCredentials;
        xhr.responseType = "arraybuffer";
        if (self2._xhr.headers) {
          Object.keys(self2._xhr.headers).forEach(function(key) {
            xhr.setRequestHeader(key, self2._xhr.headers[key]);
          });
        }
        xhr.onload = function() {
          var code = (xhr.status + "")[0];
          if (code !== "0" && code !== "2" && code !== "3") {
            self2._emit("loaderror", null, "Failed loading audio file with status: " + xhr.status + ".");
            return;
          }
          decodeAudioData(xhr.response, self2);
        };
        xhr.onerror = function() {
          if (self2._webAudio) {
            self2._html5 = true;
            self2._webAudio = false;
            self2._sounds = [];
            delete cache[url];
            self2.load();
          }
        };
        safeXhrSend(xhr);
      }
    };
    var safeXhrSend = function(xhr) {
      try {
        xhr.send();
      } catch (e) {
        xhr.onerror();
      }
    };
    var decodeAudioData = function(arraybuffer, self2) {
      var error = function() {
        self2._emit("loaderror", null, "Decoding audio data failed.");
      };
      var success = function(buffer) {
        if (buffer && self2._sounds.length > 0) {
          cache[self2._src] = buffer;
          loadSound(self2, buffer);
        } else {
          error();
        }
      };
      if (typeof Promise !== "undefined" && Howler2.ctx.decodeAudioData.length === 1) {
        Howler2.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
      } else {
        Howler2.ctx.decodeAudioData(arraybuffer, success, error);
      }
    };
    var loadSound = function(self2, buffer) {
      if (buffer && !self2._duration) {
        self2._duration = buffer.duration;
      }
      if (Object.keys(self2._sprite).length === 0) {
        self2._sprite = {__default: [0, self2._duration * 1e3]};
      }
      if (self2._state !== "loaded") {
        self2._state = "loaded";
        self2._emit("load");
        self2._loadQueue();
      }
    };
    var setupAudioContext = function() {
      if (!Howler2.usingWebAudio) {
        return;
      }
      try {
        if (typeof AudioContext !== "undefined") {
          Howler2.ctx = new AudioContext();
        } else if (typeof webkitAudioContext !== "undefined") {
          Howler2.ctx = new webkitAudioContext();
        } else {
          Howler2.usingWebAudio = false;
        }
      } catch (e) {
        Howler2.usingWebAudio = false;
      }
      if (!Howler2.ctx) {
        Howler2.usingWebAudio = false;
      }
      var iOS = /iP(hone|od|ad)/.test(Howler2._navigator && Howler2._navigator.platform);
      var appVersion = Howler2._navigator && Howler2._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      var version2 = appVersion ? parseInt(appVersion[1], 10) : null;
      if (iOS && version2 && version2 < 9) {
        var safari = /safari/.test(Howler2._navigator && Howler2._navigator.userAgent.toLowerCase());
        if (Howler2._navigator && !safari) {
          Howler2.usingWebAudio = false;
        }
      }
      if (Howler2.usingWebAudio) {
        Howler2.masterGain = typeof Howler2.ctx.createGain === "undefined" ? Howler2.ctx.createGainNode() : Howler2.ctx.createGain();
        Howler2.masterGain.gain.setValueAtTime(Howler2._muted ? 0 : Howler2._volume, Howler2.ctx.currentTime);
        Howler2.masterGain.connect(Howler2.ctx.destination);
      }
      Howler2._setup();
    };
    {
      exports.Howler = Howler2;
      exports.Howl = Howl2;
    }
    if (typeof commonjsGlobal !== "undefined") {
      commonjsGlobal.HowlerGlobal = HowlerGlobal2;
      commonjsGlobal.Howler = Howler2;
      commonjsGlobal.Howl = Howl2;
      commonjsGlobal.Sound = Sound2;
    } else if (typeof window !== "undefined") {
      window.HowlerGlobal = HowlerGlobal2;
      window.Howler = Howler2;
      window.Howl = Howl2;
      window.Sound = Sound2;
    }
  })();
  /*!
   *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
   *  
   *  howler.js v2.2.3
   *  howlerjs.com
   *
   *  (c) 2013-2020, James Simpson of GoldFire Studios
   *  goldfirestudios.com
   *
   *  MIT License
   */
  (function() {
    HowlerGlobal.prototype._pos = [0, 0, 0];
    HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
    HowlerGlobal.prototype.stereo = function(pan) {
      var self2 = this;
      if (!self2.ctx || !self2.ctx.listener) {
        return self2;
      }
      for (var i = self2._howls.length - 1; i >= 0; i--) {
        self2._howls[i].stereo(pan);
      }
      return self2;
    };
    HowlerGlobal.prototype.pos = function(x, y2, z) {
      var self2 = this;
      if (!self2.ctx || !self2.ctx.listener) {
        return self2;
      }
      y2 = typeof y2 !== "number" ? self2._pos[1] : y2;
      z = typeof z !== "number" ? self2._pos[2] : z;
      if (typeof x === "number") {
        self2._pos = [x, y2, z];
        if (typeof self2.ctx.listener.positionX !== "undefined") {
          self2.ctx.listener.positionX.setTargetAtTime(self2._pos[0], Howler.ctx.currentTime, 0.1);
          self2.ctx.listener.positionY.setTargetAtTime(self2._pos[1], Howler.ctx.currentTime, 0.1);
          self2.ctx.listener.positionZ.setTargetAtTime(self2._pos[2], Howler.ctx.currentTime, 0.1);
        } else {
          self2.ctx.listener.setPosition(self2._pos[0], self2._pos[1], self2._pos[2]);
        }
      } else {
        return self2._pos;
      }
      return self2;
    };
    HowlerGlobal.prototype.orientation = function(x, y2, z, xUp, yUp, zUp) {
      var self2 = this;
      if (!self2.ctx || !self2.ctx.listener) {
        return self2;
      }
      var or = self2._orientation;
      y2 = typeof y2 !== "number" ? or[1] : y2;
      z = typeof z !== "number" ? or[2] : z;
      xUp = typeof xUp !== "number" ? or[3] : xUp;
      yUp = typeof yUp !== "number" ? or[4] : yUp;
      zUp = typeof zUp !== "number" ? or[5] : zUp;
      if (typeof x === "number") {
        self2._orientation = [x, y2, z, xUp, yUp, zUp];
        if (typeof self2.ctx.listener.forwardX !== "undefined") {
          self2.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
          self2.ctx.listener.forwardY.setTargetAtTime(y2, Howler.ctx.currentTime, 0.1);
          self2.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
          self2.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
          self2.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
          self2.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
        } else {
          self2.ctx.listener.setOrientation(x, y2, z, xUp, yUp, zUp);
        }
      } else {
        return or;
      }
      return self2;
    };
    Howl.prototype.init = function(_super) {
      return function(o) {
        var self2 = this;
        self2._orientation = o.orientation || [1, 0, 0];
        self2._stereo = o.stereo || null;
        self2._pos = o.pos || null;
        self2._pannerAttr = {
          coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : 360,
          coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : 360,
          coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : 0,
          distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : "inverse",
          maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : 1e4,
          panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : "HRTF",
          refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : 1,
          rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : 1
        };
        self2._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
        self2._onpos = o.onpos ? [{fn: o.onpos}] : [];
        self2._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];
        return _super.call(this, o);
      };
    }(Howl.prototype.init);
    Howl.prototype.stereo = function(pan, id2) {
      var self2 = this;
      if (!self2._webAudio) {
        return self2;
      }
      if (self2._state !== "loaded") {
        self2._queue.push({
          event: "stereo",
          action: function() {
            self2.stereo(pan, id2);
          }
        });
        return self2;
      }
      var pannerType = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
      if (typeof id2 === "undefined") {
        if (typeof pan === "number") {
          self2._stereo = pan;
          self2._pos = [pan, 0, 0];
        } else {
          return self2._stereo;
        }
      }
      var ids = self2._getSoundIds(id2);
      for (var i = 0; i < ids.length; i++) {
        var sound2 = self2._soundById(ids[i]);
        if (sound2) {
          if (typeof pan === "number") {
            sound2._stereo = pan;
            sound2._pos = [pan, 0, 0];
            if (sound2._node) {
              sound2._pannerAttr.panningModel = "equalpower";
              if (!sound2._panner || !sound2._panner.pan) {
                setupPanner(sound2, pannerType);
              }
              if (pannerType === "spatial") {
                if (typeof sound2._panner.positionX !== "undefined") {
                  sound2._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                  sound2._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                  sound2._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                } else {
                  sound2._panner.setPosition(pan, 0, 0);
                }
              } else {
                sound2._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
              }
            }
            self2._emit("stereo", sound2._id);
          } else {
            return sound2._stereo;
          }
        }
      }
      return self2;
    };
    Howl.prototype.pos = function(x, y2, z, id2) {
      var self2 = this;
      if (!self2._webAudio) {
        return self2;
      }
      if (self2._state !== "loaded") {
        self2._queue.push({
          event: "pos",
          action: function() {
            self2.pos(x, y2, z, id2);
          }
        });
        return self2;
      }
      y2 = typeof y2 !== "number" ? 0 : y2;
      z = typeof z !== "number" ? -0.5 : z;
      if (typeof id2 === "undefined") {
        if (typeof x === "number") {
          self2._pos = [x, y2, z];
        } else {
          return self2._pos;
        }
      }
      var ids = self2._getSoundIds(id2);
      for (var i = 0; i < ids.length; i++) {
        var sound2 = self2._soundById(ids[i]);
        if (sound2) {
          if (typeof x === "number") {
            sound2._pos = [x, y2, z];
            if (sound2._node) {
              if (!sound2._panner || sound2._panner.pan) {
                setupPanner(sound2, "spatial");
              }
              if (typeof sound2._panner.positionX !== "undefined") {
                sound2._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
                sound2._panner.positionY.setValueAtTime(y2, Howler.ctx.currentTime);
                sound2._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
              } else {
                sound2._panner.setPosition(x, y2, z);
              }
            }
            self2._emit("pos", sound2._id);
          } else {
            return sound2._pos;
          }
        }
      }
      return self2;
    };
    Howl.prototype.orientation = function(x, y2, z, id2) {
      var self2 = this;
      if (!self2._webAudio) {
        return self2;
      }
      if (self2._state !== "loaded") {
        self2._queue.push({
          event: "orientation",
          action: function() {
            self2.orientation(x, y2, z, id2);
          }
        });
        return self2;
      }
      y2 = typeof y2 !== "number" ? self2._orientation[1] : y2;
      z = typeof z !== "number" ? self2._orientation[2] : z;
      if (typeof id2 === "undefined") {
        if (typeof x === "number") {
          self2._orientation = [x, y2, z];
        } else {
          return self2._orientation;
        }
      }
      var ids = self2._getSoundIds(id2);
      for (var i = 0; i < ids.length; i++) {
        var sound2 = self2._soundById(ids[i]);
        if (sound2) {
          if (typeof x === "number") {
            sound2._orientation = [x, y2, z];
            if (sound2._node) {
              if (!sound2._panner) {
                if (!sound2._pos) {
                  sound2._pos = self2._pos || [0, 0, -0.5];
                }
                setupPanner(sound2, "spatial");
              }
              if (typeof sound2._panner.orientationX !== "undefined") {
                sound2._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
                sound2._panner.orientationY.setValueAtTime(y2, Howler.ctx.currentTime);
                sound2._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
              } else {
                sound2._panner.setOrientation(x, y2, z);
              }
            }
            self2._emit("orientation", sound2._id);
          } else {
            return sound2._orientation;
          }
        }
      }
      return self2;
    };
    Howl.prototype.pannerAttr = function() {
      var self2 = this;
      var args = arguments;
      var o, id2, sound2;
      if (!self2._webAudio) {
        return self2;
      }
      if (args.length === 0) {
        return self2._pannerAttr;
      } else if (args.length === 1) {
        if (typeof args[0] === "object") {
          o = args[0];
          if (typeof id2 === "undefined") {
            if (!o.pannerAttr) {
              o.pannerAttr = {
                coneInnerAngle: o.coneInnerAngle,
                coneOuterAngle: o.coneOuterAngle,
                coneOuterGain: o.coneOuterGain,
                distanceModel: o.distanceModel,
                maxDistance: o.maxDistance,
                refDistance: o.refDistance,
                rolloffFactor: o.rolloffFactor,
                panningModel: o.panningModel
              };
            }
            self2._pannerAttr = {
              coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== "undefined" ? o.pannerAttr.coneInnerAngle : self2._coneInnerAngle,
              coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== "undefined" ? o.pannerAttr.coneOuterAngle : self2._coneOuterAngle,
              coneOuterGain: typeof o.pannerAttr.coneOuterGain !== "undefined" ? o.pannerAttr.coneOuterGain : self2._coneOuterGain,
              distanceModel: typeof o.pannerAttr.distanceModel !== "undefined" ? o.pannerAttr.distanceModel : self2._distanceModel,
              maxDistance: typeof o.pannerAttr.maxDistance !== "undefined" ? o.pannerAttr.maxDistance : self2._maxDistance,
              refDistance: typeof o.pannerAttr.refDistance !== "undefined" ? o.pannerAttr.refDistance : self2._refDistance,
              rolloffFactor: typeof o.pannerAttr.rolloffFactor !== "undefined" ? o.pannerAttr.rolloffFactor : self2._rolloffFactor,
              panningModel: typeof o.pannerAttr.panningModel !== "undefined" ? o.pannerAttr.panningModel : self2._panningModel
            };
          }
        } else {
          sound2 = self2._soundById(parseInt(args[0], 10));
          return sound2 ? sound2._pannerAttr : self2._pannerAttr;
        }
      } else if (args.length === 2) {
        o = args[0];
        id2 = parseInt(args[1], 10);
      }
      var ids = self2._getSoundIds(id2);
      for (var i = 0; i < ids.length; i++) {
        sound2 = self2._soundById(ids[i]);
        if (sound2) {
          var pa2 = sound2._pannerAttr;
          pa2 = {
            coneInnerAngle: typeof o.coneInnerAngle !== "undefined" ? o.coneInnerAngle : pa2.coneInnerAngle,
            coneOuterAngle: typeof o.coneOuterAngle !== "undefined" ? o.coneOuterAngle : pa2.coneOuterAngle,
            coneOuterGain: typeof o.coneOuterGain !== "undefined" ? o.coneOuterGain : pa2.coneOuterGain,
            distanceModel: typeof o.distanceModel !== "undefined" ? o.distanceModel : pa2.distanceModel,
            maxDistance: typeof o.maxDistance !== "undefined" ? o.maxDistance : pa2.maxDistance,
            refDistance: typeof o.refDistance !== "undefined" ? o.refDistance : pa2.refDistance,
            rolloffFactor: typeof o.rolloffFactor !== "undefined" ? o.rolloffFactor : pa2.rolloffFactor,
            panningModel: typeof o.panningModel !== "undefined" ? o.panningModel : pa2.panningModel
          };
          var panner = sound2._panner;
          if (panner) {
            panner.coneInnerAngle = pa2.coneInnerAngle;
            panner.coneOuterAngle = pa2.coneOuterAngle;
            panner.coneOuterGain = pa2.coneOuterGain;
            panner.distanceModel = pa2.distanceModel;
            panner.maxDistance = pa2.maxDistance;
            panner.refDistance = pa2.refDistance;
            panner.rolloffFactor = pa2.rolloffFactor;
            panner.panningModel = pa2.panningModel;
          } else {
            if (!sound2._pos) {
              sound2._pos = self2._pos || [0, 0, -0.5];
            }
            setupPanner(sound2, "spatial");
          }
        }
      }
      return self2;
    };
    Sound.prototype.init = function(_super) {
      return function() {
        var self2 = this;
        var parent = self2._parent;
        self2._orientation = parent._orientation;
        self2._stereo = parent._stereo;
        self2._pos = parent._pos;
        self2._pannerAttr = parent._pannerAttr;
        _super.call(this);
        if (self2._stereo) {
          parent.stereo(self2._stereo);
        } else if (self2._pos) {
          parent.pos(self2._pos[0], self2._pos[1], self2._pos[2], self2._id);
        }
      };
    }(Sound.prototype.init);
    Sound.prototype.reset = function(_super) {
      return function() {
        var self2 = this;
        var parent = self2._parent;
        self2._orientation = parent._orientation;
        self2._stereo = parent._stereo;
        self2._pos = parent._pos;
        self2._pannerAttr = parent._pannerAttr;
        if (self2._stereo) {
          parent.stereo(self2._stereo);
        } else if (self2._pos) {
          parent.pos(self2._pos[0], self2._pos[1], self2._pos[2], self2._id);
        } else if (self2._panner) {
          self2._panner.disconnect(0);
          self2._panner = void 0;
          parent._refreshBuffer(self2);
        }
        return _super.call(this);
      };
    }(Sound.prototype.reset);
    var setupPanner = function(sound2, type) {
      type = type || "spatial";
      if (type === "spatial") {
        sound2._panner = Howler.ctx.createPanner();
        sound2._panner.coneInnerAngle = sound2._pannerAttr.coneInnerAngle;
        sound2._panner.coneOuterAngle = sound2._pannerAttr.coneOuterAngle;
        sound2._panner.coneOuterGain = sound2._pannerAttr.coneOuterGain;
        sound2._panner.distanceModel = sound2._pannerAttr.distanceModel;
        sound2._panner.maxDistance = sound2._pannerAttr.maxDistance;
        sound2._panner.refDistance = sound2._pannerAttr.refDistance;
        sound2._panner.rolloffFactor = sound2._pannerAttr.rolloffFactor;
        sound2._panner.panningModel = sound2._pannerAttr.panningModel;
        if (typeof sound2._panner.positionX !== "undefined") {
          sound2._panner.positionX.setValueAtTime(sound2._pos[0], Howler.ctx.currentTime);
          sound2._panner.positionY.setValueAtTime(sound2._pos[1], Howler.ctx.currentTime);
          sound2._panner.positionZ.setValueAtTime(sound2._pos[2], Howler.ctx.currentTime);
        } else {
          sound2._panner.setPosition(sound2._pos[0], sound2._pos[1], sound2._pos[2]);
        }
        if (typeof sound2._panner.orientationX !== "undefined") {
          sound2._panner.orientationX.setValueAtTime(sound2._orientation[0], Howler.ctx.currentTime);
          sound2._panner.orientationY.setValueAtTime(sound2._orientation[1], Howler.ctx.currentTime);
          sound2._panner.orientationZ.setValueAtTime(sound2._orientation[2], Howler.ctx.currentTime);
        } else {
          sound2._panner.setOrientation(sound2._orientation[0], sound2._orientation[1], sound2._orientation[2]);
        }
      } else {
        sound2._panner = Howler.ctx.createStereoPanner();
        sound2._panner.pan.setValueAtTime(sound2._stereo, Howler.ctx.currentTime);
      }
      sound2._panner.connect(sound2._node);
      if (!sound2._paused) {
        sound2._parent.pause(sound2._id, true).play(sound2._id, true);
      }
    };
  })();
});
var Howl$1 = howler.Howl;

// docs/dist/Ready.js
var sound = new Howl$1({
  src: ["Pausa.mp3"]
});
function Ready({teamName, player, players: players2, first}) {
  if (!players2[teamName])
    return /* @__PURE__ */ react.createElement("h1", null, "Loading...");
  const {points} = players2[teamName];
  const isFirst = first === teamName;
  return /* @__PURE__ */ react.createElement("div", {
    className: "Ready",
    style: {
      backgroundColor: first ? isFirst ? "green" : "red" : "#282c34"
    }
  }, /* @__PURE__ */ react.createElement("h3", null, teamName), first ? /* @__PURE__ */ react.createElement("h1", null, isFirst ? "Tú respondes" : first + " responde") : /* @__PURE__ */ react.createElement("button", {
    onClick: () => {
      gun_default.get("game").put({first: teamName, playing: false});
      sound.play();
    }
  }, "STOP"), /* @__PURE__ */ react.createElement("h2", null, points));
}
var Ready_default = Ready;

// docs/dist/Admin.js
import questions from "./questions.json";
function Admin({players: players2, question, setCorrect, setWrong}) {
  const [inputQuestion, setInputQuestion] = useState(question);
  console.log("players: ", players2);
  return /* @__PURE__ */ react.createElement("div", {
    className: "Admin"
  }, /* @__PURE__ */ react.createElement("h1", null, "Admin"), /* @__PURE__ */ react.createElement("label", null, "Pregunta:", /* @__PURE__ */ react.createElement("input", {
    type: "number",
    onChange: (e) => {
      setInputQuestion(+e.target.value);
    },
    className: "selectQuestion",
    value: inputQuestion
  })), /* @__PURE__ */ react.createElement("div", {
    style: {display: "flex", margin: "20px"}
  }, /* @__PURE__ */ react.createElement("button", {
    className: "reset",
    onClick: () => {
      gun_default.get("game").put({
        question: inputQuestion,
        time: 0,
        playing: false,
        first: null
      });
    }
  }, "Reset"), /* @__PURE__ */ react.createElement("button", {
    className: "play",
    onClick: () => {
      gun_default.get("game").put({question: inputQuestion, playing: true});
    }
  }, "Play"), /* @__PURE__ */ react.createElement("button", {
    className: "pause",
    onClick: () => {
      gun_default.get("game").put({playing: false});
    }
  }, "Pause"), /* @__PURE__ */ react.createElement("button", {
    className: "reveal",
    onClick: () => {
      gun_default.get("game").put({time: 0.999, playing: false});
    }
  }, "Reveal")), /* @__PURE__ */ react.createElement("table", null, /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("th", null, "Jugador"), /* @__PURE__ */ react.createElement("th", null, "Puntos"))), /* @__PURE__ */ react.createElement("tbody", null, Object.values(players2).map((player) => /* @__PURE__ */ react.createElement("tr", {
    key: player.name
  }, /* @__PURE__ */ react.createElement("td", null, player.name), /* @__PURE__ */ react.createElement("td", null, /* @__PURE__ */ react.createElement("input", {
    type: "number",
    onChange: (e) => {
      gun_default.get("players").get(player.name).put({points: e.target.value});
    },
    className: "points",
    value: player.points
  })), /* @__PURE__ */ react.createElement("td", null, /* @__PURE__ */ react.createElement("button", {
    className: "correct",
    onClick: () => {
      setCorrect(true);
      gun_default.get("players").get(player.name).put({
        points: Number(players2[player.name].points) + 100
      });
    }
  }, "+")), /* @__PURE__ */ react.createElement("td", null, /* @__PURE__ */ react.createElement("button", {
    className: "wrong",
    onClick: () => {
      setWrong(true);
      gun_default.get("players").get(player.name).put({
        points: Number(players2[player.name].points) - 100
      });
    }
  }, "-")), /* @__PURE__ */ react.createElement("td", null, /* @__PURE__ */ react.createElement("button", {
    className: "remove",
    onClick: () => {
      gun_default.get("players").get(player.name).put({deleted: true});
    }
  }, "X")))))));
}
var Admin_default = Admin;

// docs/_snowpack/pkg/react-player.js
var loadScript = function load(src, opts, cb2) {
  var head = document.head || document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  if (typeof opts === "function") {
    cb2 = opts;
    opts = {};
  }
  opts = opts || {};
  cb2 = cb2 || function() {
  };
  script.type = opts.type || "text/javascript";
  script.charset = opts.charset || "utf8";
  script.async = "async" in opts ? !!opts.async : true;
  script.src = src;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = "" + opts.text;
  }
  var onend = "onload" in script ? stdOnEnd : ieOnEnd;
  onend(script, cb2);
  if (!script.onload) {
    stdOnEnd(script, cb2);
  }
  head.appendChild(script);
};
function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}
function stdOnEnd(script, cb2) {
  script.onload = function() {
    this.onerror = this.onload = null;
    cb2(null, script);
  };
  script.onerror = function() {
    this.onerror = this.onload = null;
    cb2(new Error("Failed to load " + this.src), script);
  };
}
function ieOnEnd(script, cb2) {
  script.onreadystatechange = function() {
    if (this.readyState != "complete" && this.readyState != "loaded")
      return;
    this.onreadystatechange = null;
    cb2(null, script);
  };
}
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
var utils = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.parseStartTime = parseStartTime;
  exports.parseEndTime = parseEndTime;
  exports.randomString = randomString;
  exports.queryString = queryString;
  exports.getSDK = getSDK;
  exports.getConfig = getConfig;
  exports.omit = omit;
  exports.callPlayer = callPlayer;
  exports.isMediaStream = isMediaStream;
  exports.isBlobUrl = isBlobUrl;
  exports.supportsWebKitPresentationMode = supportsWebKitPresentationMode;
  var _loadScript = _interopRequireDefault(loadScript);
  var _deepmerge = _interopRequireDefault(cjs);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
  var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
  var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
  var MATCH_NUMERIC = /^\d+$/;
  function parseTimeParam(url, pattern) {
    if (url instanceof Array) {
      return void 0;
    }
    var match = url.match(pattern);
    if (match) {
      var stamp = match[1];
      if (stamp.match(MATCH_START_STAMP)) {
        return parseTimeString(stamp);
      }
      if (MATCH_NUMERIC.test(stamp)) {
        return parseInt(stamp);
      }
    }
    return void 0;
  }
  function parseTimeString(stamp) {
    var seconds = 0;
    var array = MATCH_START_STAMP.exec(stamp);
    while (array !== null) {
      var _array = array, _array2 = _slicedToArray(_array, 3), count = _array2[1], period = _array2[2];
      if (period === "h")
        seconds += parseInt(count, 10) * 60 * 60;
      if (period === "m")
        seconds += parseInt(count, 10) * 60;
      if (period === "s")
        seconds += parseInt(count, 10);
      array = MATCH_START_STAMP.exec(stamp);
    }
    return seconds;
  }
  function parseStartTime(url) {
    return parseTimeParam(url, MATCH_START_QUERY);
  }
  function parseEndTime(url) {
    return parseTimeParam(url, MATCH_END_QUERY);
  }
  function randomString() {
    return Math.random().toString(36).substr(2, 5);
  }
  function queryString(object) {
    return Object.keys(object).map(function(key) {
      return "".concat(key, "=").concat(object[key]);
    }).join("&");
  }
  function getGlobal(key) {
    if (window[key]) {
      return window[key];
    }
    if (window.exports && window.exports[key]) {
      return window.exports[key];
    }
    if (window.module && window.module.exports && window.module.exports[key]) {
      return window.module.exports[key];
    }
    return null;
  }
  var requests = {};
  function getSDK(url, sdkGlobal) {
    var sdkReady = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    var isLoaded = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
      return true;
    };
    var fetchScript = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : _loadScript["default"];
    var existingGlobal = getGlobal(sdkGlobal);
    if (existingGlobal && isLoaded(existingGlobal)) {
      return Promise.resolve(existingGlobal);
    }
    return new Promise(function(resolve, reject) {
      if (requests[url]) {
        requests[url].push({
          resolve,
          reject
        });
        return;
      }
      requests[url] = [{
        resolve,
        reject
      }];
      var onLoaded = function onLoaded2(sdk) {
        requests[url].forEach(function(request) {
          return request.resolve(sdk);
        });
      };
      if (sdkReady) {
        var previousOnReady = window[sdkReady];
        window[sdkReady] = function() {
          if (previousOnReady)
            previousOnReady();
          onLoaded(getGlobal(sdkGlobal));
        };
      }
      fetchScript(url, function(err) {
        if (err) {
          requests[url].forEach(function(request) {
            return request.reject(err);
          });
          requests[url] = null;
        } else if (!sdkReady) {
          onLoaded(getGlobal(sdkGlobal));
        }
      });
    });
  }
  function getConfig(props2, defaultProps) {
    return (0, _deepmerge["default"])(defaultProps.config, props2.config);
  }
  function omit(object) {
    var _ref;
    for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arrays[_key - 1] = arguments[_key];
    }
    var omitKeys = (_ref = []).concat.apply(_ref, arrays);
    var output = {};
    var keys = Object.keys(object);
    for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
      var key = _keys[_i2];
      if (omitKeys.indexOf(key) === -1) {
        output[key] = object[key];
      }
    }
    return output;
  }
  function callPlayer(method) {
    var _this$player;
    if (!this.player || !this.player[method]) {
      var message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c – ");
      if (!this.player) {
        message += "The player was not available";
      } else if (!this.player[method]) {
        message += "The method was not available";
      }
      console.warn(message, "font-weight: bold", "");
      return null;
    }
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return (_this$player = this.player)[method].apply(_this$player, args);
  }
  function isMediaStream(url) {
    return typeof window !== "undefined" && typeof window.MediaStream !== "undefined" && url instanceof window.MediaStream;
  }
  function isBlobUrl(url) {
    return /^blob:/.test(url);
  }
  function supportsWebKitPresentationMode() {
    var video = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement("video");
    var notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
    return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === "function" && notMobile;
  }
});
var patterns = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.canPlay = exports.FLV_EXTENSIONS = exports.DASH_EXTENSIONS = exports.HLS_EXTENSIONS = exports.VIDEO_EXTENSIONS = exports.AUDIO_EXTENSIONS = exports.MATCH_URL_KALTURA = exports.MATCH_URL_VIDYARD = exports.MATCH_URL_MIXCLOUD = exports.MATCH_URL_DAILYMOTION = exports.MATCH_URL_TWITCH_CHANNEL = exports.MATCH_URL_TWITCH_VIDEO = exports.MATCH_URL_WISTIA = exports.MATCH_URL_STREAMABLE = exports.MATCH_URL_FACEBOOK_WATCH = exports.MATCH_URL_FACEBOOK = exports.MATCH_URL_VIMEO = exports.MATCH_URL_SOUNDCLOUD = exports.MATCH_URL_YOUTUBE = void 0;
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F2 = function F3() {
        };
        return {s: F2, n: function n() {
          if (i >= o.length)
            return {done: true};
          return {done: false, value: o[i++]};
        }, e: function e(_e) {
          throw _e;
        }, f: F2};
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {s: function s() {
      it = o[Symbol.iterator]();
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    }};
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  var MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
  exports.MATCH_URL_YOUTUBE = MATCH_URL_YOUTUBE;
  var MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
  exports.MATCH_URL_SOUNDCLOUD = MATCH_URL_SOUNDCLOUD;
  var MATCH_URL_VIMEO = /vimeo\.com\/.+/;
  exports.MATCH_URL_VIMEO = MATCH_URL_VIMEO;
  var MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
  exports.MATCH_URL_FACEBOOK = MATCH_URL_FACEBOOK;
  var MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
  exports.MATCH_URL_FACEBOOK_WATCH = MATCH_URL_FACEBOOK_WATCH;
  var MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
  exports.MATCH_URL_STREAMABLE = MATCH_URL_STREAMABLE;
  var MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
  exports.MATCH_URL_WISTIA = MATCH_URL_WISTIA;
  var MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
  exports.MATCH_URL_TWITCH_VIDEO = MATCH_URL_TWITCH_VIDEO;
  var MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
  exports.MATCH_URL_TWITCH_CHANNEL = MATCH_URL_TWITCH_CHANNEL;
  var MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
  exports.MATCH_URL_DAILYMOTION = MATCH_URL_DAILYMOTION;
  var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
  exports.MATCH_URL_MIXCLOUD = MATCH_URL_MIXCLOUD;
  var MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-]+)/;
  exports.MATCH_URL_VIDYARD = MATCH_URL_VIDYARD;
  var MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;
  exports.MATCH_URL_KALTURA = MATCH_URL_KALTURA;
  var AUDIO_EXTENSIONS = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
  exports.AUDIO_EXTENSIONS = AUDIO_EXTENSIONS;
  var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
  exports.VIDEO_EXTENSIONS = VIDEO_EXTENSIONS;
  var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
  exports.HLS_EXTENSIONS = HLS_EXTENSIONS;
  var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
  exports.DASH_EXTENSIONS = DASH_EXTENSIONS;
  var FLV_EXTENSIONS = /\.(flv)($|\?)/i;
  exports.FLV_EXTENSIONS = FLV_EXTENSIONS;
  var canPlayFile = function canPlayFile2(url) {
    if (url instanceof Array) {
      var _iterator = _createForOfIteratorHelper(url), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var item = _step.value;
          if (typeof item === "string" && canPlayFile2(item)) {
            return true;
          }
          if (canPlayFile2(item.src)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return false;
    }
    if ((0, utils.isMediaStream)(url) || (0, utils.isBlobUrl)(url)) {
      return true;
    }
    return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
  };
  var canPlay = {
    youtube: function youtube(url) {
      if (url instanceof Array) {
        return url.every(function(item) {
          return MATCH_URL_YOUTUBE.test(item);
        });
      }
      return MATCH_URL_YOUTUBE.test(url);
    },
    soundcloud: function soundcloud(url) {
      return MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url);
    },
    vimeo: function vimeo(url) {
      return MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
    },
    facebook: function facebook(url) {
      return MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url);
    },
    streamable: function streamable(url) {
      return MATCH_URL_STREAMABLE.test(url);
    },
    wistia: function wistia(url) {
      return MATCH_URL_WISTIA.test(url);
    },
    twitch: function twitch(url) {
      return MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url);
    },
    dailymotion: function dailymotion(url) {
      return MATCH_URL_DAILYMOTION.test(url);
    },
    mixcloud: function mixcloud(url) {
      return MATCH_URL_MIXCLOUD.test(url);
    },
    vidyard: function vidyard(url) {
      return MATCH_URL_VIDYARD.test(url);
    },
    kaltura: function kaltura(url) {
      return MATCH_URL_KALTURA.test(url);
    },
    file: canPlayFile
  };
  exports.canPlay = canPlay;
});
var YouTube_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://www.youtube.com/iframe_api";
  var SDK_GLOBAL = "YT";
  var SDK_GLOBAL_READY = "onYouTubeIframeAPIReady";
  var MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;
  var MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/;
  var MATCH_NOCOOKIE = /youtube-nocookie\.com/;
  var NOCOOKIE_HOST = "https://www.youtube-nocookie.com";
  var YouTube = /* @__PURE__ */ function(_Component) {
    _inherits(YouTube2, _Component);
    var _super = _createSuper(YouTube2);
    function YouTube2() {
      var _this;
      _classCallCheck(this, YouTube2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "parsePlaylist", function(url) {
        if (url instanceof Array) {
          return {
            listType: "playlist",
            playlist: url.map(_this.getID).join(",")
          };
        }
        if (MATCH_PLAYLIST.test(url)) {
          var _url$match = url.match(MATCH_PLAYLIST), _url$match2 = _slicedToArray(_url$match, 2), playlistId = _url$match2[1];
          return {
            listType: "playlist",
            list: playlistId.replace(/^UC/, "UU")
          };
        }
        if (MATCH_USER_UPLOADS.test(url)) {
          var _url$match3 = url.match(MATCH_USER_UPLOADS), _url$match4 = _slicedToArray(_url$match3, 2), username = _url$match4[1];
          return {
            listType: "user_uploads",
            list: username
          };
        }
        return {};
      });
      _defineProperty(_assertThisInitialized(_this), "onStateChange", function(event) {
        var data = event.data;
        var _this$props = _this.props, onPlay = _this$props.onPlay, onPause = _this$props.onPause, onBuffer = _this$props.onBuffer, onBufferEnd = _this$props.onBufferEnd, onEnded = _this$props.onEnded, onReady = _this$props.onReady, loop = _this$props.loop, _this$props$config = _this$props.config, playerVars = _this$props$config.playerVars, onUnstarted = _this$props$config.onUnstarted;
        var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState, UNSTARTED = _window$SDK_GLOBAL$Pl.UNSTARTED, PLAYING = _window$SDK_GLOBAL$Pl.PLAYING, PAUSED = _window$SDK_GLOBAL$Pl.PAUSED, BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING, ENDED = _window$SDK_GLOBAL$Pl.ENDED, CUED = _window$SDK_GLOBAL$Pl.CUED;
        if (data === UNSTARTED)
          onUnstarted();
        if (data === PLAYING) {
          onPlay();
          onBufferEnd();
        }
        if (data === PAUSED)
          onPause();
        if (data === BUFFERING)
          onBuffer();
        if (data === ENDED) {
          var isPlaylist = !!_this.callPlayer("getPlaylist");
          if (loop && !isPlaylist) {
            if (playerVars.start) {
              _this.seekTo(playerVars.start);
            } else {
              _this.play();
            }
          }
          onEnded();
        }
        if (data === CUED)
          onReady();
      });
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.callPlayer("mute");
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        _this.callPlayer("unMute");
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function(container) {
        _this.container = container;
      });
      return _this;
    }
    _createClass(YouTube2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "getID",
      value: function getID(url) {
        if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {
          return null;
        }
        return url.match(patterns.MATCH_URL_YOUTUBE)[1];
      }
    }, {
      key: "load",
      value: function load2(url, isReady) {
        var _this2 = this;
        var _this$props2 = this.props, playing = _this$props2.playing, muted = _this$props2.muted, playsinline = _this$props2.playsinline, controls = _this$props2.controls, loop = _this$props2.loop, config = _this$props2.config, _onError = _this$props2.onError;
        var playerVars = config.playerVars, embedOptions = config.embedOptions;
        var id2 = this.getID(url);
        if (isReady) {
          if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {
            this.player.loadPlaylist(this.parsePlaylist(url));
            return;
          }
          this.player.cueVideoById({
            videoId: id2,
            startSeconds: (0, utils.parseStartTime)(url) || playerVars.start,
            endSeconds: (0, utils.parseEndTime)(url) || playerVars.end
          });
          return;
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function(YT) {
          return YT.loaded;
        }).then(function(YT) {
          if (!_this2.container)
            return;
          _this2.player = new YT.Player(_this2.container, _objectSpread({
            width: "100%",
            height: "100%",
            videoId: id2,
            playerVars: _objectSpread(_objectSpread({
              autoplay: playing ? 1 : 0,
              mute: muted ? 1 : 0,
              controls: controls ? 1 : 0,
              start: (0, utils.parseStartTime)(url),
              end: (0, utils.parseEndTime)(url),
              origin: window.location.origin,
              playsinline: playsinline ? 1 : 0
            }, _this2.parsePlaylist(url)), playerVars),
            events: {
              onReady: function onReady() {
                if (loop) {
                  _this2.player.setLoop(true);
                }
                _this2.props.onReady();
              },
              onStateChange: _this2.onStateChange,
              onError: function onError(event) {
                return _onError(event.data);
              }
            },
            host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : void 0
          }, embedOptions));
        }, _onError);
        if (embedOptions.events) {
          console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause");
        }
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("playVideo");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pauseVideo");
      }
    }, {
      key: "stop",
      value: function stop() {
        if (!document.body.contains(this.callPlayer("getIframe")))
          return;
        this.callPlayer("stopVideo");
      }
    }, {
      key: "seekTo",
      value: function seekTo(amount) {
        this.callPlayer("seekTo", amount);
        if (!this.props.playing) {
          this.pause();
        }
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("setVolume", fraction * 100);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        this.callPlayer("setPlaybackRate", rate);
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        this.callPlayer("setLoop", loop);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.callPlayer("getDuration");
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer("getCurrentTime");
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
      }
    }, {
      key: "render",
      value: function render2() {
        var display = this.props.display;
        var style = {
          width: "100%",
          height: "100%",
          display
        };
        return /* @__PURE__ */ _react["default"].createElement("div", {
          style
        }, /* @__PURE__ */ _react["default"].createElement("div", {
          ref: this.ref
        }));
      }
    }]);
    return YouTube2;
  }(_react.Component);
  exports["default"] = YouTube;
  _defineProperty(YouTube, "displayName", "YouTube");
  _defineProperty(YouTube, "canPlay", patterns.canPlay.youtube);
});
var SoundCloud_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://w.soundcloud.com/player/api.js";
  var SDK_GLOBAL = "SC";
  var SoundCloud = /* @__PURE__ */ function(_Component) {
    _inherits(SoundCloud2, _Component);
    var _super = _createSuper(SoundCloud2);
    function SoundCloud2() {
      var _this;
      _classCallCheck(this, SoundCloud2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "fractionLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.setVolume(0);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        if (_this.props.volume !== null) {
          _this.setVolume(_this.props.volume);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function(iframe) {
        _this.iframe = iframe;
      });
      return _this;
    }
    _createClass(SoundCloud2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url, isReady) {
        var _this2 = this;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function(SC) {
          if (!_this2.iframe)
            return;
          var _SC$Widget$Events = SC.Widget.Events, PLAY = _SC$Widget$Events.PLAY, PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS, PAUSE = _SC$Widget$Events.PAUSE, FINISH = _SC$Widget$Events.FINISH, ERROR = _SC$Widget$Events.ERROR;
          if (!isReady) {
            _this2.player = SC.Widget(_this2.iframe);
            _this2.player.bind(PLAY, _this2.props.onPlay);
            _this2.player.bind(PAUSE, function() {
              var remaining = _this2.duration - _this2.currentTime;
              if (remaining < 0.05) {
                return;
              }
              _this2.props.onPause();
            });
            _this2.player.bind(PLAY_PROGRESS, function(e) {
              _this2.currentTime = e.currentPosition / 1e3;
              _this2.fractionLoaded = e.loadedProgress;
            });
            _this2.player.bind(FINISH, function() {
              return _this2.props.onEnded();
            });
            _this2.player.bind(ERROR, function(e) {
              return _this2.props.onError(e);
            });
          }
          _this2.player.load(url, _objectSpread(_objectSpread({}, _this2.props.config.options), {}, {
            callback: function callback() {
              _this2.player.getDuration(function(duration) {
                _this2.duration = duration / 1e3;
                _this2.props.onReady();
              });
            }
          }));
        });
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("play");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer("seekTo", seconds * 1e3);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("setVolume", fraction * 100);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.fractionLoaded * this.duration;
      }
    }, {
      key: "render",
      value: function render2() {
        var display = this.props.display;
        var style = {
          width: "100%",
          height: "100%",
          display
        };
        return /* @__PURE__ */ _react["default"].createElement("iframe", {
          ref: this.ref,
          src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
          style,
          frameBorder: 0,
          allow: "autoplay"
        });
      }
    }]);
    return SoundCloud2;
  }(_react.Component);
  exports["default"] = SoundCloud;
  _defineProperty(SoundCloud, "displayName", "SoundCloud");
  _defineProperty(SoundCloud, "canPlay", patterns.canPlay.soundcloud);
  _defineProperty(SoundCloud, "loopOnEnded", true);
});
var Vimeo_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://player.vimeo.com/api/player.js";
  var SDK_GLOBAL = "Vimeo";
  var Vimeo = /* @__PURE__ */ function(_Component) {
    _inherits(Vimeo2, _Component);
    var _super = _createSuper(Vimeo2);
    function Vimeo2() {
      var _this;
      _classCallCheck(this, Vimeo2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.setVolume(0);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        if (_this.props.volume !== null) {
          _this.setVolume(_this.props.volume);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function(container) {
        _this.container = container;
      });
      return _this;
    }
    _createClass(Vimeo2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url) {
        var _this2 = this;
        this.duration = null;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function(Vimeo3) {
          if (!_this2.container)
            return;
          _this2.player = new Vimeo3.Player(_this2.container, _objectSpread({
            url,
            autoplay: _this2.props.playing,
            muted: _this2.props.muted,
            loop: _this2.props.loop,
            playsinline: _this2.props.playsinline,
            controls: _this2.props.controls
          }, _this2.props.config.playerOptions));
          _this2.player.ready().then(function() {
            var iframe = _this2.container.querySelector("iframe");
            iframe.style.width = "100%";
            iframe.style.height = "100%";
          })["catch"](_this2.props.onError);
          _this2.player.on("loaded", function() {
            _this2.props.onReady();
            _this2.refreshDuration();
          });
          _this2.player.on("play", function() {
            _this2.props.onPlay();
            _this2.refreshDuration();
          });
          _this2.player.on("pause", _this2.props.onPause);
          _this2.player.on("seeked", function(e) {
            return _this2.props.onSeek(e.seconds);
          });
          _this2.player.on("ended", _this2.props.onEnded);
          _this2.player.on("error", _this2.props.onError);
          _this2.player.on("timeupdate", function(_ref) {
            var seconds = _ref.seconds;
            _this2.currentTime = seconds;
          });
          _this2.player.on("progress", function(_ref2) {
            var seconds = _ref2.seconds;
            _this2.secondsLoaded = seconds;
          });
          _this2.player.on("bufferstart", _this2.props.onBuffer);
          _this2.player.on("bufferend", _this2.props.onBufferEnd);
        }, this.props.onError);
      }
    }, {
      key: "refreshDuration",
      value: function refreshDuration() {
        var _this3 = this;
        this.player.getDuration().then(function(duration) {
          _this3.duration = duration;
        });
      }
    }, {
      key: "play",
      value: function play() {
        var promise = this.callPlayer("play");
        if (promise) {
          promise["catch"](this.props.onError);
        }
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
        this.callPlayer("unload");
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer("setCurrentTime", seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("setVolume", fraction);
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        this.callPlayer("setLoop", loop);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        this.callPlayer("setPlaybackRate", rate);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.secondsLoaded;
      }
    }, {
      key: "render",
      value: function render2() {
        var display = this.props.display;
        var style = {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display
        };
        return /* @__PURE__ */ _react["default"].createElement("div", {
          key: this.props.url,
          ref: this.ref,
          style
        });
      }
    }]);
    return Vimeo2;
  }(_react.Component);
  exports["default"] = Vimeo;
  _defineProperty(Vimeo, "displayName", "Vimeo");
  _defineProperty(Vimeo, "canPlay", patterns.canPlay.vimeo);
  _defineProperty(Vimeo, "forceLoad", true);
});
var Facebook_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://connect.facebook.net/en_US/sdk.js";
  var SDK_GLOBAL = "FB";
  var SDK_GLOBAL_READY = "fbAsyncInit";
  var PLAYER_ID_PREFIX = "facebook-player-";
  var Facebook = /* @__PURE__ */ function(_Component) {
    _inherits(Facebook2, _Component);
    var _super = _createSuper(Facebook2);
    function Facebook2() {
      var _this;
      _classCallCheck(this, Facebook2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, utils.randomString)()));
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.callPlayer("mute");
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        _this.callPlayer("unmute");
      });
      return _this;
    }
    _createClass(Facebook2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url, isReady) {
        var _this2 = this;
        if (isReady) {
          (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function(FB) {
            return FB.XFBML.parse();
          });
          return;
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function(FB) {
          FB.init({
            appId: _this2.props.config.appId,
            xfbml: true,
            version: _this2.props.config.version
          });
          FB.Event.subscribe("xfbml.render", function(msg) {
            _this2.props.onLoaded();
          });
          FB.Event.subscribe("xfbml.ready", function(msg) {
            if (msg.type === "video" && msg.id === _this2.playerID) {
              _this2.player = msg.instance;
              _this2.player.subscribe("startedPlaying", _this2.props.onPlay);
              _this2.player.subscribe("paused", _this2.props.onPause);
              _this2.player.subscribe("finishedPlaying", _this2.props.onEnded);
              _this2.player.subscribe("startedBuffering", _this2.props.onBuffer);
              _this2.player.subscribe("finishedBuffering", _this2.props.onBufferEnd);
              _this2.player.subscribe("error", _this2.props.onError);
              if (_this2.props.muted) {
                _this2.callPlayer("mute");
              } else {
                _this2.callPlayer("unmute");
              }
              _this2.props.onReady();
              document.getElementById(_this2.playerID).querySelector("iframe").style.visibility = "visible";
            }
          });
        });
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("play");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer("seek", seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("setVolume", fraction);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.callPlayer("getDuration");
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer("getCurrentPosition");
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render2() {
        var attributes = this.props.config.attributes;
        var style = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ _react["default"].createElement("div", _extends({
          style,
          id: this.playerID,
          className: "fb-video",
          "data-href": this.props.url,
          "data-autoplay": this.props.playing ? "true" : "false",
          "data-allowfullscreen": "true",
          "data-controls": this.props.controls ? "true" : "false"
        }, attributes));
      }
    }]);
    return Facebook2;
  }(_react.Component);
  exports["default"] = Facebook;
  _defineProperty(Facebook, "displayName", "Facebook");
  _defineProperty(Facebook, "canPlay", patterns.canPlay.facebook);
  _defineProperty(Facebook, "loopOnEnded", true);
});
var Streamable_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://cdn.embed.ly/player-0.1.0.min.js";
  var SDK_GLOBAL = "playerjs";
  var Streamable = /* @__PURE__ */ function(_Component) {
    _inherits(Streamable2, _Component);
    var _super = _createSuper(Streamable2);
    function Streamable2() {
      var _this;
      _classCallCheck(this, Streamable2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.callPlayer("mute");
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        _this.callPlayer("unmute");
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function(iframe) {
        _this.iframe = iframe;
      });
      return _this;
    }
    _createClass(Streamable2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url) {
        var _this2 = this;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function(playerjs) {
          if (!_this2.iframe)
            return;
          _this2.player = new playerjs.Player(_this2.iframe);
          _this2.player.setLoop(_this2.props.loop);
          _this2.player.on("ready", _this2.props.onReady);
          _this2.player.on("play", _this2.props.onPlay);
          _this2.player.on("pause", _this2.props.onPause);
          _this2.player.on("seeked", _this2.props.onSeek);
          _this2.player.on("ended", _this2.props.onEnded);
          _this2.player.on("error", _this2.props.onError);
          _this2.player.on("timeupdate", function(_ref) {
            var duration = _ref.duration, seconds = _ref.seconds;
            _this2.duration = duration;
            _this2.currentTime = seconds;
          });
          _this2.player.on("buffered", function(_ref2) {
            var percent = _ref2.percent;
            if (_this2.duration) {
              _this2.secondsLoaded = _this2.duration * percent;
            }
          });
          if (_this2.props.muted) {
            _this2.player.mute();
          }
        }, this.props.onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("play");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer("setCurrentTime", seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("setVolume", fraction * 100);
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        this.callPlayer("setLoop", loop);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.secondsLoaded;
      }
    }, {
      key: "render",
      value: function render2() {
        var id2 = this.props.url.match(patterns.MATCH_URL_STREAMABLE)[1];
        var style = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ _react["default"].createElement("iframe", {
          ref: this.ref,
          src: "https://streamable.com/o/".concat(id2),
          frameBorder: "0",
          scrolling: "no",
          style,
          allowFullScreen: true
        });
      }
    }]);
    return Streamable2;
  }(_react.Component);
  exports["default"] = Streamable;
  _defineProperty(Streamable, "displayName", "Streamable");
  _defineProperty(Streamable, "canPlay", patterns.canPlay.streamable);
});
var Wistia_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://fast.wistia.com/assets/external/E-v1.js";
  var SDK_GLOBAL = "Wistia";
  var PLAYER_ID_PREFIX = "wistia-player-";
  var Wistia = /* @__PURE__ */ function(_Component) {
    _inherits(Wistia2, _Component);
    var _super = _createSuper(Wistia2);
    function Wistia2() {
      var _this;
      _classCallCheck(this, Wistia2);
      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(_args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, utils.randomString)()));
      _defineProperty(_assertThisInitialized(_this), "onPlay", function() {
        var _this$props;
        return (_this$props = _this.props).onPlay.apply(_this$props, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onPause", function() {
        var _this$props2;
        return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onSeek", function() {
        var _this$props3;
        return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onEnded", function() {
        var _this$props4;
        return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.callPlayer("mute");
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        _this.callPlayer("unmute");
      });
      return _this;
    }
    _createClass(Wistia2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url) {
        var _this2 = this;
        var _this$props5 = this.props, playing = _this$props5.playing, muted = _this$props5.muted, controls = _this$props5.controls, _onReady = _this$props5.onReady, config = _this$props5.config, onError = _this$props5.onError;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function(Wistia3) {
          if (config.customControls) {
            config.customControls.forEach(function(control) {
              return Wistia3.defineControl(control);
            });
          }
          window._wq = window._wq || [];
          window._wq.push({
            id: _this2.playerID,
            options: _objectSpread({
              autoPlay: playing,
              silentAutoPlay: "allow",
              muted,
              controlsVisibleOnLoad: controls,
              fullscreenButton: controls,
              playbar: controls,
              playbackRateControl: controls,
              qualityControl: controls,
              volumeControl: controls,
              settingsControl: controls,
              smallPlayButton: controls
            }, config.options),
            onReady: function onReady(player) {
              _this2.player = player;
              _this2.unbind();
              _this2.player.bind("play", _this2.onPlay);
              _this2.player.bind("pause", _this2.onPause);
              _this2.player.bind("seek", _this2.onSeek);
              _this2.player.bind("end", _this2.onEnded);
              _onReady();
            }
          });
        }, onError);
      }
    }, {
      key: "unbind",
      value: function unbind() {
        this.player.unbind("play", this.onPlay);
        this.player.unbind("pause", this.onPause);
        this.player.unbind("seek", this.onSeek);
        this.player.unbind("end", this.onEnded);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("play");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
        this.unbind();
        this.callPlayer("remove");
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer("time", seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("volume", fraction);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        this.callPlayer("playbackRate", rate);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.callPlayer("duration");
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer("time");
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render2() {
        var url = this.props.url;
        var videoID = url && url.match(patterns.MATCH_URL_WISTIA)[1];
        var className = "wistia_embed wistia_async_".concat(videoID);
        var style = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ _react["default"].createElement("div", {
          id: this.playerID,
          key: videoID,
          className,
          style
        });
      }
    }]);
    return Wistia2;
  }(_react.Component);
  exports["default"] = Wistia;
  _defineProperty(Wistia, "displayName", "Wistia");
  _defineProperty(Wistia, "canPlay", patterns.canPlay.wistia);
  _defineProperty(Wistia, "loopOnEnded", true);
});
var Twitch_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://player.twitch.tv/js/embed/v1.js";
  var SDK_GLOBAL = "Twitch";
  var PLAYER_ID_PREFIX = "twitch-player-";
  var Twitch = /* @__PURE__ */ function(_Component) {
    _inherits(Twitch2, _Component);
    var _super = _createSuper(Twitch2);
    function Twitch2() {
      var _this;
      _classCallCheck(this, Twitch2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, utils.randomString)()));
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.callPlayer("setMuted", true);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        _this.callPlayer("setMuted", false);
      });
      return _this;
    }
    _createClass(Twitch2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url, isReady) {
        var _this2 = this;
        var _this$props = this.props, playsinline = _this$props.playsinline, onError = _this$props.onError, config = _this$props.config, controls = _this$props.controls;
        var isChannel = patterns.MATCH_URL_TWITCH_CHANNEL.test(url);
        var id2 = isChannel ? url.match(patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(patterns.MATCH_URL_TWITCH_VIDEO)[1];
        if (isReady) {
          if (isChannel) {
            this.player.setChannel(id2);
          } else {
            this.player.setVideo("v" + id2);
          }
          return;
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function(Twitch3) {
          _this2.player = new Twitch3.Player(_this2.playerID, _objectSpread({
            video: isChannel ? "" : id2,
            channel: isChannel ? id2 : "",
            height: "100%",
            width: "100%",
            playsinline,
            autoplay: _this2.props.playing,
            muted: _this2.props.muted,
            controls: isChannel ? true : controls,
            time: (0, utils.parseStartTime)(url)
          }, config.options));
          var _Twitch$Player = Twitch3.Player, READY = _Twitch$Player.READY, PLAYING = _Twitch$Player.PLAYING, PAUSE = _Twitch$Player.PAUSE, ENDED = _Twitch$Player.ENDED, ONLINE = _Twitch$Player.ONLINE, OFFLINE = _Twitch$Player.OFFLINE;
          _this2.player.addEventListener(READY, _this2.props.onReady);
          _this2.player.addEventListener(PLAYING, _this2.props.onPlay);
          _this2.player.addEventListener(PAUSE, _this2.props.onPause);
          _this2.player.addEventListener(ENDED, _this2.props.onEnded);
          _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);
          _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);
        }, onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("play");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
        this.callPlayer("pause");
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer("seek", seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("setVolume", fraction);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.callPlayer("getDuration");
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer("getCurrentTime");
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render2() {
        var style = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ _react["default"].createElement("div", {
          style,
          id: this.playerID
        });
      }
    }]);
    return Twitch2;
  }(_react.Component);
  exports["default"] = Twitch;
  _defineProperty(Twitch, "displayName", "Twitch");
  _defineProperty(Twitch, "canPlay", patterns.canPlay.twitch);
  _defineProperty(Twitch, "loopOnEnded", true);
});
var DailyMotion_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://api.dmcdn.net/all.js";
  var SDK_GLOBAL = "DM";
  var SDK_GLOBAL_READY = "dmAsyncInit";
  var DailyMotion = /* @__PURE__ */ function(_Component) {
    _inherits(DailyMotion2, _Component);
    var _super = _createSuper(DailyMotion2);
    function DailyMotion2() {
      var _this;
      _classCallCheck(this, DailyMotion2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "onDurationChange", function() {
        var duration = _this.getDuration();
        _this.props.onDuration(duration);
      });
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.callPlayer("setMuted", true);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        _this.callPlayer("setMuted", false);
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function(container) {
        _this.container = container;
      });
      return _this;
    }
    _createClass(DailyMotion2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url) {
        var _this2 = this;
        var _this$props = this.props, controls = _this$props.controls, config = _this$props.config, onError = _this$props.onError, playing = _this$props.playing;
        var _url$match = url.match(patterns.MATCH_URL_DAILYMOTION), _url$match2 = _slicedToArray(_url$match, 2), id2 = _url$match2[1];
        if (this.player) {
          this.player.load(id2, {
            start: (0, utils.parseStartTime)(url),
            autoplay: playing
          });
          return;
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function(DM) {
          return DM.player;
        }).then(function(DM) {
          if (!_this2.container)
            return;
          var Player = DM.player;
          _this2.player = new Player(_this2.container, {
            width: "100%",
            height: "100%",
            video: id2,
            params: _objectSpread({
              controls,
              autoplay: _this2.props.playing,
              mute: _this2.props.muted,
              start: (0, utils.parseStartTime)(url),
              origin: window.location.origin
            }, config.params),
            events: {
              apiready: _this2.props.onReady,
              seeked: function seeked() {
                return _this2.props.onSeek(_this2.player.currentTime);
              },
              video_end: _this2.props.onEnded,
              durationchange: _this2.onDurationChange,
              pause: _this2.props.onPause,
              playing: _this2.props.onPlay,
              waiting: _this2.props.onBuffer,
              error: function error(event) {
                return onError(event);
              }
            }
          });
        }, onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("play");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer("seek", seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("setVolume", fraction);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.player.duration || null;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.player.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.player.bufferedTime;
      }
    }, {
      key: "render",
      value: function render2() {
        var display = this.props.display;
        var style = {
          width: "100%",
          height: "100%",
          display
        };
        return /* @__PURE__ */ _react["default"].createElement("div", {
          style
        }, /* @__PURE__ */ _react["default"].createElement("div", {
          ref: this.ref
        }));
      }
    }]);
    return DailyMotion2;
  }(_react.Component);
  exports["default"] = DailyMotion;
  _defineProperty(DailyMotion, "displayName", "DailyMotion");
  _defineProperty(DailyMotion, "canPlay", patterns.canPlay.dailymotion);
  _defineProperty(DailyMotion, "loopOnEnded", true);
});
var Mixcloud_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://widget.mixcloud.com/media/js/widgetApi.js";
  var SDK_GLOBAL = "Mixcloud";
  var Mixcloud = /* @__PURE__ */ function(_Component) {
    _inherits(Mixcloud2, _Component);
    var _super = _createSuper(Mixcloud2);
    function Mixcloud2() {
      var _this;
      _classCallCheck(this, Mixcloud2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function(iframe) {
        _this.iframe = iframe;
      });
      return _this;
    }
    _createClass(Mixcloud2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url) {
        var _this2 = this;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function(Mixcloud3) {
          _this2.player = Mixcloud3.PlayerWidget(_this2.iframe);
          _this2.player.ready.then(function() {
            _this2.player.events.play.on(_this2.props.onPlay);
            _this2.player.events.pause.on(_this2.props.onPause);
            _this2.player.events.ended.on(_this2.props.onEnded);
            _this2.player.events.error.on(_this2.props.error);
            _this2.player.events.progress.on(function(seconds, duration) {
              _this2.currentTime = seconds;
              _this2.duration = duration;
            });
            _this2.props.onReady();
          });
        }, this.props.onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("play");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer("seek", seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render2() {
        var _this$props = this.props, url = _this$props.url, config = _this$props.config;
        var id2 = url.match(patterns.MATCH_URL_MIXCLOUD)[1];
        var style = {
          width: "100%",
          height: "100%"
        };
        var query = (0, utils.queryString)(_objectSpread(_objectSpread({}, config.options), {}, {
          feed: "/".concat(id2, "/")
        }));
        return /* @__PURE__ */ _react["default"].createElement("iframe", {
          key: id2,
          ref: this.ref,
          style,
          src: "https://www.mixcloud.com/widget/iframe/?".concat(query),
          frameBorder: "0"
        });
      }
    }]);
    return Mixcloud2;
  }(_react.Component);
  exports["default"] = Mixcloud;
  _defineProperty(Mixcloud, "displayName", "Mixcloud");
  _defineProperty(Mixcloud, "canPlay", patterns.canPlay.mixcloud);
  _defineProperty(Mixcloud, "loopOnEnded", true);
});
var Vidyard_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://play.vidyard.com/embed/v4.js";
  var SDK_GLOBAL = "VidyardV4";
  var SDK_GLOBAL_READY = "onVidyardAPI";
  var Vidyard = /* @__PURE__ */ function(_Component) {
    _inherits(Vidyard2, _Component);
    var _super = _createSuper(Vidyard2);
    function Vidyard2() {
      var _this;
      _classCallCheck(this, Vidyard2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.setVolume(0);
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        if (_this.props.volume !== null) {
          _this.setVolume(_this.props.volume);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function(container) {
        _this.container = container;
      });
      return _this;
    }
    _createClass(Vidyard2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url) {
        var _this2 = this;
        var _this$props = this.props, playing = _this$props.playing, config = _this$props.config, onError = _this$props.onError, onDuration = _this$props.onDuration;
        var id2 = url && url.match(patterns.MATCH_URL_VIDYARD)[1];
        if (this.player) {
          this.stop();
        }
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function(Vidyard3) {
          if (!_this2.container)
            return;
          Vidyard3.api.addReadyListener(function(data, player) {
            _this2.player = player;
            _this2.player.on("ready", _this2.props.onReady);
            _this2.player.on("play", _this2.props.onPlay);
            _this2.player.on("pause", _this2.props.onPause);
            _this2.player.on("seek", _this2.props.onSeek);
            _this2.player.on("playerComplete", _this2.props.onEnded);
          }, id2);
          Vidyard3.api.renderPlayer(_objectSpread({
            uuid: id2,
            container: _this2.container,
            autoplay: playing ? 1 : 0
          }, config.options));
          Vidyard3.api.getPlayerMetadata(id2).then(function(meta) {
            _this2.duration = meta.length_in_seconds;
            onDuration(meta.length_in_seconds);
          });
        }, onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("play");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
        window.VidyardV4.api.destroyPlayer(this.player);
      }
    }, {
      key: "seekTo",
      value: function seekTo(amount) {
        this.callPlayer("seek", amount);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("setVolume", fraction);
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        this.callPlayer("setPlaybackSpeed", rate);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.callPlayer("currentTime");
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return null;
      }
    }, {
      key: "render",
      value: function render2() {
        var display = this.props.display;
        var style = {
          width: "100%",
          height: "100%",
          display
        };
        return /* @__PURE__ */ _react["default"].createElement("div", {
          style
        }, /* @__PURE__ */ _react["default"].createElement("div", {
          ref: this.ref
        }));
      }
    }]);
    return Vidyard2;
  }(_react.Component);
  exports["default"] = Vidyard;
  _defineProperty(Vidyard, "displayName", "Vidyard");
  _defineProperty(Vidyard, "canPlay", patterns.canPlay.vidyard);
});
var Kaltura_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SDK_URL = "https://cdn.embed.ly/player-0.1.0.min.js";
  var SDK_GLOBAL = "playerjs";
  var Kaltura = /* @__PURE__ */ function(_Component) {
    _inherits(Kaltura2, _Component);
    var _super = _createSuper(Kaltura2);
    function Kaltura2() {
      var _this;
      _classCallCheck(this, Kaltura2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "callPlayer", utils.callPlayer);
      _defineProperty(_assertThisInitialized(_this), "duration", null);
      _defineProperty(_assertThisInitialized(_this), "currentTime", null);
      _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.callPlayer("mute");
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        _this.callPlayer("unmute");
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function(iframe) {
        _this.iframe = iframe;
      });
      return _this;
    }
    _createClass(Kaltura2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
      }
    }, {
      key: "load",
      value: function load2(url) {
        var _this2 = this;
        (0, utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function(playerjs) {
          if (!_this2.iframe)
            return;
          _this2.player = new playerjs.Player(_this2.iframe);
          _this2.player.on("ready", function() {
            _this2.player.isReady = true;
            _this2.player.on("play", _this2.props.onPlay);
            _this2.player.on("pause", _this2.props.onPause);
            _this2.player.on("seeked", _this2.props.onSeek);
            _this2.player.on("ended", _this2.props.onEnded);
            _this2.player.on("error", _this2.props.onError);
            _this2.player.on("timeupdate", function(_ref) {
              var duration = _ref.duration, seconds = _ref.seconds;
              _this2.duration = duration;
              _this2.currentTime = seconds;
            });
            _this2.player.on("buffered", function(_ref2) {
              var percent = _ref2.percent;
              if (_this2.duration) {
                _this2.secondsLoaded = _this2.duration * percent;
              }
            });
            _this2.player.setLoop(_this2.props.loop);
            if (_this2.props.muted) {
              _this2.player.mute();
            }
            setTimeout(function() {
              _this2.props.onReady();
            });
          });
        }, this.props.onError);
      }
    }, {
      key: "play",
      value: function play() {
        this.callPlayer("play");
      }
    }, {
      key: "pause",
      value: function pause() {
        this.callPlayer("pause");
      }
    }, {
      key: "stop",
      value: function stop() {
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.callPlayer("setCurrentTime", seconds);
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.callPlayer("setVolume", fraction);
      }
    }, {
      key: "setLoop",
      value: function setLoop(loop) {
        this.callPlayer("setLoop", loop);
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        return this.duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        return this.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        return this.secondsLoaded;
      }
    }, {
      key: "render",
      value: function render2() {
        var style = {
          width: "100%",
          height: "100%"
        };
        return /* @__PURE__ */ _react["default"].createElement("iframe", {
          ref: this.ref,
          src: this.props.url,
          frameBorder: "0",
          scrolling: "no",
          style,
          allowFullScreen: true,
          allow: "encrypted-media",
          referrerPolicy: "no-referrer-when-downgrade"
        });
      }
    }]);
    return Kaltura2;
  }(_react.Component);
  exports["default"] = Kaltura;
  _defineProperty(Kaltura, "displayName", "Kaltura");
  _defineProperty(Kaltura, "canPlay", patterns.canPlay.kaltura);
});
var FilePlayer_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var HAS_NAVIGATOR = typeof navigator !== "undefined";
  var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
  var HLS_SDK_URL = "https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js";
  var HLS_GLOBAL = "Hls";
  var DASH_SDK_URL = "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js";
  var DASH_GLOBAL = "dashjs";
  var FLV_SDK_URL = "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js";
  var FLV_GLOBAL = "flvjs";
  var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
  var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
  var REPLACE_CLOUDFLARE_STREAM = "https://videodelivery.net/{id}/manifest/video.m3u8";
  var FilePlayer = /* @__PURE__ */ function(_Component) {
    _inherits(FilePlayer2, _Component);
    var _super = _createSuper(FilePlayer2);
    function FilePlayer2() {
      var _this;
      _classCallCheck(this, FilePlayer2);
      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(_args));
      _defineProperty(_assertThisInitialized(_this), "onReady", function() {
        var _this$props;
        return (_this$props = _this.props).onReady.apply(_this$props, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onPlay", function() {
        var _this$props2;
        return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onBuffer", function() {
        var _this$props3;
        return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function() {
        var _this$props4;
        return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onPause", function() {
        var _this$props5;
        return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onEnded", function() {
        var _this$props6;
        return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onError", function() {
        var _this$props7;
        return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function() {
        var _this$props8;
        return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function(e) {
        var _this$props9 = _this.props, onDisablePIP = _this$props9.onDisablePIP, playing = _this$props9.playing;
        onDisablePIP(e);
        if (playing) {
          _this.play();
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function(e) {
        if (_this.player && (0, utils.supportsWebKitPresentationMode)(_this.player)) {
          var webkitPresentationMode = _this.player.webkitPresentationMode;
          if (webkitPresentationMode === "picture-in-picture") {
            _this.onEnablePIP(e);
          } else if (webkitPresentationMode === "inline") {
            _this.onDisablePIP(e);
          }
        }
      });
      _defineProperty(_assertThisInitialized(_this), "onSeek", function(e) {
        _this.props.onSeek(e.target.currentTime);
      });
      _defineProperty(_assertThisInitialized(_this), "mute", function() {
        _this.player.muted = true;
      });
      _defineProperty(_assertThisInitialized(_this), "unmute", function() {
        _this.player.muted = false;
      });
      _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function(source, index) {
        if (typeof source === "string") {
          return /* @__PURE__ */ _react["default"].createElement("source", {
            key: index,
            src: source
          });
        }
        return /* @__PURE__ */ _react["default"].createElement("source", _extends({
          key: index
        }, source));
      });
      _defineProperty(_assertThisInitialized(_this), "renderTrack", function(track, index) {
        return /* @__PURE__ */ _react["default"].createElement("track", _extends({
          key: index
        }, track));
      });
      _defineProperty(_assertThisInitialized(_this), "ref", function(player) {
        if (_this.player) {
          _this.prevPlayer = _this.player;
        }
        _this.player = player;
      });
      return _this;
    }
    _createClass(FilePlayer2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.onMount && this.props.onMount(this);
        this.addListeners(this.player);
        if (IS_IOS) {
          this.player.load();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
          this.removeListeners(this.prevPlayer, prevProps.url);
          this.addListeners(this.player);
        }
        if (this.props.url !== prevProps.url && !(0, utils.isMediaStream)(this.props.url)) {
          this.player.srcObject = null;
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.removeListeners(this.player);
        if (this.hls) {
          this.hls.destroy();
        }
      }
    }, {
      key: "addListeners",
      value: function addListeners(player) {
        var _this$props10 = this.props, url = _this$props10.url, playsinline = _this$props10.playsinline;
        player.addEventListener("play", this.onPlay);
        player.addEventListener("waiting", this.onBuffer);
        player.addEventListener("playing", this.onBufferEnd);
        player.addEventListener("pause", this.onPause);
        player.addEventListener("seeked", this.onSeek);
        player.addEventListener("ended", this.onEnded);
        player.addEventListener("error", this.onError);
        player.addEventListener("enterpictureinpicture", this.onEnablePIP);
        player.addEventListener("leavepictureinpicture", this.onDisablePIP);
        player.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange);
        if (!this.shouldUseHLS(url)) {
          player.addEventListener("canplay", this.onReady);
        }
        if (playsinline) {
          player.setAttribute("playsinline", "");
          player.setAttribute("webkit-playsinline", "");
          player.setAttribute("x5-playsinline", "");
        }
      }
    }, {
      key: "removeListeners",
      value: function removeListeners(player, url) {
        player.removeEventListener("canplay", this.onReady);
        player.removeEventListener("play", this.onPlay);
        player.removeEventListener("waiting", this.onBuffer);
        player.removeEventListener("playing", this.onBufferEnd);
        player.removeEventListener("pause", this.onPause);
        player.removeEventListener("seeked", this.onSeek);
        player.removeEventListener("ended", this.onEnded);
        player.removeEventListener("error", this.onError);
        player.removeEventListener("enterpictureinpicture", this.onEnablePIP);
        player.removeEventListener("leavepictureinpicture", this.onDisablePIP);
        player.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange);
        if (!this.shouldUseHLS(url)) {
          player.removeEventListener("canplay", this.onReady);
        }
      }
    }, {
      key: "shouldUseAudio",
      value: function shouldUseAudio(props2) {
        if (props2.config.forceVideo) {
          return false;
        }
        if (props2.config.attributes.poster) {
          return false;
        }
        return patterns.AUDIO_EXTENSIONS.test(props2.url) || props2.config.forceAudio;
      }
    }, {
      key: "shouldUseHLS",
      value: function shouldUseHLS(url) {
        if (this.props.config.forceHLS) {
          return true;
        }
        if (IS_IOS) {
          return false;
        }
        return patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
      }
    }, {
      key: "shouldUseDASH",
      value: function shouldUseDASH(url) {
        return patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
      }
    }, {
      key: "shouldUseFLV",
      value: function shouldUseFLV(url) {
        return patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
      }
    }, {
      key: "load",
      value: function load2(url) {
        var _this2 = this;
        var _this$props$config = this.props.config, hlsVersion = _this$props$config.hlsVersion, hlsOptions = _this$props$config.hlsOptions, dashVersion = _this$props$config.dashVersion, flvVersion = _this$props$config.flvVersion;
        if (this.hls) {
          this.hls.destroy();
        }
        if (this.dash) {
          this.dash.reset();
        }
        if (this.shouldUseHLS(url)) {
          (0, utils.getSDK)(HLS_SDK_URL.replace("VERSION", hlsVersion), HLS_GLOBAL).then(function(Hls) {
            _this2.hls = new Hls(hlsOptions);
            _this2.hls.on(Hls.Events.MANIFEST_PARSED, function() {
              _this2.props.onReady();
            });
            _this2.hls.on(Hls.Events.ERROR, function(e, data) {
              _this2.props.onError(e, data, _this2.hls, Hls);
            });
            if (MATCH_CLOUDFLARE_STREAM.test(url)) {
              var id2 = url.match(MATCH_CLOUDFLARE_STREAM)[1];
              _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace("{id}", id2));
            } else {
              _this2.hls.loadSource(url);
            }
            _this2.hls.attachMedia(_this2.player);
            _this2.props.onLoaded();
          });
        }
        if (this.shouldUseDASH(url)) {
          (0, utils.getSDK)(DASH_SDK_URL.replace("VERSION", dashVersion), DASH_GLOBAL).then(function(dashjs) {
            _this2.dash = dashjs.MediaPlayer().create();
            _this2.dash.initialize(_this2.player, url, _this2.props.playing);
            _this2.dash.on("error", _this2.props.onError);
            if (parseInt(dashVersion) < 3) {
              _this2.dash.getDebug().setLogToBrowserConsole(false);
            } else {
              _this2.dash.updateSettings({
                debug: {
                  logLevel: dashjs.Debug.LOG_LEVEL_NONE
                }
              });
            }
            _this2.props.onLoaded();
          });
        }
        if (this.shouldUseFLV(url)) {
          (0, utils.getSDK)(FLV_SDK_URL.replace("VERSION", flvVersion), FLV_GLOBAL).then(function(flvjs) {
            _this2.flv = flvjs.createPlayer({
              type: "flv",
              url
            });
            _this2.flv.attachMediaElement(_this2.player);
            _this2.flv.load();
            _this2.props.onLoaded();
          });
        }
        if (url instanceof Array) {
          this.player.load();
        } else if ((0, utils.isMediaStream)(url)) {
          try {
            this.player.srcObject = url;
          } catch (e) {
            this.player.src = window.URL.createObjectURL(url);
          }
        }
      }
    }, {
      key: "play",
      value: function play() {
        var promise = this.player.play();
        if (promise) {
          promise["catch"](this.props.onError);
        }
      }
    }, {
      key: "pause",
      value: function pause() {
        this.player.pause();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.player.removeAttribute("src");
        if (this.dash) {
          this.dash.reset();
        }
      }
    }, {
      key: "seekTo",
      value: function seekTo(seconds) {
        this.player.currentTime = seconds;
      }
    }, {
      key: "setVolume",
      value: function setVolume(fraction) {
        this.player.volume = fraction;
      }
    }, {
      key: "enablePIP",
      value: function enablePIP() {
        if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
          this.player.requestPictureInPicture();
        } else if ((0, utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "picture-in-picture") {
          this.player.webkitSetPresentationMode("picture-in-picture");
        }
      }
    }, {
      key: "disablePIP",
      value: function disablePIP() {
        if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
          document.exitPictureInPicture();
        } else if ((0, utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== "inline") {
          this.player.webkitSetPresentationMode("inline");
        }
      }
    }, {
      key: "setPlaybackRate",
      value: function setPlaybackRate(rate) {
        this.player.playbackRate = rate;
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        if (!this.player)
          return null;
        var _this$player = this.player, duration = _this$player.duration, seekable = _this$player.seekable;
        if (duration === Infinity && seekable.length > 0) {
          return seekable.end(seekable.length - 1);
        }
        return duration;
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        if (!this.player)
          return null;
        return this.player.currentTime;
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        if (!this.player)
          return null;
        var buffered = this.player.buffered;
        if (buffered.length === 0) {
          return 0;
        }
        var end = buffered.end(buffered.length - 1);
        var duration = this.getDuration();
        if (end > duration) {
          return duration;
        }
        return end;
      }
    }, {
      key: "getSource",
      value: function getSource(url) {
        var useHLS = this.shouldUseHLS(url);
        var useDASH = this.shouldUseDASH(url);
        var useFLV = this.shouldUseFLV(url);
        if (url instanceof Array || (0, utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
          return void 0;
        }
        if (MATCH_DROPBOX_URL.test(url)) {
          return url.replace("www.dropbox.com", "dl.dropboxusercontent.com");
        }
        return url;
      }
    }, {
      key: "render",
      value: function render2() {
        var _this$props11 = this.props, url = _this$props11.url, playing = _this$props11.playing, loop = _this$props11.loop, controls = _this$props11.controls, muted = _this$props11.muted, config = _this$props11.config, width = _this$props11.width, height = _this$props11.height;
        var useAudio = this.shouldUseAudio(this.props);
        var Element2 = useAudio ? "audio" : "video";
        var style = {
          width: width === "auto" ? width : "100%",
          height: height === "auto" ? height : "100%"
        };
        return /* @__PURE__ */ _react["default"].createElement(Element2, _extends({
          ref: this.ref,
          src: this.getSource(url),
          style,
          preload: "auto",
          autoPlay: playing || void 0,
          controls,
          muted,
          loop
        }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
      }
    }]);
    return FilePlayer2;
  }(_react.Component);
  exports["default"] = FilePlayer;
  _defineProperty(FilePlayer, "displayName", "FilePlayer");
  _defineProperty(FilePlayer, "canPlay", patterns.canPlay.file);
});
var players = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var _default = [{
    key: "youtube",
    name: "YouTube",
    canPlay: patterns.canPlay.youtube,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(YouTube_1);
      });
    })
  }, {
    key: "soundcloud",
    name: "SoundCloud",
    canPlay: patterns.canPlay.soundcloud,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(SoundCloud_1);
      });
    })
  }, {
    key: "vimeo",
    name: "Vimeo",
    canPlay: patterns.canPlay.vimeo,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(Vimeo_1);
      });
    })
  }, {
    key: "facebook",
    name: "Facebook",
    canPlay: patterns.canPlay.facebook,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(Facebook_1);
      });
    })
  }, {
    key: "streamable",
    name: "Streamable",
    canPlay: patterns.canPlay.streamable,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(Streamable_1);
      });
    })
  }, {
    key: "wistia",
    name: "Wistia",
    canPlay: patterns.canPlay.wistia,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(Wistia_1);
      });
    })
  }, {
    key: "twitch",
    name: "Twitch",
    canPlay: patterns.canPlay.twitch,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(Twitch_1);
      });
    })
  }, {
    key: "dailymotion",
    name: "DailyMotion",
    canPlay: patterns.canPlay.dailymotion,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(DailyMotion_1);
      });
    })
  }, {
    key: "mixcloud",
    name: "Mixcloud",
    canPlay: patterns.canPlay.mixcloud,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(Mixcloud_1);
      });
    })
  }, {
    key: "vidyard",
    name: "Vidyard",
    canPlay: patterns.canPlay.vidyard,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(Vidyard_1);
      });
    })
  }, {
    key: "kaltura",
    name: "Kaltura",
    canPlay: patterns.canPlay.kaltura,
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(Kaltura_1);
      });
    })
  }, {
    key: "file",
    name: "FilePlayer",
    canPlay: patterns.canPlay.file,
    canEnablePIP: function canEnablePIP(url) {
      return patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, utils.supportsWebKitPresentationMode)()) && !patterns.AUDIO_EXTENSIONS.test(url);
    },
    lazyPlayer: /* @__PURE__ */ (0, react.lazy)(function() {
      return Promise.resolve().then(function() {
        return _interopRequireWildcard(FilePlayer_1);
      });
    })
  }];
  exports["default"] = _default;
});
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual3(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0]))
          return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0])))
          return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    if (hasElementType && a instanceof Element)
      return false;
    for (i = length; i-- !== 0; ) {
      if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys[i]], b[keys[i]]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var reactFastCompare = function isEqual2(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props2, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      return;
    }
    var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
var propTypes = createCommonjsModule(function(module) {
  {
    module.exports = factoryWithThrowingShims();
  }
});
var props = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defaultProps = exports.propTypes = void 0;
  var _propTypes = _interopRequireDefault(propTypes);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var string = _propTypes["default"].string, bool = _propTypes["default"].bool, number = _propTypes["default"].number, array = _propTypes["default"].array, oneOfType = _propTypes["default"].oneOfType, shape = _propTypes["default"].shape, object = _propTypes["default"].object, func = _propTypes["default"].func, node = _propTypes["default"].node;
  var propTypes$1 = {
    url: oneOfType([string, array, object]),
    playing: bool,
    loop: bool,
    controls: bool,
    volume: number,
    muted: bool,
    playbackRate: number,
    width: oneOfType([string, number]),
    height: oneOfType([string, number]),
    style: object,
    progressInterval: number,
    playsinline: bool,
    pip: bool,
    stopOnUnmount: bool,
    light: oneOfType([bool, string]),
    playIcon: node,
    previewTabIndex: number,
    fallback: node,
    wrapper: oneOfType([string, func, shape({
      render: func.isRequired
    })]),
    config: shape({
      soundcloud: shape({
        options: object
      }),
      youtube: shape({
        playerVars: object,
        embedOptions: object,
        onUnstarted: func
      }),
      facebook: shape({
        appId: string,
        version: string,
        playerId: string,
        attributes: object
      }),
      dailymotion: shape({
        params: object
      }),
      vimeo: shape({
        playerOptions: object
      }),
      file: shape({
        attributes: object,
        tracks: array,
        forceVideo: bool,
        forceAudio: bool,
        forceHLS: bool,
        forceDASH: bool,
        forceFLV: bool,
        hlsOptions: object,
        hlsVersion: string,
        dashVersion: string,
        flvVersion: string
      }),
      wistia: shape({
        options: object,
        playerId: string,
        customControls: array
      }),
      mixcloud: shape({
        options: object
      }),
      twitch: shape({
        options: object,
        playerId: string
      }),
      vidyard: shape({
        options: object
      })
    }),
    onReady: func,
    onStart: func,
    onPlay: func,
    onPause: func,
    onBuffer: func,
    onBufferEnd: func,
    onEnded: func,
    onError: func,
    onDuration: func,
    onSeek: func,
    onProgress: func,
    onClickPreview: func,
    onEnablePIP: func,
    onDisablePIP: func
  };
  exports.propTypes = propTypes$1;
  var noop = function noop2() {
  };
  var defaultProps = {
    playing: false,
    loop: false,
    controls: false,
    volume: null,
    muted: false,
    playbackRate: 1,
    width: "640px",
    height: "360px",
    style: {},
    progressInterval: 1e3,
    playsinline: false,
    pip: false,
    stopOnUnmount: true,
    light: false,
    fallback: null,
    wrapper: "div",
    previewTabIndex: 0,
    config: {
      soundcloud: {
        options: {
          visual: true,
          buying: false,
          liking: false,
          download: false,
          sharing: false,
          show_comments: false,
          show_playcount: false
        }
      },
      youtube: {
        playerVars: {
          playsinline: 1,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          modestbranding: 1
        },
        embedOptions: {},
        onUnstarted: noop
      },
      facebook: {
        appId: "1309697205772819",
        version: "v3.3",
        playerId: null,
        attributes: {}
      },
      dailymotion: {
        params: {
          api: 1,
          "endscreen-enable": false
        }
      },
      vimeo: {
        playerOptions: {
          autopause: false,
          byline: false,
          portrait: false,
          title: false
        }
      },
      file: {
        attributes: {},
        tracks: [],
        forceVideo: false,
        forceAudio: false,
        forceHLS: false,
        forceDASH: false,
        forceFLV: false,
        hlsOptions: {},
        hlsVersion: "0.14.16",
        dashVersion: "3.1.3",
        flvVersion: "1.5.0"
      },
      wistia: {
        options: {},
        playerId: null,
        customControls: null
      },
      mixcloud: {
        options: {
          hide_cover: 1
        }
      },
      twitch: {
        options: {},
        playerId: null
      },
      vidyard: {
        options: {}
      }
    },
    onReady: noop,
    onStart: noop,
    onPlay: noop,
    onPause: noop,
    onBuffer: noop,
    onBufferEnd: noop,
    onEnded: noop,
    onError: noop,
    onDuration: noop,
    onSeek: noop,
    onProgress: noop,
    onClickPreview: noop,
    onEnablePIP: noop,
    onDisablePIP: noop
  };
  exports.defaultProps = defaultProps;
});
var Player_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  var _reactFastCompare = _interopRequireDefault(reactFastCompare);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var SEEK_ON_PLAY_EXPIRY = 5e3;
  var Player = /* @__PURE__ */ function(_Component) {
    _inherits(Player2, _Component);
    var _super = _createSuper(Player2);
    function Player2() {
      var _this;
      _classCallCheck(this, Player2);
      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(_args));
      _defineProperty(_assertThisInitialized(_this), "mounted", false);
      _defineProperty(_assertThisInitialized(_this), "isReady", false);
      _defineProperty(_assertThisInitialized(_this), "isPlaying", false);
      _defineProperty(_assertThisInitialized(_this), "isLoading", true);
      _defineProperty(_assertThisInitialized(_this), "loadOnReady", null);
      _defineProperty(_assertThisInitialized(_this), "startOnPlay", true);
      _defineProperty(_assertThisInitialized(_this), "seekOnPlay", null);
      _defineProperty(_assertThisInitialized(_this), "onDurationCalled", false);
      _defineProperty(_assertThisInitialized(_this), "handlePlayerMount", function(player) {
        _this.player = player;
        _this.player.load(_this.props.url);
        _this.progress();
      });
      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function(key) {
        if (!_this.player)
          return null;
        return _this.player[key];
      });
      _defineProperty(_assertThisInitialized(_this), "progress", function() {
        if (_this.props.url && _this.player && _this.isReady) {
          var playedSeconds = _this.getCurrentTime() || 0;
          var loadedSeconds = _this.getSecondsLoaded();
          var duration = _this.getDuration();
          if (duration) {
            var progress = {
              playedSeconds,
              played: playedSeconds / duration
            };
            if (loadedSeconds !== null) {
              progress.loadedSeconds = loadedSeconds;
              progress.loaded = loadedSeconds / duration;
            }
            if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
              _this.props.onProgress(progress);
            }
            _this.prevPlayed = progress.playedSeconds;
            _this.prevLoaded = progress.loadedSeconds;
          }
        }
        _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
      });
      _defineProperty(_assertThisInitialized(_this), "handleReady", function() {
        if (!_this.mounted)
          return;
        _this.isReady = true;
        _this.isLoading = false;
        var _this$props = _this.props, onReady = _this$props.onReady, playing = _this$props.playing, volume = _this$props.volume, muted = _this$props.muted;
        onReady();
        if (!muted && volume !== null) {
          _this.player.setVolume(volume);
        }
        if (_this.loadOnReady) {
          _this.player.load(_this.loadOnReady, true);
          _this.loadOnReady = null;
        } else if (playing) {
          _this.player.play();
        }
        _this.handleDurationCheck();
      });
      _defineProperty(_assertThisInitialized(_this), "handlePlay", function() {
        _this.isPlaying = true;
        _this.isLoading = false;
        var _this$props2 = _this.props, onStart = _this$props2.onStart, onPlay = _this$props2.onPlay, playbackRate = _this$props2.playbackRate;
        if (_this.startOnPlay) {
          if (_this.player.setPlaybackRate && playbackRate !== 1) {
            _this.player.setPlaybackRate(playbackRate);
          }
          onStart();
          _this.startOnPlay = false;
        }
        onPlay();
        if (_this.seekOnPlay) {
          _this.seekTo(_this.seekOnPlay);
          _this.seekOnPlay = null;
        }
        _this.handleDurationCheck();
      });
      _defineProperty(_assertThisInitialized(_this), "handlePause", function(e) {
        _this.isPlaying = false;
        if (!_this.isLoading) {
          _this.props.onPause(e);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleEnded", function() {
        var _this$props3 = _this.props, activePlayer = _this$props3.activePlayer, loop = _this$props3.loop, onEnded = _this$props3.onEnded;
        if (activePlayer.loopOnEnded && loop) {
          _this.seekTo(0);
        }
        if (!loop) {
          _this.isPlaying = false;
          onEnded();
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleError", function() {
        var _this$props4;
        _this.isLoading = false;
        (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
      });
      _defineProperty(_assertThisInitialized(_this), "handleDurationCheck", function() {
        clearTimeout(_this.durationCheckTimeout);
        var duration = _this.getDuration();
        if (duration) {
          if (!_this.onDurationCalled) {
            _this.props.onDuration(duration);
            _this.onDurationCalled = true;
          }
        } else {
          _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
        }
      });
      _defineProperty(_assertThisInitialized(_this), "handleLoaded", function() {
        _this.isLoading = false;
      });
      return _this;
    }
    _createClass(Player2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        clearTimeout(this.progressTimeout);
        clearTimeout(this.durationCheckTimeout);
        if (this.isReady && this.props.stopOnUnmount) {
          this.player.stop();
          if (this.player.disablePIP) {
            this.player.disablePIP();
          }
        }
        this.mounted = false;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;
        if (!this.player) {
          return;
        }
        var _this$props5 = this.props, url = _this$props5.url, playing = _this$props5.playing, volume = _this$props5.volume, muted = _this$props5.muted, playbackRate = _this$props5.playbackRate, pip = _this$props5.pip, loop = _this$props5.loop, activePlayer = _this$props5.activePlayer;
        if (!(0, _reactFastCompare["default"])(prevProps.url, url)) {
          if (this.isLoading && !activePlayer.forceLoad) {
            console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
            this.loadOnReady = url;
            return;
          }
          this.isLoading = true;
          this.startOnPlay = true;
          this.onDurationCalled = false;
          this.player.load(url, this.isReady);
        }
        if (!prevProps.playing && playing && !this.isPlaying) {
          this.player.play();
        }
        if (prevProps.playing && !playing && this.isPlaying) {
          this.player.pause();
        }
        if (!prevProps.pip && pip && this.player.enablePIP) {
          this.player.enablePIP();
        }
        if (prevProps.pip && !pip && this.player.disablePIP) {
          this.player.disablePIP();
        }
        if (prevProps.volume !== volume && volume !== null) {
          this.player.setVolume(volume);
        }
        if (prevProps.muted !== muted) {
          if (muted) {
            this.player.mute();
          } else {
            this.player.unmute();
            if (volume !== null) {
              setTimeout(function() {
                return _this2.player.setVolume(volume);
              });
            }
          }
        }
        if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
          this.player.setPlaybackRate(playbackRate);
        }
        if (prevProps.loop !== loop && this.player.setLoop) {
          this.player.setLoop(loop);
        }
      }
    }, {
      key: "getDuration",
      value: function getDuration() {
        if (!this.isReady)
          return null;
        return this.player.getDuration();
      }
    }, {
      key: "getCurrentTime",
      value: function getCurrentTime() {
        if (!this.isReady)
          return null;
        return this.player.getCurrentTime();
      }
    }, {
      key: "getSecondsLoaded",
      value: function getSecondsLoaded() {
        if (!this.isReady)
          return null;
        return this.player.getSecondsLoaded();
      }
    }, {
      key: "seekTo",
      value: function seekTo(amount, type) {
        var _this3 = this;
        if (!this.isReady && amount !== 0) {
          this.seekOnPlay = amount;
          setTimeout(function() {
            _this3.seekOnPlay = null;
          }, SEEK_ON_PLAY_EXPIRY);
          return;
        }
        var isFraction = !type ? amount > 0 && amount < 1 : type === "fraction";
        if (isFraction) {
          var duration = this.player.getDuration();
          if (!duration) {
            console.warn("ReactPlayer: could not seek using fraction – duration not yet available");
            return;
          }
          this.player.seekTo(duration * amount);
          return;
        }
        this.player.seekTo(amount);
      }
    }, {
      key: "render",
      value: function render2() {
        var Player3 = this.props.activePlayer;
        if (!Player3) {
          return null;
        }
        return /* @__PURE__ */ _react["default"].createElement(Player3, _extends({}, this.props, {
          onMount: this.handlePlayerMount,
          onReady: this.handleReady,
          onPlay: this.handlePlay,
          onPause: this.handlePause,
          onEnded: this.handleEnded,
          onLoaded: this.handleLoaded,
          onError: this.handleError
        }));
      }
    }]);
    return Player2;
  }(_react.Component);
  exports["default"] = Player;
  _defineProperty(Player, "displayName", "Player");
  _defineProperty(Player, "propTypes", props.propTypes);
  _defineProperty(Player, "defaultProps", props.defaultProps);
});
var Preview_1 = createCommonjsModule(function(module, exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react = _interopRequireWildcard(react);
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache2 = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache2;
    };
    return cache2;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache2 = _getRequireWildcardCache();
    if (cache2 && cache2.has(obj)) {
      return cache2.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache2) {
      cache2.set(obj, newObj);
    }
    return newObj;
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  var ICON_SIZE = "64px";
  var cache = {};
  var Preview = /* @__PURE__ */ function(_Component) {
    _inherits(Preview2, _Component);
    var _super = _createSuper(Preview2);
    function Preview2() {
      var _this;
      _classCallCheck(this, Preview2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "mounted", false);
      _defineProperty(_assertThisInitialized(_this), "state", {
        image: null
      });
      _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function(e) {
        if (e.key === "Enter" || e.key === " ") {
          _this.props.onClick();
        }
      });
      return _this;
    }
    _createClass(Preview2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.mounted = true;
        this.fetchImage(this.props);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props = this.props, url = _this$props.url, light = _this$props.light;
        if (prevProps.url !== url || prevProps.light !== light) {
          this.fetchImage(this.props);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "fetchImage",
      value: function fetchImage(_ref) {
        var _this2 = this;
        var url = _ref.url, light = _ref.light;
        if (typeof light === "string") {
          this.setState({
            image: light
          });
          return;
        }
        if (cache[url]) {
          this.setState({
            image: cache[url]
          });
          return;
        }
        this.setState({
          image: null
        });
        return window.fetch("https://noembed.com/embed?url=".concat(url)).then(function(response) {
          return response.json();
        }).then(function(data) {
          if (data.thumbnail_url && _this2.mounted) {
            var image = data.thumbnail_url.replace("height=100", "height=480");
            _this2.setState({
              image
            });
            cache[url] = image;
          }
        });
      }
    }, {
      key: "render",
      value: function render2() {
        var _this$props2 = this.props, onClick = _this$props2.onClick, playIcon = _this$props2.playIcon, previewTabIndex = _this$props2.previewTabIndex;
        var image = this.state.image;
        var flexCenter = {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        };
        var styles = {
          preview: _objectSpread({
            width: "100%",
            height: "100%",
            backgroundImage: image ? "url(".concat(image, ")") : void 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer"
          }, flexCenter),
          shadow: _objectSpread({
            background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
            borderRadius: ICON_SIZE,
            width: ICON_SIZE,
            height: ICON_SIZE
          }, flexCenter),
          playIcon: {
            borderStyle: "solid",
            borderWidth: "16px 0 16px 26px",
            borderColor: "transparent transparent transparent white",
            marginLeft: "7px"
          }
        };
        var defaultPlayIcon = /* @__PURE__ */ _react["default"].createElement("div", {
          style: styles.shadow,
          className: "react-player__shadow"
        }, /* @__PURE__ */ _react["default"].createElement("div", {
          style: styles.playIcon,
          className: "react-player__play-icon"
        }));
        return /* @__PURE__ */ _react["default"].createElement("div", {
          style: styles.preview,
          className: "react-player__preview",
          onClick,
          tabIndex: previewTabIndex,
          onKeyPress: this.handleKeyPress
        }, playIcon || defaultPlayIcon);
      }
    }]);
    return Preview2;
  }(_react.Component);
  exports["default"] = Preview;
});
var ReactPlayer = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createReactPlayer = void 0;
  var _react = _interopRequireWildcard(react);
  var _deepmerge = _interopRequireDefault(cjs);
  var _memoizeOne = _interopRequireDefault(memoizeOne);
  var _reactFastCompare = _interopRequireDefault(reactFastCompare);
  var _Player3 = _interopRequireDefault(Player_1);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _extends() {
    _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
      return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props2) {
    for (var i = 0; i < props2.length; i++) {
      var descriptor = props2[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {constructor: {value: subClass, writable: true, configurable: true}});
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _setPrototypeOf(o, p);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }
    return _assertThisInitialized(self2);
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
      }));
      return true;
    } catch (e) {
      return false;
    }
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _getPrototypeOf(o);
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {value, enumerable: true, configurable: true, writable: true});
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function")
      return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache2() {
      return cache;
    };
    return cache;
  }
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return {default: obj};
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var Preview = /* @__PURE__ */ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
      return _interopRequireWildcard(Preview_1);
    });
  });
  var IS_BROWSER = typeof window !== "undefined" && window.document;
  var IS_GLOBAL = typeof commonjsGlobal !== "undefined" && commonjsGlobal.window && commonjsGlobal.window.document;
  var SUPPORTED_PROPS = Object.keys(props.propTypes);
  var UniversalSuspense = IS_BROWSER || IS_GLOBAL ? _react.Suspense : function() {
    return null;
  };
  var customPlayers = [];
  var createReactPlayer = function createReactPlayer2(players2, fallback) {
    var _class, _temp;
    return _temp = _class = /* @__PURE__ */ function(_Component) {
      _inherits(ReactPlayer2, _Component);
      var _super = _createSuper(ReactPlayer2);
      function ReactPlayer2() {
        var _this;
        _classCallCheck(this, ReactPlayer2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "state", {
          showPreview: !!_this.props.light
        });
        _defineProperty(_assertThisInitialized(_this), "references", {
          wrapper: function wrapper(_wrapper) {
            _this.wrapper = _wrapper;
          },
          player: function player(_player) {
            _this.player = _player;
          }
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickPreview", function(e) {
          _this.setState({
            showPreview: false
          });
          _this.props.onClickPreview(e);
        });
        _defineProperty(_assertThisInitialized(_this), "showPreview", function() {
          _this.setState({
            showPreview: true
          });
        });
        _defineProperty(_assertThisInitialized(_this), "getDuration", function() {
          if (!_this.player)
            return null;
          return _this.player.getDuration();
        });
        _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function() {
          if (!_this.player)
            return null;
          return _this.player.getCurrentTime();
        });
        _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function() {
          if (!_this.player)
            return null;
          return _this.player.getSecondsLoaded();
        });
        _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function() {
          var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "player";
          if (!_this.player)
            return null;
          return _this.player.getInternalPlayer(key);
        });
        _defineProperty(_assertThisInitialized(_this), "seekTo", function(fraction, type) {
          if (!_this.player)
            return null;
          _this.player.seekTo(fraction, type);
        });
        _defineProperty(_assertThisInitialized(_this), "handleReady", function() {
          _this.props.onReady(_assertThisInitialized(_this));
        });
        _defineProperty(_assertThisInitialized(_this), "getActivePlayer", (0, _memoizeOne["default"])(function(url) {
          for (var _i = 0, _arr = [].concat(customPlayers, _toConsumableArray(players2)); _i < _arr.length; _i++) {
            var player = _arr[_i];
            if (player.canPlay(url)) {
              return player;
            }
          }
          if (fallback) {
            return fallback;
          }
          return null;
        }));
        _defineProperty(_assertThisInitialized(_this), "getConfig", (0, _memoizeOne["default"])(function(url, key) {
          var config = _this.props.config;
          return _deepmerge["default"].all([props.defaultProps.config, props.defaultProps.config[key] || {}, config, config[key] || {}]);
        }));
        _defineProperty(_assertThisInitialized(_this), "getAttributes", (0, _memoizeOne["default"])(function(url) {
          return (0, utils.omit)(_this.props, SUPPORTED_PROPS);
        }));
        _defineProperty(_assertThisInitialized(_this), "renderActivePlayer", function(url) {
          if (!url)
            return null;
          var player = _this.getActivePlayer(url);
          if (!player)
            return null;
          var config = _this.getConfig(url, player.key);
          return /* @__PURE__ */ _react["default"].createElement(_Player3["default"], _extends({}, _this.props, {
            key: player.key,
            ref: _this.references.player,
            config,
            activePlayer: player.lazyPlayer || player,
            onReady: _this.handleReady
          }));
        });
        return _this;
      }
      _createClass(ReactPlayer2, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !(0, _reactFastCompare["default"])(this.props, nextProps) || !(0, _reactFastCompare["default"])(this.state, nextState);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var light = this.props.light;
          if (!prevProps.light && light) {
            this.setState({
              showPreview: true
            });
          }
          if (prevProps.light && !light) {
            this.setState({
              showPreview: false
            });
          }
        }
      }, {
        key: "renderPreview",
        value: function renderPreview(url) {
          if (!url)
            return null;
          var _this$props = this.props, light = _this$props.light, playIcon = _this$props.playIcon, previewTabIndex = _this$props.previewTabIndex;
          return /* @__PURE__ */ _react["default"].createElement(Preview, {
            url,
            light,
            playIcon,
            previewTabIndex,
            onClick: this.handleClickPreview
          });
        }
      }, {
        key: "render",
        value: function render2() {
          var _this$props2 = this.props, url = _this$props2.url, style = _this$props2.style, width = _this$props2.width, height = _this$props2.height, fallback2 = _this$props2.fallback, Wrapper = _this$props2.wrapper;
          var showPreview = this.state.showPreview;
          var attributes = this.getAttributes(url);
          return /* @__PURE__ */ _react["default"].createElement(Wrapper, _extends({
            ref: this.references.wrapper,
            style: _objectSpread(_objectSpread({}, style), {}, {
              width,
              height
            })
          }, attributes), /* @__PURE__ */ _react["default"].createElement(UniversalSuspense, {
            fallback: fallback2
          }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
        }
      }]);
      return ReactPlayer2;
    }(_react.Component), _defineProperty(_class, "displayName", "ReactPlayer"), _defineProperty(_class, "propTypes", props.propTypes), _defineProperty(_class, "defaultProps", props.defaultProps), _defineProperty(_class, "addCustomPlayer", function(player) {
      customPlayers.push(player);
    }), _defineProperty(_class, "removeCustomPlayers", function() {
      customPlayers.length = 0;
    }), _defineProperty(_class, "canPlay", function(url) {
      for (var _i2 = 0, _arr2 = [].concat(customPlayers, _toConsumableArray(players2)); _i2 < _arr2.length; _i2++) {
        var _Player = _arr2[_i2];
        if (_Player.canPlay(url)) {
          return true;
        }
      }
      return false;
    }), _defineProperty(_class, "canEnablePIP", function(url) {
      for (var _i3 = 0, _arr3 = [].concat(customPlayers, _toConsumableArray(players2)); _i3 < _arr3.length; _i3++) {
        var _Player2 = _arr3[_i3];
        if (_Player2.canEnablePIP && _Player2.canEnablePIP(url)) {
          return true;
        }
      }
      return false;
    }), _temp;
  };
  exports.createReactPlayer = createReactPlayer;
});
var lib = createCommonjsModule(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _players = _interopRequireDefault(players);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
  }
  var fallback = _players["default"][_players["default"].length - 1];
  var _default = (0, ReactPlayer.createReactPlayer)(_players["default"], fallback);
  exports["default"] = _default;
});
var __pika_web_default_export_for_treeshaking__ = /* @__PURE__ */ getDefaultExportFromCjs(lib);
var react_player_default = __pika_web_default_export_for_treeshaking__;

// docs/dist/Question.js
import questions2 from "./questions.json";
function Question({players: players2, question}) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const {title, src} = questions2[question];
  useEffect(() => {
    gun_default.get("game").get("playing").on((isPlaying) => {
      setPlaying(isPlaying);
    });
    gun_default.get("game").get("time").on((time) => {
      if (ref.current && time != null) {
        ref?.current?.seekTo?.(time);
        gun_default.get("game").put({time: null});
      }
    });
  }, [ref]);
  return /* @__PURE__ */ react.createElement("div", {
    className: "Question"
  }, /* @__PURE__ */ react.createElement("h1", null, title), /* @__PURE__ */ react.createElement(react_player_default, {
    ref,
    url: "https://drive.google.com/uc?export=view&id=" + src,
    volume: 0,
    playing
  }));
}
var Question_default = Question;

// docs/dist/Board.js
var soundCorrect = new Howl({
  src: ["Correcto.mp3"]
});
var soundWrong = new Howl({
  src: ["Wrong.mp3"]
});
function Board({
  players: players2,
  question,
  showCorrect,
  setCorrect,
  showWrong,
  setWrong
}) {
  useEffect(() => {
    if (showCorrect) {
      soundCorrect.play();
      setCorrect(false);
    }
  }, [showCorrect]);
  useEffect(() => {
    if (showWrong) {
      soundWrong.play();
      setWrong(false);
    }
  }, [showWrong]);
  if (question > 0) {
    return /* @__PURE__ */ react.createElement(Question_default, {
      question,
      players: players2
    });
  }
  return /* @__PURE__ */ react.createElement("div", {
    className: "Board"
  }, /* @__PURE__ */ react.createElement("h1", null, "Navidad 2021"), /* @__PURE__ */ react.createElement("table", null, /* @__PURE__ */ react.createElement("thead", null, /* @__PURE__ */ react.createElement("tr", null, /* @__PURE__ */ react.createElement("th", null, "Jugador"), /* @__PURE__ */ react.createElement("th", null, "Puntos"))), /* @__PURE__ */ react.createElement("tbody", null, Object.values(players2).map((player) => /* @__PURE__ */ react.createElement("tr", {
    key: player.name
  }, /* @__PURE__ */ react.createElement("td", null, player.name), /* @__PURE__ */ react.createElement("td", null, player.points))))));
}
var Board_default = Board;

// docs/dist/App.js
function App() {
  const [teamName, setTeamName] = useState("");
  const [players2, setPlayers] = useState({});
  const [question, setQuestion] = useState(0);
  const [first, setFirst] = useState();
  const [showCorrect, setCorrect] = useState(false);
  const [showWrong, setWrong] = useState(false);
  useEffect(() => {
    gun_default.get("game").get("first").on((ans) => {
      console.log("????", ans);
      if (!first) {
        setFirst(ans);
      }
    });
  });
  useEffect(() => {
    gun_default.get("game").get("question").on((qNum) => {
      setQuestion(qNum);
    });
  }, []);
  useEffect(() => {
    setTeamName(window.location.hash.slice(1));
    window.onhashchange = () => {
      setTeamName(window.location.hash.slice(1));
    };
    gun_default.get("players").map().on((player) => {
      if (player.deleted) {
        setPlayers((players22) => {
          const newPlayers = {...players22};
          delete newPlayers[player.name];
          return newPlayers;
        });
      } else if (player.name !== "admin" && teamName !== "board") {
        setPlayers((players22) => ({
          ...players22,
          [player.name]: player
        }));
      }
    });
  }, []);
  useEffect(() => {
    if (teamName !== "admin" && teamName !== "board") {
      gun_default.get("players").get(teamName).put({name: teamName, deleted: false});
    }
  }, [teamName]);
  if (teamName === "admin") {
    return /* @__PURE__ */ react.createElement(Admin_default, {
      showCorrect,
      setCorrect,
      showWrong,
      setWrong,
      question,
      players: players2,
      first
    });
  } else if (teamName === "board") {
    return /* @__PURE__ */ react.createElement(Board_default, {
      showCorrect,
      setCorrect,
      showWrong,
      setWrong,
      question,
      players: players2
    });
  } else if (teamName) {
    return /* @__PURE__ */ react.createElement(Ready_default, {
      teamName,
      players: players2,
      first
    });
  } else {
    return /* @__PURE__ */ react.createElement(Register_default, {
      teamName,
      setTeamName
    });
  }
}
var App_default = App;

// docs/dist/index.js
react_dom_default.render(/* @__PURE__ */ react.createElement(react.StrictMode, null, /* @__PURE__ */ react.createElement(App_default, null)), document.getElementById("root"));
//# sourceMappingURL=index.js.map
