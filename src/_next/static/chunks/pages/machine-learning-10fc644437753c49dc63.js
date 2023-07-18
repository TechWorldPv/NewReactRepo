(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9941], {
        73007: function(e, s, a) {
            "use strict";
            var i = a(92809),
                r = a(80318),
                n = a(67294),
                l = a(68694),
                t = a.n(l),
                c = a(12575),
                m = a(85893);

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

            function o(e) {
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
            var h = {
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
                var e = n.useState(!1),
                    s = (0, r.Z)(e, 2),
                    a = s[0],
                    i = s[1];
                return n.useEffect((function() {
                    i(!0)
                }), []), (0, m.jsxs)("div", {
                    className: "ml-feedback-area ptb-80",
                    children: [(0, m.jsxs)("div", {
                        className: "container",
                        children: [(0, m.jsxs)("div", {
                            className: "section-title",
                            children: [(0, m.jsx)("h2", {
                                children: "Our Clients Feedback"
                            }), (0, m.jsx)("div", {
                                className: "bar"
                            }), (0, m.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        }), a ? (0, m.jsxs)(t(), o(o({
                            className: "ml-feedback-slides owl-carousel owl-theme"
                        }, h), {}, {
                            children: [(0, m.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [(0, m.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, m.jsx)("img", {
                                        src: "/images/client-image/client1.jpg",
                                        alt: "image"
                                    }), (0, m.jsx)("h3", {
                                        children: "Sarah Taylor"
                                    }), (0, m.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, m.jsxs)("div", {
                                    className: "rating",
                                    children: [(0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {})]
                                })]
                            }), (0, m.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [(0, m.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, m.jsx)("img", {
                                        src: "/images/client-image/client2.jpg",
                                        alt: "image"
                                    }), (0, m.jsx)("h3", {
                                        children: "Steven Smith"
                                    }), (0, m.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, m.jsxs)("div", {
                                    className: "rating",
                                    children: [(0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {})]
                                })]
                            }), (0, m.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [(0, m.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, m.jsx)("img", {
                                        src: "/images/client-image/client3.jpg",
                                        alt: "image"
                                    }), (0, m.jsx)("h3", {
                                        children: "James Eva"
                                    }), (0, m.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, m.jsxs)("div", {
                                    className: "rating",
                                    children: [(0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {}), (0, m.jsx)(c.Z, {})]
                                })]
                            })]
                        })) : ""]
                    }), (0, m.jsx)("div", {
                        className: "shape1",
                        children: (0, m.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, m.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, m.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, m.jsx)("div", {
                        className: "shape3",
                        children: (0, m.jsx)("img", {
                            src: "/images/shape3.svg",
                            alt: "shape"
                        })
                    }), (0, m.jsx)("div", {
                        className: "shape4",
                        children: (0, m.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, m.jsx)("div", {
                        className: "shape7",
                        children: (0, m.jsx)("img", {
                            src: "/images/shape4.svg",
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
        98894: function(e, s, a) {
            "use strict";
            a(67294);
            var i = a(41664),
                r = a(85893);
            s.Z = function() {
                return (0, r.jsx)("div", {
                    className: "funfacts-area ptb-80",
                    children: (0, r.jsxs)("div", {
                        className: "container",
                        children: [(0, r.jsxs)("div", {
                            className: "section-title",
                            children: [(0, r.jsx)("h2", {
                                children: "We always try to understand users expectation"
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
                            }), (0, r.jsx)(i.default, {
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
        52663: function(e, s, a) {
            "use strict";
            var i = a(92809),
                r = a(80318),
                n = a(67294),
                l = (a(41664), a(68694)),
                t = a.n(l),
                c = a(85893);

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

            function d(e) {
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
                var e = n.useState(!1),
                    s = (0, r.Z)(e, 2),
                    a = s[0],
                    i = s[1];
                return n.useEffect((function() {
                    i(!0)
                }), []), (0, c.jsx)("div", {
                    className: "ml-partner-area mt-minus-top ptb-80 pb-0",
                    children: (0, c.jsx)("div", {
                        className: "container",
                        children: a ? (0, c.jsxs)(t(), d(d({
                            className: "partner-slides owl-carousel owl-theme"
                        }, o), {}, {
                            children: [(0, c.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, c.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-1.png",
                                        alt: "image"
                                    }), (0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-hover1.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, c.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, c.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-2.png",
                                        alt: "image"
                                    }), (0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-hover2.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, c.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, c.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-3.png",
                                        alt: "image"
                                    }), (0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-hover3.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, c.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, c.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-10.png",
                                        alt: "image"
                                    }), (0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-hover10.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, c.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, c.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-5.png",
                                        alt: "image"
                                    }), (0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-hover5.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, c.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, c.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-6.png",
                                        alt: "image"
                                    }), (0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-hover6.png",
                                        alt: "image"
                                    })]
                                })
                            }), (0, c.jsx)("div", {
                                className: "single-ml-partner",
                                children: (0, c.jsxs)("a", {
                                    href: "#",
                                    target: "_blank",
                                    children: [(0, c.jsx)("img", {
                                        src: "/images/partner-img/partner-7.png",
                                        alt: "image"
                                    }), (0, c.jsx)("img", {
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
        44104: function(e, s, a) {
            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return Z
                }
            });
            var i = a(67294),
                r = a(37704),
                n = a(41664),
                l = a(85893),
                t = function() {
                    return (0, l.jsxs)("div", {
                        className: "ml-main-section",
                        children: [(0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "row",
                                children: [(0, l.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, l.jsxs)("div", {
                                        className: "ml-banner-content",
                                        children: [(0, l.jsx)("h1", {
                                            children: "World\u2019s Leading AI & Machine Learning Company"
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida."
                                        }), (0, l.jsx)(n.default, {
                                            href: "/contact",
                                            children: (0, l.jsx)("a", {
                                                className: "btn btn-secondary",
                                                children: "Get Started"
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, l.jsxs)("div", {
                                        className: "ml-banner-image",
                                        children: [(0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/one.png",
                                            className: "animate__animated animate__fadeIn animate__delay-2s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/two.png",
                                            className: "animate__animated animate__fadeInUp animate__delay-1s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/three.png",
                                            className: "animate__animated animate__fadeInUp animate__delay-0.5s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/four.png",
                                            className: "animate__animated animate__fadeInUp animate__delay-2s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/five.png",
                                            className: "animate__animated animate__fadeInDown animate__delay-2.5s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/six.png",
                                            className: "animate__animated animate__fadeInDown animate__delay-1.9s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/seven.png",
                                            className: "animate__animated animate__fadeInDown animate__delay-2.1s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/eight.png",
                                            className: "animate__animated animate__fadeInDown animate__delay-1.9s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/nine.png",
                                            className: "animate__animated animate__fadeInDown animate__delay-1.7s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/ten.png",
                                            className: "animate__animated animate__fadeInDown animate__delay-1.5s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/eleven.png",
                                            className: "animate__animated animate__fadeInUp animate__delay-0.4s",
                                            alt: "image"
                                        }), (0, l.jsx)("img", {
                                            src: "/images/ml-banner-image/ml-main-pic.png",
                                            className: "animate__animated animate__fadeInUp animate__delay-0.5s",
                                            alt: "image"
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape1",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape1.png",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape3",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape3.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape4",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape6 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape7",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape8 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        })]
                    })
                },
                c = a(52663),
                m = a(92493),
                d = function() {
                    return (0, l.jsxs)("div", {
                        className: "solutions-area ptb-80",
                        children: [(0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsxs)("div", {
                                className: "section-title",
                                children: [(0, l.jsx)("span", {
                                    className: "sub-title",
                                    children: "What We Offer"
                                }), (0, l.jsx)("h2", {
                                    children: "Our Featured Solutions"
                                }), (0, l.jsx)("div", {
                                    className: "bar"
                                }), (0, l.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [(0, l.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-solutions-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "icon",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/icon4.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "Robotic Automation"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        }), (0, l.jsx)(n.default, {
                                            href: "/service-details",
                                            children: (0, l.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, l.jsx)(m.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-solutions-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "icon",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/icon5.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "Cognitive Automation"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        }), (0, l.jsx)(n.default, {
                                            href: "/service-details",
                                            children: (0, l.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, l.jsx)(m.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-solutions-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "icon",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/icon6.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "Cognitive Engagement"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        }), (0, l.jsx)(n.default, {
                                            href: "/service-details",
                                            children: (0, l.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, l.jsx)(m.Z, {}), " Learn More"]
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-3 col-sm-6 col-md-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-solutions-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "icon",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/icon7.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "Security & Surveillance"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        }), (0, l.jsx)(n.default, {
                                            href: "/service-details",
                                            children: (0, l.jsxs)("a", {
                                                className: "learn-more-btn",
                                                children: [(0, l.jsx)("i", {
                                                    "data-feather": "plus-circle"
                                                }), " Learn More"]
                                            })
                                        })]
                                    })
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "shape1",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape1.png",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape2 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape3",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape3.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape4",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape6 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape7",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape8 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        })]
                    })
                },
                o = function() {
                    return (0, l.jsxs)("div", {
                        className: "about-area pt-0 ptb-80",
                        children: [(0, l.jsx)("div", {
                            className: "container-fluid",
                            children: (0, l.jsxs)("div", {
                                className: "row align-items-center",
                                children: [(0, l.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, l.jsx)("div", {
                                        className: "ml-about-img",
                                        children: (0, l.jsx)("img", {
                                            src: "/images/about4.png",
                                            alt: "image"
                                        })
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, l.jsxs)("div", {
                                        className: "ml-about-content",
                                        children: [(0, l.jsx)("span", {
                                            className: "sub-title",
                                            children: "About Us"
                                        }), (0, l.jsx)("h2", {
                                            children: "Engaging New Audiences Through Smart Approach"
                                        }), (0, l.jsx)("div", {
                                            className: "bar"
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        }), (0, l.jsx)("p", {
                                            children: "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.Donec vitae sapien ut libero venenatis faucibus tempus."
                                        }), (0, l.jsx)(n.default, {
                                            href: "/about-1",
                                            children: (0, l.jsx)("a", {
                                                className: "btn btn-secondary",
                                                children: "Discover More"
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape1",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape1.png",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape2 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape3",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape3.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape4",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape7",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape8 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        })]
                    })
                },
                h = function() {
                    return (0, l.jsxs)("div", {
                        className: "ml-services-area ptb-80",
                        children: [(0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsxs)("div", {
                                className: "section-title",
                                children: [(0, l.jsx)("span", {
                                    className: "sub-title",
                                    children: "Our Solutions"
                                }), (0, l.jsx)("h2", {
                                    children: "Our Services"
                                }), (0, l.jsx)("div", {
                                    className: "bar"
                                }), (0, l.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [(0, l.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "image",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/services-image/service-image1.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "IT Professionals"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "image",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/services-image/service-image2.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "Software Engineers"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "image",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/services-image/service-image3.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "Health & Manufacturing"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "image",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/services-image/service-image4.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "Security & Surveillance"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "image",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/services-image/service-image5.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "Automatic Optimization"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-4 col-sm-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-ml-services-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "image",
                                            children: (0, l.jsx)("img", {
                                                src: "/images/services-image/service-image6.png",
                                                alt: "image"
                                            })
                                        }), (0, l.jsx)("h3", {
                                            children: (0, l.jsx)(n.default, {
                                                href: "/service-details",
                                                children: (0, l.jsx)("a", {
                                                    children: "Data Analysts"
                                                })
                                            })
                                        }), (0, l.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                        })]
                                    })
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "shape1",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape1.png",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape2 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape3",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape3.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape4",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape7",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape8 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        })]
                    })
                },
                g = a(98894),
                j = a(92809),
                p = a(80318);

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

            function x(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var a = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? u(Object(a), !0).forEach((function(s) {
                        (0, j.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            var v = (0, a(5152).default)((function() {
                    return Promise.resolve().then(a.t.bind(a, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/MachineLearning/Projects.js -> react-owl-carousel3"]
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
                        s = (0, p.Z)(e, 2),
                        a = s[0],
                        r = s[1];
                    return i.useEffect((function() {
                        r(!0)
                    }), []), (0, l.jsxs)("div", {
                        className: "ml-projects-area pt-0 ptb-80",
                        children: [(0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "section-title st-fs-28",
                                children: [(0, l.jsx)("h2", {
                                    children: "Proud Projects That Make Us Stand Out"
                                }), (0, l.jsx)("div", {
                                    className: "bar"
                                }), (0, l.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            className: "container-fluid",
                            children: a ? (0, l.jsxs)(v, x(x({
                                className: "ml-projects-slides owl-carousel owl-theme"
                            }, f), {}, {
                                children: [(0, l.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/projects-img1.jpg",
                                        alt: "image"
                                    }), (0, l.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, l.jsx)(n.default, {
                                            href: "/project-details",
                                            children: (0, l.jsx)("a", {
                                                children: (0, l.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/projects-img2.jpg",
                                        alt: "image"
                                    }), (0, l.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, l.jsx)(n.default, {
                                            href: "/project-details",
                                            children: (0, l.jsx)("a", {
                                                children: (0, l.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/projects-img3.jpg",
                                        alt: "image"
                                    }), (0, l.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, l.jsx)(n.default, {
                                            href: "/project-details",
                                            children: (0, l.jsx)("a", {
                                                children: (0, l.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/projects-img4.jpg",
                                        alt: "image"
                                    }), (0, l.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, l.jsx)(n.default, {
                                            href: "/project-details",
                                            children: (0, l.jsx)("a", {
                                                children: (0, l.jsx)("span", {})
                                            })
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "single-ml-projects-box",
                                    children: [(0, l.jsx)("img", {
                                        src: "/images/projects-img5.jpg",
                                        alt: "image"
                                    }), (0, l.jsx)("div", {
                                        className: "plus-icon",
                                        children: (0, l.jsx)(n.default, {
                                            href: "/project-details",
                                            children: (0, l.jsx)("a", {
                                                children: (0, l.jsx)("span", {})
                                            })
                                        })
                                    })]
                                })]
                            })) : ""
                        }), (0, l.jsx)("div", {
                            className: "shape1",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape1.png",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape2 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape3",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape3.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape4",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape7",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape8 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        })]
                    })
                },
                N = a(62329),
                y = a(73007),
                O = a(61896),
                _ = function() {
                    return (0, l.jsxs)("div", {
                        className: "blog-area ptb-80",
                        children: [(0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsxs)("div", {
                                className: "section-title",
                                children: [(0, l.jsx)("h2", {
                                    children: "Our Recent Story"
                                }), (0, l.jsx)("div", {
                                    className: "bar"
                                }), (0, l.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "row",
                                children: [(0, l.jsx)("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-blog-post-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "entry-thumbnail",
                                            children: (0, l.jsx)(n.default, {
                                                href: "/blog-details",
                                                children: (0, l.jsx)("a", {
                                                    children: (0, l.jsx)("img", {
                                                        src: "/images/blog-image/blog9.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "entry-post-content",
                                            children: [(0, l.jsx)("div", {
                                                className: "entry-meta",
                                                children: (0, l.jsxs)("ul", {
                                                    children: [(0, l.jsx)("li", {
                                                        children: (0, l.jsx)(n.default, {
                                                            href: "#",
                                                            children: (0, l.jsx)("a", {
                                                                children: "Admin"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("li", {
                                                        children: "August 15, 2021"
                                                    })]
                                                })
                                            }), (0, l.jsx)("h3", {
                                                children: (0, l.jsx)(n.default, {
                                                    href: "/blog-details",
                                                    children: (0, l.jsx)("a", {
                                                        children: "Making Peace With The Feast Or Famine Of Freelancing"
                                                    })
                                                })
                                            }), (0, l.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
                                            }), (0, l.jsx)(n.default, {
                                                href: "/blog-details",
                                                children: (0, l.jsxs)("a", {
                                                    className: "learn-more-btn",
                                                    children: ["Read Story ", (0, l.jsx)(O.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-4 col-md-6",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-blog-post-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "entry-thumbnail",
                                            children: (0, l.jsx)(n.default, {
                                                href: "/blog-details",
                                                children: (0, l.jsx)("a", {
                                                    children: (0, l.jsx)("img", {
                                                        src: "/images/blog-image/blog10.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "entry-post-content",
                                            children: [(0, l.jsx)("div", {
                                                className: "entry-meta",
                                                children: (0, l.jsxs)("ul", {
                                                    children: [(0, l.jsx)("li", {
                                                        children: (0, l.jsx)(n.default, {
                                                            href: "#",
                                                            children: (0, l.jsx)("a", {
                                                                children: "Admin"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("li", {
                                                        children: "August 18, 2019"
                                                    })]
                                                })
                                            }), (0, l.jsx)("h3", {
                                                children: (0, l.jsx)(n.default, {
                                                    href: "/blog-details",
                                                    children: (0, l.jsx)("a", {
                                                        children: "I Used The Web For A Day On A 50 MB Budget"
                                                    })
                                                })
                                            }), (0, l.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
                                            }), (0, l.jsx)(n.default, {
                                                href: "/blog-details",
                                                children: (0, l.jsxs)("a", {
                                                    className: "learn-more-btn",
                                                    children: ["Read Story ", (0, l.jsx)(O.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "col-lg-4 col-md-6 offset-md-3 offset-lg-0",
                                    children: (0, l.jsxs)("div", {
                                        className: "single-blog-post-box",
                                        children: [(0, l.jsx)("div", {
                                            className: "entry-thumbnail",
                                            children: (0, l.jsx)(n.default, {
                                                href: "/blog-details",
                                                children: (0, l.jsx)("a", {
                                                    children: (0, l.jsx)("img", {
                                                        src: "/images/blog-image/blog11.jpg",
                                                        alt: "image"
                                                    })
                                                })
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "entry-post-content",
                                            children: [(0, l.jsx)("div", {
                                                className: "entry-meta",
                                                children: (0, l.jsxs)("ul", {
                                                    children: [(0, l.jsx)("li", {
                                                        children: (0, l.jsx)(n.default, {
                                                            href: "#",
                                                            children: (0, l.jsx)("a", {
                                                                children: "Admin"
                                                            })
                                                        })
                                                    }), (0, l.jsx)("li", {
                                                        children: "August 15, 2019"
                                                    })]
                                                })
                                            }), (0, l.jsx)("h3", {
                                                children: (0, l.jsx)(n.default, {
                                                    href: "/blog-details",
                                                    children: (0, l.jsx)("a", {
                                                        children: "Here are the 5 most telling signs of micromanagement"
                                                    })
                                                })
                                            }), (0, l.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
                                            }), (0, l.jsx)(n.default, {
                                                href: "/blog-details",
                                                children: (0, l.jsxs)("a", {
                                                    className: "learn-more-btn",
                                                    children: ["Read Story ", (0, l.jsx)(O.Z, {})]
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: "shape1",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape1.png",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape2 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape3",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape3.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape4",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape7",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape4.svg",
                                alt: "shape"
                            })
                        }), (0, l.jsx)("div", {
                            className: "shape8 rotateme",
                            children: (0, l.jsx)("img", {
                                src: "/images/shape2.svg",
                                alt: "shape"
                            })
                        })]
                    })
                },
                w = a(91346),
                P = a(61646),
                Z = function() {
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(r.Z, {}), (0, l.jsx)(t, {}), (0, l.jsx)(c.Z, {}), (0, l.jsx)(d, {}), (0, l.jsx)(o, {}), (0, l.jsx)(h, {}), (0, l.jsx)(g.Z, {}), (0, l.jsx)(b, {}), (0, l.jsx)(N.Z, {}), (0, l.jsx)(y.Z, {}), (0, l.jsx)(_, {}), (0, l.jsx)(w.Z, {}), (0, l.jsx)(P.Z, {})]
                    })
                }
        },
        85587: function(e, s, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/machine-learning", function() {
                return a(44104)
            }])
        },
        46445: function(e, s, a) {
            "use strict";
            var i = a(67294),
                r = a(45697),
                n = a.n(r);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var a = arguments[s];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function t(e, s) {
                if (null == e) return {};
                var a, i, r = function(e, s) {
                    if (null == e) return {};
                    var a, i, r = {},
                        n = Object.keys(e);
                    for (i = 0; i < n.length; i++) a = n[i], s.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < n.length; i++) a = n[i], s.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }
            var c = (0, i.forwardRef)((function(e, s) {
                var a = e.color,
                    r = void 0 === a ? "currentColor" : a,
                    n = e.size,
                    c = void 0 === n ? 24 : n,
                    m = t(e, ["color", "size"]);
                return i.createElement("svg", l({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: r,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, m), i.createElement("polyline", {
                    points: "20 6 9 17 4 12"
                }))
            }));
            c.propTypes = {
                color: n().string,
                size: n().oneOfType([n().string, n().number])
            }, c.displayName = "Check", s.Z = c
        },
        92493: function(e, s, a) {
            "use strict";
            var i = a(67294),
                r = a(45697),
                n = a.n(r);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var a = arguments[s];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function t(e, s) {
                if (null == e) return {};
                var a, i, r = function(e, s) {
                    if (null == e) return {};
                    var a, i, r = {},
                        n = Object.keys(e);
                    for (i = 0; i < n.length; i++) a = n[i], s.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < n.length; i++) a = n[i], s.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }
            var c = (0, i.forwardRef)((function(e, s) {
                var a = e.color,
                    r = void 0 === a ? "currentColor" : a,
                    n = e.size,
                    c = void 0 === n ? 24 : n,
                    m = t(e, ["color", "size"]);
                return i.createElement("svg", l({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: r,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, m), i.createElement("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10"
                }), i.createElement("line", {
                    x1: "12",
                    y1: "8",
                    x2: "12",
                    y2: "16"
                }), i.createElement("line", {
                    x1: "8",
                    y1: "12",
                    x2: "16",
                    y2: "12"
                }))
            }));
            c.propTypes = {
                color: n().string,
                size: n().oneOfType([n().string, n().number])
            }, c.displayName = "PlusCircle", s.Z = c
        },
        61896: function(e, s, a) {
            "use strict";
            var i = a(67294),
                r = a(45697),
                n = a.n(r);

            function l() {
                return (l = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var a = arguments[s];
                        for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function t(e, s) {
                if (null == e) return {};
                var a, i, r = function(e, s) {
                    if (null == e) return {};
                    var a, i, r = {},
                        n = Object.keys(e);
                    for (i = 0; i < n.length; i++) a = n[i], s.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < n.length; i++) a = n[i], s.indexOf(a) >= 0 || Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a])
                }
                return r
            }
            var c = (0, i.forwardRef)((function(e, s) {
                var a = e.color,
                    r = void 0 === a ? "currentColor" : a,
                    n = e.size,
                    c = void 0 === n ? 24 : n,
                    m = t(e, ["color", "size"]);
                return i.createElement("svg", l({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: r,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, m), i.createElement("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                }), i.createElement("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                }))
            }));
            c.propTypes = {
                color: n().string,
                size: n().oneOfType([n().string, n().number])
            }, c.displayName = "Plus", s.Z = c
        },
        14695: function(e, s, a) {
            "use strict";

            function i(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            a.d(s, {
                Z: function() {
                    return i
                }
            })
        },
        68216: function(e, s, a) {
            "use strict";

            function i(e, s) {
                if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function")
            }
            a.d(s, {
                Z: function() {
                    return i
                }
            })
        },
        25997: function(e, s, a) {
            "use strict";

            function i(e, s) {
                for (var a = 0; a < s.length; a++) {
                    var i = s[a];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }

            function r(e, s, a) {
                return s && i(e.prototype, s), a && i(e, a), e
            }
            a.d(s, {
                Z: function() {
                    return r
                }
            })
        },
        92953: function(e, s, a) {
            "use strict";

            function i(e) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            a.d(s, {
                Z: function() {
                    return i
                }
            })
        },
        13444: function(e, s, a) {
            "use strict";

            function i(e, s) {
                return (i = Object.setPrototypeOf || function(e, s) {
                    return e.__proto__ = s, e
                })(e, s)
            }

            function r(e, s) {
                if ("function" !== typeof s && null !== s) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(s && s.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), s && i(e, s)
            }
            a.d(s, {
                Z: function() {
                    return r
                }
            })
        },
        30268: function(e, s, a) {
            "use strict";

            function i(e) {
                return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            a.d(s, {
                Z: function() {
                    return n
                }
            });
            var r = a(14695);

            function n(e, s) {
                if (s && ("object" === i(s) || "function" === typeof s)) return s;
                if (void 0 !== s) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, r.Z)(e)
            }
        }
    },
    function(e) {
        e.O(0, [9774, 5518, 1736, 1945, 4773, 2329, 2888, 179], (function() {
            return s = 85587, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);