"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2329], {
        62329: function(s, e, i) {
            var r = i(68216),
                l = i(25997),
                a = i(14695),
                n = i(13444),
                c = i(30268),
                d = i(92953),
                t = i(92809),
                x = i(67294),
                j = i(41664),
                h = i(46445),
                o = i(85893);

            function m(s) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (s) {
                        return !1
                    }
                }();
                return function() {
                    var i, r = (0, d.Z)(s);
                    if (e) {
                        var l = (0, d.Z)(this).constructor;
                        i = Reflect.construct(r, arguments, l)
                    } else i = r.apply(this, arguments);
                    return (0, c.Z)(this, i)
                }
            }
            var u = function(s) {
                (0, n.Z)(i, s);
                var e = m(i);

                function i() {
                    var s;
                    (0, r.Z)(this, i);
                    for (var l = arguments.length, n = new Array(l), c = 0; c < l; c++) n[c] = arguments[c];
                    return s = e.call.apply(e, [this].concat(n)), (0, t.Z)((0, a.Z)(s), "openTabSection", (function(s, e) {
                        var i, r, l;
                        for (r = document.getElementsByClassName("tabs_item"), i = 0; i < r.length; i++) r[i].style.display = "none";
                        for (l = document.getElementsByTagName("li"), i = 0; i < l.length; i++) l[i].className = l[i].className.replace("current", "");
                        document.getElementById(e).style.display = "block", s.currentTarget.className += "current"
                    })), s
                }
                return (0, l.Z)(i, [{
                    key: "render",
                    value: function() {
                        var s = this;
                        return (0, o.jsxs)("div", {
                            className: "pricing-area pb-50",
                            children: [(0, o.jsxs)("div", {
                                className: "container",
                                children: [(0, o.jsxs)("div", {
                                    className: "section-title",
                                    children: [(0, o.jsx)("h2", {
                                        children: "Our Pricing Plan"
                                    }), (0, o.jsx)("div", {
                                        className: "bar"
                                    }), (0, o.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    })]
                                }), (0, o.jsxs)("div", {
                                    className: "tab pricing-tab bg-color",
                                    children: [(0, o.jsxs)("ul", {
                                        className: "tabs",
                                        children: [(0, o.jsx)("li", {
                                            className: "current",
                                            onClick: function(e) {
                                                return s.openTabSection(e, "tab1")
                                            },
                                            children: "Monthly Plan"
                                        }), (0, o.jsx)("li", {
                                            onClick: function(e) {
                                                return s.openTabSection(e, "tab2")
                                            },
                                            children: "Yearly Plan"
                                        })]
                                    }), (0, o.jsxs)("div", {
                                        className: "tab_content",
                                        children: [(0, o.jsx)("div", {
                                            id: "tab1",
                                            className: "tabs_item",
                                            children: (0, o.jsxs)("div", {
                                                className: "row justify-content-center",
                                                children: [(0, o.jsx)("div", {
                                                    className: "col-lg-4 col-md-6 col-sm-6",
                                                    children: (0, o.jsxs)("div", {
                                                        className: "pricing-box",
                                                        children: [(0, o.jsxs)("div", {
                                                            className: "pricing-header",
                                                            children: [(0, o.jsx)("h3", {
                                                                children: "Free"
                                                            }), (0, o.jsxs)("p", {
                                                                children: ["Get your business up ", (0, o.jsx)("br", {}), " and running"]
                                                            })]
                                                        }), (0, o.jsxs)("div", {
                                                            className: "price",
                                                            children: ["$0 ", (0, o.jsx)("span", {
                                                                children: "/m"
                                                            })]
                                                        }), (0, o.jsx)("div", {
                                                            className: "buy-btn",
                                                            children: (0, o.jsx)(j.default, {
                                                                href: "#",
                                                                children: (0, o.jsx)("a", {
                                                                    className: "btn btn-primary",
                                                                    children: "Get Started Free"
                                                                })
                                                            })
                                                        }), (0, o.jsxs)("ul", {
                                                            className: "pricing-features",
                                                            children: [(0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Drag & Drop Builder"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Lead Generation & Sales"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Boot & Digital Assistants"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Customer Service"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Up to 1000 Subscribers"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Unlimited Broadcasts"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Landing Pages & Web Widgets"]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, o.jsx)("div", {
                                                    className: "col-lg-4 col-md-6 col-sm-6",
                                                    children: (0, o.jsxs)("div", {
                                                        className: "pricing-box",
                                                        children: [(0, o.jsxs)("div", {
                                                            className: "pricing-header",
                                                            children: [(0, o.jsx)("h3", {
                                                                children: "Pro"
                                                            }), (0, o.jsxs)("p", {
                                                                children: ["Get your business up ", (0, o.jsx)("br", {}), " and running"]
                                                            })]
                                                        }), (0, o.jsxs)("div", {
                                                            className: "price",
                                                            children: ["$149 ", (0, o.jsx)("span", {
                                                                children: "/m"
                                                            })]
                                                        }), (0, o.jsx)("div", {
                                                            className: "buy-btn",
                                                            children: (0, o.jsx)(j.default, {
                                                                href: "#",
                                                                children: (0, o.jsx)("a", {
                                                                    className: "btn btn-primary",
                                                                    children: "Start 3 Days Free Trial"
                                                                })
                                                            })
                                                        }), (0, o.jsxs)("ul", {
                                                            className: "pricing-features",
                                                            children: [(0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Drag & Drop Builder"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Lead Generation & Sales"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Boot & Digital Assistants"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Customer Service"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Up to 3300 Subscribers"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Unlimited Broadcasts"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Landing Pages & Web Widgets"]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, o.jsx)("div", {
                                                    className: "col-lg-4 col-md-6 col-sm-6",
                                                    children: (0, o.jsxs)("div", {
                                                        className: "pricing-box",
                                                        children: [(0, o.jsxs)("div", {
                                                            className: "pricing-header",
                                                            children: [(0, o.jsx)("h3", {
                                                                children: "Premium"
                                                            }), (0, o.jsxs)("p", {
                                                                children: ["Get your business up ", (0, o.jsx)("br", {}), " and running"]
                                                            })]
                                                        }), (0, o.jsxs)("div", {
                                                            className: "price",
                                                            children: ["$179 ", (0, o.jsx)("span", {
                                                                children: "/m"
                                                            })]
                                                        }), (0, o.jsx)("div", {
                                                            className: "buy-btn",
                                                            children: (0, o.jsx)(j.default, {
                                                                href: "#",
                                                                children: (0, o.jsx)("a", {
                                                                    className: "btn btn-primary",
                                                                    children: "Start 6 Days Free Trial"
                                                                })
                                                            })
                                                        }), (0, o.jsxs)("ul", {
                                                            className: "pricing-features",
                                                            children: [(0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Drag & Drop Builder"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Lead Generation & Sales"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Boot & Digital Assistants"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Customer Service"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Up to 10000 Subscribers"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Unlimited Broadcasts"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Landing Pages & Web Widgets"]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, o.jsx)("div", {
                                            id: "tab2",
                                            className: "tabs_item",
                                            children: (0, o.jsxs)("div", {
                                                className: "row justify-content-center",
                                                children: [(0, o.jsx)("div", {
                                                    className: "col-lg-4 col-md-6 col-sm-6",
                                                    children: (0, o.jsxs)("div", {
                                                        className: "pricing-box",
                                                        children: [(0, o.jsxs)("div", {
                                                            className: "pricing-header",
                                                            children: [(0, o.jsx)("h3", {
                                                                children: "Free"
                                                            }), (0, o.jsxs)("p", {
                                                                children: ["Get your business up ", (0, o.jsx)("br", {}), " and running"]
                                                            })]
                                                        }), (0, o.jsxs)("div", {
                                                            className: "price",
                                                            children: ["$0 ", (0, o.jsx)("span", {
                                                                children: "/y"
                                                            })]
                                                        }), (0, o.jsx)("div", {
                                                            className: "buy-btn",
                                                            children: (0, o.jsx)(j.default, {
                                                                href: "#",
                                                                children: (0, o.jsx)("a", {
                                                                    className: "btn btn-primary",
                                                                    children: "Get Started Free"
                                                                })
                                                            })
                                                        }), (0, o.jsxs)("ul", {
                                                            className: "pricing-features",
                                                            children: [(0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Drag & Drop Builder"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Lead Generation & Sales"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Boot & Digital Assistants"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Customer Service"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Up to 1000 Subscribers"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Unlimited Broadcasts"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Landing Pages & Web Widgets"]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, o.jsx)("div", {
                                                    className: "col-lg-4 col-md-6 col-sm-6",
                                                    children: (0, o.jsxs)("div", {
                                                        className: "pricing-box",
                                                        children: [(0, o.jsxs)("div", {
                                                            className: "pricing-header",
                                                            children: [(0, o.jsx)("h3", {
                                                                children: "Pro"
                                                            }), (0, o.jsxs)("p", {
                                                                children: ["Get your business up ", (0, o.jsx)("br", {}), " and running"]
                                                            })]
                                                        }), (0, o.jsxs)("div", {
                                                            className: "price",
                                                            children: ["$249 ", (0, o.jsx)("span", {
                                                                children: "/y"
                                                            })]
                                                        }), (0, o.jsx)("div", {
                                                            className: "buy-btn",
                                                            children: (0, o.jsx)(j.default, {
                                                                href: "#",
                                                                children: (0, o.jsx)("a", {
                                                                    className: "btn btn-primary",
                                                                    children: "Start 3 Days Free Trial"
                                                                })
                                                            })
                                                        }), (0, o.jsxs)("ul", {
                                                            className: "pricing-features",
                                                            children: [(0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Drag & Drop Builder"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Lead Generation & Sales"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Boot & Digital Assistants"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Customer Service"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Up to 3300 Subscribers"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Unlimited Broadcasts"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Landing Pages & Web Widgets"]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, o.jsx)("div", {
                                                    className: "col-lg-4 col-md-6 col-sm-6",
                                                    children: (0, o.jsxs)("div", {
                                                        className: "pricing-box",
                                                        children: [(0, o.jsxs)("div", {
                                                            className: "pricing-header",
                                                            children: [(0, o.jsx)("h3", {
                                                                children: "Premium"
                                                            }), (0, o.jsxs)("p", {
                                                                children: ["Get your business up ", (0, o.jsx)("br", {}), " and running"]
                                                            })]
                                                        }), (0, o.jsxs)("div", {
                                                            className: "price",
                                                            children: ["$279 ", (0, o.jsx)("span", {
                                                                children: "/y"
                                                            })]
                                                        }), (0, o.jsx)("div", {
                                                            className: "buy-btn",
                                                            children: (0, o.jsx)(j.default, {
                                                                href: "#",
                                                                children: (0, o.jsx)("a", {
                                                                    className: "btn btn-primary",
                                                                    children: "Start 6 Days Free Trial"
                                                                })
                                                            })
                                                        }), (0, o.jsxs)("ul", {
                                                            className: "pricing-features",
                                                            children: [(0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Drag & Drop Builder"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Lead Generation & Sales"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Boot & Digital Assistants"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Customer Service"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Up to 10000 Subscribers"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Unlimited Broadcasts"]
                                                            }), (0, o.jsxs)("li", {
                                                                children: [(0, o.jsx)(h.Z, {}), " Landing Pages & Web Widgets"]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                })]
                            }), (0, o.jsx)("div", {
                                className: "shape1",
                                children: (0, o.jsx)("img", {
                                    src: "/images/shape1.png",
                                    alt: "shape"
                                })
                            }), (0, o.jsx)("div", {
                                className: "shape2 rotateme",
                                children: (0, o.jsx)("img", {
                                    src: "/images/shape2.svg",
                                    alt: "shape"
                                })
                            }), (0, o.jsx)("div", {
                                className: "shape3",
                                children: (0, o.jsx)("img", {
                                    src: "/images/shape3.svg",
                                    alt: "shape"
                                })
                            }), (0, o.jsx)("div", {
                                className: "shape4",
                                children: (0, o.jsx)("img", {
                                    src: "/images/shape4.svg",
                                    alt: "shape"
                                })
                            }), (0, o.jsx)("div", {
                                className: "shape7",
                                children: (0, o.jsx)("img", {
                                    src: "/images/shape4.svg",
                                    alt: "shape"
                                })
                            }), (0, o.jsx)("div", {
                                className: "shape8 rotateme",
                                children: (0, o.jsx)("img", {
                                    src: "/images/shape2.svg",
                                    alt: "shape"
                                })
                            })]
                        })
                    }
                }]), i
            }(x.Component);
            e.Z = u
        }
    }
]);