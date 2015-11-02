/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	var more = __webpack_require__(7);
	var el = document.querySelector('ul');
	var times = 0;
	more(el, function(done) {
	  times++;
	  if (times == 3) return done(true);
	  setTimeout(function() {
	    for (var i = 0; i < 5; i++) {
	      var li = document.createElement('li');
	      li.innerHTML = i + 1;
	      el.appendChild(li);
	    }
	    done();
	  }, 1000);
	})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./more.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./more.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".more-loading {\n  margin: 10px 0;\n  padding: 0 10px;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: sans-serif;\n  text-align: center;\n  color: #999;\n  display: none;\n  height: 22px;\n}\n\n.more-loading .more-refresh {\n  background: url(" + __webpack_require__(4) + ") no-repeat;\n  height: 14px;\n  width: 14px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.more-loading .more-spin {\n  -webkit-animation: more-spin 2s infinite linear;\n  animation: more-spin 2s infinite linear;\n  display: inline-block;\n}\n\n@media all and (-webkit-min-device-pixel-ratio: 1.5) {\n  .more-loading .more-refresh {\n    background: url(" + __webpack_require__(5) + ") no-repeat;\n    -webkit-background-size: contain;\n    background-size: contain;\n  }\n}\n\n@keyframes more-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAD5SURBVBjTXcg9K4VhAADQ816Pz+5AkpQFSUr+gEJZDTbl/oA3E5OUyWCwmD1YMEgZDDYlw5WJshgw0BW3i8GifL1sxBlPApFEs37datw4VWPciqeESJ0xk3p9IVHyKmfUY4g0mDHtwqJz70ZMqXcCAQXTdswrodmYB9UqMpLYadeDgnIqUqsFvHmUBUPaLSlDyqtbP4IeH85If08kb9BtsOfStf86LNsMaVHx70fok1cKkSptavHhznsKTSZUHObQZN2RfQVVRBrNGrbqIiCnRat7FZ1y+hQM27AmC0i8ONBqQeZLtbI5655TAZ+2bMsb0OXTlWPXshTfSUZN5aSoWFkAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAxNC40LjI5PmtDvAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNC0wNS0yMFQxOToyOTozNSswODowMGuOqIwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMDUtMjBUMTU6NDI6NTArMDg6MDAEa75fAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAABJRU5ErkJggg=="

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABd0RVh0Q3JlYXRpb24gVGltZQAyMDE0LjQuMjk+a0O8AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAAmVJREFUSIm91k+oVVUUx/HPUSkos1KEwAeVoxAzSiWpgWDQJEFJbFIOGq0nOlSTHIgOH0k2ibeaNXpIVIhSwYMXkYlFNIpykqgUDnQiamKop8E5F/f7c/88ercfbFj89t7ru7l3nb22uq4NQ5n5eGYeaWOZqa5rSwbZPD4+XlVVtQGbsBZPtuMaLuInTEXE9RYwgq9wHYfLXD2BmbkUu7EHT/c5153MPIkv8AFGcGbmoq7AzHwNn2JVH1BHD+OtdnTVLGD7872Po1hUTN3EJH7BFdzBCqzB63hmkFPNAlZVNYZ9hXWjhY9HxM25kmTmC/gBj84LmJnvzoCdxa6IuNAtQWZu0hRIX9g0YGY+i4+KuSlsjYjbPWBbcBJLB4FNA+IYHmvjy3izFwwiYqrYM5AWtSddjW2Fv7vzTS20OlW4s4h/q+v662HASuCWwpsYHR0dzn1XANcV3tlhwXhQNCsK76+FSp6ZT+BgYR3sAH/GQ228kMWyHO/NAkbEKwsIKfVUEV9l+l05DL1UxBf+D+COIv5+qMDMXI/NhTXBHN0iM5dhcY9ctyLinz6wxUhUrXVO09bmbMBn8HyXXN9hK3oCNR1/fRvfV3Sggd40rSaxPSL+7rYgM5fgQ+wt7OOaXjkv4CS29WlVL+JjzUOro1M4UK4bFPgqPsnMb/A7/tT8zyN4Gds193FV7PlW07zvZea8gY/gnXb0012M4XBE3J052Qt4Ap9jPzYOALqP0zgUEb92W9QNeAJvR8Q9fJaZz+ENzXe1Gis1lXoFf+BHfBkRl/qdai7gBMZaGIiI8ziveYb8J/0LrZ6vNaZkKKgAAAAASUVORK5CYII="

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var domify = __webpack_require__(8)
	var debounce = __webpack_require__(9)
	var template = __webpack_require__(11)

	function More(el, fn, scrollable) {
	  if (!(this instanceof More)) return new More(el, fn, scrollable)
	  this.el = el
	  this.callback = fn
	  this.div = domify(template)
	  insertAfter(this.el, this.div)
	  scrollable = scrollable || el.parentNode
	  this.onscroll()
	  var self = this
	  scrollable.addEventListener('scroll', debounce(function () {
	    self.onscroll()
	  }), false)
	}

	More.prototype.onscroll = function () {
	  if (this.loading || this._disabled) return
	  if (!check(this.el)) return
	  this.div.style.display = 'block'
	  // var h = computedStyle(this.el, 'height')
	  this.loading = true
	  var self = this
	  this.callback(function (disable) {
	    if (disable) self.disable()
	    self.loading = false
	    self.div.style.display = 'none'
	  })
	}

	More.prototype.disable = function () {
	  this._disabled = true
	}

	More.prototype.text = function (text) {
	  this.div.querySelector('span').innerHTML = text
	}

	/**
	 * check el is visible on viewport
	 */
	function check(el) {
	  var vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	  var bottom = el.getBoundingClientRect().bottom
	  return bottom < vh
	}

	function insertAfter(referenceNode, newNode) {
	  var next = referenceNode.nextSibling
	  if (next) {
	    referenceNode.parentNode.insertBefore(newNode, next)
	  } else {
	    referenceNode.parentNode.appendChild(newNode)
	  }
	}

	module.exports = More


