(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7746], {
        77251: function(e, i, s) {
            "use strict";
            s(67294);
            var a = s(85893);
            i.Z = function(e) {
                var i = e.pageTitle;
                return (0, a.jsxs)("div", {
                    className: "page-title-area",
                    children: [(0, a.jsx)("div", {
                        className: "d-table",
                        children: (0, a.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("h2", {
                                    children: i
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
        99263: function(e, i, s) {
            "use strict";
            s.r(i), s.d(i, {
                default: function() {
                    return k
                }
            });
            var a = s(67294),
                r = s(37704),
                t = s(61646),
                n = s(77251),
                l = s(30266),
                o = s(92809),
                d = s(809),
                c = s.n(d),
                u = s(42283),
                m = s(9669),
                p = s.n(m),
                h = s(86455),
                j = s.n(h),
                x = s(77630),
                g = s.n(x),
                b = s(14264),
                v = s(85893);

            function f(e, i) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    i && (a = a.filter((function(i) {
                        return Object.getOwnPropertyDescriptor(e, i).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function N(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var s = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(s), !0).forEach((function(i) {
                        (0, o.Z)(e, i, s[i])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : f(Object(s)).forEach((function(i) {
                        Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(s, i))
                    }))
                }
                return e
            }
            var q = g()(j()),
                y = {
                    name: "",
                    email: "",
                    number: "",
                    subject: "",
                    text: ""
                },
                O = function() {
                    var e = (0, a.useState)(y),
                        i = e[0],
                        s = e[1],
                        r = (0, u.cI)(),
                        t = r.register,
                        n = r.handleSubmit,
                        d = r.errors,
                        m = function(e) {
                            var a = e.target,
                                r = a.name,
                                t = a.value;
                            s((function(e) {
                                return N(N({}, e), {}, (0, o.Z)({}, r, t))
                            })), console.log(i)
                        },
                        h = function() {
                            var e = (0, l.Z)(c().mark((function e(a) {
                                var r, t, n, l, o, d, u;
                                return c().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = "".concat(b.Z, "/api/contact"), t = i.name, n = i.email, l = i.number, o = i.subject, d = i.text, u = {
                                                name: t,
                                                email: n,
                                                number: l,
                                                subject: o,
                                                text: d
                                            }, e.next = 6, p().post(r, u);
                                        case 6:
                                            console.log(r), s(y), q.fire({
                                                title: "Congratulations!",
                                                text: "Your message was successfully send and will back to you soon",
                                                icon: "success",
                                                timer: 2e3,
                                                timerProgressBar: !0,
                                                showConfirmButton: !1
                                            }), e.next = 14;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e.catch(0), console.log(e.t0);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 11]
                                ])
                            })));
                            return function(i) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, v.jsxs)("div", {
                        className: "faq-contact",
                        children: [(0, v.jsx)("h3", {
                            children: "Ask Your Question"
                        }), (0, v.jsx)("form", {
                            id: "contactForm",
                            onSubmit: n(h),
                            children: (0, v.jsxs)("div", {
                                className: "row",
                                children: [(0, v.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: (0, v.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, v.jsx)("input", {
                                            type: "text",
                                            name: "name",
                                            placeholder: "Your Name",
                                            className: "form-control",
                                            value: i.name,
                                            onChange: m,
                                            ref: t({
                                                required: !0
                                            })
                                        }), (0, v.jsx)("div", {
                                            className: "invalid-feedback",
                                            style: {
                                                display: "block"
                                            },
                                            children: d.name && "Name is required."
                                        })]
                                    })
                                }), (0, v.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: (0, v.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, v.jsx)("input", {
                                            type: "text",
                                            name: "email",
                                            placeholder: "Your email address",
                                            className: "form-control",
                                            value: i.email,
                                            onChange: m,
                                            ref: t({
                                                required: !0,
                                                pattern: /^\S+@\S+$/i
                                            })
                                        }), (0, v.jsx)("div", {
                                            className: "invalid-feedback",
                                            style: {
                                                display: "block"
                                            },
                                            children: d.email && "Email is required."
                                        })]
                                    })
                                }), (0, v.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: (0, v.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, v.jsx)("input", {
                                            type: "text",
                                            name: "number",
                                            placeholder: "Your phone number",
                                            className: "form-control",
                                            value: i.number,
                                            onChange: m,
                                            ref: t({
                                                required: !0
                                            })
                                        }), (0, v.jsx)("div", {
                                            className: "invalid-feedback",
                                            style: {
                                                display: "block"
                                            },
                                            children: d.number && "Number is required."
                                        })]
                                    })
                                }), (0, v.jsx)("div", {
                                    className: "col-lg-6 col-md-6",
                                    children: (0, v.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, v.jsx)("input", {
                                            type: "text",
                                            name: "subject",
                                            placeholder: "Your Subject",
                                            className: "form-control",
                                            value: i.subject,
                                            onChange: m,
                                            ref: t({
                                                required: !0
                                            })
                                        }), (0, v.jsx)("div", {
                                            className: "invalid-feedback",
                                            style: {
                                                display: "block"
                                            },
                                            children: d.subject && "Subject is required."
                                        })]
                                    })
                                }), (0, v.jsx)("div", {
                                    className: "col-lg-12 col-md-12",
                                    children: (0, v.jsxs)("div", {
                                        className: "form-group",
                                        children: [(0, v.jsx)("textarea", {
                                            name: "text",
                                            cols: "30",
                                            rows: "6",
                                            placeholder: "Write your message...",
                                            className: "form-control",
                                            value: i.text,
                                            onChange: m,
                                            ref: t({
                                                required: !0
                                            })
                                        }), (0, v.jsx)("div", {
                                            className: "invalid-feedback",
                                            style: {
                                                display: "block"
                                            },
                                            children: d.text && "Message is required."
                                        })]
                                    })
                                }), (0, v.jsx)("div", {
                                    className: "col-lg-12 col-sm-12 text-center",
                                    children: (0, v.jsx)("button", {
                                        type: "submit",
                                        className: "btn btn-primary",
                                        children: "Send Message"
                                    })
                                })]
                            })
                        })]
                    })
                },
                w = s(11876),
                k = function() {
                    return (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)(r.Z, {}), (0, v.jsx)(n.Z, {
                            pageTitle: "FAQ"
                        }), (0, v.jsx)("div", {
                            className: "faq-area ptb-80",
                            children: (0, v.jsxs)("div", {
                                className: "container",
                                children: [(0, v.jsx)("div", {
                                    className: "faq-accordion",
                                    children: (0, v.jsxs)(w.UQ, {
                                        allowZeroExpanded: !0,
                                        preExpanded: ["a"],
                                        children: [(0, v.jsxs)(w.Qd, {
                                            uuid: "a",
                                            children: [(0, v.jsx)(w.Ol, {
                                                children: (0, v.jsx)(w.on, {
                                                    children: (0, v.jsx)("span", {
                                                        children: "How do permissions work in Google Play Instant?"
                                                    })
                                                })
                                            }), (0, v.jsx)(w.Mt, {
                                                children: (0, v.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })]
                                        }), (0, v.jsxs)(w.Qd, {
                                            uuid: "b",
                                            children: [(0, v.jsx)(w.Ol, {
                                                children: (0, v.jsx)(w.on, {
                                                    children: (0, v.jsx)("span", {
                                                        children: "Is Smart Lock required for instant apps?"
                                                    })
                                                })
                                            }), (0, v.jsx)(w.Mt, {
                                                children: (0, v.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })]
                                        }), (0, v.jsxs)(w.Qd, {
                                            uuid: "c",
                                            children: [(0, v.jsx)(w.Ol, {
                                                children: (0, v.jsx)(w.on, {
                                                    children: (0, v.jsx)("span", {
                                                        children: "Can I have multiple activities in a single feature?"
                                                    })
                                                })
                                            }), (0, v.jsx)(w.Mt, {
                                                children: (0, v.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })]
                                        }), (0, v.jsxs)(w.Qd, {
                                            uuid: "d",
                                            children: [(0, v.jsx)(w.Ol, {
                                                children: (0, v.jsx)(w.on, {
                                                    children: (0, v.jsx)("span", {
                                                        children: "Can I share resources between features?"
                                                    })
                                                })
                                            }), (0, v.jsx)(w.Mt, {
                                                children: (0, v.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })]
                                        }), (0, v.jsxs)(w.Qd, {
                                            uuid: "e",
                                            children: [(0, v.jsx)(w.Ol, {
                                                children: (0, v.jsx)(w.on, {
                                                    children: (0, v.jsx)("span", {
                                                        children: "Is multidex supported for instant apps?"
                                                    })
                                                })
                                            }), (0, v.jsx)(w.Mt, {
                                                children: (0, v.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })]
                                        }), (0, v.jsxs)(w.Qd, {
                                            uuid: "f",
                                            children: [(0, v.jsx)(w.Ol, {
                                                children: (0, v.jsx)(w.on, {
                                                    children: (0, v.jsx)("span", {
                                                        children: "Can I share resources between features?"
                                                    })
                                                })
                                            }), (0, v.jsx)(w.Mt, {
                                                children: (0, v.jsx)("p", {
                                                    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua."
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, v.jsx)(O, {})]
                            })
                        }), (0, v.jsx)(t.Z, {})]
                    })
                }
        },
        14264: function(e, i) {
            "use strict";
            i.Z = "https://startp-react.envytheme.com"
        },
        85770: function(e, i, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/faq", function() {
                return s(99263)
            }])
        }
    },
    function(e) {
        e.O(0, [1736, 4444, 1656, 4773, 9774, 2888, 179], (function() {
            return i = 85770, e(e.s = i);
            var i
        }));
        var i = e.O();
        _N_E = i
    }
]);