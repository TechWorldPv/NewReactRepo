"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8430], {
        98894: function(e, s, a) {
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
        68410: function(e, s, a) {
            var i = a(92809),
                l = a(80318),
                c = a(67294),
                t = a(5152),
                n = a(51591),
                r = a(20706),
                d = a(19318),
                h = a(82126),
                m = (a(41664), a(85893));

            function j(e, s) {
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
                    s % 2 ? j(Object(a), !0).forEach((function(s) {
                        (0, i.Z)(e, s, a[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(a, s))
                    }))
                }
                return e
            }
            var o = (0, t.default)((function() {
                    return a.e(5518).then(a.t.bind(a, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/Common/Team.js -> react-owl-carousel3"]
                    }
                }),
                g = {
                    items: 5,
                    loop: !0,
                    nav: !1,
                    dots: !0,
                    margin: 30,
                    autoplay: !1,
                    smartSpeed: 1e3,
                    responsive: {
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        1200: {
                            items: 4
                        },
                        1500: {
                            items: 5
                        }
                    }
                };
            s.Z = function() {
                var e = c.useState(!1),
                    s = (0, l.Z)(e, 2),
                    a = s[0],
                    i = s[1];
                return c.useEffect((function() {
                    i(!0)
                }), []), (0, m.jsxs)("div", {
                    className: "team-area ptb-80 bg-f9f6f6",
                    children: [(0, m.jsx)("div", {
                        className: "container",
                        children: (0, m.jsxs)("div", {
                            className: "section-title",
                            children: [(0, m.jsx)("h2", {
                                children: "Our Awesome Team"
                            }), (0, m.jsx)("div", {
                                className: "bar"
                            }), (0, m.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        })
                    }), a ? (0, m.jsxs)(o, x(x({
                        className: "team-slider owl-carousel owl-theme owl-theme-style"
                    }, g), {}, {
                        children: [(0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team1.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Josh Buttler"
                                    }), (0, m.jsx)("span", {
                                        children: "CEO & Founder"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team2.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Alex Maxwel"
                                    }), (0, m.jsx)("span", {
                                        children: "Marketing Manager"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team3.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Janny Cotller"
                                    }), (0, m.jsx)("span", {
                                        children: "Web Developer"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team4.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Jason Statham"
                                    }), (0, m.jsx)("span", {
                                        children: "UX/UI Designer"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team5.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Corey Anderson"
                                    }), (0, m.jsx)("span", {
                                        children: "Project Manager"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team1.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Josh Buttler"
                                    }), (0, m.jsx)("span", {
                                        children: "CEO & Founder"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team2.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Alex Maxwel"
                                    }), (0, m.jsx)("span", {
                                        children: "Marketing Manager"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team3.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Janny Cotller"
                                    }), (0, m.jsx)("span", {
                                        children: "Web Developer"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team4.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Jason Statham"
                                    }), (0, m.jsx)("span", {
                                        children: "UX/UI Designer"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        }), (0, m.jsxs)("div", {
                            className: "single-team",
                            children: [(0, m.jsx)("div", {
                                className: "team-image",
                                children: (0, m.jsx)("img", {
                                    src: "/images/team-image/team5.jpg",
                                    alt: "image"
                                })
                            }), (0, m.jsxs)("div", {
                                className: "team-content",
                                children: [(0, m.jsxs)("div", {
                                    className: "team-info",
                                    children: [(0, m.jsx)("h3", {
                                        children: "Corey Anderson"
                                    }), (0, m.jsx)("span", {
                                        children: "Project Manager"
                                    })]
                                }), (0, m.jsxs)("ul", {
                                    children: [(0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.facebook.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(n.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.twitter.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(r.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.linkedin.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(d.Z, {})
                                        })
                                    }), (0, m.jsx)("li", {
                                        children: (0, m.jsx)("a", {
                                            href: "https://www.gitlab.com/",
                                            target: "_blank",
                                            children: (0, m.jsx)(h.Z, {})
                                        })
                                    })]
                                }), (0, m.jsx)("p", {
                                    children: "Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. "
                                })]
                            })]
                        })]
                    })) : ""]
                })
            }
        }
    }
]);