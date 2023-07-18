(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9412], {
        12048: function(e, a, s) {
            "use strict";
            var i = s(92809),
                l = s(80318),
                n = s(67294),
                r = s(5152),
                c = s(85893);

            function t(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    a && (i = i.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function o(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? t(Object(s), !0).forEach((function(a) {
                        (0, i.Z)(e, a, s[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : t(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }))
                }
                return e
            }
            var d = (0, r.default)((function() {
                    return s.e(5518).then(s.t.bind(s, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/Common/FeedbackStyleFive.js -> react-owl-carousel3"]
                    }
                }),
                m = {
                    loop: !1,
                    nav: !1,
                    smartSpeed: 1e3,
                    autoplayTimeout: 5e3,
                    dots: !0,
                    autoplayHoverPause: !0,
                    autoplay: !0,
                    items: 1
                };
            a.Z = function() {
                var e = n.useState(!1),
                    a = (0, l.Z)(e, 2),
                    s = a[0],
                    i = a[1];
                return n.useEffect((function() {
                    i(!0)
                }), []), (0, c.jsx)("div", {
                    className: "agency-portfolio-feedback-area ptb-80",
                    children: (0, c.jsx)("div", {
                        className: "container",
                        children: s ? (0, c.jsxs)(d, o(o({
                            className: "agency-portfolio-feedback-slides owl-carousel owl-theme"
                        }, m), {}, {
                            children: [(0, c.jsxs)("div", {
                                className: "agency-portfolio-feedback-item",
                                children: [(0, c.jsx)("img", {
                                    src: "/images/client-image/client1.jpg",
                                    alt: "image"
                                }), (0, c.jsx)("p", {
                                    children: "Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros."
                                })]
                            }), (0, c.jsxs)("div", {
                                className: "agency-portfolio-feedback-item",
                                children: [(0, c.jsx)("img", {
                                    src: "/images/client-image/client2.jpg",
                                    alt: "image"
                                }), (0, c.jsx)("p", {
                                    children: "Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros."
                                })]
                            }), (0, c.jsxs)("div", {
                                className: "agency-portfolio-feedback-item",
                                children: [(0, c.jsx)("img", {
                                    src: "/images/client-image/client3.jpg",
                                    alt: "image"
                                }), (0, c.jsx)("p", {
                                    children: "Pellentesque sed purus eu urna vulputate interdum quis sit amet sapien. Pellentesque porta mauris at orci sagittis commodo. Curabitur aliquam nibh odio, vel ornare nisl volutpat quis. Maecenas congue dapibus lacus id fringilla. Vestibulum id augue massa. Proin sed neque dapibus, vulputate ligula eget, aliquam eros."
                                })]
                            })]
                        })) : ""
                    })
                })
            }
        },
        61646: function(e, a, s) {
            "use strict";
            s(67294);
            var i = s(41664),
                l = s(64856),
                n = s(22774),
                r = s(89899),
                c = s(51591),
                t = s(20706),
                o = s(80289),
                d = s(19318),
                m = s(85893);
            a.Z = function() {
                var e = (new Date).getFullYear();
                return (0, m.jsxs)("footer", {
                    className: "footer-area bg-f7fafd",
                    children: [(0, m.jsx)("div", {
                        className: "container",
                        children: (0, m.jsxs)("div", {
                            className: "row",
                            children: [(0, m.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [(0, m.jsx)("div", {
                                        className: "logo",
                                        children: (0, m.jsx)(i.default, {
                                            href: "/it-startup",
                                            children: (0, m.jsx)("a", {
                                                children: (0, m.jsx)("img", {
                                                    src: "/images/logo.png",
                                                    alt: "logo"
                                                })
                                            })
                                        })
                                    }), (0, m.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
                                    })]
                                })
                            }), (0, m.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-footer-widget pl-5",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Company"
                                    }), (0, m.jsxs)("ul", {
                                        className: "list",
                                        children: [(0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/about-1",
                                                children: (0, m.jsx)("a", {
                                                    children: "About Us"
                                                })
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/services-1",
                                                children: (0, m.jsx)("a", {
                                                    children: "Services"
                                                })
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/features",
                                                children: (0, m.jsx)("a", {
                                                    children: "Features"
                                                })
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/pricing",
                                                children: (0, m.jsx)("a", {
                                                    children: "Our Pricing"
                                                })
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/blog-1",
                                                children: (0, m.jsx)("a", {
                                                    children: "Latest News"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), (0, m.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Support"
                                    }), (0, m.jsxs)("ul", {
                                        className: "list",
                                        children: [(0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/faq",
                                                children: (0, m.jsx)("a", {
                                                    children: "FAQ's"
                                                })
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/privacy-policy",
                                                children: (0, m.jsx)("a", {
                                                    children: "Privacy Policy"
                                                })
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/term-condition",
                                                children: (0, m.jsx)("a", {
                                                    children: "Terms & Condition"
                                                })
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/team",
                                                children: (0, m.jsx)("a", {
                                                    children: "Team"
                                                })
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)(i.default, {
                                                href: "/contact",
                                                children: (0, m.jsx)("a", {
                                                    children: "Contact Us"
                                                })
                                            })
                                        })]
                                    })]
                                })
                            }), (0, m.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-footer-widget",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Address"
                                    }), (0, m.jsxs)("ul", {
                                        className: "footer-contact-info",
                                        children: [(0, m.jsxs)("li", {
                                            children: [(0, m.jsx)(l.Z, {}), "27 Division St, New York, ", (0, m.jsx)("br", {}), " NY 10002, USA"]
                                        }), (0, m.jsxs)("li", {
                                            children: [(0, m.jsx)(n.Z, {}), "Email: ", (0, m.jsx)("a", {
                                                href: "mailto:startp@gmail.com",
                                                children: "startp@gmail.com"
                                            })]
                                        }), (0, m.jsxs)("li", {
                                            children: [(0, m.jsx)(r.Z, {}), "Phone: ", (0, m.jsx)("a", {
                                                href: "tel:321984754",
                                                children: "+ (321) 984 754"
                                            })]
                                        })]
                                    }), (0, m.jsxs)("ul", {
                                        className: "social-links",
                                        children: [(0, m.jsx)("li", {
                                            children: (0, m.jsx)("a", {
                                                href: "https://www.facebook.com/",
                                                className: "facebook",
                                                target: "_blank",
                                                children: (0, m.jsx)(c.Z, {})
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)("a", {
                                                href: "https://www.twitter.com/",
                                                className: "twitter",
                                                target: "_blank",
                                                children: (0, m.jsx)(t.Z, {})
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)("a", {
                                                href: "https://www.instagramcom/",
                                                className: "instagram",
                                                target: "_blank",
                                                children: (0, m.jsx)(o.Z, {})
                                            })
                                        }), (0, m.jsx)("li", {
                                            children: (0, m.jsx)("a", {
                                                href: "https://www.linkedin.com/",
                                                className: "linkedin",
                                                target: "_blank",
                                                children: (0, m.jsx)(d.Z, {})
                                            })
                                        })]
                                    })]
                                })
                            }), (0, m.jsx)("div", {
                                className: "col-lg-12 col-md-12",
                                children: (0, m.jsx)("div", {
                                    className: "copyright-area",
                                    children: (0, m.jsxs)("p", {
                                        children: ["Copyright \xa9 ", e, " StartP. All rights reserved by ", (0, m.jsx)("a", {
                                            href: "https://envytheme.com/",
                                            target: "_blank",
                                            children: "EnvyTheme"
                                        })]
                                    })
                                })
                            })]
                        })
                    }), (0, m.jsx)("img", {
                        src: "/images/map.png",
                        className: "map",
                        alt: "map"
                    }), (0, m.jsx)("div", {
                        className: "shape1",
                        children: (0, m.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, m.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, m.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        16270: function(e, a, s) {
            "use strict";
            s.r(a), s.d(a, {
                default: function() {
                    return I
                }
            });
            var i = s(67294),
                l = s(80318),
                n = s(85652),
                r = s(27434),
                c = s(73549),
                t = s(85893),
                o = function() {
                    var e = i.useState(!0),
                        a = (0, l.Z)(e, 2),
                        s = a[0],
                        o = a[1],
                        d = function() {
                            o(!s)
                        };
                    i.useEffect((function() {
                        var e = document.getElementById("header");
                        document.addEventListener("scroll", (function() {
                            window.scrollY > 170 ? e.classList.add("is-sticky") : e.classList.remove("is-sticky")
                        }))
                    }));
                    var m = s ? "collapse navbar-collapse" : "collapse navbar-collapse show",
                        h = s ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
                    return (0, t.jsx)("header", {
                        id: "header",
                        className: "headroom navbar-style-three",
                        children: (0, t.jsx)("div", {
                            className: "startp-nav",
                            children: (0, t.jsx)("div", {
                                className: "container-fluid",
                                children: (0, t.jsxs)("nav", {
                                    className: "navbar navbar-expand-md navbar-light",
                                    children: [(0, t.jsx)(n.Z, {
                                        href: "/it-startup",
                                        children: (0, t.jsx)("a", {
                                            onClick: d,
                                            className: "navbar-brand",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/logo.png",
                                                alt: "logo"
                                            })
                                        })
                                    }), (0, t.jsxs)("button", {
                                        onClick: d,
                                        className: h,
                                        type: "button",
                                        "data-toggle": "collapse",
                                        "data-target": "#navbarSupportedContent",
                                        "aria-controls": "navbarSupportedContent",
                                        "aria-expanded": "false",
                                        "aria-label": "Toggle navigation",
                                        children: [(0, t.jsx)("span", {
                                            className: "icon-bar top-bar"
                                        }), (0, t.jsx)("span", {
                                            className: "icon-bar middle-bar"
                                        }), (0, t.jsx)("span", {
                                            className: "icon-bar bottom-bar"
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: m,
                                        id: "navbarSupportedContent",
                                        children: (0, t.jsxs)("ul", {
                                            className: "navbar-nav m-auto",
                                            children: [(0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(n.Z, {
                                                    href: "/#",
                                                    activeClassName: "active",
                                                    children: (0, t.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["Home ", (0, t.jsx)(r.Z, {})]
                                                    })
                                                }), (0, t.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/it-startup",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "IT Startup"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/it-startup-2",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "IT Startup Two"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/iot",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "IOT"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/hosting",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Hosting"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/machine-learning",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Machine Learning"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/machine-learning-2",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Machine Learning 2"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/bigdata-analytics",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Bigdata Analytics"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/digital-agency",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Digital Agency"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/digital-agency-portfolio",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Digital Agency Portfolio"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/pc-repair",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "PC Repair"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(n.Z, {
                                                    href: "/#",
                                                    children: (0, t.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["About ", (0, t.jsx)(r.Z, {})]
                                                    })
                                                }), (0, t.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/about-1",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "About Style 1"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/about-2",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "About Style 2"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/about-3",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "About Style 3"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(n.Z, {
                                                    href: "/#",
                                                    children: (0, t.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["Pages ", (0, t.jsx)(r.Z, {})]
                                                    })
                                                }), (0, t.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, t.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, t.jsx)(n.Z, {
                                                            href: "/#",
                                                            activeClassName: "active",
                                                            children: (0, t.jsxs)("a", {
                                                                onClick: function(e) {
                                                                    return e.preventDefault()
                                                                },
                                                                className: "nav-link",
                                                                children: ["Features ", (0, t.jsx)(r.Z, {})]
                                                            })
                                                        }), (0, t.jsxs)("ul", {
                                                            className: "dropdown-menu",
                                                            children: [(0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/features",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Features"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/feature-details",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Features Details"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, t.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, t.jsx)(n.Z, {
                                                            href: "/#",
                                                            activeClassName: "active",
                                                            children: (0, t.jsxs)("a", {
                                                                onClick: function(e) {
                                                                    return e.preventDefault()
                                                                },
                                                                className: "nav-link",
                                                                children: ["Services ", (0, t.jsx)(r.Z, {})]
                                                            })
                                                        }), (0, t.jsxs)("ul", {
                                                            className: "dropdown-menu",
                                                            children: [(0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/services-1",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 1"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/services-2",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 2"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/services-3",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 3"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/services-4",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 4"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/services-5",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Style 5"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/service-details",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Services Details"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/feedback",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Feedback"
                                                            })
                                                        })
                                                    }), (0, t.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, t.jsx)(n.Z, {
                                                            href: "/#",
                                                            activeClassName: "active",
                                                            children: (0, t.jsxs)("a", {
                                                                onClick: function(e) {
                                                                    return e.preventDefault()
                                                                },
                                                                className: "nav-link",
                                                                children: ["Projects ", (0, t.jsx)(r.Z, {})]
                                                            })
                                                        }), (0, t.jsxs)("ul", {
                                                            className: "dropdown-menu",
                                                            children: [(0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/projects-1",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Project Style 1"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/projects-2",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Project Style 1"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/project-details",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Project Details"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/team",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Team"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/pricing",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Pricing"
                                                            })
                                                        })
                                                    }), (0, t.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, t.jsx)(n.Z, {
                                                            href: "/#",
                                                            activeClassName: "active",
                                                            children: (0, t.jsxs)("a", {
                                                                onClick: function(e) {
                                                                    return e.preventDefault()
                                                                },
                                                                className: "nav-link",
                                                                children: ["User ", (0, t.jsx)(r.Z, {})]
                                                            })
                                                        }), (0, t.jsxs)("ul", {
                                                            className: "dropdown-menu",
                                                            children: [(0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/login",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Login"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/sign-up",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Sign Up"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(n.Z, {
                                                                    href: "/forgot-password",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: d,
                                                                        className: "nav-link",
                                                                        children: "Forgot Password"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/faq",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "FAQ's"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/coming-soon",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Coming Soon"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/404",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "404 Error Page"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(n.Z, {
                                                    href: "/#",
                                                    activeClassName: "active",
                                                    children: (0, t.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["Shop ", (0, t.jsx)(r.Z, {})]
                                                    })
                                                }), (0, t.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/shop",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Shop"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/product-details",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Products Details"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/cart",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Cart"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/checkout",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Checkout"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(n.Z, {
                                                    href: "/#",
                                                    children: (0, t.jsxs)("a", {
                                                        onClick: function(e) {
                                                            return e.preventDefault()
                                                        },
                                                        className: "nav-link",
                                                        children: ["Blog ", (0, t.jsx)(r.Z, {})]
                                                    })
                                                }), (0, t.jsxs)("ul", {
                                                    className: "dropdown-menu",
                                                    children: [(0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/blog-1",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Grid"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/blog-2",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Right Sidebar"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/blog-3",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Grid 2"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/blog-4",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Right Sidebar 2"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/blog-5",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Grid 3"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/blog-6",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Right Sidebar 3"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(n.Z, {
                                                            href: "/blog-details",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: d,
                                                                className: "nav-link",
                                                                children: "Blog Details"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, t.jsx)(n.Z, {
                                                    href: "/contact",
                                                    activeClassName: "active",
                                                    children: (0, t.jsx)("a", {
                                                        onClick: d,
                                                        className: "nav-link",
                                                        children: "Contact"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "others-option",
                                        children: [(0, t.jsx)(n.Z, {
                                            href: "/cart",
                                            children: (0, t.jsxs)("a", {
                                                className: "cart-wrapper-btn",
                                                children: [(0, t.jsx)(c.Z, {}), (0, t.jsx)("span", {
                                                    children: "0"
                                                })]
                                            })
                                        }), (0, t.jsx)(n.Z, {
                                            href: "/contact",
                                            children: (0, t.jsx)("a", {
                                                className: "btn btn-light",
                                                children: "Support"
                                            })
                                        }), (0, t.jsx)(n.Z, {
                                            href: "/login",
                                            children: (0, t.jsx)("a", {
                                                className: "btn btn-primary",
                                                children: "Login"
                                            })
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                d = s(92809),
                m = s(5152);

            function h(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    a && (i = i.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function j(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? h(Object(s), !0).forEach((function(a) {
                        (0, d.Z)(e, a, s[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : h(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }))
                }
                return e
            }
            var u = (0, m.default)((function() {
                    return s.e(5518).then(s.t.bind(s, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/DigitalAgencyPortfolio/MainBanner.js -> react-owl-carousel3"]
                    }
                }),
                x = {
                    loop: !0,
                    nav: !0,
                    smartSpeed: 1e3,
                    autoplayTimeout: 5e3,
                    dots: !1,
                    animateOut: "fadeOut",
                    autoplayHoverPause: !0,
                    autoplay: !0,
                    items: 1,
                    navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
                },
                p = function() {
                    var e = i.useState(!1),
                        a = (0, l.Z)(e, 2),
                        s = a[0],
                        n = a[1];
                    return i.useEffect((function() {
                        n(!0)
                    }), []), (0, t.jsx)(t.Fragment, {
                        children: s ? (0, t.jsxs)(u, j(j({
                            className: "agency-portfolio-home-slides owl-carousel owl-theme"
                        }, x), {}, {
                            children: [(0, t.jsx)("div", {
                                className: "agency-portfolio-main-banner portfolio-banner-bg1",
                                children: (0, t.jsx)("div", {
                                    className: "d-table",
                                    children: (0, t.jsx)("div", {
                                        className: "d-table-cell",
                                        children: (0, t.jsx)("div", {
                                            className: "container",
                                            children: (0, t.jsxs)("div", {
                                                className: "portfolio-banner-content",
                                                children: [(0, t.jsx)("span", {
                                                    className: "sub-title",
                                                    children: "We are Creative"
                                                }), (0, t.jsx)("h1", {
                                                    children: "Digital Agency"
                                                }), (0, t.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                                                }), (0, t.jsx)("a", {
                                                    href: "#",
                                                    className: "btn btn-secondary",
                                                    children: "Get Started"
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: "agency-portfolio-main-banner portfolio-banner-bg2",
                                children: (0, t.jsx)("div", {
                                    className: "d-table",
                                    children: (0, t.jsx)("div", {
                                        className: "d-table-cell",
                                        children: (0, t.jsx)("div", {
                                            className: "container",
                                            children: (0, t.jsxs)("div", {
                                                className: "portfolio-banner-content",
                                                children: [(0, t.jsx)("span", {
                                                    className: "sub-title",
                                                    children: "We are Digital"
                                                }), (0, t.jsx)("h1", {
                                                    children: "UX/UI Design"
                                                }), (0, t.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                                                }), (0, t.jsx)("a", {
                                                    href: "#",
                                                    className: "btn btn-secondary",
                                                    children: "Get Started"
                                                })]
                                            })
                                        })
                                    })
                                })
                            }), (0, t.jsx)("div", {
                                className: "agency-portfolio-main-banner portfolio-banner-bg3",
                                children: (0, t.jsx)("div", {
                                    className: "d-table",
                                    children: (0, t.jsx)("div", {
                                        className: "d-table-cell",
                                        children: (0, t.jsx)("div", {
                                            className: "container",
                                            children: (0, t.jsxs)("div", {
                                                className: "portfolio-banner-content",
                                                children: [(0, t.jsx)("span", {
                                                    className: "sub-title",
                                                    children: "We are Agency"
                                                }), (0, t.jsx)("h1", {
                                                    children: "Digital Marketing"
                                                }), (0, t.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
                                                }), (0, t.jsx)("a", {
                                                    href: "#",
                                                    className: "btn btn-secondary",
                                                    children: "Get Started"
                                                })]
                                            })
                                        })
                                    })
                                })
                            })]
                        })) : ""
                    })
                },
                g = s(68216),
                v = s(25997),
                f = s(13444),
                N = s(30268),
                b = s(92953),
                y = s(79566),
                k = s.n(y),
                C = s(41664);

            function w(e) {
                var a = function() {
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
                    var s, i = (0, b.Z)(e);
                    if (a) {
                        var l = (0, b.Z)(this).constructor;
                        s = Reflect.construct(i, arguments, l)
                    } else s = i.apply(this, arguments);
                    return (0, N.Z)(this, s)
                }
            }
            var O = {
                    transitionDuration: 0
                },
                Z = function(e) {
                    (0, f.Z)(s, e);
                    var a = w(s);

                    function s() {
                        return (0, g.Z)(this, s), a.apply(this, arguments)
                    }
                    return (0, v.Z)(s, [{
                        key: "render",
                        value: function() {
                            var e = this.props.images.map((function(e, a) {
                                return (0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6 item",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-latest-projects",
                                        children: [(0, t.jsx)("img", {
                                            src: e.image,
                                            alt: "portfolio-image"
                                        }), (0, t.jsxs)("div", {
                                            className: "content",
                                            children: [(0, t.jsx)("span", {
                                                children: e.category
                                            }), (0, t.jsx)("h3", {
                                                children: e.title
                                            })]
                                        }), (0, t.jsx)(C.default, {
                                            href: "/project-details",
                                            children: (0, t.jsx)("a", {
                                                className: "link-btn"
                                            })
                                        })]
                                    })
                                }, a)
                            }));
                            return (0, t.jsx)("div", {
                                className: "our-latest-projects ptb-80",
                                children: (0, t.jsxs)("div", {
                                    className: "container",
                                    children: [(0, t.jsxs)("div", {
                                        className: "section-title text-left",
                                        children: [(0, t.jsxs)("h2", {
                                            children: ["Our Latest ", (0, t.jsx)("span", {
                                                children: "Projects"
                                            })]
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        })]
                                    }), (0, t.jsx)(k(), {
                                        className: "row",
                                        elementType: "div",
                                        options: O,
                                        disableImagesLoaded: !1,
                                        updateOnEachImageLoad: !1,
                                        children: e
                                    })]
                                })
                            })
                        }
                    }]), s
                }(i.Component);
            Z.defaultProps = {
                images: [{
                    image: "/images/agency-portfolio-projects/ap-project1.jpg",
                    category: "Business",
                    title: "Business Stratagy"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project2.jpg",
                    category: "Development",
                    title: "Web Development"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project3.jpg",
                    category: "Marketing",
                    title: "Digital Marketing"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project4.jpg",
                    category: "App",
                    title: "Mobile App Development"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project6.jpg",
                    category: "Marketing",
                    title: "Email Marketing"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project5.jpg",
                    category: "Development",
                    title: "E-commerce Development"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project9.jpg",
                    category: "App",
                    title: "React App Development"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project8.jpg",
                    category: "Writing",
                    title: "Content Writing"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project7.jpg",
                    category: "IT",
                    title: "IT Consultancy"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project11.jpg",
                    category: "Solutions",
                    title: "IT Solutions"
                }, {
                    image: "/images/agency-portfolio-projects/ap-project10.jpg",
                    category: "Marketing",
                    title: "Marketing & Reporting"
                }]
            };
            var P = Z,
                S = function() {
                    return (0, t.jsx)("div", {
                        className: "agency-portfolio-about-area pt-80 pb-50",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-text-box",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/agency-portfolio-about-image/ap-about-img1.jpg",
                                            alt: "image"
                                        }), (0, t.jsx)("h3", {
                                            children: "About Us"
                                        }), (0, t.jsx)("p", {
                                            children: "Vestibulum ac posuere mi. Nullam euismod dui condimentum metus consequat blandit. Donec leo tortor, commodo eget fermentum id, molestie quis est. Ut lectus metus, condimentum eget facilisis sed, fermentum et tortor."
                                        }), (0, t.jsx)(C.default, {
                                            href: "/about-1",
                                            children: (0, t.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, t.jsx)("i", {
                                                    "data-feather": "plus-circle"
                                                }), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-text-box",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/agency-portfolio-about-image/ap-about-img2.jpg",
                                            alt: "image"
                                        }), (0, t.jsx)("h3", {
                                            children: "Our Vision"
                                        }), (0, t.jsx)("p", {
                                            children: "Vestibulum ac posuere mi. Nullam euismod dui condimentum metus consequat blandit. Donec leo tortor, commodo eget fermentum id, molestie quis est. Ut lectus metus, condimentum eget facilisis sed, fermentum et tortor."
                                        }), (0, t.jsx)(C.default, {
                                            href: "/about-1",
                                            children: (0, t.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, t.jsx)("i", {
                                                    "data-feather": "plus-circle"
                                                }), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-text-box",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/agency-portfolio-about-image/ap-about-img3.jpg",
                                            alt: "image"
                                        }), (0, t.jsx)("h3", {
                                            children: "Our Mission"
                                        }), (0, t.jsx)("p", {
                                            children: "Vestibulum ac posuere mi. Nullam euismod dui condimentum metus consequat blandit. Donec leo tortor, commodo eget fermentum id, molestie quis est. Ut lectus metus, condimentum eget facilisis sed, fermentum et tortor."
                                        }), (0, t.jsx)(C.default, {
                                            href: "/about-1",
                                            children: (0, t.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, t.jsx)("i", {
                                                    "data-feather": "plus-circle"
                                                }), " Learn More"]
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                D = s(12048);

            function q(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    a && (i = i.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function E(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? q(Object(s), !0).forEach((function(a) {
                        (0, d.Z)(e, a, s[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : q(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }))
                }
                return e
            }
            var A = (0, m.default)((function() {
                    return s.e(5518).then(s.t.bind(s, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/DigitalAgencyPortfolio/Partner.js -> react-owl-carousel3"]
                    }
                }),
                T = {
                    loop: !0,
                    nav: !1,
                    dots: !1,
                    autoplayHoverPause: !0,
                    autoplay: !0,
                    margin: 30,
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
                        992: {
                            items: 6
                        }
                    }
                },
                _ = function() {
                    var e = i.useState(!1),
                        a = (0, l.Z)(e, 2),
                        s = a[0],
                        n = a[1];
                    return i.useEffect((function() {
                        n(!0)
                    }), []), (0, t.jsx)("div", {
                        className: "agency-portfolio-partner-area ptb-80",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: s ? (0, t.jsxs)(A, E(E({
                                className: "agency-portfolio-partner-slides owl-carousel owl-theme"
                            }, T), {}, {
                                children: [(0, t.jsx)("div", {
                                    className: "single-agency-portfolio-partner",
                                    children: (0, t.jsx)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: (0, t.jsx)("img", {
                                            src: "/images/agency-portfolio-partner-image/ap-partner1.png",
                                            alt: "image"
                                        })
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-agency-portfolio-partner",
                                    children: (0, t.jsx)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: (0, t.jsx)("img", {
                                            src: "/images/agency-portfolio-partner-image/ap-partner2.png",
                                            alt: "image"
                                        })
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-agency-portfolio-partner",
                                    children: (0, t.jsx)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: (0, t.jsx)("img", {
                                            src: "/images/agency-portfolio-partner-image/ap-partner3.png",
                                            alt: "image"
                                        })
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-agency-portfolio-partner",
                                    children: (0, t.jsx)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: (0, t.jsx)("img", {
                                            src: "/images/agency-portfolio-partner-image/ap-partner4.png",
                                            alt: "image"
                                        })
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-agency-portfolio-partner",
                                    children: (0, t.jsx)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: (0, t.jsx)("img", {
                                            src: "/images/agency-portfolio-partner-image/ap-partner5.png",
                                            alt: "image"
                                        })
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-agency-portfolio-partner",
                                    children: (0, t.jsx)("a", {
                                        href: "#",
                                        children: (0, t.jsx)("img", {
                                            src: "/images/agency-portfolio-partner-image/ap-partner6.png",
                                            alt: "image"
                                        })
                                    })
                                })]
                            })) : ""
                        })
                    })
                };

            function B(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    a && (i = i.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function L(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? B(Object(s), !0).forEach((function(a) {
                        (0, d.Z)(e, a, s[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : B(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }))
                }
                return e
            }
            var F = (0, m.default)((function() {
                    return s.e(5518).then(s.t.bind(s, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/Common/BlogPostStyleThree.js -> react-owl-carousel3"]
                    }
                }),
                M = {
                    loop: !0,
                    nav: !1,
                    dots: !0,
                    autoplayHoverPause: !0,
                    autoplay: !0,
                    smartSpeed: 1e3,
                    autoplayTimeout: 5e3,
                    margin: 30,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        }
                    }
                },
                R = function() {
                    var e = i.useState(!1),
                        a = (0, l.Z)(e, 2),
                        s = a[0],
                        n = a[1];
                    return i.useEffect((function() {
                        n(!0)
                    }), []), (0, t.jsx)("div", {
                        className: "blog-area ptb-80",
                        children: (0, t.jsxs)("div", {
                            className: "container",
                            children: [(0, t.jsxs)("div", {
                                className: "section-title text-left",
                                children: [(0, t.jsxs)("h2", {
                                    children: ["Our Recent ", (0, t.jsx)("span", {
                                        children: "News"
                                    })]
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), s ? (0, t.jsxs)(F, L(L({
                                className: "blog-slides owl-carousel owl-theme"
                            }, M), {}, {
                                children: [(0, t.jsxs)("div", {
                                    className: "single-blog-item",
                                    children: [(0, t.jsx)("div", {
                                        className: "post-image",
                                        children: (0, t.jsx)(C.default, {
                                            href: "/blog-details",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("img", {
                                                    src: "/images/blog-image/blog1.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "post-content",
                                        children: [(0, t.jsxs)("ul", {
                                            className: "post-meta",
                                            children: [(0, t.jsxs)("li", {
                                                children: ["By ", (0, t.jsx)("a", {
                                                    href: "#",
                                                    children: "Admin"
                                                })]
                                            }), (0, t.jsx)("li", {
                                                children: "20 February 2020"
                                            })]
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(C.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "The security risks of changing package owners"
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "single-blog-item",
                                    children: [(0, t.jsx)("div", {
                                        className: "post-image",
                                        children: (0, t.jsx)(C.default, {
                                            href: "/blog-details",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("img", {
                                                    src: "/images/blog-image/blog2.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "post-content",
                                        children: [(0, t.jsxs)("ul", {
                                            className: "post-meta",
                                            children: [(0, t.jsxs)("li", {
                                                children: ["By ", (0, t.jsx)("a", {
                                                    href: "#",
                                                    children: "Admin"
                                                })]
                                            }), (0, t.jsx)("li", {
                                                children: "21 February 2020"
                                            })]
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(C.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Tips to Protecting Your Business and Family"
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "single-blog-item",
                                    children: [(0, t.jsx)("div", {
                                        className: "post-image",
                                        children: (0, t.jsx)(C.default, {
                                            href: "/blog-details",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("img", {
                                                    src: "/images/blog-image/blog3.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "post-content",
                                        children: [(0, t.jsxs)("ul", {
                                            className: "post-meta",
                                            children: [(0, t.jsxs)("li", {
                                                children: ["By ", (0, t.jsx)("a", {
                                                    href: "#",
                                                    children: "Admin"
                                                })]
                                            }), (0, t.jsx)("li", {
                                                children: "22 February 2020"
                                            })]
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(C.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Protect Your Workplace from Cyber Attacks"
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "single-blog-item",
                                    children: [(0, t.jsx)("div", {
                                        className: "post-image",
                                        children: (0, t.jsx)(C.default, {
                                            href: "/blog-details",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("img", {
                                                    src: "/images/blog-image/blog3.jpg",
                                                    alt: "image"
                                                })
                                            })
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "post-content",
                                        children: [(0, t.jsxs)("ul", {
                                            className: "post-meta",
                                            children: [(0, t.jsxs)("li", {
                                                children: ["By ", (0, t.jsx)("a", {
                                                    href: "#",
                                                    children: "Admin"
                                                })]
                                            }), (0, t.jsx)("li", {
                                                children: "22 February 2020"
                                            })]
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(C.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Four New WordPress.com Color Schemes"
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })) : ""]
                        })
                    })
                },
                U = function() {
                    return (0, t.jsx)("div", {
                        className: "creative-area",
                        children: (0, t.jsx)("div", {
                            className: "d-table",
                            children: (0, t.jsx)("div", {
                                className: "d-table-cell",
                                children: (0, t.jsx)("div", {
                                    className: "container",
                                    children: (0, t.jsx)("div", {
                                        className: "creative-inner-area",
                                        children: (0, t.jsxs)("div", {
                                            className: "row",
                                            children: [(0, t.jsx)("div", {
                                                className: "col-lg-6 col-sm-6 col-md-6",
                                                children: (0, t.jsxs)("div", {
                                                    className: "single-counter",
                                                    children: [(0, t.jsx)("h3", {
                                                        children: "1579"
                                                    }), (0, t.jsx)("p", {
                                                        children: "Completed Projects"
                                                    })]
                                                })
                                            }), (0, t.jsx)("div", {
                                                className: "col-lg-6 col-sm-6 col-md-6",
                                                children: (0, t.jsxs)("div", {
                                                    className: "single-counter",
                                                    children: [(0, t.jsx)("h3", {
                                                        children: "750"
                                                    }), (0, t.jsx)("p", {
                                                        children: "Happy Clients"
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                G = s(61646),
                I = function() {
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(o, {}), (0, t.jsx)(p, {}), (0, t.jsx)(P, {}), (0, t.jsx)(S, {}), (0, t.jsx)(D.Z, {}), (0, t.jsx)(_, {}), (0, t.jsx)(R, {}), (0, t.jsx)(U, {}), (0, t.jsx)(G.Z, {})]
                    })
                }
        },
        85652: function(e, a, s) {
            "use strict";
            var i = s(92809),
                l = s(10219),
                n = s(11163),
                r = s(41664),
                c = s(67294),
                t = s(85893),
                o = ["router", "children"];

            function d(e, a) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    a && (i = i.filter((function(a) {
                        return Object.getOwnPropertyDescriptor(e, a).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function m(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var s = null != arguments[a] ? arguments[a] : {};
                    a % 2 ? d(Object(s), !0).forEach((function(a) {
                        (0, i.Z)(e, a, s[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : d(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }))
                }
                return e
            }
            a.Z = (0, n.withRouter)((function(e) {
                var a = e.router,
                    s = e.children,
                    i = (0, l.Z)(e, o),
                    n = c.Children.only(s),
                    d = n.props.className || "";
                return a.pathname === i.href && i.activeClassName && (d = "".concat(d, " ").concat(i.activeClassName).trim()), delete i.activeClassName, (0, t.jsx)(r.default, m(m({}, i), {}, {
                    children: c.cloneElement(n, {
                        className: d
                    })
                }))
            }))
        },
        24817: function(e, a, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/digital-agency-portfolio", function() {
                return s(16270)
            }])
        }
    },
    function(e) {
        e.O(0, [9774, 1736, 6992, 2888, 179], (function() {
            return a = 24817, e(e.s = a);
            var a
        }));
        var a = e.O();
        _N_E = a
    }
]);