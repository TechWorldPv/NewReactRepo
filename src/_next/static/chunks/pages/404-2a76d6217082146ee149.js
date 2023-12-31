(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2197], {
        92167: function(e, n, r) {
            "use strict";
            var t = r(53848);
            n.default = void 0;
            var a, o = (a = r(67294)) && a.__esModule ? a : {
                    default: a
                },
                c = r(21063),
                l = r(34651),
                i = r(7426);
            var s = {};

            function u(e, n, r, t) {
                if (e && c.isLocalURL(n)) {
                    e.prefetch(n, r, t).catch((function(e) {
                        0
                    }));
                    var a = t && "undefined" !== typeof t.locale ? t.locale : e && e.locale;
                    s[n + "%" + r + (a ? "%" + a : "")] = !0
                }
            }
            var f = function(e) {
                var n, r = !1 !== e.prefetch,
                    a = l.useRouter(),
                    f = o.default.useMemo((function() {
                        var n = c.resolveHref(a, e.href, !0),
                            r = t(n, 2),
                            o = r[0],
                            l = r[1];
                        return {
                            href: o,
                            as: e.as ? c.resolveHref(a, e.as) : l || o
                        }
                    }), [a, e.href, e.as]),
                    d = f.href,
                    v = f.as,
                    p = e.children,
                    h = e.replace,
                    m = e.shallow,
                    b = e.scroll,
                    y = e.locale;
                "string" === typeof p && (p = o.default.createElement("a", null, p));
                var g = (n = o.default.Children.only(p)) && "object" === typeof n && n.ref,
                    _ = i.useIntersection({
                        rootMargin: "200px"
                    }),
                    E = t(_, 2),
                    j = E[0],
                    x = E[1],
                    N = o.default.useCallback((function(e) {
                        j(e), g && ("function" === typeof g ? g(e) : "object" === typeof g && (g.current = e))
                    }), [g, j]);
                o.default.useEffect((function() {
                    var e = x && r && c.isLocalURL(d),
                        n = "undefined" !== typeof y ? y : a && a.locale,
                        t = s[d + "%" + v + (n ? "%" + n : "")];
                    e && !t && u(a, d, v, {
                        locale: n
                    })
                }), [v, d, x, y, r, a]);
                var L = {
                    ref: N,
                    onClick: function(e) {
                        n.props && "function" === typeof n.props.onClick && n.props.onClick(e), e.defaultPrevented || function(e, n, r, t, a, o, l, i) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var n = e.currentTarget.target;
                                return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && c.isLocalURL(r)) && (e.preventDefault(), null == l && t.indexOf("#") >= 0 && (l = !1), n[a ? "replace" : "push"](r, t, {
                                shallow: o,
                                locale: i,
                                scroll: l
                            }))
                        }(e, a, d, v, h, m, b, y)
                    },
                    onMouseEnter: function(e) {
                        c.isLocalURL(d) && (n.props && "function" === typeof n.props.onMouseEnter && n.props.onMouseEnter(e), u(a, d, v, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === n.type && !("href" in n.props)) {
                    var k = "undefined" !== typeof y ? y : a && a.locale,
                        w = a && a.isLocaleDomain && c.getDomainLocale(v, k, a && a.locales, a && a.domainLocales);
                    L.href = w || c.addBasePath(c.addLocale(v, k, a && a.defaultLocale))
                }
                return o.default.cloneElement(n, L)
            };
            n.default = f
        },
        7426: function(e, n, r) {
            "use strict";
            var t = r(53848);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.useIntersection = function(e) {
                var n = e.rootMargin,
                    r = e.disabled || !c,
                    i = a.useRef(),
                    s = a.useState(!1),
                    u = t(s, 2),
                    f = u[0],
                    d = u[1],
                    v = a.useCallback((function(e) {
                        i.current && (i.current(), i.current = void 0), r || f || e && e.tagName && (i.current = function(e, n, r) {
                            var t = function(e) {
                                    var n = e.rootMargin || "",
                                        r = l.get(n);
                                    if (r) return r;
                                    var t = new Map,
                                        a = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var n = t.get(e.target),
                                                    r = e.isIntersecting || e.intersectionRatio > 0;
                                                n && r && n(r)
                                            }))
                                        }), e);
                                    return l.set(n, r = {
                                        id: n,
                                        observer: a,
                                        elements: t
                                    }), r
                                }(r),
                                a = t.id,
                                o = t.observer,
                                c = t.elements;
                            return c.set(e, n), o.observe(e),
                                function() {
                                    c.delete(e), o.unobserve(e), 0 === c.size && (o.disconnect(), l.delete(a))
                                }
                        }(e, (function(e) {
                            return e && d(e)
                        }), {
                            rootMargin: n
                        }))
                    }), [r, n, f]);
                return a.useEffect((function() {
                    if (!c && !f) {
                        var e = o.requestIdleCallback((function() {
                            return d(!0)
                        }));
                        return function() {
                            return o.cancelIdleCallback(e)
                        }
                    }
                }), [f]), [v, f]
            };
            var a = r(67294),
                o = r(73447),
                c = "undefined" !== typeof IntersectionObserver;
            var l = new Map
        },
        36506: function(e, n, r) {
            "use strict";
            r.r(n);
            r(67294);
            var t = r(41664),
                a = r(85893);
            n.default = function() {
                return (0, a.jsx)("div", {
                    className: "error-area",
                    children: (0, a.jsx)("div", {
                        className: "d-table",
                        children: (0, a.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsxs)("div", {
                                    className: "error-content",
                                    children: [(0, a.jsx)("div", {
                                        className: "notfound-404",
                                        children: (0, a.jsx)("h1", {
                                            children: "Oops!"
                                        })
                                    }), (0, a.jsx)("h3", {
                                        children: "404 - Page not found"
                                    }), (0, a.jsx)("p", {
                                        children: "The page you are looking for might have been removed had its name changed or is temporarily unavailable."
                                    }), (0, a.jsx)(t.default, {
                                        href: "/",
                                        children: (0, a.jsx)("a", {
                                            className: "btn btn-primary",
                                            children: "Go to Homepage"
                                        })
                                    })]
                                })
                            })
                        })
                    })
                })
            }
        },
        72448: function(e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/404", function() {
                return r(36506)
            }])
        },
        41664: function(e, n, r) {
            e.exports = r(92167)
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], (function() {
            return n = 72448, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);