(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [789], {
        73007: function(e, s, a) {
            "use strict";
            var i = a(92809),
                l = a(80318),
                c = a(67294),
                r = a(68694),
                n = a.n(r),
                t = a(12575),
                d = a(85893);

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
            var o = {
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
                }), []), (0, d.jsxs)("div", {
                    className: "ml-feedback-area ptb-80",
                    children: [(0, d.jsxs)("div", {
                        className: "container",
                        children: [(0, d.jsxs)("div", {
                            className: "section-title",
                            children: [(0, d.jsx)("h2", {
                                children: "Our Clients Feedback"
                            }), (0, d.jsx)("div", {
                                className: "bar"
                            }), (0, d.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        }), a ? (0, d.jsxs)(n(), h(h({
                            className: "ml-feedback-slides owl-carousel owl-theme"
                        }, o), {}, {
                            children: [(0, d.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [(0, d.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, d.jsx)("img", {
                                        src: "/images/client-image/client1.jpg",
                                        alt: "image"
                                    }), (0, d.jsx)("h3", {
                                        children: "Sarah Taylor"
                                    }), (0, d.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                }), (0, d.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, d.jsxs)("div", {
                                    className: "rating",
                                    children: [(0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {})]
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [(0, d.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, d.jsx)("img", {
                                        src: "/images/client-image/client2.jpg",
                                        alt: "image"
                                    }), (0, d.jsx)("h3", {
                                        children: "Steven Smith"
                                    }), (0, d.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                }), (0, d.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, d.jsxs)("div", {
                                    className: "rating",
                                    children: [(0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {})]
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [(0, d.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, d.jsx)("img", {
                                        src: "/images/client-image/client3.jpg",
                                        alt: "image"
                                    }), (0, d.jsx)("h3", {
                                        children: "James Eva"
                                    }), (0, d.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                }), (0, d.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, d.jsxs)("div", {
                                    className: "rating",
                                    children: [(0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {}), (0, d.jsx)(t.Z, {})]
                                })]
                            })]
                        })) : ""]
                    }), (0, d.jsx)("div", {
                        className: "shape1",
                        children: (0, d.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, d.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, d.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, d.jsx)("div", {
                        className: "shape3",
                        children: (0, d.jsx)("img", {
                            src: "/images/shape3.svg",
                            alt: "shape"
                        })
                    }), (0, d.jsx)("div", {
                        className: "shape4",
                        children: (0, d.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, d.jsx)("div", {
                        className: "shape7",
                        children: (0, d.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, d.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, d.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        98894: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(41664),
                l = a(85893);
            s.Z = function() {
                return (0, l.jsx)("div", {
                    className: "funfacts-area ptb-80",
                    children: (0, l.jsxs)("div", {
                        className: "container",
                        children: [(0, l.jsxs)("div", {
                            className: "section-title",
                            children: [(0, l.jsx)("h2", {
                                children: "We always try to understand users expectation"
                            }), (0, l.jsx)("div", {
                                className: "bar"
                            }), (0, l.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "row",
                            children: [(0, l.jsx)("div", {
                                className: "col-lg-3 col-md-3 col-6",
                                children: (0, l.jsxs)("div", {
                                    className: "funfact",
                                    children: [(0, l.jsx)("h3", {
                                        children: "180K"
                                    }), (0, l.jsx)("p", {
                                        children: "Downloaded"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-lg-3 col-md-3 col-6",
                                children: (0, l.jsxs)("div", {
                                    className: "funfact",
                                    children: [(0, l.jsx)("h3", {
                                        children: "20K"
                                    }), (0, l.jsx)("p", {
                                        children: "Feedback"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-lg-3 col-md-3 col-6",
                                children: (0, l.jsxs)("div", {
                                    className: "funfact",
                                    children: [(0, l.jsx)("h3", {
                                        children: "500+"
                                    }), (0, l.jsx)("p", {
                                        children: "Workers"
                                    })]
                                })
                            }), (0, l.jsx)("div", {
                                className: "col-lg-3 col-md-3 col-6",
                                children: (0, l.jsxs)("div", {
                                    className: "funfact",
                                    children: [(0, l.jsx)("h3", {
                                        children: "70+"
                                    }), (0, l.jsx)("p", {
                                        children: "Contributors"
                                    })]
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "contact-cta-box",
                            children: [(0, l.jsx)("h3", {
                                children: "Have any question about us?"
                            }), (0, l.jsx)("p", {
                                children: "Don't hesitate to contact us"
                            }), (0, l.jsx)(i.default, {
                                href: "/contact",
                                children: (0, l.jsx)("a", {
                                    className: "btn btn-primary",
                                    children: "Contact Us"
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: "map-bg",
                            children: (0, l.jsx)("img", {
                                src: "/images/map.png",
                                alt: "map"
                            })
                        })]
                    })
                })
            }
        },
        91346: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(85893);
            s.Z = function() {
                return (0, i.jsxs)("div", {
                    className: "free-trial-area",
                    children: [(0, i.jsx)("div", {
                        className: "container-fluid",
                        children: (0, i.jsxs)("div", {
                            className: "row align-items-center",
                            children: [(0, i.jsx)("div", {
                                className: "col-lg-6 col-md-12",
                                children: (0, i.jsx)("div", {
                                    className: "free-trial-image",
                                    children: (0, i.jsx)("img", {
                                        src: "/images/free-trial-img.png",
                                        alt: "image"
                                    })
                                })
                            }), (0, i.jsx)("div", {
                                className: "col-lg-6 col-md-12",
                                children: (0, i.jsxs)("div", {
                                    className: "free-trial-content",
                                    children: [(0, i.jsx)("h2", {
                                        children: "Start your free trial"
                                    }), (0, i.jsxs)("form", {
                                        className: "newsletter-form",
                                        children: [(0, i.jsx)("input", {
                                            type: "email",
                                            className: "input-newsletter",
                                            placeholder: "Enter your business email here"
                                        }), (0, i.jsx)("button", {
                                            type: "submit",
                                            children: "Sign Up Free"
                                        })]
                                    }), (0, i.jsx)("p", {
                                        children: "Test out the Machine Learning features for 14 days, no credit card required."
                                    })]
                                })
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, i.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, i.jsx)("div", {
                        className: "shape4",
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
        61646: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(41664),
                l = a(64856),
                c = a(22774),
                r = a(89899),
                n = a(51591),
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
                                            children: [(0, h.jsx)(r.Z, {}), "Phone: ", (0, h.jsx)("a", {
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
                                                children: (0, h.jsx)(n.Z, {})
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
        53639: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return _
                }
            });
            var i = a(67294),
                l = a(80318),
                c = a(85652),
                r = a(27434),
                n = a(73549),
                t = a(85893),
                d = function() {
                    var e = i.useState(!0),
                        s = (0, l.Z)(e, 2),
                        a = s[0],
                        d = s[1],
                        m = function() {
                            d(!a)
                        };
                    i.useEffect((function() {
                        var e = document.getElementById("header");
                        document.addEventListener("scroll", (function() {
                            window.scrollY > 170 ? e.classList.add("is-sticky") : e.classList.remove("is-sticky")
                        }))
                    }));
                    var h = a ? "collapse navbar-collapse" : "collapse navbar-collapse show",
                        o = a ? "navbar-toggler navbar-toggler-right collapsed" : "navbar-toggler navbar-toggler-right";
                    return (0, t.jsx)("header", {
                        id: "header",
                        className: "headroom navbar-style-three",
                        children: (0, t.jsx)("div", {
                            className: "startp-nav",
                            children: (0, t.jsx)("div", {
                                className: "container-fluid",
                                children: (0, t.jsxs)("nav", {
                                    className: "navbar navbar-expand-md navbar-light",
                                    children: [(0, t.jsx)(c.Z, {
                                        href: "/it-startup",
                                        children: (0, t.jsx)("a", {
                                            onClick: m,
                                            className: "navbar-brand",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/logo.png",
                                                alt: "logo"
                                            })
                                        })
                                    }), (0, t.jsxs)("button", {
                                        onClick: m,
                                        className: o,
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
                                        className: h,
                                        id: "navbarSupportedContent",
                                        children: (0, t.jsxs)("ul", {
                                            className: "navbar-nav ms-auto",
                                            children: [(0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(c.Z, {
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
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/it-startup",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "IT Startup"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/it-startup-2",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "IT Startup Two"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/iot",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "IOT"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/hosting",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Hosting"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/machine-learning",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Machine Learning"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/machine-learning-2",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Machine Learning 2"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/bigdata-analytics",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Bigdata Analytics"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/digital-agency",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Digital Agency"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/digital-agency-portfolio",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Digital Agency Portfolio"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/pc-repair",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "PC Repair"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(c.Z, {
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
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/about-1",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "About Style 1"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/about-2",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "About Style 2"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/about-3",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "About Style 3"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(c.Z, {
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
                                                        children: [(0, t.jsx)(c.Z, {
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
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/features",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Features"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/feature-details",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Features Details"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, t.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, t.jsx)(c.Z, {
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
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/services-1",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Services Style 1"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/services-2",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Services Style 2"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/services-3",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Services Style 3"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/services-4",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Services Style 4"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/services-5",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Services Style 5"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/service-details",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Services Details"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/feedback",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Feedback"
                                                            })
                                                        })
                                                    }), (0, t.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, t.jsx)(c.Z, {
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
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/projects-1",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Project Style 1"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/projects-2",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Project Style 1"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/project-details",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Project Details"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/team",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Team"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/pricing",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Pricing"
                                                            })
                                                        })
                                                    }), (0, t.jsxs)("li", {
                                                        className: "nav-item",
                                                        children: [(0, t.jsx)(c.Z, {
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
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/login",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Login"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/sign-up",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Sign Up"
                                                                    })
                                                                })
                                                            }), (0, t.jsx)("li", {
                                                                className: "nav-item",
                                                                children: (0, t.jsx)(c.Z, {
                                                                    href: "/forgot-password",
                                                                    activeClassName: "active",
                                                                    children: (0, t.jsx)("a", {
                                                                        onClick: m,
                                                                        className: "nav-link",
                                                                        children: "Forgot Password"
                                                                    })
                                                                })
                                                            })]
                                                        })]
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/faq",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "FAQ's"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/coming-soon",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Coming Soon"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/404",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "404 Error Page"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(c.Z, {
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
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/shop",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Shop"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/product-details",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Products Details"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/cart",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Cart"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/checkout",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Checkout"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsxs)("li", {
                                                className: "nav-item",
                                                children: [(0, t.jsx)(c.Z, {
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
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/blog-1",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Blog Grid"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/blog-2",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Blog Right Sidebar"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/blog-3",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Blog Grid 2"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/blog-4",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Blog Right Sidebar 2"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/blog-5",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Blog Grid 3"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/blog-6",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Blog Right Sidebar 3"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        className: "nav-item",
                                                        children: (0, t.jsx)(c.Z, {
                                                            href: "/blog-details",
                                                            activeClassName: "active",
                                                            children: (0, t.jsx)("a", {
                                                                onClick: m,
                                                                className: "nav-link",
                                                                children: "Blog Details"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            }), (0, t.jsx)("li", {
                                                className: "nav-item",
                                                children: (0, t.jsx)(c.Z, {
                                                    href: "/contact",
                                                    activeClassName: "active",
                                                    children: (0, t.jsx)("a", {
                                                        onClick: m,
                                                        className: "nav-link",
                                                        children: "Contact"
                                                    })
                                                })
                                            })]
                                        })
                                    }), (0, t.jsxs)("div", {
                                        className: "others-option",
                                        children: [(0, t.jsx)(c.Z, {
                                            href: "/cart",
                                            children: (0, t.jsxs)("a", {
                                                className: "cart-wrapper-btn",
                                                children: [(0, t.jsx)(n.Z, {}), (0, t.jsx)("span", {
                                                    children: "0"
                                                })]
                                            })
                                        }), (0, t.jsx)(c.Z, {
                                            href: "/contact",
                                            children: (0, t.jsx)("a", {
                                                className: "btn btn-light",
                                                children: "Support"
                                            })
                                        }), (0, t.jsx)(c.Z, {
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
                m = a(41664),
                h = function() {
                    return (0, t.jsxs)("div", {
                        className: "ml-main-banner",
                        children: [(0, t.jsx)("div", {
                            className: "container-fluid",
                            children: (0, t.jsxs)("div", {
                                className: "row align-items-center",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, t.jsxs)("div", {
                                        className: "ml-banner-content",
                                        children: [(0, t.jsx)("h1", {
                                            children: "World\u2019s Leading AI & Machine Learning Company"
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
                                        }), (0, t.jsx)(m.default, {
                                            href: "/contact",
                                            children: (0, t.jsx)("a", {
                                                className: "btn btn-secondary",
                                                children: "Get Started"
                                            })
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, t.jsx)("div", {
                                        className: "ml-banner-single-image",
                                        children: (0, t.jsx)("img", {
                                            src: "/images/ml-banner-image/ml-main-pic.png",
                                            className: "animate__animated animate__fadeInUp animate__delay-0.5s",
                                            alt: "image"
                                        })
                                    })
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "shape1",
                            children: (0, t.jsx)("img", {
                                src: "/images/shape1.png",
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
                },
                o = a(92809),
                j = a(68694),
                x = a.n(j);

            function g(e, s) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    s && (i = i.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function v(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? g(Object(a), !0).forEach((function(s) {
                        (0, o.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : g(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            var p = {
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
                },
                u = function() {
                    var e = i.useState(!1),
                        s = (0, l.Z)(e, 2),
                        a = s[0],
                        c = s[1];
                    return i.useEffect((function() {
                        c(!0)
                    }), []), (0, t.jsx)("div", {
                        className: "ml-partner-area mt-minus-top ptb-80 pb-0",
                        children: (0, t.jsx)("div", {
                            className: "container",
                            children: a ? (0, t.jsxs)(x(), v(v({
                                className: "partner-slides owl-carousel owl-theme"
                            }, p), {}, {
                                children: [(0, t.jsx)("div", {
                                    className: "single-ml-partner",
                                    children: (0, t.jsxs)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-1.png",
                                            alt: "image"
                                        }), (0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-hover1.png",
                                            alt: "image"
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-ml-partner",
                                    children: (0, t.jsxs)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-2.png",
                                            alt: "image"
                                        }), (0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-hover2.png",
                                            alt: "image"
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-ml-partner",
                                    children: (0, t.jsxs)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-3.png",
                                            alt: "image"
                                        }), (0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-hover3.png",
                                            alt: "image"
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-ml-partner",
                                    children: (0, t.jsxs)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-10.png",
                                            alt: "image"
                                        }), (0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-hover10.png",
                                            alt: "image"
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-ml-partner",
                                    children: (0, t.jsxs)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-5.png",
                                            alt: "image"
                                        }), (0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-hover5.png",
                                            alt: "image"
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-ml-partner",
                                    children: (0, t.jsxs)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-6.png",
                                            alt: "image"
                                        }), (0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-hover6.png",
                                            alt: "image"
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "single-ml-partner",
                                    children: (0, t.jsxs)("a", {
                                        href: "#",
                                        target: "_blank",
                                        children: [(0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-7.png",
                                            alt: "image"
                                        }), (0, t.jsx)("img", {
                                            src: "/images/partner-img/partner-hover7.png",
                                            alt: "image"
                                        })]
                                    })
                                })]
                            })) : ""
                        })
                    })
                },
                N = a(92493),
                f = function() {
                    return (0, t.jsxs)("div", {
                        className: "solutions-area ptb-80",
                        children: [(0, t.jsxs)("div", {
                            className: "container",
                            children: [(0, t.jsxs)("div", {
                                className: "section-title",
                                children: [(0, t.jsx)("span", {
                                    className: "sub-title",
                                    children: "What We Offer"
                                }), (0, t.jsx)("h2", {
                                    children: "Our Featured Solutions"
                                }), (0, t.jsx)("div", {
                                    className: "bar"
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-solutions-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "icon",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/icon4.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Robotic Automation"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        }), (0, t.jsx)(m.default, {
                                            href: "/service-details",
                                            children: (0, t.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, t.jsx)(N.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-solutions-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "icon",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/icon5.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Cognitive Automation"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        }), (0, t.jsx)(m.default, {
                                            href: "/service-details",
                                            children: (0, t.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, t.jsx)(N.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-solutions-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "icon",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/icon6.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Cognitive Engagement"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        }), (0, t.jsx)(m.default, {
                                            href: "/service-details",
                                            children: (0, t.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, t.jsx)(N.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-solutions-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "icon",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/icon7.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Security & Surveillance"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        }), (0, t.jsx)(m.default, {
                                            href: "/service-details",
                                            children: (0, t.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, t.jsx)("i", {
                                                    "data-feather": "plus-circle"
                                                }), " Learn More"]
                                            })
                                        })]
                                    })
                                })]
                            })]
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
                },
                b = function() {
                    return (0, t.jsxs)("div", {
                        className: "about-area pt-0 ptb-80",
                        children: [(0, t.jsx)("div", {
                            className: "container-fluid",
                            children: (0, t.jsxs)("div", {
                                className: "row align-items-center",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, t.jsx)("div", {
                                        className: "ml-about-img",
                                        children: (0, t.jsx)("img", {
                                            src: "/images/about4.png",
                                            alt: "image"
                                        })
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, t.jsxs)("div", {
                                        className: "ml-about-content",
                                        children: [(0, t.jsx)("span", {
                                            className: "sub-title",
                                            children: "About Us"
                                        }), (0, t.jsx)("h2", {
                                            children: "Engaging New Audiences Through Smart Approach"
                                        }), (0, t.jsx)("div", {
                                            className: "bar"
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        }), (0, t.jsx)("p", {
                                            children: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.Donec vitae sapien ut libero venenatis faucibus tempus."
                                        }), (0, t.jsx)(m.default, {
                                            href: "/about-1",
                                            children: (0, t.jsx)("a", {
                                                className: "btn btn-secondary",
                                                children: "Discover More"
                                            })
                                        })]
                                    })
                                })]
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
                },
                k = function() {
                    return (0, t.jsxs)("div", {
                        className: "ml-services-area ptb-80",
                        children: [(0, t.jsxs)("div", {
                            className: "container",
                            children: [(0, t.jsxs)("div", {
                                className: "section-title",
                                children: [(0, t.jsx)("span", {
                                    className: "sub-title",
                                    children: "Our Solutions"
                                }), (0, t.jsx)("h2", {
                                    children: "Our Services"
                                }), (0, t.jsx)("div", {
                                    className: "bar"
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "image",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/services-image/service-image1.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "IT Professionals"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "image",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/services-image/service-image2.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Software Engineers"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "image",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/services-image/service-image3.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Health & Manufacturing"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "image",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/services-image/service-image4.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Security & Surveillance"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "image",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/services-image/service-image5.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Automatic Optimization"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "image",
                                            children: (0, t.jsx)("img", {
                                                src: "/images/services-image/service-image6.png",
                                                alt: "image"
                                            })
                                        }), (0, t.jsx)("h3", {
                                            children: (0, t.jsx)(m.default, {
                                                href: "/service-details",
                                                children: (0, t.jsx)("a", {
                                                    children: "Data Analysts"
                                                })
                                            })
                                        }), (0, t.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                })]
                            })]
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
                },
                C = a(98894);

            function y(e, s) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    s && (i = i.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function Z(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? y(Object(a), !0).forEach((function(s) {
                        (0, o.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : y(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            var w = (0, a(5152).default)((function() {
                    return Promise.resolve().then(a.t.bind(a, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/MachineLearningTwo/Projects.js -> react-owl-carousel3"]
                    }
                }),
                O = {
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
                S = function() {
                    var e = i.useState(!1),
                        s = (0, l.Z)(e, 2),
                        a = s[0],
                        c = s[1];
                    return i.useEffect((function() {
                        c(!0)
                    }), []), (0, t.jsxs)("div", {
                        className: "ml-projects-area pt-0 ptb-80",
                        children: [(0, t.jsx)("div", {
                            className: "container",
                            children: (0, t.jsxs)("div", {
                                className: "section-title st-fs-28",
                                children: [(0, t.jsx)("h2", {
                                    children: "Proud Projects That Make Us Stand Out"
                                }), (0, t.jsx)("div", {
                                    className: "bar"
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "container-fluid",
                            children: a ? (0, t.jsxs)(w, Z(Z({
                                className: "ml-projects-slides owl-carousel owl-theme"
                            }, O), {}, {
                                children: [(0, t.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, t.jsx)("img", {
                                        src: "/images/projects-img1.jpg",
                                        alt: "image"
                                    }), (0, t.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, t.jsx)(m.default, {
                                            href: "/project-details",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, t.jsx)("img", {
                                        src: "/images/projects-img2.jpg",
                                        alt: "image"
                                    }), (0, t.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, t.jsx)(m.default, {
                                            href: "/project-details",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, t.jsx)("img", {
                                        src: "/images/projects-img3.jpg",
                                        alt: "image"
                                    }), (0, t.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, t.jsx)(m.default, {
                                            href: "/project-details",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, t.jsx)("img", {
                                        src: "/images/projects-img4.jpg",
                                        alt: "image"
                                    }), (0, t.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, t.jsx)(m.default, {
                                            href: "/project-details",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, t.jsx)("img", {
                                        src: "/images/projects-img5.jpg",
                                        alt: "image"
                                    }), (0, t.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, t.jsx)(m.default, {
                                            href: "/project-details",
                                            children: (0, t.jsx)("a", {
                                                children: (0, t.jsx)("span", {})
                                            })
                                        })
                                    })]
                                })]
                            })) : ""
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
                },
                P = a(62329),
                D = a(73007),
                L = a(61896),
                A = function() {
                    return (0, t.jsxs)("div", {
                        className: "blog-area ptb-80",
                        children: [(0, t.jsxs)("div", {
                            className: "container",
                            children: [(0, t.jsxs)("div", {
                                className: "section-title",
                                children: [(0, t.jsx)("h2", {
                                    children: "Our Recent Story"
                                }), (0, t.jsx)("div", {
                                    className: "bar"
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "row",
                                children: [(0, t.jsx)("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-blog-post-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "entry-thumbnail",
                                            children: (0, t.jsx)(m.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsx)("a", {
                                                    children: (0, t.jsx)("img", {
                                                        src: "/images/blog-image/blog9.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "entry-post-content",
                                            children: [(0, t.jsx)("div", {
                                                className: "entry-meta",
                                                children: (0, t.jsxs)("ul", {
                                                    children: [(0, t.jsx)("li", {
                                                        children: (0, t.jsx)(m.default, {
                                                            href: "#",
                                                            children: (0, t.jsx)("a", {
                                                                children: "Admin"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        children: "August 15, 2021"
                                                    })]
                                                })
                                            }), (0, t.jsx)("h3", {
                                                children: (0, t.jsx)(m.default, {
                                                    href: "/blog-details",
                                                    children: (0, t.jsx)("a", {
                                                        children: "Making Peace With The Feast Or Famine Of Freelancing"
                                                    })
                                                })
                                            }), (0, t.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
                                            }), (0, t.jsx)(m.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsxs)("a", {
                                                    className: "learn-more-btn",
                                                    children: ["Read Story ", (0, t.jsx)(L.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-blog-post-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "entry-thumbnail",
                                            children: (0, t.jsx)(m.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsx)("a", {
                                                    children: (0, t.jsx)("img", {
                                                        src: "/images/blog-image/blog10.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "entry-post-content",
                                            children: [(0, t.jsx)("div", {
                                                className: "entry-meta",
                                                children: (0, t.jsxs)("ul", {
                                                    children: [(0, t.jsx)("li", {
                                                        children: (0, t.jsx)(m.default, {
                                                            href: "#",
                                                            children: (0, t.jsx)("a", {
                                                                children: "Admin"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        children: "August 18, 2019"
                                                    })]
                                                })
                                            }), (0, t.jsx)("h3", {
                                                children: (0, t.jsx)(m.default, {
                                                    href: "/blog-details",
                                                    children: (0, t.jsx)("a", {
                                                        children: "I Used The Web For A Day On A 50 MB Budget"
                                                    })
                                                })
                                            }), (0, t.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
                                            }), (0, t.jsx)(m.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsxs)("a", {
                                                    className: "learn-more-btn",
                                                    children: ["Read Story ", (0, t.jsx)(L.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, t.jsx)("div", {
                                    className: "col-lg-4 col-md-6 offset-md-3 offset-lg-0",
                                    children: (0, t.jsxs)("div", {
                                        className: "single-blog-post-box",
                                        children: [(0, t.jsx)("div", {
                                            className: "entry-thumbnail",
                                            children: (0, t.jsx)(m.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsx)("a", {
                                                    children: (0, t.jsx)("img", {
                                                        src: "/images/blog-image/blog11.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        }), (0, t.jsxs)("div", {
                                            className: "entry-post-content",
                                            children: [(0, t.jsx)("div", {
                                                className: "entry-meta",
                                                children: (0, t.jsxs)("ul", {
                                                    children: [(0, t.jsx)("li", {
                                                        children: (0, t.jsx)(m.default, {
                                                            href: "#",
                                                            children: (0, t.jsx)("a", {
                                                                children: "Admin"
                                                            })
                                                        })
                                                    }), (0, t.jsx)("li", {
                                                        children: "August 15, 2019"
                                                    })]
                                                })
                                            }), (0, t.jsx)("h3", {
                                                children: (0, t.jsx)(m.default, {
                                                    href: "/blog-details",
                                                    children: (0, t.jsx)("a", {
                                                        children: "Here are the 5 most telling signs of micromanagement"
                                                    })
                                                })
                                            }), (0, t.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
                                            }), (0, t.jsx)(m.default, {
                                                href: "/blog-details",
                                                children: (0, t.jsxs)("a", {
                                                    className: "learn-more-btn",
                                                    children: ["Read Story ", (0, t.jsx)(L.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
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
                },
                E = a(91346),
                q = a(61646),
                _ = function() {
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(d, {}), (0, t.jsx)(h, {}), (0, t.jsx)(u, {}), (0, t.jsx)(f, {}), (0, t.jsx)(b, {}), (0, t.jsx)(k, {}), (0, t.jsx)(C.Z, {}), (0, t.jsx)(S, {}), (0, t.jsx)(P.Z, {}), (0, t.jsx)(D.Z, {}), (0, t.jsx)(A, {}), (0, t.jsx)(E.Z, {}), (0, t.jsx)(q.Z, {})]
                    })
                }
        },
        85652: function(e, s, a) {
            "use strict";
            var i = a(92809),
                l = a(10219),
                c = a(11163),
                r = a(41664),
                n = a(67294),
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
                    c = n.Children.only(a),
                    m = c.props.className || "";
                return s.pathname === i.href && i.activeClassName && (m = "".concat(m, " ").concat(i.activeClassName).trim()), delete i.activeClassName, (0, t.jsx)(r.default, h(h({}, i), {}, {
                    children: n.cloneElement(c, {
                        className: m
                    })
                }))
            }))
        },
        79092: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/machine-learning-2", function() {
                return a(53639)
            }])
        }
    },
    function(e) {
        e.O(0, [9774, 5518, 1736, 9050, 2329, 2888, 179], (function() {
            return s = 79092, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);