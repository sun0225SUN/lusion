!function(e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    },
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r,
        function(t) {
            return e[t]
        }.bind(null, r));
        return i
    },
    n.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        }:
        function() {
            return e
        };
        return n.d(t, "a", t),
        t
    },
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.p = "/opt/build/repo/docs",
    n(n.s = 62)
} ([function(e, t, n) {
    "use strict";
    e.exports = window.THREE
},
function(e, t, n) {
    "use strict";
    var i = n(13);
    t.loader = n(37).create(),
    t.canvas = null,
    t.gl = null,
    t.isSupportWebGL = null,
    t.hasInitialized = !1,
    t.lang = document.documentElement.lang,
    t.renderer = null,
    t.scene = null,
    t.scrollContainer = null,
    t.camera = null,
    t.mobileOrientation = null,
    t.currPath = "",
    t.prevPath = "",
    t.currRoute = [],
    t.prevRoute = null,
    t.pageId = "",
    t.resolution = null,
    t.mouse = null,
    t.mouseVel = null,
    t.elasticMouse = null,
    t.elasticMouseVel = null,
    t.easedMouse = null,
    t.easedMouseVel = null,
    t.mouseWeight = 0,
    t.width = 0,
    t.height = 0,
    t.fullHeight = 0,
    t.scrollTop = 0,
    t.scrollTopVelocity = 0,
    t.currentTime = 0,
    t.time = 0,
    t.deltaTime = 0,
    t.deltaRatio = 0,
    t.featureOverMaskHeight = .35,
    t.isRendering = !1,
    t.debugTexture = null,
    t.onUpdateEnded = new i
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = t.PI = Math.PI,
    r = (t.PI2 = 2 * i, t.HALF_PI = .5 * i, t.DEG2RAD = i / 180, t.RAD2DEG = 180 / i, t.step = function(e, t) {
        return t < e ? 0 : 1
    },
    t.clamp = function(e, t, n) {
        return e < t ? t: e > n ? n: e
    }),
    o = (t.mix = function(e, t, n) {
        return e + (t - e) * n
    },
    t.cMix = function(e, t, n) {
        return e + (t - e) * r(n, 0, 1)
    },
    t.unMix = function(e, t, n) {
        return (n - e) / (t - e)
    },
    t.cUnMix = function(e, t, n) {
        return r((n - e) / (t - e), 0, 1)
    }),
    a = t.map = function(e, t, n, i, r) {
        return i + (e - t) * (r - i) / (n - t)
    },
    s = (t.cMap = function(e, t, n, i, o) {
        return i + r((e - t) / (n - t), 0, 1) * (o - i)
    },
    t.fit = function(e, t, n, i, r, a) {
        return e = o(t, n, e),
        a && (e = a(e)),
        i + e * (r - i)
    },
    t.normalize = function(e, t, n) {
        return a(e, t, n, 0, 1)
    },
    t.smoothstep = function(e, t, n) {
        return (n = o(e, t, n)) * n * (3 - 2 * n)
    },
    t.fract = function(e) {
        return e - Math.floor(e)
    }),
    u = (t.hash = function(e) {
        return s(43758.5453123 * Math.sin(e))
    },
    t.hash2 = function(e, t) {
        return s(43758.5453 * Math.sin(12.9898 * e + 4.1414 * t))
    },
    t.sign = function(e) {
        return e ? e < 0 ? -1 : 1 : 0
    },
    t.isPowerOfTwo = function(e) {
        return (e & -e) === e
    }),
    c = t.powerTwoCeilingBase = function(e) {
        return Math.ceil(Math.log(e) / Math.log(2))
    },
    l = t.powerTwoCeiling = function(e) {
        return u(e) ? e: 1 << c(e)
    },
    d = t.powerTwoFloorBase = function(e) {
        return Math.floor(Math.log(e) / Math.log(2))
    };
    t.powerTwoFloor = function(e) {
        return u(e) ? e: 1 << d(e)
    },
    t.powerTwoTextureSize = function(e) {
        var t = l(Math.sqrt(e));
        return {
            w: t,
            h: l(Math.ceil(e / t))
        }
    },
    t.latLngBearing = function(e, t, n, i) {
        var r = Math.sin(i - t) * Math.cos(n),
        o = Math.cos(e) * Math.sin(n) - Math.sin(e) * Math.cos(n) * Math.cos(i - t);
        return Math.atan2(r, o)
    },
    t.distanceTo = function(e, t) {
        return Math.sqrt(e * e + t * t)
    },
    t.distanceSqrTo = function(e, t) {
        return e * e + t * t
    },
    t.distanceTo3 = function(e, t, n) {
        return Math.sqrt(e * e + t * t + n * n)
    },
    t.distanceSqrTo3 = function(e, t, n) {
        return e * e + t * t + n * n
    },
    t.latLngDistance = function(e, t, n, i) {
        var r = Math.sin((n - e) / 2),
        o = Math.sin((i - t) / 2),
        a = r * r + Math.cos(e) * Math.cos(n) * o * o;
        return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    },
    t.cubicBezier = function(e, t, n, i, r) {
        var o = 3 * (t - e),
        a = 3 * (n - t) - o,
        s = r * r;
        return (i - e - o - a) * (s * r) + a * s + o * r + e
    },
    t.cubicBezierFn = function(e, t, n, i) {
        var r = 3 * (t - e),
        o = 3 * (n - t) - r,
        a = i - e - r - o;
        return function(t) {
            var n = t * t;
            return a * (n * t) + o * n + r * t + e
        }
    },
    t.getCoverScale = function(e, t, n, i) {
        return Math.max(n / e, i / t)
    },
    t.getContainScale = function(e, t, n, i) {
        return Math.min(n / e, i / t)
    }
},
function(e, t, n) {
    "use strict";
    n(5);
    var i = t.isLocal = !!window.isLocal;
    t.typekitId = "ujh8grk",
    t.assetPath = "/assets/",
    t.cdnPath = "/assets/",
    t.videoCdnPath = i ? "/assets/": "https://d8d3yaw9yoj7k.cloudfront.net/",
    t.dataFloatType = null,
    t.renderTargetFloatType = null,
    t.useFloatPacking = null,
    t.perspectiveScale = 1,
    t.heroVideoWidth = 1280,
    t.heroVideoHeight = 720,
    t.USE_GUI = !0,
    t.USE_SMAA = !1
},
function(e, t, n) {
    "use strict";
    var i = n(0);
    t.init = function(e, h, v) {
        if (r) return;
        r = t.renderer = e,
        o = t.gl = e.getContext(),
        t.MAX_VARYING_VECTORS = o.getParameter(o.MAX_VARYING_VECTORS),
        t.IS_SUPPORT_DEPTH_TEXTURE = !!e.extensions.get("WEBGL_depth_texture"),
        t.floatType = void 0 === h ? i.FloatType: h,
        t.dataFloatType = void 0 === v ? i.FloatType: v,
        t.precisionPrefix = "precision " + r.capabilities.precision + " float;\n",
        a = new i.Scene,
        (s = new i.Camera).position.z = 1,
        t.vertexShader = t.precisionPrefix + n(88),
        t.vertexNoUvShader = t.precisionPrefix + n(89),
        c = new i.Color,
        t.clearMaterial = new i.RawShaderMaterial({
            uniforms: {
                u_color: {
                    value: new i.Vector4
                }
            },
            depthTest: !1,
            depthWrite: !1,
            blending: i.NoBlending,
            vertexShader: t.vertexNoUvShader,
            fragmentShader: t.precisionPrefix + n(90),
            transparent: !0
        }),
        t.copyMaterial = new i.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    value: void 0
                }
            },
            depthTest: !1,
            depthWrite: !1,
            transparent: !0,
            blending: i.NoBlending,
            vertexShader: t.vertexShader,
            fragmentShader: t.precisionPrefix + n(29)
        }),
        t.triGeom = new i.BufferGeometry,
        t.triGeom.setAttribute("position", new i.BufferAttribute(new Float32Array([ - 1, -1, 0, 4, -1, 0, -1, 4, 0]), 3)),
        t.quadGeom = new i.PlaneBufferGeometry(2, 2),
        (u = new i.Mesh(t.triGeom, t.copyMaterial)).frustumCulled = !1,
        a.add(u),
        l = new i.Scene;
        var m = new i.PlaneBufferGeometry(1, 1);
        m.translate(.5, -.5, 0),
        f = new i.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    value: null
                },
                u_transform: {
                    value: new i.Vector4(0, 0, 1, 1)
                }
            },
            vertexShader: t.precisionPrefix + n(91),
            fragmentShader: t.precisionPrefix + n(29),
            depthTest: !1,
            depthWrite: !1,
            blending: i.NoBlending
        }),
        d = new i.Mesh(m, f),
        l.frustumCulled = !1,
        l.add(d)
    },
    t.copy = function(e, n) {
        var i = t.copyMaterial;
        i.uniforms.u_texture.value = e,
        h(i, n)
    },
    t.clearColor = function(e, n, i) {
        c.setHex(e),
        t.clearMaterial.uniforms.u_color.value.set(c.r, c.g, c.b, n),
        h(t.clearMaterial, i)
    },
    t.clearColorRGBA = function(e, n, i, r, o) {
        t.clearMaterial.uniforms.u_color.value.set(e, n, i, r),
        h(t.clearMaterial, o)
    },
    t.renderGeometry = function(e, n, i) {
        u.geometry = e,
        h(n, i),
        u.geometry = t.triGeom
    },
    t.renderObject = function(e, t) {
        u.visible = !1,
        a.add(e),
        r.setRenderTarget(t || null),
        r.render(a, s),
        t && r.setRenderTarget(null);
        a.remove(e),
        u.visible = !0
    },
    t.render = h,
    t.debugTo = function(e, t, n, i, o) {
        e || console.warn("texture is missing");
        n = (t = t || 200) || 200,
        i = i || 0,
        o = o || 0;
        var a = r.getSize();
        i = i / a.width * 2 - 1,
        o = 1 - o / a.height * 2,
        t = t / a.width * 2,
        n = n / a.height * 2,
        f.uniforms.u_texture.value = e,
        f.uniforms.u_transform.value.set(i, o, t, n);
        var u = v();
        r.autoClearColor = !1,
        r.render(l, s),
        v(u)
    },
    t.resizeRenderTarget = function(e, t, n) {
        n = 0 | n || 1,
        ((t = 0 | t || 1) !== e.width || n !== e.height) && e.setSize(t, n)
    },
    t.createRenderTarget = function(e, n, r, o, a) {
        return new i.WebGLRenderTarget(e, n, {
            wrapS: i.ClampToEdgeWrapping,
            wrapT: i.ClampToEdgeWrapping,
            magFilter: o ? i.NearestFilter: i.LinearFilter,
            minFilter: o ? i.NearestFilter: i.LinearFilter,
            format: r ? i.RGBAFormat: i.RGBFormat,
            type: a ? t.floatType: i.UnsignedByteType,
            anisotropy: 0,
            encoding: i.LinearEncoding,
            depthBuffer: !1,
            stencilBuffer: !1
        })
    },
    t.createDataTexture = function(e, n, r, o, a, s) {
        return new i.DataTexture(e, n, r, o ? i.RGBAFormat: i.RGBFormat, s ? t.dataFloatType: i.UnsignedByteType, i.UVMapping, i.ClampToEdgeWrapping, i.ClampToEdgeWrapping, a ? i.NearestFilter: i.LinearFilter, a ? i.NearestFilter: i.LinearFilter)
    },
    t.getColorState = v,
    t.setColorState = function(e, t) { (t = t || r).setClearColor(e.clearColor, e.clearAlpha),
        t.autoClear = e.autoClear,
        t.autoClearColor = e.autoClearColor,
        t.autoClearStencil = e.autoClearStencil,
        t.autoClearDepth = e.autoClearDepth
    };
    var r = t.renderer = null,
    o = t.gl = null;
    t.precisionPrefix = null,
    t.floatType = null,
    t.dataFloatType = null,
    t.vertexShader = "",
    t.MAX_VARYING_VECTORS = 0,
    t.IS_SUPPORT_DEPTH_TEXTURE = null,
    t.quadGeom = null,
    t.triGeom = null,
    t.clearMaterial = null,
    t.copyMaterial = null;
    var a = void 0,
    s = void 0,
    u = void 0,
    c = void 0,
    l = void 0,
    d = void 0,
    f = void 0;
    function h(e, t) {
        u.material = e,
        r.setRenderTarget(t || null),
        r.render(a, s),
        t && r.setRenderTarget(null)
    }
    function v(e) {
        return {
            autoClear: (e = e || r).autoClear,
            autoClearColor: e.autoClearColor,
            autoClearStencil: e.autoClearStencil,
            autoClearDepth: e.autoClearDepth,
            clearColor: e.getClearColor().getHex(),
            clearAlpha: e.getClearAlpha()
        }
    }
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = void 0,
    r = "Webkit Moz O ms".split(" "),
    o = document.createElement("div").style,
    a = window,
    s = document,
    u = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase(),
    c = (navigator.platform || "").toLowerCase(),
    l = (t.videoFormat = h("video", ["video/mp4", "video/ogv"]), t.audioFormat = h("audio", ["audio/mp3", "audio/ogg"]), t.isIFrame = a.self !== a.top, t.isRetina = a.devicePixelRatio && a.devicePixelRatio >= 1.5, t.isSupportOpacity = o.opacity !== i, t.cpuCoreCount = navigator.hardwareConcurrency || 1, t.isEdge = u.indexOf("edge") > -1),
    d = t.isIE10orBelow = u.indexOf("msie") > -1,
    f = (t.isFirefox = u.indexOf("firefox") > -1, t.isChrome = !l && u.indexOf("chrome") > -1);
    t.isSafari = !l && !f && u.indexOf("safari") > -1,
    t.isUC = u.indexOf("ucbrowser") > -1,
    t.isMac = c.indexOf("mac") > -1,
    t.isMobile = /(iPad|iPhone|Android)/i.test(u),
    t.isIOS = /(iPad|iPhone)/i.test(u),
    t.filterStyle = d ? i: v("filter"),
    t.transitionStyle = v("transition"),
    t.transformStyle = v("transform"),
    t.transform3dStyle = v("transform", "perspective"),
    t.transformPerspectiveStyle = v("perspective"),
    t.transformOriginStyle = v("transformOrigin"),
    t.WebAudioContext = a.AudioContext || a.webkitAudioContext,
    t.baseUrl = document.location.origin;
    function h(e, t) {
        var n = void 0;
        try {
            switch (e) {
            case "video":
                n = new a.Video;
                break;
            case "audio":
                n = new a.Audio
            }
        } catch(t) {
            n = s.createElement(e)
        }
        for (var i = void 0,
        r = 0,
        o = t.length; r < o; r++) if (n.canPlayType && n.canPlayType(t[r])) {
            i = t[r].substr(t[r].indexOf("/") + 1);
            break
        }
        return i
    }
    function v(e, t) {
        return function(e, t) {
            return t > 1 ? r[t - 2] + e.charAt(0).toUpperCase() + e.slice(1) : 1 === t && e
        } (e,
        function(e) {
            var t = e.charAt(0).toUpperCase() + e.slice(1),
            n = r.length;
            for (; n--;) if (o[r[n] + t] !== i) return n + 2;
            if (o[e] !== i) return 1;
            return 0
        } (t || e))
    }
    window.screen || window.screen.width || (window.screen = {
        width: window.innerWidth,
        height: window.innerHeight
    })
},
function(e, t, n) {
    "use strict";
    var i = n(23);
    function r(e, t) {
        this[t] = e
    }
    e.exports = function(e, t) {
        for (var n, o = 0,
        a = arguments.length; ++o < a;) null != (n = arguments[o]) && i(n, r, e);
        return e
    }
},
function(e, t, n) {
    "use strict";
    var i, r = n(13);
    function o() {
        this.isLoading = !1,
        this.totalWeight = 0,
        this.loadedWeight = 0,
        this.itemUrls = {},
        this.itemList = [],
        this.loadingSignal = new r,
        this.crossOriginMap = {},
        this.queue = [],
        this.activeItems = [],
        this.maxActiveItems = 4
    }
    var a = o.prototype;
    a.addChunk = function(e, t) {
        var n, i, r, o, a, s = g(e, t);
        for (n = 0, r = s.length; n < r; n++) for (a = s[n], i = 0, o = a.items.length; i < o; i++) this.add(a.items[i], {
            type: a.type
        });
        return s
    },
    a.setCrossOrigin = function(e, t) {
        this.crossOriginMap[e] = t
    },
    a.add = function(e, t) {
        var n = u[e];
        n || (n = this._createItem(e, t && t.type ? t.type: x(e).type, t));
        t && t.onLoad && n.onLoaded.addOnce(t.onLoad);
        this.itemUrls[e] || (this.itemUrls[e] = n, this.itemList.push(n), this.totalWeight += n.weight);
        return n
    },
    a.load = f,
    a.start = function(e) {
        e && this.loadingSignal.add(e);
        this.isLoading = !0;
        var t = this.itemList.length;
        if (t) {
            for (var n, r = this.itemList.splice(0, this.itemList.length), o = 0; o < t; o++) {
                n = r[o];
                var a = !!c[n.url];
                n.onLoaded.addOnce(m, this, -1024, n, r, a),
                n.hasLoading && n.loadingSignal.add(h, this, -1024, n, r, i),
                a ? n.dispatch(m) : n.isStartLoaded || this.queue.push(n)
            }
            this.queue.length && this.loadNext()
        } else m.call(this, i, this.itemList)
    },
    a.loadNext = function() {
        if (this.queue.length && this.activeItems.length < this.maxActiveItems) {
            var e = this.queue.shift();
            this.activeItems.push(e),
            this.loadNext(),
            e.load()
        }
    },
    a._createItem = function(e, t, n) {
        if (! (n = n || {}).crossOrigin) for (var i in this.crossOriginMap) if (0 === e.indexOf(i)) {
            n.crossOrigin = this.crossOriginMap[i];
            break
        }
        return new d[t](e, n)
    },
    a._onLoading = h;
    var s = e.exports = y();
    s.version = "0.1.9",
    s.register = function(e) {
        d[e.type] || (l.push(e), d[e.type] = e)
    },
    s.retrieveAll = g,
    s.retrieve = x,
    s.testExtensions = _,
    s.create = y,
    s.load = f,
    s.check = function() {
        var e = [],
        t = [];
        for (var n in u) e.push(n),
        c[n] || t.push(u[n]);
        console.log({
            added: e,
            notLoaded: t
        })
    };
    var u = s.addedItems = {},
    c = s.loadedItems = {},
    l = s.ITEM_CLASS_LIST = [],
    d = s.ITEM_CLASSES = {};
    function f(e, t) {
        var n = u[e];
        return n || (n = this._createItem(e, t && t.type ? t.type: x(e).type, t)),
        t && t.onLoad && n.onLoaded.addOnce(t.onLoad),
        c[e] ? n.dispatch() : n.isStartLoaded || n.load(),
        n
    }
    function h(e, t, n, r, o) {
        e && !e.isLoaded && 1 === r || (o === i && (this.loadedWeight = v(t), o = this.loadedWeight / this.totalWeight), (n = n || this.loadingSignal).dispatch(o, e))
    }
    function v(e) {
        for (var t = 0,
        n = 0,
        i = e.length; n < i; n++) t += e[n].loadedWeight;
        return t
    }
    function m(e, t, n) {
        if (this.loadedWeight = v(t), !n) for (var i = this.activeItems,
        o = i.length; o--;) if (i[o] === e) {
            i.splice(o, 1);
            break
        }
        var a = this.loadingSignal;
        this.loadedWeight === this.totalWeight ? (this.isLoading = !1, this.loadedWeight = 0, this.totalWeight = 0, this.loadingSignal = new r, this._onLoading(e, t, a, 1, 1), e && e.noCache && p(e)) : (this._onLoading(e, t, a, 1, this.loadedWeight / this.totalWeight), e && e.noCache && p(e), n || this.loadNext())
    }
    function p(e) {
        var t = e.url;
        e.content = i,
        u[t] = i,
        c[t] = i
    }
    function g(e, t) {
        var n, i, r = e.length,
        o = [];
        if (r && "string" != typeof e) for (n = 0; n < r; n++)(i = x(e[n], t)) && (o = o.concat(i));
        else(i = x(e, t)) && (o = o.concat(i));
        return o
    }
    function x(e, t) {
        var n, r, o, a, s;
        if (t) o = (a = d[t]).retrieve(e);
        else for (n = 0, r = l.length; n < r; n++) {
            if (s = (a = l[n]).type, "string" == typeof e) {
                if (_(e, a)) {
                    o = [e];
                    break
                }
            } else if ((o = a.retrieve(e)) && o.length && "string" == typeof o[0] && _(o[0], a)) break;
            o = i,
            s = i
        }
        if (o) return {
            type: t || s,
            items: o
        }
    }
    function _(e, t) {
        if (e) {
            for (var n = function(e) {
                return e.split(".").pop().split(/#|\?/)[0]
            } (e), i = t.extensions, r = i.length; r--;) if (n === i[r]) return ! 0;
            return ! 1
        }
    }
    function y() {
        return new o
    }
},
function(e, t, n) {
    "use strict";
    e.exports = window.TweenLite
},
function(e, t, n) {
    "use strict";
    var i, r = n(13),
    o = n(40),
    a = n(72),
    s = n(2);
    t.init = function() {
        c.ondragstart = function() {
            return ! 1
        };
        var e = t.inputTarget;
        t.hasTouch ? (e.addEventListener("touchstart", M, !0), e.addEventListener("touchmove", P, !0), l.addEventListener("touchend", R, !0), e.addEventListener("mousedown", M, !0), e.addEventListener("mousemove", P, !0), l.addEventListener("mouseup", R, !0), e.addEventListener("mousewheel", T, !0), e.addEventListener("DOMMouseScroll", T, !0)) : f ? (e.addEventListener("mousedown", M, !0), e.addEventListener("mousemove", P, !0), l.addEventListener("mouseup", R, !0), e.addEventListener("mousewheel", T, !0), e.addEventListener("DOMMouseScroll", T, !0)) : (e.attachEvent("onmousedown", M), e.attachEvent("onmousemove", P), l.attachEvent("onmouseup", R), e.attachEvent("onmousewheel", T));
        t.onDowned.add(F, t, 1024),
        t.onMoved.add(z, t, 1024),
        t.onUped.add(E, t, 1024),
        t.onUped.add(k, t, -1024),
        window.addEventListener("touchmove",
        function(e) {
            e.preventDefault()
        },
        {
            passive: !1
        })
    },
    t.add = function e(t, n, i) {
        if (t.length) {
            for (var r = 0,
            o = t.length; r < o; r++) e(t[r], n, i);
            return
        }
        t && (t[v + n] = i, t[v + "hasInput"] = !0, S.push(t))
    },
    t.remove = function e(t, n) {
        var r, o;
        if (t.length) {
            for (r = 0, o = t.length; r < o; r++) e(t[r], n);
            return
        }
        if (t) {
            n ? t[v + n] = i: (a(TYPE_LIST,
            function(e) {
                t[v + e] = i
            }), t[v + "hasInput"] = !1);
            var s = !1;
            for (r = 0, o = TYPE_LIST.length; r < o; r++) if (t[v + TYPE_LIST[r]]) {
                s = !0;
                break
            }
            if (!s) for (r = 0, o = S.length; r < o; r++) if (S[r] == t) {
                S.splice(r, 1);
                break
            }
        }
    };
    var u = window,
    c = document,
    l = c.documentElement,
    d = !1;
    t.hasTouch = "ontouchstart" in u,
    t.inputTarget = document.body,
    t.onDowned = new r,
    t.onMoved = new r,
    t.onUped = new r,
    t.onSwipeH = new r,
    t.onSwipeV = new r,
    t.isDown = !1,
    t.isScrollH = !1,
    t.isScrollV = !1,
    t.isPossibilyScrollH = !1,
    t.isPossibilyScrollV = !1,
    t.isFirstTouch = i,
    t.x = 0,
    t.y = 0,
    t.distanceX = 0,
    t.distanceY = 0,
    t.deltaX = 0,
    t.deltaY = 0,
    t.deltaTime = 0,
    t.downBubbleHistory = [],
    t.currentBubbleHistory = [],
    t.prevBubbleHistory = [],
    t.lastUpTime = 0,
    t.isOnSwipePane = !1,
    t.elems = [],
    t.disablePreventDefault = !1,
    t.clickTime = 500,
    t.clickDistance = 10,
    t.possibilyScrollDist = 50;
    var f = "addEventListener" in u,
    h = c.documentElement,
    v = "l_u_s_i_o_n_",
    m = !1,
    p = 0,
    g = 0,
    x = 0,
    _ = 0,
    y = -1,
    w = -1,
    b = 0,
    S = t.elems;
    function T(e) {
        var n = +new Date;
        if (! (n - b < 35)) {
            b = n;
            var i, r = (e = e || u.event).wheelDelta;
            r ? r /= 120 : r = -e.detail / 3,
            r = s.clamp(r, -3, 3);
            for (var o = t.currentBubbleHistory,
            a = o.length; a--;)(i = o[a])[v + "wheel"] && i[v + "wheel"].call(i, r, e)
        }
    }
    function M(e) {
        return A.call(this, e,
        function(e) {
            var n = e.target.nodeName.toLowerCase();
            if (c.activeElement && !o(["input", "select", "label", "option", "textarea"], n) && "true" !== e.target.contentEditable) {
                var i = c.activeElement;
                o(["body"], i.nodeName.toLowerCase()) || c.activeElement.blur()
            }
            t.onDowned.dispatch(e)
        })
    }
    function P(e) {
        return A.call(this, e,
        function(e) {
            t.onMoved.dispatch(e)
        })
    }
    function R(e) {
        return A.call(this, e,
        function(e) {
            t.onUped.dispatch(e)
        })
    }
    function C(e) {
        return function() { (function(e) {
                t.disablePreventDefault || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }).call(this, e)
        }
    }
    function I(e, t) {
        if (e.__skipPreventDefault) return ! 0;
        var n = e.nodeName.toLowerCase();
        return !! o(["source", "object", "iframe"], n) || !t && ("true" === e.contentEditable || o(["input", "select", "label", "textarea", "option"], n))
    }
    function A(e, n) {
        var r, o, a, s, c, l, b, S = {
            originalEvent: e = e || u.event,
            button: e.button,
            preventDefault: C(e)
        },
        T = e.type,
        M = S.currentTime = (new Date).getTime(),
        P = T.indexOf("start") > -1 || T.indexOf("down") > -1,
        R = T.indexOf("move") > -1,
        A = S.isTouch = T.indexOf("touch") > -1,
        D = !1;
        if (t.isFirstTouch === i && (t.isFirstTouch = A), A) for (c = e.touches.length ? e.touches[0] : e.changedTouches[0], S.x = a = c.pageX, S.y = s = c.pageY, S.target = b = c.target, S.identifier = c.identifier, S.touches = e.touches, t.prevBubbleHistory = t.currentBubbleHistory, l = t.currentBubbleHistory = S.bubbleHistory = []; b;) l.unshift(b),
        !D && I(b, R) && (D = S.isSkipPreventDefault = !0),
        b = b.parentNode;
        else for (S.identifier = 0, S.x = a = f ? e.pageX: e.clientX + h.scrollLeft, S.y = s = f ? e.pageY: e.clientY + h.scrollTop, S.target = b = e.target ? e.target: e.srcElement, t.prevBubbleHistory = t.currentBubbleHistory, l = t.currentBubbleHistory = S.bubbleHistory = []; b;) l.unshift(b),
        !D && I(b, R) && (D = S.isSkipPreventDefault = !0),
        b = b.parentNode;
        if (t.x = a, t.y = s, P) {
            for (m = !0, p = _ = M, g = y = a, x = w = s, t.downBubbleHistory = l, r = l.length; r--;) o = l[r],
            A && o[v + "over"] && (S.currentTarget = o, o[v + "over"].call(o, S)),
            o[v + "down"] && (S.currentTarget = o, o[v + "down"].call(o, S));
            d = D
        }
        d || S.preventDefault(),
        m && (S.distanceTime = M - p, S.distanceX = a - g, S.distanceY = s - x, S.distance = Math.sqrt((a - g) * (a - g) + (s - x) * (s - x))),
        S.deltaTime = M - _,
        S.deltaX = a - (y < 0 ? a: y),
        S.deltaY = s - (w < 0 ? s: w),
        _ = M,
        y = a,
        w = s,
        (T.indexOf("end") > -1 || T.indexOf("up") > -1) && (m = !1),
        n(S)
    }
    function D(e) {
        for (var n, i = t.prevBubbleHistory,
        r = e.bubbleHistory.length; r--;)((n = e.bubbleHistory[r])[v + "over"] || n[v + "out"]) && (o(i, n) || n[v + "isHover"] || (n[v + "isHover"] = !0, n[v + "over"] && (e.currentTarget = n, n[v + "over"].call(n, e))))
    }
    function L(e) {
        for (var n, i = e.bubbleHistory,
        r = t.prevBubbleHistory.length; r--;)(n = t.prevBubbleHistory[r])[v + "isHover"] && (o(i, n) || (n[v + "isHover"] = !1, n[v + "out"] && (e.currentTarget = n, n[v + "out"].call(n, e))))
    }
    function F(e) {
        t.isDown = !0,
        L(e),
        D(e);
        for (var n, i = e.bubbleHistory.length; i--;)(n = e.bubbleHistory[i])[v + "tap"] && (e.currentTarget = n, n[v + "tap"].call(n, e))
    }
    function z(e) {
        L(e),
        D(e),
        t.deltaX = e.deltaX,
        t.deltaY = e.deltaY,
        t.deltaTime = e.deltaTime;
        var n = e.distanceX !== i;
        n || (e.distanceX = t.distanceX, e.distanceY = t.distanceY),
        t.distanceX = e.distanceX,
        t.distanceY = e.distanceY,
        t.distanceTime = e.distanceTime,
        t.isScrollH || t.isScrollV || !t.isDown || e.distance > 0 && (Math.abs(e.distanceX) > Math.abs(e.distanceY) ? (t.isScrollH = !0, t.onSwipeH.dispatch(e)) : (t.isScrollV = !0, t.onSwipeV.dispatch(e))),
        t.isPossibilyScrollH || t.isPossibilyScrollV || !t.isDown || e.distance > t.possibilyScrollDist && (Math.abs(e.distanceX) > Math.abs(e.distanceY) ? (t.isPossibilyScrollH = !0, t.onSwipeH.dispatch(e)) : (t.isPossibilyScrollV = !0, t.onSwipeV.dispatch(e)));
        for (var r, o = e.bubbleHistory.length; o--;)(r = e.bubbleHistory[o])[v + "move"] && (e.currentTarget = r, r[v + "move"].call(r, e));
        n || (t.distanceX = e.distanceX, t.distanceY = e.distanceY)
    }
    function E(e) {
        t.isDown = !1,
        t.distanceTime = e.distanceTime;
        var n, i, r = e.bubbleHistory.length,
        o = t.downBubbleHistory,
        a = e.isClick = null !== e.distanceTime && e.distanceTime < t.clickTime && e.distance < t.clickDistance;
        for (e.isDoubleClick = e.currentTime - t.lastUpTime < 400; r--;) if (n = e.bubbleHistory[r], e.isTouch && n[v + "out"] && (e.currentTarget = n, n[v + "out"].call(n, e)), n[v + "up"] && (e.currentTarget = n, n[v + "up"].call(n, e)), a && n[v + "click"]) for (i = o.length; i--;) if (o[i] === n) {
            e.currentTarget = n,
            n[v + "click"].call(n, e);
            break
        }
    }
    function k(e) {
        t.isScrollH = !1,
        t.isScrollV = !1,
        t.isPossibilyScrollH = !1,
        t.isPossibilyScrollV = !1,
        t.lastUpTime = e.currentTime
    }
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(1),
    o = n(9),
    a = n(11),
    s = n(2),
    u = n(6),
    c = n(4),
    l = n(92),
    d = n(93),
    f = n(50);
    function h(e) {
        v.constructor.call(this, u({
            refDomId: "",
            refDom: null,
            refDomRect: {},
            backgroundColor: 0,
            top: 0,
            width: 0,
            height: 0,
            fullWidth: 0,
            fullHeight: 0,
            lowInRatio: 0,
            upInRatio: 0,
            inRatio: 0,
            ratio: 0,
            viewportTop: 0,
            viewportHeight: 0,
            parallax: .5,
            mouseProjectionPlane: new i.Plane(new i.Vector3(0, 0, 1)),
            mouseProjectionDistanceRatio: 1,
            mouseRefToWindow: !1,
            isMouseDown: 0,
            defaultCameraFov: 60,
            sceneRenderTarget: null,
            path: null,
            gui: !1,
            usePostprocessing: !1,
            sharedPostprocessing: !1,
            postprocessingToScreen: !0,
            useDepthTexture: !1,
            postprocessingQueue: []
        },
        e))
    }
    var v = a.prototype,
    m = h.prototype = Object.create(v);
    m.constructor = e.exports = h,
    m.preInit = function() {
        window.gui && (this.gui = window.gui.addFolder(this.refDomId || "visual"), this.gui.open());
        this.usePostprocessing && (x || (x = new l(null, this.useDepthTexture && c.IS_SUPPORT_DEPTH_TEXTURE)), this.sharedPostprocessing = x, this.boundBeforeRender = this.beforeRender.bind(this), this.boundAfterRender = this.afterRender.bind(this));
        this.scene = this.scene || new i.Scene,
        this.camera = this.camera || new i.PerspectiveCamera(this.defaultCameraFov, 1, .01, 400),
        this.camera.position.z = 5,
        this.scene.add(this.camera),
        this.resolution = new i.Vector2,
        this.cameraPosition = new i.Vector3,
        this.cameraQuaternion = new i.Quaternion,
        this.cameraScale = new i.Vector3,
        this.mouse = new i.Vector2,
        this.mouse3 = new i.Vector3,
        this.isOnFocus = !1,
        this.screenUvInfoUniform = {
            value: new i.Vector4
        },
        this.aspectUniform = {
            value: new i.Vector2
        },
        this.visualUvInfoUniform = {
            value: new i.Vector4
        },
        this.parallaxRatioUniform = {
            value: new i.Vector4
        },
        this.sharedUniforms = {}
    },
    m.precompile = function() {
        r.renderer.compile(this.scene, this.camera)
    },
    m.isSupported = function() {
        return ! 0
    },
    m.resize = function() {
        this.testViewport(!0),
        this.sceneRenderTarget && this.sceneRenderTarget.setSize(r.width, r.height);
        this.usePostprocessing && x.setSize(r.width, r.height)
    },
    m.testViewport = function(e) {
        v.testViewport.call(this, e),
        (e || this.needsRender) && (this.viewportTop = Math.floor(this.refDomRect.top), this.viewportHeight = Math.ceil(this.refDomRect.bottom) + (this.refDomRect.top > this.viewportTop ? 1 : 0) - this.viewportTop, this.screenUvInfoUniform.value.set(this.left, Math.max(0, this.viewportTop - this.top), 1 / r.width, 1 / r.height), this.visualUvInfoUniform.value.set(this.left, Math.max(0, this.viewportTop - this.top), 1 / this.width, 1 / this.height), this.resolution.set(this.width, this.height), this.fullWidth = this.refDomRect.width + this.paddingLeft + this.paddingRight, this.fullHeight = this.refDomRect.height + this.paddingTop + this.paddingBottom, this.lowInRatio = s.cUnMix(r.height, .5 * (r.height - this.height), this.top), this.upInRatio = s.cUnMix(0, .5 * (r.height + this.height), this.bottom), this.inRatio = Math.min(this.lowInRatio, this.upInRatio), this.ratio = 1 - this.lowInRatio + this.upInRatio, this.aspectUniform.value.set(this.width / this.height, 1), this.parallaxRatioUniform.value.set(this.lowInRatio, this.upInRatio, this.inRatio, this.ratio));
        this.gui && (this.gui.domElement.style.display = this.needsRender ? "block": "none")
    },
    m.updateMouse = function(e, t, n, i) {
        e = e || 1,
        t = t || 1,
        n = n || 0,
        i = i || 0;
        var a = this.mouseRefToWindow ? r.width: this.width,
        s = this.mouseRefToWindow ? r.height: this.height;
        this.mouse.set(2 * ((r.elasticMouse.x - this.left) / a - .5), 2 * (.5 - (r.elasticMouse.y - this.top) / s)),
        p.origin.setFromMatrixPosition(this.camera.matrixWorld),
        p.direction.set((this.mouse.x + n) * e, (this.mouse.y + i) * t, .5).unproject(this.camera).sub(p.origin).normalize(),
        p.intersectPlane(this.mouseProjectionPlane, g);
        var u = g.distanceTo(p.origin) * this.mouseProjectionDistanceRatio;
        p.origin.add(p.direction.multiplyScalar(u)),
        this.mouse3.copy(p.origin),
        this.isMouseDown = o.isDown
    },
    m.updateCamera = function() {
        this.camera.aspect = this.width / this.viewportHeight,
        this.camera.setViewOffset(this.width, this.viewportHeight, 0, Math.max(0, -this.viewportTop + this.paddingTop) + (this.upInRatio - this.lowInRatio) * this.viewportHeight * this.parallax, this.width, this.height),
        this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this.cameraScale)
    },
    m.update = function() {
        this.testViewport(),
        this.needsRender && (this.updateCamera(), this.render())
    },
    m.beforeRender = function() {},
    m.afterRender = function() {},
    m.render = function() {
        var e = r.renderer;
        e.setClearColor(this.backgroundColor, 1),
        this.usePostprocessing ? (x.queue = this.postprocessingQueue, x.scissorRect.set(this.left, this.top, this.width, this.height), x.useScissor = !0, x.beforeRenderOut = this.boundBeforeRender, x.afterRenderOut = this.boundAfterRender, x.render(this.scene, this.camera, this.postprocessingToScreen)) : this.sceneRenderTarget ? (e.setScissorTest(!1), this.sceneRenderTarget.setSize(this.width, this.height), this.beforeRender(e), e.setRenderTarget(this.sceneRenderTarget), e.render(this.scene, this.camera), e.setRenderTarget(null), this.afterRender(e)) : (e.setRenderTarget(null), e.setScissorTest(!0), e.setViewport(this.left, r.height - this.top - this.height, this.width, this.height), e.setScissor(this.left, r.height - this.top - this.height, this.width, this.height), this.beforeRender(e), e.render(this.scene, this.camera), this.afterRender(e), e.setScissorTest(!1))
    },
    m.getBloom = function() {
        return _ = _ || new d
    },
    m.getSmaa = function() {
        return y = y || new f
    };
    var p = new i.Ray,
    g = new i.Vector3,
    x = void 0,
    _ = void 0,
    y = void 0
},
function(e, t, n) {
    "use strict";
    var i = n(1),
    r = n(41),
    o = (n(2), n(6));
    function a(e) {
        o(this, {
            refDomId: "",
            refDom: null,
            refDomRect: {},
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            offsetTop: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            scrollOffset: 0,
            screenWidth: 0,
            screenHeight: 0,
            inBaseRange: !1,
            needsRender: !1,
            path: null,
            cacheRect: null,
            cacheRectScrollTop: 0
        },
        e)
    }
    e.exports = a;
    var s = a.prototype;
    s.init = function() {
        this.refDom = document.getElementById(this.refDomId)
    },
    s.testViewport = function(e) { ! e && this.cacheRect || (this.cacheRect = this.refDom.getBoundingClientRect(), this.cacheRectScrollTop = i.scrollTop);
        var t = this.scrollOffset = this.cacheRectScrollTop - i.scrollTop + i.height - i.fullHeight,
        n = this.cacheRect,
        o = this.refDomRect;
        o.left = n.left,
        o.top = n.top + this.offsetTop + t,
        o.right = n.right,
        o.bottom = n.bottom + this.offsetTop + t,
        o.width = n.width,
        o.height = n.height,
        this.onDomRectUpdate();
        var a = Math.max(0, o.top),
        s = Math.min(i.height, o.bottom);
        this.inBaseRange = a + 1 < i.height && s > 1,
        a = Math.max(0, o.top - this.paddingTop),
        s = Math.min(i.height, o.bottom + this.paddingBottom),
        this.needsRender = a + 1 < i.height && s > 1,
        this.left = Math.floor(Math.max(0, o.left - this.paddingLeft)),
        this.top = Math.floor(a),
        this.bottom = Math.ceil(s),
        this.width = o.width + this.paddingLeft + this.paddingRight,
        this.height = Math.ceil(s) + (a > this.top ? 1 : 0) - this.top,
        this.screenWidth = i.width,
        this.screenHeight = i.height,
        this.inBaseRange && null !== this.path && r.setPathRange(this.path, this.top, this.bottom)
    },
    s.onDomRectUpdate = function() {}
},
function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.getBlur9Material = v,
    t.getBlur9DepthMaterial = function(e, t) {
        t = !!t;
        var a = (e = !!e) ? t ? u: l: t ? c: d,
        s = i.MAX_VARYING_VECTORS > 8;
        a || (a = new r.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    type: "t",
                    value: o
                },
                u_delta: {
                    type: "v2",
                    value: new r.Vector2
                }
            },
            vertexShader: s ? i.precisionPrefix + n(35) : i.vertexShader,
            fragmentShader: i.precisionPrefix + n(s ? 141 : 142),
            blending: r.NoBlending,
            transparent: !0,
            defines: {
                FROM_LINEAR: e,
                TO_LINEAR: t
            }
        }));
        e ? t ? u = a: l = a: t ? c = a: d = a;
        return a
    },
    t.blur9 = function(e, t, n, i, r, o) {
        m(v(), .25, e, t, n, i, r, o)
    },
    t.blur9RGBA = function(e, t, n, i, r, o) {
        m(v(!0), .25, e, t, n, i, r, o)
    },
    t.blur = m;
    var i = n(4),
    r = n(0),
    o = void 0,
    a = void 0,
    s = void 0,
    u = void 0,
    c = void 0,
    l = void 0,
    d = void 0,
    f = void 0,
    h = void 0;
    function v(e) {
        var t = (e = !!e) ? s: a,
        u = i.MAX_VARYING_VECTORS > 8;
        return t || (t = new r.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    type: "t",
                    value: o
                },
                u_delta: {
                    type: "v2",
                    value: new r.Vector2
                }
            },
            vertexShader: u ? i.precisionPrefix + n(35) : i.vertexShader,
            fragmentShader: i.precisionPrefix + n(u ? 139 : 140),
            blending: r.NoBlending,
            transparent: e,
            defines: {
                USE_RGBA: e
            }
        }), e ? s = t: a = t),
        t
    }
    function m(e, t, n, o, a, s, u, c) {
        var l = Math.ceil(a.width * o) || 0,
        d = Math.ceil(a.height * o) || 0;
        s || (e.transparent ? (h || (h = new r.WebGLRenderTarget(1, 1, {
            minFilter: r.LinearFilter,
            magFilter: r.LinearFilter,
            format: r.RGBAFormat,
            stencilBuffer: !1,
            depthBuffer: !1
        })), s = h) : (f || (f = new r.WebGLRenderTarget(1, 1, {
            minFilter: r.LinearFilter,
            magFilter: r.LinearFilter,
            format: r.RGBFormat,
            stencilBuffer: !1,
            depthBuffer: !1
        })), s = f)),
        i.resizeRenderTarget(s, l, d),
        u ? c || i.resizeRenderTarget(u, a.width, a.height) : u = a,
        e.uniforms.u_texture.value = a.texture || a,
        e.uniforms.u_delta.value.set(n / l * t, 0),
        i.render(e, s),
        e.uniforms.u_texture.value = s.texture || s,
        e.uniforms.u_delta.value.set(0, n / d * t),
        i.render(e, u)
    }
},
function(e, t, n) {
    "use strict"; !
    function(t) {
        function n() {
            this._listeners = [],
            this.dispatchCount = 0
        }
        var i = n.prototype;
        i.add = a,
        i.addOnce = function(e, n, i, s) {
            if (!e) throw r;
            var u = this;
            1 === (s = o.call(arguments, 0)).length && s.push(t);
            s.splice(2, 0,
            function() {
                return u.remove.call(u, e, n),
                e.apply(n, o.call(arguments, 0))
            }),
            a.apply(u, s)
        },
        i.remove = function(e, t) {
            if (!e) return this._listeners.length = 0,
            !0;
            var n, i = this._listeners,
            r = i.length;
            for (; r--;) if ((n = i[r]).f === e && (!t || n.c === t)) return n.j = 0,
            i.splice(r, 1),
            !0;
            return ! 1
        },
        i.dispatch = function(e) {
            e = o.call(arguments, 0),
            this.dispatchCount++;
            var t, n, i = this.dispatchCount,
            r = this._listeners,
            a = r.length;
            for (; a--;) if ((t = r[a]) && t.j < i && (t.j = i, !1 === t.r.apply(t.c, t.a.concat(e)))) {
                n = t;
                break
            }
            r = this._listeners,
            a = r.length;
            for (; a--;) r[a].j = 0;
            return n
        };
        var r = "Callback function is missing!",
        o = Array.prototype.slice;
        function a(e, t, n, i) {
            if (!e) throw r;
            n = n || 0;
            for (var a, s, u, c = this._listeners,
            l = c.length; l--;) if ((a = c[l]).f === e && a.c === t) return ! 1;
            "function" == typeof n && (s = n, n = i, u = 4),
            c.unshift({
                f: e,
                c: t,
                p: n,
                r: s || e,
                a: o.call(arguments, u || 3),
                j: 0
            }),
            c.sort(function(e, t) {
                return e = e.p,
                (t = t.p) < e ? 1 : e > t ? -1 : 0
            })
        }
        e.exports = n
    } ()
},
function(e, t, n) {
    "use strict";
    var i = n(13),
    r = n(7);
    function o(e, t) {
        if (e) {
            for (var n in this.url = e,
            this.loadedWeight = 0,
            this.weight = 1,
            t) this[n] = t[n];
            this.type || (this.type = this.constructor.type),
            this.hasLoading && (this.loadingSignal = new i, this.loadingSignal.add(s, this), this.onLoading && this.loadingSignal.add(this.onLoading));
            var o = this;
            this.boundOnLoad = function() {
                o._onLoad()
            },
            this.onLoaded = new i,
            r.addedItems[e] = this
        }
    }
    e.exports = o;
    var a = o.prototype;
    function s(e) {
        this.loadedWeight = this.weight * e
    }
    a.load = function() {
        this.isStartLoaded = !0
    },
    a._onLoad = function() {
        this.isLoaded = !0,
        this.loadedWeight = this.weight,
        r.loadedItems[this.url] = this,
        this.onLoaded.dispatch(this.content)
    },
    a._onLoading = s,
    a.dispatch = function() {
        this.hasLoading && this.loadingSignal.remove();
        this.onLoaded.dispatch(this.content)
    },
    o.extensions = [],
    o.retrieve = function() {
        return ! 1
    }
},
function(e, t, n) {
    "use strict";
    var i = {
        Linear: {
            None: function(e) {
                return e
            }
        },
        Quad: {
            In: function(e) {
                return e * e
            },
            Out: function(e) {
                return e * (2 - e)
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e: -.5 * (--e * (e - 2) - 1)
            }
        },
        Cubic: {
            In: function(e) {
                return e * e * e
            },
            Out: function(e) {
                return--e * e * e + 1
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e: .5 * ((e -= 2) * e * e + 2)
            }
        },
        Quart: {
            In: function(e) {
                return e * e * e * e
            },
            Out: function(e) {
                return 1 - --e * e * e * e
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e: -.5 * ((e -= 2) * e * e * e - 2)
            }
        },
        Quint: {
            In: function(e) {
                return e * e * e * e * e
            },
            Out: function(e) {
                return--e * e * e * e * e + 1
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e * e: .5 * ((e -= 2) * e * e * e * e + 2)
            }
        },
        Sine: {
            In: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Out: function(e) {
                return Math.sin(e * Math.PI / 2)
            },
            InOut: function(e) {
                return.5 * (1 - Math.cos(Math.PI * e))
            }
        },
        Expo: {
            In: function(e) {
                return 0 === e ? 0 : Math.pow(1024, e - 1)
            },
            Out: function(e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            },
            InOut: function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
            }
        },
        Circ: {
            In: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Out: function(e) {
                return Math.sqrt(1 - --e * e)
            },
            InOut: function(e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }
        },
        Elastic: {
            In: function(e) {
                var t = void 0,
                n = .1;
                return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / .4))
            },
            Out: function(e) {
                var t = void 0,
                n = .1;
                return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * e) * Math.sin(2 * (e - t) * Math.PI / .4) + 1)
            },
            InOut: function(e) {
                var t = void 0,
                n = .1;
                return 0 === e ? 0 : 1 === e ? 1 : (!n || n < 1 ? (n = 1, t = .1) : t = .4 * Math.asin(1 / n) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / .4) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e - t) * Math.PI / .4) * .5 + 1)
            }
        },
        Back: {
            In: function(e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            },
            Out: function(e) {
                var t = 1.70158;
                return--e * e * ((t + 1) * e + t) + 1
            },
            InOut: function(e) {
                var t = 2.5949095;
                return (e *= 2) < 1 ? .5 * e * e * ((t + 1) * e - t) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }
        },
        Bounce: {
            In: function(e) {
                return 1 - i.Bounce.Out(1 - e)
            },
            Out: function(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e: e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            },
            InOut: function(e) {
                return e < .5 ? .5 * i.Bounce.In(2 * e) : .5 * i.Bounce.Out(2 * e - 1) + .5
            }
        }
    };
    t.basic = i,
    t.linear = i.Linear;
    var r = void 0,
    o = void 0;
    for (r in i)"Linear" !== r && (o = i[r], t["easeIn" + r] = o.In, t["easeOut" + r] = o.Out, t["easeInOut" + r] = o.InOut, t["easeOutIn" + r] = o.OutIn = function(e, t) {
        return function(n) {
            return n < .5 ? .5 * t(2 * n) : .5 * e(2 * n - 1) + .5
        }
    } (o.In, o.Out))
},
function(e, t, n) {
    "use strict";
    var i = n(3),
    r = n(5),
    o = n(1),
    a = n(9),
    s = n(2),
    u = n(8),
    c = n(37);
    t.init = function(e) {
        if (!d || m) return;
        document.addEventListener("visibilitychange", k, !1);
        try {
            m = new l,
            M = m.createBiquadFilter(),
            P = m.createPanner(),
            T = m.createGain(),
            F() ? a.onDowned.addOnce(E) : t.gestureVolumeRatio = 1,
            M.connect(P),
            P.connect(T),
            T.connect(m.destination),
            (f = document.getElementById("snd-btn")).style.display = "block",
            (h = document.createElement("canvas")).width = h.height = D * L,
            f.appendChild(h),
            v = h.getContext("2d"),
            a.add(f, "click", O);
            var n = 0,
            i = 0;
            for (var r in x) x[r] || n++;
            if (n > 0) {
                var o = function() {++i === n && e && e()
                };
                for (var s in x) z(s, o)
            } else e && e()
        } catch(e) {}
    },
    t.preload = function(e) {
        if (!d || !m) return;
        p[e = e || "default"] || (p[e] = !0, o.loader.add(i.cdnPath + "audios/" + e + ".mp3", {
            type: "xhr",
            responseType: "arraybuffer",
            _onLoad: function() {
                var t = c.ITEM_CLASSES.xhr.prototype._onLoad.bind(this);
                p[e] = this.xmlhttp.response,
                m ? z(e, t) : t()
            }
        }))
    },
    t.isRequiredGesture = F,
    t.play = function(e) {
        if (!d || !m) return;
        R !== (e = e || "default") && (R &&
        function(e) {
            if (y[e]) {
                y[e] = !1,
                S[e] && S[e].kill();
                var t = {
                    onComplete: function() {
                        b[e] && (b[e] = !1, _[e].disconnect(), x[e].disconnect(), x[e].stop(x[e].currentTime))
                    }
                };
                t[e] = 0,
                S[e] = u.to(w, 1.5, t)
            }
        } (R), R = e,
        function(e) {
            if (!y[e]) {
                if (y[e] = !0, !b[e]) {
                    b[e] = !0;
                    var t = x[e] = m.createBufferSource();
                    t.buffer = g[e],
                    t.loop = !0,
                    t.connect(_[e]),
                    t.start(0),
                    _[e].connect(M)
                }
                S[e] && S[e].kill(),
                w[e] = 0;
                var n = {};
                n[e] = 1,
                C && (n.delay = .5),
                S[e] = u.to(w, 1.5, n)
            }
        } (e));
        C = !1
    },
    t.playEffect = function(e) {
        if (!d || !m) return;
        var t = g[e];
        if (t) {
            var n = m.createBufferSource();
            n.buffer = t,
            n.connect(P),
            n.addEventListener("ended",
            function() {
                n.disconnect()
            }),
            n.start(0)
        }
    },
    t.update = function(e) {
        if (!d || !m) return;
        var n = t.volume * t.gestureVolumeRatio;
        for (var i in _) {
            var r = _[i];
            r.gain.value = w[i]
        }
        P.setPosition(.75 * (o.elasticMouse.x / o.width * 2 - 1), 1 - o.elasticMouse.y / o.height * 2 * .75, -1),
        T.gain.value = n,
        t.distortion += .05 * (t.targetDistortion - t.distortion);
        var a = m.sampleRate / 2,
        u = Math.log(a / 40) / Math.LN2,
        c = Math.pow(2, u * s.map(t.distortion, 1, 0, -.85, 0));
        M.frequency.value = s.clamp(a * c, 40, a),
        x[R];
        var l = n;
        v.save(),
        v.scale(L, L),
        v.clearRect(0, 0, D, D),
        v.fillStyle = "#fff";
        for (var f = 0; f < 7; f++) {
            var h = 3 + 8 * (.5 * Math.sin( - 6 * A + .6 * f) + .5) * l;
            v.fillRect(3 * f, D - h, 1, h)
        }
        v.restore(),
        A += e
    };
    var l = window.AudioContext || window.webkitAudioContext,
    d = !r.isMobile;
    t.volume = 1,
    t.visibleVolume = 1,
    t.distortion = 0,
    t.targetDistortion = 0,
    t.gestureVolumeRatio = 0;
    var f = void 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = {},
    g = {},
    x = {},
    _ = {},
    y = {},
    w = {},
    b = {},
    S = {},
    T = void 0,
    M = void 0,
    P = void 0,
    R = "",
    C = !0,
    I = !1,
    A = 0,
    D = 20,
    L = r.isRetina ? 2 : 1;
    function F() {
        return ! (!d || !m || "suspended" !== m.state)
    }
    function z(e, t) {
        g[e] || (g[e] = !0, m.decodeAudioData(p[e],
        function(n) {
            g[e] = n,
            _[e] = m.createGain(),
            w[e] = 0,
            t && t()
        },
        function() {
            t && t()
        }))
    }
    function E() {
        d && m && (m && m.resume(), u.to(t, 1, {
            gestureVolumeRatio: 1
        }))
    }
    function k(e) {
        d && m && (t.visibleVolume = 1 - this.hidden, T.gain.value = t.volume * t.visibleVolume)
    }
    function O() {
        I = !I,
        u.to(t, .5, {
            volume: I ? 0 : 1
        })
    }
},
function(e, t, n) {
    "use strict";
    var i = n(20),
    r = n(21),
    o = n(73),
    a = n(74);
    e.exports = function(e, t) {
        return e = i(e),
        o(a(e, t = t || r), t)
    }
},
function(e, t, n) {
    "use strict";
    var i = n(6),
    r = n(17),
    o = n(78);
    function a(e) {
        i(this, {
            id: "",
            path: "",
            isTemplate: !1,
            aliases: [],
            _hasInitialized: {},
            domCaches: {},
            useHeroTextEffect: !0,
            currentDom: null,
            currentRefId: "",
            audioId: "default"
        },
        e)
    }
    e.exports = a;
    var s = a.prototype;
    s.preInit = function(e) {},
    s.init = function(e) {
        this.useHeroTextEffect && !this.hasInitialized && (this.currentDom.heroTextEffect = new o(this.currentDom.querySelector(".hero-context"), .4));
        this.hasInitialized = !0
    },
    s.getRefIdFormPathInfo = function(e) {
        return this.isTemplate ? e.pagePath: "default"
    },
    s.getAction = function(e, t) {
        var n = this.getRefIdFormPathInfo(e),
        i = void 0;
        this.domCaches[n] ? (i = this.getHasCacheAction(e, t)).dom = this.domCaches[n] : (i = this.getNoCacheAction(e, t)).dom = null;
        return i.scrollTo = this.getScrollToFromRoute(e.route),
        i
    },
    s.getScrollToFromRoute = function(e) {
        return ""
    },
    s.getHasCacheAction = function(e, t) {
        var n = {
            loadHTML: null,
            needsPreload: !1
        };
        this.isTemplate ? (n.showTransition = !0, n.needsPreload = !0) : n.showTransition = !t;
        return n
    },
    s.getNoCacheAction = function(e, t) {
        var n = {
            showTransition: !0,
            needsPreload: !0
        };
        this.isTemplate ? n.loadHTML = r("pages/" + e.pathLangPrefix + e.pagePath, "/") : n.loadHTML = r("pages/" + e.pathLangPrefix + this.path, "/");
        return n
    },
    s.preShow = function(e) {
        this.currentRefId = this.getRefIdFormPathInfo(e),
        this.currentDom = this.domCaches[this.currentRefId],
        document.title = this.currentDom.dataset.title,
        this.hasInitialized || this.init(e);
        this.currentDom.heroTextEffect && this.currentDom.heroTextEffect.reset();
        this.show(e)
    },
    s.show = function(e) {},
    s.hide = function() {},
    s.preStart = function(e, t) {
        var n = this.getRefIdFormPathInfo(e);
        this.domCaches[n] = t,
        this.preInit(e, t)
    },
    s.resize = function() {},
    s.update = function(e) {
        this.hasInitialized && this.currentDom.heroTextEffect && this.currentDom.heroTextEffect.update()
    },
    Object.defineProperty(s, "hasInitialized", {
        get: function() {
            return !! this._hasInitialized[this.currentRefId]
        },
        set: function(e) {
            this._hasInitialized[this.currentRefId] = e
        }
    })
},
function(e, t, n) {
    "use strict";
    var i = n(1),
    r = n(25),
    o = n(26),
    a = n(15),
    s = n(2),
    u = n(13),
    c = n(8),
    l = n(0);
    t.init = function() {
        document.documentElement.classList.add("is-ready"),
        x = document.getElementById("preloader"),
        _ = document.getElementById("preloader-canvas"),
        y = _.getContext("2d"),
        I = O(),
        A = O(!0),
        D = new l.Color,
        L = new l.Color(328965),
        x.style.backgroundColor = "transparent"
    },
    t.resize = function(e, t) {
        M = _.width = e,
        P = _.height = t,
        R = P + 2 * (C = .4 * t)
    },
    t.start = function(e) {
        e && F && F.kill();
        t.percent = 0,
        i.loader.start(function(n) {
            e ? (F && F.kill(), F = c.to(t, d ? 0 : .5, {
                percent: n,
                onComplete: function() {
                    1 === n && B(e)
                }
            })) : 1 === n && B(e)
        })
    },
    t.showAndHide = function() {
        t.isAnimating() || (T = !0, w = !0, N())
    },
    t.show = N,
    t.update = function(e) {
        if ((t.visibleRatio = Math.min(this.showRatio, 1 - this.hideRatio)) > 0) {
            var n = t.showRatio + t.hideRatio - 1;
            D.set(16777215).lerp(L, t.initialRatio),
            y.fillStyle = D.getStyle(),
            y.clearRect(0, 0, M, P);
            var r = (R + P) * n;
            if (y.fillRect(0, r, M, P), t.showRatio < 1 && y.drawImage(A, 0, r + P - 1, M, C), t.hideRatio > 0 && y.drawImage(I, 0, r - C + 1, M, C), !T) {
                t.percentShowRatio;
                y.save(),
                y.globalAlpha = s.cUnMix(.75, 1, this.showRatio),
                y.translate(100 + (i.width >> 1) + 200 * (1 - t.percentShowRatio), (i.height - (i.width > 1280 ? 0 : o.HEIGHT) >> 1) + (i.width > 1280 ? 0 : o.HEIGHT));
                var u = 200 * a.easeInOutCubic(1 - s.cUnMix(0, .5, this.hideRatio));
                y.fillStyle = "rgba(255,255,255,0.05)",
                y.fillRect( - u, -2, u * t.percentShowRatio, 4),
                y.shadowBlur = 16,
                y.shadowColor = "rgba(255,255,255,0.45)",
                y.fillStyle = "#fff",
                y.fillRect( - u, -2, u * t.percent * t.percentShowRatio, 4),
                y.restore()
            }
        }
    },
    t.initialRatio = 0,
    t.showRatio = 1,
    t.hideRatio = 0,
    t.visibleRatio = 0,
    t.percent = 0,
    t.percentShowRatio = 0,
    t.isAnimating = U,
    t.isIdle = function() {
        return ! i.loader.isLoading && !U()
    };
    var d = !1,
    f = t.onShowStarted = new u,
    h = t.onShowEnded = new u,
    v = t.onLoadCompleted = new u,
    m = t.onHideStarted = new u,
    p = t.onHideEnded = new u,
    g = !0,
    x = void 0,
    _ = void 0,
    y = void 0,
    w = !1,
    b = !1,
    S = !1,
    T = !1,
    M = void 0,
    P = void 0,
    R = void 0,
    C = void 0,
    I = void 0,
    A = void 0,
    D = void 0,
    L = void 0,
    F = void 0,
    z = 1,
    E = 15,
    k = 64;
    function O(e) {
        var t = document.createElement("canvas"),
        n = t.getContext("2d"),
        i = k,
        r = k,
        o = E * Math.PI / 180,
        a = i * Math.tan(o),
        s = Math.cos(o) * (r - a);
        t.width = i,
        t.height = r;
        var u = n.createLinearGradient(0, a, Math.sin(o) * s, a + s * s / (r - a));
        return u.addColorStop(e ? 0 : 1, "rgba(5,5,5,1)"),
        u.addColorStop(e ? 1 : 0, "rgba(5,5,5,0)"),
        n.fillStyle = u,
        n.fillRect(0, 0, i, r),
        t
    }
    function U() {
        return b || S
    }
    function N() {
        if (!t.isAnimating()) {
            r.enable(!1),
            b = !0,
            f.dispatch(),
            x.style.display = "block";
            var e = {
                ease: "easeOutCubic"
            };
            g ? e.initialRatio = 1 : (t.showRatio = 0, t.hideRatio = 0, e.showRatio = 1),
            e.onComplete = function() {
                b = !1,
                h.dispatch(),
                w && V()
            },
            c.set(t, {
                percentShowRatio: 1
            }),
            c.to(t, d ? 0 : z, e)
        }
    }
    function B(e) {
        v.dispatch(),
        e && (b ? w = !0 : V())
    }
    function V() {
        T ? H() : c.to(t, d ? 0 : .65, {
            percentShowRatio: 0,
            onComplete: H,
            ease: "easeInOutQuint"
        })
    }
    function H() {
        r.enable(!0),
        w = !1,
        S = !0,
        m.dispatch(),
        requestAnimationFrame(function() {
            c.to(t, d ? 0 : z, {
                hideRatio: 1,
                ease: "easeInCubic",
                onComplete: function() {
                    x.style.display = "none",
                    S = !1,
                    g = !1,
                    p.dispatch()
                }
            })
        })
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return null == e ? "": e.toString()
    }
},
function(e, t, n) {
    "use strict";
    e.exports = [" ", "\n", "\r", "\t", "\f", "\v", " ", " ", "᠎", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "\u2028", "\u2029", " ", " ", "　"]
},
function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
    }
},
function(e, t, n) {
    "use strict";
    var i = n(24),
    r = n(77);
    e.exports = function(e, t, n) {
        r(e,
        function(r, o) {
            if (i(e, o)) return t.call(n, e[o], o, e)
        })
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
},
function(e, t, n) {
    "use strict";
    t.add = function(e, t, n) {
        var r = function(e) {
            for (var t = 0,
            n = i.length; t < n; t++) if (i[t].img === e) return t;
            return - 1
        } (e);
        if (r > -1) {
            var o = i[r];
            o.src = t,
            o.cb = n;
            var a = i.splice(r, 1);
            i.unshift(a[0])
        } else i.push({
            img: e,
            src: t,
            cb: n
        })
    },
    t.enable = function(e) {
        r = !1 !== e
    },
    t.update = function() {
        if (r && !o && i.length) {
            o = !0;
            var e = (a = i.shift()).img;
            e.onload = s,
            e.src = a.src
        }
    };
    var i = [],
    r = !1,
    o = !1,
    a = void 0;
    function s() {
        a.cb.call(a.img),
        o = !1
    }
},
function(e, t, n) {
    "use strict";
    var i = n(9),
    r = n(83),
    o = n(27);
    t.preInit = function() {
        a = document.getElementById("header"),
        s = document.getElementById("header-menu-btn")
    },
    t.init = function() { (function() {
            for (var e = a.querySelectorAll(".header-menu-item a"), t = a.querySelectorAll(".header-menu-item-mask"), n = 0, o = e.length; n < o; n++) {
                var l = e[n],
                d = t[n];
                l._flipText = new r(l, d),
                l._over = u
            }
            i.add(s, "click", c)
        })(),
        !0
    },
    t.resize = function() {},
    t.setMenuBtn = function(e) {
        var t = s.classList.contains("is-selected");
        t && !e ? s.classList.remove("is-selected") : !t && e && s.classList.add("is-selected")
    },
    t.update = function(e) {},
    t.HEIGHT = 70;
    var a = void 0,
    s = void 0;
    function u(e) {
        this._flipText.flip()
    }
    function c(e) {
        o.toggle()
    }
},
function(e, t, n) {
    "use strict";
    var i = n(2),
    r = n(1),
    o = n(26),
    a = n(19),
    s = n(8);
    t.init = x,
    t.resize = function(e, t) {
        f || e <= 1280 && (x(), c.width = e, c.height = t, v = -1, d = i.distanceTo(e - p, t - g) + 1)
    },
    t.update = function(e) {
        if (f) {
            var n = t.ratio;
            if (v !== n) {
                u.style.visibility = n ? "visible": "hidden",
                l.clearRect(0, 0, r.width, r.fullHeight),
                l.fillStyle = "#fff",
                l.beginPath(),
                l.arc(r.width - p, g, d * n, 0, 2 * Math.PI),
                l.closePath(),
                l.fill();
                for (var o = 1 / (m.length - 1), a = 0, s = m.length; a < s; a++) m[a].opacity = i.cUnMix(.25 + .35 * a * o, .65 + .35 * a * o, n);
                v = n
            }
        }
    },
    t.toggle = function() {
        h ? y() : _()
    },
    t.show = _,
    t.hide = y,
    t.ratio = 0;
    var u = void 0,
    c = void 0,
    l = void 0,
    d = 0,
    f = !1,
    h = !1,
    v = 0,
    m = [],
    p = 40.5,
    g = 37;
    function x() {
        u = document.getElementById("menu"),
        document.getElementById("menu-content"),
        c = document.getElementById("menu-canvas");
        // for (var e = u.querySelectorAll(".menu-menu-item"), t = 0, n = e.length; t < n; t++) m[t] = e[t].style;
        m.push(document.getElementById("menu-lang-selector").style),
        l = c.getContext("2d"),
        a.onHideStarted.add(y),
        f = !0
    }
    function _() {
        f && (h = !0, o.setMenuBtn(!0), document.documentElement.classList.add("is-menu-visible"), s.to(t, .25, {
            ratio: 1,
            ease: "easeInOutSine"
        }))
    }
    function y() {
        f && (h = !1, o.setMenuBtn(!1), document.documentElement.classList.remove("is-menu-visible"), s.to(t, .25, {
            ratio: 0,
            ease: "easeInOutSine"
        }))
    }
},
function(e, t, n) {
    "use strict";
    var i = n(5),
    r = n(1),
    o = n(16),
    a = n(8);
    t.init = function() {
        if (!f) return;
        s = document.getElementById("cursor-follow"),
        u = s.style,
        o.preload("hover0"),
        o.preload("hover1")
    },
    t.rollover = function(e) {
        if (!f) return;
        h(e.dataset.overText || ""),
        "A" === e.tagName && o.playEffect("hover" + (d ^= 1))
    },
    t.rollout = function(e) {
        if (!f) return;
        h()
    },
    t.setBaseText = function(e) {
        if (!f) return;
        t.baseText = e
    },
    t.setOverText = h,
    t.update = function() {
        if (!f) return;
        var e = null == t.overText ? t.baseText || "": t.overText || "";
        e !== c && (c = e, l && (l.kill(), l = null), "" !== c && (t.textRatio = 0, l = a.to(t, .2 + .03 * c.length, {
            textRatio: 1,
            onUpdate: v
        })));
        0 === r.easedMouse.x && 0 === r.easedMouse.x || (u.transform = "translate3d(" + Math.round(r.easedMouse.x) + "px," + Math.round(r.easedMouse.y + 30) + "px,0)");
        t.textOpacity += .1 * (("" === e ? 0 : 1) - t.textOpacity),
        u.opacity = t.textOpacity
    },
    t.textRatio = 0,
    t.textOpacity = 0,
    t.baseText,
    t.overText;
    var s = void 0,
    u = void 0,
    c = "",
    l = void 0,
    d = 0,
    f = t.IS_ACTIVE = !i.isMobile;
    function h(e) {
        f && (t.overText = e)
    }
    function v() {
        var e = t.textRatio;
        s.innerHTML = c.substr(0, Math.floor(e * c.length)) + (e < 1 ? String.fromCharCode(33 + Math.floor(93 * Math.random())) : "")
    }
},
function(e, t) {
    e.exports = "\nuniform sampler2D u_texture;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    gl_FragColor = texture2D( u_texture, v_uv );\n}\n"
},
function(e, t, n) {
    "use strict";
    var i = n(24),
    r = n(94),
    o = n(96);
    e.exports = function e() {
        var t, n, a, s, u = 1;
        for (s = r(arguments[0]); a = arguments[u++];) for (t in a) i(a, t) && (n = a[t], o(n) && o(s[t]) ? s[t] = e(s[t], n) : s[t] = r(n));
        return s
    }
},
function(e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    };
    e.exports = function(e) {
        return !! e && "object" === (void 0 === e ? "undefined": i(e)) && e.constructor === Object
    }
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = t.sharedUniforms = {};
    t.bgMesh = null,
    t.init = function(e) {
        o = e,
        r.u_lightScatterDivider = {
            value: 150
        },
        r.u_lightScatterPowInv = {
            value: .4
        },
        r.u_cameraPosition = {
            value: o.cameraPosition
        },
        r.u_lightColor = {
            value: new i.Color
        },
        r.u_lightPosition = {
            value: o.mouse3
        },
        r.u_lightViewPosition = {
            value: new i.Vector3
        },
        t.bgMesh = new i.Mesh(new i.PlaneBufferGeometry(1e3, 1e3), a = new i.ShaderMaterial({
            uniforms: {
                u_color: {
                    value: new i.Color
                },
                u_lightColor: r.u_lightColor,
                u_lightScatterDivider: r.u_lightScatterDivider,
                u_lightScatterPowInv: r.u_lightScatterPowInv,
                u_lightPosition: r.u_lightPosition,
                u_cameraPosition: r.u_cameraPosition
            },
            vertexShader: n(106),
            fragmentShader: n(107),
            dithering: !0,
            blending: i.NoBlending
        })),
        t.bgMesh.position.z = -50
    },
    t.update = function(e) {
        a.uniforms.u_color.value.setHex(o.backgroundColor),
        r.u_lightViewPosition.value.copy(o.mouse3).applyMatrix4(o.camera.matrixWorldInverse),
        r.u_lightScatterDivider.value = o.scatterDivider,
        r.u_lightScatterPowInv.value = o.scatterPowInv,
        r.u_lightColor.value.setHex(o.lightColor)
    };
    var o = void 0,
    a = void 0
},
function(e, t, n) {
    "use strict";
    var i = n(4),
    r = n(0);
    t.init = function() {
        o = new r.Color,
        a = new r.RawShaderMaterial({
            uniforms: {
                u_fromColor: {
                    value: new r.Vector4
                },
                u_toColor: {
                    value: new r.Vector4
                },
                u_fromY: {
                    value: 0
                },
                u_toY: {
                    value: 1
                }
            },
            depthTest: !1,
            depthWrite: !1,
            transparent: !0,
            blending: r.NormalBlending,
            vertexShader: i.precisionPrefix + n(113),
            fragmentShader: i.precisionPrefix + n(114)
        }),
        s = new r.PlaneBufferGeometry(2, 2, 1, 3),
        u = new r.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    value: null
                },
                u_ys: {
                    value: new r.Vector4
                }
            },
            depthTest: !1,
            depthWrite: !1,
            transparent: !0,
            blending: r.NormalBlending,
            vertexShader: i.precisionPrefix + n(115),
            fragmentShader: i.precisionPrefix + n(116)
        })
    },
    t.renderVerticalGradient = function(e, t, n, r, s, u, c) {
        var l = i.getColorState(),
        d = a.uniforms,
        f = i.renderer;
        f.autoClearColor = !1,
        f.autoClearDepth = !1,
        o.setHex(n),
        d.u_fromColor.value.set(o.r, o.g, o.b, r),
        o.setHex(s),
        d.u_toColor.value.set(o.r, o.g, o.b, u),
        d.u_fromY.value = e,
        d.u_toY.value = t,
        i.renderGeometry(i.quadGeom, a, c),
        i.setColorState(l)
    },
    t.renderVerticalGradientMask = function(e, t, n, r, o, a, c) {
        var l = i.getColorState(),
        d = i.renderer;
        d.autoClearColor = !1,
        d.autoClearStencil = !1,
        d.autoClearDepth = !1,
        u.uniforms.u_texture.value = e,
        u.uniforms.u_ys.value.set(t, n, r, o),
        i.renderGeometry(s, u, a),
        i.setColorState(l)
    };
    var o = void 0,
    a = void 0,
    s = void 0,
    u = void 0
},
function(e, t, n) {
    "use strict";
    var i = t.sharedUniforms = {};
    t.init = function(e) {
        i.u_lightScatterDivider = {
            value: 15
        },
        i.u_lightScatterPowInv = {
            value: .3
        },
        i.u_cameraPosition = {
            value: e.cameraPosition
        },
        i.u_lightPosition = {
            value: e.mouse3
        }
    }
},
function(e, t) {
    e.exports = "attribute vec3 position;\n\nuniform vec2 u_delta;\nvarying vec2 v_uv[9];\n\nvoid main() {\n    vec2 uv = position.xy * 0.5 + 0.5;\n\n    v_uv[0] = uv;\n\n    vec2 delta = u_delta;\n    v_uv[1] = uv - delta;\n    v_uv[2] = uv + delta;\n\n    delta += u_delta;\n    v_uv[3] = uv - delta;\n    v_uv[4] = uv + delta;\n\n    delta += u_delta;\n    v_uv[5] = uv - delta;\n    v_uv[6] = uv + delta;\n\n    delta += u_delta;\n    v_uv[7] = uv - delta;\n    v_uv[8] = uv + delta;\n\n    gl_Position = vec4( position, 1.0 );\n\n}\n"
},
function(e, t, n) {
    "use strict";
    var i = n(0);
    function r(e) {
        return "#include <" + e + ">"
    }
    t.addChunk = function(e, t) {
        i.ShaderChunk[e] = t
    },
    t.insertBefore = function(e, t, n, i) {
        i && (t = r(t));
        return e.replace(t, n + "\n" + t)
    },
    t.insertAfter = function(e, t, n, i) {
        i && (t = r(t));
        return e.replace(t, t + "\n" + n + "\n")
    },
    t.replace = function(e, t, n, i) {
        i && (t = r(t));
        return e.replace(t, "\n" + n + "\n")
    }
},
function(e, t, n) {
    "use strict";
    e.exports = n(7),
    n(63),
    n(64),
    n(38),
    n(65),
    n(66),
    n(67),
    n(68),
    n(39)
},
function(e, t, n) {
    "use strict";
    var i = n(39),
    r = n(7);
    function o(e, t) {
        e && (t.responseType = "text", a.constructor.apply(this, arguments))
    }
    e.exports = o,
    o.type = "text",
    o.extensions = ["html", "txt", "svg"],
    r.register(o),
    o.retrieve = function() {
        return ! 1
    };
    var a = i.prototype,
    s = o.prototype = new i;
    s.constructor = o,
    s._onLoad = function() {
        this.content || (this.content = this.xmlhttp.responseText);
        a._onLoad.apply(this, arguments)
    }
},
function(e, t, n) {
    "use strict";
    var i, r = n(14),
    o = n(7),
    a = !!window.XMLHttpRequest;
    function s(e) {
        e && (u.constructor.apply(this, arguments), this.responseType = this.responseType || "", this.method = this.method || "GET")
    }
    e.exports = s,
    s.type = "xhr",
    s.extensions = [],
    o.register(s),
    s.retrieve = function() {
        return ! 1
    };
    var u = r.prototype,
    c = s.prototype = new r;
    c.constructor = s,
    c.load = function() {
        u.load.apply(this, arguments);
        var e, t = this;
        e = this.xmlhttp = a ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
        this.hasLoading && (e.onprogress = function(e) {
            t._onXmlHttpProgress(e)
        });
        e.onreadystatechange = function() {
            t._onXmlHttpChange()
        },
        e.open(this.method, this.url, !0),
        this.xmlhttp.responseType = this.responseType,
        a ? e.send(null) : e.send()
    },
    c._onXmlHttpChange = function() {
        4 === this.xmlhttp.readyState && 200 === this.xmlhttp.status && this._onLoad(this.xmlhttp)
    },
    c._onXmlHttpProgress = function(e) {
        this.loadingSignal.dispatch(e.loaded / e.total)
    },
    c._onLoad = function() {
        this.content || (this.content = this.xmlhttp.response);
        this.xmlhttp = i,
        u._onLoad.call(this)
    }
},
function(e, t, n) {
    "use strict";
    var i = n(71);
    e.exports = function(e, t) {
        return - 1 !== i(e, t)
    }
},
function(e, t, n) {
    "use strict";
    var i = n(5),
    r = n(1),
    o = n(17),
    a = n(40),
    s = n(75),
    u = n(43),
    c = n(18),
    l = n(16),
    d = n(9),
    f = n(19),
    h = n(27),
    v = n(28),
    m = n(84),
    p = n(86),
    g = n(2),
    x = n(48),
    _ = {
        home: n(120),
        about: n(162),
        project: n(179)
    },
    y = [],
    w = [];
    t.preInit = function() {
        for (var e in _) for (var t = _[e].aliases, n = 0, i = t.length; n < i; n++) {
            var r = N(t[n], _[e]);
            r.page = _[e],
            y.push(r)
        }
        w.push(N("contact", "contact")),
        w.push(N("blog", "featured")),
        y.push.apply(y, w),
        y.sort(function(e, t) {
            return t.depth - e.depth
        }),
        T = document.getElementById("page-container"),
        (b = new m({
            inputTarget: document.body,
            wrapper: document.getElementById("main"),
            moveContainer: document.getElementById("main-scroll"),
            indicator: document.getElementById("main-scrollbar-indicator"),
            isBound: !0,
            autoUpdateStyles: !1,
            indicatorPadding: 32
        })).init(),
        O = document.getElementById("main-scroll-indicator").style
    },
    t.init = function() {
        var e = ie(te((M = document.querySelector("main")).dataset.url));
        t.currPathInfo = t.nextPathInfo = ie(te(window.location.href)),
        t.currPage = t.nextPage = e.aliasInfo.page,
        t.currPage.preStart(e, M),
        l.preload(t.currPage.audioId);
        for (var n = 0,
        i = w.length; n < i; n++) {
            var r = w[n];
            if (r.regexp.test(t.currPathInfo.pagePath)) {
                C = r.ref;
                break
            }
        }
        C = C || t.currPage.getScrollToFromRoute(t.currPathInfo.route),
        window.addEventListener("popstate", ee),
        q(document.body),
        X(document.body),
        f.onShowStarted.add(V),
        f.onShowEnded.add(H),
        f.onLoadCompleted.add(W),
        f.onHideStarted.add(G),
        f.onHideEnded.add(j),
        f.onHideStarted.addOnce(B)
    },
    t.resize = function(e, n) {
        t.currPage.resize(e, n)
    },
    t.updateScrollPane = function() {
        b.onResize(),
        oe()
    },
    t.scrollTo = se,
    t.update = function(e) {
        oe(),
        U += b._tPos < -1 ? -.03 : .05,
        U = g.clamp(U, 0, 1),
        O.opacity = U,
        !k && E < 1 && E !== b._tPos && (k = !0, v.setBaseText(""));
        t.currPage.update(e, r.scrollTop)
    },
    t.setPathRange = function(e, t, n) {
        e = o(e, "/"),
        D[e] = {
            top: t,
            bottom: n
        }
    },
    t.checkReplaceHistoryState = function() {
        if (!I && !t.isScrollingTo) {
            var e = void 0,
            n = .5 * r.height;
            for (var a in D) {
                var s = D[a];
                if (s.top <= n && s.bottom >= n) {
                    e = a;
                    break
                }
            }
            if (void 0 !== e) {
                var u = o((r.lang === F ? "": r.lang + "/") + e, "/");
                // u !== te(document.location.href || window.location.href) && (history.replaceState(null, null, u + (i.isSafari || i.isIOS ? "#": "")), le())
            }
        }
        D = {}
    },
    t.currPathInfo = null,
    t.currPage = null,
    t.nextPathInfo = null,
    t.nextPage = null,
    t.isScrollingTo = !1;
    var b = void 0,
    S = void 0,
    T = void 0,
    M = void 0,
    P = void 0,
    R = !1,
    C = null,
    I = !0,
    A = !0,
    D = {},
    L = "",
    F = "en",
    z = window.supportedLangs,
    E = 1,
    k = !1,
    O = void 0,
    U = 0;
    function N(e, t) {
        for (var n = e.split("/"), i = 0, r = n.length; i < r; i++) n[i] = "?" === n[i] ? "[^/]+": n[i];
        return {
            ref: t,
            isPage: t instanceof c,
            isId: s(t),
            depth: n.length,
            regexp: new RegExp(n.join("\\/") + "$")
        }
    }
    function B() {
        v.setBaseText(b.wrapper.dataset.scrollTooltip),
        E = b._tPos
    }
    function V() {
        I = !0,
        M && (b.moveContainer.style.pointerEvents = "none")
    }
    function H() {}
    function W() {
        A || R && (R = !1, t.nextPage.preStart(t.nextPathInfo, P), f.start(!0))
    }
    function G() {
        A || (M && M.parentNode === T && T.removeChild(M), t.currPage.hide(), (M = P).style.display = "block", q(M), X(M)),
        b.moveContainer.style.pointerEvents = "auto",
        t.currPathInfo = t.nextPathInfo,
        t.currPage = t.nextPage,
        t.nextPage = null,
        t.nextPathInfo = null,
        t.currPage.preShow(t.currPathInfo),
        l.play(t.currPage.audioId),
        v.setBaseText(""),
        x.onPageChange(t.currPathInfo),
        b.onResize(),
        se(C, !0),
        le(),
        A = !1
    }
    function j() {
        I = !1,
        S && ae(S)
    }
    function q(e) {
        if (!e.dataset.hasLinksParsed) {
            for (var t = e.getElementsByTagName("a"), n = t.length; n--;) Y(t[n]);
            e.dataset.hasLinksParsed = !0
        }
    }
    function X(e) {
        if (v.IS_ACTIVE && !e.dataset.hasWhiteItemsParsed) {
            for (var t = e.querySelectorAll(".is-white-content"), n = t.length; n--;) Y(t[n]);
            e.dataset.hasWhiteItemsParsed = !0
        }
    }
    function Y(e) {
        e.dataset.hasParsed || (d.add(e, "over", u(Z, e)), d.add(e, "out", u(K, e)), "A" === e.tagName && (e.addEventListener("click", Q), e.href && (0 === e.href.indexOf(i.baseUrl) ? d.add(e, "click", u(J, e)) : d.add(e, "click", u($, e)))), e.dataset.hasParsed = !0)
    }
    function Z(e) {
        this._over && this._over.call(this),
        v.rollover(this)
    }
    function K(e) {
        this._out && this._out.call(this),
        v.rollout(this)
    }
    function Q(e) {
        e.preventDefault()
    }
    function J(e) {
        var t = te(this.href);
        // history.pushState(null, null, t),
        re(t),
        f.isAnimating() || h.hide()
    }
    function $(e) {
        window.open(this.href, this.target)
    }
    function ee(e) {
        e.preventDefault(),
        re(te(window.location.href))
    }
    function te(e) {
        return o(e.split("#")[0].replace(i.baseUrl, ""), "/").split("?")[0]
    }
    function ne(e) {
        var t = (e = o(e, "/")).split("/");
        return a(z, t[0]) ? t.slice(1).join("/") : e
    }
    function ie(e) {
        for (var t, n = (t = o(e, "/").split("/"), a(z, t[0]) ? t[0] : F), i = ne(e) || "home", r = void 0, s = 0, u = y.length; s < u; s++) {
            var c = y[s];
            if (c.regexp.test(i)) {
                r = c;
                break
            }
        }
        return {
            lang: n,
            pathLangPrefix: n === F ? "": n + "/",
            route: i.split("/"),
            pagePath: i,
            pageUrl: i.replace(/^home\/?/, ""),
            aliasInfo: r
        }
    }
    function re(e) {
        var t = ie(e);
        f.isIdle() ? ae(t) : S = t
    }
    function oe() {
        b.render(),
        b.updateStyles();
        var e = -b._pos;
        r.scrollTopVelocity = e - r.scrollTop,
        r.scrollTop = e
    }
    function ae(e) {
        if (S = null, e.lang !== r.lang && (window.location.href = e.pathLangPrefix + e.pageUrl), e.aliasInfo) if (t.nextPathInfo = e, e.aliasInfo.isId) t.currPathInfo = t.nextPathInfo,
        se(e.aliasInfo.ref);
        else {
            t.nextPage = e.aliasInfo.page;
            var n = t.currPage === t.nextPage,
            i = e.aliasInfo.page.getAction(e, n);
            C = i.scrollTo,
            i.showTransition ? i.loadHTML ? (R = !0, r.loader.add(i.loadHTML, {
                type: "text",
                onLoad: function(e) { (P = p.createElement(e)).style.display = "none",
                    T.insertBefore(P, T.childNodes[0])
                }
            }), l.preload(t.nextPage.audioId), f.show(), f.start(!1)) : (R = !1, i.dom === M || ((P = i.dom).style.display = "none", T.insertBefore(P, T.childNodes[0]), f.showAndHide())) : (t.currPathInfo = t.nextPathInfo, t.currPage = t.nextPage, i.scrollTo && se(i.scrollTo))
        } else console.log("unknown page")
    }
    function se(e, n) {
        C = null,
        t.isScrollingTo = !0,
        n && (b._tPos = 0);
        var i = e ? -document.getElementById(e).getBoundingClientRect().top: 0,
        o = (i += r.width > 1280 ? 0 : 70) + b._tPos;
        if (n) TweenLite.set(b, {
            _tPos: o,
            _pos: o
        }),
        ue(),
        ce(),
        oe();
        else {
            var a = Math.max(.4, Math.abs(i) / window.screen.height / 3 + .2);
            TweenLite.to(b, a, {
                _tPos: o,
                _pos: o,
                onUpdate: ue,
                ease: "easeInOutCubic",
                onComplete: ce
            })
        }
    }
    function ue() {
        b.moveToPos(b._tPos, 1, !0)
    }
    function ce() {
        t.isScrollingTo = !1,
        le()
    }
    function le() {
        var e = ne(te(window.location.href)).split("/")[0] || "home";
        e !== L && (L && document.documentElement.classList.remove("at-" + L), document.documentElement.classList.add("at-" + e), L = e)
    }
},
function(e, t, n) {
    "use strict";
    var i = n(22);
    e.exports = function(e, t) {
        return i(e) === t
    }
},
function(e, t, n) {
    "use strict";
    var i = n(76);
    e.exports = function(e, t, n) {
        var r = i(arguments, 2);
        return function() {
            return e.apply(t, r.concat(i(arguments)))
        }
    }
},
function(e, t, n) {
    "use strict";
    var i = n(80);
    e.exports = function(e) {
        var t, n = [];
        if (null == e) return n;
        for (var r = -1,
        o = e.length; ++r < o;) r ? (t = i(0, r), n[r] = n[t], n[t] = e[r]) : n[0] = e[0];
        return n
    }
},
function(e, t, n) {
    "use strict";
    e.exports = -2147483648
},
function(e, t, n) {
    "use strict";
    e.exports = 2147483647
},
function(e, t, n) {
    "use strict";
    var i = n(5),
    r = i.transform3dStyle,
    o = i.transformStyle;
    t.moveY = r ?
    function(e, t) {
        e[r] = "translate3d(0," + t + "px,0)"
    }: o ?
    function(e, t) {
        e[o] = "translate(0," + t + "px)"
    }: function(e, t) {
        e.top = t + "px"
    }
},
function(e, t, n) {
    "use strict";
    var i = n(5),
    r = n(1),
    o = n(87),
    a = n(117),
    s = n(119),
    u = n(11),
    c = n(2);
    t.preInit = function() {
        r.isSupportWebGL && o.preInit();
        d = document.getElementById("featured-items-container").style;
        for (var e = document.querySelectorAll(".featured-item"), t = 0, n = e.length; t < n; t++) {
            var i = new a({
                index: t,
                dom: e[t]
            });
            i.preInit(),
            l.push(i)
        }
    },
    t.init = function() {
        var e = document.getElementById("featured-title");
        f = new u({
            refDom: e
        }),
        h = new s({
            dom: e,
            splitWith: "<br>",
            forceSplitWidth: !0,
            delayWeight: .2
        }),
        e = document.getElementById("featured-desc"),
        v = new u({
            refDom: e
        }),
        m = new s({
            dom: e,
            delayWeight: .2
        }),
        r.isSupportWebGL && o.init();
        for (var t = 0,
        n = l.length; t < n; t++) {
            var i = l[t];
            i.init()
        }
        p = !0
    },
    t.precompile = function() {
        r.renderer.compile(this.scene, this.camera)
    },
    t.resize = function() {
        if (p) {
            f.testViewport(!0),
            h.resize(f.width),
            v.testViewport(!0),
            m.resize(v.width);
            for (var e = 0,
            t = l.length; e < t; e++) {
                var n = l[e];
                n.resize()
            }
            r.isSupportWebGL && o.resize()
        }
    },
    t.onPageChange = function(e) {
        for (var t = "blog" === e.route[0] && e.route.length > 1, n = 0, i = l.length; n < i; n++) {
            var r = l[n],
            o = !t || r.id != e.route[1];
            r.dom.style.display = o ? "block": "none",
            o && r.reset()
        }
    },
    t.update = function(e) {
        if (p) {
            f.testViewport(),
            f.bottom > 0 && f.top < .65 * r.height ? g || (g = !0, h.show(1.5)) : f.top > r.height && g && (g = !1, h.hide(0)),
            v.testViewport(),
            v.bottom > 0 && v.top < .75 * r.height ? x || (x = !0, m.show(1.5)) : v.top > r.height && x && (x = !1, m.hide(0));
            for (var t = [[0, Math.abs(f.top + .5 * f.height - .5 * r.height)]], n = 0, a = l.length; n < a; n++) {
                var s = l[n];
                s.update(),
                t.push([n + 1, Math.abs(s.domRect.top + .5 * s.domRect.height - .5 * r.height)])
            }
            t.sort(_),
            r.isSupportWebGL && o.update(e, t[0][0]),
            i.isMac && i.isFirefox || (d.transform = "skewY(" + c.clamp(r.scrollTopVelocity / 20, -8, 8) + "deg) translateZ(0)")
        }
    };
    var l = [],
    d = void 0,
    f = void 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = !1,
    g = !0,
    x = !0;
    function _(e, t) {
        return e[1] - t[1]
    }
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(30),
    o = n(4);
    function a(e) {
        r(this, {
            uniforms: {
                u_texture: {},
                u_resolution: {
                    value: null
                },
                u_fullResolution: {
                    value: null
                },
                u_isVR: {
                    value: !1
                }
            },
            defines: {},
            enabled: !0,
            vertexShader: "",
            fragmentShader: "",
            isRawMaterial: !0,
            depthTest: !1,
            depthWrite: !1,
            blending: i.NoBlending,
            transparent: !0
        },
        e),
        this.vertexShader || (this.vertexShader = o.vertexShader),
        this.addRawShaderPrefix && this.isRawMaterial && (this.vertexShader = o.precisionPrefix + this.vertexShader, this.fragmentShader = o.precisionPrefix + this.fragmentShader),
        this.material = new(this.isRawMaterial ? i.RawShaderMaterial: i.ShaderMaterial)({
            uniforms: this.uniforms,
            vertexShader: this.vertexShader,
            fragmentShader: this.fragmentShader,
            defines: this.defines,
            depthTest: this.depthTest,
            depthWrite: this.depthWrite,
            blending: this.blending,
            transparent: this.transparent
        })
    }
    e.exports = a;
    var s = a.prototype;
    s.setPostprocessing = function(e) {
        this.uniforms.u_resolution.value = e.resolution
    },
    s.dispose = function() {},
    s.needsRender = function() {
        return ! 0
    },
    s.render = function(e, t) {
        this.uniforms.u_texture.value = e.fromTexture,
        e.renderMaterial(this.material, t ? null: e.toRenderTarget),
        e.swap()
    }
},
function(e, t, n) {
    "use strict";
    var i = n(4),
    r = n(49),
    o = n(30),
    a = n(0);
    function s(e) {
        e = o({},
        e),
        this.edgesRenderTarget = i.createRenderTarget(1, 1),
        this.weightsRenderTarget = i.createRenderTarget(1, 1, !0),
        this.uResolutionInv = {
            value: new a.Vector2
        },
        u.constructor.call(this, o({
            uniforms: {
                u_weightsTexture: {
                    value: this.weightsRenderTarget.texture
                },
                u_resolutionInv: this.uResolutionInv
            },
            vertexShader: i.precisionPrefix + n(100),
            fragmentShader: i.precisionPrefix + n(101)
        },
        e)),
        this.edgesMaterial = new a.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    value: null
                },
                u_resolutionInv: this.uResolutionInv
            },
            vertexShader: i.precisionPrefix + n(102),
            fragmentShader: i.precisionPrefix + n(103),
            defines: {
                SMAA_THRESHOLD: "0.1"
            },
            blending: a.NoBlending,
            depthTest: !1,
            depthWrite: !1
        }),
        this.weightsMaterial = new a.RawShaderMaterial({
            uniforms: {
                u_edgesTexture: {
                    value: this.edgesRenderTarget.texture
                },
                u_areaTexture: l.u_areaTexture,
                u_searchTexture: l.u_searchTexture,
                u_resolutionInv: this.uResolutionInv
            },
            vertexShader: i.precisionPrefix + n(104),
            fragmentShader: i.precisionPrefix + n(105),
            defines: {
                SMAA_MAX_SEARCH_STEPS: "8",
                SMAA_AREATEX_MAX_DISTANCE: "16",
                SMAA_AREATEX_PIXEL_SIZE: "( 1.0 / vec2( 160.0, 560.0 ) )",
                SMAA_AREATEX_SUBTEX_SIZE: "( 1.0 / 7.0 )"
            },
            transparent: !0,
            blending: a.NoBlending,
            depthTest: !1,
            depthWrite: !1
        })
    }
    var u = r.prototype,
    c = s.prototype = Object.create(u);
    c.constructor = s,
    c.setPostprocessing = function(e) {
        u.setPostprocessing.call(this, e);
        var t = e.width,
        n = e.height;
        this.edgesRenderTarget.setSize(t, n),
        this.weightsRenderTarget.setSize(t, n),
        this.uResolutionInv.value.set(1 / t, 1 / n)
    },
    c.dispose = function() {
        this.edgesRenderTarget && this.edgesRenderTarget.dispose();
        this.weightsRenderTarget && this.weightsRenderTarget.dispose()
    },
    c.render = function(e, t) {
        var n = i.getColorState();
        l.u_searchTexture.value || console.warn("You need to use Smaa.setImages() to set the smaa textures manually and assign to this class.");
        var r = i.renderer;
        r.autoClear = !0,
        r.setClearColor(0, 0),
        this.edgesMaterial.uniforms.u_texture.value = e.fromTexture,
        e.renderMaterial(this.edgesMaterial, this.edgesRenderTarget, !0),
        e.renderMaterial(this.weightsMaterial, this.weightsRenderTarget, !0),
        i.setColorState(n),
        this.material.uniforms.u_texture.value = e.fromTexture,
        u.render.call(this, e, t)
    },
    (e.exports = s).setTextures = function(e, t) {
        var n = void 0; (n = l.u_areaTexture.value = d(e)).format = a.RGBFormat,
        n.minFilter = a.LinearFilter,
        (n = l.u_searchTexture.value = d(t)).magFilter = a.NearestFilter,
        n.minFilter = a.NearestFilter
    };
    var l = {
        u_areaTexture: {
            value: null
        },
        u_searchTexture: {
            value: null
        }
    };
    function d(e) {
        var t = new a.Texture(e);
        return t.generateMipmaps = !1,
        t.needsUpdate = !0,
        t.flipY = !1,
        t
    }
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(4),
    o = n(1);
    t.add = function(e, t, o, c) {
        d || (v = r.createRenderTarget(1, 1, !0), d = new i.RawShaderMaterial({
            uniforms: f = {
                u_texture: {
                    value: null
                },
                u_textureSize: {
                    value: new i.Vector2
                }
            },
            depthTest: !1,
            depthWrite: !1,
            vertexShader: r.vertexShader,
            fragmentShader: r.precisionPrefix + n(118)
        }));
        null == e.dataset.thumbIndex && (e.dataset.thumbIndex = l, a[l] = e, u[l] = {
            w: t,
            h: o
        },
        s[l] = c, l++)
    },
    t.remove = p,
    t.update = function() {
        for (; c < l;) {
            if (a[c]) {
                var e = a[c],
                t = u[c],
                n = s[c],
                g = t.w,
                x = t.h;
                if (p(e), o.isSupportWebGL) {
                    h && h.dispose(),
                    (h = new i.Texture(e)).flipY = !1,
                    h.needsUpdate = !0,
                    h.generateMipmaps = !1,
                    h.minFilter = h.magFilter = i.LinearFilter,
                    v.width === g && v.height === x || (v.setSize(g, x), m = new Uint8Array(g * x * 4)),
                    f.u_texture.value = h,
                    f.u_textureSize.value.set(e.naturalWidth, e.naturalHeight),
                    r.render(d, v),
                    r.renderer.readRenderTargetPixels(v, 0, 0, g, x, m);
                    var _ = document.createElement("canvas"),
                    y = _.getContext("2d");
                    _.width = g,
                    _.height = x,
                    _.ctx = y;
                    var w = y.createImageData(g, x);
                    w.data.set(m),
                    y.putImageData(w, 0, 0),
                    n(_);
                    break
                }
                n(e)
            }
            c++
        }
    };
    var a = [],
    s = [],
    u = [],
    c = 0,
    l = 0,
    d = void 0,
    f = void 0,
    h = void 0,
    v = void 0,
    m = void 0;
    function p(e) {
        var t = e.dataset.thumbIndex;
        null != t && (a[t] = null, u[t] = null, s[t] = null)
    }
},
function(e, t, n) {
    "use strict";
    var i = n(6),
    r = n(53),
    o = n(2),
    a = n(15),
    s = n(8);
    function u(e) {
        c.constructor.call(this, i({
            duration: 0,
            delayBase: 0,
            delayTotal: 1,
            delayWeight: .2,
            masks: null,
            isVisible: !1,
            textColor: 16777215,
            ratio: 0,
            lastLineRatio: 0,
            tween: null
        },
        e)),
        this.dom.classList.add("split-line-mask-effect"),
        this.boundOnUpdate = this.update.bind(this)
    }
    var c = r.prototype,
    l = u.prototype = Object.create(c);
    e.exports = u,
    l.resize = function(e) {
        c.resize.call(this);
        for (var t = this.lines,
        n = 0,
        i = t.length; n < i; n++) {
            var r = document.createElement("div");
            r.classList.add("split-line-mask"),
            r.style.width = e + "px",
            r.style.transform = "translate3d(-105%,0,0)",
            t[n].appendChild(r),
            this.isVisible && t[n].classList.add("is-visible")
        }
        this.masks = this.dom.querySelectorAll(".split-line-mask"),
        this.delayTotal = this.lineCount
    },
    l.show = function(e) {
        s.killTweensOf(this.tween),
        this.isVisible = !0,
        e = this.duration = void 0 === e ? 1 : e,
        this.tween = s.to(this, e, {
            ratio: 1,
            ease: "linear",
            onUpdate: this.boundOnUpdate
        })
    },
    l.hide = function(e) {
        s.killTweensOf(this.tween),
        this.isVisible = !1,
        e = this.duration = void 0 === e ? 1 : e,
        this.tween = s.to(this, e, {
            ratio: 0,
            ease: "linear",
            onUpdate: this.boundOnUpdate
        })
    },
    l.update = function() {
        var e = this.lines;
        if (e) for (var t = this.masks,
        n = this.ratio,
        i = this.duration * this.delayWeight / this.delayTotal,
        r = 1 - i * this.delayTotal,
        s = 0,
        u = e.length; s < u; s++) {
            var c = this.lastLineRatio = a.easeInOutQuint(o.cUnMix(i * s, r + i * s, n)),
            l = e[s].classList.contains("is-visible"),
            d = c > .5;
            l && !d ? e[s].classList.remove("is-visible") : !l && d && e[s].classList.add("is-visible"),
            t[s].style.transform = "translate3d(" + (210 * c - 105) + "%,0,0)"
        }
    }
},
function(e, t, n) {
    "use strict";
    var i = n(6),
    r = n(17);
    function o(e) {
        i(this, {
            text: "",
            dom: null,
            lineCount: 0,
            lines: null,
            splitWith: null,
            spaceBetweenWords: !0,
            forceSplitWidth: !1
        },
        e),
        this.dom = this.dom || document.createElement("div"),
        this.text = this.text || this.dom.innerHTML,
        null === this.splitWith ? this.words = this.text.split(/\s+/g) : this.words = r(this.text).split(this.splitWith),
        this.style = this.dom.style
    }
    var a = o.prototype;
    e.exports = o,
    a.resize = function() {
        var e = this.words;
        this.dom.innerHTML = "";
        var t = void 0,
        n = !0,
        i = "",
        o = void 0,
        a = "",
        s = 0;
        if (this.forceSplitWidth) {
            var u = '<div class="split-line">';
            this.dom.innerHTML = u + e.join("</div><br>" + u) + "</div><br>",
            s = e.length
        } else for (var c = 0,
        l = e.length + 1; c < l; c++) {
            var d = e[c];
            if (n && (n = !1, o && this.dom.appendChild(document.createElement("br")), (o = document.createElement("div")).className = "split-line", this.dom.appendChild(o), t = -1, a = "", s++, i && (a += " " + i, o.innerHTML = r(a), t = o.offsetHeight, o.innerHTML = "", i = "")), d) {
                o.innerHTML = a + " " + d;
                var f = o.offsetHeight;
                t > -1 && f > t ? (o.innerHTML = r(a), i = d, n = !0) : a += (this.spaceBetweenWords ? " ": "") + d,
                t = f
            } else o.innerHTML = r(a)
        }
        this.lines = this.dom.querySelectorAll(".split-line"),
        this.lineCount = s
    },
    a.show = function() {},
    a.hide = function() {}
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(3),
    o = n(1),
    a = n(4),
    s = n(122);
    t.init = function(e) {
        I = e,
        A = e.NODE_COUNT,
        D = e.MAX_TUBE_COUNT,
        c = a.createRenderTarget(A, D, !0, !0, !0),
        d = c.clone(),
        h = a.createRenderTarget(1, D, !0, !0, !0),
        m = h.clone(),
        g = a.createRenderTarget(A, D, !0, !0),
        b = g.clone(),
        u.u_prevPositionTexture = {
            value: c.texture
        },
        u.u_currPositionTexture = {
            value: d.texture
        },
        u.u_prevVelocityTexture = {
            value: h.texture
        },
        u.u_currVelocityTexture = {
            value: m.texture
        },
        u.u_rotationTexture = {
            value: g.texture
        };
        for (var t = new Float32Array(4 * D), U = 0, N = 0; N < D; N++) t[U + 0] = Math.random() - .5,
        t[U + 1] = Math.random() - .5,
        t[U + 2] = Math.random(),
        t[U + 3] = N / D,
        U += 4;
        var B = a.getColorState();
        if (a.renderer.autoClearColor = !1, r.useFloatPacking) {
            var V = new Uint8Array(4 * D),
            H = new Uint8Array(4 * D);
            O(t, V, H),
            (S = a.createDataTexture(V, 1, D, !0, !0, !0)).needsUpdate = !0,
            (T = a.createDataTexture(H, 1, D, !0, !0, !0)).needsUpdate = !0,
            l = c.clone(),
            f = c.clone(),
            v = h.clone(),
            p = h.clone(),
            a.clearColor(8355711, 0, m),
            a.clearColor(8355711, 0, p),
            u.u_prevPositionTextureZW = {
                value: l.texture
            },
            u.u_currPositionTextureZW = {
                value: f.texture
            },
            u.u_prevVelocityTextureZW = {
                value: v.texture
            },
            u.u_currVelocityTextureZW = {
                value: p.texture
            },
            u.u_posPackDividers = {
                value: new i.Vector2(F, z)
            },
            u.u_velPackDividers = {
                value: new i.Vector2(E, k)
            }
        } else a.clearColor(0, 0, m),
        (S = a.createDataTexture(t, 1, D, !0, !0, !0)).needsUpdate = !0;
        var W = S,
        G = T;
        if (e.initialData) {
            for (var j = e.initialData,
            q = j.splinePositions,
            X = A * D,
            Y = new Float32Array(4 * X), Z = 0, K = 0, Q = 0; Q < D; Q++) {
                for (var J = [], $ = 0; $ < L; $++) J[$] = [q[K], q[K + 1], q[K + 2]],
                K += 3;
                for (var ee = s.spline([0, .5, 1], J), te = 0; te < A; te++) {
                    var ne = ee.at(te / (A - 1));
                    Y[Z + 0] = ne[0],
                    Y[Z + 1] = ne[1],
                    Y[Z + 2] = ne[2],
                    Y[Z + 3] = Q / D,
                    Z += 4
                }
            }
            if (r.useFloatPacking) {
                var ie = new Uint8Array(4 * X),
                re = new Uint8Array(4 * X);
                O(Y, ie, re),
                (W = a.createDataTexture(ie, A, D, !0, !0, !0)).needsUpdate = !0,
                (G = a.createDataTexture(re, A, D, !0, !0, !0)).needsUpdate = !0
            } else(W = a.createDataTexture(Y, A, D, !0, !0, !0)).needsUpdate = !0
        }
        a.setColorState(B),
        a.renderer.autoClearColor = !1,
        a.copyMaterial.transparent = !0,
        a.copy(W, d),
        r.useFloatPacking && a.copy(G, f);
        a.copyMaterial.transparent = !1,
        a.setColorState(B),
        e.initialData && W.dispose();
        if (x = new i.RawShaderMaterial({
            uniforms: {
                u_positionTexture: u.u_prevPositionTexture,
                u_velocityTexture: u.u_prevVelocityTexture,
                u_noiseKernelSize: {
                    value: .075
                },
                u_noiseTime: {
                    value: 0
                },
                u_noiseStrength: {
                    value: 3e-4
                },
                u_dtRatio: {
                    value: 1
                },
                u_time: {
                    value: 0
                },
                u_firstUvSs: {
                    value: new i.Vector2(.5 / A, .5 / A)
                },
                u_initRatio: {
                    value: 0
                }
            },
            vertexShader: a.precisionPrefix + n(124),
            fragmentShader: a.precisionPrefix + n(125),
            blending: i.NoBlending,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }), e.initialData) {
            var oe = e.initialData;
            x.uniforms.u_time.value = oe.u_time,
            x.uniforms.u_initRatio.value = oe.u_initRatio,
            x.uniforms.u_noiseTime.value = oe.u_noiseTime
        }
        y = new i.RawShaderMaterial({
            uniforms: {
                u_positionTexture: u.u_prevPositionTexture,
                u_velocityTexture: u.u_currVelocityTexture,
                u_defaultDataTexture: {
                    value: S
                },
                u_screenResolution: {
                    value: o.resolution
                },
                u_firstUvSs: {
                    value: new i.Vector2(.5 / A, .5 / A)
                },
                u_neighbourNodeUvSOffsets: {
                    value: new i.Vector2(1 / A, 1 / A)
                },
                u_fixedScale: {
                    value: 1
                },
                u_dtRatio: {
                    value: 1
                },
                u_time: {
                    value: 0
                },
                u_initRatio: {
                    value: 0
                }
            },
            vertexShader: a.precisionPrefix + n(126),
            fragmentShader: a.precisionPrefix + n(127),
            blending: i.NoBlending,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }),
        r.useFloatPacking && (x.uniforms.u_positionTextureZW = u.u_prevPositionTextureZW, x.uniforms.u_velocityTextureZW = u.u_prevVelocityTextureZW, x.uniforms.u_posPackDividers = u.u_posPackDividers, x.uniforms.u_velPackDividers = u.u_velPackDividers, x.defines.IS_PACKED = !0, _ = new i.RawShaderMaterial({
            uniforms: x.uniforms,
            vertexShader: x.vertexShader,
            fragmentShader: x.fragmentShader
        }), i.Material.prototype.copy.call(_, x), _.defines.IS_PACKED = !0, _.defines.IS_PACK_TO_ZW = !0, y.uniforms.u_positionTextureZW = u.u_prevPositionTextureZW, y.uniforms.u_velocityTextureZW = u.u_currVelocityTextureZW, y.uniforms.u_defaultDataTextureZW = {
            value: T
        },
        y.uniforms.u_posPackDividers = u.u_posPackDividers, y.uniforms.u_velPackDividers = u.u_velPackDividers, y.defines.IS_PACKED = !0, w = new i.RawShaderMaterial({
            uniforms: y.uniforms,
            vertexShader: y.vertexShader,
            fragmentShader: y.fragmentShader
        }), i.Material.prototype.copy.call(w, y), w.defines.IS_PACKED = !0, w.defines.IS_PACK_TO_ZW = !0);
        var ae = 2 / A,
        se = 1 / A,
        ue = new Float32Array([ - 1, 1, 0, -1 + ae, 1, 0, -1, -1, 0, -1 + ae, -1, 0]),
        ce = new Float32Array([0, 1, se, 1, 0, 0, se, 0]),
        le = new Uint8Array([0, 2, 1, 1, 2, 3]); (M = new i.BufferGeometry).setAttribute("position", new i.BufferAttribute(ue, 3)),
        M.setAttribute("a_uv", new i.BufferAttribute(ce, 2)),
        M.setIndex(new i.BufferAttribute(le, 1));
        var de = ~~ (A / 2);
        ue = new Float32Array(12 * de),
        ce = new Float32Array(8 * de),
        le = new Uint8Array(6 * de);
        for (var fe = 0,
        he = 0,
        ve = 0,
        me = 0,
        pe = 0; fe < de; fe++) {
            var ge = (2 * fe + 1) * ae - 1,
            xe = (2 * fe + 1) * se;
            ue[pe + 0] = ge,
            ue[pe + 1] = 1,
            ue[pe + 2] = 0,
            ue[pe + 3] = ge + ae,
            ue[pe + 4] = 1,
            ue[pe + 5] = 0,
            ue[pe + 6] = ge,
            ue[pe + 7] = -1,
            ue[pe + 8] = 0,
            ue[pe + 9] = ge + ae,
            ue[pe + 10] = -1,
            ue[pe + 11] = 0,
            ce[me + 0] = xe,
            ce[me + 1] = 1,
            ce[me + 2] = xe + se,
            ce[me + 3] = 1,
            ce[me + 4] = xe,
            ce[me + 5] = 0,
            ce[me + 6] = xe + se,
            ce[me + 7] = 0,
            le[ve + 0] = he + 0,
            le[ve + 1] = he + 2,
            le[ve + 2] = he + 1,
            le[ve + 3] = he + 1,
            le[ve + 4] = he + 2,
            le[ve + 5] = he + 3,
            he += 4,
            ve += 6,
            me += 8,
            pe += 12
        } (P = new i.BufferGeometry).setAttribute("position", new i.BufferAttribute(ue, 3)),
        P.setAttribute("uv", new i.BufferAttribute(ce, 2)),
        P.setIndex(new i.BufferAttribute(le, 1)),
        R = new i.RawShaderMaterial({
            uniforms: {
                u_positionTexture: u.u_currPositionTexture,
                u_rotationTexture: {
                    value: null
                },
                u_positionOffset: {
                    value: new i.Vector2(0, 0)
                },
                u_uvOffset: {
                    value: new i.Vector2(0, 0)
                },
                u_neighbourNodeUvOffset: {
                    value: new i.Vector2(1 / A, 0)
                }
            },
            vertexShader: a.precisionPrefix + n(128),
            fragmentShader: a.precisionPrefix + n(129),
            blending: i.NoBlending,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }),
        C = new i.RawShaderMaterial({
            uniforms: R.uniforms,
            vertexShader: R.vertexShader,
            fragmentShader: R.fragmentShader
        }),
        i.Material.prototype.copy.call(C, R),
        R.defines.IS_FIRST_NODE = !0,
        r.useFloatPacking && (R.uniforms.u_positionTextureZW = u.u_currPositionTextureZW, R.uniforms.u_posPackDividers = u.u_posPackDividers, R.uniforms.u_rotPackDividers = u.u_rotPackDividers, R.defines.IS_PACKED = !0, C.defines.IS_PACKED = !0)
    },
    t.update = function(e) {
        var t = a.getColorState();
        a.renderer.autoClearColor = !1,
        function() {
            var e = h;
            h = m,
            m = e,
            e = c,
            c = d,
            d = e,
            u.u_prevPositionTexture.value = c.texture,
            u.u_currPositionTexture.value = d.texture,
            u.u_prevVelocityTexture.value = h.texture,
            u.u_currVelocityTexture.value = m.texture,
            r.useFloatPacking && (e = v, v = p, p = e, e = l, l = f, f = e, u.u_prevPositionTextureZW.value = l.texture, u.u_currPositionTextureZW.value = f.texture, u.u_prevVelocityTextureZW.value = v.texture, u.u_currVelocityTextureZW.value = p.texture)
        } (),
        x.uniforms.u_dtRatio.value = o.deltaRatio,
        x.uniforms.u_noiseTime.value += .3 * e,
        x.uniforms.u_time.value += e,
        x.uniforms.u_initRatio.value = Math.min(1, x.uniforms.u_initRatio.value + .05 * e),
        a.render(x, m),
        r.useFloatPacking && a.render(_, p);
        y.uniforms.u_dtRatio.value = o.deltaRatio,
        y.uniforms.u_time.value = x.uniforms.u_time.value,
        y.uniforms.u_initRatio.value = x.uniforms.u_initRatio.value,
        y.uniforms.u_fixedScale.value = 2 * Math.tan(I.camera.fov / 360 * Math.PI) / o.resolution.y * 11,
        a.render(y, d),
        r.useFloatPacking && a.render(w, f);
        var n = C.uniforms,
        i = b,
        s = g;
        n.u_positionTexture.value = d.texture;
        for (var S = 2 / A,
        T = 1 / A,
        D = 0; D < A; D++) {
            R.uniforms.u_rotationTexture.value = i.texture,
            n.u_positionOffset.value.x = S * D,
            n.u_uvOffset.value.x = T * D,
            a.renderGeometry(M, 0 === D ? R: C, s);
            var L = i;
            i = s,
            s = L
        }
        var F = a.copyMaterial,
        z = F.transparent;
        F.transparent = !0,
        F.uniforms.u_texture.value = b.texture,
        a.renderGeometry(P, F, g),
        F.transparent = z,
        a.setColorState(t)
    };
    var u = t.sharedUniforms = {},
    c = void 0,
    l = void 0,
    d = void 0,
    f = void 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = void 0,
    y = void 0,
    w = void 0,
    b = void 0,
    S = void 0,
    T = void 0,
    M = void 0,
    P = void 0,
    R = void 0,
    C = void 0,
    I = void 0,
    A = void 0,
    D = void 0,
    L = 3,
    F = 128,
    z = 2,
    E = 4,
    k = 4;
    function O(e, t, n) {
        for (var i = void 0,
        r = void 0,
        o = void 0,
        a = 0,
        s = 0,
        u = e.length; a < u; a++) i = (o = e[s + 0] / F * .5 + .5) % 1 - (r = 255 * o % 1) / 255,
        t[s + 0] = 255 * i,
        t[s + 1] = 255 * r,
        i = (o = e[s + 1] / F * .5 + .5) % 1 - (r = 255 * o % 1) / 255,
        t[s + 2] = 255 * i,
        t[s + 3] = 255 * r,
        i = (o = e[s + 2] / F * .5 + .5) % 1 - (r = 255 * o % 1) / 255,
        n[s + 0] = 255 * i,
        n[s + 1] = 255 * r,
        i = (o = e[s + 3] / z * .5 + .5) % 1 - (r = 255 * o % 1) / 255,
        n[s + 2] = 255 * i,
        n[s + 3] = 255 * r,
        s += 4
    }
},
function(e, t) {
    e.exports = "#if defined(IS_BOTTOM)\nvarying vec2 v_uv;\n#endif\n\n#ifdef IS_MODEL\nvarying vec3 v_color;\n#endif\n#ifdef IS_BOTTOM\nattribute vec2 a_uv2;\nvarying vec2 v_uv2;\n#endif\n#ifdef IS_PANEL\nuniform mat4 u_reflectionTextureMatrix;\nvarying vec4 v_reflectionUv;\n#endif\n\nuniform vec2 u_offset2d;\nuniform vec2 u_scale2d;\nuniform mat4 u_mvp;\n\nvarying vec3 v_viewNormal;\nvarying vec3 v_viewPosition;\n\nvarying vec3 v_worldPosition;\n\n#ifndef IS_REFLECTION\nvarying vec4 v_videoPosition;\n#endif\n\nvoid main () {\n    v_viewNormal = normalMatrix * normal;\n\n    v_worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n    v_viewPosition = -mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n\n    #if defined(IS_BOTTOM)\n    v_uv = uv;\n    #endif\n\n    #ifdef IS_MODEL\n    v_color = color;\n    #endif\n    #ifdef IS_BOTTOM\n    v_uv2 = a_uv2;\n    #endif\n    #ifdef IS_PANEL\n    v_reflectionUv = u_reflectionTextureMatrix * vec4(position, 1.0);\n    #endif\n\n    #ifndef IS_REFLECTION\n    v_videoPosition = u_mvp * vec4(position, 1.0);\n    v_videoPosition.xy *= u_scale2d;\n    v_videoPosition.xy += u_offset2d * v_videoPosition.w;\n\n    gl_Position.xy *= u_scale2d;\n    gl_Position.xy += u_offset2d * gl_Position.w;\n\n    #endif\n\n}\n"
},
function(e, t) {
    e.exports = "#define PHONG\n\n#if defined(IS_BOTTOM)\nuniform sampler2D u_normalTexture;\nvarying vec2 v_uv;\n#endif\n\n#ifdef IS_MODEL\nvarying vec3 v_color;\n#endif\n#ifdef IS_BOTTOM\nvarying vec2 v_uv2;\n#endif\n#ifdef IS_PANEL\nuniform sampler2D u_reflectionTexture;\nvarying vec4 v_reflectionUv;\n#endif\n\nuniform vec3 u_diffuse;\nuniform vec3 u_specular;\nuniform float u_shininess;\nuniform float u_opacity;\n\n#ifndef IS_REFLECTION\nuniform sampler2D u_videoTexture;\n#endif\n\nuniform float u_focusDistance;\nuniform float u_focusRange;\nuniform vec2 u_videoResolution;\nuniform vec2 u_resolution;\nuniform vec2 u_videoUvOffset;\nuniform vec2 u_timePixelUvClamp;\n\n#ifdef IS_REFLECTION\nuniform vec3 u_reflectionCameraPosition;\n#else\nuniform vec3 u_cameraPosition;\n#endif\nuniform vec3 u_lightPosition;\n\nuniform vec2 u_videoUvScale;\nuniform vec4 u_screenUvInfo;\n\nvarying vec3 v_worldPosition;\nvarying vec3 v_viewNormal;\nvarying vec3 v_viewPosition;\nvarying vec4 v_videoPosition;\n\n#include <common>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <dithering_pars_fragment>\n\n\n#include <getScatter>\n\nfloat blendScreen(float base, float blend) {\n    return 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n    return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n    return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n\n// #if defined(IS_MODEL) || defined(IS_BOTTOM)\n#if defined(IS_BOTTOM)\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec2 uv, float normalScale, float bias ) {\n    // Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988\n    vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n    vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n    vec2 st0 = dFdx( uv.st );\n    vec2 st1 = dFdy( uv.st );\n\n    float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude\n    scale *= float( gl_FrontFacing ) * 2.0 - 1.0;\n\n    vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n    vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n    vec3 N = normalize( surf_norm );\n\n    vec3 mapN = texture2D( u_normalTexture, uv, bias ).xyz * 2.0 - 1.0;\n    mapN.xy = vec2(normalScale) * mapN.xy;\n    mat3 tsn = mat3( S, T, N );\n    return normalize( tsn * mapN );\n}\n#endif\n\nvoid main () {\n\n    vec3 viewNormal = normalize(v_viewNormal);\n    vec3 vViewPosition = v_viewPosition;\n    vec3 normal = viewNormal;\n    #ifdef IS_REFLECTION\n    vViewPosition.x *= -1.0;\n    normal.x *= -1.0;\n    #endif\n    \n    float ao = 1.0 - smoothstep(2.0, -0.3, length(v_worldPosition * vec3(1.0, 5.0, 1.0)));\n\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = vec3(0.0);\n\n    float depthWeight = smoothstep(-3.0, -1.0, v_worldPosition.z);\n\n    BlinnPhongMaterial material;\n    material.diffuseColor = u_diffuse;\n    material.specularColor = u_specular * depthWeight;\n    material.specularShininess = u_shininess;\n    // material.specularStrength = 1.0;\n\n    #ifdef IS_MODEL\n    material.diffuseColor = v_color;\n    material.specularColor = v_color * 2.0;\n    #endif\n\n    #ifdef IS_BOTTOM\n        #ifndef IS_REFLECTION\n        material.specularShininess = 500.0;\n        material.specularStrength = 0.2;\n        #endif\n    normal = perturbNormal2Arb( -vViewPosition, normal, v_uv2 * 3.0, 0.2, normal.y );\n    normal = perturbNormal2Arb( -vViewPosition + normal * 0.05, normal, v_uv * 3.0, 0.35, 0.0 );\n    \n    #endif\n\n    material.specularShininess *= depthWeight;\n\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_end>\n\n    #ifdef IS_MODEL\n        #ifdef IS_REFLECTION\n        reflectedLight.directDiffuse *= 9.0;\n        #else\n        reflectedLight.directDiffuse *= 1.25;\n        #endif\n    #endif\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n\n    #ifdef IS_REFLECTION\n    vec3 cameraPosition = u_reflectionCameraPosition;\n    #else\n    vec3 cameraPosition = u_cameraPosition;\n    #endif\n\n    vec3 toCameraWorld = v_worldPosition - cameraPosition;\n    vec3 nToCameraWorldDir = normalize(toCameraWorld);\n    float toCameraDist = length(toCameraWorld);\n\n    vec3 color = outgoingLight * ao;\n\n    #ifndef IS_REFLECTION\n        #ifdef IS_PANEL\n        color *= 0.4;\n        color += texture2DProj(u_reflectionTexture, v_reflectionUv).rgb * 0.4;\n        #endif\n    #endif\n\n    float scatter = getScatter(cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n    #ifdef IS_REFLECTION\n        scatter *= 0.65;\n    #endif\n\n    color += scatter * pointLights[0].color;\n    \n    #ifndef IS_REFLECTION\n        vec2 uv = ((v_videoPosition.xy / v_videoPosition.w) * 0.5) / u_videoUvScale + 0.5;\n        uv = mix(uv, vec2(max(uv.x, u_timePixelUvClamp.x), min(uv.y, u_timePixelUvClamp.y)), step(uv.x, u_timePixelUvClamp.x) * step(u_timePixelUvClamp.y, uv.y));\n        color += texture2D(u_videoTexture, uv).rgb * 0.7;\n    #endif\n\n    #ifdef IS_REFLECTION\n    // color = vec3(1.0, 0.0, 0.0);\n    #endif\n    \n    gl_FragColor = vec4(dithering(color * u_opacity), 1.0);\n}\n"
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(3),
    o = n(1),
    a = n(2),
    s = n(4),
    u = n(164);
    t.preInit = function(e) {
        d = e,
        o.loader.add(r.assetPath + "images/female.glb", {
            type: "any",
            weight: 1,
            hasLoading: !0,
            loadFunc: o.GLTFLoadFunc,
            onLoad: b
        }),
        o.loader.add(r.assetPath + "images/buffers.buf", {
            type: "xhr",
            responseType: "arraybuffer",
            weight: 1,
            onLoad: S
        })
    },
    t.init = function() {
        l = new i.Scene,
        (c = t.container = new i.Object3D).add(f),
        f.rotation.x = .5 * Math.PI,
        (v = new i.LineSegments(h, new i.ShaderMaterial({
            uniforms: {
                u_time: {
                    value: 0
                },
                u_isReflection: {
                    value: 0
                },
                u_emitRatio: {
                    value: 0
                },
                u_boost: {
                    value: 1
                }
            },
            vertexShader: n(170),
            fragmentShader: n(171),
            vertexColors: !0,
            skinning: !0,
            transparent: !0,
            blending: i.NoBlending
        }))).updateMatrixWorld = i.SkinnedMesh.prototype.updateMatrixWorld,
        v.bindMatrix = f.bindMatrix,
        v.bindMode = f.bindMode,
        v.bindMatrixInverse = f.bindMatrixInverse,
        v.isSkinnedMesh = !0,
        v.skeleton = f.skeleton,
        v.rotation.set(.5 * Math.PI, 0, 0),
        i.SkinnedMesh.prototype.normalizeSkinWeights.call(v),
        v.needsRenderReflection = !0,
        v.renderOrder = 0,
        c.add(v),
        r.useFloatPacking || c.add(u.mesh)
    },
    t.playMixedAction = function(e) {
        _ || (y = e ? .08 : .2, (_ = e ? g: x).reset(), _.play())
    },
    t.emit = T,
    t.update = function(e) {
        v.material.uniforms.u_time.value += e * t.wireSpeed,
        v.material.uniforms.u_emitRatio.value *= 0 === e ? 1 : .9,
        (w += e) > .25 && (w = 0, T());
        var n = 0;
        if (_) {
            var i = .5 * _._clip.duration,
            o = a.smoothstep(i, i - y, Math.abs(_.time - i));
            p.weight = 1 - o,
            _.weight = o,
            p.weight = Math.pow(p.weight, .5),
            1 === o && (p.time = _ === g ? .4 : .35),
            n = _.time / _._clip.duration,
            d.actionSpeedScale = .6 + .4 * Math.cos(Math.pow(n, .75) * Math.PI * 2),
            1 == n && (_ = null)
        } else p.weight = 1,
        g.weight = 0,
        x.weight = 0;
        t._actionId = _ ? _ === g ? "jump": "slide": "",
        t._actionRatio = n,
        m.update(e),
        r.useFloatPacking || u.update(e)
    },
    t.renderWires = function() {
        var e = s.renderer,
        t = s.getColorState();
        e.autoClear = !1,
        v.material.blending = i.AdditiveBlending,
        v.material.uniforms.u_boost.value = .2,
        l.add(v),
        s.renderer.render(l, d.camera),
        c.add(v),
        v.material.uniforms.u_boost.value = 1,
        v.material.blending = i.NoBlending,
        s.setColorState(t)
    },
    t.wireSpeed = 1.75,
    t._actionRatio = 0,
    t._actionId = "";
    var c = t.container = null,
    l = void 0,
    d = void 0,
    f = void 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = void 0,
    y = 0,
    w = 1;
    function b(e) { (f = e.scene.children[0].children[1]).add(e.scene.children[0].children[0]),
        f.animations = e.animations,
        r.useFloatPacking || u.init(f),
        f.material = new i.MeshBasicMaterial({
            color: 16722761,
            skinning: !0,
            transparent: !0,
            opacity: .15
        }),
        f.renderOrder = 1,
        m = new i.AnimationMixer(f),
        (p = m.clipAction("Run")).clampWhenFinished = !0,
        p.playScale = 1,
        p.weight = 1,
        p.play(),
        (g = m.clipAction("Jump")).setLoop(i.LoopOnce),
        g.clampWhenFinished = !0,
        g.playScale = 1,
        g.weight = 0,
        (x = m.clipAction("Slide")).setLoop(i.LoopOnce),
        x.clampWhenFinished = !0,
        x.playScale = 1,
        x.weight = 0
    }
    function S(e) {
        for (var t = 0,
        n = new Int16Array(e, t, 98304), r = new Float32Array(98304), o = 0, a = n.length; o < a; o++) r[o] = 4 * n[o] / 32768;
        t += 196608;
        var s = new Int8Array(e, t, 98304);
        t += 98304;
        var u = new Uint8Array(e, t, 98304);
        t += 98304;
        for (var c = new Int16Array(e, t, 131072), l = new Float32Array(131072), d = 0, f = c.length; d < f; d++) l[d] = 4 * c[d] / 32768;
        t += 262144;
        var v = new Uint8Array(e, t, 131072);
        t += 131072,
        (h = new i.BufferGeometry).setAttribute("position", new i.BufferAttribute(r, 3)),
        h.setAttribute("normal", new i.BufferAttribute(s, 3, !0)),
        h.setAttribute("color", new i.BufferAttribute(u, 3, !0)),
        h.setAttribute("skinWeight", new i.BufferAttribute(l, 4)),
        h.setAttribute("skinIndex", new i.BufferAttribute(v, 4));
        for (var m = new Uint16Array(65024), p = 0, g = 0; p < 256; p++) for (var x = 0; x < 127; x++) m[g + 0] = 128 * p + x,
        m[g + 1] = 128 * p + x + 1,
        g += 2;
        h.setIndex(new i.BufferAttribute(m, 1))
    }
    function T() {
        r.useFloatPacking || u.emit(),
        v.material.uniforms.u_emitRatio.value = 1
    }
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(6),
    o = n(36);
    n(12);
    function a() {
        this.renderTarget = new i.WebGLRenderTarget(1, 1, {
            minFilter: i.LinearFilter,
            magFilter: i.LinearFilter,
            format: i.RGBFormat,
            stencilBuffer: !1
        }),
        this.textureMatrix = new i.Matrix4,
        this.clearColor = 0,
        this.clipBias = 0,
        u || (u = new i.PerspectiveCamera, c = new i.Plane, l = new i.Vector3, d = new i.Vector3, f = new i.Vector3, h = new i.Matrix4, v = new i.Vector3, m = new i.Vector4, p = new i.Vector3, g = new i.Vector3, x = new i.Vector4)
    }
    var s = a.prototype;
    e.exports = a,
    s.setSize = function(e, t) {
        this.renderTarget.setSize(e, t)
    },
    s.update = function(e, t, n, i) {
        if (d.setFromMatrixPosition(i.matrixWorld), f.setFromMatrixPosition(n.matrixWorld), h.extractRotation(i.matrixWorld), l.set(0, 0, 1), l.applyMatrix4(h), p.subVectors(d, f), p.dot(l) > 0) return;
        p.reflect(l).negate(),
        p.add(d),
        h.extractRotation(n.matrixWorld),
        v.set(0, 0, -1),
        v.applyMatrix4(h),
        v.add(f),
        g.subVectors(d, v),
        g.reflect(l).negate(),
        g.add(d),
        u.position.copy(p),
        u.up.set(0, 1, 0),
        u.up.applyMatrix4(h),
        u.up.reflect(l),
        u.lookAt(g),
        u.near = n.near,
        u.far = n.far,
        u.updateMatrixWorld(),
        u.projectionMatrix.copy(n.projectionMatrix),
        this.textureMatrix.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        this.textureMatrix.multiply(u.projectionMatrix),
        this.textureMatrix.multiply(u.matrixWorldInverse),
        this.textureMatrix.multiply(i.matrixWorld),
        c.setFromNormalAndCoplanarPoint(l, d),
        c.applyMatrix4(u.matrixWorldInverse),
        m.set(c.normal.x, c.normal.y, c.normal.z, c.constant);
        var r = u.projectionMatrix;
        x.x = (Math.sign(m.x) + r.elements[8]) / r.elements[0],
        x.y = (Math.sign(m.y) + r.elements[9]) / r.elements[5],
        x.z = -1,
        x.w = (1 + r.elements[10]) / r.elements[14],
        m.multiplyScalar(2 / m.dot(x)),
        r.elements[2] = m.x,
        r.elements[6] = m.y,
        r.elements[10] = m.z + 1 - this.clipBias,
        r.elements[14] = m.w;
        var o = e.getRenderTarget(),
        a = [],
        s = [];
        t.traverseVisible(function(e) {
            if (e.material) if (e.needsRenderReflection) {
                var t = e.material.uniforms;
                t && t.u_isReflection && (t.u_isReflection.value = 1, s.push(t.u_isReflection))
            } else e.visible = !1,
            a.push(e)
        }),
        e.xr.enabled = !1,
        i.visible = !1,
        e.setClearColor(this.clearColor, 1),
        e.setRenderTarget(this.renderTarget),
        e.clear(),
        e.render(t, u),
        e.setRenderTarget(null),
        i.visible = !0;
        for (var _ = 0,
        y = a.length; _ < y; _++) a[_].visible = !0;
        for (var w = 0,
        b = s.length; w < b; w++) s[w].value = 0;
        e.setRenderTarget(o)
    },
    s.injectUniforms = function(e) {
        r(e.uniforms, {
            u_reflectionTexture: {
                value: this.renderTarget.texture
            },
            u_reflectionTextureMatrix: {
                value: this.textureMatrix
            }
        })
    },
    s.injectShaders = function(e) {
        var t = e.vertexShader,
        n = e.fragmentShader;
        t = o.insertBefore(t, "void main() {", "\nuniform mat4 u_reflectionTextureMatrix;\nvarying vec4 v_reflectionCoord;\n"),
        t = o.insertAfter(t, "project_vertex", "\nv_reflectionCoord = u_reflectionTextureMatrix * vec4( transformed, 1.0 );\n", !0),
        n = o.insertBefore(n, "void main() {", "\nuniform sampler2D u_reflectionTexture;\nvarying vec4 v_reflectionCoord;\n"),
        n = o.replace(n, "vec4 diffuseColor = vec4( diffuse, opacity );", "\nvec4 diffuseColor = vec4( diffuse * texture2DProj(u_reflectionTexture, v_reflectionCoord).rgb, opacity );\n"),
        e.vertexShader = t,
        e.fragmentShader = n
    };
    var u = void 0,
    c = void 0,
    l = void 0,
    d = void 0,
    f = void 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0
},
function(e, t, n) {
    "use strict";
    var i = n(0);
    function r() {
        this.position = new i.Vector3,
        this.rotation = new i.Quaternion,
        this.scale = new i.Vector3(1, 1, 1),
        this.matrix = new i.Matrix4,
        this.enablePositionNoise = !0,
        this.enableRotationNoise = !0,
        this.positionFrequency = 2e-4,
        this.rotationFrequency = 3e-4,
        this.positionAmplitude = .1,
        this.rotationAmplitude = .1,
        this.positionScale = new i.Vector3(1, 1, 1),
        this.rotationScale = new i.Vector3(1, 1, 0),
        this.positionFractalLevel = 3,
        this.rotationFractalLevel = 3,
        this.times = new Float32Array(6),
        this.rehash()
    }
    e.exports = r;
    var o = r.prototype;
    o.rehash = function() {
        for (var e = 0; e < 6; e++) this.times[e] = -1e4 * Math.random()
    },
    o.update = function(e) {
        var t;
        if (e = void 0 === e ? 1e3 / 60 : e, this.enablePositionNoise) {
            for (t = 0; t < 3; t++) this.times[t] += this.positionFrequency * e;
            s.set(l(this.times[0], this.positionFractalLevel), l(this.times[1], this.positionFractalLevel), l(this.times[2], this.positionFractalLevel)),
            s.multiply(this.positionScale),
            s.multiplyScalar(this.positionAmplitude * u),
            this.position.copy(s)
        }
        if (this.enableRotationNoise) {
            for (t = 0; t < 3; t++) this.times[t + 3] += this.rotationFrequency * e;
            s.set(l(this.times[3], this.rotationFractalLevel), l(this.times[4], this.rotationFractalLevel), l(this.times[5], this.rotationFractalLevel)),
            s.multiply(this.rotationScale),
            s.multiplyScalar(this.rotationAmplitude * u),
            a.set(s.x, s.y, s.z),
            this.rotation.setFromEuler(a)
        }
        this.matrix.compose(this.position, this.rotation, this.scale)
    };
    var a = new i.Euler,
    s = new i.Vector3,
    u = 1 / .75;
    var c = new
    function() {
        for (var e = 1,
        t = 1,
        n = [], i = 0; i < 256; ++i) n.push(Math.random());
        var r = function(e, t, n) {
            return e * (1 - n) + t * n
        };
        return {
            getVal: function(i) {
                var o = i * t,
                a = Math.floor(o),
                s = o - a,
                u = s * s * (3 - 2 * s),
                c = 255 & a,
                l = c + 1 & 255;
                return r(n[c], n[l], u) * e
            },
            setAmplitude: function(t) {
                e = t
            },
            setScale: function(e) {
                t = e
            }
        }
    };
    function l(e, t) {
        for (var n = 0,
        i = .5,
        r = 0; r < t; r++) n += i * c.getVal(e),
        e *= 2,
        i *= .5;
        return n
    }
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(6),
    o = n(61),
    a = n(5),
    s = n(1),
    u = n(4),
    c = n(12);
    t.preInit = function() {},
    t.init = function(e) {
        d = e,
        t.container = new i.Object3D,
        t.container.visible = !1,
        (h = new i.ConeBufferGeometry(1, 1, 32)).translate(0, -.5, 0),
        h.rotateX( - Math.PI / 2),
        y = new i.WebGLRenderTarget(1, 1),
        w = new i.WebGLRenderTarget(1, 1),
        S = {
            u_depthTexture: o.sharedUniforms.u_depthTexture,
            u_visualUvInfo: e.visualUvInfoUniform,
            u_cameraPosition: {
                value: e.cameraPosition
            },
            u_resolution: {
                value: new i.Vector2
            },
            u_projectionViewInverse: {
                value: new i.Matrix4
            },
            u_noiseTime: {
                value: 0
            },
            u_time: {
                value: 0
            }
        },
        v = new i.ShaderMaterial({
            uniforms: i.UniformsUtils.merge([i.UniformsLib.lights]),
            vertexShader: n(190),
            fragmentShader: n(191),
            transparent: !0,
            depthWrite: !1,
            blending: i.CustomBlending,
            blendSrc: i.OneFactor,
            blendDst: i.OneFactor,
            blendEquation: i.AddEquation,
            blendSrcAlpha: i.OneFactor,
            blendDstAlpha: i.ZeroFactor,
            blendEquationAlpha: i.AddEquation
        }),
        (m = new i.MeshDepthMaterial).depthFunc = i.LessEqualDepth,
        m.depthTest = !0,
        m.depthWrite = !0,
        m.transparent = !0,
        m.blending = i.NoBlending,
        m.side = i.BackSide;
        var r = u.MAX_VARYING_VECTORS > 8;
        p = new i.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    value: null
                },
                u_delta: {
                    value: new i.Vector2
                }
            },
            vertexShader: r ? u.precisionPrefix + n(35) : u.vertexShader,
            fragmentShader: u.precisionPrefix + n(192),
            blending: i.NoBlending,
            transparent: !1,
            defines: {
                USE_VARYING: r
            }
        }),
        f = new i.Scene,
        (l = new i.Mesh(u.triGeom, new i.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    value: y.texture
                },
                u_resolution: {
                    value: d.resolution
                }
            },
            depthTest: !1,
            depthWrite: !1,
            transparent: !0,
            blending: i.CustomBlending,
            blendSrc: i.OneFactor,
            blendDst: i.OneFactor,
            blendEquation: i.AddEquation,
            blendSrcAlpha: i.OneFactor,
            blendDstAlpha: i.ZeroFactor,
            blendEquationAlpha: i.AddEquation,
            vertexShader: u.vertexShader,
            fragmentShader: u.precisionPrefix + n(193)
        }))).frustumCulled = !1,
        f.add(l),
        x = new i.Vector3,
        _ = new i.Matrix4
    },
    t.addToSpotLight = function(e) {
        var n = new i.Mesh(h, v.clone());
        n.frustumCulled = !1,
        r(n.material.uniforms, S),
        n.material.lights = !0,
        n.material.defines = {
            MAX_RAY_STEP: a.isMac || a.isMobile ? 16 : 32,
            SPOTLIGHT_INDEX: b
        },
        n.renderOrder = -1e4,
        n.isFog = !0,
        n.receiveShadow = !0,
        n.spotLight = e,
        n.customDepthMaterial = m,
        t.container.add(n),
        g.push(n),
        b++
    },
    t.resize = function(e, t, n, i) {
        y.setSize(n, i),
        S.u_resolution.value.set(n, i)
    },
    t.update = function(e, n, i) {
        _.getInverse(i.projectionMatrix),
        S.u_projectionViewInverse.value.multiplyMatrices(i.matrixWorld, _),
        S.u_noiseTime.value = (S.u_noiseTime.value + e) % 2.142,
        S.u_time.value += e;
        for (var r = 0; r < b; r++) {
            var o = g[r],
            a = o.spotLight;
            o.position.setFromMatrixPosition(a.matrixWorld),
            x.setFromMatrixPosition(a.target.matrixWorld),
            o.lookAt(x);
            var l = Math.tan(a.angle) * a.distance;
            o.scale.set(l, l, a.distance).multiplyScalar(2)
        }
        var h = [];
        n.traverse(function(e) {
            e.material && !e.isFog && e.visible && (h.push(e), e.visible = !1)
        });
        var v = u.getColorState();
        t.container.visible = !0,
        s.renderer.setClearColor(0, 1),
        s.renderer.setRenderTarget(y),
        s.renderer.clear(),
        s.renderer.render(n, i),
        s.renderer.setRenderTarget(null),
        t.container.visible = !1;
        for (var m = 0,
        T = h.length; m < T; m++) {
            var M = h[m];
            M.visible = !0
        }
        c.blur(p, .25, 2, 1, y, w),
        c.blur(p, .5, 2, 1, y, w),
        c.blur9(1, 1, y, w);
        var P = s.renderer;
        P.autoClearColor = !1,
        P.autoClearDepth = !1,
        P.setRenderTarget(null),
        P.setScissorTest(!0),
        P.setViewport(0, s.height - d.top - d.height, s.width, d.height),
        P.setScissor(0, s.height - d.top - d.height, s.width, d.height),
        P.render(f, i),
        P.setScissorTest(!1),
        P.setRenderTarget(null),
        u.setColorState(v)
    },
    t.container = null;
    var l = void 0,
    d = void 0,
    f = void 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = void 0,
    g = [],
    x = void 0,
    _ = void 0,
    y = void 0,
    w = void 0,
    b = 0,
    S = {}
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = (n(6), n(1)),
    o = n(4);
    t.init = function() { (s = new i.MeshDepthMaterial).depthPacking = i.RGBADepthPacking,
        s.transparent = !0,
        s.blending = i.NoBlending,
        a = new i.WebGLRenderTarget(1, 1, {
            minFilter: i.NearestFilter,
            magFilter: i.NearestFilter
        }),
        (u = new i.Mesh(o.triGeom, new i.RawShaderMaterial({
            uniforms: {
                u_vertZ: {
                    value: 1
                },
                u_color: {
                    value: new i.Vector4(1, 1, 1, 1)
                }
            },
            depthFunc: i.AlwaysDepth,
            transparent: !0,
            blending: i.NoBlending,
            vertexShader: o.precisionPrefix + n(189),
            fragmentShader: o.clearMaterial.fragmentShader
        }))).frustumCulled = !1,
        u.renderOrder = -1e4,
        c.u_depthTexture = {
            value: a.texture
        }
    },
    t.resize = function(e, t, n, i) {
        a.setSize(n, i)
    },
    t.render = function(e, t, n) {
        var i = [],
        c = [];
        t.traverse(function(e) {
            if (e.material) if (e.needsRenderDepth) {
                var t = e.customDepthMaterial || s;
                e.originalMaterial = e.material,
                e.material = t,
                i.push(e)
            } else e.visible && (c.push(e), e.visible = !1)
        });
        var l = o.getColorState();
        t.add(u),
        r.renderer.setRenderTarget(a),
        r.renderer.render(t, n),
        r.renderer.setRenderTarget(null),
        t.remove(u),
        o.setColorState(l);
        for (var d = 0,
        f = i.length; d < f; d++) {
            var h = i[d];
            h.material = h.originalMaterial
        }
        for (var v = 0,
        m = c.length; v < m; v++) {
            var p = c[v];
            p.visible = !0
        }
    };
    var a = void 0,
    s = void 0,
    u = void 0,
    c = t.sharedUniforms = {}
},
function(e, t, n) {
    "use strict";
    var i, r = n(5),
    o = n(3),
    a = n(1),
    s = n(70),
    u = n(9),
    c = n(41),
    l = n(25),
    d = n(16),
    f = n(26),
    h = n(48),
    v = n(186),
    m = n(19),
    p = n(27),
    g = n(51),
    x = n(28),
    _ = n(208),
    y = n(228),
    w = n(0),
    b = n(229),
    S = void 0,
    T = void 0,
    M = !0,
    P = !1;
    function R() {
        document.documentElement.classList.add("use-webgl"),
        a.loader.add("typekitFonts", {
            type: "any",
            loadFunc: function(e, t) {
                b.load({
                    custom: {
                        families: ["GT-Sectra-Fine-Bold:n7", "GT-Sectra-Fine:n4", "nb_akademie_medium:n7", "nb_akademie_light:n4"]
                    },
                    timeout: 4e3,
                    active: t,
                    inactive: t
                })
            }
        }),
        o.USE_GUI = !1,
        a.simplex = new y,
        d.init(),
        u.init(),
        m.init(),
        x.init(),
        c.preInit(),
        T = new w.Vector2,
        a.prevMouse = new w.Vector2(0, 0),
        a.mouse = new w.Vector2(0, 0),
        a.mouseVel = new w.Vector2(0, 0),
        a.elasticMouse = new w.Vector2(0, 0),
        a.elasticMouseVel = new w.Vector2(0, 0),
        a.easedMouse = new w.Vector2(0, 0),
        a.easedMouseVel = new w.Vector2(0, 0),
        a.mobileOrientation = new w.Vector4,
        window.addEventListener("resize", D),
        window.addEventListener("orientationchange", D),
        D(),
        u.onDowned.add(A),
        u.onMoved.add(A),
        S || (t.isRendering = !0, a.currentTime = +new Date, L()),
        m.onLoadCompleted.addOnce(C, null, 1024),
        m.start(!1),
        m.show()
    }
    function C() {
        a.isSupportWebGL && (_.preInit(), _.init()),
        a.resolution = new w.Vector2,
        f.preInit(),
        h.preInit(),
        v.preInit(),
        s.add(!0),
        c.init(),
        P = !0,
        D(),
        F(),
        m.onLoadCompleted.addOnce(I, null, 1024),
        m.start(!0)
    }
    function I() {
        a.isSupportWebGL && _.start(),
        f.init(),
        h.init(),
        v.init(),
        D(),
        F(),
        m.onHideStarted.add(D),
        a.hasInitialized = !0
    }
    function A(e) {
        var t = a.fullHeight - a.height;
        a.mouse.set(e.x, e.y - t),
        !r.isMobile && M && (a.prevMouse.copy(a.mouse), a.elasticMouse.copy(a.mouse), a.easedMouse.copy(a.mouse)),
        M = !1
    }
    function D(e) {
        var t = a.width = window.innerWidth,
        n = a.fullHeight = window.innerHeight,
        i = a.height = t > 1280 ? n: n - 70;
        if (m.resize(t, n), document.documentElement.style.setProperty("--vh", .01 * i + "px"), P) {
            if (e) {
                var r = t >> 1,
                o = i >> 1;
                a.prevMouse.set(r, o),
                a.mouse.copy(a.prevMouse),
                a.elasticMouse.copy(a.prevMouse),
                a.easedMouse.copy(a.prevMouse),
                a.mouseVel.set(0, 0),
                a.elasticMouseVel.set(0, 0),
                a.easedMouseVel.set(0, 0)
            }
            a.resolution.set(t, i),
            a.isSupportWebGL && _.resize(t, i),
            c.resize(t, i),
            h.resize(t, i),
            v.resize(t, i),
            c.updateScrollPane(t, i),
            f.resize(t, n),
            p.resize(t, n)
        }
        F()
    }
    function L() {
        S = requestAnimationFrame(L),
        F()
    }
    function F() {
        var e = +new Date,
        t = a.deltaTime = Math.min(.04, (e - a.currentTime) / 1e3);
        a.currentTime = e,
        a.deltaRatio = 60 * t,
        a.time += t,
        m.update(t),
        T.copy(a.mouse).sub(a.elasticMouse).multiplyScalar(.15),
        a.elasticMouseVel.add(T),
        a.elasticMouseVel.multiplyScalar(.8),
        a.elasticMouse.add(a.elasticMouseVel),
        a.easedMouse.add(a.easedMouseVel.copy(a.mouse).sub(a.easedMouse).multiplyScalar(.15)),
        a.mouseVel.copy(a.mouse).sub(a.prevMouse),
        P && (c.update(t), f.update(t), v.update(t), h.update(t), g.update(t), c.checkReplaceHistoryState(), p.update(t), d.update(t), l.update(t), x.update(t)),
        a.onUpdateEnded.dispatch(),
        a.prevMouse.copy(a.mouse)
    }
    i = window,
    a.isSupportWebGL = _.checkIsSupported(a.canvas = document.getElementById("canvas")),
    "Promise" in i && a.isSupportWebGL ? R() : (a.isSupportWebGL = !1, document.documentElement.classList.add("no-webgl"), R())
},
function(e, t, n) {
    "use strict";
    var i = n(14),
    r = n(7);
    function o(e) {
        e && a.constructor.apply(this, arguments)
    }
    e.exports = o,
    o.type = "jsonp",
    o.extensions = [],
    r.register(o),
    o.retrieve = function(e) {
        return "string" == typeof e && e.indexOf("=") > -1 && [e]
    };
    var a = i.prototype,
    s = o.prototype = new i;
    s.constructor = o,
    s.load = function(e) {
        a.load.apply(this, arguments);
        var t = this,
        n = this.url.lastIndexOf("=") + 1,
        i = this.url.substr(0, n),
        r = this.url.substr(n);
        0 === r.length ? (r = "_jsonp" + (new Date).getTime() + ~~ (1e8 * Math.random()), this.jsonpCallback = e) : this.jsonpCallback = this.jsonpCallback || window[r];
        window[r] = function(e) {
            o.parentNode && o.parentNode.removeChild(o),
            t.content = e,
            t._onLoad()
        };
        var o = document.createElement("script");
        o.type = "text/javascript",
        o.src = i + r,
        document.getElementsByTagName("head")[0].appendChild(o)
    }
},
function(module, exports, __webpack_require__) {
    "use strict";
    var TextItem = __webpack_require__(38),
    quickLoader = __webpack_require__(7);
    function JSONItem(e) {
        e && _super.constructor.apply(this, arguments)
    }
    module.exports = JSONItem,
    JSONItem.type = "json",
    JSONItem.extensions = ["json"],
    quickLoader.register(JSONItem),
    JSONItem.retrieve = function() {
        return ! 1
    };
    var _super = TextItem.prototype,
    _p = JSONItem.prototype = new TextItem;
    function _onLoad() {
        this.content || (this.content = window.JSON && window.JSON.parse ? JSON.parse(this.xmlhttp.responseText.toString()) : eval(this.xmlhttp.responseText.toString())),
        _super._onLoad.call(this)
    }
    _p.constructor = JSONItem,
    _p._onLoad = _onLoad
},
function(e, t, n) {
    "use strict";
    var i, r = n(14),
    o = n(7);
    function a(e, t) {
        if (e) {
            this.loadThrough = !t || t.loadThrough === i || t.loadThrough,
            s.constructor.apply(this, arguments);
            try {
                this.content = new Audio
            } catch(e) {
                this.content = document.createElement("audio")
            }
            this.crossOrigin && (this.content.crossOrigin = this.crossOrigin)
        }
    }
    e.exports = a,
    a.type = "audio",
    a.extensions = ["mp3", "ogg"],
    o.register(a),
    a.retrieve = function(e) {
        return ! 1
    };
    var s = r.prototype,
    u = a.prototype = new r;
    u.constructor = a,
    u.load = function() {
        s.load.apply(this, arguments);
        var e = this.content;
        e.src = this.url,
        this.loadThrough ? e.addEventListener("canplaythrough", this.boundOnLoad, !1) : e.addEventListener("canplay", this.boundOnLoad, !1);
        e.load()
    },
    u._onLoad = function() {
        if (this.content.removeEventListener("canplaythrough", this.boundOnLoad, !1), this.content.removeEventListener("canplay", this.boundOnLoad, !1), this.isLoaded) return;
        s._onLoad.call(this)
    }
},
function(e, t, n) {
    "use strict";
    var i, r = n(14),
    o = n(7);
    function a(e, t) {
        if (e) {
            this.loadThrough = !t || t.loadThrough === i || t.loadThrough,
            s.constructor.apply(this, arguments);
            try {
                this.content = new Video
            } catch(e) {
                this.content = document.createElement("video")
            }
            this.crossOrigin && (this.content.crossOrigin = this.crossOrigin)
        }
    }
    e.exports = a,
    a.type = "video",
    a.extensions = ["mp4", "webm", "ogv"],
    o.register(a),
    a.retrieve = function(e) {
        return ! 1
    };
    var s = r.prototype,
    u = a.prototype = new r;
    u.constructor = a,
    u.load = function() {
        s.load.apply(this, arguments);
        var e = this.content;
        e.preload = "auto",
        e.src = this.url,
        this.loadThrough ? e.addEventListener("canplaythrough", this.boundOnLoad, !1) : e.addEventListener("canplay", this.boundOnLoad, !1);
        e.load()
    },
    u._onLoad = function() {
        if (this.content.removeEventListener("canplaythrough", this.boundOnLoad), this.content.removeEventListener("canplay", this.boundOnLoad), this.isLoaded) return;
        s._onLoad.call(this)
    }
},
function(e, t, n) {
    "use strict";
    var i = n(14),
    r = n(7);
    function o(e, t) {
        e && (a.constructor.call(this, e, t), !this.loadFunc && console && console[console.error || console.log]("require loadFunc in the config object."))
    }
    e.exports = o,
    o.type = "any",
    o.extensions = [],
    r.register(o),
    o.retrieve = function() {
        return ! 1
    };
    var a = i.prototype,
    s = o.prototype = new i;
    s.constructor = o,
    s.load = function() {
        var e = this;
        this.loadFunc(this.url,
        function(t) {
            e.content = t,
            a._onLoad.call(e)
        },
        this.loadingSignal)
    }
},
function(e, t, n) {
    "use strict";
    var i = n(14),
    r = n(69),
    o = n(7);
    function a(e, t) {
        e && (s.constructor.apply(this, arguments), this.content = new Image, this.crossOrigin && (this.content.crossOrigin = this.crossOrigin))
    }
    e.exports = a;
    var s = i.prototype,
    u = a.prototype = new i;
    u.constructor = a,
    u.load = function() {
        s.load.apply(this, arguments);
        var e = this.content;
        e.onload = this.boundOnLoad,
        e.src = this.url
    },
    u._onLoad = function() {
        delete this.content.onload,
        this.width = this.content.width,
        this.height = this.content.height,
        s._onLoad.call(this)
    },
    a.retrieve = function(e) {
        if (e.nodeType && e.style) {
            var t = [];
            "img" === e.nodeName.toLowerCase() && e.src.indexOf(";") < 0 && t.push(e.src),
            r(e, "background-image").replace(/s?url\(\s*?['"]?([^;]*?)['"]?\s*?\)/g,
            function(e, n) {
                t.push(n)
            });
            for (var n = t.length; n--;) 0 === t[n].indexOf("data:") && t.splice(n, 1);
            return !! t.length && t
        }
        return "string" == typeof e && [e]
    },
    a.type = "image",
    a.extensions = ["jpg", "gif", "png"],
    o.register(a)
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n, i) {
        if (i = (n = window.getComputedStyle) ? n(e) : e.currentStyle) return i[t.replace(/-(\w)/gi,
        function(e, t) {
            return t.toUpperCase()
        })]
    }
},
function(e, t, n) {
    "use strict";
    var i = n(5);
    t.add = function(e) {
        if (window.atob) {
            var t = window.console;
            t && (i.isFirefox || i.isChrome ? t.log.apply(t, ["\n" + (e ? atob("JWMgQ3JlYXRlZCBieSBKYWNrY2hlbjAwNyAlYyBodHRwczovL2dpdGh1Yi5jb20vamFja2NoZW4wMTIw") : atob("JWMgRGV2ZWxvcGVkIGJ5IEphY2tjaGVuMDA3ICVjIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWNrY2hlbjAxMjA=")) + "\n", atob("Y29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMyMjI7IHBhZGRpbmc6NXB4IDVweDs="), atob("Y29sb3I6ICM5OTk7IGJhY2tncm91bmQ6ICNGQ0ZDRkM7IHBhZGRpbmc6NXB4IDA7")]) : t.log(atob(e ? "JWMgQ3JlYXRlZCBieSBKYWNrY2hlbjAwNyAlYyBodHRwczovL2dpdGh1Yi5jb20vamFja2NoZW4wMTIw": "JWMgRGV2ZWxvcGVkIGJ5IEphY2tjaGVuMDA3ICVjIGh0dHBzOi8vZ2l0aHViLmNvbS9qYWNrY2hlbjAxMjA=")))
        }
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        if (n = n || 0, null == e) return - 1;
        for (var i = e.length,
        r = n < 0 ? i + n: n; r < i;) {
            if (e[r] === t) return r;
            r++
        }
        return - 1
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        if (null != e) for (var i = -1,
        r = e.length; ++i < r && !1 !== t.call(n, e[i], i, e););
    }
},
function(e, t, n) {
    "use strict";
    var i = n(20),
    r = n(21);
    e.exports = function(e, t) {
        e = i(e),
        t = t || r;
        for (var n, o, a = 0,
        s = e.length,
        u = t.length,
        c = !0; c && a < s;) for (c = !1, n = -1, o = e.charAt(a); ++n < u;) if (o === t[n]) {
            c = !0,
            a++;
            break
        }
        return a >= s ? "": e.substr(a, s)
    }
},
function(e, t, n) {
    "use strict";
    var i = n(20),
    r = n(21);
    e.exports = function(e, t) {
        e = i(e),
        t = t || r;
        for (var n, o, a = e.length - 1,
        s = t.length,
        u = !0; u && a >= 0;) for (u = !1, n = -1, o = e.charAt(a); ++n < s;) if (o === t[n]) {
            u = !0,
            a--;
            break
        }
        return a >= 0 ? e.substring(0, a + 1) : ""
    }
},
function(e, t, n) {
    "use strict";
    var i = n(42);
    e.exports = function(e) {
        return i(e, "String")
    }
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        var i = e.length;
        t = null == t ? 0 : t < 0 ? Math.max(i + t, 0) : Math.min(t, i),
        n = null == n ? i: n < 0 ? Math.max(i + n, 0) : Math.min(n, i);
        for (var r = []; t < n;) r.push(e[t++]);
        return r
    }
},
function(e, t, n) {
    "use strict";
    var i, r, o = n(24);
    function a(e, t, n, i) {
        return e.call(i, t[n], n, t)
    }
    e.exports = function(e, t, n) {
        var s, u = 0;
        for (s in null == i &&
        function() {
            for (var e in r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], i = !0, {
                toString: null
            }) i = !1
        } (), e) if (!1 === a(t, e, s, n)) break;
        if (i) for (var c = e.constructor,
        l = !!c && e === c.prototype; (s = r[u++]) && ("constructor" === s && (l || !o(e, s)) || e[s] === Object.prototype[s] || !1 !== a(t, e, s, n)););
    }
},
function(e, t, n) {
    "use strict";
    var i = n(1),
    r = n(79),
    o = n(47),
    a = n(2);
    function s(e, t) {
        this.heroDom = e,
        this.hideDistanceRatio = t || .25,
        this.innerStyle = e.querySelector(".hero-inner").style,
        this.title = this.createTextEffect(".hero-title", !0),
        this.desc = this.createTextEffect(".hero-desc")
    }
    var u = s.prototype;
    e.exports = s,
    u.createTextEffect = function(e, t) {
        var n = this.heroDom.querySelector(e);
        return n ? new r({
            domElement: n,
            useBlur: !!t
        }) : null
    },
    u.reset = function() {
        this.isActive = null,
        this.title && this.title.hide(0);
        this.desc && this.desc.hide(0);
        this.update()
    },
    u.update = function() {
        var e = i.height * this.hideDistanceRatio,
        t = Math.min(i.scrollTop, e),
        n = a.clamp(t / e, 0, 1);
        o.moveY(this.innerStyle, .85 * t),
        this.innerStyle.opacity = 1 - n,
        this.innerStyle.visibility = 1 === n ? "hidden": "visible";
        var r = n < 1;
        r !== this.isActive && (this.isActive = r, r ? (this.title && this.title.show(2), this.desc && this.desc.show(3)) : (this.title && this.title.hide(0), this.desc && this.desc.hide(0)))
    }
},
function(e, t, n) {
    "use strict";
    var i = n(6),
    r = n(44),
    o = n(2);
    function a(e) {
        i(this, {
            text: "",
            domElement: null,
            ratio: 1,
            stagger1s: [],
            stagger2s: [],
            chars: [],
            useBlur: !0
        },
        e),
        this.domElement = this.domElement || document.createElement("div"),
        this.text = this.text || this.domElement.innerHTML,
        this.style = this.domElement.style,
        this.boundOnUpdate = this.onUpdate.bind(this),
        this.boundOnComplete = this.onComplete.bind(this),
        this.setText(this.text)
    }
    var s = a.prototype;
    e.exports = a,
    s.setText = function(e) {
        e = this.text = e || this.text,
        this.domElement.innerHTML = "",
        this.chars.length = 0,
        this.stagger1s.length = 0,
        this.stagger2s.length = 0;
        for (var t = 0,
        n = e.length; t < n; t++) {
            var i = this.chars[t] = document.createElement("span");
            i.innerHTML = e.substr(t, 1),
            this.domElement.appendChild(i)
        }
        this.onComplete(),
        this.onUpdate()
    },
    s.show = function(e, t) {
        TweenLite.killTweensOf(this),
        TweenLite.to(this, e || 0, {
            delay: (t || 0) + .5,
            ratio: 1,
            onUpdate: this.boundOnUpdate,
            onComplete: this.boundOnComplete
        })
    },
    s.hide = function(e, t) {
        TweenLite.killTweensOf(this),
        TweenLite.to(this, e || 0, {
            delay: t || 0,
            ratio: 0,
            onUpdate: this.boundOnUpdate,
            onComplete: this.boundOnComplete
        })
    },
    s.onUpdate = function() {
        for (var e = this.useBlur,
        t = 0,
        n = this.chars.length; t < n; t++) {
            var i = this.chars[t],
            r = i.style,
            a = o.cUnMix(.4 * this.stagger1s[t], 1 - .4 * this.stagger2s[t], this.ratio);
            r.opacity = a,
            e && (r.filter = "blur(" + .2 * (1 - a) + "ex)"),
            r.visibility = a ? "visible": "hidden"
        }
        this.style.visibility = this.ratio ? "visible": "hidden"
    },
    s.onComplete = function() {
        this.stagger1s.length = 0,
        this.stagger2s.length = 0;
        var e = this.chars,
        t = e.length ? e.length - 1 : e.length,
        n = Array.apply(null, {
            length: e.length
        }).map(Number.call, Number);
        Array.prototype.push.apply(this.stagger1s, r(n).map(function(e) {
            return e / t
        })),
        Array.prototype.push.apply(this.stagger2s, r(n).map(function(e) {
            return e / t
        })),
        this.style.visibility = this.ratio ? "visible": "hidden"
    }
},
function(e, t, n) {
    "use strict";
    var i = n(45),
    r = n(46),
    o = n(81);
    e.exports = function(e, t) {
        return e = null == e ? i: ~~e,
        t = null == t ? r: ~~t,
        Math.round(o(e - .5, t + .499999999999))
    }
},
function(e, t, n) {
    "use strict";
    var i = n(82),
    r = n(45),
    o = n(46);
    e.exports = function(e, t) {
        return (e = null == e ? r: e) + ((t = null == t ? o: t) - e) * i()
    }
},
function(e, t, n) {
    "use strict";
    function i() {
        return i.get()
    }
    i.get = Math.random,
    e.exports = i
},
function(e, t, n) {
    "use strict";
    var i = n(17),
    r = n(2),
    o = n(15),
    a = n(8);
    function s(e, t) {
        t.innerHTML = "<span>" + i(t.innerHTML).split("").join("</span><span>").replace(/<span>\s<\/span>/g, "&nbsp;") + "</span>",
        this.dom = e,
        this.chars = t.querySelectorAll("span"),
        this.isAnimating = !1,
        this.time = 0,
        this.onUpdate = this.update.bind(this),
        this.onComplete = this.complete.bind(this)
    }
    e.exports = s;
    var u = s.prototype;
    u.flip = function() {
        if (!this.isAnimating) {
            var e = l * this.chars.length + c;
            a.fromTo(this, e, {
                time: 0
            },
            {
                time: e,
                ease: "linear",
                onUpdate: this.onUpdate,
                onComplete: this.onComplete
            })
        }
    },
    u.update = function() {
        for (var e = this.chars,
        t = 0,
        n = e.length; t < n; t++) {
            var i = e[t].style,
            a = o.easeOutQuad(r.cUnMix(t * l, t * l + c, this.time)),
            s = a < .5 ? -a / .5 : 1 - 2 * (a - .5);
            i.transform = "translate3d(0," + 120 * s + "%,0)"
        }
    },
    u.complete = function() {
        this.isAnimating = !1
    };
    var c = .6,
    l = .02
},
function(e, t, n) {
    "use strict";
    var i, r = n(9),
    o = n(43),
    a = n(85),
    s = n(6),
    u = n(13),
    c = n(47);
    function l(e) {
        s(this, {
            wrapper: i,
            inputTarget: i,
            moveContainer: i,
            indicator: i,
            _tPos: 0,
            _tRatio: 0,
            _pos: 0,
            _ratio: 0,
            _easeRatio: 1,
            _boundEaseRatio: .4,
            _momentumEaseRatio: .08,
            _isRendering: !1,
            _isActive: !0,
            _clampWheel: !0,
            isVerticalOnly: !0,
            isBound: !1,
            autoUpdateStyles: !0,
            onUpdated: new u,
            onOverScrolled: new u,
            deltaIndex: 0,
            indicatorPadding: 0,
            wheelSpeedInv: 7.5
        },
        e),
        this.moveContainerStyle = this.moveContainer.style,
        this.indicator = this.indicator,
        this.indicatorStyle = this.indicator.style,
        this.wrapper.scrollpane = this,
        this.inputTarget = this.inputTarget || this.wrapper,
        this.deltaYLog = [],
        this.deltaTimeLog = []
    }
    var d = l.prototype,
    f = 5;
    function h(e) { ! this._isActive || this.movableHeight < 1 || (this.isInverted = e.target == this.indicator, this.isDown = !0)
    }
    function v(e, t) {
        this.moveToPos(this._tPos + e * this.visibleHeight / this.wheelSpeedInv, .1, this._clampWheel),
        this.onUpdated.dispatch(this._pos, this._ratio + .1 * e)
    }
    function m(e) {
        if (r.isPossibilyScrollH && (this.isVerticalOnly || e.isVerticalOnly)) return this.hasMoved = !1,
        void(this.isDown = !1); ! this._isActive || !this.isDown || this.movableHeight < 1 || (e && "a" !== e.target.tagName.toLowerCase() && e.preventDefault(), this.hasMoved || (this.deltaYLog = [], this.deltaTimeLog = [], this.deltaIndex = 0), this.deltaYLog[this.deltaIndex] = e.deltaY * (this.isInverted ? -1 : 1), this.deltaTimeLog[this.deltaIndex++] = e.deltaTime, this.deltaIndex == f - 1 && (this.deltaIndex = 0), this.hasMoved = !0, this.moveToPos(this._tPos + e.deltaY * (this.isInverted ? -this.movableHeight / this.indicatorMovableHeight: 1), .5))
    }
    function p(e) {
        if (this.isDown = !1, this._isActive && this.hasMoved && !(this.movableHeight < 1)) {
            this.hasMoved = !1;
            for (var t = e.deltaY * (this.isInverted ? -1 : 1), n = e.deltaTime, i = Math.max(this.deltaIndex, this.deltaYLog.length); i--;) t += this.deltaYLog[i],
            n += this.deltaTimeLog[i];
            var r = this._tPos + t / n * 200;
            this.moveToPos(r, this._momentumEaseRatio)
        }
    }
    d.init = function() {
        r.add(this.inputTarget, "down", o(h, this)),
        r.add(this.inputTarget, "wheel", o(v, this)),
        r.onMoved.add(m, this),
        r.onUped.add(p, this)
    },
    d._onDown = h,
    d._onUp = p,
    d.onResize = function() {
        this.visibleHeight = this.wrapper.offsetHeight,
        this.height = this.moveContainer.offsetHeight,
        this.movableHeight = Math.max(0, this.height - this.visibleHeight),
        this.isMovable = this.movableHeight > 0,
        this.indicatorHeight = Math.min(1, this.visibleHeight / this.height) * (this.visibleHeight - this.indicatorPadding),
        this.indicatorMovableHeight = this.visibleHeight - this.indicatorHeight - this.indicatorPadding,
        this.indicatorStyle.height = this.indicatorHeight + "px",
        this.indicator.parentNode === this.wrapper ? this.indicatorStyle.display = this.isMovable ? "block": "none": this.indicator.parentNode.style.display = this.isMovable ? "block": "none";
        this.moveToRatio(this._tRatio, 1)
    },
    d._bound = function() {
        this._ratio > 0 ? this._pos = this._tPos = this._ratio = this._tRatio = 0 : this._ratio < -1 && (this._ratio = this._tRatio = -1, this._pos = this._tPos = this._tRatio * this.movableHeight)
    },
    d.render = function() {
        this._pos += (this._tPos - this._pos) * this._easeRatio,
        this._ratio = this._pos / this.movableHeight,
        this.isDown || this.isBound && !this._isRendering || (this._ratio > 0 ? (this._tRatio -= this._tRatio * this._boundEaseRatio, this._tPos = this._tRatio * this.movableHeight) : this._ratio < -1 && (this._tRatio += ( - 1 - this._tRatio) * this._boundEaseRatio, this._tPos = this._tRatio * this.movableHeight));
        this.isBound && this._bound();
        var e = Math.max( - this.movableHeight - 1 - this._tPos, this._tPos - 1),
        t = e > 0;
        this._isRendering ? !t && ~~Math.abs(this._tPos - this._pos) < 1 && (this.isDown || this._bound(), this._pos = ~~this._tPos, this._isRendering = !1) : (t || Math.abs(this._tPos - this._pos) > 1) && (this._isRendering = !0);
        this.autoUpdateStyles && this.updateStyles();
        this.onUpdated.dispatch(this._pos, this._ratio),
        t && this.onOverScrolled.dispatch(this._pos > 0 ? -1 : 1, e)
    },
    d.moveToRatio = function(e, t) {
        this.moveToPos(e * this.movableHeight, t)
    },
    d.moveToPos = function(e, t, n) {
        this._easeRatio = t === i ? 1 : t,
        this._tPos = e,
        this._tRatio = this._tPos / (this.movableHeight > 0 ? this.movableHeight: 1),
        n && (this._tRatio = a(this._tRatio, -1, 0), this._tPos = this._tRatio * this.movableHeight);
        this._isRendering || this.render()
    },
    d.updateStyles = function() {
        this._moveElementTo(this.moveContainerStyle, 0 | this._pos),
        this._moveElementTo(this.indicatorStyle, this.indicatorMovableHeight * -this._ratio | 0)
    },
    d._moveElementTo = c.moveY,
    d.setActive = function(e) {
        this._isActive = e,
        this.isDown = !1
    },
    e.exports = l
},
function(e, t, n) {
    "use strict";
    e.exports = function(e, t, n) {
        return e < t ? t: e > n ? n: e
    }
},
function(e, t, n) {
    "use strict";
    var i;
    function r(e) { (i = i || document.createElement("div")).innerHTML = e;
        for (var t, n = i.childNodes,
        r = [], o = n.length; o--;) 1 === (t = n[o]).nodeType && (r.unshift(t), i.removeChild(t));
        return i.innerHTML = "",
        r
    }
    t.createElements = r,
    t.createElement = function(e) {
        return r(e)[0]
    },
    t.removeSelf = function(e) {
        e.parentNode && e.parentNode.removeChild(e);
        return e
    },
    t.clone = function(e) {
        return r(e.outerHTML)[0]
    },
    t.filterByClass = function(e, t, n) {
        for (var i = [], r = 0, o = e.length; r < o; r++) if (e[r].classList.contains(t)) {
            if (n) return e[r];
            i.push(e[r])
        }
        return n ? null: i
    }
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(1),
    o = n(4),
    a = n(2),
    s = n(10),
    u = n(16),
    c = n(32),
    l = n(108),
    d = n(33);
    function f() {
        h.constructor.call(this, {
            refDomId: "featured",
            diffMultiplier: .45,
            specMultiplier: 1,
            pointColor: 16777215,
            scatterDivider: 150,
            scatterPowInv: .4,
            lightColor: 46079,
            backgroundColor: 394758,
            path: "blog",
            camera: new i.PerspectiveCamera(60, 1, .1, 10),
            pointCount: 64 * Math.ceil(window.screen.height / 30),
            parallax: 0,
            usePostprocessing: !1,
            postprocessingToScreen: !1
        })
    }
    var h = s.prototype,
    v = f.prototype = new s;
    v.constructor = f,
    v.preInit = function() {
        this.usePostprocessing || (this.sceneRenderTarget = o.createRenderTarget(1, 1, !0), this.sceneRenderTarget.depthBuffer = !0, this.sceneRenderTarget.stencilBuffer = !0);
        m = new i.Color,
        p = new i.Color,
        u.preload("under_water"),
        l.preInit(this),
        h.preInit.call(this)
    },
    v.init = function() {
        h.init.call(this),
        this.camera.far = 100,
        this.postprocessingQueue.push(this.getSmaa()),
        c.init(this),
        this.scene.add(c.bgMesh),
        l.init(this),
        this.scene.add(l.mesh),
        this.precompile()
    },
    v.resize = function() {
        h.resize.call(this)
    },
    v.afterRender = function() {
        var e = o.getColorState(),
        t = r.renderer;
        t.autoClear = !1,
        t.autoClearColor = !1,
        t.autoClearStencil = !1,
        t.autoClearDepth = !1,
        t.setRenderTarget(null),
        t.setScissorTest(!0),
        t.setViewport(this.left, r.height - this.top - this.height, this.width, this.height),
        t.setScissor(this.left, r.height - this.top - this.height, this.width, this.height);
        var n = r.featureOverMaskHeight * r.height,
        i = Math.min(0, this.refDomRect.top - n) / this.height,
        a = Math.max(0, this.refDomRect.bottom - r.height) / this.height + 1;
        d.renderVerticalGradientMask(this.usePostprocessing ? this.sharedPostprocessing.fromRenderTarget.texture: this.sceneRenderTarget.texture, i, i + n / this.height, a - n / this.height, a),
        t.setScissorTest(!1),
        o.setColorState(e)
    },
    v.update = function(e, t) {
        if (this.paddingTop = r.height * r.featureOverMaskHeight | 0, this.testViewport(), u.targetDistortion = this.refDomRect.top + 1 < r.height && this.refDomRect.bottom > 1 ? 1 : 0, this.needsRender) { ! x && r.scrollTopVelocity > 0 && u.playEffect("under_water"),
            void 0 === g && (g = t),
            g += .1 * (t - g);
            var n = Math.max(0, g),
            i = _.length,
            o = _[Math.floor(n) % i],
            s = _[Math.ceil(n) % i],
            d = n % 1;
            this.diffMultiplier = a.mix(o[0], s[0], d),
            this.specMultiplier = a.mix(o[1], s[1], d),
            this.pointColor = m.setHex(o[2]).lerp(p.setHex(s[2]), d).getHex(),
            this.scatterDivider = a.mix(o[3], s[3], d),
            this.scatterPowInv = a.mix(o[4], s[4], d),
            this.lightColor = m.setHex(o[5]).lerp(p.setHex(s[5]), d).getHex(),
            this.backgroundColor = m.setHex(o[6]).lerp(p.setHex(s[6]), d).getHex(),
            this.camera.updateMatrixWorld(!0),
            this.updateCamera(),
            this.camera.position.z = 8,
            this.camera.position.y = this.refDomRect.top / this.refDomRect.height * 4.5,
            this.camera.updateProjectionMatrix(),
            this.updateMouse(),
            this.scene.updateMatrixWorld(!0),
            c.update(e),
            l.update(e),
            this.render()
        }
        x = this.needsRender
    };
    var m = void 0,
    p = void 0,
    g = void 0,
    x = !1,
    _ = [[.2, 1, 16777215, 50, .7, 5197647, 1118481], [.5, 1, 16714566, 80, .5, 46079, 16711680], [.8, .4, 2276561, 67, .6, 4306382, 471354], [.3, .8, 16777215, 80, .5, 16731014, 1492713]];
    e.exports = new f
},
function(e, t) {
    e.exports = "attribute vec3 position;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = position.xy * 0.5 + 0.5;\n    gl_Position = vec4( position, 1.0 );\n}\n"
},
function(e, t) {
    e.exports = "attribute vec3 position;\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"
},
function(e, t) {
    e.exports = "uniform vec4 u_color;\n\nvoid main() {\n    gl_FragColor = u_color;\n}\n"
},
function(e, t) {
    e.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nuniform vec4 u_transform;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position.xy * u_transform.zw + u_transform.xy, 0.0, 1.0 );\n}\n"
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(4);
    function o(e, n) {
        s || t.init(),
        this.width = 1,
        this.height = 1,
        this.useScissor = !1,
        this.scissorRect = new i.Vector4,
        this.scene = null,
        this.camera = null,
        this.preserveScene = e,
        this.resolution = new i.Vector2(0, 0),
        this.fullResolution = new i.Vector2(0, 0),
        this.fromRenderTarget = r.createRenderTarget(1, 1, !0),
        this.fromRenderTarget.depthBuffer = !0,
        this.fromRenderTarget.stencilBuffer = !0,
        this.toRenderTarget = this.fromRenderTarget.clone(),
        this.prevSceneRenderTarget = e ? this.fromRenderTarget.clone() : null,
        this.sceneRenderTarget = e ? this.fromRenderTarget.clone() : null,
        this.useDepthTexture = !!n,
        this.useDepthTexture && (this.depthTexture = new i.DepthTexture, this.depthTexture.type = i.UnsignedShortType, this.depthTextureUniform = {
            value: this.depthTexture
        }),
        this.fromTexture = this.fromRenderTarget.texture,
        this.toTexture = this.toRenderTarget.texture,
        this.prevSceneTexture = e ? this.prevSceneRenderTarget.texture: null,
        this.sceneTexture = e ? this.sceneRenderTarget.texture: null,
        this.willToScreen = !1,
        this.mesh = new i.Mesh,
        this.queue = []
    }
    var a = o.prototype;
    t = e.exports = o,
    a.swap = function() {
        var e = this.fromRenderTarget;
        this.fromRenderTarget = this.toRenderTarget,
        this.toRenderTarget = e,
        this.fromTexture = this.fromRenderTarget.texture,
        this.toTexture = this.toRenderTarget.texture
    },
    a.setSize = function(e, t) {
        this.width = e,
        this.height = t,
        this.resolution.set(e, t),
        this.fullResolution.set(e, t),
        this.preserveScene && (this.sceneRenderTarget.setSize(e, t), this.prevSceneRenderTarget.setSize(e, t));
        this.fromRenderTarget.setSize(e, t),
        this.toRenderTarget.setSize(e, t)
    },
    a.dispose = function() {
        this.fromRenderTarget && this.fromRenderTarget.dispose();
        this.toRenderTarget && this.toRenderTarget.dispose();
        this.prevSceneRenderTarget && this.prevSceneRenderTarget.dispose();
        this.sceneRenderTarget && this.sceneRenderTarget.dispose()
    },
    a.renderMaterial = function(e, t) {
        if (this.mesh.material = e, !t && this.useScissor) {
            var n = r.renderer,
            i = this.scissorRect;
            n.setRenderTarget(null),
            n.setScissorTest(!0),
            n.setViewport(i.x, this.height - i.y - i.w, i.z, i.w),
            n.setScissor(i.x, this.height - i.y - i.w, i.z, i.w),
            r.renderObject(this.mesh, t),
            n.setScissorTest(!1)
        } else r.renderObject(this.mesh, t)
    },
    a.beforeRenderOut = function() {},
    a.afterRenderOut = function() {},
    a.render = function(e, t, n) {
        var i = r.renderer;
        this.willToScreen = n,
        this.scene = e,
        this.camera = t,
        this.mesh.geometry = i.xr.enabled ? u: s;
        var o = this.queue.filter(c),
        a = void 0;
        if (i.setRenderTarget(null), i.setScissorTest(!1), this.preserveScene) {
            var l = this.prevSceneRenderTarget;
            this.prevSceneRenderTarget = this.sceneRenderTarget,
            this.sceneRenderTarget = l,
            this.prevSceneTexture = this.prevSceneRenderTarget.texture,
            this.sceneTexture = this.sceneRenderTarget.texture
        }
        if (o.length) {
            this.beforeRenderOut(),
            this.useDepthTexture && (this.fromRenderTarget.depthTexture = this.depthTexture),
            i.setRenderTarget(this.fromRenderTarget),
            i.render(e, t),
            this.useDepthTexture && (this.fromRenderTarget.depthTexture = null),
            this.preserveScene && r.copy(this.fromRenderTarget.texture, this.sceneRenderTarget);
            var d = r.getColorState();
            i.autoClear = !1;
            for (var f = 0,
            h = o.length; f < h; f++) {
                var v = f === h - 1 && n; (a = o[f]).setPostprocessing(this),
                a.render(this, v)
            }
            this.afterRenderOut(),
            r.setColorState(d)
        } else {
            this.preserveScene && (this.useDepthTexture && (this.sceneRenderTarget.depthTexture = this.depthTexture), i.setRenderTarget(this.sceneRenderTarget), i.render(e, t), this.useDepthTexture && (this.sceneRenderTarget.depthTexture = null));
            var m = this.scissorRect;
            i.setRenderTarget(null),
            i.setScissorTest(!0),
            i.setViewport(m.x, this.height - m.y - m.w, m.z, m.w),
            i.setScissor(m.x, this.height - m.y - m.w, m.z, m.w),
            this.preserveScene ? (this.beforeRenderOut(), r.copy(this.sceneRenderTarget.texture), this.afterRenderOut()) : (this.beforeRenderOut(), i.setRenderTarget(null), i.render(e, t), this.afterRenderOut()),
            i.setScissorTest(!1)
        }
    };
    var s = t.geom = null,
    u = t.vrGeom = null;
    function c(e) {
        return e.enabled && e.needsRender()
    }
    t.init = function() { (s = t.geom = t.geom || new i.BufferGeometry).setAttribute("position", new i.BufferAttribute(new Float32Array([ - 1, -1, 0, 4, -1, 0, -1, 4, 0]), 3)),
        s.setAttribute("a_uvClamp", new i.BufferAttribute(new Float32Array([0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1]), 4)),
        (u = t.vrGeom = t.vrGeom || new i.BufferGeometry).setAttribute("position", new i.BufferAttribute(new Float32Array([ - 4, -1, 0, 0, -1, 0, 0, 4, 0, 0, -1, 0, 4, -1, 0, 0, 4, 0]), 3)),
        u.setAttribute("a_uvClamp", new i.BufferAttribute(new Float32Array([0, 0, .5, 1, 0, 0, .5, 1, 0, 0, .5, 1, .5, 0, 1, 1, .5, 0, 1, 1, .5, 0, 1, 1]), 4))
    }
},
function(e, t, n) {
    "use strict";
    var i = n(49),
    r = n(4),
    o = n(2),
    a = n(30),
    s = n(0);
    function u(e) {
        var t = (e = a({
            useHighPass: !0,
            ITERATION: 4,
            amount: 1,
            radius: 0,
            threshold: 0,
            greyRatio: 0,
            smoothWidth: 1
        },
        e)).ITERATION;
        this.directionX = new s.Vector2(1, 0),
        this.directionY = new s.Vector2(0, 1);
        var i = this.highPassRenderTarget = r.createRenderTarget(1, 1, !0);
        this.renderTargetsHorizontal = [],
        this.renderTargetsVertical = [],
        this.blurMaterials = [];
        for (var o = 0; o < t; o++) this.renderTargetsHorizontal.push(i.clone()),
        this.renderTargetsVertical.push(i.clone());
        for (var u = {
            u_bloomWeights: {
                value: []
            },
            u_greyRatio: {
                value: 0
            }
        },
        l = 0; l < t; l++) u["u_blurTexture" + l] = {
            value: this.renderTargetsVertical[l].texture
        };
        c.constructor.call(this, a({
            uniforms: u,
            defines: {
                ITERATION: t
            },
            fragmentShader: r.precisionPrefix + n(97),
            blending: s.NoBlending
        },
        e)),
        this.highPassMaterial = new s.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    value: null
                },
                u_luminosityThreshold: {
                    value: 1
                },
                u_smoothWidth: {
                    value: 1
                }
            },
            vertexShader: r.precisionPrefix + r.vertexShader,
            fragmentShader: r.precisionPrefix + n(98)
        });
        for (var d = 0; d < this.ITERATION; d++) {
            var f = 3 + 2 * d;
            this.blurMaterials[d] = new s.RawShaderMaterial({
                uniforms: {
                    u_texture: {
                        value: null
                    },
                    u_resolution: {
                        value: new s.Vector2
                    },
                    u_direction: {
                        value: null
                    }
                },
                vertexShader: r.precisionPrefix + r.vertexShader,
                fragmentShader: r.precisionPrefix + n(99),
                defines: {
                    KERNEL_RADIUS: f,
                    SIGMA: f
                }
            })
        }
    }
    var c = i.prototype,
    l = u.prototype = Object.create(c);
    l.constructor = u,
    l.setPostprocessing = function(e) {
        c.setPostprocessing.call(this, e);
        var t = e.width,
        n = e.height,
        i = Math.ceil(t / 2),
        r = Math.ceil(n / 2);
        this.highPassRenderTarget.setSize(i, r);
        for (var o = 0; o < this.ITERATION; o++) this.renderTargetsHorizontal[o].setSize(i, r),
        this.renderTargetsVertical[o].setSize(i, r),
        this.blurMaterials[o].uniforms.u_resolution.value = new s.Vector2(i, r),
        i = Math.ceil(i / 2),
        r = Math.ceil(r / 2)
    },
    l.dispose = function() {
        this.highPassRenderTarget && this.highPassRenderTarget.dispose();
        for (var e = 0; e < this.ITERATION; e++) this.renderTargetsHorizontal[e] && this.renderTargetsHorizontal[e].dispose(),
        this.renderTargetsVertical[e] && this.renderTargetsVertical[e].dispose()
    },
    l.needsRender = function() {
        return !! this.amount
    },
    l.render = function(e, t) {
        var n = this.ITERATION,
        i = this.highPassMaterial;
        this.useHighPass && (i.uniforms.u_texture.value = e.fromTexture, i.uniforms.u_luminosityThreshold.value = this.threshold, i.uniforms.u_smoothWidth.value = this.smoothWidth, e.renderMaterial(i, this.highPassRenderTarget));
        for (var r = this.useHighPass ? this.highPassRenderTarget: e.fromRenderTarget, a = 0; a < n; a++) {
            var s = this.blurMaterials[a];
            s.uniforms.u_texture.value = r.texture,
            s.uniforms.u_direction.value = this.directionX,
            e.renderMaterial(s, this.renderTargetsHorizontal[a]),
            s.uniforms.u_texture.value = this.renderTargetsHorizontal[a].texture,
            s.uniforms.u_direction.value = this.directionY,
            e.renderMaterial(s, this.renderTargetsVertical[a]),
            r = this.renderTargetsVertical[a]
        }
        this.material.uniforms.u_texture.value = e.fromTexture,
        this.material.uniforms.u_greyRatio.value = this.greyRatio;
        for (var u = 0; u < n; u++) {
            var l = (n - u) / n;
            this.uniforms.u_bloomWeights.value[u] = this.amount * o.mix(l, 1.2 - l, this.radius) / Math.pow(2, n - u - 1)
        }
        c.render.call(this, e, t)
    },
    e.exports = u
},
function(e, t, n) {
    "use strict";
    var i = n(95),
    r = n(23),
    o = n(22),
    a = n(31);
    function s(e, t) {
        switch (o(e)) {
        case "Object":
            return function(e, t) {
                if (a(e)) {
                    var n = {};
                    return r(e,
                    function(e, n) {
                        this[n] = s(e, t)
                    },
                    n),
                    n
                }
                return t ? t(e) : e
            } (e, t);
        case "Array":
            return function(e, t) {
                var n = [],
                i = -1,
                r = e.length;
                for (; ++i < r;) n[i] = s(e[i], t);
                return n
            } (e, t);
        default:
            return i(e)
        }
    }
    e.exports = s
},
function(e, t, n) {
    "use strict";
    var i = n(22),
    r = n(31),
    o = n(6);
    e.exports = function(e) {
        switch (i(e)) {
        case "Object":
            return r(a = e) ? o({},
            a) : a;
        case "Array":
            return e.slice();
        case "RegExp":
            return n = "",
            n += (t = e).multiline ? "m": "",
            n += t.global ? "g": "",
            n += t.ignoreCase ? "i": "",
            new RegExp(t.source, n);
        case "Date":
            return new Date( + e);
        default:
            return e
        }
        var t, n, a
    }
},
function(e, t, n) {
    "use strict";
    var i = n(42);
    e.exports = function(e) {
        return i(e, "Object")
    }
},
function(e, t) {
    e.exports = "varying vec2 v_uv;\nuniform sampler2D u_texture;\nuniform float u_greyRatio;\n\nuniform sampler2D u_blurTexture0;\n#if ITERATION > 1\nuniform sampler2D u_blurTexture1;\n#endif\n#if ITERATION > 2\nuniform sampler2D u_blurTexture2;\n#endif\n#if ITERATION > 3\nuniform sampler2D u_blurTexture3;\n#endif\n#if ITERATION > 4\nuniform sampler2D u_blurTexture4;\n#endif\nuniform float u_bloomWeights[ITERATION];\n\n#include <common>\n\t// based on https://www.shadertoy.com/view/MslGR8\n\tvec3 dithering( vec3 color ) {\n\t\t//Calculate grid position\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\n\t\t//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n\t\t//modify shift acording to grid position.\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n\t\t//shift the color by dither_shift\n\t\treturn color + dither_shift_RGB;\n\t}\n\nvoid main() {\n\tvec4 c = texture2D(u_texture, v_uv);\n\t// float a = 1.0 - v;//mix(1.0, 0.1, v);\n\n\tgl_FragColor = c + (\n\t\tu_bloomWeights[0] * texture2D(u_blurTexture0, v_uv)\n\t\t#if ITERATION > 1\n\t\t+ u_bloomWeights[1] * texture2D(u_blurTexture1, v_uv)\n\t\t#endif\n\t\t#if ITERATION > 2\n\t\t+ u_bloomWeights[2] * texture2D(u_blurTexture2, v_uv)\n\t\t#endif\n\t\t#if ITERATION > 3\n\t\t+ u_bloomWeights[3] * texture2D(u_blurTexture3, v_uv)\n\t\t#endif\n\t\t#if ITERATION > 4\n\t\t+ u_bloomWeights[4] * texture2D(u_blurTexture4, v_uv)\n\t\t#endif\n\t);// * a;\n\n\tvec3 luma = vec3( 0.299, 0.587, 0.114 );\n\tfloat v = dot( c.xyz, luma );\n\tvec3 blend = mix(vec3(0.0,0.0,1.0), vec3(1.0,0.0,1.0), v);\n\tblend = sqrt(gl_FragColor.rgb) * (2.0 * blend - 1.0) + 2.0 * gl_FragColor.rgb * (1.0 - blend), \n        2.0 * gl_FragColor.rgb * blend + gl_FragColor.rgb * gl_FragColor.rgb * (1.0 - 2.0 * blend), \n        step(gl_FragColor.rgb, vec3(0.5));\n\t\t\n\tgl_FragColor.rgb = mix(\n\t\tgl_FragColor.rgb,\n        blend,\n\t\t0.6 \n\t);\n\n\tfloat greyScale = dot(gl_FragColor.rgb, luma);\n\tgl_FragColor.rgb = mix(\n\t\tgl_FragColor.rgb,\n        vec3(greyScale * 0.8 + 0.1),\n\t\tu_greyRatio\n\t);\n\n\t// gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\tgl_FragColor.a = 1.0;\n}\n"
},
function(e, t) {
    e.exports = "uniform sampler2D u_texture;\n\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\n\nvarying vec2 v_uv;\n\nvoid main() {\n\n\tvec3 texel = texture2D( u_texture, v_uv ).rgb;\n\n\tvec3 luma = vec3( 0.299, 0.587, 0.114 );\n\n\tfloat v = dot( texel, luma );\n\n\tvec4 outputColor = vec4(0.0, 0.0, 0.0, 1.0);\n\n\tfloat alpha = smoothstep( u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v );\n\n\toutputColor.rgb = mix( outputColor.rgb, texel, alpha );\n\n\tgl_FragColor = outputColor;\n\n}\n"
},
function(e, t) {
    e.exports = "varying vec2 v_uv;\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\nuniform vec2 u_direction;\n\nfloat gaussianPdf(in float x, in float sigma) {\n\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\n}\nvoid main() {\n\tvec2 invSize = 1.0 / u_resolution;\n\tfloat fSigma = float(SIGMA);\n\tfloat weightSum = gaussianPdf(0.0, fSigma);\n\tvec3 diffuseSum = texture2D( u_texture, v_uv).rgb * weightSum;\n\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\n\t\tfloat x = float(i);\n\t\tfloat w = gaussianPdf(x, fSigma);\n\t\tvec2 uvOffset = u_direction * invSize * x;\n\t\tvec3 sample1 = texture2D( u_texture, v_uv + uvOffset).rgb;\n\t\tvec3 sample2 = texture2D( u_texture, v_uv - uvOffset).rgb;\n\t\tdiffuseSum += (sample1 + sample2) * w;\n\t\tweightSum += 2.0 * w;\n\t}\n\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n}\n"
},
function(e, t) {
    e.exports = "attribute vec3 position;\n\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 2 ];\n\nvoid SMAANeighborhoodBlendingVS( vec2 texcoord ) {\n  v_offsets[ 0 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component\n  v_offsets[ 1 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component\n}\n\nvoid main() {\n\tv_uv = position.xy * 0.5 + 0.5;\n\n  SMAANeighborhoodBlendingVS( v_uv );\n\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position = vec4( position, 1.0 );\n\n}\n"
},
function(e, t) {
    e.exports = "uniform sampler2D u_weightsTexture;\nuniform sampler2D u_texture;\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 2 ];\n\nvec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {\n  // Fetch the blending weights for current pixel:\n  vec4 a;\n  a.xz = texture2D( blendTex, texcoord ).xz;\n  a.y = texture2D( blendTex, offset[ 1 ].zw ).g;\n  a.w = texture2D( blendTex, offset[ 1 ].xy ).a;\n\n  // Is there any blending weight with a value greater than 0.0?\n  if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {\n    return texture2D( colorTex, texcoord, 0.0 );\n  } else {\n    // Up to 4 lines can be crossing a pixel (one through each edge). We\n    // favor blending by choosing the line with the maximum weight for each\n    // direction:\n    vec2 offset;\n    offset.x = a.a > a.b ? a.a : -a.b; // left vs. right\n    offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs\n\n    // Then we go in the direction that has the maximum weight:\n    if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical\n      offset.y = 0.0;\n    } else {\n      offset.x = 0.0;\n    }\n\n    // Fetch the opposite color and lerp by hand:\n    vec4 C = texture2D( colorTex, texcoord, 0.0 );\n    texcoord += sign( offset ) * u_resolutionInv;\n    vec4 Cop = texture2D( colorTex, texcoord, 0.0 );\n    float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );\n\n    // WebGL port note: Added gamma correction\n    C.xyz = pow(abs(C.xyz), vec3(2.2));\n    Cop.xyz = pow(abs(Cop.xyz), vec3(2.2));\n    vec4 mixed = mix(C, Cop, s);\n    mixed.xyz = pow(abs(mixed.xyz), vec3(1.0 / 2.2));\n\n    return mixed;\n  }\n}\n\nvoid main() {\n\n  gl_FragColor = SMAANeighborhoodBlendingPS( v_uv, v_offsets, u_texture, u_weightsTexture );\n\n}\n"
},
function(e, t) {
    e.exports = "attribute vec3 position;\n\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 3 ];\n\nvoid SMAAEdgeDetectionVS( vec2 texcoord ) {\n  v_offsets[ 0 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component\n  v_offsets[ 1 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component\n  v_offsets[ 2 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component\n}\n\nvoid main() {\n\n\tv_uv = position.xy * 0.5 + 0.5;\n\n  SMAAEdgeDetectionVS( v_uv );\n\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position = vec4( position, 1.0 );\n\n}\n"
},
function(e, t) {
    e.exports = "uniform sampler2D u_texture;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 3 ];\n\nvec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {\n  vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );\n\n  // Calculate color deltas:\n  vec4 delta;\n  vec3 C = texture2D( colorTex, texcoord ).rgb;\n\n  vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;\n  vec3 t = abs( C - Cleft );\n  delta.x = max( max( t.r, t.g ), t.b );\n\n  vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;\n  t = abs( C - Ctop );\n  delta.y = max( max( t.r, t.g ), t.b );\n\n  // We do the usual threshold:\n  vec2 edges = step( threshold, delta.xy );\n\n  // Then discard if there is no edge:\n  if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )\n    discard;\n\n  // Calculate right and bottom deltas:\n  vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;\n  t = abs( C - Cright );\n  delta.z = max( max( t.r, t.g ), t.b );\n\n  vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;\n  t = abs( C - Cbottom );\n  delta.w = max( max( t.r, t.g ), t.b );\n\n  // Calculate the maximum delta in the direct neighborhood:\n  float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );\n\n  // Calculate left-left and top-top deltas:\n  vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;\n  t = abs( C - Cleftleft );\n  delta.z = max( max( t.r, t.g ), t.b );\n\n  vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;\n  t = abs( C - Ctoptop );\n  delta.w = max( max( t.r, t.g ), t.b );\n\n  // Calculate the final maximum delta:\n  maxDelta = max( max( maxDelta, delta.z ), delta.w );\n\n  // Local contrast adaptation in action:\n  edges.xy *= step( 0.5 * maxDelta, delta.xy );\n\n  return vec4( edges, 0.0, 0.0 );\n}\n\nvoid main() {\n\n  gl_FragColor = SMAAColorEdgeDetectionPS( v_uv, v_offsets, u_texture );\n\n}\n"
},
function(e, t) {
    e.exports = "attribute vec3 position;\n\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[ 3 ];\nvarying vec2 v_pixcoord;\n\nvoid SMAABlendingWeightCalculationVS( vec2 texcoord ) {\n  v_pixcoord = texcoord / u_resolutionInv;\n\n  // We will use these offsets for the searches later on (see @PSEUDO_GATHER4):\n  v_offsets[ 0 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components\n  v_offsets[ 1 ] = texcoord.xyxy + u_resolutionInv.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components\n\n  // And these for the searches, they indicate the ends of the loops:\n  v_offsets[ 2 ] = vec4( v_offsets[ 0 ].xz, v_offsets[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * u_resolutionInv.xxyy * float( SMAA_MAX_SEARCH_STEPS );\n\n}\n\nvoid main() {\n\tv_uv = position.xy * 0.5 + 0.5;\n\n  SMAABlendingWeightCalculationVS( v_uv );\n\n  // gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  gl_Position = vec4( position, 1.0 );\n\n}\n"
},
function(e, t) {
    e.exports = "\n#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * u_resolutionInv, 0.0 )\n\nuniform sampler2D u_edgesTexture;\nuniform sampler2D u_areaTexture;\nuniform sampler2D u_searchTexture;\nuniform vec2 u_resolutionInv;\n\nvarying vec2 v_uv;\nvarying vec4 v_offsets[3];\nvarying vec2 v_pixcoord;\n\nvec2 round( vec2 x ) {\n  return sign( x ) * floor( abs( x ) + 0.5 );\n}\n\nfloat SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {\n  // Not required if searchTex accesses are set to point:\n  // float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);\n  // e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +\n  //     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;\n  e.r = bias + e.r * scale;\n  return 255.0 * texture2D( searchTex, e, 0.0 ).r;\n}\n\nfloat SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  /**\n  * @PSEUDO_GATHER4\n  * This texcoord has been offset by (-0.25, -0.125) in the vertex shader to\n  * sample between edge, thus fetching four edges in a row.\n  * Sampling with different offsets in each direction allows to disambiguate\n  * which edges are active from the four fetched ones.\n  */\n  vec2 e = vec2( 0.0, 1.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord -= vec2( 2.0, 0.0 ) * u_resolutionInv;\n    if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;\n  }\n\n  // We correct the previous (-0.25, -0.125) offset we applied:\n  texcoord.x += 0.25 * u_resolutionInv.x;\n\n  // The searches are bias by 1, so adjust the coords accordingly:\n  texcoord.x += u_resolutionInv.x;\n\n  // Disambiguate the length added by the last step:\n  texcoord.x += 2.0 * u_resolutionInv.x; // Undo last step\n  texcoord.x -= u_resolutionInv.x * SMAASearchLength(searchTex, e, 0.0, 0.5);\n\n  return texcoord.x;\n}\n\nfloat SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  vec2 e = vec2( 0.0, 1.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord += vec2( 2.0, 0.0 ) * u_resolutionInv;\n    if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;\n  }\n\n  texcoord.x -= 0.25 * u_resolutionInv.x;\n  texcoord.x -= u_resolutionInv.x;\n  texcoord.x -= 2.0 * u_resolutionInv.x;\n  texcoord.x += u_resolutionInv.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );\n\n  return texcoord.x;\n}\n\nfloat SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  vec2 e = vec2( 1.0, 0.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord += vec2( 0.0, 2.0 ) * u_resolutionInv; // WebGL port note: Changed sign\n    if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;\n  }\n\n  texcoord.y -= 0.25 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y -= u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y -= 2.0 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y += u_resolutionInv.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign\n\n  return texcoord.y;\n}\n\nfloat SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {\n  vec2 e = vec2( 1.0, 0.0 );\n\n  for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for\n    e = texture2D( edgesTex, texcoord, 0.0 ).rg;\n    texcoord -= vec2( 0.0, 2.0 ) * u_resolutionInv; // WebGL port note: Changed sign\n    if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;\n  }\n\n  texcoord.y += 0.25 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y += u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y += 2.0 * u_resolutionInv.y; // WebGL port note: Changed sign\n  texcoord.y -= u_resolutionInv.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign\n\n  return texcoord.y;\n}\n\nvec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {\n  // Rounding prevents precision errors of bilinear filtering:\n  vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;\n\n  // We do a scale and bias for mapping to texel space:\n  texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );\n\n  // Move to proper place, according to the subpixel offset:\n  texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;\n\n  return texture2D( areaTex, texcoord, 0.0 ).rg;\n}\n\nvec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {\n  vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );\n\n  vec2 e = texture2D( edgesTex, texcoord ).rg;\n\n  if ( e.g > 0.0 ) { // Edge at north\n    vec2 d;\n\n    // Find the distance to the left:\n    vec2 coords;\n    coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );\n    coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * u_resolutionInv.y (@CROSSING_OFFSET)\n    d.x = coords.x;\n\n    // Now fetch the left crossing edges, two at a time using bilinear\n    // filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to\n    // discern what value each edge has:\n    float e1 = texture2D( edgesTex, coords, 0.0 ).r;\n\n    // Find the distance to the right:\n    coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );\n    d.y = coords.x;\n\n    // We want the distances to be in pixel units (doing this here allow to\n    // better interleave arithmetic and memory accesses):\n    d = d / u_resolutionInv.x - pixcoord.x;\n\n    // SMAAArea below needs a sqrt, as the areas texture is compressed\n    // quadratically:\n    vec2 sqrt_d = sqrt( abs( d ) );\n\n    // Fetch the right crossing edges:\n    coords.y -= 1.0 * u_resolutionInv.y; // WebGL port note: Added\n    float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;\n\n    // Ok, we know how this pattern looks like, now it is time for getting\n    // the actual area:\n    weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );\n  }\n\n  if ( e.r > 0.0 ) { // Edge at west\n    vec2 d;\n\n    // Find the distance to the top:\n    vec2 coords;\n\n    coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );\n    coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * u_resolutionInv.x;\n    d.x = coords.y;\n\n    // Fetch the top crossing edges:\n    float e1 = texture2D( edgesTex, coords, 0.0 ).g;\n\n    // Find the distance to the bottom:\n    coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );\n    d.y = coords.y;\n\n    // We want the distances to be in pixel units:\n    d = d / u_resolutionInv.y - pixcoord.y;\n\n    // SMAAArea below needs a sqrt, as the areas texture is compressed\n    // quadratically:\n    vec2 sqrt_d = sqrt( abs( d ) );\n\n    // Fetch the bottom crossing edges:\n    coords.y -= 1.0 * u_resolutionInv.y; // WebGL port note: Added\n    float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;\n\n    // Get the area for this direction:\n    weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );\n  }\n\n  return weights;\n}\n\nvoid main() {\n\n  gl_FragColor = SMAABlendingWeightCalculationPS( v_uv, v_pixcoord, v_offsets, u_edgesTexture, u_areaTexture, u_searchTexture, ivec4( 0.0 ) );\n\n}\n"
},
function(e, t) {
    e.exports = "varying vec3 v_worldPosition;\n\nvoid main () {\n    v_worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    \n}"
},
function(e, t) {
    e.exports = "\nuniform vec3 u_color;\nuniform vec3 u_cameraPosition;\nuniform vec3 u_lightPosition;\nuniform vec3 u_lightColor;\n\nvarying vec3 v_worldPosition;\n\n#include <getScatter>\n#include <common>\n#include <dithering_pars_fragment>\n\nvoid main () {\n    vec3 toCameraWorld = v_worldPosition - u_cameraPosition;\n    vec3 nToCameraWorldDir = normalize(toCameraWorld);\n    float toCameraDist = length(toCameraWorld);\n\n    float scatter = getScatter(u_cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n\n    // vec3 color = u_color * 0.15 * (0.65 + 0.4 * scatter) + scatter * 0.75 * u_lightColor;\n    vec3 color = u_color * 0.15 * (0.65 + 0.4 * scatter) + scatter * u_lightColor;\n\n    gl_FragColor = vec4(dithering(color), 1.0);\n}"
},
function(e, t, n) {
    "use strict";
    var i = n(1),
    r = n(3),
    o = n(109),
    a = n(32),
    s = n(0);
    t.preInit = function(e) {
        u = e,
        (l = new s.Texture(i.loader.add(r.cdnPath + "images/sprite.png").content)).magFilter = l.minFilter = s.LinearFilter,
        l.needsUpdate = !0
    },
    t.init = function() {
        o.init(u);
        var e = new s.BufferGeometry;
        d = f * h;
        for (var i = o.textureWidth,
        v = o.textureHeight,
        m = i * v,
        p = new Float32Array(3 * m), g = new Float32Array(m), x = new Float32Array(m), _ = 0, y = 0; _ < m; _++) p[y + 0] = (_ % i + .5) / i,
        p[y + 1] = (.5 + ~~ (_ / i)) / v,
        p[y + 2] = .2 + .8 * Math.random(),
        g[_] = .5 + ~~ (Math.random() * d),
        x[_] = .7 * Math.random() + .3,
        y += 3;
        if (e.setAttribute("position", new s.BufferAttribute(p, 3)), e.setAttribute("a_spriteIndex", new s.BufferAttribute(g, 1)), e.setAttribute("a_pointSize", new s.BufferAttribute(x, 1)), c = new s.ShaderMaterial({
            uniforms: {
                u_positionTexture: o.sharedUniforms.u_currPositionTexture,
                u_time: {
                    value: 0
                },
                u_color: {
                    value: new s.Color(16777215)
                },
                u_lightDistance: {
                    value: 9
                },
                u_diffMultiplier: {
                    value: .45
                },
                u_specMultiplier: {
                    value: 1
                },
                u_viewportHeight: {
                    value: 1
                },
                u_particleScale: {
                    value: 12
                },
                u_spriteTexture: {
                    value: l
                },
                u_spriteTileTexelSizes: {
                    value: new s.Vector2(1 / f, 1 / h)
                },
                u_spriteTileSizes: {
                    value: new s.Vector2(f, h)
                },
                u_spriteTextureSize: {
                    value: new s.Vector2(i, v)
                },
                u_spriteCount: {
                    value: d
                },
                u_spriteIndexOffset: {
                    value: 0
                },
                u_depthFrom: {
                    value: 1.021215625
                },
                u_depthTo: {
                    value: -1.01572 / .96
                },
                u_lightColor: a.sharedUniforms.u_lightColor,
                u_lightScatterDivider: a.sharedUniforms.u_lightScatterDivider,
                u_lightScatterPowInv: a.sharedUniforms.u_lightScatterPowInv,
                u_lightPosition: a.sharedUniforms.u_lightPosition,
                u_cameraPosition: a.sharedUniforms.u_cameraPosition,
                u_lightViewPosition: a.sharedUniforms.u_lightViewPosition
            },
            vertexShader: n(111),
            fragmentShader: n(112),
            blending: s.NoBlending
        }), r.useFloatPacking) {
            var w = c.uniforms;
            w.u_positionTextureZW = o.sharedUniforms.u_currPositionTextureZW,
            w.u_posPackDividers = o.sharedUniforms.u_posPackDividers,
            c.defines.IS_PACKED = !0
        }
        t.mesh = new s.Points(e, c),
        t.mesh.frustumCulled = !1
    },
    t.update = function(e) {
        o.update(e),
        c.uniforms.u_time.value += e,
        c.uniforms.u_viewportHeight.value = i.height,
        c.uniforms.u_color.value.setHex(u.pointColor),
        c.uniforms.u_diffMultiplier.value = u.diffMultiplier,
        c.uniforms.u_specMultiplier.value = u.specMultiplier,
        c.uniforms.u_spriteIndexOffset.value = (c.uniforms.u_spriteIndexOffset.value + 1) % d
    },
    t.mesh = null;
    var u = void 0,
    c = void 0,
    l = void 0,
    d = void 0,
    f = 32,
    h = 8
},
function(e, t, n) {
    "use strict";
    var i = n(3),
    r = n(4),
    o = n(32),
    a = n(2),
    s = n(0);
    t.init = function(e) {
        c = e,
        l = e.pointCount;
        var S = a.powerTwoTextureSize(l);
        d = t.textureWidth = S.w,
        f = t.textureHeight = S.h,
        l = d * f,
        function() {
            for (var e = new Float32Array(4 * l), t = 0, n = void 0, o = void 0, a = void 0, s = 0; s < l; s++) n = 1.8 * (.7 + .3 * Math.random()),
            o = (Math.random() - .5) * Math.PI,
            a = Math.random() * Math.PI * 2,
            e[t + 0] = n * Math.cos(a) * Math.cos(o) + 2,
            e[t + 1] = n * Math.sin(o),
            e[t + 2] = n * Math.sin(a) * Math.cos(o) * 2,
            e[t + 3] = s / l,
            t += 4;
            if (i.useFloatPacking) {
                var u = new Uint8Array(4 * l),
                c = new Uint8Array(4 * l); !
                function(e, t, n) {
                    for (var i = void 0,
                    r = void 0,
                    o = void 0,
                    a = 0,
                    s = 0,
                    u = e.length; a < u; a++) o = e[s + 0] / w * .5 + .5,
                    i = o % 1 - (r = 255 * o % 1) / 255,
                    t[s + 0] = 255 * i,
                    t[s + 1] = 255 * r,
                    o = e[s + 1] / w * .5 + .5,
                    i = o % 1 - (r = 255 * o % 1) / 255,
                    t[s + 2] = 255 * i,
                    t[s + 3] = 255 * r,
                    o = e[s + 2] / w * .5 + .5,
                    i = o % 1 - (r = 255 * o % 1) / 255,
                    n[s + 0] = 255 * i,
                    n[s + 1] = 255 * r,
                    o = e[s + 3] / b * .5 + .5,
                    i = o % 1 - (r = 255 * o % 1) / 255,
                    n[s + 2] = 255 * i,
                    n[s + 3] = 255 * r,
                    s += 4
                } (e, u, c),
                (g = r.createDataTexture(u, d, f, !0, !0, !0)).needsUpdate = !0,
                (x = r.createDataTexture(c, d, f, !0, !0, !0)).needsUpdate = !0
            } else(g = r.createDataTexture(e, d, f, !0, !0, !0)).needsUpdate = !0
        } (),
        u.u_defaultPositionTexture = {
            value: g
        },
        u.u_prevPositionTexture = {
            value: null
        },
        u.u_currPositionTexture = {
            value: null
        },
        h = r.createRenderTarget(d, f, !0, !0, !0),
        v = h.clone(),
        _ = new s.RawShaderMaterial({
            uniforms: {
                u_defaultPositionTexture: u.u_defaultPositionTexture,
                u_textureSize: {
                    value: new s.Vector2(d, f)
                },
                u_positionTexture: u.u_prevPositionTexture,
                u_speed: {
                    value: .0027
                },
                u_dieSpeed: {
                    value: .012
                },
                u_curlSize: {
                    value: .33
                },
                u_rebornCenter: {
                    value: new s.Vector3(0, 0, 0)
                },
                u_time: {
                    value: 0
                },
                u_attractor: o.sharedUniforms.u_lightPosition
            },
            vertexShader: r.vertexShader,
            fragmentShader: r.precisionPrefix + n(110),
            blending: s.NoBlending,
            transparent: !0,
            depthWrite: !1,
            depthTest: !1
        }),
        r.copy(g, v),
        i.useFloatPacking && (u.u_prevPositionTextureZW = {
            value: null
        },
        u.u_currPositionTextureZW = {
            value: null
        },
        u.u_defaultPositionTextureZW = {
            value: x
        },
        u.u_posPackDividers = {
            value: new s.Vector2(w, b)
        },
        m = h.clone(), p = h.clone(), _.uniforms.u_defaultPositionTextureZW = u.u_defaultPositionTextureZW, _.uniforms.u_positionTextureZW = u.u_prevPositionTextureZW, _.uniforms.u_posPackDividers = u.u_posPackDividers, _.defines.IS_PACKED = !0, y = new s.RawShaderMaterial({
            uniforms: _.uniforms,
            vertexShader: _.vertexShader,
            fragmentShader: _.fragmentShader
        }), s.Material.prototype.copy.call(y, _), y.defines.IS_PACKED = !0, y.defines.IS_PACK_TO_ZW = !0, r.copy(x, p))
    },
    t.update = function(e) {
        var t = r.getColorState();
        n = h,
        h = v,
        v = n,
        u.u_prevPositionTexture.value = h.texture,
        u.u_currPositionTexture.value = v.texture,
        i.useFloatPacking && (n = m, m = p, p = n, u.u_prevPositionTextureZW.value = m.texture, u.u_currPositionTextureZW.value = p.texture),
        _.uniforms.u_time.value += .3 * e,
        _.uniforms.u_rebornCenter.value.y = 2 * c.cameraPosition.y + 1,
        r.render(_, v),
        i.useFloatPacking && r.render(y, p);
        var n;
        r.setColorState(t)
    };
    var u = t.sharedUniforms = {},
    c = void 0,
    l = void 0,
    d = t.textureWidth = 0,
    f = t.textureHeight = 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = void 0,
    y = void 0,
    w = 32,
    b = 4
},
function(e, t) {
    e.exports = "uniform sampler2D u_positionTexture;\nuniform sampler2D u_defaultPositionTexture;\n\n#ifdef IS_PACKED\nuniform sampler2D u_positionTextureZW;\nuniform sampler2D u_defaultPositionTextureZW;\nuniform vec2 u_posPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nuniform float u_time;\nuniform float u_speed;\nuniform float u_dieSpeed;\nuniform float u_curlSize;\nuniform vec3 u_attractor;\nuniform vec3 u_rebornCenter;\n\nvarying vec2 v_uv;\n\n#include <curl4Mid>\n\nvoid main() {\n\t#ifndef IS_PACKED\n\t\tvec4 positionInfo = texture2D(u_positionTexture, v_uv);\n\t#else\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_uv, u_posPackDividers.xxxy);\n\t#endif\n\tpositionInfo.w -= u_dieSpeed;\n\n\tif(positionInfo.w < 0.0) {\n\t\t#ifndef IS_PACKED\n\t\t\tpositionInfo = texture2D(u_defaultPositionTexture, v_uv);\n\t\t#else\n\t\t\tpositionInfo = samplePackedRGBA(u_defaultPositionTexture, u_defaultPositionTextureZW, v_uv, u_posPackDividers.xxxy);\n\t\t#endif\n\t\tpositionInfo.w = positionInfo.w + 1.0;\n\t\tpositionInfo.xyz = positionInfo.xyz + u_rebornCenter;\n\t} else {\n\t\tvec3 toAttractor = positionInfo.xyz - u_attractor;\n\t\tfloat attractorWeight = smoothstep(2.7, 0.36, length(toAttractor));\n\t\tpositionInfo.xyz += curl(positionInfo.xyz * u_curlSize, u_time, 0.2 + (1.0 - positionInfo.w) * 0.2) * u_speed * (attractorWeight * attractorWeight * 4.0 + mix(2.0, 1.0, positionInfo.w));\n\t\ttoAttractor = positionInfo.xyz - u_attractor;\n\t\tpositionInfo.xyz += toAttractor * attractorWeight * -0.015;\n\t}\n\t#ifndef IS_PACKED\n\t\t\tgl_FragColor = positionInfo;\n\t#else\n\t\t#ifndef IS_PACK_TO_ZW\n    vec3 threshold = vec3(u_posPackDividers.x * 0.5 - 1.0);\n    positionInfo.xyz = clamp(positionInfo.xyz, -threshold, threshold);\n\t\t\tgl_FragColor = vec4(packHalfFloat(positionInfo.x, u_posPackDividers.x), packHalfFloat(positionInfo.y, u_posPackDividers.x));\n\t\t#else\n\t\t\tgl_FragColor = vec4(packHalfFloat(positionInfo.z, u_posPackDividers.x), packHalfFloat(positionInfo.w, u_posPackDividers.y));\n\t\t#endif\n\t#endif\n}\n"
},
function(e, t) {
    e.exports = "attribute vec2 a_textureUv;\n\nattribute float a_spriteIndex;\nattribute float a_pointSize;\n\nuniform sampler2D u_positionTexture;\n#ifdef IS_PACKED\nuniform sampler2D u_positionTextureZW;\nuniform vec2 u_posPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nuniform float u_time;\nuniform float u_viewportHeight;\n\nuniform vec2 u_spriteTileSizes;\nuniform float u_spriteCount;\nuniform float u_spriteIndexOffset;\nuniform float u_particleScale;\n\nvarying vec3 v_worldPosition;\nvarying vec3 v_viewPosition;\nvarying float v_halfPointSize;\nvarying vec2 v_spriteUvOffset;\nvarying float v_brightness;\n\nvoid main () {\n\t#ifndef IS_PACKED\n    vec4 positionInfo = texture2D(u_positionTexture, position.xy);\n\t#else\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, position.xy, u_posPackDividers.xxxy);\n\t#endif\n\n  // positionInfo.xyz = vec3(0.0);\n\n  vec3 pos = positionInfo.xyz;\n  v_worldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;\n\n  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n  float pointSize = position.z * (smoothstep(0.0, 0.2, positionInfo.a) * smoothstep(1.0, 0.8, positionInfo.a) * 35.0) / abs(mvPosition.z) * u_viewportHeight / 1080.0 * u_particleScale;\n  // float pointSize = (a_pointSize * 15.0) / abs(mvPosition.z) * u_viewportHeight / 1080.0;\n\n  v_viewPosition = -mvPosition.xyz;\n\n  mvPosition.x += step(pointSize, 0.01) * 10000.0;\n\n  gl_Position = projectionMatrix * mvPosition;\n  pointSize = max(2.5, pointSize);\n  gl_PointSize = pointSize;\n\n  float spriteIndex = mod(a_spriteIndex + u_spriteIndexOffset, 256.0);\n  float spriteIndexXf = mod(spriteIndex, u_spriteTileSizes.x);\n  v_spriteUvOffset = vec2(\n    floor(spriteIndexXf),\n    floor((spriteIndex - spriteIndexXf + 0.5) / u_spriteTileSizes.x)\n  ) / u_spriteTileSizes;\n\n  v_brightness = smoothstep(0.9, 0.95, position.x);//smoothstep(0.15, 0.0, abs(positionInfo.w - 0.5));\n\n  v_halfPointSize = pointSize * 0.5 / u_viewportHeight * 2.0 / gl_Position.w;\n}\n"
},
function(e, t) {
    e.exports = "uniform float u_lightDistance;\nuniform float u_diffMultiplier;\nuniform float u_specMultiplier;\n\nuniform vec3 u_cameraPosition;\nuniform vec3 u_lightColor;\nuniform vec3 u_lightPosition;\nuniform vec3 u_lightViewPosition;\n\nuniform vec3 u_color;\n\nuniform sampler2D u_spriteTexture;\nuniform vec2 u_spriteTileTexelSizes;\nuniform float u_depthFrom;\nuniform float u_depthTo;\n\nvarying vec3 v_worldPosition;\nvarying vec3 v_viewPosition;\nvarying float v_halfPointSize;\nvarying vec2 v_spriteUvOffset;\nvarying float v_brightness;\n\nfloat clampRange (float minVal, float maxVal, float val) {\n  return clamp((val - minVal) / (maxVal - minVal), 0.0, 1.0);\n}\n\n#include <getScatter>\n\nvoid main () {\n  vec2 uv = v_spriteUvOffset + gl_PointCoord.xy * u_spriteTileTexelSizes;\n  uv.y = 1.0 - uv.y;\n  vec3 N = pow(texture2D(u_spriteTexture, uv).xyz, vec3(2.2)) * 2.0 - 1.0;\n\n  if (N.z < 0.0) {\n    discard;\n  }\n  float depth = mix(u_depthFrom, u_depthTo, N.z);\n  N.z = sqrt(1.0 - N.x * N.x - N.y * N.y);\n  N = normalize(N);\n\n  vec3 viewGeometryPosition = -v_viewPosition + vec3(N.xy * 0.96, depth) * v_halfPointSize;\n\n  vec3 LtoG = u_lightViewPosition - viewGeometryPosition;\n  vec3 nLtoG = normalize(LtoG);\n  float distLtoG = length(LtoG);\n  float dotNL = dot(N, nLtoG);\n\n  float lightDistanceWeight =  pow(clampRange(u_lightDistance, 0.0, distLtoG), 5.0) * (1.0 + v_brightness);\n  \n  float diffuseFactor = smoothstep(-0.75 - v_brightness, 0.75, dotNL);\n\n  vec3 color = u_color * diffuseFactor * lightDistanceWeight * u_diffMultiplier;\n\n  // color += u_color * v_brightness;\n\n  float specDotValue = dot(reflect(normalize(viewGeometryPosition), N), nLtoG);\n\n  float spec = smoothstep(0.8 - v_brightness, 0.85, specDotValue) * u_specMultiplier * lightDistanceWeight;\n  color += spec * u_lightColor;\n\n  vec3 toCameraWorld = v_worldPosition - u_cameraPosition;\n  vec3 nToCameraWorldDir = normalize(toCameraWorld);\n  float toCameraDist = length(toCameraWorld);\n  float scatter = getScatter(u_cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n\n  color += color * 0.15 * (0.65 + 0.4 * scatter) + scatter * u_lightColor;\n\n  // gl_FragColor = vec4(N.xyz * 0.5 + 0.5, 1.0);\n  // gl_FragColor = vec4(normalize(LtoG) * 0.5 + 0.5, 1.0);\n  gl_FragColor = vec4(color, 1.0);\n}\n"
},
function(e, t) {
    e.exports = "attribute vec3 position;\n\nuniform vec4 u_fromColor;\nuniform vec4 u_toColor;\nuniform float u_fromY;\nuniform float u_toY;\n\nvarying vec4 v_color;\n\nvoid main () {\n\tfloat ratio = 0.5 - position.y * 0.5;\n\tv_color = mix(u_fromColor, u_toColor, ratio);\n\tfloat y = 1.0 - mix(u_fromY, u_toY, ratio) * 2.0;\n\tgl_Position = vec4(position.x, y, 0.0, 1.0);\n}"
},
function(e, t) {
    e.exports = "varying vec4 v_color;\n\nvoid main () {\n\tgl_FragColor = v_color;\n}"
},
function(e, t) {
    e.exports = "attribute vec3 position;\nuniform vec4 u_ys;\nvarying vec2 v_uv;\nvarying float v_alpha;\n\nvoid main () {\n\tfloat ratio = 0.5 - position.y * 0.5;\n\tfloat y0 = mix(u_ys.x, u_ys.y, step(0.25, ratio));\n\tfloat y1 = mix(u_ys.z, u_ys.w, step(0.75, ratio));\n\tfloat y = mix(y0, y1, step(0.5, ratio));\n\ty = 1.0 - y * 2.0;\n\n\tv_alpha = step(abs(ratio - 0.5), 0.25);\n\n\tgl_Position = vec4(position.x, y, 0.0, 1.0);\n\tv_uv = gl_Position.xy * 0.5 + 0.5;\n}"
},
function(e, t) {
    e.exports = "uniform sampler2D u_texture;\n\nvarying vec2 v_uv;\nvarying float v_alpha;\n\nvoid main() {\n    gl_FragColor = vec4(texture2D( u_texture, v_uv ).rgb, v_alpha);\n}\n"
},
function(e, t, n) {
    "use strict";
    var i = n(5),
    r = n(3),
    o = n(1),
    a = n(51),
    s = n(2),
    u = n(15),
    c = n(6),
    l = n(52),
    d = n(11),
    f = n(8);
    function h(e) {
        c(this, {
            index: 0,
            dom: null,
            domRect: null,
            startedLoading: !1,
            splitTextEffects: [],
            isVisible: !1,
            isTextVisible: !1,
            contextDomRect: null,
            inScreen: !1,
            ratio: 0,
            tween: null
        },
        e),
        this.id = this.dom.dataset.id,
        this.imageContainer = this.dom.querySelector(".featured-item-image"),
        this.imageContainerInner = this.dom.querySelector(".featured-item-image-inner"),
        this.contextContainer = this.dom.querySelector(".featured-item-context")
    }
    e.exports = h;
    var v = h.prototype;
    v.preInit = function() {
        var e = this;
        o.loader.add(r.cdnPath + "images/" + this.id + "/" + (i.isMobile ? "mobile_thumb.png": "desktop_home_thumb.png"), {
            onLoad: function(t) {
                a.add(t, i.isMobile ? 256 : 544, i.isMobile ? 256 : 306,
                function(t) {
                    // e.thumb = t,
                    // e.imageContainerInner.appendChild(t)
                })
            }
        })
    },
    v.init = function() {
        this.domRect = new d({
            refDom: this.dom
        }),
        this.contextDomRect = new d({
            refDom: this.contextContainer
        });
        for (var e = this.splitLineDoms = this.dom.querySelectorAll(".split-line-mask-effect"), t = this.splitTextEffects, n = 0, i = e.length; n < i; n++) t[n] = new l({
            dom: e[n]
        })
    },
    v.resize = function() {
        this.imageContainer.style.height = Math.floor(this.imageContainer.offsetWidth / 16 * 9) + "px",
        this.imageContainer.style.transform = this.contextContainer.style.transform = "translateZ(0)",
        this.domRect.testViewport(!0),
        this.contextDomRect.testViewport(!0);
        for (var e = this.splitTextEffects,
        t = this.contextContainer.offsetWidth,
        n = 0,
        i = 0,
        r = e.length; i < r; i++) {
            var o = e[i];
            o.resize(t),
            o.delayBase = n,
            n += o.lineCount
        }
        for (var a = 0,
        s = e.length; a < s; a++) e[a].delayTotal = n
    },
    v.loadImage = function() {
        if (!this.startedLoading) {
            this.startedLoading = !0;
            var e = this,
            t = this.thumb;
            o.loader.load(r.cdnPath + "images/" + this.id + "/" + "desktop_home.png", {
                onLoad: function(n) {
                    e.image = n,
                    e.imageContainerInner.appendChild(n),
                    e.inScreen ? (n.style.transition = "opacity 1s", setTimeout(function() {
                        n.style.opacity = i.isMobile ? 0.5 : 1
                    },
                    50), setTimeout(function() {
                        // t.parentNode.removeChild(t),
                        // e.thumb = null
                    },
                    1e3)) : (n.style.opacity = i.isMobile ? 0.5 : 1, t.parentNode.removeChild(t), e.thumb = null)
                }
            })
        }
    },
    v.reset = function() {
        f.killTweensOf(this.tween),
        this.isVisible = !1,
        f.set(this, {
            ratio: 0
        });
        for (var e = this.splitTextEffects,
        t = 0,
        n = e.length; t < n; t++) e[t].hide(0)
    },
    v.show = function() {
        f.killTweensOf(this.tween),
        this.tween = f.to(this, .75, {
            ratio: 1,
            ease: "linear"
        })
    },
    v.update = function() {
        this.domRect.testViewport(),
        this.contextDomRect.testViewport(),
        this.domRect.bottom > 0 && this.domRect.top < .8 * o.height && (this.inScreen = !0, this.loadImage());
        this.isVisible || this.domRect.top < .8 * o.height && (this.isVisible = !0, this.show());
        var e = this.splitTextEffects;
        if (this.contextDomRect.top < o.height && this.contextDomRect.bottom > 0) {
            if (!this.isTextVisible) {
                this.isTextVisible = !0;
                for (var t = 0,
                n = e.length; t < n; t++) e[t].show(1)
            }
        } else if (this.isTextVisible) {
            this.isTextVisible = !1;
            for (var i = 0,
            r = e.length; i < r; i++) e[i].hide(.1)
        }
        var a = this.ratio,
        c = s.fit(a, 0, .8, 1.6, 1, u.easeOutCubic),
        l = s.fit(a, 0, .8, 10, 0, u.easeOutCubic),
        d = o.elasticMouse.x,
        f = o.elasticMouse.y,
        h = this.domRect.left + .5 * this.domRect.width,
        v = this.domRect.top + .5 * this.domRect.height * c + l,
        m = s.smoothstep(1, .5, Math.abs(v / o.height / .5 - 1)),
        p = -.01 * (d - h) * m,
        g = -.01 * (f - v) * m;
        this.imageContainer.style.transform = "translate(" + p + "px," + (l + 100 * g / o.height) + "vh) scale3d(1," + c + ",1)",
        a = e[0].ratio;
        var x = s.fit(a, 0, 1, 1.6, 1, u.easeOutCubic),
        _ = s.fit(a, 0, 1, 20, 0, u.easeOutCubic);
        this.contextContainer.style.transform = "translate(" + (_ + 1.4 * p) + "px," + 100 * g / o.height * 1.4 + "vh) scale3d(" + x + ",1,1)"
    }
},
function(e, t) {
    e.exports = "uniform sampler2D u_texture;\nuniform vec2 u_textureSize;\nvarying vec2 v_uv;\n#include <cubic>\n#include <textureBicubic>\n\nvoid main () {\n\tgl_FragColor = textureBicubic(u_texture, v_uv, u_textureSize);\n}"
},
function(e, t, n) {
    "use strict";
    var i = n(6),
    r = n(53),
    o = n(2),
    a = n(15),
    s = n(8);
    function u(e) {
        c.constructor.call(this, i({
            duration: 0,
            delayBase: 0,
            delayTotal: 1,
            delayWeight: .2,
            inners: null,
            isVisible: !1,
            textColor: 16777215,
            ratio: 0,
            tween: null
        },
        e)),
        this.dom.classList.add("split-line-up-effect"),
        this.boundOnUpdate = this.update.bind(this)
    }
    var c = r.prototype,
    l = u.prototype = Object.create(c);
    e.exports = u,
    l.resize = function() {
        for (var e = this.lines || [], t = 0, n = e.length; t < n; t++) {
            var i = e[t];
            i.style.width = "auto",
            i.style.height = "auto"
        }
        c.resize.call(this),
        e = this.lines;
        for (var r = 0,
        o = e.length; r < o; r++) {
            var a = e[r],
            s = document.createElement("div");
            a.style.width = a.offsetWidth + 4 + "px",
            a.style.height = a.offsetHeight + "px",
            s.innerHTML = a.innerHTML,
            a.innerHTML = "",
            s.classList.add("split-line-inner"),
            a.appendChild(s)
        }
        this.inners = this.dom.querySelectorAll(".split-line-inner"),
        this.delayTotal = this.lineCount,
        this.update()
    },
    l.show = function(e) {
        s.killTweensOf(this.tween),
        this.isVisible = !0,
        e = this.duration = void 0 === e ? 1 : e,
        this.tween = s.to(this, e, {
            ratio: 1,
            ease: "linear",
            onUpdate: this.boundOnUpdate
        })
    },
    l.hide = function(e) {
        s.killTweensOf(this.tween),
        this.isVisible = !1,
        e = this.duration = void 0 === e ? 1 : e,
        this.tween = s.to(this, e, {
            ratio: 0,
            ease: "linear",
            onUpdate: this.boundOnUpdate
        })
    },
    l.update = function() {
        if (this.lines) for (var e = this.inners,
        t = this.ratio,
        n = this.duration * this.delayWeight / this.delayTotal,
        i = 1 - n * this.delayTotal,
        r = 0,
        s = e.length; r < s; r++) {
            var u = a.easeOutQuint(o.cUnMix(n * r, i + n * r, t));
            e[r].style.transform = "translate3d(0," + (105 - 105 * u) + "%,0)"
        }
    }
},
function(e, t, n) {
    "use strict";
    var i = n(121),
    r = n(137),
    o = n(157),
    a = n(52),
    s = n(11),
    u = n(1),
    c = n(5),
    l = n(2);
    function d() {
        f.constructor.call(this, {
            id: "home",
            path: "",
            aliases: ["home"]
        })
    }
    var f = n(18).prototype,
    h = d.prototype = Object.create(f);
    h.constructor = d,
    h.preInit = function() {
        u.isSupportWebGL && (i.preInit(), r.preInit(), o.preInit())
    },
    h.init = function() {
        u.isSupportWebGL && (i.init(), r.init(), o.init());
        var e = this.currentDom;
        v = new s({
            refDom: e.querySelector("#home-about .sec-context-inner")
        });
        var t = "cn" === u.lang ? "": null,
        n = "cn" !== u.lang;
        p = new a({
            dom: e.querySelector("#home-about-title"),
            splitWith: t,
            spaceBetweenWords: n
        }),
        g = p.dom.style,
        x = new a({
            dom: e.querySelector("#home-about-desc"),
            splitWith: t,
            spaceBetweenWords: n
        }),
        _ = x.dom.style,
        y = new a({
            dom: e.querySelector("#home-about-cta")
        }),
        w = e.querySelector("#home-about-cta-wrapper"),
        b = new s({
            refDom: w
        }),
        S = w.style,
        f.init.call(this)
    },
    h.show = function(e) {
        this.hasInitialized || this.init(e);
        m = !1,
        p.hide(0),
        x.hide(0),
        y.hide(0)
    },
    h.hide = function() {
        u.isSupportWebGL && o.pauseVideo()
    },
    h.getScrollToFromRoute = function(e) {
        return "home"
    },
    h.resize = function() {
        this.hasInitialized && (u.isSupportWebGL && (i.resize(), r.resize(), o.resize()), g.transform = _.transform = S.transform = "translateZ(0)", v.testViewport(!0), p.resize(v.width), x.delayBase = p.lineCount, x.resize(v.width), y.delayBase = x.delayBase + x.lineCount, y.resize(v.width), p.delayTotal = x.delayTotal = y.delayTotal = y.delayBase + y.lineCount, S.transform = "translateZ(0)", b.testViewport(!0))
    },
    h.update = function(e, t) {
        if (this.hasInitialized) {
            v.testViewport();
            var n = 0,
            a = 0;
            if (m) {
                if (!c.isMobile && v.bottom > 0 && v.top < u.height) {
                    var s = u.elasticMouse.x,
                    d = u.elasticMouse.y,
                    h = v.left + .5 * v.width,
                    w = v.top + .5 * v.height,
                    T = l.smoothstep(1, .5, Math.abs(w / u.height / .5 - 1)),
                    M = -.015 * (s - h) * T,
                    P = -.015 * (d - w) * T;
                    g.transform = "translate3d(" + M + "px," + P + "px,0)",
                    _.transform = "translate3d(" + 1.3 * M + "px," + 1.3 * P + "px,0)",
                    n = 1.4 * M,
                    a = 1.4 * P,
                    S.transform = "translate3d(" + n + "px," + a + "px,0)"
                }
            } else v.bottom > 0 && v.top < .75 * u.height && (m = !0, p.show(1.25), x.show(1.25), y.show(1.25));
            u.isSupportWebGL && (i.update(e), o.update(e), b.testViewport(), r.update(e, b, n, a, y.lastLineRatio))
        }
        f.update.call(this, e, t)
    };
    var v = void 0,
    m = !1,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = void 0,
    y = void 0,
    w = void 0,
    b = void 0,
    S = void 0;
    e.exports = new d
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(34),
    o = n(54),
    a = n(130),
    s = n(133),
    u = n(10),
    c = n(33),
    l = n(3),
    d = n(1),
    f = n(2);
    function h() {
        v.constructor.call(this, {
            refDomId: "home-hero",
            backgroundColor: 0,
            path: "",
            initialData: {
                cameraPositionZ: -2.5084,
                cameraRotationSpeed: -.0011,
                cameraRotationX: 0,
                cameraRotationY: 0,
                cameraRotationZ: -2.5084,
                homeHeroBgContainerRotationZ: -1.4203,
                u_time: 67.539,
                u_initRatio: 1,
                u_noiseTime: 1
            },
            parallax: 1.2,
            ROTATION_SPEED: 0,
            NODE_COUNT: 16,
            MAX_TUBE_COUNT: 1024,
            defaultCameraFov: 75,
            defaultLowColorHex: 397106,
            defaultLowColor: new i.Color(397106),
            defaultMidColorHex: 11864864,
            defaultMidColor: new i.Color(11864864),
            defaultHighColorHex: 15904687,
            defaultHighColor: new i.Color(15904687),
            fadeLowColorHex: 0,
            fadeLowColor: new i.Color(0),
            fadeMidColorHex: 2236962,
            fadeMidColor: new i.Color(2236962),
            fadeHighColorHex: 5592405,
            fadeHighColor: new i.Color(5592405),
            colors: [{
                bg0: new i.Color(16777215),
                bg1: new i.Color(14540253),
                tube0: new i.Color(10066329),
                tube1: new i.Color(4473924)
            }]
        })
    }
    var v = u.prototype,
    m = h.prototype = Object.create(v);
    m.constructor = h,
    m.preInit = function() {
        i.ShaderChunk.homeHeroColorRemap = n(136).replace(/#define\sGLSLIFY\s./, ""),
        v.preInit.call(this),
        this.sharedUniforms = {
            u_remapLowColorUniform: this.remapLowColorUniform = {
                value: new i.Color
            },
            u_remapMidColorUniform: this.remapMidColorUniform = {
                value: new i.Color
            },
            u_remapHighColorUniform: this.remapHighColorUniform = {
                value: new i.Color
            }
        };
        var e = this;
        d.loader.add(l.assetPath + "visuals/homeHero/initial.buf", {
            type: "xhr",
            responseType: "arraybuffer",
            weight: 1,
            onLoad: function(t) {
                e.initialData.splinePositions = new Float32Array(t)
            }
        }),
        r.init(this),
        s.init(this)
    },
    m.init = function() {
        v.init.call(this),
        o.init(this),
        a.init(this),
        p = new i.Object3D,
        this.scene.add(p),
        p.add(this.camera),
        this.scene.add(s.container),
        this.scene.add(a.mesh),
        _ = new i.Mesh(new i.SphereBufferGeometry(.2, 16, 12), new i.MeshBasicMaterial({
            color: 16777215
        })),
        this.scene.add(_),
        this.change();
        var e = this.initialData;
        if (this.camera.rotation.z = e.cameraPositionZ, this.camera.rotationSpeed = e.cameraRotationSpeed, this.camera.rotation.x = e.cameraRotationX, this.camera.rotation.y = e.cameraRotationY, this.camera.rotation.z = e.cameraRotationZ, s.container.rotation.z = e.homeHeroBgContainerRotationZ, window.gui) {
            var t = this.gui,
            n = t.addFolder("homeHeroColors");
            n.addColor(this, "defaultLowColorHex"),
            n.addColor(this, "defaultMidColorHex"),
            n.addColor(this, "defaultHighColorHex"),
            n.addColor(this, "fadeLowColorHex"),
            n.addColor(this, "fadeMidColorHex"),
            n.addColor(this, "fadeHighColorHex"),
            n.add(r.sharedUniforms.u_lightScatterDivider, "value", 1, 200).name("u_lightScatterDivider"),
            n.add(r.sharedUniforms.u_lightScatterPowInv, "value", .01, 5).name("u_lightScatterPowInv"),
            n.open()
        }
        this.precompile()
    },
    m.change = function() {
        this.camera.rotation.z = (Math.random() - .5) * Math.PI * 2,
        this.camera.rotationSpeed = (.001 + .001 * Math.random()) * (Math.random() > .5 ? 1 : -1);
        var e = this.colors[0];
        a.changeColor(e.tube0, e.tube1),
        this.backgroundColor = e.bg0,
        s.plane0.color.copy(e.bg1),
        s.plane1.color.copy(e.bg0),
        x = (x + 1) % this.colors.length,
        g += Math.PI
    },
    m.resize = function() {
        v.resize.call(this)
    },
    m.update = function(e) {
        if (this.paddingBottom = 240, this.testViewport(), this.needsRender) {
            p.position.z = 14 - 6 * Math.cos(.35 * g),
            this.camera.rotation.x += .05 * ( - .2 * f.clamp(this.mouse.y, -1, 1) - this.camera.rotation.x),
            this.camera.rotation.y += .05 * (.2 * this.mouse.x - this.camera.rotation.y),
            this.camera.rotation.z += this.ROTATION_SPEED,
            s.container.rotation.z -= .075 * e,
            this.camera.fov = f.mix(135, 75, this.ratio);
            var t = 1 / (2 * Math.tan(.375 * Math.PI)),
            n = 1 / (2 * Math.tan(75 / 360 * Math.PI));
            this.camera.position.z = p.position.z * f.mix(t / n, 1, f.cUnMix(t, n, 1 / (2 * Math.tan(this.camera.fov / 360 * Math.PI)))),
            this.scene.updateMatrixWorld(),
            this.updateCamera(),
            this.updateMouse();
            var i = f.cUnMix(.5, 1, this.inRatio);
            this.defaultLowColor.setHex(this.defaultLowColorHex),
            this.defaultMidColor.setHex(this.defaultMidColorHex),
            this.defaultHighColor.setHex(this.defaultHighColorHex),
            this.fadeLowColor.setHex(this.fadeLowColorHex),
            this.fadeMidColor.setHex(this.fadeMidColorHex),
            this.fadeHighColor.setHex(this.fadeHighColorHex),
            this.remapLowColorUniform.value.copy(this.fadeLowColor).lerp(this.defaultLowColor, i),
            this.remapMidColorUniform.value.copy(this.fadeMidColor).lerp(this.defaultMidColor, i),
            this.remapHighColorUniform.value.copy(this.fadeHighColor).lerp(this.defaultHighColor, i),
            _.position.copy(this.mouse3);
            var r = d.renderer;
            r.setRenderTarget(null),
            o.update(e),
            a.update(e),
            this.render(),
            g += e
        }
    },
    m.afterRender = function() {
        c.renderVerticalGradient(.85 - 5 * (1 - this.ratio), 1, 0, 0, 0, Math.min(1, 1 - this.ratio + .4))
    };
    var p = void 0,
    g = 0,
    x = 2,
    _ = void 0;
    e.exports = new h
},
function(module, exports, __webpack_require__) {
    "use strict"; (function(global) {
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
        function(e) {
            return typeof e
        }: function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
        },
        numeric = exports;
        void 0 !== global && (global.numeric = numeric),
        numeric.version = "1.2.6",
        numeric.bench = function(e, t) {
            var n, i, r;
            for (void 0 === t && (t = 15), i = .5, n = new Date;;) {
                for (r = i *= 2; r > 3; r -= 4) e(),
                e(),
                e(),
                e();
                for (; r > 0;) e(),
                r--;
                if (new Date - n > t) break
            }
            for (r = i; r > 3; r -= 4) e(),
            e(),
            e(),
            e();
            for (; r > 0;) e(),
            r--;
            return 1e3 * (3 * i - 1) / (new Date - n)
        },
        numeric._myIndexOf = function(e) {
            var t, n = this.length;
            for (t = 0; t < n; ++t) if (this[t] === e) return t;
            return - 1
        },
        numeric.myIndexOf = Array.prototype.indexOf ? Array.prototype.indexOf: numeric._myIndexOf,
        numeric.Function = Function,
        numeric.precision = 4,
        numeric.largeArray = 50,
        numeric.prettyPrint = function(e) {
            var t = [];
            return function e(n) {
                var i;
                if (void 0 === n) return t.push(Array(numeric.precision + 8).join(" ")),
                !1;
                if ("string" == typeof n) return t.push('"' + n + '"'),
                !1;
                if ("boolean" == typeof n) return t.push(n.toString()),
                !1;
                if ("number" == typeof n) {
                    var r = function e(t) {
                        if (0 === t) return "0";
                        if (isNaN(t)) return "NaN";
                        if (t < 0) return "-" + e( - t);
                        if (isFinite(t)) {
                            var n = Math.floor(Math.log(t) / Math.log(10)),
                            i = t / Math.pow(10, n),
                            r = i.toPrecision(numeric.precision);
                            return 10 === parseFloat(r) && (n++, r = (i = 1).toPrecision(numeric.precision)),
                            parseFloat(r).toString() + "e" + n.toString()
                        }
                        return "Infinity"
                    } (n),
                    o = n.toPrecision(numeric.precision),
                    a = parseFloat(n.toString()).toString(),
                    s = [r, o, a, parseFloat(o).toString(), parseFloat(a).toString()];
                    for (i = 1; i < s.length; i++) s[i].length < r.length && (r = s[i]);
                    return t.push(Array(numeric.precision + 8 - r.length).join(" ") + r),
                    !1
                }
                if (null === n) return t.push("null"),
                !1;
                if ("function" == typeof n) {
                    t.push(n.toString());
                    var u = !1;
                    for (i in n) n.hasOwnProperty(i) && (u ? t.push(",\n") : t.push("\n{"), u = !0, t.push(i), t.push(": \n"), e(n[i]));
                    return u && t.push("}\n"),
                    !0
                }
                if (n instanceof Array) {
                    if (n.length > numeric.largeArray) return t.push("...Large Array..."),
                    !0;
                    for (u = !1, t.push("["), i = 0; i < n.length; i++) i > 0 && (t.push(","), u && t.push("\n ")),
                    u = e(n[i]);
                    return t.push("]"),
                    !0
                }
                t.push("{");
                u = !1;
                for (i in n) n.hasOwnProperty(i) && (u && t.push(",\n"), u = !0, t.push(i), t.push(": \n"), e(n[i]));
                return t.push("}"),
                !0
            } (e),
            t.join("")
        },
        numeric.parseDate = function(e) {
            return function e(t) {
                if ("string" == typeof t) return Date.parse(t.replace(/-/g, "/"));
                if (! (t instanceof Array)) throw new Error("parseDate: parameter must be arrays of strings");
                var n, i = [];
                for (n = 0; n < t.length; n++) i[n] = e(t[n]);
                return i
            } (e)
        },
        numeric.parseFloat = function(e) {
            return function e(t) {
                if ("string" == typeof t) return parseFloat(t);
                if (! (t instanceof Array)) throw new Error("parseFloat: parameter must be arrays of strings");
                var n, i = [];
                for (n = 0; n < t.length; n++) i[n] = e(t[n]);
                return i
            } (e)
        },
        numeric.parseCSV = function(e) {
            var t, n, i, r = e.split("\n"),
            o = [],
            a = /(([^'",]*)|('[^']*')|("[^"]*")),/g,
            s = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,
            u = 0;
            for (n = 0; n < r.length; n++) {
                var c, l = (r[n] + ",").match(a);
                if (l.length > 0) {
                    for (o[u] = [], t = 0; t < l.length; t++) c = (i = l[t]).substr(0, i.length - 1),
                    s.test(c) ? o[u][t] = parseFloat(c) : o[u][t] = c;
                    u++
                }
            }
            return o
        },
        numeric.toCSV = function(e) {
            var t, n, i, r, o, a = numeric.dim(e);
            for (i = a[0], a[1], o = [], t = 0; t < i; t++) {
                for (r = [], n = 0; n < i; n++) r[n] = e[t][n].toString();
                o[t] = r.join(", ")
            }
            return o.join("\n") + "\n"
        },
        numeric.getURL = function(e) {
            var t = new XMLHttpRequest;
            return t.open("GET", e, !1),
            t.send(),
            t
        },
        numeric.imageURL = function(e) {
            function t(e, t, n) {
                void 0 === t && (t = 0),
                void 0 === n && (n = e.length);
                var i, r = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
                o = -1;
                e.length;
                for (i = t; i < n; i++) o = o >>> 8 ^ r[255 & (o ^ e[i])];
                return - 1 ^ o
            }
            var n, i, r, o, a, s, u, c, l, d, f = e[0].length,
            h = e[0][0].length,
            v = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, 255 & f, 8, 2, 0, 0, 0, -1, -2, -3, -4, -5, -6, -7, -8, 73, 68, 65, 84, 8, 29];
            for (d = t(v, 12, 29), v[29] = d >> 24 & 255, v[30] = d >> 16 & 255, v[31] = d >> 8 & 255, v[32] = 255 & d, n = 1, i = 0, u = 0; u < f; u++) {
                for (u < f - 1 ? v.push(0) : v.push(1), a = 3 * h + 1 + (0 === u) & 255, s = 3 * h + 1 + (0 === u) >> 8 & 255, v.push(a), v.push(s), v.push(255 & ~a), v.push(255 & ~s), 0 === u && v.push(0), c = 0; c < h; c++) for (r = 0; r < 3; r++) i = (i + (n = (n + (a = (a = e[r][u][c]) > 255 ? 255 : a < 0 ? 0 : Math.round(a))) % 65521)) % 65521,
                v.push(a);
                v.push(0)
            }
            return l = (i << 16) + n,
            v.push(l >> 24 & 255),
            v.push(l >> 16 & 255),
            v.push(l >> 8 & 255),
            v.push(255 & l),
            o = v.length - 41,
            v[33] = o >> 24 & 255,
            v[34] = o >> 16 & 255,
            v[35] = o >> 8 & 255,
            v[36] = 255 & o,
            d = t(v, 37),
            v.push(d >> 24 & 255),
            v.push(d >> 16 & 255),
            v.push(d >> 8 & 255),
            v.push(255 & d),
            v.push(0),
            v.push(0),
            v.push(0),
            v.push(0),
            v.push(73),
            v.push(69),
            v.push(78),
            v.push(68),
            v.push(174),
            v.push(66),
            v.push(96),
            v.push(130),
            "data:image/png;base64," +
            function(e) {
                var t, n, i, r, o, a, s, u = e.length,
                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                l = "";
                for (t = 0; t < u; t += 3) o = ((3 & (n = e[t])) << 4) + ((i = e[t + 1]) >> 4),
                a = ((15 & i) << 2) + ((r = e[t + 2]) >> 6),
                s = 63 & r,
                t + 1 >= u ? a = s = 64 : t + 2 >= u && (s = 64),
                l += c.charAt(n >> 2) + c.charAt(o) + c.charAt(a) + c.charAt(s);
                return l
            } (v)
        },
        numeric._dim = function(e) {
            for (var t = [];
            "object" === (void 0 === e ? "undefined": _typeof(e));) t.push(e.length),
            e = e[0];
            return t
        },
        numeric.dim = function(e) {
            var t, n;
            return "object" === (void 0 === e ? "undefined": _typeof(e)) ? "object" === (void 0 === (t = e[0]) ? "undefined": _typeof(t)) ? "object" === (void 0 === (n = t[0]) ? "undefined": _typeof(n)) ? numeric._dim(e) : [e.length, t.length] : [e.length] : []
        },
        numeric.mapreduce = function(e, t) {
            return Function("x", "accum", "_s", "_k", 'if(typeof accum === "undefined") accum = ' + t + ';\nif(typeof x === "number") { var xi = x; ' + e + '; return accum; }\nif(typeof _s === "undefined") _s = numeric.dim(x);\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i,xi;\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) {\n        accum = arguments.callee(x[i],accum,_s,_k+1);\n    }    return accum;\n}\nfor(i=_n-1;i>=1;i-=2) { \n    xi = x[i];\n    ' + e + ";\n    xi = x[i-1];\n    " + e + ";\n}\nif(i === 0) {\n    xi = x[i];\n    " + e + "\n}\nreturn accum;")
        },
        numeric.mapreduce2 = function(e, t) {
            return Function("x", "var n = x.length;\nvar i,xi;\n" + t + ";\nfor(i=n-1;i!==-1;--i) { \n    xi = x[i];\n    " + e + ";\n}\nreturn accum;")
        },
        numeric.same = function e(t, n) {
            var i, r;
            if (! (t instanceof Array && n instanceof Array)) return ! 1;
            if ((r = t.length) !== n.length) return ! 1;
            for (i = 0; i < r; i++) if (t[i] !== n[i]) {
                if ("object" !== _typeof(t[i])) return ! 1;
                if (!e(t[i], n[i])) return ! 1
            }
            return ! 0
        },
        numeric.rep = function(e, t, n) {
            void 0 === n && (n = 0);
            var i, r = e[n],
            o = Array(r);
            if (n === e.length - 1) {
                for (i = r - 2; i >= 0; i -= 2) o[i + 1] = t,
                o[i] = t;
                return - 1 === i && (o[0] = t),
                o
            }
            for (i = r - 1; i >= 0; i--) o[i] = numeric.rep(e, t, n + 1);
            return o
        },
        numeric.dotMMsmall = function(e, t) {
            var n, i, r, o, a, s, u, c, l, d, f;
            for (o = e.length, a = t.length, s = t[0].length, u = Array(o), n = o - 1; n >= 0; n--) {
                for (c = Array(s), l = e[n], r = s - 1; r >= 0; r--) {
                    for (d = l[a - 1] * t[a - 1][r], i = a - 2; i >= 1; i -= 2) f = i - 1,
                    d += l[i] * t[i][r] + l[f] * t[f][r];
                    0 === i && (d += l[0] * t[0][r]),
                    c[r] = d
                }
                u[n] = c
            }
            return u
        },
        numeric._getCol = function(e, t, n) {
            var i;
            for (i = e.length - 1; i > 0; --i) n[i] = e[i][t],
            n[--i] = e[i][t];
            0 === i && (n[0] = e[0][t])
        },
        numeric.dotMMbig = function(e, t) {
            var n, i, r, o = numeric._getCol,
            a = t.length,
            s = Array(a),
            u = e.length,
            c = t[0].length,
            l = new Array(u),
            d = numeric.dotVV;
            for (--a, i = --u; - 1 !== i; --i) l[i] = Array(c);
            for (i = --c; - 1 !== i; --i) for (o(t, i, s), r = u; - 1 !== r; --r) 0,
            n = e[r],
            l[r][i] = d(n, s);
            return l
        },
        numeric.dotMV = function(e, t) {
            var n, i = e.length,
            r = (t.length, Array(i)),
            o = numeric.dotVV;
            for (n = i - 1; n >= 0; n--) r[n] = o(e[n], t);
            return r
        },
        numeric.dotVM = function(e, t) {
            var n, i, r, o, a, s, u;
            for (r = e.length, o = t[0].length, a = Array(o), i = o - 1; i >= 0; i--) {
                for (s = e[r - 1] * t[r - 1][i], n = r - 2; n >= 1; n -= 2) u = n - 1,
                s += e[n] * t[n][i] + e[u] * t[u][i];
                0 === n && (s += e[0] * t[0][i]),
                a[i] = s
            }
            return a
        },
        numeric.dotVV = function(e, t) {
            var n, i, r = e.length,
            o = e[r - 1] * t[r - 1];
            for (n = r - 2; n >= 1; n -= 2) i = n - 1,
            o += e[n] * t[n] + e[i] * t[i];
            return 0 === n && (o += e[0] * t[0]),
            o
        },
        numeric.dot = function(e, t) {
            var n = numeric.dim;
            switch (1e3 * n(e).length + n(t).length) {
            case 2002:
                return t.length < 10 ? numeric.dotMMsmall(e, t) : numeric.dotMMbig(e, t);
            case 2001:
                return numeric.dotMV(e, t);
            case 1002:
                return numeric.dotVM(e, t);
            case 1001:
                return numeric.dotVV(e, t);
            case 1e3:
                return numeric.mulVS(e, t);
            case 1:
                return numeric.mulSV(e, t);
            case 0:
                return e * t;
            default:
                throw new Error("numeric.dot only works on vectors and matrices")
            }
        },
        numeric.diag = function(e) {
            var t, n, i, r, o = e.length,
            a = Array(o);
            for (t = o - 1; t >= 0; t--) {
                for (r = Array(o), n = t + 2, i = o - 1; i >= n; i -= 2) r[i] = 0,
                r[i - 1] = 0;
                for (i > t && (r[i] = 0), r[t] = e[t], i = t - 1; i >= 1; i -= 2) r[i] = 0,
                r[i - 1] = 0;
                0 === i && (r[0] = 0),
                a[t] = r
            }
            return a
        },
        numeric.getDiag = function(e) {
            var t, n = Math.min(e.length, e[0].length),
            i = Array(n);
            for (t = n - 1; t >= 1; --t) i[t] = e[t][t],
            i[--t] = e[t][t];
            return 0 === t && (i[0] = e[0][0]),
            i
        },
        numeric.identity = function(e) {
            return numeric.diag(numeric.rep([e], 1))
        },
        numeric.pointwise = function(e, t, n) {
            void 0 === n && (n = "");
            var i, r, o = [],
            a = /\[i\]$/,
            s = "",
            u = !1;
            for (i = 0; i < e.length; i++) a.test(e[i]) ? s = r = e[i].substring(0, e[i].length - 3) : r = e[i],
            "ret" === r && (u = !0),
            o.push(r);
            return o[e.length] = "_s",
            o[e.length + 1] = "_k",
            o[e.length + 2] = 'if(typeof _s === "undefined") _s = numeric.dim(' + s + ');\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i' + (u ? "": ", ret = Array(_n)") + ";\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(" + e.join(",") + ",_s,_k+1);\n    return ret;\n}\n" + n + "\nfor(i=_n-1;i!==-1;--i) {\n    " + t + "\n}\nreturn ret;",
            Function.apply(null, o)
        },
        numeric.pointwise2 = function(e, t, n) {
            void 0 === n && (n = "");
            var i, r, o = [],
            a = /\[i\]$/,
            s = "",
            u = !1;
            for (i = 0; i < e.length; i++) a.test(e[i]) ? s = r = e[i].substring(0, e[i].length - 3) : r = e[i],
            "ret" === r && (u = !0),
            o.push(r);
            return o[e.length] = "var _n = " + s + ".length;\nvar i" + (u ? "": ", ret = Array(_n)") + ";\n" + n + "\nfor(i=_n-1;i!==-1;--i) {\n" + t + "\n}\nreturn ret;",
            Function.apply(null, o)
        },
        numeric._biforeach = function e(t, n, i, r, o) {
            var a;
            if (r !== i.length - 1) for (a = i[r] - 1; a >= 0; a--) e("object" === (void 0 === t ? "undefined": _typeof(t)) ? t[a] : t, "object" === (void 0 === n ? "undefined": _typeof(n)) ? n[a] : n, i, r + 1, o);
            else o(t, n)
        },
        numeric._biforeach2 = function e(t, n, i, r, o) {
            if (r === i.length - 1) return o(t, n);
            var a, s = i[r],
            u = Array(s);
            for (a = s - 1; a >= 0; --a) u[a] = e("object" === (void 0 === t ? "undefined": _typeof(t)) ? t[a] : t, "object" === (void 0 === n ? "undefined": _typeof(n)) ? n[a] : n, i, r + 1, o);
            return u
        },
        numeric._foreach = function e(t, n, i, r) {
            var o;
            if (i !== n.length - 1) for (o = n[i] - 1; o >= 0; o--) e(t[o], n, i + 1, r);
            else r(t)
        },
        numeric._foreach2 = function e(t, n, i, r) {
            if (i === n.length - 1) return r(t);
            var o, a = n[i],
            s = Array(a);
            for (o = a - 1; o >= 0; o--) s[o] = e(t[o], n, i + 1, r);
            return s
        },
        numeric.ops2 = {
            add: "+",
            sub: "-",
            mul: "*",
            div: "/",
            mod: "%",
            and: "&&",
            or: "||",
            eq: "===",
            neq: "!==",
            lt: "<",
            gt: ">",
            leq: "<=",
            geq: ">=",
            band: "&",
            bor: "|",
            bxor: "^",
            lshift: "<<",
            rshift: ">>",
            rrshift: ">>>"
        },
        numeric.opseq = {
            addeq: "+=",
            subeq: "-=",
            muleq: "*=",
            diveq: "/=",
            modeq: "%=",
            lshifteq: "<<=",
            rshifteq: ">>=",
            rrshifteq: ">>>=",
            bandeq: "&=",
            boreq: "|=",
            bxoreq: "^="
        },
        numeric.mathfuns = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan", "isNaN", "isFinite"],
        numeric.mathfuns2 = ["atan2", "pow", "max", "min"],
        numeric.ops1 = {
            neg: "-",
            not: "!",
            bnot: "~",
            clone: ""
        },
        numeric.mapreducers = {
            any: ["if(xi) return true;", "var accum = false;"],
            all: ["if(!xi) return false;", "var accum = true;"],
            sum: ["accum += xi;", "var accum = 0;"],
            prod: ["accum *= xi;", "var accum = 1;"],
            norm2Squared: ["accum += xi*xi;", "var accum = 0;"],
            norminf: ["accum = max(accum,abs(xi));", "var accum = 0, max = Math.max, abs = Math.abs;"],
            norm1: ["accum += abs(xi)", "var accum = 0, abs = Math.abs;"],
            sup: ["accum = max(accum,xi);", "var accum = -Infinity, max = Math.max;"],
            inf: ["accum = min(accum,xi);", "var accum = Infinity, min = Math.min;"]
        },
        function() {
            var e, t;
            for (e = 0; e < numeric.mathfuns2.length; ++e) t = numeric.mathfuns2[e],
            numeric.ops2[t] = t;
            for (e in numeric.ops2) if (numeric.ops2.hasOwnProperty(e)) {
                t = numeric.ops2[e];
                var n, i, r = ""; - 1 !== numeric.myIndexOf.call(numeric.mathfuns2, e) ? (r = "var " + t + " = Math." + t + ";\n", n = function(e, n, i) {
                    return e + " = " + t + "(" + n + "," + i + ")"
                },
                i = function(e, n) {
                    return e + " = " + t + "(" + e + "," + n + ")"
                }) : (n = function(e, n, i) {
                    return e + " = " + n + " " + t + " " + i
                },
                i = numeric.opseq.hasOwnProperty(e + "eq") ?
                function(e, n) {
                    return e + " " + t + "= " + n
                }: function(e, n) {
                    return e + " = " + e + " " + t + " " + n
                }),
                numeric[e + "VV"] = numeric.pointwise2(["x[i]", "y[i]"], n("ret[i]", "x[i]", "y[i]"), r),
                numeric[e + "SV"] = numeric.pointwise2(["x", "y[i]"], n("ret[i]", "x", "y[i]"), r),
                numeric[e + "VS"] = numeric.pointwise2(["x[i]", "y"], n("ret[i]", "x[i]", "y"), r),
                numeric[e] = Function("var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric." + e + "VV, VS = numeric." + e + "VS, SV = numeric." + e + 'SV;\nvar dim = numeric.dim;\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof x === "object") {\n      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n  else ' + i("x", "y") + "\n}\nreturn x;\n"),
                numeric[t] = numeric[e],
                numeric[e + "eqV"] = numeric.pointwise2(["ret[i]", "x[i]"], i("ret[i]", "x[i]"), r),
                numeric[e + "eqS"] = numeric.pointwise2(["ret[i]", "x"], i("ret[i]", "x"), r),
                numeric[e + "eq"] = Function("var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric." + e + "eqV, S = numeric." + e + 'eqS\nvar s = numeric.dim(x);\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n  else numeric._biforeach(x,y,s,0,S);\n}\nreturn x;\n')
            }
            for (e = 0; e < numeric.mathfuns2.length; ++e) t = numeric.mathfuns2[e],
            delete numeric.ops2[t];
            for (e = 0; e < numeric.mathfuns.length; ++e) t = numeric.mathfuns[e],
            numeric.ops1[t] = t;
            for (e in numeric.ops1) numeric.ops1.hasOwnProperty(e) && (r = "", t = numeric.ops1[e], -1 !== numeric.myIndexOf.call(numeric.mathfuns, e) && Math.hasOwnProperty(t) && (r = "var " + t + " = Math." + t + ";\n"), numeric[e + "eqV"] = numeric.pointwise2(["ret[i]"], "ret[i] = " + t + "(ret[i]);", r), numeric[e + "eq"] = Function("x", 'if(typeof x !== "object") return ' + t + "x\nvar i;\nvar V = numeric." + e + "eqV;\nvar s = numeric.dim(x);\nnumeric._foreach(x,s,0,V);\nreturn x;\n"), numeric[e + "V"] = numeric.pointwise2(["x[i]"], "ret[i] = " + t + "(x[i]);", r), numeric[e] = Function("x", 'if(typeof x !== "object") return ' + t + "(x)\nvar i;\nvar V = numeric." + e + "V;\nvar s = numeric.dim(x);\nreturn numeric._foreach2(x,s,0,V);\n"));
            for (e = 0; e < numeric.mathfuns.length; ++e) t = numeric.mathfuns[e],
            delete numeric.ops1[t];
            for (e in numeric.mapreducers) numeric.mapreducers.hasOwnProperty(e) && (t = numeric.mapreducers[e], numeric[e + "V"] = numeric.mapreduce2(t[0], t[1]), numeric[e] = Function("x", "s", "k", t[1] + 'if(typeof x !== "object") {    xi = x;\n' + t[0] + ';\n    return accum;\n}if(typeof s === "undefined") s = numeric.dim(x);\nif(typeof k === "undefined") k = 0;\nif(k === s.length-1) return numeric.' + e + "V(x);\nvar xi;\nvar n = x.length, i;\nfor(i=n-1;i!==-1;--i) {\n   xi = arguments.callee(x[i]);\n" + t[0] + ";\n}\nreturn accum;\n"))
        } (),
        numeric.truncVV = numeric.pointwise(["x[i]", "y[i]"], "ret[i] = round(x[i]/y[i])*y[i];", "var round = Math.round;"),
        numeric.truncVS = numeric.pointwise(["x[i]", "y"], "ret[i] = round(x[i]/y)*y;", "var round = Math.round;"),
        numeric.truncSV = numeric.pointwise(["x", "y[i]"], "ret[i] = round(x/y[i])*y[i];", "var round = Math.round;"),
        numeric.trunc = function(e, t) {
            return "object" === (void 0 === e ? "undefined": _typeof(e)) ? "object" === (void 0 === t ? "undefined": _typeof(t)) ? numeric.truncVV(e, t) : numeric.truncVS(e, t) : "object" === (void 0 === t ? "undefined": _typeof(t)) ? numeric.truncSV(e, t) : Math.round(e / t) * t
        },
        numeric.inv = function(e) {
            var t, n, i, r, o, a, s, u = numeric.dim(e),
            c = Math.abs,
            l = u[0],
            d = u[1],
            f = numeric.clone(e),
            h = numeric.identity(l);
            for (a = 0; a < d; ++a) {
                var v = -1,
                m = -1;
                for (o = a; o !== l; ++o)(s = c(f[o][a])) > m && (v = o, m = s);
                for (n = f[v], f[v] = f[a], f[a] = n, r = h[v], h[v] = h[a], h[a] = r, e = n[a], s = a; s !== d; ++s) n[s] /= e;
                for (s = d - 1; - 1 !== s; --s) r[s] /= e;
                for (o = l - 1; - 1 !== o; --o) if (o !== a) {
                    for (t = f[o], i = h[o], e = t[a], s = a + 1; s !== d; ++s) t[s] -= n[s] * e;
                    for (s = d - 1; s > 0; --s) i[s] -= r[s] * e,
                    i[--s] -= r[s] * e;
                    0 === s && (i[0] -= r[0] * e)
                }
            }
            return h
        },
        numeric.det = function(e) {
            var t = numeric.dim(e);
            if (2 !== t.length || t[0] !== t[1]) throw new Error("numeric: det() only works on square matrices");
            var n, i, r, o, a, s, u, c, l = t[0],
            d = 1,
            f = numeric.clone(e);
            for (i = 0; i < l - 1; i++) {
                for (r = i, n = i + 1; n < l; n++) Math.abs(f[n][i]) > Math.abs(f[r][i]) && (r = n);
                for (r !== i && (u = f[r], f[r] = f[i], f[i] = u, d *= -1), o = f[i], n = i + 1; n < l; n++) {
                    for (s = (a = f[n])[i] / o[i], r = i + 1; r < l - 1; r += 2) c = r + 1,
                    a[r] -= o[r] * s,
                    a[c] -= o[c] * s;
                    r !== l && (a[r] -= o[r] * s)
                }
                if (0 === o[i]) return 0;
                d *= o[i]
            }
            return d * f[i][i]
        },
        numeric.transpose = function(e) {
            var t, n, i, r, o, a = e.length,
            s = e[0].length,
            u = Array(s);
            for (n = 0; n < s; n++) u[n] = Array(a);
            for (t = a - 1; t >= 1; t -= 2) {
                for (r = e[t], i = e[t - 1], n = s - 1; n >= 1; --n)(o = u[n])[t] = r[n],
                o[t - 1] = i[n],
                (o = u[--n])[t] = r[n],
                o[t - 1] = i[n];
                0 === n && ((o = u[0])[t] = r[0], o[t - 1] = i[0])
            }
            if (0 === t) {
                for (i = e[0], n = s - 1; n >= 1; --n) u[n][0] = i[n],
                u[--n][0] = i[n];
                0 === n && (u[0][0] = i[0])
            }
            return u
        },
        numeric.negtranspose = function(e) {
            var t, n, i, r, o, a = e.length,
            s = e[0].length,
            u = Array(s);
            for (n = 0; n < s; n++) u[n] = Array(a);
            for (t = a - 1; t >= 1; t -= 2) {
                for (r = e[t], i = e[t - 1], n = s - 1; n >= 1; --n)(o = u[n])[t] = -r[n],
                o[t - 1] = -i[n],
                (o = u[--n])[t] = -r[n],
                o[t - 1] = -i[n];
                0 === n && ((o = u[0])[t] = -r[0], o[t - 1] = -i[0])
            }
            if (0 === t) {
                for (i = e[0], n = s - 1; n >= 1; --n) u[n][0] = -i[n],
                u[--n][0] = -i[n];
                0 === n && (u[0][0] = -i[0])
            }
            return u
        },
        numeric._random = function e(t, n) {
            var i, r, o = t[n],
            a = Array(o);
            if (n === t.length - 1) {
                for (r = Math.random, i = o - 1; i >= 1; i -= 2) a[i] = r(),
                a[i - 1] = r();
                return 0 === i && (a[0] = r()),
                a
            }
            for (i = o - 1; i >= 0; i--) a[i] = e(t, n + 1);
            return a
        },
        numeric.random = function(e) {
            return numeric._random(e, 0)
        },
        numeric.norm2 = function(e) {
            return Math.sqrt(numeric.norm2Squared(e))
        },
        numeric.linspace = function(e, t, n) {
            if (void 0 === n && (n = Math.max(Math.round(t - e) + 1, 1)), n < 2) return 1 === n ? [e] : [];
            var i, r = Array(n);
            for (i = --n; i >= 0; i--) r[i] = (i * t + (n - i) * e) / n;
            return r
        },
        numeric.getBlock = function(e, t, n) {
            var i = numeric.dim(e);
            return function e(r, o) {
                var a, s = t[o],
                u = n[o] - s,
                c = Array(u);
                if (o === i.length - 1) {
                    for (a = u; a >= 0; a--) c[a] = r[a + s];
                    return c
                }
                for (a = u; a >= 0; a--) c[a] = e(r[a + s], o + 1);
                return c
            } (e, 0)
        },
        numeric.setBlock = function(e, t, n, i) {
            var r = numeric.dim(e);
            return function e(i, o, a) {
                var s, u = t[a],
                c = n[a] - u;
                if (a === r.length - 1) for (s = c; s >= 0; s--) i[s + u] = o[s];
                for (s = c; s >= 0; s--) e(i[s + u], o[s], a + 1)
            } (e, i, 0),
            e
        },
        numeric.getRange = function(e, t, n) {
            var i, r, o, a, s = t.length,
            u = n.length,
            c = Array(s);
            for (i = s - 1; - 1 !== i; --i) for (c[i] = Array(u), o = c[i], a = e[t[i]], r = u - 1; - 1 !== r; --r) o[r] = a[n[r]];
            return c
        },
        numeric.blockMatrix = function(e) {
            var t = numeric.dim(e);
            if (t.length < 4) return numeric.blockMatrix([e]);
            var n, i, r, o, a, s = t[0],
            u = t[1];
            for (n = 0, i = 0, r = 0; r < s; ++r) n += e[r][0].length;
            for (o = 0; o < u; ++o) i += e[0][o][0].length;
            var c = Array(n);
            for (r = 0; r < n; ++r) c[r] = Array(i);
            var l, d, f, h, v, m = 0;
            for (r = 0; r < s; ++r) {
                for (l = i, o = u - 1; - 1 !== o; --o) for (l -= (a = e[r][o])[0].length, f = a.length - 1; - 1 !== f; --f) for (v = a[f], d = c[m + f], h = v.length - 1; - 1 !== h; --h) d[l + h] = v[h];
                m += e[r][0].length
            }
            return c
        },
        numeric.tensor = function(e, t) {
            if ("number" == typeof e || "number" == typeof t) return numeric.mul(e, t);
            var n = numeric.dim(e),
            i = numeric.dim(t);
            if (1 !== n.length || 1 !== i.length) throw new Error("numeric: tensor product is only defined for vectors");
            var r, o, a, s, u = n[0],
            c = i[0],
            l = Array(u);
            for (o = u - 1; o >= 0; o--) {
                for (r = Array(c), s = e[o], a = c - 1; a >= 3; --a) r[a] = s * t[a],
                r[--a] = s * t[a],
                r[--a] = s * t[a],
                r[--a] = s * t[a];
                for (; a >= 0;) r[a] = s * t[a],
                --a;
                l[o] = r
            }
            return l
        },
        numeric.T = function(e, t) {
            this.x = e,
            this.y = t
        },
        numeric.t = function(e, t) {
            return new numeric.T(e, t)
        },
        numeric.Tbinop = function(e, t, n, i, r) {
            var o;
            numeric.indexOf;
            if ("string" != typeof r) for (o in r = "", numeric) numeric.hasOwnProperty(o) && (e.indexOf(o) >= 0 || t.indexOf(o) >= 0 || n.indexOf(o) >= 0 || i.indexOf(o) >= 0) && o.length > 1 && (r += "var " + o + " = numeric." + o + ";\n");
            return Function(["y"], "var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n" + r + "\nif(x.y) {  if(y.y) {    return new numeric.T(" + i + ");\n  }\n  return new numeric.T(" + n + ");\n}\nif(y.y) {\n  return new numeric.T(" + t + ");\n}\nreturn new numeric.T(" + e + ");\n")
        },
        numeric.T.prototype.add = numeric.Tbinop("add(x.x,y.x)", "add(x.x,y.x),y.y", "add(x.x,y.x),x.y", "add(x.x,y.x),add(x.y,y.y)"),
        numeric.T.prototype.sub = numeric.Tbinop("sub(x.x,y.x)", "sub(x.x,y.x),neg(y.y)", "sub(x.x,y.x),x.y", "sub(x.x,y.x),sub(x.y,y.y)"),
        numeric.T.prototype.mul = numeric.Tbinop("mul(x.x,y.x)", "mul(x.x,y.x),mul(x.x,y.y)", "mul(x.x,y.x),mul(x.y,y.x)", "sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))"),
        numeric.T.prototype.reciprocal = function() {
            var e = numeric.mul,
            t = numeric.div;
            if (this.y) {
                var n = numeric.add(e(this.x, this.x), e(this.y, this.y));
                return new numeric.T(t(this.x, n), t(numeric.neg(this.y), n))
            }
            return new T(t(1, this.x))
        },
        numeric.T.prototype.div = function(e) {
            if (e instanceof numeric.T || (e = new numeric.T(e)), e.y) return this.mul(e.reciprocal());
            var t = numeric.div;
            return this.y ? new numeric.T(t(this.x, e.x), t(this.y, e.x)) : new numeric.T(t(this.x, e.x))
        },
        numeric.T.prototype.dot = numeric.Tbinop("dot(x.x,y.x)", "dot(x.x,y.x),dot(x.x,y.y)", "dot(x.x,y.x),dot(x.y,y.x)", "sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))"),
        numeric.T.prototype.transpose = function() {
            var e = numeric.transpose,
            t = this.x,
            n = this.y;
            return n ? new numeric.T(e(t), e(n)) : new numeric.T(e(t))
        },
        numeric.T.prototype.transjugate = function() {
            var e = numeric.transpose,
            t = this.x,
            n = this.y;
            return n ? new numeric.T(e(t), numeric.negtranspose(n)) : new numeric.T(e(t))
        },
        numeric.Tunop = function(e, t, n) {
            return "string" != typeof n && (n = ""),
            Function("var x = this;\n" + n + "\nif(x.y) {  " + t + ";\n}\n" + e + ";\n")
        },
        numeric.T.prototype.exp = numeric.Tunop("return new numeric.T(ex)", "return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))", "var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;"),
        numeric.T.prototype.conj = numeric.Tunop("return new numeric.T(x.x);", "return new numeric.T(x.x,numeric.neg(x.y));"),
        numeric.T.prototype.neg = numeric.Tunop("return new numeric.T(neg(x.x));", "return new numeric.T(neg(x.x),neg(x.y));", "var neg = numeric.neg;"),
        numeric.T.prototype.sin = numeric.Tunop("return new numeric.T(numeric.sin(x.x))", "return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));"),
        numeric.T.prototype.cos = numeric.Tunop("return new numeric.T(numeric.cos(x.x))", "return x.exp().add(x.neg().exp()).div(2);"),
        numeric.T.prototype.abs = numeric.Tunop("return new numeric.T(numeric.abs(x.x));", "return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));", "var mul = numeric.mul;"),
        numeric.T.prototype.log = numeric.Tunop("return new numeric.T(numeric.log(x.x));", "var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);"),
        numeric.T.prototype.norm2 = numeric.Tunop("return numeric.norm2(x.x);", "var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));"),
        numeric.T.prototype.inv = function() {
            var e = this;
            if (void 0 === e.y) return new numeric.T(numeric.inv(e.x));
            var t, n, i, r, o, a, s, u, c, l, d, f, h, v, m, p, g, x, _ = e.x.length,
            y = numeric.identity(_),
            w = numeric.rep([_, _], 0),
            b = numeric.clone(e.x),
            S = numeric.clone(e.y);
            for (c = 0; c < _; c++) {
                for (f = (v = b[c][c]) * v + (m = S[c][c]) * m, d = c, l = c + 1; l < _; l++)(h = (v = b[l][c]) * v + (m = S[l][c]) * m) > f && (d = l, f = h);
                for (d !== c && (x = b[c], b[c] = b[d], b[d] = x, x = S[c], S[c] = S[d], S[d] = x, x = y[c], y[c] = y[d], y[d] = x, x = w[c], w[c] = w[d], w[d] = x), t = b[c], n = S[c], o = y[c], a = w[c], v = t[c], m = n[c], l = c + 1; l < _; l++) p = t[l],
                g = n[l],
                t[l] = (p * v + g * m) / f,
                n[l] = (g * v - p * m) / f;
                for (l = 0; l < _; l++) p = o[l],
                g = a[l],
                o[l] = (p * v + g * m) / f,
                a[l] = (g * v - p * m) / f;
                for (l = c + 1; l < _; l++) {
                    for (i = b[l], r = S[l], s = y[l], u = w[l], v = i[c], m = r[c], d = c + 1; d < _; d++) p = t[d],
                    g = n[d],
                    i[d] -= p * v - g * m,
                    r[d] -= g * v + p * m;
                    for (d = 0; d < _; d++) p = o[d],
                    g = a[d],
                    s[d] -= p * v - g * m,
                    u[d] -= g * v + p * m
                }
            }
            for (c = _ - 1; c > 0; c--) for (o = y[c], a = w[c], l = c - 1; l >= 0; l--) for (s = y[l], u = w[l], v = b[l][c], m = S[l][c], d = _ - 1; d >= 0; d--) p = o[d],
            g = a[d],
            s[d] -= v * p - m * g,
            u[d] -= v * g + m * p;
            return new numeric.T(y, w)
        },
        numeric.T.prototype.get = function(e) {
            var t, n = this.x,
            i = this.y,
            r = 0,
            o = e.length;
            if (i) {
                for (; r < o;) n = n[t = e[r]],
                i = i[t],
                r++;
                return new numeric.T(n, i)
            }
            for (; r < o;) n = n[t = e[r]],
            r++;
            return new numeric.T(n)
        },
        numeric.T.prototype.set = function(e, t) {
            var n, i = this.x,
            r = this.y,
            o = 0,
            a = e.length,
            s = t.x,
            u = t.y;
            if (0 === a) return u ? this.y = u: r && (this.y = void 0),
            this.x = i,
            this;
            if (u) {
                for (r || (r = numeric.rep(numeric.dim(i), 0), this.y = r); o < a - 1;) i = i[n = e[o]],
                r = r[n],
                o++;
                return i[n = e[o]] = s,
                r[n] = u,
                this
            }
            if (r) {
                for (; o < a - 1;) i = i[n = e[o]],
                r = r[n],
                o++;
                return i[n = e[o]] = s,
                s instanceof Array ? r[n] = numeric.rep(numeric.dim(s), 0) : r[n] = 0,
                this
            }
            for (; o < a - 1;) i = i[n = e[o]],
            o++;
            return i[n = e[o]] = s,
            this
        },
        numeric.T.prototype.getRows = function(e, t) {
            var n, i, r = t - e + 1,
            o = Array(r),
            a = this.x,
            s = this.y;
            for (n = e; n <= t; n++) o[n - e] = a[n];
            if (s) {
                for (i = Array(r), n = e; n <= t; n++) i[n - e] = s[n];
                return new numeric.T(o, i)
            }
            return new numeric.T(o)
        },
        numeric.T.prototype.setRows = function(e, t, n) {
            var i, r = this.x,
            o = this.y,
            a = n.x,
            s = n.y;
            for (i = e; i <= t; i++) r[i] = a[i - e];
            if (s) for (o || (o = numeric.rep(numeric.dim(r), 0), this.y = o), i = e; i <= t; i++) o[i] = s[i - e];
            else if (o) for (i = e; i <= t; i++) o[i] = numeric.rep([a[i - e].length], 0);
            return this
        },
        numeric.T.prototype.getRow = function(e) {
            var t = this.x,
            n = this.y;
            return n ? new numeric.T(t[e], n[e]) : new numeric.T(t[e])
        },
        numeric.T.prototype.setRow = function(e, t) {
            var n = this.x,
            i = this.y,
            r = t.x,
            o = t.y;
            return n[e] = r,
            o ? (i || (i = numeric.rep(numeric.dim(n), 0), this.y = i), i[e] = o) : i && (i = numeric.rep([r.length], 0)),
            this
        },
        numeric.T.prototype.getBlock = function(e, t) {
            var n = this.x,
            i = this.y,
            r = numeric.getBlock;
            return i ? new numeric.T(r(n, e, t), r(i, e, t)) : new numeric.T(r(n, e, t))
        },
        numeric.T.prototype.setBlock = function(e, t, n) {
            n instanceof numeric.T || (n = new numeric.T(n));
            var i = this.x,
            r = this.y,
            o = numeric.setBlock,
            a = n.x,
            s = n.y;
            if (s) return r || (this.y = numeric.rep(numeric.dim(this), 0), r = this.y),
            o(i, e, t, a),
            o(r, e, t, s),
            this;
            o(i, e, t, a),
            r && o(r, e, t, numeric.rep(numeric.dim(a), 0))
        },
        numeric.T.rep = function(e, t) {
            var n = numeric.T;
            t instanceof n || (t = new n(t));
            var i = t.x,
            r = t.y,
            o = numeric.rep;
            return r ? new n(o(e, i), o(e, r)) : new n(o(e, i))
        },
        numeric.T.diag = function(e) {
            e instanceof numeric.T || (e = new numeric.T(e));
            var t = e.x,
            n = e.y,
            i = numeric.diag;
            return n ? new numeric.T(i(t), i(n)) : new numeric.T(i(t))
        },
        numeric.T.eig = function() {
            if (this.y) throw new Error("eig: not implemented for complex matrices.");
            return numeric.eig(this.x)
        },
        numeric.T.identity = function(e) {
            return new numeric.T(numeric.identity(e))
        },
        numeric.T.prototype.getDiag = function() {
            var e = numeric,
            t = this.x,
            n = this.y;
            return n ? new e.T(e.getDiag(t), e.getDiag(n)) : new e.T(e.getDiag(t))
        },
        numeric.house = function(e) {
            var t = numeric.clone(e),
            n = (e[0] >= 0 ? 1 : -1) * numeric.norm2(e);
            t[0] += n;
            var i = numeric.norm2(t);
            if (0 === i) throw new Error("eig: internal error");
            return numeric.div(t, i)
        },
        numeric.toUpperHessenberg = function(e) {
            var t = numeric.dim(e);
            if (2 !== t.length || t[0] !== t[1]) throw new Error("numeric: toUpperHessenberg() only works on square matrices");
            var n, i, r, o, a, s, u, c, l, d, f = t[0],
            h = numeric.clone(e),
            v = numeric.identity(f);
            for (i = 0; i < f - 2; i++) {
                for (o = Array(f - i - 1), n = i + 1; n < f; n++) o[n - i - 1] = h[n][i];
                if (numeric.norm2(o) > 0) {
                    for (a = numeric.house(o), s = numeric.getBlock(h, [i + 1, i], [f - 1, f - 1]), u = numeric.tensor(a, numeric.dot(a, s)), n = i + 1; n < f; n++) for (c = h[n], l = u[n - i - 1], r = i; r < f; r++) c[r] -= 2 * l[r - i];
                    for (s = numeric.getBlock(h, [0, i + 1], [f - 1, f - 1]), u = numeric.tensor(numeric.dot(s, a), a), n = 0; n < f; n++) for (c = h[n], l = u[n], r = i + 1; r < f; r++) c[r] -= 2 * l[r - i - 1];
                    for (s = Array(f - i - 1), n = i + 1; n < f; n++) s[n - i - 1] = v[n];
                    for (u = numeric.tensor(a, numeric.dot(a, s)), n = i + 1; n < f; n++) for (d = v[n], l = u[n - i - 1], r = 0; r < f; r++) d[r] -= 2 * l[r]
                }
            }
            return {
                H: h,
                Q: v
            }
        },
        numeric.epsilon = 2.220446049250313e-16,
        numeric.QRFrancis = function(e, t) {
            void 0 === t && (t = 1e4),
            e = numeric.clone(e);
            numeric.clone(e);
            var n, i, r, o, a, s, u, c, l, d, f, h, v, m, p, g, x, _, y = numeric.dim(e)[0],
            w = numeric.identity(y);
            if (y < 3) return {
                Q: w,
                B: [[0, y - 1]]
            };
            var b = numeric.epsilon;
            for (_ = 0; _ < t; _++) {
                for (g = 0; g < y - 1; g++) if (Math.abs(e[g + 1][g]) < b * (Math.abs(e[g][g]) + Math.abs(e[g + 1][g + 1]))) {
                    var S = numeric.QRFrancis(numeric.getBlock(e, [0, 0], [g, g]), t),
                    T = numeric.QRFrancis(numeric.getBlock(e, [g + 1, g + 1], [y - 1, y - 1]), t);
                    for (h = Array(g + 1), p = 0; p <= g; p++) h[p] = w[p];
                    for (v = numeric.dot(S.Q, h), p = 0; p <= g; p++) w[p] = v[p];
                    for (h = Array(y - g - 1), p = g + 1; p < y; p++) h[p - g - 1] = w[p];
                    for (v = numeric.dot(T.Q, h), p = g + 1; p < y; p++) w[p] = v[p - g - 1];
                    return {
                        Q: w,
                        B: S.B.concat(numeric.add(T.B, g + 1))
                    }
                }
                var M, P, R;
                if (r = e[y - 2][y - 2], o = e[y - 2][y - 1], a = e[y - 1][y - 2], c = r + (s = e[y - 1][y - 1]), u = r * s - o * a, l = numeric.getBlock(e, [0, 0], [2, 2]), c * c >= 4 * u) M = .5 * (c + Math.sqrt(c * c - 4 * u)),
                P = .5 * (c - Math.sqrt(c * c - 4 * u)),
                l = numeric.add(numeric.sub(numeric.dot(l, l), numeric.mul(l, M + P)), numeric.diag(numeric.rep([3], M * P)));
                else l = numeric.add(numeric.sub(numeric.dot(l, l), numeric.mul(l, c)), numeric.diag(numeric.rep([3], u)));
                for (n = [l[0][0], l[1][0], l[2][0]], i = numeric.house(n), h = [e[0], e[1], e[2]], v = numeric.tensor(i, numeric.dot(i, h)), p = 0; p < 3; p++) for (f = e[p], m = v[p], x = 0; x < y; x++) f[x] -= 2 * m[x];
                for (h = numeric.getBlock(e, [0, 0], [y - 1, 2]), v = numeric.tensor(numeric.dot(h, i), i), p = 0; p < y; p++) for (f = e[p], m = v[p], x = 0; x < 3; x++) f[x] -= 2 * m[x];
                for (h = [w[0], w[1], w[2]], v = numeric.tensor(i, numeric.dot(i, h)), p = 0; p < 3; p++) for (d = w[p], m = v[p], x = 0; x < y; x++) d[x] -= 2 * m[x];
                for (g = 0; g < y - 2; g++) {
                    for (x = g; x <= g + 1; x++) if (Math.abs(e[x + 1][x]) < b * (Math.abs(e[x][x]) + Math.abs(e[x + 1][x + 1]))) {
                        S = numeric.QRFrancis(numeric.getBlock(e, [0, 0], [x, x]), t),
                        T = numeric.QRFrancis(numeric.getBlock(e, [x + 1, x + 1], [y - 1, y - 1]), t);
                        for (h = Array(x + 1), p = 0; p <= x; p++) h[p] = w[p];
                        for (v = numeric.dot(S.Q, h), p = 0; p <= x; p++) w[p] = v[p];
                        for (h = Array(y - x - 1), p = x + 1; p < y; p++) h[p - x - 1] = w[p];
                        for (v = numeric.dot(T.Q, h), p = x + 1; p < y; p++) w[p] = v[p - x - 1];
                        return {
                            Q: w,
                            B: S.B.concat(numeric.add(T.B, x + 1))
                        }
                    }
                    for (R = Math.min(y - 1, g + 3), n = Array(R - g), p = g + 1; p <= R; p++) n[p - g - 1] = e[p][g];
                    for (i = numeric.house(n), h = numeric.getBlock(e, [g + 1, g], [R, y - 1]), v = numeric.tensor(i, numeric.dot(i, h)), p = g + 1; p <= R; p++) for (f = e[p], m = v[p - g - 1], x = g; x < y; x++) f[x] -= 2 * m[x - g];
                    for (h = numeric.getBlock(e, [0, g + 1], [y - 1, R]), v = numeric.tensor(numeric.dot(h, i), i), p = 0; p < y; p++) for (f = e[p], m = v[p], x = g + 1; x <= R; x++) f[x] -= 2 * m[x - g - 1];
                    for (h = Array(R - g), p = g + 1; p <= R; p++) h[p - g - 1] = w[p];
                    for (v = numeric.tensor(i, numeric.dot(i, h)), p = g + 1; p <= R; p++) for (d = w[p], m = v[p - g - 1], x = 0; x < y; x++) d[x] -= 2 * m[x]
                }
            }
            throw new Error("numeric: eigenvalue iteration does not converge -- increase maxiter?")
        },
        numeric.eig = function(e, t) {
            var n, i, r, o, a, s, u, c, l, d, f, h, v, m, p, g, x = numeric.toUpperHessenberg(e),
            _ = numeric.QRFrancis(x.H, t),
            y = numeric.T,
            w = e.length,
            b = _.B,
            S = numeric.dot(_.Q, numeric.dot(x.H, numeric.transpose(_.Q))),
            T = new y(numeric.dot(_.Q, x.Q)),
            M = b.length,
            P = Math.sqrt;
            for (i = 0; i < M; i++) if ((n = b[i][0]) === b[i][1]);
            else {
                if (o = n + 1, a = S[n][n], s = S[n][o], u = S[o][n], c = S[o][o], 0 === s && 0 === u) continue; (d = (l = -a - c) * l - 4 * (a * c - s * u)) >= 0 ? ((p = (a - (f = l < 0 ? -.5 * (l - P(d)) : -.5 * (l + P(d)))) * (a - f) + s * s) > (g = u * u + (c - f) * (c - f)) ? (v = (a - f) / (p = P(p)), m = s / p) : (v = u / (g = P(g)), m = (c - f) / g), r = new y([[m, -v], [v, m]]), T.setRows(n, o, r.dot(T.getRows(n, o)))) : (f = -.5 * l, h = .5 * P( - d), (p = (a - f) * (a - f) + s * s) > (g = u * u + (c - f) * (c - f)) ? (v = (a - f) / (p = P(p + h * h)), m = s / p, f = 0, h /= p) : (v = u / (g = P(g + h * h)), m = (c - f) / g, f = h / g, h = 0), r = new y([[m, -v], [v, m]], [[f, h], [h, -f]]), T.setRows(n, o, r.dot(T.getRows(n, o))))
            }
            var R = T.dot(e).dot(T.transjugate()),
            C = (w = e.length, numeric.T.identity(w));
            for (o = 0; o < w; o++) if (o > 0) for (i = o - 1; i >= 0; i--) {
                var I = R.get([i, i]),
                A = R.get([o, o]);
                numeric.neq(I.x, A.x) || numeric.neq(I.y, A.y) ? (f = R.getRow(i).getBlock([i], [o - 1]), h = C.getRow(o).getBlock([i], [o - 1]), C.set([o, i], R.get([i, o]).neg().sub(f.dot(h)).div(I.sub(A)))) : C.setRow(o, C.getRow(i))
            }
            for (o = 0; o < w; o++) f = C.getRow(o),
            C.setRow(o, f.div(f.norm2()));
            return C = C.transpose(),
            C = T.transjugate().dot(C),
            {
                lambda: R.getDiag(),
                E: C
            }
        },
        numeric.ccsSparse = function(e) {
            var t, n, i, r = e.length,
            o = [];
            for (n = r - 1; - 1 !== n; --n) for (i in t = e[n]) {
                for (i = parseInt(i); i >= o.length;) o[o.length] = 0;
                0 !== t[i] && o[i]++
            }
            var a = o.length,
            s = Array(a + 1);
            for (s[0] = 0, n = 0; n < a; ++n) s[n + 1] = s[n] + o[n];
            var u = Array(s[a]),
            c = Array(s[a]);
            for (n = r - 1; - 1 !== n; --n) for (i in t = e[n]) 0 !== t[i] && (o[i]--, u[s[i] + o[i]] = n, c[s[i] + o[i]] = t[i]);
            return [s, u, c]
        },
        numeric.ccsFull = function(e) {
            var t, n, i, r, o = e[0],
            a = e[1],
            s = e[2],
            u = numeric.ccsDim(e),
            c = u[0],
            l = u[1],
            d = numeric.rep([c, l], 0);
            for (t = 0; t < l; t++) for (i = o[t], r = o[t + 1], n = i; n < r; ++n) d[a[n]][t] = s[n];
            return d
        },
        numeric.ccsTSolve = function(e, t, n, i, r) {
            var o, a, s, u, c, l, d, f = e[0],
            h = e[1],
            v = e[2],
            m = f.length - 1,
            p = Math.max,
            g = 0;
            function x(e) {
                var t;
                if (0 === n[e]) {
                    for (n[e] = 1, t = f[e]; t < f[e + 1]; ++t) x(h[t]);
                    r[g] = e,
                    ++g
                }
            }
            for (void 0 === i && (n = numeric.rep([m], 0)), void 0 === i && (i = numeric.linspace(0, n.length - 1)), void 0 === r && (r = []), o = i.length - 1; - 1 !== o; --o) x(i[o]);
            for (r.length = g, o = r.length - 1; - 1 !== o; --o) n[r[o]] = 0;
            for (o = i.length - 1; - 1 !== o; --o) a = i[o],
            n[a] = t[a];
            for (o = r.length - 1; - 1 !== o; --o) {
                for (a = r[o], s = f[a], u = p(f[a + 1], s), c = s; c !== u; ++c) if (h[c] === a) {
                    n[a] /= v[c];
                    break
                }
                for (d = n[a], c = s; c !== u; ++c)(l = h[c]) !== a && (n[l] -= d * v[c])
            }
            return n
        },
        numeric.ccsDFS = function(e) {
            this.k = Array(e),
            this.k1 = Array(e),
            this.j = Array(e)
        },
        numeric.ccsDFS.prototype.dfs = function(e, t, n, i, r, o) {
            var a, s, u, c = 0,
            l = r.length,
            d = this.k,
            f = this.k1,
            h = this.j;
            if (0 === i[e]) for (i[e] = 1, h[0] = e, d[0] = s = t[e], f[0] = u = t[e + 1];;) if (s >= u) {
                if (r[l] = h[c], 0 === c) return; ++l,
                s = d[--c],
                u = f[c]
            } else 0 === i[a = o[n[s]]] ? (i[a] = 1, d[c] = s, h[++c] = a, s = t[a], f[c] = u = t[a + 1]) : ++s
        },
        numeric.ccsLPSolve = function(e, t, n, i, r, o, a) {
            var s, u, c, l, d, f, h, v, m, p = e[0],
            g = e[1],
            x = e[2],
            _ = (p.length, t[0]),
            y = t[1],
            w = t[2];
            for (u = _[r], c = _[r + 1], i.length = 0, s = u; s < c; ++s) a.dfs(o[y[s]], p, g, n, i, o);
            for (s = i.length - 1; - 1 !== s; --s) n[i[s]] = 0;
            for (s = u; s !== c; ++s) n[l = o[y[s]]] = w[s];
            for (s = i.length - 1; - 1 !== s; --s) {
                for (d = p[l = i[s]], f = p[l + 1], h = d; h < f; ++h) if (o[g[h]] === l) {
                    n[l] /= x[h];
                    break
                }
                for (m = n[l], h = d; h < f; ++h)(v = o[g[h]]) !== l && (n[v] -= m * x[h])
            }
            return n
        },
        numeric.ccsLUP1 = function(e, t) {
            var n, i, r, o, a, s, u, c = e[0].length - 1,
            l = [numeric.rep([c + 1], 0), [], []],
            d = [numeric.rep([c + 1], 0), [], []],
            f = l[0],
            h = l[1],
            v = l[2],
            m = d[0],
            p = d[1],
            g = d[2],
            x = numeric.rep([c], 0),
            _ = numeric.rep([c], 0),
            y = numeric.ccsLPSolve,
            w = (Math.max, Math.abs),
            b = numeric.linspace(0, c - 1),
            S = numeric.linspace(0, c - 1),
            T = new numeric.ccsDFS(c);
            for (void 0 === t && (t = 1), n = 0; n < c; ++n) {
                for (y(l, e, x, _, n, S, T), o = -1, a = -1, i = _.length - 1; - 1 !== i; --i)(r = _[i]) <= n || (s = w(x[r])) > o && (a = r, o = s);
                for (w(x[n]) < t * o && (i = b[n], o = b[a], b[n] = o, S[o] = n, b[a] = i, S[i] = a, o = x[n], x[n] = x[a], x[a] = o), o = f[n], a = m[n], u = x[n], h[o] = b[n], v[o] = 1, ++o, i = _.length - 1; - 1 !== i; --i) s = x[r = _[i]],
                _[i] = 0,
                x[r] = 0,
                r <= n ? (p[a] = r, g[a] = s, ++a) : (h[o] = b[r], v[o] = s / u, ++o);
                f[n + 1] = o,
                m[n + 1] = a
            }
            for (i = h.length - 1; - 1 !== i; --i) h[i] = S[h[i]];
            return {
                L: l,
                U: d,
                P: b,
                Pinv: S
            }
        },
        numeric.ccsDFS0 = function(e) {
            this.k = Array(e),
            this.k1 = Array(e),
            this.j = Array(e)
        },
        numeric.ccsDFS0.prototype.dfs = function(e, t, n, i, r, o, a) {
            var s, u, c, l = 0,
            d = r.length,
            f = this.k,
            h = this.k1,
            v = this.j;
            if (0 === i[e]) for (i[e] = 1, v[0] = e, f[0] = u = t[o[e]], h[0] = c = t[o[e] + 1];;) {
                if (isNaN(u)) throw new Error("Ow!");
                if (u >= c) {
                    if (r[d] = o[v[l]], 0 === l) return; ++d,
                    u = f[--l],
                    c = h[l]
                } else 0 === i[s = n[u]] ? (i[s] = 1, f[l] = u, v[++l] = s, u = t[s = o[s]], h[l] = c = t[s + 1]) : ++u
            }
        },
        numeric.ccsLPSolve0 = function(e, t, n, i, r, o, a, s) {
            var u, c, l, d, f, h, v, m, p, g = e[0],
            x = e[1],
            _ = e[2],
            y = (g.length, t[0]),
            w = t[1],
            b = t[2];
            for (c = y[r], l = y[r + 1], i.length = 0, u = c; u < l; ++u) s.dfs(w[u], g, x, n, i, o, a);
            for (u = i.length - 1; - 1 !== u; --u) n[a[d = i[u]]] = 0;
            for (u = c; u !== l; ++u) n[d = w[u]] = b[u];
            for (u = i.length - 1; - 1 !== u; --u) {
                for (m = a[d = i[u]], f = g[d], h = g[d + 1], v = f; v < h; ++v) if (x[v] === m) {
                    n[m] /= _[v];
                    break
                }
                for (p = n[m], v = f; v < h; ++v) n[x[v]] -= p * _[v];
                n[m] = p
            }
        },
        numeric.ccsLUP0 = function(e, t) {
            var n, i, r, o, a, s, u, c = e[0].length - 1,
            l = [numeric.rep([c + 1], 0), [], []],
            d = [numeric.rep([c + 1], 0), [], []],
            f = l[0],
            h = l[1],
            v = l[2],
            m = d[0],
            p = d[1],
            g = d[2],
            x = numeric.rep([c], 0),
            _ = numeric.rep([c], 0),
            y = numeric.ccsLPSolve0,
            w = (Math.max, Math.abs),
            b = numeric.linspace(0, c - 1),
            S = numeric.linspace(0, c - 1),
            T = new numeric.ccsDFS0(c);
            for (void 0 === t && (t = 1), n = 0; n < c; ++n) {
                for (y(l, e, x, _, n, S, b, T), o = -1, a = -1, i = _.length - 1; - 1 !== i; --i)(r = _[i]) <= n || (s = w(x[b[r]])) > o && (a = r, o = s);
                for (w(x[b[n]]) < t * o && (i = b[n], o = b[a], b[n] = o, S[o] = n, b[a] = i, S[i] = a), o = f[n], a = m[n], u = x[b[n]], h[o] = b[n], v[o] = 1, ++o, i = _.length - 1; - 1 !== i; --i) s = x[b[r = _[i]]],
                _[i] = 0,
                x[b[r]] = 0,
                r <= n ? (p[a] = r, g[a] = s, ++a) : (h[o] = b[r], v[o] = s / u, ++o);
                f[n + 1] = o,
                m[n + 1] = a
            }
            for (i = h.length - 1; - 1 !== i; --i) h[i] = S[h[i]];
            return {
                L: l,
                U: d,
                P: b,
                Pinv: S
            }
        },
        numeric.ccsLUP = numeric.ccsLUP0,
        numeric.ccsDim = function(e) {
            return [numeric.sup(e[1]) + 1, e[0].length - 1]
        },
        numeric.ccsGetBlock = function(e, t, n) {
            var i = numeric.ccsDim(e),
            r = i[0],
            o = i[1];
            void 0 === t ? t = numeric.linspace(0, r - 1) : "number" == typeof t && (t = [t]),
            void 0 === n ? n = numeric.linspace(0, o - 1) : "number" == typeof n && (n = [n]);
            var a, s, u, c, l = t.length,
            d = n.length,
            f = numeric.rep([o], 0),
            h = [],
            v = [],
            m = [f, h, v],
            p = e[0],
            g = e[1],
            x = e[2],
            _ = numeric.rep([r], 0),
            y = 0,
            w = numeric.rep([r], 0);
            for (s = 0; s < d; ++s) {
                var b = p[c = n[s]],
                S = p[c + 1];
                for (a = b; a < S; ++a) w[u = g[a]] = 1,
                _[u] = x[a];
                for (a = 0; a < l; ++a) w[t[a]] && (h[y] = a, v[y] = _[t[a]], ++y);
                for (a = b; a < S; ++a) w[u = g[a]] = 0;
                f[s + 1] = y
            }
            return m
        },
        numeric.ccsDot = function(e, t) {
            var n, i, r, o, a, s, u, c, l, d, f, h = e[0],
            v = e[1],
            m = e[2],
            p = t[0],
            g = t[1],
            x = t[2],
            _ = numeric.ccsDim(e),
            y = numeric.ccsDim(t),
            w = _[0],
            b = (_[1], y[1]),
            S = numeric.rep([w], 0),
            T = numeric.rep([w], 0),
            M = Array(w),
            P = numeric.rep([b], 0),
            R = [],
            C = [],
            I = [P, R, C];
            for (r = 0; r !== b; ++r) {
                for (o = p[r], a = p[r + 1], l = 0, i = o; i < a; ++i) for (d = g[i], f = x[i], s = h[d], u = h[d + 1], n = s; n < u; ++n) 0 === T[c = v[n]] && (M[l] = c, T[c] = 1, l += 1),
                S[c] = S[c] + m[n] * f;
                for (a = (o = P[r]) + l, P[r + 1] = a, i = l - 1; - 1 !== i; --i) f = o + i,
                n = M[i],
                R[f] = n,
                C[f] = S[n],
                T[n] = 0,
                S[n] = 0;
                P[r + 1] = P[r] + l
            }
            return I
        },
        numeric.ccsLUPSolve = function(e, t) {
            var n = e.L,
            i = e.U,
            r = (e.P, t[0]),
            o = !1;
            "object" !== (void 0 === r ? "undefined": _typeof(r)) && (r = (t = [[0, t.length], numeric.linspace(0, t.length - 1), t])[0], o = !0);
            var a, s, u, c, l, d, f = t[1],
            h = t[2],
            v = n[0].length - 1,
            m = r.length - 1,
            p = numeric.rep([v], 0),
            g = Array(v),
            x = numeric.rep([v], 0),
            _ = Array(v),
            y = numeric.rep([m + 1], 0),
            w = [],
            b = [],
            S = numeric.ccsTSolve,
            T = 0;
            for (a = 0; a < m; ++a) {
                for (l = 0, u = r[a], c = r[a + 1], s = u; s < c; ++s) d = e.Pinv[f[s]],
                _[l] = d,
                x[d] = h[s],
                ++l;
                for (_.length = l, S(n, x, p, _, g), s = _.length - 1; - 1 !== s; --s) x[_[s]] = 0;
                if (S(i, p, x, g, _), o) return x;
                for (s = g.length - 1; - 1 !== s; --s) p[g[s]] = 0;
                for (s = _.length - 1; - 1 !== s; --s) d = _[s],
                w[T] = d,
                b[T] = x[d],
                x[d] = 0,
                ++T;
                y[a + 1] = T
            }
            return [y, w, b]
        },
        numeric.ccsbinop = function(e, t) {
            return void 0 === t && (t = ""),
            Function("X", "Y", "var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n" + t + "for(i=0;i<n;++i) {\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Xj[j];\n    x[k] = 1;\n    Zj[p] = k;\n    ++p;\n  }\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Yj[j];\n    y[k] = Yv[j];\n    if(x[k] === 0) {\n      Zj[p] = k;\n      ++p;\n    }\n  }\n  Zi[i+1] = p;\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n  j0 = Zi[i]; j1 = Zi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Zj[j];\n    xk = x[k];\n    yk = y[k];\n" + e + "\n    Zv[j] = zk;\n  }\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n}\nreturn [Zi,Zj,Zv];")
        },
        function() {
            var k, A, B, C;
            for (k in numeric.ops2) A = isFinite(eval("1" + numeric.ops2[k] + "0")) ? "[Y[0],Y[1],numeric." + k + "(X,Y[2])]": "NaN",
            B = isFinite(eval("0" + numeric.ops2[k] + "1")) ? "[X[0],X[1],numeric." + k + "(X[2],Y)]": "NaN",
            C = isFinite(eval("1" + numeric.ops2[k] + "0")) && isFinite(eval("0" + numeric.ops2[k] + "1")) ? "numeric.ccs" + k + "MM(X,Y)": "NaN",
            numeric["ccs" + k + "MM"] = numeric.ccsbinop("zk = xk " + numeric.ops2[k] + "yk;"),
            numeric["ccs" + k] = Function("X", "Y", 'if(typeof X === "number") return ' + A + ';\nif(typeof Y === "number") return ' + B + ";\nreturn " + C + ";\n")
        } (),
        numeric.ccsScatter = function(e) {
            var t, n = e[0],
            i = e[1],
            r = e[2],
            o = numeric.sup(i) + 1,
            a = n.length,
            s = numeric.rep([o], 0),
            u = Array(a),
            c = Array(a),
            l = numeric.rep([o], 0);
            for (t = 0; t < a; ++t) l[i[t]]++;
            for (t = 0; t < o; ++t) s[t + 1] = s[t] + l[t];
            var d, f, h = s.slice(0);
            for (t = 0; t < a; ++t) u[d = h[f = i[t]]] = n[t],
            c[d] = r[t],
            h[f] = h[f] + 1;
            return [s, u, c]
        },
        numeric.ccsGather = function(e) {
            var t, n, i, r, o, a = e[0],
            s = e[1],
            u = e[2],
            c = a.length - 1,
            l = s.length,
            d = Array(l),
            f = Array(l),
            h = Array(l);
            for (o = 0, t = 0; t < c; ++t) for (i = a[t], r = a[t + 1], n = i; n !== r; ++n) f[o] = t,
            d[o] = s[n],
            h[o] = u[n],
            ++o;
            return [d, f, h]
        },
        numeric.sdim = function e(t, n, i) {
            if (void 0 === n && (n = []), "object" !== (void 0 === t ? "undefined": _typeof(t))) return n;
            var r;
            for (r in void 0 === i && (i = 0), i in n || (n[i] = 0), t.length > n[i] && (n[i] = t.length), t) t.hasOwnProperty(r) && e(t[r], n, i + 1);
            return n
        },
        numeric.sclone = function e(t, n, i) {
            void 0 === n && (n = 0),
            void 0 === i && (i = numeric.sdim(t).length);
            var r, o = Array(t.length);
            if (n === i - 1) {
                for (r in t) t.hasOwnProperty(r) && (o[r] = t[r]);
                return o
            }
            for (r in t) t.hasOwnProperty(r) && (o[r] = e(t[r], n + 1, i));
            return o
        },
        numeric.sdiag = function(e) {
            var t, n, i = e.length,
            r = Array(i);
            for (t = i - 1; t >= 1; t -= 2) n = t - 1,
            r[t] = [],
            r[t][t] = e[t],
            r[n] = [],
            r[n][n] = e[n];
            return 0 === t && (r[0] = [], r[0][0] = e[t]),
            r
        },
        numeric.sidentity = function(e) {
            return numeric.sdiag(numeric.rep([e], 1))
        },
        numeric.stranspose = function(e) {
            var t, n, i, r = [];
            e.length;
            for (t in e) if (e.hasOwnProperty(t)) for (n in i = e[t]) i.hasOwnProperty(n) && ("object" !== _typeof(r[n]) && (r[n] = []), r[n][t] = i[n]);
            return r
        },
        numeric.sLUP = function(e, t) {
            throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.")
        },
        numeric.sdotMM = function(e, t) {
            var n, i, r, o, a, s, u, c = e.length,
            l = (t.length, numeric.stranspose(t)),
            d = l.length,
            f = Array(c);
            for (r = c - 1; r >= 0; r--) {
                for (u = [], n = e[r], a = d - 1; a >= 0; a--) {
                    for (o in s = 0, i = l[a], n) n.hasOwnProperty(o) && o in i && (s += n[o] * i[o]);
                    s && (u[a] = s)
                }
                f[r] = u
            }
            return f
        },
        numeric.sdotMV = function(e, t) {
            var n, i, r, o, a = e.length,
            s = Array(a);
            for (i = a - 1; i >= 0; i--) {
                for (r in o = 0, n = e[i]) n.hasOwnProperty(r) && t[r] && (o += n[r] * t[r]);
                o && (s[i] = o)
            }
            return s
        },
        numeric.sdotVM = function(e, t) {
            var n, i, r, o, a = [];
            for (n in e) if (e.hasOwnProperty(n)) for (i in r = t[n], o = e[n], r) r.hasOwnProperty(i) && (a[i] || (a[i] = 0), a[i] += o * r[i]);
            return a
        },
        numeric.sdotVV = function(e, t) {
            var n, i = 0;
            for (n in e) e[n] && t[n] && (i += e[n] * t[n]);
            return i
        },
        numeric.sdot = function(e, t) {
            var n = numeric.sdim(e).length,
            i = numeric.sdim(t).length;
            switch (1e3 * n + i) {
            case 0:
                return e * t;
            case 1001:
                return numeric.sdotVV(e, t);
            case 2001:
                return numeric.sdotMV(e, t);
            case 1002:
                return numeric.sdotVM(e, t);
            case 2002:
                return numeric.sdotMM(e, t);
            default:
                throw new Error("numeric.sdot not implemented for tensors of order " + n + " and " + i)
            }
        },
        numeric.sscatter = function(e) {
            var t, n, i, r, o = e[0].length,
            a = e.length,
            s = [];
            for (n = o - 1; n >= 0; --n) if (e[a - 1][n]) {
                for (r = s, i = 0; i < a - 2; i++) r[t = e[i][n]] || (r[t] = []),
                r = r[t];
                r[e[i][n]] = e[i + 1][n]
            }
            return s
        },
        numeric.sgather = function e(t, n, i) {
            var r, o, a;
            for (o in void 0 === n && (n = []), void 0 === i && (i = []), r = i.length, t) if (t.hasOwnProperty(o)) if (i[r] = parseInt(o), "number" == typeof(a = t[o])) {
                if (a) {
                    if (0 === n.length) for (o = r + 1; o >= 0; --o) n[o] = [];
                    for (o = r; o >= 0; --o) n[o].push(i[o]);
                    n[r + 1].push(a)
                }
            } else e(a, n, i);
            return i.length > r && i.pop(),
            n
        },
        numeric.cLU = function(e) {
            var t, n, i, r, o, a, s = e[0],
            u = e[1],
            c = e[2],
            l = s.length,
            d = 0;
            for (t = 0; t < l; t++) s[t] > d && (d = s[t]);
            d++;
            var f, h = Array(d),
            v = Array(d),
            m = numeric.rep([d], 1 / 0),
            p = numeric.rep([d], -1 / 0);
            for (i = 0; i < l; i++) t = s[i],
            (n = u[i]) < m[t] && (m[t] = n),
            n > p[t] && (p[t] = n);
            for (t = 0; t < d - 1; t++) p[t] > p[t + 1] && (p[t + 1] = p[t]);
            for (t = d - 1; t >= 1; t--) m[t] < m[t - 1] && (m[t - 1] = m[t]);
            for (t = 0; t < d; t++) v[t] = numeric.rep([p[t] - m[t] + 1], 0),
            h[t] = numeric.rep([t - m[t]], 0),
            t - m[t] + 1,
            p[t] - t + 1;
            for (i = 0; i < l; i++) v[t = s[i]][u[i] - m[t]] = c[i];
            for (t = 0; t < d - 1; t++) for (r = t - m[t], _ = v[t], n = t + 1; m[n] <= t && n < d; n++) if (o = t - m[n], a = p[t] - t, f = (y = v[n])[o] / _[r]) {
                for (i = 1; i <= a; i++) y[i + o] -= f * _[i + r];
                h[n][t - m[n]] = f
            }
            var g, x, _ = [],
            y = [],
            w = [],
            b = [],
            S = [],
            T = [];
            for (l = 0, g = 0, t = 0; t < d; t++) {
                for (r = m[t], o = p[t], x = v[t], n = t; n <= o; n++) x[n - r] && (_[l] = t, y[l] = n, w[l] = x[n - r], l++);
                for (x = h[t], n = r; n < t; n++) x[n - r] && (b[g] = t, S[g] = n, T[g] = x[n - r], g++);
                b[g] = t,
                S[g] = t,
                T[g] = 1,
                g++
            }
            return {
                U: [_, y, w],
                L: [b, S, T]
            }
        },
        numeric.cLUsolve = function(e, t) {
            var n, i, r = e.L,
            o = e.U,
            a = numeric.clone(t),
            s = r[0],
            u = r[1],
            c = r[2],
            l = o[0],
            d = o[1],
            f = o[2],
            h = l.length,
            v = (s.length, a.length);
            for (i = 0, n = 0; n < v; n++) {
                for (; u[i] < n;) a[n] -= c[i] * a[u[i]],
                i++;
                i++
            }
            for (i = h - 1, n = v - 1; n >= 0; n--) {
                for (; d[i] > n;) a[n] -= f[i] * a[d[i]],
                i--;
                a[n] /= f[i],
                i--
            }
            return a
        },
        numeric.cgrid = function(e, t) {
            "number" == typeof e && (e = [e, e]);
            var n, i, r, o = numeric.rep(e, -1);
            if ("function" != typeof t) switch (t) {
            case "L":
                t = function(t, n) {
                    return t >= e[0] / 2 || n < e[1] / 2
                };
                break;
            default:
                t = function(e, t) {
                    return ! 0
                }
            }
            for (r = 0, n = 1; n < e[0] - 1; n++) for (i = 1; i < e[1] - 1; i++) t(n, i) && (o[n][i] = r, r++);
            return o
        },
        numeric.cdelsq = function(e) {
            var t, n, i, r, o, a = [[ - 1, 0], [0, -1], [0, 1], [1, 0]],
            s = numeric.dim(e),
            u = s[0],
            c = s[1],
            l = [],
            d = [],
            f = [];
            for (t = 1; t < u - 1; t++) for (n = 1; n < c - 1; n++) if (! (e[t][n] < 0)) {
                for (i = 0; i < 4; i++) r = t + a[i][0],
                o = n + a[i][1],
                e[r][o] < 0 || (l.push(e[t][n]), d.push(e[r][o]), f.push( - 1));
                l.push(e[t][n]),
                d.push(e[t][n]),
                f.push(4)
            }
            return [l, d, f]
        },
        numeric.cdotMV = function(e, t) {
            var n, i, r, o = e[0],
            a = e[1],
            s = e[2],
            u = o.length;
            for (r = 0, i = 0; i < u; i++) o[i] > r && (r = o[i]);
            for (r++, n = numeric.rep([r], 0), i = 0; i < u; i++) n[o[i]] += s[i] * t[a[i]];
            return n
        },
        numeric.Spline = function(e, t, n, i, r) {
            this.x = e,
            this.yl = t,
            this.yr = n,
            this.kl = i,
            this.kr = r
        },
        numeric.Spline.prototype._at = function(e, t) {
            var n, i, r, o = this.x,
            a = this.yl,
            s = this.yr,
            u = this.kl,
            c = this.kr,
            l = numeric.add,
            d = numeric.sub,
            f = numeric.mul;
            n = d(f(u[t], o[t + 1] - o[t]), d(s[t + 1], a[t])),
            i = l(f(c[t + 1], o[t] - o[t + 1]), d(s[t + 1], a[t]));
            var h = (r = (e - o[t]) / (o[t + 1] - o[t])) * (1 - r);
            return l(l(l(f(1 - r, a[t]), f(r, s[t + 1])), f(n, h * (1 - r))), f(i, h * r))
        },
        numeric.Spline.prototype.at = function(e) {
            if ("number" == typeof e) {
                var t, n, i, r = this.x,
                o = r.length,
                a = Math.floor;
                for (t = 0, n = o - 1; n - t > 1;) r[i = a((t + n) / 2)] <= e ? t = i: n = i;
                return this._at(e, t)
            }
            o = e.length;
            var s, u = Array(o);
            for (s = o - 1; - 1 !== s; --s) u[s] = this.at(e[s]);
            return u
        },
        numeric.Spline.prototype.diff = function() {
            var e, t, n, i = this.x,
            r = this.yl,
            o = this.yr,
            a = this.kl,
            s = this.kr,
            u = r.length,
            c = a,
            l = s,
            d = Array(u),
            f = Array(u),
            h = numeric.add,
            v = numeric.mul,
            m = numeric.div,
            p = numeric.sub;
            for (e = u - 1; - 1 !== e; --e) t = i[e + 1] - i[e],
            n = p(o[e + 1], r[e]),
            d[e] = m(h(v(n, 6), v(a[e], -4 * t), v(s[e + 1], -2 * t)), t * t),
            f[e + 1] = m(h(v(n, -6), v(a[e], 2 * t), v(s[e + 1], 4 * t)), t * t);
            return new numeric.Spline(i, c, l, d, f)
        },
        numeric.Spline.prototype.roots = function() {
            function e(e) {
                return e * e
            }
            var t = [],
            n = this.x,
            i = this.yl,
            r = this.yr,
            o = this.kl,
            a = this.kr;
            "number" == typeof i[0] && (i = [i], r = [r], o = [o], a = [a]);
            var s, u, c, l, d, f, h, v, m, p, g, x, _, y, w, b, S, T, M, P, R, C, I, A = i.length,
            D = n.length - 1,
            L = (t = Array(A), Math.sqrt);
            for (s = 0; s !== A; ++s) {
                for (l = i[s], d = r[s], f = o[s], h = a[s], v = [], u = 0; u !== D; u++) {
                    for (u > 0 && d[u] * l[u] < 0 && v.push(n[u]), b = n[u + 1] - n[u], n[u], g = l[u], x = d[u + 1], m = f[u] / b, _ = (p = h[u + 1] / b) + 3 * g + 2 * m - 3 * x, y = 3 * (p + m + 2 * (g - x)), (w = e(m - p + 3 * (g - x)) + 12 * p * g) <= 0 ? S = (T = _ / y) > n[u] && T < n[u + 1] ? [n[u], T, n[u + 1]] : [n[u], n[u + 1]] : (T = (_ - L(w)) / y, M = (_ + L(w)) / y, S = [n[u]], T > n[u] && T < n[u + 1] && S.push(T), M > n[u] && M < n[u + 1] && S.push(M), S.push(n[u + 1])), R = S[0], T = this._at(R, u), c = 0; c < S.length - 1; c++) if (C = S[c + 1], M = this._at(C, u), 0 !== T) if (0 === M || T * M > 0) R = C,
                    T = M;
                    else {
                        for (var F = 0; ! ((I = (T * C - M * R) / (T - M)) <= R || I >= C);) if ((P = this._at(I, u)) * M > 0) C = I,
                        M = P,
                        -1 === F && (T *= .5),
                        F = -1;
                        else {
                            if (! (P * T > 0)) break;
                            R = I,
                            T = P,
                            1 === F && (M *= .5),
                            F = 1
                        }
                        v.push(I),
                        R = S[c + 1],
                        T = this._at(R, u)
                    } else v.push(R),
                    R = C,
                    T = M;
                    0 === M && v.push(C)
                }
                t[s] = v
            }
            return "number" == typeof this.yl[0] ? t[0] : t
        },
        numeric.spline = function(e, t, n, i) {
            var r, o = e.length,
            a = [],
            s = [],
            u = [],
            c = numeric.sub,
            l = numeric.mul,
            d = numeric.add;
            for (r = o - 2; r >= 0; r--) s[r] = e[r + 1] - e[r],
            u[r] = c(t[r + 1], t[r]);
            "string" != typeof n && "string" != typeof i || (n = i = "periodic");
            var f = [[], [], []];
            switch (void 0 === n ? "undefined": _typeof(n)) {
            case "undefined":
                a[0] = l(3 / (s[0] * s[0]), u[0]),
                f[0].push(0, 0),
                f[1].push(0, 1),
                f[2].push(2 / s[0], 1 / s[0]);
                break;
            case "string":
                a[0] = d(l(3 / (s[o - 2] * s[o - 2]), u[o - 2]), l(3 / (s[0] * s[0]), u[0])),
                f[0].push(0, 0, 0),
                f[1].push(o - 2, 0, 1),
                f[2].push(1 / s[o - 2], 2 / s[o - 2] + 2 / s[0], 1 / s[0]);
                break;
            default:
                a[0] = n,
                f[0].push(0),
                f[1].push(0),
                f[2].push(1)
            }
            for (r = 1; r < o - 1; r++) a[r] = d(l(3 / (s[r - 1] * s[r - 1]), u[r - 1]), l(3 / (s[r] * s[r]), u[r])),
            f[0].push(r, r, r),
            f[1].push(r - 1, r, r + 1),
            f[2].push(1 / s[r - 1], 2 / s[r - 1] + 2 / s[r], 1 / s[r]);
            switch (void 0 === i ? "undefined": _typeof(i)) {
            case "undefined":
                a[o - 1] = l(3 / (s[o - 2] * s[o - 2]), u[o - 2]),
                f[0].push(o - 1, o - 1),
                f[1].push(o - 2, o - 1),
                f[2].push(1 / s[o - 2], 2 / s[o - 2]);
                break;
            case "string":
                f[1][f[1].length - 1] = 0;
                break;
            default:
                a[o - 1] = i,
                f[0].push(o - 1),
                f[1].push(o - 1),
                f[2].push(1)
            }
            a = "number" != typeof a[0] ? numeric.transpose(a) : [a];
            var h = Array(a.length);
            if ("string" == typeof n) for (r = h.length - 1; - 1 !== r; --r) h[r] = numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(f)), a[r]),
            h[r][o - 1] = h[r][0];
            else for (r = h.length - 1; - 1 !== r; --r) h[r] = numeric.cLUsolve(numeric.cLU(f), a[r]);
            return h = "number" == typeof t[0] ? h[0] : numeric.transpose(h),
            new numeric.Spline(e, t, t, h, h)
        },
        numeric.fftpow2 = function e(t, n) {
            var i = t.length;
            if (1 !== i) {
                var r, o, a = Math.cos,
                s = Math.sin,
                u = Array(i / 2),
                c = Array(i / 2),
                l = Array(i / 2),
                d = Array(i / 2);
                for (o = i / 2, r = i - 1; - 1 !== r; --r) l[--o] = t[r],
                d[o] = n[r],
                --r,
                u[o] = t[r],
                c[o] = n[r];
                e(u, c),
                e(l, d),
                o = i / 2;
                var f, h, v, m = -6.283185307179586 / i;
                for (r = i - 1; - 1 !== r; --r) - 1 === --o && (o = i / 2 - 1),
                h = a(f = m * r),
                v = s(f),
                t[r] = u[o] + h * l[o] - v * d[o],
                n[r] = c[o] + h * d[o] + v * l[o]
            }
        },
        numeric._ifftpow2 = function e(t, n) {
            var i = t.length;
            if (1 !== i) {
                var r, o, a = Math.cos,
                s = Math.sin,
                u = Array(i / 2),
                c = Array(i / 2),
                l = Array(i / 2),
                d = Array(i / 2);
                for (o = i / 2, r = i - 1; - 1 !== r; --r) l[--o] = t[r],
                d[o] = n[r],
                --r,
                u[o] = t[r],
                c[o] = n[r];
                e(u, c),
                e(l, d),
                o = i / 2;
                var f, h, v, m = 6.283185307179586 / i;
                for (r = i - 1; - 1 !== r; --r) - 1 === --o && (o = i / 2 - 1),
                h = a(f = m * r),
                v = s(f),
                t[r] = u[o] + h * l[o] - v * d[o],
                n[r] = c[o] + h * d[o] + v * l[o]
            }
        },
        numeric.ifftpow2 = function(e, t) {
            numeric._ifftpow2(e, t),
            numeric.diveq(e, e.length),
            numeric.diveq(t, t.length)
        },
        numeric.convpow2 = function(e, t, n, i) {
            var r, o, a, s, u;
            for (numeric.fftpow2(e, t), numeric.fftpow2(n, i), r = e.length - 1; - 1 !== r; --r) o = e[r],
            s = t[r],
            a = n[r],
            u = i[r],
            e[r] = o * a - s * u,
            t[r] = o * u + s * a;
            numeric.ifftpow2(e, t)
        },
        numeric.T.prototype.fft = function() {
            var e, t, n = this.x,
            i = this.y,
            r = n.length,
            o = Math.log,
            a = o(2),
            s = Math.ceil(o(2 * r - 1) / a),
            u = Math.pow(2, s),
            c = numeric.rep([u], 0),
            l = numeric.rep([u], 0),
            d = Math.cos,
            f = Math.sin,
            h = -3.141592653589793 / r,
            v = numeric.rep([u], 0),
            m = numeric.rep([u], 0);
            Math.floor(r / 2);
            for (e = 0; e < r; e++) v[e] = n[e];
            if (void 0 !== i) for (e = 0; e < r; e++) m[e] = i[e];
            for (c[0] = 1, e = 1; e <= u / 2; e++) t = h * e * e,
            c[e] = d(t),
            l[e] = f(t),
            c[u - e] = d(t),
            l[u - e] = f(t);
            var p = new numeric.T(v, m),
            g = new numeric.T(c, l);
            return p = p.mul(g),
            numeric.convpow2(p.x, p.y, numeric.clone(g.x), numeric.neg(g.y)),
            (p = p.mul(g)).x.length = r,
            p.y.length = r,
            p
        },
        numeric.T.prototype.ifft = function() {
            var e, t, n = this.x,
            i = this.y,
            r = n.length,
            o = Math.log,
            a = o(2),
            s = Math.ceil(o(2 * r - 1) / a),
            u = Math.pow(2, s),
            c = numeric.rep([u], 0),
            l = numeric.rep([u], 0),
            d = Math.cos,
            f = Math.sin,
            h = 3.141592653589793 / r,
            v = numeric.rep([u], 0),
            m = numeric.rep([u], 0);
            Math.floor(r / 2);
            for (e = 0; e < r; e++) v[e] = n[e];
            if (void 0 !== i) for (e = 0; e < r; e++) m[e] = i[e];
            for (c[0] = 1, e = 1; e <= u / 2; e++) t = h * e * e,
            c[e] = d(t),
            l[e] = f(t),
            c[u - e] = d(t),
            l[u - e] = f(t);
            var p = new numeric.T(v, m),
            g = new numeric.T(c, l);
            return p = p.mul(g),
            numeric.convpow2(p.x, p.y, numeric.clone(g.x), numeric.neg(g.y)),
            (p = p.mul(g)).x.length = r,
            p.y.length = r,
            p.div(r)
        },
        numeric.gradient = function(e, t) {
            var n = t.length,
            i = e(t);
            if (isNaN(i)) throw new Error("gradient: f(x) is a NaN!");
            var r, o, a, s, u, c, l, d, f, h = Math.max,
            v = numeric.clone(t),
            m = Array(n),
            p = (numeric.div, numeric.sub, h = Math.max, Math.abs),
            g = Math.min,
            x = 0;
            for (r = 0; r < n; r++) for (var _ = h(1e-6 * i, 1e-8);;) {
                if (++x > 20) throw new Error("Numerical gradient fails");
                if (v[r] = t[r] + _, o = e(v), v[r] = t[r] - _, a = e(v), v[r] = t[r], isNaN(o) || isNaN(a)) _ /= 16;
                else {
                    if (m[r] = (o - a) / (2 * _), s = t[r] - _, u = t[r], c = t[r] + _, l = (o - i) / _, d = (i - a) / _, f = h(p(m[r]), p(i), p(o), p(a), p(s), p(u), p(c), 1e-8), !(g(h(p(l - m[r]), p(d - m[r]), p(l - d)) / f, _ / f) > .001)) break;
                    _ /= 16
                }
            }
            return m
        },
        numeric.uncmin = function(e, t, n, i, r, o, a) {
            var s = numeric.gradient;
            void 0 === a && (a = {}),
            void 0 === n && (n = 1e-8),
            void 0 === i && (i = function(t) {
                return s(e, t)
            }),
            void 0 === r && (r = 1e3);
            var u, c, l = (t = numeric.clone(t)).length,
            d = e(t);
            if (isNaN(d)) throw new Error("uncmin: f(x0) is a NaN!");
            var f = Math.max,
            h = numeric.norm2;
            n = f(n, numeric.epsilon);
            var v, m, p, g, x, _, y, w, b, S, T = a.Hinv || numeric.identity(l),
            M = numeric.dot,
            P = (numeric.inv, numeric.sub),
            R = numeric.add,
            C = numeric.tensor,
            I = numeric.div,
            A = numeric.mul,
            D = numeric.all,
            L = numeric.isFinite,
            F = numeric.neg,
            z = 0,
            E = "";
            for (m = i(t); z < r;) {
                if ("function" == typeof o && o(z, t, d, m, T)) {
                    E = "Callback returned true";
                    break
                }
                if (!D(L(m))) {
                    E = "Gradient has Infinity or NaN";
                    break
                }
                if (!D(L(v = F(M(T, m))))) {
                    E = "Search direction has Infinity or NaN";
                    break
                }
                if ((S = h(v)) < n) {
                    E = "Newton step smaller than tol";
                    break
                }
                for (b = 1, c = M(m, v), x = t; z < r && !(b * S < n) && (x = R(t, g = A(v, b)), (u = e(x)) - d >= .1 * b * c || isNaN(u));) b *= .5,
                ++z;
                if (b * S < n) {
                    E = "Line search step size smaller than tol";
                    break
                }
                if (z === r) {
                    E = "maxit reached during line search";
                    break
                }
                w = M(_ = P(p = i(x), m), g),
                y = M(T, _),
                T = P(R(T, A((w + M(_, y)) / (w * w), C(g, g))), I(R(C(y, g), C(g, y)), w)),
                t = x,
                d = u,
                m = p,
                ++z
            }
            return {
                solution: t,
                f: d,
                gradient: m,
                invHessian: T,
                iterations: z,
                message: E
            }
        },
        numeric.Dopri = function(e, t, n, i, r, o, a) {
            this.x = e,
            this.y = t,
            this.f = n,
            this.ymid = i,
            this.iterations = r,
            this.events = a,
            this.message = o
        },
        numeric.Dopri.prototype._at = function(e, t) {
            function n(e) {
                return e * e
            }
            var i, r, o, a, s, u, c, l, d, f = this.x,
            h = this.y,
            v = this.f,
            m = this.ymid,
            p = (f.length, Math.floor, numeric.add),
            g = numeric.mul,
            x = numeric.sub;
            return i = f[t],
            r = f[t + 1],
            a = h[t],
            s = h[t + 1],
            o = i + .5 * (r - i),
            u = m[t],
            c = x(v[t], g(a, 1 / (i - o) + 2 / (i - r))),
            l = x(v[t + 1], g(s, 1 / (r - o) + 2 / (r - i))),
            p(p(p(p(g(a, (d = [n(e - r) * (e - o) / n(i - r) / (i - o), n(e - i) * n(e - r) / n(i - o) / n(r - o), n(e - i) * (e - o) / n(r - i) / (r - o), (e - i) * n(e - r) * (e - o) / n(i - r) / (i - o), (e - r) * n(e - i) * (e - o) / n(i - r) / (r - o)])[0]), g(u, d[1])), g(s, d[2])), g(c, d[3])), g(l, d[4]))
        },
        numeric.Dopri.prototype.at = function(e) {
            var t, n, i, r = Math.floor;
            if ("number" != typeof e) {
                var o = e.length,
                a = Array(o);
                for (t = o - 1; - 1 !== t; --t) a[t] = this.at(e[t]);
                return a
            }
            var s = this.x;
            for (t = 0, n = s.length - 1; n - t > 1;) s[i = r(.5 * (t + n))] <= e ? t = i: n = i;
            return this._at(e, t)
        },
        numeric.dopri = function(e, t, n, i, r, o, a) {
            void 0 === r && (r = 1e-6),
            void 0 === o && (o = 1e3);
            var s, u, c, l, d, f, h, v, m, p, g, x, _, y = [e],
            w = [n],
            b = [i(e, n)],
            S = [],
            T = [.075, .225],
            M = [44 / 45, -56 / 15, 32 / 9],
            P = [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729],
            R = [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656],
            C = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84],
            I = [.10013431883002395, 0, .3918321794184259, -.02982460176594817, .05893268337240795, -.04497888809104361, .023904308236133973],
            A = [.2, .3, .8, 8 / 9, 1, 1],
            D = [ - 71 / 57600, 0, 71 / 16695, -71 / 1920, 17253 / 339200, -22 / 525, .025],
            L = 0,
            F = (t - e) / 10,
            z = 0,
            E = numeric.add,
            k = numeric.mul,
            O = (Math.max, Math.min),
            U = Math.abs,
            N = numeric.norminf,
            B = Math.pow,
            V = numeric.any,
            H = numeric.lt,
            W = numeric.and,
            G = (numeric.sub, new numeric.Dopri(y, w, b, S, -1, ""));
            for ("function" == typeof a && (g = a(e, n)); e < t && z < o;) if (++z, e + F > t && (F = t - e), s = i(e + A[0] * F, E(n, k(.2 * F, b[L]))), u = i(e + A[1] * F, E(E(n, k(T[0] * F, b[L])), k(T[1] * F, s))), c = i(e + A[2] * F, E(E(E(n, k(M[0] * F, b[L])), k(M[1] * F, s)), k(M[2] * F, u))), l = i(e + A[3] * F, E(E(E(E(n, k(P[0] * F, b[L])), k(P[1] * F, s)), k(P[2] * F, u)), k(P[3] * F, c))), d = i(e + A[4] * F, E(E(E(E(E(n, k(R[0] * F, b[L])), k(R[1] * F, s)), k(R[2] * F, u)), k(R[3] * F, c)), k(R[4] * F, l))), f = i(e + F, m = E(E(E(E(E(n, k(b[L], F * C[0])), k(u, F * C[2])), k(c, F * C[3])), k(l, F * C[4])), k(d, F * C[5]))), (p = "number" == typeof(h = E(E(E(E(E(k(b[L], F * D[0]), k(u, F * D[2])), k(c, F * D[3])), k(l, F * D[4])), k(d, F * D[5])), k(f, F * D[6]))) ? U(h) : N(h)) > r) {
                if (e + (F = .2 * F * B(r / p, .25)) === e) {
                    G.msg = "Step size became too small";
                    break
                }
            } else {
                if (S[L] = E(E(E(E(E(E(n, k(b[L], F * I[0])), k(u, F * I[2])), k(c, F * I[3])), k(l, F * I[4])), k(d, F * I[5])), k(f, F * I[6])), y[++L] = e + F, w[L] = m, b[L] = f, "function" == typeof a) {
                    var j, q, X = e,
                    Y = e + .5 * F;
                    if (x = a(Y, S[L - 1]), V(_ = W(H(g, 0), H(0, x))) || (X = Y, g = x, x = a(Y = e + F, m), _ = W(H(g, 0), H(0, x))), V(_)) {
                        for (var Z, K, Q = 0,
                        J = 1,
                        $ = 1;;) {
                            if ("number" == typeof g) q = ($ * x * X - J * g * Y) / ($ * x - J * g);
                            else for (q = Y, v = g.length - 1; - 1 !== v; --v) g[v] < 0 && x[v] > 0 && (q = O(q, ($ * x[v] * X - J * g[v] * Y) / ($ * x[v] - J * g[v])));
                            if (q <= X || q >= Y) break;
                            K = a(q, j = G._at(q, L - 1)),
                            V(Z = W(H(g, 0), H(0, K))) ? (Y = q, x = K, _ = Z, $ = 1, -1 === Q ? J *= .5 : J = 1, Q = -1) : (X = q, g = K, J = 1, 1 === Q ? $ *= .5 : $ = 1, Q = 1)
                        }
                        return m = G._at(.5 * (e + q), L - 1),
                        G.f[L] = i(q, j),
                        G.x[L] = q,
                        G.y[L] = j,
                        G.ymid[L - 1] = m,
                        G.events = _,
                        G.iterations = z,
                        G
                    }
                }
                e += F,
                n = m,
                g = x,
                F = O(.8 * F * B(r / p, .25), 4 * F)
            }
            return G.iterations = z,
            G
        },
        numeric.LU = function(e, t) {
            t = t || !1;
            var n, i, r, o, a, s, u, c, l, d = Math.abs,
            f = e.length,
            h = f - 1,
            v = new Array(f);
            for (t || (e = numeric.clone(e)), r = 0; r < f; ++r) {
                for (u = r, l = d((s = e[r])[r]), i = r + 1; i < f; ++i) l < (o = d(e[i][r])) && (l = o, u = i);
                for (v[r] = u, u != r && (e[r] = e[u], e[u] = s, s = e[r]), a = s[r], n = r + 1; n < f; ++n) e[n][r] /= a;
                for (n = r + 1; n < f; ++n) {
                    for (c = e[n], i = r + 1; i < h; ++i) c[i] -= c[r] * s[i],
                    c[++i] -= c[r] * s[i];
                    i === h && (c[i] -= c[r] * s[i])
                }
            }
            return {
                LU: e,
                P: v
            }
        },
        numeric.LUsolve = function(e, t) {
            var n, i, r, o, a, s = e.LU,
            u = s.length,
            c = numeric.clone(t),
            l = e.P;
            for (n = u - 1; - 1 !== n; --n) c[n] = t[n];
            for (n = 0; n < u; ++n) for (r = l[n], l[n] !== n && (a = c[n], c[n] = c[r], c[r] = a), o = s[n], i = 0; i < n; ++i) c[n] -= c[i] * o[i];
            for (n = u - 1; n >= 0; --n) {
                for (o = s[n], i = n + 1; i < u; ++i) c[n] -= c[i] * o[i];
                c[n] /= o[n]
            }
            return c
        },
        numeric.solve = function(e, t, n) {
            return numeric.LUsolve(numeric.LU(e, n), t)
        },
        numeric.echelonize = function(e) {
            var t, n, i, r, o, a, s, u, c = numeric.dim(e),
            l = c[0],
            d = c[1],
            f = numeric.identity(l),
            h = Array(l),
            v = Math.abs,
            m = numeric.diveq;
            for (e = numeric.clone(e), t = 0; t < l; ++t) {
                for (i = 0, o = e[t], a = f[t], n = 1; n < d; ++n) v(o[i]) < v(o[n]) && (i = n);
                for (h[t] = i, m(a, o[i]), m(o, o[i]), n = 0; n < l; ++n) if (n !== t) {
                    for (u = (s = e[n])[i], r = d - 1; - 1 !== r; --r) s[r] -= o[r] * u;
                    for (s = f[n], r = l - 1; - 1 !== r; --r) s[r] -= a[r] * u
                }
            }
            return {
                I: f,
                A: e,
                P: h
            }
        },
        numeric.__solveLP = function(e, t, n, i, r, o, a) {
            var s, u, c, l, d = numeric.sum,
            f = (numeric.log, numeric.mul),
            h = numeric.sub,
            v = numeric.dot,
            m = numeric.div,
            p = numeric.add,
            g = e.length,
            x = n.length,
            _ = !1,
            y = 1,
            w = (numeric.transpose(t), numeric.svd, numeric.transpose),
            b = (numeric.leq, Math.sqrt),
            S = Math.abs,
            T = (numeric.muleq, numeric.norminf, numeric.any, Math.min),
            M = numeric.all,
            P = numeric.gt,
            R = Array(g),
            C = Array(x),
            I = (numeric.rep([x], 1), numeric.solve),
            A = h(n, v(t, o)),
            D = v(e, e);
            for (c = 0; c < r; ++c) {
                var L, F;
                for (L = x - 1; - 1 !== L; --L) C[L] = m(t[L], A[L]);
                var z = w(C);
                for (L = g - 1; - 1 !== L; --L) R[L] = d(z[L]);
                y = .25 * S(D / v(e, R));
                var E = 100 * b(D / v(R, R));
                for ((!isFinite(y) || y > E) && (y = E), l = p(e, f(y, R)), u = v(z, C), L = g - 1; - 1 !== L; --L) u[L][L] += 1;
                F = I(u, m(l, y), !0);
                var k = m(A, v(t, F)),
                O = 1;
                for (L = x - 1; - 1 !== L; --L) k[L] < 0 && (O = T(O, -.999 * k[L]));
                if (s = h(o, f(F, O)), !M(P(A = h(n, v(t, s)), 0))) return {
                    solution: o,
                    message: "",
                    iterations: c
                };
                if (o = s, y < i) return {
                    solution: s,
                    message: "",
                    iterations: c
                };
                if (a) {
                    var U = v(e, l),
                    N = v(t, l);
                    for (_ = !0, L = x - 1; - 1 !== L; --L) if (U * N[L] < 0) {
                        _ = !1;
                        break
                    }
                } else _ = !(o[g - 1] >= 0);
                if (_) return {
                    solution: s,
                    message: "Unbounded",
                    iterations: c
                }
            }
            return {
                solution: o,
                message: "maximum iteration count exceeded",
                iterations: c
            }
        },
        numeric._solveLP = function(e, t, n, i, r) {
            var o = e.length,
            a = n.length,
            s = (numeric.sum, numeric.log, numeric.mul, numeric.sub),
            u = numeric.dot,
            c = (numeric.div, numeric.add, numeric.rep([o], 0).concat([1])),
            l = numeric.rep([a, 1], -1),
            d = numeric.blockMatrix([[t, l]]),
            f = n,
            h = numeric.rep([o], 0).concat(Math.max(0, numeric.sup(numeric.neg(n))) + 1),
            v = numeric.__solveLP(c, d, f, i, r, h, !1),
            m = numeric.clone(v.solution);
            if (m.length = o, numeric.inf(s(n, u(t, m))) < 0) return {
                solution: NaN,
                message: "Infeasible",
                iterations: v.iterations
            };
            var p = numeric.__solveLP(e, t, n, i, r - v.iterations, m, !0);
            return p.iterations += v.iterations,
            p
        },
        numeric.solveLP = function(e, t, n, i, r, o, a) {
            if (void 0 === a && (a = 1e3), void 0 === o && (o = numeric.epsilon), void 0 === i) return numeric._solveLP(e, t, n, o, a);
            var s, u = i.length,
            c = i[0].length,
            l = t.length,
            d = numeric.echelonize(i),
            f = numeric.rep([c], 0),
            h = d.P,
            v = [];
            for (s = h.length - 1; - 1 !== s; --s) f[h[s]] = 1;
            for (s = c - 1; - 1 !== s; --s) 0 === f[s] && v.push(s);
            var m = numeric.getRange,
            p = numeric.linspace(0, u - 1),
            g = numeric.linspace(0, l - 1),
            x = m(i, p, v),
            _ = m(t, g, h),
            y = m(t, g, v),
            w = numeric.dot,
            b = numeric.sub,
            S = w(_, d.I),
            T = b(y, w(S, x)),
            M = b(n, w(S, r)),
            P = Array(h.length),
            R = Array(v.length);
            for (s = h.length - 1; - 1 !== s; --s) P[s] = e[h[s]];
            for (s = v.length - 1; - 1 !== s; --s) R[s] = e[v[s]];
            var C = b(R, w(P, w(d.I, x))),
            I = numeric._solveLP(C, T, M, o, a),
            A = I.solution;
            if (A != A) return I;
            var D = w(d.I, b(r, w(x, A))),
            L = Array(e.length);
            for (s = h.length - 1; - 1 !== s; --s) L[h[s]] = D[s];
            for (s = v.length - 1; - 1 !== s; --s) L[v[s]] = A[s];
            return {
                solution: L,
                message: I.message,
                iterations: I.iterations
            }
        },
        numeric.MPStoLP = function(e) {
            e instanceof String && e.split("\n");
            var t, n, i, r, o = 0,
            a = ["Initial state", "NAME", "ROWS", "COLUMNS", "RHS", "BOUNDS", "ENDATA"],
            s = e.length,
            u = 0,
            c = {},
            l = [],
            d = 0,
            f = {},
            h = 0,
            v = [],
            m = [],
            p = [];
            function g(n) {
                throw new Error("MPStoLP: " + n + "\nLine " + t + ": " + e[t] + "\nCurrent state: " + a[o] + "\n")
            }
            for (t = 0; t < s; ++t) {
                var x = (i = e[t]).match(/\S*/g),
                _ = [];
                for (n = 0; n < x.length; ++n)"" !== x[n] && _.push(x[n]);
                if (0 !== _.length) {
                    for (n = 0; n < a.length && i.substr(0, a[n].length) !== a[n]; ++n);
                    if (n < a.length) {
                        if (o = n, 1 === n && (r = _[1]), 6 === n) return {
                            name: r,
                            c: v,
                            A: numeric.transpose(m),
                            b: p,
                            rows: c,
                            vars: f
                        }
                    } else switch (o) {
                    case 0:
                    case 1:
                        g("Unexpected line");
                    case 2:
                        switch (_[0]) {
                        case "N":
                            0 === u ? u = _[1] : g("Two or more N rows");
                            break;
                        case "L":
                            c[_[1]] = d,
                            l[d] = 1,
                            p[d] = 0,
                            ++d;
                            break;
                        case "G":
                            c[_[1]] = d,
                            l[d] = -1,
                            p[d] = 0,
                            ++d;
                            break;
                        case "E":
                            c[_[1]] = d,
                            l[d] = 0,
                            p[d] = 0,
                            ++d;
                            break;
                        default:
                            g("Parse error " + numeric.prettyPrint(_))
                        }
                        break;
                    case 3:
                        f.hasOwnProperty(_[0]) || (f[_[0]] = h, v[h] = 0, m[h] = numeric.rep([d], 0), ++h);
                        var y = f[_[0]];
                        for (n = 1; n < _.length; n += 2) if (_[n] !== u) {
                            var w = c[_[n]];
                            m[y][w] = (l[w] < 0 ? -1 : 1) * parseFloat(_[n + 1])
                        } else v[y] = parseFloat(_[n + 1]);
                        break;
                    case 4:
                        for (n = 1; n < _.length; n += 2) p[c[_[n]]] = (l[c[_[n]]] < 0 ? -1 : 1) * parseFloat(_[n + 1]);
                        break;
                    case 5:
                        break;
                    case 6:
                        g("Internal error")
                    }
                }
            }
            g("Reached end of file without ENDATA")
        },
        numeric.seedrandom = {
            pow: Math.pow,
            random: Math.random
        },
        function(e, t, n, i, r, o, a) {
            function s(e) {
                var t, i, r = this,
                o = e.length,
                a = 0,
                s = r.i = r.j = r.m = 0;
                for (r.S = [], r.c = [], o || (e = [o++]); a < n;) r.S[a] = a++;
                for (a = 0; a < n; a++) s = c(s + (t = r.S[a]) + e[a % o]),
                i = r.S[s],
                r.S[a] = i,
                r.S[s] = t;
                r.g = function(e) {
                    var t = r.S,
                    i = c(r.i + 1),
                    o = t[i],
                    a = c(r.j + o),
                    s = t[a];
                    t[i] = s,
                    t[a] = o;
                    for (var u = t[c(o + s)]; --e;) i = c(i + 1),
                    s = t[a = c(a + (o = t[i]))],
                    t[i] = s,
                    t[a] = o,
                    u = u * n + t[c(o + s)];
                    return r.i = i,
                    r.j = a,
                    u
                },
                r.g(n)
            }
            function u(e, t, n, i) {
                for (e += "", n = 0, i = 0; i < e.length; i++) t[c(i)] = c((n ^= 19 * t[c(i)]) + e.charCodeAt(i));
                for (i in e = "", t) e += String.fromCharCode(t[i]);
                return e
            }
            function c(e) {
                return e & n - 1
            }
            t.seedrandom = function(i, c) {
                var l, d = [];
                return i = u(function e(t, n, i, r, o) {
                    i = [];
                    o = void 0 === t ? "undefined": _typeof(t);
                    if (n && "object" == o) for (r in t) if (r.indexOf("S") < 5) try {
                        i.push(e(t[r], n - 1))
                    } catch(e) {}
                    return i.length ? i: t + ("string" != o ? "\0": "")
                } (c ? [i, e] : arguments.length ? i: [(new Date).getTime(), e, window], 3), d),
                u((l = new s(d)).S, e),
                t.random = function() {
                    for (var e = l.g(6), t = a, i = 0; e < r;) e = (e + i) * n,
                    t *= n,
                    i = l.g(1);
                    for (; e >= o;) e /= 2,
                    t /= 2,
                    i >>>= 1;
                    return (e + i) / t
                },
                i
            },
            a = t.pow(n, 6),
            r = t.pow(2, r),
            o = 2 * r,
            u(t.random(), e)
        } ([], numeric.seedrandom, 256, 0, 52),
        function(e) {
            function t(e) {
                if ("object" !== (void 0 === e ? "undefined": _typeof(e))) return e;
                var n, i = [],
                r = e.length;
                for (n = 0; n < r; n++) i[n + 1] = t(e[n]);
                return i
            }
            function n(e) {
                if ("object" !== (void 0 === e ? "undefined": _typeof(e))) return e;
                var t, i = [],
                r = e.length;
                for (t = 1; t < r; t++) i[t - 1] = n(e[t]);
                return i
            }
            function i(e, t, n, i, r, o, a, s, u, c, l, d, f, h, v, m) {
                var p, g, x, _, y, w, b, S, T, M, P, R, C, I, A, D, L, F, z, E, k, O, U, N, B, V, H;
                C = Math.min(i, c),
                x = 2 * i + C * (C + 5) / 2 + 2 * c + 1,
                N = 1e-60;
                do {
                    B = 1 + .1 * (N += N), V = 1 + .2 * N
                } while ( B <= 1 || V <= 1 );
                for (p = 1; p <= i; p += 1) v[p] = t[p];
                for (p = i + 1; p <= x; p += 1) v[p] = 0;
                for (p = 1; p <= c; p += 1) d[p] = 0;
                if (y = [], 0 === m[1]) {
                    if (function(e, t, n, i) {
                        var r, o, a, s, u, c;
                        for (o = 1; o <= n; o += 1) {
                            if (i[1] = o, c = 0, (a = o - 1) < 1) {
                                if ((c = e[o][o] - c) <= 0) break;
                                e[o][o] = Math.sqrt(c)
                            } else {
                                for (s = 1; s <= a; s += 1) {
                                    for (u = e[s][o], r = 1; r < s; r += 1) u -= e[r][o] * e[r][s];
                                    u /= e[s][s],
                                    e[s][o] = u,
                                    c += u * u
                                }
                                if ((c = e[o][o] - c) <= 0) break;
                                e[o][o] = Math.sqrt(c)
                            }
                            i[1] = 0
                        }
                    } (e, 0, i, y), 0 !== y[1]) return void(m[1] = 2); !
                    function(e, t, n, i) {
                        var r, o, a, s;
                        for (o = 1; o <= n; o += 1) {
                            for (s = 0, r = 1; r < o; r += 1) s += e[r][o] * i[r];
                            i[o] = (i[o] - s) / e[o][o]
                        }
                        for (a = 1; a <= n; a += 1) for (i[o = n + 1 - a] = i[o] / e[o][o], s = -i[o], r = 1; r < o; r += 1) i[r] = i[r] + s * e[r][o]
                    } (e, 0, i, t),
                    function(e, t, n) {
                        var i, r, o, a, s;
                        for (o = 1; o <= n; o += 1) {
                            for (e[o][o] = 1 / e[o][o], s = -e[o][o], i = 1; i < o; i += 1) e[i][o] = s * e[i][o];
                            if (n < (a = o + 1)) break;
                            for (r = a; r <= n; r += 1) for (s = e[o][r], e[o][r] = 0, i = 1; i <= o; i += 1) e[i][r] = e[i][r] + s * e[i][o]
                        }
                    } (e, 0, i)
                } else {
                    for (g = 1; g <= i; g += 1) for (r[g] = 0, p = 1; p <= g; p += 1) r[g] = r[g] + e[p][g] * t[p];
                    for (g = 1; g <= i; g += 1) for (t[g] = 0, p = g; p <= i; p += 1) t[g] = t[g] + e[g][p] * r[p]
                }
                for (o[1] = 0, g = 1; g <= i; g += 1) for (r[g] = t[g], o[1] = o[1] + v[g] * r[g], v[g] = 0, p = g + 1; p <= i; p += 1) e[p][g] = 0;
                for (o[1] = -o[1] / 2, m[1] = 0, I = (M = (T = (P = (S = (b = i) + i) + C) + C + 1) + C * (C + 1) / 2) + c, p = 1; p <= c; p += 1) {
                    for (D = 0, g = 1; g <= i; g += 1) D += a[g][p] * a[g][p];
                    v[I + p] = Math.sqrt(D)
                }
                function W() {
                    for (h[1] = h[1] + 1, x = M, p = 1; p <= c; p += 1) {
                        for (x += 1, D = -s[p], g = 1; g <= i; g += 1) D += a[g][p] * r[g];
                        if (Math.abs(D) < N && (D = 0), p > l) v[x] = D;
                        else if (v[x] = -Math.abs(D), D > 0) {
                            for (g = 1; g <= i; g += 1) a[g][p] = -a[g][p];
                            s[p] = -s[p]
                        }
                    }
                    for (p = 1; p <= f; p += 1) v[M + d[p]] = 0;
                    for (R = 0, A = 0, p = 1; p <= c; p += 1) v[M + p] < A * v[I + p] && (R = p, A = v[M + p] / v[I + p]);
                    return 0 === R ? 999 : 0
                }
                function G() {
                    for (p = 1; p <= i; p += 1) {
                        for (D = 0, g = 1; g <= i; g += 1) D += e[g][p] * a[g][R];
                        v[p] = D
                    }
                    for (_ = b, p = 1; p <= i; p += 1) v[_ + p] = 0;
                    for (g = f + 1; g <= i; g += 1) for (p = 1; p <= i; p += 1) v[_ + p] = v[_ + p] + e[p][g] * v[g];
                    for (O = !0, p = f; p >= 1; p -= 1) {
                        for (D = v[p], _ = (x = T + p * (p + 3) / 2) - p, g = p + 1; g <= f; g += 1) D -= v[x] * v[S + g],
                        x += g;
                        if (D /= v[_], v[S + p] = D, d[p] < l) break;
                        if (D < 0) break;
                        O = !1,
                        w = p
                    }
                    if (!O) for (L = v[P + w] / v[S + w], p = 1; p <= f && !(d[p] < l) && !(v[S + p] < 0); p += 1)(A = v[P + p] / v[S + p]) < L && (L = A, w = p);
                    for (D = 0, p = b + 1; p <= b + i; p += 1) D += v[p] * v[p];
                    if (Math.abs(D) <= N) {
                        if (O) return m[1] = 1,
                        999;
                        for (p = 1; p <= f; p += 1) v[P + p] = v[P + p] - L * v[S + p];
                        return v[P + f + 1] = v[P + f + 1] + L,
                        700
                    }
                    for (D = 0, p = 1; p <= i; p += 1) D += v[b + p] * a[p][R];
                    for (F = -v[M + R] / D, U = !0, O || L < F && (F = L, U = !1), p = 1; p <= i; p += 1) r[p] = r[p] + F * v[b + p],
                    Math.abs(r[p]) < N && (r[p] = 0);
                    for (o[1] = o[1] + F * D * (F / 2 + v[P + f + 1]), p = 1; p <= f; p += 1) v[P + p] = v[P + p] - F * v[S + p];
                    if (v[P + f + 1] = v[P + f + 1] + F, !U) {
                        for (D = -s[R], g = 1; g <= i; g += 1) D += r[g] * a[g][R];
                        if (R > l) v[M + R] = D;
                        else if (v[M + R] = -Math.abs(D), D > 0) {
                            for (g = 1; g <= i; g += 1) a[g][R] = -a[g][R];
                            s[R] = -s[R]
                        }
                        return 700
                    }
                    for (d[f += 1] = R, x = T + (f - 1) * f / 2 + 1, p = 1; p <= f - 1; p += 1) v[x] = v[p],
                    x += 1;
                    if (f === i) v[x] = v[i];
                    else {
                        for (p = i; p >= f + 1 && 0 !== v[p] && (z = Math.max(Math.abs(v[p - 1]), Math.abs(v[p])), E = Math.min(Math.abs(v[p - 1]), Math.abs(v[p])), A = v[p - 1] >= 0 ? Math.abs(z * Math.sqrt(1 + E * E / (z * z))) : -Math.abs(z * Math.sqrt(1 + E * E / (z * z))), z = v[p - 1] / A, E = v[p] / A, 1 !== z); p -= 1) if (0 === z) for (v[p - 1] = E * A, g = 1; g <= i; g += 1) A = e[g][p - 1],
                        e[g][p - 1] = e[g][p],
                        e[g][p] = A;
                        else for (v[p - 1] = A, k = E / (1 + z), g = 1; g <= i; g += 1) A = z * e[g][p - 1] + E * e[g][p],
                        e[g][p] = k * (e[g][p - 1] + A) - e[g][p],
                        e[g][p - 1] = A;
                        v[x] = v[f]
                    }
                    return 0
                }
                function j() {
                    if (0 === v[_ = (x = T + w * (w + 1) / 2 + 1) + w]) return 798;
                    if (z = Math.max(Math.abs(v[_ - 1]), Math.abs(v[_])), E = Math.min(Math.abs(v[_ - 1]), Math.abs(v[_])), A = v[_ - 1] >= 0 ? Math.abs(z * Math.sqrt(1 + E * E / (z * z))) : -Math.abs(z * Math.sqrt(1 + E * E / (z * z))), z = v[_ - 1] / A, E = v[_] / A, 1 === z) return 798;
                    if (0 === z) {
                        for (p = w + 1; p <= f; p += 1) A = v[_ - 1],
                        v[_ - 1] = v[_],
                        v[_] = A,
                        _ += p;
                        for (p = 1; p <= i; p += 1) A = e[p][w],
                        e[p][w] = e[p][w + 1],
                        e[p][w + 1] = A
                    } else {
                        for (k = E / (1 + z), p = w + 1; p <= f; p += 1) A = z * v[_ - 1] + E * v[_],
                        v[_] = k * (v[_ - 1] + A) - v[_],
                        v[_ - 1] = A,
                        _ += p;
                        for (p = 1; p <= i; p += 1) A = z * e[p][w] + E * e[p][w + 1],
                        e[p][w + 1] = k * (e[p][w] + A) - e[p][w + 1],
                        e[p][w] = A
                    }
                    return 0
                }
                function q() {
                    for (_ = x - w, p = 1; p <= w; p += 1) v[_] = v[x],
                    x += 1,
                    _ += 1;
                    return v[P + w] = v[P + w + 1],
                    d[w] = d[w + 1],
                    (w += 1) < f ? 797 : 0
                }
                function X() {
                    return v[P + f] = v[P + f + 1],
                    v[P + f + 1] = 0,
                    d[f] = 0,
                    f -= 1,
                    h[2] = h[2] + 1,
                    0
                }
                for (f = 0, h[1] = 0, h[2] = 0, H = 0;;) {
                    if (999 === (H = W())) return;
                    for (; 0 !== (H = G());) {
                        if (999 === H) return;
                        if (700 === H) if (w === f) X();
                        else {
                            for (; j(), 797 === (H = q()););
                            X()
                        }
                    }
                }
            }
            numeric.solveQP = function(e, r, o, a, s, u) {
                e = t(e),
                r = t(r),
                o = t(o);
                var c, l, d, f, h, v = [],
                m = [],
                p = [],
                g = [],
                x = [];
                if (s = s || 0, u = u ? t(u) : [void 0, 0], a = a ? t(a) : [], l = e.length - 1, d = o[1].length - 1, !a) for (c = 1; c <= d; c += 1) a[c] = 0;
                for (c = 1; c <= d; c += 1) m[c] = 0;
                for (f = Math.min(l, d), c = 1; c <= l; c += 1) p[c] = 0;
                for (v[1] = 0, c = 1; c <= 2 * l + f * (f + 5) / 2 + 2 * d + 1; c += 1) g[c] = 0;
                for (c = 1; c <= 2; c += 1) x[c] = 0;
                return i(e, r, 0, l, p, v, o, a, 0, d, s, m, 0, x, g, u),
                h = "",
                1 === u[1] && (h = "constraints are inconsistent, no solution!"),
                2 === u[1] && (h = "matrix D in quadratic function is not positive definite!"),
                {
                    solution: n(p),
                    value: n(v),
                    unconstrained_solution: n(r),
                    iterations: n(x),
                    iact: n(m),
                    message: h
                }
            }
        } (),
        numeric.svd = function(e) {
            var t, n = numeric.epsilon,
            i = 1e-64 / n,
            r = 0,
            o = 0,
            a = 0,
            s = 0,
            u = 0,
            c = numeric.clone(e),
            l = c.length,
            d = c[0].length;
            if (l < d) throw "Need more rows than columns";
            var f = new Array(d),
            h = new Array(d);
            for (o = 0; o < d; o++) f[o] = h[o] = 0;
            var v = numeric.rep([d, d], 0);
            function m(e, t) {
                return (e = Math.abs(e)) > (t = Math.abs(t)) ? e * Math.sqrt(1 + t * t / e / e) : 0 == t ? e: t * Math.sqrt(1 + e * e / t / t)
            }
            var p = 0,
            g = 0,
            x = 0,
            _ = 0,
            y = 0,
            w = 0,
            b = 0;
            for (o = 0; o < d; o++) {
                for (f[o] = g, b = 0, u = o + 1, a = o; a < l; a++) b += c[a][o] * c[a][o];
                if (b <= i) g = 0;
                else for (p = c[o][o], g = Math.sqrt(b), p >= 0 && (g = -g), x = p * g - b, c[o][o] = p - g, a = u; a < d; a++) {
                    for (b = 0, s = o; s < l; s++) b += c[s][o] * c[s][a];
                    for (p = b / x, s = o; s < l; s++) c[s][a] += p * c[s][o]
                }
                for (h[o] = g, b = 0, a = u; a < d; a++) b += c[o][a] * c[o][a];
                if (b <= i) g = 0;
                else {
                    for (p = c[o][o + 1], g = Math.sqrt(b), p >= 0 && (g = -g), x = p * g - b, c[o][o + 1] = p - g, a = u; a < d; a++) f[a] = c[o][a] / x;
                    for (a = u; a < l; a++) {
                        for (b = 0, s = u; s < d; s++) b += c[a][s] * c[o][s];
                        for (s = u; s < d; s++) c[a][s] += b * f[s]
                    }
                } (y = Math.abs(h[o]) + Math.abs(f[o])) > _ && (_ = y)
            }
            for (o = d - 1; - 1 != o; o += -1) {
                if (0 != g) {
                    for (x = g * c[o][o + 1], a = u; a < d; a++) v[a][o] = c[o][a] / x;
                    for (a = u; a < d; a++) {
                        for (b = 0, s = u; s < d; s++) b += c[o][s] * v[s][a];
                        for (s = u; s < d; s++) v[s][a] += b * v[s][o]
                    }
                }
                for (a = u; a < d; a++) v[o][a] = 0,
                v[a][o] = 0;
                v[o][o] = 1,
                g = f[o],
                u = o
            }
            for (o = d - 1; - 1 != o; o += -1) {
                for (u = o + 1, g = h[o], a = u; a < d; a++) c[o][a] = 0;
                if (0 != g) {
                    for (x = c[o][o] * g, a = u; a < d; a++) {
                        for (b = 0, s = u; s < l; s++) b += c[s][o] * c[s][a];
                        for (p = b / x, s = o; s < l; s++) c[s][a] += p * c[s][o]
                    }
                    for (a = o; a < l; a++) c[a][o] = c[a][o] / g
                } else for (a = o; a < l; a++) c[a][o] = 0;
                c[o][o] += 1
            }
            for (n *= _, s = d - 1; - 1 != s; s += -1) for (var S = 0; S < 50; S++) {
                var T = !1;
                for (u = s; - 1 != u; u += -1) {
                    if (Math.abs(f[u]) <= n) {
                        T = !0;
                        break
                    }
                    if (Math.abs(h[u - 1]) <= n) break
                }
                if (!T) {
                    r = 0,
                    b = 1;
                    var M = u - 1;
                    for (o = u; o < s + 1 && (p = b * f[o], f[o] = r * f[o], !(Math.abs(p) <= n)); o++) for (x = m(p, g = h[o]), h[o] = x, r = g / x, b = -p / x, a = 0; a < l; a++) y = c[a][M],
                    w = c[a][o],
                    c[a][M] = y * r + w * b,
                    c[a][o] = -y * b + w * r
                }
                if (w = h[s], u == s) {
                    if (w < 0) for (h[s] = -w, a = 0; a < d; a++) v[a][s] = -v[a][s];
                    break
                }
                if (S >= 49) throw "Error: no convergence.";
                for (_ = h[u], g = m(p = (((y = h[s - 1]) - w) * (y + w) + ((g = f[s - 1]) - (x = f[s])) * (g + x)) / (2 * x * y), 1), p = p < 0 ? ((_ - w) * (_ + w) + x * (y / (p - g) - x)) / _: ((_ - w) * (_ + w) + x * (y / (p + g) - x)) / _, r = 1, b = 1, o = u + 1; o < s + 1; o++) {
                    for (g = f[o], y = h[o], x = b * g, g *= r, w = m(p, x), f[o - 1] = w, p = _ * (r = p / w) + g * (b = x / w), g = -_ * b + g * r, x = y * b, y *= r, a = 0; a < d; a++) _ = v[a][o - 1],
                    w = v[a][o],
                    v[a][o - 1] = _ * r + w * b,
                    v[a][o] = -_ * b + w * r;
                    for (w = m(p, x), h[o - 1] = w, p = (r = p / w) * g + (b = x / w) * y, _ = -b * g + r * y, a = 0; a < l; a++) y = c[a][o - 1],
                    w = c[a][o],
                    c[a][o - 1] = y * r + w * b,
                    c[a][o] = -y * b + w * r
                }
                f[u] = 0,
                f[s] = p,
                h[s] = _
            }
            for (o = 0; o < h.length; o++) h[o] < n && (h[o] = 0);
            for (o = 0; o < d; o++) for (a = o - 1; a >= 0; a--) if (h[a] < h[o]) {
                for (r = h[a], h[a] = h[o], h[o] = r, s = 0; s < c.length; s++) t = c[s][o],
                c[s][o] = c[s][a],
                c[s][a] = t;
                for (s = 0; s < v.length; s++) t = v[s][o],
                v[s][o] = v[s][a],
                v[s][a] = t;
                o = a
            }
            return {
                U: c,
                S: h,
                V: v
            }
        }
    }).call(this, __webpack_require__(123))
},
function(e, t, n) {
    "use strict";
    var i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    };
    i = function() {
        return this
    } ();
    try {
        i = i || new Function("return this")()
    } catch(e) {
        "object" === ("undefined" == typeof window ? "undefined": r(window)) && (i = window)
    }
    e.exports = i
},
function(e, t) {
    e.exports = "attribute vec3 position;\n\nuniform float u_time;\nuniform vec2 u_firstUvSs;\n\nvarying vec2 v_velocityUv;\nvarying vec2 v_positionUv;\n\nvoid main() {\n    vec2 uv = position.xy * 0.5 + 0.5;\n    v_velocityUv = vec2(u_firstUvSs.x, uv.y);\n    v_positionUv = vec2(u_firstUvSs.y, uv.y);\n    gl_Position = vec4( position, 1.0 );\n}\n"
},
function(e, t) {
    e.exports = "uniform sampler2D u_velocityTexture;\nuniform sampler2D u_positionTexture;\nuniform float u_noiseKernelSize;\nuniform float u_noiseTime;\nuniform float u_noiseStrength;\nuniform float u_dtRatio;\nuniform float u_initRatio;\nuniform float u_time;\n\n#ifdef IS_PACKED\nuniform sampler2D u_velocityTextureZW;\nuniform sampler2D u_positionTextureZW;\nuniform vec2 u_posPackDividers;\nuniform vec2 u_velPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nvarying vec2 v_velocityUv;\nvarying vec2 v_positionUv;\n\n#include <curl4Mid>\n\nvoid main () {\n\t#ifndef IS_PACKED\n  vec4 velocityInfo = texture2D(u_velocityTexture, v_velocityUv);\n  vec4 positionInfo = texture2D(u_positionTexture, v_positionUv);\n\t#else\n\t\tvec4 velocityInfo = samplePackedRGBA(u_velocityTexture, u_velocityTextureZW, v_velocityUv, u_velPackDividers.xxxy);\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_positionUv, u_posPackDividers.xxxy);\n\t#endif\n  positionInfo.a -= 0.001 * u_dtRatio;\n\n  float hasReset = 0.0;\n  if (positionInfo.a + step(u_initRatio, v_positionUv.y) * 10.0 <= 0.0) {\n    velocityInfo = vec4(0.0, 0.0, (v_velocityUv.y - 0.5) * 0.01, 1.0);\n    hasReset = 1.0;\n  }\n  velocityInfo.xyz += curl(positionInfo.xyz * u_noiseKernelSize + 5.0, u_noiseTime, 0.05) * u_noiseStrength * mix(1.0, 10.0, hasReset) * vec3(1.0, 1.0, 0.3);\n  \n\t#ifndef IS_PACKED\n  gl_FragColor = velocityInfo;\n\t#else\n\t\t#ifndef IS_PACK_TO_ZW\n\t\t\tgl_FragColor = vec4(packHalfFloat(velocityInfo.x, u_velPackDividers.x), packHalfFloat(velocityInfo.y, u_velPackDividers.x));\n\t\t#else\n\t\t\tgl_FragColor = vec4(packHalfFloat(velocityInfo.z, u_velPackDividers.x), packHalfFloat(velocityInfo.w, u_velPackDividers.y));\n\t\t#endif\n\t#endif\n}\n"
},
function(e, t) {
    e.exports = "attribute vec3 position;\n\nuniform float u_time;\nuniform vec2 u_firstUvSs;\nuniform vec2 u_neighbourNodeUvSOffsets;\n\nvarying vec2 v_velocityUv;\nvarying vec2 v_positionUv;\nvarying vec2 v_prevNodePositionUv;\n\nvoid main() {\n    vec2 uv = position.xy * 0.5 + 0.5;\n    v_velocityUv = uv;//vec2(u_firstUvSs.x, uv.y);\n    v_positionUv = uv;//vec2(u_firstUvSs.y, uv.y);\n    v_prevNodePositionUv = uv - vec2(u_neighbourNodeUvSOffsets.y, 0.0);\n    gl_Position = vec4( position, 1.0 );\n}\n"
},
function(e, t) {
    e.exports = "uniform sampler2D u_velocityTexture;\nuniform sampler2D u_positionTexture;\nuniform sampler2D u_defaultDataTexture;\n\nuniform vec2 u_screenResolution;\n\nuniform float u_dtRatio;\nuniform float u_initRatio;\nuniform float u_fixedScale;\n\n#ifdef IS_PACKED\nuniform sampler2D u_velocityTextureZW;\nuniform sampler2D u_positionTextureZW;\nuniform sampler2D u_defaultDataTextureZW;\nuniform vec2 u_posPackDividers;\nuniform vec2 u_velPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nvarying vec2 v_velocityUv;\nvarying vec2 v_positionUv;\nvarying vec2 v_prevNodePositionUv;\n\nvoid main () {\n  float isNotFirstNode = step(1.0, gl_FragCoord.x);\n\t#ifndef IS_PACKED\n\t\tvec4 positionInfo = texture2D(u_positionTexture, v_positionUv);\n\t#else\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_positionUv, u_posPackDividers.xxxy);\n\t#endif\n  vec4 prevNodePositionInfo;\n  positionInfo.w -= 0.001 * u_dtRatio;\n\n  float needsReset = 0.0;\n\n  if (positionInfo.w + step(u_initRatio, v_positionUv.y) * 10.0 <= 0.0) {\n    needsReset = 1.0;\n    positionInfo.w += 1.0;\n\n\t\t#ifndef IS_PACKED\n\t\t\tvec4 defaultInfo = texture2D(u_defaultDataTexture, v_positionUv);\n\t\t#else\n\t\t\tvec4 defaultInfo = samplePackedRGBA(u_defaultDataTexture, u_defaultDataTextureZW, v_positionUv, u_posPackDividers.xxxy);\n\t\t#endif\n\n    positionInfo.xyz = (defaultInfo.xyz) * (1.0 - v_positionUv.x);\n    positionInfo.xy += (-u_screenResolution * 0.4) * u_fixedScale;\n  } else {\n    if (isNotFirstNode > 0.5) {\n      #ifndef IS_PACKED\n        vec4 prevNodePositionInfo = texture2D(u_positionTexture, v_prevNodePositionUv);\n      #else\n        vec4 prevNodePositionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_prevNodePositionUv, u_posPackDividers.xxxy);\n      #endif\n      positionInfo.xyz = mix(prevNodePositionInfo.xyz, positionInfo.xyz, 0.1);\n\n      vec3 delta = positionInfo.xyz - prevNodePositionInfo.xyz;\n      if (length(delta) > 0.0) {\n        positionInfo.xyz = prevNodePositionInfo.xyz + normalize(delta) * mix(0.75, 0.01, clamp(positionInfo.w, 0.0, 1.0));\n      }\n    } else {\n      #ifndef IS_PACKED\n        vec4 velocityInfo = texture2D(u_velocityTexture, v_velocityUv);\n      #else\n        vec4 velocityInfo = samplePackedRGBA(u_velocityTexture, u_velocityTextureZW, v_velocityUv, u_velPackDividers.xxxy);\n      #endif\n\n      positionInfo.xyz += velocityInfo.xyz;\n      positionInfo.xy += vec2(0.03, 0.03);\n    }\n  }\n  positionInfo.xy -= vec2(0.02, 0.02);\n\n\t#ifndef IS_PACKED\n\t\t\tgl_FragColor = positionInfo;\n\t#else\n    vec3 threshold = vec3(u_posPackDividers.x * 0.5 - 1.0);\n    positionInfo.xyz = clamp(positionInfo.xyz, -threshold, threshold);\n  #ifndef IS_PACK_TO_ZW\n\t\t\tgl_FragColor = vec4(packHalfFloat(positionInfo.x, u_posPackDividers.x), packHalfFloat(positionInfo.y, u_posPackDividers.x));\n\t\t#else\n\t\t\tgl_FragColor = vec4(packHalfFloat(positionInfo.z, u_posPackDividers.x), packHalfFloat(positionInfo.w, u_posPackDividers.y));\n\t\t#endif\n\t#endif\n}\n"
},
function(e, t) {
    e.exports = "attribute vec3 position;\nattribute vec2 a_uv;\n\nuniform vec2 u_positionOffset;\nuniform vec2 u_uvOffset;\nuniform vec2 u_neighbourNodeUvOffset;\n\nvarying vec2 v_prevNodeUv;\nvarying vec2 v_nextNodeUv;\n\nvoid main () {\n    vec2 uv = a_uv + u_uvOffset;\n    v_prevNodeUv = uv - u_neighbourNodeUvOffset;\n    v_nextNodeUv = uv + u_neighbourNodeUvOffset;\n    gl_Position = vec4( position.xy + u_positionOffset, 0.0, 1.0 );\n}\n"
},
function(e, t) {
    e.exports = "uniform sampler2D u_positionTexture;\nuniform sampler2D u_rotationTexture;\n\n#ifdef IS_PACKED\nuniform sampler2D u_positionTextureZW;\nuniform vec2 u_posPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nvarying vec2 v_prevNodeUv;\nvarying vec2 v_nextNodeUv;\n\n#include <encodeNormal>\n#include <decodeNormal>\n\nvoid main () {\n\n\t#ifndef IS_PACKED\n    vec3 prevNodePosition = texture2D(u_positionTexture, v_prevNodeUv).xyz;\n    vec3 nextNodePosition = texture2D(u_positionTexture, v_nextNodeUv).xyz;\n\t#else\n\t\tvec3 prevNodePosition = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_prevNodeUv, u_posPackDividers.xxxy).xyz;\n\t\tvec3 nextNodePosition = samplePackedRGBA(u_positionTexture, u_positionTextureZW, v_nextNodeUv, u_posPackDividers.xxxy).xyz;\n\t#endif\n\n  vec3 tangent = normalize(prevNodePosition - nextNodePosition);\n\n  #ifdef IS_FIRST_NODE\n    // vec3 binormal = cross(tangent, normalize(prevNodePosition));\n    vec3 binormal = cross(tangent, vec3(0.0, 0.0, 1.0));\n    gl_FragColor = vec4(\n      encodeNormal(tangent), // tangent\n      encodeNormal(binormal) // binormal\n    );\n  #else\n    vec4 prevNodeRotation = texture2D(u_rotationTexture, v_prevNodeUv);\n    vec3 prevNodeBinormal = decodeNormal(prevNodeRotation.zw);\n    vec3 normal = normalize(cross(prevNodeBinormal, tangent));\n    gl_FragColor = vec4(\n      encodeNormal(tangent), // tangent\n      encodeNormal(cross(tangent, normal)) // binormal\n    );\n  #endif\n}\n"
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(3),
    o = n(34),
    a = n(54),
    s = n(4),
    u = n(2),
    c = n(6);
    t.init = function(e) {
        f = e,
        function() {
            for (var e = f.MAX_TUBE_COUNT,
            t = f.NODE_COUNT - 1,
            n = t + 1,
            r = t + 2,
            o = n + 2,
            a = new Float32Array(4 * o * 3), s = new Float32Array(4 * o), c = 2 * Math.PI / 4, d = 0, h = 0, v = 0; d < o; d++) for (var m = u.clamp(d - 1, 0, t), p = (m + .5) / n, g = 0 === d ? -1 : d === r ? 1 : 0, x = 0; x < 4; x++) {
                var _ = x * c;
                a[v + 0] = 0,
                a[v + 1] = Math.sin(_) * (0 === g ? 1 : 0),
                a[v + 2] = Math.cos(_) * (0 === g ? 1 : 0),
                s[h] = p,
                h++,
                v += 3
            }
            for (var y = new Uint16Array(4 * r * 6), w = 0, b = 0, S = 1, T = 4, M = 5, P = void 0, R = 0; R < r; R++) for (var C = 0; C < 4; C++) P = 3 === C ? -4 : 0,
            y[w + 0] = b,
            y[w + 1] = S + P,
            y[w + 2] = T,
            y[w + 3] = S + P,
            y[w + 4] = M + P,
            y[w + 5] = T,
            b++,
            S++,
            T++,
            M++,
            w += 6;
            for (var I = new Float32Array(e), A = new Float32Array(e), D = 0; D < e; D++) I[D] = (D + .5) / e,
            A[D] = D % 2; (l = new i.InstancedBufferGeometry).setAttribute("position", new i.BufferAttribute(a, 3)),
            l.setAttribute("a_gpgpuUvS", new i.BufferAttribute(s, 1)),
            l.setIndex(new i.BufferAttribute(y, 1)),
            l.setAttribute("a_gpgpuUvT", new i.InstancedBufferAttribute(I, 1)),
            l.setAttribute("a_interval", new i.InstancedBufferAttribute(A, 1))
        } (),
        function() {
            if (d = new i.ShaderMaterial({
                uniforms: c({
                    u_positionTexture: a.sharedUniforms.u_currPositionTexture,
                    u_rotationTexture: a.sharedUniforms.u_rotationTexture,
                    u_radius: {
                        value: .15
                    },
                    u_color0: {
                        value: new i.Color
                    },
                    u_color1: {
                        value: new i.Color
                    },
                    u_lightScatterDivider: o.sharedUniforms.u_lightScatterDivider,
                    u_lightScatterPowInv: o.sharedUniforms.u_lightScatterPowInv,
                    u_cameraPosition: o.sharedUniforms.u_cameraPosition,
                    u_lightPosition: o.sharedUniforms.u_lightPosition
                },
                f.sharedUniforms),
                blending: i.NoBlending,
                vertexShader: s.precisionPrefix + n(131),
                fragmentShader: s.precisionPrefix + n(132),
                depthTest: !0,
                depthWrite: !0
            }), r.useFloatPacking) {
                var e = d.uniforms;
                e.u_positionTextureZW = a.sharedUniforms.u_currPositionTextureZW,
                e.u_posPackDividers = a.sharedUniforms.u_posPackDividers,
                d.defines.IS_PACKED = !0
            }
            d.extensions.derivatives = !0
        } (),
        t.mesh = new i.Mesh(l, d),
        t.mesh.frustumCulled = !1
    },
    t.update = function(e) {},
    t.changeColor = function(e, t) {
        d.uniforms.u_color0.value.copy(e),
        d.uniforms.u_color1.value.copy(t)
    },
    t.mesh = null;
    var l = void 0,
    d = void 0,
    f = void 0
},
function(e, t) {
    e.exports = "// attribute vec3 a_color;\n// attribute vec3 a_normal;\nattribute float a_gpgpuUvS;\nattribute float a_gpgpuUvT;\nattribute float a_interval;\n\nuniform float u_radius;\n\nuniform sampler2D u_positionTexture;\nuniform sampler2D u_rotationTexture;\n\n#ifdef IS_PACKED\nuniform sampler2D u_positionTextureZW;\nuniform vec2 u_posPackDividers;\n#include <halfFloatPacking>\n#include <samplePackedFloats>\n#endif\n\nvarying vec3 v_worldPosition;\n\n#include <decodeNormal>\n\nvoid main () {\n  vec2 uv = vec2(a_gpgpuUvS, a_gpgpuUvT);\n\t#ifndef IS_PACKED\n    vec4 positionInfo = texture2D(u_positionTexture, uv);\n\t#else\n\t\tvec4 positionInfo = samplePackedRGBA(u_positionTexture, u_positionTextureZW, uv, u_posPackDividers.xxxy);\n\t#endif\n  vec3 worldPosition = positionInfo.xyz;\n\n  vec4 rot = texture2D(u_rotationTexture, uv);\n  vec3 T = normalize(decodeNormal(rot.xy));\n  vec3 B = normalize(decodeNormal(rot.zw));\n  vec3 N = normalize(cross(T, B));\n\n  mat3 TBN = mat3(T, B, N);\n\n  worldPosition += (TBN * position) * u_radius * (1.0 - smoothstep(0.48, 0.5, abs(positionInfo.w - 0.5) + a_gpgpuUvS * 0.05));\n  v_worldPosition = worldPosition;\n\n  vec4 pos = vec4(worldPosition, 1.0);\n  vec4 modelViewPosition = modelViewMatrix * pos;\n\n  vec3 viewDirection = normalize(-modelViewPosition.xyz);\n  gl_Position = projectionMatrix * modelViewPosition;\n\n  gl_PointSize = 5.0;\n}\n"
},
function(e, t) {
    e.exports = "#include <packing>\n\nuniform vec3 u_color0;\nuniform vec3 u_color1;\nuniform vec3 u_cameraPosition;\nuniform vec3 u_lightPosition;\n\nvarying vec3 v_worldPosition;\n\n#include <getScatter>\n// #include <getScatterLine>\n#include <homeHeroColorRemap>\n\nfloat sdTorus( vec3 p, vec2 t ) {\n  vec2 q = vec2(length(p.xz)-t.x,p.y);\n  return length(q)-t.y;\n}\n\nvoid main () {\n  vec3 worldNormal = cross(normalize(dFdx(v_worldPosition)), normalize(dFdy(v_worldPosition)));\n  vec3 lightToWorld = u_lightPosition - v_worldPosition;\n  vec3 nLightToWorld = normalize(lightToWorld);\n\n  vec3 toCameraWorld = v_worldPosition - u_cameraPosition;\n  vec3 nToCameraWorldDir = normalize(toCameraWorld);\n  float toCameraDist = length(toCameraWorld);\n\n  float scatter = getScatter(u_cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n\n  float diffuse = 0.5 + 0.5 * max(0.0, dot(nLightToWorld, worldNormal));\n  float specular = smoothstep(0.3, 1.0, dot(nLightToWorld, reflect(nToCameraWorldDir, worldNormal))) / (1.0 + length(lightToWorld));\n\n  float brightness = diffuse + specular;\n  brightness = brightness * (0.1 + 0.05 * scatter) + scatter;\n\n  gl_FragColor = vec4(homeHeroColorRemap(smoothstep(0.0, 1.0, brightness)), 1.0);\n}\n"
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(34),
    o = n(6);
    t.init = function(e) {
        c = e,
        (a = t.container = new i.Object3D).rotation.z = Math.random() * Math.PI * 2,
        (s = t.plane0 = new i.Mesh(new i.PlaneBufferGeometry(500, 500), new i.ShaderMaterial({
            uniforms: o({
                u_color: {
                    value: new i.Color
                },
                u_lightScatterDivider: r.sharedUniforms.u_lightScatterDivider,
                u_lightScatterPowInv: r.sharedUniforms.u_lightScatterPowInv,
                u_cameraPosition: r.sharedUniforms.u_cameraPosition,
                u_lightPosition: r.sharedUniforms.u_lightPosition
            },
            c.sharedUniforms),
            vertexShader: n(134),
            fragmentShader: n(135),
            blending: i.NoBlending,
            dithering: !0
        }))).color = new i.Color,
        s.onBeforeRender = l,
        s.geometry.translate( - 258, 0, 0),
        s.position.z = -40,
        a.add(s),
        (u = t.plane1 = new i.Mesh(new i.PlaneBufferGeometry(4e3, 4e3), s.material)).color = new i.Color,
        u.geometry.translate(0, 0, 0),
        u.onBeforeRender = l,
        u.position.z = -70,
        a.add(u)
    };
    var a = t.container = null,
    s = t.plane0 = null,
    u = t.plane1 = null,
    c = void 0;
    function l(e, t, n, i, r) {
        var o = r.uniforms;
        o.u_color.value.copy(this.color);
        var a = e.properties.get(r);
        if (a.program) {
            var s = e.getContext(),
            u = a.program;
            s.useProgram(u.program),
            u.getUniforms().setValue(s, "u_color", o.u_color.value)
        }
    }
},
function(e, t) {
    e.exports = "varying vec3 v_worldPosition;\n\nvoid main () {\n    v_worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    \n}"
},
function(e, t) {
    e.exports = "\nuniform vec3 u_color;\nuniform vec3 u_cameraPosition;\nuniform vec3 u_lightPosition;\nvarying vec3 v_worldPosition;\n\n#include <getScatter>\n// #include <getScatterLine>\n#include <homeHeroColorRemap>\n#include <common>\n#include <dithering_pars_fragment>\n\nvoid main () {\n    vec3 toCameraWorld = v_worldPosition - u_cameraPosition;\n    vec3 nToCameraWorldDir = normalize(toCameraWorld);\n    float toCameraDist = length(toCameraWorld);\n\n    float scatter = getScatter(u_cameraPosition, nToCameraWorldDir, u_lightPosition, toCameraDist);\n\n    vec3 color = u_color * 0.15 * (0.65 + 0.4 * scatter) + scatter * 0.4;\n\n    gl_FragColor = vec4(dithering(smoothstep(vec3(0.0), vec3(1.0), color)), 1.0);\n\n    gl_FragColor.rgb = homeHeroColorRemap(gl_FragColor.rgb);\n}"
},
function(e, t) {
    e.exports = "\nuniform vec3 u_remapLowColorUniform;\nuniform vec3 u_remapMidColorUniform;\nuniform vec3 u_remapHighColorUniform;\n\nvec3 homeHeroColorRemap (vec3 color) {\n  float b = max(max(gl_FragColor.r, gl_FragColor.g), gl_FragColor.b);\n  return b > 0.5 ? mix(u_remapMidColorUniform, u_remapHighColorUniform, b * 2.0 - 1.0) : mix(u_remapLowColorUniform, u_remapMidColorUniform, b * 2.0);\n}\n\nvec3 homeHeroColorRemap (float b) {\n  return b > 0.5 ? mix(u_remapMidColorUniform, u_remapHighColorUniform, b * 2.0 - 1.0) : mix(u_remapLowColorUniform, u_remapMidColorUniform, b * 2.0);\n}"
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(5),
    o = n(3),
    a = n(1),
    s = n(4),
    u = n(2),
    c = n(6),
    l = n(138),
    d = n(12);
    function f() {
        h.constructor.call(this, {
            refDomId: "home-about-context",
            path: "",
            backgroundColor: 394758,
            defaultCameraFov: 45,
            mouseRefToWindow: !0,
            parallax: -.25,
            bgDownScale: 600 / window.screen.height,
            themeRatio: 0,
            colorFrom1Hex: 7720,
            colorFrom2Hex: 49663,
            colorTo1Hex: 592174,
            colorTo2Hex: 16387866,
            expandRatio: 0
        })
    }
    var h = n(10).prototype,
    v = f.prototype = Object.create(h);
    v.constructor = f,
    v.preInit = function() {
        if (h.preInit.call(this), l.preInit(this), !r.isMobile) { (p = new i.Texture(a.loader.add(o.cdnPath + "visuals/homeAbout/beethoven.png").content)).flipY = !1,
            p.minFilter = p.magFilter = i.LinearFilter,
            p.needsUpdate = !0,
            (g = new i.Texture(a.loader.add(o.cdnPath + "visuals/homeAbout/matcap.jpg").content)).minFilter = g.magFilter = i.LinearFilter,
            g.needsUpdate = !0,
            this.sharedUniforms.u_matCapTexture = {
                value: g
            };
            var e = this;
            a.loader.add(o.assetPath + "visuals/homeAbout/beethoven.glb", {
                type: "any",
                weight: 1,
                hasLoading: !0,
                loadFunc: function(t, n, i) {
                    a.GLTFLoader.load(t,
                    function(t) { (m = t.scene.children[0]).position.x = 0,
                        m.rotation.set(0, _, 0),
                        e.scene.add(m),
                        n()
                    },
                    function(e) {
                        e.lengthComputable && i.dispatch(e.loaded / e.total)
                    },
                    function(e) {
                        console.log(e)
                    })
                }
            })
        }
    },
    v.init = function() {
        h.init.call(this),
        this.scene.add(l.mesh),
        this.sharedUniforms.u_lightScatterDivider = {
            value: 15
        },
        this.sharedUniforms.u_lightScatterPowInv = {
            value: .3
        },
        this.sharedUniforms.u_cameraPosition = {
            value: this.cameraPosition
        },
        this.sharedUniforms.u_lightPosition = {
            value: this.mouse3
        },
        this.sharedUniforms.u_parallaxRatioUniform = this.parallaxRatioUniform,
        r.isMobile || (m.material = new i.ShaderMaterial({
            uniforms: c({
                u_infoTexture: {
                    value: p
                },
                u_matCapTexture: this.sharedUniforms.u_matCapTexture,
                u_bgTexture: l.sharedUniforms.u_lowTexture,
                u_aspect: l.sharedUniforms.u_aspect,
                u_inRatio: {
                    value: 0
                },
                u_rotation: {
                    value: new i.Quaternion
                },
                u_time: {
                    value: 0
                }
            },
            this.sharedUniforms),
            vertexShader: s.precisionPrefix + n(152),
            fragmentShader: s.precisionPrefix + n(153)
        }), m.material.extensions.derivatives = !0);
        if (y = s.createRenderTarget(1, 1), (w = new i.Mesh(new i.PlaneBufferGeometry(1, 1), new i.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    value: y.texture
                },
                u_btnOffset: {
                    value: new i.Vector2
                },
                u_btnScale: {
                    value: new i.Vector2
                }
            },
            vertexShader: s.precisionPrefix + n(154),
            fragmentShader: s.precisionPrefix + n(155),
            depthTest: !1,
            depthWrite: !1
        }))).geometry.translate(.5, -.5, 0), w.frustumCulled = !1, this.scene.add(w), b = new i.RawShaderMaterial({
            uniforms: {
                u_texture: l.sharedUniforms.u_texture,
                u_btnOffset: w.material.uniforms.u_btnOffset,
                u_btnScale: w.material.uniforms.u_btnScale,
                u_uvOffset: l.sharedUniforms.u_uvOffset,
                u_uvScale: l.sharedUniforms.u_uvScale
            },
            vertexShader: s.precisionPrefix + n(156),
            fragmentShader: s.copyMaterial.fragmentShader,
            depthTest: !1,
            depthWrite: !1
        }), window.gui) {
            var e = this.gui;
            e.addColor(this, "colorFrom1Hex"),
            e.addColor(this, "colorFrom2Hex"),
            e.addColor(this, "colorTo1Hex"),
            e.addColor(this, "colorTo2Hex"),
            e.add(l, "isSimActive")
        }
        this.precompile()
    },
    v.resize = function() {
        h.resize.call(this),
        l.resize(a.width, this.fullHeight)
    },
    v.onDomRectUpdate = function() {
        this.paddingTop = a.height / 20 | 0;
        var e = this.expandRatio = Math.min(1, (a.height - this.refDomRect.top) / 240),
        t = 1 + (a.width - this.refDomRect.width >> 1);
        this.paddingLeft = this.paddingRight = u.mix( - 60, t, e)
    },
    v.beforeRender = function(e) {},
    v.update = function(e, t, n, i, o) {
        if (this.testViewport(), this.needsRender) {
            var u = s.getColorState();
            s.renderer.autoClearColor = !1,
            this.scene.updateMatrixWorld(!0),
            this.updateCamera(),
            this.updateMouse();
            var c = a.elasticMouse.x / a.width,
            f = 1 - (a.elasticMouse.y - (this.refDomRect.top - this.paddingTop)) / this.fullHeight;
            this.themeRatio += .05 * ((this.upInRatio - this.lowInRatio > 0 ? 0 : 1) - this.themeRatio),
            x = (x + 5 * e) % (2 * Math.PI),
            l.stroke(c, f, .03 + .02 * Math.sin(x)),
            l.update(e),
            r.isMobile || (m.material.uniforms.u_inRatio.value = this.themeRatio, m.position.set( - 1.2 * Math.pow(this.camera.aspect, .5), 0, 0), m.position.x -= .015 * (this.mouse3.x - m.position.x), m.position.y -= .015 * (this.mouse3.y - m.position.y), m.rotation.x += .275 * (.075 * this.mouse.y - m.rotation.x), m.rotation.y += .275 * (_ + .075 * this.mouse.x - m.rotation.y), m.rotation.z = 0, m.scale.set(1.1, 1.1, 1.1), m.material.uniforms.u_rotation.value.copy(m.quaternion), m.material.uniforms.u_time.value += e),
            w.visible = o > 0;
            var h = t.width * o | 0,
            v = t.height * o | 0;
            if (w.visible && h > 0 && v > 0) {
                var p = t.left + n,
                g = t.top + i;
                w.material.uniforms.u_btnOffset.value.set((p - .5 * this.width - this.left) / this.width * 2, -(g - .5 * this.height - this.top) / this.height * 2),
                w.material.uniforms.u_btnScale.value.set(t.width / this.width * 2 * o, t.height / this.height * 2),
                y.setSize(h, v),
                s.render(b, y),
                d.blur9(8, .5, y),
                d.blur9(4, .5, y)
            } else w.visible = !1;
            this.render(),
            s.setColorState(u)
        }
    };
    var m = void 0,
    p = void 0,
    g = void 0,
    x = 0,
    _ = 20 / 180 * Math.PI + .14,
    y = void 0,
    w = void 0,
    b = void 0;
    e.exports = new f
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(5),
    o = n(3),
    a = n(1),
    s = n(4),
    u = n(12),
    c = n(2);
    t.preInit = function(e) {
        M = e,
        a.loader.add(o.assetPath + "visuals/homeAbout/bg.buf", {
            type: "xhr",
            responseType: "arraybuffer",
            weight: 1,
            onLoad: function(e) {
                var o = 0,
                a = new Uint8Array(e, o, 16384);
                o += 16384;
                var u = new Int8Array(e, o, 32768);
                o += 32768;
                var c = new Int8Array(e, o, 32768);
                o += 32768;
                var M = new Int8Array(e, o, 32768);
                o += 32768;
                var P = new Int8Array(e, o, 32768);
                o += 32768;
                var R = new Uint16Array(e, o, 48447); (z = new i.BufferGeometry).setAttribute("a_position", new i.BufferAttribute(a, 2, !0)),
                z.setAttribute("a_offsetRatioXY13", new i.BufferAttribute(u, 4, !0)),
                z.setAttribute("a_offsetRatioXY24", new i.BufferAttribute(c, 4, !0)),
                z.setAttribute("a_normalXY13", new i.BufferAttribute(M, 4, !0)),
                z.setAttribute("a_normalXY24", new i.BufferAttribute(P, 4, !0)),
                z.setIndex(new i.BufferAttribute(R, 1)),
                function() {
                    L = new i.Color,
                    l.u_patternCurrRenderTexture = {
                        value: null
                    },
                    l.u_patternPrevRenderTexture = {
                        value: null
                    },
                    l.u_patternDeltaTime = {
                        value: 1
                    },
                    l.u_patternTexelSize = {
                        value: new i.Vector2(1, 1)
                    },
                    l.u_aspect = {
                        value: new i.Vector2(1, 1)
                    },
                    l.u_uvOffset = {
                        value: new i.Vector2
                    },
                    l.u_uvScale = {
                        value: new i.Vector2
                    },
                    l.u_color1 = {
                        value: f = t.color1 = new i.Color
                    },
                    l.u_color2 = {
                        value: h = t.color2 = new i.Color
                    },
                    l.u_rotation = {
                        value: 0
                    },
                    p = new i.WebGLRenderTarget(1, 1, {
                        format: i.RGBAFormat,
                        magFilter: i.LinearFilter,
                        minFilter: i.LinearFilter,
                        depthBuffer: !1,
                        stencilBuffer: !1
                    }),
                    g = p.clone(),
                    m = p.clone(),
                    x = p.clone(),
                    l.u_texture = {
                        value: x.texture
                    },
                    r.isMobile || (_ = p.clone(), l.u_lowTexture = {
                        value: _.texture
                    });
                    T = new i.RawShaderMaterial({
                        uniforms: {
                            u_randomSeed: {
                                value: new i.Vector4
                            },
                            u_aspect: l.u_aspect
                        },
                        vertexShader: s.vertexShader,
                        fragmentShader: s.precisionPrefix + n(143),
                        depthTest: !1,
                        depthWrite: !1,
                        transparent: !0,
                        blending: i.NoBlending
                    }),
                    y = new i.RawShaderMaterial({
                        uniforms: {
                            u_patternPrevRenderTexture: l.u_patternPrevRenderTexture,
                            u_noiseTexture: {
                                value: m.texture
                            },
                            u_aspect: l.u_aspect,
                            u_a: {
                                value: new i.Vector3
                            },
                            u_b: {
                                value: new i.Vector3
                            }
                        },
                        vertexShader: s.vertexShader,
                        fragmentShader: s.precisionPrefix + n(144),
                        depthTest: !1,
                        depthWrite: !1,
                        transparent: !0,
                        blending: i.NoBlending
                    }),
                    w = new i.RawShaderMaterial({
                        uniforms: {
                            u_patternPrevRenderTexture: l.u_patternPrevRenderTexture,
                            u_patternDeltaTime: l.u_patternDeltaTime,
                            u_patternTexelSize: l.u_patternTexelSize,
                            u_noiseTexture: {
                                value: m.texture
                            },
                            u_noiseUvOffset: {
                                value: 0
                            }
                        },
                        vertexShader: s.vertexShader,
                        fragmentShader: s.precisionPrefix + n(145),
                        depthTest: !1,
                        depthWrite: !1,
                        transparent: !0,
                        blending: i.NoBlending
                    }),
                    b = new i.RawShaderMaterial({
                        uniforms: {
                            u_patternPrevRenderTexture: l.u_patternPrevRenderTexture,
                            u_patternTexelSize: l.u_patternTexelSize
                        },
                        vertexShader: s.vertexShader,
                        fragmentShader: s.precisionPrefix + n(146),
                        depthTest: !1,
                        depthWrite: !1,
                        transparent: !0,
                        blending: i.NoBlending
                    }),
                    S = new i.RawShaderMaterial({
                        uniforms: T.uniforms,
                        vertexShader: s.vertexShader,
                        fragmentShader: s.precisionPrefix + n(147),
                        depthTest: !1,
                        depthWrite: !1,
                        transparent: !0,
                        blending: i.NoBlending
                    }),
                    v = new i.RawShaderMaterial({
                        uniforms: {
                            u_patternCurrRenderTexture: l.u_patternCurrRenderTexture,
                            u_patternTexelSize: l.u_patternTexelSize,
                            u_uvOffset: l.u_uvOffset,
                            u_uvScale: l.u_uvScale,
                            u_aspect: l.u_aspect,
                            u_color1: l.u_color1,
                            u_color2: l.u_color2,
                            u_mouse: {
                                value: new i.Vector2
                            },
                            u_highlightMultiplier: {
                                value: .6
                            }
                        },
                        vertexShader: s.precisionPrefix + n(148),
                        fragmentShader: s.precisionPrefix + n(149),
                        depthTest: !1,
                        depthWrite: !1,
                        blending: i.NoBlending
                    }),
                    F = new i.RawShaderMaterial({
                        uniforms: {
                            u_texture: l.u_texture,
                            u_uvOffset: l.u_uvOffset,
                            u_uvScale: l.u_uvScale,
                            u_aspect: l.u_aspect,
                            u_constraintedMouse: {
                                value: new i.Vector2
                            },
                            u_baseBlendRatio: {
                                value: 0
                            },
                            u_clothEffectRatio: {
                                value: 0
                            },
                            u_rotation: l.u_rotation
                        },
                        vertexShader: s.precisionPrefix + n(150),
                        fragmentShader: s.precisionPrefix + n(151),
                        depthTest: !1,
                        depthWrite: !1,
                        blending: i.NoBlending
                    }),
                    (d = t.mesh = new i.Mesh(z, F)).renderOrder = -100,
                    d.frustumCulled = !1
                } ()
            }
        })
    },
    t.stroke = function(e, t, n) {
        I = e,
        A = t,
        D = n
    },
    t.resize = function(e, n) {
        k = t.simWidth = Math.ceil(e * M.bgDownScale),
        O = t.simHeight = Math.ceil(n * M.bgDownScale),
        m.setSize(k, 2 * O),
        p.setSize(k, O),
        g.setSize(k, O),
        r.isMobile || _.setSize(Math.ceil(k / 4 | 0), Math.ceil(O / 4 | 0));
        l.u_patternTexelSize.value.set(1 / k, 1 / O),
        l.u_aspect.value.set(k / O, 1);
        var i = s.getColorState();
        s.clearColorRGBA(1, 0, .5, .5, p),
        s.setColorState(i),
        T.uniforms.u_randomSeed.value.set(Math.random(), Math.random(), Math.random(), Math.random()),
        s.render(T, m),
        s.render(S, p),
        E = 0
    },
    t.update = function(e) {
        var n = -Math.max(M.refDomRect.bottom - a.height, 0);
        v.uniforms.u_uvOffset.value.set( - M.left / M.width, n / M.height),
        v.uniforms.u_uvScale.value.set(a.width / M.width, (M.refDomRect.height + M.paddingTop + M.paddingBottom) / M.height);
        var i = 2 * ((a.elasticMouse.x - M.left) / M.width - .5),
        o = 2 * (.5 - (a.elasticMouse.y - (M.refDomRect.top - M.paddingTop)) / (M.refDomRect.height + M.paddingTop + M.paddingBottom));
        if (v.uniforms.u_mouse.value.set(.5 * N(i, o) + .5, .5 * o + .5), t.isSimActive) {
            x.setSize(a.width, M.fullHeight);
            var d = s.getColorState();
            null != I && (null == P && (P = I, R = A, C = D), U(), y.uniforms.u_a.value.set(B(P, R), R, C), y.uniforms.u_b.value.set(B(I, A), A, D), s.render(y, p), P = I, R = A, C = D, I = A = D);
            for (var m = 0; m < 6; m++) U(),
            w.uniforms.u_noiseUvOffset.value = (w.uniforms.u_noiseUvOffset.value + .1 * e) % 1,
            s.render(w, p);
            U(),
            s.render(b, p),
            s.setColorState(d);
            var g = M.themeRatio;
            L.setHex(M.colorTo1Hex),
            f.set(M.colorFrom1Hex).lerp(L, 1 - g),
            L.setHex(M.colorTo2Hex),
            h.set(M.colorFrom2Hex).lerp(L, 1 - g),
            v.uniforms.u_highlightMultiplier.value = .6 * g;
            var S = c.clamp(i, -1, 1),
            T = c.clamp(o, -1, 1),
            z = Math.max(Math.abs(S), Math.abs(T)),
            k = Math.atan2(T, S);
            s.render(v, x),
            r.isMobile || (s.copy(x.texture, _), u.blur9(4, .5, _)),
            F.uniforms.u_constraintedMouse.value.set(Math.cos(k) * z, Math.sin(k) * z),
            E += o <= -1 || o >= 1 ? .1 * (0 - E) : .1 * (1 - E);
            var O = F.uniforms.u_clothEffectRatio.value = E;
            F.uniforms.u_baseBlendRatio.value = (.1 + .9 * c.clamp(c.smoothstep(0, .3, z), 0, 1)) * O,
            l.u_rotation.value = M.expandRatio
        }
    };
    var l = t.sharedUniforms = {},
    d = t.mesh = null,
    f = t.color1 = null,
    h = t.color2 = null;
    t.isSimActive = !0;
    var v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = void 0,
    y = void 0,
    w = void 0,
    b = void 0,
    S = void 0,
    T = void 0,
    M = void 0,
    P = void 0,
    R = void 0,
    C = void 0,
    I = void 0,
    A = void 0,
    D = void 0,
    L = void 0,
    F = void 0,
    z = void 0,
    E = 0,
    k = t.simWidth = 1,
    O = t.simHeight = 1;
    function U() {
        var e = p;
        p = g,
        g = e,
        l.u_patternCurrRenderTexture.value = p.texture,
        l.u_patternPrevRenderTexture.value = g.texture
    }
    function N(e, t) {
        var n = 1 - Math.abs(t);
        return e /= 1.12,
        c.mix(e, .85 * e, (1 - 2 * Math.abs(Math.abs(e) - .5)) * n)
    }
    function B(e, t) {
        return.5 * N(2 * e - 1, 2 * t - 1) + .5
    }
},
function(e, t) {
    e.exports = "uniform sampler2D u_texture;\nvarying vec2 v_uv[9];\n\nvoid main() {\n\n    #ifdef USE_RGBA\n        vec4 color = texture2D( u_texture, v_uv[0] ) * 0.1633;\n        color += texture2D( u_texture,  v_uv[1] ) * 0.1531;\n        color += texture2D( u_texture,  v_uv[2] ) * 0.1531;\n        color += texture2D( u_texture,  v_uv[3] ) * 0.12245;\n        color += texture2D( u_texture,  v_uv[4] ) * 0.12245;\n        color += texture2D( u_texture,  v_uv[5] ) * 0.0918;\n        color += texture2D( u_texture,  v_uv[6] ) * 0.0918;\n        color += texture2D( u_texture,  v_uv[7] ) * 0.051;\n        color += texture2D( u_texture,  v_uv[8] ) * 0.051;\n\n        gl_FragColor = color;\n    #else\n        vec4 center = texture2D( u_texture, v_uv[0] );\n        vec3 color = center.rgb * 0.1633;\n        color += texture2D( u_texture,  v_uv[1] ).rgb * 0.1531;\n        color += texture2D( u_texture,  v_uv[2] ).rgb * 0.1531;\n        color += texture2D( u_texture,  v_uv[3] ).rgb * 0.12245;\n        color += texture2D( u_texture,  v_uv[4] ).rgb * 0.12245;\n        color += texture2D( u_texture,  v_uv[5] ).rgb * 0.0918;\n        color += texture2D( u_texture,  v_uv[6] ).rgb * 0.0918;\n        color += texture2D( u_texture,  v_uv[7] ).rgb * 0.051;\n        color += texture2D( u_texture,  v_uv[8] ).rgb * 0.051;\n\n        gl_FragColor = vec4(color, center.a);\n    #endif\n\n}\n"
},
function(e, t) {
    e.exports = "\nuniform sampler2D u_texture;\nuniform vec2 u_delta;\n\nvarying vec2 v_uv;\n\nvoid main() {\n\n    #ifdef USE_RGBA\n        vec4 color = texture2D( u_texture, v_uv ) * 0.1633;\n\n        vec2 delta = u_delta;\n        color += texture2D( u_texture,  v_uv - delta ) * 0.1531;\n        color += texture2D( u_texture,  v_uv + delta ) * 0.1531;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ) * 0.12245;\n        color += texture2D( u_texture,  v_uv + delta ) * 0.12245;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ) * 0.0918;\n        color += texture2D( u_texture,  v_uv + delta ) * 0.0918;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ) * 0.051;\n        color += texture2D( u_texture,  v_uv + delta ) * 0.051;\n\n        gl_FragColor = color;\n\n    #else\n        vec4 center = texture2D( u_texture, v_uv );\n        vec3 color = center.rgb * 0.1633;\n\n        vec2 delta = u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb * 0.1531;\n        color += texture2D( u_texture,  v_uv + delta ).rgb * 0.1531;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb * 0.12245;\n        color += texture2D( u_texture,  v_uv + delta ).rgb * 0.12245;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb * 0.0918;\n        color += texture2D( u_texture,  v_uv + delta ).rgb * 0.0918;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb * 0.051;\n        color += texture2D( u_texture,  v_uv + delta ).rgb * 0.051;\n\n        gl_FragColor = vec4(color, center.a);\n\n    #endif\n\n}\n"
},
function(e, t) {
    e.exports = "#include <packing>\n\nuniform sampler2D u_texture;\nuniform float u_cameraFarSubNear;\nuniform float u_cameraNearMulFar;\nuniform float u_cameraNear;\nuniform float u_cameraFar;\n\nvarying vec2 v_uv[9];\n\n#if FROM_LINEAR\nfloat tap (vec2 uv) {\n    return unpackRGBAToDepth(texture2D(u_texture, uv));\n}\n#else\nfloat tap (vec2 uv) {\n    return u_cameraNearMulFar / (unpackRGBAToDepth(texture2D(u_texture, uv) * u_cameraFarSubNear - u_cameraFar);\n}\n#endif\n\n#if TO_LINEAR\nfloat encode (float depth) {\n    return packDepthToRGBA(depth);\n}\n#else\nfloat encode (float depth) {\n    return packDepthToRGBA((u_cameraNear + depth) * u_cameraFar) / (u_cameraFarSubNear * viewZ);\n}\n#endif\n\nvoid main() {\n        vec4 color = tap(v_uv[0]) * 0.1633;\n        color += tap( v_uv[1]) * 0.1531;\n        color += tap( v_uv[2]) * 0.1531;\n        color += tap( v_uv[3]) * 0.12245;\n        color += tap( v_uv[4]) * 0.12245;\n        color += tap( v_uv[5]) * 0.0918;\n        color += tap( v_uv[6]) * 0.0918;\n        color += tap( v_uv[7]) * 0.051;\n        color += tap( v_uv[8]) * 0.051;\n\n        gl_FragColor = encode(color);\n}\n"
},
function(e, t) {
    e.exports = "#include <packing>\n\nuniform sampler2D u_texture;\nuniform vec2 u_delta;\nuniform float u_cameraFarSubNear;\nuniform float u_cameraNearMulFar;\nuniform float u_cameraNear;\nuniform float u_cameraFar;\n\nvarying vec2 v_uv;\n\n#if FROM_LINEAR\nfloat tap (vec2 uv) {\n    return unpackRGBAToDepth(texture2D(u_texture, uv));\n}\n#else\nfloat tap (vec2 uv) {\n    return u_cameraNearMulFar / (unpackRGBAToDepth(texture2D(u_texture, uv) * u_cameraFarSubNear - u_cameraFar);\n}\n#endif\n\n#if TO_LINEAR\nfloat encode (float depth) {\n    return packDepthToRGBA(depth);\n}\n#else\nfloat encode (float depth) {\n    return packDepthToRGBA((u_cameraNear + depth) * u_cameraFar) / (u_cameraFarSubNear * viewZ);\n}\n#endif\n\nvoid main() {\n        vec4 color = tap(v_uv) * 0.1633;\n\n        vec2 delta = u_delta;\n        color += tap(v_uv - delta) * 0.1531;\n        color += tap(v_uv + delta) * 0.1531;\n\n        delta += u_delta;\n        color += tap(v_uv - delta) * 0.12245;\n        color += tap(v_uv + delta) * 0.12245;\n\n        delta += u_delta;\n        color += tap(v_uv - delta) * 0.0918;\n        color += tap(v_uv + delta) * 0.0918;\n\n        delta += u_delta;\n        color += tap(v_uv - delta) * 0.051;\n        color += tap(v_uv + delta) * 0.051;\n\n        gl_FragColor = encode(color);\n}\n"
},
function(e, t) {
    e.exports = "uniform vec4 u_randomSeed;\nuniform vec2  u_aspect;\nvarying vec2 v_uv;\n\n#include <snoise2>\n\nvec4 getNoise (vec2 uv) {\n    return vec4(\n        snoise2((uv * 5.0 + 4.0 + u_randomSeed.xy * 421.0) * u_aspect),\n        snoise2((uv * 5.0 + 5.0 + u_randomSeed.zw * 5.0) * u_aspect),\n        snoise2((uv * 1.0 + 4.0 + u_randomSeed.xy * 63.0) * u_aspect),\n        snoise2((uv * 1.0 + 100.0 + 4.0 + u_randomSeed.xy * 243.0) * u_aspect)\n    ) * 0.35 + 0.5;\n}\n\nvoid main () {\n    vec4 noise0 = getNoise(v_uv * 0.5);\n    vec4 noise1 = getNoise(v_uv * 0.5 - vec2(0.0, 0.5));\n    gl_FragColor = mix(noise0, noise1, clamp((v_uv.y - 0.5) / 0.5, 0.0, 1.0));\n}"
},
function(e, t) {
    e.exports = "uniform sampler2D u_patternPrevRenderTexture;\nuniform sampler2D u_noiseTexture;\nuniform vec2  u_aspect;\nuniform vec3 u_a;\nuniform vec3 u_b;\n\nvarying vec2 v_uv;\n\nfloat stroke (vec2 p, vec3 a, vec3 b) {\n    vec2 pa = (p - a.xy) * u_aspect;\n    vec2 ba = (b.xy - a.xy) * u_aspect;\n    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);\n    float r = mix(a.z, b.z, h);\n    return 1.0 - (length(pa - ba * h) - r) / r;\n}\n\nvoid main () {\n    vec4 noise = texture2D(u_noiseTexture,v_uv);\n    vec4 info = texture2D(u_patternPrevRenderTexture, fract(v_uv + (noise.xy - 0.5) / u_aspect * 0.0075));\n    float sd = clamp(stroke(v_uv, u_a, u_b), 0.0, 1.0);\n    info.y = max(info.y, sd);\n\n    info.zw = mix(info.zw, vec2(0.5, 0.5), sd);\n\n    gl_FragColor = info;\n\n}"
},
function(e, t) {
    e.exports = "\nuniform sampler2D u_patternPrevRenderTexture;\nuniform float u_patternDeltaTime;\nuniform vec2 u_patternTexelSize;\nuniform sampler2D u_noiseTexture;\nuniform float u_noiseUvOffset;\n\nvarying vec2 v_uv;\n\n#include <snoise2>\n\nvoid main () {\n    vec4 noise = texture2D(u_noiseTexture, fract(v_uv * vec2(1.0, 0.5) + vec2(0.0, u_noiseUvOffset))) * 2.0 - 1.0;\n    vec2 uv = v_uv + 1.0;\n\n    float deltaA = 1.0 - noise.z * 0.1;\n    float deltaB = 0.25 + noise.y * 0.1;\n    float feed = 0.06 + noise.x * 0.05;\n    float killRate = 0.065 + noise.w * 0.005;\n\n    vec4 infoLeftTop = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(-1.0, 1.0) * u_patternTexelSize));\n    vec4 infoTop = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(0.0, 1.0) * u_patternTexelSize));\n    vec4 infoRightTop = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(1.0, 1.0) * u_patternTexelSize));\n    vec4 infoLeft = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(-1.0, 0.0) * u_patternTexelSize));\n    vec4 infoCenter = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(0.0, 0.0) * u_patternTexelSize));\n    vec4 infoRight = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(1.0, 0.0) * u_patternTexelSize));\n    vec4 infoLeftBottom = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(-1.0, -1.0) * u_patternTexelSize));\n    vec4 infoBottom = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(0.0, -1.0) * u_patternTexelSize));\n    vec4 infoRightBottom = texture2D(u_patternPrevRenderTexture, fract(uv + vec2(1.0, -1.0) * u_patternTexelSize));\n    vec2 dir = noise.zw;\n    vec4 weight0 = vec4(\n        0.05 *(1.0 + 0.75 * (dot(vec2(-0.7071, 0.7071), dir))),\n        0.2 *(1.0 + 0.75 * (dot(vec2(0.0, 1.0), dir))),\n        0.05 *(1.0 + 0.75 * (dot(vec2(0.7071, 0.7071), dir))),\n        0.2 *(1.0 + 0.75 * (dot(vec2(-1.0, 0.0), dir)))\n    );\n    vec4 weight1 = vec4(\n        0.2 *(1.0 + 0.75 * (dot(vec2(1.0, 0.0), dir))),\n        0.05 *(1.0 + 0.75 * (dot(vec2(-0.7071, -0.7071), dir))),\n        0.2 *(1.0 + 0.75 * (dot(vec2(0.0, -1.0), dir))),\n        0.05 *(1.0 + 0.75 * (dot(vec2(0.7071, -0.7071), dir)))\n    );\n    float sum = weight0.x + weight0.y + weight0.z + weight0.w + weight1.x + weight1.y + weight1.z + weight1.w;\n    weight0 /= sum;\n    weight1 /= sum;\n\n    // weight0 = vec4(0.125);\n    // weight1 = vec4(0.125);\n\n    vec2 mixedAB =\n        infoLeftTop.xy * weight0.x +\n        infoTop.xy * weight0.y +\n        infoRightTop.xy * weight0.z +\n        infoLeft.xy * weight0.w +\n        infoCenter.xy * -1.0 +\n        infoRight.xy * weight1.x +\n        infoLeftBottom.xy * weight1.y +\n        infoBottom.xy * weight1.z +\n        infoRightBottom.xy * weight1.w;\n\n    float a = infoCenter.x;\n    float b = infoCenter.y;\n    float abb = a * b * b;\n\n    float newA = a + ( ( deltaA * mixedAB.x ) - abb + ( feed * ( 1.0 - a ) ) ) * u_patternDeltaTime;\n    float newB = b + ( ( deltaB * mixedAB.y ) + abb - ( ( killRate + feed ) * b ) ) * u_patternDeltaTime;\n\n    gl_FragColor = vec4(clamp(newA, 0.0, 1.0), clamp(newB, 0.0, 1.0), infoCenter.zw);\n}"
},
function(e, t) {
    e.exports = "uniform sampler2D u_patternPrevRenderTexture;\nuniform vec2 u_patternTexelSize;\n\nvarying vec2 v_uv;\n\nvoid main () {\n    vec3 halfTexelSize = vec3(u_patternTexelSize * 0.5, 0.0);\n    vec3 v = vec3(0.0, 0.0, texture2D(u_patternPrevRenderTexture, v_uv - halfTexelSize.xy).y);\n    vec3 vx = vec3(1.0, 0.0, texture2D(u_patternPrevRenderTexture, v_uv + halfTexelSize.xz).y);\n    vec3 vy = vec3(0.0, 1.0, texture2D(u_patternPrevRenderTexture, v_uv + halfTexelSize.zy).y);\n    vec3 dvx = vx - v;\n    vec3 dvy = vy - v;\n\n    vec3 n = vec3(0.0, 0.0, 1.0);\n    \n    if (distance(dvx, dvy) > 0.0) {\n        n = cross(normalize(dvx), normalize(dvy));\n    }\n\n    vec4 infoCenter = texture2D(u_patternPrevRenderTexture, v_uv);\n\n    infoCenter.zw = mix(n.xy * 0.5 + 0.5, infoCenter.zw, n.z * 0.95);\n\n    gl_FragColor = infoCenter;\n}"
},
function(e, t) {
    e.exports = "uniform vec4 u_randomSeed;\nuniform vec2  u_aspect;\nvarying vec2 v_uv;\n\n#include <snoise2>\n\nvoid main () {\n    gl_FragColor = vec4(\n\t\tsnoise2((v_uv * 12.0 + 4.0 + u_randomSeed.xy * 421.0) * u_aspect),\n\t\tsnoise2((v_uv * 12.0 + 5.0 + u_randomSeed.zw * 5.0) * u_aspect),\n\t\t0.5,\n\t\t0.5\n\t);\n\n}"
},
function(e, t) {
    e.exports = "attribute vec3 position;\nuniform vec2 u_uvOffset;\nuniform vec2 u_uvScale;\nuniform vec2 u_aspect;\nuniform vec2 u_mouse;\n\nvarying vec2 v_uv;\nvarying vec2 v_toMouse;\n\nvoid main() {\n    v_uv = position.xy * 0.5 + 0.5;//(position.xy * 0.5 + 0.5 - u_uvOffset) / u_uvScale;\n    vec2 mouse = u_mouse;//(u_mouse - u_uvOffset) / u_uvScale;\n    v_toMouse = (mouse - v_uv) * u_aspect ;\n    gl_Position = vec4( position, 1.0 );\n}\n"
},
function(e, t) {
    e.exports = "uniform sampler2D u_patternCurrRenderTexture;\nuniform vec2 u_patternTexelSize;\nuniform vec3 u_color1;\nuniform vec3 u_color2;\nuniform float u_highlightMultiplier;\n\nvarying vec2 v_uv;\nvarying vec2 v_toMouse;\n\nvoid main () {\n    vec4 infoCenter = texture2D(u_patternCurrRenderTexture, v_uv);\n    infoCenter.y = smoothstep(0.1, 0.25, infoCenter.y);\n    vec3 toMouse3 = normalize(vec3(v_toMouse, 0.08 - infoCenter.x * 0.01));\n    vec3 N = vec3(clamp(infoCenter.zw * 4.0 - 2.0, vec2(-1.0), vec2(1.0)), 0.0);\n    N.z = sqrt(1.0 - N.x * N.x - N.y * N.y);\n    gl_FragColor = vec4(mix(u_color1, u_color2, infoCenter.y) + max(0.0, dot(N, toMouse3)) * u_highlightMultiplier, 1.0);\n\n}"
},
function(e, t) {
    e.exports = "attribute vec2 a_position;\nattribute vec4 a_offsetRatioXY13;\nattribute vec4 a_offsetRatioXY24;\nattribute vec4 a_normalXY13;\nattribute vec4 a_normalXY24;\n\nuniform vec2 u_uvOffset;\nuniform vec2 u_uvScale;\nuniform vec2 u_aspect;\nuniform vec2 u_constraintedMouse;\nuniform float u_baseBlendRatio;\nuniform float u_clothEffectRatio;\nuniform float u_rotation;\n\nvarying vec2 v_uv;\nvarying vec3 v_normal;\n\n#include <rotate2d>\n\nvec2 blendValues(vec4 ac, vec4 bd, vec2 blendRatios) {\n    vec4 y0y1 = mix(ac, bd, blendRatios.x);\n    return mix(\n        y0y1.xy,\n        y0y1.zw,\n        blendRatios.y\n    );\n}\n\nvoid main() {\n    vec2 position = a_position;\n    vec2 rotatedCenterPosition =  rotate2d(position.xy -0.5, -0.1);\n    v_uv = mix(position.xy, rotatedCenterPosition * vec2(1.0, 0.915) + 0.5, u_rotation);\n    position.xy = mix(position.xy, rotatedCenterPosition * vec2(1.12, 0.915) + 0.5, u_rotation);\n    \n    vec2 blendRatios = clamp(u_constraintedMouse * 0.5 + 0.5, 0.0, 1.0);\n\n    vec2 offsetRatios =  blendValues(a_offsetRatioXY13, a_offsetRatioXY24, blendRatios);\n    vec3 normal = vec3(blendValues(a_normalXY13, a_normalXY24, blendRatios), 0.0);\n    normal.z = sqrt(max(0.0, 1.0 - normal.x * normal.x - normal.y * normal.y));\n\n    vec2 oriPos = position * 2.0 - 1.0;\n    v_normal = normalize(mix(vec3(0.0, 0.0, 1.0), normal, clamp(length(oriPos - u_constraintedMouse), 0.0, 1.0) * u_baseBlendRatio));\n\n    oriPos += offsetRatios * abs(blendRatios - 0.5) * u_clothEffectRatio;\n\n    vec2 ratioXY = abs(cos(oriPos * 3.1415926 * 0.5));\n    float ratio = ratioXY.x * ratioXY.y;\n\n    vec2 pos = oriPos;// + u_constraintedMouse * ratio * 0.1;\n    pos = mix(pos + (u_constraintedMouse - pos) * vec2(0.2, 0.1) * ((1.0 - abs(pos.yx - u_constraintedMouse.yx) / 2.0)), pos, pos * pos);\n    pos = mix(oriPos, pos, u_clothEffectRatio);\n\n\tpos = pos * 0.5 + 0.5;\n\tpos = pos * u_uvScale + u_uvOffset;\n\tpos = (pos * 2.0 - 1.0);\n\n    gl_Position = vec4(pos, 0.0, 1.0 );\n}\n"
},
function(e, t) {
    e.exports = "uniform sampler2D u_texture;\n// uniform sampler2D u_matCapTexture;\n\nvarying vec2 v_uv;\nvarying vec3 v_normal;\n\nvoid main () {\n    vec4 color = texture2D(u_texture, v_uv);\n\tvec3 normal = normalize(v_normal);\n\t\n\tfloat dotWeight = dot(normal.xy, vec2(-0.7071, 0.7071));\n\tcolor.rgb += smoothstep(0.0, 1.0, dotWeight) * 0.275;\n\tcolor.rgb *= smoothstep(-1.0, 0.5, dotWeight);\n\n\tgl_FragColor = color;\n}"
},
function(e, t) {
    e.exports = "\nuniform float u_time;\n\n// varying vec3 v_offset;\nvarying vec3 v_viewPosition;\nvarying vec2 v_uv;\nvarying vec2 v_uvA;\nvarying vec2 v_uvB;\n\n#include <snoise3> \n\nvoid main () {\n    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\n\n    // v_offset = vec3(\n    //     snoise3(position.xyz + vec3(0.0, 0.0, u_time)),\n    //     snoise3(position.xyz + vec3(0.0, 0.0, u_time) + 100.0),\n    //     snoise3(position.xyz + vec3(0.0, 0.0, u_time) + 200.0)\n    // );\n    // worldPosition.xyz += v_offset * 0.025;\n\n    v_uvA = uv * vec2(0.5, 1.0);\n    v_uvB = v_uvA + vec2(0.5, 0.0);\n\n    vec4 mvPosition = viewMatrix * worldPosition;;\n    v_viewPosition = mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n    \n    v_uv = gl_Position.xy / gl_Position.w * 0.5 + 0.5;\n}"
},
function(e, t) {
    e.exports = "\nuniform sampler2D u_infoTexture;\nuniform sampler2D u_matCapTexture;\nuniform sampler2D u_bgTexture;\nuniform float u_inRatio;\n\nuniform vec2 u_aspect;\n\n// varying vec3 v_offset;\nvarying vec3 v_viewPosition;\nvarying vec2 v_uv;\nvarying vec2 v_uvA;\nvarying vec2 v_uvB;\n\nuniform mat3 normalMatrix;\n\n#include <getScatterLine>\n#include <snoise4>\n\nvoid main () {\n    vec3 infoA = texture2D(u_infoTexture, v_uvA).rgb;\n    vec3 infoB = texture2D(u_infoTexture, v_uvB).rgb;\n    \n    vec3 modelNormal = vec3(infoA.rg * 2.0 - 1.0, 0.0);\n    modelNormal.z = sqrt(1.0 - modelNormal.x * modelNormal.x - modelNormal.y * modelNormal.y);\n    vec3 n = normalMatrix * modelNormal;//normalize(modelNormal + vec3(normalize(v_offset).xy * 0.125, 0.0));\n    vec3 r = reflect( normalize(v_viewPosition), n );\n    float m = 2. * sqrt(\n        pow( r.x, 2. ) +\n        pow( r.y, 2. ) +\n        pow( r.z + 1., 2. )\n    );\n    vec2 matcapUv = r.xy / m + .5;\n    vec3 matcapColor = texture2D(u_matCapTexture, matcapUv).rgb;\n\n    vec3 baseColor = vec3(infoB.b * matcapColor.g);\n    vec3 whiteColor = vec3(max(infoB.g, matcapColor.g));\n    vec3 color = mix(whiteColor, baseColor, u_inRatio) * infoB.r;\n\n    float edgeRatio = smoothstep(1.0, 0.3, infoA.b);\n    vec2 bgUvOffset = n.xy * vec2(edgeRatio * 0.4) * u_aspect;\n    // vec3 bgColor1 = texture2D(u_bgTexture, (v_uv - 0.5) - bgUvOffset + 0.5).rgb;\n    // vec3 bgColor2 = texture2D(u_bgTexture, (v_uv - 0.5) + bgUvOffset + 0.5).rgb;\n    // color = mix(color, color * (0.3 + edgeRatio) + mix(bgColor2, bgColor1, n.z), mix(0.4, 0.8, u_inRatio));\n\n    vec3 bgColor2 = texture2D(u_bgTexture, ((v_uv - 0.5) + bgUvOffset) * infoA.b + 0.5).rgb;\n    color = mix(color, color * (0.3 + edgeRatio * infoB.b) + bgColor2 * infoB.r, mix(0.3, 0.6, u_inRatio));\n    gl_FragColor = vec4(color, 1.0);\n}"
},
function(e, t) {
    e.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_btnOffset;\nuniform vec2 u_btnScale;\n\nvarying vec2 v_uv;\n\n#include <rotate2d>\n\nvoid main () {\n    v_uv = uv;\n    gl_Position = vec4(position.xy * u_btnScale + u_btnOffset, 0.0, 1.0);\n}"
},
function(e, t) {
    e.exports = "\nuniform sampler2D u_texture;\n\nvarying vec2 v_uv;\n\nvoid main () {\n    gl_FragColor = texture2D(u_texture, v_uv);\n    gl_FragColor.rgb = 0.075 + gl_FragColor.rgb * 0.8;\n    // gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n}"
},
function(e, t) {
    e.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nuniform vec2 u_btnOffset;\nuniform vec2 u_btnScale;\n\nuniform vec2 u_uvOffset;\nuniform vec2 u_uvScale;\n\nvarying vec2 v_uv;\n\n#include <rotate2d>\n\nvoid main () {\n    v_uv = (position.xy * u_btnScale + u_btnOffset) * 0.5 + 0.5;\n\tv_uv = (v_uv - u_uvOffset) / u_uvScale;\n    gl_Position = vec4(position.xy * 2.0 + vec2(-1.0, 1.0), 0.0, 1.0);\n}"
},
function(e, t, n) {
    "use strict";
    var i = n(5),
    r = n(3),
    o = n(1),
    a = n(2),
    s = n(12),
    u = n(0),
    c = n(10),
    l = n(4),
    d = n(6),
    f = n(158);
    function h() {
        var e = window.screen.height <= 900;
        v.constructor.call(this, {
            refDomId: "home-video",
            path: "",
            backgroundColor: 0,
            videoWidth: i.isMobile ? 480 : e ? 1440 : 1920,
            videoHeight: i.isMobile ? 480 : e ? 900 : 1080,
            cameraWidth: 1920,
            cameraHeight: 1080,
            mouseProjectionDistanceRatio: 1.025,
            parallax: 0
        })
    }
    var v = c.prototype,
    m = h.prototype = Object.create(v);
    m.constructor = h,
    m.preInit = function() {
        v.preInit.call(this),
        this.sceneRenderTarget = l.createRenderTarget(1, 1, !0),
        this.sceneRenderTarget.depthBuffer = !0,
        this.sceneRenderTarget.stencilBuffer = !0,
        this.blurredSceneRenderTarget = l.createRenderTarget(1, 1, !0),
        f.init(),
        (C = new u.Texture(o.loader.add(r.cdnPath + "visuals/homeVideo/model_n.jpg").content)).wrapS = C.wrapT = u.RepeatWrapping,
        C.magFilter = C.minFilter = u.LinearFilter,
        C.flipY = !1,
        C.needsUpdate = !0,
        (I = new u.Texture(o.loader.add(r.cdnPath + "visuals/homeVideo/bottom_n.jpg", {
            loadThrough: !1
        }).content)).wrapS = I.wrapT = u.RepeatWrapping,
        I.needsUpdate = !0,
        (P = o.loader.add(r.videoCdnPath + "visuals/homeVideo/" + this.videoHeight + ".mp4", {
            crossOrigin: "anonymous"
        }).content).addEventListener("ended", ie),
        (R = new u.Texture(P)).magFilter = R.minFilter = u.LinearFilter,
        R.generateMipmaps = !1;
        var e = this;
        o.loader.add(r.assetPath + "visuals/homeVideo/room.glb", {
            type: "any",
            weight: 1,
            hasLoading: !0,
            loadFunc: o.GLTFLoadFunc,
            onLoad: function(t) {
                var n = t.scene.children;
                e._initMaterials(n)
            }
        }),
        o.loader.add(r.assetPath + "visuals/homeVideo/tagline.buf", {
            type: "xhr",
            responseType: "arraybuffer",
            weight: 1,
            onLoad: function(e) {
                N = new u.BufferGeometry;
                var t = 0;
                N.setAttribute("position", new u.BufferAttribute(new Float32Array(e, t, 8160), 2)),
                t += 32640,
                N.setAttribute("a_info", new u.BufferAttribute(new Uint8Array(e, t, 4080), 1, !0)),
                t += 4080,
                N.setIndex(new u.BufferAttribute(new Uint16Array(e, t, 12051), 1))
            }
        }),
        o.loader.add(r.assetPath + "visuals/homeVideo/data.buf", {
            type: "xhr",
            responseType: "arraybuffer",
            weight: 1,
            onLoad: function(e) {
                A = new Float32Array(e),
                D = A.length / 3
            }
        })
    },
    m.init = function() {
        if (v.init.call(this), g = a.powerTwoCeilingBase(D), x = p * g, y = l.createRenderTarget(x, _, !0, !0), w = new Uint8Array(x * _ * 4), (b = new u.BufferGeometry).setAttribute("position", new u.BufferAttribute(new Float32Array([ - 1, -1, 0, 4, -1, 0, -1, 4, 0]), 3)), b.setAttribute("uv", new u.BufferAttribute(new Float32Array([0, 1, x / this.videoWidth * 2.5, 1, 0, 1 - _ / this.videoHeight * 2.5]), 2)), F.u_timePixelUvClamp.value.set((x + .5) / this.videoWidth, 1 - (p + .5) / this.videoHeight), S = new u.RawShaderMaterial({
            uniforms: {
                u_texture: F.u_videoTexture
            },
            depthTest: !1,
            depthWrite: !1,
            transparent: !0,
            blending: u.NoBlending,
            vertexShader: l.precisionPrefix + n(159),
            fragmentShader: l.precisionPrefix + n(29)
        }), M = this.camera.clone(), (k = new u.PointLight(9282756, .8, 5, 2)).position.set(0, 0, 0), this.scene.add(k), P.muted = !0, P.setAttribute("playsinline", "playsinline"), P.setAttribute("webkit-playsinline", "webkit-playsinline"), P.loop = !0, L = new u.Vector3, B = new u.RawShaderMaterial({
            uniforms: {
                u_texture: {
                    value: this.blurredSceneRenderTarget.texture
                },
                u_offset2d: F.u_offset2d,
                u_scale2d: F.u_scale2d,
                u_opacity: F.u_opacity,
                u_aspect: {
                    value: new u.Vector2(this.cameraHeight / this.cameraWidth, 1)
                },
                u_ratio: {
                    value: 0
                },
                u_showRatio: {
                    value: 0
                },
                u_taglineWidth: {
                    value: 7
                },
                u_time: {
                    value: 0
                },
                u_solidLineInfo: {
                    value: new u.Vector4(0, 0, -.9975, 1)
                },
                u_outlineLineInfo: {
                    value: new u.Vector4(0, 0, .9975, 0)
                }
            },
            vertexShader: l.precisionPrefix + n(160),
            fragmentShader: l.precisionPrefix + n(161),
            transparent: !0
        }), window.gui) {
            var e = this.gui,
            t = e.addFolder("video scatter");
            t.add(F.u_lightScatterDivider, "value", 0, 100, 1e-4).name("u_lightScatterDivider"),
            t.add(F.u_lightScatterPowInv, "value", 0, 1, 1e-4).name("u_lightScatterPowInv"),
            t.open();
            var i = e.addFolder("video pointLight");
            i.addColor(k, "color"),
            i.add(this, "mouseProjectionDistanceRatio", 0, 2, 1e-4),
            i.add(k, "intensity", 0, 1, 1e-4),
            i.add(k, "distance", 0, 50, 1e-4),
            i.add(k, "decay", 0, 5, 1e-4),
            i.open();
            var r = e.addFolder("video playback");
            r.add(P, "play"),
            r.add(P, "pause"),
            r.open()
        }
        this.precompile()
    },
    m._initMaterials = function(e) {
        O = new u.Vector3(0, 0, 0),
        F = {
            u_videoTexture: {
                value: R
            },
            u_videoAspect: {
                value: new u.Vector2(this.videoWidth, this.videoHeight)
            },
            u_videoResolution: {
                value: new u.Vector2(this.videoWidth, this.videoHeight)
            },
            u_videoUvOffset: {
                value: new u.Vector2(0, 0)
            },
            u_videoUvScale: {
                value: new u.Vector2(1, 1)
            },
            u_resolution: {
                value: new u.Vector2(1, 1)
            },
            u_cameraPosition: {
                value: this.camera.position
            },
            u_reflectionCameraPosition: {
                value: f.reflectionCamera.position
            },
            u_lightPosition: {
                value: O
            },
            u_lightScatterDivider: {
                value: 70
            },
            u_lightScatterPowInv: {
                value: .5
            },
            u_scale2d: {
                value: new u.Vector2(1, 1)
            },
            u_offset2d: {
                value: new u.Vector2(0, 0)
            },
            u_textureMap: {
                value: new u.Vector4(0, 0, 1, 1)
            },
            u_timePixelUvClamp: {
                value: new u.Vector2
            },
            u_opacity: {
                value: 1
            }
        };
        var t = e.length,
        i = void 0;
        for (; t--;) {
            var r = e[t],
            o = d(u.UniformsUtils.merge([u.UniformsLib.lights]), {
                u_diffuse: {
                    value: new u.Color(16777215)
                },
                u_specular: {
                    value: new u.Color(16777215)
                },
                u_shininess: {
                    value: 1
                },
                u_mvp: {
                    value: new u.Matrix4
                }
            },
            F),
            a = r.material = r.originalMaterial = new u.ShaderMaterial({
                uniforms: o,
                vertexShader: n(55),
                fragmentShader: n(56),
                lights: !0,
                blending: u.NoBlending,
                transparent: !1,
                dithering: !0
            }),
            s = r.reflectionMaterial = new u.ShaderMaterial({
                uniforms: o,
                vertexShader: n(55),
                fragmentShader: n(56),
                lights: !0,
                blending: u.NoBlending,
                transparent: !1,
                dithering: !0
            });
            switch (r.reflectionMaterial.defines.IS_REFLECTION = !0, r.name) {
            case "model":
                z = r,
                o.u_normalTexture = {
                    value: C
                },
                s.defines.IS_MODEL = a.defines.IS_MODEL = !0,
                s.vertexColors = a.vertexColors = u.VertexColors,
                s.extensions.derivatives = a.extensions.derivatives = !0;
                break;
            case "walls":
                o.u_diffuse.value.setHex(4210752);
                break;
            case "bottom":
                o.u_diffuse.value.setHex(2236962),
                o.u_specular.value.setHex(14671871),
                i = r.geometry,
                o.u_normalTexture = {
                    value: I
                },
                s.defines.IS_BOTTOM = a.defines.IS_BOTTOM = !0,
                s.vertexColors = a.vertexColors = u.VertexColors,
                s.extensions.derivatives = a.extensions.derivatives = !0;
                break;
            case "panel":
                E = r,
                o.u_diffuse.value.setHex(0),
                o.u_specular.value.setHex(0),
                o.u_reflectionTexture = {
                    value: f.renderTarget.texture
                },
                o.u_reflectionTextureMatrix = {
                    value: f.textureMatrix
                },
                s.defines.IS_PANEL = a.defines.IS_PANEL = !0
            }
            T.push(r),
            this.scene.add(r)
        }
        for (var c = i.attributes.uv.array,
        l = new Float32Array(c.length), h = 35 / 180 * Math.PI, v = 0, m = 0, p = c.length / 2; v < p; v++) {
            var g = c[m + 0],
            x = c[m + 1];
            $(c, m, g, x, 6, 0, 0),
            $(l, m, g, x, 9, 1.21, h),
            m += 2
        }
        i.setAttribute("a_uv2", new u.BufferAttribute(l, 2));
        var _ = new u.Vector3( - 4.36079, .6, -4),
        y = new u.Vector3(4.36079, 3.87477, -3.98),
        w = E.geometry,
        b = new u.Vector3(0, .5 * (_.y - y.y), 3.98),
        S = new u.Vector3(.5 / 4.36079, .5 / Math.abs(y.y - _.y), 1);
        w.rotateX(Math.PI / 2),
        E.rotation.x = 0,
        w.translate(b.x, b.y, b.z),
        w.scale(S.x, S.y, S.z),
        E.position.set( - b.x, -b.y, -b.z),
        E.scale.set(1 / S.x, 1 / S.y, 1 / S.z)
    },
    m.resize = function() {
        v.resize.call(this),
        f.resize(o.width, o.height)
    },
    m.onDomRectUpdate = function() {
        this.paddingTop = 0 | a.cMap(this.refDomRect.top, 0, o.height / 2, o.height / 20, o.height / 10)
    },
    m.playVideo = ee,
    m.pauseVideo = te,
    m.beforeRender = function(e) {
        var t = T.length;
        for (; t--;) T[t].visible = !0;
        z.visible = !1
    },
    m.afterRender = function(e) {
        var t = l.getColorState();
        l.renderer.autoClear = !0,
        l.renderer.autoClearColor = !1,
        l.renderer.autoClearDepth = !1;
        var n = Math.ceil(.25 * this.width) || 0,
        i = Math.ceil(.25 * this.height) || 0;
        this.blurredSceneRenderTarget.setSize(n, i),
        s.blur9(4, .25, this.sceneRenderTarget, null, this.blurredSceneRenderTarget, !0),
        e.setRenderTarget(null),
        e.setScissorTest(!0),
        e.setViewport(this.left, o.height - this.top - this.height, this.width, this.height),
        e.setScissor(this.left, o.height - this.top - this.height, this.width, this.height),
        l.copy(this.sceneRenderTarget.texture);
        var r = T.length;
        for (; r--;) T[r].visible = !1;
        z.visible = !0,
        e.render(this.scene, this.camera),
        r = T.length;
        for (; r--;) T[r].visible = !0;
        z.visible = !1,
        l.renderGeometry(N, B),
        e.setScissorTest(!1),
        l.setColorState(t)
    },
    m.update = function(e) {
        if (this.testViewport(), this.needsRender) {
            var t = Math.min(this.viewportHeight, o.height),
            n = Math.min(0, t - this.height) * a.sign(this.viewportTop >= this.top ? -1 : 1);
            F.u_resolution.value.set(this.width, this.height),
            F.u_videoUvOffset.value.x = -this.left,
            F.u_videoUvOffset.value.y = this.top - o.height + this.height - .5 * n;
            var i = F.u_offset2d.value,
            r = F.u_scale2d.value,
            s = F.u_videoUvScale.value;
            i.y = n / this.height;
            var u = Math.max(1, 1 / (this.videoHeight / this.videoWidth * this.width / t));
            if (r.x = this.cameraWidth / this.cameraHeight * this.videoHeight / this.videoWidth * u, r.y = this.width / this.height * this.videoHeight / this.videoWidth * u, s.y = r.y, s.x = u, this.updateMouse(1 / r.x, 1 / r.y, -i.x, -i.y), U && this.playVideo(), o.onUpdateEnded.addOnce(re, this), K) {
                H = P.currentTime,
                j >= D && (j = 0);
                var c = 3 * j;
                M.position.fromArray(A, c),
                L.set(0, 1.2, -4),
                M.lookAt(L),
                this.camera.lookAt(L),
                this.camera.aspect = M.aspect = this.cameraWidth / this.cameraHeight;
                var l = 35 * Math.PI / 180,
                d = 45 * Math.PI / 180,
                h = this.cameraHeight * d / (1 * this.cameraWidth);
                this.camera.fov = M.fov = 2 * Math.atan(h / 2 / l) * 180 / Math.PI,
                this.camera.updateProjectionMatrix(),
                M.updateProjectionMatrix();
                var v = a.cUnMix(0, 60, j);
                v *= j > 360 ? a.cUnMix(360, 420, j) : a.cUnMix(360, 300, j),
                v *= a.cUnMix(720, 660, j),
                J && (v *= a.cUnMix(60 * q, 60 * (q + 1), j)),
                F.u_opacity.value = v,
                B.uniforms.u_solidLineInfo.value.y = .1 + (j > 360 ? -.14 : .175),
                B.uniforms.u_outlineLineInfo.value.y = .1 + (j > 360 ? .175 : -.14),
                B.uniforms.u_ratio.value = j / 720
            }
            var m = this.inRatio > .7;
            m !== V && (V = m, TweenLite.to(B.uniforms.u_showRatio, m ? 2 : 1.35, {
                value: m ? 1 : 0
            })),
            B.uniforms.u_time.value = (B.uniforms.u_time.value + .2 * e) % 1,
            k.position.copy(this.mouse3),
            k.position.y = Math.max(k.position.y, .04),
            O.copy(k.position),
            this.camera.position.copy(M.position),
            this.camera.quaternion.copy(M.quaternion),
            this.camera.rotateY( - .015 * a.clamp(this.mouse.x, -1, 1)),
            this.camera.rotateX(.015 * a.clamp(this.mouse.y, -1, 1)),
            this.scene.updateMatrixWorld(!0),
            this.camera.updateMatrixWorld(!0),
            M.updateMatrixWorld(!0);
            for (var p = T.length; p--;) {
                var g = T[p],
                x = g.material.uniforms.u_mvp.value;
                x.multiplyMatrices(M.matrixWorldInverse, g.matrixWorld),
                x.premultiply(M.projectionMatrix)
            }
            Q && (f.update(E, this.scene, this.camera), this.render())
        } else U && this.pauseVideo();
        K = !1
    };
    var p = 8,
    g = void 0,
    x = void 0,
    _ = p,
    y = void 0,
    w = void 0,
    b = void 0,
    S = void 0,
    T = [],
    M = void 0,
    P = void 0,
    R = void 0,
    C = void 0,
    I = void 0,
    A = void 0,
    D = void 0,
    L = void 0,
    F = void 0,
    z = void 0,
    E = void 0,
    k = void 0,
    O = void 0,
    U = !0,
    N = void 0,
    B = void 0,
    V = !1,
    H = 0,
    W = 0,
    G = 0,
    j = 0,
    q = .75,
    X = !1,
    Y = null,
    Z = !1,
    K = !1,
    Q = !1,
    J = !0;
    function $(e, t, n, i, r, o, s) {
        n -= .5,
        i -= .5;
        var u = a.distanceTo(n, i),
        c = Math.atan2(i, n) + s;
        n = Math.cos(c) * u + .5,
        i = Math.sin(c) * u + .5,
        n += o,
        i += o,
        n *= r,
        i *= r,
        e[t + 0] = n,
        e[t + 1] = i
    }
    function ee() {
        if (!Z) if (X) Y = !0;
        else {
            X = !0,
            Z = !0;
            var e = P.play();
            e ? e.then(ne).
            catch(ne) : ne()
        }
    }
    function te() {
        Z && (X ? Y = !1 : (X = !0, Z = !1, P.pause(), ne()))
    }
    function ne() {
        X = !1;
        var e = Y;
        Y = null,
        !0 === e ? ee() : !1 === e && te()
    }
    function ie() {
        J = !1
    }
    function re() {
        if (Z && P.readyState >= P.HAVE_FUTURE_DATA && (Q || P.currentTime > q)) {
            K = !0,
            Q = !0,
            R.needsUpdate = !0;
            var e = Math.floor(60 * P.currentTime);
            i.isUC ? (j = e, H === P.currentTime ? (W += o.deltaTime, W %= 12, j = Math.floor(60 * W)) : W = P.currentTime) : 0 === (j = function() {
                l.renderGeometry(b, S, y),
                l.renderer.readRenderTargetPixels(y, 0, 0, x, _, w);
                for (var e = p >> 1,
                t = 0,
                n = 0; n < g; n++) t |= w[4 * (e + n * p + x * e)] > 127 ? 1 << n: 0;
                return t
            } ()) ? j = G + 1 : G = j
        }
        j > 720 && (j -= 720)
    }
    e.exports = new h
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(4),
    o = n(1);
    t.init = function() {
        c = new i.Plane,
        l = new i.Vector3,
        d = new i.Vector3,
        f = new i.Vector3,
        h = new i.Matrix4,
        v = new i.Vector3(0, 0, -1),
        m = new i.Vector4,
        p = new i.Vector4,
        g = new i.Vector3,
        _ = new i.Vector3,
        x = new i.Vector4,
        u = t.reflectionCamera = new i.PerspectiveCamera,
        s = t.textureMatrix = new i.Matrix4,
        (a = t.renderTarget = r.createRenderTarget(1, 1)).depthBuffer = !0
    },
    t.resize = function(e, t) {
        var n = e / 16;
        a.setSize(~~ (8.72158 * n), ~~Math.abs((3.87477 - .6) * n))
    },
    t.update = function(e, t, n) {
        if (d.setFromMatrixPosition(e.matrixWorld), f.setFromMatrixPosition(n.matrixWorld), h.extractRotation(e.matrixWorld), l.set(0, 0, 1), l.applyMatrix4(h), g.subVectors(d, f), g.dot(l) > 0) return;
        g.reflect(l).negate(),
        g.add(d),
        h.extractRotation(n.matrixWorld),
        v.set(0, 0, -1),
        v.applyMatrix4(h),
        v.add(f),
        _.subVectors(d, v),
        _.reflect(l).negate(),
        _.add(d),
        u.position.copy(g),
        u.up.set(0, 1, 0),
        u.up.applyMatrix4(h),
        u.up.reflect(l),
        u.lookAt(_),
        u.far = n.far,
        u.updateMatrixWorld(),
        u.projectionMatrix.copy(n.projectionMatrix),
        u.userData.recursion = 0,
        s.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        s.multiply(u.projectionMatrix),
        s.multiply(u.matrixWorldInverse),
        s.multiply(e.matrixWorld),
        c.setFromNormalAndCoplanarPoint(l, d),
        c.applyMatrix4(u.matrixWorldInverse),
        m.set(c.normal.x, c.normal.y, c.normal.z, c.constant);
        var i = u.projectionMatrix;
        x.x = (Math.sign(m.x) + i.elements[8]) / i.elements[0],
        x.y = (Math.sign(m.y) + i.elements[9]) / i.elements[5],
        x.z = -1,
        x.w = (1 + i.elements[10]) / i.elements[14],
        m.multiplyScalar(2 / m.dot(x)),
        i.elements[2] = m.x,
        i.elements[6] = m.y,
        i.elements[10] = m.z + 1 - y,
        i.elements[14] = m.w;
        for (var r = o.renderer,
        w = 0; w < t.children.length; w++) {
            var b = t.children[w];
            b.reflectionMaterial && (b.material = b.reflectionMaterial)
        }
        e.visible = !1;
        var S = r.getRenderTarget(),
        T = r.xr.enabled,
        M = r.shadowMap.autoUpdate;
        r.xr.enabled = !1,
        r.shadowMap.autoUpdate = !1,
        r.setRenderTarget(a),
        r.clear(),
        r.render(t, u),
        r.setRenderTarget(null),
        r.xr.enabled = T,
        r.shadowMap.autoUpdate = M,
        r.setRenderTarget(S),
        r.setScissorTest(!1);
        var P = n.bounds;
        if (void 0 !== P) {
            var R = r.getSize(),
            C = r.getPixelRatio();
            p.x = P.x * R.width * C,
            p.y = P.y * R.height * C,
            p.z = P.z * R.width * C,
            p.w = P.w * R.height * C,
            r.state._viewport(p)
        }
        e.visible = !0;
        for (var I = 0; I < t.children.length; I++) {
            var A = t.children[I];
            A.originalMaterial && (A.material = A.originalMaterial)
        }
    };
    var a = t.renderTarget = null,
    s = t.textureMatrix = null,
    u = t.reflectionCamera = null,
    c = void 0,
    l = void 0,
    d = void 0,
    f = void 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = void 0,
    y = 0
},
function(e, t) {
    e.exports = "attribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    v_uv = uv;\n    gl_Position = vec4( position, 1.0 );\n}\n"
},
function(e, t) {
    e.exports = "attribute vec2 position;\nattribute float a_info;\n\nuniform vec4 u_solidLineInfo;\nuniform vec4 u_outlineLineInfo;\n\nuniform vec2 u_offset2d;\nuniform vec2 u_scale2d;\nuniform vec2 u_aspect;\nuniform float u_ratio;\nuniform float u_taglineWidth;\nuniform float u_showRatio;\nuniform float u_time;\n\nvarying vec2 v_uv;\n// varying vec3 v_color;\nvarying float v_showRatio;\nvarying float v_blink;\n\nconst float offset = 0.2;\n\n#include <rotate2d>\n\nvec3 getPos (vec2 p, vec4 lineInfo) {\n\tvec4 pos = vec4(p.xy * 1.5 + lineInfo.xy, 0.0, 1.0);\n\n\tpos.xyw *= u_aspect.xyx;\n    pos.xyw *= u_scale2d.xyx;\n    pos.xy += u_offset2d;\n\n\tpos.x += mix(-1.0, -1.0 - pos.w * u_taglineWidth * offset, lineInfo.w);\n\tpos.x -= (pos.w * u_taglineWidth * (1.0 - offset) - 2.0) * mix(0.85, 1.0, lineInfo.w) * u_ratio;\n\n\treturn vec3((rotate2d((pos.xy - u_offset2d) / u_aspect.xy / u_scale2d.xy - lineInfo.xy - 0.5, -0.1) + 0.5 + lineInfo.xy) * u_aspect.xy * u_scale2d.xy + u_offset2d, lineInfo.z);\n}\n\nvoid main () {\n\tfloat rnd1 = fract(a_info * 3225.434);\n\tfloat rnd2 = fract(a_info * 433.326236);\n\tv_showRatio = smoothstep(rnd1 * 0.35, 1.0 - rnd2 * 0.35, u_showRatio);\n\t\n\tvec4 lineInfo = mix(u_solidLineInfo, u_outlineLineInfo, step(0.5, a_info));\n\n\tvec4 pos = vec4(getPos(position * vec2(1.0, 1.0 + rnd1 * 5.0 * (1.0 - v_showRatio)) + vec2(0.0, rnd2 * sign(lineInfo.y) * (1.0 - v_showRatio * v_showRatio)), lineInfo), 1.0);\n\n\tv_uv = pos.xy * 0.5 + 0.5;\n\n\tpos.w = 1.0;\n\tgl_Position = pos;\n\tv_blink = max(0.05, step(0.0, -lineInfo.y));\n\n}"
},
function(e, t) {
    e.exports = "uniform sampler2D u_texture;\nuniform float u_opacity;\n\nvarying vec2 v_uv;\nvarying float v_showRatio;\nvarying float v_blink;\n\nvoid main () {\n\tvec3 blurredColor = texture2D(u_texture, v_uv).rgb;\n\tgl_FragColor = vec4(mix(blurredColor, vec3(1.0), v_blink), u_opacity * v_showRatio);\n}"
},
function(e, t, n) {
    "use strict";
    var i = n(163),
    r = (n(3), n(5)),
    o = n(1),
    a = n(11),
    s = n(2),
    u = n(9),
    c = n(28),
    l = n(19);
    function d() {
        f.constructor.call(this, {
            id: "about",
            path: "",
            domRect: null,
            aliases: ["about"],
            audioId: "about"
        })
    }
    var f = n(18).prototype,
    h = d.prototype = Object.create(f);
    h.constructor = d,
    h.preInit = function(e, t) {
        this.domRect = new a({
            refDom: t
        }),
        o.isSupportWebGL && i.preInit();
        v = document.getElementById("about-blog"),
        m = v.querySelector(".sec-context-inner").style,
        p = document.getElementById("about-services"),
        g = p.querySelector(".sec-context-inner").style
    },
    h.init = function(e) {
        if (o.isSupportWebGL) {
            i.init();
            var t = this.currentDom;
            u.add(t, "click", y),
            x = t.dataset.baseText
        }
        f.init.call(this)
    },
    h.show = function(e) {},
    h.hide = function() {},
    h.getScrollToFromRoute = function(e) {
        return "about"
    },
    h.resize = function() {
        this.hasInitialized && (this.domRect.testViewport(!0), o.isSupportWebGL && i.resize())
    },
    h.update = function(e, t) {
        if (this.hasInitialized) {
            o.isSupportWebGL && i.update(e, t, Math.ceil(this.domRect.refDomRect.height));
            var n = (t - o.height) / (.75 * o.height),
            a = s.smoothstep(0, .5, Math.max(0, 1 - Math.abs(n)));
            if (m.opacity = a, a > 0) {
                var u = Math.max(Math.abs(n) - .25, 0) * Math.sign(n) * -200;
                m.transform = "translate3d(0," + (n * o.height * .75 + u) + "px,0)"
            }
            if (n = (t - 3 * o.height) / (.75 * o.height), a = s.smoothstep(0, .5, Math.max(0, 1 - Math.abs(n))), g.opacity = a, a > 0) {
                var d = Math.max(Math.abs(n) - .25, 0) * Math.sign(n) * -200;
                g.transform = "translate3d(0," + (n * o.height * .75 + d) + "px,0)"
            }
            if (o.isSupportWebGL) {
                var h = !1;
                r.isMobile || (o.scrollTop > 5 || _) && o.mouse.y < i.bottom && l.isIdle() ? (_ ? c.baseText === x && c.setBaseText() : c.setBaseText(x), h = !0) : c.baseText === x && c.setBaseText(),
                i.isClickable = h
            }
        }
        f.update.call(this, e, t)
    };
    var v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = !1;
    function y() {
        i.onClick() && (_ = !0)
    }
    e.exports = new d
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(57),
    o = n(172),
    a = n(175),
    s = n(176),
    u = n(16),
    c = n(10),
    l = n(59),
    d = n(5),
    f = n(3),
    h = n(1),
    v = n(2);
    function m() {
        p.constructor.call(this, {
            refDomId: "about-hero",
            backgroundColor: 460811,
            path: "about",
            parallax: 1.2,
            speed: .8,
            actionSpeedScale: 1,
            lineCount: 384,
            bloomAmount: 6,
            bloomRadius: .1,
            bloomThreshold: 0,
            bloomSmoothWidth: .75,
            particleDieSpeed: 1,
            usePostprocessing: !0,
            isClickable: !1
        })
    }
    var p = c.prototype,
    g = m.prototype = Object.create(p);
    g.constructor = m,
    g.preInit = function() {
        p.preInit.call(this),
        f.USE_SMAA && this.postprocessingQueue.push(this.getSmaa());
        b = this.getBloom(),
        this.postprocessingQueue.push(b),
        u.preload("obstacle"),
        u.preload("obstacle2"),
        r.preInit(this),
        a.preInit(this)
    },
    g.init = function() {
        p.init.call(this),
        y = new i.Object3D,
        (x = new l).positionAmplitude = .22,
        x.positionFrequency = 4,
        x.rotationAmplitude = .15,
        x.rotationFrequency = 1,
        r.init(this),
        this.scene.add(r.container),
        a.init(this),
        this.scene.add(a.container),
        o.init(this),
        this.scene.add(o.mesh),
        s.init(this),
        this.scene.add(s.mesh),
        _ = new i.Vector3(0, .65, 0),
        T = [{
            position: new i.Vector3(0, 3.5, 4.5).multiplyScalar(.7),
            refOffset: new i.Vector3( - .55, 0, .5),
            weight: 1
        },
        {
            position: new i.Vector3(d.isMobile ? 3 : 1, 1.75, d.isMobile ? 0 : 3).multiplyScalar(.5),
            refOffset: new i.Vector3(.75, 0, 0),
            weight: 3
        },
        {
            position: new i.Vector3(d.isMobile ? 4 : 2, 2, 0).multiplyScalar(.5),
            refOffset: new i.Vector3(1, 0, d.isMobile ? 0 : -1),
            weight: 1.5
        },
        {
            position: new i.Vector3(1, 1, -12).multiplyScalar(.5),
            refOffset: new i.Vector3( - 1, -2, 0),
            weight: 0
        }],
        w = 0;
        for (var e = 0,
        t = T.length; e < t; e++) {
            var n = T[e];
            n.threshold = w,
            w += n.weight
        }
        if (window.gui) {
            var u = this.gui,
            c = u.addFolder("model");
            c.add(this, "speed", 0, 1, 1e-4).listen(),
            c.add(r, "wireSpeed", 0, 3, 1e-4),
            c.add(r, "emit"),
            c.add({
                jump: function() {
                    r.playMixedAction(!0)
                }
            },
            "jump"),
            c.add({
                slide: function() {
                    r.playMixedAction(!1)
                }
            },
            "slide"),
            c.open();
            var f = u.addFolder("post");
            f.add(this, "bloomAmount", 0, 20, 1e-4).name("bloomAmount"),
            f.add(this, "bloomRadius", -2, 2, 1e-4).name("bloomRadius"),
            f.add(this, "bloomThreshold", -2, 2, 1e-4).name("bloomThreshold"),
            f.add(this, "bloomSmoothWidth", -2, 2, 1e-4).name("bloomSmoothWidth"),
            f.open()
        }
        this.precompile()
    },
    g.resize = function() {
        p.resize.call(this)
    },
    g.update = function(e, t, n) {
        this.offsetTop = Math.min(t, n - h.height),
        M && (e = 0);
        if (this.testViewport(), this.needsRender) {
            e *= this.speed * this.actionSpeedScale,
            x.update(e);
            for (var i = v.clamp(t / n, 0, 1) * w, u = void 0, c = void 0, l = void 0, d = 0, f = T.length - 1; d < f; d++) {
                var m = T[d],
                p = T[d + 1];
                if (i >= m.threshold && i <= p.threshold) {
                    u = m,
                    c = p,
                    l = (i - m.threshold) / m.weight;
                    break
                }
            }
            this.camera.position.copy(u.position).lerp(c.position, l),
            y.position.copy(u.refOffset).lerp(c.refOffset, l),
            y.position.add(this.camera.position),
            this.camera.position.x *= this.camera.aspect,
            y.position.x *= this.camera.aspect,
            this.camera.lookAt(_),
            y.quaternion.copy(this.camera.quaternion),
            y.updateMatrix(),
            y.matrix.multiplyMatrices(y.matrix, x.matrix),
            y.matrix.decompose(this.camera.position, this.camera.quaternion, this.camera.scale),
            M && 1 / 60,
            this.camera.position.x += .002 * (Math.random() - .5),
            this.camera.position.y += .002 * (Math.random() - .5),
            this.camera.position.z += .002 * (Math.random() - .5),
            this.scene.updateMatrixWorld(),
            this.updateCamera(),
            this.updateMouse();
            var g = h.renderer;
            g.setRenderTarget(null),
            r.update(e),
            o.update(e),
            a.update(e),
            s.update(e),
            b.amount = this.bloomAmount,
            b.radius = this.bloomRadius,
            b.threshold = this.bloomThreshold,
            b.smoothWidth = this.bloomSmoothWidth,
            b.greyRatio = v.cUnMix(.6, .8, i / w),
            this.render(),
            r.renderWires()
        }
    },
    g.afterRender = function() {},
    g.onClick = function(t) {
        if (!r._actionId && e.exports.isClickable) return S ^= 1,
        r.playMixedAction(S),
        u.playEffect(S ? "obstacle": "obstacle2"),
        !0
    };
    var x = void 0,
    _ = void 0,
    y = void 0,
    w = 0,
    b = void 0,
    S = 1,
    T = void 0;
    var M = !1;
    e.exports = new m
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(4);
    t.init = function(e) {
        a = e.geometry.attributes.position.count,
        s = Math.min(a, 1.25 * Math.min(window.screen.width, window.screen.height)),
        u = Math.ceil(Math.sqrt(s)),
        c = Math.ceil(s / u),
        l = c * y,
        g = r.createRenderTarget(u, l, !0, !0, !0),
        x = g.clone(),
        function(e) {
            for (var t = e.geometry.attributes,
            r = new i.BufferGeometry,
            o = new Float32Array(2 * s), c = new Float32Array(3 * s), d = new Float32Array(4 * s), v = new Float32Array(4 * s), m = t.position.array, p = t.skinWeight.array, g = t.skinIndex.array, x = 0, _ = 0, y = 0, w = 0; x < s; x++) {
                var b = ~~ (x / s * a),
                S = 3 * b,
                T = 4 * b;
                o[_ + 0] = (x % u + .5) / u * 2 - 1,
                o[_ + 1] = (.5 + ~~ (x / u)) / l * 2 - 1,
                c[y + 0] = m[S + 0],
                c[y + 1] = m[S + 1],
                c[y + 2] = m[S + 2],
                d[w + 0] = p[T + 0],
                d[w + 1] = p[T + 1],
                d[w + 2] = p[T + 2],
                d[w + 3] = p[T + 3],
                v[w + 0] = g[T + 0],
                v[w + 1] = g[T + 1],
                v[w + 2] = g[T + 2],
                v[w + 3] = g[T + 3],
                _ += 2,
                y += 3,
                w += 4
            }
            r.setAttribute("a_glPosition", new i.BufferAttribute(o, 2)),
            r.setAttribute("position", new i.BufferAttribute(c, 3)),
            r.setAttribute("skinWeight", new i.BufferAttribute(d, 4)),
            r.setAttribute("skinIndex", new i.BufferAttribute(v, 4)),
            r.attributes.a_glPosition.needsUpdate = !0,
            r.attributes.position.needsUpdate = !0,
            r.attributes.skinWeight.needsUpdate = !0,
            r.attributes.skinIndex.needsUpdate = !0,
            h = new i.ShaderMaterial({
                uniforms: {
                    u_glPositionOffset: {
                        value: new i.Vector2
                    }
                },
                vertexShader: n(166),
                fragmentShader: n(167),
                depthTest: !1,
                depthWrite: !1,
                blending: i.NoBlending,
                skinning: !0
            }),
            (f = new i.Points(r, h)).updateMatrixWorld = i.SkinnedMesh.prototype.updateMatrixWorld,
            f.bindMatrix = e.bindMatrix,
            f.bindMode = e.bindMode,
            f.bindMatrixInverse = e.bindMatrixInverse,
            f.isSkinnedMesh = !0,
            f.skeleton = e.skeleton,
            f.frustumCulled = !1
        } (e),
        function(e) {
            for (var r = e.geometry.attributes,
            c = new i.InstancedBufferGeometry,
            d = new Float32Array(s * y * 3), f = r.normal.array, h = 0, v = 0; h < s; h++) {
                var g = 3 * ~~ (h / s * a);
                d[v + 0] = (h % u + .5) / u,
                d[v + 1] = (.5 + ~~ (h / u)) / l,
                d[v + 2] = Math.max(0, (f[g + 0] + f[g + 1] + f[g + 2]) / 1.731),
                v += 3
            }
            c.setAttribute("position", new i.BufferAttribute(d, 3)),
            p = new Float32Array(2 * y);
            for (var x = 0,
            _ = 0; x < y; x++) p[_ + 1] = x / y,
            _ += 2;
            c.setAttribute("a_instanceUvOffset", new i.InstancedBufferAttribute(p, 2)),
            m = new i.ShaderMaterial({
                uniforms: {
                    u_positionTexture: {
                        value: null
                    },
                    u_isReflection: {
                        value: 0
                    }
                },
                vertexShader: n(168),
                fragmentShader: n(169),
                depthTest: !0,
                depthWrite: !1,
                blending: i.AdditiveBlending,
                transparent: !0
            }),
            (o = t.mesh = new i.Points(c, m)).frustumCulled = !1,
            o.renderOrder = -1,
            o.needsRenderReflection = !0
        } (e),
        v = new i.RawShaderMaterial({
            uniforms: {
                u_positionTexture: {
                    value: null
                },
                u_noiseKernelSize: {
                    value: .35
                },
                u_noiseTime: {
                    value: 0
                },
                u_noiseStrength: {
                    value: .01
                },
                u_dieSpeed: {
                    value: 1
                },
                u_speed: {
                    value: 1
                }
            },
            vertexShader: r.vertexShader,
            fragmentShader: r.precisionPrefix + n(165),
            depthTest: !1,
            depthWrite: !1,
            blending: i.NoBlending
        })
    },
    t.emit = function() {
        _ = !0
    },
    t.update = function(e) {
        var t = r.getColorState();
        _ && (h.uniforms.u_glPositionOffset.value.y = d / y * 2, d = (d + 1) % y, r.renderer.autoClearColor = !1, r.renderObject(f, x), _ = !1);
        n = g,
        g = x,
        x = n,
        v.uniforms.u_positionTexture.value = g.texture,
        v.uniforms.u_speed.value = e,
        v.uniforms.u_dieSpeed.value = e,
        v.uniforms.u_noiseTime.value += e,
        r.render(v, x),
        m.uniforms.u_positionTexture.value = x.texture,
        r.setColorState(t);
        var n
    };
    var o = t.mesh = null,
    a = void 0,
    s = void 0,
    u = void 0,
    c = void 0,
    l = void 0,
    d = 0,
    f = void 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = !1,
    y = t.MAX_INSTANCES = 4
},
function(e, t) {
    e.exports = "uniform sampler2D u_positionTexture;\n\nuniform float u_noiseKernelSize;\nuniform float u_noiseTime;\nuniform float u_noiseStrength;\nuniform float u_dieSpeed;\n\nuniform float u_speed;\n\nvarying vec2 v_uv;\n\n// #include <curl4Mid>\n\nvoid main () {\n\tvec4 positionInfo = texture2D(u_positionTexture, v_uv);\n\t\n\tif (positionInfo.w > 0.0) {\n\t\tpositionInfo.w -= u_dieSpeed;\n\n\t\tfloat ratio = smoothstep(1.0, (0.9 - v_uv.x) * 0.5, positionInfo.w);\n\t\t// positionInfo.xy += (positionInfo.xy - vec2(0.0, 0.5)) * 0.04 * ratio;\n\t\tpositionInfo.z -= u_speed * (25.0 * 20.0 / 127.0 + ratio * 10.0);\n\n\t\t// vec3 velocity = curl(positionInfo.xyz * u_noiseKernelSize, u_noiseTime, 0.6) *  u_noiseStrength * ratio;\n\n\t\t// positionInfo.xyz += velocity;\n\t}\n\n\tgl_FragColor = positionInfo;\n}"
},
function(e, t) {
    e.exports = "\nattribute vec2 a_glPosition;\n\nuniform vec2 u_glPositionOffset;\n\nvarying vec4 v_color;\n\n#include <skinning_pars_vertex>\n\nvoid main() {\n\t#include <skinbase_vertex>\n    #include <beginnormal_vertex>\n    #include <skinnormal_vertex>\n    #include <begin_vertex>\n    #include <skinning_vertex>\n    v_color = vec4(transformed, 1.0);\n    gl_Position = vec4(a_glPosition + u_glPositionOffset, 0.0, 1.0);\n    gl_PointSize = 1.0;\n}"
},
function(e, t) {
    e.exports = "\nvarying vec4 v_color;\n\nvoid main () {\n\tgl_FragColor = v_color;\n}"
},
function(e, t) {
    e.exports = "attribute vec2 a_instanceUvOffset;\nuniform sampler2D u_positionTexture;\nuniform float u_isReflection;\n\nvarying vec3 v_color;\nvarying float v_alpha;\n\nvoid main () {\n\tvec4 positionInfo = texture2D(u_positionTexture, position.xy + a_instanceUvOffset);\n\n\t// #2b8db2 - vec3(0.169,0.553,0.698)\n\t// #ff3b59 - vec3(1.0,0.231,0.349)\n\n\n\tv_color = mix(vec3(0.169,0.553,0.698), vec3(1.0,0.231,0.349), position.z) * (1.0 + smoothstep(0.5, 0.0, positionInfo.y) * 7.0 * u_isReflection);\n\tv_alpha = positionInfo.w * smoothstep(1.0, 0.9, positionInfo.w) * mix(1.0, 0.5, u_isReflection) * position.x;\n\n\tvec4 mvPosition = modelViewMatrix * vec4(positionInfo.xyz, 1.0);\n\tgl_Position = projectionMatrix * mvPosition;\n\tgl_Position.z = step(positionInfo.w, 0.0) * 1000.0 / gl_Position.w;\n\tgl_PointSize = (1.0 * 12.0/ -mvPosition.z + 4.0 * pow(position.x, 3.0) * positionInfo.w);\n}"
},
function(e, t) {
    e.exports = "\n\nvarying vec3 v_color;\nvarying float v_alpha;\n\nvoid main () {\n\n\tfloat a = smoothstep(0.5, 0.3, length(gl_PointCoord.xy - 0.5));\n\tgl_FragColor = vec4(v_color, v_alpha) * a;\n\t// gl_FragColor = vec4(v_color, v_alpha);\n}"
},
function(e, t) {
    e.exports = "\n#include <skinning_pars_vertex>\n\nvarying vec3 v_color;\nvarying vec3 v_viewNormal;\nvarying vec3 v_worldPosition;\n\nuniform float u_time;\n\nvoid main() {\n\t#include <skinbase_vertex>\n    #include <beginnormal_vertex>\n    #include <skinnormal_vertex>\n    #include <begin_vertex>\n    #include <skinning_vertex>\n    v_color = color;\n    v_viewNormal = normalMatrix * objectNormal;\n    v_worldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);\n}"
},
function(e, t) {
    e.exports = "uniform float u_isReflection;\nuniform float u_time;\nuniform float u_emitRatio;\nuniform float u_boost;\n\nvarying vec3 v_color;\nvarying vec3 v_viewNormal;\nvarying vec3 v_worldPosition;\n\nvoid main () {\n    vec3 viewNormal = normalize(v_viewNormal);\n\n    float lineLength = 0.2;\n    float modTime = mod(u_time + v_color.x * (1.0 + lineLength), (1.0 + lineLength));\n    float b = 0.04 + max(0.0, dot(viewNormal, normalize(vec3(1.0, 1.0, 1.0)))) * 1.25;\n    float t = smoothstep( v_color.y, v_color.y - lineLength,modTime - lineLength) * step(v_color.y - lineLength, modTime - lineLength);\n    // vec3 color = b * mix(#ff339c, #33e4ff, step(0.5, v_color.z));\n    // 2b8db2 - vec3(0.169,0.553,0.698)\n    // ff3b59 - vec3(1.0,0.231,0.349)\n    // b3c4ee - vec3(0.702,0.769,0.933)\n    // 00f6ff - vec3(0.0,0.965,1.0)\n    vec3 color = mix(vec3(0.169,0.553,0.698), vec3(1.0,0.231,0.349), b) * (0.65 + t * 3.0) * mix(vec3(0.702,0.769,0.933), vec3(0.0,0.965,1.0), step(0.5, v_color.z)) * (0.75 + (0.025 +t) * u_emitRatio * 12.0);\n\n    color *= mix(1.0, 1.0 + smoothstep(0.5, 0.0, v_worldPosition.y) * 2.5, u_isReflection);\n    \n    gl_FragColor = vec4(color * mix(1.0, 0.75, u_isReflection) * u_boost, 1.0);\n}"
},
function(e, t, n) {
    "use strict";
    var i = n(0);
    t.init = function(e) {
        o = e;
        for (var s = new i.InstancedBufferGeometry,
        u = new i.BoxBufferGeometry(1, 1, 1), c = o.lineCount, l = new Float32Array(4 * c), d = new Float32Array(4 * c), f = 0, h = 0; f < c; f++) {
            var v = Math.random() * Math.PI;
            l[h + 0] = Math.cos(v),
            l[h + 1] = Math.sin(v),
            l[h + 2] = Math.random(),
            l[h + 3] = Math.random(),
            d[h + 0] = 1,
            d[h + 1] = .35 * (.2 + .8 * Math.random()),
            d[h + 2] = .6 + .4 * Math.random(),
            d[h + 3] = Math.random() > .5 ? 1 : 0,
            h += 4
        }
        s.setAttribute("position", u.attributes.position),
        s.setAttribute("normal", u.attributes.normal),
        s.setAttribute("a_offsets", new i.InstancedBufferAttribute(l, 4)),
        s.setAttribute("a_infos", new i.InstancedBufferAttribute(d, 4)),
        s.setIndex(u.index),
        a = new i.ShaderMaterial({
            uniforms: {
                u_time: {
                    value: 0
                },
                u_radius: {
                    value: .02
                },
                u_fullLength: {
                    value: 20
                },
                u_innerSpace: {
                    value: 2.5
                },
                u_thickness: {
                    value: 4
                },
                u_isReflection: {
                    value: 0
                }
            },
            vertexShader: n(173),
            fragmentShader: n(174),
            blending: i.NoBlending
        }),
        (r = t.mesh = new i.Mesh(s, a)).frustumCulled = !1,
        r.needsRenderReflection = !0,
        r.renderOrder = 0
    },
    t.update = function(e) {
        a.uniforms.u_time.value += e
    };
    var r = t.mesh = null,
    o = void 0,
    a = void 0
},
function(e, t) {
    e.exports = "\nattribute vec4 a_offsets;\nattribute vec4 a_infos;\n\nuniform float u_time;\nuniform float u_radius;\nuniform float u_fullLength;\nuniform float u_innerSpace;\nuniform float u_thickness;\nuniform float u_isReflection;\n\nvarying vec3 v_color;\nvarying vec3 v_worldPosition;\n\n#include <snoise3>\n\nvoid main () {\n\tvec3 offset = vec3(a_offsets.xy * (u_innerSpace + u_thickness * a_offsets.w), 0.0);\n\n\tfloat radius = a_infos.x * u_radius * mix(1.0, 0.5 + offset.y * 0.5, u_isReflection);\n\tfloat lineLength = a_infos.y * u_fullLength + radius;\n\tfloat baseOffsetZ = a_offsets.z * u_fullLength;\n\tfloat animationLength = lineLength * 2.0 + u_fullLength;\n\n\toffset.z = -mod(baseOffsetZ + u_time * a_infos.z * 30.0, animationLength) + 1.0;// + animationLength * 0.25;\n\tvec3 pos = position * vec3(0.0, 0.0, mix(radius, lineLength, step(0.0, position.z)) + radius);\n\n\tpos += offset;\n\n\tvec3 viewNormal = normalMatrix * normal; // not distorted one but it is sort of okay\n\n\t// #2b8db2 - vec3(0.169,0.553,0.698)\n\t// #ff3b59 - 0.952, 0.709, 0.035\n\tv_color = mix(mix(vec3(0.169,0.553,0.698), vec3(1.0,0.231,0.349), a_infos.w), vec3(1.0), 0.15 + viewNormal.z * 0.6) * mix(0.75, 0.5 - offset.y * 0.06, u_isReflection);\n\n\tpos += position * vec3(radius, radius, 0.0);\n\tpos.y = max(pos.y, 0.01);\n\n\tpos.z += 1.0;\n\n\tv_worldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}"
},
function(e, t) {
    e.exports = "uniform float u_isReflection;\nvarying vec3 v_color;\nvarying vec3 v_worldPosition;\n\nvoid main () {\n\n\t// #07080b - vec3(0.027,0.031,0.043)\n\tvec3 color = mix(vec3(0.027,0.031,0.043), v_color * mix(1.0, (1.0 + smoothstep(2.0, 0.0, v_worldPosition.y) * 3.0), u_isReflection), smoothstep(-20.0, -15.0, v_worldPosition.z));\n\tgl_FragColor = vec4(color, 1.0);\n}"
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(12),
    o = n(36),
    a = n(58),
    s = n(3),
    u = n(1);
    t.preInit = function(e) {
        c = e,
        (f = new i.Texture(u.loader.add(s.cdnPath + "images/floor.jpg").content)).wrapS = f.wrapT = i.RepeatWrapping,
        f.magFilter = f.minFilter = i.LinearFilter,
        f.needsUpdate = !0,
        f.repeat.set(16, 16)
    },
    t.init = function() { (l = new a).clearColor = c.backgroundColor,
        (d = new i.Mesh(new i.PlaneBufferGeometry(20, 20), new i.MeshNormalMaterial({
            normalMap: f
        }))).material.type = "ShaderMaterial",
        d.material.uniforms = i.UniformsUtils.merge([i.ShaderLib.normal.uniforms]),
        d.material.vertexShader = i.ShaderChunk.normal_vert,
        d.material.fragmentShader = i.ShaderChunk.normal_frag,
        d.material.fragmentShader = o.replace(d.material.fragmentShader, "gl_FragColor = vec4( packNormalToRGB( normal ), opacity );", "\n    vec3 color = texture2DProj(u_reflectionTexture, v_reflectionCoord + vec4(normal.x, normal.z, 0.0, 0.0) * 0.02).rgb * (1.0 + smoothstep(0.75, -0.75, normal.y));\n    gl_FragColor = vec4(mix(vec3(0.027, 0.0313, 0.043), color, smoothstep(18.0, 0.0, vViewPosition.z)), 1.0);\n    "),
        l.injectUniforms(d.material),
        l.injectShaders(d.material, "logdepthbuf_vertex"),
        d.position.z = -6,
        d.rotation.x = -Math.PI / 2,
        (t.container = new i.Object3D).add(d)
    },
    t.update = function(e) {
        u.renderer.setClearColor(0, 0),
        f.offset.y = (f.offset.y - .2667 * e * f.repeat.y) % 1;
        var t = Math.max(512, Math.ceil(.5 * c.width)),
        n = Math.max(512, Math.ceil(.5 * c.height));
        l.setSize(t, n),
        l.update(u.renderer, c.scene, c.camera, d),
        r.blur9(4, .5, l.renderTarget),
        window._floor = l.renderTarget.texture
    };
    t.container = null;
    var c = void 0,
    l = void 0,
    d = void 0,
    f = void 0
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(57);
    t.init = function() {
        for (var e = new i.InstancedBufferGeometry,
        r = new i.BoxBufferGeometry(1, 1, 1), s = new Float32Array(192), u = new Float32Array(192), c = new Float32Array(192), l = 0, d = 0; l < 64; l++) {
            var f = l / 63,
            h = 2 * Math.abs(f - .5);
            s[d + 0] = .05 + .3 * Math.pow(Math.random(), 3),
            s[d + 1] = .025,
            s[d + 2] = .2 + Math.pow(Math.random(), 2) * (.8 + h),
            u[d + 0] = 6 * f - 3,
            u[d + 1] = .8 * Math.random() * (1 + h * h * 3) - .4,
            u[d + 2] = 4 * Math.abs(f - .5) * (Math.random() > .5 ? 1 : -1) + .5 * Math.random() - .25 - .5 * f,
            c[d + 0] = Math.random() > .5 ? 1 : 0,
            c[d + 1] = Math.random(),
            c[d + 2] = Math.random(),
            d += 3
        }
        e.setAttribute("position", r.attributes.position),
        e.setAttribute("normal", r.attributes.normal),
        e.setAttribute("a_sizes", new i.InstancedBufferAttribute(s, 3)),
        e.setAttribute("a_offsets", new i.InstancedBufferAttribute(u, 3)),
        e.setAttribute("a_infos", new i.InstancedBufferAttribute(c, 3)),
        e.setIndex(r.index),
        a = new i.ShaderMaterial({
            uniforms: {
                u_time: {
                    value: 0
                },
                u_isLower: {
                    value: 0
                },
                u_ratio: {
                    value: 0
                },
                u_fromZ: {
                    value: 4
                },
                u_toZ: {
                    value: -20
                },
                u_isReflection: {
                    value: 0
                }
            },
            vertexShader: n(177),
            fragmentShader: n(178),
            blending: i.NoBlending
        }),
        (o = t.mesh = new i.Mesh(e, a)).frustumCulled = !1,
        o.needsRenderReflection = !0,
        o.renderOrder = 0
    },
    t.update = function(e) {
        a.uniforms.u_isLower.value = "jump" === r._actionId ? 1 : 0;
        var t = r._actionRatio;
        a.uniforms.u_ratio.value = t
    };
    var o = t.mesh = null,
    a = void 0
},
function(e, t) {
    e.exports = "\nattribute vec3 a_sizes;\nattribute vec3 a_offsets;\nattribute vec3 a_infos;\n\nuniform float u_time;\nuniform float u_isLower;\nuniform float u_ratio;\nuniform float u_fromZ;\nuniform float u_toZ;\nuniform float u_isReflection;\n\nvarying float v_opacity;\nvarying vec3 v_color;\nvarying vec3 v_worldPosition;\n\n#include <snoise3>\n\nfloat cubicBezier (float c0, float c1, float c2, float c3, float t) {\n  float c = (c1 - c0) * 3.0;\n  float b = (c2 - c1) * 3.0 - c;\n  float a = c3 - c0 - c - b;\n  float t2 = t * t;\n  float t3 = t2 * t;\n  return a * t3 + b * t2 + c * t + c0;\n}\n\nvoid main () {\n\tfloat xWeight = abs(a_offsets.x) / 3.0;\n\tfloat c0 = mix(0.1 + a_infos.y * 0.15, -0.2 + a_infos.y * 0.5, xWeight);\n\tfloat c1 = mix(0.1 + a_infos.z * 0.25, a_infos.z * 0.5, xWeight);\n\tfloat ratio = cubicBezier(0.0, c0, c1, 1.0, u_ratio);\n\n\tv_opacity = smoothstep(0.0, 0.5, max(0.0, 1.0 - abs(ratio - 0.2) / mix(0.2, 0.2 + 0.6 * a_infos.y, step(0.2, ratio))));\n\n\tvec3 pos = position * a_sizes * smoothstep(0.0, 0.1, v_opacity) + a_offsets + vec3(0.0, mix(1.25, 0.4, u_isLower), mix(u_fromZ, u_toZ, ratio));\n\tvec3 viewNormal = normalMatrix * normal;\n\n\tv_color = mix(\n\t\tmix(vec3(0.169,0.553,0.698), vec3(1.0,0.231,0.349), a_infos.x),\n\t\tvec3(1.0),\n\t\t0.15 + viewNormal.z * 0.6\n\t) * mix(0.55, 0.5 - pos.y * 0.06, u_isReflection);\n\n\n\tv_worldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;\n\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}"
},
function(e, t) {
    e.exports = "uniform float u_isReflection;\nvarying float v_opacity;\nvarying vec3 v_color;\nvarying vec3 v_worldPosition;\n\nvoid main () {\n\tvec3 color = mix(vec3(0.027,0.031,0.043), v_color, smoothstep(-20.0, -15.0, v_worldPosition.z) * v_opacity);\n\tgl_FragColor = vec4(color, 1.0);\n}"
},
function(e, t, n) {
    "use strict";
    var i = n(18),
    r = n(11),
    o = n(3),
    a = n(1),
    s = n(180),
    u = n(184),
    c = n(185);
    function l() {
        d.constructor.call(this, {
            id: "project",
            isTemplate: !0,
            aliases: ["blog/?"]
        }),
        this.domRect = new r
    }
    var d = i.prototype,
    f = l.prototype = Object.create(d);
    f.constructor = l,
    f.preInit = function(e, t) {
        var n = this.getProjectIdFromPathInfo(e);
        a.isSupportWebGL && (s.hasInitialized || s.preInit(), s.preload(n))
    },
    f.init = function(e) {
        var t = this.getProjectIdFromPathInfo(e),
        n = this.getRefIdFormPathInfo(e),
        i = this.domCaches[n]; ! s.hasInitialized && a.isSupportWebGL && s.init();
        i.lazyLoadSet = new u({
            dom: i,
            imgPath: o.cdnPath + "work/" + t + "/case/"
        }),
        i.resizerSet = new c({
            containers: i.querySelectorAll(".resizer-container")
        }),
        !0,
        d.init.call(this)
    },
    f.getProjectIdFromPathInfo = function(e) {
        var t = this.getRefIdFormPathInfo(e);
        return this.domCaches[t].dataset.id
    },
    f.show = function(e) {
        var t = this.getProjectIdFromPathInfo(e),
        n = this.getRefIdFormPathInfo(e),
        i = this.domCaches[n];
        this.domRect.refDom = i,
        this.domRect.path = e.pagePath,
        a.isSupportWebGL && s.change(i, t);
        i.lazyLoadSet.add()
    },
    f.hide = function() {},
    f.getScrollToFromRoute = function(e) {},
    f.resize = function() {
        this.hasInitialized && (this.domRect.refDom.lazyLoadSet.resize(), this.domRect.refDom.resizerSet.resize(), a.isSupportWebGL && s.resize())
    },
    f.update = function(e, t) {
        if (this.hasInitialized) {
            var n = a.renderer;
            this.domRect.testViewport(!0),
            this.domRect.refDom.lazyLoadSet.update(),
            a.isSupportWebGL ? (this.domRect.height > 1 && (n.setRenderTarget(null), n.setScissorTest(!0), n.setViewport(this.domRect.left, a.height - this.domRect.top - this.domRect.height, this.domRect.width, this.domRect.height), n.setScissor(this.domRect.left, a.height - this.domRect.top - this.domRect.height, this.domRect.width, this.domRect.height), n.setClearColor(1250067, 1), n.clear(!0, !0, !0), n.setScissorTest(!1), d.update.call(this, e, t)), s.update(e)) : d.update.call(this, e, t)
        }
    };
    e.exports = new l
},
function(e, t, n) {
    "use strict";
    var i = n(3),
    r = n(1),
    o = n(5),
    a = n(2),
    s = n(0),
    u = n(10),
    c = n(181);
    function l() {
        d.constructor.call(this, {
            backgroundColor: 0,
            imgWidth: o.isMobile ? 512 : 2048,
            imgHeight: o.isMobile ? 512 : 1024,
            parallax: 0,
            hasInitialized: !1,
            defaultCameraFov: 30
        })
    }
    var d = u.prototype,
    f = l.prototype = Object.create(d);
    f.constructor = l,
    f.init = function() {
        var e = new s.PlaneBufferGeometry(this.imgWidth / this.imgHeight, 1);
        e.translate(0, .5, 0),
        v = new s.ShaderMaterial({
            uniforms: {
                u_diffuseTexture: {
                    value: null
                },
                u_depthTexture: {
                    value: null
                },
                u_aspect: {
                    value: new s.Vector2
                },
                u_displacement: {
                    value: new s.Vector2
                },
                u_textureSize: {
                    value: new s.Vector2(this.imgWidth, this.imgHeight)
                },
                u_depth: {
                    value: 0
                },
                u_fStop: {
                    value: 0
                },
                u_scrollRatio: {
                    value: 0
                },
                u_time: {
                    value: 0
                },
                u_mouse3: {
                    value: this.mouse3
                }
            },
            vertexShader: n(182),
            fragmentShader: n(183),
            depthTest: !1,
            depthWrite: !1
        }),
        r.gl.getExtension("EXT_shader_texture_lod") && (v.extensions.shaderTextureLOD = !0); (h = new s.Mesh(e, v)).frustumCulled = !1,
        this.scene.add(h),
        this.hasInitialized = !0
    },
    f.preload = function(e) {
        var t = x(e);
        r.loader.add(t + ".jpg"),
        r.loader.add(t + "_depth.png")
    },
    f.change = function(e, t) {
        var n = x(t);
        this.refDom = e;
        var i = r.loader.itemUrls[n + ".jpg"].content,
        o = r.loader.itemUrls[n + "_depth.png"].content;
        m && m.image === i || (m && (m.dispose(), p.dispose()), m = new s.Texture(i), (p = new s.Texture(o)).minFilter = p.magFilter = s.LinearFilter, v.uniforms.u_diffuseTexture.value = m, v.uniforms.u_depthTexture.value = p, m.needsUpdate = p.needsUpdate = !0, g = c.getImageData(o));
        this.testViewport()
    },
    f.resize = function() {
        this.refDom && d.resize.call(this)
    },
    f.update = function(e) {
        if (this.refDom && (this.paddingBottom = 500, this.testViewport(), this.needsRender)) {
            var t = r.width,
            n = r.height,
            i = this.imgWidth,
            o = this.imgHeight,
            s = a.getCoverScale(i / o, 1, t / n, 1),
            u = t / n;
            this.camera.position.z = .5 / Math.tan(this.camera.fov / 2 * Math.PI / 180),
            h.scale.set(s / u * t / this.width, s * n / this.height, 1);
            var c = this.refDomRect.top / n;
            h.position.y = (this.bottom - r.height) / n / 2 - .5;
            var l = r.easedMouse.x,
            d = r.easedMouse.y;
            l = a.cUnMix(0, r.width, l),
            d = a.cUnMix(0, r.height, d),
            l = (l - .5) / Math.max(1, i / this.width) + .5,
            d = (d - .5) / Math.max(1, o / this.height) + .5;
            var f = Math.round(l * (g.width - 1)),
            m = Math.round(d * (g.height - 1)),
            p = g.data[4 * (f + m * g.width)] / 255;
            v.uniforms.u_depth.value += .1 * (p - v.uniforms.u_depth.value),
            v.uniforms.u_fStop.value += .1 * (a.cMap(r.easedMouseVel.length(), 0, 50, 3, 0) - v.uniforms.u_fStop.value),
            v.uniforms.u_displacement.value.x = 18 * (l - .5) / i,
            v.uniforms.u_displacement.value.y = 18 * -(d - .5) / o,
            v.uniforms.u_time.value += e * Math.min(Math.abs(c), 1) * .25,
            v.uniforms.u_scrollRatio.value = Math.min(Math.abs(c), 1),
            v.uniforms.u_aspect.value.set(i / o, 1),
            this.mouse3.set(l, 1 - d, .001),
            this.render()
        }
    };
    var h = void 0,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0;
    function x(e) {
        return i.assetPath + "work/" + e + "/" + (o.isMobile ? "mobile": "desktop")
    }
    e.exports = new l
},
function(e, t, n) {
    "use strict";
    var i = t.canvas = null,
    r = t.ctx = null;
    function o(e, n, o, a, s) {
        return n = n || 0,
        o = o || 0,
        a = a || e.naturalWidth,
        s = s || e.naturalHeight,
        i = t.canvas = i || document.createElement("canvas"),
        r = t.ctx = r || i.getContext("2d"),
        i.width = a,
        i.height = s,
        r.drawImage(e, -n, -o),
        i
    }
    t.getImageData = function(e, t, n, i, a) {
        return t = t || 0,
        n = n || 0,
        i = i || e.naturalWidth,
        a = a || e.naturalHeight,
        o(e, t, n, i, a),
        r.getImageData(0, 0, i, a)
    },
    t.drawImageToCanvas = o
},
function(e, t) {
    e.exports = "varying vec2 v_uv;\n\nvoid main () {\n\tv_uv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"
},
function(e, t) {
    e.exports = "uniform sampler2D u_diffuseTexture;\nuniform sampler2D u_depthTexture;\nuniform vec2 u_displacement;\nuniform vec2 u_textureSize;\nuniform vec2 u_aspect;\nuniform float u_depth;\nuniform float u_fStop;\nuniform float u_time;\nuniform float u_scrollRatio;\nuniform vec3 u_mouse3;\n\nvarying vec2 v_uv;\n#include <snoise2>\n#include <cubic>\n\n#ifdef TEXTURE_LOD_EXT\n#include <textureLodBicubic>\n#endif\n\nfloat blendSoftLight(float base, float blend) {\n\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec2 mirrored(vec2 v) {\n    vec2 m = mod(v, 2.0);\n    return mix(m, 2.0 - m, step(1.0, m));\n}\n\nvoid main () {\n\tvec4 depthInfo = texture2D(u_depthTexture, v_uv);\n\tfloat deltaDepth = abs(depthInfo.r - u_depth);\n\n\tvec2 uv = v_uv + (depthInfo.r) * u_displacement * (0.5 + length(v_uv - 0.5) * 0.5) + u_displacement;\n\tvec2 displacedUv = uv;\n\tuv = mirrored(uv + vec2(\n\t\tsnoise2(uv * u_aspect * vec2(4.0) + vec2(0.0, -u_time - 1000.0)),\n\t\tsnoise2(uv * u_aspect * vec2(4.0) + vec2(0.0, -u_time))\n\t) * 0.01 * u_scrollRatio * smoothstep(-depthInfo.r, -depthInfo.r + 1.0, u_scrollRatio - 0.5) * depthInfo.r);\n\n\n\t#ifdef TEXTURE_LOD_EXT\n\t\tfloat lod = max(0.0, deltaDepth - 0.0) * u_fStop;\n\t\tvec4 diffuse0 = textureLodBicubic(u_diffuseTexture, uv, floor(lod), u_textureSize);\n\t\tvec4 diffuse1 = textureLodBicubic(u_diffuseTexture, uv, floor(lod + 1.0), u_textureSize);\n\t\tvec4 diffuse = mix(diffuse0, diffuse1, fract(lod));\n\t#else\n\t\tvec4 diffuse = texture2D(u_diffuseTexture, uv);\n\t#endif\n\n\t// diffuse.rgb = mix(diffuse.rgb, (texture2D(u_diffuseTexture, displacedUv).rgb + diffuse.rgb) * 0.5, u_scrollRatio);\n\tdiffuse.rgb = mix(diffuse.rgb, blendSoftLight(diffuse.rgb, texture2D(u_diffuseTexture, displacedUv).rgb), u_scrollRatio);\n\n\t// diffuse.rgb *= 1.0 - smoothstep(-depthInfo.r, -depthInfo.r + 1.0, u_scrollRatio - 0.5) * 0.5;\n\tdiffuse.rgb *= 1.0 -u_scrollRatio * 0.75;\n\n\tgl_FragColor = diffuse;\n}"
},
function(e, t, n) {
    "use strict";
    var i = n(25),
    r = n(11),
    o = n(6);
    function a(e) {
        o(this, {
            dom: null,
            imgPath: "",
            count: 0,
            loadedCount: 0,
            readyCount: 0,
            useEffect: !1
        },
        e);
        var t = this.imgContainers = this.dom.querySelectorAll(".lazy-load-img");
        this.count = t.length;
        for (var n = 0,
        i = this.count; n < i; n++) {
            var a = t[n];
            a.style.backgroundColor = a.dataset.color || "#000",
            this.useEffect && (a.stagger = .3 + 2 * n % 3 * .35, a.domRect = new r({
                refDom: a
            }))
        }
    }
    var s = a.prototype;
    function u() {
        console.log(this.src);
        var e = this.container;
        e.dataset.hasLoaded = 1,
        e.style.height = "auto",
        e.appendChild(this),
        this.loadedCount++
    }
    s.add = function() {
        for (var e = this.imgContainers,
        t = 0,
        n = this.count; t < n; t++) {
            var r = e[t];
            if (!r.dataset.hasStarted) {
                r.dataset.hasStarted = 1;
                var o = new Image;
                o.container = r,
                i.add(o, this.imgPath + r.dataset.filename, u)
            }
        }
    },
    s.resize = function() {
        for (var e = this.imgContainers,
        t = 0,
        n = this.count; t < n; t++) {
            var i = e[t],
            r = i.dataset;
            r.hasLoaded || (i.style.height = Math.ceil(i.offsetWidth * r.height / r.width) + "px"),
            this.useEffect && (this.beforeViewportTest(i, this), i.domRect.testViewport(!0))
        }
    },
    s.update = function() {
        for (var e = this.imgContainers,
        t = this.readyCount === this.count,
        n = 0,
        i = this.count; n < i; n++) {
            var r = e[n];
            t || !r.dataset.hasLoaded || r.classList.contains("is-ready") || (r.classList.add("is-ready"), this.readyCount++),
            this.useEffect && (r.domRect.testViewport(), this.applyEffect(r, this))
        }
    },
    e.exports = a
},
function(e, t, n) {
    "use strict";
    var i = n(6);
    function r(e) {
        i(this, {
            containers: null,
            count: 0
        },
        e);
        var t = this.containers;
        this.count = t.length;
        for (var n = 0,
        r = this.count; n < r; n++) {
            var o = t[n];
            o.style.backgroundColor = o.dataset.color || "#000"
        }
    }
    r.prototype.resize = function() {
        for (var e = this.containers,
        t = 0,
        n = this.count; t < n; t++) {
            var i = e[t],
            r = i.dataset;
            i.style.height = Math.ceil(i.offsetWidth * r.height / r.width) + "px"
        }
    },
    e.exports = r
},
function(e, t, n) {
    "use strict";
    var i = n(1),
    r = n(2),
    o = n(187);
    t.preInit = function() {
        i.isSupportWebGL && o.preInit();
        s = document.querySelector("#contact-context .sec-context-inner").style
    },
    t.init = function() {
        i.isSupportWebGL && o.init();
        a = !0
    },
    t.resize = function() {
        a && i.isSupportWebGL && o.resize()
    },
    t.update = function(e) {
        if (a) {
            i.isSupportWebGL && o.update(e);
            var t = Math.min(o.refDomRect.top / i.height, 1);
            s.transform = "translate3d(0," + (t * -i.height + t * i.height * .4) + "px,0)",
            s.opacity = r.cUnMix(.6, .1, t)
        }
    };
    var a = !1,
    s = void 0
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(1),
    o = n(10),
    a = n(188),
    s = n(61),
    u = n(60),
    c = n(2),
    l = n(199);
    function d() {
        f.constructor.call(this, {
            refDomId: "contact",
            backgroundColor: 1052688,
            parallax: 2,
            path: "contact",
            downScale: .2,
            defaultCameraFov: 70,
            mouseProjectionPlane: new i.Plane(new i.Vector3(0, 1, 0)),
            envMap: null
        })
    }
    var f = o.prototype,
    h = d.prototype = new o;
    h.constructor = d,
    h.preInit = function() {
        f.preInit.call(this),
        this.scene.fog = new i.FogExp2(this.backgroundColor, .07),
        a.preInit(this),
        l.preInit(this)
    },
    h.init = function() {
        f.init.call(this),
        m = new i.Vector3,
        v = new i.Object3D,
        this.scene.add(v),
        v.add(this.camera),
        s.init(),
        u.init(this),
        this.scene.add(u.container),
        a.init(),
        l.init(),
        this.scene.add(a.container),
        this.scene.add(l.container),
        this.precompile()
    },
    h.resize = function() {
        this.paddingTop = r.height * r.featureOverMaskHeight | 0,
        f.resize.call(this)
    },
    h.update = function(e) {
        if (this.testViewport(), this.needsRender) {
            var t = .5 * Math.cos(c.clamp( - (this.refDomRect.top - this.paddingTop - r.height) / this.fullHeight, 0, 1) * Math.PI) + .5;
            this.camera.position.z = 12,
            this.camera.position.y = 5,
            this.camera.position.x = 0;
            var n = new i.Vector3(0, 5, 2);
            this.camera.lookAt(n),
            this.updateMouse();
            m.copy(this.camera.position).sub(n).length();
            this.camera.position.copy(n),
            this.camera.rotateX(.2 * (1 - r.elasticMouse.y / r.height * 2)),
            this.camera.rotateY( - .2 * (r.elasticMouse.x / r.width * 2 - 1)),
            m.set(0, 0, 1),
            this.camera.fov = c.mix(45, 75, 1 - t);
            var o = 1 / (2 * Math.tan(.125 * Math.PI)),
            d = 1 / (2 * Math.tan(75 / 360 * Math.PI)),
            f = c.mix(o / d * .5, 1, c.cUnMix(o, d, 1 / (2 * Math.tan(this.camera.fov / 360 * Math.PI))));
            this.camera.position.copy(n);
            var h = new i.Vector3(0, 5, 12 + 4 * t).sub(n).multiplyScalar(f),
            v = h.length();
            this.camera.translateOnAxis(h.normalize(), v),
            this.camera.lookAt(n),
            l.update(e),
            this.scene.updateMatrixWorld(!0),
            this.updateCamera();
            var p = Math.ceil(this.width * this.downScale),
            g = Math.ceil(this.height * this.downScale),
            x = r.renderer.shadowMap.autoUpdate;
            r.renderer.shadowMap.autoUpdate = !1,
            r.renderer.shadowMap.needsUpdate = !1,
            u.container.visible = !0,
            s.resize(this.width, this.height, p, g),
            s.render(e, this.scene, this.camera),
            u.container.visible = !1,
            r.renderer.shadowMap.needsUpdate = !0,
            a.update(e),
            r.renderer.shadowMap.needsUpdate = !1,
            this.render(),
            u.resize(this.width, this.height, p, g),
            u.update(e, this.scene, this.camera),
            r.renderer.shadowMap.autoUpdate = x,
            r.renderer.shadowMap.needsUpdate = !1
        }
    };
    var v = void 0,
    m = void 0;
    e.exports = new d
},
function(e, t, n) {
    "use strict";
    var i = n(0),
    r = n(12),
    o = n(2),
    a = n(15),
    s = n(60),
    u = n(58),
    c = n(3),
    l = n(1),
    d = n(6),
    f = n(59);
    t.preInit = function(e) {
        w = e,
        h = t.container = new i.Object3D,
        (_ = new i.Texture(l.loader.add(c.cdnPath + "images/floor.png").content)).wrapS = _.wrapT = i.MirroredRepeatWrapping,
        _.magFilter = _.minFilter = i.LinearFilter,
        _.needsUpdate = !0
    },
    t.init = function() {
        if (b = new i.Color, S = new i.Vector3, (m = new f).positionAmplitude = 2, m.positionFrequency = .7, m.rotationAmplitude = 0, m.rotationFrequency = 1, (g = new f).positionAmplitude = 2, g.positionFrequency = .7, g.rotationAmplitude = 0, g.rotationFrequency = 1, (v = new i.SpotLight(34047, 2.69, 30, 30.3 / 180 * Math.PI, .7, 1)).position.set( - 16.8, 8, -.24), v.castShadow = !0, v.shadow.bias = -.0012, v.shadow.camera.near = 3, v.shadow.camera.far = 22, v.shadow.mapSize.width = 1024, v.shadow.mapSize.height = 1024, h.add(v), h.add(v.target), s.addToSpotLight(v), (p = new i.SpotLight(14812731, 3.5917, 18, 35.128 / 180 * Math.PI, .7, 1.2)).position.set(12, 3, 3), p.castShadow = !0, p.shadow.bias = -.0015, p.shadow.camera.near = 2, p.shadow.camera.far = 30, p.shadow.mapSize.width = 768, p.shadow.mapSize.height = 768, h.add(p), h.add(p.target), s.addToSpotLight(p), y = new u, (x = new i.Mesh(new i.PlaneBufferGeometry(500, 500), new i.MeshStandardMaterial({
            bumpMap: _,
            color: new i.Color(12891292),
            roughness: .85,
            metalness: .05,
            dithering: !0
        }))).material.type = "ShaderMaterial", x.material.uniforms = d(i.UniformsUtils.merge([i.ShaderLib.standard.uniforms]), {
            u_mirrorTexture: {
                value: y.renderTarget.texture
            },
            u_mirrorTextureMatrix: {
                value: y.textureMatrix
            }
        }), x.material.vertexShader = i.ShaderChunk.meshphysical_vert, x.material.fragmentShader = i.ShaderChunk.meshphysical_frag, x.material.vertexShader = x.material.vertexShader.replace("void main() {", n(194).replace(/#define\sGLSLIFY\s./, "") + "\n\nvoid main() {"), x.material.vertexShader = x.material.vertexShader.replace("#include <fog_vertex>", "#include <fog_vertex>\n\n" + n(195).replace(/#define\sGLSLIFY\s./, "")), x.material.fragmentShader = x.material.fragmentShader.replace("#include <lights_physical_fragment>", n(196).replace(/#define\sGLSLIFY\s./, "") + "\n\n#include <lights_physical_fragment>"), x.material.fragmentShader = x.material.fragmentShader.replace("void main() {", n(197).replace(/#define\sGLSLIFY\s./, "") + "\n\nvoid main() {"), x.material.fragmentShader = x.material.fragmentShader.replace("gl_FragColor = vec4( outgoingLight, diffuseColor.a );", n(198).replace(/#define\sGLSLIFY\s./, "") + "\n\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );"), x.receiveShadow = !0, x.rotation.x = -Math.PI / 2, x.needsRenderDepth = !0, x.isFloor = !0, h.position.z = -1, h.add(x), window.gui) {
            var e = w.gui,
            t = e.addFolder("contact light0");
            t.addColor(v, "color"),
            t.add(v.position, "x", -20, 20, 1e-4),
            t.add(v.position, "y", -20, 20, 1e-4),
            t.add(v.position, "z", -20, 20, 1e-4),
            t.add(v.target.position, "x", -20, 20, 1e-4),
            t.add(v.target.position, "y", -20, 20, 1e-4),
            t.add(v.target.position, "z", -20, 20, 1e-4),
            t.add(v, "intensity", 0, 20, 1e-4),
            t.add(v, "distance", 0, 50, 1e-4),
            t.add(v, "angle", 0, Math.PI, 1e-4),
            t.add(v, "penumbra", 0, 1, 1e-4),
            t.add(v, "decay", 0, 5, 1e-4),
            t.open();
            var r = e.addFolder("contact light1");
            r.addColor(p, "color"),
            r.add(p.position, "x", -20, 20, 1e-4),
            r.add(p.position, "y", -20, 20, 1e-4),
            r.add(p.position, "z", -20, 20, 1e-4),
            r.add(p.target.position, "x", -20, 20, 1e-4),
            r.add(p.target.position, "y", -20, 20, 1e-4),
            r.add(p.target.position, "z", -20, 20, 1e-4),
            r.add(p, "intensity", 0, 20, 1e-4),
            r.add(p, "distance", 0, 50, 1e-4),
            r.add(p, "angle", 0, Math.PI, 1e-4),
            r.add(p, "penumbra", 0, 1, 1e-4),
            r.add(p, "decay", 0, 5, 1e-4),
            r.open();
            var o = e.addFolder("floor");
            o.addColor(x.material, "color"),
            o.add(x.material, "roughness", 0, 1, 1e-4),
            o.add(x.material, "metalness", 0, 1, 1e-4),
            o.open()
        }
    },
    t.update = function(e) {
        var t = Math.floor(T) % M.length,
        n = (t + 1) % M.length,
        i = T % 1,
        s = o.fit(i, 0, .2, 0, 1, a.easeInOutBack),
        u = o.fit(i, 0, .2, 0, 1, a.easeInOutQuint);
        P(v, M[t].left, M[n].left, s),
        P(p, M[t].right, M[n].right, u),
        m.update(e),
        g.update(e),
        v.updateMatrix(),
        v.matrix.multiply(m.matrix),
        v.matrix.decompose(v.position, v.quaternion, v.scale),
        p.updateMatrix(),
        p.matrix.multiply(g.matrix),
        p.matrix.decompose(p.position, p.quaternion, p.scale),
        y.setSize(Math.ceil(.25 * w.width), Math.ceil(.25 * w.height)),
        y.update(l.renderer, w.scene, w.camera, x),
        r.blur9(1, 1, y.renderTarget),
        T += .2 * e
    };
    var h = t.container = null,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = void 0,
    y = void 0,
    w = void 0,
    b = void 0,
    S = void 0,
    T = 0,
    M = [{
        left: {
            color: 34047,
            from: [ - 16.8, 8, -.24],
            to: [3, 0, 0],
            intensity: 2.69,
            distance: 30,
            angle: .5288,
            decay: 1
        },
        right: {
            color: 14812731,
            from: [12, 3, 3],
            to: [0, 2, 0],
            intensity: 3.5917,
            distance: 18,
            angle: .6131,
            decay: 1.2
        }
    },
    {
        left: {
            color: 7719638,
            from: [ - 12.469, 5.2441, 7.848],
            to: [0, 0, -5],
            intensity: 3.5,
            distance: 24,
            angle: .6,
            decay: 1.2908
        },
        right: {
            color: 16774211,
            from: [12, 8, 2.938],
            to: [0, 0, -3.633],
            intensity: 2.2448,
            distance: 17.3,
            angle: .7405,
            decay: 1.0663
        }
    },
    {
        left: {
            color: 14604903,
            from: [ - 12.082, 6.427, -8.248],
            to: [0, -2, 0],
            intensity: 3.5917,
            distance: 20.203,
            angle: .4,
            decay: 1.2908
        },
        right: {
            color: 6741722,
            from: [5.591, 2.8972, 10.978],
            to: [0, 0, -5.633],
            intensity: 2.2448,
            distance: 15.713,
            angle: .74,
            decay: 1.0663
        }
    },
    {
        left: {
            color: 5818111,
            from: [ - 6.469, 3, 12.848],
            to: [0, 3, -5],
            intensity: 3.2,
            distance: 20,
            angle: .8,
            decay: 1.2908
        },
        right: {
            color: 15912844,
            from: [5, 3.346, -6.938],
            to: [0, 0, -5],
            intensity: 2,
            distance: 17.3,
            angle: .7405,
            decay: 1.0663
        }
    }];
    function P(e, t, n, i) {
        var r = e.position.fromArray(t.from).distanceTo(S.fromArray(t.to)),
        a = e.position.fromArray(n.from).distanceTo(S.fromArray(n.to));
        e.position.fromArray(t.from).lerp(S.fromArray(n.from), i),
        e.target.position.fromArray(t.to).lerp(S.fromArray(n.to), i),
        e.lookAt(e.target.position),
        e.position.copy(e.target.position),
        e.translateZ(o.mix(r, a, i)),
        e.color.setHex(t.color).lerp(b.setHex(n.color), i),
        e.intensity = o.mix(t.intensity, n.intensity, i),
        e.distance = o.mix(t.distance, n.distance, i),
        e.angle = o.mix(t.angle, n.angle, i),
        e.decay = o.mix(t.decay, n.decay, i)
    }
},
function(e, t) {
    e.exports = "attribute vec3 position;\n\nuniform float u_vertZ;\n\n// varying vec2 v_uv;\n\nvoid main() {\n    // v_uv = position.xy * 0.5 + 0.5;\n    gl_Position = vec4( position.xy, u_vertZ, 1.0 );\n}\n"
},
function(e, t) {
    e.exports = "varying vec3 v_worldPosition;\nvarying vec3 v_viewPosition;\n\nvoid main () {\n    v_worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n    v_viewPosition = -mvPosition.xyz;\n    gl_Position = projectionMatrix * mvPosition;\n}"
},
function(e, t) {
    e.exports = "#if NUM_SPOT_LIGHTS > 0\n    uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n#endif\n\nuniform sampler2D u_depthTexture;\nuniform mat4 u_projectionViewInverse;\nuniform vec4 u_visualUvInfo;\nuniform vec3 u_cameraPosition;\nuniform vec2 u_resolution;\nuniform float u_noiseTime;\nuniform float u_time;\n\nvarying vec3 v_worldPosition;\nvarying vec3 v_viewPosition;\n\n#include <common>\n#include <packing>\n\n#include <bsdfs>\n#include <lights_pars_begin>\n\n#include <shadowmap_pars_fragment>\n\n#include <snoise3> \n\nfloat sampleShadowMask (SpotLight spotLight, mat4 shadowMatrix, in vec4 worldPosition) {\n    vec4 shadowCoord = shadowMatrix * worldPosition;\n    float shadowBias = spotLight.shadowBias;\n\n    shadowCoord.xyz /= shadowCoord.w;\n    shadowCoord.z += shadowBias;\n\n    bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n    bool inFrustum = all( inFrustumVec );\n    bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n    bool frustumTest = all( frustumTestVec );\n\n    return texture2DCompare( spotShadowMap[SPOTLIGHT_INDEX], shadowCoord.xy, shadowCoord.z );\n}\n\nvoid main () {\n    vec2 screenUv = gl_FragCoord.xy / u_resolution;\n    float depth = unpackRGBAToDepth(texture2D(u_depthTexture, screenUv));\n    vec3 ndcPos = vec3(screenUv, depth) * 2.0 - 1.0;\n    vec4 depthPosition = u_projectionViewInverse * vec4(ndcPos, 1.0);\n    depthPosition.xyz /= depthPosition.w;\n\n    vec3 depthGeomPosition = (viewMatrix * vec4(depthPosition.xyz, 1.0)).xyz;\n\n    vec2 fog = vec2(0.0);\n    vec3 geomPosition = -v_viewPosition;\n    vec3 ray = depthGeomPosition - geomPosition;\n    float maxDist = length(ray);\n    float stepDistance = clamp(maxDist / float(MAX_RAY_STEP), 0.05, 1.0);\n    vec3 rayDir = normalize(ray);\n    vec3 rayStep = rayDir * stepDistance;\n\n    if (rayDir.z > 0.0) {\n        discard;\n    }\n\n    vec3 worldRay = depthPosition.xyz - v_worldPosition;\n    vec3 worldRayDir = normalize(worldRay);\n    vec3 worldRayStep = worldRayDir * stepDistance;\n\n    float jitter = -rand(screenUv + u_noiseTime);\n\n    vec4 viewPosition = vec4(geomPosition + rayStep * jitter, 1.0);\n    vec4 worldPosition = vec4(v_worldPosition + worldRayStep * jitter, 1.0);\n\n    float dist = 0.0;\n\n    SpotLight spotLight = spotLights[SPOTLIGHT_INDEX];\n    mat4 shadowMatrix = spotShadowMatrix[SPOTLIGHT_INDEX];\n\n    for (int i = 0; i < MAX_RAY_STEP; i++) {\n        viewPosition.xyz += rayStep;\n        worldPosition.xyz += worldRayStep;\n        dist += stepDistance;\n\n\t\tvec3 lVector = spotLight.position - viewPosition.xyz;\n\t\tfloat angleCos = dot(normalize(lVector), spotLight.direction );\n\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\n\t\t    float lightDistance = length( lVector );\n            float light = spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n            \n            float shadowMask = sampleShadowMask(spotLight, shadowMatrix, worldPosition);\n\n            float fogWeight = min(10.0, shadowMask * stepDistance);\n\n            float lightWeight = (1.0 - fog.y) * fogWeight;\n            fog += vec2(light, 0.05) * lightWeight;\n            \n            if (fog.y > 0.95) {\n                break;\n            }\n            if (dist > maxDist) {\n                break;\n            }\n\t\t} else {\n            break;\n        }\n    }\n\n    gl_FragColor = vec4(fog.x * spotLight.color * 0.08, 1.0);\n}"
},
function(e, t) {
    e.exports = "uniform sampler2D u_texture;\nuniform vec2 u_delta;\n\n#ifdef USE_VARYING\n    varying vec2 v_uv[9];\n#else\n    varying vec2 v_uv;\n#endif\n\nvoid main() {\n    \n    #ifdef USE_VARYING\n        vec4 center = texture2D( u_texture, v_uv[0] );\n        vec3 color = center.rgb;\n        color += texture2D( u_texture,  v_uv[1] ).rgb;\n        color += texture2D( u_texture,  v_uv[2] ).rgb;\n        color += texture2D( u_texture,  v_uv[3] ).rgb;\n        color += texture2D( u_texture,  v_uv[4] ).rgb;\n        color += texture2D( u_texture,  v_uv[5] ).rgb;\n        color += texture2D( u_texture,  v_uv[6] ).rgb;\n        color += texture2D( u_texture,  v_uv[7] ).rgb;\n        color += texture2D( u_texture,  v_uv[8] ).rgb;\n\n        color /= 9.0;\n\n    #else\n        vec4 center = texture2D( u_texture, v_uv );\n        vec3 color = center.rgb;\n\n        vec2 delta = u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb;\n        color += texture2D( u_texture,  v_uv + delta ).rgb;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb;\n        color += texture2D( u_texture,  v_uv + delta ).rgb;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb;\n        color += texture2D( u_texture,  v_uv + delta ).rgb;\n\n        delta += u_delta;\n        color += texture2D( u_texture,  v_uv - delta ).rgb;\n        color += texture2D( u_texture,  v_uv + delta ).rgb;\n\n        color /= 9.0;\n\n    #endif\n    gl_FragColor = vec4(max(color, center.rgb), center.a);\n\n}\n"
},
function(e, t) {
    e.exports = "\n#include <common>\n#include <dithering_pars_fragment>\n\nuniform sampler2D u_texture;\nuniform vec2 u_resolution;\n\nvarying vec2 v_uv;\n\nvoid main() {\n    gl_FragColor = texture2D( u_texture, v_uv + vec2(0.0, 4.0 / u_resolution.y) );\n\n    // #100616 = vec3(0.063,0.024,0.086)\n    gl_FragColor.rgb += vec3(0.063,0.024,0.086);\n\n    #include <dithering_fragment>\n}\n"
},
function(e, t) {
    e.exports = "\nuniform mat4 u_mirrorTextureMatrix;\nvarying vec4 v_mirrorCoord;"
},
function(e, t) {
    e.exports = "\nv_mirrorCoord = u_mirrorTextureMatrix * vec4( transformed, 1.0 );\nvUv = (vUv - 0.25) * 100.0 + 0.25;"
},
function(e, t) {
    e.exports = "\nvec3 info = texture2D(bumpMap, vUv * 0.5).xyz;\nfloat wetWeight = info.b;\nvec2 uvOffset =  - vec2(0.2, 0.4);\nnormal.xy = info.xy * 2.0 - 1.0;\n\ninfo = texture2D(bumpMap, vUv * 1.3213 + uvOffset).xyz;\nnormal.xy += info.xy * 2.0 - 1.0;\nnormal.xy *= mix(0.5, 0.25, wetWeight);\n\nnormal.y *= -1.0;\nnormal.z = sqrt(1.0 - normal.x * normal.x - normal.y * normal.y);\nvec3 worldNormal = normal;\nnormal = normalMatrix * normalize(normal);\n\nmetalnessFactor = mix(metalnessFactor, 1.0, wetWeight * 0.5);\nroughnessFactor = mix(roughnessFactor, roughnessFactor * 0.5, wetWeight);\n\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.071,0.071,0.071), wetWeight * 0.75);"
},
function(e, t) {
    e.exports = "uniform sampler2D u_mirrorTexture;\nuniform sampler2D u_floorTexture;\nuniform sampler2D u_floorDetailsTexture;\nvarying vec4 v_mirrorCoord;\nvarying vec3 v_worldPosition;\n\nuniform mat3 normalMatrix;"
},
function(e, t) {
    e.exports = "outgoingLight += texture2DProj(u_mirrorTexture, v_mirrorCoord + vec4(0.0, 1.0 - wetWeight, 0.0, 0.0)).rgb * wetWeight * 0.5;// * smoothstep(13.0, 10.0, length(v_worldPosition.xz));"
},
function(e, t, n) {
    "use strict";
    var i = n(5),
    r = n(3),
    o = n(1),
    a = n(200),
    s = n(203),
    u = n(0);
    t.preInit = function(e) {
        v = e,
        (c = t.container = new u.Object3D).position.z = -2,
        s.preInit(e),
        c.add(s.container),
        _ = n(204).replace(/#define\sGLSLIFY\s./, ""),
        w = n(205).replace(/#define\sGLSLIFY\s./, ""),
        y = n(206).replace(/#define\sGLSLIFY\s./, ""),
        b = n(207).replace(/#define\sGLSLIFY\s./, ""),
        o.loader.add(r.assetPath + "images/animation.glb", {
            type: "any",
            weight: 1,
            hasLoading: !0,
            loadFunc: function(e, t, n) {
                o.GLTFLoader.load(e,
                function(e) { (l = e.scene.children[0].children[1]).add(e.scene.children[0].children[0]),
                    l.animations = e.animations,
                    t()
                },
                function(e) {
                    e.lengthComputable && n.dispatch(e.loaded / e.total)
                },
                function(e) {
                    console.log(e)
                })
            }
        });
        var a = r.assetPath + "images/" + (i.isMobile ? "low/": "high/");
        d = o.loader.add(a + "cloth_pos.png").content,
        f = o.loader.add(a + "cloth_norm.png").content,
        o.loader.add(a + "cloth.json", {
            onLoad: function(e) {
                h = e
            }
        })
    },
    t.init = function() {
        s.init();
        var e = (m = new a({
            image: d,
            normalImage: f,
            indices: new Uint16Array(h.indices),
            data: h,
            fps: 60,
            instanceCount: s.INSTANCE_COUNT,
            loop: !0
        })).geometry,
        t = new u.InstancedBufferGeometry;
        if (t.setAttribute("position", e.attributes.position), t.setIndex(e.index), t.setAttribute("a_vaFramePixelIndexOffset", e.attributes.a_vaFramePixelIndexOffset), t.setAttribute("a_vaSubFramePixelIndexOffset", e.attributes.a_vaSubFramePixelIndexOffset), t.setAttribute("a_instancePosition", s.attributes.instancePositions), t.setAttribute("a_instanceRotation", s.attributes.instanceRotations), (p = new u.Mesh(t, m.overrideDefaultMaterial(new u.MeshStandardMaterial({
            color: 16777215,
            roughness: .4,
            metalness: .15,
            side: u.DoubleSide,
            shadowSide: u.FrontSide
        }), "standard"))).customDepthMaterial = m.overrideDefaultMaterial(new u.MeshDepthMaterial({}), "depth"), p.customDepthMaterial.depthPacking = u.RGBADepthPacking, p.material.vertexShader = _ + p.material.vertexShader, p.material.vertexShader = p.material.vertexShader.replace("#include <project_vertex>", w), p.material.vertexShader = p.material.vertexShader.replace("#include <defaultnormal_vertex>", y), p.material.vertexShader = p.material.vertexShader.replace("#include <fog_vertex>", b), p.customDepthMaterial.vertexShader = _ + p.customDepthMaterial.vertexShader, p.customDepthMaterial.vertexShader = p.customDepthMaterial.vertexShader.replace("#include <project_vertex>", w), p.customDepthMaterial.transparent = !0, p.customDepthMaterial.blending = u.NoBlending, p.frustumCulled = !1, p.receiveShadow = !0, p.castShadow = !0, p.needsRenderDepth = !0, p.needsRenderReflection = !0, c.add(p), e = l.geometry, t = u.BufferGeometry.prototype.copy.call(new u.InstancedBufferGeometry, e), l.geometry = t, t.setAttribute("a_instancePosition", s.attributes.instancePositions), t.setAttribute("a_instanceRotation", s.attributes.instanceRotations), t.animations = l.animations, t.bones = e.bones, t.skinIndices = e.skinIndices, t.skinWeights = e.skinWeights, l.material = new u.MeshStandardMaterial({
            color: 394758,
            roughness: .2,
            metalness: .8,
            skinning: !0,
            shadowSide: u.FrontSide
        }), l.material.type = "ShaderMaterial", l.material.uniforms = u.UniformsUtils.merge([u.ShaderLib.standard.uniforms]), l.material.vertexShader = u.ShaderChunk.meshphysical_vert, l.material.fragmentShader = u.ShaderChunk.meshphysical_frag, l.material.vertexShader = _ + l.material.vertexShader, l.material.vertexShader = l.material.vertexShader.replace("#include <project_vertex>", w), l.material.vertexShader = l.material.vertexShader.replace("#include <defaultnormal_vertex>", y), l.material.vertexShader = l.material.vertexShader.replace("#include <fog_vertex>", b), l.customDepthMaterial = new u.MeshDepthMaterial({}), l.customDepthMaterial.depthPacking = u.RGBADepthPacking, l.customDepthMaterial.type = "ShaderMaterial", l.customDepthMaterial.skinning = !0, l.customDepthMaterial.uniforms = u.UniformsUtils.merge([u.ShaderLib.depth.uniforms]), l.customDepthMaterial.vertexShader = _ + u.ShaderLib.depth.vertexShader, l.customDepthMaterial.vertexShader = l.customDepthMaterial.vertexShader.replace("#include <project_vertex>", w), l.customDepthMaterial.fragmentShader = u.ShaderLib.depth.fragmentShader, l.customDepthMaterial.transparent = !0, l.customDepthMaterial.blending = u.NoBlending, l.frustumCulled = !1, l.receiveShadow = !0, l.castShadow = !0, l.needsRenderReflection = !0, l.needsRenderDepth = !0, c.add(l), g = new u.AnimationMixer(l), (x = g.clipAction(l.geometry.animations[0], l)).setLoop(u.LoopRepeat), x.clampWhenFinished = !0, x.playScale = 1, x.weight = 1, x.play(), window.gui) {
            var n = v.gui,
            i = n.addFolder("va");
            i.addColor(p.material, "color"),
            i.add(p.material, "roughness", 0, 1, 1e-4),
            i.add(p.material, "metalness", 0, 1, 1e-4),
            i.open();
            var r = n.addFolder("model");
            r.addColor(l.material, "color"),
            r.add(l.material, "roughness", 0, 1, 1e-4),
            r.add(l.material, "metalness", 0, 1, 1e-4),
            r.open()
        }
    },
    t.update = function(e) {
        s.update(e),
        g.update(e),
        m.time = g.time + 1,
        m.update(0, s.vertexAnimationBlendSides)
    };
    var c = t.container = null,
    l = void 0,
    d = void 0,
    f = void 0,
    h = void 0,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = void 0,
    y = void 0,
    w = void 0,
    b = void 0
},
function(e, t, n) {
    "use strict";
    var i = n(0);
    function r(e) {
        this.textureWidth = e.image.naturalWidth,
        this.textureHeight = e.image.naturalHeight,
        this.time = 0,
        this.isPlaying = !0,
        this.fps = e.fps || 60,
        this.indices = e.indices,
        this.vertexCount = e.data.vertexCountMax,
        this.frame = 0,
        this.frameCount = e.data.frameCount,
        this.actionFrameCount = e.data.actionFrameCount,
        this.useBlend = this.frameCount !== this.actionFrameCount,
        this.instanceCount = e.instanceCount,
        this.subFrameCount = e.data.subFrameCount,
        this.actionStretchedFrameCount = this.actionFrameCount * e.data.subFrameCount,
        this.duration = this.actionStretchedFrameCount / this.fps,
        this.loop = !!e.loop,
        this.useNormalImage = !!e.normalImage,
        this.geometry = e.geometry || r.generateGeometry(this);
        var t = new i.Texture(e.image);
        if (t.magFilter = i.NearestFilter, t.minFilter = i.NearestFilter, t.generateMipMaps = !1, t.flipY = !1, t.needsUpdate = !0, this.useNormalImage && (t.format = i.RGBFormat), this.uniforms = {
            u_vaTexture: {
                value: t
            },
            u_vaTextureSize: {
                value: new i.Vector2(this.textureWidth, this.textureHeight)
            }
        },
        this.useNormalImage) {
            var n = new i.Texture(e.normalImage);
            n.magFilter = i.NearestFilter,
            n.minFilter = i.NearestFilter,
            n.generateMipMaps = !1,
            n.flipY = !1,
            n.needsUpdate = !0,
            n.format = i.RGBFormat,
            this.uniforms.u_vaNormalTexture = {
                value: n
            },
            this.uniforms.u_vaNormalTextureSize = {
                value: new i.Vector2(this.textureWidth / 2, this.textureHeight)
            }
        }
        this.useBlend
    }
    e.exports = r;
    var o = r.prototype;
    o.overrideDefaultMaterial = function(e, t) {
        e.type = "ShaderMaterial";
        var r = i.ShaderLib[t];
        for (var o in e.uniforms = i.UniformsUtils.merge([r.uniforms]), this.uniforms) e.uniforms[o] = this.uniforms[o];
        e.vertexShader = r.vertexShader,
        e.fragmentShader = r.fragmentShader,
        e.vertexShader = e.vertexShader.replace("void main() {", (this.useBlend ? "#define USE_VA_BLEND\n": "\n") + n(201).replace(/#define\sGLSLIFY\s./, "") + "void main() {" + n(202).replace(/#define\sGLSLIFY\s./, "")),
        e.vertexShader = e.vertexShader.replace("#include <beginnormal_vertex>", ""),
        e.vertexShader = e.vertexShader.replace("#include <begin_vertex>", ""),
        this.useNormalImage && e.defines && (e.defines.USE_VA_NORMAL_TEXTURE = !0);
        return e
    },
    o.update = function(e, t) {
        if (this.isPlaying) {
            this.time += e,
            this.time > this.duration && (this.loop ? this.time = this.time % this.duration: this.isPlaying = !1);
            var n = this.time / this.duration,
            i = n * this.actionFrameCount,
            r = Math.floor(i),
            o = Math.ceil(i),
            a = i % 1;
            this.frame = r % this.actionFrameCount;
            var s = this.geometry.attributes.a_vaFramePixelIndexOffset,
            u = s.array,
            c = this.geometry.attributes.a_vaSubFramePixelIndexOffset,
            l = c.array,
            d = 2 * this.vertexCount;
            if (this.useBlend) for (var f = 0,
            h = 0,
            v = 0; f < this.instanceCount; f++) {
                var m = ~~ (r + f / this.instanceCount * this.actionFrameCount) % this.actionFrameCount,
                p = t[f],
                g = Math.floor(p) + 1,
                x = Math.ceil(p) + 1,
                _ = p - g + 1;
                u[v + 0] = (m + this.actionFrameCount * g) * d,
                u[v + 1] = (m + this.actionFrameCount * x) * d,
                u[v + 2] = _,
                u[v + 3] = _,
                m = ~~ (o + f / this.instanceCount * this.actionFrameCount) % this.actionFrameCount,
                l[h + 0] = (m + this.actionFrameCount * g) * d,
                l[h + 1] = (m + this.actionFrameCount * x) * d,
                l[h + 2] = a,
                h += 3,
                v += 4
            } else for (var y = 0,
            w = 0; y < this.instanceCount; y++) {
                var b = ~~ (r + y / this.instanceCount * this.actionFrameCount) % this.actionFrameCount;
                u[w + 0] = b * d,
                w += 3
            }
            s.needsUpdate = !0,
            c.needsUpdate = !0,
            this.indices || (this.geometry.drawRange.count = (this.framePixelIndexOffsets[this.frame + 1] - this.framePixelIndexOffsets[this.frame]) / 2)
        }
    },
    r.generateGeometry = function(e) {
        for (var t = e.vertexCount,
        n = e.indices,
        r = new Float32Array(3 * t), o = 0, a = 0, s = 0, u = t / 3; o < u; o++) r[s + 0] = a,
        r[s + 1] = 0,
        r[s + 2] = 0,
        r[s + 3] = a + 1,
        r[s + 4] = 0,
        r[s + 5] = 0,
        r[s + 6] = a + 2,
        r[s + 7] = 0,
        r[s + 8] = 0,
        a += 3,
        s += 9;
        var c = new i.InstancedBufferGeometry;
        return c.setAttribute("position", new i.BufferAttribute(r, 3)),
        c.setAttribute("a_vaFramePixelIndexOffset", new i.InstancedBufferAttribute(new Float32Array(4 * e.instanceCount), 4)),
        c.setAttribute("a_vaSubFramePixelIndexOffset", new i.InstancedBufferAttribute(new Float32Array(3 * e.instanceCount), 3)),
        n && c.setIndex(new i.BufferAttribute(n, 1)),
        c
    }
},
function(e, t) {
    e.exports = "uniform sampler2D u_vaTexture;\nuniform vec2 u_vaTextureSize;\nattribute vec4 a_vaFramePixelIndexOffset;\nattribute vec3 a_vaSubFramePixelIndexOffset;\n\n#ifdef USE_VA_NORMAL_TEXTURE\nuniform sampler2D u_vaNormalTexture;\nuniform vec2 u_vaNormalTextureSize;\n#endif\n\nfloat decodePositionFloat (vec2 enc) {\n  float divider = 100.0;\n  enc.x *= 255.0 / 256.0;\n  enc.y *= 1.0 / 256.0;\n  return ((enc.x + enc.y) * 2.0 - 1.0) * divider;\n}\n\nvec3 decodeNormal (vec2 enc) {\n  vec2 fenc = enc * 4.0 - 2.0;\n  float f = dot(fenc, fenc);\n  // if g is zero, it will be an issue\n  float g = max(0.001, sqrt(1.0 - f/4.0));\n  vec3 n;\n  n.xy = fenc*g;\n  n.z = 1.0 - f/2.0;\n  return n;\n}\n\nfloat computeData (float index, float frameIndexOffset, inout vec3 p, inout vec3 n) {\n\n  float pixelIndex = index * 2.0 + frameIndexOffset + 0.5;\n  vec2 uv = (floor(vec2(\n    mod(pixelIndex, u_vaTextureSize.x),\n    pixelIndex / u_vaTextureSize.x\n  )) + 0.5) / u_vaTextureSize;\n  vec4 data0 = texture2D(u_vaTexture, uv);\n  vec4 data1 = texture2D(u_vaTexture, uv + vec2(1.0 / u_vaTextureSize.x, 0.0));\n\n  p = vec3(\n    decodePositionFloat(vec2(data0.x, data1.x)),\n    decodePositionFloat(vec2(data0.y, data1.y)),\n    decodePositionFloat(vec2(data0.z, data1.z))\n  );\n\n  #ifdef USE_VA_NORMAL_TEXTURE\n      pixelIndex = index + frameIndexOffset * 0.5 + 0.5;\n      uv = (floor(vec2(\n        mod(pixelIndex, u_vaNormalTextureSize.x),\n        pixelIndex / u_vaNormalTextureSize.x\n      )) + 0.5) / u_vaNormalTextureSize;\n\n    vec3 nn = texture2D(u_vaNormalTexture, uv).xyz;\n    n = normalize(decodeNormal(nn.xy));\n    return nn.z;\n  #else\n    n = normalize(decodeNormal(vec2(data0.w, data1.w)));\n  #endif\n\n  return 0.0;\n}"
},
function(e, t) {
    e.exports = "vec3 transformed = vec3(0.0);\nvec3 objectNormal = vec3(0.0);\n\ncomputeData(position.x, a_vaFramePixelIndexOffset.x, transformed, objectNormal);\n\n#ifdef USE_VA_BLEND\n    vec3 blendedPosition = vec3(0.0);\n    vec3 blendedNormal = vec3(0.0);\n    \n    float looseness = computeData(position.x, a_vaFramePixelIndexOffset.y, blendedPosition, blendedNormal);\n\n    float blendWeight = mix(a_vaFramePixelIndexOffset.z, a_vaFramePixelIndexOffset.w, looseness);\n\n    transformed = mix(transformed, blendedPosition, blendWeight);\n    objectNormal = normalize(mix(objectNormal, blendedNormal, blendWeight));\n\n    vec3 tmpPos = vec3(0.0);\n    vec3 tmpNormal = vec3(0.0);\n\n    computeData(position.x, a_vaSubFramePixelIndexOffset.x, tmpPos, tmpNormal);\n    computeData(position.x, a_vaSubFramePixelIndexOffset.y, blendedPosition, blendedNormal);\n    \n    tmpPos = mix(tmpPos, blendedPosition, blendWeight);\n    tmpNormal = normalize(mix(tmpNormal, blendedNormal, blendWeight));\n\n    transformed = mix(transformed, tmpPos, a_vaSubFramePixelIndexOffset.z);\n    objectNormal = normalize(mix(objectNormal, tmpNormal, a_vaSubFramePixelIndexOffset.z));\n\n#endif"
},
function(e, t, n) {
    "use strict";
    var i = n(5),
    r = (n(3), n(1)),
    o = n(2),
    a = n(0),
    s = n(44);
    t.preInit = function(e) {
        v = e,
        m = new a.Vector3,
        p = new a.Vector3,
        g = new a.Vector3,
        x = new a.Vector3(0, 1, 0),
        t.container = new a.Object3D,
        u.instancePositions = new a.InstancedBufferAttribute(new Float32Array(3 * d), 3),
        u.instanceRotations = new a.InstancedBufferAttribute(new Float32Array(4 * d), 4)
    },
    t.init = function() {
        var e = new a.CylinderBufferGeometry(0, .6, 2);
        e.rotateZ( - .5 * Math.PI);
        for (var n = new a.MeshNormalMaterial,
        i = 0; i < d; i++) {
            var r = new a.Mesh(e, n);
            r.position.z = 1e3,
            r.runnerIndex = i,
            r.direction = new a.Vector3,
            r.pendingDirection = new a.Vector3,
            r.prevDirection = new a.Vector3,
            r.directionForce = new a.Vector3,
            r.angle = 0,
            r.prevAngle = 0,
            r.side = 0,
            r.inTime = i / d * 2,
            r.visible = !1,
            t.vertexAnimationBlendSides[i] = 0,
            c.push(r)
        }
    },
    t.update = function(e) {
        for (var n = u.instancePositions,
        i = n.array,
        a = u.instanceRotations,
        s = a.array,
        w = 0,
        b = 0,
        S = 0; w < d; w++) {
            var T = c[w];
            T.visible = T.inTime < _,
            T.visible && (T.rotation.y = Math.atan2( - T.direction.z, T.direction.x), T.position.add(m.copy(T.direction).multiplyScalar(h)), T.position.length() > l && y(T)),
            i[b + 0] = T.position.x,
            i[b + 1] = T.position.y,
            i[b + 2] = T.position.z,
            T.rotation.y += Math.PI / 2,
            s[S + 0] = T.quaternion.x,
            s[S + 1] = T.quaternion.y,
            s[S + 2] = T.quaternion.z,
            s[S + 3] = T.quaternion.w,
            T.rotation.y -= Math.PI / 2,
            b += 3,
            S += 4
        }
        n.needsUpdate = !0,
        a.needsUpdate = !0;
        for (var M = 0; M < d; M++) {
            var P = c[M];
            if (P.visible) {
                P.pendingDirection.set(0, 0, 0),
                g.set(0, 0, 0),
                0 == M && (p.set(v.mouse3.x - P.position.x, 0, v.mouse3.z - P.position.z + 2), p.length() > 0 && (m.copy(p).multiplyScalar(.05), g.add(m)));
                for (var R = 0; R < d; R++) if (M !== R) {
                    var C = c[R];
                    p.copy(P.position).sub(C.position);
                    var I = p.length();
                    if (I < f) {
                        var A = 0 == R ? 2 : 1;
                        p.normalize(),
                        P.direction.dot(p) < 0 && (m.copy(P.direction).reflect(p).multiplyScalar(.2 * (1 - I / f) * A), g.add(m), m.copy(p).multiplyScalar(.035 * (1 - I / f) * A), g.add(m))
                    }
                }
                P.pendingDirection.add(g),
                P.directionForce.multiplyScalar(.2),
                P.directionForce.add(P.pendingDirection)
            }
        }
        for (var D = 0; D < d; D++) {
            var L = c[D];
            if (L.visible) {
                L.prevDirection.copy(L.direction),
                L.pendingDirection.copy(L.directionForce).add(L.direction).normalize(),
                L.direction.copy(L.pendingDirection),
                L.direction.applyAxisAngle(x, .04 * r.simplex.noise2D(10 * D, .2 * _));
                var F = L.prevDirection.angleTo(L.direction);
                F *= 10 * (m.copy(L.prevDirection).cross(L.direction).y > 0 ? -1 : 1),
                L.side += .1 * (F - L.side),
                L.side = o.clamp(L.side, -1, 1),
                t.vertexAnimationBlendSides[D] = L.side
            }
        }
        _ += e
    };
    t.container = null;
    var u = t.attributes = {};
    t.vertexAnimationBlendSides = [];
    var c = [],
    l = i.isMac ? 12 : i.isMobile ? 11 : 13,
    d = t.INSTANCE_COUNT = i.isMac ? 16 : i.isMobile ? 14 : 24,
    f = 5,
    h = .07,
    v = void 0,
    m = void 0,
    p = void 0,
    g = void 0,
    x = void 0,
    _ = 0;
    function y(e) {
        for (var t = Math.floor(2 * l * Math.PI / (1.5 * f)), n = [], i = 0; i < t; i++) n[i] = i;
        n = s(n);
        for (var r = !0; n.length;) {
            var o = n.pop() / t * Math.PI * 2,
            a = !1;
            e.position.set(Math.cos(o) * l, 0, Math.sin(o) * l);
            var u = Math.PI + o + 90 * (Math.random() - .5) * Math.PI / 180;
            e.directionForce.set(0, 0, 0),
            e.direction.set(Math.cos(u), 0, Math.sin(u));
            for (var h = 0; h < d; h++) {
                var v = c[h];
                if (v !== e && e.position.distanceTo(v.position) < 1.5 * f) {
                    a = !0;
                    break
                }
            }
            if (!a) {
                r = !1;
                break
            }
        }
        if (r) {
            var m = Math.random() * Math.PI * 2;
            e.position.set(Math.cos(m) * l, 0, Math.sin(m) * l);
            var p = Math.PI + m + 30 * (Math.random() - .5) * Math.PI / 180;
            e.direction.set(Math.cos(p), 0, Math.sin(p))
        }
        e.prevDirection.copy(e.direction),
        e.rotation.y = Math.atan2( - e.direction.z, e.direction.x),
        e.side = 0
    }
},
function(e, t) {
    e.exports = "attribute vec3 a_instancePosition;\nattribute vec4 a_instanceRotation;\n"
},
function(e, t) {
    e.exports = "\ntransformed = transformed + 2.0 * cross(a_instanceRotation.xyz, cross(a_instanceRotation.xyz, transformed) + a_instanceRotation.w * transformed) + a_instancePosition;\n\n#include <project_vertex>\n"
},
function(e, t) {
    e.exports = "objectNormal = objectNormal + 2.0 * cross(a_instanceRotation.xyz, cross(a_instanceRotation.xyz, objectNormal) + a_instanceRotation.w * objectNormal);\n\n#include <defaultnormal_vertex>\n"
},
function(e, t) {
    e.exports = "\n#ifdef USE_FOG\nvec3 geomDir = normalize((modelMatrix * vec4(transformed, 1.0)).xyz - cameraPosition);\nfogDepth = -(viewMatrix * vec4(geomDir * (cameraPosition.y / geomDir.y) + cameraPosition, 1.0)).z;\n#endif"
},
function(e, t, n) {
    "use strict";
    var i = n(1),
    r = n(3),
    o = n(5),
    a = n(209),
    s = n(210),
    u = n(33),
    c = n(4),
    l = n(36),
    d = n(50),
    f = n(211),
    h = n(0);
    t.checkIsSupported = function(e, t) {
        if (window.WebGLRenderingContext) try {
            return p(e, t)
        } catch(e) {
            return ! 1
        }
        return ! 1
    },
    t.preInit = function() {
        r.USE_SMAA && d.setTextures(i.loader.add(r.cdnPath + "visuals/shared/smaa-area.png").content, i.loader.add(r.cdnPath + "visuals/shared/smaa-search.png").content)
    },
    t.init = function() {
        p(i.canvas),
        l.addChunk("getScatter", n(212)),
        l.addChunk("getScatterLine", n(213)),
        l.addChunk("cubic", n(214)),
        l.addChunk("textureBicubic", n(215)),
        l.addChunk("textureLodBicubic", n(216)),
        l.addChunk("snoise2", n(217)),
        l.addChunk("snoise3", n(218)),
        l.addChunk("snoise4", n(219)),
        l.addChunk("rotate2d", n(220)),
        l.addChunk("curl4Low", n(221)),
        l.addChunk("curl4Mid", n(222)),
        l.addChunk("simplexNoiseDerivatives4", n(223)),
        l.addChunk("encodeNormal", n(224)),
        l.addChunk("decodeNormal", n(225)),
        l.addChunk("halfFloatPacking", n(226)),
        l.addChunk("samplePackedFloats", n(227)),
        (v = i.renderer = new h.WebGLRenderer({
            canvas: i.canvas,
            context: i.gl
        })).shadowMap.type = h.PCFShadowMap,
        v.shadowMap.enabled = !0,
        c.init(v, r.renderTargetFloatType, r.dataFloatType),
        i.resolution = new h.Vector2,
        i.GLTFLoader = new a,
        i.GLTFLoadFunc = s.createQuickLoadFunc(i.GLTFLoader),
        u.init(),
        m = new h.Vector2
    },
    t.start = function() {},
    t.resize = function(e, t) {
        i.resolution.set(e, t),
        v.setRenderTarget(null),
        v.getSize(m),
        (m.width !== e || m.height !== t) && v.setSize(e, t, !1)
    },
    t.reset = function() {},
    t.render = function(e) {};
    var v = void 0,
    m = void 0;
    function p(e, t) {
        if (!r.gl) {
            t = f({
                antialias: !0,
                alpha: !1
            },
            t);
            var n = i.gl = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
            return (n.getExtension("OES_texture_float") || n.getExtension("OES_texture_half_float")) && n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS) ? (r.renderTargetFloatType = o.isIOS || !n.getExtension("OES_texture_float") ? h.HalfFloatType: h.FloatType, r.dataFloatType = h.FloatType, r.useFloatPacking = !1) : (r.renderTargetFloatType = r.dataFloatType = h.UnsignedByteType, r.useFloatPacking = !0),
            !0
        }
        return ! 1
    }
},
function(e, t, n) {
    "use strict";
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
    },
    r = n(0);
    e.exports = r.GLTFLoader = function() {
        function e(e) {
            this.manager = void 0 !== e ? e: r.DefaultLoadingManager,
            this.dracoLoader = null
        }
        function t() {
            var e = {};
            return {
                get: function(t) {
                    return e[t]
                },
                add: function(t, n) {
                    e[t] = n
                },
                remove: function(t) {
                    delete e[t]
                },
                removeAll: function() {
                    e = {}
                }
            }
        }
        e.prototype = {
            constructor: e,
            crossOrigin: "anonymous",
            load: function(e, t, n, i) {
                var o, a = this;
                o = void 0 !== this.resourcePath ? this.resourcePath: void 0 !== this.path ? this.path: r.LoaderUtils.extractUrlBase(e),
                a.manager.itemStart(e);
                var s = function(t) {
                    i ? i(t) : console.error(t),
                    a.manager.itemError(e),
                    a.manager.itemEnd(e)
                },
                u = new r.FileLoader(a.manager);
                u.setPath(this.path),
                u.setResponseType("arraybuffer"),
                u.load(e,
                function(n) {
                    try {
                        a.parse(n, o,
                        function(n) {
                            t(n),
                            a.manager.itemEnd(e)
                        },
                        s)
                    } catch(e) {
                        s(e)
                    }
                },
                n, s)
            },
            setCrossOrigin: function(e) {
                return this.crossOrigin = e,
                this
            },
            setPath: function(e) {
                return this.path = e,
                this
            },
            setResourcePath: function(e) {
                return this.resourcePath = e,
                this
            },
            setDRACOLoader: function(e) {
                return this.dracoLoader = e,
                this
            },
            parse: function(e, t, i, c) {
                var l, m = {};
                if ("string" == typeof e) l = e;
                else if (r.LoaderUtils.decodeText(new Uint8Array(e, 0, 4)) === u) {
                    try {
                        m[n.KHR_BINARY_GLTF] = new d(e)
                    } catch(e) {
                        return void(c && c(e))
                    }
                    l = m[n.KHR_BINARY_GLTF].content
                } else l = r.LoaderUtils.decodeText(new Uint8Array(e));
                var p = JSON.parse(l);
                if (void 0 === p.asset || p.asset.version[0] < 2) c && c(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead."));
                else {
                    if (p.extensionsUsed) for (var g = 0; g < p.extensionsUsed.length; ++g) {
                        var x = p.extensionsUsed[g],
                        _ = p.extensionsRequired || [];
                        switch (x) {
                        case n.KHR_LIGHTS_PUNCTUAL:
                            m[x] = new a(p);
                            break;
                        case n.KHR_MATERIALS_UNLIT:
                            m[x] = new s(p);
                            break;
                        case n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                            m[x] = new v(p);
                            break;
                        case n.KHR_DRACO_MESH_COMPRESSION:
                            m[x] = new f(p, this.dracoLoader);
                            break;
                        case n.MSFT_TEXTURE_DDS:
                            m[n.MSFT_TEXTURE_DDS] = new o(p);
                            break;
                        case n.KHR_TEXTURE_TRANSFORM:
                            m[n.KHR_TEXTURE_TRANSFORM] = new h(p);
                            break;
                        default:
                            _.indexOf(x) >= 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + x + '".')
                        }
                    }
                    var y = new H(p, m, {
                        path: t || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        manager: this.manager
                    });
                    y.parse(function(e, t, n, r, o) {
                        var a = {
                            scene: e,
                            scenes: t,
                            cameras: n,
                            animations: r,
                            asset: o.asset,
                            parser: y,
                            userData: {}
                        };
                        E(m, a, o),
                        i(a)
                    },
                    c)
                }
            }
        };
        var n = {
            KHR_BINARY_GLTF: "KHR_binary_glTF",
            KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
            KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
            KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
            KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
            KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
            MSFT_TEXTURE_DDS: "MSFT_texture_dds"
        };
        function o() {
            if (!r.DDSLoader) throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader");
            this.name = n.MSFT_TEXTURE_DDS,
            this.ddsLoader = new r.DDSLoader
        }
        function a(e) {
            this.name = n.KHR_LIGHTS_PUNCTUAL;
            var t = e.extensions && e.extensions[n.KHR_LIGHTS_PUNCTUAL] || {};
            this.lightDefs = t.lights || []
        }
        function s(e) {
            this.name = n.KHR_MATERIALS_UNLIT
        }
        a.prototype.loadLight = function(e) {
            var t, n = this.lightDefs[e],
            i = new r.Color(16777215);
            void 0 !== n.color && i.fromArray(n.color);
            var o = void 0 !== n.range ? n.range: 0;
            switch (n.type) {
            case "directional":
                (t = new r.DirectionalLight(i)).target.position.set(0, 0, -1),
                t.add(t.target);
                break;
            case "point":
                (t = new r.PointLight(i)).distance = o;
                break;
            case "spot":
                (t = new r.SpotLight(i)).distance = o,
                n.spot = n.spot || {},
                n.spot.innerConeAngle = void 0 !== n.spot.innerConeAngle ? n.spot.innerConeAngle: 0,
                n.spot.outerConeAngle = void 0 !== n.spot.outerConeAngle ? n.spot.outerConeAngle: Math.PI / 4,
                t.angle = n.spot.outerConeAngle,
                t.penumbra = 1 - n.spot.innerConeAngle / n.spot.outerConeAngle,
                t.target.position.set(0, 0, -1),
                t.add(t.target);
                break;
            default:
                throw new Error('THREE.GLTFLoader: Unexpected light type, "' + n.type + '".')
            }
            return t.decay = 2,
            void 0 !== n.intensity && (t.intensity = n.intensity),
            t.name = n.name || "light_" + e,
            Promise.resolve(t)
        },
        s.prototype.getMaterialType = function(e) {
            return r.MeshBasicMaterial
        },
        s.prototype.extendParams = function(e, t, n) {
            var i = [];
            e.color = new r.Color(1, 1, 1),
            e.opacity = 1;
            var o = t.pbrMetallicRoughness;
            if (o) {
                if (Array.isArray(o.baseColorFactor)) {
                    var a = o.baseColorFactor;
                    e.color.fromArray(a),
                    e.opacity = a[3]
                }
                void 0 !== o.baseColorTexture && i.push(n.assignTexture(e, "map", o.baseColorTexture))
            }
            return Promise.all(i)
        };
        var u = "glTF",
        c = 12,
        l = {
            JSON: 1313821514,
            BIN: 5130562
        };
        function d(e) {
            this.name = n.KHR_BINARY_GLTF,
            this.content = null,
            this.body = null;
            var t = new DataView(e, 0, c);
            if (this.header = {
                magic: r.LoaderUtils.decodeText(new Uint8Array(e.slice(0, 4))),
                version: t.getUint32(4, !0),
                length: t.getUint32(8, !0)
            },
            this.header.magic !== u) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
            if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.");
            for (var i = new DataView(e, c), o = 0; o < i.byteLength;) {
                var a = i.getUint32(o, !0);
                o += 4;
                var s = i.getUint32(o, !0);
                if (o += 4, s === l.JSON) {
                    var d = new Uint8Array(e, c + o, a);
                    this.content = r.LoaderUtils.decodeText(d)
                } else if (s === l.BIN) {
                    var f = c + o;
                    this.body = e.slice(f, f + a)
                }
                o += a
            }
            if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
        }
        function f(e, t) {
            if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
            this.name = n.KHR_DRACO_MESH_COMPRESSION,
            this.json = e,
            this.dracoLoader = t,
            r.DRACOLoader.getDecoderModule()
        }
        function h(e) {
            this.name = n.KHR_TEXTURE_TRANSFORM
        }
        function v() {
            return {
                name: n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
                getMaterialType: function() {
                    return r.ShaderMaterial
                },
                extendParams: function(e, t, n) {
                    var i = t.extensions[this.name],
                    o = r.ShaderLib.standard,
                    a = r.UniformsUtils.clone(o.uniforms),
                    s = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
                    u = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
                    c = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
                    l = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
                    d = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb;", "material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );", "material.specularColor = specularFactor.rgb;"].join("\n"),
                    f = o.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", s).replace("#include <metalnessmap_pars_fragment>", u).replace("#include <roughnessmap_fragment>", c).replace("#include <metalnessmap_fragment>", l).replace("#include <lights_physical_fragment>", d);
                    delete a.roughness,
                    delete a.metalness,
                    delete a.roughnessMap,
                    delete a.metalnessMap,
                    a.specular = {
                        value: (new r.Color).setHex(1118481)
                    },
                    a.glossiness = {
                        value: .5
                    },
                    a.specularMap = {
                        value: null
                    },
                    a.glossinessMap = {
                        value: null
                    },
                    e.vertexShader = o.vertexShader,
                    e.fragmentShader = f,
                    e.uniforms = a,
                    e.defines = {
                        STANDARD: ""
                    },
                    e.color = new r.Color(1, 1, 1),
                    e.opacity = 1;
                    var h = [];
                    if (Array.isArray(i.diffuseFactor)) {
                        var v = i.diffuseFactor;
                        e.color.fromArray(v),
                        e.opacity = v[3]
                    }
                    if (void 0 !== i.diffuseTexture && h.push(n.assignTexture(e, "map", i.diffuseTexture)), e.emissive = new r.Color(0, 0, 0), e.glossiness = void 0 !== i.glossinessFactor ? i.glossinessFactor: 1, e.specular = new r.Color(1, 1, 1), Array.isArray(i.specularFactor) && e.specular.fromArray(i.specularFactor), void 0 !== i.specularGlossinessTexture) {
                        var m = i.specularGlossinessTexture;
                        h.push(n.assignTexture(e, "glossinessMap", m)),
                        h.push(n.assignTexture(e, "specularMap", m))
                    }
                    return Promise.all(h)
                },
                createMaterial: function(e) {
                    var t = new r.ShaderMaterial({
                        defines: e.defines,
                        vertexShader: e.vertexShader,
                        fragmentShader: e.fragmentShader,
                        uniforms: e.uniforms,
                        fog: !0,
                        lights: !0,
                        opacity: e.opacity,
                        transparent: e.transparent
                    });
                    return t.isGLTFSpecularGlossinessMaterial = !0,
                    t.color = e.color,
                    t.map = void 0 === e.map ? null: e.map,
                    t.lightMap = null,
                    t.lightMapIntensity = 1,
                    t.aoMap = void 0 === e.aoMap ? null: e.aoMap,
                    t.aoMapIntensity = 1,
                    t.emissive = e.emissive,
                    t.emissiveIntensity = 1,
                    t.emissiveMap = void 0 === e.emissiveMap ? null: e.emissiveMap,
                    t.bumpMap = void 0 === e.bumpMap ? null: e.bumpMap,
                    t.bumpScale = 1,
                    t.normalMap = void 0 === e.normalMap ? null: e.normalMap,
                    e.normalScale && (t.normalScale = e.normalScale),
                    t.displacementMap = null,
                    t.displacementScale = 1,
                    t.displacementBias = 0,
                    t.specularMap = void 0 === e.specularMap ? null: e.specularMap,
                    t.specular = e.specular,
                    t.glossinessMap = void 0 === e.glossinessMap ? null: e.glossinessMap,
                    t.glossiness = e.glossiness,
                    t.alphaMap = null,
                    t.envMap = void 0 === e.envMap ? null: e.envMap,
                    t.envMapIntensity = 1,
                    t.refractionRatio = .98,
                    t.extensions.derivatives = !0,
                    t
                },
                cloneMaterial: function(e) {
                    var t = e.clone();
                    t.isGLTFSpecularGlossinessMaterial = !0;
                    for (var n = this.specularGlossinessParams,
                    i = 0,
                    r = n.length; i < r; i++) t[n[i]] = e[n[i]];
                    return t
                },
                refreshUniforms: function(e, t, n, i, r, o) {
                    if (!0 === r.isGLTFSpecularGlossinessMaterial) {
                        var a, s = r.uniforms,
                        u = r.defines;
                        s.opacity.value = r.opacity,
                        s.diffuse.value.copy(r.color),
                        s.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),
                        s.map.value = r.map,
                        s.specularMap.value = r.specularMap,
                        s.alphaMap.value = r.alphaMap,
                        s.lightMap.value = r.lightMap,
                        s.lightMapIntensity.value = r.lightMapIntensity,
                        s.aoMap.value = r.aoMap,
                        s.aoMapIntensity.value = r.aoMapIntensity,
                        r.map ? a = r.map: r.specularMap ? a = r.specularMap: r.displacementMap ? a = r.displacementMap: r.normalMap ? a = r.normalMap: r.bumpMap ? a = r.bumpMap: r.glossinessMap ? a = r.glossinessMap: r.alphaMap ? a = r.alphaMap: r.emissiveMap && (a = r.emissiveMap),
                        void 0 !== a && (a.isWebGLRenderTarget && (a = a.texture), !0 === a.matrixAutoUpdate && a.updateMatrix(), s.uvTransform.value.copy(a.matrix)),
                        r.envMap && (s.envMap.value = r.envMap, s.envMapIntensity.value = r.envMapIntensity, s.flipEnvMap.value = r.envMap.isCubeTexture ? -1 : 1, s.reflectivity.value = r.reflectivity, s.refractionRatio.value = r.refractionRatio, s.maxMipLevel.value = e.properties.get(r.envMap).__maxMipLevel),
                        s.specular.value.copy(r.specular),
                        s.glossiness.value = r.glossiness,
                        s.glossinessMap.value = r.glossinessMap,
                        s.emissiveMap.value = r.emissiveMap,
                        s.bumpMap.value = r.bumpMap,
                        s.normalMap.value = r.normalMap,
                        s.displacementMap.value = r.displacementMap,
                        s.displacementScale.value = r.displacementScale,
                        s.displacementBias.value = r.displacementBias,
                        null !== s.glossinessMap.value && void 0 === u.USE_GLOSSINESSMAP && (u.USE_GLOSSINESSMAP = "", u.USE_ROUGHNESSMAP = ""),
                        null === s.glossinessMap.value && void 0 !== u.USE_GLOSSINESSMAP && (delete u.USE_GLOSSINESSMAP, delete u.USE_ROUGHNESSMAP)
                    }
                }
            }
        }
        function m(e, t, n, i) {
            r.Interpolant.call(this, e, t, n, i)
        }
        f.prototype.decodePrimitive = function(e, t) {
            var n = this.json,
            i = this.dracoLoader,
            r = e.extensions[this.name].bufferView,
            o = e.extensions[this.name].attributes,
            a = {},
            s = {},
            u = {};
            for (var c in o) c in R && (a[R[c]] = o[c]);
            for (c in e.attributes) if (void 0 !== R[c] && void 0 !== o[c]) {
                var l = n.accessors[e.attributes[c]],
                d = S[l.componentType];
                u[R[c]] = d,
                s[R[c]] = !0 === l.normalized
            }
            return t.getDependency("bufferView", r).then(function(e) {
                return new Promise(function(t) {
                    i.decodeDracoFile(e,
                    function(e) {
                        for (var n in e.attributes) {
                            var i = e.attributes[n],
                            r = s[n];
                            void 0 !== r && (i.normalized = r)
                        }
                        t(e)
                    },
                    a, u)
                })
            })
        },
        h.prototype.extendTexture = function(e, t) {
            return e = e.clone(),
            void 0 !== t.offset && e.offset.fromArray(t.offset),
            void 0 !== t.rotation && (e.rotation = t.rotation),
            void 0 !== t.scale && e.repeat.fromArray(t.scale),
            void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'),
            e.needsUpdate = !0,
            e
        },
        m.prototype = Object.create(r.Interpolant.prototype),
        m.prototype.constructor = m,
        m.prototype.copySampleValue_ = function(e) {
            for (var t = this.resultBuffer,
            n = this.sampleValues,
            i = this.valueSize,
            r = e * i * 3 + i,
            o = 0; o !== i; o++) t[o] = n[r + o];
            return t
        },
        m.prototype.beforeStart_ = m.prototype.copySampleValue_,
        m.prototype.afterEnd_ = m.prototype.copySampleValue_,
        m.prototype.interpolate_ = function(e, t, n, i) {
            for (var r = this.resultBuffer,
            o = this.sampleValues,
            a = this.valueSize,
            s = 2 * a,
            u = 3 * a,
            c = i - t,
            l = (n - t) / c, d = l * l, f = d * l, h = e * u, v = h - u, m = -2 * f + 3 * d, p = f - d, g = 1 - m, x = p - d + l, _ = 0; _ !== a; _++) {
                var y = o[v + _ + a],
                w = o[v + _ + s] * c,
                b = o[h + _ + a],
                S = o[h + _] * c;
                r[_] = g * y + x * w + m * b + p * S
            }
            return r
        };
        var p = 0,
        g = 1,
        x = 2,
        _ = 3,
        y = 4,
        w = 5,
        b = 6,
        S = (Number, r.Matrix3, r.Matrix4, r.Vector2, r.Vector3, r.Vector4, r.Texture, {
            5120 : Int8Array,
            5121 : Uint8Array,
            5122 : Int16Array,
            5123 : Uint16Array,
            5125 : Uint32Array,
            5126 : Float32Array
        }),
        T = {
            9728 : r.NearestFilter,
            9729 : r.LinearFilter,
            9984 : r.NearestMipMapNearestFilter,
            9985 : r.LinearMipMapNearestFilter,
            9986 : r.NearestMipMapLinearFilter,
            9987 : r.LinearMipMapLinearFilter
        },
        M = {
            33071 : r.ClampToEdgeWrapping,
            33648 : r.MirroredRepeatWrapping,
            10497 : r.RepeatWrapping
        },
        P = (r.BackSide, r.FrontSide, r.NeverDepth, r.LessDepth, r.EqualDepth, r.LessEqualDepth, r.GreaterEqualDepth, r.NotEqualDepth, r.GreaterEqualDepth, r.AlwaysDepth, r.AddEquation, r.SubtractEquation, r.ReverseSubtractEquation, r.ZeroFactor, r.OneFactor, r.SrcColorFactor, r.OneMinusSrcColorFactor, r.SrcAlphaFactor, r.OneMinusSrcAlphaFactor, r.DstAlphaFactor, r.OneMinusDstAlphaFactor, r.DstColorFactor, r.OneMinusDstColorFactor, r.SrcAlphaSaturateFactor, {
            SCALAR: 1,
            VEC2: 2,
            VEC3: 3,
            VEC4: 4,
            MAT2: 4,
            MAT3: 9,
            MAT4: 16
        }),
        R = {
            POSITION: "position",
            NORMAL: "normal",
            TEXCOORD_0: "uv",
            TEXCOORD_1: "uv2",
            COLOR_0: "color",
            WEIGHTS_0: "skinWeight",
            JOINTS_0: "skinIndex"
        },
        C = {
            scale: "scale",
            translation: "position",
            rotation: "quaternion",
            weights: "morphTargetInfluences"
        },
        I = {
            CUBICSPLINE: r.InterpolateSmooth,
            LINEAR: r.InterpolateLinear,
            STEP: r.InterpolateDiscrete
        },
        A = "OPAQUE",
        D = "MASK",
        L = "BLEND",
        F = {
            "image/png": r.RGBAFormat,
            "image/jpeg": r.RGBFormat
        };
        function z(e, t) {
            return "string" != typeof e || "" === e ? "": /^(https?:)?\/\//i.test(e) ? e: /^data:.*,.*$/i.test(e) ? e: /^blob:.*$/i.test(e) ? e: t + e
        }
        function E(e, t, n) {
            for (var i in n.extensions) void 0 === e[i] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {},
            t.userData.gltfExtensions[i] = n.extensions[i])
        }
        function k(e, t) {
            void 0 !== t.extras && ("object" === i(t.extras) ? e.userData = t.extras: console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
        }
        function O(e, t) {
            if (e.updateMorphTargets(), void 0 !== t.weights) for (var n = 0,
            i = t.weights.length; n < i; n++) e.morphTargetInfluences[n] = t.weights[n];
            if (t.extras && Array.isArray(t.extras.targetNames)) {
                var r = t.extras.targetNames;
                if (e.morphTargetInfluences.length === r.length) {
                    e.morphTargetDictionary = {};
                    for (n = 0, i = r.length; n < i; n++) e.morphTargetDictionary[r[n]] = n
                } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
            }
        }
        function U(e, t) {
            if (Object.keys(e).length !== Object.keys(t).length) return ! 1;
            for (var n in e) if (e[n] !== t[n]) return ! 1;
            return ! 0
        }
        function N(e, t) {
            if (e.length !== t.length) return ! 1;
            for (var n = 0,
            i = e.length; n < i; n++) if (e[n] !== t[n]) return ! 1;
            return ! 0
        }
        function B(e, t) {
            for (var i = 0,
            r = e.length; i < r; i++) {
                var o = e[i];
                if (a = o.primitive, s = t, u = void 0, c = void 0, u = a.extensions ? a.extensions[n.KHR_DRACO_MESH_COMPRESSION] : void 0, c = s.extensions ? s.extensions[n.KHR_DRACO_MESH_COMPRESSION] : void 0, u && c ? u.bufferView === c.bufferView && U(u.attributes, c.attributes) : a.indices === s.indices && U(a.attributes, s.attributes)) return o.promise
            }
            var a, s, u, c;
            return null
        }
        function V(e) {
            if (e.isInterleavedBufferAttribute) {
                for (var t = e.count,
                n = e.itemSize,
                i = e.array.slice(0, t * n), o = 0; o < t; ++o) i[o] = e.getX(o),
                n >= 2 && (i[o + 1] = e.getY(o)),
                n >= 3 && (i[o + 2] = e.getZ(o)),
                n >= 4 && (i[o + 3] = e.getW(o));
                return new r.BufferAttribute(i, n, e.normalized)
            }
            return e.clone()
        }
        function H(e, n, i) {
            this.json = e || {},
            this.extensions = n || {},
            this.options = i || {},
            this.cache = new t,
            this.primitiveCache = [],
            this.multiplePrimitivesCache = [],
            this.multiPassGeometryCache = [],
            this.textureLoader = new r.TextureLoader(this.options.manager),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.fileLoader = new r.FileLoader(this.options.manager),
            this.fileLoader.setResponseType("arraybuffer")
        }
        function W(e, t, n) {
            var i = t.attributes,
            r = [];
            function o(t, i) {
                return n.getDependency("accessor", t).then(function(t) {
                    e.setAttribute(i, t)
                })
            }
            for (var a in i) {
                var s = R[a];
                s && (s in e.attributes || r.push(o(i[a], s)))
            }
            if (void 0 !== t.indices && !e.index) {
                var u = n.getDependency("accessor", t.indices).then(function(t) {
                    e.setIndex(t)
                });
                r.push(u)
            }
            return k(e, t),
            Promise.all(r).then(function() {
                return void 0 !== t.targets ?
                function(e, t, n) {
                    for (var i = !1,
                    r = !1,
                    o = 0,
                    a = t.length; o < a && (void 0 !== (c = t[o]).POSITION && (i = !0), void 0 !== c.NORMAL && (r = !0), !i || !r); o++);
                    if (!i && !r) return Promise.resolve(e);
                    var s = [],
                    u = [];
                    for (o = 0, a = t.length; o < a; o++) {
                        var c = t[o];
                        if (i) {
                            var l = void 0 !== c.POSITION ? n.getDependency("accessor", c.POSITION).then(function(e) {
                                return V(e)
                            }) : e.attributes.position;
                            s.push(l)
                        }
                        r && (l = void 0 !== c.NORMAL ? n.getDependency("accessor", c.NORMAL).then(function(e) {
                            return V(e)
                        }) : e.attributes.normal, u.push(l))
                    }
                    return Promise.all([Promise.all(s), Promise.all(u)]).then(function(n) {
                        for (var o = n[0], a = n[1], s = 0, u = t.length; s < u; s++) {
                            var c = t[s],
                            l = "morphTarget" + s;
                            if (i && void 0 !== c.POSITION) {
                                var d = o[s];
                                d.name = l;
                                for (var f = e.attributes.position,
                                h = 0,
                                v = d.count; h < v; h++) d.setXYZ(h, d.getX(h) + f.getX(h), d.getY(h) + f.getY(h), d.getZ(h) + f.getZ(h))
                            }
                            if (r && void 0 !== c.NORMAL) {
                                var m = a[s];
                                m.name = l;
                                var p = e.attributes.normal;
                                for (h = 0, v = m.count; h < v; h++) m.setXYZ(h, m.getX(h) + p.getX(h), m.getY(h) + p.getY(h), m.getZ(h) + p.getZ(h))
                            }
                        }
                        return i && (e.morphAttributes.position = o),
                        r && (e.morphAttributes.normal = a),
                        e
                    })
                } (e, t.targets, n) : e
            })
        }
        return H.prototype.parse = function(e, t) {
            var n = this.json;
            this.cache.removeAll(),
            this.markDefs(),
            this.getMultiDependencies(["scene", "animation", "camera"]).then(function(t) {
                var i = t.scenes || [],
                r = i[n.scene || 0],
                o = t.animations || [],
                a = t.cameras || [];
                e(r, i, a, o, n)
            }).
            catch(t)
        },
        H.prototype.markDefs = function() {
            for (var e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [], i = {},
            r = {},
            o = 0, a = t.length; o < a; o++) for (var s = t[o].joints, u = 0, c = s.length; u < c; u++) e[s[u]].isBone = !0;
            for (var l = 0,
            d = e.length; l < d; l++) {
                var f = e[l];
                void 0 !== f.mesh && (void 0 === i[f.mesh] && (i[f.mesh] = r[f.mesh] = 0), i[f.mesh]++, void 0 !== f.skin && (n[f.mesh].isSkinnedMesh = !0))
            }
            this.json.meshReferences = i,
            this.json.meshUses = r
        },
        H.prototype.getDependency = function(e, t) {
            var i = e + ":" + t,
            r = this.cache.get(i);
            if (!r) {
                switch (e) {
                case "scene":
                    r = this.loadScene(t);
                    break;
                case "node":
                    r = this.loadNode(t);
                    break;
                case "mesh":
                    r = this.loadMesh(t);
                    break;
                case "accessor":
                    r = this.loadAccessor(t);
                    break;
                case "bufferView":
                    r = this.loadBufferView(t);
                    break;
                case "buffer":
                    r = this.loadBuffer(t);
                    break;
                case "material":
                    r = this.loadMaterial(t);
                    break;
                case "texture":
                    r = this.loadTexture(t);
                    break;
                case "skin":
                    r = this.loadSkin(t);
                    break;
                case "animation":
                    r = this.loadAnimation(t);
                    break;
                case "camera":
                    r = this.loadCamera(t);
                    break;
                case "light":
                    r = this.extensions[n.KHR_LIGHTS_PUNCTUAL].loadLight(t);
                    break;
                default:
                    throw new Error("Unknown type: " + e)
                }
                this.cache.add(i, r)
            }
            return r
        },
        H.prototype.getDependencies = function(e) {
            var t = this.cache.get(e);
            if (!t) {
                var n = this,
                i = this.json[e + ("mesh" === e ? "es": "s")] || [];
                t = Promise.all(i.map(function(t, i) {
                    return n.getDependency(e, i)
                })),
                this.cache.add(e, t)
            }
            return t
        },
        H.prototype.getMultiDependencies = function(e) {
            for (var t = {},
            n = [], i = 0, r = e.length; i < r; i++) {
                var o = e[i],
                a = this.getDependencies(o);
                a = a.then(function(e, n) {
                    t[e] = n
                }.bind(this, o + ("mesh" === o ? "es": "s"))),
                n.push(a)
            }
            return Promise.all(n).then(function() {
                return t
            })
        },
        H.prototype.loadBuffer = function(e) {
            var t = this.json.buffers[e],
            i = this.fileLoader;
            if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
            if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[n.KHR_BINARY_GLTF].body);
            var r = this.options;
            return new Promise(function(e, n) {
                i.load(z(t.uri, r.path), e, void 0,
                function() {
                    n(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                })
            })
        },
        H.prototype.loadBufferView = function(e) {
            var t = this.json.bufferViews[e];
            return this.getDependency("buffer", t.buffer).then(function(e) {
                var n = t.byteLength || 0,
                i = t.byteOffset || 0;
                return e.slice(i, i + n)
            })
        },
        H.prototype.loadAccessor = function(e) {
            var t = this,
            n = this.json,
            i = this.json.accessors[e];
            if (void 0 === i.bufferView && void 0 === i.sparse) return Promise.resolve(null);
            var o = [];
            return void 0 !== i.bufferView ? o.push(this.getDependency("bufferView", i.bufferView)) : o.push(null),
            void 0 !== i.sparse && (o.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), o.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
            Promise.all(o).then(function(e) {
                var o, a, s = e[0],
                u = P[i.type],
                c = S[i.componentType],
                l = c.BYTES_PER_ELEMENT,
                d = l * u,
                f = i.byteOffset || 0,
                h = void 0 !== i.bufferView ? n.bufferViews[i.bufferView].byteStride: void 0,
                v = !0 === i.normalized;
                if (h && h !== d) {
                    var m = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType,
                    p = t.cache.get(m);
                    p || (o = new c(s), p = new r.InterleavedBuffer(o, h / l), t.cache.add(m, p)),
                    a = new r.InterleavedBufferAttribute(p, u, f / l, v)
                } else o = null === s ? new c(i.count * u) : new c(s, f, i.count * u),
                a = new r.BufferAttribute(o, u, v);
                if (void 0 !== i.sparse) {
                    var g = P.SCALAR,
                    x = S[i.sparse.indices.componentType],
                    _ = i.sparse.indices.byteOffset || 0,
                    y = i.sparse.values.byteOffset || 0,
                    w = new x(e[1], _, i.sparse.count * g),
                    b = new c(e[2], y, i.sparse.count * u);
                    null !== s && a.setArray(a.array.slice());
                    for (var T = 0,
                    M = w.length; T < M; T++) {
                        var R = w[T];
                        if (a.setX(R, b[T * u]), u >= 2 && a.setY(R, b[T * u + 1]), u >= 3 && a.setZ(R, b[T * u + 2]), u >= 4 && a.setW(R, b[T * u + 3]), u >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                    }
                }
                return a
            })
        },
        H.prototype.loadTexture = function(e) {
            var t, i = this,
            o = this.json,
            a = this.options,
            s = this.textureLoader,
            u = window.URL || window.webkitURL,
            c = o.textures[e],
            l = c.extensions || {},
            d = (t = l[n.MSFT_TEXTURE_DDS] ? o.images[l[n.MSFT_TEXTURE_DDS].source] : o.images[c.source]).uri,
            f = !1;
            return void 0 !== t.bufferView && (d = i.getDependency("bufferView", t.bufferView).then(function(e) {
                f = !0;
                var n = new Blob([e], {
                    type: t.mimeType
                });
                return d = u.createObjectURL(n)
            })),
            Promise.resolve(d).then(function(e) {
                var t = r.Loader.Handlers.get(e);
                return t || (t = l[n.MSFT_TEXTURE_DDS] ? i.extensions[n.MSFT_TEXTURE_DDS].ddsLoader: s),
                new Promise(function(n, i) {
                    t.load(z(e, a.path), n, void 0, i)
                })
            }).then(function(e) { ! 0 === f && u.revokeObjectURL(d),
                e.flipY = !1,
                void 0 !== c.name && (e.name = c.name),
                t.mimeType in F && (e.format = F[t.mimeType]);
                var n = (o.samplers || {})[c.sampler] || {};
                return e.magFilter = T[n.magFilter] || r.LinearFilter,
                e.minFilter = T[n.minFilter] || r.LinearMipMapLinearFilter,
                e.wrapS = M[n.wrapS] || r.RepeatWrapping,
                e.wrapT = M[n.wrapT] || r.RepeatWrapping,
                e
            })
        },
        H.prototype.assignTexture = function(e, t, i) {
            var r = this;
            return this.getDependency("texture", i.index).then(function(o) {
                if (r.extensions[n.KHR_TEXTURE_TRANSFORM]) {
                    var a = void 0 !== i.extensions ? i.extensions[n.KHR_TEXTURE_TRANSFORM] : void 0;
                    a && (o = r.extensions[n.KHR_TEXTURE_TRANSFORM].extendTexture(o, a))
                }
                e[t] = o
            })
        },
        H.prototype.loadMaterial = function(e) {
            var t, i = this.json,
            o = this.extensions,
            a = i.materials[e],
            s = {},
            u = a.extensions || {},
            c = [];
            if (u[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                var l = o[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                t = l.getMaterialType(a),
                c.push(l.extendParams(s, a, this))
            } else if (u[n.KHR_MATERIALS_UNLIT]) {
                var d = o[n.KHR_MATERIALS_UNLIT];
                t = d.getMaterialType(a),
                c.push(d.extendParams(s, a, this))
            } else {
                t = r.MeshStandardMaterial;
                var f = a.pbrMetallicRoughness || {};
                if (s.color = new r.Color(1, 1, 1), s.opacity = 1, Array.isArray(f.baseColorFactor)) {
                    var h = f.baseColorFactor;
                    s.color.fromArray(h),
                    s.opacity = h[3]
                }
                void 0 !== f.baseColorTexture && c.push(this.assignTexture(s, "map", f.baseColorTexture)),
                s.metalness = void 0 !== f.metallicFactor ? f.metallicFactor: 1,
                s.roughness = void 0 !== f.roughnessFactor ? f.roughnessFactor: 1,
                void 0 !== f.metallicRoughnessTexture && (c.push(this.assignTexture(s, "metalnessMap", f.metallicRoughnessTexture)), c.push(this.assignTexture(s, "roughnessMap", f.metallicRoughnessTexture)))
            } ! 0 === a.doubleSided && (s.side = r.DoubleSide);
            var v = a.alphaMode || A;
            return v === L ? s.transparent = !0 : (s.transparent = !1, v === D && (s.alphaTest = void 0 !== a.alphaCutoff ? a.alphaCutoff: .5)),
            void 0 !== a.normalTexture && t !== r.MeshBasicMaterial && (c.push(this.assignTexture(s, "normalMap", a.normalTexture)), s.normalScale = new r.Vector2(1, 1), void 0 !== a.normalTexture.scale && s.normalScale.set(a.normalTexture.scale, a.normalTexture.scale)),
            void 0 !== a.occblogTexture && t !== r.MeshBasicMaterial && (c.push(this.assignTexture(s, "aoMap", a.occblogTexture)), void 0 !== a.occblogTexture.strength && (s.aoMapIntensity = a.occblogTexture.strength)),
            void 0 !== a.emissiveFactor && t !== r.MeshBasicMaterial && (s.emissive = (new r.Color).fromArray(a.emissiveFactor)),
            void 0 !== a.emissiveTexture && t !== r.MeshBasicMaterial && c.push(this.assignTexture(s, "emissiveMap", a.emissiveTexture)),
            Promise.all(c).then(function() {
                var e;
                return e = t === r.ShaderMaterial ? o[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(s) : new t(s),
                void 0 !== a.name && (e.name = a.name),
                e.normalScale && (e.normalScale.y = -e.normalScale.y),
                e.map && (e.map.encoding = r.sRGBEncoding),
                e.emissiveMap && (e.emissiveMap.encoding = r.sRGBEncoding),
                e.specularMap && (e.specularMap.encoding = r.sRGBEncoding),
                k(e, a),
                a.extensions && E(o, e, a),
                e
            })
        },
        H.prototype.loadGeometries = function(e) {
            var t, i = this,
            o = this.extensions,
            a = this.primitiveCache,
            s = function(e) {
                if (e.length < 2) return ! 1;
                var t = e[0],
                i = t.targets || [];
                if (void 0 === t.indices) return ! 1;
                for (var r = 1,
                o = e.length; r < o; r++) {
                    var a = e[r];
                    if (t.mode !== a.mode) return ! 1;
                    if (void 0 === a.indices) return ! 1;
                    if (a.extensions && a.extensions[n.KHR_DRACO_MESH_COMPRESSION]) return ! 1;
                    if (!U(t.attributes, a.attributes)) return ! 1;
                    var s = a.targets || [];
                    if (i.length !== s.length) return ! 1;
                    for (var u = 0,
                    c = i.length; u < c; u++) if (!U(i[u], s[u])) return ! 1
                }
                return ! 0
            } (e);
            function u(e) {
                return o[n.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, i).then(function(t) {
                    return W(t, e, i)
                })
            }
            s && (t = e, e = [e[0]]);
            for (var c = [], l = 0, d = e.length; l < d; l++) {
                var f, h = e[l],
                v = B(a, h);
                if (v) c.push(v);
                else f = h.extensions && h.extensions[n.KHR_DRACO_MESH_COMPRESSION] ? u(h) : W(new r.BufferGeometry, h, i),
                a.push({
                    primitive: h,
                    promise: f
                }),
                c.push(f)
            }
            return Promise.all(c).then(function(n) {
                if (s) {
                    var o = n[0];
                    if (null !== (h = function(e, t, n) {
                        for (var i = 0,
                        r = e.length; i < r; i++) {
                            var o = e[i];
                            if (t === o.baseGeometry && N(n, o.primitives)) return o.geometry
                        }
                        return null
                    } (f = i.multiPassGeometryCache, o, t))) return [h.geometry];
                    var a = new r.BufferGeometry;
                    for (var u in a.name = o.name,
                    a.userData = o.userData,
                    o.attributes) a.setAttribute(u, o.attributes[u]);
                    for (var u in o.morphAttributes) a.morphAttributes[u] = o.morphAttributes[u];
                    for (var c = [], l = 0, d = t.length; l < d; l++) c.push(i.getDependency("accessor", t[l].indices));
                    return Promise.all(c).then(function(e) {
                        for (var n = [], i = 0, r = 0, s = t.length; r < s; r++) {
                            for (var u = e[r], c = 0, l = u.count; c < l; c++) n.push(u.array[c]);
                            a.addGroup(i, u.count, r),
                            i += u.count
                        }
                        return a.setIndex(n),
                        f.push({
                            geometry: a,
                            baseGeometry: o,
                            primitives: t
                        }),
                        [a]
                    })
                }
                if (n.length > 1 && void 0 !== r.BufferGeometryUtils) {
                    for (l = 1, d = e.length; l < d; l++) if (e[0].mode !== e[l].mode) return n;
                    var f, h;
                    if (h = function(e, t) {
                        for (var n = 0,
                        i = e.length; n < i; n++) {
                            var r = e[n];
                            if (N(t, r.baseGeometries)) return r.geometry
                        }
                        return null
                    } (f = i.multiplePrimitivesCache, n)) {
                        if (null !== h.geometry) return [h.geometry]
                    } else {
                        a = r.BufferGeometryUtils.mergeBufferGeometries(n, !0);
                        if (f.push({
                            geometry: a,
                            baseGeometries: n
                        }), null !== a) return [a]
                    }
                }
                return n
            })
        },
        H.prototype.loadMesh = function(e) {
            for (var t = this,
            i = this.json,
            o = this.extensions,
            a = i.meshes[e], s = a.primitives, u = [], c = 0, l = s.length; c < l; c++) {
                var d = void 0 === s[c].material ? new r.MeshStandardMaterial({
                    color: 16777215,
                    emissive: 0,
                    metalness: 1,
                    roughness: 1,
                    transparent: !1,
                    depthTest: !0,
                    side: r.FrontSide
                }) : this.getDependency("material", s[c].material);
                u.push(d)
            }
            return Promise.all(u).then(function(i) {
                return t.loadGeometries(s).then(function(u) {
                    for (var c = 1 === u.length && u[0].groups.length > 0, l = [], d = 0, f = u.length; d < f; d++) {
                        var h, v = u[d],
                        m = s[d],
                        S = c ? i: i[d];
                        if (m.mode === y || m.mode === w || m.mode === b || void 0 === m.mode) ! 0 === (h = !0 === a.isSkinnedMesh ? new r.SkinnedMesh(v, S) : new r.Mesh(v, S)).isSkinnedMesh && h.normalizeSkinWeights(),
                        m.mode === w ? h.drawMode = r.TriangleStripDrawMode: m.mode === b && (h.drawMode = r.TriangleFanDrawMode);
                        else if (m.mode === g) h = new r.LineSegments(v, S);
                        else if (m.mode === _) h = new r.Line(v, S);
                        else if (m.mode === x) h = new r.LineLoop(v, S);
                        else {
                            if (m.mode !== p) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
                            h = new r.Points(v, S)
                        }
                        Object.keys(h.geometry.morphAttributes).length > 0 && O(h, a),
                        h.name = a.name || "mesh_" + e,
                        u.length > 1 && (h.name += "_" + d),
                        k(h, a),
                        l.push(h);
                        for (var T = c ? h.material: [h.material], M = void 0 !== v.attributes.color, P = void 0 === v.attributes.normal, R = !0 === h.isSkinnedMesh, C = Object.keys(v.morphAttributes).length > 0, I = C && void 0 !== v.morphAttributes.normal, A = 0, D = T.length; A < D; A++) {
                            S = T[A];
                            if (h.isPoints) {
                                var L = "PointsMaterial:" + S.uuid,
                                F = t.cache.get(L);
                                F || (F = new r.PointsMaterial, r.Material.prototype.copy.call(F, S), F.color.copy(S.color), F.map = S.map, F.lights = !1, t.cache.add(L, F)),
                                S = F
                            } else if (h.isLine) {
                                L = "LineBasicMaterial:" + S.uuid;
                                var z = t.cache.get(L);
                                z || (z = new r.LineBasicMaterial, r.Material.prototype.copy.call(z, S), z.color.copy(S.color), z.lights = !1, t.cache.add(L, z)),
                                S = z
                            }
                            if (M || P || R || C) {
                                L = "ClonedMaterial:" + S.uuid + ":";
                                S.isGLTFSpecularGlossinessMaterial && (L += "specular-glossiness:"),
                                R && (L += "skinning:"),
                                M && (L += "vertex-colors:"),
                                P && (L += "flat-shading:"),
                                C && (L += "morph-targets:"),
                                I && (L += "morph-normals:");
                                var E = t.cache.get(L);
                                E || (E = S.isGLTFSpecularGlossinessMaterial ? o[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(S) : S.clone(), R && (E.skinning = !0), M && (E.vertexColors = r.VertexColors), P && (E.flatShading = !0), C && (E.morphTargets = !0), I && (E.morphNormals = !0), t.cache.add(L, E)),
                                S = E
                            }
                            T[A] = S,
                            S.aoMap && void 0 === v.attributes.uv2 && void 0 !== v.attributes.uv && (console.log("THREE.GLTFLoader: Duplicating UVs to support aoMap."), v.setAttribute("uv2", new r.BufferAttribute(v.attributes.uv.array, 2))),
                            S.isGLTFSpecularGlossinessMaterial && (h.onBeforeRender = o[n.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms)
                        }
                        h.material = c ? T: T[0]
                    }
                    if (1 === l.length) return l[0];
                    var U = new r.Group;
                    for (d = 0, f = l.length; d < f; d++) U.add(l[d]);
                    return U
                })
            })
        },
        H.prototype.loadCamera = function(e) {
            var t, n = this.json.cameras[e],
            i = n[n.type];
            if (i) return "perspective" === n.type ? t = new r.PerspectiveCamera(r.Math.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : "orthographic" === n.type && (t = new r.OrthographicCamera(i.xmag / -2, i.xmag / 2, i.ymag / 2, i.ymag / -2, i.znear, i.zfar)),
            void 0 !== n.name && (t.name = n.name),
            k(t, n),
            Promise.resolve(t);
            console.warn("THREE.GLTFLoader: Missing camera parameters.")
        },
        H.prototype.loadSkin = function(e) {
            var t = this.json.skins[e],
            n = {
                joints: t.joints
            };
            return void 0 === t.inverseBindMatrices ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then(function(e) {
                return n.inverseBindMatrices = e,
                n
            })
        },
        H.prototype.loadAnimation = function(e) {
            for (var t = this.json.animations[e], n = [], i = [], o = [], a = [], s = [], u = 0, c = t.channels.length; u < c; u++) {
                var l = t.channels[u],
                d = t.samplers[l.sampler],
                f = l.target,
                h = void 0 !== f.node ? f.node: f.id,
                v = void 0 !== t.parameters ? t.parameters[d.input] : d.input,
                p = void 0 !== t.parameters ? t.parameters[d.output] : d.output;
                n.push(this.getDependency("node", h)),
                i.push(this.getDependency("accessor", v)),
                o.push(this.getDependency("accessor", p)),
                a.push(d),
                s.push(f)
            }
            return Promise.all([Promise.all(n), Promise.all(i), Promise.all(o), Promise.all(a), Promise.all(s)]).then(function(n) {
                for (var i = n[0], o = n[1], a = n[2], s = n[3], u = n[4], c = [], l = 0, d = i.length; l < d; l++) {
                    var f = i[l],
                    h = o[l],
                    v = a[l],
                    p = s[l],
                    g = u[l];
                    if (void 0 !== f) {
                        var x;
                        switch (f.updateMatrix(), f.matrixAutoUpdate = !0, C[g.path]) {
                        case C.weights:
                            x = r.NumberKeyframeTrack;
                            break;
                        case C.rotation:
                            x = r.QuaternionKeyframeTrack;
                            break;
                        case C.position:
                        case C.scale:
                        default:
                            x = r.VectorKeyframeTrack
                        }
                        var _ = f.name ? f.name: f.uuid,
                        y = void 0 !== p.interpolation ? I[p.interpolation] : r.InterpolateLinear,
                        w = [];
                        C[g.path] === C.weights ? f.traverse(function(e) { ! 0 === e.isMesh && e.morphTargetInfluences && w.push(e.name ? e.name: e.uuid)
                        }) : w.push(_);
                        for (var b = 0,
                        S = w.length; b < S; b++) {
                            var T = new x(w[b] + "." + C[g.path], r.AnimationUtils.arraySlice(h.array, 0), r.AnimationUtils.arraySlice(v.array, 0), y);
                            "CUBICSPLINE" === p.interpolation && (T.createInterpolant = function(e) {
                                return new m(this.times, this.values, this.getValueSize() / 3, e)
                            },
                            T.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0),
                            c.push(T)
                        }
                    }
                }
                var M = void 0 !== t.name ? t.name: "animation_" + e;
                return new r.AnimationClip(M, void 0, c)
            })
        },
        H.prototype.loadNode = function(e) {
            var t = this.json,
            i = this.extensions,
            o = this,
            a = t.meshReferences,
            s = t.meshUses,
            u = t.nodes[e];
            return (!0 === u.isBone ? Promise.resolve(new r.Bone) : void 0 !== u.mesh ? o.getDependency("mesh", u.mesh).then(function(e) {
                var t;
                if (a[u.mesh] > 1) {
                    var n = s[u.mesh]++; (t = e.clone()).name += "_instance_" + n,
                    t.onBeforeRender = e.onBeforeRender;
                    for (var i = 0,
                    r = t.children.length; i < r; i++) t.children[i].name += "_instance_" + n,
                    t.children[i].onBeforeRender = e.children[i].onBeforeRender
                } else t = e;
                return t
            }) : void 0 !== u.camera ? o.getDependency("camera", u.camera) : u.extensions && u.extensions[n.KHR_LIGHTS_PUNCTUAL] && void 0 !== u.extensions[n.KHR_LIGHTS_PUNCTUAL].light ? o.getDependency("light", u.extensions[n.KHR_LIGHTS_PUNCTUAL].light) : Promise.resolve(new r.Object3D)).then(function(e) {
                if (void 0 !== u.name && (e.name = r.PropertyBinding.sanitizeNodeName(u.name)), k(e, u), u.extensions && E(i, e, u), void 0 !== u.matrix) {
                    var t = new r.Matrix4;
                    t.fromArray(u.matrix),
                    e.applyMatrix(t)
                } else void 0 !== u.translation && e.position.fromArray(u.translation),
                void 0 !== u.rotation && e.quaternion.fromArray(u.rotation),
                void 0 !== u.scale && e.scale.fromArray(u.scale);
                return e
            })
        },
        H.prototype.loadScene = function() {
            function e(t, n, i, o) {
                var a = i.nodes[t];
                return o.getDependency("node", t).then(function(e) {
                    return void 0 === a.skin ? e: o.getDependency("skin", a.skin).then(function(e) {
                        for (var n = [], i = 0, r = (t = e).joints.length; i < r; i++) n.push(o.getDependency("node", t.joints[i]));
                        return Promise.all(n)
                    }).then(function(n) {
                        for (var i = !0 === e.isGroup ? e.children: [e], o = 0, a = i.length; o < a; o++) {
                            for (var s = i[o], u = [], c = [], l = 0, d = n.length; l < d; l++) {
                                var f = n[l];
                                if (f) {
                                    u.push(f);
                                    var h = new r.Matrix4;
                                    void 0 !== t.inverseBindMatrices && h.fromArray(t.inverseBindMatrices.array, 16 * l),
                                    c.push(h)
                                } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l])
                            }
                            s.bind(new r.Skeleton(u, c), s.matrixWorld)
                        }
                        return e
                    });
                    var t
                }).then(function(t) {
                    n.add(t);
                    var r = [];
                    if (a.children) for (var s = a.children,
                    u = 0,
                    c = s.length; u < c; u++) {
                        var l = s[u];
                        r.push(e(l, t, i, o))
                    }
                    return Promise.all(r)
                })
            }
            return function(t) {
                var n = this.json,
                i = this.extensions,
                o = this.json.scenes[t],
                a = new r.Scene;
                void 0 !== o.name && (a.name = o.name),
                k(a, o),
                o.extensions && E(i, a, o);
                for (var s = o.nodes || [], u = [], c = 0, l = s.length; c < l; c++) u.push(e(s[c], a, n, this));
                return Promise.all(u).then(function() {
                    return a
                })
            }
        } (),
        e
    } ()
},
function(e, t, n) {
    "use strict";
    t.createQuickLoadFunc = function(e, t, n) {
        return function(i, r, o) {
            return e.load(t ? i.replace(t, n) : i, r,
            function(e) {
                e.lengthComputable && o.dispatch(e.loaded / e.total)
            },
            function(e) {
                console.log(e)
            })
        }
    }
},
function(e, t, n) {
    "use strict";
    var i = n(23),
    r = n(31);
    function o(e, t) {
        for (var n, r = 0,
        o = arguments.length; ++r < o;)(n = arguments[r]) && i(n, a, e);
        return e
    }
    function a(e, t) {
        var n = this[t];
        r(e) && r(n) ? o(n, e) : this[t] = e
    }
    e.exports = o
},
function(e, t) {
    e.exports = "uniform float u_lightScatterDivider;\nuniform float u_lightScatterPowInv;\n\nfloat getScatter(vec3 start, vec3 dir, vec3 lightPos, float d) {\n  // light to ray origin\n  vec3 q = start - lightPos;\n\n  // coefficients\n  float b = dot(dir, q);\n  float c = dot(q, q);\n\n  // evaluate integral\n  // float s = 1.0 / sqrt(c - b*b);\n  float t = c - b*b;\n  // float s = t <= 0.0 ? 1.0 : 1.0 / sqrt(t);\n  float s = 1.0 / sqrt(max(0.0001, t));\n  float l = s * (atan( (d + b) * s) - atan( b*s ));\n\n  return pow(max(0.0, l / u_lightScatterDivider), u_lightScatterPowInv);\n}\n\n\n"
},
function(e, t) {
    e.exports = "#include <getScatter>\n\n// this function is not entirely safe as it removed some sceneriaos for performance issue.\nvec2 getScatterLine(vec3 start, vec3 dir, vec3 lightPos0, vec3 lightPos1, float d) {\n\n    // from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteDistRaySegment.h\n    // It returns the min distance between the ray and the segment\n    // defined by lightPos0 and lightPos1\n    // It can also set two optional targets :\n    // - The closest point on the ray\n    // - The closest point on the segment\n\n    vec3 segCenter = (lightPos0 + lightPos1) * 0.5;\n    vec3 segDir = normalize(lightPos1 - lightPos0);\n    vec3 diff = start - segCenter;\n\n    float segExtent = distance(lightPos0, lightPos1) * 0.5;\n    float a01 = -dot(dir, segDir);\n    float b0 = dot(diff, dir);\n    float b1 = - dot(diff, segDir);\n    float det = abs( 1.0 - a01 * a01 );\n    float s = clamp((a01 * b0 - b1) / max(0.0001, det), - segExtent, segExtent);\n    vec3 lightPos = segDir * s + segCenter;\n\n    return vec2(\n        getScatter(start, dir, segExtent > 0.0 ? lightPos : lightPos0, d),\n        s / segExtent * 0.5 + 0.5\n    );\n}"
},
function(e, t) {
    e.exports = "vec4 cubic(float v){\n    vec4 n = vec4(1.0, 2.0, 3.0, 4.0) - v;\n    vec4 s = n * n * n;\n    float x = s.x;\n    float y = s.y - 4.0 * s.x;\n    float z = s.z - 4.0 * s.y + 6.0 * s.x;\n    float w = 6.0 - x - y - z;\n    return vec4(x, y, z, w) * (1.0/6.0);\n}"
},
function(e, t) {
    e.exports = "vec4 textureBicubic(sampler2D tex, vec2 texCoords, vec2 texSize) {\n   vec2 invTexSize = 1.0 / texSize;\n   texCoords = texCoords * texSize - 0.5;\n    vec2 fxy = fract(texCoords);\n    texCoords -= fxy;\n    vec4 xcubic = cubic(fxy.x);\n    vec4 ycubic = cubic(fxy.y);\n    vec4 c = texCoords.xxyy + vec2 (-0.5, +1.5).xyxy;\n    vec4 s = vec4(xcubic.xz + xcubic.yw, ycubic.xz + ycubic.yw);\n    vec4 offset = c + vec4 (xcubic.yw, ycubic.yw) / s;\n    offset *= invTexSize.xxyy;\n    vec4 sample0 = texture2D(tex, offset.xz);\n    vec4 sample1 = texture2D(tex, offset.yz);\n    vec4 sample2 = texture2D(tex, offset.xw);\n    vec4 sample3 = texture2D(tex, offset.yw);\n    float sx = s.x / (s.x + s.y);\n    float sy = s.z / (s.z + s.w);\n    return mix(mix(sample3, sample2, sx), mix(sample1, sample0, sx), sy);\n}"
},
function(e, t) {
    e.exports = "vec4 textureLodBicubic(sampler2D tex, vec2 texCoords, float lod, vec2 texSize) {\n   texSize = texSize / pow(2.0, lod);\n   vec2 invTexSize = 1.0 / texSize;\n   texCoords = texCoords * texSize - 0.5;\n    vec2 fxy = fract(texCoords);\n    texCoords -= fxy;\n    vec4 xcubic = cubic(fxy.x);\n    vec4 ycubic = cubic(fxy.y);\n    vec4 c = texCoords.xxyy + vec2 (-0.5, +1.5).xyxy;\n    vec4 s = vec4(xcubic.xz + xcubic.yw, ycubic.xz + ycubic.yw);\n    vec4 offset = c + vec4 (xcubic.yw, ycubic.yw) / s;\n    offset *= invTexSize.xxyy;\n    vec4 sample0 = texture2DLodEXT(tex, offset.xz, lod);\n    vec4 sample1 = texture2DLodEXT(tex, offset.yz, lod);\n    vec4 sample2 = texture2DLodEXT(tex, offset.xw, lod);\n    vec4 sample3 = texture2DLodEXT(tex, offset.yw, lod);\n    float sx = s.x / (s.x + s.y);\n    float sy = s.z / (s.z + s.w);\n    return mix(mix(sample3, sample2, sx), mix(sample1, sample0, sx), sy);\n}"
},
function(e, t) {
    e.exports = "//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise2(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}"
},
function(e, t) {
    e.exports = "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }"
},
function(e, t) {
    e.exports = "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nfloat mod289(float x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0; }\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip)\n  {\n  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n  vec4 p,s;\n\n  p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n  s = vec4(lessThan(p, vec4(0.0)));\n  p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n  return p;\n  }\n\n// (sqrt(5) - 1)/4 = F4, used once below\n#define F4 0.309016994374947451\n\nfloat snoise4(vec4 v)\n  {\n  const vec4  C = vec4( 0.138196601125011,  // (5 - sqrt(5))/20  G4\n                        0.276393202250021,  // 2 * G4\n                        0.414589803375032,  // 3 * G4\n                       -0.447213595499958); // -1 + 4 * G4\n\n// First corner\n  vec4 i  = floor(v + dot(v, vec4(F4)) );\n  vec4 x0 = v -   i + dot(i, C.xxxx);\n\n// Other corners\n\n// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\n  vec4 i0;\n  vec3 isX = step( x0.yzw, x0.xxx );\n  vec3 isYZ = step( x0.zww, x0.yyz );\n//  i0.x = dot( isX, vec3( 1.0 ) );\n  i0.x = isX.x + isX.y + isX.z;\n  i0.yzw = 1.0 - isX;\n//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\n  i0.y += isYZ.x + isYZ.y;\n  i0.zw += 1.0 - isYZ.xy;\n  i0.z += isYZ.z;\n  i0.w += 1.0 - isYZ.z;\n\n  // i0 now contains the unique values 0,1,2,3 in each channel\n  vec4 i3 = clamp( i0, 0.0, 1.0 );\n  vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n  vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n  //  x0 = x0 - 0.0 + 0.0 * C.xxxx\n  //  x1 = x0 - i1  + 1.0 * C.xxxx\n  //  x2 = x0 - i2  + 2.0 * C.xxxx\n  //  x3 = x0 - i3  + 3.0 * C.xxxx\n  //  x4 = x0 - 1.0 + 4.0 * C.xxxx\n  vec4 x1 = x0 - i1 + C.xxxx;\n  vec4 x2 = x0 - i2 + C.yyyy;\n  vec4 x3 = x0 - i3 + C.zzzz;\n  vec4 x4 = x0 + C.wwww;\n\n// Permutations\n  i = mod289(i);\n  float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n  vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\n// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\n  vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n  vec4 p0 = grad4(j0,   ip);\n  vec4 p1 = grad4(j1.x, ip);\n  vec4 p2 = grad4(j1.y, ip);\n  vec4 p3 = grad4(j1.z, ip);\n  vec4 p4 = grad4(j1.w, ip);\n\n// Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n  p4 *= taylorInvSqrt(dot(p4,p4));\n\n// Mix contributions from the five corners\n  vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0);\n  vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.0);\n  m0 = m0 * m0;\n  m1 = m1 * m1;\n  return 49.0 * ( dot(m0*m0, vec3( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 )))\n               + dot(m1*m1, vec2( dot( p3, x3 ), dot( p4, x4 ) ) ) ) ;\n\n  }"
},
function(e, t) {
    e.exports = "vec2 rotate2d(vec2 v, float a) {\n\tfloat s = sin(a);\n\tfloat c = cos(a);\n\treturn mat2(c, -s, s, c) * v;\n}"
},
function(e, t) {
    e.exports = "#include <simplexNoiseDerivatives4>\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec3 p1 = p + vec3(123.4, 129845.6, -1239.1);\n\n    vec4 xNoisePotentialDerivatives = simplexNoiseDerivatives4(vec4(p, noiseTime));\n    vec4 yNoisePotentialDerivatives = simplexNoiseDerivatives4(vec4(p1, noiseTime));\n\n    return vec3(\n        yNoisePotentialDerivatives[1] - xNoisePotentialDerivatives[1],\n        yNoisePotentialDerivatives[2] - xNoisePotentialDerivatives[2],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[0]\n    );\n\n}"
},
function(e, t) {
    e.exports = "#include <simplexNoiseDerivatives4>\n\nvec3 curl( in vec3 p, in float noiseTime, in float persistence ) {\n\n    vec4 xNoisePotentialDerivatives = vec4(0.0);\n    vec4 yNoisePotentialDerivatives = vec4(0.0);\n    vec4 zNoisePotentialDerivatives = vec4(0.0);\n\n    for (int i = 0; i < 2; ++i) {\n\n        float twoPowI = pow(2.0, float(i));\n        float scale = 0.5 * twoPowI * pow(max(0.0, persistence), float(i));\n\n        xNoisePotentialDerivatives += simplexNoiseDerivatives4(vec4(p * twoPowI, noiseTime)) * scale;\n        yNoisePotentialDerivatives += simplexNoiseDerivatives4(vec4((p + vec3(123.4, 129845.6, -1239.1)) * twoPowI, noiseTime)) * scale;\n        zNoisePotentialDerivatives += simplexNoiseDerivatives4(vec4((p + vec3(-9519.0, 9051.0, -123.0)) * twoPowI, noiseTime)) * scale;\n    }\n\n    return vec3(\n        zNoisePotentialDerivatives[1] - yNoisePotentialDerivatives[2],\n        xNoisePotentialDerivatives[2] - zNoisePotentialDerivatives[0],\n        yNoisePotentialDerivatives[0] - xNoisePotentialDerivatives[1]\n    );\n\n}"
},
function(e, t) {
    e.exports = "vec4 mod289(vec4 x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nfloat mod289(float x) {\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat permute(float x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat taylorInvSqrt(float r) {\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec4 grad4(float j, vec4 ip) {\n    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\n    vec4 p,s;\n\n    p.xyz = floor( fract (vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\n    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\n    s = vec4(lessThan(p, vec4(0.0)));\n    p.xyz = p.xyz + (s.xyz*2.0 - 1.0) * s.www;\n\n    return p;\n}\n\n#define F4 0.309016994374947451\n\nvec4 simplexNoiseDerivatives4 (vec4 v) {\n    const vec4  C = vec4( 0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);\n\n    vec4 i  = floor(v + dot(v, vec4(F4)) );\n    vec4 x0 = v -   i + dot(i, C.xxxx);\n\n    vec4 i0;\n    vec3 isX = step( x0.yzw, x0.xxx );\n    vec3 isYZ = step( x0.zww, x0.yyz );\n    i0.x = isX.x + isX.y + isX.z;\n    i0.yzw = 1.0 - isX;\n    i0.y += isYZ.x + isYZ.y;\n    i0.zw += 1.0 - isYZ.xy;\n    i0.z += isYZ.z;\n    i0.w += 1.0 - isYZ.z;\n\n    vec4 i3 = clamp( i0, 0.0, 1.0 );\n    vec4 i2 = clamp( i0-1.0, 0.0, 1.0 );\n    vec4 i1 = clamp( i0-2.0, 0.0, 1.0 );\n\n    vec4 x1 = x0 - i1 + C.xxxx;\n    vec4 x2 = x0 - i2 + C.yyyy;\n    vec4 x3 = x0 - i3 + C.zzzz;\n    vec4 x4 = x0 + C.wwww;\n\n    i = mod289(i);\n    float j0 = permute( permute( permute( permute(i.w) + i.z) + i.y) + i.x);\n    vec4 j1 = permute( permute( permute( permute (\n             i.w + vec4(i1.w, i2.w, i3.w, 1.0 ))\n           + i.z + vec4(i1.z, i2.z, i3.z, 1.0 ))\n           + i.y + vec4(i1.y, i2.y, i3.y, 1.0 ))\n           + i.x + vec4(i1.x, i2.x, i3.x, 1.0 ));\n\n\n    vec4 ip = vec4(1.0/294.0, 1.0/49.0, 1.0/7.0, 0.0) ;\n\n    vec4 p0 = grad4(j0,   ip);\n    vec4 p1 = grad4(j1.x, ip);\n    vec4 p2 = grad4(j1.y, ip);\n    vec4 p3 = grad4(j1.z, ip);\n    vec4 p4 = grad4(j1.w, ip);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n    p4 *= taylorInvSqrt(dot(p4,p4));\n\n    vec3 values0 = vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)); //value of contributions from each corner at point\n    vec2 values1 = vec2(dot(p3, x3), dot(p4, x4));\n\n    vec3 m0 = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.0); //(0.5 - x^2) where x is the distance\n    vec2 m1 = max(0.5 - vec2(dot(x3,x3), dot(x4,x4)), 0.0);\n\n    vec3 temp0 = -6.0 * m0 * m0 * values0;\n    vec2 temp1 = -6.0 * m1 * m1 * values1;\n\n    vec3 mmm0 = m0 * m0 * m0;\n    vec2 mmm1 = m1 * m1 * m1;\n\n    float dx = temp0[0] * x0.x + temp0[1] * x1.x + temp0[2] * x2.x + temp1[0] * x3.x + temp1[1] * x4.x + mmm0[0] * p0.x + mmm0[1] * p1.x + mmm0[2] * p2.x + mmm1[0] * p3.x + mmm1[1] * p4.x;\n    float dy = temp0[0] * x0.y + temp0[1] * x1.y + temp0[2] * x2.y + temp1[0] * x3.y + temp1[1] * x4.y + mmm0[0] * p0.y + mmm0[1] * p1.y + mmm0[2] * p2.y + mmm1[0] * p3.y + mmm1[1] * p4.y;\n    float dz = temp0[0] * x0.z + temp0[1] * x1.z + temp0[2] * x2.z + temp1[0] * x3.z + temp1[1] * x4.z + mmm0[0] * p0.z + mmm0[1] * p1.z + mmm0[2] * p2.z + mmm1[0] * p3.z + mmm1[1] * p4.z;\n    float dw = temp0[0] * x0.w + temp0[1] * x1.w + temp0[2] * x2.w + temp1[0] * x3.w + temp1[1] * x4.w + mmm0[0] * p0.w + mmm0[1] * p1.w + mmm0[2] * p2.w + mmm1[0] * p3.w + mmm1[1] * p4.w;\n\n    return vec4(dx, dy, dz, dw) * 49.0;\n}"
},
function(e, t) {
    e.exports = "// vec2 encodeNormal (vec3 n) {\n//     float scale = 1.7777;\n//     vec2 enc = n.xy / (n.z+1.0);\n//     enc /= scale;\n//     enc = enc*0.5+0.5;\n//     return enc;\n// }\n\nvec2 encodeNormal (vec3 n) {\n    float p = sqrt(n.z * 8.0 + 8.0);\n    return n.xy / p + 0.5;\n}"
},
function(e, t) {
    e.exports = "vec3 decodeNormal (vec2 enc) {\n  vec2 fenc = enc * 4.0 - 2.0;\n  float f = dot(fenc, fenc);\n  // if g is zero, it will be an issue\n  // float g = max(0.001, sqrt( max(1.0 - f, 0.0) * 0.25));\n  // vec3 n;\n  // n.xy = fenc*g;\n  // n.z = 1.0 - f*0.5;\n  // return n;\n\n  // seems to be okay if g is 1.0;\n  return vec3(fenc, 1.0 - f * 0.5);\n}"
},
function(e, t) {
    e.exports = "vec2 packFloatRG(float v) {\n    vec2 enc = vec2(1.0, 255.0) * v;\n    enc = fract (enc);\n    enc.x -= enc.y / 255.0;\n    return enc;\n}\n\nvec2 packHalfFloat (float v, float divider) {\n    return packFloatRG(v / divider + 0.5);\n}\n\nvec2 packUnsignedHalfFloat (float v, float divider) {\n    return packFloatRG(v / divider);\n}\n\nfloat unpackRGFloat(vec2 enc) {\n    return dot( enc, vec2(1.0, 1.0/255.0) );\n}\n\nfloat unpackHalfFloat (vec2 enc, float divider) {\n    return (unpackRGFloat(enc) - 0.5) * divider;\n}\n\nfloat unpackUnsignedHalfFloat (vec2 enc, float divider) {\n    return unpackRGFloat(enc) * divider;\n}\n\n"
},
function(e, t) {
    e.exports = "float samplePackedR (sampler2D tex0, vec2 uv, float divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\treturn unpackHalfFloat(c0.xy, divider);\n}\n\nfloat samplePackedUnsignedR (sampler2D tex0, vec2 uv, float divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\treturn unpackUnsignedHalfFloat(c0.xy, divider);\n}\n\nvec2 samplePackedRG (sampler2D tex0, vec2 uv, vec2 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\treturn vec2(\n\t\tunpackHalfFloat(c0.xy, divider.x),\n\t\tunpackHalfFloat(c0.zw, divider.y)\n\t);\n}\n\nvec2 samplePackedUnsignedRG (sampler2D tex0, vec2 uv, vec2 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\treturn vec2(\n\t\tunpackUnsignedHalfFloat(c0.xy, divider.x),\n\t\tunpackUnsignedHalfFloat(c0.zw, divider.y)\n\t);\n}\n\nvec3 samplePackedRGB (sampler2D tex0, sampler2D tex1, vec2 uv, vec3 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\tvec4 c1 = texture2D(tex1, uv);\n\treturn vec3(\n\t\tunpackHalfFloat(c0.xy, divider.x),\n\t\tunpackHalfFloat(c0.zw, divider.y),\n\t\tunpackHalfFloat(c1.xy, divider.z)\n\t);\n}\n\nvec3 samplePackedUnsignedRGB (sampler2D tex0, sampler2D tex1, vec2 uv, vec3 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\tvec4 c1 = texture2D(tex1, uv);\n\treturn vec3(\n\t\tunpackUnsignedHalfFloat(c0.xy, divider.x),\n\t\tunpackUnsignedHalfFloat(c0.zw, divider.y),\n\t\tunpackUnsignedHalfFloat(c1.xy, divider.z)\n\t);\n}\n\nvec4 samplePackedRGBA (sampler2D tex0, sampler2D tex1, vec2 uv, vec4 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\tvec4 c1 = texture2D(tex1, uv);\n\treturn vec4(\n\t\tunpackHalfFloat(c0.xy, divider.x),\n\t\tunpackHalfFloat(c0.zw, divider.y),\n\t\tunpackHalfFloat(c1.xy, divider.z),\n\t\tunpackHalfFloat(c1.zw, divider.w)\n\t);\n}\n\nvec4 samplePackedUnsignedRGBA (sampler2D tex0, sampler2D tex1, vec2 uv, vec4 divider) {\n\tvec4 c0 = texture2D(tex0, uv);\n\tvec4 c1 = texture2D(tex1, uv);\n\treturn vec4(\n\t\tunpackUnsignedHalfFloat(c0.xy, divider.x),\n\t\tunpackUnsignedHalfFloat(c0.zw, divider.y),\n\t\tunpackUnsignedHalfFloat(c1.xy, divider.z),\n\t\tunpackUnsignedHalfFloat(c1.zw, divider.w)\n\t);\n}"
},
function(e, t, n) {
    "use strict";
    var i; !
    function() {
        var r = .5 * (Math.sqrt(3) - 1),
        o = (3 - Math.sqrt(3)) / 6,
        a = 1 / 6,
        s = (Math.sqrt(5) - 1) / 4,
        u = (5 - Math.sqrt(5)) / 20;
        function c(e) {
            var t;
            t = "function" == typeof e ? e: e ?
            function() {
                var e = 0,
                t = 0,
                n = 0,
                i = 1,
                r = (o = 4022871197,
                function(e) {
                    e = e.toString();
                    for (var t = 0; t < e.length; t++) {
                        var n = .02519603282416938 * (o += e.charCodeAt(t));
                        n -= o = n >>> 0,
                        o = (n *= o) >>> 0,
                        o += 4294967296 * (n -= o)
                    }
                    return 2.3283064365386963e-10 * (o >>> 0)
                });
                var o;
                e = r(" "),
                t = r(" "),
                n = r(" ");
                for (var a = 0; a < arguments.length; a++)(e -= r(arguments[a])) < 0 && (e += 1),
                (t -= r(arguments[a])) < 0 && (t += 1),
                (n -= r(arguments[a])) < 0 && (n += 1);
                return r = null,
                function() {
                    var r = 2091639 * e + 2.3283064365386963e-10 * i;
                    return e = t,
                    t = n,
                    n = r - (i = 0 | r)
                }
            } (e) : Math.random,
            this.p = l(t),
            this.perm = new Uint8Array(512),
            this.permMod12 = new Uint8Array(512);
            for (var n = 0; n < 512; n++) this.perm[n] = this.p[255 & n],
            this.permMod12[n] = this.perm[n] % 12
        }
        function l(e) {
            var t, n = new Uint8Array(256);
            for (t = 0; t < 256; t++) n[t] = t;
            for (t = 0; t < 255; t++) {
                var i = t + ~~ (e() * (256 - t)),
                r = n[t];
                n[t] = n[i],
                n[i] = r
            }
            return n
        }
        c.prototype = {
            grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
            grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
            noise2D: function(e, t) {
                var n, i, a = this.permMod12,
                s = this.perm,
                u = this.grad3,
                c = 0,
                l = 0,
                d = 0,
                f = (e + t) * r,
                h = Math.floor(e + f),
                v = Math.floor(t + f),
                m = (h + v) * o,
                p = e - (h - m),
                g = t - (v - m);
                p > g ? (n = 1, i = 0) : (n = 0, i = 1);
                var x = p - n + o,
                _ = g - i + o,
                y = p - 1 + 2 * o,
                w = g - 1 + 2 * o,
                b = 255 & h,
                S = 255 & v,
                T = .5 - p * p - g * g;
                if (T >= 0) {
                    var M = 3 * a[b + s[S]];
                    c = (T *= T) * T * (u[M] * p + u[M + 1] * g)
                }
                var P = .5 - x * x - _ * _;
                if (P >= 0) {
                    var R = 3 * a[b + n + s[S + i]];
                    l = (P *= P) * P * (u[R] * x + u[R + 1] * _)
                }
                var C = .5 - y * y - w * w;
                if (C >= 0) {
                    var I = 3 * a[b + 1 + s[S + 1]];
                    d = (C *= C) * C * (u[I] * y + u[I + 1] * w)
                }
                return 70 * (c + l + d)
            },
            noise3D: function(e, t, n) {
                var i, r, o, s, u, c, l, d, f, h, v = this.permMod12,
                m = this.perm,
                p = this.grad3,
                g = (e + t + n) * (1 / 3),
                x = Math.floor(e + g),
                _ = Math.floor(t + g),
                y = Math.floor(n + g),
                w = (x + _ + y) * a,
                b = e - (x - w),
                S = t - (_ - w),
                T = n - (y - w);
                b >= S ? S >= T ? (u = 1, c = 0, l = 0, d = 1, f = 1, h = 0) : b >= T ? (u = 1, c = 0, l = 0, d = 1, f = 0, h = 1) : (u = 0, c = 0, l = 1, d = 1, f = 0, h = 1) : S < T ? (u = 0, c = 0, l = 1, d = 0, f = 1, h = 1) : b < T ? (u = 0, c = 1, l = 0, d = 0, f = 1, h = 1) : (u = 0, c = 1, l = 0, d = 1, f = 1, h = 0);
                var M = b - u + a,
                P = S - c + a,
                R = T - l + a,
                C = b - d + 2 * a,
                I = S - f + 2 * a,
                A = T - h + 2 * a,
                D = b - 1 + .5,
                L = S - 1 + .5,
                F = T - 1 + .5,
                z = 255 & x,
                E = 255 & _,
                k = 255 & y,
                O = .6 - b * b - S * S - T * T;
                if (O < 0) i = 0;
                else {
                    var U = 3 * v[z + m[E + m[k]]];
                    i = (O *= O) * O * (p[U] * b + p[U + 1] * S + p[U + 2] * T)
                }
                var N = .6 - M * M - P * P - R * R;
                if (N < 0) r = 0;
                else {
                    var B = 3 * v[z + u + m[E + c + m[k + l]]];
                    r = (N *= N) * N * (p[B] * M + p[B + 1] * P + p[B + 2] * R)
                }
                var V = .6 - C * C - I * I - A * A;
                if (V < 0) o = 0;
                else {
                    var H = 3 * v[z + d + m[E + f + m[k + h]]];
                    o = (V *= V) * V * (p[H] * C + p[H + 1] * I + p[H + 2] * A)
                }
                var W = .6 - D * D - L * L - F * F;
                if (W < 0) s = 0;
                else {
                    var G = 3 * v[z + 1 + m[E + 1 + m[k + 1]]];
                    s = (W *= W) * W * (p[G] * D + p[G + 1] * L + p[G + 2] * F)
                }
                return 32 * (i + r + o + s)
            },
            noise4D: function(e, t, n, i) {
                var r, o, a, c, l, d, f, h, v, m, p, g, x, _, y, w, b, S = this.perm,
                T = this.grad4,
                M = (e + t + n + i) * s,
                P = Math.floor(e + M),
                R = Math.floor(t + M),
                C = Math.floor(n + M),
                I = Math.floor(i + M),
                A = (P + R + C + I) * u,
                D = e - (P - A),
                L = t - (R - A),
                F = n - (C - A),
                z = i - (I - A),
                E = 0,
                k = 0,
                O = 0,
                U = 0;
                D > L ? E++:k++,
                D > F ? E++:O++,
                D > z ? E++:U++,
                L > F ? k++:O++,
                L > z ? k++:U++,
                F > z ? O++:U++;
                var N = D - (d = E >= 3 ? 1 : 0) + u,
                B = L - (f = k >= 3 ? 1 : 0) + u,
                V = F - (h = O >= 3 ? 1 : 0) + u,
                H = z - (v = U >= 3 ? 1 : 0) + u,
                W = D - (m = E >= 2 ? 1 : 0) + 2 * u,
                G = L - (p = k >= 2 ? 1 : 0) + 2 * u,
                j = F - (g = O >= 2 ? 1 : 0) + 2 * u,
                q = z - (x = U >= 2 ? 1 : 0) + 2 * u,
                X = D - (_ = E >= 1 ? 1 : 0) + 3 * u,
                Y = L - (y = k >= 1 ? 1 : 0) + 3 * u,
                Z = F - (w = O >= 1 ? 1 : 0) + 3 * u,
                K = z - (b = U >= 1 ? 1 : 0) + 3 * u,
                Q = D - 1 + 4 * u,
                J = L - 1 + 4 * u,
                $ = F - 1 + 4 * u,
                ee = z - 1 + 4 * u,
                te = 255 & P,
                ne = 255 & R,
                ie = 255 & C,
                re = 255 & I,
                oe = .6 - D * D - L * L - F * F - z * z;
                if (oe < 0) r = 0;
                else {
                    var ae = S[te + S[ne + S[ie + S[re]]]] % 32 * 4;
                    r = (oe *= oe) * oe * (T[ae] * D + T[ae + 1] * L + T[ae + 2] * F + T[ae + 3] * z)
                }
                var se = .6 - N * N - B * B - V * V - H * H;
                if (se < 0) o = 0;
                else {
                    var ue = S[te + d + S[ne + f + S[ie + h + S[re + v]]]] % 32 * 4;
                    o = (se *= se) * se * (T[ue] * N + T[ue + 1] * B + T[ue + 2] * V + T[ue + 3] * H)
                }
                var ce = .6 - W * W - G * G - j * j - q * q;
                if (ce < 0) a = 0;
                else {
                    var le = S[te + m + S[ne + p + S[ie + g + S[re + x]]]] % 32 * 4;
                    a = (ce *= ce) * ce * (T[le] * W + T[le + 1] * G + T[le + 2] * j + T[le + 3] * q)
                }
                var de = .6 - X * X - Y * Y - Z * Z - K * K;
                if (de < 0) c = 0;
                else {
                    var fe = S[te + _ + S[ne + y + S[ie + w + S[re + b]]]] % 32 * 4;
                    c = (de *= de) * de * (T[fe] * X + T[fe + 1] * Y + T[fe + 2] * Z + T[fe + 3] * K)
                }
                var he = .6 - Q * Q - J * J - $ * $ - ee * ee;
                if (he < 0) l = 0;
                else {
                    var ve = S[te + 1 + S[ne + 1 + S[ie + 1 + S[re + 1]]]] % 32 * 4;
                    l = (he *= he) * he * (T[ve] * Q + T[ve + 1] * J + T[ve + 2] * $ + T[ve + 3] * ee)
                }
                return 27 * (r + o + a + c + l)
            }
        },
        c._buildPermutationTable = l,
        void 0 === (i = function() {
            return c
        }.call(t, n, t, e)) || (e.exports = i),
        t.SimplexNoise = c,
        e.exports = c
    } ()
},
function(e, t, n) {
    "use strict";
    var i; !
    function() {
        function r(e, t, n) {
            return e.call.apply(e.bind, arguments)
        }
        function o(e, t, n) {
            if (!e) throw Error();
            if (2 < arguments.length) {
                var i = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return Array.prototype.unshift.apply(n, i),
                    e.apply(t, n)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
        function a(e, t, n) {
            return (a = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r: o).apply(null, arguments)
        }
        var s = Date.now ||
        function() {
            return + new Date
        };
        function u(e, t) {
            this.a = e,
            this.o = t || e,
            this.c = this.o.document
        }
        var c = !!window.FontFace;
        function l(e, t, n, i) {
            if (t = e.c.createElement(t), n) for (var r in n) n.hasOwnProperty(r) && ("style" == r ? t.style.cssText = n[r] : t.setAttribute(r, n[r]));
            return i && t.appendChild(e.c.createTextNode(i)),
            t
        }
        function d(e, t, n) { (e = e.c.getElementsByTagName(t)[0]) || (e = document.documentElement),
            e.insertBefore(n, e.lastChild)
        }
        function f(e) {
            e.parentNode && e.parentNode.removeChild(e)
        }
        function h(e, t, n) {
            t = t || [],
            n = n || [];
            for (var i = e.className.split(/\s+/), r = 0; r < t.length; r += 1) {
                for (var o = !1,
                a = 0; a < i.length; a += 1) if (t[r] === i[a]) {
                    o = !0;
                    break
                }
                o || i.push(t[r])
            }
            for (t = [], r = 0; r < i.length; r += 1) {
                for (o = !1, a = 0; a < n.length; a += 1) if (i[r] === n[a]) {
                    o = !0;
                    break
                }
                o || t.push(i[r])
            }
            e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }
        function v(e, t) {
            for (var n = e.className.split(/\s+/), i = 0, r = n.length; i < r; i++) if (n[i] == t) return ! 0;
            return ! 1
        }
        function m(e, t, n) {
            function i() {
                s && r && o && (s(a), s = null)
            }
            t = l(e, "link", {
                rel: "stylesheet",
                href: t,
                media: "all"
            });
            var r = !1,
            o = !0,
            a = null,
            s = n || null;
            c ? (t.onload = function() {
                r = !0,
                i()
            },
            t.onerror = function() {
                r = !0,
                a = Error("Stylesheet failed to load"),
                i()
            }) : setTimeout(function() {
                r = !0,
                i()
            },
            0),
            d(e, "head", t)
        }
        function p(e, t, n, i) {
            var r = e.c.getElementsByTagName("head")[0];
            if (r) {
                var o = l(e, "script", {
                    src: t
                }),
                a = !1;
                return o.onload = o.onreadystatechange = function() {
                    a || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (a = !0, n && n(null), o.onload = o.onreadystatechange = null, "HEAD" == o.parentNode.tagName && r.removeChild(o))
                },
                r.appendChild(o),
                setTimeout(function() {
                    a || (a = !0, n && n(Error("Script load timeout")))
                },
                i || 5e3),
                o
            }
            return null
        }
        function g() {
            this.a = 0,
            this.c = null
        }
        function x(e) {
            return e.a++,
            function() {
                e.a--,
                y(e)
            }
        }
        function _(e, t) {
            e.c = t,
            y(e)
        }
        function y(e) {
            0 == e.a && e.c && (e.c(), e.c = null)
        }
        function w(e) {
            this.a = e || "-"
        }
        function b(e, t) {
            this.c = e,
            this.f = 4,
            this.a = "n";
            var n = (t || "n4").match(/^([nio])([1-9])$/i);
            n && (this.a = n[1], this.f = parseInt(n[2], 10))
        }
        function S(e) {
            var t = [];
            e = e.split(/,\s*/);
            for (var n = 0; n < e.length; n++) {
                var i = e[n].replace(/['"]/g, ""); - 1 != i.indexOf(" ") || /^\d/.test(i) ? t.push("'" + i + "'") : t.push(i)
            }
            return t.join(",")
        }
        function T(e) {
            return e.a + e.f
        }
        function M(e) {
            var t = "normal";
            return "o" === e.a ? t = "oblique": "i" === e.a && (t = "italic"),
            t
        }
        function P(e) {
            var t = 4,
            n = "n",
            i = null;
            return e && ((i = e.match(/(normal|oblique|italic)/i)) && i[1] && (n = i[1].substr(0, 1).toLowerCase()), (i = e.match(/([1-9]00|normal|bold)/i)) && i[1] && (/bold/i.test(i[1]) ? t = 7 : /[1-9]00/.test(i[1]) && (t = parseInt(i[1].substr(0, 1), 10)))),
            n + t
        }
        function R(e, t) {
            this.c = e,
            this.f = e.o.document.documentElement,
            this.h = t,
            this.a = new w("-"),
            this.j = !1 !== t.events,
            this.g = !1 !== t.classes
        }
        function C(e) {
            if (e.g) {
                var t = v(e.f, e.a.c("wf", "active")),
                n = [],
                i = [e.a.c("wf", "loading")];
                t || n.push(e.a.c("wf", "inactive")),
                h(e.f, n, i)
            }
            I(e, "inactive")
        }
        function I(e, t, n) {
            e.j && e.h[t] && (n ? e.h[t](n.c, T(n)) : e.h[t]())
        }
        function A() {
            this.c = {}
        }
        function D(e, t) {
            this.c = e,
            this.f = t,
            this.a = l(this.c, "span", {
                "aria-hidden": "true"
            },
            this.f)
        }
        function L(e) {
            d(e.c, "body", e.a)
        }
        function F(e) {
            return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + S(e.c) + ";font-style:" + M(e) + ";font-weight:" + e.f + "00;"
        }
        function z(e, t, n, i, r, o) {
            this.g = e,
            this.j = t,
            this.a = i,
            this.c = n,
            this.f = r || 3e3,
            this.h = o || void 0
        }
        function E(e, t, n, i, r, o, a) {
            this.v = e,
            this.B = t,
            this.c = n,
            this.a = i,
            this.s = a || "BESbswy",
            this.f = {},
            this.w = r || 3e3,
            this.u = o || null,
            this.m = this.j = this.h = this.g = null,
            this.g = new D(this.c, this.s),
            this.h = new D(this.c, this.s),
            this.j = new D(this.c, this.s),
            this.m = new D(this.c, this.s),
            e = F(e = new b(this.a.c + ",serif", T(this.a))),
            this.g.a.style.cssText = e,
            e = F(e = new b(this.a.c + ",sans-serif", T(this.a))),
            this.h.a.style.cssText = e,
            e = F(e = new b("serif", T(this.a))),
            this.j.a.style.cssText = e,
            e = F(e = new b("sans-serif", T(this.a))),
            this.m.a.style.cssText = e,
            L(this.g),
            L(this.h),
            L(this.j),
            L(this.m)
        }
        w.prototype.c = function(e) {
            for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
            return t.join(this.a)
        },
        z.prototype.start = function() {
            var e = this.c.o.document,
            t = this,
            n = s(),
            i = new Promise(function(i, r) { !
                function o() {
                    s() - n >= t.f ? r() : e.fonts.load(function(e) {
                        return M(e) + " " + e.f + "00 300px " + S(e.c)
                    } (t.a), t.h).then(function(e) {
                        1 <= e.length ? i() : setTimeout(o, 25)
                    },
                    function() {
                        r()
                    })
                } ()
            }),
            r = null,
            o = new Promise(function(e, n) {
                r = setTimeout(n, t.f)
            });
            Promise.race([o, i]).then(function() {
                r && (clearTimeout(r), r = null),
                t.g(t.a)
            },
            function() {
                t.j(t.a)
            })
        };
        var k = {
            D: "serif",
            C: "sans-serif"
        },
        O = null;
        function U() {
            if (null === O) {
                var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                O = !!e && (536 > parseInt(e[1], 10) || 536 === parseInt(e[1], 10) && 11 >= parseInt(e[2], 10))
            }
            return O
        }
        function N(e, t, n) {
            for (var i in k) if (k.hasOwnProperty(i) && t === e.f[k[i]] && n === e.f[k[i]]) return ! 0;
            return ! 1
        }
        function B(e) {
            var t, n = e.g.a.offsetWidth,
            i = e.h.a.offsetWidth; (t = n === e.f.serif && i === e.f["sans-serif"]) || (t = U() && N(e, n, i)),
            t ? s() - e.A >= e.w ? U() && N(e, n, i) && (null === e.u || e.u.hasOwnProperty(e.a.c)) ? V(e, e.v) : V(e, e.B) : function(e) {
                setTimeout(a(function() {
                    B(this)
                },
                e), 50)
            } (e) : V(e, e.v)
        }
        function V(e, t) {
            setTimeout(a(function() {
                f(this.g.a),
                f(this.h.a),
                f(this.j.a),
                f(this.m.a),
                t(this.a)
            },
            e), 0)
        }
        function H(e, t, n) {
            this.c = e,
            this.a = t,
            this.f = 0,
            this.m = this.j = !1,
            this.s = n
        }
        E.prototype.start = function() {
            this.f.serif = this.j.a.offsetWidth,
            this.f["sans-serif"] = this.m.a.offsetWidth,
            this.A = s(),
            B(this)
        };
        var W = null;
        function G(e) {
            0 == --e.f && e.j && (e.m ? ((e = e.a).g && h(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]), I(e, "active")) : C(e.a))
        }
        function j(e) {
            this.j = e,
            this.a = new A,
            this.h = 0,
            this.f = this.g = !0
        }
        function q(e, t, n, i, r) {
            var o = 0 == --e.h; (e.f || e.g) && setTimeout(function() {
                var e = r || null,
                s = i || {};
                if (0 === n.length && o) C(t.a);
                else {
                    t.f += n.length,
                    o && (t.j = o);
                    var u, c = [];
                    for (u = 0; u < n.length; u++) {
                        var l = n[u],
                        d = s[l.c],
                        f = t.a,
                        v = l;
                        if (f.g && h(f.f, [f.a.c("wf", v.c, T(v).toString(), "loading")]), I(f, "fontloading", v), f = null, null === W) if (window.FontFace) {
                            v = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                            var m = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                            W = v ? 42 < parseInt(v[1], 10) : !m
                        } else W = !1;
                        f = W ? new z(a(t.g, t), a(t.h, t), t.c, l, t.s, d) : new E(a(t.g, t), a(t.h, t), t.c, l, t.s, e, d),
                        c.push(f)
                    }
                    for (u = 0; u < c.length; u++) c[u].start()
                }
            },
            0)
        }
        function X(e, t) {
            this.c = e,
            this.a = t
        }
        function Y(e, t) {
            this.c = e,
            this.a = t
        }
        function Z(e, t) {
            this.c = e || K,
            this.a = [],
            this.f = [],
            this.g = t || ""
        }
        H.prototype.g = function(e) {
            var t = this.a;
            t.g && h(t.f, [t.a.c("wf", e.c, T(e).toString(), "active")], [t.a.c("wf", e.c, T(e).toString(), "loading"), t.a.c("wf", e.c, T(e).toString(), "inactive")]),
            I(t, "fontactive", e),
            this.m = !0,
            G(this)
        },
        H.prototype.h = function(e) {
            var t = this.a;
            if (t.g) {
                var n = v(t.f, t.a.c("wf", e.c, T(e).toString(), "active")),
                i = [],
                r = [t.a.c("wf", e.c, T(e).toString(), "loading")];
                n || i.push(t.a.c("wf", e.c, T(e).toString(), "inactive")),
                h(t.f, i, r)
            }
            I(t, "fontinactive", e),
            G(this)
        },
        j.prototype.load = function(e) {
            this.c = new u(this.j, e.context || this.j),
            this.g = !1 !== e.events,
            this.f = !1 !== e.classes,
            function(e, t, n) {
                var i = [],
                r = n.timeout; !
                function(e) {
                    e.g && h(e.f, [e.a.c("wf", "loading")]),
                    I(e, "loading")
                } (t);
                var i = function(e, t, n) {
                    var i, r = [];
                    for (i in t) if (t.hasOwnProperty(i)) {
                        var o = e.c[i];
                        o && r.push(o(t[i], n))
                    }
                    return r
                } (e.a, n, e.c),
                o = new H(e.c, t, r);
                for (e.h = i.length, t = 0, n = i.length; t < n; t++) i[t].load(function(t, n, i) {
                    q(e, o, t, n, i)
                })
            } (this, new R(this.c, e), e)
        },
        X.prototype.load = function(e) {
            var t = this,
            n = t.a.projectId,
            i = t.a.version;
            if (n) {
                var r = t.c.o;
                p(this.c, (t.a.api || "https://fast.fonts.net/jsapi") + "/" + n + ".js" + (i ? "?v=" + i: ""),
                function(i) {
                    i ? e([]) : (r["__MonotypeConfiguration__" + n] = function() {
                        return t.a
                    },
                    function t() {
                        if (r["__mti_fntLst" + n]) {
                            var i, o = r["__mti_fntLst" + n](),
                            a = [];
                            if (o) for (var s = 0; s < o.length; s++) {
                                var u = o[s].fontfamily;
                                null != o[s].fontStyle && null != o[s].fontWeight ? (i = o[s].fontStyle + o[s].fontWeight, a.push(new b(u, i))) : a.push(new b(u))
                            }
                            e(a)
                        } else setTimeout(function() {
                            t()
                        },
                        50)
                    } ())
                }).id = "__MonotypeAPIScript__" + n
            } else e([])
        },
        Y.prototype.load = function(e) {
            var t, n, i = this.a.urls || [],
            r = this.a.families || [],
            o = this.a.testStrings || {},
            a = new g;
            for (t = 0, n = i.length; t < n; t++) m(this.c, i[t], x(a));
            var s = [];
            for (t = 0, n = r.length; t < n; t++) if ((i = r[t].split(":"))[1]) for (var u = i[1].split(","), c = 0; c < u.length; c += 1) s.push(new b(i[0], u[c]));
            else s.push(new b(i[0]));
            _(a,
            function() {
                e(s, o)
            })
        };
        var K = "https://fonts.googleapis.com/css";
        function Q(e) {
            this.f = e,
            this.a = [],
            this.c = {}
        }
        var J = {
            latin: "BESbswy",
            "latin-ext": "çöüğş",
            cyrillic: "йяЖ",
            greek: "αβΣ",
            khmer: "កខគ",
            Hanuman: "កខគ"
        },
        $ = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        ee = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        te = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
        function ne(e, t) {
            this.c = e,
            this.a = t
        }
        var ie = {
            Arimo: !0,
            Cousine: !0,
            Tinos: !0
        };
        function re(e, t) {
            this.c = e,
            this.a = t
        }
        function oe(e, t) {
            this.c = e,
            this.f = t,
            this.a = []
        }
        ne.prototype.load = function(e) {
            var t = new g,
            n = this.c,
            i = new Z(this.a.api, this.a.text),
            r = this.a.families; !
            function(e, t) {
                for (var n = t.length,
                i = 0; i < n; i++) {
                    var r = t[i].split(":");
                    3 == r.length && e.f.push(r.pop());
                    var o = "";
                    2 == r.length && "" != r[1] && (o = ":"),
                    e.a.push(r.join(o))
                }
            } (i, r);
            var o = new Q(r); !
            function(e) {
                for (var t = e.f.length,
                n = 0; n < t; n++) {
                    var i = e.f[n].split(":"),
                    r = i[0].replace(/\+/g, " "),
                    o = ["n4"];
                    if (2 <= i.length) {
                        var a;
                        if (a = [], s = i[1]) for (var s, u = (s = s.split(",")).length, c = 0; c < u; c++) {
                            var l;
                            if ((l = s[c]).match(/^[\w-]+$/)) if (null == (f = te.exec(l.toLowerCase()))) l = "";
                            else {
                                if (l = null == (l = f[2]) || "" == l ? "n": ee[l], null == (f = f[1]) || "" == f) f = "4";
                                else var d = $[f],
                                f = d || (isNaN(f) ? "4": f.substr(0, 1));
                                l = [l, f].join("")
                            } else l = "";
                            l && a.push(l)
                        }
                        0 < a.length && (o = a),
                        3 == i.length && (a = [], 0 < (i = (i = i[2]) ? i.split(",") : a).length && (i = J[i[0]]) && (e.c[r] = i))
                    }
                    for (e.c[r] || (i = J[r]) && (e.c[r] = i), i = 0; i < o.length; i += 1) e.a.push(new b(r, o[i]))
                }
            } (o),
            m(n,
            function(e) {
                if (0 == e.a.length) throw Error("No fonts to load!");
                if ( - 1 != e.c.indexOf("kit=")) return e.c;
                for (var t = e.a.length,
                n = [], i = 0; i < t; i++) n.push(e.a[i].replace(/ /g, "+"));
                return t = e.c + "?family=" + n.join("%7C"),
                0 < e.f.length && (t += "&subset=" + e.f.join(",")),
                0 < e.g.length && (t += "&text=" + encodeURIComponent(e.g)),
                t
            } (i), x(t)),
            _(t,
            function() {
                e(o.a, o.c, ie)
            })
        },
        re.prototype.load = function(e) {
            var t = this.a.id,
            n = this.c.o;
            t ? p(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js",
            function(t) {
                if (t) e([]);
                else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                    t = n.Typekit.config.fn;
                    for (var i = [], r = 0; r < t.length; r += 2) for (var o = t[r], a = t[r + 1], s = 0; s < a.length; s++) i.push(new b(o, a[s]));
                    try {
                        n.Typekit.load({
                            events: !1,
                            classes: !1,
                            async: !0
                        })
                    } catch(e) {}
                    e(i)
                }
            },
            2e3) : e([])
        },
        oe.prototype.load = function(e) {
            var t = this.f.id,
            n = this.c.o,
            i = this;
            t ? (n.__webfontfontdeckmodule__ || (n.__webfontfontdeckmodule__ = {}), n.__webfontfontdeckmodule__[t] = function(t, n) {
                for (var r = 0,
                o = n.fonts.length; r < o; ++r) {
                    var a = n.fonts[r];
                    i.a.push(new b(a.name, P("font-weight:" + a.weight + ";font-style:" + a.style)))
                }
                e(i.a)
            },
            p(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") +
            function(e) {
                return e.o.location.hostname || e.a.location.hostname
            } (this.c) + "/" + t + ".js",
            function(t) {
                t && e([])
            })) : e([])
        };
        var ae = new j(window);
        ae.a.c.custom = function(e, t) {
            return new Y(t, e)
        },
        ae.a.c.fontdeck = function(e, t) {
            return new oe(t, e)
        },
        ae.a.c.monotype = function(e, t) {
            return new X(t, e)
        },
        ae.a.c.typekit = function(e, t) {
            return new re(t, e)
        },
        ae.a.c.google = function(e, t) {
            return new ne(t, e)
        };
        var se = {
            load: a(ae.load, ae)
        };
        void 0 === (i = function() {
            return se
        }.call(t, n, t, e)) || (e.exports = i)
    } ()
}]);