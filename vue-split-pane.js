!
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("SplitPane", [], t) : "object" == typeof exports ? exports.SplitPane = t() : e.SplitPane = t()
} (this,
function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t),
            i.l = !0,
            i.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.i = function(e) {
            return e
        },
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        },
        t.n = function(e) {
            var n = e && e.__esModule ?
            function() {
                return e.default
            }:
            function() {
                return e
            };
            return t.d(n, "a", n),
            n
        },
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        t.p = "/dist/",
        t(t.s = 7)
    } ([function(e, t) {
        e.exports = function() {
            var e = [];
            return e.toString = function() {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            },
            e.i = function(t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var r = {},i = 0; i < this.length; i++) {
                    var s = this[i][0];
                    "number" == typeof s && (r[s] = !0)
                }
                for (i = 0; i < t.length; i++) {
                    var o = t[i];
                    "number" == typeof o[0] && r[o[0]] || (n && !o[2] ? o[2] = n: n && (o[2] = "(" + o[2] + ") and (" + n + ")"), e.push(o))
                }
            },
            e
        }
    },
    function(e, t) {
        e.exports = function(e, t, n, r) {
            var i, s = e = e || {},
            o = typeof e.default;
            "object" !== o && "function" !== o || (i = e, s = e.default);
            var a = "function" == typeof s ? s.options: s;
            if (t && (a.render = t.render, a.staticRenderFns = t.staticRenderFns), n && (a._scopeId = n), r) {
                var c = Object.create(a.computed || null);
                Object.keys(r).forEach(function(e) {
                    var t = r[e];
                    c[e] = function() {
                        return t
                    }
                }),
                a.computed = c
            }
            return {
                esModule: i,
                exports: s,
                options: a
            }
        }
    },
    function(e, t, n) {
        function r(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t],
                r = u[n.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
                    for (; i < n.parts.length; i++) r.parts.push(s(n.parts[i]));
                    r.parts.length > n.parts.length && (r.parts.length = n.parts.length)
                } else {
                    for (var o = [], i = 0; i < n.parts.length; i++) o.push(s(n.parts[i]));
                    u[n.id] = {
                        id: n.id,
                        refs: 1,
                        parts: o
                    }
                }
            }
        }
        function i() {
            var e = document.createElement("style");
            return e.type = "text/css",
            p.appendChild(e),
            e
        }
        function s(e) {
            var t, n, r = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
            if (r) {
                if (h) return v;
                r.parentNode.removeChild(r)
            }
            if (m) {
                var s = d++;
                r = f || (f = i()),
                t = o.bind(null, r, s, !1),
                n = o.bind(null, r, s, !0)
            } else r = i(),
            t = a.bind(null, r),
            n = function() {
                r.parentNode.removeChild(r)
            };
            return t(e),
            function(r) {
                if (r) {
                    if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                    t(e = r)
                } else n()
            }
        }
        function o(e, t, n, r) {
            var i = n ? "": r.css;
            if (e.styleSheet) e.styleSheet.cssText = g(t, i);
            else {
                var s = document.createTextNode(i),
                o = e.childNodes;
                o[t] && e.removeChild(o[t]),
                o.length ? e.insertBefore(s, o[t]) : e.appendChild(s)
            }
        }
        function a(e, t) {
            var n = t.css,
            r = t.media,
            i = t.sourceMap;
            if (r && e.setAttribute("media", r), i && (n += "\n/*# sourceURL=" + i.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        var c = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !c) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var l = n(19),
        u = {},
        p = c && (document.head || document.getElementsByTagName("head")[0]),
        f = null,
        d = 0,
        h = !1,
        v = function() {},
        m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        e.exports = function(e, t, n) {
            h = n;
            var i = l(e, t);
            return r(i),
            function(t) {
                for (var n = [], s = 0; s < i.length; s++) {
                    var o = i[s],
                    a = u[o.id];
                    a.refs--,
                    n.push(a)
                }
                t ? (i = l(e, t), r(i)) : i = [];
                for (var s = 0; s < n.length; s++) {
                    var a = n[s];
                    if (0 === a.refs) {
                        for (var c = 0; c < a.parts.length; c++) a.parts[c]();
                        delete u[a.id]
                    }
                }
            }
        };
        var g = function() {
            var e = [];
            return function(t, n) {
                return e[t] = n,
                e.filter(Boolean).join("\n")
            }
        } ()
    },
    function(e, t, n) {
        n(17);
        var r = n(1)(n(4), n(14), "data-v-566a42b8", null);
        e.exports = r.exports
    },
    function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e: {
                default:e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12),
        s = r(i),
        o = n(11),
        a = r(o);
        t.default = {
            name: "splitPane",
            components: {
                Resizer: s.default,
                Pane: a.default
            },
            props: {
                minPercent: {
                    type: Number,
                    default:10
                },
                defaultPercent: {
                    type: Number,
                    default:50
                },
                rightpercent:{
                    type:Number,
                    default:0
                },
                splitnumber:{
                    type:Number,
                    default:2
                },
                split: {
                    validator: function(e) {
                        return ["vertical", "horizontal"].indexOf(e) >= 0
                    },
                    required: !0
                },
                className: String
            },
            computed: {
                userSelect: function() {
                    return this.active ? "none": ""
                },
                cursor: function() {
                    return this.active ? "vertical" === this.split ? "col-resize": "row-resize": ""
                }
            },
            watch: {
                defaultPercent: function(e, t) {
                    this.percent = e
                },
                rightpercent: function(e, t) {
                    this.percentR = e
                }
            },
            data: function() {
                return {
                    active: !1,
                    hasMoved: !1,
                    height: null,
                    movetarget:'',//移动目标
                    percent: this.defaultPercent,
                    percentR:this.rightpercent,//右侧宽度
                    type: "vertical" === this.split ? "width": "height",
                    resizeType: "vertical" === this.split ? "left": "top"
                }
            },
            methods: {
                onClick: function() {
                    this.hasMoved || (this.percent = 50, this.$emit("resize", this.percent))
                },
                onMouseDown: function(e) {
                    this.movetarget = e.target,
                    this.active = !0,
                    this.hasMoved = !1
                },
                onMouseUp: function() {
                    this.active = !1
                },
                onMouseMove: function(e) {
                    if (0 !== e.buttons && 0 !== e.which || (this.active = !1), this.active) {
                        var t = 0,
                        n = e.currentTarget;
                        if ("vertical" === this.split) for (; n;) t += n.offsetLeft,n = n.offsetParent;
                        else for (; n;) t += n.offsetTop,n = n.offsetParent;
                        var r = "vertical" === this.split ? e.pageX: e.pageY,
                        i = "vertical" === this.split ? e.currentTarget.offsetWidth: e.currentTarget.offsetHeight,
                        s = Math.floor((r - t) / i * 1e4) / 100;
                        //判断是3列（3行）还是2列（2行）
                        if(this.splitnumber === 3){
                            //debugger
                            //判断是左边（上面）的线，还是右边（下面）的线
                            var flogmovetarget=this.movetarget.classList.contains('splitter-pane-resizerR')
                            if(flogmovetarget){
                                document.getElementsByClassName("vue-splitter-container-mask")[0].style.right=this.percentR+'%'
                                document.getElementsByClassName("vue-splitter-container-mask")[0].style.top='0px'
                                s > this.minPercent && s < 100 - this.minPercent &&(this.percentR = 100-Number(s.toFixed(0))),//(this.percentR = s)
                                this.$emit("resize", this.percentR),
                                this.hasMoved = !0
                            }else{
                                document.getElementsByClassName("vue-splitter-container-mask")[0].style.left='0px'
                                document.getElementsByClassName("vue-splitter-container-mask")[0].style.top='0px'
                                s > this.minPercent && s < 100 - this.minPercent && (this.percent = s),
                                this.$emit("resize", this.percent),
                                this.hasMoved = !0
                            }
                            
                        }else{
                            document.getElementsByClassName("vue-splitter-container-mask")[0].style.left='0px'
                            document.getElementsByClassName("vue-splitter-container-mask")[0].style.top='0px'
                            s > this.minPercent && s < 100 - this.minPercent && (this.percent = s),
                            this.$emit("resize", this.percent),
                            this.hasMoved = !0
                        }
                    }
                }
            }
        }
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            name: "Pane",
            props: {
                className: String
            },
            data: function() {
                return {
                    classes: [this.$parent.split, this.className].join(" "),
                    percent: 50
                }
            }
        }
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = {
            props: {
                split: {
                    validator: function(e) {
                        return ["vertical", "horizontal"].indexOf(e) >= 0
                    },
                    required: !0
                },
                className: String
            },
            computed: {
                classes: function() {
                    return ["splitter-pane-resizer", this.split, this.className].join(" ")
                }
            }
        }
    },
    function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(3),
        i = function(e) {
            return e && e.__esModule ? e: {
                default:e
            }
        } (r);
        t.default = i.default,
        "undefined" != typeof window && window.Vue && window.Vue.component("split-pane", i.default)
    },
    function(e, t, n) {
        t = e.exports = n(0)(),
        t.push([e.i, ".splitter-pane-resizer[data-v-212fa2a4]{box-sizing:border-box;background:#000;position:absolute;opacity:.2;z-index:1;background-clip:padding-box}.splitter-pane-resizer.horizontal[data-v-212fa2a4]{height:11px;margin:-5px 0;border-top:5px solid hsla(0,0%,100%,0);border-bottom:5px solid hsla(0,0%,100%,0);cursor:row-resize;width:100%}.splitter-pane-resizer.vertical[data-v-212fa2a4]{width:11px;height:100%;margin-left:-5px;border-left:5px solid hsla(0,0%,100%,0);border-right:5px solid hsla(0,0%,100%,0);cursor:col-resize}", ""])
    },
    function(e, t, n) {
        t = e.exports = n(0)(),
        t.push([e.i, '.clearfix[data-v-566a42b8]:after{visibility:hidden;display:block;font-size:0;content:" ";clear:both;height:0}.vue-splitter-container[data-v-566a42b8]{height:100%;position:relative}.vue-splitter-container-mask[data-v-566a42b8]{z-index:9999;width:100%;height:100%;position:absolute;}', ""])//top:0;left:0
    },
    function(e, t, n) {
        t = e.exports = n(0)(),
        t.push([e.i, ".splitter-pane.vertical.splitter-paneL[data-v-815c801c]{position:absolute;left:0;height:100%;padding-right:3px}.splitter-pane.vertical.splitter-paneR[data-v-815c801c]{position:absolute;right:0;height:100%;padding-left:3px}.splitter-pane.horizontal.splitter-paneL[data-v-815c801c]{position:absolute;top:0;width:100%}.splitter-pane.horizontal.splitter-paneR[data-v-815c801c]{position:absolute;bottom:0;width:100%;padding-top:3px}.splitter-pane.vertical.splitter-paneM[data-v-815c801c] {position: absolute;height: 100%;padding:0px 3px}.splitter-pane.horizontal.splitter-paneM[data-v-815c801c] {position: absolute;width: 100%;padding:3px 0px}", ""])
    },
    function(e, t, n) {
        n(18);
        var r = n(1)(n(5), n(15), "data-v-815c801c", null);
        e.exports = r.exports
    },
    function(e, t, n) {
        n(16);
        var r = n(1)(n(6), n(13), "data-v-212fa2a4", null);
        e.exports = r.exports
    },
    function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                t = e.$createElement;
                return (e._self._c || t)("div", {
                    class: e.classes
                })
            },
            staticRenderFns: []
        }
    },
    function(e, t) {
        e.exports = {
            render: function() {
                var e, t, n, r = this,c,
                i = r.$createElement,
                s = r._self._c || i;
                if(r.splitnumber ===3){
                    if(r.resizeType ==='vertical'){
                        c='top';
                    }else{
                        c='left'
                    }
                    return s("div", {
                        staticClass: "vue-splitter-container clearfix",
                        style: {
                            cursor: r.cursor,
                            userSelect: r.userSelect
                        },
                        on: {
                            mouseup: r.onMouseUp,
                            mousemove: r.onMouseMove
                        }
                    },
                    [s("pane", {
                        staticClass: "splitter-pane splitter-paneL",
                        style: (e = {},
                        e[r.type] = r.percent + "%", e),
                        attrs: {
                            split: r.split
                        }
                    },
                    [r._t("paneL")], 2), r._v(" "), s("resizer", {
                        staticClass: "splitter-pane-resizerL",
                        style: (t = {},
                        t[r.resizeType] = r.percent + "%", t),
                        attrs: {
                            className: r.className,
                            split: r.split
                        },
                        nativeOn: {
                            mousedown: function(e) {
                                var resizerL = e.target
                                return resizerL,r.onMouseDown(e)
                            },
                            click: function(e) {
                                return r.onClick(e)
                            }
                        }
                    }), r._v(" "), s("pane", {
                        staticClass: "splitter-pane splitter-paneM",
                        style: (n = {},n[r.resizeType]=r.percent+ "%",n[r.type] = 100 - (r.percent + r.percentR) + "%", n),
                        attrs: {
                            split: r.split
                        }
                    },
                    [r._t("paneM")], 2), r._v(" "),s("resizer", {
                        staticClass: "splitter-pane-resizerR",
                        style: (t = {},
                        t[r.resizeType] = (r.percent+100 - (r.percent+r.percentR)) + "%", t),
                        attrs: {
                            className: r.className,
                            split: r.split
                        },
                        nativeOn: {
                            mousedown: function(e) {
                                var resizerR = e.target
                                return resizerR,r.onMouseDown(e)
                            },
                            click: function(e) {
                                return r.onClick(e)
                            }
                        }
                    }), r._v(" "),s("pane", {
                        staticClass: "splitter-pane splitter-paneR",
                        style: (n = {},n[r.type] = r.percentR + "%", n),
                        attrs: {
                            split: r.split
                        }
                    },
                    [r._t("paneR")], 2), r._v(" "), r.active ? s("div", {
                        staticClass: "vue-splitter-container-mask"
                    }) : r._e()], 1)
                }else{
                    return s("div", {
                        staticClass: "vue-splitter-container clearfix",
                        style: {
                            cursor: r.cursor,
                            userSelect: r.userSelect
                        },
                        on: {
                            mouseup: r.onMouseUp,
                            mousemove: r.onMouseMove
                        }
                    },
                    [s("pane", {
                        staticClass: "splitter-pane splitter-paneL",
                        style: (e = {},
                        e[r.type] = r.percent + "%", e),
                        attrs: {
                            split: r.split
                        }
                    },
                    [r._t("paneL")], 2), r._v(" "), s("resizer", {
                        style: (t = {},
                        t[r.resizeType] = r.percent + "%", t),
                        attrs: {
                            className: r.className,
                            split: r.split
                        },
                        nativeOn: {
                            mousedown: function(e) {
                                return r.onMouseDown(e)
                            },
                            click: function(e) {
                                return r.onClick(e)
                            }
                        }
                    }), r._v(" "), s("pane", {
                        staticClass: "splitter-pane splitter-paneR",
                        style: (n = {},n[r.type] =100- r.percent + "%", n),
                        attrs: {
                            split: r.split
                        }
                    },
                    [r._t("paneR")], 2), r._v(" "), r.active ? s("div", {
                        staticClass: "vue-splitter-container-mask"
                    }) : r._e()], 1)
                }
                
            },
            staticRenderFns: []
        }
    },
    function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                t = e.$createElement;
                return (e._self._c || t)("div", {
                    class: e.classes
                },
                [e._t("default")], 2)
            },
            staticRenderFns: []
        }
    },
    function(e, t, n) {
        var r = n(8);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        n(2)("a82a4610", r, !0)
    },
    function(e, t, n) {
        var r = n(9);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        n(2)("033d59ad", r, !0)
    },
    function(e, t, n) {
        var r = n(10);
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals);
        n(2)("6816c93c", r, !0)
    },
    function(e, t) {
        e.exports = function(e, t) {
            for (var n = [], r = {},i = 0; i < t.length; i++) {
                var s = t[i],
                o = s[0],
                a = s[1],
                c = s[2],
                l = s[3],
                u = {
                    id: e + ":" + i,
                    css: a,
                    media: c,
                    sourceMap: l
                };
                r[o] ? r[o].parts.push(u) : n.push(r[o] = {
                    id: o,
                    parts: [u]
                })
            }
            return n
        }
    }])
});
