"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4752], {
        31245: function(e, a, s) {
            var i = s(92809),
                l = s(80318),
                n = s(67294),
                r = s(41664),
                c = s(77662),
                d = s(5152),
                t = s(85893);

            function m(e, a) {
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
                    a % 2 ? m(Object(s), !0).forEach((function(a) {
                        (0, i.Z)(e, a, s[a])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : m(Object(s)).forEach((function(a) {
                        Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(s, a))
                    }))
                }
                return e
            }
            var g = (0, d.default)((function() {
                    return s.e(5518).then(s.t.bind(s, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/Common/RecentWorks.js -> react-owl-carousel3"]
                    }
                }),
                h = {
                    items: 4,
                    loop: !0,
                    nav: !1,
                    autoplay: !0,
                    margin: 30,
                    dots: !1,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        },
                        1500: {
                            items: 4
                        }
                    }
                };
            a.Z = function() {
                var e = n.useState(!1),
                    a = (0, l.Z)(e, 2),
                    s = a[0],
                    i = a[1];
                return n.useEffect((function() {
                    i(!0)
                }), []), (0, t.jsxs)("div", {
                    className: "works-area pt-80 pb-50 bg-f7fafd",
                    children: [(0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsxs)("div", {
                            className: "section-title",
                            children: [(0, t.jsx)("h2", {
                                children: "Our Recent Works"
                            }), (0, t.jsx)("div", {
                                className: "bar"
                            }), (0, t.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        })
                    }), s ? (0, t.jsxs)(g, o(o({
                        className: "works-slides owl-carousel owl-theme"
                    }, h), {}, {
                        children: [(0, t.jsxs)("div", {
                            className: "single-works",
                            children: [(0, t.jsx)("img", {
                                src: "/images/works-image/works-image1.jpg",
                                alt: "image"
                            }), (0, t.jsx)(r.default, {
                                href: "/project-details",
                                children: (0, t.jsx)("a", {
                                    className: "icon",
                                    children: (0, t.jsx)(c.Z, {})
                                })
                            }), (0, t.jsxs)("div", {
                                className: "works-content",
                                children: [(0, t.jsx)("h3", {
                                    children: (0, t.jsx)(r.default, {
                                        href: "/project-details",
                                        children: (0, t.jsx)("a", {
                                            children: "Incredible infrastructure"
                                        })
                                    })
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "single-works",
                            children: [(0, t.jsx)("img", {
                                src: "/images/works-image/works-image2.jpg",
                                alt: "image"
                            }), (0, t.jsx)(r.default, {
                                href: "/project-details",
                                children: (0, t.jsx)("a", {
                                    className: "icon",
                                    children: (0, t.jsx)(c.Z, {})
                                })
                            }), (0, t.jsxs)("div", {
                                className: "works-content",
                                children: [(0, t.jsx)("h3", {
                                    children: (0, t.jsx)(r.default, {
                                        href: "/project-details",
                                        children: (0, t.jsx)("a", {
                                            children: "Email Notifications"
                                        })
                                    })
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "single-works",
                            children: [(0, t.jsx)("img", {
                                src: "/images/works-image/works-image3.jpg",
                                alt: "image"
                            }), (0, t.jsx)(r.default, {
                                href: "/project-details",
                                children: (0, t.jsx)("a", {
                                    className: "icon",
                                    children: (0, t.jsx)(c.Z, {})
                                })
                            }), (0, t.jsxs)("div", {
                                className: "works-content",
                                children: [(0, t.jsx)("h3", {
                                    children: (0, t.jsx)(r.default, {
                                        href: "/project-details",
                                        children: (0, t.jsx)("a", {
                                            children: "Best Analytics Audits"
                                        })
                                    })
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "single-works",
                            children: [(0, t.jsx)("img", {
                                src: "/images/works-image/works-image4.jpg",
                                alt: "image"
                            }), (0, t.jsx)(r.default, {
                                href: "/project-details",
                                children: (0, t.jsx)("a", {
                                    className: "icon",
                                    children: (0, t.jsx)(c.Z, {})
                                })
                            }), (0, t.jsxs)("div", {
                                className: "works-content",
                                children: [(0, t.jsx)("h3", {
                                    children: (0, t.jsx)(r.default, {
                                        href: "/project-details",
                                        children: (0, t.jsx)("a", {
                                            children: "Simple Dashboard"
                                        })
                                    })
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "single-works",
                            children: [(0, t.jsx)("img", {
                                src: "/images/works-image/works-image5.jpg",
                                alt: "image"
                            }), (0, t.jsx)(r.default, {
                                href: "/project-details",
                                children: (0, t.jsx)("a", {
                                    className: "icon",
                                    children: (0, t.jsx)(c.Z, {})
                                })
                            }), (0, t.jsxs)("div", {
                                className: "works-content",
                                children: [(0, t.jsx)("h3", {
                                    children: (0, t.jsx)(r.default, {
                                        href: "/project-details",
                                        children: (0, t.jsx)("a", {
                                            children: "Information Retrieval"
                                        })
                                    })
                                }), (0, t.jsx)("p", {
                                    children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                })]
                            })]
                        })]
                    })) : "", (0, t.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape7",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, t.jsx)("div", {
                        className: "shape4",
                        children: (0, t.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        91842: function(e, a, s) {
            s(67294);
            var i = s(53133),
                l = s(52006),
                n = s(39646),
                r = s(18838),
                c = s(41664),
                d = s(85893);
            a.Z = function() {
                return (0, d.jsx)("div", {
                    className: "boxes-area",
                    children: (0, d.jsx)("div", {
                        className: "container",
                        children: (0, d.jsxs)("div", {
                            className: "row",
                            children: [(0, d.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, d.jsxs)("div", {
                                    className: "single-box",
                                    children: [(0, d.jsx)("div", {
                                        className: "icon",
                                        children: (0, d.jsx)(i.Z, {})
                                    }), (0, d.jsx)("h3", {
                                        children: (0, d.jsx)(c.default, {
                                            href: "/feature-details",
                                            children: (0, d.jsx)("a", {
                                                children: "Zero Configuration"
                                            })
                                        })
                                    }), (0, d.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna."
                                    })]
                                })
                            }), (0, d.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, d.jsxs)("div", {
                                    className: "single-box bg-f78acb",
                                    children: [(0, d.jsx)("div", {
                                        className: "icon",
                                        children: (0, d.jsx)(l.Z, {})
                                    }), (0, d.jsx)("h3", {
                                        children: (0, d.jsx)(c.default, {
                                            href: "/feature-details",
                                            children: (0, d.jsx)("a", {
                                                children: "Code Security"
                                            })
                                        })
                                    }), (0, d.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna."
                                    })]
                                })
                            }), (0, d.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, d.jsxs)("div", {
                                    className: "single-box bg-c679e3",
                                    children: [(0, d.jsx)("div", {
                                        className: "icon",
                                        children: (0, d.jsx)(n.Z, {})
                                    }), (0, d.jsx)("h3", {
                                        children: (0, d.jsx)(c.default, {
                                            href: "/feature-details",
                                            children: (0, d.jsx)("a", {
                                                children: "Team Management"
                                            })
                                        })
                                    }), (0, d.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna."
                                    })]
                                })
                            }), (0, d.jsx)("div", {
                                className: "col-lg-3 col-md-6",
                                children: (0, d.jsxs)("div", {
                                    className: "single-box bg-eb6b3d",
                                    children: [(0, d.jsx)("div", {
                                        className: "icon",
                                        children: (0, d.jsx)(r.Z, {})
                                    }), (0, d.jsx)("h3", {
                                        children: (0, d.jsx)(c.default, {
                                            href: "/feature-details",
                                            children: (0, d.jsx)("a", {
                                                children: "Access Controlled"
                                            })
                                        })
                                    }), (0, d.jsx)("p", {
                                        children: "Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna."
                                    })]
                                })
                            })]
                        })
                    })
                })
            }
        },
        22470: function(e, a, s) {
            s(67294);
            var i = s(41664),
                l = s(85893);
            a.Z = function() {
                return (0, l.jsxs)("div", {
                    className: "main-banner",
                    children: [(0, l.jsx)("div", {
                        className: "d-table",
                        children: (0, l.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, l.jsx)("div", {
                                className: "container",
                                children: (0, l.jsxs)("div", {
                                    className: "row h-100 justify-content-center align-items-center",
                                    children: [(0, l.jsx)("div", {
                                        className: "col-lg-5",
                                        children: (0, l.jsxs)("div", {
                                            className: "hero-content",
                                            children: [(0, l.jsx)("h1", {
                                                children: "Secure IT Solutions for a more secure environment"
                                            }), (0, l.jsx)("p", {
                                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida"
                                            }), (0, l.jsx)(i.default, {
                                                href: "/contact",
                                                children: (0, l.jsx)("a", {
                                                    className: "btn btn-primary",
                                                    children: "Get Started"
                                                })
                                            })]
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "col-lg-6 offset-lg-1",
                                        children: (0, l.jsxs)("div", {
                                            className: "banner-image",
                                            children: [(0, l.jsx)("img", {
                                                src: "/images/banner-image/man.png",
                                                className: "animate__animated animate__fadeInDown animate__delay-0.1s",
                                                alt: "man"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/code.png",
                                                className: "animate__animated animate__fadeInUp animate__delay-0.1s",
                                                alt: "code"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/carpet.png",
                                                className: "animate__animated animate__fadeInLeft animate__delay-0.1s",
                                                alt: "carpet"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/bin.png",
                                                className: "animate__animated animate__zoomIn animate__delay-0.1s",
                                                alt: "bin"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/book.png",
                                                className: "animate__animated animate__bounceIn animate__delay-0.1s",
                                                alt: "book"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/dekstop.png",
                                                className: "animate__animated animate__fadeInDown animate__delay-0.1s",
                                                alt: "dekstop"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/dot.png",
                                                className: "animate__animated animate__zoomIn animate__delay-0.1s",
                                                alt: "dot"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/flower-top-big.png",
                                                className: "animate__animated animate__fadeInUp animate__delay-0.1s",
                                                alt: "flower-top-big"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/flower-top.png",
                                                className: "animate__animated animate__rotateIn animate__delay-0.1s",
                                                alt: "flower-top"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/keyboard.png",
                                                className: "animate__animated animate__fadeInUp animate__delay-0.1s",
                                                alt: "keyboard"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/pen.png",
                                                className: "animate__animated animate__zoomIn animate__delay-0.1s",
                                                alt: "pen"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/table.png",
                                                className: "animate__animated animate__zoomIn animate__delay-0.1s",
                                                alt: "table"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/tea-cup.png",
                                                className: "animate__animated animate__fadeInLeft animate__delay-0.1s",
                                                alt: "tea-cup"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/headphone.png",
                                                className: "animate__animated animate__rollIn animate__delay-0.1",
                                                alt: "headphone"
                                            }), (0, l.jsx)("img", {
                                                src: "/images/banner-image/main-pic.png",
                                                className: "animate__animated animate__fadeInUp animate__delay-0.1",
                                                alt: "main-pic"
                                            })]
                                        })
                                    })]
                                })
                            })
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
                        className: "shape5",
                        children: (0, l.jsx)("img", {
                            src: "/images/shape5.png",
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
            }
        },
        23446: function(e, a, s) {
            s(67294);
            var i = s(41664),
                l = s(77662),
                n = s(22774),
                r = s(25471),
                c = s(73973),
                d = s(68032),
                t = s(77424),
                m = s(85893);
            a.Z = function() {
                return (0, m.jsx)("div", {
                    className: "features-area pt-80 pb-50 bg-f7fafd",
                    children: (0, m.jsxs)("div", {
                        className: "container",
                        children: [(0, m.jsxs)("div", {
                            className: "section-title",
                            children: [(0, m.jsx)("h2", {
                                children: "Our Features"
                            }), (0, m.jsx)("div", {
                                className: "bar"
                            }), (0, m.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "row",
                            children: [(0, m.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-features",
                                    children: [(0, m.jsx)("div", {
                                        className: "icon",
                                        children: (0, m.jsx)(l.Z, {})
                                    }), (0, m.jsx)("h3", {
                                        children: (0, m.jsx)(i.default, {
                                            href: "/feature-details",
                                            children: (0, m.jsx)("a", {
                                                children: "Incredible Infrastructure"
                                            })
                                        })
                                    }), (0, m.jsx)("p", {
                                        children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                    })]
                                })
                            }), (0, m.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-features",
                                    children: [(0, m.jsx)("div", {
                                        className: "icon",
                                        children: (0, m.jsx)(n.Z, {})
                                    }), (0, m.jsx)("h3", {
                                        children: (0, m.jsx)(i.default, {
                                            href: "/feature-details",
                                            children: (0, m.jsx)("a", {
                                                children: "Email Notifications"
                                            })
                                        })
                                    }), (0, m.jsx)("p", {
                                        children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                    })]
                                })
                            }), (0, m.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-features",
                                    children: [(0, m.jsx)("div", {
                                        className: "icon bg-c679e3",
                                        children: (0, m.jsx)(r.Z, {})
                                    }), (0, m.jsx)("h3", {
                                        children: (0, m.jsx)(i.default, {
                                            href: "/feature-details",
                                            children: (0, m.jsx)("a", {
                                                children: "Simple Dashboard"
                                            })
                                        })
                                    }), (0, m.jsx)("p", {
                                        children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                    })]
                                })
                            }), (0, m.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-features",
                                    children: [(0, m.jsx)("div", {
                                        className: "icon bg-c679e3",
                                        children: (0, m.jsx)(c.Z, {})
                                    }), (0, m.jsx)("h3", {
                                        children: (0, m.jsx)(i.default, {
                                            href: "/feature-details",
                                            children: (0, m.jsx)("a", {
                                                children: "Information Retrieval"
                                            })
                                        })
                                    }), (0, m.jsx)("p", {
                                        children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                    })]
                                })
                            }), (0, m.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-features",
                                    children: [(0, m.jsx)("div", {
                                        className: "icon bg-eb6b3d",
                                        children: (0, m.jsx)(d.Z, {})
                                    }), (0, m.jsx)("h3", {
                                        children: (0, m.jsx)(i.default, {
                                            href: "/feature-details",
                                            children: (0, m.jsx)("a", {
                                                children: "Drag & Drop Functionality"
                                            })
                                        })
                                    }), (0, m.jsx)("p", {
                                        children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                    })]
                                })
                            }), (0, m.jsx)("div", {
                                className: "col-lg-6 col-md-6",
                                children: (0, m.jsxs)("div", {
                                    className: "single-features",
                                    children: [(0, m.jsx)("div", {
                                        className: "icon bg-eb6b3d",
                                        children: (0, m.jsx)(t.Z, {})
                                    }), (0, m.jsx)("h3", {
                                        children: (0, m.jsx)(i.default, {
                                            href: "/feature-details",
                                            children: (0, m.jsx)("a", {
                                                children: "Deadline Reminders"
                                            })
                                        })
                                    }), (0, m.jsx)("p", {
                                        children: "Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        96190: function(e, a, s) {
            s(67294);
            var i = s(39046),
                l = s(96819),
                n = s(36694),
                r = s(7e4),
                c = s(8069),
                d = s(12610),
                t = s(22774),
                m = s(23296),
                o = s(53065),
                g = s(52006),
                h = s(89052),
                j = s(81060),
                x = s(73549),
                p = s(23939),
                u = s(85893);
            a.Z = function() {
                return (0, u.jsxs)(u.Fragment, {
                    children: [(0, u.jsx)("div", {
                        className: "services-area ptb-80 bg-f7fafd",
                        children: (0, u.jsx)("div", {
                            className: "container",
                            children: (0, u.jsxs)("div", {
                                className: "row justify-content-center align-items-center",
                                children: [(0, u.jsxs)("div", {
                                    className: "col-lg-6 col-md-12 services-content",
                                    children: [(0, u.jsxs)("div", {
                                        className: "section-title",
                                        children: [(0, u.jsx)("h2", {
                                            children: "Cloud Hosting Services"
                                        }), (0, u.jsx)("div", {
                                            className: "bar"
                                        }), (0, u.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "row",
                                        children: [(0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(i.Z, {}), " Cloud databases"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(l.Z, {}), " Website hosting"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(n.Z, {}), " File storage"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(r.Z, {}), " Forex trading"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(c.Z, {}), " File backups"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(d.Z, {}), " Remote desktop"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(t.Z, {}), " Email servers"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(m.Z, {}), " Hybrid cloud"]
                                            })
                                        })]
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "col-lg-6 col-md-12 services-right-image",
                                    children: [(0, u.jsx)("img", {
                                        src: "/images/services-right-image/book-self.png",
                                        className: "animate__animated animate__fadeInDown animate__delay-0.2s",
                                        alt: "book-self"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/box.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        "data-wow-delay": "0.6s",
                                        alt: "box"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/chair.png",
                                        className: "animate__animated animate__fadeInLeft animate__delay-0.2s",
                                        alt: "chair"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/cloud.png",
                                        className: "animate__animated animate__zoomIn animate__delay-0.2s",
                                        alt: "cloud"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/cup.png",
                                        className: "animate__animated animate__bounceIn animate__delay-0.2s",
                                        alt: "cup"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/flower-top.png",
                                        className: "animate__animated animate__fadeInDown animate__delay-0.2s",
                                        alt: "flower"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/head-phone.png",
                                        className: "animate__animated animate__zoomIn animate__delay-0.2s",
                                        alt: "head-phone"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/monitor.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "monitor"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/mug.png",
                                        className: "animate__animated animate__rotateIn animate__delay-0.2s",
                                        alt: "mug"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/table.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "table"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/tissue.png",
                                        className: "animate__animated animate__zoomIn animate__delay-0.2s",
                                        alt: "tissue"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/water-bottle.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "water-bottle"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/wifi.png",
                                        className: "animate__animated animate__fadeInLeft animate__delay-0.2s",
                                        "data-wow-delay": "0.6s",
                                        alt: "wifi"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/cercle-shape.png",
                                        className: "bg-image rotateme",
                                        alt: "shape"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-right-image/service-right-main-pic.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "main-pic"
                                    })]
                                })]
                            })
                        })
                    }), (0, u.jsx)("div", {
                        className: "services-area ptb-80",
                        children: (0, u.jsx)("div", {
                            className: "container",
                            children: (0, u.jsxs)("div", {
                                className: "row h-100 justify-content-center align-items-center",
                                children: [(0, u.jsxs)("div", {
                                    className: "col-lg-6 col-md-12 services-left-image",
                                    children: [(0, u.jsx)("img", {
                                        src: "/images/services-left-image/big-monitor.png",
                                        className: "animate__animated animate__fadeInDown animate__delay-0.2s",
                                        alt: "big-monitor"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-left-image/creative.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "creative"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-left-image/developer.png",
                                        className: "animate__animated animate__fadeInLeft animate__delay-0.2s",
                                        alt: "developer"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-left-image/flower-top.png",
                                        className: "animate__animated animate__fadeInLeft animate__delay-0.2s",
                                        "data-wow-delay": "0.6s",
                                        alt: "flower-top"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-left-image/small-monitor.png",
                                        className: "animate__animated animate__bounceIn animate__delay-0.2s",
                                        alt: "small-monitor"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-left-image/small-top.png",
                                        className: "animate__animated animate__fadeInDown animate__delay-0.2s",
                                        alt: "small-top"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-left-image/table.png",
                                        className: "animate__animated animate__zoomIn animate__delay-0.2s",
                                        alt: "table"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-left-image/target.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "target"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-left-image/cercle-shape.png",
                                        className: "bg-image rotateme",
                                        alt: "shape"
                                    }), (0, u.jsx)("img", {
                                        src: "/images/services-left-image/service-left-main-pic.png",
                                        className: "animate__animated animate__fadeInUp animate__delay-0.2s",
                                        alt: "main-pic"
                                    })]
                                }), (0, u.jsxs)("div", {
                                    className: "col-lg-6 col-md-12 services-content",
                                    children: [(0, u.jsxs)("div", {
                                        className: "section-title",
                                        children: [(0, u.jsx)("h2", {
                                            children: "Design & Development"
                                        }), (0, u.jsx)("div", {
                                            className: "bar"
                                        }), (0, u.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        })]
                                    }), (0, u.jsxs)("div", {
                                        className: "row",
                                        children: [(0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(o.Z, {}), " Responsive design"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(g.Z, {}), " React web development"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(h.Z, {}), " Android apps development"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(g.Z, {}), " Laravel web development"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(h.Z, {}), " iOS apps development"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(j.Z, {}), " UX/UI design"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(x.Z, {}), " E-commerce development"]
                                            })
                                        }), (0, u.jsx)("div", {
                                            className: "col-lg-6 col-md-6",
                                            children: (0, u.jsxs)("div", {
                                                className: "box",
                                                children: [(0, u.jsx)(p.Z, {}), " Print ready design"]
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
        },
        68032: function(e, a, s) {
            var i = s(67294),
                l = s(45697),
                n = s.n(l);

            function r() {
                return (r = Object.assign || function(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var s = arguments[a];
                        for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, a) {
                if (null == e) return {};
                var s, i, l = function(e, a) {
                    if (null == e) return {};
                    var s, i, l = {},
                        n = Object.keys(e);
                    for (i = 0; i < n.length; i++) s = n[i], a.indexOf(s) >= 0 || (l[s] = e[s]);
                    return l
                }(e, a);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < n.length; i++) s = n[i], a.indexOf(s) >= 0 || Object.prototype.propertyIsEnumerable.call(e, s) && (l[s] = e[s])
                }
                return l
            }
            var d = (0, i.forwardRef)((function(e, a) {
                var s = e.color,
                    l = void 0 === s ? "currentColor" : s,
                    n = e.size,
                    d = void 0 === n ? 24 : n,
                    t = c(e, ["color", "size"]);
                return i.createElement("svg", r({
                    ref: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: l,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, t), i.createElement("path", {
                    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                }), i.createElement("polyline", {
                    points: "3.27 6.96 12 12.01 20.73 6.96"
                }), i.createElement("line", {
                    x1: "12",
                    y1: "22.08",
                    x2: "12",
                    y2: "12"
                }))
            }));
            d.propTypes = {
                color: n().string,
                size: n().oneOfType([n().string, n().number])
            }, d.displayName = "Box", a.Z = d
        }
    }
]);