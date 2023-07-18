(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4800], {
        77251: function(e, r, s) {
            "use strict";
            s(67294);
            var t = s(85893);
            r.Z = function(e) {
                var r = e.pageTitle;
                return (0, t.jsxs)("div", {
                    className: "page-title-area",
                    children: [(0, t.jsx)("div", {
                        className: "d-table",
                        children: (0, t.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, t.jsx)("div", {
                                className: "container",
                                children: (0, t.jsx)("h2", {
                                    children: r
                                })
                            })
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape1",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape3",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape3.svg",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape4",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape5",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape5.png",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape6 rotateme",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape7",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        36169: function(e, r, s) {
            "use strict";
            s.r(r), s.d(r, {
                default: function() {
                    return N
                }
            });
            var t = s(67294),
                n = s(37704),
                a = s(61646),
                i = s(77251),
                c = s(92809),
                l = s(41664),
                o = s(83206),
                d = s(47811),
                p = s(45697),
                h = s.n(p);

            function u() {
                return (u = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var s = arguments[r];
                        for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function f(e, r) {
                if (null == e) return {};
                var s, t, n = function(e, r) {
                    if (null == e) return {};
                    var s, t, n = {},
                        a = Object.keys(e);
                    for (t = 0; t < a.length; t++) s = a[t], r.indexOf(s) >= 0 || (n[s] = e[s]);
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < a.length; t++) s = a[t], r.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s])
                }
                return n
            }
            var j = (0, t.forwardRef)((function(e, r) {
                var s = e.color,
                    n = void 0 === s ? "currentColor" : s,
                    a = e.size,
                    i = void 0 === a ? 24 : a,
                    c = f(e, ["color", "size"]);
                return t.createElement("svg", u({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: i,
                    height: i,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: n,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), t.createElement("path", {
                    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                }), t.createElement("path", {
                    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                }))
            }));
            j.propTypes = {
                color: h().string,
                size: h().oneOfType([h().string, h().number])
            }, j.displayName = "Link";
            var m = j,
                v = s(47007),
                g = s(85611),
                x = s(85893),
                y = function(e) {
                    var r = e.id,
                        s = (0, g.e1)().addToast,
                        t = (0, v.I0)();
                    return (0, x.jsx)(l.default, {
                        href: "#",
                        children: (0, x.jsx)("a", {
                            onClick: function(e) {
                                e.preventDefault(), t({
                                    type: "ADD_TO_CART",
                                    id: r
                                }), s("Cart Added Successfully", {
                                    appearance: "success"
                                })
                            },
                            className: "add-to-cart-btn",
                            children: "Add to Cart"
                        })
                    })
                };

            function b(e, r) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), s.push.apply(s, t)
                }
                return s
            }

            function O(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var s = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? b(Object(s), !0).forEach((function(r) {
                        (0, c.Z)(e, r, s[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : b(Object(s)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(s, r))
                    }))
                }
                return e
            }
            var w = function() {
                    var e = (0, v.v9)((function(e) {
                        return e.products
                    }));
                    return (0, x.jsx)("div", {
                        className: "shop-area ptb-80",
                        children: (0, x.jsxs)("div", {
                            className: "container",
                            children: [(0, x.jsx)("div", {
                                className: "woocommerce-topbar",
                                children: (0, x.jsxs)("div", {
                                    className: "row align-items-center",
                                    children: [(0, x.jsx)("div", {
                                        className: "col-lg-9 col-md-7 col-sm-7",
                                        children: (0, x.jsx)("div", {
                                            className: "woocommerce-result-count",
                                            children: (0, x.jsx)("p", {
                                                children: "Showing 1-8 of 14 results"
                                            })
                                        })
                                    }), (0, x.jsx)("div", {
                                        className: "col-lg-3 col-md-5 col-sm-5",
                                        children: (0, x.jsx)("div", {
                                            className: "woocommerce-topbar-ordering",
                                            children: (0, x.jsxs)("select", {
                                                className: "form-select",
                                                children: [(0, x.jsx)("option", {
                                                    value: "1",
                                                    children: "Sort by Popularity"
                                                }), (0, x.jsx)("option", {
                                                    value: "2",
                                                    children: "Sort by Average Rating"
                                                }), (0, x.jsx)("option", {
                                                    value: "3",
                                                    children: "Sort by Latest"
                                                }), (0, x.jsx)("option", {
                                                    value: "4",
                                                    children: "Sort by price: Low to High"
                                                }), (0, x.jsx)("option", {
                                                    value: "5",
                                                    children: "Sort by price: High to Low"
                                                }), (0, x.jsx)("option", {
                                                    value: "6",
                                                    children: "Sort by New"
                                                })]
                                            })
                                        })
                                    })]
                                })
                            }), (0, x.jsxs)("div", {
                                className: "row justify-content-md-center",
                                children: [e.map((function(e) {
                                    return (0, x.jsx)("div", {
                                        className: "col-lg-3 col-md-6 col-sm-6",
                                        children: (0, x.jsxs)("div", {
                                            className: "single-products",
                                            children: [(0, x.jsxs)("div", {
                                                className: "products-image",
                                                children: [(0, x.jsx)("img", {
                                                    src: e.image,
                                                    alt: e.name
                                                }), (0, x.jsxs)("ul", {
                                                    children: [(0, x.jsx)("li", {
                                                        children: (0, x.jsx)("a", {
                                                            href: "#",
                                                            children: (0, x.jsx)(o.Z, {})
                                                        })
                                                    }), (0, x.jsx)("li", {
                                                        children: (0, x.jsx)("a", {
                                                            href: "#",
                                                            children: (0, x.jsx)(d.Z, {})
                                                        })
                                                    }), (0, x.jsx)("li", {
                                                        children: (0, x.jsx)(l.default, {
                                                            href: "/products/[id]",
                                                            as: "/products/".concat(e.id),
                                                            children: (0, x.jsx)("a", {
                                                                children: (0, x.jsx)(m, {})
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, x.jsxs)("div", {
                                                className: "products-content",
                                                children: [(0, x.jsx)("h3", {
                                                    children: (0, x.jsx)(l.default, {
                                                        href: "/products/[id]",
                                                        as: "/products/".concat(e.id),
                                                        children: (0, x.jsx)("a", {
                                                            children: e.name
                                                        })
                                                    })
                                                }), (0, x.jsxs)("span", {
                                                    children: ["$", e.price]
                                                }), (0, x.jsxs)("ul", {
                                                    children: [(0, x.jsx)("li", {
                                                        children: (0, x.jsx)("i", {
                                                            className: "flaticon-star-1"
                                                        })
                                                    }), (0, x.jsx)("li", {
                                                        children: (0, x.jsx)("i", {
                                                            className: "flaticon-star-1"
                                                        })
                                                    }), (0, x.jsx)("li", {
                                                        children: (0, x.jsx)("i", {
                                                            className: "flaticon-star-1"
                                                        })
                                                    }), (0, x.jsx)("li", {
                                                        children: (0, x.jsx)("i", {
                                                            className: "flaticon-star-1"
                                                        })
                                                    }), (0, x.jsx)("li", {
                                                        children: (0, x.jsx)("i", {
                                                            className: "flaticon-star-1"
                                                        })
                                                    })]
                                                }), (0, x.jsx)(y, O({}, e))]
                                            })]
                                        })
                                    }, e.id)
                                })), (0, x.jsx)("div", {
                                    className: "col-lg-12 col-md-12 col-sm-12",
                                    children: (0, x.jsx)("div", {
                                        className: "pagination-area",
                                        children: (0, x.jsx)("nav", {
                                            "aria-label": "Page navigation",
                                            children: (0, x.jsxs)("ul", {
                                                className: "pagination justify-content-center",
                                                children: [(0, x.jsx)("li", {
                                                    className: "page-item",
                                                    children: (0, x.jsx)("a", {
                                                        className: "page-link",
                                                        href: "#",
                                                        children: "Prev"
                                                    })
                                                }), (0, x.jsx)("li", {
                                                    className: "page-item active",
                                                    children: (0, x.jsx)("a", {
                                                        className: "page-link",
                                                        href: "#",
                                                        children: "1"
                                                    })
                                                }), (0, x.jsx)("li", {
                                                    className: "page-item",
                                                    children: (0, x.jsx)("a", {
                                                        className: "page-link",
                                                        href: "#",
                                                        children: "2"
                                                    })
                                                }), (0, x.jsx)("li", {
                                                    className: "page-item",
                                                    children: (0, x.jsx)("a", {
                                                        className: "page-link",
                                                        href: "#",
                                                        children: "3"
                                                    })
                                                }), (0, x.jsx)("li", {
                                                    className: "page-item",
                                                    children: (0, x.jsx)("a", {
                                                        className: "page-link",
                                                        href: "#",
                                                        children: "Next"
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                N = function() {
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(n.Z, {}), (0, x.jsx)(i.Z, {
                            pageTitle: "Products"
                        }), (0, x.jsx)(w, {}), (0, x.jsx)(a.Z, {})]
                    })
                }
        },
        7102: function(e, r, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/shop", function() {
                return s(36169)
            }])
        },
        47811: function(e, r, s) {
            "use strict";
            var t = s(67294),
                n = s(45697),
                a = s.n(n);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var s = arguments[r];
                        for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, r) {
                if (null == e) return {};
                var s, t, n = function(e, r) {
                    if (null == e) return {};
                    var s, t, n = {},
                        a = Object.keys(e);
                    for (t = 0; t < a.length; t++) s = a[t], r.indexOf(s) >= 0 || (n[s] = e[s]);
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < a.length; t++) s = a[t], r.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s])
                }
                return n
            }
            var l = (0, t.forwardRef)((function(e, r) {
                var s = e.color,
                    n = void 0 === s ? "currentColor" : s,
                    a = e.size,
                    l = void 0 === a ? 24 : a,
                    o = c(e, ["color", "size"]);
                return t.createElement("svg", i({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: n,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, o), t.createElement("path", {
                    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                }))
            }));
            l.propTypes = {
                color: a().string,
                size: a().oneOfType([a().string, a().number])
            }, l.displayName = "Heart", r.Z = l
        },
        83206: function(e, r, s) {
            "use strict";
            var t = s(67294),
                n = s(45697),
                a = s.n(n);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var s = arguments[r];
                        for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, r) {
                if (null == e) return {};
                var s, t, n = function(e, r) {
                    if (null == e) return {};
                    var s, t, n = {},
                        a = Object.keys(e);
                    for (t = 0; t < a.length; t++) s = a[t], r.indexOf(s) >= 0 || (n[s] = e[s]);
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < a.length; t++) s = a[t], r.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s])
                }
                return n
            }
            var l = (0, t.forwardRef)((function(e, r) {
                var s = e.color,
                    n = void 0 === s ? "currentColor" : s,
                    a = e.size,
                    l = void 0 === a ? 24 : a,
                    o = c(e, ["color", "size"]);
                return t.createElement("svg", i({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: n,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, o), t.createElement("circle", {
                    cx: "11",
                    cy: "11",
                    r: "8"
                }), t.createElement("line", {
                    x1: "21",
                    y1: "21",
                    x2: "16.65",
                    y2: "16.65"
                }))
            }));
            l.propTypes = {
                color: a().string,
                size: a().oneOfType([a().string, a().number])
            }, l.displayName = "Search", r.Z = l
        },
        73549: function(e, r, s) {
            "use strict";
            var t = s(67294),
                n = s(45697),
                a = s.n(n);

            function i() {
                return (i = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var s = arguments[r];
                        for (var t in s) Object.prototype.hasOwnProperty.call(s, t) && (e[t] = s[t])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, r) {
                if (null == e) return {};
                var s, t, n = function(e, r) {
                    if (null == e) return {};
                    var s, t, n = {},
                        a = Object.keys(e);
                    for (t = 0; t < a.length; t++) s = a[t], r.indexOf(s) >= 0 || (n[s] = e[s]);
                    return n
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < a.length; t++) s = a[t], r.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s])
                }
                return n
            }
            var l = (0, t.forwardRef)((function(e, r) {
                var s = e.color,
                    n = void 0 === s ? "currentColor" : s,
                    a = e.size,
                    l = void 0 === a ? 24 : a,
                    o = c(e, ["color", "size"]);
                return t.createElement("svg", i({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: n,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, o), t.createElement("circle", {
                    cx: "9",
                    cy: "21",
                    r: "1"
                }), t.createElement("circle", {
                    cx: "20",
                    cy: "21",
                    r: "1"
                }), t.createElement("path", {
                    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                }))
            }));
            l.propTypes = {
                color: a().string,
                size: a().oneOfType([a().string, a().number])
            }, l.displayName = "ShoppingCart", r.Z = l
        }
    },
    function(e) {
        e.O(0, [1736, 4773, 9774, 2888, 179], (function() {
            return r = 7102, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);