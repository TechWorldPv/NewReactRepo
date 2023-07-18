(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6943], {
        21479: function(e, s, a) {
            "use strict";
            var i = a(92809),
                r = a(80318),
                t = a(67294),
                n = a(5152),
                c = a(12575),
                l = a(85893);

            function m(e, s) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    s && (i = i.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function o(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? m(Object(a), !0).forEach((function(s) {
                        (0, i.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            var d = (0, n.default)((function() {
                    return a.e(5518).then(a.t.bind(a, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/Common/FeedbackStyleThree.js -> react-owl-carousel3"]
                    }
                }),
                g = {
                    loop: !1,
                    nav: !1,
                    dots: !0,
                    autoplay: !0,
                    smartSpeed: 1e3,
                    autoplayTimeout: 5e3,
                    items: 1,
                    animateOut: "fadeOut"
                };
            s.Z = function() {
                var e = t.useState(!1),
                    s = (0, r.Z)(e, 2),
                    a = s[0],
                    i = s[1];
                return t.useEffect((function() {
                    i(!0)
                }), []), (0, l.jsxs)("div", {
                    className: "ml-feedback-area ptb-80",
                    children: [(0, l.jsxs)("div", {
                        className: "container",
                        children: [(0, l.jsxs)("div", {
                            className: "section-title st-fs-28",
                            children: [(0, l.jsx)("span", {
                                className: "sub-title",
                                children: "Testimonials"
                            }), (0, l.jsx)("h2", {
                                children: "Our Clients Feedback"
                            }), (0, l.jsx)("div", {
                                className: "bar"
                            }), (0, l.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        }), a ? (0, l.jsxs)(d, o(o({
                            className: "ml-feedback-slides owl-carousel owl-theme"
                        }, g), {}, {
                            children: [(0, l.jsxs)("div", {
                                className: "single-testimonials-item",
                                children: [(0, l.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, l.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/client-image/client1.jpg",
                                        alt: "image"
                                    }), (0, l.jsxs)("div", {
                                        className: "rating",
                                        children: [(0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {})]
                                    }), (0, l.jsx)("h3", {
                                        children: "Sarah Taylor"
                                    }), (0, l.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "single-testimonials-item",
                                children: [(0, l.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, l.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/client-image/client2.jpg",
                                        alt: "image"
                                    }), (0, l.jsxs)("div", {
                                        className: "rating",
                                        children: [(0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {})]
                                    }), (0, l.jsx)("h3", {
                                        children: "Steven Smith"
                                    }), (0, l.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "single-testimonials-item",
                                children: [(0, l.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, l.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/client-image/client3.jpg",
                                        alt: "image"
                                    }), (0, l.jsxs)("div", {
                                        className: "rating",
                                        children: [(0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(c.Z, {})]
                                    }), (0, l.jsx)("h3", {
                                        children: "James Eva"
                                    }), (0, l.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                })]
                            })]
                        })) : ""]
                    }), (0, l.jsx)("div", {
                        className: "user-shape1",
                        children: (0, l.jsx)("img", {
                            src: "/images/agency-image/agency-user1.png",
                            alt: "shape"
                        })
                    }), (0, l.jsx)("div", {
                        className: "user-shape2",
                        children: (0, l.jsx)("img", {
                            src: "/images/agency-image/agency-user2.png",
                            alt: "shape"
                        })
                    }), (0, l.jsx)("div", {
                        className: "user-shape3",
                        children: (0, l.jsx)("img", {
                            src: "/images/agency-image/agency-user3.png",
                            alt: "shape"
                        })
                    }), (0, l.jsx)("div", {
                        className: "user-shape4",
                        children: (0, l.jsx)("img", {
                            src: "/images/agency-image/agency-user4.png",
                            alt: "shape"
                        })
                    }), (0, l.jsx)("div", {
                        className: "user-shape5",
                        children: (0, l.jsx)("img", {
                            src: "/images/agency-image/agency-user5.png",
                            alt: "shape"
                        })
                    }), (0, l.jsx)("div", {
                        className: "user-shape6",
                        children: (0, l.jsx)("img", {
                            src: "/images/agency-image/agency-user6.png",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        77251: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(85893);
            s.Z = function(e) {
                var s = e.pageTitle;
                return (0, i.jsxs)("div", {
                    className: "page-title-area",
                    children: [(0, i.jsx)("div", {
                        className: "d-table",
                        children: (0, i.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, i.jsx)("div", {
                                className: "container",
                                children: (0, i.jsx)("h2", {
                                    children: s
                                })
                            })
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape1",
                        children: (0, i.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, i.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape3",
                        children: (0, i.jsx)("img", {
                            src: "/images/shape3.svg",
                            alt: "shape"
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape4",
                        children: (0, i.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape5",
                        children: (0, i.jsx)("img", {
                            src: "/images/shape5.png",
                            alt: "shape"
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape6 rotateme",
                        children: (0, i.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape7",
                        children: (0, i.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, i.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        52663: function(e, s, a) {
            "use strict";
            var i = a(92809),
                r = a(80318),
                t = a(67294),
                n = (a(41664), a(68694)),
                c = a.n(n),
                l = a(85893);

            function m(e, s) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    s && (i = i.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function o(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? m(Object(a), !0).forEach((function(s) {
                        (0, i.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : m(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            var d = {
                loop: !0,
                nav: !1,
                dots: !1,
                autoplay: !0,
                smartSpeed: 1e3,
                autoplayTimeout: 5e3,
                responsive: {
                    0: {
                        items: 2
                    },
                    576: {
                        items: 4
                    },
                    768: {
                        items: 4
                    },
                    1024: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                }
            };
            s.Z = function() {
                var e = t.useState(!1),
                    s = (0, r.Z)(e, 2),
                    a = s[0],
                    i = s[1];
                return t.useEffect((function() {
                    i(!0)
                }), []), (0, l.jsx)("div", {
                    className: "ml-partner-area mt-minus-top ptb-80 pb-0",
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: a ? (0, l.jsxs)(c(), o(o({
                            className: "partner-slides owl-carousel owl-theme"
                        }, d), {}, {
                            children: [(0, l.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, l.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-1.png",
                                        alt: "image"
                                    }), (0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-hover1.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, l.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-2.png",
                                        alt: "image"
                                    }), (0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-hover2.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, l.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-3.png",
                                        alt: "image"
                                    }), (0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-hover3.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, l.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-10.png",
                                        alt: "image"
                                    }), (0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-hover10.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, l.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-5.png",
                                        alt: "image"
                                    }), (0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-hover5.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, l.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-6.png",
                                        alt: "image"
                                    }), (0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-hover6.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, l.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-7.png",
                                        alt: "image"
                                    }), (0, l.jsx)("img", {
                                        src: "/images/partner-img/partner-hover7.png",
                                        alt: "image"
                                    })]
                                })
                            })]
                        })) : ""
                    })
                })
            }
        },
        87261: function(e, s, a) {
            "use strict";
            a.r(s);
            a(67294);
            var i = a(37704),
                r = a(68410),
                t = a(98894),
                n = a(61646),
                c = a(77251),
                l = a(21479),
                m = a(52663),
                o = a(85893);
            s.default = function() {
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(i.Z, {}), (0, o.jsx)(c.Z, {
                        pageTitle: "About Us"
                    }), (0, o.jsxs)("div", {
                        className: "agency-about-area ptb-80",
                        children: [(0, o.jsx)("div", {
                            className: "container-fluid",
                            children: (0, o.jsxs)("div", {
                                className: "row align-items-center",
                                children: [(0, o.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, o.jsx)("div", {
                                        className: "agency-about-img",
                                        children: (0, o.jsx)("img", {
                                            src: "/images/agency-image/agency-about-img.jpg",
                                            alt: "image"
                                        })
                                    })
                                }), (0, o.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, o.jsxs)("div", {
                                        className: "agency-about-content",
                                        children: [(0, o.jsx)("span", {
                                            className: "sub-title",
                                            children: "About Us"
                                        }), (0, o.jsx)("h2", {
                                            children: "Engaging New Audiences Through Smart Approach"
                                        }), (0, o.jsx)("div", {
                                            className: "bar"
                                        }), (0, o.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        }), (0, o.jsx)("p", {
                                            children: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.Donec vitae sapien ut libero venenatis faucibus tempus."
                                        }), (0, o.jsx)("p", {
                                            children: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."
                                        })]
                                    })
                                })]
                            })
                        }), (0, o.jsx)("div", {
                            className: "container",
                            children: (0, o.jsx)("div", {
                                className: "about-inner-area",
                                children: (0, o.jsxs)("div", {
                                    className: "row justify-content-center",
                                    children: [(0, o.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: (0, o.jsxs)("div", {
                                            className: "about-text",
                                            children: [(0, o.jsx)("h3", {
                                                children: "Our History"
                                            }), (0, o.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram."
                                            })]
                                        })
                                    }), (0, o.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: (0, o.jsxs)("div", {
                                            className: "about-text",
                                            children: [(0, o.jsx)("h3", {
                                                children: "Our Mission"
                                            }), (0, o.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram."
                                            })]
                                        })
                                    }), (0, o.jsx)("div", {
                                        className: "col-lg-4 col-md-6 col-sm-6",
                                        children: (0, o.jsxs)("div", {
                                            className: "about-text",
                                            children: [(0, o.jsx)("h3", {
                                                children: "Who We Are"
                                            }), (0, o.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram."
                                            })]
                                        })
                                    })]
                                })
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
                            className: "shape6 rotateme",
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
                    }), (0, o.jsx)(r.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(t.Z, {}), (0, o.jsx)("div", {
                        className: "pb-80",
                        children: (0, o.jsx)(m.Z, {})
                    }), (0, o.jsx)(n.Z, {})]
                })
            }
        },
        21182: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about-3", function() {
                return a(87261)
            }])
        },
        82126: function(e, s, a) {
            "use strict";
            var i = a(67294),
                r = a(45697),
                t = a.n(r);

            function n() {
                return (n = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var a = arguments[s];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, s) {
                if (null == e) return {};
                var a, i, r = function(e, s) {
                    if (null == e) return {};
                    var a, i, r = {},
                        t = Object.keys(e);
                    for (i = 0; i < t.length; i++) a = t[i], s.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < t.length; i++) a = t[i], s.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }
            var l = (0, i.forwardRef)((function(e, s) {
                var a = e.color,
                    r = void 0 === a ? "currentColor" : a,
                    t = e.size,
                    l = void 0 === t ? 24 : t,
                    m = c(e, ["color", "size"]);
                return i.createElement("svg", n({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: r,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, m), i.createElement("path", {
                    d: "M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"
                }))
            }));
            l.propTypes = {
                color: t().string,
                size: t().oneOfType([t().string, t().number])
            }, l.displayName = "Gitlab", s.Z = l
        }
    },
    function(e) {
        e.O(0, [9774, 5518, 1736, 1945, 4773, 8430, 2888, 179], (function() {
            return s = 21182, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);