(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9335], {
        77251: function(e, s, r) {
            "use strict";
            r(67294);
            var n = r(85893);
            s.Z = function(e) {
                var s = e.pageTitle;
                return (0, n.jsxs)("div", {
                    className: "page-title-area",
                    children: [(0, n.jsx)("div", {
                        className: "d-table",
                        children: (0, n.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, n.jsx)("div", {
                                className: "container",
                                children: (0, n.jsx)("h2", {
                                    children: s
                                })
                            })
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape1",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape3",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape3.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape4",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape5",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape5.png",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape6 rotateme",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape7",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, n.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, n.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        29652: function(e, s, r) {
            "use strict";
            r.r(s), r.d(s, {
                default: function() {
                    return z
                }
            });
            var n = r(67294),
                a = r(37704),
                t = r(61646),
                c = r(77251),
                i = r(22774),
                l = r(64856),
                o = r(45697),
                d = r.n(o);

            function m() {
                return (m = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var r = arguments[s];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function h(e, s) {
                if (null == e) return {};
                var r, n, a = function(e, s) {
                    if (null == e) return {};
                    var r, n, a = {},
                        t = Object.keys(e);
                    for (n = 0; n < t.length; n++) r = t[n], s.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < t.length; n++) r = t[n], s.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var u = (0, n.forwardRef)((function(e, s) {
                var r = e.color,
                    a = void 0 === r ? "currentColor" : r,
                    t = e.size,
                    c = void 0 === t ? 24 : t,
                    i = h(e, ["color", "size"]);
                return n.createElement("svg", m({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: a,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, i), n.createElement("path", {
                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                }))
            }));
            u.propTypes = {
                color: d().string,
                size: d().oneOfType([d().string, d().number])
            }, u.displayName = "Phone";
            var p = u,
                j = r(85893),
                x = function() {
                    return (0, j.jsx)("div", {
                        className: "contact-info-area ptb-80",
                        children: (0, j.jsx)("div", {
                            className: "container",
                            children: (0, j.jsxs)("div", {
                                className: "row justify-content-center",
                                children: [(0, j.jsx)("div", {
                                    className: "col-lg-4 col-md-6 col-sm-6",
                                    children: (0, j.jsxs)("div", {
                                        className: "contact-info-box",
                                        children: [(0, j.jsx)("div", {
                                            className: "icon",
                                            children: (0, j.jsx)(i.Z, {})
                                        }), (0, j.jsx)("h3", {
                                            children: "Mail Here"
                                        }), (0, j.jsx)("p", {
                                            children: (0, j.jsx)("a", {
                                                href: "mailto:admin@startp.com",
                                                children: "admin@startp.com"
                                            })
                                        }), (0, j.jsx)("p", {
                                            children: (0, j.jsx)("a", {
                                                href: "mailto:info@startp.com",
                                                children: "info@startp.com"
                                            })
                                        })]
                                    })
                                }), (0, j.jsx)("div", {
                                    className: "col-lg-4 col-md-6 col-sm-6",
                                    children: (0, j.jsxs)("div", {
                                        className: "contact-info-box",
                                        children: [(0, j.jsx)("div", {
                                            className: "icon",
                                            children: (0, j.jsx)(l.Z, {})
                                        }), (0, j.jsx)("h3", {
                                            children: "Visit Here"
                                        }), (0, j.jsx)("p", {
                                            children: "27 Division St, New York, NY 10002, United States of America"
                                        })]
                                    })
                                }), (0, j.jsx)("div", {
                                    className: "col-lg-4 col-md-6 col-sm-6",
                                    children: (0, j.jsxs)("div", {
                                        className: "contact-info-box",
                                        children: [(0, j.jsx)("div", {
                                            className: "icon",
                                            children: (0, j.jsx)(p, {})
                                        }), (0, j.jsx)("h3", {
                                            children: "Call Here"
                                        }), (0, j.jsx)("p", {
                                            children: (0, j.jsx)("a", {
                                                href: "tel:+1234567890",
                                                children: "+123 456 7890"
                                            })
                                        }), (0, j.jsx)("p", {
                                            children: (0, j.jsx)("a", {
                                                href: "tel:+2414524526",
                                                children: "+241 452 4526"
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                f = function() {
                    return (0, j.jsx)(j.Fragment, {
                        children: (0, j.jsx)("iframe", {
                            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.183613366869!2d-73.99830468463497!3d40.71397427933168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a263f3910db%3A0xd6e6cdf32a6b11b1!2s27%20Division%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sbd!4v1614260467637!5m2!1sen!2sbd",
                            width: "100%",
                            height: "450",
                            allowFullScreen: "",
                            loading: "lazy"
                        })
                    })
                },
                v = r(30266),
                g = r(92809),
                b = r(809),
                N = r.n(b),
                y = r(42283),
                w = r(9669),
                O = r.n(w),
                k = r(86455),
                S = r.n(k),
                P = r(77630),
                C = r.n(P),
                E = r(14264);

            function Z(e, s) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    s && (n = n.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function _(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var r = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? Z(Object(r), !0).forEach((function(s) {
                        (0, g.Z)(e, s, r[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s))
                    }))
                }
                return e
            }
            var q = C()(S()),
                T = {
                    name: "",
                    email: "",
                    number: "",
                    subject: "",
                    text: ""
                },
                Y = function() {
                    var e = (0, n.useState)(T),
                        s = e[0],
                        r = e[1],
                        a = (0, y.cI)(),
                        t = a.register,
                        c = a.handleSubmit,
                        i = a.errors,
                        l = function(e) {
                            var n = e.target,
                                a = n.name,
                                t = n.value;
                            r((function(e) {
                                return _(_({}, e), {}, (0, g.Z)({}, a, t))
                            })), console.log(s)
                        },
                        o = function() {
                            var e = (0, v.Z)(N().mark((function e(n) {
                                var a, t, c, i, l, o, d;
                                return N().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, a = "".concat(E.Z, "/api/contact"), t = s.name, c = s.email, i = s.number, l = s.subject, o = s.text, d = {
                                                name: t,
                                                email: c,
                                                number: i,
                                                subject: l,
                                                text: o
                                            }, e.next = 6, O().post(a, d);
                                        case 6:
                                            console.log(a), r(T), q.fire({
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
                            return function(s) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, j.jsx)("div", {
                        className: "contact-area ptb-80",
                        children: (0, j.jsxs)("div", {
                            className: "container",
                            children: [(0, j.jsxs)("div", {
                                className: "section-title",
                                children: [(0, j.jsx)("h2", {
                                    children: "Get In Touch With Us"
                                }), (0, j.jsx)("div", {
                                    className: "bar"
                                }), (0, j.jsx)("p", {
                                    children: "Anything On your Mind. We\u2019ll Be Glad To Assist You!"
                                })]
                            }), (0, j.jsxs)("div", {
                                className: "row align-items-center",
                                children: [(0, j.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, j.jsx)("img", {
                                        src: "/images/contact-img.png",
                                        alt: "image"
                                    })
                                }), (0, j.jsx)("div", {
                                    className: "col-lg-6 col-md-12",
                                    children: (0, j.jsx)("form", {
                                        id: "contactForm",
                                        onSubmit: c(o),
                                        children: (0, j.jsxs)("div", {
                                            className: "row",
                                            children: [(0, j.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: (0, j.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [(0, j.jsx)("input", {
                                                        type: "text",
                                                        name: "name",
                                                        placeholder: "Your Name",
                                                        className: "form-control",
                                                        value: s.name,
                                                        onChange: l,
                                                        ref: t({
                                                            required: !0
                                                        })
                                                    }), (0, j.jsx)("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: i.name && "Name is required."
                                                    })]
                                                })
                                            }), (0, j.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: (0, j.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [(0, j.jsx)("input", {
                                                        type: "text",
                                                        name: "email",
                                                        placeholder: "Your email address",
                                                        className: "form-control",
                                                        value: s.email,
                                                        onChange: l,
                                                        ref: t({
                                                            required: !0,
                                                            pattern: /^\S+@\S+$/i
                                                        })
                                                    }), (0, j.jsx)("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: i.email && "Email is required."
                                                    })]
                                                })
                                            }), (0, j.jsx)("div", {
                                                className: "col-lg-6 col-md-6",
                                                children: (0, j.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [(0, j.jsx)("input", {
                                                        type: "text",
                                                        name: "number",
                                                        placeholder: "Your phone number",
                                                        className: "form-control",
                                                        value: s.number,
                                                        onChange: l,
                                                        ref: t({
                                                            required: !0
                                                        })
                                                    }), (0, j.jsx)("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: i.number && "Number is required."
                                                    })]
                                                })
                                            }), (0, j.jsx)("div", {
                                                className: "col-lg-6 col-md-6",
                                                children: (0, j.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [(0, j.jsx)("input", {
                                                        type: "text",
                                                        name: "subject",
                                                        placeholder: "Your Subject",
                                                        className: "form-control",
                                                        value: s.subject,
                                                        onChange: l,
                                                        ref: t({
                                                            required: !0
                                                        })
                                                    }), (0, j.jsx)("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: i.subject && "Subject is required."
                                                    })]
                                                })
                                            }), (0, j.jsx)("div", {
                                                className: "col-lg-12 col-md-12",
                                                children: (0, j.jsxs)("div", {
                                                    className: "form-group",
                                                    children: [(0, j.jsx)("textarea", {
                                                        name: "text",
                                                        cols: "30",
                                                        rows: "5",
                                                        placeholder: "Write your message...",
                                                        className: "form-control",
                                                        value: s.text,
                                                        onChange: l,
                                                        ref: t({
                                                            required: !0
                                                        })
                                                    }), (0, j.jsx)("div", {
                                                        className: "invalid-feedback",
                                                        style: {
                                                            display: "block"
                                                        },
                                                        children: i.text && "Message is required."
                                                    })]
                                                })
                                            }), (0, j.jsx)("div", {
                                                className: "col-lg-12 col-sm-12",
                                                children: (0, j.jsx)("button", {
                                                    type: "submit",
                                                    className: "btn btn-primary",
                                                    children: "Send Message"
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                },
                z = function() {
                    return (0, j.jsxs)(j.Fragment, {
                        children: [(0, j.jsx)(a.Z, {}), (0, j.jsx)(c.Z, {
                            pageTitle: "Contact Us"
                        }), (0, j.jsx)(x, {}), (0, j.jsx)(f, {}), (0, j.jsx)(Y, {}), (0, j.jsx)(t.Z, {})]
                    })
                }
        },
        14264: function(e, s) {
            "use strict";
            s.Z = "https://startp-react.envytheme.com"
        },
        93269: function(e, s, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact", function() {
                return r(29652)
            }])
        },
        73549: function(e, s, r) {
            "use strict";
            var n = r(67294),
                a = r(45697),
                t = r.n(a);

            function c() {
                return (c = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var r = arguments[s];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function i(e, s) {
                if (null == e) return {};
                var r, n, a = function(e, s) {
                    if (null == e) return {};
                    var r, n, a = {},
                        t = Object.keys(e);
                    for (n = 0; n < t.length; n++) r = t[n], s.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < t.length; n++) r = t[n], s.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
                }
                return a
            }
            var l = (0, n.forwardRef)((function(e, s) {
                var r = e.color,
                    a = void 0 === r ? "currentColor" : r,
                    t = e.size,
                    l = void 0 === t ? 24 : t,
                    o = i(e, ["color", "size"]);
                return n.createElement("svg", c({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: a,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, o), n.createElement("circle", {
                    cx: "9",
                    cy: "21",
                    r: "1"
                }), n.createElement("circle", {
                    cx: "20",
                    cy: "21",
                    r: "1"
                }), n.createElement("path", {
                    d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                }))
            }));
            l.propTypes = {
                color: t().string,
                size: t().oneOfType([t().string, t().number])
            }, l.displayName = "ShoppingCart", s.Z = l
        }
    },
    function(e) {
        e.O(0, [1736, 1656, 4773, 9774, 2888, 179], (function() {
            return s = 93269, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);