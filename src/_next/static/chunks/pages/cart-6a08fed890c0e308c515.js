(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9190], {
        77251: function(e, r, t) {
            "use strict";
            t(67294);
            var n = t(85893);
            r.Z = function(e) {
                var r = e.pageTitle;
                return (0, n.jsxs)("div", {
                    className: "page-title-area",
                    children: [(0, n.jsx)("div", {
                        className: "d-table",
                        children: (0, n.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, n.jsx)("div", {
                                className: "container",
                                children: (0, n.jsx)("h2", {
                                    children: r
                                })
                            })
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape1",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape3",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape3.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape4",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape5",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape5.png",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape6 rotateme",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape7",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        72112: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return k
                }
            });
            var n = t(67294),
                s = t(37704),
                i = t(61646),
                a = t(77251),
                c = t(92809),
                l = t(41664),
                o = t(45697),
                d = t.n(o);

            function p() {
                return (p = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e, r) {
                if (null == e) return {};
                var t, n, s = function(e, r) {
                    if (null == e) return {};
                    var t, n, s = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (s[t] = e[t]);
                    return s
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t])
                }
                return s
            }
            var h = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    s = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    a = void 0 === i ? 24 : i,
                    c = u(e, ["color", "size"]);
                return n.createElement("svg", p({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: a,
                    height: a,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: s,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, c), n.createElement("polyline", {
                    points: "3 6 5 6 21 6"
                }), n.createElement("path", {
                    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                }), n.createElement("line", {
                    x1: "10",
                    y1: "11",
                    x2: "10",
                    y2: "17"
                }), n.createElement("line", {
                    x1: "14",
                    y1: "11",
                    x2: "14",
                    y2: "17"
                }))
            }));
            h.propTypes = {
                color: d().string,
                size: d().oneOfType([d().string, d().number])
            }, h.displayName = "Trash2";
            var f = h,
                j = t(47007),
                m = t(85611),
                x = t(11163),
                v = t(20210),
                g = t(61896),
                y = t(85893),
                b = function(e) {
                    var r = e.id,
                        t = e.quantity,
                        n = (0, j.I0)();
                    return (0, y.jsxs)("div", {
                        className: "input-counter",
                        children: [(0, y.jsx)("span", {
                            className: "minus-btn",
                            onClick: function(e) {
                                e.preventDefault(), n({
                                    type: "SUB_QUANTITY",
                                    id: r
                                })
                            },
                            children: (0, y.jsx)(v.Z, {})
                        }), (0, y.jsx)("input", {
                            type: "text",
                            min: "1",
                            value: t,
                            readOnly: !0,
                            onChange: function(e) {
                                return e
                            }
                        }), (0, y.jsx)("span", {
                            className: "plus-btn",
                            onClick: function(e) {
                                e.preventDefault(), n({
                                    type: "ADD_QUANTITY",
                                    id: r
                                })
                            },
                            children: (0, y.jsx)(g.Z, {})
                        })]
                    })
                };

            function O(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function w(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? O(Object(t), !0).forEach((function(r) {
                        (0, c.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var N = function() {
                    var e = (0, x.useRouter)(),
                        r = (0, m.e1)().addToast,
                        t = (0, j.I0)(),
                        n = (0, j.v9)((function(e) {
                            return e.cart
                        })),
                        s = (0, j.v9)((function(e) {
                            return e.total
                        }));
                    return (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)("div", {
                            className: "cart-table table-responsive",
                            children: (0, y.jsxs)("table", {
                                className: "table table-bordered",
                                children: [(0, y.jsx)("thead", {
                                    children: (0, y.jsxs)("tr", {
                                        children: [(0, y.jsx)("th", {
                                            scope: "col",
                                            children: "Product"
                                        }), (0, y.jsx)("th", {
                                            scope: "col",
                                            children: "Name"
                                        }), (0, y.jsx)("th", {
                                            scope: "col",
                                            children: "Unit Price"
                                        }), (0, y.jsx)("th", {
                                            scope: "col",
                                            children: "Quantity"
                                        }), (0, y.jsx)("th", {
                                            scope: "col",
                                            children: "Total"
                                        })]
                                    })
                                }), (0, y.jsx)("tbody", {
                                    children: n.length ? n.map((function(e) {
                                        return (0, y.jsxs)("tr", {
                                            children: [(0, y.jsx)("td", {
                                                className: "product-thumbnail",
                                                children: (0, y.jsx)(l.default, {
                                                    href: "/product-details",
                                                    children: (0, y.jsx)("a", {
                                                        children: (0, y.jsx)("img", {
                                                            src: e.image,
                                                            alt: "item"
                                                        })
                                                    })
                                                })
                                            }), (0, y.jsx)("td", {
                                                className: "product-name",
                                                children: (0, y.jsx)(l.default, {
                                                    href: "/product-details",
                                                    children: (0, y.jsx)("a", {
                                                        children: e.name
                                                    })
                                                })
                                            }), (0, y.jsx)("td", {
                                                className: "product-price",
                                                children: (0, y.jsxs)("span", {
                                                    className: "unit-amount",
                                                    children: ["$", e.price]
                                                })
                                            }), (0, y.jsx)("td", {
                                                className: "product-quantity",
                                                children: (0, y.jsx)(b, w({}, e))
                                            }), (0, y.jsxs)("td", {
                                                className: "product-subtotal",
                                                children: [(0, y.jsxs)("span", {
                                                    className: "subtotal-amount",
                                                    children: ["$", (e.quantity * e.price).toFixed(2)]
                                                }), (0, y.jsx)("a", {
                                                    href: "#",
                                                    className: "remove",
                                                    onClick: function() {
                                                        var n;
                                                        n = e.id, t({
                                                            type: "REMOVE_ITEM",
                                                            id: n
                                                        }), r("Cart Removed Successfully", {
                                                            appearance: "error"
                                                        })
                                                    },
                                                    children: (0, y.jsx)(f, {})
                                                })]
                                            })]
                                        }, e.id)
                                    })) : (0, y.jsx)("tr", {
                                        children: (0, y.jsx)("td", {
                                            colSpan: "5",
                                            className: "text-center",
                                            children: "Empty"
                                        })
                                    })
                                })]
                            })
                        }), (0, y.jsx)("div", {
                            className: "cart-buttons",
                            children: (0, y.jsxs)("div", {
                                className: "row align-items-center",
                                children: [(0, y.jsx)("div", {
                                    className: "col-lg-7 col-md-7 col-sm-7",
                                    children: (0, y.jsx)("div", {
                                        className: "continue-shopping-box",
                                        children: (0, y.jsx)("a", {
                                            href: "#",
                                            className: "btn btn-light",
                                            children: "Continue Shopping"
                                        })
                                    })
                                }), (0, y.jsx)("div", {
                                    className: "col-lg-5 col-md-5 col-sm-5 text-right",
                                    children: (0, y.jsx)(l.default, {
                                        href: "/cart",
                                        children: (0, y.jsx)("a", {
                                            className: "btn btn-light",
                                            children: "Update Cart"
                                        })
                                    })
                                })]
                            })
                        }), (0, y.jsxs)("div", {
                            className: "cart-totals",
                            children: [(0, y.jsx)("h3", {
                                children: "Cart Totals"
                            }), (0, y.jsxs)("ul", {
                                children: [(0, y.jsxs)("li", {
                                    children: ["Subtotal ", (0, y.jsxs)("span", {
                                        children: ["$", s.toFixed(2)]
                                    })]
                                }), (0, y.jsxs)("li", {
                                    children: ["Shipping ", (0, y.jsx)("span", {
                                        children: "$10.00"
                                    })]
                                }), (0, y.jsxs)("li", {
                                    children: ["Total ", (0, y.jsx)("span", {
                                        children: (0, y.jsxs)("b", {
                                            children: ["$", (s + 10).toFixed(2)]
                                        })
                                    })]
                                })]
                            }), (0, y.jsx)(l.default, {
                                href: "#",
                                children: (0, y.jsx)("a", {
                                    onClick: function(n) {
                                        n.preventDefault(), t({
                                            type: "RESET"
                                        }), r("Thanks for your order.", {
                                            appearance: "success"
                                        }), e.push("/")
                                    },
                                    className: "btn btn-primary",
                                    children: "Proceed to Checkout"
                                })
                            })]
                        })]
                    })
                },
                k = function() {
                    return (0, y.jsxs)(y.Fragment, {
                        children: [(0, y.jsx)(s.Z, {}), (0, y.jsx)(a.Z, {
                            pageTitle: "Cart"
                        }), (0, y.jsx)("div", {
                            className: "cart-area ptb-80",
                            children: (0, y.jsx)("div", {
                                className: "container",
                                children: (0, y.jsx)("div", {
                                    className: "row",
                                    children: (0, y.jsx)("div", {
                                        className: "col-lg-12 col-md-12",
                                        children: (0, y.jsx)(N, {})
                                    })
                                })
                            })
                        }), (0, y.jsx)(i.Z, {})]
                    })
                }
        },
        54701: function(e, r, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/cart", function() {
                return t(72112)
            }])
        },
        20210: function(e, r, t) {
            "use strict";
            var n = t(67294),
                s = t(45697),
                i = t.n(s);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, r) {
                if (null == e) return {};
                var t, n, s = function(e, r) {
                    if (null == e) return {};
                    var t, n, s = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (s[t] = e[t]);
                    return s
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t])
                }
                return s
            }
            var l = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    s = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    l = void 0 === i ? 24 : i,
                    o = c(e, ["color", "size"]);
                return n.createElement("svg", a({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: s,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, o), n.createElement("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "Minus", r.Z = l
        },
        61896: function(e, r, t) {
            "use strict";
            var n = t(67294),
                s = t(45697),
                i = t.n(s);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, r) {
                if (null == e) return {};
                var t, n, s = function(e, r) {
                    if (null == e) return {};
                    var t, n, s = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (s[t] = e[t]);
                    return s
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t])
                }
                return s
            }
            var l = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    s = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    l = void 0 === i ? 24 : i,
                    o = c(e, ["color", "size"]);
                return n.createElement("svg", a({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: s,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, o), n.createElement("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }), n.createElement("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }))
            }));
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "Plus", r.Z = l
        },
        73549: function(e, r, t) {
            "use strict";
            var n = t(67294),
                s = t(45697),
                i = t.n(s);

            function a() {
                return (a = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, r) {
                if (null == e) return {};
                var t, n, s = function(e, r) {
                    if (null == e) return {};
                    var t, n, s = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (s[t] = e[t]);
                    return s
                }(e, r);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (s[t] = e[t])
                }
                return s
            }
            var l = (0, n.forwardRef)((function(e, r) {
                var t = e.color,
                    s = void 0 === t ? "currentColor" : t,
                    i = e.size,
                    l = void 0 === i ? 24 : i,
                    o = c(e, ["color", "size"]);
                return n.createElement("svg", a({
                    ref: r,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: s,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, o), n.createElement("circle", {
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
            l.propTypes = {
                color: i().string,
                size: i().oneOfType([i().string, i().number])
            }, l.displayName = "ShoppingCart", r.Z = l
        }
    },
    function(e) {
        e.O(0, [1736, 4773, 9774, 2888, 179], (function() {
            return r = 54701, e(e.s = r);
            var r
        }));
        var r = e.O();
        _N_E = r
    }
]);