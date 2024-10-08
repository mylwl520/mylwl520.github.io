/*! Hanzi Writer v1.3.0 | https://chanind.github.io/hanzi-writer */ ! function(t) {
	var i = {};

	function n(r) {
		if (i[r]) return i[r].exports;
		var o = i[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}
	n.m = t, n.c = i, n.d = function(t, i, r) {
		n.o(t, i) || Object.defineProperty(t, i, {
			configurable: !1,
			enumerable: !0,
			get: r
		})
	}, n.n = function(t) {
		var i = t && t.t ? function() {
			return t.default
		} : function() {
			return t
		};
		return n.d(i, "a", i), i
	}, n.o = function(t, i) {
		return Object.prototype.hasOwnProperty.call(t, i)
	}, n.p = "", n(n.s = 6)
}([function(t, i, n) {
	"use strict";
	(function(i) {
		var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" :
				typeof t
		};
		var r = i.performance && function() {
				return i.performance.now()
			} || function() {
				return Date.now()
			},
			o = i.requestAnimationFrame || function(t) {
				return setTimeout(function() {
					return t(r())
				}, 1e3 / 60)
			},
			s = i.cancelAnimationFrame || clearTimeout,
			e = function(t) {
				for (var i = Object(t), n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] =
					arguments[o];
				return r.forEach(function(t) {
					if (null != t)
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = t[n])
				}), i
			},
			u = Object.assign || e;
		var h = 0;
		t.exports = {
			e: e,
			arrLast: function(t) {
				return t[t.length - 1]
			},
			assign: u,
			average: function(t) {
				return t.reduce(function(t, i) {
					return i + t
				}, 0) / t.length
			},
			callIfExists: function(t, i) {
				return t && t(i), i
			},
			cancelAnimationFrame: s,
			colorStringToVals: function(t) {
				var i = t.toUpperCase().trim();
				if (/^#([A-F0-9]{3}){1,2}$/.test(i)) {
					var n = i.substring(1).split("");
					3 === n.length && (n = [n[0], n[0], n[1], n[1], n[2], n[2]]);
					var r = "" + n.join("");
					return {
						r: parseInt(r.slice(0, 2), 16),
						g: parseInt(r.slice(2, 4), 16),
						b: parseInt(r.slice(4, 6), 16),
						a: 1
					}
				}
				var o = i.match(/^RGBA?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d*\.?\d+))?\)$/);
				if (o) return {
					r: parseInt(o[1], 10),
					g: parseInt(o[2], 10),
					b: parseInt(o[3], 10),
					a: parseFloat(o[4] || 1, 10)
				};
				throw new Error("Invalid color: " + t)
			},
			copyAndMergeDeep: function t(i, r) {
				var o = u({}, i);
				for (var s in r) {
					var e = i[s],
						h = r[s];
					e !== h && (e && h && "object" === (void 0 === e ? "undefined" : n(e)) && "object" === (void 0 === h ?
						"undefined" : n(h)) && !Array.isArray(h) ? o[s] = t(e, h) : o[s] = h)
				}
				return o
			},
			counter: function() {
				return ++h
			},
			emptyFunc: function() {},
			inflate: function(t, i) {
				for (var n = t.split("."), r = {}, o = r, s = 0; s < n.length; s++) {
					var e = s === n.length - 1 ? i : {};
					o[n[s]] = e, o = e
				}
				return r
			},
			objRepeat: function(t, i) {
				for (var n = {}, r = 0; r < i; r++) n[r] = t;
				return n
			},
			performanceNow: r,
			requestAnimationFrame: o,
			timeout: function() {
				var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
				return new Promise(function(i, n) {
					setTimeout(i, t)
				})
			},
			trim: function(t) {
				return t.replace(/^\s+/, "").replace(/\s+$/, "")
			}
		}
	}).call(i, n(3))
}, function(t, i, n) {
	"use strict";
	(function(i) {
		var r = n(2).round;

		function o(t) {
			return i.document.createElementNS("http://www.w3.org/2000/svg", t)
		}

		function s(t, i, n) {
			t.setAttributeNS(null, i, n)
		}

		function e(t, i) {
			Object.keys(i).forEach(function(n) {
				return s(t, n, i[n])
			})
		}

		function u(t, i) {
			this.svg = t, this.defs = i
		}
		u.prototype.createSubCanvas = function() {
			var t = o("g");
			return this.svg.appendChild(t), new u(t, this.defs)
		}, u.init = function(t) {
			var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "100%",
				r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "100%",
				s = void 0,
				h = t;
			"string" == typeof t && (h = i.document.getElementById(t));
			var a = h.nodeName.toUpperCase();
			"SVG" === a || "G" === a ? s = h : (s = o("svg"), h.appendChild(s)), e(s, {
				width: n,
				height: r
			});
			var c = o("defs");
			return s.appendChild(c), new u(s, c)
		}, t.exports = {
			createElm: o,
			attrs: e,
			attr: s,
			Canvas: u,
			getPathString: function(t) {
				var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = r(t[0]),
					o = t.slice(1),
					s = "M " + n.x + " " + n.y;
				return o.forEach(function(t) {
					var i = r(t);
					s += " L " + i.x + " " + i.y
				}), i && (s += "Z"), s
			},
			removeElm: function(t) {
				t && t.parentNode.removeChild(t)
			}
		}
	}).call(i, n(3))
}, function(t, i, n) {
	"use strict";
	var r = n(0),
		o = r.average,
		s = r.arrLast,
		e = function(t, i) {
			return {
				x: t.x - i.x,
				y: t.y - i.y
			}
		},
		u = function(t) {
			return Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2))
		},
		h = function(t, i) {
			return u(e(t, i))
		},
		a = function(t) {
			var i = t[0];
			return t.slice(1).reduce(function(t, n) {
				var r = h(n, i);
				return i = n, t + r
			}, 0)
		},
		c = function(t, i, n) {
			var r = e(i, t),
				o = n / u(r);
			return {
				x: i.x + o * r.x,
				y: i.y + o * r.y
			}
		},
		f = function(t) {
			var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .05,
				n = t.slice(0, 1);
			return t.slice(1).forEach(function(t) {
				var r = n[n.length - 1],
					o = h(t, r);
				if (o > i)
					for (var s = Math.ceil(o / i), e = o / s, u = 0; u < s; u++) n.push(c(t, r, -1 * e * (u + 1)));
				else n.push(t)
			}), n
		},
		v = function(t) {
			for (var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30, n = a(t) / (i - 1), r = [t[0]],
					o = s(t), e = t.slice(1), u = 0; u < i - 2; u++)
				for (var f = s(r), v = n, l = !1; !l;) {
					var d = h(f, e[0]);
					if (d < v) v -= d, f = e.shift();
					else {
						var p = c(f, e[0], v - d);
						r.push(p), l = !0
					}
				}
			return r.push(o), r
		};
	t.exports = {
		round: function(t) {
			var i = 10 * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1);
			return {
				x: Math.round(i * t.x) / i,
				y: Math.round(i * t.y) / i
			}
		},
		equals: function(t, i) {
			return t.x === i.x && t.y === i.y
		},
		distance: h,
		frechetDist: function(t, i) {
			for (var n = [], r = 0; r < t.length; r++) {
				n.push([]);
				for (var o = 0; o < i.length; o++) n[r].push(-1)
			}
			return function r(o, s) {
				return n[o][s] > -1 ? n[o][s] : (n[o][s] = 0 === o && 0 === s ? h(t[0], i[0]) : o > 0 && 0 === s ? Math.max(r(
						o - 1, 0), h(t[o], i[0])) : 0 === o && s > 0 ? Math.max(r(0, s - 1), h(t[0], i[s])) : o > 0 && s > 0 ? Math
					.max(Math.min(r(o - 1, s), r(o - 1, s - 1), r(o, s - 1)), h(t[o], i[s])) : 1 / 0, n[o][s])
			}(t.length - 1, i.length - 1)
		},
		length: a,
		rotate: function(t, i) {
			return t.map(function(t) {
				return {
					x: Math.cos(i) * t.x - Math.sin(i) * t.y,
					y: Math.sin(i) * t.x + Math.cos(i) * t.y
				}
			})
		},
		subtract: e,
		cosineSimilarity: function(t, i) {
			return (t.x * i.x + t.y * i.y) / u(t) / u(i)
		},
		outlineCurve: v,
		extendPointOnLine: c,
		filterParallelPoints: function(t) {
			if (t.length < 3) return t;
			var i = [t[0], t[1]];
			return t.slice(2).forEach(function(t, n) {
				var r = i.length,
					o = e(t, i[r - 1]),
					s = e(i[r - 1], i[r - 2]);
				o.y * s.x - o.x * s.y == 0 && i.pop(), i.push(t)
			}), i
		},
		subdivideCurve: f,
		normalizeCurve: function(t) {
			var i = v(t),
				n = {
					x: o(i.map(function(t) {
						return t.x
					})),
					y: o(i.map(function(t) {
						return t.y
					}))
				},
				r = i.map(function(t) {
					return e(t, n)
				}),
				u = Math.sqrt(o([Math.pow(r[0].x, 2) + Math.pow(r[0].y, 2), Math.pow(s(r).x, 2) + Math.pow(s(r).y, 2)])),
				h = r.map(function(t) {
					return {
						x: t.x / u,
						y: t.y / u
					}
				});
			return f(h)
		}
	}
}, function(t, i) {
	var n;
	n = function() {
		return this
	}();
	try {
		n = n || Function("return this")() || (0, eval)("this")
	} catch (t) {
		"object" == typeof window && (n = window)
	}
	t.exports = n
}, function(t, i, n) {
	"use strict";
	var r = n(5),
		o = n(0).objRepeat,
		s = function(t, i, n) {
			return [new r("character." + t + ".strokes", o({
				opacity: 1,
				displayPortion: 1
			}, i.strokes.length), {
				duration: n,
				force: !0
			})]
		},
		e = function(t, i, n) {
			return [new r("character." + t + ".opacity", 0, {
				duration: n,
				force: !0
			})].concat(s(t, i, 0))
		},
		u = function(t, i, n) {
			var o, s, e, u = i.strokeNum,
				h = (i.getLength() + 600) / (3 * n);
			return [new r("character." + t, {
				opacity: 1,
				strokes: (o = {}, s = u, e = {
					displayPortion: 0,
					opacity: 1
				}, s in o ? Object.defineProperty(o, s, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = e, o)
			}), new r("character." + t + ".strokes." + u + ".displayPortion", 1, {
				duration: h
			})]
		},
		h = function(t, i, n, h, a) {
			var c = e(t, i, n);
			return (c = c.concat(s(t, i, 0))).push(new r("character." + t, {
				opacity: 1,
				strokes: o({
					opacity: 0
				}, i.strokes.length)
			}, {
				force: !0
			})), i.strokes.forEach(function(i, n) {
				n > 0 && c.push(new r.Pause(a)), c = c.concat(u(t, i, h))
			}), c
		};
	t.exports = {
		showStrokes: s,
		showCharacter: function(t, i, n) {
			return [new r("character." + t, {
				opacity: 1,
				strokes: o({
					opacity: 1,
					displayPortion: 1
				}, i.strokes.length)
			}, {
				duration: n,
				force: !0
			})]
		},
		hideCharacter: e,
		animateCharacter: h,
		animateCharacterLoop: function(t, i, n, o, s, e) {
			var u = h(t, i, n, o, s);
			return u.push(new r.Pause(e)), u
		},
		animateStroke: u,
		animateSingleStroke: function(t, i, n, o) {
			return [new r("character." + t, function(n) {
				for (var r = n.character[t], o = {
						opacity: 1,
						strokes: {}
					}, s = 0; s < i.strokes.length; s++) o.strokes[s] = {
					opacity: r.opacity * r.strokes[s].opacity
				};
				return o
			})].concat(u(t, i.strokes[n], o))
		},
		showStroke: function(t, i, n) {
			return [new r("character." + t + ".strokes." + i, {
				displayPortion: 1,
				opacity: 1
			}, {
				duration: n,
				force: !0
			})]
		},
		updateColor: function(t, i, n) {
			return [new r("options." + t, i, {
				duration: n
			})]
		}
	}
}, function(t, i, n) {
	"use strict";
	var r = n(0),
		o = r.inflate,
		s = r.performanceNow,
		e = r.requestAnimationFrame,
		u = r.cancelAnimationFrame;

	function h(t, i) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		this.scope = t, this.u = i, this.h = n.duration || 0, this.f = n.force, this.v = this.w.bind(this)
	}

	function a(t) {
		this.h = t
	}
	h.prototype.run = function(t) {
		var i = this;
		return this.k || this.C(t), 0 === this.h && t.updateState(this.k), 0 === this.h || function t(i, n) {
			for (var r in n)
				if (n.hasOwnProperty(r)) {
					var o = n[r],
						s = i[r];
					if (o >= 0) {
						if (o !== s) return !1
					} else if (!t(s, o)) return !1
				} return !0
		}(t.state, this.k) ? Promise.resolve() : (this.M = t, this.S = t.state, this.P = s(), this.j = e(this.v), new Promise(
			function(t) {
				i.F = t
			}))
	}, h.prototype.w = function(t) {
		var i, n = Math.min(1, (t - this.P) / this.h);
		if (1 === n) this.M.updateState(this.k), this.j = null, this.cancel(this.M);
		else {
			var r = (i = n, -Math.cos(i * Math.PI) / 2 + .5);
			this.M.updateState(function t(i, n, r) {
				var o = {};
				for (var s in n) {
					var e = n[s],
						u = i[s];
					o[s] = e >= 0 ? r * (e - u) + u : t(u, e, r)
				}
				return o
			}(this.S, this.k, r)), this.j = e(this.v)
		}
	}, h.prototype.C = function(t) {
		var i = this.u;
		"function" == typeof this.u && (i = this.u(t.state)), this.k = o(this.scope, i)
	}, h.prototype.cancel = function(t) {
		this.F && this.F(), this.F = null, this.j && u(this.j), this.j = null, this.f && (this.k || this.C(t), t.updateState(
			this.k))
	}, a.prototype.run = function() {
		var t = this,
			i = new Promise(function(i) {
				t.F = i
			});
		return this.O = setTimeout(function() {
			return t.cancel()
		}, this.h), i
	}, a.prototype.cancel = function() {
		clearTimeout(this.O), this.F && this.F(), this.F = !1
	}, h.Pause = a, t.exports = h
}, function(t, i, n) {
	"use strict";
	(function(i) {
		var r = n(7),
			o = n(11),
			s = n(12),
			e = n(15),
			u = n(16),
			h = n(1),
			a = n(20),
			c = n(21),
			f = n(4),
			v = n(0),
			l = v.assign,
			d = v.callIfExists,
			p = v.trim,
			y = v.colorStringToVals,
			w = {
				charDataLoader: a,
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

		function g() {
			if (arguments.length > 0) {
				var t = void 0,
					i = {},
					n = arguments.length <= 0 ? void 0 : arguments[0];
				arguments.length > 1 && ("string" == typeof(arguments.length <= 1 ? void 0 : arguments[1]) ? (console.warn(
							"Using new HanziWriter() to set a character is deprecated. Use HanziWriter.create() instead"), t = arguments
						.length <= 1 ? void 0 : arguments[1], i = (arguments.length <= 2 ? void 0 : arguments[2]) || {}) : i =
					arguments.length <= 1 ? void 0 : arguments[1]), this.D(n, i), t && this.setCharacter(t)
			}
		}
		g.prototype.showCharacter = function() {
			var t = this,
				i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return this.A.showCharacter = !0, this.U(function() {
				return t.M.run(f.showCharacter("main", t.I, "number" == typeof i.duration ? i.duration : t.A.strokeFadeDuration))
					.then(function(t) {
						return d(i.onComplete, t)
					})
			})
		}, g.prototype.hideCharacter = function() {
			var t = this,
				i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return this.A.showCharacter = !1, this.U(function() {
				return t.M.run(f.hideCharacter("main", t.I, "number" == typeof i.duration ? i.duration : t.A.strokeFadeDuration))
					.then(function(t) {
						return d(i.onComplete, t)
					})
			})
		}, g.prototype.animateCharacter = function() {
			var t = this,
				i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return this.cancelQuiz(), this.U(function() {
				return t.M.run(f.animateCharacter("main", t.I, t.A.strokeFadeDuration, t.A.strokeAnimationSpeed, t.A.delayBetweenStrokes))
					.then(function(t) {
						return d(i.onComplete, t)
					})
			})
		}, g.prototype.animateStroke = function(t) {
			var i = this,
				n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			return this.cancelQuiz(), this.U(function() {
				return i.M.run(f.animateSingleStroke("main", i.I, t, i.A.strokeAnimationSpeed)).then(function(t) {
					return d(n.onComplete, t)
				})
			})
		}, g.prototype.loopCharacterAnimation = function() {
			var t = this;
			arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
			return this.cancelQuiz(), this.U(function() {
				return t.M.run(f.animateCharacterLoop("main", t.I, t.A.strokeFadeDuration, t.A.strokeAnimationSpeed, t.A.delayBetweenStrokes,
					t.A.delayBetweenLoops), {
					loop: !0
				})
			})
		}, g.prototype.showOutline = function() {
			var t = this,
				i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return this.A.showOutline = !0, this.U(function() {
				return t.M.run(f.showCharacter("outline", t.I, "number" == typeof i.duration ? i.duration : t.A.strokeFadeDuration))
					.then(function(t) {
						return d(i.onComplete, t)
					})
			})
		}, g.prototype.hideOutline = function() {
			var t = this,
				i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return this.A.showOutline = !1, this.U(function() {
				return t.M.run(f.hideCharacter("outline", t.I, "number" == typeof i.duration ? i.duration : t.A.strokeFadeDuration))
					.then(function(t) {
						return d(i.onComplete, t)
					})
			})
		}, g.prototype.updateColor = function(t, i) {
			var n = this,
				r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
			return this.U(function() {
				var o = "number" == typeof r.duration ? r.duration : n.A.strokeFadeDuration,
					s = i;
				"radicalColor" !== t || i || (s = n.A.strokeColor);
				var e = y(s);
				n.A[t] = i;
				var u = f.updateColor(t, e, o);
				return "radicalColor" !== t || i || (u = u.concat(f.updateColor(t, null, 0))), n.M.run(u).then(function(t) {
					return d(r.onComplete, t)
				})
			})
		}, g.prototype.quiz = function() {
			var t = this,
				i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			this.U(function() {
				t.cancelQuiz(), t.L = new u(t.I, t.M, t.T), t.L.startQuiz(l({}, t.A, i))
			})
		}, g.prototype.cancelQuiz = function() {
			this.L && (this.L.cancel(), this.L = null)
		}, g.prototype.setCharacter = function(t) {
			var i = this;
			return this.cancelQuiz(), this.W = t, this._ && this._.destroy(), this.M && this.M.cancelAll(), this._ = null,
				this.z = this.H.loadCharData(t).then(function(n) {
					if (!i.H.loadingFailed) {
						var u = new s;
						i.I = u.generateCharacter(t, n), i.T = new e(i.A);
						var h = new r(i.I, i.T);
						i._ = h, i.M = new o(i.I, i.A, function(t) {
							h.render(t)
						}), i._.mount(i.G, i.M.state), i._.render(i.M.state)
					}
				}), this.z
		}, g.prototype.D = function(t, i) {
			return this.G = h.Canvas.init(t, i.width, i.height), this.G.svg.createSVGPoint && (this.N = this.G.svg.createSVGPoint()),
				this.A = this.R(i), this.H = new c(this.A), this.q(), this.L = null, this
		}, g.prototype.R = function(t) {
			var i = l({}, w, t);
			return t.strokeAnimationDuration && !t.strokeAnimationSpeed && (i.strokeAnimationSpeed = 500 / i.strokeAnimationDuration),
				t.strokeHighlightDuration && !t.strokeHighlightSpeed && (i.strokeHighlightSpeed = 500 / i.strokeHighlightDuration),
				t.highlightCompleteColor || (i.highlightCompleteColor = i.highlightColor), this.B(i)
		}, g.prototype.B = function(t) {
			var i = l({}, t);
			if (i.width && !i.height) i.height = i.width;
			else if (i.height && !i.width) i.width = i.height;
			else if (!i.width && !i.height) {
				var n = this.G.svg.getBoundingClientRect(),
					r = n.width,
					o = n.height,
					s = Math.min(r, o);
				i.width = s, i.height = s
			}
			return i
		}, g.prototype.U = function(t) {
			var i = this;
			if (this.H.loadingFailed) throw Error("Failed to load character data. Call setCharacter and try again.");
			return this.z.then(function() {
				if (!i.H.loadingFailed) return t()
			})
		}, g.prototype.q = function() {
			var t = this;
			this.G.svg.addEventListener("mousedown", function(i) {
				!t.isLoadingCharData && t.L && (i.preventDefault(), t.V("startUserStroke", t.$(i)))
			}), this.G.svg.addEventListener("touchstart", function(i) {
				!t.isLoadingCharData && t.L && (i.preventDefault(), t.V("startUserStroke", t.J(i)))
			}), this.G.svg.addEventListener("mousemove", function(i) {
				!t.isLoadingCharData && t.L && (i.preventDefault(), t.V("continueUserStroke", t.$(i)))
			}), this.G.svg.addEventListener("touchmove", function(i) {
				!t.isLoadingCharData && t.L && (i.preventDefault(), t.V("continueUserStroke", t.J(i)))
			}), i.document.addEventListener("mouseup", function() {
				return t.V("endUserStroke")
			}), i.document.addEventListener("touchend", function() {
				return t.V("endUserStroke")
			})
		}, g.prototype.V = function(t) {
			var i;
			if (this.L) {
				for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
				(i = this.L)[t].apply(i, r)
			}
		}, g.prototype.$ = function(t) {
			if (this.N) {
				this.N.x = t.clientX, this.N.y = t.clientY;
				var i = this.N.matrixTransform(this.G.svg.getScreenCTM().inverse());
				return {
					x: i.x,
					y: i.y
				}
			}
			var n = this.G.svg.getBoundingClientRect();
			return {
				x: t.clientX - n.left,
				y: t.clientY - n.top
			}
		}, g.prototype.J = function(t) {
			if (this.N) {
				this.N.x = t.touches[0].clientX, this.N.y = t.touches[0].clientY;
				var i = this.N.matrixTransform(this.G.svg.getScreenCTM().inverse());
				return {
					x: i.x,
					y: i.y
				}
			}
			var n = this.G.svg.getBoundingClientRect();
			return {
				x: t.touches[0].clientX - n.left,
				y: t.touches[0].clientY - n.top
			}
		}, g.create = function(t, i) {
			var n = new g(t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {});
			return n.setCharacter(i), n
		};
		var m = null,
			k = null;
		if (g.loadCharacterData = function(t) {
				var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = void 0;
				return n = m && k === i ? m : new c(l({}, w, i)), m = n, k = i, n.loadCharData(t)
			}, g.getScalingTransform = function(t, i) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
					r = new e({
						width: t,
						height: i,
						padding: n
					});
				return {
					x: r.getXOffset(),
					y: r.getYOffset(),
					scale: r.getScale(),
					transform: p("\n      translate(" + r.getXOffset() + ", " + (r.getHeight() - r.getYOffset()) +
						")\n      scale(" + r.getScale() + ", " + -1 * r.getScale() + ")\n    ").replace(/\s+/g, " ")
				}
			}, void 0 !== i.window) {
			var b = i.window.HanziWriter;
			g.noConflict = function() {
				return i.window.HanziWriter = b, g
			}, i.window.HanziWriter = g
		}
		t.exports = g
	}).call(i, n(3))
}, function(t, i, n) {
	"use strict";
	var r = n(8),
		o = n(10),
		s = n(0).assign,
		e = n(1);

	function u(t, i) {
		this.I = t, this.T = i, this.Q = new r(t), this.Z = new r(t), this.K = new r(t), this.X = {}
	}
	u.prototype.mount = function(t) {
		var i = t.createSubCanvas(),
			n = i.svg;
		e.attr(n, "transform", "\n    translate(" + this.T.getXOffset() + ", " + (this.T.getHeight() - this.T.getYOffset()) +
				")\n    scale(" + this.T.getScale() + ", " + -1 * this.T.getScale() + ")\n  "), this.Z.mount(i), this.Q.mount(i),
			this.K.mount(i), this.Y = i
	}, u.prototype.render = function(t) {
		var i = this;
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
		var n = t.userStrokes || {};
		Object.keys(this.X).forEach(function(t) {
			n[t] || (i.X[t].destroy(), delete i.X[t])
		}), Object.keys(n).forEach(function(r) {
			if (n[r]) {
				var e = s({
						strokeWidth: t.options.drawingWidth,
						strokeColor: t.options.drawingColor
					}, n[r]),
					u = i.X[r];
				u || ((u = new o).mount(i.Y, e), i.X[r] = u), u.render(e)
			}
		})
	}, u.prototype.destroy = function() {
		e.removeElm(this.Y.svg), this.Y.defs.innerHTML = ""
	}, t.exports = u
}, function(t, i, n) {
	"use strict";
	var r = n(9);

	function o(t) {
		this.tt = {}, this.character = t, this.strokeRenderers = this.character.strokes.map(function(t) {
			return new r(t)
		})
	}
	o.prototype.mount = function(t) {
		var i = t.createSubCanvas();
		this.it = i.svg, this.strokeRenderers.forEach(function(t, n) {
			t.mount(i)
		})
	}, o.prototype.render = function(t) {
		if (t !== this.tt) {
			t.opacity !== this.tt.opacity && (this.it.style.opacity = t.opacity, 0 === t.opacity ? this.it.style.display =
				"none" : 0 === this.tt.opacity && (this.it.style.display = "initial"));
			var i = !this.tt || t.strokeColor !== this.tt.strokeColor || t.radicalColor !== this.tt.radicalColor;
			if (i || t.strokes !== this.tt.strokes)
				for (var n = 0; n < this.strokeRenderers.length; n++) !i && this.tt.strokes && t.strokes[n] === this.tt.strokes[
					n] || this.strokeRenderers[n].render({
					strokeColor: t.strokeColor,
					radicalColor: t.radicalColor,
					opacity: t.strokes[n].opacity,
					displayPortion: t.strokes[n].displayPortion
				});
			this.tt = t
		}
	}, t.exports = o
}, function(t, i, n) {
	"use strict";
	var r = n(0).counter,
		o = n(1),
		s = n(2),
		e = s.extendPointOnLine,
		u = s.filterParallelPoints,
		h = 200;

	function a(t) {
		this.tt = {}, this.nt = t, this.rt = t.getLength() + h / 2
	}
	a.prototype.mount = function(t) {
		this.ot = o.createElm("path"), this.st = o.createElm("clipPath"), this.et = o.createElm("path");
		var i = "mask-" + r();
		o.attr(this.st, "id", i), o.attr(this.et, "d", this.nt.path), this.ot.style.opacity = 0, o.attr(this.ot,
			"clip-path", "url(#" + i + ")");
		var n = function(t, i) {
			if (t.length < 2) return t;
			var n = t[1],
				r = t[0],
				o = e(n, r, i),
				s = t.slice(1);
			return s.unshift(o), s
		}(u(this.nt.points), h / 2);
		return o.attr(this.ot, "d", o.getPathString(n)), o.attrs(this.ot, {
			stroke: "#FFFFFF",
			"stroke-width": h,
			fill: "none",
			"stroke-linecap": "round",
			"stroke-linejoin": "miter",
			"stroke-dasharray": this.rt + "," + this.rt
		}), this.st.appendChild(this.et), t.defs.appendChild(this.st), t.svg.appendChild(this.ot), this
	}, a.prototype.render = function(t) {
		if (t !== this.tt) {
			t.displayPortion !== this.tt.displayPortion && (this.ot.style.strokeDashoffset = this.ut(t.displayPortion));
			var i = this.ht(t);
			if (i !== this.ht(this.tt)) {
				var n = i.r,
					r = i.g,
					s = i.b,
					e = i.a;
				o.attrs(this.ot, {
					stroke: "rgba(" + n + "," + r + "," + s + "," + e + ")"
				})
			}
			t.opacity !== this.tt.opacity && (this.ot.style.opacity = t.opacity), this.tt = t
		}
	}, a.prototype.ut = function(t) {
		return .999 * this.rt * (1 - t)
	}, a.prototype.ht = function(t) {
		var i = t.strokeColor,
			n = t.radicalColor;
		return n && this.nt.isInRadical ? n : i
	}, t.exports = a
}, function(t, i, n) {
	"use strict";
	var r = n(1);

	function o() {
		this.tt = {}
	}
	o.prototype.mount = function(t) {
		this.at = r.createElm("path"), t.svg.appendChild(this.at)
	}, o.prototype.render = function(t) {
		if (t !== this.tt) {
			if (t.strokeColor !== this.tt.strokeColor || t.strokeWidth !== this.tt.strokeWidth) {
				var i = t.strokeColor,
					n = i.r,
					o = i.g,
					s = i.b,
					e = i.a;
				r.attrs(this.at, {
					fill: "none",
					stroke: "rgba(" + n + "," + o + "," + s + "," + e + ")",
					"stroke-width": t.strokeWidth,
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				})
			}
			t.opacity !== this.tt.opacity && r.attr(this.at, "opacity", t.opacity), t.points !== this.tt.points && r.attr(
				this.at, "d", r.getPathString(t.points)), this.tt = t
		}
	}, o.prototype.destroy = function() {
		r.removeElm(this.at)
	}, t.exports = o
}, function(t, i, n) {
	"use strict";
	var r = n(0),
		o = r.copyAndMergeDeep,
		s = r.colorStringToVals;

	function e(t, i, n) {
		this.ct = n, this.ft = [], this.state = {
			options: {
				drawingFadeDuration: i.drawingFadeDuration,
				drawingWidth: i.drawingWidth,
				drawingColor: s(i.drawingColor),
				strokeColor: s(i.strokeColor),
				outlineColor: s(i.outlineColor),
				radicalColor: s(i.radicalColor || i.strokeColor),
				highlightColor: s(i.highlightColor)
			},
			character: {
				main: {
					opacity: i.showCharacter ? 1 : 0,
					strokes: {}
				},
				outline: {
					opacity: i.showOutline ? 1 : 0,
					strokes: {}
				},
				highlight: {
					opacity: 1,
					strokes: {}
				}
			},
			userStrokes: null
		};
		for (var r = 0; r < t.strokes.length; r++) this.state.character.main.strokes[r] = {
			opacity: 1,
			displayPortion: 1
		}, this.state.character.outline.strokes[r] = {
			opacity: 1,
			displayPortion: 1
		}, this.state.character.highlight.strokes[r] = {
			opacity: 0,
			displayPortion: 1
		}
	}
	e.prototype.updateState = function(t) {
		var i = o(this.state, t);
		this.ct(i, this.state), this.state = i
	}, e.prototype.run = function(t) {
		var i = this,
			n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			r = t.map(function(t) {
				return t.scope
			}).filter(function(t) {
				return t
			});
		return this.cancelMutations(r), new Promise(function(o) {
			var s = {
				vt: !0,
				lt: 0,
				F: o,
				dt: t,
				pt: n.loop,
				yt: r
			};
			i.ft.push(s), i.wt(s)
		})
	}, e.prototype.wt = function(t) {
		var i = this;
		if (t.vt) {
			var n = t.dt;
			if (t.lt >= n.length) {
				if (!t.pt) return t.vt = !1, this.ft = this.ft.filter(function(i) {
					return i !== t
				}), void t.F({
					canceled: !1
				});
				t.lt = 0
			}
			t.dt[t.lt].run(this).then(function() {
				t.vt && (t.lt++, i.wt(t))
			})
		}
	}, e.prototype.cancelMutations = function(t) {
		var i = this;
		this.ft.forEach(function(n) {
			n.yt.forEach(function(r) {
				t.forEach(function(t) {
					(r.indexOf(t) >= 0 || t.indexOf(r) >= 0) && i.gt(n)
				})
			})
		})
	}, e.prototype.cancelAll = function() {
		this.cancelMutations([""])
	}, e.prototype.gt = function(t) {
		t.vt = !1;
		for (var i = t.lt; i < t.dt.length; i++) t.dt[i].cancel(this);
		t.F && t.F({
			canceled: !0
		}), this.ft = this.ft.filter(function(i) {
			return i !== t
		})
	}, t.exports = e
}, function(t, i, n) {
	"use strict";
	var r = function() {
			return function(t, i) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t)) return function(t, i) {
					var n = [],
						r = !0,
						o = !1,
						s = void 0;
					try {
						for (var e, u = t[Symbol.iterator](); !(r = (e = u.next()).done) && (n.push(e.value), !i || n.length !== i); r = !
							0);
					} catch (t) {
						o = !0, s = t
					} finally {
						try {
							!r && u.return && u.return()
						} finally {
							if (o) throw s
						}
					}
					return n
				}(t, i);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		o = n(13),
		s = n(14);

	function e() {}
	e.prototype.generateCharacter = function(t, i) {
		var n = this.generateStrokes(i);
		return new s(t, n)
	}, e.prototype.generateStrokes = function(t) {
		return t.strokes.map(function(i, n) {
			var s, e = t.medians[n].map(function(t) {
				var i = r(t, 2);
				return {
					x: i[0],
					y: i[1]
				}
			});
			return new o(i, e, n, (s = n, t.radStrokes && t.radStrokes.indexOf(s) >= 0))
		})
	}, t.exports = e
}, function(t, i, n) {
	"use strict";
	var r = n(2),
		o = r.subtract,
		s = r.distance,
		e = r.length;

	function u(t, i, n) {
		var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
		this.path = t, this.points = i, this.strokeNum = n, this.isInRadical = r
	}
	u.prototype.getStartingPoint = function() {
		return this.points[0]
	}, u.prototype.getEndingPoint = function() {
		return this.points[this.points.length - 1]
	}, u.prototype.getLength = function() {
		return e(this.points)
	}, u.prototype.getVectors = function() {
		var t = this.points[0];
		return this.points.slice(1).map(function(i) {
			var n = o(i, t);
			return t = i, n
		})
	}, u.prototype.getDistance = function(t) {
		var i = this.points.map(function(i) {
			return s(i, t)
		});
		return Math.min.apply(Math, i)
	}, u.prototype.getAverageDistance = function(t) {
		var i = this;
		return t.reduce(function(t, n) {
			return t + i.getDistance(n)
		}, 0) / t.length
	}, t.exports = u
}, function(t, i, n) {
	"use strict";
	t.exports = function(t, i) {
		this.symbol = t, this.strokes = i
	}
}, function(t, i, n) {
	"use strict";
	var r = [{
		x: 0,
		y: -124
	}, {
		x: 1024,
		y: 900
	}];

	function o(t) {
		this.A = t, this.mt()
	}
	o.prototype.convertExternalPoint = function(t) {
		return {
			x: (t.x - this.kt) / this.bt,
			y: (this.getHeight() - this.Ct - t.y) / this.bt
		}
	}, o.prototype.getXOffset = function() {
		return this.kt
	}, o.prototype.getYOffset = function() {
		return this.Ct
	}, o.prototype.getScale = function() {
		return this.bt
	}, o.prototype.getHeight = function() {
		return this.A.height
	}, o.prototype.mt = function() {
		var t = r,
			i = t[1].x - t[0].x,
			n = t[1].y - t[0].y,
			o = this.A.width - 2 * this.A.padding,
			s = this.A.height - 2 * this.A.padding,
			e = o / i,
			u = s / n;
		this.bt = Math.min(e, u);
		var h = this.A.padding + (o - this.bt * i) / 2,
			a = this.A.padding + (s - this.bt * n) / 2;
		this.kt = -1 * t[0].x * this.bt + h, this.Ct = -1 * t[0].y * this.bt + a
	}, t.exports = o
}, function(t, i, n) {
	"use strict";
	var r = n(17),
		o = n(18),
		s = n(0),
		e = s.callIfExists,
		u = s.counter,
		h = n(19),
		a = n(1),
		c = n(2),
		f = n(4),
		v = function(t) {
			return {
				pathString: a.getPathString(t.externalPoints),
				points: t.points.map(function(t) {
					return c.round(t)
				})
			}
		};

	function l(t, i, n) {
		this.I = t, this.M = i, this.vt = !1, this.T = n
	}
	l.prototype.startQuiz = function(t) {
		this.vt = !0, this.A = t, this.Mt = 0, this.St = 0, this.Pt = 0, this.jt = [], this.M.run(h.startQuiz(this.I, t.strokeFadeDuration))
	}, l.prototype.startUserStroke = function(t) {
		var i = this.T.convertExternalPoint(t);
		if (!this.vt) return null;
		if (this.xt) return this.endUserStroke();
		var n = u();
		this.xt = new o(n, i, t), this.M.run(h.startUserStroke(n, i))
	}, l.prototype.continueUserStroke = function(t) {
		if (this.xt) {
			var i = this.T.convertExternalPoint(t);
			this.xt.appendPoint(i, t);
			var n = this.xt.points.slice(0);
			this.M.run(h.updateUserStroke(this.xt.id, n))
		}
	}, l.prototype.endUserStroke = function() {
		if (this.xt)
			if (this.M.run(h.removeUserStroke(this.xt.id, this.A.drawingFadeDuration)), 1 !== this.xt.points.length) {
				var t = this.Ft(),
					i = this.M.state.character.outline.opacity > 0;
				r(this.xt, this.I, this.Mt, {
					isOutlineVisible: i,
					leniency: this.A.leniency
				}) ? this.Ot(t) : (this.Dt(), this.St >= this.A.showHintAfterMisses && this.M.run(h.highlightStroke(t, this.A.highlightColor,
					this.A.strokeHighlightSpeed))), this.xt = null
			} else this.xt = null
	}, l.prototype.cancel = function() {
		this.vt = !1, this.xt && this.M.run(h.removeUserStroke(this.xt.id, this.A.drawingFadeDuration))
	}, l.prototype.Ot = function(t) {
		e(this.A.onCorrectStroke, {
			character: this.I.symbol,
			strokeNum: this.Mt,
			mistakesOnStroke: this.St,
			totalMistakes: this.Pt,
			strokesRemaining: this.I.strokes.length - this.Mt - 1,
			drawnPath: v(this.xt)
		});
		var i = f.showStroke("main", this.Mt, this.A.strokeFadeDuration);
		this.Mt += 1, this.St = 0, this.Mt === this.I.strokes.length && (this.vt = !1, e(this.A.onComplete, {
			character: this.I.symbol,
			totalMistakes: this.Pt
		}), this.A.highlightOnComplete && (i = i.concat(h.highlightCompleteChar(this.I, this.A.highlightCompleteColor, 2 *
			this.A.strokeHighlightDuration)))), this.M.run(i)
	}, l.prototype.Dt = function() {
		this.St += 1, this.Pt += 1, e(this.A.onMistake, {
			character: this.I.symbol,
			strokeNum: this.Mt,
			mistakesOnStroke: this.St,
			totalMistakes: this.Pt,
			strokesRemaining: this.I.strokes.length - this.Mt,
			drawnPath: v(this.xt)
		})
	}, l.prototype.Ft = function() {
		return this.I.strokes[this.Mt]
	}, t.exports = l
}, function(t, i, n) {
	"use strict";
	var r = n(0),
		o = r.average,
		s = r.assign,
		e = n(2),
		u = e.cosineSimilarity,
		h = e.equals,
		a = e.frechetDist,
		c = e.distance,
		f = e.subtract,
		v = e.normalizeCurve,
		l = e.rotate,
		d = e.length,
		p = function(t, i) {
			var n, r, s, e = (r = [], s = (n = t)[0], n.slice(1).forEach(function(t) {
					r.push(f(t, s)), s = t
				}), r),
				h = i.getVectors(),
				a = e.map(function(t) {
					var i = h.map(function(i) {
						return u(i, t)
					});
					return Math.max.apply(Math, i)
				});
			return o(a) > 0
		},
		y = [Math.PI / 16, Math.PI / 32, 0, -1 * Math.PI / 32, -1 * Math.PI / 16],
		w = function(t, i, n) {
			var r = n.leniency,
				o = void 0 === r ? 1 : r,
				s = n.isOutlineVisible,
				e = void 0 !== s && s,
				u = i.getAverageDistance(t),
				h = u <= 350 * (e || i.strokeNum > 0 ? .5 : 1) * o;
			if (!h) return {
				isMatch: !1,
				avgDist: u
			};
			var f, w, g, m, k, b, C, M, S, P, j, x, F = (f = t, g = o, m = c((w = i).getStartingPoint(), f[0]), k = c(w.getEndingPoint(),
					f[f.length - 1]), m <= 250 * g && k <= 250 * g),
				O = p(t, i),
				D = (b = t, C = i.points, M = o, S = v(b, 2), P = v(C, 2), j = 1 / 0, y.forEach(function(t) {
					var i = a(S, l(P, t));
					i < j && (j = i)
				}), j <= .4 * M),
				A = (x = i, o * (d(t) + 25) / (x.getLength() + 25) >= .35);
			return {
				isMatch: h && F && O && D && A,
				avgDist: u
			}
		};
	t.exports = function(t, i, n) {
		var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
			o = function(t) {
				if (t.length < 2) return t;
				var i = [t[0]];
				return t.slice(1).forEach(function(t) {
					h(t, i[i.length - 1]) || i.push(t)
				}), i
			}(t.points);
		if (o.length < 2) return null;
		var e = w(o, i.strokes[n], r);
		if (!e.isMatch) return !1;
		for (var u = i.strokes.slice(n + 1), a = e.avgDist, c = 0; c < u.length; c++) {
			var f = w(o, u[c], r);
			f.isMatch && f.avgDist < a && (a = f.avgDist)
		}
		if (a < e.avgDist) {
			var v = .6 * (a + e.avgDist) / (2 * e.avgDist),
				l = (r.leniency || 1) * v,
				d = s({}, r, {
					leniency: l
				});
			return w(o, i.strokes[n], d).isMatch
		}
		return !0
	}
}, function(t, i, n) {
	"use strict";

	function r(t, i, n) {
		this.id = t, this.points = [i], this.externalPoints = [n]
	}
	r.prototype.appendPoint = function(t, i) {
		this.points.push(t), this.externalPoints.push(i)
	}, t.exports = r
}, function(t, i, n) {
	"use strict";
	var r = n(5),
		o = n(4),
		s = n(0).objRepeat;
	t.exports = {
		highlightCompleteChar: function(t, i, n) {
			return [new r("character.highlight.strokeColor", i)].concat(o.hideCharacter("highlight", t)).concat(o.showCharacter(
				"highlight", t, n / 2)).concat(o.hideCharacter("highlight", t, n / 2))
		},
		highlightStroke: function(t, i, n) {
			var o, s, e, u = t.strokeNum,
				h = (t.getLength() + 600) / (3 * n);
			return [new r("character.highlight.strokeColor", i), new r("character.highlight", {
				opacity: 1,
				strokes: (o = {}, s = u, e = {
					displayPortion: 0,
					opacity: 0
				}, s in o ? Object.defineProperty(o, s, {
					value: e,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = e, o)
			}), new r("character.highlight.strokes." + u, {
				displayPortion: 1,
				opacity: 1
			}, {
				duration: h
			}), new r("character.highlight.strokes." + u + ".opacity", 0, {
				duration: h
			})]
		},
		startQuiz: function(t, i) {
			return o.hideCharacter("main", t, i).concat([new r("character.highlight", {
				opacity: 1,
				strokes: s({
					opacity: 0
				}, t.strokes.length)
			}, {
				force: !0
			}), new r("character.main", {
				opacity: 1,
				strokes: s({
					opacity: 0
				}, t.strokes.length)
			}, {
				force: !0
			})])
		},
		startUserStroke: function(t, i) {
			return [new r("quiz.activeUserStrokeId", t, {
				force: !0
			}), new r("userStrokes." + t, {
				points: [i],
				opacity: 1
			}, {
				force: !0
			})]
		},
		updateUserStroke: function(t, i) {
			return [new r("userStrokes." + t + ".points", i, {
				force: !0
			})]
		},
		removeUserStroke: function(t, i) {
			return [new r("userStrokes." + t + ".opacity", 0, {
				duration: i
			}), new r("userStrokes." + t, null, {
				force: !0
			})]
		}
	}
}, function(t, i, n) {
	"use strict";
	(function(i) {
		t.exports = function(t, n, r) {
			var o = new i.XMLHttpRequest;
			o.overrideMimeType && o.overrideMimeType("application/json"), o.open("GET",
				"https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/" + t + ".json", !0), o.onerror = function(t) {
				r(o, t)
			}, o.onreadystatechange = function() {
				4 === o.readyState && (200 === o.status ? n(JSON.parse(o.responseText)) : 0 !== o.status && r && r(o))
			}, o.send(null)
		}
	}).call(i, n(3))
}, function(t, i, n) {
	"use strict";
	var r = n(0).callIfExists;

	function o(t) {
		this.At = 0, this.A = t, this.Ut = !1, this.Et = null, this.loadingFailed = !1
	}
	o.prototype.It = function(t, i) {
		var n = this,
			r = function(t) {
				i === n.At && n.F(t)
			},
			o = this.A.charDataLoader(t, r, function(t) {
				i === n.At && n.Lt(t)
			});
		o && r(o)
	}, o.prototype.Tt = function() {
		var t = this;
		this.Et = new Promise(function(i, n) {
			t.F = i, t.Lt = n
		}).then(function(i) {
			return t.Ut = !1, r(t.A.onLoadCharDataSuccess, i), i
		}, function(i) {
			if (t.Ut = !1, t.loadingFailed = !0, r(t.A.onLoadCharDataError, i), !t.A.onLoadCharDataError) {
				if (i instanceof Error) throw i;
				var n = new Error("Failed to load char data for " + t.Wt);
				throw n.reason = i, n
			}
		})
	}, o.prototype.loadCharData = function(t) {
		return this.Wt = t, this.Ut || this.Tt(), this.loadingFailed = !1, this.Ut = !0, this.At++, this.It(t, this.At),
			this.Et
	}, t.exports = o
}]);
