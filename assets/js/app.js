/*! For license information please see scripts.js.LICENSE.txt */
(() => {
    var t,
    e = {
        429: (t, e, i) => {
            "use strict";
            function n(t) {
                return (
                    (n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    n(t)
                );
            }

            function o(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var o = e[i];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(
                            t,
                            ((s = o.key),
                            (r = void 0),
                            (r = (function (t, e) {
                                if ("object" !== n(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var o = i.call(t, e || "default");
                                    if ("object" !== n(o)) return o;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(s, "string")),
                            "symbol" === n(r) ? r : String(r)),
                            o
                        );
                }
                var s, r;
            }
            const s = (function () {
                function t() {
                    var e = this;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        !new URLSearchParams(window.location.search).has("skipagecheckmodal") &&
                            document.getElementById("ageCheckForm") &&
                            null === localStorage.getItem("agecheck") &&
                            (this.showAgeCheck(),
                            document.getElementById("ageCheckForm").addEventListener("submit", function (t) {
                                return e.onSubmitHandler(t);
                            }));
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "onSubmitHandler",
                            value: function (t) {
                                t.preventDefault(), this.formValidate() ? (this.agree(), this.hideAgeCheck()) : this.showError();
                            },
                        },
                        {
                            key: "formValidate",
                            value: function () {
                                return document.getElementById("inputAgeCheckConsent").checked;
                            },
                        },
                        {
                            key: "showError",
                            value: function () {
                                var t = this;
                                document.getElementById("ageCheckForm").classList.add("age-check__consent--error"),
                                    (document.getElementById("inputAgeCheckConsent").onclick = function () {
                                        return t.hideError();
                                    });
                            },
                        },
                        {
                            key: "hideError",
                            value: function () {
                                document.getElementById("ageCheckForm").classList.remove("age-check__consent--error");
                            },
                        },
                        {
                            key: "agree",
                            value: function () {
                                localStorage.setItem("agecheck", Date.now());
                            },
                        },
                        {
                            key: "showAgeCheck",
                            value: function () {
                                document.body.classList.add("has-age-check"),
                                    document.querySelector(".age-check__modal, .brewery-age-check__modal").setAttribute("aria-hidden", "false"),
                                    document.querySelector(".age-check__background, .brewery-age-check__background").setAttribute("aria-hidden", "false");
                            },
                        },
                        {
                            key: "hideAgeCheck",
                            value: function () {
                                document.body.classList.remove("has-age-check"),
                                    document.querySelector(".age-check__modal, .brewery-age-check__modal").setAttribute("aria-hidden", "true"),
                                    document.querySelector(".age-check__background, .brewery-age-check__background").setAttribute("aria-hidden", "true");
                            },
                        },
                        {
                            key: "isAgeCheckOpen",
                            value: function () {
                                return document.body.classList.contains("has-age-check");
                            },
                        },
                    ]) && o(e.prototype, i),
                    n && o(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            function r(t) {
                return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object;
            }
            function a(t = {}, e = {}) {
                Object.keys(e).forEach((i) => {
                    void 0 === t[i] ? (t[i] = e[i]) : r(e[i]) && r(t[i]) && Object.keys(e[i]).length > 0 && a(t[i], e[i]);
                });
            }
            const l = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: { blur() {}, nodeName: "" },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({ initEvent() {} }),
                createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            };
            function h() {
                const t = "undefined" != typeof document ? document : {};
                return a(t, l), t;
            }
            const u = {
                document: l,
                navigator: { userAgent: "" },
                location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
                history: { replaceState() {}, pushState() {}, go() {}, back() {} },
                CustomEvent: function () {
                    return this;
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({ getPropertyValue: () => "" }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: (t) => ("undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0)),
                cancelAnimationFrame(t) {
                    "undefined" != typeof setTimeout && clearTimeout(t);
                },
            };
            function c() {
                const t = "undefined" != typeof window ? window : {};
                return a(t, u), t;
            }
            class d extends Array {
                constructor(t) {
                    "number" == typeof t
                        ? super(t)
                        : (super(...(t || [])),
                            (function (t) {
                                const e = t.__proto__;
                                Object.defineProperty(t, "__proto__", {
                                    get: () => e,
                                    set(t) {
                                        e.__proto__ = t;
                                    },
                                });
                            })(this));
                }
            }
            function p(t = []) {
                const e = [];
                return (
                    t.forEach((t) => {
                        Array.isArray(t) ? e.push(...p(t)) : e.push(t);
                    }),
                    e
                );
            }
            function f(t, e) {
                return Array.prototype.filter.call(t, e);
            }
            function m(t, e) {
                const i = c(),
                    n = h();
                let o = [];
                if (!e && t instanceof d) return t;
                if (!t) return new d(o);
                if ("string" == typeof t) {
                    const i = t.trim();
                    if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                        let t = "div";
                        0 === i.indexOf("<li") && (t = "ul"),
                            0 === i.indexOf("<tr") && (t = "tbody"),
                            (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (t = "tr"),
                            0 === i.indexOf("<tbody") && (t = "table"),
                            0 === i.indexOf("<option") && (t = "select");
                        const e = n.createElement(t);
                        e.innerHTML = i;
                        for (let t = 0; t < e.childNodes.length; t += 1) o.push(e.childNodes[t]);
                    } else
                        o = (function (t, e) {
                            if ("string" != typeof t) return [t];
                            const i = [],
                                n = e.querySelectorAll(t);
                            for (let t = 0; t < n.length; t += 1) i.push(n[t]);
                            return i;
                        })(t.trim(), e || n);
                } else if (t.nodeType || t === i || t === n) o.push(t);
                else if (Array.isArray(t)) {
                    if (t instanceof d) return t;
                    o = t;
                }
                return new d(
                    (function (t) {
                        const e = [];
                        for (let i = 0; i < t.length; i += 1) -1 === e.indexOf(t[i]) && e.push(t[i]);
                        return e;
                    })(o)
                );
            }
            m.fn = d.prototype;
            const _ = "resize scroll".split(" ");
            function g(t) {
                return function (...e) {
                    if (void 0 === e[0]) {
                        for (let e = 0; e < this.length; e += 1) _.indexOf(t) < 0 && (t in this[e] ? this[e][t]() : m(this[e]).trigger(t));
                        return this;
                    }
                    return this.on(t, ...e);
                };
            }
            g("click"),
                g("blur"),
                g("focus"),
                g("focusin"),
                g("focusout"),
                g("keyup"),
                g("keydown"),
                g("keypress"),
                g("submit"),
                g("change"),
                g("mousedown"),
                g("mousemove"),
                g("mouseup"),
                g("mouseenter"),
                g("mouseleave"),
                g("mouseout"),
                g("mouseover"),
                g("touchstart"),
                g("touchend"),
                g("touchmove"),
                g("resize"),
                g("scroll");
            const v = {
                addClass: function (...t) {
                    const e = p(t.map((t) => t.split(" ")));
                    return (
                        this.forEach((t) => {
                            t.classList.add(...e);
                        }),
                        this
                    );
                },
                removeClass: function (...t) {
                    const e = p(t.map((t) => t.split(" ")));
                    return (
                        this.forEach((t) => {
                            t.classList.remove(...e);
                        }),
                        this
                    );
                },
                hasClass: function (...t) {
                    const e = p(t.map((t) => t.split(" ")));
                    return f(this, (t) => e.filter((e) => t.classList.contains(e)).length > 0).length > 0;
                },
                toggleClass: function (...t) {
                    const e = p(t.map((t) => t.split(" ")));
                    this.forEach((t) => {
                        e.forEach((e) => {
                            t.classList.toggle(e);
                        });
                    });
                },
                attr: function (t, e) {
                    if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                    for (let i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(t, e);
                        else for (const e in t) (this[i][e] = t[e]), this[i].setAttribute(e, t[e]);
                    return this;
                },
                removeAttr: function (t) {
                    for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
                    return this;
                },
                transform: function (t) {
                    for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
                    return this;
                },
                transition: function (t) {
                    for (let e = 0; e < this.length; e += 1) this[e].style.transitionDuration = "string" != typeof t ? `${t}ms` : t;
                    return this;
                },
                on: function (...t) {
                    let [e, i, n, o] = t;
                    function s(t) {
                        const e = t.target;
                        if (!e) return;
                        const o = t.target.dom7EventData || [];
                        if ((o.indexOf(t) < 0 && o.unshift(t), m(e).is(i))) n.apply(e, o);
                        else {
                            const t = m(e).parents();
                            for (let e = 0; e < t.length; e += 1) m(t[e]).is(i) && n.apply(t[e], o);
                        }
                    }
                    function r(t) {
                        const e = (t && t.target && t.target.dom7EventData) || [];
                        e.indexOf(t) < 0 && e.unshift(t), n.apply(this, e);
                    }
                    "function" == typeof t[1] && (([e, n, o] = t), (i = void 0)), o || (o = !1);
                    const a = e.split(" ");
                    let l;
                    for (let t = 0; t < this.length; t += 1) {
                        const e = this[t];
                        if (i)
                            for (l = 0; l < a.length; l += 1) {
                                const t = a[l];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({ listener: n, proxyListener: s }), e.addEventListener(t, s, o);
                            }
                        else
                            for (l = 0; l < a.length; l += 1) {
                                const t = a[l];
                                e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({ listener: n, proxyListener: r }), e.addEventListener(t, r, o);
                            }
                    }
                    return this;
                },
                off: function (...t) {
                    let [e, i, n, o] = t;
                    "function" == typeof t[1] && (([e, n, o] = t), (i = void 0)), o || (o = !1);
                    const s = e.split(" ");
                    for (let t = 0; t < s.length; t += 1) {
                        const e = s[t];
                        for (let t = 0; t < this.length; t += 1) {
                            const s = this[t];
                            let r;
                            if ((!i && s.dom7Listeners ? (r = s.dom7Listeners[e]) : i && s.dom7LiveListeners && (r = s.dom7LiveListeners[e]), r && r.length))
                                for (let t = r.length - 1; t >= 0; t -= 1) {
                                    const i = r[t];
                                    (n && i.listener === n) || (n && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === n)
                                        ? (s.removeEventListener(e, i.proxyListener, o), r.splice(t, 1))
                                        : n || (s.removeEventListener(e, i.proxyListener, o), r.splice(t, 1));
                                }
                        }
                    }
                    return this;
                },
                trigger: function (...t) {
                    const e = c(),
                        i = t[0].split(" "),
                        n = t[1];
                    for (let o = 0; o < i.length; o += 1) {
                        const s = i[o];
                        for (let i = 0; i < this.length; i += 1) {
                            const o = this[i];
                            if (e.CustomEvent) {
                                const i = new e.CustomEvent(s, { detail: n, bubbles: !0, cancelable: !0 });
                                (o.dom7EventData = t.filter((t, e) => e > 0)), o.dispatchEvent(i), (o.dom7EventData = []), delete o.dom7EventData;
                            }
                        }
                    }
                    return this;
                },
                transitionEnd: function (t) {
                    const e = this;
                    return (
                        t &&
                            e.on("transitionend", function i(n) {
                                n.target === this && (t.call(this, n), e.off("transitionend", i));
                            }),
                        this
                    );
                },
                outerWidth: function (t) {
                    if (this.length > 0) {
                        if (t) {
                            const t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                        }
                        return this[0].offsetWidth;
                    }
                    return null;
                },
                outerHeight: function (t) {
                    if (this.length > 0) {
                        if (t) {
                            const t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                        }
                        return this[0].offsetHeight;
                    }
                    return null;
                },
                styles: function () {
                    const t = c();
                    return this[0] ? t.getComputedStyle(this[0], null) : {};
                },
                offset: function () {
                    if (this.length > 0) {
                        const t = c(),
                            e = h(),
                            i = this[0],
                            n = i.getBoundingClientRect(),
                            o = e.body,
                            s = i.clientTop || o.clientTop || 0,
                            r = i.clientLeft || o.clientLeft || 0,
                            a = i === t ? t.scrollY : i.scrollTop,
                            l = i === t ? t.scrollX : i.scrollLeft;
                        return { top: n.top + a - s, left: n.left + l - r };
                    }
                    return null;
                },
                css: function (t, e) {
                    const i = c();
                    let n;
                    if (1 === arguments.length) {
                        if ("string" != typeof t) {
                            for (n = 0; n < this.length; n += 1) for (const e in t) this[n].style[e] = t[e];
                            return this;
                        }
                        if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(t);
                    }
                    if (2 === arguments.length && "string" == typeof t) {
                        for (n = 0; n < this.length; n += 1) this[n].style[t] = e;
                        return this;
                    }
                    return this;
                },
                each: function (t) {
                    return t
                        ? (this.forEach((e, i) => {
                                t.apply(e, [e, i]);
                            }),
                            this)
                        : this;
                },
                html: function (t) {
                    if (void 0 === t) return this[0] ? this[0].innerHTML : null;
                    for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
                    return this;
                },
                text: function (t) {
                    if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
                    for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
                    return this;
                },
                is: function (t) {
                    const e = c(),
                        i = h(),
                        n = this[0];
                    let o, s;
                    if (!n || void 0 === t) return !1;
                    if ("string" == typeof t) {
                        if (n.matches) return n.matches(t);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(t);
                        if (n.msMatchesSelector) return n.msMatchesSelector(t);
                        for (o = m(t), s = 0; s < o.length; s += 1) if (o[s] === n) return !0;
                        return !1;
                    }
                    if (t === i) return n === i;
                    if (t === e) return n === e;
                    if (t.nodeType || t instanceof d) {
                        for (o = t.nodeType ? [t] : t, s = 0; s < o.length; s += 1) if (o[s] === n) return !0;
                        return !1;
                    }
                    return !1;
                },
                index: function () {
                    let t,
                        e = this[0];
                    if (e) {
                        for (t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && (t += 1);
                        return t;
                    }
                },
                eq: function (t) {
                    if (void 0 === t) return this;
                    const e = this.length;
                    if (t > e - 1) return m([]);
                    if (t < 0) {
                        const i = e + t;
                        return m(i < 0 ? [] : [this[i]]);
                    }
                    return m([this[t]]);
                },
                append: function (...t) {
                    let e;
                    const i = h();
                    for (let n = 0; n < t.length; n += 1) {
                        e = t[n];
                        for (let t = 0; t < this.length; t += 1)
                            if ("string" == typeof e) {
                                const n = i.createElement("div");
                                for (n.innerHTML = e; n.firstChild; ) this[t].appendChild(n.firstChild);
                            } else if (e instanceof d) for (let i = 0; i < e.length; i += 1) this[t].appendChild(e[i]);
                            else this[t].appendChild(e);
                    }
                    return this;
                },
                prepend: function (t) {
                    const e = h();
                    let i, n;
                    for (i = 0; i < this.length; i += 1)
                        if ("string" == typeof t) {
                            const o = e.createElement("div");
                            for (o.innerHTML = t, n = o.childNodes.length - 1; n >= 0; n -= 1) this[i].insertBefore(o.childNodes[n], this[i].childNodes[0]);
                        } else if (t instanceof d) for (n = 0; n < t.length; n += 1) this[i].insertBefore(t[n], this[i].childNodes[0]);
                        else this[i].insertBefore(t, this[i].childNodes[0]);
                    return this;
                },
                next: function (t) {
                    return this.length > 0
                        ? t
                            ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(t)
                                ? m([this[0].nextElementSibling])
                                : m([])
                            : this[0].nextElementSibling
                            ? m([this[0].nextElementSibling])
                            : m([])
                        : m([]);
                },
                nextAll: function (t) {
                    const e = [];
                    let i = this[0];
                    if (!i) return m([]);
                    for (; i.nextElementSibling; ) {
                        const n = i.nextElementSibling;
                        t ? m(n).is(t) && e.push(n) : e.push(n), (i = n);
                    }
                    return m(e);
                },
                prev: function (t) {
                    if (this.length > 0) {
                        const e = this[0];
                        return t ? (e.previousElementSibling && m(e.previousElementSibling).is(t) ? m([e.previousElementSibling]) : m([])) : e.previousElementSibling ? m([e.previousElementSibling]) : m([]);
                    }
                    return m([]);
                },
                prevAll: function (t) {
                    const e = [];
                    let i = this[0];
                    if (!i) return m([]);
                    for (; i.previousElementSibling; ) {
                        const n = i.previousElementSibling;
                        t ? m(n).is(t) && e.push(n) : e.push(n), (i = n);
                    }
                    return m(e);
                },
                parent: function (t) {
                    const e = [];
                    for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (t ? m(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode));
                    return m(e);
                },
                parents: function (t) {
                    const e = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let n = this[i].parentNode;
                        for (; n; ) t ? m(n).is(t) && e.push(n) : e.push(n), (n = n.parentNode);
                    }
                    return m(e);
                },
                closest: function (t) {
                    let e = this;
                    return void 0 === t ? m([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
                },
                find: function (t) {
                    const e = [];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i].querySelectorAll(t);
                        for (let t = 0; t < n.length; t += 1) e.push(n[t]);
                    }
                    return m(e);
                },
                children: function (t) {
                    const e = [];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i].children;
                        for (let i = 0; i < n.length; i += 1) (t && !m(n[i]).is(t)) || e.push(n[i]);
                    }
                    return m(e);
                },
                filter: function (t) {
                    return m(f(this, t));
                },
                remove: function () {
                    for (let t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                    return this;
                },
            };
            Object.keys(v).forEach((t) => {
                Object.defineProperty(m.fn, t, { value: v[t], writable: !0 });
            });
            const y = m;
            function b(t, e = 0) {
                return setTimeout(t, e);
            }
            function w() {
                return Date.now();
            }
            function L(t, e = "x") {
                const i = c();
                let n, o, s;
                const r = (function (t) {
                    const e = c();
                    let i;
                    return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i;
                })(t);
                return (
                    i.WebKitCSSMatrix
                        ? ((o = r.transform || r.webkitTransform),
                            o.split(",").length > 6 &&
                                (o = o
                                    .split(", ")
                                    .map((t) => t.replace(",", "."))
                                    .join(", ")),
                            (s = new i.WebKitCSSMatrix("none" === o ? "" : o)))
                        : ((s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (n = s.toString().split(","))),
                    "x" === e && (o = i.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])),
                    "y" === e && (o = i.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])),
                    o || 0
                );
            }
            function x(t) {
                return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1);
            }
            function C(...t) {
                const e = Object(t[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let o = 1; o < t.length; o += 1) {
                    const s = t[o];
                    if (null != s && ((n = s), !("undefined" != typeof window && void 0 !== window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                        const t = Object.keys(Object(s)).filter((t) => i.indexOf(t) < 0);
                        for (let i = 0, n = t.length; i < n; i += 1) {
                            const n = t[i],
                                o = Object.getOwnPropertyDescriptor(s, n);
                            void 0 !== o && o.enumerable && (x(e[n]) && x(s[n]) ? (s[n].__swiper__ ? (e[n] = s[n]) : C(e[n], s[n])) : !x(e[n]) && x(s[n]) ? ((e[n] = {}), s[n].__swiper__ ? (e[n] = s[n]) : C(e[n], s[n])) : (e[n] = s[n]));
                        }
                    }
                }
                var n;
                return e;
            }
            function T(t, e, i) {
                t.style.setProperty(e, i);
            }
            function S({ swiper: t, targetPosition: e, side: i }) {
                const n = c(),
                    o = -t.translate;
                let s,
                    r = null;
                const a = t.params.speed;
                (t.wrapperEl.style.scrollSnapType = "none"), n.cancelAnimationFrame(t.cssModeFrameID);
                const l = e > o ? "next" : "prev",
                    h = (t, e) => ("next" === l && t >= e) || ("prev" === l && t <= e),
                    u = () => {
                        (s = new Date().getTime()), null === r && (r = s);
                        const l = Math.max(Math.min((s - r) / a, 1), 0),
                            c = 0.5 - Math.cos(l * Math.PI) / 2;
                        let d = o + c * (e - o);
                        if ((h(d, e) && (d = e), t.wrapperEl.scrollTo({ [i]: d }), h(d, e)))
                            return (
                                (t.wrapperEl.style.overflow = "hidden"),
                                (t.wrapperEl.style.scrollSnapType = ""),
                                setTimeout(() => {
                                    (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [i]: d });
                                }),
                                void n.cancelAnimationFrame(t.cssModeFrameID)
                            );
                        t.cssModeFrameID = n.requestAnimationFrame(u);
                    };
                u();
            }
            let P, M, k;
            function E() {
                return (
                    P ||
                        (P = (function () {
                            const t = c(),
                                e = h();
                            return {
                                smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
                                touch: !!("ontouchstart" in t || (t.DocumentTouch && e instanceof t.DocumentTouch)),
                                passiveListener: (function () {
                                    let e = !1;
                                    try {
                                        const i = Object.defineProperty({}, "passive", {
                                            get() {
                                                e = !0;
                                            },
                                        });
                                        t.addEventListener("testPassiveListener", null, i);
                                    } catch (t) {}
                                    return e;
                                })(),
                                gestures: "ongesturestart" in t,
                            };
                        })()),
                    P
                );
            }
            function z(t = {}) {
                return (
                    M ||
                        (M = (function ({ userAgent: t } = {}) {
                            const e = E(),
                                i = c(),
                                n = i.navigator.platform,
                                o = t || i.navigator.userAgent,
                                s = { ios: !1, android: !1 },
                                r = i.screen.width,
                                a = i.screen.height,
                                l = o.match(/(Android);?[\s\/]+([\d.]+)?/);
                            let h = o.match(/(iPad).*OS\s([\d_]+)/);
                            const u = o.match(/(iPod)(.*OS\s([\d_]+))?/),
                                d = !h && o.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                p = "Win32" === n;
                            let f = "MacIntel" === n;
                            return (
                                !h &&
                                    f &&
                                    e.touch &&
                                    ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${r}x${a}`) >= 0 &&
                                    ((h = o.match(/(Version)\/([\d.]+)/)), h || (h = [0, 1, "13_0_0"]), (f = !1)),
                                l && !p && ((s.os = "android"), (s.android = !0)),
                                (h || d || u) && ((s.os = "ios"), (s.ios = !0)),
                                s
                            );
                        })(t)),
                    M
                );
            }
            function O() {
                return (
                    k ||
                        (k = (function () {
                            const t = c();
                            return {
                                isSafari: (function () {
                                    const e = t.navigator.userAgent.toLowerCase();
                                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
                                })(),
                                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
                            };
                        })()),
                    k
                );
            }
            const A = {
                on(t, e, i) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" != typeof e) return n;
                    const o = i ? "unshift" : "push";
                    return (
                        t.split(" ").forEach((t) => {
                            n.eventsListeners[t] || (n.eventsListeners[t] = []), n.eventsListeners[t][o](e);
                        }),
                        n
                    );
                },
                once(t, e, i) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" != typeof e) return n;
                    function o(...i) {
                        n.off(t, o), o.__emitterProxy && delete o.__emitterProxy, e.apply(n, i);
                    }
                    return (o.__emitterProxy = e), n.on(t, o, i);
                },
                onAny(t, e) {
                    const i = this;
                    if (!i.eventsListeners || i.destroyed) return i;
                    if ("function" != typeof t) return i;
                    const n = e ? "unshift" : "push";
                    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[n](t), i;
                },
                offAny(t) {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsAnyListeners) return e;
                    const i = e.eventsAnyListeners.indexOf(t);
                    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
                },
                off(t, e) {
                    const i = this;
                    return !i.eventsListeners || i.destroyed
                        ? i
                        : i.eventsListeners
                        ? (t.split(" ").forEach((t) => {
                                void 0 === e
                                    ? (i.eventsListeners[t] = [])
                                    : i.eventsListeners[t] &&
                                    i.eventsListeners[t].forEach((n, o) => {
                                        (n === e || (n.__emitterProxy && n.__emitterProxy === e)) && i.eventsListeners[t].splice(o, 1);
                                    });
                            }),
                            i)
                        : i;
                },
                emit(...t) {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let i, n, o;
                    "string" == typeof t[0] || Array.isArray(t[0]) ? ((i = t[0]), (n = t.slice(1, t.length)), (o = e)) : ((i = t[0].events), (n = t[0].data), (o = t[0].context || e)), n.unshift(o);
                    return (
                        (Array.isArray(i) ? i : i.split(" ")).forEach((t) => {
                            e.eventsAnyListeners &&
                                e.eventsAnyListeners.length &&
                                e.eventsAnyListeners.forEach((e) => {
                                    e.apply(o, [t, ...n]);
                                }),
                                e.eventsListeners &&
                                    e.eventsListeners[t] &&
                                    e.eventsListeners[t].forEach((t) => {
                                        t.apply(o, n);
                                    });
                        }),
                        e
                    );
                },
            };
            const I = {
                updateSize: function () {
                    const t = this;
                    let e, i;
                    const n = t.$el;
                    (e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : n[0].clientWidth),
                        (i = void 0 !== t.params.height && null !== t.params.height ? t.params.height : n[0].clientHeight),
                        (0 === e && t.isHorizontal()) ||
                            (0 === i && t.isVertical()) ||
                            ((e = e - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10)),
                            (i = i - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10)),
                            Number.isNaN(e) && (e = 0),
                            Number.isNaN(i) && (i = 0),
                            Object.assign(t, { width: e, height: i, size: t.isHorizontal() ? e : i }));
                },
                updateSlides: function () {
                    const t = this;
                    function e(e) {
                        return t.isHorizontal()
                            ? e
                            : {
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom",
                                }[e];
                    }
                    function i(t, i) {
                        return parseFloat(t.getPropertyValue(e(i)) || 0);
                    }
                    const n = t.params,
                        { $wrapperEl: o, size: s, rtlTranslate: r, wrongRTL: a } = t,
                        l = t.virtual && n.virtual.enabled,
                        h = l ? t.virtual.slides.length : t.slides.length,
                        u = o.children(`.${t.params.slideClass}`),
                        c = l ? t.virtual.slides.length : u.length;
                    let d = [];
                    const p = [],
                        f = [];
                    let m = n.slidesOffsetBefore;
                    "function" == typeof m && (m = n.slidesOffsetBefore.call(t));
                    let _ = n.slidesOffsetAfter;
                    "function" == typeof _ && (_ = n.slidesOffsetAfter.call(t));
                    const g = t.snapGrid.length,
                        v = t.slidesGrid.length;
                    let y = n.spaceBetween,
                        b = -m,
                        w = 0,
                        L = 0;
                    if (void 0 === s) return;
                    "string" == typeof y && y.indexOf("%") >= 0 && (y = (parseFloat(y.replace("%", "")) / 100) * s),
                        (t.virtualSize = -y),
                        r ? u.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : u.css({ marginRight: "", marginBottom: "", marginTop: "" }),
                        n.centeredSlides && n.cssMode && (T(t.wrapperEl, "--swiper-centered-offset-before", ""), T(t.wrapperEl, "--swiper-centered-offset-after", ""));
                    const x = n.grid && n.grid.rows > 1 && t.grid;
                    let C;
                    x && t.grid.initSlides(c);
                    const S = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((t) => void 0 !== n.breakpoints[t].slidesPerView).length > 0;
                    for (let o = 0; o < c; o += 1) {
                        C = 0;
                        const r = u.eq(o);
                        if ((x && t.grid.updateSlide(o, r, c, e), "none" !== r.css("display"))) {
                            if ("auto" === n.slidesPerView) {
                                S && (u[o].style[e("width")] = "");
                                const s = getComputedStyle(r[0]),
                                    a = r[0].style.transform,
                                    l = r[0].style.webkitTransform;
                                if ((a && (r[0].style.transform = "none"), l && (r[0].style.webkitTransform = "none"), n.roundLengths)) C = t.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
                                else {
                                    const t = i(s, "width"),
                                        e = i(s, "padding-left"),
                                        n = i(s, "padding-right"),
                                        o = i(s, "margin-left"),
                                        a = i(s, "margin-right"),
                                        l = s.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) C = t + o + a;
                                    else {
                                        const { clientWidth: i, offsetWidth: s } = r[0];
                                        C = t + e + n + o + a + (s - i);
                                    }
                                }
                                a && (r[0].style.transform = a), l && (r[0].style.webkitTransform = l), n.roundLengths && (C = Math.floor(C));
                            } else (C = (s - (n.slidesPerView - 1) * y) / n.slidesPerView), n.roundLengths && (C = Math.floor(C)), u[o] && (u[o].style[e("width")] = `${C}px`);
                            u[o] && (u[o].swiperSlideSize = C),
                                f.push(C),
                                n.centeredSlides
                                    ? ((b = b + C / 2 + w / 2 + y),
                                        0 === w && 0 !== o && (b = b - s / 2 - y),
                                        0 === o && (b = b - s / 2 - y),
                                        Math.abs(b) < 0.001 && (b = 0),
                                        n.roundLengths && (b = Math.floor(b)),
                                        L % n.slidesPerGroup == 0 && d.push(b),
                                        p.push(b))
                                    : (n.roundLengths && (b = Math.floor(b)), (L - Math.min(t.params.slidesPerGroupSkip, L)) % t.params.slidesPerGroup == 0 && d.push(b), p.push(b), (b = b + C + y)),
                                (t.virtualSize += C + y),
                                (w = C),
                                (L += 1);
                        }
                    }
                    if (
                        ((t.virtualSize = Math.max(t.virtualSize, s) + _),
                        r && a && ("slide" === n.effect || "coverflow" === n.effect) && o.css({ width: `${t.virtualSize + n.spaceBetween}px` }),
                        n.setWrapperSize && o.css({ [e("width")]: `${t.virtualSize + n.spaceBetween}px` }),
                        x && t.grid.updateWrapperSize(C, d, e),
                        !n.centeredSlides)
                    ) {
                        const e = [];
                        for (let i = 0; i < d.length; i += 1) {
                            let o = d[i];
                            n.roundLengths && (o = Math.floor(o)), d[i] <= t.virtualSize - s && e.push(o);
                        }
                        (d = e), Math.floor(t.virtualSize - s) - Math.floor(d[d.length - 1]) > 1 && d.push(t.virtualSize - s);
                    }
                    if ((0 === d.length && (d = [0]), 0 !== n.spaceBetween)) {
                        const i = t.isHorizontal() && r ? "marginLeft" : e("marginRight");
                        u.filter((t, e) => !n.cssMode || e !== u.length - 1).css({ [i]: `${y}px` });
                    }
                    if (n.centeredSlides && n.centeredSlidesBounds) {
                        let t = 0;
                        f.forEach((e) => {
                            t += e + (n.spaceBetween ? n.spaceBetween : 0);
                        }),
                            (t -= n.spaceBetween);
                        const e = t - s;
                        d = d.map((t) => (t < 0 ? -m : t > e ? e + _ : t));
                    }
                    if (n.centerInsufficientSlides) {
                        let t = 0;
                        if (
                            (f.forEach((e) => {
                                t += e + (n.spaceBetween ? n.spaceBetween : 0);
                            }),
                            (t -= n.spaceBetween),
                            t < s)
                        ) {
                            const e = (s - t) / 2;
                            d.forEach((t, i) => {
                                d[i] = t - e;
                            }),
                                p.forEach((t, i) => {
                                    p[i] = t + e;
                                });
                        }
                    }
                    if ((Object.assign(t, { slides: u, snapGrid: d, slidesGrid: p, slidesSizesGrid: f }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)) {
                        T(t.wrapperEl, "--swiper-centered-offset-before", -d[0] + "px"), T(t.wrapperEl, "--swiper-centered-offset-after", t.size / 2 - f[f.length - 1] / 2 + "px");
                        const e = -t.snapGrid[0],
                            i = -t.slidesGrid[0];
                        (t.snapGrid = t.snapGrid.map((t) => t + e)), (t.slidesGrid = t.slidesGrid.map((t) => t + i));
                    }
                    if (
                        (c !== h && t.emit("slidesLengthChange"),
                        d.length !== g && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")),
                        p.length !== v && t.emit("slidesGridLengthChange"),
                        n.watchSlidesProgress && t.updateSlidesOffset(),
                        !(l || n.cssMode || ("slide" !== n.effect && "fade" !== n.effect)))
                    ) {
                        const e = `${n.containerModifierClass}backface-hidden`,
                            i = t.$el.hasClass(e);
                        c <= n.maxBackfaceHiddenSlides ? i || t.$el.addClass(e) : i && t.$el.removeClass(e);
                    }
                },
                updateAutoHeight: function (t) {
                    const e = this,
                        i = [],
                        n = e.virtual && e.params.virtual.enabled;
                    let o,
                        s = 0;
                    "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
                    const r = (t) => (n ? e.slides.filter((e) => parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t)[0] : e.slides.eq(t)[0]);
                    if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1)
                        if (e.params.centeredSlides)
                            (e.visibleSlides || y([])).each((t) => {
                                i.push(t);
                            });
                        else
                            for (o = 0; o < Math.ceil(e.params.slidesPerView); o += 1) {
                                const t = e.activeIndex + o;
                                if (t > e.slides.length && !n) break;
                                i.push(r(t));
                            }
                    else i.push(r(e.activeIndex));
                    for (o = 0; o < i.length; o += 1)
                        if (void 0 !== i[o]) {
                            const t = i[o].offsetHeight;
                            s = t > s ? t : s;
                        }
                    (s || 0 === s) && e.$wrapperEl.css("height", `${s}px`);
                },
                updateSlidesOffset: function () {
                    const t = this,
                        e = t.slides;
                    for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop;
                },
                updateSlidesProgress: function (t = (this && this.translate) || 0) {
                    const e = this,
                        i = e.params,
                        { slides: n, rtlTranslate: o, snapGrid: s } = e;
                    if (0 === n.length) return;
                    void 0 === n[0].swiperSlideOffset && e.updateSlidesOffset();
                    let r = -t;
                    o && (r = t), n.removeClass(i.slideVisibleClass), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
                    for (let t = 0; t < n.length; t += 1) {
                        const a = n[t];
                        let l = a.swiperSlideOffset;
                        i.cssMode && i.centeredSlides && (l -= n[0].swiperSlideOffset);
                        const h = (r + (i.centeredSlides ? e.minTranslate() : 0) - l) / (a.swiperSlideSize + i.spaceBetween),
                            u = (r - s[0] + (i.centeredSlides ? e.minTranslate() : 0) - l) / (a.swiperSlideSize + i.spaceBetween),
                            c = -(r - l),
                            d = c + e.slidesSizesGrid[t];
                        ((c >= 0 && c < e.size - 1) || (d > 1 && d <= e.size) || (c <= 0 && d >= e.size)) && (e.visibleSlides.push(a), e.visibleSlidesIndexes.push(t), n.eq(t).addClass(i.slideVisibleClass)),
                            (a.progress = o ? -h : h),
                            (a.originalProgress = o ? -u : u);
                    }
                    e.visibleSlides = y(e.visibleSlides);
                },
                updateProgress: function (t) {
                    const e = this;
                    if (void 0 === t) {
                        const i = e.rtlTranslate ? -1 : 1;
                        t = (e && e.translate && e.translate * i) || 0;
                    }
                    const i = e.params,
                        n = e.maxTranslate() - e.minTranslate();
                    let { progress: o, isBeginning: s, isEnd: r } = e;
                    const a = s,
                        l = r;
                    0 === n ? ((o = 0), (s = !0), (r = !0)) : ((o = (t - e.minTranslate()) / n), (s = o <= 0), (r = o >= 1)),
                        Object.assign(e, { progress: o, isBeginning: s, isEnd: r }),
                        (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) && e.updateSlidesProgress(t),
                        s && !a && e.emit("reachBeginning toEdge"),
                        r && !l && e.emit("reachEnd toEdge"),
                        ((a && !s) || (l && !r)) && e.emit("fromEdge"),
                        e.emit("progress", o);
                },
                updateSlidesClasses: function () {
                    const t = this,
                        { slides: e, params: i, $wrapperEl: n, activeIndex: o, realIndex: s } = t,
                        r = t.virtual && i.virtual.enabled;
                    let a;
                    e.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`),
                        (a = r ? t.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${o}"]`) : e.eq(o)),
                        a.addClass(i.slideActiveClass),
                        i.loop &&
                            (a.hasClass(i.slideDuplicateClass)
                                ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(i.slideDuplicateActiveClass)
                                : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(i.slideDuplicateActiveClass));
                    let l = a.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === l.length && ((l = e.eq(0)), l.addClass(i.slideNextClass));
                    let h = a.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === h.length && ((h = e.eq(-1)), h.addClass(i.slidePrevClass)),
                        i.loop &&
                            (l.hasClass(i.slideDuplicateClass)
                                ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass)
                                : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass),
                            h.hasClass(i.slideDuplicateClass)
                                ? n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)
                                : n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${h.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)),
                        t.emitSlidesClasses();
                },
                updateActiveIndex: function (t) {
                    const e = this,
                        i = e.rtlTranslate ? e.translate : -e.translate,
                        { slidesGrid: n, snapGrid: o, params: s, activeIndex: r, realIndex: a, snapIndex: l } = e;
                    let h,
                        u = t;
                    if (void 0 === u) {
                        for (let t = 0; t < n.length; t += 1) void 0 !== n[t + 1] ? (i >= n[t] && i < n[t + 1] - (n[t + 1] - n[t]) / 2 ? (u = t) : i >= n[t] && i < n[t + 1] && (u = t + 1)) : i >= n[t] && (u = t);
                        s.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
                    }
                    if (o.indexOf(i) >= 0) h = o.indexOf(i);
                    else {
                        const t = Math.min(s.slidesPerGroupSkip, u);
                        h = t + Math.floor((u - t) / s.slidesPerGroup);
                    }
                    if ((h >= o.length && (h = o.length - 1), u === r)) return void (h !== l && ((e.snapIndex = h), e.emit("snapIndexChange")));
                    const c = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                    Object.assign(e, { snapIndex: h, realIndex: c, previousIndex: r, activeIndex: u }),
                        e.emit("activeIndexChange"),
                        e.emit("snapIndexChange"),
                        a !== c && e.emit("realIndexChange"),
                        (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
                },
                updateClickedSlide: function (t) {
                    const e = this,
                        i = e.params,
                        n = y(t).closest(`.${i.slideClass}`)[0];
                    let o,
                        s = !1;
                    if (n)
                        for (let t = 0; t < e.slides.length; t += 1)
                            if (e.slides[t] === n) {
                                (s = !0), (o = t);
                                break;
                            }
                    if (!n || !s) return (e.clickedSlide = void 0), void (e.clickedIndex = void 0);
                    (e.clickedSlide = n),
                        e.virtual && e.params.virtual.enabled ? (e.clickedIndex = parseInt(y(n).attr("data-swiper-slide-index"), 10)) : (e.clickedIndex = o),
                        i.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide();
                },
            };
            const B = {
                getTranslate: function (t = this.isHorizontal() ? "x" : "y") {
                    const { params: e, rtlTranslate: i, translate: n, $wrapperEl: o } = this;
                    if (e.virtualTranslate) return i ? -n : n;
                    if (e.cssMode) return n;
                    let s = L(o[0], t);
                    return i && (s = -s), s || 0;
                },
                setTranslate: function (t, e) {
                    const i = this,
                        { rtlTranslate: n, params: o, $wrapperEl: s, wrapperEl: r, progress: a } = i;
                    let l,
                        h = 0,
                        u = 0;
                    i.isHorizontal() ? (h = n ? -t : t) : (u = t),
                        o.roundLengths && ((h = Math.floor(h)), (u = Math.floor(u))),
                        o.cssMode ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -h : -u) : o.virtualTranslate || s.transform(`translate3d(${h}px, ${u}px, 0px)`),
                        (i.previousTranslate = i.translate),
                        (i.translate = i.isHorizontal() ? h : u);
                    const c = i.maxTranslate() - i.minTranslate();
                    (l = 0 === c ? 0 : (t - i.minTranslate()) / c), l !== a && i.updateProgress(t), i.emit("setTranslate", i.translate, e);
                },
                minTranslate: function () {
                    return -this.snapGrid[0];
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1];
                },
                translateTo: function (t = 0, e = this.params.speed, i = !0, n = !0, o) {
                    const s = this,
                        { params: r, wrapperEl: a } = s;
                    if (s.animating && r.preventInteractionOnTransition) return !1;
                    const l = s.minTranslate(),
                        h = s.maxTranslate();
                    let u;
                    if (((u = n && t > l ? l : n && t < h ? h : t), s.updateProgress(u), r.cssMode)) {
                        const t = s.isHorizontal();
                        if (0 === e) a[t ? "scrollLeft" : "scrollTop"] = -u;
                        else {
                            if (!s.support.smoothScroll) return S({ swiper: s, targetPosition: -u, side: t ? "left" : "top" }), !0;
                            a.scrollTo({ [t ? "left" : "top"]: -u, behavior: "smooth" });
                        }
                        return !0;
                    }
                    return (
                        0 === e
                            ? (s.setTransition(0), s.setTranslate(u), i && (s.emit("beforeTransitionStart", e, o), s.emit("transitionEnd")))
                            : (s.setTransition(e),
                                s.setTranslate(u),
                                i && (s.emit("beforeTransitionStart", e, o), s.emit("transitionStart")),
                                s.animating ||
                                    ((s.animating = !0),
                                    s.onTranslateToWrapperTransitionEnd ||
                                        (s.onTranslateToWrapperTransitionEnd = function (t) {
                                            s &&
                                                !s.destroyed &&
                                                t.target === this &&
                                                (s.$wrapperEl[0].removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                                                s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd),
                                                (s.onTranslateToWrapperTransitionEnd = null),
                                                delete s.onTranslateToWrapperTransitionEnd,
                                                i && s.emit("transitionEnd"));
                                        }),
                                    s.$wrapperEl[0].addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd),
                                    s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onTranslateToWrapperTransitionEnd))),
                        !0
                    );
                },
            };
            function Z({ swiper: t, runCallbacks: e, direction: i, step: n }) {
                const { activeIndex: o, previousIndex: s } = t;
                let r = i;
                if ((r || (r = o > s ? "next" : o < s ? "prev" : "reset"), t.emit(`transition${n}`), e && o !== s)) {
                    if ("reset" === r) return void t.emit(`slideResetTransition${n}`);
                    t.emit(`slideChangeTransition${n}`), "next" === r ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`);
                }
            }
            const N = {
                slideTo: function (t = 0, e = this.params.speed, i = !0, n, o) {
                    if ("number" != typeof t && "string" != typeof t) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`);
                    if ("string" == typeof t) {
                        const e = parseInt(t, 10);
                        if (!isFinite(e)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
                        t = e;
                    }
                    const s = this;
                    let r = t;
                    r < 0 && (r = 0);
                    const { params: a, snapGrid: l, slidesGrid: h, previousIndex: u, activeIndex: c, rtlTranslate: d, wrapperEl: p, enabled: f } = s;
                    if ((s.animating && a.preventInteractionOnTransition) || (!f && !n && !o)) return !1;
                    const m = Math.min(s.params.slidesPerGroupSkip, r);
                    let _ = m + Math.floor((r - m) / s.params.slidesPerGroup);
                    _ >= l.length && (_ = l.length - 1);
                    const g = -l[_];
                    if (a.normalizeSlideIndex)
                        for (let t = 0; t < h.length; t += 1) {
                            const e = -Math.floor(100 * g),
                                i = Math.floor(100 * h[t]),
                                n = Math.floor(100 * h[t + 1]);
                            void 0 !== h[t + 1] ? (e >= i && e < n - (n - i) / 2 ? (r = t) : e >= i && e < n && (r = t + 1)) : e >= i && (r = t);
                        }
                    if (s.initialized && r !== c) {
                        if (!s.allowSlideNext && g < s.translate && g < s.minTranslate()) return !1;
                        if (!s.allowSlidePrev && g > s.translate && g > s.maxTranslate() && (c || 0) !== r) return !1;
                    }
                    let v;
                    if ((r !== (u || 0) && i && s.emit("beforeSlideChangeStart"), s.updateProgress(g), (v = r > c ? "next" : r < c ? "prev" : "reset"), (d && -g === s.translate) || (!d && g === s.translate)))
                        return s.updateActiveIndex(r), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(g), "reset" !== v && (s.transitionStart(i, v), s.transitionEnd(i, v)), !1;
                    if (a.cssMode) {
                        const t = s.isHorizontal(),
                            i = d ? g : -g;
                        if (0 === e) {
                            const e = s.virtual && s.params.virtual.enabled;
                            e && ((s.wrapperEl.style.scrollSnapType = "none"), (s._immediateVirtual = !0)),
                                (p[t ? "scrollLeft" : "scrollTop"] = i),
                                e &&
                                    requestAnimationFrame(() => {
                                        (s.wrapperEl.style.scrollSnapType = ""), (s._swiperImmediateVirtual = !1);
                                    });
                        } else {
                            if (!s.support.smoothScroll) return S({ swiper: s, targetPosition: i, side: t ? "left" : "top" }), !0;
                            p.scrollTo({ [t ? "left" : "top"]: i, behavior: "smooth" });
                        }
                        return !0;
                    }
                    return (
                        s.setTransition(e),
                        s.setTranslate(g),
                        s.updateActiveIndex(r),
                        s.updateSlidesClasses(),
                        s.emit("beforeTransitionStart", e, n),
                        s.transitionStart(i, v),
                        0 === e
                            ? s.transitionEnd(i, v)
                            : s.animating ||
                                ((s.animating = !0),
                                s.onSlideToWrapperTransitionEnd ||
                                    (s.onSlideToWrapperTransitionEnd = function (t) {
                                        s &&
                                            !s.destroyed &&
                                            t.target === this &&
                                            (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                                            s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd),
                                            (s.onSlideToWrapperTransitionEnd = null),
                                            delete s.onSlideToWrapperTransitionEnd,
                                            s.transitionEnd(i, v));
                                    }),
                                s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd),
                                s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd)),
                        !0
                    );
                },
                slideToLoop: function (t = 0, e = this.params.speed, i = !0, n) {
                    if ("string" == typeof t) {
                        const e = parseInt(t, 10);
                        if (!isFinite(e)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
                        t = e;
                    }
                    const o = this;
                    let s = t;
                    return o.params.loop && (s += o.loopedSlides), o.slideTo(s, e, i, n);
                },
                slideNext: function (t = this.params.speed, e = !0, i) {
                    const n = this,
                        { animating: o, enabled: s, params: r } = n;
                    if (!s) return n;
                    let a = r.slidesPerGroup;
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                    const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a;
                    if (r.loop) {
                        if (o && r.loopPreventsSlide) return !1;
                        n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
                    }
                    return r.rewind && n.isEnd ? n.slideTo(0, t, e, i) : n.slideTo(n.activeIndex + l, t, e, i);
                },
                slidePrev: function (t = this.params.speed, e = !0, i) {
                    const n = this,
                        { params: o, animating: s, snapGrid: r, slidesGrid: a, rtlTranslate: l, enabled: h } = n;
                    if (!h) return n;
                    if (o.loop) {
                        if (s && o.loopPreventsSlide) return !1;
                        n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
                    }
                    function u(t) {
                        return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t);
                    }
                    const c = u(l ? n.translate : -n.translate),
                        d = r.map((t) => u(t));
                    let p = r[d.indexOf(c) - 1];
                    if (void 0 === p && o.cssMode) {
                        let t;
                        r.forEach((e, i) => {
                            c >= e && (t = i);
                        }),
                            void 0 !== t && (p = r[t > 0 ? t - 1 : t]);
                    }
                    let f = 0;
                    if (
                        (void 0 !== p &&
                            ((f = a.indexOf(p)),
                            f < 0 && (f = n.activeIndex - 1),
                            "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && ((f = f - n.slidesPerViewDynamic("previous", !0) + 1), (f = Math.max(f, 0)))),
                        o.rewind && n.isBeginning)
                    ) {
                        const o = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                        return n.slideTo(o, t, e, i);
                    }
                    return n.slideTo(f, t, e, i);
                },
                slideReset: function (t = this.params.speed, e = !0, i) {
                    return this.slideTo(this.activeIndex, t, e, i);
                },
                slideToClosest: function (t = this.params.speed, e = !0, i, n = 0.5) {
                    const o = this;
                    let s = o.activeIndex;
                    const r = Math.min(o.params.slidesPerGroupSkip, s),
                        a = r + Math.floor((s - r) / o.params.slidesPerGroup),
                        l = o.rtlTranslate ? o.translate : -o.translate;
                    if (l >= o.snapGrid[a]) {
                        const t = o.snapGrid[a];
                        l - t > (o.snapGrid[a + 1] - t) * n && (s += o.params.slidesPerGroup);
                    } else {
                        const t = o.snapGrid[a - 1];
                        l - t <= (o.snapGrid[a] - t) * n && (s -= o.params.slidesPerGroup);
                    }
                    return (s = Math.max(s, 0)), (s = Math.min(s, o.slidesGrid.length - 1)), o.slideTo(s, t, e, i);
                },
                slideToClickedSlide: function () {
                    const t = this,
                        { params: e, $wrapperEl: i } = t,
                        n = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
                    let o,
                        s = t.clickedIndex;
                    if (e.loop) {
                        if (t.animating) return;
                        (o = parseInt(y(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                            e.centeredSlides
                                ? s < t.loopedSlides - n / 2 || s > t.slides.length - t.loopedSlides + n / 2
                                    ? (t.loopFix(),
                                        (s = i.children(`.${e.slideClass}[data-swiper-slide-index="${o}"]:not(.${e.slideDuplicateClass})`).eq(0).index()),
                                        b(() => {
                                            t.slideTo(s);
                                        }))
                                    : t.slideTo(s)
                                : s > t.slides.length - n
                                ? (t.loopFix(),
                                    (s = i.children(`.${e.slideClass}[data-swiper-slide-index="${o}"]:not(.${e.slideDuplicateClass})`).eq(0).index()),
                                    b(() => {
                                        t.slideTo(s);
                                    }))
                                : t.slideTo(s);
                    } else t.slideTo(s);
                },
            };
            const D = {
                loopCreate: function () {
                    const t = this,
                        e = h(),
                        { params: i, $wrapperEl: n } = t,
                        o = n.children().length > 0 ? y(n.children()[0].parentNode) : n;
                    o.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                    let s = o.children(`.${i.slideClass}`);
                    if (i.loopFillGroupWithBlank) {
                        const t = i.slidesPerGroup - (s.length % i.slidesPerGroup);
                        if (t !== i.slidesPerGroup) {
                            for (let n = 0; n < t; n += 1) {
                                const t = y(e.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                o.append(t);
                            }
                            s = o.children(`.${i.slideClass}`);
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = s.length),
                        (t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10))),
                        (t.loopedSlides += i.loopAdditionalSlides),
                        t.loopedSlides > s.length && t.params.loopedSlidesLimit && (t.loopedSlides = s.length);
                    const r = [],
                        a = [];
                    s.each((t, e) => {
                        y(t).attr("data-swiper-slide-index", e);
                    });
                    for (let e = 0; e < t.loopedSlides; e += 1) {
                        const t = e - Math.floor(e / s.length) * s.length;
                        a.push(s.eq(t)[0]), r.unshift(s.eq(s.length - t - 1)[0]);
                    }
                    for (let t = 0; t < a.length; t += 1) o.append(y(a[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (let t = r.length - 1; t >= 0; t -= 1) o.prepend(y(r[t].cloneNode(!0)).addClass(i.slideDuplicateClass));
                },
                loopFix: function () {
                    const t = this;
                    t.emit("beforeLoopFix");
                    const { activeIndex: e, slides: i, loopedSlides: n, allowSlidePrev: o, allowSlideNext: s, snapGrid: r, rtlTranslate: a } = t;
                    let l;
                    (t.allowSlidePrev = !0), (t.allowSlideNext = !0);
                    const h = -r[e] - t.getTranslate();
                    if (e < n) {
                        (l = i.length - 3 * n + e), (l += n);
                        t.slideTo(l, 0, !1, !0) && 0 !== h && t.setTranslate((a ? -t.translate : t.translate) - h);
                    } else if (e >= i.length - n) {
                        (l = -i.length + e + n), (l += n);
                        t.slideTo(l, 0, !1, !0) && 0 !== h && t.setTranslate((a ? -t.translate : t.translate) - h);
                    }
                    (t.allowSlidePrev = o), (t.allowSlideNext = s), t.emit("loopFix");
                },
                loopDestroy: function () {
                    const { $wrapperEl: t, params: e, slides: i } = this;
                    t.children(`.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index");
                },
            };
            function j(t) {
                const e = this,
                    i = h(),
                    n = c(),
                    o = e.touchEventsData,
                    { params: s, touches: r, enabled: a } = e;
                if (!a) return;
                if (e.animating && s.preventInteractionOnTransition) return;
                !e.animating && s.cssMode && s.loop && e.loopFix();
                let l = t;
                l.originalEvent && (l = l.originalEvent);
                let u = y(l.target);
                if ("wrapper" === s.touchEventsTarget && !u.closest(e.wrapperEl).length) return;
                if (((o.isTouchEvent = "touchstart" === l.type), !o.isTouchEvent && "which" in l && 3 === l.which)) return;
                if (!o.isTouchEvent && "button" in l && l.button > 0) return;
                if (o.isTouched && o.isMoved) return;
                const d = !!s.noSwipingClass && "" !== s.noSwipingClass,
                    p = t.composedPath ? t.composedPath() : t.path;
                d && l.target && l.target.shadowRoot && p && (u = y(p[0]));
                const f = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
                    m = !(!l.target || !l.target.shadowRoot);
                if (
                    s.noSwiping &&
                    (m
                        ? (function (t, e = this) {
                                return (function e(i) {
                                    if (!i || i === h() || i === c()) return null;
                                    i.assignedSlot && (i = i.assignedSlot);
                                    const n = i.closest(t);
                                    return n || i.getRootNode ? n || e(i.getRootNode().host) : null;
                                })(e);
                            })(f, u[0])
                        : u.closest(f)[0])
                )
                    return void (e.allowClick = !0);
                if (s.swipeHandler && !u.closest(s.swipeHandler)[0]) return;
                (r.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX), (r.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
                const _ = r.currentX,
                    g = r.currentY,
                    v = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                    b = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                if (v && (_ <= b || _ >= n.innerWidth - b)) {
                    if ("prevent" !== v) return;
                    t.preventDefault();
                }
                if (
                    (Object.assign(o, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                    (r.startX = _),
                    (r.startY = g),
                    (o.touchStartTime = w()),
                    (e.allowClick = !0),
                    e.updateSize(),
                    (e.swipeDirection = void 0),
                    s.threshold > 0 && (o.allowThresholdMove = !1),
                    "touchstart" !== l.type)
                ) {
                    let t = !0;
                    u.is(o.focusableElements) && ((t = !1), "SELECT" === u[0].nodeName && (o.isTouched = !1)), i.activeElement && y(i.activeElement).is(o.focusableElements) && i.activeElement !== u[0] && i.activeElement.blur();
                    const n = t && e.allowTouchMove && s.touchStartPreventDefault;
                    (!s.touchStartForcePreventDefault && !n) || u[0].isContentEditable || l.preventDefault();
                }
                e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", l);
            }
            function R(t) {
                const e = h(),
                    i = this,
                    n = i.touchEventsData,
                    { params: o, touches: s, rtlTranslate: r, enabled: a } = i;
                if (!a) return;
                let l = t;
                if ((l.originalEvent && (l = l.originalEvent), !n.isTouched)) return void (n.startMoving && n.isScrolling && i.emit("touchMoveOpposite", l));
                if (n.isTouchEvent && "touchmove" !== l.type) return;
                const u = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
                    c = "touchmove" === l.type ? u.pageX : l.pageX,
                    d = "touchmove" === l.type ? u.pageY : l.pageY;
                if (l.preventedByNestedSwiper) return (s.startX = c), void (s.startY = d);
                if (!i.allowTouchMove) return y(l.target).is(n.focusableElements) || (i.allowClick = !1), void (n.isTouched && (Object.assign(s, { startX: c, startY: d, currentX: c, currentY: d }), (n.touchStartTime = w())));
                if (n.isTouchEvent && o.touchReleaseOnEdges && !o.loop)
                    if (i.isVertical()) {
                        if ((d < s.startY && i.translate <= i.maxTranslate()) || (d > s.startY && i.translate >= i.minTranslate())) return (n.isTouched = !1), void (n.isMoved = !1);
                    } else if ((c < s.startX && i.translate <= i.maxTranslate()) || (c > s.startX && i.translate >= i.minTranslate())) return;
                if (n.isTouchEvent && e.activeElement && l.target === e.activeElement && y(l.target).is(n.focusableElements)) return (n.isMoved = !0), void (i.allowClick = !1);
                if ((n.allowTouchCallbacks && i.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1)) return;
                (s.currentX = c), (s.currentY = d);
                const p = s.currentX - s.startX,
                    f = s.currentY - s.startY;
                if (i.params.threshold && Math.sqrt(p ** 2 + f ** 2) < i.params.threshold) return;
                if (void 0 === n.isScrolling) {
                    let t;
                    (i.isHorizontal() && s.currentY === s.startY) || (i.isVertical() && s.currentX === s.startX)
                        ? (n.isScrolling = !1)
                        : p * p + f * f >= 25 && ((t = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI), (n.isScrolling = i.isHorizontal() ? t > o.touchAngle : 90 - t > o.touchAngle));
                }
                if ((n.isScrolling && i.emit("touchMoveOpposite", l), void 0 === n.startMoving && ((s.currentX === s.startX && s.currentY === s.startY) || (n.startMoving = !0)), n.isScrolling)) return void (n.isTouched = !1);
                if (!n.startMoving) return;
                (i.allowClick = !1),
                    !o.cssMode && l.cancelable && l.preventDefault(),
                    o.touchMoveStopPropagation && !o.nested && l.stopPropagation(),
                    n.isMoved ||
                        (o.loop && !o.cssMode && i.loopFix(),
                        (n.startTranslate = i.getTranslate()),
                        i.setTransition(0),
                        i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                        (n.allowMomentumBounce = !1),
                        !o.grabCursor || (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) || i.setGrabCursor(!0),
                        i.emit("sliderFirstMove", l)),
                    i.emit("sliderMove", l),
                    (n.isMoved = !0);
                let m = i.isHorizontal() ? p : f;
                (s.diff = m), (m *= o.touchRatio), r && (m = -m), (i.swipeDirection = m > 0 ? "prev" : "next"), (n.currentTranslate = m + n.startTranslate);
                let _ = !0,
                    g = o.resistanceRatio;
                if (
                    (o.touchReleaseOnEdges && (g = 0),
                    m > 0 && n.currentTranslate > i.minTranslate()
                        ? ((_ = !1), o.resistance && (n.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + n.startTranslate + m) ** g))
                        : m < 0 && n.currentTranslate < i.maxTranslate() && ((_ = !1), o.resistance && (n.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - n.startTranslate - m) ** g)),
                    _ && (l.preventedByNestedSwiper = !0),
                    !i.allowSlideNext && "next" === i.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate),
                    !i.allowSlidePrev && "prev" === i.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate),
                    i.allowSlidePrev || i.allowSlideNext || (n.currentTranslate = n.startTranslate),
                    o.threshold > 0)
                ) {
                    if (!(Math.abs(m) > o.threshold || n.allowThresholdMove)) return void (n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove)
                        return (n.allowThresholdMove = !0), (s.startX = s.currentX), (s.startY = s.currentY), (n.currentTranslate = n.startTranslate), void (s.diff = i.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                }
                o.followFinger &&
                    !o.cssMode &&
                    (((o.freeMode && o.freeMode.enabled && i.freeMode) || o.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()),
                    i.params.freeMode && o.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
                    i.updateProgress(n.currentTranslate),
                    i.setTranslate(n.currentTranslate));
            }
            function $(t) {
                const e = this,
                    i = e.touchEventsData,
                    { params: n, touches: o, rtlTranslate: s, slidesGrid: r, enabled: a } = e;
                if (!a) return;
                let l = t;
                if ((l.originalEvent && (l = l.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", l), (i.allowTouchCallbacks = !1), !i.isTouched))
                    return i.isMoved && n.grabCursor && e.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
                const h = w(),
                    u = h - i.touchStartTime;
                if (e.allowClick) {
                    const t = l.path || (l.composedPath && l.composedPath());
                    e.updateClickedSlide((t && t[0]) || l.target), e.emit("tap click", l), u < 300 && h - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", l);
                }
                if (
                    ((i.lastClickTime = w()),
                    b(() => {
                        e.destroyed || (e.allowClick = !0);
                    }),
                    !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === o.diff || i.currentTranslate === i.startTranslate)
                )
                    return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
                let c;
                if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (c = n.followFinger ? (s ? e.translate : -e.translate) : -i.currentTranslate), n.cssMode)) return;
                if (e.params.freeMode && n.freeMode.enabled) return void e.freeMode.onTouchEnd({ currentPos: c });
                let d = 0,
                    p = e.slidesSizesGrid[0];
                for (let t = 0; t < r.length; t += t < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = t < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    void 0 !== r[t + e] ? c >= r[t] && c < r[t + e] && ((d = t), (p = r[t + e] - r[t])) : c >= r[t] && ((d = t), (p = r[r.length - 1] - r[r.length - 2]));
                }
                let f = null,
                    m = null;
                n.rewind && (e.isBeginning ? (m = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1) : e.isEnd && (f = 0));
                const _ = (c - r[d]) / p,
                    g = d < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (u > n.longSwipesMs) {
                    if (!n.longSwipes) return void e.slideTo(e.activeIndex);
                    "next" === e.swipeDirection && (_ >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? f : d + g) : e.slideTo(d)),
                        "prev" === e.swipeDirection && (_ > 1 - n.longSwipesRatio ? e.slideTo(d + g) : null !== m && _ < 0 && Math.abs(_) > n.longSwipesRatio ? e.slideTo(m) : e.slideTo(d));
                } else {
                    if (!n.shortSwipes) return void e.slideTo(e.activeIndex);
                    e.navigation && (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
                        ? l.target === e.navigation.nextEl
                            ? e.slideTo(d + g)
                            : e.slideTo(d)
                        : ("next" === e.swipeDirection && e.slideTo(null !== f ? f : d + g), "prev" === e.swipeDirection && e.slideTo(null !== m ? m : d));
                }
            }
            function G() {
                const t = this,
                    { params: e, el: i } = t;
                if (i && 0 === i.offsetWidth) return;
                e.breakpoints && t.setBreakpoint();
                const { allowSlideNext: n, allowSlidePrev: o, snapGrid: s } = t;
                (t.allowSlideNext = !0),
                    (t.allowSlidePrev = !0),
                    t.updateSize(),
                    t.updateSlides(),
                    t.updateSlidesClasses(),
                    ("auto" === e.slidesPerView || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0),
                    t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(),
                    (t.allowSlidePrev = o),
                    (t.allowSlideNext = n),
                    t.params.watchOverflow && s !== t.snapGrid && t.checkOverflow();
            }
            function H(t) {
                const e = this;
                e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())));
            }
            function F() {
                const t = this,
                    { wrapperEl: e, rtlTranslate: i, enabled: n } = t;
                if (!n) return;
                let o;
                (t.previousTranslate = t.translate), t.isHorizontal() ? (t.translate = -e.scrollLeft) : (t.translate = -e.scrollTop), 0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
                const s = t.maxTranslate() - t.minTranslate();
                (o = 0 === s ? 0 : (t.translate - t.minTranslate()) / s), o !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1);
            }
            let W = !1;
            function V() {}
            const q = (t, e) => {
                const i = h(),
                    { params: n, touchEvents: o, el: s, wrapperEl: r, device: a, support: l } = t,
                    u = !!n.nested,
                    c = "on" === e ? "addEventListener" : "removeEventListener",
                    d = e;
                if (l.touch) {
                    const e = !("touchstart" !== o.start || !l.passiveListener || !n.passiveListeners) && { passive: !0, capture: !1 };
                    s[c](o.start, t.onTouchStart, e), s[c](o.move, t.onTouchMove, l.passiveListener ? { passive: !1, capture: u } : u), s[c](o.end, t.onTouchEnd, e), o.cancel && s[c](o.cancel, t.onTouchEnd, e);
                } else s[c](o.start, t.onTouchStart, !1), i[c](o.move, t.onTouchMove, u), i[c](o.end, t.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) && s[c]("click", t.onClick, !0),
                    n.cssMode && r[c]("scroll", t.onScroll),
                    n.updateOnWindowResize ? t[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", G, !0) : t[d]("observerUpdate", G, !0);
            };
            const U = {
                    attachEvents: function () {
                        const t = this,
                            e = h(),
                            { params: i, support: n } = t;
                        (t.onTouchStart = j.bind(t)),
                            (t.onTouchMove = R.bind(t)),
                            (t.onTouchEnd = $.bind(t)),
                            i.cssMode && (t.onScroll = F.bind(t)),
                            (t.onClick = H.bind(t)),
                            n.touch && !W && (e.addEventListener("touchstart", V), (W = !0)),
                            q(t, "on");
                    },
                    detachEvents: function () {
                        q(this, "off");
                    },
                },
                Y = (t, e) => t.grid && e.grid && e.grid.rows > 1;
            const X = {
                setBreakpoint: function () {
                    const t = this,
                        { activeIndex: e, initialized: i, loopedSlides: n = 0, params: o, $el: s } = t,
                        r = o.breakpoints;
                    if (!r || (r && 0 === Object.keys(r).length)) return;
                    const a = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
                    if (!a || t.currentBreakpoint === a) return;
                    const l = (a in r ? r[a] : void 0) || t.originalParams,
                        h = Y(t, o),
                        u = Y(t, l),
                        c = o.enabled;
                    h && !u
                        ? (s.removeClass(`${o.containerModifierClass}grid ${o.containerModifierClass}grid-column`), t.emitContainerClasses())
                        : !h &&
                            u &&
                            (s.addClass(`${o.containerModifierClass}grid`),
                            ((l.grid.fill && "column" === l.grid.fill) || (!l.grid.fill && "column" === o.grid.fill)) && s.addClass(`${o.containerModifierClass}grid-column`),
                            t.emitContainerClasses()),
                        ["navigation", "pagination", "scrollbar"].forEach((e) => {
                            const i = o[e] && o[e].enabled,
                                n = l[e] && l[e].enabled;
                            i && !n && t[e].disable(), !i && n && t[e].enable();
                        });
                    const d = l.direction && l.direction !== o.direction,
                        p = o.loop && (l.slidesPerView !== o.slidesPerView || d);
                    d && i && t.changeDirection(), C(t.params, l);
                    const f = t.params.enabled;
                    Object.assign(t, { allowTouchMove: t.params.allowTouchMove, allowSlideNext: t.params.allowSlideNext, allowSlidePrev: t.params.allowSlidePrev }),
                        c && !f ? t.disable() : !c && f && t.enable(),
                        (t.currentBreakpoint = a),
                        t.emit("_beforeBreakpoint", l),
                        p && i && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - n + t.loopedSlides, 0, !1)),
                        t.emit("breakpoint", l);
                },
                getBreakpoint: function (t, e = "window", i) {
                    if (!t || ("container" === e && !i)) return;
                    let n = !1;
                    const o = c(),
                        s = "window" === e ? o.innerHeight : i.clientHeight,
                        r = Object.keys(t).map((t) => {
                            if ("string" == typeof t && 0 === t.indexOf("@")) {
                                const e = parseFloat(t.substr(1));
                                return { value: s * e, point: t };
                            }
                            return { value: t, point: t };
                        });
                    r.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
                    for (let t = 0; t < r.length; t += 1) {
                        const { point: s, value: a } = r[t];
                        "window" === e ? o.matchMedia(`(min-width: ${a}px)`).matches && (n = s) : a <= i.clientWidth && (n = s);
                    }
                    return n || "max";
                },
            };
            const K = {
                addClasses: function () {
                    const t = this,
                        { classNames: e, params: i, rtl: n, $el: o, device: s, support: r } = t,
                        a = (function (t, e) {
                            const i = [];
                            return (
                                t.forEach((t) => {
                                    "object" == typeof t
                                        ? Object.keys(t).forEach((n) => {
                                                t[n] && i.push(e + n);
                                            })
                                        : "string" == typeof t && i.push(e + t);
                                }),
                                i
                            );
                        })(
                            [
                                "initialized",
                                i.direction,
                                { "pointer-events": !r.touch },
                                { "free-mode": t.params.freeMode && i.freeMode.enabled },
                                { autoheight: i.autoHeight },
                                { rtl: n },
                                { grid: i.grid && i.grid.rows > 1 },
                                { "grid-column": i.grid && i.grid.rows > 1 && "column" === i.grid.fill },
                                { android: s.android },
                                { ios: s.ios },
                                { "css-mode": i.cssMode },
                                { centered: i.cssMode && i.centeredSlides },
                                { "watch-progress": i.watchSlidesProgress },
                            ],
                            i.containerModifierClass
                        );
                    e.push(...a), o.addClass([...e].join(" ")), t.emitContainerClasses();
                },
                removeClasses: function () {
                    const { $el: t, classNames: e } = this;
                    t.removeClass(e.join(" ")), this.emitContainerClasses();
                },
            };
            const J = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: 0.5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: 0.85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1,
            };
            function Q(t, e) {
                return function (i = {}) {
                    const n = Object.keys(i)[0],
                        o = i[n];
                    "object" == typeof o && null !== o
                        ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === t[n] && (t[n] = { auto: !0 }),
                            n in t && "enabled" in o ? (!0 === t[n] && (t[n] = { enabled: !0 }), "object" != typeof t[n] || "enabled" in t[n] || (t[n].enabled = !0), t[n] || (t[n] = { enabled: !1 }), C(e, i)) : C(e, i))
                        : C(e, i);
                };
            }
            const tt = {
                    eventsEmitter: A,
                    update: I,
                    translate: B,
                    transition: {
                        setTransition: function (t, e) {
                            const i = this;
                            i.params.cssMode || i.$wrapperEl.transition(t), i.emit("setTransition", t, e);
                        },
                        transitionStart: function (t = !0, e) {
                            const i = this,
                                { params: n } = i;
                            n.cssMode || (n.autoHeight && i.updateAutoHeight(), Z({ swiper: i, runCallbacks: t, direction: e, step: "Start" }));
                        },
                        transitionEnd: function (t = !0, e) {
                            const i = this,
                                { params: n } = i;
                            (i.animating = !1), n.cssMode || (i.setTransition(0), Z({ swiper: i, runCallbacks: t, direction: e, step: "End" }));
                        },
                    },
                    slide: N,
                    loop: D,
                    grabCursor: {
                        setGrabCursor: function (t) {
                            const e = this;
                            if (e.support.touch || !e.params.simulateTouch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode) return;
                            const i = "container" === e.params.touchEventsTarget ? e.el : e.wrapperEl;
                            (i.style.cursor = "move"), (i.style.cursor = t ? "grabbing" : "grab");
                        },
                        unsetGrabCursor: function () {
                            const t = this;
                            t.support.touch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode || (t["container" === t.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
                        },
                    },
                    events: U,
                    breakpoints: X,
                    checkOverflow: {
                        checkOverflow: function () {
                            const t = this,
                                { isLocked: e, params: i } = t,
                                { slidesOffsetBefore: n } = i;
                            if (n) {
                                const e = t.slides.length - 1,
                                    i = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * n;
                                t.isLocked = t.size > i;
                            } else t.isLocked = 1 === t.snapGrid.length;
                            !0 === i.allowSlideNext && (t.allowSlideNext = !t.isLocked),
                                !0 === i.allowSlidePrev && (t.allowSlidePrev = !t.isLocked),
                                e && e !== t.isLocked && (t.isEnd = !1),
                                e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
                        },
                    },
                    classes: K,
                    images: {
                        loadImage: function (t, e, i, n, o, s) {
                            const r = c();
                            let a;
                            function l() {
                                s && s();
                            }
                            y(t).parent("picture")[0] || (t.complete && o) ? l() : e ? ((a = new r.Image()), (a.onload = l), (a.onerror = l), n && (a.sizes = n), i && (a.srcset = i), e && (a.src = e)) : l();
                        },
                        preloadImages: function () {
                            const t = this;
                            function e() {
                                null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")));
                            }
                            t.imagesToLoad = t.$el.find("img");
                            for (let i = 0; i < t.imagesToLoad.length; i += 1) {
                                const n = t.imagesToLoad[i];
                                t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e);
                            }
                        },
                    },
                },
                et = {};
            class it {
                constructor(...t) {
                    let e, i;
                    if (
                        (1 === t.length && t[0].constructor && "Object" === Object.prototype.toString.call(t[0]).slice(8, -1) ? (i = t[0]) : ([e, i] = t),
                        i || (i = {}),
                        (i = C({}, i)),
                        e && !i.el && (i.el = e),
                        i.el && y(i.el).length > 1)
                    ) {
                        const t = [];
                        return (
                            y(i.el).each((e) => {
                                const n = C({}, i, { el: e });
                                t.push(new it(n));
                            }),
                            t
                        );
                    }
                    const n = this;
                    (n.__swiper__ = !0),
                        (n.support = E()),
                        (n.device = z({ userAgent: i.userAgent })),
                        (n.browser = O()),
                        (n.eventsListeners = {}),
                        (n.eventsAnyListeners = []),
                        (n.modules = [...n.__modules__]),
                        i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
                    const o = {};
                    n.modules.forEach((t) => {
                        t({ swiper: n, extendParams: Q(i, o), on: n.on.bind(n), once: n.once.bind(n), off: n.off.bind(n), emit: n.emit.bind(n) });
                    });
                    const s = C({}, J, o);
                    return (
                        (n.params = C({}, s, et, i)),
                        (n.originalParams = C({}, n.params)),
                        (n.passedParams = C({}, i)),
                        n.params &&
                            n.params.on &&
                            Object.keys(n.params.on).forEach((t) => {
                                n.on(t, n.params.on[t]);
                            }),
                        n.params && n.params.onAny && n.onAny(n.params.onAny),
                        (n.$ = y),
                        Object.assign(n, {
                            enabled: n.params.enabled,
                            el: e,
                            classNames: [],
                            slides: y(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: () => "horizontal" === n.params.direction,
                            isVertical: () => "vertical" === n.params.direction,
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: n.params.allowSlideNext,
                            allowSlidePrev: n.params.allowSlidePrev,
                            touchEvents: (function () {
                                const t = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                    e = ["pointerdown", "pointermove", "pointerup"];
                                return (
                                    (n.touchEventsTouch = { start: t[0], move: t[1], end: t[2], cancel: t[3] }),
                                    (n.touchEventsDesktop = { start: e[0], move: e[1], end: e[2] }),
                                    n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop
                                );
                            })(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                focusableElements: n.params.focusableElements,
                                lastClickTime: w(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: n.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        n.emit("_swiper"),
                        n.params.init && n.init(),
                        n
                    );
                }
                enable() {
                    const t = this;
                    t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
                }
                disable() {
                    const t = this;
                    t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
                }
                setProgress(t, e) {
                    const i = this;
                    t = Math.min(Math.max(t, 0), 1);
                    const n = i.minTranslate(),
                        o = (i.maxTranslate() - n) * t + n;
                    i.translateTo(o, void 0 === e ? 0 : e), i.updateActiveIndex(), i.updateSlidesClasses();
                }
                emitContainerClasses() {
                    const t = this;
                    if (!t.params._emitClasses || !t.el) return;
                    const e = t.el.className.split(" ").filter((e) => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass));
                    t.emit("_containerClasses", e.join(" "));
                }
                getSlideClasses(t) {
                    const e = this;
                    return e.destroyed
                        ? ""
                        : t.className
                                .split(" ")
                                .filter((t) => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass))
                                .join(" ");
                }
                emitSlidesClasses() {
                    const t = this;
                    if (!t.params._emitClasses || !t.el) return;
                    const e = [];
                    t.slides.each((i) => {
                        const n = t.getSlideClasses(i);
                        e.push({ slideEl: i, classNames: n }), t.emit("_slideClass", i, n);
                    }),
                        t.emit("_slideClasses", e);
                }
                slidesPerViewDynamic(t = "current", e = !1) {
                    const { params: i, slides: n, slidesGrid: o, slidesSizesGrid: s, size: r, activeIndex: a } = this;
                    let l = 1;
                    if (i.centeredSlides) {
                        let t,
                            e = n[a].swiperSlideSize;
                        for (let i = a + 1; i < n.length; i += 1) n[i] && !t && ((e += n[i].swiperSlideSize), (l += 1), e > r && (t = !0));
                        for (let i = a - 1; i >= 0; i -= 1) n[i] && !t && ((e += n[i].swiperSlideSize), (l += 1), e > r && (t = !0));
                    } else if ("current" === t)
                        for (let t = a + 1; t < n.length; t += 1) {
                            (e ? o[t] + s[t] - o[a] < r : o[t] - o[a] < r) && (l += 1);
                        }
                    else
                        for (let t = a - 1; t >= 0; t -= 1) {
                            o[a] - o[t] < r && (l += 1);
                        }
                    return l;
                }
                update() {
                    const t = this;
                    if (!t || t.destroyed) return;
                    const { snapGrid: e, params: i } = t;
                    function n() {
                        const e = t.rtlTranslate ? -1 * t.translate : t.translate,
                            i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                        t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses();
                    }
                    let o;
                    i.breakpoints && t.setBreakpoint(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.updateProgress(),
                        t.updateSlidesClasses(),
                        t.params.freeMode && t.params.freeMode.enabled
                            ? (n(), t.params.autoHeight && t.updateAutoHeight())
                            : ((o = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)), o || n()),
                        i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
                        t.emit("update");
                }
                changeDirection(t, e = !0) {
                    const i = this,
                        n = i.params.direction;
                    return (
                        t || (t = "horizontal" === n ? "vertical" : "horizontal"),
                        t === n ||
                            ("horizontal" !== t && "vertical" !== t) ||
                            (i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${t}`),
                            i.emitContainerClasses(),
                            (i.params.direction = t),
                            i.slides.each((e) => {
                                "vertical" === t ? (e.style.width = "") : (e.style.height = "");
                            }),
                            i.emit("changeDirection"),
                            e && i.update()),
                        i
                    );
                }
                changeLanguageDirection(t) {
                    const e = this;
                    (e.rtl && "rtl" === t) ||
                        (!e.rtl && "ltr" === t) ||
                        ((e.rtl = "rtl" === t),
                        (e.rtlTranslate = "horizontal" === e.params.direction && e.rtl),
                        e.rtl ? (e.$el.addClass(`${e.params.containerModifierClass}rtl`), (e.el.dir = "rtl")) : (e.$el.removeClass(`${e.params.containerModifierClass}rtl`), (e.el.dir = "ltr")),
                        e.update());
                }
                mount(t) {
                    const e = this;
                    if (e.mounted) return !0;
                    const i = y(t || e.params.el);
                    if (!(t = i[0])) return !1;
                    t.swiper = e;
                    const n = () => `.${(e.params.wrapperClass || "").trim().split(" ").join(".")}`;
                    let o = (() => {
                        if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                            const e = y(t.shadowRoot.querySelector(n()));
                            return (e.children = (t) => i.children(t)), e;
                        }
                        return i.children ? i.children(n()) : y(i).children(n());
                    })();
                    if (0 === o.length && e.params.createElements) {
                        const t = h().createElement("div");
                        (o = y(t)),
                            (t.className = e.params.wrapperClass),
                            i.append(t),
                            i.children(`.${e.params.slideClass}`).each((t) => {
                                o.append(t);
                            });
                    }
                    return (
                        Object.assign(e, {
                            $el: i,
                            el: t,
                            $wrapperEl: o,
                            wrapperEl: o[0],
                            mounted: !0,
                            rtl: "rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction"),
                            rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === i.css("direction")),
                            wrongRTL: "-webkit-box" === o.css("display"),
                        }),
                        !0
                    );
                }
                init(t) {
                    const e = this;
                    if (e.initialized) return e;
                    return (
                        !1 === e.mount(t) ||
                            (e.emit("beforeInit"),
                            e.params.breakpoints && e.setBreakpoint(),
                            e.addClasses(),
                            e.params.loop && e.loopCreate(),
                            e.updateSize(),
                            e.updateSlides(),
                            e.params.watchOverflow && e.checkOverflow(),
                            e.params.grabCursor && e.enabled && e.setGrabCursor(),
                            e.params.preloadImages && e.preloadImages(),
                            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0),
                            e.attachEvents(),
                            (e.initialized = !0),
                            e.emit("init"),
                            e.emit("afterInit")),
                        e
                    );
                }
                destroy(t = !0, e = !0) {
                    const i = this,
                        { params: n, $el: o, $wrapperEl: s, slides: r } = i;
                    return (
                        void 0 === i.params ||
                            i.destroyed ||
                            (i.emit("beforeDestroy"),
                            (i.initialized = !1),
                            i.detachEvents(),
                            n.loop && i.loopDestroy(),
                            e &&
                                (i.removeClasses(),
                                o.removeAttr("style"),
                                s.removeAttr("style"),
                                r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                            i.emit("destroy"),
                            Object.keys(i.eventsListeners).forEach((t) => {
                                i.off(t);
                            }),
                            !1 !== t &&
                                ((i.$el[0].swiper = null),
                                (function (t) {
                                    const e = t;
                                    Object.keys(e).forEach((t) => {
                                        try {
                                            e[t] = null;
                                        } catch (t) {}
                                        try {
                                            delete e[t];
                                        } catch (t) {}
                                    });
                                })(i)),
                            (i.destroyed = !0)),
                        null
                    );
                }
                static extendDefaults(t) {
                    C(et, t);
                }
                static get extendedDefaults() {
                    return et;
                }
                static get defaults() {
                    return J;
                }
                static installModule(t) {
                    it.prototype.__modules__ || (it.prototype.__modules__ = []);
                    const e = it.prototype.__modules__;
                    "function" == typeof t && e.indexOf(t) < 0 && e.push(t);
                }
                static use(t) {
                    return Array.isArray(t) ? (t.forEach((t) => it.installModule(t)), it) : (it.installModule(t), it);
                }
            }
            Object.keys(tt).forEach((t) => {
                Object.keys(tt[t]).forEach((e) => {
                    it.prototype[e] = tt[t][e];
                });
            }),
                it.use([
                    function ({ swiper: t, on: e, emit: i }) {
                        const n = c();
                        let o = null,
                            s = null;
                        const r = () => {
                                t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
                            },
                            a = () => {
                                t && !t.destroyed && t.initialized && i("orientationchange");
                            };
                        e("init", () => {
                            t.params.resizeObserver && void 0 !== n.ResizeObserver
                                ? t &&
                                    !t.destroyed &&
                                    t.initialized &&
                                    ((o = new ResizeObserver((e) => {
                                        s = n.requestAnimationFrame(() => {
                                            const { width: i, height: n } = t;
                                            let o = i,
                                                s = n;
                                            e.forEach(({ contentBoxSize: e, contentRect: i, target: n }) => {
                                                (n && n !== t.el) || ((o = i ? i.width : (e[0] || e).inlineSize), (s = i ? i.height : (e[0] || e).blockSize));
                                            }),
                                                (o === i && s === n) || r();
                                        });
                                    })),
                                    o.observe(t.el))
                                : (n.addEventListener("resize", r), n.addEventListener("orientationchange", a));
                        }),
                            e("destroy", () => {
                                s && n.cancelAnimationFrame(s), o && o.unobserve && t.el && (o.unobserve(t.el), (o = null)), n.removeEventListener("resize", r), n.removeEventListener("orientationchange", a);
                            });
                    },
                    function ({ swiper: t, extendParams: e, on: i, emit: n }) {
                        const o = [],
                            s = c(),
                            r = (t, e = {}) => {
                                const i = new (s.MutationObserver || s.WebkitMutationObserver)((t) => {
                                    if (1 === t.length) return void n("observerUpdate", t[0]);
                                    const e = function () {
                                        n("observerUpdate", t[0]);
                                    };
                                    s.requestAnimationFrame ? s.requestAnimationFrame(e) : s.setTimeout(e, 0);
                                });
                                i.observe(t, { attributes: void 0 === e.attributes || e.attributes, childList: void 0 === e.childList || e.childList, characterData: void 0 === e.characterData || e.characterData }), o.push(i);
                            };
                        e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
                            i("init", () => {
                                if (t.params.observer) {
                                    if (t.params.observeParents) {
                                        const e = t.$el.parents();
                                        for (let t = 0; t < e.length; t += 1) r(e[t]);
                                    }
                                    r(t.$el[0], { childList: t.params.observeSlideChildren }), r(t.$wrapperEl[0], { attributes: !1 });
                                }
                            }),
                            i("destroy", () => {
                                o.forEach((t) => {
                                    t.disconnect();
                                }),
                                    o.splice(0, o.length);
                            });
                    },
                ]);
            const nt = it;
            function ot({ swiper: t, extendParams: e, on: i, emit: n }) {
                const o = h(),
                    s = c();
                function r(e) {
                    if (!t.enabled) return;
                    const { rtlTranslate: i } = t;
                    let r = e;
                    r.originalEvent && (r = r.originalEvent);
                    const a = r.keyCode || r.charCode,
                        l = t.params.keyboard.pageUpDown,
                        h = l && 33 === a,
                        u = l && 34 === a,
                        c = 37 === a,
                        d = 39 === a,
                        p = 38 === a,
                        f = 40 === a;
                    if (!t.allowSlideNext && ((t.isHorizontal() && d) || (t.isVertical() && f) || u)) return !1;
                    if (!t.allowSlidePrev && ((t.isHorizontal() && c) || (t.isVertical() && p) || h)) return !1;
                    if (
                        !(
                            r.shiftKey ||
                            r.altKey ||
                            r.ctrlKey ||
                            r.metaKey ||
                            (o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))
                        )
                    ) {
                        if (t.params.keyboard.onlyInViewport && (h || u || c || d || p || f)) {
                            let e = !1;
                            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                            const n = t.$el,
                                o = n[0].clientWidth,
                                r = n[0].clientHeight,
                                a = s.innerWidth,
                                l = s.innerHeight,
                                h = t.$el.offset();
                            i && (h.left -= t.$el[0].scrollLeft);
                            const u = [
                                [h.left, h.top],
                                [h.left + o, h.top],
                                [h.left, h.top + r],
                                [h.left + o, h.top + r],
                            ];
                            for (let t = 0; t < u.length; t += 1) {
                                const i = u[t];
                                if (i[0] >= 0 && i[0] <= a && i[1] >= 0 && i[1] <= l) {
                                    if (0 === i[0] && 0 === i[1]) continue;
                                    e = !0;
                                }
                            }
                            if (!e) return;
                        }
                        t.isHorizontal()
                            ? ((h || u || c || d) && (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)), (((u || d) && !i) || ((h || c) && i)) && t.slideNext(), (((h || c) && !i) || ((u || d) && i)) && t.slidePrev())
                            : ((h || u || p || f) && (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)), (u || f) && t.slideNext(), (h || p) && t.slidePrev()),
                            n("keyPress", a);
                    }
                }
                function a() {
                    t.keyboard.enabled || (y(o).on("keydown", r), (t.keyboard.enabled = !0));
                }
                function l() {
                    t.keyboard.enabled && (y(o).off("keydown", r), (t.keyboard.enabled = !1));
                }
                (t.keyboard = { enabled: !1 }),
                    e({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
                    i("init", () => {
                        t.params.keyboard.enabled && a();
                    }),
                    i("destroy", () => {
                        t.keyboard.enabled && l();
                    }),
                    Object.assign(t.keyboard, { enable: a, disable: l });
            }
            function st(t, e, i, n) {
                const o = h();
                return (
                    t.params.createElements &&
                        Object.keys(n).forEach((s) => {
                            if (!i[s] && !0 === i.auto) {
                                let r = t.$el.children(`.${n[s]}`)[0];
                                r || ((r = o.createElement("div")), (r.className = n[s]), t.$el.append(r)), (i[s] = r), (e[s] = r);
                            }
                        }),
                    i
                );
            }
            function rt({ swiper: t, extendParams: e, on: i, emit: n }) {
                function o(e) {
                    let i;
                    return e && ((i = y(e)), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.$el.find(e).length && (i = t.$el.find(e))), i;
                }
                function s(e, i) {
                    const n = t.params.navigation;
                    e &&
                        e.length > 0 &&
                        (e[i ? "addClass" : "removeClass"](n.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](n.lockClass));
                }
                function r() {
                    if (t.params.loop) return;
                    const { $nextEl: e, $prevEl: i } = t.navigation;
                    s(i, t.isBeginning && !t.params.rewind), s(e, t.isEnd && !t.params.rewind);
                }
                function a(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), n("navigationPrev"));
                }
                function l(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), n("navigationNext"));
                }
                function h() {
                    const e = t.params.navigation;
                    if (((t.params.navigation = st(t, t.originalParams.navigation, t.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), !e.nextEl && !e.prevEl)) return;
                    const i = o(e.nextEl),
                        n = o(e.prevEl);
                    i && i.length > 0 && i.on("click", l),
                        n && n.length > 0 && n.on("click", a),
                        Object.assign(t.navigation, { $nextEl: i, nextEl: i && i[0], $prevEl: n, prevEl: n && n[0] }),
                        t.enabled || (i && i.addClass(e.lockClass), n && n.addClass(e.lockClass));
                }
                function u() {
                    const { $nextEl: e, $prevEl: i } = t.navigation;
                    e && e.length && (e.off("click", l), e.removeClass(t.params.navigation.disabledClass)), i && i.length && (i.off("click", a), i.removeClass(t.params.navigation.disabledClass));
                }
                e({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled",
                    },
                }),
                    (t.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
                    i("init", () => {
                        !1 === t.params.navigation.enabled ? c() : (h(), r());
                    }),
                    i("toEdge fromEdge lock unlock", () => {
                        r();
                    }),
                    i("destroy", () => {
                        u();
                    }),
                    i("enable disable", () => {
                        const { $nextEl: e, $prevEl: i } = t.navigation;
                        e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), i && i[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
                    }),
                    i("click", (e, i) => {
                        const { $nextEl: o, $prevEl: s } = t.navigation,
                            r = i.target;
                        if (t.params.navigation.hideOnClick && !y(r).is(s) && !y(r).is(o)) {
                            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
                            let e;
                            o ? (e = o.hasClass(t.params.navigation.hiddenClass)) : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
                                n(!0 === e ? "navigationShow" : "navigationHide"),
                                o && o.toggleClass(t.params.navigation.hiddenClass),
                                s && s.toggleClass(t.params.navigation.hiddenClass);
                        }
                    });
                const c = () => {
                    t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
                };
                Object.assign(t.navigation, {
                    enable: () => {
                        t.$el.removeClass(t.params.navigation.navigationDisabledClass), h(), r();
                    },
                    disable: c,
                    update: r,
                    init: h,
                    destroy: u,
                });
            }
            function at(t = "") {
                return `.${t
                    .trim()
                    .replace(/([\.:!\/])/g, "\\$1")
                    .replace(/ /g, ".")}`;
            }
            function lt({ swiper: t, extendParams: e, on: i, emit: n }) {
                const o = "swiper-pagination";
                let s;
                e({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (t) => t,
                        formatFractionTotal: (t) => t,
                        bulletClass: `${o}-bullet`,
                        bulletActiveClass: `${o}-bullet-active`,
                        modifierClass: `${o}-`,
                        currentClass: `${o}-current`,
                        totalClass: `${o}-total`,
                        hiddenClass: `${o}-hidden`,
                        progressbarFillClass: `${o}-progressbar-fill`,
                        progressbarOppositeClass: `${o}-progressbar-opposite`,
                        clickableClass: `${o}-clickable`,
                        lockClass: `${o}-lock`,
                        horizontalClass: `${o}-horizontal`,
                        verticalClass: `${o}-vertical`,
                        paginationDisabledClass: `${o}-disabled`,
                    },
                }),
                    (t.pagination = { el: null, $el: null, bullets: [] });
                let r = 0;
                function a() {
                    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
                }
                function l(e, i) {
                    const { bulletActiveClass: n } = t.params.pagination;
                    e[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`);
                }
                function h() {
                    const e = t.rtl,
                        i = t.params.pagination;
                    if (a()) return;
                    const o = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        h = t.pagination.$el;
                    let u;
                    const c = t.params.loop ? Math.ceil((o - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (
                        (t.params.loop
                            ? ((u = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)),
                                u > o - 1 - 2 * t.loopedSlides && (u -= o - 2 * t.loopedSlides),
                                u > c - 1 && (u -= c),
                                u < 0 && "bullets" !== t.params.paginationType && (u = c + u))
                            : (u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
                        "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0)
                    ) {
                        const n = t.pagination.bullets;
                        let o, a, c;
                        if (
                            (i.dynamicBullets &&
                                ((s = n.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                h.css(t.isHorizontal() ? "width" : "height", s * (i.dynamicMainBullets + 4) + "px"),
                                i.dynamicMainBullets > 1 && void 0 !== t.previousIndex && ((r += u - (t.previousIndex - t.loopedSlides || 0)), r > i.dynamicMainBullets - 1 ? (r = i.dynamicMainBullets - 1) : r < 0 && (r = 0)),
                                (o = Math.max(u - r, 0)),
                                (a = o + (Math.min(n.length, i.dynamicMainBullets) - 1)),
                                (c = (a + o) / 2)),
                            n.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((t) => `${i.bulletActiveClass}${t}`).join(" ")),
                            h.length > 1)
                        )
                            n.each((t) => {
                                const e = y(t),
                                    n = e.index();
                                n === u && e.addClass(i.bulletActiveClass), i.dynamicBullets && (n >= o && n <= a && e.addClass(`${i.bulletActiveClass}-main`), n === o && l(e, "prev"), n === a && l(e, "next"));
                            });
                        else {
                            const e = n.eq(u),
                                s = e.index();
                            if ((e.addClass(i.bulletActiveClass), i.dynamicBullets)) {
                                const e = n.eq(o),
                                    r = n.eq(a);
                                for (let t = o; t <= a; t += 1) n.eq(t).addClass(`${i.bulletActiveClass}-main`);
                                if (t.params.loop)
                                    if (s >= n.length) {
                                        for (let t = i.dynamicMainBullets; t >= 0; t -= 1) n.eq(n.length - t).addClass(`${i.bulletActiveClass}-main`);
                                        n.eq(n.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`);
                                    } else l(e, "prev"), l(r, "next");
                                else l(e, "prev"), l(r, "next");
                            }
                        }
                        if (i.dynamicBullets) {
                            const o = Math.min(n.length, i.dynamicMainBullets + 4),
                                r = (s * o - s) / 2 - c * s,
                                a = e ? "right" : "left";
                            n.css(t.isHorizontal() ? a : "top", `${r}px`);
                        }
                    }
                    if (("fraction" === i.type && (h.find(at(i.currentClass)).text(i.formatFractionCurrent(u + 1)), h.find(at(i.totalClass)).text(i.formatFractionTotal(c))), "progressbar" === i.type)) {
                        let e;
                        e = i.progressbarOpposite ? (t.isHorizontal() ? "vertical" : "horizontal") : t.isHorizontal() ? "horizontal" : "vertical";
                        const n = (u + 1) / c;
                        let o = 1,
                            s = 1;
                        "horizontal" === e ? (o = n) : (s = n), h.find(at(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${s})`).transition(t.params.speed);
                    }
                    "custom" === i.type && i.renderCustom ? (h.html(i.renderCustom(t, u + 1, c)), n("paginationRender", h[0])) : n("paginationUpdate", h[0]),
                        t.params.watchOverflow && t.enabled && h[t.isLocked ? "addClass" : "removeClass"](i.lockClass);
                }
                function u() {
                    const e = t.params.pagination;
                    if (a()) return;
                    const i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        o = t.pagination.$el;
                    let s = "";
                    if ("bullets" === e.type) {
                        let n = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && n > i && (n = i);
                        for (let i = 0; i < n; i += 1) e.renderBullet ? (s += e.renderBullet.call(t, i, e.bulletClass)) : (s += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
                        o.html(s), (t.pagination.bullets = o.find(at(e.bulletClass)));
                    }
                    "fraction" === e.type && ((s = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), o.html(s)),
                        "progressbar" === e.type && ((s = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), o.html(s)),
                        "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
                }
                function c() {
                    t.params.pagination = st(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" });
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let i = y(e.el);
                    0 !== i.length &&
                        (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && ((i = t.$el.find(e.el)), i.length > 1 && (i = i.filter((e) => y(e).parents(".swiper")[0] === t.el))),
                        "bullets" === e.type && e.clickable && i.addClass(e.clickableClass),
                        i.addClass(e.modifierClass + e.type),
                        i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                        "bullets" === e.type && e.dynamicBullets && (i.addClass(`${e.modifierClass}${e.type}-dynamic`), (r = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                        "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass),
                        e.clickable &&
                            i.on("click", at(e.bulletClass), function (e) {
                                e.preventDefault();
                                let i = y(this).index() * t.params.slidesPerGroup;
                                t.params.loop && (i += t.loopedSlides), t.slideTo(i);
                            }),
                        Object.assign(t.pagination, { $el: i, el: i[0] }),
                        t.enabled || i.addClass(e.lockClass));
                }
                function d() {
                    const e = t.params.pagination;
                    if (a()) return;
                    const i = t.pagination.$el;
                    i.removeClass(e.hiddenClass),
                        i.removeClass(e.modifierClass + e.type),
                        i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                        t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass),
                        e.clickable && i.off("click", at(e.bulletClass));
                }
                i("init", () => {
                    !1 === t.params.pagination.enabled ? p() : (c(), u(), h());
                }),
                    i("activeIndexChange", () => {
                        (t.params.loop || void 0 === t.snapIndex) && h();
                    }),
                    i("snapIndexChange", () => {
                        t.params.loop || h();
                    }),
                    i("slidesLengthChange", () => {
                        t.params.loop && (u(), h());
                    }),
                    i("snapGridLengthChange", () => {
                        t.params.loop || (u(), h());
                    }),
                    i("destroy", () => {
                        d();
                    }),
                    i("enable disable", () => {
                        const { $el: e } = t.pagination;
                        e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass);
                    }),
                    i("lock unlock", () => {
                        h();
                    }),
                    i("click", (e, i) => {
                        const o = i.target,
                            { $el: s } = t.pagination;
                        if (t.params.pagination.el && t.params.pagination.hideOnClick && s && s.length > 0 && !y(o).hasClass(t.params.pagination.bulletClass)) {
                            if (t.navigation && ((t.navigation.nextEl && o === t.navigation.nextEl) || (t.navigation.prevEl && o === t.navigation.prevEl))) return;
                            const e = s.hasClass(t.params.pagination.hiddenClass);
                            n(!0 === e ? "paginationShow" : "paginationHide"), s.toggleClass(t.params.pagination.hiddenClass);
                        }
                    });
                const p = () => {
                    t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), d();
                };
                Object.assign(t.pagination, {
                    enable: () => {
                        t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), c(), u(), h();
                    },
                    disable: p,
                    render: u,
                    update: h,
                    init: c,
                    destroy: d,
                });
            }
            function ht({ swiper: t, extendParams: e, on: i, emit: n }) {
                e({
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                }),
                    (t.lazy = {});
                let o = !1,
                    s = !1;
                function r(e, i = !0) {
                    const o = t.params.lazy;
                    if (void 0 === e) return;
                    if (0 === t.slides.length) return;
                    const s = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                        a = s.find(`.${o.elementClass}:not(.${o.loadedClass}):not(.${o.loadingClass})`);
                    !s.hasClass(o.elementClass) || s.hasClass(o.loadedClass) || s.hasClass(o.loadingClass) || a.push(s[0]),
                        0 !== a.length &&
                            a.each((e) => {
                                const a = y(e);
                                a.addClass(o.loadingClass);
                                const l = a.attr("data-background"),
                                    h = a.attr("data-src"),
                                    u = a.attr("data-srcset"),
                                    c = a.attr("data-sizes"),
                                    d = a.parent("picture");
                                t.loadImage(a[0], h || l, u, c, !1, () => {
                                    if (null != t && t && (!t || t.params) && !t.destroyed) {
                                        if (
                                            (l
                                                ? (a.css("background-image", `url("${l}")`), a.removeAttr("data-background"))
                                                : (u && (a.attr("srcset", u), a.removeAttr("data-srcset")),
                                                    c && (a.attr("sizes", c), a.removeAttr("data-sizes")),
                                                    d.length &&
                                                        d.children("source").each((t) => {
                                                            const e = y(t);
                                                            e.attr("data-srcset") && (e.attr("srcset", e.attr("data-srcset")), e.removeAttr("data-srcset"));
                                                        }),
                                                    h && (a.attr("src", h), a.removeAttr("data-src"))),
                                            a.addClass(o.loadedClass).removeClass(o.loadingClass),
                                            s.find(`.${o.preloaderClass}`).remove(),
                                            t.params.loop && i)
                                        ) {
                                            const e = s.attr("data-swiper-slide-index");
                                            if (s.hasClass(t.params.slideDuplicateClass)) {
                                                r(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1);
                                            } else {
                                                r(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1);
                                            }
                                        }
                                        n("lazyImageReady", s[0], a[0]), t.params.autoHeight && t.updateAutoHeight();
                                    }
                                }),
                                    n("lazyImageLoad", s[0], a[0]);
                            });
                }
                function a() {
                    const { $wrapperEl: e, params: i, slides: n, activeIndex: o } = t,
                        a = t.virtual && i.virtual.enabled,
                        l = i.lazy;
                    let h = i.slidesPerView;
                    function u(t) {
                        if (a) {
                            if (e.children(`.${i.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0;
                        } else if (n[t]) return !0;
                        return !1;
                    }
                    function c(t) {
                        return a ? y(t).attr("data-swiper-slide-index") : y(t).index();
                    }
                    if (("auto" === h && (h = 0), s || (s = !0), t.params.watchSlidesProgress))
                        e.children(`.${i.slideVisibleClass}`).each((t) => {
                            r(a ? y(t).attr("data-swiper-slide-index") : y(t).index());
                        });
                    else if (h > 1) for (let t = o; t < o + h; t += 1) u(t) && r(t);
                    else r(o);
                    if (l.loadPrevNext)
                        if (h > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
                            const t = l.loadPrevNextAmount,
                                e = Math.ceil(h),
                                i = Math.min(o + e + Math.max(t, e), n.length),
                                s = Math.max(o - Math.max(e, t), 0);
                            for (let t = o + e; t < i; t += 1) u(t) && r(t);
                            for (let t = s; t < o; t += 1) u(t) && r(t);
                        } else {
                            const t = e.children(`.${i.slideNextClass}`);
                            t.length > 0 && r(c(t));
                            const n = e.children(`.${i.slidePrevClass}`);
                            n.length > 0 && r(c(n));
                        }
                }
                function l() {
                    const e = c();
                    if (!t || t.destroyed) return;
                    const i = t.params.lazy.scrollingElement ? y(t.params.lazy.scrollingElement) : y(e),
                        n = i[0] === e,
                        s = n ? e.innerWidth : i[0].offsetWidth,
                        r = n ? e.innerHeight : i[0].offsetHeight,
                        h = t.$el.offset(),
                        { rtlTranslate: u } = t;
                    let d = !1;
                    u && (h.left -= t.$el[0].scrollLeft);
                    const p = [
                        [h.left, h.top],
                        [h.left + t.width, h.top],
                        [h.left, h.top + t.height],
                        [h.left + t.width, h.top + t.height],
                    ];
                    for (let t = 0; t < p.length; t += 1) {
                        const e = p[t];
                        if (e[0] >= 0 && e[0] <= s && e[1] >= 0 && e[1] <= r) {
                            if (0 === e[0] && 0 === e[1]) continue;
                            d = !0;
                        }
                    }
                    const f = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                    d ? (a(), i.off("scroll", l, f)) : o || ((o = !0), i.on("scroll", l, f));
                }
                i("beforeInit", () => {
                    t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
                }),
                    i("init", () => {
                        t.params.lazy.enabled && (t.params.lazy.checkInView ? l() : a());
                    }),
                    i("scroll", () => {
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && a();
                    }),
                    i("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                        t.params.lazy.enabled && (t.params.lazy.checkInView ? l() : a());
                    }),
                    i("transitionStart", () => {
                        t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || (!t.params.lazy.loadOnTransitionStart && !s)) && (t.params.lazy.checkInView ? l() : a());
                    }),
                    i("transitionEnd", () => {
                        t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? l() : a());
                    }),
                    i("slideChange", () => {
                        const { lazy: e, cssMode: i, watchSlidesProgress: n, touchReleaseOnEdges: o, resistanceRatio: s } = t.params;
                        e.enabled && (i || (n && (o || 0 === s))) && a();
                    }),
                    i("destroy", () => {
                        t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass);
                    }),
                    Object.assign(t.lazy, { load: a, loadInSlide: r });
            }
            function ut(t, e) {
                return t.transformEl ? e.find(t.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : e;
            }
            function ct({ swiper: t, extendParams: e, on: i }) {
                e({ fadeEffect: { crossFade: !1, transformEl: null } });
                !(function (t) {
                    const { effect: e, swiper: i, on: n, setTranslate: o, setTransition: s, overwriteParams: r, perspective: a, recreateShadows: l, getEffectParams: h } = t;
                    let u;
                    n("beforeInit", () => {
                        if (i.params.effect !== e) return;
                        i.classNames.push(`${i.params.containerModifierClass}${e}`), a && a() && i.classNames.push(`${i.params.containerModifierClass}3d`);
                        const t = r ? r() : {};
                        Object.assign(i.params, t), Object.assign(i.originalParams, t);
                    }),
                        n("setTranslate", () => {
                            i.params.effect === e && o();
                        }),
                        n("setTransition", (t, n) => {
                            i.params.effect === e && s(n);
                        }),
                        n("transitionEnd", () => {
                            if (i.params.effect === e && l) {
                                if (!h || !h().slideShadows) return;
                                i.slides.each((t) => {
                                    i.$(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
                                }),
                                    l();
                            }
                        }),
                        n("virtualUpdate", () => {
                            i.params.effect === e &&
                                (i.slides.length || (u = !0),
                                requestAnimationFrame(() => {
                                    u && i.slides && i.slides.length && (o(), (u = !1));
                                }));
                        });
                })({
                    effect: "fade",
                    swiper: t,
                    on: i,
                    setTranslate: () => {
                        const { slides: e } = t,
                            i = t.params.fadeEffect;
                        for (let n = 0; n < e.length; n += 1) {
                            const e = t.slides.eq(n);
                            let o = -e[0].swiperSlideOffset;
                            t.params.virtualTranslate || (o -= t.translate);
                            let s = 0;
                            t.isHorizontal() || ((s = o), (o = 0));
                            const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                            ut(i, e).css({ opacity: r }).transform(`translate3d(${o}px, ${s}px, 0px)`);
                        }
                    },
                    setTransition: (e) => {
                        const { transformEl: i } = t.params.fadeEffect;
                        (i ? t.slides.find(i) : t.slides).transition(e),
                            (function ({ swiper: t, duration: e, transformEl: i, allSlides: n }) {
                                const { slides: o, activeIndex: s, $wrapperEl: r } = t;
                                if (t.params.virtualTranslate && 0 !== e) {
                                    let e,
                                        a = !1;
                                    (e = n ? (i ? o.find(i) : o) : i ? o.eq(s).find(i) : o.eq(s)),
                                        e.transitionEnd(() => {
                                            if (a) return;
                                            if (!t || t.destroyed) return;
                                            (a = !0), (t.animating = !1);
                                            const e = ["webkitTransitionEnd", "transitionend"];
                                            for (let t = 0; t < e.length; t += 1) r.trigger(e[t]);
                                        });
                                }
                            })({ swiper: t, duration: e, transformEl: i, allSlides: !0 });
                    },
                    overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode }),
                });
            }
            function dt(t) {
                return (
                    (dt =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    dt(t)
                );
            }
            function pt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== dt(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== dt(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === dt(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }
            var ft = (function () {
                function t() {
                    var e = this;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        document.querySelectorAll(".statements-carousel .swiper").forEach(function (t) {
                            e.init(t);
                        });
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "init",
                            value: function (t) {
                                var e = JSON.parse(t.dataset.slides);
                                new nt(t, {
                                    modules: [rt, lt, ot, ct, ht],
                                    pagination: {
                                        el: ".swiper-pagination",
                                        type: "custom",
                                        renderCustom: function (t, i, n) {
                                            var o = t.realIndex,
                                                s = e[o].subtext;
                                            return "" != s ? "<span>".concat(i, "/").concat(n, " <b>").concat(s, "</b></span>") : "<span>".concat(i, "/").concat(n, "</span>");
                                        },
                                    },
                                    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                                    fadeEffect: !0,
                                    preloadImages: !1,
                                    lazy: { loadPrevNext: !0 },
                                    keyboard: { enabled: !0, onlyInViewport: !1 },
                                    loop: !0,
                                    slidesPerView: t.dataset["slides-per-view"] || 1,
                                    spaceBetween: t.dataset["space-between"] || 0,
                                });
                            },
                        },
                    ]),
                    i && pt(e.prototype, i),
                    n && pt(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            const mt = ft;
            function _t(t) {
                return (
                    (_t =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    _t(t)
                );
            }
            function gt(t, e) {
                var i = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (!i) {
                    if (
                        Array.isArray(t) ||
                        (i = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return vt(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === i && t.constructor && (i = t.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(t);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return vt(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        i && (t = i);
                        var n = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: o,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var s,
                    r = !0,
                    a = !1;
                return {
                    s: function () {
                        i = i.call(t);
                    },
                    n: function () {
                        var t = i.next();
                        return (r = t.done), t;
                    },
                    e: function (t) {
                        (a = !0), (s = t);
                    },
                    f: function () {
                        try {
                            r || null == i.return || i.return();
                        } finally {
                            if (a) throw s;
                        }
                    },
                };
            }
            function vt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            function yt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== _t(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== _t(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === _t(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }
            const bt = (function () {
                function t() {
                    var e = this;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        document.addEventListener("DOMContentLoaded", function (t) {
                            var i,
                                n = gt(document.querySelectorAll("form.fui-form"));
                            try {
                                for (n.s(); !(i = n.n()).done; ) {
                                    var o = i.value,
                                        s = JSON.parse(o.dataset.fuiForm);
                                    e.getTokens(o, s), e.pushGtmEvents(o, s);
                                }
                            } catch (t) {
                                n.e(t);
                            } finally {
                                n.f();
                            }
                        });
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "getTokens",
                            value: function (t, e) {
                                fetch("/actions/formie/forms/refresh-tokens?form=" + e.formHandle)
                                    .then(function (t) {
                                        return t.json();
                                    })
                                    .then(function (e) {
                                        if (((t.querySelector('input[name="CRAFT_CSRF_TOKEN"]').outerHTML = e.csrf.input), e.captchas && e.captchas.javascript)) {
                                            var i = e.captchas.javascript;
                                            t.querySelector('input[name="' + i.sessionKey + '"]').value = i.value;
                                        }
                                        if (e.captchas && e.captchas.duplicate) {
                                            var n = e.captchas.duplicate;
                                            t.querySelector('input[name="' + n.sessionKey + '"]').value = n.value;
                                        }
                                    });
                            },
                        },
                        {
                            key: "pushGtmEvents",
                            value: function (t, e) {
                                t.addEventListener("onAfterFormieSubmit", function (i) {
                                    if ((i.preventDefault(), !i.detail.nextPageId)) {
                                        var n = { event: "formSubmission", formHandle: e.formHandle, newsletter: null, subject: null },
                                            o = t.querySelector('input[type="checkbox"][name="fields[newsletter]"]');
                                        o && (n.newsletter = o.checked);
                                        var s = t.querySelector('[name="fields[subject],[name="fields[subjectLine]"]');
                                        s && (n.subject = s.value), (window.dataLayer = window.dataLayer || []), window.dataLayer.push(n);
                                    }
                                });
                            },
                        },
                    ]) && yt(e.prototype, i),
                    n && yt(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            function wt(t) {
                return (
                    (wt =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    wt(t)
                );
            }

            function Lt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== wt(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== wt(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === wt(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }

























































            var xt = (function () {
                function t() {
                    var e = this;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (this.mobileMenuToggle = document.querySelector("#menuToggle")),
                        this.mobileMenuToggle.addEventListener("click", function () {
                            return e.toggleMenu();
                        }),
                        this.initSubnavigations();
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "toggleMenu",
                            value: function () {
                                var t = this.mobileMenuToggle.querySelector(".mobile-menu-toggle__label");
                                if (document.body.classList.contains("menu-visible"))
                                    return this.mobileMenuToggle.setAttribute("aria-expanded", "false"), document.body.classList.remove("menu-visible"), void (t.innerHTML = t.dataset.labelOpen);
                                document.body.classList.add("menu-visible"), this.mobileMenuToggle.setAttribute("aria-expanded", "true"), (t.innerHTML = t.dataset.labelClose);
                            },
                        },
                        {
                            key: "initSubnavigations",
                            value: function () {
                                var t = this;
                                document.querySelectorAll(".header__navigation-item--has-children > a").forEach(function (e) {
                                    e.setAttribute("aria-haspopup", "true"),
                                        e.setAttribute("aria-expanded", "false"),
                                        e.addEventListener("click", function (e) {
                                            return t.clickEventHandler(e);
                                        });
                                }),
                                    document.querySelectorAll(".header__navigation-item > a").forEach(function (e) {
                                        e.addEventListener("mouseenter", function (e) {
                                            return t.mouseEnterEventHandler(e);
                                        });
                                    });
                            },
                        },
                        {
                            key: "clickEventHandler",
                            value: function (t) {
                                window.innerWidth >= 992 || (t.preventDefault(), "true" !== t.target.getAttribute("aria-expanded") ? this.openSubnavigation(t.target) : this.closeSubnavigation());
                            },
                        },
                        {
                            key: "mouseEnterEventHandler",
                            value: function (t) {
                                if (!(window.innerWidth < 992)) {
                                    var e = t.target;
                                    "true" !== e.getAttribute("aria-expanded") &&
                                        (document.querySelector(".header__navigation-item > a[aria-expanded='true']") && this.closeSubnavigation(),
                                        e.parentNode.classList.contains("header__navigation-item--has-children") && this.openSubnavigation(e));
                                }
                            },
                        },
                        {
                            key: "toggleSubnavigation",
                            value: function (t) {
                                "true" === t.getAttribute("aria-expanded") ? this.closeSubnavigation() : this.openSubnavigation(t);
                            },
                        },
                        {
                            key: "openSubnavigation",
                            value: function (t) {
                                var e = this;
                                t.setAttribute("aria-expanded", "true"), document.body.classList.add("subnavigation-visible");
                                var i = t.parentNode.querySelector(".header__subnavigation");
                                document.documentElement.style.setProperty("--subnavigation-height", i.offsetHeight + "px"),
                                    i.addEventListener("mouseleave", function () {
                                        return e.closeSubnavigation();
                                    });
                            },
                        },
                        {
                            key: "closeSubnavigation",
                            value: function () {
                                var t = document.querySelector(".header__navigation-item > a[aria-expanded='true']");
                                t && (t.setAttribute("aria-expanded", "false"), document.body.classList.remove("subnavigation-visible"), document.documentElement.style.removeProperty("--subnavigation-height"));
                            },
                        },
                    ]) && Lt(e.prototype, i),
                    n && Lt(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();




            


            function Ct(t) {
                return (
                    (Ct =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    Ct(t)
                );
            }


            function Tt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== Ct(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== Ct(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === Ct(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }


            function St(t, e, i) {
                return e && Tt(t.prototype, e), i && Tt(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            }
            function Pt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            var Mt = St(function t() {
                    Pt(this, t);
                    var e = document.querySelector(".history");
                    e && (new kt(e), new Et(e));
                }),
                kt = (function () {
                    function t(e) {
                        var i = this;
                        Pt(this, t),
                            (this.element = e),
                            (this.tabs = this.element.querySelectorAll('[role="tab"]')),
                            (this.tabList = this.element.querySelector('[role="tablist"]')),
                            this.tabs.forEach(function (t) {
                                t.addEventListener("click", function (t) {
                                    return i.changeTabs(t);
                                });
                            }),
                            this.tabList.addEventListener("keydown", function (t) {
                                return i.keyhandler(t);
                            }),
                            (this.tabFocus = 0);
                    }
                    return (
                        St(t, [
                            {
                                key: "changeTabs",
                                value: function (t) {
                                    var e = t.target,
                                        i = e.parentNode,
                                        n = i.parentNode;
                                    i.querySelectorAll('[aria-selected="true"]').forEach(function (t) {
                                        return t.setAttribute("aria-selected", !1);
                                    }),
                                        e.setAttribute("aria-selected", !0),
                                        n.querySelectorAll('[role="tabpanel"]').forEach(function (t) {
                                            return t.setAttribute("hidden", !0);
                                        }),
                                        n.parentNode.querySelector("#".concat(e.getAttribute("aria-controls"))).removeAttribute("hidden");
                                },
                            },
                            {
                                key: "keyhandler",
                                value: function (t) {
                                    (39 != t.keyCode && 37 != t.keyCode) ||
                                        (this.tabs[this.tabFocus].setAttribute("tabindex", -1),
                                        39 === t.keyCode ? (this.tabFocus++, this.tabFocus >= this.tabs.length && (this.tabFocus = 0)) : 37 === t.keyCode && (this.tabFocus--, this.tabFocus < 0 && (this.tabFocus = this.tabs.length - 1)),
                                        this.tabs[this.tabFocus].setAttribute("tabindex", 0),
                                        this.tabs[this.tabFocus].focus());
                                },
                            },
                        ]),
                        t
                    );
                })(),
                Et = (function () {
                    function t(e) {
                        var i = this;
                        Pt(this, t),
                            (this.tabList = e.querySelector('[role="tablist"]')),
                            (this.isDown = !1),
                            (this.startX = 0),
                            (this.scrollLeft = 0),
                            this.tabList.addEventListener("mousedown", function (t) {
                                return i.mouseDown(t);
                            }),
                            this.tabList.addEventListener("mouseleave", function (t) {
                                return i.mouseLeave(t);
                            }),
                            this.tabList.addEventListener("mouseup", function (t) {
                                return i.mouseUp(t);
                            }),
                            this.tabList.addEventListener("mousemove", function (t) {
                                return i.mouseMove(t);
                            }),
                            (this.buttonLeft = e.querySelector(".history__scroll-button--left")),
                            (this.buttonRight = e.querySelector(".history__scroll-button--right")),
                            this.buttonLeft.addEventListener("click", function (t) {
                                return i.goLeft(t);
                            }),
                            this.buttonRight.addEventListener("click", function (t) {
                                return i.goRight(t);
                            });
                    }
                    return (
                        St(t, [
                            {
                                key: "mouseDown",
                                value: function (t) {
                                    (this.isDown = !0), (this.startX = t.pageX - this.tabList.offsetLeft), (this.scrollLeft = this.tabList.scrollLeft);
                                },
                            },
                            {
                                key: "mouseLeave",
                                value: function (t) {
                                    this.isDown = !1;
                                },
                            },
                            {
                                key: "mouseUp",
                                value: function (t) {
                                    this.isDown = !1;
                                },
                            },
                            {
                                key: "mouseMove",
                                value: function (t) {
                                    if (this.isDown) {
                                        t.preventDefault();
                                        var e = 2 * (t.pageX - this.tabList.offsetLeft - this.startX);
                                        this.tabList.scrollLeft = this.scrollLeft - e;
                                    }
                                },
                            },
                            {
                                key: "goLeft",
                                value: function (t) {
                                    var e = this.scrollLeft - 100;
                                    e < 0 && (e = 0), (this.tabList.scrollLeft = this.scrollLeft = e);
                                },
                            },
                            {
                                key: "goRight",
                                value: function (t) {
                                    var e = this.scrollLeft + 100,
                                        i = this.tabList.scrollWidth + 50;
                                    e > i && (e = i), (this.tabList.scrollLeft = this.scrollLeft = e);
                                },
                            },
                        ]),
                        t
                    );
                })();
            const zt = Mt;
            function Ot(t) {
                return (
                    (Ot =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    Ot(t)
                );
            }
            function At(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== Ot(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== Ot(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === Ot(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }
            const It = (function () {
                function t() {
                    var e = this;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        document.querySelectorAll(".language-picker__button").forEach(function (t) {
                            t.addEventListener("click", function () {
                                return e.toggle(t);
                            });
                        });
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "toggle",
                            value: function (t) {
                                if ("true" === t.getAttribute("aria-expanded")) return t.setAttribute("aria-expanded", "false"), void document.body.classList.remove("language-dropdown-visible");
                                t.setAttribute("aria-expanded", "true"), document.body.classList.add("language-dropdown-visible");
                            },
                        },
                    ]) && At(e.prototype, i),
                    n && At(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            function Bt(t) {
                return (
                    (Bt =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    Bt(t)
                );
            }
            function Zt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== Bt(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== Bt(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === Bt(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }
            const Nt = (function () {
                function t() {
                    var e = this;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        document.querySelectorAll(".listing-detail .swiper").forEach(function (t) {
                            e.init(t);
                        });
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "init",
                            value: function (t) {
                                new nt(t, {
                                    modules: [rt, lt, ot, ct, ht],
                                    pagination: { el: ".swiper-pagination", type: "fraction" },
                                    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
                                    fadeEffect: !0,
                                    preloadImages: !1,
                                    lazy: { loadPrevNext: !0 },
                                    keyboard: { enabled: !0, onlyInViewport: !1 },
                                    loop: !0,
                                    slidesPerView: t.dataset["slides-per-view"] || 1,
                                    spaceBetween: t.dataset["space-between"] || 0,
                                });
                            },
                        },
                    ]) && Zt(e.prototype, i),
                    n && Zt(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            var Dt = i(243),
                jt = i.n(Dt);
            i(732);
            function Rt(t) {
                return (
                    (Rt =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    Rt(t)
                );
            }
            function $t(t, e) {
                var i = ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                if (!i) {
                    if (
                        Array.isArray(t) ||
                        (i = (function (t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return Gt(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === i && t.constructor && (i = t.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(t);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return Gt(t, e);
                        })(t)) ||
                        (e && t && "number" == typeof t.length)
                    ) {
                        i && (t = i);
                        var n = 0,
                            o = function () {};
                        return {
                            s: o,
                            n: function () {
                                return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                            },
                            e: function (t) {
                                throw t;
                            },
                            f: o,
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var s,
                    r = !0,
                    a = !1;
                return {
                    s: function () {
                        i = i.call(t);
                    },
                    n: function () {
                        var t = i.next();
                        return (r = t.done), t;
                    },
                    e: function (t) {
                        (a = !0), (s = t);
                    },
                    f: function () {
                        try {
                            r || null == i.return || i.return();
                        } finally {
                            if (a) throw s;
                        }
                    },
                };
            }
            function Gt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n;
            }
            function Ht(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== Rt(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== Rt(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === Rt(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }
            var Ft = (function () {
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (this.element = document.querySelector("#map")),
                        this.element && (this.initMap(), this.addBaseLayer(), this.addMarkers());
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "initMap",
                            value: function () {
                                var t = window.innerWidth > 400 ? 2 : 1;
                                (this.map = jt().map("map", { minZoom: t, maxZoom: 7 })), this.map.setView([25, 10], t);
                            },
                        },
                        {
                            key: "addBaseLayer",
                            value: function () {
                                var t = this;
                                fetch("/map-data/ne-countries-110m.json")
                                    .then(function (t) {
                                        return t.json();
                                    })
                                    .then(function (e) {
                                        jt()
                                            .geoJSON(e, { style: { fill: !1, stroke: !0, weight: 1.5, color: "#D3D1CF" } })
                                            .addTo(t.map);
                                    });
                            },
                        },
                        {
                            key: "addMarkers",
                            value: function () {
                                this.data = JSON.parse(this.element.dataset.markers);
                                var t,
                                    e = jt().markerClusterGroup({ maxClusterRadius: 10, showCoverageOnHover: !1 }),
                                    i = $t(this.data);
                                try {
                                    for (i.s(); !(t = i.n()).done; ) {
                                        var n = t.value,
                                            o = jt().icon({ iconUrl: "/images/marker-".concat(n.type, ".svg"), iconSize: [36, 53], shadowSize: [48, 56], iconAnchor: [18, 53], popupAnchor: [0, -53] }),
                                            s = jt().marker(n.coords, { icon: o });
                                        n.description && s.bindPopup(n.description), e.addLayer(s);
                                    }
                                } catch (t) {
                                    i.e(t);
                                } finally {
                                    i.f();
                                }
                                this.map.addLayer(e);
                            },
                        },
                    ]),
                    i && Ht(e.prototype, i),
                    n && Ht(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            const Wt = Ft;
            function Vt(t) {
                return (
                    (Vt =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    Vt(t)
                );
            }
            function qt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== Vt(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== Vt(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === Vt(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }
            var Ut = (function () {
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        this.init();
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "init",
                            value: function () {
                                var t = this,
                                    e = document.querySelector(".news-list__more > button");
                                e &&
                                    e.addEventListener("click", function (e) {
                                        var i = e.target.dataset.offset;
                                        t.loadMore(i);
                                    });
                            },
                        },
                        {
                            key: "loadMore",
                            value: function (t) {
                                var e = this;
                                fetch("/ajax/news-page?offset=" + t)
                                    .then(function (t) {
                                        return t.text();
                                    })
                                    .then(function (t) {
                                        (document.querySelector("#newsPlaceholder").innerHTML = t), e.init();
                                    });
                            },
                        },
                    ]),
                    i && qt(e.prototype, i),
                    n && qt(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            const Yt = Ut;
            function Xt(t) {
                return (
                    (Xt =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    Xt(t)
                );
            }
            function Kt(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== Xt(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== Xt(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === Xt(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }
            var Jt = (function () {
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        document.querySelector(".vacancies__filter") && this.initFilters();
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "initFilters",
                            value: function () {
                                var t = this;
                                (this.locationsDropdown = document.querySelector(".vacancies__filter__locations > select")),
                                    this.locationsDropdown.addEventListener("change", function () {
                                        return t.changeFilterDropdown();
                                    });
                            },
                        },
                        {
                            key: "changeFilterDropdown",
                            value: function () {
                                var t = this.locationsDropdown.value;
                                this.load(t);
                            },
                        },
                        {
                            key: "load",
                            value: function (t) {
                                fetch("/ajax/vacancies-overview?location=" + t)
                                    .then(function (t) {
                                        return t.text();
                                    })
                                    .then(function (t) {
                                        return (document.querySelector("#vacanciesOutput").innerHTML = t);
                                    });
                            },
                        },
                    ]),
                    i && Kt(e.prototype, i),
                    n && Kt(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            function Qt(t) {
                return (
                    (Qt =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                    return typeof t;
                                }
                            : function (t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                                }),
                    Qt(t)
                );
            }
            function te(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (s = void 0),
                            (s = (function (t, e) {
                                if ("object" !== Qt(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== Qt(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === Qt(s) ? s : String(s)),
                            n
                        );
                }
                var o, s;
            }
            const ee = (function () {
                function t() {
                    var e = this;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        document.querySelectorAll("a.video").forEach(function (t) {
                            t.addEventListener("click", function (i) {
                                return e.showEmbed(i, t);
                            });
                        });
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "showEmbed",
                            value: function (t, e) {
                                t.preventDefault();
                                var i = e.nextElementSibling,
                                    n = i.dataset.url;
                                (i.innerHTML = '<iframe src="'.concat(n, '?autoplay=1" title="Video player" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>')),
                                    (e.style.display = "none"),
                                    (i.style.display = "block");
                            },
                        },
                    ]) && te(e.prototype, i),
                    n && te(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            var ie;
            (ie = window.innerWidth - document.documentElement.clientWidth),
                document.documentElement.style.setProperty("--scrollbar-width", ie + "px"),
                new xt(),
                new It(),
                new s(),
                new bt(),
                new mt(),
                new Nt(),
                new Yt(),
                new zt(),
                new Wt(),
                new ee(),
                new Jt();
        },

        732: function (t, e) {
            !(function (t) {
                "use strict";
                var e = (L.MarkerClusterGroup = L.FeatureGroup.extend({
                    options: {
                        maxClusterRadius: 80,
                        iconCreateFunction: null,
                        clusterPane: L.Marker.prototype.options.pane,
                        spiderfyOnEveryZoom: !1,
                        spiderfyOnMaxZoom: !0,
                        showCoverageOnHover: !0,
                        zoomToBoundsOnClick: !0,
                        singleMarkerMode: !1,
                        disableClusteringAtZoom: null,
                        removeOutsideVisibleBounds: !0,
                        animate: !0,
                        animateAddingMarkers: !1,
                        spiderfyShapePositions: null,
                        spiderfyDistanceMultiplier: 1,
                        spiderLegPolylineOptions: { weight: 1.5, color: "#222", opacity: 0.5 },
                        chunkedLoading: !1,
                        chunkInterval: 200,
                        chunkDelay: 50,
                        chunkProgress: null,
                        polygonOptions: {},
                    },
                    initialize: function (t) {
                        L.Util.setOptions(this, t),
                            this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction),
                            (this._featureGroup = L.featureGroup()),
                            this._featureGroup.addEventParent(this),
                            (this._nonPointGroup = L.featureGroup()),
                            this._nonPointGroup.addEventParent(this),
                            (this._inZoomAnimation = 0),
                            (this._needsClustering = []),
                            (this._needsRemoving = []),
                            (this._currentShownBounds = null),
                            (this._queue = []),
                            (this._childMarkerEventHandlers = { dragstart: this._childMarkerDragStart, move: this._childMarkerMoved, dragend: this._childMarkerDragEnd });
                        var e = L.DomUtil.TRANSITION && this.options.animate;
                        L.extend(this, e ? this._withAnimation : this._noAnimation), (this._markerCluster = e ? L.MarkerCluster : L.MarkerClusterNonAnimated);
                    },
                    addLayer: function (t) {
                        if (t instanceof L.LayerGroup) return this.addLayers([t]);
                        if (!t.getLatLng) return this._nonPointGroup.addLayer(t), this.fire("layeradd", { layer: t }), this;
                        if (!this._map) return this._needsClustering.push(t), this.fire("layeradd", { layer: t }), this;
                        if (this.hasLayer(t)) return this;
                        this._unspiderfy && this._unspiderfy(), this._addLayer(t, this._maxZoom), this.fire("layeradd", { layer: t }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons();
                        var e = t,
                            i = this._zoom;
                        if (t.__parent) for (; e.__parent._zoom >= i; ) e = e.__parent;
                        return this._currentShownBounds.contains(e.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, e) : this._animationAddLayerNonAnimated(t, e)), this;
                    },
                    removeLayer: function (t) {
                        return t instanceof L.LayerGroup
                            ? this.removeLayers([t])
                            : t.getLatLng
                            ? this._map
                                ? t.__parent
                                    ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(t)),
                                        this._removeLayer(t, !0),
                                        this.fire("layerremove", { layer: t }),
                                        this._topClusterLevel._recalculateBounds(),
                                        this._refreshClustersIcons(),
                                        t.off(this._childMarkerEventHandlers, this),
                                        this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t), t.clusterShow && t.clusterShow()),
                                        this)
                                    : this
                                : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push({ layer: t, latlng: t._latlng }), this.fire("layerremove", { layer: t }), this)
                            : (this._nonPointGroup.removeLayer(t), this.fire("layerremove", { layer: t }), this);
                    },
                    addLayers: function (t, e) {
                        if (!L.Util.isArray(t)) return this.addLayer(t);
                        var i,
                            n = this._featureGroup,
                            o = this._nonPointGroup,
                            s = this.options.chunkedLoading,
                            r = this.options.chunkInterval,
                            a = this.options.chunkProgress,
                            l = t.length,
                            h = 0,
                            u = !0;
                        if (this._map) {
                            var c = new Date().getTime(),
                                d = L.bind(function () {
                                    var p = new Date().getTime();
                                    for (this._map && this._unspiderfy && this._unspiderfy(); h < l && !(s && h % 200 == 0 && new Date().getTime() - p > r); h++)
                                        if ((i = t[h]) instanceof L.LayerGroup) u && ((t = t.slice()), (u = !1)), this._extractNonGroupLayers(i, t), (l = t.length);
                                        else if (i.getLatLng) {
                                            if (!this.hasLayer(i) && (this._addLayer(i, this._maxZoom), e || this.fire("layeradd", { layer: i }), i.__parent && 2 === i.__parent.getChildCount())) {
                                                var f = i.__parent.getAllChildMarkers(),
                                                    m = f[0] === i ? f[1] : f[0];
                                                n.removeLayer(m);
                                            }
                                        } else o.addLayer(i), e || this.fire("layeradd", { layer: i });
                                    a && a(h, l, new Date().getTime() - c),
                                        h === l
                                            ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds))
                                            : setTimeout(d, this.options.chunkDelay);
                                }, this);
                            d();
                        } else
                            for (var p = this._needsClustering; h < l; h++)
                                (i = t[h]) instanceof L.LayerGroup ? (u && ((t = t.slice()), (u = !1)), this._extractNonGroupLayers(i, t), (l = t.length)) : i.getLatLng ? this.hasLayer(i) || p.push(i) : o.addLayer(i);
                        return this;
                    },
                    removeLayers: function (t) {
                        var e,
                            i,
                            n = t.length,
                            o = this._featureGroup,
                            s = this._nonPointGroup,
                            r = !0;
                        if (!this._map) {
                            for (e = 0; e < n; e++)
                                (i = t[e]) instanceof L.LayerGroup
                                    ? (r && ((t = t.slice()), (r = !1)), this._extractNonGroupLayers(i, t), (n = t.length))
                                    : (this._arraySplice(this._needsClustering, i), s.removeLayer(i), this.hasLayer(i) && this._needsRemoving.push({ layer: i, latlng: i._latlng }), this.fire("layerremove", { layer: i }));
                            return this;
                        }
                        if (this._unspiderfy) {
                            this._unspiderfy();
                            var a = t.slice(),
                                l = n;
                            for (e = 0; e < l; e++) (i = a[e]) instanceof L.LayerGroup ? (this._extractNonGroupLayers(i, a), (l = a.length)) : this._unspiderfyLayer(i);
                        }
                        for (e = 0; e < n; e++)
                            (i = t[e]) instanceof L.LayerGroup
                                ? (r && ((t = t.slice()), (r = !1)), this._extractNonGroupLayers(i, t), (n = t.length))
                                : i.__parent
                                ? (this._removeLayer(i, !0, !0), this.fire("layerremove", { layer: i }), o.hasLayer(i) && (o.removeLayer(i), i.clusterShow && i.clusterShow()))
                                : (s.removeLayer(i), this.fire("layerremove", { layer: i }));
                        return this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), this;
                    },
                    clearLayers: function () {
                        return (
                            this._map || ((this._needsClustering = []), (this._needsRemoving = []), delete this._gridClusters, delete this._gridUnclustered),
                            this._noanimationUnspiderfy && this._noanimationUnspiderfy(),
                            this._featureGroup.clearLayers(),
                            this._nonPointGroup.clearLayers(),
                            this.eachLayer(function (t) {
                                t.off(this._childMarkerEventHandlers, this), delete t.__parent;
                            }, this),
                            this._map && this._generateInitialClusters(),
                            this
                        );
                    },
                    getBounds: function () {
                        var t = new L.LatLngBounds();
                        this._topClusterLevel && t.extend(this._topClusterLevel._bounds);
                        for (var e = this._needsClustering.length - 1; e >= 0; e--) t.extend(this._needsClustering[e].getLatLng());
                        return t.extend(this._nonPointGroup.getBounds()), t;
                    },
                    eachLayer: function (t, e) {
                        var i,
                            n,
                            o,
                            s = this._needsClustering.slice(),
                            r = this._needsRemoving;
                        for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(s), n = s.length - 1; n >= 0; n--) {
                            for (i = !0, o = r.length - 1; o >= 0; o--)
                                if (r[o].layer === s[n]) {
                                    i = !1;
                                    break;
                                }
                            i && t.call(e, s[n]);
                        }
                        this._nonPointGroup.eachLayer(t, e);
                    },
                    getLayers: function () {
                        var t = [];
                        return (
                            this.eachLayer(function (e) {
                                t.push(e);
                            }),
                            t
                        );
                    },
                    getLayer: function (t) {
                        var e = null;
                        return (
                            (t = parseInt(t, 10)),
                            this.eachLayer(function (i) {
                                L.stamp(i) === t && (e = i);
                            }),
                            e
                        );
                    },
                    hasLayer: function (t) {
                        if (!t) return !1;
                        var e,
                            i = this._needsClustering;
                        for (e = i.length - 1; e >= 0; e--) if (i[e] === t) return !0;
                        for (e = (i = this._needsRemoving).length - 1; e >= 0; e--) if (i[e].layer === t) return !1;
                        return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t);
                    },
                    zoomToShowLayer: function (t, e) {
                        var i = this._map;
                        "function" != typeof e && (e = function () {});
                        var n = function () {
                            (!i.hasLayer(t) && !i.hasLayer(t.__parent)) ||
                                this._inZoomAnimation ||
                                (this._map.off("moveend", n, this), this.off("animationend", n, this), i.hasLayer(t) ? e() : t.__parent._icon && (this.once("spiderfied", e, this), t.__parent.spiderfy()));
                        };
                        t._icon && this._map.getBounds().contains(t.getLatLng())
                            ? e()
                            : t.__parent._zoom < Math.round(this._map._zoom)
                            ? (this._map.on("moveend", n, this), this._map.panTo(t.getLatLng()))
                            : (this._map.on("moveend", n, this), this.on("animationend", n, this), t.__parent.zoomToBounds());
                    },
                    onAdd: function (t) {
                        var e, i, n;
                        if (((this._map = t), !isFinite(this._map.getMaxZoom()))) throw "Map has no maxZoom specified";
                        for (
                            this._featureGroup.addTo(t), this._nonPointGroup.addTo(t), this._gridClusters || this._generateInitialClusters(), this._maxLat = t.options.crs.projection.MAX_LATITUDE, e = 0, i = this._needsRemoving.length;
                            e < i;
                            e++
                        )
                            ((n = this._needsRemoving[e]).newlatlng = n.layer._latlng), (n.layer._latlng = n.latlng);
                        for (e = 0, i = this._needsRemoving.length; e < i; e++) (n = this._needsRemoving[e]), this._removeLayer(n.layer, !0), (n.layer._latlng = n.newlatlng);
                        (this._needsRemoving = []),
                            (this._zoom = Math.round(this._map._zoom)),
                            (this._currentShownBounds = this._getExpandedVisibleBounds()),
                            this._map.on("zoomend", this._zoomEnd, this),
                            this._map.on("moveend", this._moveEnd, this),
                            this._spiderfierOnAdd && this._spiderfierOnAdd(),
                            this._bindEvents(),
                            (i = this._needsClustering),
                            (this._needsClustering = []),
                            this.addLayers(i, !0);
                    },
                    onRemove: function (t) {
                        t.off("zoomend", this._zoomEnd, this),
                            t.off("moveend", this._moveEnd, this),
                            this._unbindEvents(),
                            (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")),
                            this._spiderfierOnRemove && this._spiderfierOnRemove(),
                            delete this._maxLat,
                            this._hideCoverage(),
                            this._featureGroup.remove(),
                            this._nonPointGroup.remove(),
                            this._featureGroup.clearLayers(),
                            (this._map = null);
                    },
                    getVisibleParent: function (t) {
                        for (var e = t; e && !e._icon; ) e = e.__parent;
                        return e || null;
                    },
                    _arraySplice: function (t, e) {
                        for (var i = t.length - 1; i >= 0; i--) if (t[i] === e) return t.splice(i, 1), !0;
                    },
                    _removeFromGridUnclustered: function (t, e) {
                        for (var i = this._map, n = this._gridUnclustered, o = Math.floor(this._map.getMinZoom()); e >= o && n[e].removeObject(t, i.project(t.getLatLng(), e)); e--);
                    },
                    _childMarkerDragStart: function (t) {
                        t.target.__dragStart = t.target._latlng;
                    },
                    _childMarkerMoved: function (t) {
                        if (!this._ignoreMove && !t.target.__dragStart) {
                            var e = t.target._popup && t.target._popup.isOpen();
                            this._moveChild(t.target, t.oldLatLng, t.latlng), e && t.target.openPopup();
                        }
                    },
                    _moveChild: function (t, e, i) {
                        (t._latlng = e), this.removeLayer(t), (t._latlng = i), this.addLayer(t);
                    },
                    _childMarkerDragEnd: function (t) {
                        var e = t.target.__dragStart;
                        delete t.target.__dragStart, e && this._moveChild(t.target, e, t.target._latlng);
                    },
                    _removeLayer: function (t, e, i) {
                        var n = this._gridClusters,
                            o = this._gridUnclustered,
                            s = this._featureGroup,
                            r = this._map,
                            a = Math.floor(this._map.getMinZoom());
                        e && this._removeFromGridUnclustered(t, this._maxZoom);
                        var l,
                            h = t.__parent,
                            u = h._markers;
                        for (this._arraySplice(u, t); h && (h._childCount--, (h._boundsNeedUpdate = !0), !(h._zoom < a)); )
                            e && h._childCount <= 1
                                ? ((l = h._markers[0] === t ? h._markers[1] : h._markers[0]),
                                    n[h._zoom].removeObject(h, r.project(h._cLatLng, h._zoom)),
                                    o[h._zoom].addObject(l, r.project(l.getLatLng(), h._zoom)),
                                    this._arraySplice(h.__parent._childClusters, h),
                                    h.__parent._markers.push(l),
                                    (l.__parent = h.__parent),
                                    h._icon && (s.removeLayer(h), i || s.addLayer(l)))
                                : (h._iconNeedsUpdate = !0),
                                (h = h.__parent);
                        delete t.__parent;
                    },
                    _isOrIsParent: function (t, e) {
                        for (; e; ) {
                            if (t === e) return !0;
                            e = e.parentNode;
                        }
                        return !1;
                    },
                    fire: function (t, e, i) {
                        if (e && e.layer instanceof L.MarkerCluster) {
                            if (e.originalEvent && this._isOrIsParent(e.layer._icon, e.originalEvent.relatedTarget)) return;
                            t = "cluster" + t;
                        }
                        L.FeatureGroup.prototype.fire.call(this, t, e, i);
                    },
                    listens: function (t, e) {
                        return L.FeatureGroup.prototype.listens.call(this, t, e) || L.FeatureGroup.prototype.listens.call(this, "cluster" + t, e);
                    },
                    _defaultIconCreateFunction: function (t) {
                        var e = t.getChildCount(),
                            i = " marker-cluster-";
                        return (i += e < 10 ? "small" : e < 100 ? "medium" : "large"), new L.DivIcon({ html: "<div><span>" + e + "</span></div>", className: "marker-cluster" + i, iconSize: new L.Point(40, 40) });
                    },
                    _bindEvents: function () {
                        var t = this._map,
                            e = this.options.spiderfyOnMaxZoom,
                            i = this.options.showCoverageOnHover,
                            n = this.options.zoomToBoundsOnClick,
                            o = this.options.spiderfyOnEveryZoom;
                        (e || n || o) && this.on("clusterclick clusterkeypress", this._zoomOrSpiderfy, this),
                            i && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), t.on("zoomend", this._hideCoverage, this));
                    },
                    _zoomOrSpiderfy: function (t) {
                        var e = t.layer,
                            i = e;
                        if ("clusterkeypress" !== t.type || !t.originalEvent || 13 === t.originalEvent.keyCode) {
                            for (; 1 === i._childClusters.length; ) i = i._childClusters[0];
                            i._zoom === this._maxZoom && i._childCount === e._childCount && this.options.spiderfyOnMaxZoom ? e.spiderfy() : this.options.zoomToBoundsOnClick && e.zoomToBounds(),
                                this.options.spiderfyOnEveryZoom && e.spiderfy(),
                                t.originalEvent && 13 === t.originalEvent.keyCode && this._map._container.focus();
                        }
                    },
                    _showCoverage: function (t) {
                        var e = this._map;
                        this._inZoomAnimation ||
                            (this._shownPolygon && e.removeLayer(this._shownPolygon),
                            t.layer.getChildCount() > 2 && t.layer !== this._spiderfied && ((this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions)), e.addLayer(this._shownPolygon)));
                    },
                    _hideCoverage: function () {
                        this._shownPolygon && (this._map.removeLayer(this._shownPolygon), (this._shownPolygon = null));
                    },
                    _unbindEvents: function () {
                        var t = this.options.spiderfyOnMaxZoom,
                            e = this.options.showCoverageOnHover,
                            i = this.options.zoomToBoundsOnClick,
                            n = this.options.spiderfyOnEveryZoom,
                            o = this._map;
                        (t || i || n) && this.off("clusterclick clusterkeypress", this._zoomOrSpiderfy, this),
                            e && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), o.off("zoomend", this._hideCoverage, this));
                    },
                    _zoomEnd: function () {
                        this._map && (this._mergeSplitClusters(), (this._zoom = Math.round(this._map._zoom)), (this._currentShownBounds = this._getExpandedVisibleBounds()));
                    },
                    _moveEnd: function () {
                        if (!this._inZoomAnimation) {
                            var t = this._getExpandedVisibleBounds();
                            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, t),
                                this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), t),
                                (this._currentShownBounds = t);
                        }
                    },
                    _generateInitialClusters: function () {
                        var t = Math.ceil(this._map.getMaxZoom()),
                            e = Math.floor(this._map.getMinZoom()),
                            i = this.options.maxClusterRadius,
                            n = i;
                        "function" != typeof i &&
                            (n = function () {
                                return i;
                            }),
                            null !== this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1),
                            (this._maxZoom = t),
                            (this._gridClusters = {}),
                            (this._gridUnclustered = {});
                        for (var o = t; o >= e; o--) (this._gridClusters[o] = new L.DistanceGrid(n(o))), (this._gridUnclustered[o] = new L.DistanceGrid(n(o)));
                        this._topClusterLevel = new this._markerCluster(this, e - 1);
                    },
                    _addLayer: function (t, e) {
                        var i,
                            n,
                            o = this._gridClusters,
                            s = this._gridUnclustered,
                            r = Math.floor(this._map.getMinZoom());
                        for (this.options.singleMarkerMode && this._overrideMarkerIcon(t), t.on(this._childMarkerEventHandlers, this); e >= r; e--) {
                            i = this._map.project(t.getLatLng(), e);
                            var a = o[e].getNearObject(i);
                            if (a) return a._addChild(t), void (t.__parent = a);
                            if ((a = s[e].getNearObject(i))) {
                                var l = a.__parent;
                                l && this._removeLayer(a, !1);
                                var h = new this._markerCluster(this, e, a, t);
                                o[e].addObject(h, this._map.project(h._cLatLng, e)), (a.__parent = h), (t.__parent = h);
                                var u = h;
                                for (n = e - 1; n > l._zoom; n--) (u = new this._markerCluster(this, n, u)), o[n].addObject(u, this._map.project(a.getLatLng(), n));
                                return l._addChild(u), void this._removeFromGridUnclustered(a, e);
                            }
                            s[e].addObject(t, i);
                        }
                        this._topClusterLevel._addChild(t), (t.__parent = this._topClusterLevel);
                    },
                    _refreshClustersIcons: function () {
                        this._featureGroup.eachLayer(function (t) {
                            t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon();
                        });
                    },
                    _enqueue: function (t) {
                        this._queue.push(t), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
                    },
                    _processQueue: function () {
                        for (var t = 0; t < this._queue.length; t++) this._queue[t].call(this);
                        (this._queue.length = 0), clearTimeout(this._queueTimeout), (this._queueTimeout = null);
                    },
                    _mergeSplitClusters: function () {
                        var t = Math.round(this._map._zoom);
                        this._processQueue(),
                            this._zoom < t && this._currentShownBounds.intersects(this._getExpandedVisibleBounds())
                                ? (this._animationStart(),
                                    this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()),
                                    this._animationZoomIn(this._zoom, t))
                                : this._zoom > t
                                ? (this._animationStart(), this._animationZoomOut(this._zoom, t))
                                : this._moveEnd();
                    },
                    _getExpandedVisibleBounds: function () {
                        return this.options.removeOutsideVisibleBounds ? (L.Browser.mobile ? this._checkBoundsMaxLat(this._map.getBounds()) : this._checkBoundsMaxLat(this._map.getBounds().pad(1))) : this._mapBoundsInfinite;
                    },
                    _checkBoundsMaxLat: function (t) {
                        var e = this._maxLat;
                        return void 0 !== e && (t.getNorth() >= e && (t._northEast.lat = 1 / 0), t.getSouth() <= -e && (t._southWest.lat = -1 / 0)), t;
                    },
                    _animationAddLayerNonAnimated: function (t, e) {
                        if (e === t) this._featureGroup.addLayer(t);
                        else if (2 === e._childCount) {
                            e._addToMap();
                            var i = e.getAllChildMarkers();
                            this._featureGroup.removeLayer(i[0]), this._featureGroup.removeLayer(i[1]);
                        } else e._updateIcon();
                    },
                    _extractNonGroupLayers: function (t, e) {
                        var i,
                            n = t.getLayers(),
                            o = 0;
                        for (e = e || []; o < n.length; o++) (i = n[o]) instanceof L.LayerGroup ? this._extractNonGroupLayers(i, e) : e.push(i);
                        return e;
                    },
                    _overrideMarkerIcon: function (t) {
                        return (t.options.icon = this.options.iconCreateFunction({
                            getChildCount: function () {
                                return 1;
                            },
                            getAllChildMarkers: function () {
                                return [t];
                            },
                        }));
                    },
                }));
                L.MarkerClusterGroup.include({ _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0)) }),
                    L.MarkerClusterGroup.include({
                        _noAnimation: {
                            _animationStart: function () {},
                            _animationZoomIn: function (t, e) {
                                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t),
                                    this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                                    this.fire("animationend");
                            },
                            _animationZoomOut: function (t, e) {
                                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t),
                                    this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                                    this.fire("animationend");
                            },
                            _animationAddLayer: function (t, e) {
                                this._animationAddLayerNonAnimated(t, e);
                            },
                        },
                        _withAnimation: {
                            _animationStart: function () {
                                (this._map._mapPane.className += " leaflet-cluster-anim"), this._inZoomAnimation++;
                            },
                            _animationZoomIn: function (t, e) {
                                var i,
                                    n = this._getExpandedVisibleBounds(),
                                    o = this._featureGroup,
                                    s = Math.floor(this._map.getMinZoom());
                                (this._ignoreMove = !0),
                                    this._topClusterLevel._recursively(n, t, s, function (s) {
                                        var r,
                                            a = s._latlng,
                                            l = s._markers;
                                        for (
                                            n.contains(a) || (a = null),
                                                s._isSingleParent() && t + 1 === e ? (o.removeLayer(s), s._recursivelyAddChildrenToMap(null, e, n)) : (s.clusterHide(), s._recursivelyAddChildrenToMap(a, e, n)),
                                                i = l.length - 1;
                                            i >= 0;
                                            i--
                                        )
                                            (r = l[i]), n.contains(r._latlng) || o.removeLayer(r);
                                    }),
                                    this._forceLayout(),
                                    this._topClusterLevel._recursivelyBecomeVisible(n, e),
                                    o.eachLayer(function (t) {
                                        t instanceof L.MarkerCluster || !t._icon || t.clusterShow();
                                    }),
                                    this._topClusterLevel._recursively(n, t, e, function (t) {
                                        t._recursivelyRestoreChildPositions(e);
                                    }),
                                    (this._ignoreMove = !1),
                                    this._enqueue(function () {
                                        this._topClusterLevel._recursively(n, t, s, function (t) {
                                            o.removeLayer(t), t.clusterShow();
                                        }),
                                            this._animationEnd();
                                    });
                            },
                            _animationZoomOut: function (t, e) {
                                this._animationZoomOutSingle(this._topClusterLevel, t - 1, e),
                                    this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()),
                                    this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t, this._getExpandedVisibleBounds());
                            },
                            _animationAddLayer: function (t, e) {
                                var i = this,
                                    n = this._featureGroup;
                                n.addLayer(t),
                                    e !== t &&
                                        (e._childCount > 2
                                            ? (e._updateIcon(),
                                                this._forceLayout(),
                                                this._animationStart(),
                                                t._setPos(this._map.latLngToLayerPoint(e.getLatLng())),
                                                t.clusterHide(),
                                                this._enqueue(function () {
                                                    n.removeLayer(t), t.clusterShow(), i._animationEnd();
                                                }))
                                            : (this._forceLayout(), i._animationStart(), i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._zoom)));
                            },
                        },
                        _animationZoomOutSingle: function (t, e, i) {
                            var n = this._getExpandedVisibleBounds(),
                                o = Math.floor(this._map.getMinZoom());
                            t._recursivelyAnimateChildrenInAndAddSelfToMap(n, o, e + 1, i);
                            var s = this;
                            this._forceLayout(),
                                t._recursivelyBecomeVisible(n, i),
                                this._enqueue(function () {
                                    if (1 === t._childCount) {
                                        var r = t._markers[0];
                                        (this._ignoreMove = !0), r.setLatLng(r.getLatLng()), (this._ignoreMove = !1), r.clusterShow && r.clusterShow();
                                    } else
                                        t._recursively(n, i, o, function (t) {
                                            t._recursivelyRemoveChildrenFromMap(n, o, e + 1);
                                        });
                                    s._animationEnd();
                                });
                        },
                        _animationEnd: function () {
                            this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend");
                        },
                        _forceLayout: function () {
                            L.Util.falseFn(document.body.offsetWidth);
                        },
                    }),
                    (L.markerClusterGroup = function (t) {
                        return new L.MarkerClusterGroup(t);
                    });
                var i = (L.MarkerCluster = L.Marker.extend({
                    options: L.Icon.prototype.options,
                    initialize: function (t, e, i, n) {
                        L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), { icon: this, pane: t.options.clusterPane }),
                            (this._group = t),
                            (this._zoom = e),
                            (this._markers = []),
                            (this._childClusters = []),
                            (this._childCount = 0),
                            (this._iconNeedsUpdate = !0),
                            (this._boundsNeedUpdate = !0),
                            (this._bounds = new L.LatLngBounds()),
                            i && this._addChild(i),
                            n && this._addChild(n);
                    },
                    getAllChildMarkers: function (t, e) {
                        t = t || [];
                        for (var i = this._childClusters.length - 1; i >= 0; i--) this._childClusters[i].getAllChildMarkers(t, e);
                        for (var n = this._markers.length - 1; n >= 0; n--) (e && this._markers[n].__dragStart) || t.push(this._markers[n]);
                        return t;
                    },
                    getChildCount: function () {
                        return this._childCount;
                    },
                    zoomToBounds: function (t) {
                        for (var e, i = this._childClusters.slice(), n = this._group._map, o = n.getBoundsZoom(this._bounds), s = this._zoom + 1, r = n.getZoom(); i.length > 0 && o > s; ) {
                            s++;
                            var a = [];
                            for (e = 0; e < i.length; e++) a = a.concat(i[e]._childClusters);
                            i = a;
                        }
                        o > s ? this._group._map.setView(this._latlng, s) : o <= r ? this._group._map.setView(this._latlng, r + 1) : this._group._map.fitBounds(this._bounds, t);
                    },
                    getBounds: function () {
                        var t = new L.LatLngBounds();
                        return t.extend(this._bounds), t;
                    },
                    _updateIcon: function () {
                        (this._iconNeedsUpdate = !0), this._icon && this.setIcon(this);
                    },
                    createIcon: function () {
                        return this._iconNeedsUpdate && ((this._iconObj = this._group.options.iconCreateFunction(this)), (this._iconNeedsUpdate = !1)), this._iconObj.createIcon();
                    },
                    createShadow: function () {
                        return this._iconObj.createShadow();
                    },
                    _addChild: function (t, e) {
                        (this._iconNeedsUpdate = !0),
                            (this._boundsNeedUpdate = !0),
                            this._setClusterCenter(t),
                            t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t), (t.__parent = this)), (this._childCount += t._childCount)) : (e || this._markers.push(t), this._childCount++),
                            this.__parent && this.__parent._addChild(t, !0);
                    },
                    _setClusterCenter: function (t) {
                        this._cLatLng || (this._cLatLng = t._cLatLng || t._latlng);
                    },
                    _resetBounds: function () {
                        var t = this._bounds;
                        t._southWest && ((t._southWest.lat = 1 / 0), (t._southWest.lng = 1 / 0)), t._northEast && ((t._northEast.lat = -1 / 0), (t._northEast.lng = -1 / 0));
                    },
                    _recalculateBounds: function () {
                        var t,
                            e,
                            i,
                            n,
                            o = this._markers,
                            s = this._childClusters,
                            r = 0,
                            a = 0,
                            l = this._childCount;
                        if (0 !== l) {
                            for (this._resetBounds(), t = 0; t < o.length; t++) (i = o[t]._latlng), this._bounds.extend(i), (r += i.lat), (a += i.lng);
                            for (t = 0; t < s.length; t++) (e = s[t])._boundsNeedUpdate && e._recalculateBounds(), this._bounds.extend(e._bounds), (i = e._wLatLng), (n = e._childCount), (r += i.lat * n), (a += i.lng * n);
                            (this._latlng = this._wLatLng = new L.LatLng(r / l, a / l)), (this._boundsNeedUpdate = !1);
                        }
                    },
                    _addToMap: function (t) {
                        t && ((this._backupLatlng = this._latlng), this.setLatLng(t)), this._group._featureGroup.addLayer(this);
                    },
                    _recursivelyAnimateChildrenIn: function (t, e, i) {
                        this._recursively(
                            t,
                            this._group._map.getMinZoom(),
                            i - 1,
                            function (t) {
                                var i,
                                    n,
                                    o = t._markers;
                                for (i = o.length - 1; i >= 0; i--) (n = o[i])._icon && (n._setPos(e), n.clusterHide());
                            },
                            function (t) {
                                var i,
                                    n,
                                    o = t._childClusters;
                                for (i = o.length - 1; i >= 0; i--) (n = o[i])._icon && (n._setPos(e), n.clusterHide());
                            }
                        );
                    },
                    _recursivelyAnimateChildrenInAndAddSelfToMap: function (t, e, i, n) {
                        this._recursively(t, n, e, function (o) {
                            o._recursivelyAnimateChildrenIn(t, o._group._map.latLngToLayerPoint(o.getLatLng()).round(), i),
                                o._isSingleParent() && i - 1 === n ? (o.clusterShow(), o._recursivelyRemoveChildrenFromMap(t, e, i)) : o.clusterHide(),
                                o._addToMap();
                        });
                    },
                    _recursivelyBecomeVisible: function (t, e) {
                        this._recursively(t, this._group._map.getMinZoom(), e, null, function (t) {
                            t.clusterShow();
                        });
                    },
                    _recursivelyAddChildrenToMap: function (t, e, i) {
                        this._recursively(
                            i,
                            this._group._map.getMinZoom() - 1,
                            e,
                            function (n) {
                                if (e !== n._zoom)
                                    for (var o = n._markers.length - 1; o >= 0; o--) {
                                        var s = n._markers[o];
                                        i.contains(s._latlng) && (t && ((s._backupLatlng = s.getLatLng()), s.setLatLng(t), s.clusterHide && s.clusterHide()), n._group._featureGroup.addLayer(s));
                                    }
                            },
                            function (e) {
                                e._addToMap(t);
                            }
                        );
                    },
                    _recursivelyRestoreChildPositions: function (t) {
                        for (var e = this._markers.length - 1; e >= 0; e--) {
                            var i = this._markers[e];
                            i._backupLatlng && (i.setLatLng(i._backupLatlng), delete i._backupLatlng);
                        }
                        if (t - 1 === this._zoom) for (var n = this._childClusters.length - 1; n >= 0; n--) this._childClusters[n]._restorePosition();
                        else for (var o = this._childClusters.length - 1; o >= 0; o--) this._childClusters[o]._recursivelyRestoreChildPositions(t);
                    },
                    _restorePosition: function () {
                        this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
                    },
                    _recursivelyRemoveChildrenFromMap: function (t, e, i, n) {
                        var o, s;
                        this._recursively(
                            t,
                            e - 1,
                            i - 1,
                            function (t) {
                                for (s = t._markers.length - 1; s >= 0; s--) (o = t._markers[s]), (n && n.contains(o._latlng)) || (t._group._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow());
                            },
                            function (t) {
                                for (s = t._childClusters.length - 1; s >= 0; s--) (o = t._childClusters[s]), (n && n.contains(o._latlng)) || (t._group._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow());
                            }
                        );
                    },
                    _recursively: function (t, e, i, n, o) {
                        var s,
                            r,
                            a = this._childClusters,
                            l = this._zoom;
                        if ((e <= l && (n && n(this), o && l === i && o(this)), l < e || l < i))
                            for (s = a.length - 1; s >= 0; s--) (r = a[s])._boundsNeedUpdate && r._recalculateBounds(), t.intersects(r._bounds) && r._recursively(t, e, i, n, o);
                    },
                    _isSingleParent: function () {
                        return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
                    },
                }));
                L.Marker.include({
                    clusterHide: function () {
                        var t = this.options.opacity;
                        return this.setOpacity(0), (this.options.opacity = t), this;
                    },
                    clusterShow: function () {
                        return this.setOpacity(this.options.opacity);
                    },
                }),
                    (L.DistanceGrid = function (t) {
                        (this._cellSize = t), (this._sqCellSize = t * t), (this._grid = {}), (this._objectPoint = {});
                    }),
                    (L.DistanceGrid.prototype = {
                        addObject: function (t, e) {
                            var i = this._getCoord(e.x),
                                n = this._getCoord(e.y),
                                o = this._grid,
                                s = (o[n] = o[n] || {}),
                                r = (s[i] = s[i] || []),
                                a = L.Util.stamp(t);
                            (this._objectPoint[a] = e), r.push(t);
                        },
                        updateObject: function (t, e) {
                            this.removeObject(t), this.addObject(t, e);
                        },
                        removeObject: function (t, e) {
                            var i,
                                n,
                                o = this._getCoord(e.x),
                                s = this._getCoord(e.y),
                                r = this._grid,
                                a = (r[s] = r[s] || {}),
                                l = (a[o] = a[o] || []);
                            for (delete this._objectPoint[L.Util.stamp(t)], i = 0, n = l.length; i < n; i++) if (l[i] === t) return l.splice(i, 1), 1 === n && delete a[o], !0;
                        },
                        eachObject: function (t, e) {
                            var i,
                                n,
                                o,
                                s,
                                r,
                                a,
                                l = this._grid;
                            for (i in l) for (n in (r = l[i])) for (o = 0, s = (a = r[n]).length; o < s; o++) t.call(e, a[o]) && (o--, s--);
                        },
                        getNearObject: function (t) {
                            var e,
                                i,
                                n,
                                o,
                                s,
                                r,
                                a,
                                l,
                                h = this._getCoord(t.x),
                                u = this._getCoord(t.y),
                                c = this._objectPoint,
                                d = this._sqCellSize,
                                p = null;
                            for (e = u - 1; e <= u + 1; e++)
                                if ((o = this._grid[e]))
                                    for (i = h - 1; i <= h + 1; i++) if ((s = o[i])) for (n = 0, r = s.length; n < r; n++) (a = s[n]), ((l = this._sqDist(c[L.Util.stamp(a)], t)) < d || (l <= d && null === p)) && ((d = l), (p = a));
                            return p;
                        },
                        _getCoord: function (t) {
                            var e = Math.floor(t / this._cellSize);
                            return isFinite(e) ? e : t;
                        },
                        _sqDist: function (t, e) {
                            var i = e.x - t.x,
                                n = e.y - t.y;
                            return i * i + n * n;
                        },
                    }),
                    (L.QuickHull = {
                        getDistant: function (t, e) {
                            var i = e[1].lat - e[0].lat;
                            return (e[0].lng - e[1].lng) * (t.lat - e[0].lat) + i * (t.lng - e[0].lng);
                        },
                        findMostDistantPointFromBaseLine: function (t, e) {
                            var i,
                                n,
                                o,
                                s = 0,
                                r = null,
                                a = [];
                            for (i = e.length - 1; i >= 0; i--) (n = e[i]), (o = this.getDistant(n, t)) > 0 && (a.push(n), o > s && ((s = o), (r = n)));
                            return { maxPoint: r, newPoints: a };
                        },
                        buildConvexHull: function (t, e) {
                            var i = [],
                                n = this.findMostDistantPointFromBaseLine(t, e);
                            return n.maxPoint ? (i = (i = i.concat(this.buildConvexHull([t[0], n.maxPoint], n.newPoints))).concat(this.buildConvexHull([n.maxPoint, t[1]], n.newPoints))) : [t[0]];
                        },
                        getConvexHull: function (t) {
                            var e,
                                i = !1,
                                n = !1,
                                o = !1,
                                s = !1,
                                r = null,
                                a = null,
                                l = null,
                                h = null,
                                u = null,
                                c = null;
                            for (e = t.length - 1; e >= 0; e--) {
                                var d = t[e];
                                (!1 === i || d.lat > i) && ((r = d), (i = d.lat)), (!1 === n || d.lat < n) && ((a = d), (n = d.lat)), (!1 === o || d.lng > o) && ((l = d), (o = d.lng)), (!1 === s || d.lng < s) && ((h = d), (s = d.lng));
                            }
                            return n !== i ? ((c = a), (u = r)) : ((c = h), (u = l)), [].concat(this.buildConvexHull([c, u], t), this.buildConvexHull([u, c], t));
                        },
                    }),
                    L.MarkerCluster.include({
                        getConvexHull: function () {
                            var t,
                                e,
                                i = this.getAllChildMarkers(),
                                n = [];
                            for (e = i.length - 1; e >= 0; e--) (t = i[e].getLatLng()), n.push(t);
                            return L.QuickHull.getConvexHull(n);
                        },
                    }),
                    L.MarkerCluster.include({
                        _2PI: 2 * Math.PI,
                        _circleFootSeparation: 25,
                        _circleStartAngle: 0,
                        _spiralFootSeparation: 28,
                        _spiralLengthStart: 11,
                        _spiralLengthFactor: 5,
                        _circleSpiralSwitchover: 9,
                        spiderfy: function () {
                            if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
                                var t,
                                    e = this.getAllChildMarkers(null, !0),
                                    i = this._group._map.latLngToLayerPoint(this._latlng);
                                this._group._unspiderfy(),
                                    (this._group._spiderfied = this),
                                    this._group.options.spiderfyShapePositions
                                        ? (t = this._group.options.spiderfyShapePositions(e.length, i))
                                        : e.length >= this._circleSpiralSwitchover
                                        ? (t = this._generatePointsSpiral(e.length, i))
                                        : ((i.y += 10), (t = this._generatePointsCircle(e.length, i))),
                                    this._animationSpiderfy(e, t);
                            }
                        },
                        unspiderfy: function (t) {
                            this._group._inZoomAnimation || (this._animationUnspiderfy(t), (this._group._spiderfied = null));
                        },
                        _generatePointsCircle: function (t, e) {
                            var i,
                                n,
                                o = (this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t)) / this._2PI,
                                s = this._2PI / t,
                                r = [];
                            for (o = Math.max(o, 35), r.length = t, i = 0; i < t; i++) (n = this._circleStartAngle + i * s), (r[i] = new L.Point(e.x + o * Math.cos(n), e.y + o * Math.sin(n))._round());
                            return r;
                        },
                        _generatePointsSpiral: function (t, e) {
                            var i,
                                n = this._group.options.spiderfyDistanceMultiplier,
                                o = n * this._spiralLengthStart,
                                s = n * this._spiralFootSeparation,
                                r = n * this._spiralLengthFactor * this._2PI,
                                a = 0,
                                l = [];
                            for (l.length = t, i = t; i >= 0; i--) i < t && (l[i] = new L.Point(e.x + o * Math.cos(a), e.y + o * Math.sin(a))._round()), (o += r / (a += s / o + 5e-4 * i));
                            return l;
                        },
                        _noanimationUnspiderfy: function () {
                            var t,
                                e,
                                i = this._group,
                                n = i._map,
                                o = i._featureGroup,
                                s = this.getAllChildMarkers(null, !0);
                            for (i._ignoreMove = !0, this.setOpacity(1), e = s.length - 1; e >= 0; e--)
                                (t = s[e]),
                                    o.removeLayer(t),
                                    t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng), delete t._preSpiderfyLatlng),
                                    t.setZIndexOffset && t.setZIndexOffset(0),
                                    t._spiderLeg && (n.removeLayer(t._spiderLeg), delete t._spiderLeg);
                            i.fire("unspiderfied", { cluster: this, markers: s }), (i._ignoreMove = !1), (i._spiderfied = null);
                        },
                    }),
                    (L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
                        _animationSpiderfy: function (t, e) {
                            var i,
                                n,
                                o,
                                s,
                                r = this._group,
                                a = r._map,
                                l = r._featureGroup,
                                h = this._group.options.spiderLegPolylineOptions;
                            for (r._ignoreMove = !0, i = 0; i < t.length; i++)
                                (s = a.layerPointToLatLng(e[i])),
                                    (n = t[i]),
                                    (o = new L.Polyline([this._latlng, s], h)),
                                    a.addLayer(o),
                                    (n._spiderLeg = o),
                                    (n._preSpiderfyLatlng = n._latlng),
                                    n.setLatLng(s),
                                    n.setZIndexOffset && n.setZIndexOffset(1e6),
                                    l.addLayer(n);
                            this.setOpacity(0.3), (r._ignoreMove = !1), r.fire("spiderfied", { cluster: this, markers: t });
                        },
                        _animationUnspiderfy: function () {
                            this._noanimationUnspiderfy();
                        },
                    })),
                    L.MarkerCluster.include({
                        _animationSpiderfy: function (t, e) {
                            var i,
                                n,
                                o,
                                s,
                                r,
                                a,
                                l = this,
                                h = this._group,
                                u = h._map,
                                c = h._featureGroup,
                                d = this._latlng,
                                p = u.latLngToLayerPoint(d),
                                f = L.Path.SVG,
                                m = L.extend({}, this._group.options.spiderLegPolylineOptions),
                                _ = m.opacity;
                            for (
                                void 0 === _ && (_ = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),
                                    f ? ((m.opacity = 0), (m.className = (m.className || "") + " leaflet-cluster-spider-leg")) : (m.opacity = _),
                                    h._ignoreMove = !0,
                                    i = 0;
                                i < t.length;
                                i++
                            )
                                (n = t[i]),
                                    (a = u.layerPointToLatLng(e[i])),
                                    (o = new L.Polyline([d, a], m)),
                                    u.addLayer(o),
                                    (n._spiderLeg = o),
                                    f && ((r = (s = o._path).getTotalLength() + 0.1), (s.style.strokeDasharray = r), (s.style.strokeDashoffset = r)),
                                    n.setZIndexOffset && n.setZIndexOffset(1e6),
                                    n.clusterHide && n.clusterHide(),
                                    c.addLayer(n),
                                    n._setPos && n._setPos(p);
                            for (h._forceLayout(), h._animationStart(), i = t.length - 1; i >= 0; i--)
                                (a = u.layerPointToLatLng(e[i])),
                                    ((n = t[i])._preSpiderfyLatlng = n._latlng),
                                    n.setLatLng(a),
                                    n.clusterShow && n.clusterShow(),
                                    f && (((s = (o = n._spiderLeg)._path).style.strokeDashoffset = 0), o.setStyle({ opacity: _ }));
                            this.setOpacity(0.3),
                                (h._ignoreMove = !1),
                                setTimeout(function () {
                                    h._animationEnd(), h.fire("spiderfied", { cluster: l, markers: t });
                                }, 200);
                        },
                        _animationUnspiderfy: function (t) {
                            var e,
                                i,
                                n,
                                o,
                                s,
                                r,
                                a = this,
                                l = this._group,
                                h = l._map,
                                u = l._featureGroup,
                                c = t ? h._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : h.latLngToLayerPoint(this._latlng),
                                d = this.getAllChildMarkers(null, !0),
                                p = L.Path.SVG;
                            for (l._ignoreMove = !0, l._animationStart(), this.setOpacity(1), i = d.length - 1; i >= 0; i--)
                                (e = d[i])._preSpiderfyLatlng &&
                                    (e.closePopup(),
                                    e.setLatLng(e._preSpiderfyLatlng),
                                    delete e._preSpiderfyLatlng,
                                    (r = !0),
                                    e._setPos && (e._setPos(c), (r = !1)),
                                    e.clusterHide && (e.clusterHide(), (r = !1)),
                                    r && u.removeLayer(e),
                                    p && ((s = (o = (n = e._spiderLeg)._path).getTotalLength() + 0.1), (o.style.strokeDashoffset = s), n.setStyle({ opacity: 0 })));
                            (l._ignoreMove = !1),
                                setTimeout(function () {
                                    var t = 0;
                                    for (i = d.length - 1; i >= 0; i--) (e = d[i])._spiderLeg && t++;
                                    for (i = d.length - 1; i >= 0; i--)
                                        (e = d[i])._spiderLeg && (e.clusterShow && e.clusterShow(), e.setZIndexOffset && e.setZIndexOffset(0), t > 1 && u.removeLayer(e), h.removeLayer(e._spiderLeg), delete e._spiderLeg);
                                    l._animationEnd(), l.fire("unspiderfied", { cluster: a, markers: d });
                                }, 200);
                        },
                    }),
                    L.MarkerClusterGroup.include({
                        _spiderfied: null,
                        unspiderfy: function () {
                            this._unspiderfy.apply(this, arguments);
                        },
                        _spiderfierOnAdd: function () {
                            this._map.on("click", this._unspiderfyWrapper, this),
                                this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this),
                                this._map.on("zoomend", this._noanimationUnspiderfy, this),
                                L.Browser.touch || this._map.getRenderer(this);
                        },
                        _spiderfierOnRemove: function () {
                            this._map.off("click", this._unspiderfyWrapper, this),
                                this._map.off("zoomstart", this._unspiderfyZoomStart, this),
                                this._map.off("zoomanim", this._unspiderfyZoomAnim, this),
                                this._map.off("zoomend", this._noanimationUnspiderfy, this),
                                this._noanimationUnspiderfy();
                        },
                        _unspiderfyZoomStart: function () {
                            this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
                        },
                        _unspiderfyZoomAnim: function (t) {
                            L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(t));
                        },
                        _unspiderfyWrapper: function () {
                            this._unspiderfy();
                        },
                        _unspiderfy: function (t) {
                            this._spiderfied && this._spiderfied.unspiderfy(t);
                        },
                        _noanimationUnspiderfy: function () {
                            this._spiderfied && this._spiderfied._noanimationUnspiderfy();
                        },
                        _unspiderfyLayer: function (t) {
                            t._spiderLeg && (this._featureGroup.removeLayer(t), t.clusterShow && t.clusterShow(), t.setZIndexOffset && t.setZIndexOffset(0), this._map.removeLayer(t._spiderLeg), delete t._spiderLeg);
                        },
                    }),
                    L.MarkerClusterGroup.include({
                        refreshClusters: function (t) {
                            return (
                                t
                                    ? t instanceof L.MarkerClusterGroup
                                        ? (t = t._topClusterLevel.getAllChildMarkers())
                                        : t instanceof L.LayerGroup
                                        ? (t = t._layers)
                                        : t instanceof L.MarkerCluster
                                        ? (t = t.getAllChildMarkers())
                                        : t instanceof L.Marker && (t = [t])
                                    : (t = this._topClusterLevel.getAllChildMarkers()),
                                this._flagParentsIconsNeedUpdate(t),
                                this._refreshClustersIcons(),
                                this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(t),
                                this
                            );
                        },
                        _flagParentsIconsNeedUpdate: function (t) {
                            var e, i;
                            for (e in t) for (i = t[e].__parent; i; ) (i._iconNeedsUpdate = !0), (i = i.__parent);
                        },
                        _refreshSingleMarkerModeMarkers: function (t) {
                            var e, i;
                            for (e in t) (i = t[e]), this.hasLayer(i) && i.setIcon(this._overrideMarkerIcon(i));
                        },
                    }),
                    L.Marker.include({
                        refreshIconOptions: function (t, e) {
                            var i = this.options.icon;
                            return L.setOptions(i, t), this.setIcon(i), e && this.__parent && this.__parent._group.refreshClusters(this), this;
                        },
                    }),
                    (t.MarkerClusterGroup = e),
                    (t.MarkerCluster = i),
                    Object.defineProperty(t, "__esModule", { value: !0 });
            })(e);
        },

        243: function (t, e) {
            !(function (t) {
                "use strict";
                var e = "1.9.4";
                function i(t) {
                    var e, i, n, o;
                    for (i = 1, n = arguments.length; i < n; i++) for (e in (o = arguments[i])) t[e] = o[e];
                    return t;
                }
                var n =
                    Object.create ||
                    (function () {
                        function t() {}
                        return function (e) {
                            return (t.prototype = e), new t();
                        };
                    })();
                function o(t, e) {
                    var i = Array.prototype.slice;
                    if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
                    var n = i.call(arguments, 2);
                    return function () {
                        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
                    };
                }
                var s = 0;
                function r(t) {
                    return "_leaflet_id" in t || (t._leaflet_id = ++s), t._leaflet_id;
                }
                function a(t, e, i) {
                    var n, o, s, r;
                    return (
                        (r = function () {
                            (n = !1), o && (s.apply(i, o), (o = !1));
                        }),
                        (s = function () {
                            n ? (o = arguments) : (t.apply(i, arguments), setTimeout(r, e), (n = !0));
                        }),
                        s
                    );
                }
                function l(t, e, i) {
                    var n = e[1],
                        o = e[0],
                        s = n - o;
                    return t === n && i ? t : ((((t - o) % s) + s) % s) + o;
                }
                function h() {
                    return !1;
                }
                function u(t, e) {
                    if (!1 === e) return t;
                    var i = Math.pow(10, void 0 === e ? 6 : e);
                    return Math.round(t * i) / i;
                }
                function c(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                }
                function d(t) {
                    return c(t).split(/\s+/);
                }
                function p(t, e) {
                    for (var i in (Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? n(t.options) : {}), e)) t.options[i] = e[i];
                    return t.options;
                }
                function f(t, e, i) {
                    var n = [];
                    for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
                    return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&");
                }
                var m = /\{ *([\w_ -]+) *\}/g;
                function _(t, e) {
                    return t.replace(m, function (t, i) {
                        var n = e[i];
                        if (void 0 === n) throw new Error("No value provided for variable " + t);
                        return "function" == typeof n && (n = n(e)), n;
                    });
                }
                var g =
                    Array.isArray ||
                    function (t) {
                        return "[object Array]" === Object.prototype.toString.call(t);
                    };
                function v(t, e) {
                    for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
                    return -1;
                }
                var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
                function b(t) {
                    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
                }
                var w = 0;
                function x(t) {
                    var e = +new Date(),
                        i = Math.max(0, 16 - (e - w));
                    return (w = e + i), window.setTimeout(t, i);
                }
                var C = window.requestAnimationFrame || b("RequestAnimationFrame") || x,
                    T =
                        window.cancelAnimationFrame ||
                        b("CancelAnimationFrame") ||
                        b("CancelRequestAnimationFrame") ||
                        function (t) {
                            window.clearTimeout(t);
                        };
                function S(t, e, i) {
                    if (!i || C !== x) return C.call(window, o(t, e));
                    t.call(e);
                }
                function P(t) {
                    t && T.call(window, t);
                }
                var M = {
                    __proto__: null,
                    extend: i,
                    create: n,
                    bind: o,
                    get lastId() {
                        return s;
                    },
                    stamp: r,
                    throttle: a,
                    wrapNum: l,
                    falseFn: h,
                    formatNum: u,
                    trim: c,
                    splitWords: d,
                    setOptions: p,
                    getParamString: f,
                    template: _,
                    isArray: g,
                    indexOf: v,
                    emptyImageUrl: y,
                    requestFn: C,
                    cancelFn: T,
                    requestAnimFrame: S,
                    cancelAnimFrame: P,
                };
                function k() {}
                function E(t) {
                    if ("undefined" != typeof L && L && L.Mixin) {
                        t = g(t) ? t : [t];
                        for (var e = 0; e < t.length; e++)
                            t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
                    }
                }
                (k.extend = function (t) {
                    var e = function () {
                            p(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
                        },
                        o = (e.__super__ = this.prototype),
                        s = n(o);
                    for (var r in ((s.constructor = e), (e.prototype = s), this)) Object.prototype.hasOwnProperty.call(this, r) && "prototype" !== r && "__super__" !== r && (e[r] = this[r]);
                    return (
                        t.statics && i(e, t.statics),
                        t.includes && (E(t.includes), i.apply(null, [s].concat(t.includes))),
                        i(s, t),
                        delete s.statics,
                        delete s.includes,
                        s.options && ((s.options = o.options ? n(o.options) : {}), i(s.options, t.options)),
                        (s._initHooks = []),
                        (s.callInitHooks = function () {
                            if (!this._initHooksCalled) {
                                o.callInitHooks && o.callInitHooks.call(this), (this._initHooksCalled = !0);
                                for (var t = 0, e = s._initHooks.length; t < e; t++) s._initHooks[t].call(this);
                            }
                        }),
                        e
                    );
                }),
                    (k.include = function (t) {
                        var e = this.prototype.options;
                        return i(this.prototype, t), t.options && ((this.prototype.options = e), this.mergeOptions(t.options)), this;
                    }),
                    (k.mergeOptions = function (t) {
                        return i(this.prototype.options, t), this;
                    }),
                    (k.addInitHook = function (t) {
                        var e = Array.prototype.slice.call(arguments, 1),
                            i =
                                "function" == typeof t
                                    ? t
                                    : function () {
                                            this[t].apply(this, e);
                                        };
                        return (this.prototype._initHooks = this.prototype._initHooks || []), this.prototype._initHooks.push(i), this;
                    });
                var z = {
                    on: function (t, e, i) {
                        if ("object" == typeof t) for (var n in t) this._on(n, t[n], e);
                        else for (var o = 0, s = (t = d(t)).length; o < s; o++) this._on(t[o], e, i);
                        return this;
                    },
                    off: function (t, e, i) {
                        if (arguments.length)
                            if ("object" == typeof t) for (var n in t) this._off(n, t[n], e);
                            else {
                                t = d(t);
                                for (var o = 1 === arguments.length, s = 0, r = t.length; s < r; s++) o ? this._off(t[s]) : this._off(t[s], e, i);
                            }
                        else delete this._events;
                        return this;
                    },
                    _on: function (t, e, i, n) {
                        if ("function" == typeof e) {
                            if (!1 === this._listens(t, e, i)) {
                                i === this && (i = void 0);
                                var o = { fn: e, ctx: i };
                                n && (o.once = !0), (this._events = this._events || {}), (this._events[t] = this._events[t] || []), this._events[t].push(o);
                            }
                        } else console.warn("wrong listener type: " + typeof e);
                    },
                    _off: function (t, e, i) {
                        var n, o, s;
                        if (this._events && (n = this._events[t]))
                            if (1 !== arguments.length)
                                if ("function" == typeof e) {
                                    var r = this._listens(t, e, i);
                                    if (!1 !== r) {
                                        var a = n[r];
                                        this._firingCount && ((a.fn = h), (this._events[t] = n = n.slice())), n.splice(r, 1);
                                    }
                                } else console.warn("wrong listener type: " + typeof e);
                            else {
                                if (this._firingCount) for (o = 0, s = n.length; o < s; o++) n[o].fn = h;
                                delete this._events[t];
                            }
                    },
                    fire: function (t, e, n) {
                        if (!this.listens(t, n)) return this;
                        var o = i({}, e, { type: t, target: this, sourceTarget: (e && e.sourceTarget) || this });
                        if (this._events) {
                            var s = this._events[t];
                            if (s) {
                                this._firingCount = this._firingCount + 1 || 1;
                                for (var r = 0, a = s.length; r < a; r++) {
                                    var l = s[r],
                                        h = l.fn;
                                    l.once && this.off(t, h, l.ctx), h.call(l.ctx || this, o);
                                }
                                this._firingCount--;
                            }
                        }
                        return n && this._propagateEvent(o), this;
                    },
                    listens: function (t, e, i, n) {
                        "string" != typeof t && console.warn('"string" type argument expected');
                        var o = e;
                        "function" != typeof e && ((n = !!e), (o = void 0), (i = void 0));
                        var s = this._events && this._events[t];
                        if (s && s.length && !1 !== this._listens(t, o, i)) return !0;
                        if (n) for (var r in this._eventParents) if (this._eventParents[r].listens(t, e, i, n)) return !0;
                        return !1;
                    },
                    _listens: function (t, e, i) {
                        if (!this._events) return !1;
                        var n = this._events[t] || [];
                        if (!e) return !!n.length;
                        i === this && (i = void 0);
                        for (var o = 0, s = n.length; o < s; o++) if (n[o].fn === e && n[o].ctx === i) return o;
                        return !1;
                    },
                    once: function (t, e, i) {
                        if ("object" == typeof t) for (var n in t) this._on(n, t[n], e, !0);
                        else for (var o = 0, s = (t = d(t)).length; o < s; o++) this._on(t[o], e, i, !0);
                        return this;
                    },
                    addEventParent: function (t) {
                        return (this._eventParents = this._eventParents || {}), (this._eventParents[r(t)] = t), this;
                    },
                    removeEventParent: function (t) {
                        return this._eventParents && delete this._eventParents[r(t)], this;
                    },
                    _propagateEvent: function (t) {
                        for (var e in this._eventParents) this._eventParents[e].fire(t.type, i({ layer: t.target, propagatedFrom: t.target }, t), !0);
                    },
                };
                (z.addEventListener = z.on), (z.removeEventListener = z.clearAllEventListeners = z.off), (z.addOneTimeEventListener = z.once), (z.fireEvent = z.fire), (z.hasEventListeners = z.listens);
                var O = k.extend(z);
                function A(t, e, i) {
                    (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
                }
                var I =
                    Math.trunc ||
                    function (t) {
                        return t > 0 ? Math.floor(t) : Math.ceil(t);
                    };
                function B(t, e, i) {
                    return t instanceof A ? t : g(t) ? new A(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new A(t.x, t.y) : new A(t, e, i);
                }
                function Z(t, e) {
                    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
                }
                function N(t, e) {
                    return !t || t instanceof Z ? t : new Z(t, e);
                }
                function D(t, e) {
                    if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n]);
                }
                function j(t, e) {
                    return t instanceof D ? t : new D(t, e);
                }
                function R(t, e, i) {
                    if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
                    (this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
                }
                function $(t, e, i) {
                    return t instanceof R
                        ? t
                        : g(t) && "object" != typeof t[0]
                        ? 3 === t.length
                            ? new R(t[0], t[1], t[2])
                            : 2 === t.length
                            ? new R(t[0], t[1])
                            : null
                        : null == t
                        ? t
                        : "object" == typeof t && "lat" in t
                        ? new R(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
                        : void 0 === e
                        ? null
                        : new R(t, e, i);
                }
                (A.prototype = {
                    clone: function () {
                        return new A(this.x, this.y);
                    },
                    add: function (t) {
                        return this.clone()._add(B(t));
                    },
                    _add: function (t) {
                        return (this.x += t.x), (this.y += t.y), this;
                    },
                    subtract: function (t) {
                        return this.clone()._subtract(B(t));
                    },
                    _subtract: function (t) {
                        return (this.x -= t.x), (this.y -= t.y), this;
                    },
                    divideBy: function (t) {
                        return this.clone()._divideBy(t);
                    },
                    _divideBy: function (t) {
                        return (this.x /= t), (this.y /= t), this;
                    },
                    multiplyBy: function (t) {
                        return this.clone()._multiplyBy(t);
                    },
                    _multiplyBy: function (t) {
                        return (this.x *= t), (this.y *= t), this;
                    },
                    scaleBy: function (t) {
                        return new A(this.x * t.x, this.y * t.y);
                    },
                    unscaleBy: function (t) {
                        return new A(this.x / t.x, this.y / t.y);
                    },
                    round: function () {
                        return this.clone()._round();
                    },
                    _round: function () {
                        return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
                    },
                    floor: function () {
                        return this.clone()._floor();
                    },
                    _floor: function () {
                        return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
                    },
                    ceil: function () {
                        return this.clone()._ceil();
                    },
                    _ceil: function () {
                        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
                    },
                    trunc: function () {
                        return this.clone()._trunc();
                    },
                    _trunc: function () {
                        return (this.x = I(this.x)), (this.y = I(this.y)), this;
                    },
                    distanceTo: function (t) {
                        var e = (t = B(t)).x - this.x,
                            i = t.y - this.y;
                        return Math.sqrt(e * e + i * i);
                    },
                    equals: function (t) {
                        return (t = B(t)).x === this.x && t.y === this.y;
                    },
                    contains: function (t) {
                        return (t = B(t)), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
                    },
                    toString: function () {
                        return "Point(" + u(this.x) + ", " + u(this.y) + ")";
                    },
                }),
                    (Z.prototype = {
                        extend: function (t) {
                            var e, i;
                            if (!t) return this;
                            if (t instanceof A || "number" == typeof t[0] || "x" in t) e = i = B(t);
                            else if (((e = (t = N(t)).min), (i = t.max), !e || !i)) return this;
                            return (
                                this.min || this.max
                                    ? ((this.min.x = Math.min(e.x, this.min.x)), (this.max.x = Math.max(i.x, this.max.x)), (this.min.y = Math.min(e.y, this.min.y)), (this.max.y = Math.max(i.y, this.max.y)))
                                    : ((this.min = e.clone()), (this.max = i.clone())),
                                this
                            );
                        },
                        getCenter: function (t) {
                            return B((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
                        },
                        getBottomLeft: function () {
                            return B(this.min.x, this.max.y);
                        },
                        getTopRight: function () {
                            return B(this.max.x, this.min.y);
                        },
                        getTopLeft: function () {
                            return this.min;
                        },
                        getBottomRight: function () {
                            return this.max;
                        },
                        getSize: function () {
                            return this.max.subtract(this.min);
                        },
                        contains: function (t) {
                            var e, i;
                            return (t = "number" == typeof t[0] || t instanceof A ? B(t) : N(t)) instanceof Z ? ((e = t.min), (i = t.max)) : (e = i = t), e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
                        },
                        intersects: function (t) {
                            t = N(t);
                            var e = this.min,
                                i = this.max,
                                n = t.min,
                                o = t.max,
                                s = o.x >= e.x && n.x <= i.x,
                                r = o.y >= e.y && n.y <= i.y;
                            return s && r;
                        },
                        overlaps: function (t) {
                            t = N(t);
                            var e = this.min,
                                i = this.max,
                                n = t.min,
                                o = t.max,
                                s = o.x > e.x && n.x < i.x,
                                r = o.y > e.y && n.y < i.y;
                            return s && r;
                        },
                        isValid: function () {
                            return !(!this.min || !this.max);
                        },
                        pad: function (t) {
                            var e = this.min,
                                i = this.max,
                                n = Math.abs(e.x - i.x) * t,
                                o = Math.abs(e.y - i.y) * t;
                            return N(B(e.x - n, e.y - o), B(i.x + n, i.y + o));
                        },
                        equals: function (t) {
                            return !!t && ((t = N(t)), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight()));
                        },
                    }),
                    (D.prototype = {
                        extend: function (t) {
                            var e,
                                i,
                                n = this._southWest,
                                o = this._northEast;
                            if (t instanceof R) (e = t), (i = t);
                            else {
                                if (!(t instanceof D)) return t ? this.extend($(t) || j(t)) : this;
                                if (((e = t._southWest), (i = t._northEast), !e || !i)) return this;
                            }
                            return (
                                n || o
                                    ? ((n.lat = Math.min(e.lat, n.lat)), (n.lng = Math.min(e.lng, n.lng)), (o.lat = Math.max(i.lat, o.lat)), (o.lng = Math.max(i.lng, o.lng)))
                                    : ((this._southWest = new R(e.lat, e.lng)), (this._northEast = new R(i.lat, i.lng))),
                                this
                            );
                        },
                        pad: function (t) {
                            var e = this._southWest,
                                i = this._northEast,
                                n = Math.abs(e.lat - i.lat) * t,
                                o = Math.abs(e.lng - i.lng) * t;
                            return new D(new R(e.lat - n, e.lng - o), new R(i.lat + n, i.lng + o));
                        },
                        getCenter: function () {
                            return new R((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
                        },
                        getSouthWest: function () {
                            return this._southWest;
                        },
                        getNorthEast: function () {
                            return this._northEast;
                        },
                        getNorthWest: function () {
                            return new R(this.getNorth(), this.getWest());
                        },
                        getSouthEast: function () {
                            return new R(this.getSouth(), this.getEast());
                        },
                        getWest: function () {
                            return this._southWest.lng;
                        },
                        getSouth: function () {
                            return this._southWest.lat;
                        },
                        getEast: function () {
                            return this._northEast.lng;
                        },
                        getNorth: function () {
                            return this._northEast.lat;
                        },
                        contains: function (t) {
                            t = "number" == typeof t[0] || t instanceof R || "lat" in t ? $(t) : j(t);
                            var e,
                                i,
                                n = this._southWest,
                                o = this._northEast;
                            return t instanceof D ? ((e = t.getSouthWest()), (i = t.getNorthEast())) : (e = i = t), e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng;
                        },
                        intersects: function (t) {
                            t = j(t);
                            var e = this._southWest,
                                i = this._northEast,
                                n = t.getSouthWest(),
                                o = t.getNorthEast(),
                                s = o.lat >= e.lat && n.lat <= i.lat,
                                r = o.lng >= e.lng && n.lng <= i.lng;
                            return s && r;
                        },
                        overlaps: function (t) {
                            t = j(t);
                            var e = this._southWest,
                                i = this._northEast,
                                n = t.getSouthWest(),
                                o = t.getNorthEast(),
                                s = o.lat > e.lat && n.lat < i.lat,
                                r = o.lng > e.lng && n.lng < i.lng;
                            return s && r;
                        },
                        toBBoxString: function () {
                            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
                        },
                        equals: function (t, e) {
                            return !!t && ((t = j(t)), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e));
                        },
                        isValid: function () {
                            return !(!this._southWest || !this._northEast);
                        },
                    }),
                    (R.prototype = {
                        equals: function (t, e) {
                            return !!t && ((t = $(t)), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e));
                        },
                        toString: function (t) {
                            return "LatLng(" + u(this.lat, t) + ", " + u(this.lng, t) + ")";
                        },
                        distanceTo: function (t) {
                            return F.distance(this, $(t));
                        },
                        wrap: function () {
                            return F.wrapLatLng(this);
                        },
                        toBounds: function (t) {
                            var e = (180 * t) / 40075017,
                                i = e / Math.cos((Math.PI / 180) * this.lat);
                            return j([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
                        },
                        clone: function () {
                            return new R(this.lat, this.lng, this.alt);
                        },
                    });
                var G,
                    H = {
                        latLngToPoint: function (t, e) {
                            var i = this.projection.project(t),
                                n = this.scale(e);
                            return this.transformation._transform(i, n);
                        },
                        pointToLatLng: function (t, e) {
                            var i = this.scale(e),
                                n = this.transformation.untransform(t, i);
                            return this.projection.unproject(n);
                        },
                        project: function (t) {
                            return this.projection.project(t);
                        },
                        unproject: function (t) {
                            return this.projection.unproject(t);
                        },
                        scale: function (t) {
                            return 256 * Math.pow(2, t);
                        },
                        zoom: function (t) {
                            return Math.log(t / 256) / Math.LN2;
                        },
                        getProjectedBounds: function (t) {
                            if (this.infinite) return null;
                            var e = this.projection.bounds,
                                i = this.scale(t);
                            return new Z(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i));
                        },
                        infinite: !1,
                        wrapLatLng: function (t) {
                            var e = this.wrapLng ? l(t.lng, this.wrapLng, !0) : t.lng;
                            return new R(this.wrapLat ? l(t.lat, this.wrapLat, !0) : t.lat, e, t.alt);
                        },
                        wrapLatLngBounds: function (t) {
                            var e = t.getCenter(),
                                i = this.wrapLatLng(e),
                                n = e.lat - i.lat,
                                o = e.lng - i.lng;
                            if (0 === n && 0 === o) return t;
                            var s = t.getSouthWest(),
                                r = t.getNorthEast();
                            return new D(new R(s.lat - n, s.lng - o), new R(r.lat - n, r.lng - o));
                        },
                    },
                    F = i({}, H, {
                        wrapLng: [-180, 180],
                        R: 6371e3,
                        distance: function (t, e) {
                            var i = Math.PI / 180,
                                n = t.lat * i,
                                o = e.lat * i,
                                s = Math.sin(((e.lat - t.lat) * i) / 2),
                                r = Math.sin(((e.lng - t.lng) * i) / 2),
                                a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                                l = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                            return this.R * l;
                        },
                    }),
                    W = 6378137,
                    V = {
                        R: W,
                        MAX_LATITUDE: 85.0511287798,
                        project: function (t) {
                            var e = Math.PI / 180,
                                i = this.MAX_LATITUDE,
                                n = Math.max(Math.min(i, t.lat), -i),
                                o = Math.sin(n * e);
                            return new A(this.R * t.lng * e, (this.R * Math.log((1 + o) / (1 - o))) / 2);
                        },
                        unproject: function (t) {
                            var e = 180 / Math.PI;
                            return new R((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, (t.x * e) / this.R);
                        },
                        bounds: ((G = W * Math.PI), new Z([-G, -G], [G, G])),
                    };
                function q(t, e, i, n) {
                    if (g(t)) return (this._a = t[0]), (this._b = t[1]), (this._c = t[2]), void (this._d = t[3]);
                    (this._a = t), (this._b = e), (this._c = i), (this._d = n);
                }
                function U(t, e, i, n) {
                    return new q(t, e, i, n);
                }
                q.prototype = {
                    transform: function (t, e) {
                        return this._transform(t.clone(), e);
                    },
                    _transform: function (t, e) {
                        return (e = e || 1), (t.x = e * (this._a * t.x + this._b)), (t.y = e * (this._c * t.y + this._d)), t;
                    },
                    untransform: function (t, e) {
                        return (e = e || 1), new A((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c);
                    },
                };
                var Y = i({}, F, {
                        code: "EPSG:3857",
                        projection: V,
                        transformation: (function () {
                            var t = 0.5 / (Math.PI * V.R);
                            return U(t, 0.5, -t, 0.5);
                        })(),
                    }),
                    X = i({}, Y, { code: "EPSG:900913" });
                function K(t) {
                    return document.createElementNS("http://www.w3.org/2000/svg", t);
                }
                function J(t, e) {
                    var i,
                        n,
                        o,
                        s,
                        r,
                        a,
                        l = "";
                    for (i = 0, o = t.length; i < o; i++) {
                        for (n = 0, s = (r = t[i]).length; n < s; n++) l += (n ? "L" : "M") + (a = r[n]).x + " " + a.y;
                        l += e ? (Dt.svg ? "z" : "x") : "";
                    }
                    return l || "M0 0";
                }
                var Q,
                    tt = document.documentElement.style,
                    et = "ActiveXObject" in window,
                    it = et && !document.addEventListener,
                    nt = "msLaunchUri" in navigator && !("documentMode" in document),
                    ot = Nt("webkit"),
                    st = Nt("android"),
                    rt = Nt("android 2") || Nt("android 3"),
                    at = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
                    lt = st && Nt("Google") && at < 537 && !("AudioNode" in window),
                    ht = !!window.opera,
                    ut = !nt && Nt("chrome"),
                    ct = Nt("gecko") && !ot && !ht && !et,
                    dt = !ut && Nt("safari"),
                    pt = Nt("phantom"),
                    ft = "OTransition" in tt,
                    mt = 0 === navigator.platform.indexOf("Win"),
                    _t = et && "transition" in tt,
                    gt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !rt,
                    vt = "MozPerspective" in tt,
                    yt = !window.L_DISABLE_3D && (_t || gt || vt) && !ft && !pt,
                    bt = "undefined" != typeof orientation || Nt("mobile"),
                    wt = bt && ot,
                    Lt = bt && gt,
                    xt = !window.PointerEvent && window.MSPointerEvent,
                    Ct = !(!window.PointerEvent && !xt),
                    Tt = "ontouchstart" in window || !!window.TouchEvent,
                    St = !window.L_NO_TOUCH && (Tt || Ct),
                    Pt = bt && ht,
                    Mt = bt && ct,
                    kt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
                    Et = (function () {
                        var t = !1;
                        try {
                            var e = Object.defineProperty({}, "passive", {
                                get: function () {
                                    t = !0;
                                },
                            });
                            window.addEventListener("testPassiveEventSupport", h, e), window.removeEventListener("testPassiveEventSupport", h, e);
                        } catch (t) {}
                        return t;
                    })(),
                    zt = !!document.createElement("canvas").getContext,
                    Ot = !(!document.createElementNS || !K("svg").createSVGRect),
                    At = !!Ot && (((Q = document.createElement("div")).innerHTML = "<svg/>"), "http://www.w3.org/2000/svg" === (Q.firstChild && Q.firstChild.namespaceURI)),
                    It =
                        !Ot &&
                        (function () {
                            try {
                                var t = document.createElement("div");
                                t.innerHTML = '<v:shape adj="1"/>';
                                var e = t.firstChild;
                                return (e.style.behavior = "url(#default#VML)"), e && "object" == typeof e.adj;
                            } catch (t) {
                                return !1;
                            }
                        })(),
                    Bt = 0 === navigator.platform.indexOf("Mac"),
                    Zt = 0 === navigator.platform.indexOf("Linux");
                function Nt(t) {
                    return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
                }
                var Dt = {
                        ie: et,
                        ielt9: it,
                        edge: nt,
                        webkit: ot,
                        android: st,
                        android23: rt,
                        androidStock: lt,
                        opera: ht,
                        chrome: ut,
                        gecko: ct,
                        safari: dt,
                        phantom: pt,
                        opera12: ft,
                        win: mt,
                        ie3d: _t,
                        webkit3d: gt,
                        gecko3d: vt,
                        any3d: yt,
                        mobile: bt,
                        mobileWebkit: wt,
                        mobileWebkit3d: Lt,
                        msPointer: xt,
                        pointer: Ct,
                        touch: St,
                        touchNative: Tt,
                        mobileOpera: Pt,
                        mobileGecko: Mt,
                        retina: kt,
                        passiveEvents: Et,
                        canvas: zt,
                        svg: Ot,
                        vml: It,
                        inlineSvg: At,
                        mac: Bt,
                        linux: Zt,
                    },
                    jt = Dt.msPointer ? "MSPointerDown" : "pointerdown",
                    Rt = Dt.msPointer ? "MSPointerMove" : "pointermove",
                    $t = Dt.msPointer ? "MSPointerUp" : "pointerup",
                    Gt = Dt.msPointer ? "MSPointerCancel" : "pointercancel",
                    Ht = { touchstart: jt, touchmove: Rt, touchend: $t, touchcancel: Gt },
                    Ft = { touchstart: te, touchmove: Qt, touchend: Qt, touchcancel: Qt },
                    Wt = {},
                    Vt = !1;
                function qt(t, e, i) {
                    return "touchstart" === e && Jt(), Ft[e] ? ((i = Ft[e].bind(this, i)), t.addEventListener(Ht[e], i, !1), i) : (console.warn("wrong event specified:", e), h);
                }
                function Ut(t, e, i) {
                    Ht[e] ? t.removeEventListener(Ht[e], i, !1) : console.warn("wrong event specified:", e);
                }
                function Yt(t) {
                    Wt[t.pointerId] = t;
                }
                function Xt(t) {
                    Wt[t.pointerId] && (Wt[t.pointerId] = t);
                }
                function Kt(t) {
                    delete Wt[t.pointerId];
                }
                function Jt() {
                    Vt || (document.addEventListener(jt, Yt, !0), document.addEventListener(Rt, Xt, !0), document.addEventListener($t, Kt, !0), document.addEventListener(Gt, Kt, !0), (Vt = !0));
                }
                function Qt(t, e) {
                    if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
                        for (var i in ((e.touches = []), Wt)) e.touches.push(Wt[i]);
                        (e.changedTouches = [e]), t(e);
                    }
                }
                function te(t, e) {
                    e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && Ye(e), Qt(t, e);
                }
                function ee(t) {
                    var e,
                        i,
                        n = {};
                    for (i in t) (e = t[i]), (n[i] = e && e.bind ? e.bind(t) : e);
                    return (t = n), (n.type = "dblclick"), (n.detail = 2), (n.isTrusted = !1), (n._simulated = !0), n;
                }
                var ie = 200;
                function ne(t, e) {
                    t.addEventListener("dblclick", e);
                    var i,
                        n = 0;
                    function o(t) {
                        if (1 === t.detail) {
                            if ("mouse" !== t.pointerType && (!t.sourceCapabilities || t.sourceCapabilities.firesTouchEvents)) {
                                var o = Ke(t);
                                if (
                                    !o.some(function (t) {
                                        return t instanceof HTMLLabelElement && t.attributes.for;
                                    }) ||
                                    o.some(function (t) {
                                        return t instanceof HTMLInputElement || t instanceof HTMLSelectElement;
                                    })
                                ) {
                                    var s = Date.now();
                                    s - n <= ie ? 2 == ++i && e(ee(t)) : (i = 1), (n = s);
                                }
                            }
                        } else i = t.detail;
                    }
                    return t.addEventListener("click", o), { dblclick: e, simDblclick: o };
                }
                function oe(t, e) {
                    t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
                }
                var se,
                    re,
                    ae,
                    le,
                    he,
                    ue = Pe(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
                    ce = Pe(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
                    de = "webkitTransition" === ce || "OTransition" === ce ? ce + "End" : "transitionend";
                function pe(t) {
                    return "string" == typeof t ? document.getElementById(t) : t;
                }
                function fe(t, e) {
                    var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
                    if ((!i || "auto" === i) && document.defaultView) {
                        var n = document.defaultView.getComputedStyle(t, null);
                        i = n ? n[e] : null;
                    }
                    return "auto" === i ? null : i;
                }
                function me(t, e, i) {
                    var n = document.createElement(t);
                    return (n.className = e || ""), i && i.appendChild(n), n;
                }
                function _e(t) {
                    var e = t.parentNode;
                    e && e.removeChild(t);
                }
                function ge(t) {
                    for (; t.firstChild; ) t.removeChild(t.firstChild);
                }
                function ve(t) {
                    var e = t.parentNode;
                    e && e.lastChild !== t && e.appendChild(t);
                }
                function ye(t) {
                    var e = t.parentNode;
                    e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
                }
                function be(t, e) {
                    if (void 0 !== t.classList) return t.classList.contains(e);
                    var i = Ce(t);
                    return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
                }
                function we(t, e) {
                    if (void 0 !== t.classList) for (var i = d(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
                    else if (!be(t, e)) {
                        var s = Ce(t);
                        xe(t, (s ? s + " " : "") + e);
                    }
                }
                function Le(t, e) {
                    void 0 !== t.classList ? t.classList.remove(e) : xe(t, c((" " + Ce(t) + " ").replace(" " + e + " ", " ")));
                }
                function xe(t, e) {
                    void 0 === t.className.baseVal ? (t.className = e) : (t.className.baseVal = e);
                }
                function Ce(t) {
                    return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal;
                }
                function Te(t, e) {
                    "opacity" in t.style ? (t.style.opacity = e) : "filter" in t.style && Se(t, e);
                }
                function Se(t, e) {
                    var i = !1,
                        n = "DXImageTransform.Microsoft.Alpha";
                    try {
                        i = t.filters.item(n);
                    } catch (t) {
                        if (1 === e) return;
                    }
                    (e = Math.round(100 * e)), i ? ((i.Enabled = 100 !== e), (i.Opacity = e)) : (t.style.filter += " progid:" + n + "(opacity=" + e + ")");
                }
                function Pe(t) {
                    for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
                    return !1;
                }
                function Me(t, e, i) {
                    var n = e || new A(0, 0);
                    t.style[ue] = (Dt.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
                }
                function ke(t, e) {
                    (t._leaflet_pos = e), Dt.any3d ? Me(t, e) : ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
                }
                function Ee(t) {
                    return t._leaflet_pos || new A(0, 0);
                }
                if ("onselectstart" in document)
                    (se = function () {
                        je(window, "selectstart", Ye);
                    }),
                        (re = function () {
                            $e(window, "selectstart", Ye);
                        });
                else {
                    var ze = Pe(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                    (se = function () {
                        if (ze) {
                            var t = document.documentElement.style;
                            (ae = t[ze]), (t[ze] = "none");
                        }
                    }),
                        (re = function () {
                            ze && ((document.documentElement.style[ze] = ae), (ae = void 0));
                        });
                }
                function Oe() {
                    je(window, "dragstart", Ye);
                }
                function Ae() {
                    $e(window, "dragstart", Ye);
                }
                function Ie(t) {
                    for (; -1 === t.tabIndex; ) t = t.parentNode;
                    t.style && (Be(), (le = t), (he = t.style.outlineStyle), (t.style.outlineStyle = "none"), je(window, "keydown", Be));
                }
                function Be() {
                    le && ((le.style.outlineStyle = he), (le = void 0), (he = void 0), $e(window, "keydown", Be));
                }
                function Ze(t) {
                    do {
                        t = t.parentNode;
                    } while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
                    return t;
                }
                function Ne(t) {
                    var e = t.getBoundingClientRect();
                    return { x: e.width / t.offsetWidth || 1, y: e.height / t.offsetHeight || 1, boundingClientRect: e };
                }
                var De = {
                    __proto__: null,
                    TRANSFORM: ue,
                    TRANSITION: ce,
                    TRANSITION_END: de,
                    get: pe,
                    getStyle: fe,
                    create: me,
                    remove: _e,
                    empty: ge,
                    toFront: ve,
                    toBack: ye,
                    hasClass: be,
                    addClass: we,
                    removeClass: Le,
                    setClass: xe,
                    getClass: Ce,
                    setOpacity: Te,
                    testProp: Pe,
                    setTransform: Me,
                    setPosition: ke,
                    getPosition: Ee,
                    get disableTextSelection() {
                        return se;
                    },
                    get enableTextSelection() {
                        return re;
                    },
                    disableImageDrag: Oe,
                    enableImageDrag: Ae,
                    preventOutline: Ie,
                    restoreOutline: Be,
                    getSizedParentNode: Ze,
                    getScale: Ne,
                };
                function je(t, e, i, n) {
                    if (e && "object" == typeof e) for (var o in e) Fe(t, o, e[o], i);
                    else for (var s = 0, r = (e = d(e)).length; s < r; s++) Fe(t, e[s], i, n);
                    return this;
                }
                var Re = "_leaflet_events";
                function $e(t, e, i, n) {
                    if (1 === arguments.length) Ge(t), delete t[Re];
                    else if (e && "object" == typeof e) for (var o in e) We(t, o, e[o], i);
                    else if (((e = d(e)), 2 === arguments.length))
                        Ge(t, function (t) {
                            return -1 !== v(e, t);
                        });
                    else for (var s = 0, r = e.length; s < r; s++) We(t, e[s], i, n);
                    return this;
                }
                function Ge(t, e) {
                    for (var i in t[Re]) {
                        var n = i.split(/\d/)[0];
                        (e && !e(n)) || We(t, n, null, null, i);
                    }
                }
                var He = { mouseenter: "mouseover", mouseleave: "mouseout", wheel: !("onwheel" in window) && "mousewheel" };
                function Fe(t, e, i, n) {
                    var o = e + r(i) + (n ? "_" + r(n) : "");
                    if (t[Re] && t[Re][o]) return this;
                    var s = function (e) {
                            return i.call(n || t, e || window.event);
                        },
                        a = s;
                    !Dt.touchNative && Dt.pointer && 0 === e.indexOf("touch")
                        ? (s = qt(t, e, s))
                        : Dt.touch && "dblclick" === e
                        ? (s = ne(t, s))
                        : "addEventListener" in t
                        ? "touchstart" === e || "touchmove" === e || "wheel" === e || "mousewheel" === e
                            ? t.addEventListener(He[e] || e, s, !!Dt.passiveEvents && { passive: !1 })
                            : "mouseenter" === e || "mouseleave" === e
                            ? ((s = function (e) {
                                    (e = e || window.event), ei(t, e) && a(e);
                                }),
                                t.addEventListener(He[e], s, !1))
                            : t.addEventListener(e, a, !1)
                        : t.attachEvent("on" + e, s),
                        (t[Re] = t[Re] || {}),
                        (t[Re][o] = s);
                }
                function We(t, e, i, n, o) {
                    o = o || e + r(i) + (n ? "_" + r(n) : "");
                    var s = t[Re] && t[Re][o];
                    if (!s) return this;
                    !Dt.touchNative && Dt.pointer && 0 === e.indexOf("touch") ? Ut(t, e, s) : Dt.touch && "dblclick" === e ? oe(t, s) : "removeEventListener" in t ? t.removeEventListener(He[e] || e, s, !1) : t.detachEvent("on" + e, s),
                        (t[Re][o] = null);
                }
                function Ve(t) {
                    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? (t.originalEvent._stopped = !0) : (t.cancelBubble = !0), this;
                }
                function qe(t) {
                    return Fe(t, "wheel", Ve), this;
                }
                function Ue(t) {
                    return je(t, "mousedown touchstart dblclick contextmenu", Ve), (t._leaflet_disable_click = !0), this;
                }
                function Ye(t) {
                    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
                }
                function Xe(t) {
                    return Ye(t), Ve(t), this;
                }
                function Ke(t) {
                    if (t.composedPath) return t.composedPath();
                    for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
                    return e;
                }
                function Je(t, e) {
                    if (!e) return new A(t.clientX, t.clientY);
                    var i = Ne(e),
                        n = i.boundingClientRect;
                    return new A((t.clientX - n.left) / i.x - e.clientLeft, (t.clientY - n.top) / i.y - e.clientTop);
                }
                var Qe = Dt.linux && Dt.chrome ? window.devicePixelRatio : Dt.mac ? 3 * window.devicePixelRatio : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
                function ti(t) {
                    return Dt.edge
                        ? t.wheelDeltaY / 2
                        : t.deltaY && 0 === t.deltaMode
                        ? -t.deltaY / Qe
                        : t.deltaY && 1 === t.deltaMode
                        ? 20 * -t.deltaY
                        : t.deltaY && 2 === t.deltaMode
                        ? 60 * -t.deltaY
                        : t.deltaX || t.deltaZ
                        ? 0
                        : t.wheelDelta
                        ? (t.wheelDeltaY || t.wheelDelta) / 2
                        : t.detail && Math.abs(t.detail) < 32765
                        ? 20 * -t.detail
                        : t.detail
                        ? (t.detail / -32765) * 60
                        : 0;
                }
                function ei(t, e) {
                    var i = e.relatedTarget;
                    if (!i) return !0;
                    try {
                        for (; i && i !== t; ) i = i.parentNode;
                    } catch (t) {
                        return !1;
                    }
                    return i !== t;
                }
                var ii = {
                        __proto__: null,
                        on: je,
                        off: $e,
                        stopPropagation: Ve,
                        disableScrollPropagation: qe,
                        disableClickPropagation: Ue,
                        preventDefault: Ye,
                        stop: Xe,
                        getPropagationPath: Ke,
                        getMousePosition: Je,
                        getWheelDelta: ti,
                        isExternalTarget: ei,
                        addListener: je,
                        removeListener: $e,
                    },
                    ni = O.extend({
                        run: function (t, e, i, n) {
                            this.stop(),
                                (this._el = t),
                                (this._inProgress = !0),
                                (this._duration = i || 0.25),
                                (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
                                (this._startPos = Ee(t)),
                                (this._offset = e.subtract(this._startPos)),
                                (this._startTime = +new Date()),
                                this.fire("start"),
                                this._animate();
                        },
                        stop: function () {
                            this._inProgress && (this._step(!0), this._complete());
                        },
                        _animate: function () {
                            (this._animId = S(this._animate, this)), this._step();
                        },
                        _step: function (t) {
                            var e = +new Date() - this._startTime,
                                i = 1e3 * this._duration;
                            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
                        },
                        _runFrame: function (t, e) {
                            var i = this._startPos.add(this._offset.multiplyBy(t));
                            e && i._round(), ke(this._el, i), this.fire("step");
                        },
                        _complete: function () {
                            P(this._animId), (this._inProgress = !1), this.fire("end");
                        },
                        _easeOut: function (t) {
                            return 1 - Math.pow(1 - t, this._easeOutPower);
                        },
                    }),
                    oi = O.extend({
                        options: {
                            crs: Y,
                            center: void 0,
                            zoom: void 0,
                            minZoom: void 0,
                            maxZoom: void 0,
                            layers: [],
                            maxBounds: void 0,
                            renderer: void 0,
                            zoomAnimation: !0,
                            zoomAnimationThreshold: 4,
                            fadeAnimation: !0,
                            markerZoomAnimation: !0,
                            transform3DLimit: 8388608,
                            zoomSnap: 1,
                            zoomDelta: 1,
                            trackResize: !0,
                        },
                        initialize: function (t, e) {
                            (e = p(this, e)),
                                (this._handlers = []),
                                (this._layers = {}),
                                (this._zoomBoundLayers = {}),
                                (this._sizeChanged = !0),
                                this._initContainer(t),
                                this._initLayout(),
                                (this._onResize = o(this._onResize, this)),
                                this._initEvents(),
                                e.maxBounds && this.setMaxBounds(e.maxBounds),
                                void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                                e.center && void 0 !== e.zoom && this.setView($(e.center), e.zoom, { reset: !0 }),
                                this.callInitHooks(),
                                (this._zoomAnimated = ce && Dt.any3d && !Dt.mobileOpera && this.options.zoomAnimation),
                                this._zoomAnimated && (this._createAnimProxy(), je(this._proxy, de, this._catchTransitionEnd, this)),
                                this._addLayers(this.options.layers);
                        },
                        setView: function (t, e, n) {
                            return (
                                (e = void 0 === e ? this._zoom : this._limitZoom(e)),
                                (t = this._limitCenter($(t), e, this.options.maxBounds)),
                                (n = n || {}),
                                this._stop(),
                                this._loaded &&
                                !n.reset &&
                                !0 !== n &&
                                (void 0 !== n.animate && ((n.zoom = i({ animate: n.animate }, n.zoom)), (n.pan = i({ animate: n.animate, duration: n.duration }, n.pan))),
                                this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan))
                                    ? (clearTimeout(this._sizeTimer), this)
                                    : (this._resetView(t, e, n.pan && n.pan.noMoveStart), this)
                            );
                        },
                        setZoom: function (t, e) {
                            return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : ((this._zoom = t), this);
                        },
                        zoomIn: function (t, e) {
                            return (t = t || (Dt.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom + t, e);
                        },
                        zoomOut: function (t, e) {
                            return (t = t || (Dt.any3d ? this.options.zoomDelta : 1)), this.setZoom(this._zoom - t, e);
                        },
                        setZoomAround: function (t, e, i) {
                            var n = this.getZoomScale(e),
                                o = this.getSize().divideBy(2),
                                s = (t instanceof A ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                                r = this.containerPointToLatLng(o.add(s));
                            return this.setView(r, e, { zoom: i });
                        },
                        _getBoundsCenterZoom: function (t, e) {
                            (e = e || {}), (t = t.getBounds ? t.getBounds() : j(t));
                            var i = B(e.paddingTopLeft || e.padding || [0, 0]),
                                n = B(e.paddingBottomRight || e.padding || [0, 0]),
                                o = this.getBoundsZoom(t, !1, i.add(n));
                            if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return { center: t.getCenter(), zoom: o };
                            var s = n.subtract(i).divideBy(2),
                                r = this.project(t.getSouthWest(), o),
                                a = this.project(t.getNorthEast(), o);
                            return { center: this.unproject(r.add(a).divideBy(2).add(s), o), zoom: o };
                        },
                        fitBounds: function (t, e) {
                            if (!(t = j(t)).isValid()) throw new Error("Bounds are not valid.");
                            var i = this._getBoundsCenterZoom(t, e);
                            return this.setView(i.center, i.zoom, e);
                        },
                        fitWorld: function (t) {
                            return this.fitBounds(
                                [
                                    [-90, -180],
                                    [90, 180],
                                ],
                                t
                            );
                        },
                        panTo: function (t, e) {
                            return this.setView(t, this._zoom, { pan: e });
                        },
                        panBy: function (t, e) {
                            if (((e = e || {}), !(t = B(t).round()).x && !t.y)) return this.fire("moveend");
                            if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                            if ((this._panAnim || ((this._panAnim = new ni()), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate)) {
                                we(this._mapPane, "leaflet-pan-anim");
                                var i = this._getMapPanePos().subtract(t).round();
                                this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
                            } else this._rawPanBy(t), this.fire("move").fire("moveend");
                            return this;
                        },
                        flyTo: function (t, e, i) {
                            if (!1 === (i = i || {}).animate || !Dt.any3d) return this.setView(t, e, i);
                            this._stop();
                            var n = this.project(this.getCenter()),
                                o = this.project(t),
                                s = this.getSize(),
                                r = this._zoom;
                            (t = $(t)), (e = void 0 === e ? r : e);
                            var a = Math.max(s.x, s.y),
                                l = a * this.getZoomScale(r, e),
                                h = o.distanceTo(n) || 1,
                                u = 1.42,
                                c = u * u;
                            function d(t) {
                                var e = (l * l - a * a + (t ? -1 : 1) * c * c * h * h) / (2 * (t ? l : a) * c * h),
                                    i = Math.sqrt(e * e + 1) - e;
                                return i < 1e-9 ? -18 : Math.log(i);
                            }
                            function p(t) {
                                return (Math.exp(t) - Math.exp(-t)) / 2;
                            }
                            function f(t) {
                                return (Math.exp(t) + Math.exp(-t)) / 2;
                            }
                            function m(t) {
                                return p(t) / f(t);
                            }
                            var _ = d(0);
                            function g(t) {
                                return a * (f(_) / f(_ + u * t));
                            }
                            function v(t) {
                                return (a * (f(_) * m(_ + u * t) - p(_))) / c;
                            }
                            function y(t) {
                                return 1 - Math.pow(1 - t, 1.5);
                            }
                            var b = Date.now(),
                                w = (d(1) - _) / u,
                                L = i.duration ? 1e3 * i.duration : 1e3 * w * 0.8;
                            function x() {
                                var i = (Date.now() - b) / L,
                                    s = y(i) * w;
                                i <= 1 ? ((this._flyToFrame = S(x, this)), this._move(this.unproject(n.add(o.subtract(n).multiplyBy(v(s) / h)), r), this.getScaleZoom(a / g(s), r), { flyTo: !0 })) : this._move(t, e)._moveEnd(!0);
                            }
                            return this._moveStart(!0, i.noMoveStart), x.call(this), this;
                        },
                        flyToBounds: function (t, e) {
                            var i = this._getBoundsCenterZoom(t, e);
                            return this.flyTo(i.center, i.zoom, e);
                        },
                        setMaxBounds: function (t) {
                            return (
                                (t = j(t)),
                                this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds),
                                t.isValid() ? ((this.options.maxBounds = t), this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : ((this.options.maxBounds = null), this)
                            );
                        },
                        setMinZoom: function (t) {
                            var e = this.options.minZoom;
                            return (this.options.minZoom = t), this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
                        },
                        setMaxZoom: function (t) {
                            var e = this.options.maxZoom;
                            return (this.options.maxZoom = t), this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
                        },
                        panInsideBounds: function (t, e) {
                            this._enforcingBounds = !0;
                            var i = this.getCenter(),
                                n = this._limitCenter(i, this._zoom, j(t));
                            return i.equals(n) || this.panTo(n, e), (this._enforcingBounds = !1), this;
                        },
                        panInside: function (t, e) {
                            var i = B((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                                n = B(e.paddingBottomRight || e.padding || [0, 0]),
                                o = this.project(this.getCenter()),
                                s = this.project(t),
                                r = this.getPixelBounds(),
                                a = N([r.min.add(i), r.max.subtract(n)]),
                                l = a.getSize();
                            if (!a.contains(s)) {
                                this._enforcingBounds = !0;
                                var h = s.subtract(a.getCenter()),
                                    u = a.extend(s).getSize().subtract(l);
                                (o.x += h.x < 0 ? -u.x : u.x), (o.y += h.y < 0 ? -u.y : u.y), this.panTo(this.unproject(o), e), (this._enforcingBounds = !1);
                            }
                            return this;
                        },
                        invalidateSize: function (t) {
                            if (!this._loaded) return this;
                            t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
                            var e = this.getSize();
                            (this._sizeChanged = !0), (this._lastCenter = null);
                            var n = this.getSize(),
                                s = e.divideBy(2).round(),
                                r = n.divideBy(2).round(),
                                a = s.subtract(r);
                            return a.x || a.y
                                ? (t.animate && t.pan
                                        ? this.panBy(a)
                                        : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), (this._sizeTimer = setTimeout(o(this.fire, this, "moveend"), 200))) : this.fire("moveend")),
                                    this.fire("resize", { oldSize: e, newSize: n }))
                                : this;
                        },
                        stop: function () {
                            return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
                        },
                        locate: function (t) {
                            if (((t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t)), !("geolocation" in navigator))) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
                            var e = o(this._handleGeolocationResponse, this),
                                n = o(this._handleGeolocationError, this);
                            return t.watch ? (this._locationWatchId = navigator.geolocation.watchPosition(e, n, t)) : navigator.geolocation.getCurrentPosition(e, n, t), this;
                        },
                        stopLocate: function () {
                            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
                        },
                        _handleGeolocationError: function (t) {
                            if (this._container._leaflet_id) {
                                var e = t.code,
                                    i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: e, message: "Geolocation error: " + i + "." });
                            }
                        },
                        _handleGeolocationResponse: function (t) {
                            if (this._container._leaflet_id) {
                                var e = new R(t.coords.latitude, t.coords.longitude),
                                    i = e.toBounds(2 * t.coords.accuracy),
                                    n = this._locateOptions;
                                if (n.setView) {
                                    var o = this.getBoundsZoom(i);
                                    this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o);
                                }
                                var s = { latlng: e, bounds: i, timestamp: t.timestamp };
                                for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
                                this.fire("locationfound", s);
                            }
                        },
                        addHandler: function (t, e) {
                            if (!e) return this;
                            var i = (this[t] = new e(this));
                            return this._handlers.push(i), this.options[t] && i.enable(), this;
                        },
                        remove: function () {
                            if ((this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id))
                                throw new Error("Map container is being reused by another instance");
                            try {
                                delete this._container._leaflet_id, delete this._containerId;
                            } catch (t) {
                                (this._container._leaflet_id = void 0), (this._containerId = void 0);
                            }
                            var t;
                            for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
                            this._stop(),
                            _e(this._mapPane),
                            this._clearControlPos && this._clearControlPos(),
                            this._resizeRequest && (P(this._resizeRequest), (this._resizeRequest = null)),
                            this._clearHandlers(),
                            this._loaded && this.fire("unload"),
                            this._layers))
                                this._layers[t].remove();
                            for (t in this._panes) _e(this._panes[t]);
                            return (this._layers = []), (this._panes = []), delete this._mapPane, delete this._renderer, this;
                        },
                        createPane: function (t, e) {
                            var i = me("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                            return t && (this._panes[t] = i), i;
                        },
                        getCenter: function () {
                            return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
                        },
                        getZoom: function () {
                            return this._zoom;
                        },
                        getBounds: function () {
                            var t = this.getPixelBounds();
                            return new D(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
                        },
                        getMinZoom: function () {
                            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
                        },
                        getMaxZoom: function () {
                            return void 0 === this.options.maxZoom ? (void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom) : this.options.maxZoom;
                        },
                        getBoundsZoom: function (t, e, i) {
                            (t = j(t)), (i = B(i || [0, 0]));
                            var n = this.getZoom() || 0,
                                o = this.getMinZoom(),
                                s = this.getMaxZoom(),
                                r = t.getNorthWest(),
                                a = t.getSouthEast(),
                                l = this.getSize().subtract(i),
                                h = N(this.project(a, n), this.project(r, n)).getSize(),
                                u = Dt.any3d ? this.options.zoomSnap : 1,
                                c = l.x / h.x,
                                d = l.y / h.y,
                                p = e ? Math.max(c, d) : Math.min(c, d);
                            return (n = this.getScaleZoom(p, n)), u && ((n = Math.round(n / (u / 100)) * (u / 100)), (n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u)), Math.max(o, Math.min(s, n));
                        },
                        getSize: function () {
                            return (this._size && !this._sizeChanged) || ((this._size = new A(this._container.clientWidth || 0, this._container.clientHeight || 0)), (this._sizeChanged = !1)), this._size.clone();
                        },
                        getPixelBounds: function (t, e) {
                            var i = this._getTopLeftPoint(t, e);
                            return new Z(i, i.add(this.getSize()));
                        },
                        getPixelOrigin: function () {
                            return this._checkIfLoaded(), this._pixelOrigin;
                        },
                        getPixelWorldBounds: function (t) {
                            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
                        },
                        getPane: function (t) {
                            return "string" == typeof t ? this._panes[t] : t;
                        },
                        getPanes: function () {
                            return this._panes;
                        },
                        getContainer: function () {
                            return this._container;
                        },
                        getZoomScale: function (t, e) {
                            var i = this.options.crs;
                            return (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e);
                        },
                        getScaleZoom: function (t, e) {
                            var i = this.options.crs;
                            e = void 0 === e ? this._zoom : e;
                            var n = i.zoom(t * i.scale(e));
                            return isNaN(n) ? 1 / 0 : n;
                        },
                        project: function (t, e) {
                            return (e = void 0 === e ? this._zoom : e), this.options.crs.latLngToPoint($(t), e);
                        },
                        unproject: function (t, e) {
                            return (e = void 0 === e ? this._zoom : e), this.options.crs.pointToLatLng(B(t), e);
                        },
                        layerPointToLatLng: function (t) {
                            var e = B(t).add(this.getPixelOrigin());
                            return this.unproject(e);
                        },
                        latLngToLayerPoint: function (t) {
                            return this.project($(t))._round()._subtract(this.getPixelOrigin());
                        },
                        wrapLatLng: function (t) {
                            return this.options.crs.wrapLatLng($(t));
                        },
                        wrapLatLngBounds: function (t) {
                            return this.options.crs.wrapLatLngBounds(j(t));
                        },
                        distance: function (t, e) {
                            return this.options.crs.distance($(t), $(e));
                        },
                        containerPointToLayerPoint: function (t) {
                            return B(t).subtract(this._getMapPanePos());
                        },
                        layerPointToContainerPoint: function (t) {
                            return B(t).add(this._getMapPanePos());
                        },
                        containerPointToLatLng: function (t) {
                            var e = this.containerPointToLayerPoint(B(t));
                            return this.layerPointToLatLng(e);
                        },
                        latLngToContainerPoint: function (t) {
                            return this.layerPointToContainerPoint(this.latLngToLayerPoint($(t)));
                        },
                        mouseEventToContainerPoint: function (t) {
                            return Je(t, this._container);
                        },
                        mouseEventToLayerPoint: function (t) {
                            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
                        },
                        mouseEventToLatLng: function (t) {
                            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
                        },
                        _initContainer: function (t) {
                            var e = (this._container = pe(t));
                            if (!e) throw new Error("Map container not found.");
                            if (e._leaflet_id) throw new Error("Map container is already initialized.");
                            je(e, "scroll", this._onScroll, this), (this._containerId = r(e));
                        },
                        _initLayout: function () {
                            var t = this._container;
                            (this._fadeAnimated = this.options.fadeAnimation && Dt.any3d),
                                we(
                                    t,
                                    "leaflet-container" +
                                        (Dt.touch ? " leaflet-touch" : "") +
                                        (Dt.retina ? " leaflet-retina" : "") +
                                        (Dt.ielt9 ? " leaflet-oldie" : "") +
                                        (Dt.safari ? " leaflet-safari" : "") +
                                        (this._fadeAnimated ? " leaflet-fade-anim" : "")
                                );
                            var e = fe(t, "position");
                            "absolute" !== e && "relative" !== e && "fixed" !== e && "sticky" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
                        },
                        _initPanes: function () {
                            var t = (this._panes = {});
                            (this._paneRenderers = {}),
                                (this._mapPane = this.createPane("mapPane", this._container)),
                                ke(this._mapPane, new A(0, 0)),
                                this.createPane("tilePane"),
                                this.createPane("overlayPane"),
                                this.createPane("shadowPane"),
                                this.createPane("markerPane"),
                                this.createPane("tooltipPane"),
                                this.createPane("popupPane"),
                                this.options.markerZoomAnimation || (we(t.markerPane, "leaflet-zoom-hide"), we(t.shadowPane, "leaflet-zoom-hide"));
                        },
                        _resetView: function (t, e, i) {
                            ke(this._mapPane, new A(0, 0));
                            var n = !this._loaded;
                            (this._loaded = !0), (e = this._limitZoom(e)), this.fire("viewprereset");
                            var o = this._zoom !== e;
                            this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
                        },
                        _moveStart: function (t, e) {
                            return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
                        },
                        _move: function (t, e, i, n) {
                            void 0 === e && (e = this._zoom);
                            var o = this._zoom !== e;
                            return (
                                (this._zoom = e),
                                (this._lastCenter = t),
                                (this._pixelOrigin = this._getNewPixelOrigin(t)),
                                n ? i && i.pinch && this.fire("zoom", i) : ((o || (i && i.pinch)) && this.fire("zoom", i), this.fire("move", i)),
                                this
                            );
                        },
                        _moveEnd: function (t) {
                            return t && this.fire("zoomend"), this.fire("moveend");
                        },
                        _stop: function () {
                            return P(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
                        },
                        _rawPanBy: function (t) {
                            ke(this._mapPane, this._getMapPanePos().subtract(t));
                        },
                        _getZoomSpan: function () {
                            return this.getMaxZoom() - this.getMinZoom();
                        },
                        _panInsideMaxBounds: function () {
                            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
                        },
                        _checkIfLoaded: function () {
                            if (!this._loaded) throw new Error("Set map center and zoom first.");
                        },
                        _initEvents: function (t) {
                            (this._targets = {}), (this._targets[r(this._container)] = this);
                            var e = t ? $e : je;
                            e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this),
                                this.options.trackResize && e(window, "resize", this._onResize, this),
                                Dt.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
                        },
                        _onResize: function () {
                            P(this._resizeRequest),
                                (this._resizeRequest = S(function () {
                                    this.invalidateSize({ debounceMoveend: !0 });
                                }, this));
                        },
                        _onScroll: function () {
                            (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
                        },
                        _onMoveEnd: function () {
                            var t = this._getMapPanePos();
                            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
                        },
                        _findEventTargets: function (t, e) {
                            for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, a = !1; s; ) {
                                if ((i = this._targets[r(s)]) && ("click" === e || "preclick" === e) && this._draggableMoved(i)) {
                                    a = !0;
                                    break;
                                }
                                if (i && i.listens(e, !0)) {
                                    if (o && !ei(s, t)) break;
                                    if ((n.push(i), o)) break;
                                }
                                if (s === this._container) break;
                                s = s.parentNode;
                            }
                            return n.length || a || o || !this.listens(e, !0) || (n = [this]), n;
                        },
                        _isClickDisabled: function (t) {
                            for (; t && t !== this._container; ) {
                                if (t._leaflet_disable_click) return !0;
                                t = t.parentNode;
                            }
                        },
                        _handleDOMEvent: function (t) {
                            var e = t.target || t.srcElement;
                            if (!(!this._loaded || e._leaflet_disable_events || ("click" === t.type && this._isClickDisabled(e)))) {
                                var i = t.type;
                                "mousedown" === i && Ie(e), this._fireDOMEvent(t, i);
                            }
                        },
                        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
                        _fireDOMEvent: function (t, e, n) {
                            if ("click" === t.type) {
                                var o = i({}, t);
                                (o.type = "preclick"), this._fireDOMEvent(o, o.type, n);
                            }
                            var s = this._findEventTargets(t, e);
                            if (n) {
                                for (var r = [], a = 0; a < n.length; a++) n[a].listens(e, !0) && r.push(n[a]);
                                s = r.concat(s);
                            }
                            if (s.length) {
                                "contextmenu" === e && Ye(t);
                                var l = s[0],
                                    h = { originalEvent: t };
                                if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                                    var u = l.getLatLng && (!l._radius || l._radius <= 10);
                                    (h.containerPoint = u ? this.latLngToContainerPoint(l.getLatLng()) : this.mouseEventToContainerPoint(t)),
                                        (h.layerPoint = this.containerPointToLayerPoint(h.containerPoint)),
                                        (h.latlng = u ? l.getLatLng() : this.layerPointToLatLng(h.layerPoint));
                                }
                                for (a = 0; a < s.length; a++) if ((s[a].fire(e, h, !0), h.originalEvent._stopped || (!1 === s[a].options.bubblingMouseEvents && -1 !== v(this._mouseEvents, e)))) return;
                            }
                        },
                        _draggableMoved: function (t) {
                            return ((t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved()) || (this.boxZoom && this.boxZoom.moved());
                        },
                        _clearHandlers: function () {
                            for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable();
                        },
                        whenReady: function (t, e) {
                            return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
                        },
                        _getMapPanePos: function () {
                            return Ee(this._mapPane) || new A(0, 0);
                        },
                        _moved: function () {
                            var t = this._getMapPanePos();
                            return t && !t.equals([0, 0]);
                        },
                        _getTopLeftPoint: function (t, e) {
                            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos());
                        },
                        _getNewPixelOrigin: function (t, e) {
                            var i = this.getSize()._divideBy(2);
                            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
                        },
                        _latLngToNewLayerPoint: function (t, e, i) {
                            var n = this._getNewPixelOrigin(i, e);
                            return this.project(t, e)._subtract(n);
                        },
                        _latLngBoundsToNewLayerBounds: function (t, e, i) {
                            var n = this._getNewPixelOrigin(i, e);
                            return N([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)]);
                        },
                        _getCenterLayerPoint: function () {
                            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
                        },
                        _getCenterOffset: function (t) {
                            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
                        },
                        _limitCenter: function (t, e, i) {
                            if (!i) return t;
                            var n = this.project(t, e),
                                o = this.getSize().divideBy(2),
                                s = new Z(n.subtract(o), n.add(o)),
                                r = this._getBoundsOffset(s, i, e);
                            return Math.abs(r.x) <= 1 && Math.abs(r.y) <= 1 ? t : this.unproject(n.add(r), e);
                        },
                        _limitOffset: function (t, e) {
                            if (!e) return t;
                            var i = this.getPixelBounds(),
                                n = new Z(i.min.add(t), i.max.add(t));
                            return t.add(this._getBoundsOffset(n, e));
                        },
                        _getBoundsOffset: function (t, e, i) {
                            var n = N(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                                o = n.min.subtract(t.min),
                                s = n.max.subtract(t.max);
                            return new A(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
                        },
                        _rebound: function (t, e) {
                            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
                        },
                        _limitZoom: function (t) {
                            var e = this.getMinZoom(),
                                i = this.getMaxZoom(),
                                n = Dt.any3d ? this.options.zoomSnap : 1;
                            return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
                        },
                        _onPanTransitionStep: function () {
                            this.fire("move");
                        },
                        _onPanTransitionEnd: function () {
                            Le(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
                        },
                        _tryAnimatedPan: function (t, e) {
                            var i = this._getCenterOffset(t)._trunc();
                            return !((!0 !== (e && e.animate) && !this.getSize().contains(i)) || (this.panBy(i, e), 0));
                        },
                        _createAnimProxy: function () {
                            var t = (this._proxy = me("div", "leaflet-proxy leaflet-zoom-animated"));
                            this._panes.mapPane.appendChild(t),
                                this.on(
                                    "zoomanim",
                                    function (t) {
                                        var e = ue,
                                            i = this._proxy.style[e];
                                        Me(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd();
                                    },
                                    this
                                ),
                                this.on("load moveend", this._animMoveEnd, this),
                                this._on("unload", this._destroyAnimProxy, this);
                        },
                        _destroyAnimProxy: function () {
                            _e(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
                        },
                        _animMoveEnd: function () {
                            var t = this.getCenter(),
                                e = this.getZoom();
                            Me(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
                        },
                        _catchTransitionEnd: function (t) {
                            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
                        },
                        _nothingToAnimate: function () {
                            return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
                        },
                        _tryAnimatedZoom: function (t, e, i) {
                            if (this._animatingZoom) return !0;
                            if (((i = i || {}), !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)) return !1;
                            var n = this.getZoomScale(e),
                                o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                            return !(
                                (!0 !== i.animate && !this.getSize().contains(o)) ||
                                (S(function () {
                                    this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
                                }, this),
                                0)
                            );
                        },
                        _animateZoom: function (t, e, i, n) {
                            this._mapPane &&
                                (i && ((this._animatingZoom = !0), (this._animateToCenter = t), (this._animateToZoom = e), we(this._mapPane, "leaflet-zoom-anim")),
                                this.fire("zoomanim", { center: t, zoom: e, noUpdate: n }),
                                this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
                                this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                                setTimeout(o(this._onZoomTransitionEnd, this), 250));
                        },
                        _onZoomTransitionEnd: function () {
                            this._animatingZoom &&
                                (this._mapPane && Le(this._mapPane, "leaflet-zoom-anim"),
                                (this._animatingZoom = !1),
                                this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
                                this._tempFireZoomEvent && this.fire("zoom"),
                                delete this._tempFireZoomEvent,
                                this.fire("move"),
                                this._moveEnd(!0));
                        },
                    });
                function si(t, e) {
                    return new oi(t, e);
                }
                var ri = k.extend({
                        options: { position: "topright" },
                        initialize: function (t) {
                            p(this, t);
                        },
                        getPosition: function () {
                            return this.options.position;
                        },
                        setPosition: function (t) {
                            var e = this._map;
                            return e && e.removeControl(this), (this.options.position = t), e && e.addControl(this), this;
                        },
                        getContainer: function () {
                            return this._container;
                        },
                        addTo: function (t) {
                            this.remove(), (this._map = t);
                            var e = (this._container = this.onAdd(t)),
                                i = this.getPosition(),
                                n = t._controlCorners[i];
                            return we(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
                        },
                        remove: function () {
                            return this._map ? (_e(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), (this._map = null), this) : this;
                        },
                        _refocusOnMap: function (t) {
                            this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
                        },
                    }),
                    ai = function (t) {
                        return new ri(t);
                    };
                oi.include({
                    addControl: function (t) {
                        return t.addTo(this), this;
                    },
                    removeControl: function (t) {
                        return t.remove(), this;
                    },
                    _initControlPos: function () {
                        var t = (this._controlCorners = {}),
                            e = "leaflet-",
                            i = (this._controlContainer = me("div", e + "control-container", this._container));
                        function n(n, o) {
                            var s = e + n + " " + e + o;
                            t[n + o] = me("div", s, i);
                        }
                        n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
                    },
                    _clearControlPos: function () {
                        for (var t in this._controlCorners) _e(this._controlCorners[t]);
                        _e(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
                    },
                });
                var li = ri.extend({
                        options: {
                            collapsed: !0,
                            position: "topright",
                            autoZIndex: !0,
                            hideSingleBase: !1,
                            sortLayers: !1,
                            sortFunction: function (t, e, i, n) {
                                return i < n ? -1 : n < i ? 1 : 0;
                            },
                        },
                        initialize: function (t, e, i) {
                            for (var n in (p(this, i), (this._layerControlInputs = []), (this._layers = []), (this._lastZIndex = 0), (this._handlingClick = !1), (this._preventClick = !1), t)) this._addLayer(t[n], n);
                            for (n in e) this._addLayer(e[n], n, !0);
                        },
                        onAdd: function (t) {
                            this._initLayout(), this._update(), (this._map = t), t.on("zoomend", this._checkDisabledLayers, this);
                            for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                            return this._container;
                        },
                        addTo: function (t) {
                            return ri.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
                        },
                        onRemove: function () {
                            this._map.off("zoomend", this._checkDisabledLayers, this);
                            for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this);
                        },
                        addBaseLayer: function (t, e) {
                            return this._addLayer(t, e), this._map ? this._update() : this;
                        },
                        addOverlay: function (t, e) {
                            return this._addLayer(t, e, !0), this._map ? this._update() : this;
                        },
                        removeLayer: function (t) {
                            t.off("add remove", this._onLayerChange, this);
                            var e = this._getLayer(r(t));
                            return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
                        },
                        expand: function () {
                            we(this._container, "leaflet-control-layers-expanded"), (this._section.style.height = null);
                            var t = this._map.getSize().y - (this._container.offsetTop + 50);
                            return (
                                t < this._section.clientHeight ? (we(this._section, "leaflet-control-layers-scrollbar"), (this._section.style.height = t + "px")) : Le(this._section, "leaflet-control-layers-scrollbar"),
                                this._checkDisabledLayers(),
                                this
                            );
                        },
                        collapse: function () {
                            return Le(this._container, "leaflet-control-layers-expanded"), this;
                        },
                        _initLayout: function () {
                            var t = "leaflet-control-layers",
                                e = (this._container = me("div", t)),
                                i = this.options.collapsed;
                            e.setAttribute("aria-haspopup", !0), Ue(e), qe(e);
                            var n = (this._section = me("section", t + "-list"));
                            i && (this._map.on("click", this.collapse, this), je(e, { mouseenter: this._expandSafely, mouseleave: this.collapse }, this));
                            var o = (this._layersLink = me("a", t + "-toggle", e));
                            (o.href = "#"),
                                (o.title = "Layers"),
                                o.setAttribute("role", "button"),
                                je(
                                    o,
                                    {
                                        keydown: function (t) {
                                            13 === t.keyCode && this._expandSafely();
                                        },
                                        click: function (t) {
                                            Ye(t), this._expandSafely();
                                        },
                                    },
                                    this
                                ),
                                i || this.expand(),
                                (this._baseLayersList = me("div", t + "-base", n)),
                                (this._separator = me("div", t + "-separator", n)),
                                (this._overlaysList = me("div", t + "-overlays", n)),
                                e.appendChild(n);
                        },
                        _getLayer: function (t) {
                            for (var e = 0; e < this._layers.length; e++) if (this._layers[e] && r(this._layers[e].layer) === t) return this._layers[e];
                        },
                        _addLayer: function (t, e, i) {
                            this._map && t.on("add remove", this._onLayerChange, this),
                                this._layers.push({ layer: t, name: e, overlay: i }),
                                this.options.sortLayers &&
                                    this._layers.sort(
                                        o(function (t, e) {
                                            return this.options.sortFunction(t.layer, e.layer, t.name, e.name);
                                        }, this)
                                    ),
                                this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
                                this._expandIfNotCollapsed();
                        },
                        _update: function () {
                            if (!this._container) return this;
                            ge(this._baseLayersList), ge(this._overlaysList), (this._layerControlInputs = []);
                            var t,
                                e,
                                i,
                                n,
                                o = 0;
                            for (i = 0; i < this._layers.length; i++) (n = this._layers[i]), this._addItem(n), (e = e || n.overlay), (t = t || !n.overlay), (o += n.overlay ? 0 : 1);
                            return this.options.hideSingleBase && ((t = t && o > 1), (this._baseLayersList.style.display = t ? "" : "none")), (this._separator.style.display = e && t ? "" : "none"), this;
                        },
                        _onLayerChange: function (t) {
                            this._handlingClick || this._update();
                            var e = this._getLayer(r(t.target)),
                                i = e.overlay ? ("add" === t.type ? "overlayadd" : "overlayremove") : "add" === t.type ? "baselayerchange" : null;
                            i && this._map.fire(i, e);
                        },
                        _createRadioElement: function (t, e) {
                            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                                n = document.createElement("div");
                            return (n.innerHTML = i), n.firstChild;
                        },
                        _addItem: function (t) {
                            var e,
                                i = document.createElement("label"),
                                n = this._map.hasLayer(t.layer);
                            t.overlay
                                ? (((e = document.createElement("input")).type = "checkbox"), (e.className = "leaflet-control-layers-selector"), (e.defaultChecked = n))
                                : (e = this._createRadioElement("leaflet-base-layers_" + r(this), n)),
                                this._layerControlInputs.push(e),
                                (e.layerId = r(t.layer)),
                                je(e, "click", this._onInputClick, this);
                            var o = document.createElement("span");
                            o.innerHTML = " " + t.name;
                            var s = document.createElement("span");
                            return i.appendChild(s), s.appendChild(e), s.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i;
                        },
                        _onInputClick: function () {
                            if (!this._preventClick) {
                                var t,
                                    e,
                                    i = this._layerControlInputs,
                                    n = [],
                                    o = [];
                                this._handlingClick = !0;
                                for (var s = i.length - 1; s >= 0; s--) (t = i[s]), (e = this._getLayer(t.layerId).layer), t.checked ? n.push(e) : t.checked || o.push(e);
                                for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                                for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                                (this._handlingClick = !1), this._refocusOnMap();
                            }
                        },
                        _checkDisabledLayers: function () {
                            for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--)
                                (t = i[o]), (e = this._getLayer(t.layerId).layer), (t.disabled = (void 0 !== e.options.minZoom && n < e.options.minZoom) || (void 0 !== e.options.maxZoom && n > e.options.maxZoom));
                        },
                        _expandIfNotCollapsed: function () {
                            return this._map && !this.options.collapsed && this.expand(), this;
                        },
                        _expandSafely: function () {
                            var t = this._section;
                            (this._preventClick = !0), je(t, "click", Ye), this.expand();
                            var e = this;
                            setTimeout(function () {
                                $e(t, "click", Ye), (e._preventClick = !1);
                            });
                        },
                    }),
                    hi = function (t, e, i) {
                        return new li(t, e, i);
                    },
                    ui = ri.extend({
                        options: { position: "topleft", zoomInText: '<span aria-hidden="true">+</span>', zoomInTitle: "Zoom in", zoomOutText: '<span aria-hidden="true">&#x2212;</span>', zoomOutTitle: "Zoom out" },
                        onAdd: function (t) {
                            var e = "leaflet-control-zoom",
                                i = me("div", e + " leaflet-bar"),
                                n = this.options;
                            return (
                                (this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn)),
                                (this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut)),
                                this._updateDisabled(),
                                t.on("zoomend zoomlevelschange", this._updateDisabled, this),
                                i
                            );
                        },
                        onRemove: function (t) {
                            t.off("zoomend zoomlevelschange", this._updateDisabled, this);
                        },
                        disable: function () {
                            return (this._disabled = !0), this._updateDisabled(), this;
                        },
                        enable: function () {
                            return (this._disabled = !1), this._updateDisabled(), this;
                        },
                        _zoomIn: function (t) {
                            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
                        },
                        _zoomOut: function (t) {
                            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
                        },
                        _createButton: function (t, e, i, n, o) {
                            var s = me("a", i, n);
                            return (
                                (s.innerHTML = t),
                                (s.href = "#"),
                                (s.title = e),
                                s.setAttribute("role", "button"),
                                s.setAttribute("aria-label", e),
                                Ue(s),
                                je(s, "click", Xe),
                                je(s, "click", o, this),
                                je(s, "click", this._refocusOnMap, this),
                                s
                            );
                        },
                        _updateDisabled: function () {
                            var t = this._map,
                                e = "leaflet-disabled";
                            Le(this._zoomInButton, e),
                                Le(this._zoomOutButton, e),
                                this._zoomInButton.setAttribute("aria-disabled", "false"),
                                this._zoomOutButton.setAttribute("aria-disabled", "false"),
                                (this._disabled || t._zoom === t.getMinZoom()) && (we(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")),
                                (this._disabled || t._zoom === t.getMaxZoom()) && (we(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
                        },
                    });
                oi.mergeOptions({ zoomControl: !0 }),
                    oi.addInitHook(function () {
                        this.options.zoomControl && ((this.zoomControl = new ui()), this.addControl(this.zoomControl));
                    });
                var ci = function (t) {
                        return new ui(t);
                    },
                    di = ri.extend({
                        options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 },
                        onAdd: function (t) {
                            var e = "leaflet-control-scale",
                                i = me("div", e),
                                n = this.options;
                            return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
                        },
                        onRemove: function (t) {
                            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
                        },
                        _addScales: function (t, e, i) {
                            t.metric && (this._mScale = me("div", e, i)), t.imperial && (this._iScale = me("div", e, i));
                        },
                        _update: function () {
                            var t = this._map,
                                e = t.getSize().y / 2,
                                i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                            this._updateScales(i);
                        },
                        _updateScales: function (t) {
                            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
                        },
                        _updateMetric: function (t) {
                            var e = this._getRoundNum(t),
                                i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                            this._updateScale(this._mScale, i, e / t);
                        },
                        _updateImperial: function (t) {
                            var e,
                                i,
                                n,
                                o = 3.2808399 * t;
                            o > 5280 ? ((e = o / 5280), (i = this._getRoundNum(e)), this._updateScale(this._iScale, i + " mi", i / e)) : ((n = this._getRoundNum(o)), this._updateScale(this._iScale, n + " ft", n / o));
                        },
                        _updateScale: function (t, e, i) {
                            (t.style.width = Math.round(this.options.maxWidth * i) + "px"), (t.innerHTML = e);
                        },
                        _getRoundNum: function (t) {
                            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                                i = t / e;
                            return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1);
                        },
                    }),
                    pi = function (t) {
                        return new di(t);
                    },
                    fi =
                        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
                    mi = ri.extend({
                        options: { position: "bottomright", prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Dt.inlineSvg ? fi + " " : "") + "Leaflet</a>" },
                        initialize: function (t) {
                            p(this, t), (this._attributions = {});
                        },
                        onAdd: function (t) {
                            for (var e in ((t.attributionControl = this), (this._container = me("div", "leaflet-control-attribution")), Ue(this._container), t._layers))
                                t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                            return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
                        },
                        onRemove: function (t) {
                            t.off("layeradd", this._addAttribution, this);
                        },
                        _addAttribution: function (t) {
                            t.layer.getAttribution &&
                                (this.addAttribution(t.layer.getAttribution()),
                                t.layer.once(
                                    "remove",
                                    function () {
                                        this.removeAttribution(t.layer.getAttribution());
                                    },
                                    this
                                ));
                        },
                        setPrefix: function (t) {
                            return (this.options.prefix = t), this._update(), this;
                        },
                        addAttribution: function (t) {
                            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
                        },
                        removeAttribution: function (t) {
                            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
                        },
                        _update: function () {
                            if (this._map) {
                                var t = [];
                                for (var e in this._attributions) this._attributions[e] && t.push(e);
                                var i = [];
                                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), (this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> '));
                            }
                        },
                    });
                oi.mergeOptions({ attributionControl: !0 }),
                    oi.addInitHook(function () {
                        this.options.attributionControl && new mi().addTo(this);
                    });
                var _i = function (t) {
                    return new mi(t);
                };
                (ri.Layers = li), (ri.Zoom = ui), (ri.Scale = di), (ri.Attribution = mi), (ai.layers = hi), (ai.zoom = ci), (ai.scale = pi), (ai.attribution = _i);
                var gi = k.extend({
                    initialize: function (t) {
                        this._map = t;
                    },
                    enable: function () {
                        return this._enabled || ((this._enabled = !0), this.addHooks()), this;
                    },
                    disable: function () {
                        return this._enabled ? ((this._enabled = !1), this.removeHooks(), this) : this;
                    },
                    enabled: function () {
                        return !!this._enabled;
                    },
                });
                gi.addTo = function (t, e) {
                    return t.addHandler(e, this), this;
                };
                var vi = { Events: z },
                    yi = Dt.touch ? "touchstart mousedown" : "mousedown",
                    bi = O.extend({
                        options: { clickTolerance: 3 },
                        initialize: function (t, e, i, n) {
                            p(this, n), (this._element = t), (this._dragStartTarget = e || t), (this._preventOutline = i);
                        },
                        enable: function () {
                            this._enabled || (je(this._dragStartTarget, yi, this._onDown, this), (this._enabled = !0));
                        },
                        disable: function () {
                            this._enabled && (bi._dragging === this && this.finishDrag(!0), $e(this._dragStartTarget, yi, this._onDown, this), (this._enabled = !1), (this._moved = !1));
                        },
                        _onDown: function (t) {
                            if (this._enabled && ((this._moved = !1), !be(this._element, "leaflet-zoom-anim")))
                                if (t.touches && 1 !== t.touches.length) bi._dragging === this && this.finishDrag();
                                else if (!(bi._dragging || t.shiftKey || (1 !== t.which && 1 !== t.button && !t.touches) || ((bi._dragging = this), this._preventOutline && Ie(this._element), Oe(), se(), this._moving))) {
                                    this.fire("down");
                                    var e = t.touches ? t.touches[0] : t,
                                        i = Ze(this._element);
                                    (this._startPoint = new A(e.clientX, e.clientY)), (this._startPos = Ee(this._element)), (this._parentScale = Ne(i));
                                    var n = "mousedown" === t.type;
                                    je(document, n ? "mousemove" : "touchmove", this._onMove, this), je(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
                                }
                        },
                        _onMove: function (t) {
                            if (this._enabled)
                                if (t.touches && t.touches.length > 1) this._moved = !0;
                                else {
                                    var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                                        i = new A(e.clientX, e.clientY)._subtract(this._startPoint);
                                    (i.x || i.y) &&
                                        (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
                                            ((i.x /= this._parentScale.x),
                                            (i.y /= this._parentScale.y),
                                            Ye(t),
                                            this._moved ||
                                                (this.fire("dragstart"),
                                                (this._moved = !0),
                                                we(document.body, "leaflet-dragging"),
                                                (this._lastTarget = t.target || t.srcElement),
                                                window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement),
                                                we(this._lastTarget, "leaflet-drag-target")),
                                            (this._newPos = this._startPos.add(i)),
                                            (this._moving = !0),
                                            (this._lastEvent = t),
                                            this._updatePosition()));
                                }
                        },
                        _updatePosition: function () {
                            var t = { originalEvent: this._lastEvent };
                            this.fire("predrag", t), ke(this._element, this._newPos), this.fire("drag", t);
                        },
                        _onUp: function () {
                            this._enabled && this.finishDrag();
                        },
                        finishDrag: function (t) {
                            Le(document.body, "leaflet-dragging"),
                                this._lastTarget && (Le(this._lastTarget, "leaflet-drag-target"), (this._lastTarget = null)),
                                $e(document, "mousemove touchmove", this._onMove, this),
                                $e(document, "mouseup touchend touchcancel", this._onUp, this),
                                Ae(),
                                re();
                            var e = this._moved && this._moving;
                            (this._moving = !1), (bi._dragging = !1), e && this.fire("dragend", { noInertia: t, distance: this._newPos.distanceTo(this._startPos) });
                        },
                    });
                function wi(t, e, i) {
                    var n,
                        o,
                        s,
                        r,
                        a,
                        l,
                        h,
                        u,
                        c,
                        d = [1, 4, 2, 8];
                    for (o = 0, h = t.length; o < h; o++) t[o]._code = Ii(t[o], e);
                    for (r = 0; r < 4; r++) {
                        for (u = d[r], n = [], o = 0, s = (h = t.length) - 1; o < h; s = o++)
                            (a = t[o]), (l = t[s]), a._code & u ? l._code & u || (((c = Ai(l, a, u, e, i))._code = Ii(c, e)), n.push(c)) : (l._code & u && (((c = Ai(l, a, u, e, i))._code = Ii(c, e)), n.push(c)), n.push(a));
                        t = n;
                    }
                    return t;
                }
                function Li(t, e) {
                    var i, n, o, s, r, a, l, h, u;
                    if (!t || 0 === t.length) throw new Error("latlngs not passed");
                    Ni(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), (t = t[0]));
                    var c = $([0, 0]),
                        d = j(t);
                    d.getNorthWest().distanceTo(d.getSouthWest()) * d.getNorthEast().distanceTo(d.getNorthWest()) < 1700 && (c = xi(t));
                    var p = t.length,
                        f = [];
                    for (i = 0; i < p; i++) {
                        var m = $(t[i]);
                        f.push(e.project($([m.lat - c.lat, m.lng - c.lng])));
                    }
                    for (a = l = h = 0, i = 0, n = p - 1; i < p; n = i++) (o = f[i]), (s = f[n]), (r = o.y * s.x - s.y * o.x), (l += (o.x + s.x) * r), (h += (o.y + s.y) * r), (a += 3 * r);
                    u = 0 === a ? f[0] : [l / a, h / a];
                    var _ = e.unproject(B(u));
                    return $([_.lat + c.lat, _.lng + c.lng]);
                }
                function xi(t) {
                    for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
                        var s = $(t[o]);
                        (e += s.lat), (i += s.lng), n++;
                    }
                    return $([e / n, i / n]);
                }
                var Ci,
                    Ti = { __proto__: null, clipPolygon: wi, polygonCenter: Li, centroid: xi };
                function Si(t, e) {
                    if (!e || !t.length) return t.slice();
                    var i = e * e;
                    return (t = ki((t = zi(t, i)), i));
                }
                function Pi(t, e, i) {
                    return Math.sqrt(Zi(t, e, i, !0));
                }
                function Mi(t, e, i) {
                    return Zi(t, e, i);
                }
                function ki(t, e) {
                    var i = t.length,
                        n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
                    (n[0] = n[i - 1] = 1), Ei(t, n, e, 0, i - 1);
                    var o,
                        s = [];
                    for (o = 0; o < i; o++) n[o] && s.push(t[o]);
                    return s;
                }
                function Ei(t, e, i, n, o) {
                    var s,
                        r,
                        a,
                        l = 0;
                    for (r = n + 1; r <= o - 1; r++) (a = Zi(t[r], t[n], t[o], !0)) > l && ((s = r), (l = a));
                    l > i && ((e[s] = 1), Ei(t, e, i, n, s), Ei(t, e, i, s, o));
                }
                function zi(t, e) {
                    for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) Bi(t[n], t[o]) > e && (i.push(t[n]), (o = n));
                    return o < s - 1 && i.push(t[s - 1]), i;
                }
                function Oi(t, e, i, n, o) {
                    var s,
                        r,
                        a,
                        l = n ? Ci : Ii(t, i),
                        h = Ii(e, i);
                    for (Ci = h; ; ) {
                        if (!(l | h)) return [t, e];
                        if (l & h) return !1;
                        (a = Ii((r = Ai(t, e, (s = l || h), i, o)), i)), s === l ? ((t = r), (l = a)) : ((e = r), (h = a));
                    }
                }
                function Ai(t, e, i, n, o) {
                    var s,
                        r,
                        a = e.x - t.x,
                        l = e.y - t.y,
                        h = n.min,
                        u = n.max;
                    return (
                        8 & i
                            ? ((s = t.x + (a * (u.y - t.y)) / l), (r = u.y))
                            : 4 & i
                            ? ((s = t.x + (a * (h.y - t.y)) / l), (r = h.y))
                            : 2 & i
                            ? ((s = u.x), (r = t.y + (l * (u.x - t.x)) / a))
                            : 1 & i && ((s = h.x), (r = t.y + (l * (h.x - t.x)) / a)),
                        new A(s, r, o)
                    );
                }
                function Ii(t, e) {
                    var i = 0;
                    return t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2), t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8), i;
                }
                function Bi(t, e) {
                    var i = e.x - t.x,
                        n = e.y - t.y;
                    return i * i + n * n;
                }
                function Zi(t, e, i, n) {
                    var o,
                        s = e.x,
                        r = e.y,
                        a = i.x - s,
                        l = i.y - r,
                        h = a * a + l * l;
                    return h > 0 && ((o = ((t.x - s) * a + (t.y - r) * l) / h) > 1 ? ((s = i.x), (r = i.y)) : o > 0 && ((s += a * o), (r += l * o))), (a = t.x - s), (l = t.y - r), n ? a * a + l * l : new A(s, r);
                }
                function Ni(t) {
                    return !g(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0]);
                }
                function Di(t) {
                    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Ni(t);
                }
                function ji(t, e) {
                    var i, n, o, s, r, a, l, h;
                    if (!t || 0 === t.length) throw new Error("latlngs not passed");
                    Ni(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), (t = t[0]));
                    var u = $([0, 0]),
                        c = j(t);
                    c.getNorthWest().distanceTo(c.getSouthWest()) * c.getNorthEast().distanceTo(c.getNorthWest()) < 1700 && (u = xi(t));
                    var d = t.length,
                        p = [];
                    for (i = 0; i < d; i++) {
                        var f = $(t[i]);
                        p.push(e.project($([f.lat - u.lat, f.lng - u.lng])));
                    }
                    for (i = 0, n = 0; i < d - 1; i++) n += p[i].distanceTo(p[i + 1]) / 2;
                    if (0 === n) h = p[0];
                    else
                        for (i = 0, s = 0; i < d - 1; i++)
                            if (((r = p[i]), (a = p[i + 1]), (s += o = r.distanceTo(a)) > n)) {
                                (l = (s - n) / o), (h = [a.x - l * (a.x - r.x), a.y - l * (a.y - r.y)]);
                                break;
                            }
                    var m = e.unproject(B(h));
                    return $([m.lat + u.lat, m.lng + u.lng]);
                }
                var Ri = {
                        __proto__: null,
                        simplify: Si,
                        pointToSegmentDistance: Pi,
                        closestPointOnSegment: Mi,
                        clipSegment: Oi,
                        _getEdgeIntersection: Ai,
                        _getBitCode: Ii,
                        _sqClosestPointOnSegment: Zi,
                        isFlat: Ni,
                        _flat: Di,
                        polylineCenter: ji,
                    },
                    $i = {
                        project: function (t) {
                            return new A(t.lng, t.lat);
                        },
                        unproject: function (t) {
                            return new R(t.y, t.x);
                        },
                        bounds: new Z([-180, -90], [180, 90]),
                    },
                    Gi = {
                        R: 6378137,
                        R_MINOR: 6356752.314245179,
                        bounds: new Z([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
                        project: function (t) {
                            var e = Math.PI / 180,
                                i = this.R,
                                n = t.lat * e,
                                o = this.R_MINOR / i,
                                s = Math.sqrt(1 - o * o),
                                r = s * Math.sin(n),
                                a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                            return (n = -i * Math.log(Math.max(a, 1e-10))), new A(t.lng * e * i, n);
                        },
                        unproject: function (t) {
                            for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), l = 0, h = 0.1; l < 15 && Math.abs(h) > 1e-7; l++)
                                (e = s * Math.sin(a)), (e = Math.pow((1 - e) / (1 + e), s / 2)), (a += h = Math.PI / 2 - 2 * Math.atan(r * e) - a);
                            return new R(a * i, (t.x * i) / n);
                        },
                    },
                    Hi = { __proto__: null, LonLat: $i, Mercator: Gi, SphericalMercator: V },
                    Fi = i({}, F, {
                        code: "EPSG:3395",
                        projection: Gi,
                        transformation: (function () {
                            var t = 0.5 / (Math.PI * Gi.R);
                            return U(t, 0.5, -t, 0.5);
                        })(),
                    }),
                    Wi = i({}, F, { code: "EPSG:4326", projection: $i, transformation: U(1 / 180, 1, -1 / 180, 0.5) }),
                    Vi = i({}, H, {
                        projection: $i,
                        transformation: U(1, 0, -1, 0),
                        scale: function (t) {
                            return Math.pow(2, t);
                        },
                        zoom: function (t) {
                            return Math.log(t) / Math.LN2;
                        },
                        distance: function (t, e) {
                            var i = e.lng - t.lng,
                                n = e.lat - t.lat;
                            return Math.sqrt(i * i + n * n);
                        },
                        infinite: !0,
                    });
                (H.Earth = F), (H.EPSG3395 = Fi), (H.EPSG3857 = Y), (H.EPSG900913 = X), (H.EPSG4326 = Wi), (H.Simple = Vi);
                var qi = O.extend({
                    options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 },
                    addTo: function (t) {
                        return t.addLayer(this), this;
                    },
                    remove: function () {
                        return this.removeFrom(this._map || this._mapToAdd);
                    },
                    removeFrom: function (t) {
                        return t && t.removeLayer(this), this;
                    },
                    getPane: function (t) {
                        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
                    },
                    addInteractiveTarget: function (t) {
                        return (this._map._targets[r(t)] = this), this;
                    },
                    removeInteractiveTarget: function (t) {
                        return delete this._map._targets[r(t)], this;
                    },
                    getAttribution: function () {
                        return this.options.attribution;
                    },
                    _layerAdd: function (t) {
                        var e = t.target;
                        if (e.hasLayer(this)) {
                            if (((this._map = e), (this._zoomAnimated = e._zoomAnimated), this.getEvents)) {
                                var i = this.getEvents();
                                e.on(i, this),
                                    this.once(
                                        "remove",
                                        function () {
                                            e.off(i, this);
                                        },
                                        this
                                    );
                            }
                            this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
                        }
                    },
                });
                oi.include({
                    addLayer: function (t) {
                        if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
                        var e = r(t);
                        return this._layers[e] || ((this._layers[e] = t), (t._mapToAdd = this), t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this;
                    },
                    removeLayer: function (t) {
                        var e = r(t);
                        return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), (t._map = t._mapToAdd = null), this) : this;
                    },
                    hasLayer: function (t) {
                        return r(t) in this._layers;
                    },
                    eachLayer: function (t, e) {
                        for (var i in this._layers) t.call(e, this._layers[i]);
                        return this;
                    },
                    _addLayers: function (t) {
                        for (var e = 0, i = (t = t ? (g(t) ? t : [t]) : []).length; e < i; e++) this.addLayer(t[e]);
                    },
                    _addZoomLimit: function (t) {
                        (isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) || ((this._zoomBoundLayers[r(t)] = t), this._updateZoomLevels());
                    },
                    _removeZoomLimit: function (t) {
                        var e = r(t);
                        this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
                    },
                    _updateZoomLevels: function () {
                        var t = 1 / 0,
                            e = -1 / 0,
                            i = this._getZoomSpan();
                        for (var n in this._zoomBoundLayers) {
                            var o = this._zoomBoundLayers[n].options;
                            (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)), (e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom));
                        }
                        (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
                            (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
                            i !== this._getZoomSpan() && this.fire("zoomlevelschange"),
                            void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom),
                            void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
                    },
                });
                var Ui = qi.extend({
                        initialize: function (t, e) {
                            var i, n;
                            if ((p(this, e), (this._layers = {}), t)) for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
                        },
                        addLayer: function (t) {
                            var e = this.getLayerId(t);
                            return (this._layers[e] = t), this._map && this._map.addLayer(t), this;
                        },
                        removeLayer: function (t) {
                            var e = t in this._layers ? t : this.getLayerId(t);
                            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
                        },
                        hasLayer: function (t) {
                            return ("number" == typeof t ? t : this.getLayerId(t)) in this._layers;
                        },
                        clearLayers: function () {
                            return this.eachLayer(this.removeLayer, this);
                        },
                        invoke: function (t) {
                            var e,
                                i,
                                n = Array.prototype.slice.call(arguments, 1);
                            for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
                            return this;
                        },
                        onAdd: function (t) {
                            this.eachLayer(t.addLayer, t);
                        },
                        onRemove: function (t) {
                            this.eachLayer(t.removeLayer, t);
                        },
                        eachLayer: function (t, e) {
                            for (var i in this._layers) t.call(e, this._layers[i]);
                            return this;
                        },
                        getLayer: function (t) {
                            return this._layers[t];
                        },
                        getLayers: function () {
                            var t = [];
                            return this.eachLayer(t.push, t), t;
                        },
                        setZIndex: function (t) {
                            return this.invoke("setZIndex", t);
                        },
                        getLayerId: function (t) {
                            return r(t);
                        },
                    }),
                    Yi = function (t, e) {
                        return new Ui(t, e);
                    },
                    Xi = Ui.extend({
                        addLayer: function (t) {
                            return this.hasLayer(t) ? this : (t.addEventParent(this), Ui.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
                        },
                        removeLayer: function (t) {
                            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ui.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
                        },
                        setStyle: function (t) {
                            return this.invoke("setStyle", t);
                        },
                        bringToFront: function () {
                            return this.invoke("bringToFront");
                        },
                        bringToBack: function () {
                            return this.invoke("bringToBack");
                        },
                        getBounds: function () {
                            var t = new D();
                            for (var e in this._layers) {
                                var i = this._layers[e];
                                t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
                            }
                            return t;
                        },
                    }),
                    Ki = function (t, e) {
                        return new Xi(t, e);
                    },
                    Ji = k.extend({
                        options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0], crossOrigin: !1 },
                        initialize: function (t) {
                            p(this, t);
                        },
                        createIcon: function (t) {
                            return this._createIcon("icon", t);
                        },
                        createShadow: function (t) {
                            return this._createIcon("shadow", t);
                        },
                        _createIcon: function (t, e) {
                            var i = this._getIconUrl(t);
                            if (!i) {
                                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                                return null;
                            }
                            var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                            return this._setIconStyles(n, t), (this.options.crossOrigin || "" === this.options.crossOrigin) && (n.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), n;
                        },
                        _setIconStyles: function (t, e) {
                            var i = this.options,
                                n = i[e + "Size"];
                            "number" == typeof n && (n = [n, n]);
                            var o = B(n),
                                s = B(("shadow" === e && i.shadowAnchor) || i.iconAnchor || (o && o.divideBy(2, !0)));
                            (t.className = "leaflet-marker-" + e + " " + (i.className || "")),
                                s && ((t.style.marginLeft = -s.x + "px"), (t.style.marginTop = -s.y + "px")),
                                o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
                        },
                        _createImg: function (t, e) {
                            return ((e = e || document.createElement("img")).src = t), e;
                        },
                        _getIconUrl: function (t) {
                            return (Dt.retina && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
                        },
                    });
                function Qi(t) {
                    return new Ji(t);
                }
                var tn = Ji.extend({
                        options: {
                            iconUrl: "marker-icon.png",
                            iconRetinaUrl: "marker-icon-2x.png",
                            shadowUrl: "marker-shadow.png",
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                            popupAnchor: [1, -34],
                            tooltipAnchor: [16, -28],
                            shadowSize: [41, 41],
                        },
                        _getIconUrl: function (t) {
                            return "string" != typeof tn.imagePath && (tn.imagePath = this._detectIconPath()), (this.options.imagePath || tn.imagePath) + Ji.prototype._getIconUrl.call(this, t);
                        },
                        _stripUrl: function (t) {
                            var e = function (t, e, i) {
                                var n = e.exec(t);
                                return n && n[i];
                            };
                            return (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) && e(t, /^(.*)marker-icon\.png$/, 1);
                        },
                        _detectIconPath: function () {
                            var t = me("div", "leaflet-default-icon-path", document.body),
                                e = fe(t, "background-image") || fe(t, "backgroundImage");
                            if ((document.body.removeChild(t), (e = this._stripUrl(e)))) return e;
                            var i = document.querySelector('link[href$="leaflet.css"]');
                            return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
                        },
                    }),
                    en = gi.extend({
                        initialize: function (t) {
                            this._marker = t;
                        },
                        addHooks: function () {
                            var t = this._marker._icon;
                            this._draggable || (this._draggable = new bi(t, t, !0)),
                                this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(),
                                we(t, "leaflet-marker-draggable");
                        },
                        removeHooks: function () {
                            this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(),
                                this._marker._icon && Le(this._marker._icon, "leaflet-marker-draggable");
                        },
                        moved: function () {
                            return this._draggable && this._draggable._moved;
                        },
                        _adjustPan: function (t) {
                            var e = this._marker,
                                i = e._map,
                                n = this._marker.options.autoPanSpeed,
                                o = this._marker.options.autoPanPadding,
                                s = Ee(e._icon),
                                r = i.getPixelBounds(),
                                a = i.getPixelOrigin(),
                                l = N(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
                            if (!l.contains(s)) {
                                var h = B(
                                    (Math.max(l.max.x, s.x) - l.max.x) / (r.max.x - l.max.x) - (Math.min(l.min.x, s.x) - l.min.x) / (r.min.x - l.min.x),
                                    (Math.max(l.max.y, s.y) - l.max.y) / (r.max.y - l.max.y) - (Math.min(l.min.y, s.y) - l.min.y) / (r.min.y - l.min.y)
                                ).multiplyBy(n);
                                i.panBy(h, { animate: !1 }),
                                    this._draggable._newPos._add(h),
                                    this._draggable._startPos._add(h),
                                    ke(e._icon, this._draggable._newPos),
                                    this._onDrag(t),
                                    (this._panRequest = S(this._adjustPan.bind(this, t)));
                            }
                        },
                        _onDragStart: function () {
                            (this._oldLatLng = this._marker.getLatLng()), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
                        },
                        _onPreDrag: function (t) {
                            this._marker.options.autoPan && (P(this._panRequest), (this._panRequest = S(this._adjustPan.bind(this, t))));
                        },
                        _onDrag: function (t) {
                            var e = this._marker,
                                i = e._shadow,
                                n = Ee(e._icon),
                                o = e._map.layerPointToLatLng(n);
                            i && ke(i, n), (e._latlng = o), (t.latlng = o), (t.oldLatLng = this._oldLatLng), e.fire("move", t).fire("drag", t);
                        },
                        _onDragEnd: function (t) {
                            P(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
                        },
                    }),
                    nn = qi.extend({
                        options: {
                            icon: new tn(),
                            interactive: !0,
                            keyboard: !0,
                            title: "",
                            alt: "Marker",
                            zIndexOffset: 0,
                            opacity: 1,
                            riseOnHover: !1,
                            riseOffset: 250,
                            pane: "markerPane",
                            shadowPane: "shadowPane",
                            bubblingMouseEvents: !1,
                            autoPanOnFocus: !0,
                            draggable: !1,
                            autoPan: !1,
                            autoPanPadding: [50, 50],
                            autoPanSpeed: 10,
                        },
                        initialize: function (t, e) {
                            p(this, e), (this._latlng = $(t));
                        },
                        onAdd: function (t) {
                            (this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation), this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
                        },
                        onRemove: function (t) {
                            this.dragging && this.dragging.enabled() && ((this.options.draggable = !0), this.dragging.removeHooks()),
                                delete this.dragging,
                                this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
                                this._removeIcon(),
                                this._removeShadow();
                        },
                        getEvents: function () {
                            return { zoom: this.update, viewreset: this.update };
                        },
                        getLatLng: function () {
                            return this._latlng;
                        },
                        setLatLng: function (t) {
                            var e = this._latlng;
                            return (this._latlng = $(t)), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
                        },
                        setZIndexOffset: function (t) {
                            return (this.options.zIndexOffset = t), this.update();
                        },
                        getIcon: function () {
                            return this.options.icon;
                        },
                        setIcon: function (t) {
                            return (this.options.icon = t), this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
                        },
                        getElement: function () {
                            return this._icon;
                        },
                        update: function () {
                            if (this._icon && this._map) {
                                var t = this._map.latLngToLayerPoint(this._latlng).round();
                                this._setPos(t);
                            }
                            return this;
                        },
                        _initIcon: function () {
                            var t = this.options,
                                e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                                i = t.icon.createIcon(this._icon),
                                n = !1;
                            i !== this._icon && (this._icon && this._removeIcon(), (n = !0), t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")),
                                we(i, e),
                                t.keyboard && ((i.tabIndex = "0"), i.setAttribute("role", "button")),
                                (this._icon = i),
                                t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                                this.options.autoPanOnFocus && je(i, "focus", this._panOnFocus, this);
                            var o = t.icon.createShadow(this._shadow),
                                s = !1;
                            o !== this._shadow && (this._removeShadow(), (s = !0)),
                                o && (we(o, e), (o.alt = "")),
                                (this._shadow = o),
                                t.opacity < 1 && this._updateOpacity(),
                                n && this.getPane().appendChild(this._icon),
                                this._initInteraction(),
                                o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
                        },
                        _removeIcon: function () {
                            this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }),
                                this.options.autoPanOnFocus && $e(this._icon, "focus", this._panOnFocus, this),
                                _e(this._icon),
                                this.removeInteractiveTarget(this._icon),
                                (this._icon = null);
                        },
                        _removeShadow: function () {
                            this._shadow && _e(this._shadow), (this._shadow = null);
                        },
                        _setPos: function (t) {
                            this._icon && ke(this._icon, t), this._shadow && ke(this._shadow, t), (this._zIndex = t.y + this.options.zIndexOffset), this._resetZIndex();
                        },
                        _updateZIndex: function (t) {
                            this._icon && (this._icon.style.zIndex = this._zIndex + t);
                        },
                        _animateZoom: function (t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                            this._setPos(e);
                        },
                        _initInteraction: function () {
                            if (this.options.interactive && (we(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), en)) {
                                var t = this.options.draggable;
                                this.dragging && ((t = this.dragging.enabled()), this.dragging.disable()), (this.dragging = new en(this)), t && this.dragging.enable();
                            }
                        },
                        setOpacity: function (t) {
                            return (this.options.opacity = t), this._map && this._updateOpacity(), this;
                        },
                        _updateOpacity: function () {
                            var t = this.options.opacity;
                            this._icon && Te(this._icon, t), this._shadow && Te(this._shadow, t);
                        },
                        _bringToFront: function () {
                            this._updateZIndex(this.options.riseOffset);
                        },
                        _resetZIndex: function () {
                            this._updateZIndex(0);
                        },
                        _panOnFocus: function () {
                            var t = this._map;
                            if (t) {
                                var e = this.options.icon.options,
                                    i = e.iconSize ? B(e.iconSize) : B(0, 0),
                                    n = e.iconAnchor ? B(e.iconAnchor) : B(0, 0);
                                t.panInside(this._latlng, { paddingTopLeft: n, paddingBottomRight: i.subtract(n) });
                            }
                        },
                        _getPopupAnchor: function () {
                            return this.options.icon.options.popupAnchor;
                        },
                        _getTooltipAnchor: function () {
                            return this.options.icon.options.tooltipAnchor;
                        },
                    });
                function on(t, e) {
                    return new nn(t, e);
                }
                var sn = qi.extend({
                        options: {
                            stroke: !0,
                            color: "#3388ff",
                            weight: 3,
                            opacity: 1,
                            lineCap: "round",
                            lineJoin: "round",
                            dashArray: null,
                            dashOffset: null,
                            fill: !1,
                            fillColor: null,
                            fillOpacity: 0.2,
                            fillRule: "evenodd",
                            interactive: !0,
                            bubblingMouseEvents: !0,
                        },
                        beforeAdd: function (t) {
                            this._renderer = t.getRenderer(this);
                        },
                        onAdd: function () {
                            this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
                        },
                        onRemove: function () {
                            this._renderer._removePath(this);
                        },
                        redraw: function () {
                            return this._map && this._renderer._updatePath(this), this;
                        },
                        setStyle: function (t) {
                            return p(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
                        },
                        bringToFront: function () {
                            return this._renderer && this._renderer._bringToFront(this), this;
                        },
                        bringToBack: function () {
                            return this._renderer && this._renderer._bringToBack(this), this;
                        },
                        getElement: function () {
                            return this._path;
                        },
                        _reset: function () {
                            this._project(), this._update();
                        },
                        _clickTolerance: function () {
                            return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
                        },
                    }),
                    rn = sn.extend({
                        options: { fill: !0, radius: 10 },
                        initialize: function (t, e) {
                            p(this, e), (this._latlng = $(t)), (this._radius = this.options.radius);
                        },
                        setLatLng: function (t) {
                            var e = this._latlng;
                            return (this._latlng = $(t)), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
                        },
                        getLatLng: function () {
                            return this._latlng;
                        },
                        setRadius: function (t) {
                            return (this.options.radius = this._radius = t), this.redraw();
                        },
                        getRadius: function () {
                            return this._radius;
                        },
                        setStyle: function (t) {
                            var e = (t && t.radius) || this._radius;
                            return sn.prototype.setStyle.call(this, t), this.setRadius(e), this;
                        },
                        _project: function () {
                            (this._point = this._map.latLngToLayerPoint(this._latlng)), this._updateBounds();
                        },
                        _updateBounds: function () {
                            var t = this._radius,
                                e = this._radiusY || t,
                                i = this._clickTolerance(),
                                n = [t + i, e + i];
                            this._pxBounds = new Z(this._point.subtract(n), this._point.add(n));
                        },
                        _update: function () {
                            this._map && this._updatePath();
                        },
                        _updatePath: function () {
                            this._renderer._updateCircle(this);
                        },
                        _empty: function () {
                            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
                        },
                        _containsPoint: function (t) {
                            return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
                        },
                    });
                function an(t, e) {
                    return new rn(t, e);
                }
                var ln = rn.extend({
                    initialize: function (t, e, n) {
                        if (("number" == typeof e && (e = i({}, n, { radius: e })), p(this, e), (this._latlng = $(t)), isNaN(this.options.radius))) throw new Error("Circle radius cannot be NaN");
                        this._mRadius = this.options.radius;
                    },
                    setRadius: function (t) {
                        return (this._mRadius = t), this.redraw();
                    },
                    getRadius: function () {
                        return this._mRadius;
                    },
                    getBounds: function () {
                        var t = [this._radius, this._radiusY || this._radius];
                        return new D(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
                    },
                    setStyle: sn.prototype.setStyle,
                    _project: function () {
                        var t = this._latlng.lng,
                            e = this._latlng.lat,
                            i = this._map,
                            n = i.options.crs;
                        if (n.distance === F.distance) {
                            var o = Math.PI / 180,
                                s = this._mRadius / F.R / o,
                                r = i.project([e + s, t]),
                                a = i.project([e - s, t]),
                                l = r.add(a).divideBy(2),
                                h = i.unproject(l).lat,
                                u = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(h * o)) / (Math.cos(e * o) * Math.cos(h * o))) / o;
                            (isNaN(u) || 0 === u) && (u = s / Math.cos((Math.PI / 180) * e)), (this._point = l.subtract(i.getPixelOrigin())), (this._radius = isNaN(u) ? 0 : l.x - i.project([h, t - u]).x), (this._radiusY = l.y - r.y);
                        } else {
                            var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                            (this._point = i.latLngToLayerPoint(this._latlng)), (this._radius = this._point.x - i.latLngToLayerPoint(c).x);
                        }
                        this._updateBounds();
                    },
                });
                function hn(t, e, i) {
                    return new ln(t, e, i);
                }
                var un = sn.extend({
                    options: { smoothFactor: 1, noClip: !1 },
                    initialize: function (t, e) {
                        p(this, e), this._setLatLngs(t);
                    },
                    getLatLngs: function () {
                        return this._latlngs;
                    },
                    setLatLngs: function (t) {
                        return this._setLatLngs(t), this.redraw();
                    },
                    isEmpty: function () {
                        return !this._latlngs.length;
                    },
                    closestLayerPoint: function (t) {
                        for (var e, i, n = 1 / 0, o = null, s = Zi, r = 0, a = this._parts.length; r < a; r++)
                            for (var l = this._parts[r], h = 1, u = l.length; h < u; h++) {
                                var c = s(t, (e = l[h - 1]), (i = l[h]), !0);
                                c < n && ((n = c), (o = s(t, e, i)));
                            }
                        return o && (o.distance = Math.sqrt(n)), o;
                    },
                    getCenter: function () {
                        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                        return ji(this._defaultShape(), this._map.options.crs);
                    },
                    getBounds: function () {
                        return this._bounds;
                    },
                    addLatLng: function (t, e) {
                        return (e = e || this._defaultShape()), (t = $(t)), e.push(t), this._bounds.extend(t), this.redraw();
                    },
                    _setLatLngs: function (t) {
                        (this._bounds = new D()), (this._latlngs = this._convertLatLngs(t));
                    },
                    _defaultShape: function () {
                        return Ni(this._latlngs) ? this._latlngs : this._latlngs[0];
                    },
                    _convertLatLngs: function (t) {
                        for (var e = [], i = Ni(t), n = 0, o = t.length; n < o; n++) i ? ((e[n] = $(t[n])), this._bounds.extend(e[n])) : (e[n] = this._convertLatLngs(t[n]));
                        return e;
                    },
                    _project: function () {
                        var t = new Z();
                        (this._rings = []), this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && ((this._rawPxBounds = t), this._updateBounds());
                    },
                    _updateBounds: function () {
                        var t = this._clickTolerance(),
                            e = new A(t, t);
                        this._rawPxBounds && (this._pxBounds = new Z([this._rawPxBounds.min.subtract(e), this._rawPxBounds.max.add(e)]));
                    },
                    _projectLatlngs: function (t, e, i) {
                        var n,
                            o,
                            s = t[0] instanceof R,
                            r = t.length;
                        if (s) {
                            for (o = [], n = 0; n < r; n++) (o[n] = this._map.latLngToLayerPoint(t[n])), i.extend(o[n]);
                            e.push(o);
                        } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i);
                    },
                    _clipPoints: function () {
                        var t = this._renderer._bounds;
                        if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
                            if (this.options.noClip) this._parts = this._rings;
                            else {
                                var e,
                                    i,
                                    n,
                                    o,
                                    s,
                                    r,
                                    a,
                                    l = this._parts;
                                for (e = 0, n = 0, o = this._rings.length; e < o; e++)
                                    for (i = 0, s = (a = this._rings[e]).length; i < s - 1; i++) (r = Oi(a[i], a[i + 1], t, i, !0)) && ((l[n] = l[n] || []), l[n].push(r[0]), (r[1] === a[i + 1] && i !== s - 2) || (l[n].push(r[1]), n++));
                            }
                    },
                    _simplifyPoints: function () {
                        for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = Si(t[i], e);
                    },
                    _update: function () {
                        this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
                    },
                    _updatePath: function () {
                        this._renderer._updatePoly(this);
                    },
                    _containsPoint: function (t, e) {
                        var i,
                            n,
                            o,
                            s,
                            r,
                            a,
                            l = this._clickTolerance();
                        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                        for (i = 0, s = this._parts.length; i < s; i++) for (n = 0, o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++) if ((e || 0 !== n) && Pi(t, a[o], a[n]) <= l) return !0;
                        return !1;
                    },
                });
                function cn(t, e) {
                    return new un(t, e);
                }
                un._flat = Di;
                var dn = un.extend({
                    options: { fill: !0 },
                    isEmpty: function () {
                        return !this._latlngs.length || !this._latlngs[0].length;
                    },
                    getCenter: function () {
                        if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                        return Li(this._defaultShape(), this._map.options.crs);
                    },
                    _convertLatLngs: function (t) {
                        var e = un.prototype._convertLatLngs.call(this, t),
                            i = e.length;
                        return i >= 2 && e[0] instanceof R && e[0].equals(e[i - 1]) && e.pop(), e;
                    },
                    _setLatLngs: function (t) {
                        un.prototype._setLatLngs.call(this, t), Ni(this._latlngs) && (this._latlngs = [this._latlngs]);
                    },
                    _defaultShape: function () {
                        return Ni(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
                    },
                    _clipPoints: function () {
                        var t = this._renderer._bounds,
                            e = this.options.weight,
                            i = new A(e, e);
                        if (((t = new Z(t.min.subtract(i), t.max.add(i))), (this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
                            if (this.options.noClip) this._parts = this._rings;
                            else for (var n, o = 0, s = this._rings.length; o < s; o++) (n = wi(this._rings[o], t, !0)).length && this._parts.push(n);
                    },
                    _updatePath: function () {
                        this._renderer._updatePoly(this, !0);
                    },
                    _containsPoint: function (t) {
                        var e,
                            i,
                            n,
                            o,
                            s,
                            r,
                            a,
                            l,
                            h = !1;
                        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                        for (o = 0, a = this._parts.length; o < a; o++)
                            for (s = 0, r = (l = (e = this._parts[o]).length) - 1; s < l; r = s++) (i = e[s]), (n = e[r]), i.y > t.y != n.y > t.y && t.x < ((n.x - i.x) * (t.y - i.y)) / (n.y - i.y) + i.x && (h = !h);
                        return h || un.prototype._containsPoint.call(this, t, !0);
                    },
                });
                function pn(t, e) {
                    return new dn(t, e);
                }
                var fn = Xi.extend({
                    initialize: function (t, e) {
                        p(this, e), (this._layers = {}), t && this.addData(t);
                    },
                    addData: function (t) {
                        var e,
                            i,
                            n,
                            o = g(t) ? t : t.features;
                        if (o) {
                            for (e = 0, i = o.length; e < i; e++) ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                            return this;
                        }
                        var s = this.options;
                        if (s.filter && !s.filter(t)) return this;
                        var r = mn(t, s);
                        return r ? ((r.feature = Ln(t)), (r.defaultOptions = r.options), this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
                    },
                    resetStyle: function (t) {
                        return void 0 === t ? this.eachLayer(this.resetStyle, this) : ((t.options = i({}, t.defaultOptions)), this._setLayerStyle(t, this.options.style), this);
                    },
                    setStyle: function (t) {
                        return this.eachLayer(function (e) {
                            this._setLayerStyle(e, t);
                        }, this);
                    },
                    _setLayerStyle: function (t, e) {
                        t.setStyle && ("function" == typeof e && (e = e(t.feature)), t.setStyle(e));
                    },
                });
                function mn(t, e) {
                    var i,
                        n,
                        o,
                        s,
                        r = "Feature" === t.type ? t.geometry : t,
                        a = r ? r.coordinates : null,
                        l = [],
                        h = e && e.pointToLayer,
                        u = (e && e.coordsToLatLng) || gn;
                    if (!a && !r) return null;
                    switch (r.type) {
                        case "Point":
                            return _n(h, t, (i = u(a)), e);
                        case "MultiPoint":
                            for (o = 0, s = a.length; o < s; o++) (i = u(a[o])), l.push(_n(h, t, i, e));
                            return new Xi(l);
                        case "LineString":
                        case "MultiLineString":
                            return (n = vn(a, "LineString" === r.type ? 0 : 1, u)), new un(n, e);
                        case "Polygon":
                        case "MultiPolygon":
                            return (n = vn(a, "Polygon" === r.type ? 1 : 2, u)), new dn(n, e);
                        case "GeometryCollection":
                            for (o = 0, s = r.geometries.length; o < s; o++) {
                                var c = mn({ geometry: r.geometries[o], type: "Feature", properties: t.properties }, e);
                                c && l.push(c);
                            }
                            return new Xi(l);
                        case "FeatureCollection":
                            for (o = 0, s = r.features.length; o < s; o++) {
                                var d = mn(r.features[o], e);
                                d && l.push(d);
                            }
                            return new Xi(l);
                        default:
                            throw new Error("Invalid GeoJSON object.");
                    }
                }
                function _n(t, e, i, n) {
                    return t ? t(e, i) : new nn(i, n && n.markersInheritOptions && n);
                }
                function gn(t) {
                    return new R(t[1], t[0], t[2]);
                }
                function vn(t, e, i) {
                    for (var n, o = [], s = 0, r = t.length; s < r; s++) (n = e ? vn(t[s], e - 1, i) : (i || gn)(t[s])), o.push(n);
                    return o;
                }
                function yn(t, e) {
                    return void 0 !== (t = $(t)).alt ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)] : [u(t.lng, e), u(t.lat, e)];
                }
                function bn(t, e, i, n) {
                    for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? bn(t[s], Ni(t[s]) ? 0 : e - 1, i, n) : yn(t[s], n));
                    return !e && i && o.length > 0 && o.push(o[0].slice()), o;
                }
                function wn(t, e) {
                    return t.feature ? i({}, t.feature, { geometry: e }) : Ln(e);
                }
                function Ln(t) {
                    return "Feature" === t.type || "FeatureCollection" === t.type ? t : { type: "Feature", properties: {}, geometry: t };
                }
                var xn = {
                    toGeoJSON: function (t) {
                        return wn(this, { type: "Point", coordinates: yn(this.getLatLng(), t) });
                    },
                };
                function Cn(t, e) {
                    return new fn(t, e);
                }
                nn.include(xn),
                    ln.include(xn),
                    rn.include(xn),
                    un.include({
                        toGeoJSON: function (t) {
                            var e = !Ni(this._latlngs);
                            return wn(this, { type: (e ? "Multi" : "") + "LineString", coordinates: bn(this._latlngs, e ? 1 : 0, !1, t) });
                        },
                    }),
                    dn.include({
                        toGeoJSON: function (t) {
                            var e = !Ni(this._latlngs),
                                i = e && !Ni(this._latlngs[0]),
                                n = bn(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
                            return e || (n = [n]), wn(this, { type: (i ? "Multi" : "") + "Polygon", coordinates: n });
                        },
                    }),
                    Ui.include({
                        toMultiPoint: function (t) {
                            var e = [];
                            return (
                                this.eachLayer(function (i) {
                                    e.push(i.toGeoJSON(t).geometry.coordinates);
                                }),
                                wn(this, { type: "MultiPoint", coordinates: e })
                            );
                        },
                        toGeoJSON: function (t) {
                            var e = this.feature && this.feature.geometry && this.feature.geometry.type;
                            if ("MultiPoint" === e) return this.toMultiPoint(t);
                            var i = "GeometryCollection" === e,
                                n = [];
                            return (
                                this.eachLayer(function (e) {
                                    if (e.toGeoJSON) {
                                        var o = e.toGeoJSON(t);
                                        if (i) n.push(o.geometry);
                                        else {
                                            var s = Ln(o);
                                            "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s);
                                        }
                                    }
                                }),
                                i ? wn(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n }
                            );
                        },
                    });
                var Tn = Cn,
                    Sn = qi.extend({
                        options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" },
                        initialize: function (t, e, i) {
                            (this._url = t), (this._bounds = j(e)), p(this, i);
                        },
                        onAdd: function () {
                            this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()),
                                this.options.interactive && (we(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)),
                                this.getPane().appendChild(this._image),
                                this._reset();
                        },
                        onRemove: function () {
                            _e(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
                        },
                        setOpacity: function (t) {
                            return (this.options.opacity = t), this._image && this._updateOpacity(), this;
                        },
                        setStyle: function (t) {
                            return t.opacity && this.setOpacity(t.opacity), this;
                        },
                        bringToFront: function () {
                            return this._map && ve(this._image), this;
                        },
                        bringToBack: function () {
                            return this._map && ye(this._image), this;
                        },
                        setUrl: function (t) {
                            return (this._url = t), this._image && (this._image.src = t), this;
                        },
                        setBounds: function (t) {
                            return (this._bounds = j(t)), this._map && this._reset(), this;
                        },
                        getEvents: function () {
                            var t = { zoom: this._reset, viewreset: this._reset };
                            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
                        },
                        setZIndex: function (t) {
                            return (this.options.zIndex = t), this._updateZIndex(), this;
                        },
                        getBounds: function () {
                            return this._bounds;
                        },
                        getElement: function () {
                            return this._image;
                        },
                        _initImage: function () {
                            var t = "IMG" === this._url.tagName,
                                e = (this._image = t ? this._url : me("img"));
                            we(e, "leaflet-image-layer"),
                                this._zoomAnimated && we(e, "leaflet-zoom-animated"),
                                this.options.className && we(e, this.options.className),
                                (e.onselectstart = h),
                                (e.onmousemove = h),
                                (e.onload = o(this.fire, this, "load")),
                                (e.onerror = o(this._overlayOnError, this, "error")),
                                (this.options.crossOrigin || "" === this.options.crossOrigin) && (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                                this.options.zIndex && this._updateZIndex(),
                                t ? (this._url = e.src) : ((e.src = this._url), (e.alt = this.options.alt));
                        },
                        _animateZoom: function (t) {
                            var e = this._map.getZoomScale(t.zoom),
                                i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                            Me(this._image, i, e);
                        },
                        _reset: function () {
                            var t = this._image,
                                e = new Z(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                                i = e.getSize();
                            ke(t, e.min), (t.style.width = i.x + "px"), (t.style.height = i.y + "px");
                        },
                        _updateOpacity: function () {
                            Te(this._image, this.options.opacity);
                        },
                        _updateZIndex: function () {
                            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
                        },
                        _overlayOnError: function () {
                            this.fire("error");
                            var t = this.options.errorOverlayUrl;
                            t && this._url !== t && ((this._url = t), (this._image.src = t));
                        },
                        getCenter: function () {
                            return this._bounds.getCenter();
                        },
                    }),
                    Pn = function (t, e, i) {
                        return new Sn(t, e, i);
                    },
                    Mn = Sn.extend({
                        options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1, playsInline: !0 },
                        _initImage: function () {
                            var t = "VIDEO" === this._url.tagName,
                                e = (this._image = t ? this._url : me("video"));
                            if (
                                (we(e, "leaflet-image-layer"),
                                this._zoomAnimated && we(e, "leaflet-zoom-animated"),
                                this.options.className && we(e, this.options.className),
                                (e.onselectstart = h),
                                (e.onmousemove = h),
                                (e.onloadeddata = o(this.fire, this, "load")),
                                t)
                            ) {
                                for (var i = e.getElementsByTagName("source"), n = [], s = 0; s < i.length; s++) n.push(i[s].src);
                                this._url = i.length > 0 ? n : [e.src];
                            } else {
                                g(this._url) || (this._url = [this._url]),
                                    !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"),
                                    (e.autoplay = !!this.options.autoplay),
                                    (e.loop = !!this.options.loop),
                                    (e.muted = !!this.options.muted),
                                    (e.playsInline = !!this.options.playsInline);
                                for (var r = 0; r < this._url.length; r++) {
                                    var a = me("source");
                                    (a.src = this._url[r]), e.appendChild(a);
                                }
                            }
                        },
                    });
                function kn(t, e, i) {
                    return new Mn(t, e, i);
                }
                var En = Sn.extend({
                    _initImage: function () {
                        var t = (this._image = this._url);
                        we(t, "leaflet-image-layer"), this._zoomAnimated && we(t, "leaflet-zoom-animated"), this.options.className && we(t, this.options.className), (t.onselectstart = h), (t.onmousemove = h);
                    },
                });
                function zn(t, e, i) {
                    return new En(t, e, i);
                }
                var On = qi.extend({
                    options: { interactive: !1, offset: [0, 0], className: "", pane: void 0, content: "" },
                    initialize: function (t, e) {
                        t && (t instanceof R || g(t)) ? ((this._latlng = $(t)), p(this, e)) : (p(this, t), (this._source = e)), this.options.content && (this._content = this.options.content);
                    },
                    openOn: function (t) {
                        return (t = arguments.length ? t : this._source._map).hasLayer(this) || t.addLayer(this), this;
                    },
                    close: function () {
                        return this._map && this._map.removeLayer(this), this;
                    },
                    toggle: function (t) {
                        return this._map ? this.close() : (arguments.length ? (this._source = t) : (t = this._source), this._prepareOpen(), this.openOn(t._map)), this;
                    },
                    onAdd: function (t) {
                        (this._zoomAnimated = t._zoomAnimated),
                            this._container || this._initLayout(),
                            t._fadeAnimated && Te(this._container, 0),
                            clearTimeout(this._removeTimeout),
                            this.getPane().appendChild(this._container),
                            this.update(),
                            t._fadeAnimated && Te(this._container, 1),
                            this.bringToFront(),
                            this.options.interactive && (we(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
                    },
                    onRemove: function (t) {
                        t._fadeAnimated ? (Te(this._container, 0), (this._removeTimeout = setTimeout(o(_e, void 0, this._container), 200))) : _e(this._container),
                            this.options.interactive && (Le(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
                    },
                    getLatLng: function () {
                        return this._latlng;
                    },
                    setLatLng: function (t) {
                        return (this._latlng = $(t)), this._map && (this._updatePosition(), this._adjustPan()), this;
                    },
                    getContent: function () {
                        return this._content;
                    },
                    setContent: function (t) {
                        return (this._content = t), this.update(), this;
                    },
                    getElement: function () {
                        return this._container;
                    },
                    update: function () {
                        this._map && ((this._container.style.visibility = "hidden"), this._updateContent(), this._updateLayout(), this._updatePosition(), (this._container.style.visibility = ""), this._adjustPan());
                    },
                    getEvents: function () {
                        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
                        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
                    },
                    isOpen: function () {
                        return !!this._map && this._map.hasLayer(this);
                    },
                    bringToFront: function () {
                        return this._map && ve(this._container), this;
                    },
                    bringToBack: function () {
                        return this._map && ye(this._container), this;
                    },
                    _prepareOpen: function (t) {
                        var e = this._source;
                        if (!e._map) return !1;
                        if (e instanceof Xi) {
                            e = null;
                            var i = this._source._layers;
                            for (var n in i)
                                if (i[n]._map) {
                                    e = i[n];
                                    break;
                                }
                            if (!e) return !1;
                            this._source = e;
                        }
                        if (!t)
                            if (e.getCenter) t = e.getCenter();
                            else if (e.getLatLng) t = e.getLatLng();
                            else {
                                if (!e.getBounds) throw new Error("Unable to get source layer LatLng.");
                                t = e.getBounds().getCenter();
                            }
                        return this.setLatLng(t), this._map && this.update(), !0;
                    },
                    _updateContent: function () {
                        if (this._content) {
                            var t = this._contentNode,
                                e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                            if ("string" == typeof e) t.innerHTML = e;
                            else {
                                for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                                t.appendChild(e);
                            }
                            this.fire("contentupdate");
                        }
                    },
                    _updatePosition: function () {
                        if (this._map) {
                            var t = this._map.latLngToLayerPoint(this._latlng),
                                e = B(this.options.offset),
                                i = this._getAnchor();
                            this._zoomAnimated ? ke(this._container, t.add(i)) : (e = e.add(t).add(i));
                            var n = (this._containerBottom = -e.y),
                                o = (this._containerLeft = -Math.round(this._containerWidth / 2) + e.x);
                            (this._container.style.bottom = n + "px"), (this._container.style.left = o + "px");
                        }
                    },
                    _getAnchor: function () {
                        return [0, 0];
                    },
                });
                oi.include({
                    _initOverlay: function (t, e, i, n) {
                        var o = e;
                        return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
                    },
                }),
                    qi.include({
                        _initOverlay: function (t, e, i, n) {
                            var o = i;
                            return o instanceof t ? (p(o, n), (o._source = this)) : (o = e && !n ? e : new t(n, this)).setContent(i), o;
                        },
                    });
                var An = On.extend({
                        options: {
                            pane: "popupPane",
                            offset: [0, 7],
                            maxWidth: 300,
                            minWidth: 50,
                            maxHeight: null,
                            autoPan: !0,
                            autoPanPaddingTopLeft: null,
                            autoPanPaddingBottomRight: null,
                            autoPanPadding: [5, 5],
                            keepInView: !1,
                            closeButton: !0,
                            autoClose: !0,
                            closeOnEscapeKey: !0,
                            className: "",
                        },
                        openOn: function (t) {
                            return !(t = arguments.length ? t : this._source._map).hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), (t._popup = this), On.prototype.openOn.call(this, t);
                        },
                        onAdd: function (t) {
                            On.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof sn || this._source.on("preclick", Ve));
                        },
                        onRemove: function (t) {
                            On.prototype.onRemove.call(this, t),
                                t.fire("popupclose", { popup: this }),
                                this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof sn || this._source.off("preclick", Ve));
                        },
                        getEvents: function () {
                            var t = On.prototype.getEvents.call(this);
                            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
                        },
                        _initLayout: function () {
                            var t = "leaflet-popup",
                                e = (this._container = me("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated")),
                                i = (this._wrapper = me("div", t + "-content-wrapper", e));
                            if (
                                ((this._contentNode = me("div", t + "-content", i)),
                                Ue(e),
                                qe(this._contentNode),
                                je(e, "contextmenu", Ve),
                                (this._tipContainer = me("div", t + "-tip-container", e)),
                                (this._tip = me("div", t + "-tip", this._tipContainer)),
                                this.options.closeButton)
                            ) {
                                var n = (this._closeButton = me("a", t + "-close-button", e));
                                n.setAttribute("role", "button"),
                                    n.setAttribute("aria-label", "Close popup"),
                                    (n.href = "#close"),
                                    (n.innerHTML = '<span aria-hidden="true">&#215;</span>'),
                                    je(
                                        n,
                                        "click",
                                        function (t) {
                                            Ye(t), this.close();
                                        },
                                        this
                                    );
                            }
                        },
                        _updateLayout: function () {
                            var t = this._contentNode,
                                e = t.style;
                            (e.width = ""), (e.whiteSpace = "nowrap");
                            var i = t.offsetWidth;
                            (i = Math.min(i, this.options.maxWidth)), (i = Math.max(i, this.options.minWidth)), (e.width = i + 1 + "px"), (e.whiteSpace = ""), (e.height = "");
                            var n = t.offsetHeight,
                                o = this.options.maxHeight,
                                s = "leaflet-popup-scrolled";
                            o && n > o ? ((e.height = o + "px"), we(t, s)) : Le(t, s), (this._containerWidth = this._container.offsetWidth);
                        },
                        _animateZoom: function (t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                                i = this._getAnchor();
                            ke(this._container, e.add(i));
                        },
                        _adjustPan: function () {
                            if (this.options.autoPan)
                                if ((this._map._panAnim && this._map._panAnim.stop(), this._autopanning)) this._autopanning = !1;
                                else {
                                    var t = this._map,
                                        e = parseInt(fe(this._container, "marginBottom"), 10) || 0,
                                        i = this._container.offsetHeight + e,
                                        n = this._containerWidth,
                                        o = new A(this._containerLeft, -i - this._containerBottom);
                                    o._add(Ee(this._container));
                                    var s = t.layerPointToContainerPoint(o),
                                        r = B(this.options.autoPanPadding),
                                        a = B(this.options.autoPanPaddingTopLeft || r),
                                        l = B(this.options.autoPanPaddingBottomRight || r),
                                        h = t.getSize(),
                                        u = 0,
                                        c = 0;
                                    s.x + n + l.x > h.x && (u = s.x + n - h.x + l.x),
                                        s.x - u - a.x < 0 && (u = s.x - a.x),
                                        s.y + i + l.y > h.y && (c = s.y + i - h.y + l.y),
                                        s.y - c - a.y < 0 && (c = s.y - a.y),
                                        (u || c) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([u, c]));
                                }
                        },
                        _getAnchor: function () {
                            return B(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
                        },
                    }),
                    In = function (t, e) {
                        return new An(t, e);
                    };
                oi.mergeOptions({ closePopupOnClick: !0 }),
                    oi.include({
                        openPopup: function (t, e, i) {
                            return this._initOverlay(An, t, e, i).openOn(this), this;
                        },
                        closePopup: function (t) {
                            return (t = arguments.length ? t : this._popup) && t.close(), this;
                        },
                    }),
                    qi.include({
                        bindPopup: function (t, e) {
                            return (
                                (this._popup = this._initOverlay(An, this._popup, t, e)),
                                this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), (this._popupHandlersAdded = !0)),
                                this
                            );
                        },
                        unbindPopup: function () {
                            return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), (this._popupHandlersAdded = !1), (this._popup = null)), this;
                        },
                        openPopup: function (t) {
                            return this._popup && (this instanceof Xi || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
                        },
                        closePopup: function () {
                            return this._popup && this._popup.close(), this;
                        },
                        togglePopup: function () {
                            return this._popup && this._popup.toggle(this), this;
                        },
                        isPopupOpen: function () {
                            return !!this._popup && this._popup.isOpen();
                        },
                        setPopupContent: function (t) {
                            return this._popup && this._popup.setContent(t), this;
                        },
                        getPopup: function () {
                            return this._popup;
                        },
                        _openPopup: function (t) {
                            if (this._popup && this._map) {
                                Xe(t);
                                var e = t.layer || t.target;
                                this._popup._source !== e || e instanceof sn ? ((this._popup._source = e), this.openPopup(t.latlng)) : this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
                            }
                        },
                        _movePopup: function (t) {
                            this._popup.setLatLng(t.latlng);
                        },
                        _onKeyPress: function (t) {
                            13 === t.originalEvent.keyCode && this._openPopup(t);
                        },
                    });
                var Bn = On.extend({
                        options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, opacity: 0.9 },
                        onAdd: function (t) {
                            On.prototype.onAdd.call(this, t),
                                this.setOpacity(this.options.opacity),
                                t.fire("tooltipopen", { tooltip: this }),
                                this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
                        },
                        onRemove: function (t) {
                            On.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
                        },
                        getEvents: function () {
                            var t = On.prototype.getEvents.call(this);
                            return this.options.permanent || (t.preclick = this.close), t;
                        },
                        _initLayout: function () {
                            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
                            (this._contentNode = this._container = me("div", t)), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + r(this));
                        },
                        _updateLayout: function () {},
                        _adjustPan: function () {},
                        _setPosition: function (t) {
                            var e,
                                i,
                                n = this._map,
                                o = this._container,
                                s = n.latLngToContainerPoint(n.getCenter()),
                                r = n.layerPointToContainerPoint(t),
                                a = this.options.direction,
                                l = o.offsetWidth,
                                h = o.offsetHeight,
                                u = B(this.options.offset),
                                c = this._getAnchor();
                            "top" === a
                                ? ((e = l / 2), (i = h))
                                : "bottom" === a
                                ? ((e = l / 2), (i = 0))
                                : "center" === a
                                ? ((e = l / 2), (i = h / 2))
                                : "right" === a
                                ? ((e = 0), (i = h / 2))
                                : "left" === a
                                ? ((e = l), (i = h / 2))
                                : r.x < s.x
                                ? ((a = "right"), (e = 0), (i = h / 2))
                                : ((a = "left"), (e = l + 2 * (u.x + c.x)), (i = h / 2)),
                                (t = t.subtract(B(e, i, !0)).add(u).add(c)),
                                Le(o, "leaflet-tooltip-right"),
                                Le(o, "leaflet-tooltip-left"),
                                Le(o, "leaflet-tooltip-top"),
                                Le(o, "leaflet-tooltip-bottom"),
                                we(o, "leaflet-tooltip-" + a),
                                ke(o, t);
                        },
                        _updatePosition: function () {
                            var t = this._map.latLngToLayerPoint(this._latlng);
                            this._setPosition(t);
                        },
                        setOpacity: function (t) {
                            (this.options.opacity = t), this._container && Te(this._container, t);
                        },
                        _animateZoom: function (t) {
                            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
                            this._setPosition(e);
                        },
                        _getAnchor: function () {
                            return B(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
                        },
                    }),
                    Zn = function (t, e) {
                        return new Bn(t, e);
                    };
                oi.include({
                    openTooltip: function (t, e, i) {
                        return this._initOverlay(Bn, t, e, i).openOn(this), this;
                    },
                    closeTooltip: function (t) {
                        return t.close(), this;
                    },
                }),
                    qi.include({
                        bindTooltip: function (t, e) {
                            return (
                                this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
                                (this._tooltip = this._initOverlay(Bn, this._tooltip, t, e)),
                                this._initTooltipInteractions(),
                                this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(),
                                this
                            );
                        },
                        unbindTooltip: function () {
                            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), (this._tooltip = null)), this;
                        },
                        _initTooltipInteractions: function (t) {
                            if (t || !this._tooltipHandlersAdded) {
                                var e = t ? "off" : "on",
                                    i = { remove: this.closeTooltip, move: this._moveTooltip };
                                this._tooltip.options.permanent
                                    ? (i.add = this._openTooltip)
                                    : ((i.mouseover = this._openTooltip), (i.mouseout = this.closeTooltip), (i.click = this._openTooltip), this._map ? this._addFocusListeners() : (i.add = this._addFocusListeners)),
                                    this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
                                    this[e](i),
                                    (this._tooltipHandlersAdded = !t);
                            }
                        },
                        openTooltip: function (t) {
                            return (
                                this._tooltip &&
                                    (this instanceof Xi || (this._tooltip._source = this),
                                    this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))),
                                this
                            );
                        },
                        closeTooltip: function () {
                            if (this._tooltip) return this._tooltip.close();
                        },
                        toggleTooltip: function () {
                            return this._tooltip && this._tooltip.toggle(this), this;
                        },
                        isTooltipOpen: function () {
                            return this._tooltip.isOpen();
                        },
                        setTooltipContent: function (t) {
                            return this._tooltip && this._tooltip.setContent(t), this;
                        },
                        getTooltip: function () {
                            return this._tooltip;
                        },
                        _addFocusListeners: function () {
                            this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
                        },
                        _addFocusListenersOnLayer: function (t) {
                            var e = "function" == typeof t.getElement && t.getElement();
                            e &&
                                (je(
                                    e,
                                    "focus",
                                    function () {
                                        (this._tooltip._source = t), this.openTooltip();
                                    },
                                    this
                                ),
                                je(e, "blur", this.closeTooltip, this));
                        },
                        _setAriaDescribedByOnLayer: function (t) {
                            var e = "function" == typeof t.getElement && t.getElement();
                            e && e.setAttribute("aria-describedby", this._tooltip._container.id);
                        },
                        _openTooltip: function (t) {
                            if (this._tooltip && this._map)
                                if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                                    this._openOnceFlag = !0;
                                    var e = this;
                                    this._map.once("moveend", function () {
                                        (e._openOnceFlag = !1), e._openTooltip(t);
                                    });
                                } else (this._tooltip._source = t.layer || t.target), this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
                        },
                        _moveTooltip: function (t) {
                            var e,
                                i,
                                n = t.latlng;
                            this._tooltip.options.sticky && t.originalEvent && ((e = this._map.mouseEventToContainerPoint(t.originalEvent)), (i = this._map.containerPointToLayerPoint(e)), (n = this._map.layerPointToLatLng(i))),
                                this._tooltip.setLatLng(n);
                        },
                    });
                var Nn = Ji.extend({
                    options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" },
                    createIcon: function (t) {
                        var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                            i = this.options;
                        if ((i.html instanceof Element ? (ge(e), e.appendChild(i.html)) : (e.innerHTML = !1 !== i.html ? i.html : ""), i.bgPos)) {
                            var n = B(i.bgPos);
                            e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
                        }
                        return this._setIconStyles(e, "icon"), e;
                    },
                    createShadow: function () {
                        return null;
                    },
                });
                function Dn(t) {
                    return new Nn(t);
                }
                Ji.Default = tn;
                var jn = qi.extend({
                    options: {
                        tileSize: 256,
                        opacity: 1,
                        updateWhenIdle: Dt.mobile,
                        updateWhenZooming: !0,
                        updateInterval: 200,
                        zIndex: 1,
                        bounds: null,
                        minZoom: 0,
                        maxZoom: void 0,
                        maxNativeZoom: void 0,
                        minNativeZoom: void 0,
                        noWrap: !1,
                        pane: "tilePane",
                        className: "",
                        keepBuffer: 2,
                    },
                    initialize: function (t) {
                        p(this, t);
                    },
                    onAdd: function () {
                        this._initContainer(), (this._levels = {}), (this._tiles = {}), this._resetView();
                    },
                    beforeAdd: function (t) {
                        t._addZoomLimit(this);
                    },
                    onRemove: function (t) {
                        this._removeAllTiles(), _e(this._container), t._removeZoomLimit(this), (this._container = null), (this._tileZoom = void 0);
                    },
                    bringToFront: function () {
                        return this._map && (ve(this._container), this._setAutoZIndex(Math.max)), this;
                    },
                    bringToBack: function () {
                        return this._map && (ye(this._container), this._setAutoZIndex(Math.min)), this;
                    },
                    getContainer: function () {
                        return this._container;
                    },
                    setOpacity: function (t) {
                        return (this.options.opacity = t), this._updateOpacity(), this;
                    },
                    setZIndex: function (t) {
                        return (this.options.zIndex = t), this._updateZIndex(), this;
                    },
                    isLoading: function () {
                        return this._loading;
                    },
                    redraw: function () {
                        if (this._map) {
                            this._removeAllTiles();
                            var t = this._clampZoom(this._map.getZoom());
                            t !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()), this._update();
                        }
                        return this;
                    },
                    getEvents: function () {
                        var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };
                        return this.options.updateWhenIdle || (this._onMove || (this._onMove = a(this._onMoveEnd, this.options.updateInterval, this)), (t.move = this._onMove)), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
                    },
                    createTile: function () {
                        return document.createElement("div");
                    },
                    getTileSize: function () {
                        var t = this.options.tileSize;
                        return t instanceof A ? t : new A(t, t);
                    },
                    _updateZIndex: function () {
                        this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
                    },
                    _setAutoZIndex: function (t) {
                        for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) (e = i[o].style.zIndex), i[o] !== this._container && e && (n = t(n, +e));
                        isFinite(n) && ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
                    },
                    _updateOpacity: function () {
                        if (this._map && !Dt.ielt9) {
                            Te(this._container, this.options.opacity);
                            var t = +new Date(),
                                e = !1,
                                i = !1;
                            for (var n in this._tiles) {
                                var o = this._tiles[n];
                                if (o.current && o.loaded) {
                                    var s = Math.min(1, (t - o.loaded) / 200);
                                    Te(o.el, s), s < 1 ? (e = !0) : (o.active ? (i = !0) : this._onOpaqueTile(o), (o.active = !0));
                                }
                            }
                            i && !this._noPrune && this._pruneTiles(), e && (P(this._fadeFrame), (this._fadeFrame = S(this._updateOpacity, this)));
                        }
                    },
                    _onOpaqueTile: h,
                    _initContainer: function () {
                        this._container ||
                            ((this._container = me("div", "leaflet-layer " + (this.options.className || ""))), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
                    },
                    _updateLevels: function () {
                        var t = this._tileZoom,
                            e = this.options.maxZoom;
                        if (void 0 !== t) {
                            for (var i in this._levels)
                                (i = Number(i)),
                                    this._levels[i].el.children.length || i === t
                                        ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)), this._onUpdateLevel(i))
                                        : (_e(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                            var n = this._levels[t],
                                o = this._map;
                            return (
                                n ||
                                    (((n = this._levels[t] = {}).el = me("div", "leaflet-tile-container leaflet-zoom-animated", this._container)),
                                    (n.el.style.zIndex = e),
                                    (n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
                                    (n.zoom = t),
                                    this._setZoomTransform(n, o.getCenter(), o.getZoom()),
                                    h(n.el.offsetWidth),
                                    this._onCreateLevel(n)),
                                (this._level = n),
                                n
                            );
                        }
                    },
                    _onUpdateLevel: h,
                    _onRemoveLevel: h,
                    _onCreateLevel: h,
                    _pruneTiles: function () {
                        if (this._map) {
                            var t,
                                e,
                                i = this._map.getZoom();
                            if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
                            else {
                                for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
                                for (t in this._tiles)
                                    if ((e = this._tiles[t]).current && !e.active) {
                                        var n = e.coords;
                                        this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
                                    }
                                for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
                            }
                        }
                    },
                    _removeTilesAtZoom: function (t) {
                        for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e);
                    },
                    _removeAllTiles: function () {
                        for (var t in this._tiles) this._removeTile(t);
                    },
                    _invalidateAll: function () {
                        for (var t in this._levels) _e(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
                        this._removeAllTiles(), (this._tileZoom = void 0);
                    },
                    _retainParent: function (t, e, i, n) {
                        var o = Math.floor(t / 2),
                            s = Math.floor(e / 2),
                            r = i - 1,
                            a = new A(+o, +s);
                        a.z = +r;
                        var l = this._tileCoordsToKey(a),
                            h = this._tiles[l];
                        return h && h.active ? ((h.retain = !0), !0) : (h && h.loaded && (h.retain = !0), r > n && this._retainParent(o, s, r, n));
                    },
                    _retainChildren: function (t, e, i, n) {
                        for (var o = 2 * t; o < 2 * t + 2; o++)
                            for (var s = 2 * e; s < 2 * e + 2; s++) {
                                var r = new A(o, s);
                                r.z = i + 1;
                                var a = this._tileCoordsToKey(r),
                                    l = this._tiles[a];
                                l && l.active ? (l.retain = !0) : (l && l.loaded && (l.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n));
                            }
                    },
                    _resetView: function (t) {
                        var e = t && (t.pinch || t.flyTo);
                        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
                    },
                    _animateZoom: function (t) {
                        this._setView(t.center, t.zoom, !0, t.noUpdate);
                    },
                    _clampZoom: function (t) {
                        var e = this.options;
                        return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t;
                    },
                    _setView: function (t, e, i, n) {
                        var o = Math.round(e);
                        o = (void 0 !== this.options.maxZoom && o > this.options.maxZoom) || (void 0 !== this.options.minZoom && o < this.options.minZoom) ? void 0 : this._clampZoom(o);
                        var s = this.options.updateWhenZooming && o !== this._tileZoom;
                        (n && !s) || ((this._tileZoom = o), this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), (this._noPrune = !!i)),
                            this._setZoomTransforms(t, e);
                    },
                    _setZoomTransforms: function (t, e) {
                        for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e);
                    },
                    _setZoomTransform: function (t, e, i) {
                        var n = this._map.getZoomScale(i, t.zoom),
                            o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                        Dt.any3d ? Me(t.el, o, n) : ke(t.el, o);
                    },
                    _resetGrid: function () {
                        var t = this._map,
                            e = t.options.crs,
                            i = (this._tileSize = this.getTileSize()),
                            n = this._tileZoom,
                            o = this._map.getPixelWorldBounds(this._tileZoom);
                        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
                            (this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)]),
                            (this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]);
                    },
                    _onMoveEnd: function () {
                        this._map && !this._map._animatingZoom && this._update();
                    },
                    _getTiledPixelBounds: function (t) {
                        var e = this._map,
                            i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                            n = e.getZoomScale(i, this._tileZoom),
                            o = e.project(t, this._tileZoom).floor(),
                            s = e.getSize().divideBy(2 * n);
                        return new Z(o.subtract(s), o.add(s));
                    },
                    _update: function (t) {
                        var e = this._map;
                        if (e) {
                            var i = this._clampZoom(e.getZoom());
                            if ((void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)) {
                                var n = this._getTiledPixelBounds(t),
                                    o = this._pxBoundsToTileRange(n),
                                    s = o.getCenter(),
                                    r = [],
                                    a = this.options.keepBuffer,
                                    l = new Z(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                                if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                                for (var h in this._tiles) {
                                    var u = this._tiles[h].coords;
                                    (u.z === this._tileZoom && l.contains(new A(u.x, u.y))) || (this._tiles[h].current = !1);
                                }
                                if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
                                else {
                                    for (var c = o.min.y; c <= o.max.y; c++)
                                        for (var d = o.min.x; d <= o.max.x; d++) {
                                            var p = new A(d, c);
                                            if (((p.z = this._tileZoom), this._isValidTile(p))) {
                                                var f = this._tiles[this._tileCoordsToKey(p)];
                                                f ? (f.current = !0) : r.push(p);
                                            }
                                        }
                                    if (
                                        (r.sort(function (t, e) {
                                            return t.distanceTo(s) - e.distanceTo(s);
                                        }),
                                        0 !== r.length)
                                    ) {
                                        this._loading || ((this._loading = !0), this.fire("loading"));
                                        var m = document.createDocumentFragment();
                                        for (d = 0; d < r.length; d++) this._addTile(r[d], m);
                                        this._level.el.appendChild(m);
                                    }
                                }
                            }
                        }
                    },
                    _isValidTile: function (t) {
                        var e = this._map.options.crs;
                        if (!e.infinite) {
                            var i = this._globalTileRange;
                            if ((!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) || (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))) return !1;
                        }
                        if (!this.options.bounds) return !0;
                        var n = this._tileCoordsToBounds(t);
                        return j(this.options.bounds).overlaps(n);
                    },
                    _keyToBounds: function (t) {
                        return this._tileCoordsToBounds(this._keyToTileCoords(t));
                    },
                    _tileCoordsToNwSe: function (t) {
                        var e = this._map,
                            i = this.getTileSize(),
                            n = t.scaleBy(i),
                            o = n.add(i);
                        return [e.unproject(n, t.z), e.unproject(o, t.z)];
                    },
                    _tileCoordsToBounds: function (t) {
                        var e = this._tileCoordsToNwSe(t),
                            i = new D(e[0], e[1]);
                        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
                    },
                    _tileCoordsToKey: function (t) {
                        return t.x + ":" + t.y + ":" + t.z;
                    },
                    _keyToTileCoords: function (t) {
                        var e = t.split(":"),
                            i = new A(+e[0], +e[1]);
                        return (i.z = +e[2]), i;
                    },
                    _removeTile: function (t) {
                        var e = this._tiles[t];
                        e && (_e(e.el), delete this._tiles[t], this.fire("tileunload", { tile: e.el, coords: this._keyToTileCoords(t) }));
                    },
                    _initTile: function (t) {
                        we(t, "leaflet-tile");
                        var e = this.getTileSize();
                        (t.style.width = e.x + "px"), (t.style.height = e.y + "px"), (t.onselectstart = h), (t.onmousemove = h), Dt.ielt9 && this.options.opacity < 1 && Te(t, this.options.opacity);
                    },
                    _addTile: function (t, e) {
                        var i = this._getTilePos(t),
                            n = this._tileCoordsToKey(t),
                            s = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
                        this._initTile(s),
                            this.createTile.length < 2 && S(o(this._tileReady, this, t, null, s)),
                            ke(s, i),
                            (this._tiles[n] = { el: s, coords: t, current: !0 }),
                            e.appendChild(s),
                            this.fire("tileloadstart", { tile: s, coords: t });
                    },
                    _tileReady: function (t, e, i) {
                        e && this.fire("tileerror", { error: e, tile: i, coords: t });
                        var n = this._tileCoordsToKey(t);
                        (i = this._tiles[n]) &&
                            ((i.loaded = +new Date()),
                            this._map._fadeAnimated ? (Te(i.el, 0), P(this._fadeFrame), (this._fadeFrame = S(this._updateOpacity, this))) : ((i.active = !0), this._pruneTiles()),
                            e || (we(i.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: i.el, coords: t })),
                            this._noTilesToLoad() && ((this._loading = !1), this.fire("load"), Dt.ielt9 || !this._map._fadeAnimated ? S(this._pruneTiles, this) : setTimeout(o(this._pruneTiles, this), 250)));
                    },
                    _getTilePos: function (t) {
                        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
                    },
                    _wrapCoords: function (t) {
                        var e = new A(this._wrapX ? l(t.x, this._wrapX) : t.x, this._wrapY ? l(t.y, this._wrapY) : t.y);
                        return (e.z = t.z), e;
                    },
                    _pxBoundsToTileRange: function (t) {
                        var e = this.getTileSize();
                        return new Z(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]));
                    },
                    _noTilesToLoad: function () {
                        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
                        return !0;
                    },
                });
                function Rn(t) {
                    return new jn(t);
                }
                var $n = jn.extend({
                    options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1, referrerPolicy: !1 },
                    initialize: function (t, e) {
                        (this._url = t),
                            (e = p(this, e)).detectRetina && Dt.retina && e.maxZoom > 0
                                ? ((e.tileSize = Math.floor(e.tileSize / 2)),
                                    e.zoomReverse ? (e.zoomOffset--, (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1))) : (e.zoomOffset++, (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
                                    (e.minZoom = Math.max(0, e.minZoom)))
                                : e.zoomReverse
                                ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
                                : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
                            "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")),
                            this.on("tileunload", this._onTileRemove);
                    },
                    setUrl: function (t, e) {
                        return this._url === t && void 0 === e && (e = !0), (this._url = t), e || this.redraw(), this;
                    },
                    createTile: function (t, e) {
                        var i = document.createElement("img");
                        return (
                            je(i, "load", o(this._tileOnLoad, this, e, i)),
                            je(i, "error", o(this._tileOnError, this, e, i)),
                            (this.options.crossOrigin || "" === this.options.crossOrigin) && (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
                            "string" == typeof this.options.referrerPolicy && (i.referrerPolicy = this.options.referrerPolicy),
                            (i.alt = ""),
                            (i.src = this.getTileUrl(t)),
                            i
                        );
                    },
                    getTileUrl: function (t) {
                        var e = { r: Dt.retina ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };
                        if (this._map && !this._map.options.crs.infinite) {
                            var n = this._globalTileRange.max.y - t.y;
                            this.options.tms && (e.y = n), (e["-y"] = n);
                        }
                        return _(this._url, i(e, this.options));
                    },
                    _tileOnLoad: function (t, e) {
                        Dt.ielt9 ? setTimeout(o(t, this, null, e), 0) : t(null, e);
                    },
                    _tileOnError: function (t, e, i) {
                        var n = this.options.errorTileUrl;
                        n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
                    },
                    _onTileRemove: function (t) {
                        t.tile.onload = null;
                    },
                    _getZoomForUrl: function () {
                        var t = this._tileZoom,
                            e = this.options.maxZoom;
                        return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset;
                    },
                    _getSubdomain: function (t) {
                        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                        return this.options.subdomains[e];
                    },
                    _abortLoading: function () {
                        var t, e;
                        for (t in this._tiles)
                            if (this._tiles[t].coords.z !== this._tileZoom && (((e = this._tiles[t].el).onload = h), (e.onerror = h), !e.complete)) {
                                e.src = y;
                                var i = this._tiles[t].coords;
                                _e(e), delete this._tiles[t], this.fire("tileabort", { tile: e, coords: i });
                            }
                    },
                    _removeTile: function (t) {
                        var e = this._tiles[t];
                        if (e) return e.el.setAttribute("src", y), jn.prototype._removeTile.call(this, t);
                    },
                    _tileReady: function (t, e, i) {
                        if (this._map && (!i || i.getAttribute("src") !== y)) return jn.prototype._tileReady.call(this, t, e, i);
                    },
                });
                function Gn(t, e) {
                    return new $n(t, e);
                }
                var Hn = $n.extend({
                    defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" },
                    options: { crs: null, uppercase: !1 },
                    initialize: function (t, e) {
                        this._url = t;
                        var n = i({}, this.defaultWmsParams);
                        for (var o in e) o in this.options || (n[o] = e[o]);
                        var s = (e = p(this, e)).detectRetina && Dt.retina ? 2 : 1,
                            r = this.getTileSize();
                        (n.width = r.x * s), (n.height = r.y * s), (this.wmsParams = n);
                    },
                    onAdd: function (t) {
                        (this._crs = this.options.crs || t.options.crs), (this._wmsVersion = parseFloat(this.wmsParams.version));
                        var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
                        (this.wmsParams[e] = this._crs.code), $n.prototype.onAdd.call(this, t);
                    },
                    getTileUrl: function (t) {
                        var e = this._tileCoordsToNwSe(t),
                            i = this._crs,
                            n = N(i.project(e[0]), i.project(e[1])),
                            o = n.min,
                            s = n.max,
                            r = (this._wmsVersion >= 1.3 && this._crs === Wi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                            a = $n.prototype.getTileUrl.call(this, t);
                        return a + f(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r;
                    },
                    setParams: function (t, e) {
                        return i(this.wmsParams, t), e || this.redraw(), this;
                    },
                });
                function Fn(t, e) {
                    return new Hn(t, e);
                }
                ($n.WMS = Hn), (Gn.wms = Fn);
                var Wn = qi.extend({
                        options: { padding: 0.1 },
                        initialize: function (t) {
                            p(this, t), r(this), (this._layers = this._layers || {});
                        },
                        onAdd: function () {
                            this._container || (this._initContainer(), we(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
                        },
                        onRemove: function () {
                            this.off("update", this._updatePaths, this), this._destroyContainer();
                        },
                        getEvents: function () {
                            var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };
                            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
                        },
                        _onAnimZoom: function (t) {
                            this._updateTransform(t.center, t.zoom);
                        },
                        _onZoom: function () {
                            this._updateTransform(this._map.getCenter(), this._map.getZoom());
                        },
                        _updateTransform: function (t, e) {
                            var i = this._map.getZoomScale(e, this._zoom),
                                n = this._map.getSize().multiplyBy(0.5 + this.options.padding),
                                o = this._map.project(this._center, e),
                                s = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
                            Dt.any3d ? Me(this._container, s, i) : ke(this._container, s);
                        },
                        _reset: function () {
                            for (var t in (this._update(), this._updateTransform(this._center, this._zoom), this._layers)) this._layers[t]._reset();
                        },
                        _onZoomEnd: function () {
                            for (var t in this._layers) this._layers[t]._project();
                        },
                        _updatePaths: function () {
                            for (var t in this._layers) this._layers[t]._update();
                        },
                        _update: function () {
                            var t = this.options.padding,
                                e = this._map.getSize(),
                                i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                            (this._bounds = new Z(i, i.add(e.multiplyBy(1 + 2 * t)).round())), (this._center = this._map.getCenter()), (this._zoom = this._map.getZoom());
                        },
                    }),
                    Vn = Wn.extend({
                        options: { tolerance: 0 },
                        getEvents: function () {
                            var t = Wn.prototype.getEvents.call(this);
                            return (t.viewprereset = this._onViewPreReset), t;
                        },
                        _onViewPreReset: function () {
                            this._postponeUpdatePaths = !0;
                        },
                        onAdd: function () {
                            Wn.prototype.onAdd.call(this), this._draw();
                        },
                        _initContainer: function () {
                            var t = (this._container = document.createElement("canvas"));
                            je(t, "mousemove", this._onMouseMove, this),
                                je(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this),
                                je(t, "mouseout", this._handleMouseOut, this),
                                (t._leaflet_disable_events = !0),
                                (this._ctx = t.getContext("2d"));
                        },
                        _destroyContainer: function () {
                            P(this._redrawRequest), delete this._ctx, _e(this._container), $e(this._container), delete this._container;
                        },
                        _updatePaths: function () {
                            if (!this._postponeUpdatePaths) {
                                for (var t in ((this._redrawBounds = null), this._layers)) this._layers[t]._update();
                                this._redraw();
                            }
                        },
                        _update: function () {
                            if (!this._map._animatingZoom || !this._bounds) {
                                Wn.prototype._update.call(this);
                                var t = this._bounds,
                                    e = this._container,
                                    i = t.getSize(),
                                    n = Dt.retina ? 2 : 1;
                                ke(e, t.min),
                                    (e.width = n * i.x),
                                    (e.height = n * i.y),
                                    (e.style.width = i.x + "px"),
                                    (e.style.height = i.y + "px"),
                                    Dt.retina && this._ctx.scale(2, 2),
                                    this._ctx.translate(-t.min.x, -t.min.y),
                                    this.fire("update");
                            }
                        },
                        _reset: function () {
                            Wn.prototype._reset.call(this), this._postponeUpdatePaths && ((this._postponeUpdatePaths = !1), this._updatePaths());
                        },
                        _initPath: function (t) {
                            this._updateDashArray(t), (this._layers[r(t)] = t);
                            var e = (t._order = { layer: t, prev: this._drawLast, next: null });
                            this._drawLast && (this._drawLast.next = e), (this._drawLast = e), (this._drawFirst = this._drawFirst || this._drawLast);
                        },
                        _addPath: function (t) {
                            this._requestRedraw(t);
                        },
                        _removePath: function (t) {
                            var e = t._order,
                                i = e.next,
                                n = e.prev;
                            i ? (i.prev = n) : (this._drawLast = n), n ? (n.next = i) : (this._drawFirst = i), delete t._order, delete this._layers[r(t)], this._requestRedraw(t);
                        },
                        _updatePath: function (t) {
                            this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
                        },
                        _updateStyle: function (t) {
                            this._updateDashArray(t), this._requestRedraw(t);
                        },
                        _updateDashArray: function (t) {
                            if ("string" == typeof t.options.dashArray) {
                                var e,
                                    i,
                                    n = t.options.dashArray.split(/[, ]+/),
                                    o = [];
                                for (i = 0; i < n.length; i++) {
                                    if (((e = Number(n[i])), isNaN(e))) return;
                                    o.push(e);
                                }
                                t.options._dashArray = o;
                            } else t.options._dashArray = t.options.dashArray;
                        },
                        _requestRedraw: function (t) {
                            this._map && (this._extendRedrawBounds(t), (this._redrawRequest = this._redrawRequest || S(this._redraw, this)));
                        },
                        _extendRedrawBounds: function (t) {
                            if (t._pxBounds) {
                                var e = (t.options.weight || 0) + 1;
                                (this._redrawBounds = this._redrawBounds || new Z()), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
                            }
                        },
                        _redraw: function () {
                            (this._redrawRequest = null), this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), (this._redrawBounds = null);
                        },
                        _clear: function () {
                            var t = this._redrawBounds;
                            if (t) {
                                var e = t.getSize();
                                this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
                            } else this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
                        },
                        _draw: function () {
                            var t,
                                e = this._redrawBounds;
                            if ((this._ctx.save(), e)) {
                                var i = e.getSize();
                                this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
                            }
                            this._drawing = !0;
                            for (var n = this._drawFirst; n; n = n.next) (t = n.layer), (!e || (t._pxBounds && t._pxBounds.intersects(e))) && t._updatePath();
                            (this._drawing = !1), this._ctx.restore();
                        },
                        _updatePoly: function (t, e) {
                            if (this._drawing) {
                                var i,
                                    n,
                                    o,
                                    s,
                                    r = t._parts,
                                    a = r.length,
                                    l = this._ctx;
                                if (a) {
                                    for (l.beginPath(), i = 0; i < a; i++) {
                                        for (n = 0, o = r[i].length; n < o; n++) (s = r[i][n]), l[n ? "lineTo" : "moveTo"](s.x, s.y);
                                        e && l.closePath();
                                    }
                                    this._fillStroke(l, t);
                                }
                            }
                        },
                        _updateCircle: function (t) {
                            if (this._drawing && !t._empty()) {
                                var e = t._point,
                                    i = this._ctx,
                                    n = Math.max(Math.round(t._radius), 1),
                                    o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                                1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t);
                            }
                        },
                        _fillStroke: function (t, e) {
                            var i = e.options;
                            i.fill && ((t.globalAlpha = i.fillOpacity), (t.fillStyle = i.fillColor || i.color), t.fill(i.fillRule || "evenodd")),
                                i.stroke &&
                                    0 !== i.weight &&
                                    (t.setLineDash && t.setLineDash((e.options && e.options._dashArray) || []),
                                    (t.globalAlpha = i.opacity),
                                    (t.lineWidth = i.weight),
                                    (t.strokeStyle = i.color),
                                    (t.lineCap = i.lineCap),
                                    (t.lineJoin = i.lineJoin),
                                    t.stroke());
                        },
                        _onClick: function (t) {
                            for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)
                                (e = o.layer).options.interactive && e._containsPoint(n) && (("click" !== t.type && "preclick" !== t.type) || !this._map._draggableMoved(e)) && (i = e);
                            this._fireEvent(!!i && [i], t);
                        },
                        _onMouseMove: function (t) {
                            if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                                var e = this._map.mouseEventToLayerPoint(t);
                                this._handleMouseHover(t, e);
                            }
                        },
                        _handleMouseOut: function (t) {
                            var e = this._hoveredLayer;
                            e && (Le(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), (this._hoveredLayer = null), (this._mouseHoverThrottled = !1));
                        },
                        _handleMouseHover: function (t, e) {
                            if (!this._mouseHoverThrottled) {
                                for (var i, n, s = this._drawFirst; s; s = s.next) (i = s.layer).options.interactive && i._containsPoint(e) && (n = i);
                                n !== this._hoveredLayer && (this._handleMouseOut(t), n && (we(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), (this._hoveredLayer = n))),
                                    this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t),
                                    (this._mouseHoverThrottled = !0),
                                    setTimeout(
                                        o(function () {
                                            this._mouseHoverThrottled = !1;
                                        }, this),
                                        32
                                    );
                            }
                        },
                        _fireEvent: function (t, e, i) {
                            this._map._fireDOMEvent(e, i || e.type, t);
                        },
                        _bringToFront: function (t) {
                            var e = t._order;
                            if (e) {
                                var i = e.next,
                                    n = e.prev;
                                i && ((i.prev = n), n ? (n.next = i) : i && (this._drawFirst = i), (e.prev = this._drawLast), (this._drawLast.next = e), (e.next = null), (this._drawLast = e), this._requestRedraw(t));
                            }
                        },
                        _bringToBack: function (t) {
                            var e = t._order;
                            if (e) {
                                var i = e.next,
                                    n = e.prev;
                                n && ((n.next = i), i ? (i.prev = n) : n && (this._drawLast = n), (e.prev = null), (e.next = this._drawFirst), (this._drawFirst.prev = e), (this._drawFirst = e), this._requestRedraw(t));
                            }
                        },
                    });
                function qn(t) {
                    return Dt.canvas ? new Vn(t) : null;
                }
                var Un = (function () {
                        try {
                            return (
                                document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                                function (t) {
                                    return document.createElement("<lvml:" + t + ' class="lvml">');
                                }
                            );
                        } catch (t) {}
                        return function (t) {
                            return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
                        };
                    })(),
                    Yn = {
                        _initContainer: function () {
                            this._container = me("div", "leaflet-vml-container");
                        },
                        _update: function () {
                            this._map._animatingZoom || (Wn.prototype._update.call(this), this.fire("update"));
                        },
                        _initPath: function (t) {
                            var e = (t._container = Un("shape"));
                            we(e, "leaflet-vml-shape " + (this.options.className || "")), (e.coordsize = "1 1"), (t._path = Un("path")), e.appendChild(t._path), this._updateStyle(t), (this._layers[r(t)] = t);
                        },
                        _addPath: function (t) {
                            var e = t._container;
                            this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
                        },
                        _removePath: function (t) {
                            var e = t._container;
                            _e(e), t.removeInteractiveTarget(e), delete this._layers[r(t)];
                        },
                        _updateStyle: function (t) {
                            var e = t._stroke,
                                i = t._fill,
                                n = t.options,
                                o = t._container;
                            (o.stroked = !!n.stroke),
                                (o.filled = !!n.fill),
                                n.stroke
                                    ? (e || (e = t._stroke = Un("stroke")),
                                        o.appendChild(e),
                                        (e.weight = n.weight + "px"),
                                        (e.color = n.color),
                                        (e.opacity = n.opacity),
                                        n.dashArray ? (e.dashStyle = g(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ")) : (e.dashStyle = ""),
                                        (e.endcap = n.lineCap.replace("butt", "flat")),
                                        (e.joinstyle = n.lineJoin))
                                    : e && (o.removeChild(e), (t._stroke = null)),
                                n.fill ? (i || (i = t._fill = Un("fill")), o.appendChild(i), (i.color = n.fillColor || n.color), (i.opacity = n.fillOpacity)) : i && (o.removeChild(i), (t._fill = null));
                        },
                        _updateCircle: function (t) {
                            var e = t._point.round(),
                                i = Math.round(t._radius),
                                n = Math.round(t._radiusY || i);
                            this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600");
                        },
                        _setPath: function (t, e) {
                            t._path.v = e;
                        },
                        _bringToFront: function (t) {
                            ve(t._container);
                        },
                        _bringToBack: function (t) {
                            ye(t._container);
                        },
                    },
                    Xn = Dt.vml ? Un : K,
                    Kn = Wn.extend({
                        _initContainer: function () {
                            (this._container = Xn("svg")), this._container.setAttribute("pointer-events", "none"), (this._rootGroup = Xn("g")), this._container.appendChild(this._rootGroup);
                        },
                        _destroyContainer: function () {
                            _e(this._container), $e(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
                        },
                        _update: function () {
                            if (!this._map._animatingZoom || !this._bounds) {
                                Wn.prototype._update.call(this);
                                var t = this._bounds,
                                    e = t.getSize(),
                                    i = this._container;
                                (this._svgSize && this._svgSize.equals(e)) || ((this._svgSize = e), i.setAttribute("width", e.x), i.setAttribute("height", e.y)),
                                    ke(i, t.min),
                                    i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")),
                                    this.fire("update");
                            }
                        },
                        _initPath: function (t) {
                            var e = (t._path = Xn("path"));
                            t.options.className && we(e, t.options.className), t.options.interactive && we(e, "leaflet-interactive"), this._updateStyle(t), (this._layers[r(t)] = t);
                        },
                        _addPath: function (t) {
                            this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
                        },
                        _removePath: function (t) {
                            _e(t._path), t.removeInteractiveTarget(t._path), delete this._layers[r(t)];
                        },
                        _updatePath: function (t) {
                            t._project(), t._update();
                        },
                        _updateStyle: function (t) {
                            var e = t._path,
                                i = t.options;
                            e &&
                                (i.stroke
                                    ? (e.setAttribute("stroke", i.color),
                                        e.setAttribute("stroke-opacity", i.opacity),
                                        e.setAttribute("stroke-width", i.weight),
                                        e.setAttribute("stroke-linecap", i.lineCap),
                                        e.setAttribute("stroke-linejoin", i.lineJoin),
                                        i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"),
                                        i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset"))
                                    : e.setAttribute("stroke", "none"),
                                i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
                        },
                        _updatePoly: function (t, e) {
                            this._setPath(t, J(t._parts, e));
                        },
                        _updateCircle: function (t) {
                            var e = t._point,
                                i = Math.max(Math.round(t._radius), 1),
                                n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
                                o = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
                            this._setPath(t, o);
                        },
                        _setPath: function (t, e) {
                            t._path.setAttribute("d", e);
                        },
                        _bringToFront: function (t) {
                            ve(t._path);
                        },
                        _bringToBack: function (t) {
                            ye(t._path);
                        },
                    });
                function Jn(t) {
                    return Dt.svg || Dt.vml ? new Kn(t) : null;
                }
                Dt.vml && Kn.include(Yn),
                    oi.include({
                        getRenderer: function (t) {
                            var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
                            return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
                        },
                        _getPaneRenderer: function (t) {
                            if ("overlayPane" === t || void 0 === t) return !1;
                            var e = this._paneRenderers[t];
                            return void 0 === e && ((e = this._createRenderer({ pane: t })), (this._paneRenderers[t] = e)), e;
                        },
                        _createRenderer: function (t) {
                            return (this.options.preferCanvas && qn(t)) || Jn(t);
                        },
                    });
                var Qn = dn.extend({
                    initialize: function (t, e) {
                        dn.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
                    },
                    setBounds: function (t) {
                        return this.setLatLngs(this._boundsToLatLngs(t));
                    },
                    _boundsToLatLngs: function (t) {
                        return [(t = j(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
                    },
                });
                function to(t, e) {
                    return new Qn(t, e);
                }
                (Kn.create = Xn),
                    (Kn.pointsToPath = J),
                    (fn.geometryToLayer = mn),
                    (fn.coordsToLatLng = gn),
                    (fn.coordsToLatLngs = vn),
                    (fn.latLngToCoords = yn),
                    (fn.latLngsToCoords = bn),
                    (fn.getFeature = wn),
                    (fn.asFeature = Ln),
                    oi.mergeOptions({ boxZoom: !0 });
                var eo = gi.extend({
                    initialize: function (t) {
                        (this._map = t), (this._container = t._container), (this._pane = t._panes.overlayPane), (this._resetStateTimeout = 0), t.on("unload", this._destroy, this);
                    },
                    addHooks: function () {
                        je(this._container, "mousedown", this._onMouseDown, this);
                    },
                    removeHooks: function () {
                        $e(this._container, "mousedown", this._onMouseDown, this);
                    },
                    moved: function () {
                        return this._moved;
                    },
                    _destroy: function () {
                        _e(this._pane), delete this._pane;
                    },
                    _resetState: function () {
                        (this._resetStateTimeout = 0), (this._moved = !1);
                    },
                    _clearDeferredResetState: function () {
                        0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
                    },
                    _onMouseDown: function (t) {
                        if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
                        this._clearDeferredResetState(),
                            this._resetState(),
                            se(),
                            Oe(),
                            (this._startPoint = this._map.mouseEventToContainerPoint(t)),
                            je(document, { contextmenu: Xe, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
                    },
                    _onMouseMove: function (t) {
                        this._moved || ((this._moved = !0), (this._box = me("div", "leaflet-zoom-box", this._container)), we(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")),
                            (this._point = this._map.mouseEventToContainerPoint(t));
                        var e = new Z(this._point, this._startPoint),
                            i = e.getSize();
                        ke(this._box, e.min), (this._box.style.width = i.x + "px"), (this._box.style.height = i.y + "px");
                    },
                    _finish: function () {
                        this._moved && (_e(this._box), Le(this._container, "leaflet-crosshair")), re(), Ae(), $e(document, { contextmenu: Xe, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
                    },
                    _onMouseUp: function (t) {
                        if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                            this._clearDeferredResetState(), (this._resetStateTimeout = setTimeout(o(this._resetState, this), 0));
                            var e = new D(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                            this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
                        }
                    },
                    _onKeyDown: function (t) {
                        27 === t.keyCode && (this._finish(), this._clearDeferredResetState(), this._resetState());
                    },
                });
                oi.addInitHook("addHandler", "boxZoom", eo), oi.mergeOptions({ doubleClickZoom: !0 });
                var io = gi.extend({
                    addHooks: function () {
                        this._map.on("dblclick", this._onDoubleClick, this);
                    },
                    removeHooks: function () {
                        this._map.off("dblclick", this._onDoubleClick, this);
                    },
                    _onDoubleClick: function (t) {
                        var e = this._map,
                            i = e.getZoom(),
                            n = e.options.zoomDelta,
                            o = t.originalEvent.shiftKey ? i - n : i + n;
                        "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
                    },
                });
                oi.addInitHook("addHandler", "doubleClickZoom", io), oi.mergeOptions({ dragging: !0, inertia: !0, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: 0.2, worldCopyJump: !1, maxBoundsViscosity: 0 });
                var no = gi.extend({
                    addHooks: function () {
                        if (!this._draggable) {
                            var t = this._map;
                            (this._draggable = new bi(t._mapPane, t._container)),
                                this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this),
                                this._draggable.on("predrag", this._onPreDragLimit, this),
                                t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
                        }
                        we(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), (this._positions = []), (this._times = []);
                    },
                    removeHooks: function () {
                        Le(this._map._container, "leaflet-grab"), Le(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
                    },
                    moved: function () {
                        return this._draggable && this._draggable._moved;
                    },
                    moving: function () {
                        return this._draggable && this._draggable._moving;
                    },
                    _onDragStart: function () {
                        var t = this._map;
                        if ((t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity)) {
                            var e = j(this._map.options.maxBounds);
                            (this._offsetLimit = N(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize()))),
                                (this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity)));
                        } else this._offsetLimit = null;
                        t.fire("movestart").fire("dragstart"), t.options.inertia && ((this._positions = []), (this._times = []));
                    },
                    _onDrag: function (t) {
                        if (this._map.options.inertia) {
                            var e = (this._lastTime = +new Date()),
                                i = (this._lastPos = this._draggable._absPos || this._draggable._newPos);
                            this._positions.push(i), this._times.push(e), this._prunePositions(e);
                        }
                        this._map.fire("move", t).fire("drag", t);
                    },
                    _prunePositions: function (t) {
                        for (; this._positions.length > 1 && t - this._times[0] > 50; ) this._positions.shift(), this._times.shift();
                    },
                    _onZoomEnd: function () {
                        var t = this._map.getSize().divideBy(2),
                            e = this._map.latLngToLayerPoint([0, 0]);
                        (this._initialWorldOffset = e.subtract(t).x), (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
                    },
                    _viscousLimit: function (t, e) {
                        return t - (t - e) * this._viscosity;
                    },
                    _onPreDragLimit: function () {
                        if (this._viscosity && this._offsetLimit) {
                            var t = this._draggable._newPos.subtract(this._draggable._startPos),
                                e = this._offsetLimit;
                            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                                t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                                t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                                t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                                (this._draggable._newPos = this._draggable._startPos.add(t));
                        }
                    },
                    _onPreDragWrap: function () {
                        var t = this._worldWidth,
                            e = Math.round(t / 2),
                            i = this._initialWorldOffset,
                            n = this._draggable._newPos.x,
                            o = ((n - e + i) % t) + e - i,
                            s = ((n + e + i) % t) - e - i,
                            r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
                        (this._draggable._absPos = this._draggable._newPos.clone()), (this._draggable._newPos.x = r);
                    },
                    _onDragEnd: function (t) {
                        var e = this._map,
                            i = e.options,
                            n = !i.inertia || t.noInertia || this._times.length < 2;
                        if ((e.fire("dragend", t), n)) e.fire("moveend");
                        else {
                            this._prunePositions(+new Date());
                            var o = this._lastPos.subtract(this._positions[0]),
                                s = (this._lastTime - this._times[0]) / 1e3,
                                r = i.easeLinearity,
                                a = o.multiplyBy(r / s),
                                l = a.distanceTo([0, 0]),
                                h = Math.min(i.inertiaMaxSpeed, l),
                                u = a.multiplyBy(h / l),
                                c = h / (i.inertiaDeceleration * r),
                                d = u.multiplyBy(-c / 2).round();
                            d.x || d.y
                                ? ((d = e._limitOffset(d, e.options.maxBounds)),
                                    S(function () {
                                        e.panBy(d, { duration: c, easeLinearity: r, noMoveStart: !0, animate: !0 });
                                    }))
                                : e.fire("moveend");
                        }
                    },
                });
                oi.addInitHook("addHandler", "dragging", no), oi.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
                var oo = gi.extend({
                    keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] },
                    initialize: function (t) {
                        (this._map = t), this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
                    },
                    addHooks: function () {
                        var t = this._map._container;
                        t.tabIndex <= 0 && (t.tabIndex = "0"), je(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
                    },
                    removeHooks: function () {
                        this._removeHooks(), $e(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
                    },
                    _onMouseDown: function () {
                        if (!this._focused) {
                            var t = document.body,
                                e = document.documentElement,
                                i = t.scrollTop || e.scrollTop,
                                n = t.scrollLeft || e.scrollLeft;
                            this._map._container.focus(), window.scrollTo(n, i);
                        }
                    },
                    _onFocus: function () {
                        (this._focused = !0), this._map.fire("focus");
                    },
                    _onBlur: function () {
                        (this._focused = !1), this._map.fire("blur");
                    },
                    _setPanDelta: function (t) {
                        var e,
                            i,
                            n = (this._panKeys = {}),
                            o = this.keyCodes;
                        for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
                        for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
                        for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
                        for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t];
                    },
                    _setZoomDelta: function (t) {
                        var e,
                            i,
                            n = (this._zoomKeys = {}),
                            o = this.keyCodes;
                        for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
                        for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t;
                    },
                    _addHooks: function () {
                        je(document, "keydown", this._onKeyDown, this);
                    },
                    _removeHooks: function () {
                        $e(document, "keydown", this._onKeyDown, this);
                    },
                    _onKeyDown: function (t) {
                        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                            var e,
                                i = t.keyCode,
                                n = this._map;
                            if (i in this._panKeys) {
                                if (!n._panAnim || !n._panAnim._inProgress)
                                    if (((e = this._panKeys[i]), t.shiftKey && (e = B(e).multiplyBy(3)), n.options.maxBounds && (e = n._limitOffset(B(e), n.options.maxBounds)), n.options.worldCopyJump)) {
                                        var o = n.wrapLatLng(n.unproject(n.project(n.getCenter()).add(e)));
                                        n.panTo(o);
                                    } else n.panBy(e);
                            } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                            else {
                                if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                                n.closePopup();
                            }
                            Xe(t);
                        }
                    },
                });
                oi.addInitHook("addHandler", "keyboard", oo), oi.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });
                var so = gi.extend({
                    addHooks: function () {
                        je(this._map._container, "wheel", this._onWheelScroll, this), (this._delta = 0);
                    },
                    removeHooks: function () {
                        $e(this._map._container, "wheel", this._onWheelScroll, this);
                    },
                    _onWheelScroll: function (t) {
                        var e = ti(t),
                            i = this._map.options.wheelDebounceTime;
                        (this._delta += e), (this._lastMousePos = this._map.mouseEventToContainerPoint(t)), this._startTime || (this._startTime = +new Date());
                        var n = Math.max(i - (+new Date() - this._startTime), 0);
                        clearTimeout(this._timer), (this._timer = setTimeout(o(this._performZoom, this), n)), Xe(t);
                    },
                    _performZoom: function () {
                        var t = this._map,
                            e = t.getZoom(),
                            i = this._map.options.zoomSnap || 0;
                        t._stop();
                        var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                            o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
                            s = i ? Math.ceil(o / i) * i : o,
                            r = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
                        (this._delta = 0), (this._startTime = null), r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r));
                    },
                });
                oi.addInitHook("addHandler", "scrollWheelZoom", so);
                var ro = 600;
                oi.mergeOptions({ tapHold: Dt.touchNative && Dt.safari && Dt.mobile, tapTolerance: 15 });
                var ao = gi.extend({
                    addHooks: function () {
                        je(this._map._container, "touchstart", this._onDown, this);
                    },
                    removeHooks: function () {
                        $e(this._map._container, "touchstart", this._onDown, this);
                    },
                    _onDown: function (t) {
                        if ((clearTimeout(this._holdTimeout), 1 === t.touches.length)) {
                            var e = t.touches[0];
                            (this._startPos = this._newPos = new A(e.clientX, e.clientY)),
                                (this._holdTimeout = setTimeout(
                                    o(function () {
                                        this._cancel(), this._isTapValid() && (je(document, "touchend", Ye), je(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
                                    }, this),
                                    ro
                                )),
                                je(document, "touchend touchcancel contextmenu", this._cancel, this),
                                je(document, "touchmove", this._onMove, this);
                        }
                    },
                    _cancelClickPrevent: function t() {
                        $e(document, "touchend", Ye), $e(document, "touchend touchcancel", t);
                    },
                    _cancel: function () {
                        clearTimeout(this._holdTimeout), $e(document, "touchend touchcancel contextmenu", this._cancel, this), $e(document, "touchmove", this._onMove, this);
                    },
                    _onMove: function (t) {
                        var e = t.touches[0];
                        this._newPos = new A(e.clientX, e.clientY);
                    },
                    _isTapValid: function () {
                        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
                    },
                    _simulateEvent: function (t, e) {
                        var i = new MouseEvent(t, { bubbles: !0, cancelable: !0, view: window, screenX: e.screenX, screenY: e.screenY, clientX: e.clientX, clientY: e.clientY });
                        (i._simulated = !0), e.target.dispatchEvent(i);
                    },
                });
                oi.addInitHook("addHandler", "tapHold", ao), oi.mergeOptions({ touchZoom: Dt.touch, bounceAtZoomLimits: !0 });
                var lo = gi.extend({
                    addHooks: function () {
                        we(this._map._container, "leaflet-touch-zoom"), je(this._map._container, "touchstart", this._onTouchStart, this);
                    },
                    removeHooks: function () {
                        Le(this._map._container, "leaflet-touch-zoom"), $e(this._map._container, "touchstart", this._onTouchStart, this);
                    },
                    _onTouchStart: function (t) {
                        var e = this._map;
                        if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                            var i = e.mouseEventToContainerPoint(t.touches[0]),
                                n = e.mouseEventToContainerPoint(t.touches[1]);
                            (this._centerPoint = e.getSize()._divideBy(2)),
                                (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
                                "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))),
                                (this._startDist = i.distanceTo(n)),
                                (this._startZoom = e.getZoom()),
                                (this._moved = !1),
                                (this._zooming = !0),
                                e._stop(),
                                je(document, "touchmove", this._onTouchMove, this),
                                je(document, "touchend touchcancel", this._onTouchEnd, this),
                                Ye(t);
                        }
                    },
                    _onTouchMove: function (t) {
                        if (t.touches && 2 === t.touches.length && this._zooming) {
                            var e = this._map,
                                i = e.mouseEventToContainerPoint(t.touches[0]),
                                n = e.mouseEventToContainerPoint(t.touches[1]),
                                s = i.distanceTo(n) / this._startDist;
                            if (
                                ((this._zoom = e.getScaleZoom(s, this._startZoom)),
                                !e.options.bounceAtZoomLimits && ((this._zoom < e.getMinZoom() && s < 1) || (this._zoom > e.getMaxZoom() && s > 1)) && (this._zoom = e._limitZoom(this._zoom)),
                                "center" === e.options.touchZoom)
                            ) {
                                if (((this._center = this._startLatLng), 1 === s)) return;
                            } else {
                                var r = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                                if (1 === s && 0 === r.x && 0 === r.y) return;
                                this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom);
                            }
                            this._moved || (e._moveStart(!0, !1), (this._moved = !0)), P(this._animRequest);
                            var a = o(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
                            (this._animRequest = S(a, this, !0)), Ye(t);
                        }
                    },
                    _onTouchEnd: function () {
                        this._moved && this._zooming
                            ? ((this._zooming = !1),
                                P(this._animRequest),
                                $e(document, "touchmove", this._onTouchMove, this),
                                $e(document, "touchend touchcancel", this._onTouchEnd, this),
                                this._map.options.zoomAnimation
                                    ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap)
                                    : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))
                            : (this._zooming = !1);
                    },
                });
                oi.addInitHook("addHandler", "touchZoom", lo),
                    (oi.BoxZoom = eo),
                    (oi.DoubleClickZoom = io),
                    (oi.Drag = no),
                    (oi.Keyboard = oo),
                    (oi.ScrollWheelZoom = so),
                    (oi.TapHold = ao),
                    (oi.TouchZoom = lo),
                    (t.Bounds = Z),
                    (t.Browser = Dt),
                    (t.CRS = H),
                    (t.Canvas = Vn),
                    (t.Circle = ln),
                    (t.CircleMarker = rn),
                    (t.Class = k),
                    (t.Control = ri),
                    (t.DivIcon = Nn),
                    (t.DivOverlay = On),
                    (t.DomEvent = ii),
                    (t.DomUtil = De),
                    (t.Draggable = bi),
                    (t.Evented = O),
                    (t.FeatureGroup = Xi),
                    (t.GeoJSON = fn),
                    (t.GridLayer = jn),
                    (t.Handler = gi),
                    (t.Icon = Ji),
                    (t.ImageOverlay = Sn),
                    (t.LatLng = R),
                    (t.LatLngBounds = D),
                    (t.Layer = qi),
                    (t.LayerGroup = Ui),
                    (t.LineUtil = Ri),
                    (t.Map = oi),
                    (t.Marker = nn),
                    (t.Mixin = vi),
                    (t.Path = sn),
                    (t.Point = A),
                    (t.PolyUtil = Ti),
                    (t.Polygon = dn),
                    (t.Polyline = un),
                    (t.Popup = An),
                    (t.PosAnimation = ni),
                    (t.Projection = Hi),
                    (t.Rectangle = Qn),
                    (t.Renderer = Wn),
                    (t.SVG = Kn),
                    (t.SVGOverlay = En),
                    (t.TileLayer = $n),
                    (t.Tooltip = Bn),
                    (t.Transformation = q),
                    (t.Util = M),
                    (t.VideoOverlay = Mn),
                    (t.bind = o),
                    (t.bounds = N),
                    (t.canvas = qn),
                    (t.circle = hn),
                    (t.circleMarker = an),
                    (t.control = ai),
                    (t.divIcon = Dn),
                    (t.extend = i),
                    (t.featureGroup = Ki),
                    (t.geoJSON = Cn),
                    (t.geoJson = Tn),
                    (t.gridLayer = Rn),
                    (t.icon = Qi),
                    (t.imageOverlay = Pn),
                    (t.latLng = $),
                    (t.latLngBounds = j),
                    (t.layerGroup = Yi),
                    (t.map = si),
                    (t.marker = on),
                    (t.point = B),
                    (t.polygon = pn),
                    (t.polyline = cn),
                    (t.popup = In),
                    (t.rectangle = to),
                    (t.setOptions = p),
                    (t.stamp = r),
                    (t.svg = Jn),
                    (t.svgOverlay = zn),
                    (t.tileLayer = Gn),
                    (t.tooltip = Zn),
                    (t.transformation = U),
                    (t.version = e),
                    (t.videoOverlay = kn);
                var ho = window.L;
                (t.noConflict = function () {
                    return (window.L = ho), this;
                }),
                    (window.L = t);
            })(e);
        },
        11: () => {},
    },

    
    i = {};

    function n(t) {
        var o = i[t];
        if (void 0 !== o) return o.exports;
        var s = (i[t] = { exports: {} });
        return e[t].call(s.exports, s, s.exports, n), s.exports;
    }
    
    (n.m = e),
        (t = []),
        (n.O = (e, i, o, s) => {
            if (!i) {
                var r = 1 / 0;
                for (u = 0; u < t.length; u++) {
                    for (var [i, o, s] = t[u], a = !0, l = 0; l < i.length; l++) (!1 & s || r >= s) && Object.keys(n.O).every((t) => n.O[t](i[l])) ? i.splice(l--, 1) : ((a = !1), s < r && (r = s));
                    if (a) {
                        t.splice(u--, 1);
                        var h = o();
                        void 0 !== h && (e = h);
                    }
                }
                return e;
            }
            s = s || 0;
            for (var u = t.length; u > 0 && t[u - 1][2] > s; u--) t[u] = t[u - 1];
            t[u] = [i, o, s];
        }),
        (n.n = (t) => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return n.d(e, { a: e }), e;
        }),
        (n.d = (t, e) => {
            for (var i in e) n.o(e, i) && !n.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        }),
        (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (() => {
            var t = { 537: 0, 363: 0 };
            n.O.j = (e) => 0 === t[e];
            var e = (e, i) => {
                    var o,
                        s,
                        [r, a, l] = i,
                        h = 0;
                    if (r.some((e) => 0 !== t[e])) {
                        for (o in a) n.o(a, o) && (n.m[o] = a[o]);
                        if (l) var u = l(n);
                    }
                    for (e && e(i); h < r.length; h++) (s = r[h]), n.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
                    return n.O(u);
                },
                i = (self.webpackChunktml_duvel_moortgat = self.webpackChunktml_duvel_moortgat || []);
            i.forEach(e.bind(null, 0)), (i.push = e.bind(null, i.push.bind(i)));
        })(),
        n.O(void 0, [363], () => n(429));
    var o = n.O(void 0, [363], () => n(11));
    o = n.O(o);
})();
