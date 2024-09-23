webpackJsonp([1], {
	"5iwl": function(t, n) {
		var e, i, r, o, a;
		e = document, i = window, r = e.documentElement, o = "orientationchange" in window ? "orientationchange" :
			"resize", a = function() {
				var t = r.clientWidth;
				t && (r.style.fontSize = t >= 750 ? "100px" : t / 750 * 100 + "px")
			}, e.addEventListener && (i.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
	},
	NHnr: function(t, n, e) {
		"use strict";
		Object.defineProperty(n, "__esModule", {
			value: !0
		});
		var i = e("7+uW"),
			r = {
				render: function() {
					var t = this.$createElement,
						n = this._self._c || t;
					return n("div", {
						attrs: {
							id: "app"
						}
					}, [n("router-view")], 1)
				},
				staticRenderFns: []
			};
		var o = e("VU/8")({
				name: "App"
			}, r, !1, function(t) {
				e("cqTP")
			}, null, null).exports,
			a = e("/ocq"),
			s = e("lshN"),
			h = e.n(s),
			c = e("VRz6"),
			u = {
				name: "HelloWorld",
				data: function() {
					return {
						word: "",
						character: "",
						pinyin: "",
						datas: [],
						ciyuArr: [],
						svgData: [],
						xiabiao: 0,
						bgColor: "#a2b969",
						textColor: "#a2b969",
						btnColor: "#c8e9a4",
						btnTextColor: "#ffffff",
						scrollBarColor: "#ff9663",
						scrollBarColor2: "#ffffff",
						hasBushou: 1,
						gundong_flag: 0,
						gundong_width: "0%"
					}
				},
				components: {
					hanzi: e.n(c).a,
					polyfill: h.a
				},
				watch: {
					word: function(t, n) {
						"string" == typeof t && this.hanzi_info()
					},
					deep: !0
				},
				created: function() {},
				methods: {
					hanzi: function(t, n) {
						this.xiabiao = t, this.character = n, this.svgData = this.datas[this.xiabiao].hanziSvg, this.hanzi_shuxie(
							this.svgData), this.gundong_width = Math.ceil(100 / this.word.length * (this.xiabiao - 0 + 1)) + "%"
					},
					hanzi_info: function() {
						var t = this;
						t.$http({
							url: t.$httpConfig.getHanziBasicInformation,
							method: "POST",
							contentType: "application/json;",
							headers: {
								"Content-Type": "application/json"
							},
							dataType: "json",
							async: !1,
							data: {
								content: t.word
							}
						}).then(function(n) {
							var e = n.data.resultData;
							if (1 == e.length) e.forEach(function(n, e) {
								"" != n.hanziSvg && (t.svgData = JSON.parse(n.hanziSvg), t.hanzi_shuxie(t.svgData))
							});
							else {
								var i = [];
								e.forEach(function(n, e) {
									i.push(n.ciyu), n.ciyu == t.character && "" != n.hanziSvg && (t.svgData = JSON.parse(n.hanziSvg), t.hanzi_shuxie(
										t.svgData))
								}), t.ciyuArr = i
							}
							t.$nextTick(function() {
								var n = [];
								e.forEach(function(e, i) {
									var r = {};
									r.character = e.ciyu, r.bushou = e.bushou, r.bihua = e.bihua, r.level = e.level, null != t.pinyin &&
										"" != t.pinyin ? r.pinyin = t.pinyin : r.pinyin = e.pinyin, r.hanziSvg = JSON.parse(e.hanziSvg), t.$set(
											n, i, r)
								}), t.datas = n
							})
						}, function(t) {
							console.log(t)
						})
					},
					hanzi_shuxie: function(t) {
						document.getElementById("character_target_div").innerHTML = "";
						var n = HanziWriter.create("character_target_div", this.character, {
							width: 300,
							height: 300,
							padding: 5,
							strokeColor: "#4b4a52",
							radicalColor: "#4b4a52",
							showOutline: !0,
							showCharacter: !1,
							drawingWidth: 30,
							drawingColor: "#4b4a52",
							highlightColor: "#ff0000",
							showHintAfterMisses: 1,
							charDataLoader: function() {
								return t
							}
						});
						n.quiz(), document.getElementById("animate_button").addEventListener("click", function() {
							n.animateCharacter()
						}), document.getElementById("animate_button_stop").addEventListener("click", function() {
							n.quiz()
						})
					}
				},
				beforeMount: function() {},
				mounted: function() {
					function t(t) {
						var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
							e = window.location.search.substr(1).match(n);
						return null != e ? decodeURI(e[2]) : null
					}
					this.hasBushou = t("hasBushou"), this.word = t("word"), this.character = t("character"), this.pinyin = t(
							"pinyin"), "" != this.character && null != this.character || (document.getElementsByClassName("content")[0].innerHTML =
							"未查到该汉字！", document.getElementsByClassName("content")[0].style.fontSize = "30px"), this.bgColor = "#" + t(
							"bgColor"), this.textColor = "#" + t("textColor"), this.btnColor = "#" + t("btnColor"), this.btnTextColor =
						"#" + t("btnTextColor"), this.scrollBarColor = "#" + t("scrollBarColor"), this.scrollBarColor2 = "#" + t(
							"scrollBarColor2"), this.hanzi_info(), this.word.length <= 3 ? document.getElementsByClassName("hanzi_top")[
							0].style.justifyContent = "center" : (document.getElementsByClassName("hanzi_top")[0].style.justifyContent =
							"flex-start", this.gundong_flag = 1, this.gundong_width = Math.ceil(100 / this.word.length) + "%", -1 !=
							this.word.indexOf(this.character) && (this.xiabiao = this.word.indexOf(this.character), this.gundong_width =
								Math.ceil(100 / this.word.length * (this.xiabiao - 0 + 1)) + "%"))
				},
				beforeDestroy: function() {},
				updated: function() {}
			},
			l = {
				render: function() {
					var t = this,
						n = t.$createElement,
						e = t._self._c || n;
					return e("div", {
						staticClass: "content"
					}, [e("div", {
						staticClass: "hanzi_top_box",
						style: "background:" + t.bgColor
					}, [e("div", {
						staticClass: "hanzi_top"
					}, t._l(t.datas, function(n, i) {
						return e("div", {
							staticClass: "center_box"
						}, [e("div", {
							staticClass: "centenr_box_top"
						}, [t._v(t._s(n.pinyin))]), t._v(" "), i == t.xiabiao ? e("div", {
							staticClass: "centenr_box_bottom selected",
							on: {
								click: function(e) {
									return t.hanzi(i, n.character)
								}
							}
						}, [t._v(t._s(n.character))]) : t._e(), t._v(" "), i != t.xiabiao ? e("div", {
							staticClass: "centenr_box_bottom",
							on: {
								click: function(e) {
									return t.hanzi(i, n.character)
								}
							}
						}, [t._v(t._s(n.character))]) : t._e()])
					}), 0), t._v(" "), 1 == t.gundong_flag ? e("div", {
						staticClass: "gundong",
						style: "background:" + t.scrollBarColor2
					}, [e("div", {
						staticClass: "gundong_box",
						style: "background:" + t.scrollBarColor + ";width:" + t.gundong_width
					})]) : t._e()]), t._v(" "), e("div", {
						staticClass: "hanzi_bottom"
					}, [e("div", {
						staticClass: "hanzi_xiangxi"
					}, [t._l(t.datas, function(n, i) {
						return 1 == t.hasBushou && i == t.xiabiao ? [e("div", {
							staticClass: "box"
						}, [e("span", [t._v("部首：")]), e("span", {
							staticClass: "bushou",
							style: "color:" + t.textColor
						}, [t._v(t._s(n.bushou))])]), t._v(" "), e("div", {
							staticClass: "box"
						}, [e("span", [t._v("笔画：")]), e("span", {
							staticClass: "bihua",
							style: "color:" + t.textColor
						}, [t._v(t._s(n.bihua))])])] : t._e()
					})], 2), t._v(" "), e("div", {
						attrs: {
							id: "character_target_div"
						}
					}), t._v(" "), e("div", {
						staticClass: "btns"
					}, [e("div", {
						style: "background:" + t.btnColor + ";color:" + t.btnTextColor,
						attrs: {
							id: "animate_button"
						}
					}, [t._v("播放动画")]), t._v(" "), e("div", {
						style: "background:" + t.btnColor + ";color:" + t.btnTextColor,
						attrs: {
							id: "animate_button_stop"
						}
					}, [t._v("重新书写")])])])])
				},
				staticRenderFns: []
			};
		var f = e("VU/8")(u, l, !1, function(t) {
			e("RRjI")
		}, "data-v-058781ab", null).exports;
		i.a.use(a.a);
		var p = new a.a({
				routes: [{
					path: "/",
					name: "HelloWorld",
					component: f
				}]
			}),
			d = (e("5iwl"), e("mtWM")),
			g = e.n(d),
			v = {
				getHanziBasicInformation: "https://personal.greatwallchinese.com/handWriting/hanya/getHanziBasicInformation"
			};
		g.a.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", i.a.prototype.$http = g.a, i.a.prototype.$httpConfig =
			v, i.a.config.productionTip = !1, new i.a({
				el: "#app",
				router: p,
				components: {
					App: o
				},
				template: "<App/>"
			})
	},
	RRjI: function(t, n) {},
	VRz6: function(t, n) {
		/*! Hanzi Writer v1.3.0 | https://chanind.github.io/hanzi-writer */
		! function(t) {
			var n = {};

			function e(i) {
				if (n[i]) return n[i].exports;
				var r = n[i] = {
					i: i,
					l: !1,
					exports: {}
				};
				return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
			}
			e.m = t, e.c = n, e.d = function(t, n, i) {
				e.o(t, n) || Object.defineProperty(t, n, {
					configurable: !1,
					enumerable: !0,
					get: i
				})
			}, e.n = function(t) {
				var n = t && t.t ? function() {
					return t.default
				} : function() {
					return t
				};
				return e.d(n, "a", n), n
			}, e.o = function(t, n) {
				return Object.prototype.hasOwnProperty.call(t, n)
			}, e.p = "", e(e.s = 6)
		}([function(t, n, e) {
			"use strict";
			(function(n) {
				var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
							typeof t
					},
					i = n.performance && function() {
						return n.performance.now()
					} || function() {
						return Date.now()
					},
					r = n.requestAnimationFrame || function(t) {
						return setTimeout(function() {
							return t(i())
						}, 1e3 / 60)
					},
					o = n.cancelAnimationFrame || clearTimeout,
					a = function(t) {
						for (var n = Object(t), e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] =
							arguments[r];
						return i.forEach(function(t) {
							if (null != t)
								for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e])
						}), n
					},
					s = Object.assign || a,
					h = 0;
				t.exports = {
					e: a,
					arrLast: function(t) {
						return t[t.length - 1]
					},
					assign: s,
					average: function(t) {
						return t.reduce(function(t, n) {
							return n + t
						}, 0) / t.length
					},
					callIfExists: function(t, n) {
						return t && t(n), n
					},
					cancelAnimationFrame: o,
					colorStringToVals: function(t) {
						var n = t.toUpperCase().trim();
						if (/^#([A-F0-9]{3}){1,2}$/.test(n)) {
							var e = n.substring(1).split("");
							3 === e.length && (e = [e[0], e[0], e[1], e[1], e[2], e[2]]);
							var i = "" + e.join("");
							return {
								r: parseInt(i.slice(0, 2), 16),
								g: parseInt(i.slice(2, 4), 16),
								b: parseInt(i.slice(4, 6), 16),
								a: 1
							}
						}
						var r = n.match(/^RGBA?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+))?\)$/);
						if (r) return {
							r: parseInt(r[1], 10),
							g: parseInt(r[2], 10),
							b: parseInt(r[3], 10),
							a: parseFloat(r[4] || 1, 10)
						};
						throw new Error("Invalid color: " + t)
					},
					copyAndMergeDeep: function t(n, i) {
						var r = s({}, n);
						for (var o in i) {
							var a = n[o],
								h = i[o];
							a !== h && (a && h && "object" === (void 0 === a ? "undefined" : e(a)) && "object" === (void 0 === h ?
								"undefined" : e(h)) && !Array.isArray(h) ? r[o] = t(a, h) : r[o] = h)
						}
						return r
					},
					counter: function() {
						return ++h
					},
					emptyFunc: function() {},
					inflate: function(t, n) {
						for (var e = t.split("."), i = {}, r = i, o = 0; o < e.length; o++) {
							var a = o === e.length - 1 ? n : {};
							r[e[o]] = a, r = a
						}
						return i
					},
					objRepeat: function(t, n) {
						for (var e = {}, i = 0; i < n; i++) e[i] = t;
						return e
					},
					performanceNow: i,
					requestAnimationFrame: r,
					timeout: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						return new Promise(function(n, e) {
							setTimeout(n, t)
						})
					},
					trim: function(t) {
						return t.replace(/^\s+/, "").replace(/\s+$/, "")
					}
				}
			}).call(n, e(3))
		}, function(t, n, e) {
			"use strict";
			(function(n) {
				var i = e(2).round;

				function r(t) {
					return n.document.createElementNS("http://www.w3.org/2000/svg", t)
				}

				function o(t, n, e) {
					t.setAttributeNS(null, n, e)
				}

				function a(t, n) {
					Object.keys(n).forEach(function(e) {
						return o(t, e, n[e])
					})
				}

				function s(t, n) {
					this.svg = t, this.defs = n
				}
				s.prototype.createSubCanvas = function() {
					var t = r("g");
					return this.svg.appendChild(t), new s(t, this.defs)
				}, s.init = function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "100%",
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "100%",
						o = void 0,
						h = t;
					"string" == typeof t && (h = n.document.getElementById(t));
					var c = h.nodeName.toUpperCase();
					"SVG" === c || "G" === c ? o = h : (o = r("svg"), h.appendChild(o)), a(o, {
						width: e,
						height: i
					});
					var u = r("defs");
					return o.appendChild(u), new s(o, u)
				}, t.exports = {
					createElm: r,
					attrs: a,
					attr: o,
					Canvas: s,
					getPathString: function(t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							e = i(t[0]),
							r = t.slice(1),
							o = "M " + e.x + " " + e.y;
						return r.forEach(function(t) {
							var n = i(t);
							o += " L " + n.x + " " + n.y
						}), n && (o += "Z"), o
					},
					removeElm: function(t) {
						t && t.parentNode.removeChild(t)
					}
				}
			}).call(n, e(3))
		}, function(t, n, e) {
			"use strict";
			var i = e(0),
				r = i.average,
				o = i.arrLast,
				a = function(t, n) {
					return {
						x: t.x - n.x,
						y: t.y - n.y
					}
				},
				s = function(t) {
					return Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2))
				},
				h = function(t, n) {
					return s(a(t, n))
				},
				c = function(t) {
					var n = t[0];
					return t.slice(1).reduce(function(t, e) {
						var i = h(e, n);
						return n = e, t + i
					}, 0)
				},
				u = function(t, n, e) {
					var i = a(n, t),
						r = e / s(i);
					return {
						x: n.x + r * i.x,
						y: n.y + r * i.y
					}
				},
				l = function(t) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .05,
						e = t.slice(0, 1);
					return t.slice(1).forEach(function(t) {
						var i = e[e.length - 1],
							r = h(t, i);
						if (r > n)
							for (var o = Math.ceil(r / n), a = r / o, s = 0; s < o; s++) e.push(u(t, i, -1 * a * (s + 1)));
						else e.push(t)
					}), e
				},
				f = function(t) {
					for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30, e = c(t) / (n - 1), i = [t[
							0]], r = o(t), a = t.slice(1), s = 0; s < n - 2; s++)
						for (var l = o(i), f = e, p = !1; !p;) {
							var d = h(l, a[0]);
							if (d < f) f -= d, l = a.shift();
							else {
								var g = u(l, a[0], f - d);
								i.push(g), p = !0
							}
						}
					return i.push(r), i
				};
			t.exports = {
				round: function(t) {
					var n = 10 * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
					return {
						x: Math.round(n * t.x) / n,
						y: Math.round(n * t.y) / n
					}
				},
				equals: function(t, n) {
					return t.x === n.x && t.y === n.y
				},
				distance: h,
				frechetDist: function(t, n) {
					for (var e = [], i = 0; i < t.length; i++) {
						e.push([]);
						for (var r = 0; r < n.length; r++) e[i].push(-1)
					}
					return function i(r, o) {
						return e[r][o] > -1 ? e[r][o] : (e[r][o] = 0 === r && 0 === o ? h(t[0], n[0]) : r > 0 && 0 === o ? Math.max(
								i(r - 1, 0), h(t[r], n[0])) : 0 === r && o > 0 ? Math.max(i(0, o - 1), h(t[0], n[o])) : r > 0 && o > 0 ?
							Math.max(Math.min(i(r - 1, o), i(r - 1, o - 1), i(r, o - 1)), h(t[r], n[o])) : 1 / 0, e[r][o])
					}(t.length - 1, n.length - 1)
				},
				length: c,
				rotate: function(t, n) {
					return t.map(function(t) {
						return {
							x: Math.cos(n) * t.x - Math.sin(n) * t.y,
							y: Math.sin(n) * t.x + Math.cos(n) * t.y
						}
					})
				},
				subtract: a,
				cosineSimilarity: function(t, n) {
					return (t.x * n.x + t.y * n.y) / s(t) / s(n)
				},
				outlineCurve: f,
				extendPointOnLine: u,
				filterParallelPoints: function(t) {
					if (t.length < 3) return t;
					var n = [t[0], t[1]];
					return t.slice(2).forEach(function(t, e) {
						var i = n.length,
							r = a(t, n[i - 1]),
							o = a(n[i - 1], n[i - 2]);
						r.y * o.x - r.x * o.y == 0 && n.pop(), n.push(t)
					}), n
				},
				subdivideCurve: l,
				normalizeCurve: function(t) {
					var n = f(t),
						e = {
							x: r(n.map(function(t) {
								return t.x
							})),
							y: r(n.map(function(t) {
								return t.y
							}))
						},
						i = n.map(function(t) {
							return a(t, e)
						}),
						s = Math.sqrt(r([Math.pow(i[0].x, 2) + Math.pow(i[0].y, 2), Math.pow(o(i).x, 2) + Math.pow(o(i).y, 2)])),
						h = i.map(function(t) {
							return {
								x: t.x / s,
								y: t.y / s
							}
						});
					return l(h)
				}
			}
		}, function(t, n) {
			var e;
			e = function() {
				return this
			}();
			try {
				e = e || Function("return this")() || (0, eval)("this")
			} catch (t) {
				"object" == typeof window && (e = window)
			}
			t.exports = e
		}, function(t, n, e) {
			"use strict";
			var i = e(5),
				r = e(0).objRepeat,
				o = function(t, n, e) {
					return [new i("character." + t + ".strokes", r({
						opacity: 1,
						displayPortion: 1
					}, n.strokes.length), {
						duration: e,
						force: !0
					})]
				},
				a = function(t, n, e) {
					return [new i("character." + t + ".opacity", 0, {
						duration: e,
						force: !0
					})].concat(o(t, n, 0))
				},
				s = function(t, n, e) {
					var r, o, a, s = n.strokeNum,
						h = (n.getLength() + 600) / (3 * e);
					return [new i("character." + t, {
						opacity: 1,
						strokes: (r = {}, o = s, a = {
							displayPortion: 0,
							opacity: 1
						}, o in r ? Object.defineProperty(r, o, {
							value: a,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : r[o] = a, r)
					}), new i("character." + t + ".strokes." + s + ".displayPortion", 1, {
						duration: h
					})]
				},
				h = function(t, n, e, h, c) {
					var u = a(t, n, e);
					return (u = u.concat(o(t, n, 0))).push(new i("character." + t, {
						opacity: 1,
						strokes: r({
							opacity: 0
						}, n.strokes.length)
					}, {
						force: !0
					})), n.strokes.forEach(function(n, e) {
						e > 0 && u.push(new i.Pause(c)), u = u.concat(s(t, n, h))
					}), u
				};
			t.exports = {
				showStrokes: o,
				showCharacter: function(t, n, e) {
					return [new i("character." + t, {
						opacity: 1,
						strokes: r({
							opacity: 1,
							displayPortion: 1
						}, n.strokes.length)
					}, {
						duration: e,
						force: !0
					})]
				},
				hideCharacter: a,
				animateCharacter: h,
				animateCharacterLoop: function(t, n, e, r, o, a) {
					var s = h(t, n, e, r, o);
					return s.push(new i.Pause(a)), s
				},
				animateStroke: s,
				animateSingleStroke: function(t, n, e, r) {
					return [new i("character." + t, function(e) {
						for (var i = e.character[t], r = {
								opacity: 1,
								strokes: {}
							}, o = 0; o < n.strokes.length; o++) r.strokes[o] = {
							opacity: i.opacity * i.strokes[o].opacity
						};
						return r
					})].concat(s(t, n.strokes[e], r))
				},
				showStroke: function(t, n, e) {
					return [new i("character." + t + ".strokes." + n, {
						displayPortion: 1,
						opacity: 1
					}, {
						duration: e,
						force: !0
					})]
				},
				updateColor: function(t, n, e) {
					return [new i("options." + t, n, {
						duration: e
					})]
				}
			}
		}, function(t, n, e) {
			"use strict";
			var i = e(0),
				r = i.inflate,
				o = i.performanceNow,
				a = i.requestAnimationFrame,
				s = i.cancelAnimationFrame;

			function h(t, n) {
				var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
				this.scope = t, this.u = n, this.h = e.duration || 0, this.f = e.force, this.v = this.w.bind(this)
			}

			function c(t) {
				this.h = t
			}
			h.prototype.run = function(t) {
				var n = this;
				return this.k || this.C(t), 0 === this.h && t.updateState(this.k), 0 === this.h || function t(n, e) {
					for (var i in e)
						if (e.hasOwnProperty(i)) {
							var r = e[i],
								o = n[i];
							if (r >= 0) {
								if (r !== o) return !1
							} else if (!t(o, r)) return !1
						} return !0
				}(t.state, this.k) ? Promise.resolve() : (this.M = t, this.S = t.state, this.P = o(), this.j = a(this.v),
					new Promise(function(t) {
						n.F = t
					}))
			}, h.prototype.w = function(t) {
				var n, e = Math.min(1, (t - this.P) / this.h);
				if (1 === e) this.M.updateState(this.k), this.j = null, this.cancel(this.M);
				else {
					var i = (n = e, -Math.cos(n * Math.PI) / 2 + .5);
					this.M.updateState(function t(n, e, i) {
						var r = {};
						for (var o in e) {
							var a = e[o],
								s = n[o];
							r[o] = a >= 0 ? i * (a - s) + s : t(s, a, i)
						}
						return r
					}(this.S, this.k, i)), this.j = a(this.v)
				}
			}, h.prototype.C = function(t) {
				var n = this.u;
				"function" == typeof this.u && (n = this.u(t.state)), this.k = r(this.scope, n)
			}, h.prototype.cancel = function(t) {
				this.F && this.F(), this.F = null, this.j && s(this.j), this.j = null, this.f && (this.k || this.C(t), t.updateState(
					this.k))
			}, c.prototype.run = function() {
				var t = this,
					n = new Promise(function(n) {
						t.F = n
					});
				return this.O = setTimeout(function() {
					return t.cancel()
				}, this.h), n
			}, c.prototype.cancel = function() {
				clearTimeout(this.O), this.F && this.F(), this.F = !1
			}, h.Pause = c, t.exports = h
		}, function(t, n, e) {
			"use strict";
			(function(n) {
				var i = e(7),
					r = e(11),
					o = e(12),
					a = e(15),
					s = e(16),
					h = e(1),
					c = e(20),
					u = e(21),
					l = e(4),
					f = e(0),
					p = f.assign,
					d = f.callIfExists,
					g = f.trim,
					v = f.colorStringToVals,
					y = {
						charDataLoader: c,
						onLoadCharDataError: null,
						onLoadCharDataSuccess: null,
						showOutline: !0,
						showCharacter: !0,
						width: null,
						height: null,
						padding: 20,
						strokeAnimationSpeed: 1,
						strokeFadeDuration: 400,
						strokeHighlightDuration: 200,
						strokeHighlightSpeed: 2,
						delayBetweenStrokes: 1e3,
						delayBetweenLoops: 2e3,
						strokeColor: "#555",
						radicalColor: null,
						highlightColor: "#AAF",
						outlineColor: "#DDD",
						drawingColor: "#333",
						leniency: 1,
						showHintAfterMisses: 3,
						highlightOnComplete: !0,
						highlightCompleteColor: null,
						drawingFadeDuration: 300,
						drawingWidth: 4,
						strokeWidth: 2,
						outlineWidth: 2
					};

				function m() {
					if (arguments.length > 0) {
						var t = void 0,
							n = {},
							e = arguments.length <= 0 ? void 0 : arguments[0];
						arguments.length > 1 && ("string" == typeof(arguments.length <= 1 ? void 0 : arguments[1]) ? (console.warn(
								"Using new HanziWriter() to set a character is deprecated. Use HanziWriter.create() instead"), t =
							arguments.length <= 1 ? void 0 : arguments[1], n = (arguments.length <= 2 ? void 0 : arguments[2]) || {}
						) : n = arguments.length <= 1 ? void 0 : arguments[1]), this.D(e, n), t && this.setCharacter(t)
					}
				}
				m.prototype.showCharacter = function() {
					var t = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return this.A.showCharacter = !0, this.U(function() {
						return t.M.run(l.showCharacter("main", t.I, "number" == typeof n.duration ? n.duration : t.A.strokeFadeDuration))
							.then(function(t) {
								return d(n.onComplete, t)
							})
					})
				}, m.prototype.hideCharacter = function() {
					var t = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return this.A.showCharacter = !1, this.U(function() {
						return t.M.run(l.hideCharacter("main", t.I, "number" == typeof n.duration ? n.duration : t.A.strokeFadeDuration))
							.then(function(t) {
								return d(n.onComplete, t)
							})
					})
				}, m.prototype.animateCharacter = function() {
					var t = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return this.cancelQuiz(), this.U(function() {
						return t.M.run(l.animateCharacter("main", t.I, t.A.strokeFadeDuration, t.A.strokeAnimationSpeed, t.A.delayBetweenStrokes))
							.then(function(t) {
								return d(n.onComplete, t)
							})
					})
				}, m.prototype.animateStroke = function(t) {
					var n = this,
						e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return this.cancelQuiz(), this.U(function() {
						return n.M.run(l.animateSingleStroke("main", n.I, t, n.A.strokeAnimationSpeed)).then(function(t) {
							return d(e.onComplete, t)
						})
					})
				}, m.prototype.loopCharacterAnimation = function() {
					var t = this;
					return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], this.cancelQuiz(), this.U(function() {
						return t.M.run(l.animateCharacterLoop("main", t.I, t.A.strokeFadeDuration, t.A.strokeAnimationSpeed, t.A
							.delayBetweenStrokes, t.A.delayBetweenLoops), {
							loop: !0
						})
					})
				}, m.prototype.showOutline = function() {
					var t = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return this.A.showOutline = !0, this.U(function() {
						return t.M.run(l.showCharacter("outline", t.I, "number" == typeof n.duration ? n.duration : t.A.strokeFadeDuration))
							.then(function(t) {
								return d(n.onComplete, t)
							})
					})
				}, m.prototype.hideOutline = function() {
					var t = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					return this.A.showOutline = !1, this.U(function() {
						return t.M.run(l.hideCharacter("outline", t.I, "number" == typeof n.duration ? n.duration : t.A.strokeFadeDuration))
							.then(function(t) {
								return d(n.onComplete, t)
							})
					})
				}, m.prototype.updateColor = function(t, n) {
					var e = this,
						i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
					return this.U(function() {
						var r = "number" == typeof i.duration ? i.duration : e.A.strokeFadeDuration,
							o = n;
						"radicalColor" !== t || n || (o = e.A.strokeColor);
						var a = v(o);
						e.A[t] = n;
						var s = l.updateColor(t, a, r);
						return "radicalColor" !== t || n || (s = s.concat(l.updateColor(t, null, 0))), e.M.run(s).then(function(
							t) {
							return d(i.onComplete, t)
						})
					})
				}, m.prototype.quiz = function() {
					var t = this,
						n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					this.U(function() {
						t.cancelQuiz(), t.L = new s(t.I, t.M, t.T), t.L.startQuiz(p({}, t.A, n))
					})
				}, m.prototype.cancelQuiz = function() {
					this.L && (this.L.cancel(), this.L = null)
				}, m.prototype.setCharacter = function(t) {
					var n = this;
					return this.cancelQuiz(), this.W = t, this._ && this._.destroy(), this.M && this.M.cancelAll(), this._ =
						null, this.z = this.H.loadCharData(t).then(function(e) {
							if (!n.H.loadingFailed) {
								var s = new o;
								n.I = s.generateCharacter(t, e), n.T = new a(n.A);
								var h = new i(n.I, n.T);
								n._ = h, n.M = new r(n.I, n.A, function(t) {
									h.render(t)
								}), n._.mount(n.G, n.M.state), n._.render(n.M.state)
							}
						}), this.z
				}, m.prototype.D = function(t, n) {
					return this.G = h.Canvas.init(t, n.width, n.height), this.G.svg.createSVGPoint && (this.N = this.G.svg.createSVGPoint()),
						this.A = this.R(n), this.H = new u(this.A), this.q(), this.L = null, this
				}, m.prototype.R = function(t) {
					var n = p({}, y, t);
					return t.strokeAnimationDuration && !t.strokeAnimationSpeed && (n.strokeAnimationSpeed = 500 / n.strokeAnimationDuration),
						t.strokeHighlightDuration && !t.strokeHighlightSpeed && (n.strokeHighlightSpeed = 500 / n.strokeHighlightDuration),
						t.highlightCompleteColor || (n.highlightCompleteColor = n.highlightColor), this.B(n)
				}, m.prototype.B = function(t) {
					var n = p({}, t);
					if (n.width && !n.height) n.height = n.width;
					else if (n.height && !n.width) n.width = n.height;
					else if (!n.width && !n.height) {
						var e = this.G.svg.getBoundingClientRect(),
							i = e.width,
							r = e.height,
							o = Math.min(i, r);
						n.width = o, n.height = o
					}
					return n
				}, m.prototype.U = function(t) {
					var n = this;
					if (this.H.loadingFailed) throw Error("Failed to load character data. Call setCharacter and try again.");
					return this.z.then(function() {
						if (!n.H.loadingFailed) return t()
					})
				}, m.prototype.q = function() {
					var t = this;
					this.G.svg.addEventListener("mousedown", function(n) {
						!t.isLoadingCharData && t.L && (n.preventDefault(), t.V("startUserStroke", t.$(n)))
					}), this.G.svg.addEventListener("touchstart", function(n) {
						!t.isLoadingCharData && t.L && (n.preventDefault(), t.V("startUserStroke", t.J(n)))
					}), this.G.svg.addEventListener("mousemove", function(n) {
						!t.isLoadingCharData && t.L && (n.preventDefault(), t.V("continueUserStroke", t.$(n)))
					}), this.G.svg.addEventListener("touchmove", function(n) {
						!t.isLoadingCharData && t.L && (n.preventDefault(), t.V("continueUserStroke", t.J(n)))
					}), n.document.addEventListener("mouseup", function() {
						return t.V("endUserStroke")
					}), n.document.addEventListener("touchend", function() {
						return t.V("endUserStroke")
					})
				}, m.prototype.V = function(t) {
					var n;
					if (this.L) {
						for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
						(n = this.L)[t].apply(n, i)
					}
				}, m.prototype.$ = function(t) {
					if (this.N) {
						this.N.x = t.clientX, this.N.y = t.clientY;
						var n = this.N.matrixTransform(this.G.svg.getScreenCTM().inverse());
						return {
							x: n.x,
							y: n.y
						}
					}
					var e = this.G.svg.getBoundingClientRect();
					return {
						x: t.clientX - e.left,
						y: t.clientY - e.top
					}
				}, m.prototype.J = function(t) {
					if (this.N) {
						this.N.x = t.touches[0].clientX, this.N.y = t.touches[0].clientY;
						var n = this.N.matrixTransform(this.G.svg.getScreenCTM().inverse());
						return {
							x: n.x,
							y: n.y
						}
					}
					var e = this.G.svg.getBoundingClientRect();
					return {
						x: t.touches[0].clientX - e.left,
						y: t.touches[0].clientY - e.top
					}
				}, m.create = function(t, n) {
					var e = new m(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
					return e.setCharacter(n), e
				};
				var C = null,
					k = null;
				if (m.loadCharacterData = function(t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							e = void 0;
						return e = C && k === n ? C : new u(p({}, y, n)), C = e, k = n, e.loadCharData(t)
					}, m.getScalingTransform = function(t, n) {
						var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
							i = new a({
								width: t,
								height: n,
								padding: e
							});
						return {
							x: i.getXOffset(),
							y: i.getYOffset(),
							scale: i.getScale(),
							transform: g("\n      translate(" + i.getXOffset() + ", " + (i.getHeight() - i.getYOffset()) +
								")\n      scale(" + i.getScale() + ", " + -1 * i.getScale() + ")\n    ").replace(/\s+/g, " ")
						}
					}, void 0 !== n.window) {
					var w = n.window.HanziWriter;
					m.noConflict = function() {
						return n.window.HanziWriter = w, m
					}, n.window.HanziWriter = m
				}
				t.exports = m
			}).call(n, e(3))
		}, function(t, n, e) {
			"use strict";
			var i = e(8),
				r = e(10),
				o = e(0).assign,
				a = e(1);

			function s(t, n) {
				this.I = t, this.T = n, this.Q = new i(t), this.Z = new i(t), this.K = new i(t), this.X = {}
			}
			s.prototype.mount = function(t) {
				var n = t.createSubCanvas(),
					e = n.svg;
				a.attr(e, "transform", "\n    translate(" + this.T.getXOffset() + ", " + (this.T.getHeight() - this.T.getYOffset()) +
					")\n    scale(" + this.T.getScale() + ", " + -1 * this.T.getScale() + ")\n  "), this.Z.mount(n), this.Q.mount(
					n), this.K.mount(n), this.Y = n
			}, s.prototype.render = function(t) {
				var n = this;
				this.Z.render({
					opacity: t.character.outline.opacity,
					strokes: t.character.outline.strokes,
					strokeColor: t.options.outlineColor
				}), this.Q.render({
					opacity: t.character.main.opacity,
					strokes: t.character.main.strokes,
					strokeColor: t.options.strokeColor,
					radicalColor: t.options.radicalColor
				}), this.K.render({
					opacity: t.character.highlight.opacity,
					strokes: t.character.highlight.strokes,
					strokeColor: t.options.highlightColor
				});
				var e = t.userStrokes || {};
				Object.keys(this.X).forEach(function(t) {
					e[t] || (n.X[t].destroy(), delete n.X[t])
				}), Object.keys(e).forEach(function(i) {
					if (e[i]) {
						var a = o({
								strokeWidth: t.options.drawingWidth,
								strokeColor: t.options.drawingColor
							}, e[i]),
							s = n.X[i];
						s || ((s = new r).mount(n.Y, a), n.X[i] = s), s.render(a)
					}
				})
			}, s.prototype.destroy = function() {
				a.removeElm(this.Y.svg), this.Y.defs.innerHTML = ""
			}, t.exports = s
		}, function(t, n, e) {
			"use strict";
			var i = e(9);

			function r(t) {
				this.tt = {}, this.character = t, this.strokeRenderers = this.character.strokes.map(function(t) {
					return new i(t)
				})
			}
			r.prototype.mount = function(t) {
				var n = t.createSubCanvas();
				this.it = n.svg, this.strokeRenderers.forEach(function(t, e) {
					t.mount(n)
				})
			}, r.prototype.render = function(t) {
				if (t !== this.tt) {
					t.opacity !== this.tt.opacity && (this.it.style.opacity = t.opacity, 0 === t.opacity ? this.it.style.display =
						"none" : 0 === this.tt.opacity && (this.it.style.display = "initial"));
					var n = !this.tt || t.strokeColor !== this.tt.strokeColor || t.radicalColor !== this.tt.radicalColor;
					if (n || t.strokes !== this.tt.strokes)
						for (var e = 0; e < this.strokeRenderers.length; e++) !n && this.tt.strokes && t.strokes[e] === this.tt.strokes[
							e] || this.strokeRenderers[e].render({
							strokeColor: t.strokeColor,
							radicalColor: t.radicalColor,
							opacity: t.strokes[e].opacity,
							displayPortion: t.strokes[e].displayPortion
						});
					this.tt = t
				}
			}, t.exports = r
		}, function(t, n, e) {
			"use strict";
			var i = e(0).counter,
				r = e(1),
				o = e(2),
				a = o.extendPointOnLine,
				s = o.filterParallelPoints,
				h = 200;

			function c(t) {
				this.tt = {}, this.nt = t, this.rt = t.getLength() + h / 2
			}
			c.prototype.mount = function(t) {
				this.ot = r.createElm("path"), this.st = r.createElm("clipPath"), this.et = r.createElm("path");
				var n = "mask-" + i();
				r.attr(this.st, "id", n), r.attr(this.et, "d", this.nt.path), this.ot.style.opacity = 0, r.attr(this.ot,
					"clip-path", "url(#" + n + ")");
				var e = function(t, n) {
					if (t.length < 2) return t;
					var e = t[1],
						i = t[0],
						r = a(e, i, n),
						o = t.slice(1);
					return o.unshift(r), o
				}(s(this.nt.points), h / 2);
				return r.attr(this.ot, "d", r.getPathString(e)), r.attrs(this.ot, {
					stroke: "#FFFFFF",
					"stroke-width": h,
					fill: "none",
					"stroke-linecap": "round",
					"stroke-linejoin": "miter",
					"stroke-dasharray": this.rt + "," + this.rt
				}), this.st.appendChild(this.et), t.defs.appendChild(this.st), t.svg.appendChild(this.ot), this
			}, c.prototype.render = function(t) {
				if (t !== this.tt) {
					t.displayPortion !== this.tt.displayPortion && (this.ot.style.strokeDashoffset = this.ut(t.displayPortion));
					var n = this.ht(t);
					if (n !== this.ht(this.tt)) {
						var e = n.r,
							i = n.g,
							o = n.b,
							a = n.a;
						r.attrs(this.ot, {
							stroke: "rgba(" + e + "," + i + "," + o + "," + a + ")"
						})
					}
					t.opacity !== this.tt.opacity && (this.ot.style.opacity = t.opacity), this.tt = t
				}
			}, c.prototype.ut = function(t) {
				return .999 * this.rt * (1 - t)
			}, c.prototype.ht = function(t) {
				var n = t.strokeColor,
					e = t.radicalColor;
				return e && this.nt.isInRadical ? e : n
			}, t.exports = c
		}, function(t, n, e) {
			"use strict";
			var i = e(1);

			function r() {
				this.tt = {}
			}
			r.prototype.mount = function(t) {
				this.at = i.createElm("path"), t.svg.appendChild(this.at)
			}, r.prototype.render = function(t) {
				if (t !== this.tt) {
					if (t.strokeColor !== this.tt.strokeColor || t.strokeWidth !== this.tt.strokeWidth) {
						var n = t.strokeColor,
							e = n.r,
							r = n.g,
							o = n.b,
							a = n.a;
						i.attrs(this.at, {
							fill: "none",
							stroke: "rgba(" + e + "," + r + "," + o + "," + a + ")",
							"stroke-width": t.strokeWidth,
							"stroke-linecap": "round",
							"stroke-linejoin": "round"
						})
					}
					t.opacity !== this.tt.opacity && i.attr(this.at, "opacity", t.opacity), t.points !== this.tt.points && i.attr(
						this.at, "d", i.getPathString(t.points)), this.tt = t
				}
			}, r.prototype.destroy = function() {
				i.removeElm(this.at)
			}, t.exports = r
		}, function(t, n, e) {
			"use strict";
			var i = e(0),
				r = i.copyAndMergeDeep,
				o = i.colorStringToVals;

			function a(t, n, e) {
				this.ct = e, this.ft = [], this.state = {
					options: {
						drawingFadeDuration: n.drawingFadeDuration,
						drawingWidth: n.drawingWidth,
						drawingColor: o(n.drawingColor),
						strokeColor: o(n.strokeColor),
						outlineColor: o(n.outlineColor),
						radicalColor: o(n.radicalColor || n.strokeColor),
						highlightColor: o(n.highlightColor)
					},
					character: {
						main: {
							opacity: n.showCharacter ? 1 : 0,
							strokes: {}
						},
						outline: {
							opacity: n.showOutline ? 1 : 0,
							strokes: {}
						},
						highlight: {
							opacity: 1,
							strokes: {}
						}
					},
					userStrokes: null
				};
				for (var i = 0; i < t.strokes.length; i++) this.state.character.main.strokes[i] = {
					opacity: 1,
					displayPortion: 1
				}, this.state.character.outline.strokes[i] = {
					opacity: 1,
					displayPortion: 1
				}, this.state.character.highlight.strokes[i] = {
					opacity: 0,
					displayPortion: 1
				}
			}
			a.prototype.updateState = function(t) {
				var n = r(this.state, t);
				this.ct(n, this.state), this.state = n
			}, a.prototype.run = function(t) {
				var n = this,
					e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					i = t.map(function(t) {
						return t.scope
					}).filter(function(t) {
						return t
					});
				return this.cancelMutations(i), new Promise(function(r) {
					var o = {
						vt: !0,
						lt: 0,
						F: r,
						dt: t,
						pt: e.loop,
						yt: i
					};
					n.ft.push(o), n.wt(o)
				})
			}, a.prototype.wt = function(t) {
				var n = this;
				if (t.vt) {
					var e = t.dt;
					if (t.lt >= e.length) {
						if (!t.pt) return t.vt = !1, this.ft = this.ft.filter(function(n) {
							return n !== t
						}), void t.F({
							canceled: !1
						});
						t.lt = 0
					}
					t.dt[t.lt].run(this).then(function() {
						t.vt && (t.lt++, n.wt(t))
					})
				}
			}, a.prototype.cancelMutations = function(t) {
				var n = this;
				this.ft.forEach(function(e) {
					e.yt.forEach(function(i) {
						t.forEach(function(t) {
							(i.indexOf(t) >= 0 || t.indexOf(i) >= 0) && n.gt(e)
						})
					})
				})
			}, a.prototype.cancelAll = function() {
				this.cancelMutations([""])
			}, a.prototype.gt = function(t) {
				t.vt = !1;
				for (var n = t.lt; n < t.dt.length; n++) t.dt[n].cancel(this);
				t.F && t.F({
					canceled: !0
				}), this.ft = this.ft.filter(function(n) {
					return n !== t
				})
			}, t.exports = a
		}, function(t, n, e) {
			"use strict";
			var i = function(t, n) {
					if (Array.isArray(t)) return t;
					if (Symbol.iterator in Object(t)) return function(t, n) {
						var e = [],
							i = !0,
							r = !1,
							o = void 0;
						try {
							for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (e.push(a.value), !n || e.length !==
									n); i = !0);
						} catch (t) {
							r = !0, o = t
						} finally {
							try {
								!i && s.return && s.return()
							} finally {
								if (r) throw o
							}
						}
						return e
					}(t, n);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				},
				r = e(13),
				o = e(14);

			function a() {}
			a.prototype.generateCharacter = function(t, n) {
				var e = this.generateStrokes(n);
				return new o(t, e)
			}, a.prototype.generateStrokes = function(t) {
				return t.strokes.map(function(n, e) {
					var o, a = t.medians[e].map(function(t) {
						var n = i(t, 2);
						return {
							x: n[0],
							y: n[1]
						}
					});
					return new r(n, a, e, (o = e, t.radStrokes && t.radStrokes.indexOf(o) >= 0))
				})
			}, t.exports = a
		}, function(t, n, e) {
			"use strict";
			var i = e(2),
				r = i.subtract,
				o = i.distance,
				a = i.length;

			function s(t, n, e) {
				var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				this.path = t, this.points = n, this.strokeNum = e, this.isInRadical = i
			}
			s.prototype.getStartingPoint = function() {
				return this.points[0]
			}, s.prototype.getEndingPoint = function() {
				return this.points[this.points.length - 1]
			}, s.prototype.getLength = function() {
				return a(this.points)
			}, s.prototype.getVectors = function() {
				var t = this.points[0];
				return this.points.slice(1).map(function(n) {
					var e = r(n, t);
					return t = n, e
				})
			}, s.prototype.getDistance = function(t) {
				var n = this.points.map(function(n) {
					return o(n, t)
				});
				return Math.min.apply(Math, n)
			}, s.prototype.getAverageDistance = function(t) {
				var n = this;
				return t.reduce(function(t, e) {
					return t + n.getDistance(e)
				}, 0) / t.length
			}, t.exports = s
		}, function(t, n, e) {
			"use strict";
			t.exports = function(t, n) {
				this.symbol = t, this.strokes = n
			}
		}, function(t, n, e) {
			"use strict";
			var i = [{
				x: 0,
				y: -124
			}, {
				x: 1024,
				y: 900
			}];

			function r(t) {
				this.A = t, this.mt()
			}
			r.prototype.convertExternalPoint = function(t) {
				return {
					x: (t.x - this.kt) / this.bt,
					y: (this.getHeight() - this.Ct - t.y) / this.bt
				}
			}, r.prototype.getXOffset = function() {
				return this.kt
			}, r.prototype.getYOffset = function() {
				return this.Ct
			}, r.prototype.getScale = function() {
				return this.bt
			}, r.prototype.getHeight = function() {
				return this.A.height
			}, r.prototype.mt = function() {
				var t = i,
					n = t[1].x - t[0].x,
					e = t[1].y - t[0].y,
					r = this.A.width - 2 * this.A.padding,
					o = this.A.height - 2 * this.A.padding,
					a = r / n,
					s = o / e;
				this.bt = Math.min(a, s);
				var h = this.A.padding + (r - this.bt * n) / 2,
					c = this.A.padding + (o - this.bt * e) / 2;
				this.kt = -1 * t[0].x * this.bt + h, this.Ct = -1 * t[0].y * this.bt + c
			}, t.exports = r
		}, function(t, n, e) {
			"use strict";
			var i = e(17),
				r = e(18),
				o = e(0),
				a = o.callIfExists,
				s = o.counter,
				h = e(19),
				c = e(1),
				u = e(2),
				l = e(4),
				f = function(t) {
					return {
						pathString: c.getPathString(t.externalPoints),
						points: t.points.map(function(t) {
							return u.round(t)
						})
					}
				};

			function p(t, n, e) {
				this.I = t, this.M = n, this.vt = !1, this.T = e
			}
			p.prototype.startQuiz = function(t) {
				this.vt = !0, this.A = t, this.Mt = 0, this.St = 0, this.Pt = 0, this.jt = [], this.M.run(h.startQuiz(this.I,
					t.strokeFadeDuration))
			}, p.prototype.startUserStroke = function(t) {
				var n = this.T.convertExternalPoint(t);
				if (!this.vt) return null;
				if (this.xt) return this.endUserStroke();
				var e = s();
				this.xt = new r(e, n, t), this.M.run(h.startUserStroke(e, n))
			}, p.prototype.continueUserStroke = function(t) {
				if (this.xt) {
					var n = this.T.convertExternalPoint(t);
					this.xt.appendPoint(n, t);
					var e = this.xt.points.slice(0);
					this.M.run(h.updateUserStroke(this.xt.id, e))
				}
			}, p.prototype.endUserStroke = function() {
				if (this.xt)
					if (this.M.run(h.removeUserStroke(this.xt.id, this.A.drawingFadeDuration)), 1 !== this.xt.points.length) {
						var t = this.Ft(),
							n = this.M.state.character.outline.opacity > 0;
						i(this.xt, this.I, this.Mt, {
							isOutlineVisible: n,
							leniency: this.A.leniency
						}) ? this.Ot(t) : (this.Dt(), this.St >= this.A.showHintAfterMisses && this.M.run(h.highlightStroke(t,
							this.A.highlightColor, this.A.strokeHighlightSpeed))), this.xt = null
					} else this.xt = null
			}, p.prototype.cancel = function() {
				this.vt = !1, this.xt && this.M.run(h.removeUserStroke(this.xt.id, this.A.drawingFadeDuration))
			}, p.prototype.Ot = function(t) {
				a(this.A.onCorrectStroke, {
					character: this.I.symbol,
					strokeNum: this.Mt,
					mistakesOnStroke: this.St,
					totalMistakes: this.Pt,
					strokesRemaining: this.I.strokes.length - this.Mt - 1,
					drawnPath: f(this.xt)
				});
				var n = l.showStroke("main", this.Mt, this.A.strokeFadeDuration);
				this.Mt += 1, this.St = 0, this.Mt === this.I.strokes.length && (this.vt = !1, a(this.A.onComplete, {
					character: this.I.symbol,
					totalMistakes: this.Pt
				}), this.A.highlightOnComplete && (n = n.concat(h.highlightCompleteChar(this.I, this.A.highlightCompleteColor,
					2 * this.A.strokeHighlightDuration)))), this.M.run(n)
			}, p.prototype.Dt = function() {
				this.St += 1, this.Pt += 1, a(this.A.onMistake, {
					character: this.I.symbol,
					strokeNum: this.Mt,
					mistakesOnStroke: this.St,
					totalMistakes: this.Pt,
					strokesRemaining: this.I.strokes.length - this.Mt,
					drawnPath: f(this.xt)
				})
			}, p.prototype.Ft = function() {
				return this.I.strokes[this.Mt]
			}, t.exports = p
		}, function(t, n, e) {
			"use strict";
			var i = e(0),
				r = i.average,
				o = i.assign,
				a = e(2),
				s = a.cosineSimilarity,
				h = a.equals,
				c = a.frechetDist,
				u = a.distance,
				l = a.subtract,
				f = a.normalizeCurve,
				p = a.rotate,
				d = a.length,
				g = function(t, n) {
					var e, i, o, a = (i = [], o = (e = t)[0], e.slice(1).forEach(function(t) {
							i.push(l(t, o)), o = t
						}), i),
						h = n.getVectors(),
						c = a.map(function(t) {
							var n = h.map(function(n) {
								return s(n, t)
							});
							return Math.max.apply(Math, n)
						});
					return r(c) > 0
				},
				v = [Math.PI / 16, Math.PI / 32, 0, -1 * Math.PI / 32, -1 * Math.PI / 16],
				y = function(t, n, e) {
					var i = e.leniency,
						r = void 0 === i ? 1 : i,
						o = e.isOutlineVisible,
						a = void 0 !== o && o,
						s = n.getAverageDistance(t),
						h = s <= 350 * (a || n.strokeNum > 0 ? .5 : 1) * r;
					if (!h) return {
						isMatch: !1,
						avgDist: s
					};
					var l, y, m, C, k, w, x, b, S, M, A, _, D = (l = t, m = r, C = u((y = n).getStartingPoint(), l[0]), k = u(y.getEndingPoint(),
							l[l.length - 1]), C <= 250 * m && k <= 250 * m),
						P = g(t, n),
						E = (w = t, x = n.points, b = r, S = f(w, 2), M = f(x, 2), A = 1 / 0, v.forEach(function(t) {
							var n = c(S, p(M, t));
							n < A && (A = n)
						}), A <= .4 * b),
						z = (_ = n, r * (d(t) + 25) / (_.getLength() + 25) >= .35);
					return {
						isMatch: h && D && P && E && z,
						avgDist: s
					}
				};
			t.exports = function(t, n, e) {
				var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
					r = function(t) {
						if (t.length < 2) return t;
						var n = [t[0]];
						return t.slice(1).forEach(function(t) {
							h(t, n[n.length - 1]) || n.push(t)
						}), n
					}(t.points);
				if (r.length < 2) return null;
				var a = y(r, n.strokes[e], i);
				if (!a.isMatch) return !1;
				for (var s = n.strokes.slice(e + 1), c = a.avgDist, u = 0; u < s.length; u++) {
					var l = y(r, s[u], i);
					l.isMatch && l.avgDist < c && (c = l.avgDist)
				}
				if (c < a.avgDist) {
					var f = .6 * (c + a.avgDist) / (2 * a.avgDist),
						p = (i.leniency || 1) * f,
						d = o({}, i, {
							leniency: p
						});
					return y(r, n.strokes[e], d).isMatch
				}
				return !0
			}
		}, function(t, n, e) {
			"use strict";

			function i(t, n, e) {
				this.id = t, this.points = [n], this.externalPoints = [e]
			}
			i.prototype.appendPoint = function(t, n) {
				this.points.push(t), this.externalPoints.push(n)
			}, t.exports = i
		}, function(t, n, e) {
			"use strict";
			var i = e(5),
				r = e(4),
				o = e(0).objRepeat;
			t.exports = {
				highlightCompleteChar: function(t, n, e) {
					return [new i("character.highlight.strokeColor", n)].concat(r.hideCharacter("highlight", t)).concat(r.showCharacter(
						"highlight", t, e / 2)).concat(r.hideCharacter("highlight", t, e / 2))
				},
				highlightStroke: function(t, n, e) {
					var r, o, a, s = t.strokeNum,
						h = (t.getLength() + 600) / (3 * e);
					return [new i("character.highlight.strokeColor", n), new i("character.highlight", {
						opacity: 1,
						strokes: (r = {}, o = s, a = {
							displayPortion: 0,
							opacity: 0
						}, o in r ? Object.defineProperty(r, o, {
							value: a,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : r[o] = a, r)
					}), new i("character.highlight.strokes." + s, {
						displayPortion: 1,
						opacity: 1
					}, {
						duration: h
					}), new i("character.highlight.strokes." + s + ".opacity", 0, {
						duration: h
					})]
				},
				startQuiz: function(t, n) {
					return r.hideCharacter("main", t, n).concat([new i("character.highlight", {
						opacity: 1,
						strokes: o({
							opacity: 0
						}, t.strokes.length)
					}, {
						force: !0
					}), new i("character.main", {
						opacity: 1,
						strokes: o({
							opacity: 0
						}, t.strokes.length)
					}, {
						force: !0
					})])
				},
				startUserStroke: function(t, n) {
					return [new i("quiz.activeUserStrokeId", t, {
						force: !0
					}), new i("userStrokes." + t, {
						points: [n],
						opacity: 1
					}, {
						force: !0
					})]
				},
				updateUserStroke: function(t, n) {
					return [new i("userStrokes." + t + ".points", n, {
						force: !0
					})]
				},
				removeUserStroke: function(t, n) {
					return [new i("userStrokes." + t + ".opacity", 0, {
						duration: n
					}), new i("userStrokes." + t, null, {
						force: !0
					})]
				}
			}
		}, function(t, n, e) {
			"use strict";
			(function(n) {
				t.exports = function(t, e, i) {
					var r = new n.XMLHttpRequest;
					r.overrideMimeType && r.overrideMimeType("application/json"), r.open("GET",
						"https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/" + t + ".json", !0), r.onerror = function(t) {
						i(r, t)
					}, r.onreadystatechange = function() {
						4 === r.readyState && (200 === r.status ? e(JSON.parse(r.responseText)) : 0 !== r.status && i && i(r))
					}, r.send(null)
				}
			}).call(n, e(3))
		}, function(t, n, e) {
			"use strict";
			var i = e(0).callIfExists;

			function r(t) {
				this.At = 0, this.A = t, this.Ut = !1, this.Et = null, this.loadingFailed = !1
			}
			r.prototype.It = function(t, n) {
				var e = this,
					i = function(t) {
						n === e.At && e.F(t)
					},
					r = this.A.charDataLoader(t, i, function(t) {
						n === e.At && e.Lt(t)
					});
				r && i(r)
			}, r.prototype.Tt = function() {
				var t = this;
				this.Et = new Promise(function(n, e) {
					t.F = n, t.Lt = e
				}).then(function(n) {
					return t.Ut = !1, i(t.A.onLoadCharDataSuccess, n), n
				}, function(n) {
					if (t.Ut = !1, t.loadingFailed = !0, i(t.A.onLoadCharDataError, n), !t.A.onLoadCharDataError) {
						if (n instanceof Error) throw n;
						var e = new Error("Failed to load char data for " + t.Wt);
						throw e.reason = n, e
					}
				})
			}, r.prototype.loadCharData = function(t) {
				return this.Wt = t, this.Ut || this.Tt(), this.loadingFailed = !1, this.Ut = !0, this.At++, this.It(t, this.At),
					this.Et
			}, t.exports = r
		}])
	},
	cqTP: function(t, n) {},
	lshN: function(t, n, e) {
		(function(t) {
			(function(t) {}).call("object" == typeof window && window || "object" == typeof self && self || "object" ==
				typeof t && t || {})
		}).call(n, e("DuR2"))
	}
}, ["NHnr"]);
