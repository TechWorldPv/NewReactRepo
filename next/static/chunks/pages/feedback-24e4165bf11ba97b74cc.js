(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8862], {
        44489: function(e, s, i) {
            "use strict";
            var a = i(68216),
                t = i(25997),
                r = i(14695),
                n = i(13444),
                c = i(30268),
                l = i(92953),
                o = i(92809),
                m = i(67294),
                d = i(46066),
                u = i(45169),
                p = i(82371),
                g = i(85893);

            function h(e, s) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    s && (a = a.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), i.push.apply(i, a)
                }
                return i
            }

            function j(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? h(Object(i), !0).forEach((function(s) {
                        (0, o.Z)(e, s, i[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : h(Object(i)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s))
                    }))
                }
                return e
            }

            function v(e) {
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
                    var i, a = (0, l.Z)(e);
                    if (s) {
                        var t = (0, l.Z)(this).constructor;
                        i = Reflect.construct(a, arguments, t)
                    } else i = a.apply(this, arguments);
                    return (0, c.Z)(this, i)
                }
            }
            var x = function(e) {
                    var s = e.onClick;
                    return (0, g.jsx)("button", {
                        className: "next-arrow slick-arrow",
                        onClick: s,
                        children: (0, g.jsx)(u.Z, {})
                    })
                },
                f = function(e) {
                    var s = e.onClick;
                    return (0, g.jsx)("button", {
                        className: "prev-arrow slick-arrow",
                        onClick: s,
                        children: (0, g.jsx)(p.Z, {})
                    })
                },
                b = function(e) {
                    (0, n.Z)(i, e);
                    var s = v(i);

                    function i() {
                        var e;
                        (0, a.Z)(this, i);
                        for (var t = arguments.length, n = new Array(t), c = 0; c < t; c++) n[c] = arguments[c];
                        return e = s.call.apply(s, [this].concat(n)), (0, o.Z)((0, r.Z)(e), "state", {
                            imagesSlider: null,
                            thumbnailsSlider: null,
                            oldSlide: 0,
                            activeSlide: 0,
                            activeSlide2: 0
                        }), (0, o.Z)((0, r.Z)(e), "renderSliderFullContent", (function() {
                            return y.map((function(e) {
                                var s = e.name,
                                    i = e.profession,
                                    a = e.image,
                                    t = e.content;
                                return (0, g.jsx)("div", {
                                    children: (0, g.jsx)("div", {
                                        className: "item",
                                        children: (0, g.jsxs)("div", {
                                            className: "single-feedback",
                                            children: [(0, g.jsx)("div", {
                                                className: "client-img",
                                                children: (0, g.jsx)("img", {
                                                    src: a,
                                                    alt: "image"
                                                })
                                            }), (0, g.jsx)("h3", {
                                                children: s
                                            }), (0, g.jsx)("span", {
                                                children: i
                                            }), (0, g.jsx)("p", {
                                                children: t
                                            })]
                                        })
                                    })
                                }, s)
                            }))
                        })), (0, o.Z)((0, r.Z)(e), "renderSliderImages", (function() {
                            return y.map((function(e) {
                                var s = e.name,
                                    i = e.image;
                                return (0, g.jsx)("div", {
                                    children: (0, g.jsx)("div", {
                                        className: "item",
                                        children: (0, g.jsx)("div", {
                                            className: "img-fill",
                                            children: (0, g.jsx)("img", {
                                                src: i,
                                                alt: "client"
                                            })
                                        })
                                    })
                                }, s)
                            }))
                        })), e
                    }
                    return (0, t.Z)(i, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                imagesSlider: this.slider1,
                                thumbnailsSlider: this.slider2
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, s = this,
                                i = (e = {
                                    speed: 100,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    cssEase: "linear",
                                    fade: !0,
                                    autoplay: !0,
                                    draggable: !0,
                                    asNavFor: this.state.thumbnailsSlider
                                }, (0, o.Z)(e, "draggable", !1), (0, o.Z)(e, "arrows", !1), (0, o.Z)(e, "nextArrow", !1), (0, o.Z)(e, "prevArrow", !1), e),
                                a = {
                                    speed: 300,
                                    slidesToShow: 5,
                                    slidesToScroll: 1,
                                    cssEase: "linear",
                                    autoplay: !0,
                                    centerMode: !0,
                                    draggable: !1,
                                    focusOnSelect: !0,
                                    asNavFor: this.state.imagesSlider,
                                    nextArrow: (0, g.jsx)(x, {}),
                                    prevArrow: (0, g.jsx)(f, {}),
                                    beforeChange: function(e, i) {
                                        return s.setState({
                                            oldSlide: e,
                                            activeSlide: i
                                        })
                                    },
                                    afterChange: function(e) {
                                        return s.setState({
                                            activeSlide2: e
                                        })
                                    }
                                };
                            return (0, g.jsxs)("section", {
                                className: "feedback-area ptb-80 bg-f7fafd",
                                children: [(0, g.jsxs)("div", {
                                    className: "container",
                                    children: [(0, g.jsxs)("div", {
                                        className: "section-title",
                                        children: [(0, g.jsx)("h2", {
                                            children: "What users Saying"
                                        }), (0, g.jsx)("div", {
                                            className: "bar"
                                        }), (0, g.jsx)("p", {
                                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        })]
                                    }), (0, g.jsxs)("div", {
                                        className: "feedback-slides",
                                        children: [(0, g.jsx)("div", {
                                            className: "client-feedback",
                                            children: (0, g.jsx)("div", {
                                                children: (0, g.jsx)(d.Z, j(j({
                                                    ref: function(e) {
                                                        return s.slider1 = e
                                                    }
                                                }, i), {}, {
                                                    children: this.renderSliderFullContent()
                                                }))
                                            })
                                        }), (0, g.jsx)("div", {
                                            className: "client-thumbnails",
                                            children: (0, g.jsx)("div", {
                                                children: (0, g.jsx)(d.Z, j(j({
                                                    ref: function(e) {
                                                        return s.slider2 = e
                                                    }
                                                }, a), {}, {
                                                    children: this.renderSliderImages()
                                                }))
                                            })
                                        })]
                                    })]
                                }), (0, g.jsx)("div", {
                                    className: "shape1",
                                    children: (0, g.jsx)("img", {
                                        src: "/images/shape1.png",
                                        alt: "shape"
                                    })
                                }), (0, g.jsx)("div", {
                                    className: "shape2 rotateme",
                                    children: (0, g.jsx)("img", {
                                        src: "/images/shape2.svg",
                                        alt: "shape"
                                    })
                                }), (0, g.jsx)("div", {
                                    className: "shape4",
                                    children: (0, g.jsx)("img", {
                                        src: "/images/shape4.svg",
                                        alt: "shape"
                                    })
                                }), (0, g.jsx)("div", {
                                    className: "shape5",
                                    children: (0, g.jsx)("img", {
                                        src: "/images/shape5.png",
                                        alt: "shape"
                                    })
                                }), (0, g.jsx)("div", {
                                    className: "shape6 rotateme",
                                    children: (0, g.jsx)("img", {
                                        src: "/images/shape4.svg",
                                        alt: "shape"
                                    })
                                }), (0, g.jsx)("div", {
                                    className: "shape7",
                                    children: (0, g.jsx)("img", {
                                        src: "/images/shape4.svg",
                                        alt: "shape"
                                    })
                                }), (0, g.jsx)("div", {
                                    className: "shape8 rotateme",
                                    children: (0, g.jsx)("img", {
                                        src: "/images/shape2.svg",
                                        alt: "shape"
                                    })
                                })]
                            })
                        }
                    }]), i
                }(m.Component),
                y = [{
                    name: "David Gale",
                    profession: "Web Developer",
                    image: "/images/client-image/client2.jpg",
                    content: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    name: "Matt Damon",
                    profession: "Software Engineer",
                    image: "/images/client-image/client4.jpg",
                    content: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    name: "Nicky Parsons",
                    profession: "Fictional Character",
                    image: "/images/client-image/client1.jpg",
                    content: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    name: "Jason Momoa",
                    profession: "American Actor",
                    image: "/images/client-image/client5.jpg",
                    content: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    name: "Gennady Korotkevich",
                    profession: "Sport Programmer",
                    image: "/images/client-image/client3.jpg",
                    content: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    name: "Petr Mitrichev",
                    profession: "Russian Programmer",
                    image: "/images/client-image/client3.jpg",
                    content: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    name: "Reid W. Barton",
                    profession: "Mathematics",
                    image: "/images/client-image/client2.jpg",
                    content: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }, {
                    name: "Lisa Sauermann",
                    profession: "Mathematician",
                    image: "/images/client-image/client1.jpg",
                    content: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }];
            s.Z = b
        },
        12048: function(e, s, i) {
            "use strict";
            var a = i(92809),
                t = i(80318),
                r = i(67294),
                n = i(5152),
                c = i(85893);

            function l(e, s) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    s && (a = a.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), i.push.apply(i, a)
                }
                return i
            }

            function o(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? l(Object(i), !0).forEach((function(s) {
                        (0, a.Z)(e, s, i[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s))
                    }))
                }
                return e
            }
            var m = (0, n.default)((function() {
                    return i.e(5518).then(i.t.bind(i, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/Common/FeedbackStyleFive.js -> react-owl-carousel3"]
                    }
                }),
                d = {
                    loop: !1,
                    nav: !1,
                    smartSpeed: 1e3,
                    autoplayTimeout: 5e3,
                    dots: !0,
                    autoplayHoverPause: !0,
                    autoplay: !0,
                    items: 1
                };
            s.Z = function() {
                var e = r.useState(!1),
                    s = (0, t.Z)(e, 2),
                    i = s[0],
                    a = s[1];
                return r.useEffect((function() {
                    a(!0)
                }), []), (0, c.jsx)("div", {
                    className: "agency-portfolio-feedback-area ptb-80",
                    children: (0, c.jsx)("div", {
                        className: "container",
                        children: i ? (0, c.jsxs)(m, o(o({
                            className: "agency-portfolio-feedback-slides owl-carousel owl-theme"
                        }, d), {}, {
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
        73007: function(e, s, i) {
            "use strict";
            var a = i(92809),
                t = i(80318),
                r = i(67294),
                n = i(68694),
                c = i.n(n),
                l = i(12575),
                o = i(85893);

            function m(e, s) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    s && (a = a.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), i.push.apply(i, a)
                }
                return i
            }

            function d(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? m(Object(i), !0).forEach((function(s) {
                        (0, a.Z)(e, s, i[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s))
                    }))
                }
                return e
            }
            var u = {
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
                var e = r.useState(!1),
                    s = (0, t.Z)(e, 2),
                    i = s[0],
                    a = s[1];
                return r.useEffect((function() {
                    a(!0)
                }), []), (0, o.jsxs)("div", {
                    className: "ml-feedback-area ptb-80",
                    children: [(0, o.jsxs)("div", {
                        className: "container",
                        children: [(0, o.jsxs)("div", {
                            className: "section-title",
                            children: [(0, o.jsx)("h2", {
                                children: "Our Clients Feedback"
                            }), (0, o.jsx)("div", {
                                className: "bar"
                            }), (0, o.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        }), i ? (0, o.jsxs)(c(), d(d({
                            className: "ml-feedback-slides owl-carousel owl-theme"
                        }, u), {}, {
                            children: [(0, o.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [(0, o.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, o.jsx)("img", {
                                        src: "/images/client-image/client1.jpg",
                                        alt: "image"
                                    }), (0, o.jsx)("h3", {
                                        children: "Sarah Taylor"
                                    }), (0, o.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                }), (0, o.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, o.jsxs)("div", {
                                    className: "rating",
                                    children: [(0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {})]
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [(0, o.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, o.jsx)("img", {
                                        src: "/images/client-image/client2.jpg",
                                        alt: "image"
                                    }), (0, o.jsx)("h3", {
                                        children: "Steven Smith"
                                    }), (0, o.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                }), (0, o.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, o.jsxs)("div", {
                                    className: "rating",
                                    children: [(0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {})]
                                })]
                            }), (0, o.jsxs)("div", {
                                className: "single-ml-feedback-item",
                                children: [(0, o.jsxs)("div", {
                                    className: "client-info",
                                    children: [(0, o.jsx)("img", {
                                        src: "/images/client-image/client3.jpg",
                                        alt: "image"
                                    }), (0, o.jsx)("h3", {
                                        children: "James Eva"
                                    }), (0, o.jsx)("span", {
                                        children: "CEO at Envato"
                                    })]
                                }), (0, o.jsx)("p", {
                                    children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!"
                                }), (0, o.jsxs)("div", {
                                    className: "rating",
                                    children: [(0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {}), (0, o.jsx)(l.Z, {})]
                                })]
                            })]
                        })) : ""]
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
        },
        21479: function(e, s, i) {
            "use strict";
            var a = i(92809),
                t = i(80318),
                r = i(67294),
                n = i(5152),
                c = i(12575),
                l = i(85893);

            function o(e, s) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    s && (a = a.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), i.push.apply(i, a)
                }
                return i
            }

            function m(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? o(Object(i), !0).forEach((function(s) {
                        (0, a.Z)(e, s, i[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s))
                    }))
                }
                return e
            }
            var d = (0, n.default)((function() {
                    return i.e(5518).then(i.t.bind(i, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/Common/FeedbackStyleThree.js -> react-owl-carousel3"]
                    }
                }),
                u = {
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
                var e = r.useState(!1),
                    s = (0, t.Z)(e, 2),
                    i = s[0],
                    a = s[1];
                return r.useEffect((function() {
                    a(!0)
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
                        }), i ? (0, l.jsxs)(d, m(m({
                            className: "ml-feedback-slides owl-carousel owl-theme"
                        }, u), {}, {
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
        76270: function(e, s, i) {
            "use strict";
            var a = i(92809),
                t = i(80318),
                r = i(67294),
                n = i(5152),
                c = i(85893);

            function l(e, s) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    s && (a = a.filter((function(s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), i.push.apply(i, a)
                }
                return i
            }

            function o(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var i = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? l(Object(i), !0).forEach((function(s) {
                        (0, a.Z)(e, s, i[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : l(Object(i)).forEach((function(s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s))
                    }))
                }
                return e
            }
            var m = (0, n.default)((function() {
                    return i.e(5518).then(i.t.bind(i, 68694, 23))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [68694]
                        },
                        modules: ["../components/Common/FeedbackStyleTwo.js -> react-owl-carousel3"]
                    }
                }),
                d = {
                    loop: !1,
                    nav: !1,
                    dots: !0,
                    autoplay: !0,
                    smartSpeed: 1e3,
                    autoplayTimeout: 5e3,
                    items: 1
                };
            s.Z = function() {
                var e = r.useState(!1),
                    s = (0, t.Z)(e, 2),
                    i = s[0],
                    a = s[1];
                return r.useEffect((function() {
                    a(!0)
                }), []), (0, c.jsxs)("div", {
                    className: "feedback-area ptb-80",
                    children: [(0, c.jsxs)("div", {
                        className: "container",
                        children: [(0, c.jsxs)("div", {
                            className: "section-title",
                            children: [(0, c.jsx)("h2", {
                                children: "What users Saying"
                            }), (0, c.jsx)("div", {
                                className: "bar"
                            }), (0, c.jsx)("p", {
                                children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            })]
                        }), i ? (0, c.jsxs)(m, o(o({
                            className: "testimonials-slides owl-carousel owl-theme"
                        }, d), {}, {
                            children: [(0, c.jsxs)("div", {
                                className: "single-feedback-item",
                                children: [(0, c.jsxs)("div", {
                                    className: "client-info align-items-center",
                                    children: [(0, c.jsx)("div", {
                                        className: "image",
                                        children: (0, c.jsx)("img", {
                                            src: "/images/client-image/client1.jpg",
                                            alt: "image"
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "title",
                                        children: [(0, c.jsx)("h3", {
                                            children: "Steve Lucy"
                                        }), (0, c.jsx)("span", {
                                            children: "Lead Developer at Envato"
                                        })]
                                    })]
                                }), (0, c.jsx)("p", {
                                    children: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, c.jsxs)("div", {
                                className: "single-feedback-item",
                                children: [(0, c.jsxs)("div", {
                                    className: "client-info align-items-center",
                                    children: [(0, c.jsx)("div", {
                                        className: "image",
                                        children: (0, c.jsx)("img", {
                                            src: "/images/client-image/client2.jpg",
                                            alt: "image"
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "title",
                                        children: [(0, c.jsx)("h3", {
                                            children: "David Luiz"
                                        }), (0, c.jsx)("span", {
                                            children: "Lead Developer at Envato"
                                        })]
                                    })]
                                }), (0, c.jsx)("p", {
                                    children: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            }), (0, c.jsxs)("div", {
                                className: "single-feedback-item",
                                children: [(0, c.jsxs)("div", {
                                    className: "client-info align-items-center",
                                    children: [(0, c.jsx)("div", {
                                        className: "image",
                                        children: (0, c.jsx)("img", {
                                            src: "/images/client-image/client3.jpg",
                                            alt: "image"
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "title",
                                        children: [(0, c.jsx)("h3", {
                                            children: "Marta Smith"
                                        }), (0, c.jsx)("span", {
                                            children: "Lead Developer at Envato"
                                        })]
                                    })]
                                }), (0, c.jsx)("p", {
                                    children: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                })]
                            })]
                        })) : ""]
                    }), (0, c.jsx)("div", {
                        className: "shape1",
                        children: (0, c.jsx)("img", {
                            src: "/images/shape1.png",
                            alt: "shape"
                        })
                    }), (0, c.jsx)("div", {
                        className: "shape2 rotateme",
                        children: (0, c.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    }), (0, c.jsx)("div", {
                        className: "shape4",
                        children: (0, c.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, c.jsx)("div", {
                        className: "shape5",
                        children: (0, c.jsx)("img", {
                            src: "/images/shape5.png",
                            alt: "shape"
                        })
                    }), (0, c.jsx)("div", {
                        className: "shape6 rotateme",
                        children: (0, c.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, c.jsx)("div", {
                        className: "shape7",
                        children: (0, c.jsx)("img", {
                            src: "/images/shape4.svg",
                            alt: "shape"
                        })
                    }), (0, c.jsx)("div", {
                        className: "shape8 rotateme",
                        children: (0, c.jsx)("img", {
                            src: "/images/shape2.svg",
                            alt: "shape"
                        })
                    })]
                })
            }
        },
        77251: function(e, s, i) {
            "use strict";
            i(67294);
            var a = i(85893);
            s.Z = function(e) {
                var s = e.pageTitle;
                return (0, a.jsxs)("div", {
                    className: "page-title-area",
                    children: [(0, a.jsx)("div", {
                        className: "d-table",
                        children: (0, a.jsx)("div", {
                            className: "d-table-cell",
                            children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("h2", {
                                    children: s
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
        57605: function(e, s, i) {
            "use strict";
            i.r(s);
            i(67294);
            var a = i(37704),
                t = i(61646),
                r = i(77251),
                n = i(44489),
                c = i(76270),
                l = i(21479),
                o = i(73007),
                m = i(12048),
                d = i(85893);
            s.default = function() {
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(a.Z, {}), (0, d.jsx)(r.Z, {
                        pageTitle: "Feedback or Testimonials"
                    }), (0, d.jsx)(n.Z, {}), (0, d.jsx)(c.Z, {}), (0, d.jsx)(l.Z, {}), (0, d.jsx)(o.Z, {}), (0, d.jsx)(m.Z, {}), (0, d.jsx)(t.Z, {})]
                })
            }
        },
        38409: function(e, s, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/feedback", function() {
                return i(57605)
            }])
        },
        12575: function(e, s, i) {
            "use strict";
            var a = i(67294),
                t = i(45697),
                r = i.n(t);

            function n() {
                return (n = Object.assign || function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var i = arguments[s];
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, s) {
                if (null == e) return {};
                var i, a, t = function(e, s) {
                    if (null == e) return {};
                    var i, a, t = {},
                        r = Object.keys(e);
                    for (a = 0; a < r.length; a++) i = r[a], s.indexOf(i) >= 0 || (t[i] = e[i]);
                    return t
                }(e, s);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < r.length; a++) i = r[a], s.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (t[i] = e[i])
                }
                return t
            }
            var l = (0, a.forwardRef)((function(e, s) {
                var i = e.color,
                    t = void 0 === i ? "currentColor" : i,
                    r = e.size,
                    l = void 0 === r ? 24 : r,
                    o = c(e, ["color", "size"]);
                return a.createElement("svg", n({
                    ref: s,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: l,
                    height: l,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: t,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, o), a.createElement("polygon", {
                    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                }))
            }));
            l.propTypes = {
                color: r().string,
                size: r().oneOfType([r().string, r().number])
            }, l.displayName = "Star", s.Z = l
        }
    },
    function(e) {
        e.O(0, [9774, 5518, 1736, 5519, 4773, 2888, 179], (function() {
            return s = 38409, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);