/***/ },
/* 8 */
/***/ function(module, exports) {

	
	/**
	 * Expose `parse`.
	 */

	module.exports = parse;

	/**
	 * Tests for browser support.
	 */

	var innerHTMLBug = false;
	var bugTestDiv;
	if (typeof document !== 'undefined') {
	  bugTestDiv = document.createElement('div');
	  // Setup
	  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
	  // Make sure that link elements get serialized correctly by innerHTML
	  // This requires a wrapper element in IE
	  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
	  bugTestDiv = undefined;
	}

	/**
	 * Wrap map from jquery.
	 */

	var map = {
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  // for script/link/style tags to work in IE6-8, you have to wrap
	  // in a div with a non-whitespace character in front, ha!
	  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
	};

	map.td =
	map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

	map.option =
	map.optgroup = [1, '<select multiple="multiple">', '</select>'];

	map.thead =
	map.tbody =
	map.colgroup =
	map.caption =
	map.tfoot = [1, '<table>', '</table>'];

	map.polyline =
	map.ellipse =
	map.polygon =
	map.circle =
	map.text =
	map.line =
	map.path =
	map.rect =
	map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

	/**
	 * Parse `html` and return a DOM Node instance, which could be a TextNode,
	 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
	 * instance, depending on the contents of the `html` string.
	 *
	 * @param {String} html - HTML string to "domify"
	 * @param {Document} doc - The `document` instance to create the Node for
	 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
	 * @api private
	 */

	function parse(html, doc) {
	  if ('string' != typeof html) throw new TypeError('String expected');

	  // default to the global `document` object
	  if (!doc) doc = document;

	  // tag name
	  var m = /<([\w:]+)/.exec(html);
	  if (!m) return doc.createTextNode(html);

	  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

	  var tag = m[1];

	  // body support
	  if (tag == 'body') {
	    var el = doc.createElement('html');
	    el.innerHTML = html;
	    return el.removeChild(el.lastChild);
	  }

	  // wrap map
	  var wrap = map[tag] || map._default;
	  var depth = wrap[0];
	  var prefix = wrap[1];
	  var suffix = wrap[2];
	  var el = doc.createElement('div');
	  el.innerHTML = prefix + html + suffix;
	  while (depth--) el = el.lastChild;

	  // one element
	  if (el.firstChild == el.lastChild) {
	    return el.removeChild(el.firstChild);
	  }

	  // several elements
	  var fragment = doc.createDocumentFragment();
	  while (el.firstChild) {
	    fragment.appendChild(el.removeChild(el.firstChild));
	  }

	  return fragment;
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * Module dependencies.
	 */

	var now = __webpack_require__(10);

	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * @source underscore.js
	 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
	 * @param {Function} function to wrap
	 * @param {Number} timeout in ms (`100`)
	 * @param {Boolean} whether to execute at the beginning (`false`)
	 * @api public
	 */

	module.exports = function debounce(func, wait, immediate){
	  var timeout, args, context, timestamp, result;
	  if (null == wait) wait = 100;

	  function later() {
	    var last = now() - timestamp;

	    if (last < wait && last > 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      }
	    }
	  };

	  return function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = now();
	    var callNow = immediate && !timeout;
	    if (!timeout) timeout = setTimeout(later, wait);
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }

	    return result;
	  };
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = Date.now || now

	function now() {
	    return new Date().getTime()
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div class=\"more-loading\">\n  <i class=\"more-refresh more-spin\"></i> <span>刷新中...</span>\n</div>\n";

/***/ }
/******/ ]);