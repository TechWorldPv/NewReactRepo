(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2222], {
        77251: function(e, s, r) {
            "use strict";
            r(67294);
            var a = r(85893);
            s.Z = function(e) {
                var s = e.pageTitle;
                return (0, a.jsxs)("div", {
                    className: "page-title-area",
                    children: [(0, a.jsx)("div", {
                        className: "d-table",
                        children: (0, a.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("h2", {
                                    children: s
                                })
                            })
                        })
                    }), (0, a.jsx)("div", {
                        className: "shape1",
                        children: (0, a.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, a.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, a.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, a.jsx)("div", {
                        className: "shape3",
                        children: (0, a.jsx)("img", {
                            src: "/images/shape3.svg",
                            alt: "shape"
                        })
                    }), (0, a.jsx)("div", {
                        className: "shape4",
                        children: (0, a.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, a.jsx)("div", {
                        className: "shape5",
                        children: (0, a.jsx)("img", {
                            src: "/images/shape5.png",
                            alt: "shape"
                        })
                    }), (0, a.jsx)("div", {
                        className: "shape6 rotateme",
                        children: (0, a.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, a.jsx)("div", {
                        className: "shape7",
                        children: (0, a.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, a.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, a.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        42051: function(e, s, r) {
            "use strict";
            r.r(s), r.d(s, {
                default: function() {
                    return p
                }
            });
            var a = r(67294),
                l = r(37704),
                c = r(61646),
                n = r(77251),
                i = r(45697),
                t = r.n(i);

            function d() {
                return (d = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var r = arguments[s];
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function o(e, s) {
                if (null == e) return {};
                var r, a, l = function(e, s) {
                    if (null == e) return {};
                    var r, a, l = {},
                        c = Object.keys(e);
                    for (a = 0; a < c.length; a++) r = c[a], s.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < c.length; a++) r = c[a], s.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
                }
                return l
            }
            var h = (0, a.forwardRef)((function(e, s) {
                var r = e.color,
                    l = void 0 === r ? "currentColor" : r,
                    c = e.size,
                    n = void 0 === c ? 24 : c,
                    i = o(e, ["color", "size"]);
                return a.createElement("svg", d({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: l,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, i), a.createElement("path", {
                    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                }), a.createElement("path", {
                    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                }))
            }));
            h.propTypes = {
                color: t().string,
                size: t().oneOfType([t().string, t().number])
            }, h.displayName = "Edit";
            var m = h,
                x = r(85893),
                p = function() {
                    return (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(l.Z, {}), (0, x.jsx)(n.Z, {
                            pageTitle: "Checkout"
                        }), (0, x.jsx)("div", {
                            className: "checkout-area ptb-80",
                            children: (0, x.jsxs)("div", {
                                className: "container",
                                children: [(0, x.jsx)("div", {
                                    className: "row",
                                    children: (0, x.jsx)("div", {
                                        className: "col-lg-12 col-md-12",
                                        children: (0, x.jsxs)("div", {
                                            className: "user-actions",
                                            children: [(0, x.jsx)(m, {}), (0, x.jsxs)("span", {
                                                children: ["Returning customer? ", (0, x.jsx)("a", {
                                                    href: "#",
                                                    children: "Click here to login"
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, x.jsx)("form", {
                                    children: (0, x.jsxs)("div", {
                                        className: "row",
                                        children: [(0, x.jsx)("div", {
                                            className: "col-lg-6 col-md-12",
                                            children: (0, x.jsxs)("div", {
                                                className: "billing-details",
                                                children: [(0, x.jsx)("h3", {
                                                    className: "title",
                                                    children: "Billing Details"
                                                }), (0, x.jsxs)("div", {
                                                    className: "row",
                                                    children: [(0, x.jsx)("div", {
                                                        className: "col-lg-12 col-md-12",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsxs)("label", {
                                                                children: ["Country ", (0, x.jsx)("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })]
                                                            }), (0, x.jsx)("div", {
                                                                className: "select-box",
                                                                children: (0, x.jsxs)("select", {
                                                                    className: "form-select",
                                                                    children: [(0, x.jsx)("option", {
                                                                        value: "1",
                                                                        children: "United Arab Emirates"
                                                                    }), (0, x.jsx)("option", {
                                                                        value: "2",
                                                                        children: "China"
                                                                    }), (0, x.jsx)("option", {
                                                                        value: "3",
                                                                        children: "United Kingdom"
                                                                    }), (0, x.jsx)("option", {
                                                                        value: "4",
                                                                        children: "Germany"
                                                                    }), (0, x.jsx)("option", {
                                                                        value: "5",
                                                                        children: "France"
                                                                    }), (0, x.jsx)("option", {
                                                                        value: "6",
                                                                        children: "Japan"
                                                                    })]
                                                                })
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsxs)("label", {
                                                                children: ["First Name ", (0, x.jsx)("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })]
                                                            }), (0, x.jsx)("input", {
                                                                type: "text",
                                                                className: "form-control"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsxs)("label", {
                                                                children: ["Last Name ", (0, x.jsx)("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })]
                                                            }), (0, x.jsx)("input", {
                                                                type: "text",
                                                                className: "form-control"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-12 col-md-12",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsx)("label", {
                                                                children: "Company Name"
                                                            }), (0, x.jsx)("input", {
                                                                type: "text",
                                                                className: "form-control"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-12 col-md-6",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsxs)("label", {
                                                                children: ["Address ", (0, x.jsx)("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })]
                                                            }), (0, x.jsx)("input", {
                                                                type: "text",
                                                                className: "form-control"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-12 col-md-6",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsxs)("label", {
                                                                children: ["Town / City ", (0, x.jsx)("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })]
                                                            }), (0, x.jsx)("input", {
                                                                type: "text",
                                                                className: "form-control"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsxs)("label", {
                                                                children: ["State / County ", (0, x.jsx)("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })]
                                                            }), (0, x.jsx)("input", {
                                                                type: "text",
                                                                className: "form-control"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsxs)("label", {
                                                                children: ["Postcode / Zip ", (0, x.jsx)("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })]
                                                            }), (0, x.jsx)("input", {
                                                                type: "text",
                                                                className: "form-control"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsxs)("label", {
                                                                children: ["Email Address ", (0, x.jsx)("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })]
                                                            }), (0, x.jsx)("input", {
                                                                type: "email",
                                                                className: "form-control"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-6 col-md-6",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-group",
                                                            children: [(0, x.jsxs)("label", {
                                                                children: ["Phone ", (0, x.jsx)("span", {
                                                                    className: "required",
                                                                    children: "*"
                                                                })]
                                                            }), (0, x.jsx)("input", {
                                                                type: "text",
                                                                className: "form-control"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-12 col-md-12",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-check",
                                                            children: [(0, x.jsx)("input", {
                                                                type: "checkbox",
                                                                className: "form-check-input",
                                                                id: "create-an-account"
                                                            }), (0, x.jsx)("label", {
                                                                className: "form-check-label",
                                                                htmlFor: "create-an-account",
                                                                children: "Create an account?"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-12 col-md-12",
                                                        children: (0, x.jsxs)("div", {
                                                            className: "form-check",
                                                            children: [(0, x.jsx)("input", {
                                                                type: "checkbox",
                                                                className: "form-check-input",
                                                                id: "ship-different-address"
                                                            }), (0, x.jsx)("label", {
                                                                className: "form-check-label",
                                                                htmlFor: "ship-different-address",
                                                                children: "Ship to a different address?"
                                                            })]
                                                        })
                                                    }), (0, x.jsx)("div", {
                                                        className: "col-lg-12 col-md-12",
                                                        children: (0, x.jsx)("div", {
                                                            className: "form-group",
                                                            children: (0, x.jsx)("textarea", {
                                                                name: "notes",
                                                                id: "notes",
                                                                cols: "30",
                                                                rows: "4",
                                                                placeholder: "Order Notes",
                                                                className: "form-control"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, x.jsx)("div", {
                                            className: "col-lg-6 col-md-12",
                                            children: (0, x.jsxs)("div", {
                                                className: "order-details",
                                                children: [(0, x.jsx)("h3", {
                                                    className: "title",
                                                    children: "Your Order"
                                                }), (0, x.jsx)("div", {
                                                    className: "order-table table-responsive",
                                                    children: (0, x.jsxs)("table", {
                                                        className: "table table-bordered",
                                                        children: [(0, x.jsx)("thead", {
                                                            children: (0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("th", {
                                                                    scope: "col",
                                                                    children: "Product Name"
                                                                }), (0, x.jsx)("th", {
                                                                    scope: "col",
                                                                    children: "Total"
                                                                })]
                                                            })
                                                        }), (0, x.jsxs)("tbody", {
                                                            children: [(0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("td", {
                                                                    className: "product-name",
                                                                    children: (0, x.jsx)("a", {
                                                                        href: "#",
                                                                        children: "Smart Watch"
                                                                    })
                                                                }), (0, x.jsx)("td", {
                                                                    className: "product-total",
                                                                    children: (0, x.jsx)("span", {
                                                                        className: "subtotal-amount",
                                                                        children: "$30.00"
                                                                    })
                                                                })]
                                                            }), (0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("td", {
                                                                    className: "product-name",
                                                                    children: (0, x.jsx)("a", {
                                                                        href: "#",
                                                                        children: "TV"
                                                                    })
                                                                }), (0, x.jsx)("td", {
                                                                    className: "product-total",
                                                                    children: (0, x.jsx)("span", {
                                                                        className: "subtotal-amount",
                                                                        children: "$30.00"
                                                                    })
                                                                })]
                                                            }), (0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("td", {
                                                                    className: "product-name",
                                                                    children: (0, x.jsx)("a", {
                                                                        href: "#",
                                                                        children: "Book"
                                                                    })
                                                                }), (0, x.jsx)("td", {
                                                                    className: "product-total",
                                                                    children: (0, x.jsx)("span", {
                                                                        className: "subtotal-amount",
                                                                        children: "$30.00"
                                                                    })
                                                                })]
                                                            }), (0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("td", {
                                                                    className: "product-name",
                                                                    children: (0, x.jsx)("a", {
                                                                        href: "#",
                                                                        children: "Smart Watch"
                                                                    })
                                                                }), (0, x.jsx)("td", {
                                                                    className: "product-total",
                                                                    children: (0, x.jsx)("span", {
                                                                        className: "subtotal-amount",
                                                                        children: "$30.00"
                                                                    })
                                                                })]
                                                            }), (0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("td", {
                                                                    className: "product-name",
                                                                    children: (0, x.jsx)("a", {
                                                                        href: "#",
                                                                        children: "TV"
                                                                    })
                                                                }), (0, x.jsx)("td", {
                                                                    className: "product-total",
                                                                    children: (0, x.jsx)("span", {
                                                                        className: "subtotal-amount",
                                                                        children: "$30.00"
                                                                    })
                                                                })]
                                                            }), (0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("td", {
                                                                    className: "product-name",
                                                                    children: (0, x.jsx)("a", {
                                                                        href: "#",
                                                                        children: "Book"
                                                                    })
                                                                }), (0, x.jsx)("td", {
                                                                    className: "product-total",
                                                                    children: (0, x.jsx)("span", {
                                                                        className: "subtotal-amount",
                                                                        children: "$30.00"
                                                                    })
                                                                })]
                                                            }), (0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("td", {
                                                                    className: "order-subtotal",
                                                                    children: (0, x.jsx)("span", {
                                                                        children: "Cart Subtotal"
                                                                    })
                                                                }), (0, x.jsx)("td", {
                                                                    className: "order-subtotal-price",
                                                                    children: (0, x.jsx)("span", {
                                                                        className: "order-subtotal-amount",
                                                                        children: "$210.00"
                                                                    })
                                                                })]
                                                            }), (0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("td", {
                                                                    className: "order-shipping",
                                                                    children: (0, x.jsx)("span", {
                                                                        children: "Shipping"
                                                                    })
                                                                }), (0, x.jsx)("td", {
                                                                    className: "shipping-price",
                                                                    children: (0, x.jsx)("span", {
                                                                        children: "$5.00"
                                                                    })
                                                                })]
                                                            }), (0, x.jsxs)("tr", {
                                                                children: [(0, x.jsx)("td", {
                                                                    className: "total-price",
                                                                    children: (0, x.jsx)("span", {
                                                                        children: "Order Total"
                                                                    })
                                                                }), (0, x.jsx)("td", {
                                                                    className: "product-subtotal",
                                                                    children: (0, x.jsx)("span", {
                                                                        className: "subtotal-amount",
                                                                        children: "$215.00"
                                                                    })
                                                                })]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, x.jsxs)("div", {
                                                    className: "payment-method",
                                                    children: [(0, x.jsxs)("p", {
                                                        children: [(0, x.jsx)("input", {
                                                            type: "radio",
                                                            id: "direct-bank-transfer",
                                                            name: "radio-group",
                                                            defaultChecked: !0
                                                        }), (0, x.jsx)("label", {
                                                            htmlFor: "direct-bank-transfer",
                                                            children: "Direct Bank Transfer"
                                                        }), "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."]
                                                    }), (0, x.jsxs)("p", {
                                                        children: [(0, x.jsx)("input", {
                                                            type: "radio",
                                                            id: "paypal",
                                                            name: "radio-group"
                                                        }), (0, x.jsx)("label", {
                                                            htmlFor: "paypal",
                                                            children: "PayPal"
                                                        })]
                                                    }), (0, x.jsxs)("p", {
                                                        children: [(0, x.jsx)("input", {
                                                            type: "radio",
                                                            id: "cash-on-delivery",
                                                            name: "radio-group"
                                                        }), (0, x.jsx)("label", {
                                                            htmlFor: "cash-on-delivery",
                                                            children: "Cash on Delivery"
                                                        })]
                                                    })]
                                                }), (0, x.jsx)("a", {
                                                    href: "#",
                                                    className: "btn btn-primary order-btn",
                                                    children: "Place Order"
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, x.jsx)(c.Z, {})]
                    })
                }
        },
        60354: function(e, s, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/checkout", function() {
                return r(42051)
            }])
        },
        73549: function(e, s, r) {
            "use strict";
            var a = r(67294),
                l = r(45697),
                c = r.n(l);

            function n() {
                return (n = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var r = arguments[s];
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e, s) {
                if (null == e) return {};
                var r, a, l = function(e, s) {
                    if (null == e) return {};
                    var r, a, l = {},
                        c = Object.keys(e);
                    for (a = 0; a < c.length; a++) r = c[a], s.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < c.length; a++) r = c[a], s.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
                }
                return l
            }
            var t = (0, a.forwardRef)((function(e, s) {
                var r = e.color,
                    l = void 0 === r ? "currentColor" : r,
                    c = e.size,
                    t = void 0 === c ? 24 : c,
                    d = i(e, ["color", "size"]);
                return a.createElement("svg", n({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: t,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: l,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, d), a.createElement("circle", {
                    cx: "9",
                    cy: "21",
                    r: "1"
                }), a.createElement("circle", {
                    cx: "20",
                    cy: "21",
                    r: "1"
                }), a.createElement("path", {
                    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                }))
            }));
            t.propTypes = {
                color: c().string,
                size: c().oneOfType([c().string, c().number])
            }, t.displayName = "ShoppingCart", s.Z = t
        }
    },
    function(e) {
        e.O(0, [1736, 4773, 9774, 2888, 179], (function() {
            return s = 60354, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);