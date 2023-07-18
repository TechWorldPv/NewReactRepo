(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4916], {
        21479: function(e, s, a) {
            "use strict";
            var i = a(92809),
                l = a(80318),
                c = a(67294),
                n = a(5152),
                r = a(12575),
                t = a(85893);

            function d(e, s) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    s && (i = i.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function m(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? d(Object(a), !0).forEach((function(s) {
                        (0, i.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : d(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            var h = (0, n.default)((function() {
                    return a.e(5518).then(a.t.bind(a, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/Common/FeedbackStyleThree.js -> react-owl-carousel3"]
                    }
                }),
                o = {
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
                var e = c.useState(!1),
                    s = (0, l.Z)(e, 2),
                    a = s[0],
                    i = s[1];
                return c.useEffect((function() {
                    i(!0)
                }), []), (0, t.jsxs)("div", {
                    className: "ml-feedback-area ptb-80",
                    children: [(0, t.jsxs)("div", {
                        className: "container",
                        children: [(0, t.jsxs)("div", {
                            className: "section-title st-fs-28",
                            children: [(0, t.jsx)("span", {
                                className: "sub-title",
                                children: "Testimonials"
                            }), (0, t.jsx)("h2", {
                                children: "Our Clients Feedback"
                            }), (0, t.jsx)("div", {
                                className: "bar"
                            }), (0, t.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        }), a ? (0, t.jsxs)(h, m(m({
                            className: "ml-feedback-slides owl-carousel owl-theme"
                        }, o), {}, {
                            children: [(0, t.jsxs)("div", {
                                className: "single-testimonials-item",
                                children: [(0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, t.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, t.jsx)("img", {
                                        src: "/images/client-image/client1.jpg",
                                        alt: "image"
                                    }), (0, t.jsxs)("div", {
                                        className: "rating",
                                        children: [(0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {})]
                                    }), (0, t.jsx)("h3", {
                                        children: "Sarah Taylor"
                                    }), (0, t.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "single-testimonials-item",
                                children: [(0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, t.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, t.jsx)("img", {
                                        src: "/images/client-image/client2.jpg",
                                        alt: "image"
                                    }), (0, t.jsxs)("div", {
                                        className: "rating",
                                        children: [(0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {})]
                                    }), (0, t.jsx)("h3", {
                                        children: "Steven Smith"
                                    }), (0, t.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "single-testimonials-item",
                                children: [(0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, t.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, t.jsx)("img", {
                                        src: "/images/client-image/client3.jpg",
                                        alt: "image"
                                    }), (0, t.jsxs)("div", {
                                        className: "rating",
                                        children: [(0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {}), (0, t.jsx)(r.Z, {})]
                                    }), (0, t.jsx)("h3", {
                                        children: "James Eva"
                                    }), (0, t.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                })]
                            })]
                        })) : ""]
                    }), (0, t.jsx)("div", {
                        className: "user-shape1",
                        children: (0, t.jsx)("img", {
                            src: "/images/agency-image/agency-user1.png",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "user-shape2",
                        children: (0, t.jsx)("img", {
                            src: "/images/agency-image/agency-user2.png",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "user-shape3",
                        children: (0, t.jsx)("img", {
                            src: "/images/agency-image/agency-user3.png",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "user-shape4",
                        children: (0, t.jsx)("img", {
                            src: "/images/agency-image/agency-user4.png",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "user-shape5",
                        children: (0, t.jsx)("img", {
                            src: "/images/agency-image/agency-user5.png",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "user-shape6",
                        children: (0, t.jsx)("img", {
                            src: "/images/agency-image/agency-user6.png",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        61646: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(41664),
                l = a(64856),
                c = a(22774),
                n = a(89899),
                r = a(51591),
                t = a(20706),
                d = a(80289),
                m = a(19318),
                h = a(85893);
            s.Z = function() {
                var e = (new Date).getFullYear();
                return (0, h.jsxs)("footer", {
                    className: "footer-area bg-f7fafd",
                    children: [(0, h.jsx)("div", {
                        className: "container",
                        children: (0, h.jsxs)("div", {
                            className: "row",
                            children: [(0, h.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, h.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [(0, h.jsx)("div", {
                                        className: "logo",
                                        children: (0, h.jsx)(i.default, {
                                            href: "/it-startup",
                                            children: (0, h.jsx)("a", {
                                                children: (0, h.jsx)("img", {
                                                    src: "/images/logo.png",
                                                    alt: "logo"
                                                })
                                            })
                                        })
                                    }), (0, h.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
                                    })]
                                })
                            }), (0, h.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, h.jsxs)("div", {
                                    className: "single-footer-widget pl-5",
                                    children: [(0, h.jsx)("h3", {
                                        children: "Company"
                                    }), (0, h.jsxs)("ul", {
                                        className: "list",
                                        children: [(0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/about-1",
                                                children: (0, h.jsx)("a", {
                                                    children: "About Us"
                                                })
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/services-1",
                                                children: (0, h.jsx)("a", {
                                                    children: "Services"
                                                })
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/features",
                                                children: (0, h.jsx)("a", {
                                                    children: "Features"
                                                })
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/pricing",
                                                children: (0, h.jsx)("a", {
                                                    children: "Our Pricing"
                                                })
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/blog-1",
                                                children: (0, h.jsx)("a", {
                                                    children: "Latest News"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), (0, h.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, h.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [(0, h.jsx)("h3", {
                                        children: "Support"
                                    }), (0, h.jsxs)("ul", {
                                        className: "list",
                                        children: [(0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/faq",
                                                children: (0, h.jsx)("a", {
                                                    children: "FAQ's"
                                                })
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/privacy-policy",
                                                children: (0, h.jsx)("a", {
                                                    children: "Privacy Policy"
                                                })
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/term-condition",
                                                children: (0, h.jsx)("a", {
                                                    children: "Terms & Condition"
                                                })
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/team",
                                                children: (0, h.jsx)("a", {
                                                    children: "Team"
                                                })
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)(i.default, {
                                                href: "/contact",
                                                children: (0, h.jsx)("a", {
                                                    children: "Contact Us"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), (0, h.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, h.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [(0, h.jsx)("h3", {
                                        children: "Address"
                                    }), (0, h.jsxs)("ul", {
                                        className: "footer-contact-info",
                                        children: [(0, h.jsxs)("li", {
                                            children: [(0, h.jsx)(l.Z, {}), "27 Division St, New York, ", (0, h.jsx)("br", {}), " NY 10002, USA"]
                                        }), (0, h.jsxs)("li", {
                                            children: [(0, h.jsx)(c.Z, {}), "Email: ", (0, h.jsx)("a", {
                                                href: "mailto:startp@gmail.com",
                                                children: "startp@gmail.com"
                                            })]
                                        }), (0, h.jsxs)("li", {
                                            children: [(0, h.jsx)(n.Z, {}), "Phone: ", (0, h.jsx)("a", {
                                                href: "tel:321984754",
                                                children: "+ (321) 984 754"
                                            })]
                                        })]
                                    }), (0, h.jsxs)("ul", {
                                        className: "social-links",
                                        children: [(0, h.jsx)("li", {
                                            children: (0, h.jsx)("a", {
                                                href: "https://www.facebook.com/",
                                                className: "facebook",
                                                target: "_blank",
                                                children: (0, h.jsx)(r.Z, {})
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)("a", {
                                                href: "https://www.twitter.com/",
                                                className: "twitter",
                                                target: "_blank",
                                                children: (0, h.jsx)(t.Z, {})
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)("a", {
                                                href: "https://www.instagramcom/",
                                                className: "instagram",
                                                target: "_blank",
                                                children: (0, h.jsx)(d.Z, {})
                                            })
                                        }), (0, h.jsx)("li", {
                                            children: (0, h.jsx)("a", {
                                                href: "https://www.linkedin.com/",
                                                className: "linkedin",
                                                target: "_blank",
                                                children: (0, h.jsx)(m.Z, {})
                                            })
                                        })]
                                    })]
                                })
                            }), (0, h.jsx)("div", {
                                className: "col-lg-12 col-md-12",
                                children: (0, h.jsx)("div", {
                                    className: "copyright-area",
                                    children: (0, h.jsxs)("p", {
                                        children: ["Copyright \xa9 ", e, " StartP. All rights reserved by ", (0, h.jsx)("a", {
                                            href: "https://envytheme.com/",
                                            target: "_blank",
                                            children: "EnvyTheme"
                                        })]
                                    })
                                })
                            })]
                        })
                    }), (0, h.jsx)("img", {
                        src: "/images/map.png",
                        className: "map",
                        alt: "map"
                    }), (0, h.jsx)("div", {
                        className: "shape1",
                        children: (0, h.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, h.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, h.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        58003: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return T
                }
            });
            var i = a(67294),
                l = a(80318),
                c = a(85652),
                n = a(27434),
                r = a(85893),
                t = function() {
                    var e = i.useState(!0),
                        s = (0, l.Z)(e, 2),
                        a = s[0],
                        t = s[1],
                        d = function() {
                            t(!a)
                        };
                    i.useEffect((function() {
                        var e = document.getElementById("header");
                        document.addEventListener("scroll", (function() {
                            window.scrollY > 170 ? e.classList.add("is-sticky") : e.classList.remove("is-sticky")
                        }))
                    }));
                    var m = a ? "collapse navbar-collapse" : "collapse navbar-collapse show",
                        h = a ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
                    return (0, r.jsx)("header", {
                        id: "header",
                        className: "headroom navbar-style-three",
                        children: (0, r.jsx)("div", {
                            className: "startp-nav",
                            children: (0, r.jsx)("div", {
                                className: "container-fluid",
                                children: (0, r.jsxs)("nav", {
                                    className: "navbar navbar-expand-md navbar-light",
                                    children: [(0, r.jsx)(c.Z, {
                                        href: "/it-startup",
                                        children: (0, r.jsx)("a", {
                                            onClick: d,
                                            className: "navbar-brand",
                                            children: (0, r.jsx)("img", {
                                                src: "/images/logo.png",
                                                alt: "logo"
                                            })
                                        })
                                    }), (0, r.jsxs)("button", {
                                        onClick: d,
                                        className: h,
                                        type: "button",
                                        "data-toggle": "collapse",
                                        "data-target": "#navbarSupportedContent",
                                        "aria-controls": "navbarSupportedContent",
                                        "aria-expanded": "false",
                                        "aria-label": "Toggle navigation",
                                        children: [(0, r.jsx)("span", {
                                            className: "icon-bar top-bar"
                                        }), (0, r.jsx)("span", {
                                            className: "icon-bar middle-bar"
                                        }), (0, r.jsx)("span", {
                                            className: "icon-bar bottom-bar"
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: m,
                                        id: "navbarSupportedContent",
                                        children: (0, r.jsxs)("ul", {
                                            className: "navbar-nav",
                                            children: [(0, r.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, r.jsx)(c.Z, {
                                                    href: "/#",
                                                    activeClassName: "active",
                                                    children: (0, r.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["Home ", (0, r.jsx)(n.Z, {})]
                                                    })
                                                }), (0, r.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/it-startup",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "IT Startup"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/it-startup-2",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "IT Startup Two"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/iot",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "IOT"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/hosting",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Hosting"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/machine-learning",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Machine Learning"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/machine-learning-2",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Machine Learning 2"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/bigdata-analytics",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Bigdata Analytics"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/digital-agency",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Digital Agency"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/digital-agency-portfolio",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Digital Agency Portfolio"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/pc-repair",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "PC Repair"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, r.jsx)(c.Z, {
                                                    href: "/#",
                                                    children: (0, r.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["About ", (0, r.jsx)(n.Z, {})]
                                                    })
                                                }), (0, r.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/about-1",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "About Style 1"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/about-2",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "About Style 2"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/about-3",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "About Style 3"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, r.jsx)(c.Z, {
                                                    href: "/#",
                                                    children: (0, r.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["Pages ", (0, r.jsx)(n.Z, {})]
                                                    })
                                                }), (0, r.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, r.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, r.jsx)(c.Z, {
                                                            href: "/#",
                                                            activeClassName: "active",
                                                            children: (0, r.jsxs)("a", {
                                                                onClick: function(e) {
                                                                    return e.preventDefault()
                                                                },
                                                                className: "nav-link",
                                                                children: ["Features ", (0, r.jsx)(n.Z, {})]
                                                            })
                                                        }), (0, r.jsxs)("ul", {
                                                            className: "dropdown-menu",
                                                            children: [(0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/features",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Features"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/feature-details",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Features Details"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, r.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, r.jsx)(c.Z, {
                                                            href: "/#",
                                                            activeClassName: "active",
                                                            children: (0, r.jsxs)("a", {
                                                                onClick: function(e) {
                                                                    return e.preventDefault()
                                                                },
                                                                className: "nav-link",
                                                                children: ["Services ", (0, r.jsx)(n.Z, {})]
                                                            })
                                                        }), (0, r.jsxs)("ul", {
                                                            className: "dropdown-menu",
                                                            children: [(0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/services-1",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 1"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/services-2",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 2"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/services-3",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 3"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/services-4",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 4"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/services-5",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 5"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/service-details",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Details"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/feedback",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Feedback"
                                                            })
                                                        })
                                                    }), (0, r.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, r.jsx)(c.Z, {
                                                            href: "/#",
                                                            activeClassName: "active",
                                                            children: (0, r.jsxs)("a", {
                                                                onClick: function(e) {
                                                                    return e.preventDefault()
                                                                },
                                                                className: "nav-link",
                                                                children: ["Projects ", (0, r.jsx)(n.Z, {})]
                                                            })
                                                        }), (0, r.jsxs)("ul", {
                                                            className: "dropdown-menu",
                                                            children: [(0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/projects-1",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Project Style 1"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/projects-2",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Project Style 1"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/project-details",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Project Details"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/team",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Team"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/pricing",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Pricing"
                                                            })
                                                        })
                                                    }), (0, r.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, r.jsx)(c.Z, {
                                                            href: "/#",
                                                            activeClassName: "active",
                                                            children: (0, r.jsxs)("a", {
                                                                onClick: function(e) {
                                                                    return e.preventDefault()
                                                                },
                                                                className: "nav-link",
                                                                children: ["User ", (0, r.jsx)(n.Z, {})]
                                                            })
                                                        }), (0, r.jsxs)("ul", {
                                                            className: "dropdown-menu",
                                                            children: [(0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/login",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Login"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/sign-up",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Sign Up"
                                                                    })
                                                                })
                                                            }), (0, r.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, r.jsx)(c.Z, {
                                                                    href: "/forgot-password",
                                                                    activeClassName: "active",
                                                                    children: (0, r.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Forgot Password"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/faq",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "FAQ's"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/coming-soon",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Coming Soon"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/404",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "404 Error Page"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, r.jsx)(c.Z, {
                                                    href: "/#",
                                                    activeClassName: "active",
                                                    children: (0, r.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["Shop ", (0, r.jsx)(n.Z, {})]
                                                    })
                                                }), (0, r.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/shop",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Shop"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/product-details",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Products Details"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/cart",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Cart"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/checkout",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Checkout"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, r.jsx)(c.Z, {
                                                    href: "/#",
                                                    children: (0, r.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["Blog ", (0, r.jsx)(n.Z, {})]
                                                    })
                                                }), (0, r.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/blog-1",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Grid"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/blog-2",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Right Sidebar"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/blog-3",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Grid 2"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/blog-4",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Right Sidebar 2"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/blog-5",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Grid 3"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/blog-6",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Right Sidebar 3"
                                                            })
                                                        })
                                                    }), (0, r.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, r.jsx)(c.Z, {
                                                            href: "/blog-details",
                                                            activeClassName: "active",
                                                            children: (0, r.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Details"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, r.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, r.jsx)(c.Z, {
                                                    href: "/contact",
                                                    activeClassName: "active",
                                                    children: (0, r.jsx)("a", {
                                                        onClick: d,
                                                        className: "nav-link",
                                                        children: "Contact"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: "others-option",
                                        children: (0, r.jsx)(c.Z, {
                                            href: "/contact",
                                            children: (0, r.jsx)("a", {
                                                className: "btn btn-gradient",
                                                children: "Contact Us"
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                d = a(41664),
                m = function() {
                    return (0, r.jsxs)("div", {
                        className: "agency-main-banner",
                        children: [(0, r.jsx)("div", {
                            className: "container-fluid",
                            children: (0, r.jsxs)("div", {
                                className: "row align-items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, r.jsxs)("div", {
                                        className: "agency-banner-content",
                                        children: [(0, r.jsx)("span", {
                                            className: "sub-title",
                                            children: "We are creative"
                                        }), (0, r.jsx)("h1", {
                                            children: "Digital Agency"
                                        }), (0, r.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                                        }), (0, r.jsx)(d.default, {
                                            href: "/contact",
                                            children: (0, r.jsx)("a", {
                                                className: "btn btn-secondary",
                                                children: "Get Started"
                                            })
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, r.jsx)("div", {
                                        className: "agency-banner-image",
                                        children: (0, r.jsx)("img", {
                                            src: "/images/agency-image/agency-banner-img.jpg",
                                            alt: "image"
                                        })
                                    })
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "shape2 rotateme",
                            children: (0, r.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        }), (0, r.jsx)("div", {
                            className: "shape8 rotateme",
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
                        })]
                    })
                },
                h = a(92493),
                o = function() {
                    return (0, r.jsxs)("div", {
                        className: "solutions-area ptb-80",
                        children: [(0, r.jsxs)("div", {
                            className: "container",
                            children: [(0, r.jsxs)("div", {
                                className: "section-title st-fs-28",
                                children: [(0, r.jsx)("span", {
                                    className: "sub-title",
                                    children: "What We Offer"
                                }), (0, r.jsx)("h2", {
                                    children: "Our Featured Solutions"
                                }), (0, r.jsx)("div", {
                                    className: "bar"
                                }), (0, r.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "row",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "solutions-box",
                                        children: [(0, r.jsxs)("div", {
                                            className: "icon",
                                            children: [(0, r.jsx)("i", {
                                                className: "bx bx-landscape"
                                            }), (0, r.jsx)("img", {
                                                src: "/images/agency-image/agency-icon-bg.png",
                                                alt: "image"
                                            })]
                                        }), (0, r.jsx)("h3", {
                                            children: (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsx)("a", {
                                                    children: "Programmatic Advertising"
                                                })
                                            })
                                        }), (0, r.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore."
                                        }), (0, r.jsx)(d.default, {
                                            href: "/service-details",
                                            children: (0, r.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, r.jsx)(h.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "solutions-box",
                                        children: [(0, r.jsxs)("div", {
                                            className: "icon",
                                            children: [(0, r.jsx)("i", {
                                                className: "bx bx-bar-chart-alt"
                                            }), (0, r.jsx)("img", {
                                                src: "/images/agency-image/agency-icon-bg.png",
                                                alt: "image"
                                            })]
                                        }), (0, r.jsx)("h3", {
                                            children: (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsx)("a", {
                                                    children: "Strategy & Research"
                                                })
                                            })
                                        }), (0, r.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore."
                                        }), (0, r.jsx)(d.default, {
                                            href: "/service-details",
                                            children: (0, r.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, r.jsx)(h.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "solutions-box",
                                        children: [(0, r.jsxs)("div", {
                                            className: "icon",
                                            children: [(0, r.jsx)("i", {
                                                className: "bx bx-devices"
                                            }), (0, r.jsx)("img", {
                                                src: "/images/agency-image/agency-icon-bg.png",
                                                alt: "image"
                                            })]
                                        }), (0, r.jsx)("h3", {
                                            children: (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsx)("a", {
                                                    children: "Design & Development"
                                                })
                                            })
                                        }), (0, r.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore."
                                        }), (0, r.jsx)(d.default, {
                                            href: "/service-details",
                                            children: (0, r.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, r.jsx)(h.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "solutions-box",
                                        children: [(0, r.jsxs)("div", {
                                            className: "icon",
                                            children: [(0, r.jsx)("i", {
                                                className: "bx bx-chalkboard"
                                            }), (0, r.jsx)("img", {
                                                src: "/images/agency-image/agency-icon-bg.png",
                                                alt: "image"
                                            })]
                                        }), (0, r.jsx)("h3", {
                                            children: (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsx)("a", {
                                                    children: "Branding & Marketing"
                                                })
                                            })
                                        }), (0, r.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore."
                                        }), (0, r.jsx)(d.default, {
                                            href: "/service-details",
                                            children: (0, r.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, r.jsx)(h.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: "shape9 slow mobile-dnone",
                            children: (0, r.jsx)("img", {
                                src: "/images/agency-image/agency-shape1.png",
                                className: "animate__animated animate__fadeInLeft animate__delay-0.7s",
                                alt: "image"
                            })
                        })]
                    })
                },
                j = function() {
                    return (0, r.jsxs)("div", {
                        className: "agency-about-area",
                        children: [(0, r.jsx)("div", {
                            className: "container-fluid",
                            children: (0, r.jsxs)("div", {
                                className: "row align-items-center",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, r.jsx)("div", {
                                        className: "agency-about-img",
                                        children: (0, r.jsx)("img", {
                                            src: "/images/agency-image/agency-about-img.jpg",
                                            alt: "image"
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, r.jsxs)("div", {
                                        className: "agency-about-content",
                                        children: [(0, r.jsx)("span", {
                                            className: "sub-title",
                                            children: "About Us"
                                        }), (0, r.jsx)("h2", {
                                            children: "Engaging New Audiences Through Smart Approach"
                                        }), (0, r.jsx)("div", {
                                            className: "bar"
                                        }), (0, r.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        }), (0, r.jsx)("p", {
                                            children: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.Donec vitae sapien ut libero venenatis faucibus tempus."
                                        }), (0, r.jsx)(d.default, {
                                            href: "/about",
                                            children: (0, r.jsx)("a", {
                                                className: "btn btn-secondary",
                                                children: "Discover More"
                                            })
                                        })]
                                    })
                                })]
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
                        }), (0, r.jsx)("div", {
                            className: "shape10",
                            children: (0, r.jsx)("img", {
                                src: "/images/agency-image/agency-shape2.png",
                                alt: "image"
                            })
                        })]
                    })
                },
                x = function() {
                    return (0, r.jsxs)("div", {
                        className: "agency-services-area pt-80 pb-50",
                        children: [(0, r.jsxs)("div", {
                            className: "container",
                            children: [(0, r.jsxs)("div", {
                                className: "section-title st-fs-28",
                                children: [(0, r.jsx)("span", {
                                    className: "sub-title",
                                    children: "Our Solutions"
                                }), (0, r.jsx)("h2", {
                                    children: "Our Services"
                                }), (0, r.jsx)("div", {
                                    className: "bar"
                                }), (0, r.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-4 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "agency-services-box",
                                        children: [(0, r.jsx)("img", {
                                            src: "/images/agency-image/agency-services-img1.jpg",
                                            alt: "image"
                                        }), (0, r.jsxs)("div", {
                                            className: "content",
                                            children: [(0, r.jsx)("h3", {
                                                children: (0, r.jsx)(d.default, {
                                                    href: "/service-details",
                                                    children: (0, r.jsx)("a", {
                                                        children: "IT Professionals"
                                                    })
                                                })
                                            }), (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsxs)("a", {
                                                    className: "read-more-btn",
                                                    children: ["Read More ", (0, r.jsx)(h.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-4 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "agency-services-box",
                                        children: [(0, r.jsx)("img", {
                                            src: "/images/agency-image/agency-services-img2.jpg",
                                            alt: "image"
                                        }), (0, r.jsxs)("div", {
                                            className: "content",
                                            children: [(0, r.jsx)("h3", {
                                                children: (0, r.jsx)(d.default, {
                                                    href: "/service-details",
                                                    children: (0, r.jsx)("a", {
                                                        children: "Software Engineers"
                                                    })
                                                })
                                            }), (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsxs)("a", {
                                                    className: "read-more-btn",
                                                    children: ["Read More ", (0, r.jsx)(h.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-4 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "agency-services-box",
                                        children: [(0, r.jsx)("img", {
                                            src: "/images/agency-image/agency-services-img3.jpg",
                                            alt: "image"
                                        }), (0, r.jsxs)("div", {
                                            className: "content",
                                            children: [(0, r.jsx)("h3", {
                                                children: (0, r.jsx)(d.default, {
                                                    href: "/service-details",
                                                    children: (0, r.jsx)("a", {
                                                        children: "Web Development"
                                                    })
                                                })
                                            }), (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsxs)("a", {
                                                    className: "read-more-btn",
                                                    children: ["Read More ", (0, r.jsx)(h.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-4 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "agency-services-box",
                                        children: [(0, r.jsx)("img", {
                                            src: "/images/agency-image/agency-services-img4.jpg",
                                            alt: "image"
                                        }), (0, r.jsxs)("div", {
                                            className: "content",
                                            children: [(0, r.jsx)("h3", {
                                                children: (0, r.jsx)(d.default, {
                                                    href: "/service-details",
                                                    children: (0, r.jsx)("a", {
                                                        children: "SEO & Content"
                                                    })
                                                })
                                            }), (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsxs)("a", {
                                                    className: "read-more-btn",
                                                    children: ["Read More ", (0, r.jsx)(h.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-4 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "agency-services-box",
                                        children: [(0, r.jsx)("img", {
                                            src: "/images/agency-image/agency-services-img5.jpg",
                                            alt: "image"
                                        }), (0, r.jsxs)("div", {
                                            className: "content",
                                            children: [(0, r.jsx)("h3", {
                                                children: (0, r.jsx)(d.default, {
                                                    href: "/service-details",
                                                    children: (0, r.jsx)("a", {
                                                        children: "Digital Marketing"
                                                    })
                                                })
                                            }), (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsxs)("a", {
                                                    className: "read-more-btn",
                                                    children: ["Read More ", (0, r.jsx)(h.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-4 col-sm-6 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "agency-services-box",
                                        children: [(0, r.jsx)("img", {
                                            src: "/images/agency-image/agency-services-img6.jpg",
                                            alt: "image"
                                        }), (0, r.jsxs)("div", {
                                            className: "content",
                                            children: [(0, r.jsx)("h3", {
                                                children: (0, r.jsx)(d.default, {
                                                    href: "/service-details",
                                                    children: (0, r.jsx)("a", {
                                                        children: "Data Analysts"
                                                    })
                                                })
                                            }), (0, r.jsx)(d.default, {
                                                href: "/service-details",
                                                children: (0, r.jsxs)("a", {
                                                    className: "read-more-btn",
                                                    children: ["Read More ", (0, r.jsx)(h.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
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
                },
                g = function() {
                    return (0, r.jsx)("div", {
                        className: "funfacts-area ptb-80",
                        children: (0, r.jsxs)("div", {
                            className: "container",
                            children: [(0, r.jsxs)("div", {
                                className: "section-title",
                                children: [(0, r.jsx)("h2", {
                                    children: "We Completed 1500+ Projects Yearly Successfully & Counting"
                                }), (0, r.jsx)("div", {
                                    className: "bar"
                                }), (0, r.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "row",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-3 col-md-3 col-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "funfact",
                                        children: [(0, r.jsx)("h3", {
                                            children: "180K"
                                        }), (0, r.jsx)("p", {
                                            children: "Downloaded"
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-3 col-md-3 col-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "funfact",
                                        children: [(0, r.jsx)("h3", {
                                            children: "20K"
                                        }), (0, r.jsx)("p", {
                                            children: "Feedback"
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-3 col-md-3 col-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "funfact",
                                        children: [(0, r.jsx)("h3", {
                                            children: "500+"
                                        }), (0, r.jsx)("p", {
                                            children: "Workers"
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-3 col-md-3 col-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "funfact",
                                        children: [(0, r.jsx)("h3", {
                                            children: "70+"
                                        }), (0, r.jsx)("p", {
                                            children: "Contributors"
                                        })]
                                    })
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "contact-cta-box",
                                children: [(0, r.jsx)("h3", {
                                    children: "Have any question about us?"
                                }), (0, r.jsx)("p", {
                                    children: "Don't hesitate to contact us"
                                }), (0, r.jsx)(d.default, {
                                    href: "/contact",
                                    children: (0, r.jsx)("a", {
                                        className: "btn btn-primary",
                                        children: "Contact Us"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "map-bg",
                                children: (0, r.jsx)("img", {
                                    src: "/images/map.png",
                                    alt: "map"
                                })
                            })]
                        })
                    })
                },
                v = a(92809);

            function u(e, s) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    s && (i = i.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function p(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? u(Object(a), !0).forEach((function(s) {
                        (0, v.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            var N = (0, a(5152).default)((function() {
                    return a.e(5518).then(a.t.bind(a, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/DigitalAgency/Projects.js -> react-owl-carousel3"]
                    }
                }),
                f = {
                    loop: !0,
                    nav: !1,
                    dots: !0,
                    autoplay: !0,
                    smartSpeed: 1e3,
                    margin: 30,
                    autoplayTimeout: 5e3,
                    responsive: {
                        0: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        1024: {
                            items: 3
                        },
                        1200: {
                            items: 4
                        }
                    }
                },
                b = function() {
                    var e = i.useState(!1),
                        s = (0, l.Z)(e, 2),
                        a = s[0],
                        c = s[1];
                    return i.useEffect((function() {
                        c(!0)
                    }), []), (0, r.jsxs)("div", {
                        className: "ml-projects-area pt-0 ptb-80",
                        children: [(0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsxs)("div", {
                                className: "section-title st-fs-28",
                                children: [(0, r.jsx)("h2", {
                                    children: "Proud Projects That Make Us Stand Out"
                                }), (0, r.jsx)("div", {
                                    className: "bar"
                                }), (0, r.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            })
                        }), (0, r.jsx)("div", {
                            className: "container-fluid",
                            children: a ? (0, r.jsxs)(N, p(p({
                                className: "ml-projects-slides owl-carousel owl-theme"
                            }, f), {}, {
                                children: [(0, r.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, r.jsx)("img", {
                                        src: "/images/projects-img1.jpg",
                                        alt: "image"
                                    }), (0, r.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, r.jsx)(d.default, {
                                            href: "/project-details",
                                            children: (0, r.jsx)("a", {
                                                children: (0, r.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, r.jsx)("img", {
                                        src: "/images/projects-img2.jpg",
                                        alt: "image"
                                    }), (0, r.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, r.jsx)(d.default, {
                                            href: "/project-details",
                                            children: (0, r.jsx)("a", {
                                                children: (0, r.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, r.jsx)("img", {
                                        src: "/images/projects-img3.jpg",
                                        alt: "image"
                                    }), (0, r.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, r.jsx)(d.default, {
                                            href: "/project-details",
                                            children: (0, r.jsx)("a", {
                                                children: (0, r.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, r.jsx)("img", {
                                        src: "/images/projects-img4.jpg",
                                        alt: "image"
                                    }), (0, r.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, r.jsx)(d.default, {
                                            href: "/project-details",
                                            children: (0, r.jsx)("a", {
                                                children: (0, r.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, r.jsx)("img", {
                                        src: "/images/projects-img5.jpg",
                                        alt: "image"
                                    }), (0, r.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, r.jsx)(d.default, {
                                            href: "/project-details",
                                            children: (0, r.jsx)("a", {
                                                children: (0, r.jsx)("span", {})
                                            })
                                        })
                                    })]
                                })]
                            })) : ""
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
                },
                y = a(68216),
                Z = a(25997),
                k = a(14695),
                C = a(13444),
                S = a(30268),
                w = a(92953),
                O = a(46445);

            function D(e) {
                var s = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, i = (0, w.Z)(e);
                    if (s) {
                        var l = (0, w.Z)(this).constructor;
                        a = Reflect.construct(i, arguments, l)
                    } else a = i.apply(this, arguments);
                    return (0, S.Z)(this, a)
                }
            }
            var P = function(e) {
                    (0, C.Z)(a, e);
                    var s = D(a);

                    function a() {
                        var e;
                        (0, y.Z)(this, a);
                        for (var i = arguments.length, l = new Array(i), c = 0; c < i; c++) l[c] = arguments[c];
                        return e = s.call.apply(s, [this].concat(l)), (0, v.Z)((0, k.Z)(e), "openTabSection", (function(e, s) {
                            var a, i, l;
                            for (i = document.getElementsByClassName("tabs_item"), a = 0; a < i.length; a++) i[a].style.display = "none";
                            for (l = document.getElementsByTagName("li"), a = 0; a < l.length; a++) l[a].className = l[a].className.replace("current", "");
                            document.getElementById(s).style.display = "block", e.currentTarget.className += "current"
                        })), e
                    }
                    return (0, Z.Z)(a, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return (0, r.jsxs)("div", {
                                className: "pricing-area pb-50",
                                children: [(0, r.jsxs)("div", {
                                    className: "container",
                                    children: [(0, r.jsxs)("div", {
                                        className: "section-title st-fs-28",
                                        children: [(0, r.jsx)("span", {
                                            className: "sub-title",
                                            children: "Pricing"
                                        }), (0, r.jsx)("h2", {
                                            children: "Our Pricing Plan"
                                        }), (0, r.jsx)("div", {
                                            className: "bar"
                                        }), (0, r.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        className: "tab pricing-tab bg-color",
                                        children: [(0, r.jsxs)("ul", {
                                            className: "tabs",
                                            children: [(0, r.jsx)("li", {
                                                className: "current",
                                                onClick: function(s) {
                                                    return e.openTabSection(s, "tab1")
                                                },
                                                children: "Monthly Plan"
                                            }), (0, r.jsxs)("li", {
                                                onClick: function(s) {
                                                    return e.openTabSection(s, "tab2")
                                                },
                                                children: ["Yearly Plan ", (0, r.jsx)("i", {
                                                    "data-feather": "calendar"
                                                })]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            className: "tab_content",
                                            children: [(0, r.jsx)("div", {
                                                id: "tab1",
                                                className: "tabs_item",
                                                children: (0, r.jsxs)("div", {
                                                    className: "row justify-content-center",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "col-lg-4 col-md-6 col-sm-6",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "pricing-box",
                                                            children: [(0, r.jsxs)("div", {
                                                                className: "pricing-header",
                                                                children: [(0, r.jsx)("h3", {
                                                                    children: "Free"
                                                                }), (0, r.jsxs)("p", {
                                                                    children: ["Get your business up ", (0, r.jsx)("br", {}), " and running"]
                                                                })]
                                                            }), (0, r.jsxs)("div", {
                                                                className: "price",
                                                                children: ["$0 ", (0, r.jsx)("span", {
                                                                    children: "/m"
                                                                })]
                                                            }), (0, r.jsx)("div", {
                                                                className: "buy-btn",
                                                                children: (0, r.jsx)(d.default, {
                                                                    href: "#",
                                                                    children: (0, r.jsx)("a", {
                                                                        className: "btn btn-primary",
                                                                        children: "Get Started Free"
                                                                    })
                                                                })
                                                            }), (0, r.jsxs)("ul", {
                                                                className: "pricing-features",
                                                                children: [(0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Drag & Drop Builder"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Lead Generation & Sales"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Boot & Digital Assistants"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Customer Service"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Up to 1000 Subscribers"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Unlimited Broadcasts"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Landing Pages & Web Widgets"]
                                                                })]
                                                            })]
                                                        })
                                                    }), (0, r.jsx)("div", {
                                                        className: "col-lg-4 col-md-6 col-sm-6",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "pricing-box",
                                                            children: [(0, r.jsxs)("div", {
                                                                className: "pricing-header",
                                                                children: [(0, r.jsx)("h3", {
                                                                    children: "Pro"
                                                                }), (0, r.jsxs)("p", {
                                                                    children: ["Get your business up ", (0, r.jsx)("br", {}), " and running"]
                                                                })]
                                                            }), (0, r.jsxs)("div", {
                                                                className: "price",
                                                                children: ["$149 ", (0, r.jsx)("span", {
                                                                    children: "/m"
                                                                })]
                                                            }), (0, r.jsx)("div", {
                                                                className: "buy-btn",
                                                                children: (0, r.jsx)(d.default, {
                                                                    href: "#",
                                                                    children: (0, r.jsx)("a", {
                                                                        className: "btn btn-primary",
                                                                        children: "Start 3 Days Free Trial"
                                                                    })
                                                                })
                                                            }), (0, r.jsxs)("ul", {
                                                                className: "pricing-features",
                                                                children: [(0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Drag & Drop Builder"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Lead Generation & Sales"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Boot & Digital Assistants"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Customer Service"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Up to 3300 Subscribers"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Unlimited Broadcasts"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Landing Pages & Web Widgets"]
                                                                })]
                                                            })]
                                                        })
                                                    }), (0, r.jsx)("div", {
                                                        className: "col-lg-4 col-md-6 col-sm-6",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "pricing-box",
                                                            children: [(0, r.jsxs)("div", {
                                                                className: "pricing-header",
                                                                children: [(0, r.jsx)("h3", {
                                                                    children: "Premium"
                                                                }), (0, r.jsxs)("p", {
                                                                    children: ["Get your business up ", (0, r.jsx)("br", {}), " and running"]
                                                                })]
                                                            }), (0, r.jsxs)("div", {
                                                                className: "price",
                                                                children: ["$179 ", (0, r.jsx)("span", {
                                                                    children: "/m"
                                                                })]
                                                            }), (0, r.jsx)("div", {
                                                                className: "buy-btn",
                                                                children: (0, r.jsx)(d.default, {
                                                                    href: "#",
                                                                    children: (0, r.jsx)("a", {
                                                                        className: "btn btn-primary",
                                                                        children: "Start 6 Days Free Trial"
                                                                    })
                                                                })
                                                            }), (0, r.jsxs)("ul", {
                                                                className: "pricing-features",
                                                                children: [(0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Drag & Drop Builder"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Lead Generation & Sales"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Boot & Digital Assistants"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Customer Service"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Up to 10000 Subscribers"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Unlimited Broadcasts"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Landing Pages & Web Widgets"]
                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                })
                                            }), (0, r.jsx)("div", {
                                                id: "tab2",
                                                className: "tabs_item",
                                                children: (0, r.jsxs)("div", {
                                                    className: "row justify-content-center",
                                                    children: [(0, r.jsx)("div", {
                                                        className: "col-lg-4 col-md-6 col-sm-6",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "pricing-box",
                                                            children: [(0, r.jsxs)("div", {
                                                                className: "pricing-header",
                                                                children: [(0, r.jsx)("h3", {
                                                                    children: "Free"
                                                                }), (0, r.jsxs)("p", {
                                                                    children: ["Get your business up ", (0, r.jsx)("br", {}), " and running"]
                                                                })]
                                                            }), (0, r.jsxs)("div", {
                                                                className: "price",
                                                                children: ["$0 ", (0, r.jsx)("span", {
                                                                    children: "/y"
                                                                })]
                                                            }), (0, r.jsx)("div", {
                                                                className: "buy-btn",
                                                                children: (0, r.jsx)(d.default, {
                                                                    href: "#",
                                                                    children: (0, r.jsx)("a", {
                                                                        className: "btn btn-primary",
                                                                        children: "Get Started Free"
                                                                    })
                                                                })
                                                            }), (0, r.jsxs)("ul", {
                                                                className: "pricing-features",
                                                                children: [(0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Drag & Drop Builder"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Lead Generation & Sales"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Boot & Digital Assistants"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Customer Service"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Up to 1000 Subscribers"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Unlimited Broadcasts"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Landing Pages & Web Widgets"]
                                                                })]
                                                            })]
                                                        })
                                                    }), (0, r.jsx)("div", {
                                                        className: "col-lg-4 col-md-6 col-sm-6",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "pricing-box",
                                                            children: [(0, r.jsxs)("div", {
                                                                className: "pricing-header",
                                                                children: [(0, r.jsx)("h3", {
                                                                    children: "Pro"
                                                                }), (0, r.jsxs)("p", {
                                                                    children: ["Get your business up ", (0, r.jsx)("br", {}), " and running"]
                                                                })]
                                                            }), (0, r.jsxs)("div", {
                                                                className: "price",
                                                                children: ["$249 ", (0, r.jsx)("span", {
                                                                    children: "/y"
                                                                })]
                                                            }), (0, r.jsx)("div", {
                                                                className: "buy-btn",
                                                                children: (0, r.jsx)(d.default, {
                                                                    href: "#",
                                                                    children: (0, r.jsx)("a", {
                                                                        className: "btn btn-primary",
                                                                        children: "Start 3 Days Free Trial"
                                                                    })
                                                                })
                                                            }), (0, r.jsxs)("ul", {
                                                                className: "pricing-features",
                                                                children: [(0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Drag & Drop Builder"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Lead Generation & Sales"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Boot & Digital Assistants"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Customer Service"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Up to 3300 Subscribers"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Unlimited Broadcasts"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Landing Pages & Web Widgets"]
                                                                })]
                                                            })]
                                                        })
                                                    }), (0, r.jsx)("div", {
                                                        className: "col-lg-4 col-md-6 col-sm-6",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "pricing-box",
                                                            children: [(0, r.jsxs)("div", {
                                                                className: "pricing-header",
                                                                children: [(0, r.jsx)("h3", {
                                                                    children: "Premium"
                                                                }), (0, r.jsxs)("p", {
                                                                    children: ["Get your business up ", (0, r.jsx)("br", {}), " and running"]
                                                                })]
                                                            }), (0, r.jsxs)("div", {
                                                                className: "price",
                                                                children: ["$279 ", (0, r.jsx)("span", {
                                                                    children: "/y"
                                                                })]
                                                            }), (0, r.jsx)("div", {
                                                                className: "buy-btn",
                                                                children: (0, r.jsx)(d.default, {
                                                                    href: "#",
                                                                    children: (0, r.jsx)("a", {
                                                                        className: "btn btn-primary",
                                                                        children: "Start 6 Days Free Trial"
                                                                    })
                                                                })
                                                            }), (0, r.jsxs)("ul", {
                                                                className: "pricing-features",
                                                                children: [(0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Drag & Drop Builder"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Lead Generation & Sales"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Boot & Digital Assistants"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Customer Service"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Up to 10000 Subscribers"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Unlimited Broadcasts"]
                                                                }), (0, r.jsxs)("li", {
                                                                    children: [(0, r.jsx)(O.Z, {}), " Landing Pages & Web Widgets"]
                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: "shape9 mobile-dnone",
                                    children: (0, r.jsx)("img", {
                                        src: "/images/agency-image/agency-shape1.png",
                                        alt: "image"
                                    })
                                })]
                            })
                        }
                    }]), a
                }(i.Component),
                L = a(21479),
                A = function() {
                    return (0, r.jsxs)("div", {
                        className: "blog-area pt-80 pb-50",
                        children: [(0, r.jsxs)("div", {
                            className: "container",
                            children: [(0, r.jsxs)("div", {
                                className: "section-title st-fs-28",
                                children: [(0, r.jsx)("span", {
                                    className: "sub-title",
                                    children: "News"
                                }), (0, r.jsx)("h2", {
                                    children: "The News from Our Blog"
                                }), (0, r.jsx)("div", {
                                    className: "bar"
                                }), (0, r.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [(0, r.jsx)("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "single-blog-post-item",
                                        children: [(0, r.jsx)("div", {
                                            className: "post-image",
                                            children: (0, r.jsx)(d.default, {
                                                href: "/blog-details",
                                                children: (0, r.jsx)("a", {
                                                    children: (0, r.jsx)("img", {
                                                        src: "/images/blog-image/blog1.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "post-content",
                                            children: [(0, r.jsxs)("ul", {
                                                className: "post-meta",
                                                children: [(0, r.jsx)("li", {
                                                    children: (0, r.jsx)(d.default, {
                                                        href: "#",
                                                        children: (0, r.jsx)("a", {
                                                            children: "Admin"
                                                        })
                                                    })
                                                }), (0, r.jsx)("li", {
                                                    children: "August 15, 2021"
                                                })]
                                            }), (0, r.jsx)("h3", {
                                                children: (0, r.jsx)(d.default, {
                                                    href: "/blog-details",
                                                    children: (0, r.jsx)("a", {
                                                        children: "The security risks of changing package owners"
                                                    })
                                                })
                                            }), (0, r.jsx)(d.default, {
                                                href: "/blog-details",
                                                children: (0, r.jsxs)("a", {
                                                    className: "read-more-btn",
                                                    children: ["Read More ", (0, r.jsx)(h.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "single-blog-post-item",
                                        children: [(0, r.jsx)("div", {
                                            className: "post-image",
                                            children: (0, r.jsx)(d.default, {
                                                href: "/blog-details",
                                                children: (0, r.jsx)("a", {
                                                    children: (0, r.jsx)("img", {
                                                        src: "/images/blog-image/blog2.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "post-content",
                                            children: [(0, r.jsxs)("ul", {
                                                className: "post-meta",
                                                children: [(0, r.jsx)("li", {
                                                    children: (0, r.jsx)(d.default, {
                                                        href: "#",
                                                        children: (0, r.jsx)("a", {
                                                            children: "Admin"
                                                        })
                                                    })
                                                }), (0, r.jsx)("li", {
                                                    children: "August 15, 2021"
                                                })]
                                            }), (0, r.jsx)("h3", {
                                                children: (0, r.jsx)(d.default, {
                                                    href: "/blog-details",
                                                    children: (0, r.jsx)("a", {
                                                        children: "Tips to Protecting Your Business and Family"
                                                    })
                                                })
                                            }), (0, r.jsx)(d.default, {
                                                href: "/blog-details",
                                                children: (0, r.jsxs)("a", {
                                                    className: "read-more-btn",
                                                    children: ["Read More ", (0, r.jsx)(h.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: (0, r.jsxs)("div", {
                                        className: "single-blog-post-item",
                                        children: [(0, r.jsx)("div", {
                                            className: "post-image",
                                            children: (0, r.jsx)(d.default, {
                                                href: "/blog-details",
                                                children: (0, r.jsx)("a", {
                                                    children: (0, r.jsx)("img", {
                                                        src: "/images/blog-image/blog3.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "post-content",
                                            children: [(0, r.jsxs)("ul", {
                                                className: "post-meta",
                                                children: [(0, r.jsx)("li", {
                                                    children: (0, r.jsx)(d.default, {
                                                        href: "#",
                                                        children: (0, r.jsx)("a", {
                                                            children: "Admin"
                                                        })
                                                    })
                                                }), (0, r.jsx)("li", {
                                                    children: "August 15, 2021"
                                                })]
                                            }), (0, r.jsx)("h3", {
                                                children: (0, r.jsx)(d.default, {
                                                    href: "/blog-details",
                                                    children: (0, r.jsx)("a", {
                                                        children: "Protect Your Workplace from Cyber Attacks"
                                                    })
                                                })
                                            }), (0, r.jsx)(d.default, {
                                                href: "/blog-details",
                                                children: (0, r.jsxs)("a", {
                                                    className: "read-more-btn",
                                                    children: ["Read More ", (0, r.jsx)(h.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
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
                },
                B = function() {
                    return (0, r.jsx)("div", {
                        className: "agency-cta-area ptb-80",
                        children: (0, r.jsx)("div", {
                            className: "container",
                            children: (0, r.jsxs)("div", {
                                className: "agency-cta-content",
                                children: [(0, r.jsx)("h2", {
                                    children: "Do you have any projects?"
                                }), (0, r.jsx)(d.default, {
                                    href: "/contact",
                                    children: (0, r.jsx)("a", {
                                        className: "btn btn-gradient",
                                        children: "Contact Us"
                                    })
                                })]
                            })
                        })
                    })
                },
                E = a(61646),
                T = function() {
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(t, {}), (0, r.jsx)(m, {}), (0, r.jsx)(o, {}), (0, r.jsx)(j, {}), (0, r.jsx)(x, {}), (0, r.jsx)(g, {}), (0, r.jsx)(b, {}), (0, r.jsx)(P, {}), (0, r.jsx)(L.Z, {}), (0, r.jsx)(A, {}), (0, r.jsx)(B, {}), (0, r.jsx)(E.Z, {})]
                    })
                }
        },
        85652: function(e, s, a) {
            "use strict";
            var i = a(92809),
                l = a(10219),
                c = a(11163),
                n = a(41664),
                r = a(67294),
                t = a(85893),
                d = ["router", "children"];

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

            function h(e) {
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
            s.Z = (0, c.withRouter)((function(e) {
                var s = e.router,
                    a = e.children,
                    i = (0, l.Z)(e, d),
                    c = r.Children.only(a),
                    m = c.props.className || "";
                return s.pathname === i.href && i.activeClassName && (m = "".concat(m, " ").concat(i.activeClassName).trim()), delete i.activeClassName, (0, t.jsx)(n.default, h(h({}, i), {}, {
                    children: r.cloneElement(c, {
                        className: m
                    })
                }))
            }))
        },
        63298: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/digital-agency", function() {
                return a(58003)
            }])
        }
    },
    function(e) {
        e.O(0, [9774, 1736, 6008, 2888, 179], (function() {
            return s = 63298, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);