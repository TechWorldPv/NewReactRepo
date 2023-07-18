(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9742], {
        77251: function(e, s, a) {
            "use strict";
            a(67294);
            var r = a(85893);
            s.Z = function(e) {
                var s = e.pageTitle;
                return (0, r.jsxs)("div", {
                    className: "page-title-area",
                    children: [(0, r.jsx)("div", {
                        className: "d-table",
                        children: (0, r.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, r.jsx)("div", {
                                className: "container",
                                children: (0, r.jsx)("h2", {
                                    children: s
                                })
                            })
                        })
                    }), (0, r.jsx)("div", {
                        className: "shape1",
                        children: (0, r.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, r.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, r.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, r.jsx)("div", {
                        className: "shape3",
                        children: (0, r.jsx)("img", {
                            src: "/images/shape3.svg",
                            alt: "shape"
                        })
                    }), (0, r.jsx)("div", {
                        className: "shape4",
                        children: (0, r.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, r.jsx)("div", {
                        className: "shape5",
                        children: (0, r.jsx)("img", {
                            src: "/images/shape5.png",
                            alt: "shape"
                        })
                    }), (0, r.jsx)("div", {
                        className: "shape6 rotateme",
                        children: (0, r.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, r.jsx)("div", {
                        className: "shape7",
                        children: (0, r.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, r.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, r.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        31737: function(e, s, a) {
            "use strict";
            a.r(s);
            a(67294);
            var r = a(37704),
                i = a(61646),
                t = a(77251),
                n = a(41664),
                c = a(85893);
            s.default = function() {
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)(r.Z, {}), (0, c.jsx)(t.Z, {
                        pageTitle: "Forgot Password"
                    }), (0, c.jsx)("div", {
                        className: "ptb-80",
                        children: (0, c.jsx)("div", {
                            className: "container",
                            children: (0, c.jsxs)("div", {
                                className: "auth-form",
                                children: [(0, c.jsxs)("div", {
                                    className: "auth-head",
                                    children: [(0, c.jsx)(n.default, {
                                        href: "/it-startup",
                                        children: (0, c.jsx)("a", {
                                            children: (0, c.jsx)("img", {
                                                src: "/images/logo.png"
                                            })
                                        })
                                    }), (0, c.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                                    })]
                                }), (0, c.jsxs)("form", {
                                    children: [(0, c.jsxs)("div", {
                                        className: "mb-3",
                                        children: [(0, c.jsx)("label", {
                                            className: "form-label",
                                            children: "Email"
                                        }), (0, c.jsx)("input", {
                                            type: "email",
                                            className: "form-control",
                                            id: "exampleInputEmail1"
                                        })]
                                    }), (0, c.jsx)("button", {
                                        type: "submit",
                                        className: "btn btn-primary",
                                        children: "Reset Password"
                                    })]
                                })]
                            })
                        })
                    }), (0, c.jsx)(i.Z, {})]
                })
            }
        },
        9195: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/forgot-password", function() {
                return a(31737)
            }])
        },
        73549: function(e, s, a) {
            "use strict";
            var r = a(67294),
                i = a(45697),
                t = a.n(i);

            function n() {
                return (n = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var a = arguments[s];
                        for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, s) {
                if (null == e) return {};
                var a, r, i = function(e, s) {
                    if (null == e) return {};
                    var a, r, i = {},
                        t = Object.keys(e);
                    for (r = 0; r < t.length; r++) a = t[r], s.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < t.length; r++) a = t[r], s.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a])
                }
                return i
            }
            var l = (0, r.forwardRef)((function(e, s) {
                var a = e.color,
                    i = void 0 === a ? "currentColor" : a,
                    t = e.size,
                    l = void 0 === t ? 24 : t,
                    o = c(e, ["color", "size"]);
                return r.createElement("svg", n({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: i,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, o), r.createElement("circle", {
                    cx: "9",
                    cy: "21",
                    r: "1"
                }), r.createElement("circle", {
                    cx: "20",
                    cy: "21",
                    r: "1"
                }), r.createElement("path", {
                    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                }))
            }));
            l.propTypes = {
                color: t().string,
                size: t().oneOfType([t().string, t().number])
            }, l.displayName = "ShoppingCart", s.Z = l
        }
    },
    function(e) {
        e.O(0, [1736, 4773, 9774, 2888, 179], (function() {
            return s = 9195, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);