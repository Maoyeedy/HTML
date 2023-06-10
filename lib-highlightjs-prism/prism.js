var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function (e) { var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, t = 0, r = {}, a = { manual: e.Prism && e.Prism.manual, disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler, util: { encode: function e(n) { return n instanceof i ? new i(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") }, type: function (e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId: function (e) { return e.__id || Object.defineProperty(e, "__id", { value: ++t }), e.__id }, clone: function e(n, t) { var r, i; switch (t = t || {}, a.util.type(n)) { case "Object": if (i = a.util.objId(n), t[i]) return t[i]; for (var s in r = {}, t[i] = r, n) n.hasOwnProperty(s) && (r[s] = e(n[s], t)); return r; case "Array": return i = a.util.objId(n), t[i] ? t[i] : (r = [], t[i] = r, n.forEach(function (n, a) { r[a] = e(n, t) }), r); default: return n } }, getLanguage: function (e) { for (; e;) { var t = n.exec(e.className); if (t) return t[1].toLowerCase(); e = e.parentElement } return "none" }, setLanguage: function (e, t) { e.className = e.className.replace(RegExp(n, "gi"), ""), e.classList.add("language-" + t) }, currentScript: function () { if ("undefined" == typeof document) return null; if ("currentScript" in document) return document.currentScript; try { throw new Error } catch (r) { var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1]; if (e) { var n = document.getElementsByTagName("script"); for (var t in n) if (n[t].src == e) return n[t] } return null } }, isActive: function (e, n, t) { for (var r = "no-" + n; e;) { var a = e.classList; if (a.contains(n)) return !0; if (a.contains(r)) return !1; e = e.parentElement } return !!t } }, languages: { plain: r, plaintext: r, text: r, txt: r, extend: function (e, n) { var t = a.util.clone(a.languages[e]); for (var r in n) t[r] = n[r]; return t }, insertBefore: function (e, n, t, r) { var i = (r = r || a.languages)[e], s = {}; for (var o in i) if (i.hasOwnProperty(o)) { if (o == n) for (var l in t) t.hasOwnProperty(l) && (s[l] = t[l]); t.hasOwnProperty(o) || (s[o] = i[o]) } var c = r[e]; return r[e] = s, a.languages.DFS(a.languages, function (n, t) { t === c && n != e && (this[n] = s) }), s }, DFS: function e(n, t, r, i) { i = i || {}; var s = a.util.objId; for (var o in n) if (n.hasOwnProperty(o)) { t.call(n, o, n[o], r || o); var l = n[o], c = a.util.type(l); "Object" !== c || i[s(l)] ? "Array" !== c || i[s(l)] || (i[s(l)] = !0, e(l, t, o, i)) : (i[s(l)] = !0, e(l, t, null, i)) } } }, plugins: {}, highlightAll: function (e, n) { a.highlightAllUnder(document, e, n) }, highlightAllUnder: function (e, n, t) { var r = { callback: t, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; a.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r); for (var i, s = 0; i = r.elements[s++];)a.highlightElement(i, !0 === n, r.callback) }, highlightElement: function (n, t, r) { var i = a.util.getLanguage(n), s = a.languages[i]; a.util.setLanguage(n, i); var o = n.parentElement; o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i); var l = { element: n, language: i, grammar: s, code: n.textContent }; function c(e) { l.highlightedCode = e, a.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, a.hooks.run("after-highlight", l), a.hooks.run("complete", l), r && r.call(l.element) } if (a.hooks.run("before-sanity-check", l), (o = l.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"), !l.code) return a.hooks.run("complete", l), void (r && r.call(l.element)); if (a.hooks.run("before-highlight", l), l.grammar) if (t && e.Worker) { var u = new Worker(a.filename); u.onmessage = function (e) { c(e.data) }, u.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 })) } else c(a.highlight(l.code, l.grammar, l.language)); else c(a.util.encode(l.code)) }, highlight: function (e, n, t) { var r = { code: e, grammar: n, language: t }; if (a.hooks.run("before-tokenize", r), !r.grammar) throw new Error('The language "' + r.language + '" has no grammar.'); return r.tokens = a.tokenize(r.code, r.grammar), a.hooks.run("after-tokenize", r), i.stringify(a.util.encode(r.tokens), r.language) }, tokenize: function (e, n) { var t = n.rest; if (t) { for (var r in t) n[r] = t[r]; delete n.rest } var a = new function () { var e = { value: null, prev: null, next: null }, n = { value: null, prev: e, next: null }; e.next = n, this.head = e, this.tail = n, this.length = 0 }; return l(a, a.head, e), o(e, a, n, a.head, 0), function (e) { for (var n = [], t = e.head.next; t !== e.tail;)n.push(t.value), t = t.next; return n }(a) }, hooks: { all: {}, add: function (e, n) { var t = a.hooks.all; t[e] = t[e] || [], t[e].push(n) }, run: function (e, n) { var t = a.hooks.all[e]; if (t && t.length) for (var r, i = 0; r = t[i++];)r(n) } }, Token: i }; function i(e, n, t, r) { this.type = e, this.content = n, this.alias = t, this.length = 0 | (r || "").length } function s(e, n, t, r) { e.lastIndex = n; var a = e.exec(t); if (a && r && a[1]) { var i = a[1].length; a.index += i, a[0] = a[0].slice(i) } return a } function o(e, n, t, r, u, d) { for (var p in t) if (t.hasOwnProperty(p) && t[p]) { var f = t[p]; f = Array.isArray(f) ? f : [f]; for (var g = 0; g < f.length; ++g) { if (d && d.cause == p + "," + g) return; var h = f[g], m = h.inside, b = !!h.lookbehind, v = !!h.greedy, y = h.alias; if (v && !h.pattern.global) { var k = h.pattern.toString().match(/[imsuy]*$/)[0]; h.pattern = RegExp(h.pattern.source, k + "g") } for (var w = h.pattern || h, x = r.next, E = u; x !== n.tail && !(d && E >= d.reach); E += x.value.length, x = x.next) { var A = x.value; if (n.length > e.length) return; if (!(A instanceof i)) { var L, P = 1; if (v) { if (!(L = s(w, E, e, b)) || L.index >= e.length) break; var S = L.index, C = L.index + L[0].length, N = E; for (N += x.value.length; S >= N;)N += (x = x.next).value.length; if (E = N -= x.value.length, x.value instanceof i) continue; for (var _ = x; _ !== n.tail && (N < C || "string" == typeof _.value); _ = _.next)P++, N += _.value.length; P--, A = e.slice(E, N), L.index -= E } else if (!(L = s(w, 0, A, b))) continue; S = L.index; var q = L[0], z = A.slice(0, S), $ = A.slice(S + q.length), B = E + A.length; d && B > d.reach && (d.reach = B); var H = x.prev; if (z && (H = l(n, H, z), E += z.length), c(n, H, P), x = l(n, H, new i(p, m ? a.tokenize(q, m) : q, y, q)), $ && l(n, x, $), P > 1) { var O = { cause: p + "," + g, reach: B }; o(e, n, t, x.prev, E, O), d && O.reach > d.reach && (d.reach = O.reach) } } } } } } function l(e, n, t) { var r = n.next, a = { value: t, prev: n, next: r }; return n.next = a, r.prev = a, e.length++, a } function c(e, n, t) { for (var r = n.next, a = 0; a < t && r !== e.tail; a++)r = r.next; n.next = r, r.prev = n, e.length -= a } if (e.Prism = a, i.stringify = function e(n, t) { if ("string" == typeof n) return n; if (Array.isArray(n)) { var r = ""; return n.forEach(function (n) { r += e(n, t) }), r } var i = { type: n.type, content: e(n.content, t), tag: "span", classes: ["token", n.type], attributes: {}, language: t }, s = n.alias; s && (Array.isArray(s) ? Array.prototype.push.apply(i.classes, s) : i.classes.push(s)), a.hooks.run("wrap", i); var o = ""; for (var l in i.attributes) o += " " + l + '="' + (i.attributes[l] || "").replace(/"/g, "&quot;") + '"'; return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">" }, !e.document) return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", function (n) { var t = JSON.parse(n.data), r = t.language, i = t.code, s = t.immediateClose; e.postMessage(a.highlight(i, a.languages[r], r)), s && e.close() }, !1), a) : a; var u = a.util.currentScript(); function d() { a.manual || a.highlightAll() } if (u && (a.filename = u.src, u.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) { var p = document.readyState; "loading" === p || "interactive" === p && u && u.defer ? document.addEventListener("DOMContentLoaded", d) : window.requestAnimationFrame ? window.requestAnimationFrame(d) : window.setTimeout(d, 16) } return a }(_self); "undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/, boolean: /\b(?:false|true)\b/, function: /\b\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, function (e) { function n(e, n) { return e.replace(/<<(\d+)>>/g, function (e, t) { return "(?:" + n[+t] + ")" }) } function t(e, t, r) { return RegExp(n(e, t), r || "") } function r(e, n) { for (var t = 0; t < n; t++)e = e.replace(/<<self>>/g, function () { return "(?:" + e + ")" }); return e.replace(/<<self>>/g, "[^\\s\\S]") } var a = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void", i = "class enum interface record struct", s = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)", o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield"; function l(e) { return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b" } var c = l(i), u = RegExp(l(a + " " + i + " " + s + " " + o)), d = l(i + " " + s + " " + o), p = l(a + " " + i + " " + o), f = r("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>", 2), g = r("\\((?:[^()]|<<self>>)*\\)", 2), h = "@?\\b[A-Za-z_]\\w*\\b", m = n("<<0>>(?:\\s*<<1>>)?", [h, f]), b = n("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*", [d, m]), v = "\\[\\s*(?:,\\s*)*\\]", y = n("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?", [b, v]), k = n("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?", [n("\\(<<0>>+(?:,<<0>>+)+\\)", [n("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>", [f, g, v])]), b, v]), w = { keyword: u, punctuation: /[<>()?,.:[\]]/ }, x = "'(?:[^\r\n'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'", E = '"(?:\\\\.|[^\\\\"\r\n])*"'; e.languages.csharp = e.languages.extend("clike", { string: [{ pattern: t("(^|[^$\\\\])<<0>>", ['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']), lookbehind: !0, greedy: !0 }, { pattern: t("(^|[^@$\\\\])<<0>>", [E]), lookbehind: !0, greedy: !0 }], "class-name": [{ pattern: t("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)", [b]), lookbehind: !0, inside: w }, { pattern: t("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)", [h, k]), lookbehind: !0, inside: w }, { pattern: t("(\\busing\\s+)<<0>>(?=\\s*=)", [h]), lookbehind: !0 }, { pattern: t("(\\b<<0>>\\s+)<<1>>", [c, m]), lookbehind: !0, inside: w }, { pattern: t("(\\bcatch\\s*\\(\\s*)<<0>>", [b]), lookbehind: !0, inside: w }, { pattern: t("(\\bwhere\\s+)<<0>>", [h]), lookbehind: !0 }, { pattern: t("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>", [y]), lookbehind: !0, inside: w }, { pattern: t("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))", [k, p, h]), inside: w }], keyword: u, number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i, operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/, punctuation: /\?\.?|::|[{}[\];(),.:]/ }), e.languages.insertBefore("csharp", "number", { range: { pattern: /\.\./, alias: "operator" } }), e.languages.insertBefore("csharp", "punctuation", { "named-parameter": { pattern: t("([(,]\\s*)<<0>>(?=\\s*:)", [h]), lookbehind: !0, alias: "punctuation" } }), e.languages.insertBefore("csharp", "class-name", { namespace: { pattern: t("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])", [h]), lookbehind: !0, inside: { punctuation: /\./ } }, "type-expression": { pattern: t("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))", [g]), lookbehind: !0, alias: "class-name", inside: w }, "return-type": { pattern: t("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))", [k, b]), inside: w, alias: "class-name" }, "constructor-invocation": { pattern: t("(\\bnew\\s+)<<0>>(?=\\s*[[({])", [k]), lookbehind: !0, inside: w, alias: "class-name" }, "generic-method": { pattern: t("<<0>>\\s*<<1>>(?=\\s*\\()", [h, f]), inside: { function: t("^<<0>>", [h]), generic: { pattern: RegExp(f), alias: "class-name", inside: w } } }, "type-list": { pattern: t("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))", [c, m, h, k, u.source, g, "\\bnew\\s*\\(\\s*\\)"]), lookbehind: !0, inside: { "record-arguments": { pattern: t("(^(?!new\\s*\\()<<0>>\\s*)<<1>>", [m, g]), lookbehind: !0, greedy: !0, inside: e.languages.csharp }, keyword: u, "class-name": { pattern: RegExp(k), greedy: !0, inside: w }, punctuation: /[,()]/ } }, preprocessor: { pattern: /(^[\t ]*)#.*/m, lookbehind: !0, alias: "property", inside: { directive: { pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/, lookbehind: !0, alias: "keyword" } } } }); var A = E + "|" + x, L = n("/(?![*/])|//[^\r\n]*[\r\n]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>", [A]), P = r(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [L]), 2), S = "\\b(?:assembly|event|field|method|module|param|property|return|type)\\b", C = n("<<0>>(?:\\s*\\(<<1>>*\\))?", [b, P]); e.languages.insertBefore("csharp", "class-name", { attribute: { pattern: t("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])", [S, C]), lookbehind: !0, greedy: !0, inside: { target: { pattern: t("^<<0>>(?=\\s*:)", [S]), alias: "keyword" }, "attribute-arguments": { pattern: t("\\(<<0>>*\\)", [P]), inside: e.languages.csharp }, "class-name": { pattern: RegExp(b), inside: { punctuation: /\./ } }, punctuation: /[:,]/ } } }); var N = ":[^}\r\n]+", _ = r(n("[^\"'/()]|<<0>>|\\(<<self>>*\\)", [L]), 2), q = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [_, N]), z = r(n("[^\"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)", [A]), 2), $ = n("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}", [z, N]); function B(n, r) { return { interpolation: { pattern: t("((?:^|[^{])(?:\\{\\{)*)<<0>>", [n]), lookbehind: !0, inside: { "format-string": { pattern: t("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)", [r, N]), lookbehind: !0, inside: { punctuation: /^:/ } }, punctuation: /^\{|\}$/, expression: { pattern: /[\s\S]+/, alias: "language-csharp", inside: e.languages.csharp } } }, string: /[\s\S]+/ } } e.languages.insertBefore("csharp", "string", { "interpolation-string": [{ pattern: t('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"', [q]), lookbehind: !0, greedy: !0, inside: B(q, _) }, { pattern: t('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"', [$]), lookbehind: !0, greedy: !0, inside: B($, z) }], char: { pattern: RegExp(x), greedy: !0 } }), e.languages.dotnet = e.languages.cs = e.languages.csharp }(Prism), function () { if (void 0 !== Prism && "undefined" != typeof document) { var e = "line-numbers", n = /\n(?!$)/g, t = Prism.plugins.lineNumbers = { getLine: function (n, t) { if ("PRE" === n.tagName && n.classList.contains(e)) { var r = n.querySelector(".line-numbers-rows"); if (r) { var a = parseInt(n.getAttribute("data-start"), 10) || 1, i = a + (r.children.length - 1); t < a && (t = a), t > i && (t = i); var s = t - a; return r.children[s] } } }, resize: function (e) { a([e]) }, assumeViewportIndependence: !0 }, r = void 0; window.addEventListener("resize", function () { t.assumeViewportIndependence && r === window.innerWidth || (r = window.innerWidth, a(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers")))) }), Prism.hooks.add("complete", function (t) { if (t.code) { var r = t.element, i = r.parentNode; if (i && /pre/i.test(i.nodeName) && !r.querySelector(".line-numbers-rows") && Prism.util.isActive(r, e)) { r.classList.remove(e), i.classList.add(e); var s, o = t.code.match(n), l = o ? o.length + 1 : 1, c = new Array(l + 1).join("<span></span>"); (s = document.createElement("span")).setAttribute("aria-hidden", "true"), s.className = "line-numbers-rows", s.innerHTML = c, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), t.element.appendChild(s), a([i]), Prism.hooks.run("line-numbers", t) } } }), Prism.hooks.add("line-numbers", function (e) { e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0 }) } function a(e) { if (0 != (e = e.filter(function (e) { var n, t = (n = e, n ? window.getComputedStyle ? getComputedStyle(n) : n.currentStyle || null : null)["white-space"]; return "pre-wrap" === t || "pre-line" === t })).length) { var t = e.map(function (e) { var t = e.querySelector("code"), r = e.querySelector(".line-numbers-rows"); if (t && r) { var a = e.querySelector(".line-numbers-sizer"), i = t.textContent.split(n); a || ((a = document.createElement("span")).className = "line-numbers-sizer", t.appendChild(a)), a.innerHTML = "0", a.style.display = "block"; var s = a.getBoundingClientRect().height; return a.innerHTML = "", { element: e, lines: i, lineHeights: [], oneLinerHeight: s, sizer: a } } }).filter(Boolean); t.forEach(function (e) { var n = e.sizer, t = e.lines, r = e.lineHeights, a = e.oneLinerHeight; r[t.length - 1] = void 0, t.forEach(function (e, t) { if (e && e.length > 1) { var i = n.appendChild(document.createElement("span")); i.style.display = "block", i.textContent = e } else r[t] = a }) }), t.forEach(function (e) { for (var n = e.sizer, t = e.lineHeights, r = 0, a = 0; a < t.length; a++)void 0 === t[a] && (t[a] = n.children[r++].getBoundingClientRect().height) }), t.forEach(function (e) { var n = e.sizer, t = e.element.querySelector(".line-numbers-rows"); n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach(function (e, n) { t.children[n].style.height = e + "px" }) }) } } }(), function () { if (void 0 !== Prism && "undefined" != typeof document) { var e = [], n = {}, t = function () { }; Prism.plugins.toolbar = {}; var r = Prism.plugins.toolbar.registerButton = function (t, r) { var a; a = "function" == typeof r ? r : function (e) { var n; return "function" == typeof r.onClick ? ((n = document.createElement("button")).type = "button", n.addEventListener("click", function () { r.onClick.call(this, e) })) : "string" == typeof r.url ? (n = document.createElement("a")).href = r.url : n = document.createElement("span"), r.className && n.classList.add(r.className), n.textContent = r.text, n }, t in n ? console.warn('There is a button with the key "' + t + '" registered already.') : e.push(n[t] = a) }, a = Prism.plugins.toolbar.hook = function (r) { var a = r.element.parentNode; if (a && /pre/i.test(a.nodeName) && !a.parentNode.classList.contains("code-toolbar")) { var i = document.createElement("div"); i.classList.add("code-toolbar"), a.parentNode.insertBefore(i, a), i.appendChild(a); var s = document.createElement("div"); s.classList.add("toolbar"); var o = e, l = function (e) { for (; e;) { var n = e.getAttribute("data-toolbar-order"); if (null != n) return (n = n.trim()).length ? n.split(/\s*,\s*/g) : []; e = e.parentElement } }(r.element); l && (o = l.map(function (e) { return n[e] || t })), o.forEach(function (e) { var n = e(r); if (n) { var t = document.createElement("div"); t.classList.add("toolbar-item"), t.appendChild(n), s.appendChild(t) } }), i.appendChild(s) } }; r("label", function (e) { var n = e.element.parentNode; if (n && /pre/i.test(n.nodeName) && n.hasAttribute("data-label")) { var t, r, a = n.getAttribute("data-label"); try { r = document.querySelector("template#" + a) } catch (e) { } return r ? t = r.content : (n.hasAttribute("data-url") ? (t = document.createElement("a")).href = n.getAttribute("data-url") : t = document.createElement("span"), t.textContent = a), t } }), Prism.hooks.add("complete", a) } }(), void 0 !== Prism && "undefined" != typeof document && document.querySelector && Prism.plugins.toolbar.registerButton("download-file", function (e) { var n = e.element.parentNode; if (n && /pre/i.test(n.nodeName) && n.hasAttribute("data-src") && n.hasAttribute("data-download-link")) { var t = n.getAttribute("data-src"), r = document.createElement("a"); return r.textContent = n.getAttribute("data-download-link-label") || "Download", r.setAttribute("download", ""), r.href = t, r } }), function () { if (void 0 !== Prism && "undefined" != typeof document) { var e = { "(": ")", "[": "]", "{": "}" }, n = { "(": "brace-round", "[": "brace-square", "{": "brace-curly" }, t = { "${": "{" }, r = 0, a = /^(pair-\d+-)(close|open)$/; Prism.hooks.add("complete", function (a) { var s = a.element, u = s.parentElement; if (u && "PRE" == u.tagName) { var d = []; if (Prism.util.isActive(s, "match-braces") && d.push("(", "[", "{"), 0 != d.length) { u.__listenerAdded || (u.addEventListener("mousedown", function () { var e = u.querySelector("code"), n = i("brace-selected"); Array.prototype.slice.call(e.querySelectorAll("." + n)).forEach(function (e) { e.classList.remove(n) }) }), Object.defineProperty(u, "__listenerAdded", { value: !0 })); var p = Array.prototype.slice.call(s.querySelectorAll("span." + i("token") + "." + i("punctuation"))), f = []; d.forEach(function (a) { for (var s = e[a], u = i(n[a]), d = [], g = [], h = 0; h < p.length; h++) { var m = p[h]; if (0 == m.childElementCount) { var b = m.textContent; (b = t[b] || b) === a ? (f.push({ index: h, open: !0, element: m }), m.classList.add(u), m.classList.add(i("brace-open")), g.push(h)) : b === s && (f.push({ index: h, open: !1, element: m }), m.classList.add(u), m.classList.add(i("brace-close")), g.length && d.push([h, g.pop()])) } } d.forEach(function (e) { var n = "pair-" + r++ + "-", t = p[e[0]], a = p[e[1]]; t.id = n + "open", a.id = n + "close", [t, a].forEach(function (e) { e.addEventListener("mouseenter", o), e.addEventListener("mouseleave", l), e.addEventListener("click", c) }) }) }); var g = 0; f.sort(function (e, n) { return e.index - n.index }), f.forEach(function (e) { e.open ? (e.element.classList.add(i("brace-level-" + (g % 12 + 1))), g++) : (g = Math.max(0, g - 1), e.element.classList.add(i("brace-level-" + (g % 12 + 1)))) }) } } }) } function i(e) { var n = Prism.plugins.customClass; return n ? n.apply(e, "none") : e } function s(e) { var n = a.exec(e.id); return document.querySelector("#" + n[1] + ("open" == n[2] ? "close" : "open")) } function o() { Prism.util.isActive(this, "brace-hover", !0) && [this, s(this)].forEach(function (e) { e.classList.add(i("brace-hover")) }) } function l() { [this, s(this)].forEach(function (e) { e.classList.remove(i("brace-hover")) }) } function c() { Prism.util.isActive(this, "brace-select", !0) && [this, s(this)].forEach(function (e) { e.classList.add(i("brace-selected")) }) } }();