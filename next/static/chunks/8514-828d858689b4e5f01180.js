(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8514], {
        98771: function(e, r, t) {
            "use strict";
            var n = t(61682);

            function o(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function i(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? o(Object(t), !0).forEach((function(r) {
                        n(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            r.default = function(e, r) {
                var t = l.default,
                    n = {
                        loading: function(e) {
                            e.error, e.isLoading;
                            return e.pastDelay, null
                        }
                    };
                e instanceof Promise ? n.loader = function() {
                    return e
                } : "function" === typeof e ? n.loader = e : "object" === typeof e && (n = i(i({}, n), e));
                var o = n = i(i({}, n), r);
                if (o.suspense) throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
                if (o.suspense) return t(o);
                n.loadableGenerated && delete(n = i(i({}, n), n.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof n.ssr) {
                    if (!n.ssr) return delete n.ssr, s(t, n);
                    delete n.ssr
                }
                return t(n)
            };
            a(t(67294));
            var l = a(t(54860));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s(e, r) {
                return delete r.webpack, delete r.modules, e(r)
            }
        },
        91083: function(e, r, t) {
            "use strict";
            var n;
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.LoadableContext = void 0;
            var o = ((n = t(67294)) && n.__esModule ? n : {
                default: n
            }).default.createContext(null);
            r.LoadableContext = o
        },
        54860: function(e, r, t) {
            "use strict";
            var n = t(2553),
                o = t(62012),
                i = t(61682);

            function l(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function a(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? l(Object(t), !0).forEach((function(r) {
                        i(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function s(e, r) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function(e, r) {
                            if (!e) return;
                            if ("string" === typeof e) return u(e, r);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return u(e, r)
                        }(e)) || r && e && "number" === typeof e.length) {
                        t && (e = t);
                        var n = 0,
                            o = function() {};
                        return {
                            s: o,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, l = !0,
                    a = !1;
                return {
                    s: function() {
                        t = t.call(e)
                    },
                    n: function() {
                        var e = t.next();
                        return l = e.done, e
                    },
                    e: function(e) {
                        a = !0, i = e
                    },
                    f: function() {
                        try {
                            l || null == t.return || t.return()
                        } finally {
                            if (a) throw i
                        }
                    }
                }
            }

            function u(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var c, f = (c = t(67294)) && c.__esModule ? c : {
                    default: c
                },
                p = t(67161),
                y = t(91083);
            var d = [],
                v = [],
                h = !1;

            function g(e) {
                var r = e(),
                    t = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return t.promise = r.then((function(e) {
                    return t.loading = !1, t.loaded = e, e
                })).catch((function(e) {
                    throw t.loading = !1, t.error = e, e
                })), t
            }
            var b = function() {
                function e(r, t) {
                    n(this, e), this._loadFn = r, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return o(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var r = this._res,
                            t = this._opts;
                        r.loading && ("number" === typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            e._update({
                                pastDelay: !0
                            })
                        }), t.delay)), "number" === typeof t.timeout && (this._timeout = setTimeout((function() {
                            e._update({
                                timedOut: !0
                            })
                        }), t.timeout))), this._res.promise.then((function() {
                            e._update({}), e._clearTimeouts()
                        })).catch((function(r) {
                            e._update({}), e._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = a(a({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach((function(e) {
                            return e()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var r = this;
                        return this._callbacks.add(e),
                            function() {
                                r._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function O(e) {
                return function(e, r) {
                    var t = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null,
                        suspense: !1
                    }, r);
                    t.suspense && (t.lazy = f.default.lazy(t.loader));
                    var n = null;

                    function o() {
                        if (!n) {
                            var r = new b(e, t);
                            n = {
                                getCurrentValue: r.getCurrentValue.bind(r),
                                subscribe: r.subscribe.bind(r),
                                retry: r.retry.bind(r),
                                promise: r.promise.bind(r)
                            }
                        }
                        return n.promise()
                    }
                    if (!h && "function" === typeof t.webpack && !t.suspense) {
                        var i = t.webpack();
                        v.push((function(e) {
                            var r, t = s(i);
                            try {
                                for (t.s(); !(r = t.n()).done;) {
                                    var n = r.value;
                                    if (-1 !== e.indexOf(n)) return o()
                                }
                            } catch (l) {
                                t.e(l)
                            } finally {
                                t.f()
                            }
                        }))
                    }
                    var l = t.suspense ? function(e, r) {
                        return f.default.createElement(t.lazy, a(a({}, e), {}, {
                            ref: r
                        }))
                    } : function(e, r) {
                        o();
                        var i = f.default.useContext(y.LoadableContext),
                            l = p.useSubscription(n);
                        return f.default.useImperativeHandle(r, (function() {
                            return {
                                retry: n.retry
                            }
                        }), []), i && Array.isArray(t.modules) && t.modules.forEach((function(e) {
                            i(e)
                        })), f.default.useMemo((function() {
                            return l.loading || l.error ? f.default.createElement(t.loading, {
                                isLoading: l.loading,
                                pastDelay: l.pastDelay,
                                timedOut: l.timedOut,
                                error: l.error,
                                retry: n.retry
                            }) : l.loaded ? f.default.createElement(function(e) {
                                return e && e.__esModule ? e.default : e
                            }(l.loaded), e) : null
                        }), [e, l])
                    };
                    return l.preload = function() {
                        return !t.suspense && o()
                    }, l.displayName = "LoadableComponent", f.default.forwardRef(l)
                }(g, e)
            }

            function m(e, r) {
                for (var t = []; e.length;) {
                    var n = e.pop();
                    t.push(n(r))
                }
                return Promise.all(t).then((function() {
                    if (e.length) return m(e, r)
                }))
            }
            O.preloadAll = function() {
                return new Promise((function(e, r) {
                    m(d).then(e, r)
                }))
            }, O.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(r) {
                    var t = function() {
                        return h = !0, r()
                    };
                    m(v, e).then(t, t)
                }))
            }, window.__NEXT_PRELOADREADY = O.preloadReady;
            var w = O;
            r.default = w
        },
        5152: function(e, r, t) {
            e.exports = t(98771)
        },
        45169: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }), n.createElement("polyline", {
                    points: "12 5 19 12 12 19"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "ArrowRight", r.Z = s
        },
        19011: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("line", {
                    x1: "12",
                    y1: "20",
                    x2: "12",
                    y2: "10"
                }), n.createElement("line", {
                    x1: "18",
                    y1: "20",
                    x2: "18",
                    y2: "4"
                }), n.createElement("line", {
                    x1: "6",
                    y1: "20",
                    x2: "6",
                    y2: "16"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "BarChart", r.Z = s
        },
        77424: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("path", {
                    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
                }), n.createElement("path", {
                    d: "M13.73 21a2 2 0 0 1-3.46 0"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "Bell", r.Z = s
        },
        91140: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("rect", {
                    x: "3",
                    y: "4",
                    width: "18",
                    height: "18",
                    rx: "2",
                    ry: "2"
                }), n.createElement("line", {
                    x1: "16",
                    y1: "2",
                    x2: "16",
                    y2: "6"
                }), n.createElement("line", {
                    x1: "8",
                    y1: "2",
                    x2: "8",
                    y2: "6"
                }), n.createElement("line", {
                    x1: "3",
                    y1: "10",
                    x2: "21",
                    y2: "10"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "Calendar", r.Z = s
        },
        39046: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("ellipse", {
                    cx: "12",
                    cy: "5",
                    rx: "9",
                    ry: "3"
                }), n.createElement("path", {
                    d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
                }), n.createElement("path", {
                    d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "Database", r.Z = s
        },
        83220: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("line", {
                    x1: "12",
                    y1: "1",
                    x2: "12",
                    y2: "23"
                }), n.createElement("path", {
                    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "DollarSign", r.Z = s
        },
        25471: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("rect", {
                    x: "3",
                    y: "3",
                    width: "7",
                    height: "7"
                }), n.createElement("rect", {
                    x: "14",
                    y: "3",
                    width: "7",
                    height: "7"
                }), n.createElement("rect", {
                    x: "14",
                    y: "14",
                    width: "7",
                    height: "7"
                }), n.createElement("rect", {
                    x: "3",
                    y: "14",
                    width: "7",
                    height: "7"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "Grid", r.Z = s
        },
        6260: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("line", {
                    x1: "22",
                    y1: "12",
                    x2: "2",
                    y2: "12"
                }), n.createElement("path", {
                    d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                }), n.createElement("line", {
                    x1: "6",
                    y1: "16",
                    x2: "6.01",
                    y2: "16"
                }), n.createElement("line", {
                    x1: "10",
                    y1: "16",
                    x2: "10.01",
                    y2: "16"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "HardDrive", r.Z = s
        },
        73973: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }), n.createElement("line", {
                    x1: "12",
                    y1: "16",
                    x2: "12",
                    y2: "12"
                }), n.createElement("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12.01",
                    y2: "8"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "Info", r.Z = s
        },
        77662: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }), n.createElement("path", {
                    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "Settings", r.Z = s
        },
        73549: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("circle", {
                    cx: "9",
                    cy: "21",
                    r: "1"
                }), n.createElement("circle", {
                    cx: "20",
                    cy: "21",
                    r: "1"
                }), n.createElement("path", {
                    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "ShoppingCart", r.Z = s
        },
        29362: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, r) {
                if (null == e) return {};
                var t, n, o = function(e, r) {
                    if (null == e) return {};
                    var t, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            var s = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    s = void 0 === i ? 24 : i,
                    u = a(e, ["color", "size"]);
                return n.createElement("svg", l({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: s,
                    height: s,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, u), n.createElement("rect", {
                    x: "4",
                    y: "2",
                    width: "16",
                    height: "20",
                    rx: "2",
                    ry: "2"
                }), n.createElement("line", {
                    x1: "12",
                    y1: "18",
                    x2: "12.01",
                    y2: "18"
                }))
            }));
            s.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, s.displayName = "Tablet", r.Z = s
        }
    }
]);