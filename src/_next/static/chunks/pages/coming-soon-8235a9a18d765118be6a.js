(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9169], {
        53905: function(e, r, t) {
            "use strict";
            t.r(r);
            var n = t(80318),
                o = t(67294),
                i = t(51591),
                s = t(20706),
                a = t(19318),
                l = t(80289),
                c = t(85893);
            r.default = function() {
                var e = o.useState(""),
                    r = (0, n.Z)(e, 2),
                    t = r[0],
                    u = r[1],
                    d = o.useState(""),
                    h = (0, n.Z)(d, 2),
                    f = h[0],
                    p = h[1],
                    v = o.useState(""),
                    m = (0, n.Z)(v, 2),
                    y = m[0],
                    g = m[1],
                    j = o.useState(""),
                    b = (0, n.Z)(j, 2),
                    w = b[0],
                    x = b[1];
                o.useEffect((function() {
                    var e = setInterval((function() {
                        O()
                    }), 1e3);
                    return function() {
                        return clearInterval(e)
                    }
                }), []);
                var O = function() {
                    var e = new Date("August 23, 2022 17:00:00 PDT"),
                        r = Date.parse(e) / 1e3,
                        t = new Date,
                        n = r - Date.parse(t) / 1e3,
                        o = Math.floor(n / 86400),
                        i = Math.floor((n - 86400 * o) / 3600),
                        s = Math.floor((n - 86400 * o - 3600 * i) / 60),
                        a = Math.floor(n - 86400 * o - 3600 * i - 60 * s);
                    i < "10" && (i = "0" + i), s < "10" && (s = "0" + s), a < "10" && (a = "0" + a), u(o), p(i), g(s), x(a)
                };
                return (0, c.jsxs)("div", {
                    className: "coming-soon-area",
                    children: [(0, c.jsx)("div", {
                        className: "d-table",
                        children: (0, c.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, c.jsx)("div", {
                                className: "container",
                                children: (0, c.jsxs)("div", {
                                    className: "coming-soon-content",
                                    children: [(0, c.jsx)("h1", {
                                        children: "Under Construction"
                                    }), (0, c.jsx)("p", {
                                        children: "Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience."
                                    }), (0, c.jsxs)("form", {
                                        children: [(0, c.jsx)("input", {
                                            type: "email",
                                            className: "email-input",
                                            placeholder: "Enter email address",
                                            name: "email",
                                            required: !0
                                        }), (0, c.jsx)("button", {
                                            type: "submit",
                                            className: "submit-btn",
                                            children: "Notify Me"
                                        })]
                                    }), (0, c.jsxs)("div", {
                                        id: "timer",
                                        children: [(0, c.jsxs)("div", {
                                            id: "days",
                                            children: [t, " ", (0, c.jsx)("span", {
                                                children: "Days"
                                            })]
                                        }), (0, c.jsxs)("div", {
                                            id: "hours",
                                            children: [f, " ", (0, c.jsx)("span", {
                                                children: "Hours"
                                            })]
                                        }), (0, c.jsxs)("div", {
                                            id: "minutes",
                                            children: [y, " ", (0, c.jsx)("span", {
                                                children: "Minutes"
                                            })]
                                        }), (0, c.jsxs)("div", {
                                            id: "seconds",
                                            children: [w, " ", (0, c.jsx)("span", {
                                                children: "Seconds"
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })
                    }), (0, c.jsxs)("ul", {
                        className: "social-list",
                        children: [(0, c.jsx)("li", {
                            className: "list-heading",
                            children: "Follow us for update:"
                        }), (0, c.jsx)("li", {
                            children: (0, c.jsx)("a", {
                                href: "https://facebook.com/",
                                className: "facebook",
                                target: "_blank",
                                children: (0, c.jsx)(i.Z, {})
                            })
                        }), (0, c.jsx)("li", {
                            children: (0, c.jsx)("a", {
                                href: "https://twitter.com/",
                                className: "twitter",
                                target: "_blank",
                                children: (0, c.jsx)(s.Z, {})
                            })
                        }), (0, c.jsx)("li", {
                            children: (0, c.jsx)("a", {
                                href: "https://linkedin.com/",
                                className: "linkedin",
                                target: "_blank",
                                children: (0, c.jsx)(a.Z, {})
                            })
                        }), (0, c.jsx)("li", {
                            children: (0, c.jsx)("a", {
                                href: "https://instagram.com/",
                                className: "instagram",
                                target: "_blank",
                                children: (0, c.jsx)(l.Z, {})
                            })
                        })]
                    })]
                })
            }
        },
        34213: function(e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/coming-soon", function() {
                return t(53905)
            }])
        },
        51591: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function s() {
                return (s = Object.assign || function(e) {
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
            var l = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    l = void 0 === i ? 24 : i,
                    c = a(e, ["color", "size"]);
                return n.createElement("svg", s({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), n.createElement("path", {
                    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "Facebook", r.Z = l
        },
        80289: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function s() {
                return (s = Object.assign || function(e) {
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
            var l = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    l = void 0 === i ? 24 : i,
                    c = a(e, ["color", "size"]);
                return n.createElement("svg", s({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), n.createElement("rect", {
                    x: "2",
                    y: "2",
                    width: "20",
                    height: "20",
                    rx: "5",
                    ry: "5"
                }), n.createElement("path", {
                    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                }), n.createElement("line", {
                    x1: "17.5",
                    y1: "6.5",
                    x2: "17.51",
                    y2: "6.5"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "Instagram", r.Z = l
        },
        19318: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function s() {
                return (s = Object.assign || function(e) {
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
            var l = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    l = void 0 === i ? 24 : i,
                    c = a(e, ["color", "size"]);
                return n.createElement("svg", s({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), n.createElement("path", {
                    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                }), n.createElement("rect", {
                    x: "2",
                    y: "9",
                    width: "4",
                    height: "12"
                }), n.createElement("circle", {
                    cx: "4",
                    cy: "4",
                    r: "2"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "Linkedin", r.Z = l
        },
        20706: function(e, r, t) {
            "use strict";
            var n = t(67294),
                o = t(45697),
                i = t.n(o);

            function s() {
                return (s = Object.assign || function(e) {
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
            var l = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    o = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    l = void 0 === i ? 24 : i,
                    c = a(e, ["color", "size"]);
                return n.createElement("svg", s({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: o,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), n.createElement("path", {
                    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "Twitter", r.Z = l
        }
    },
    function(e) {
        e.O(0, [9774, 2888, 179], (function() {
            return r = 34213, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);