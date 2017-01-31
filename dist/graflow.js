(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["graflow"] = factory();
	else
		root["graflow"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Component).default;
	  }
	});
	Object.defineProperty(exports, 'Component', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Component).default;
	  }
	});
	
	var _Mapper = __webpack_require__(2);
	
	Object.defineProperty(exports, 'Mapper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Mapper).default;
	  }
	});
	
	var _Filter = __webpack_require__(3);
	
	Object.defineProperty(exports, 'Filter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Filter).default;
	  }
	});
	
	var _Counter = __webpack_require__(4);
	
	Object.defineProperty(exports, 'Counter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Counter).default;
	  }
	});
	
	var _Accumulator = __webpack_require__(5);
	
	Object.defineProperty(exports, 'Accumulator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Accumulator).default;
	  }
	});
	
	var _Muxer = __webpack_require__(6);
	
	Object.defineProperty(exports, 'Muxer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Muxer).default;
	  }
	});
	
	var _Demuxer = __webpack_require__(7);
	
	Object.defineProperty(exports, 'Demuxer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Demuxer).default;
	  }
	});
	
	var _Iterator = __webpack_require__(8);
	
	Object.defineProperty(exports, 'Iterator', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Iterator).default;
	  }
	});
	
	var _Serializer = __webpack_require__(9);
	
	Object.defineProperty(exports, 'Serializer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Serializer).default;
	  }
	});
	
	var _Repeater = __webpack_require__(10);
	
	Object.defineProperty(exports, 'Repeater', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Repeater).default;
	  }
	});
	
	var _UniqueFilter = __webpack_require__(11);
	
	Object.defineProperty(exports, 'UniqueFilter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_UniqueFilter).default;
	  }
	});
	
	var _Debugger = __webpack_require__(12);
	
	Object.defineProperty(exports, 'Debugger', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Debugger).default;
	  }
	});
	
	var _Logger = __webpack_require__(13);
	
	Object.defineProperty(exports, 'Logger', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Logger).default;
	  }
	});
	
	var _Chain = __webpack_require__(14);
	
	Object.defineProperty(exports, 'Chain', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Chain).default;
	  }
	});
	
	var _Checker = __webpack_require__(15);
	
	Object.defineProperty(exports, 'Checker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Checker).default;
	  }
	});
	
	var _Guard = __webpack_require__(16);
	
	Object.defineProperty(exports, 'Guard', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Guard).default;
	  }
	});
	
	var _Identity = __webpack_require__(17);
	
	Object.defineProperty(exports, 'Identity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Identity).default;
	  }
	});
	
	var _Delayer = __webpack_require__(18);
	
	Object.defineProperty(exports, 'Delayer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Delayer).default;
	  }
	});
	
	var _Ticker = __webpack_require__(19);
	
	Object.defineProperty(exports, 'Ticker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Ticker).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var toComponent = function toComponent(arg) {
	  if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') return arg;
	  var node = toNode(arg);
	  return {
	    start: function start() {
	      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      return node.received(v);
	    },
	    inputs: { default: node },
	    outputs: { default: node },
	    in: { default: node },
	    out: { default: node }
	  };
	};
	
	var toNode = function toNode(arg) {
	  var result = arg;
	  if (typeof arg === 'function') {
	    result = node(arg);
	  }
	  return result;
	};
	
	var node = function node(onNext) {
	  var queue = [];
	  var listeners = [];
	  var next = function next(v) {
	    listeners.forEach(function (l) {
	      return l.addToQueue(v);
	    });
	    listeners.forEach(function (l) {
	      return l.processQueue();
	    });
	  };
	
	  var obj = {
	    addListener: function addListener(listener) {
	      listeners.push(toNode(listener));
	    },
	    on: function on(listener) {
	      obj.addListener(listener);
	    },
	    connect: function connect(listener) {
	      obj.addListener(listener);
	    },
	    addToQueue: function addToQueue(v) {
	      queue.push(v);
	    },
	    received: function received() {
	      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	      obj.addToQueue(v);
	      obj.processQueue();
	    },
	    send: function send() {
	      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      obj.received(v);
	    },
	    processQueue: function processQueue() {
	      var values = queue.length;
	      for (var i = 1; i <= values; i++) {
	        var v = queue.shift();
	        onNext(v, next);
	      }
	    }
	  };
	
	  return obj;
	};
	
	var select = function select(name, components) {
	  var io = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'input';
	
	  var direction = io === 'input' ? 'inputs' : 'outputs';
	
	  var _name$split = name.split('.', 2),
	      _name$split2 = _slicedToArray(_name$split, 2),
	      componentName = _name$split2[0],
	      streamName = _name$split2[1];
	
	  var ioStreams = void 0;
	  var component = components[componentName];
	
	  if (component !== undefined) {
	    ioStreams = component[direction];
	    if (ioStreams !== undefined && streamName === undefined) {
	      var ioNames = Object.keys(ioStreams);
	      if (ioNames.length === 1) streamName = ioNames[0];
	    }
	  }
	
	  if (ioStreams === undefined || ioStreams[streamName] === undefined) {
	    throw new Error(io + ' stream ' + name + ' not found!');
	  }
	
	  return ioStreams[streamName];
	};
	
	var component2 = function component2(_ref) {
	  var components = _ref.components,
	      _ref$connections = _ref.connections,
	      connections = _ref$connections === undefined ? [] : _ref$connections,
	      _ref$inputs = _ref.inputs,
	      inputs = _ref$inputs === undefined ? ['default'] : _ref$inputs,
	      _ref$outputs = _ref.outputs,
	      outputs = _ref$outputs === undefined ? ['default'] : _ref$outputs;
	
	  Object.keys(components).forEach(function (key) {
	    components[key] = toComponent(components[key]);
	  });
	
	  var inNodes = inputs.reduce(function (acc, i) {
	    acc[i] = node(function (v, next) {
	      return next(v);
	    });
	    return acc;
	  }, {});
	
	  var outNodes = outputs.reduce(function (acc, i) {
	    acc[i] = node(function (v, next) {
	      return next(v);
	    });
	    return acc;
	  }, {});
	
	  components.in = { inputs: inNodes, outputs: inNodes };
	  components.out = { inputs: outNodes, outputs: outNodes };
	
	  connections.forEach(function (_ref2) {
	    var _ref3 = _slicedToArray(_ref2, 2),
	        from = _ref3[0],
	        to = _ref3[1];
	
	    var streamOut = select(from, components, 'output');
	    var streamIn = select(to, components, 'input');
	
	    streamOut.addListener(streamIn);
	  });
	
	  var comp = {
	    start: function start() {
	      var initialValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { default: {} };
	
	      if ((typeof initialValues === 'undefined' ? 'undefined' : _typeof(initialValues)) !== 'object') {
	        initialValues = { default: initialValues };
	      }
	      for (var key in initialValues) {
	        comp.inputs[key].received(initialValues[key]);
	      }
	    },
	    inputs: inNodes,
	    outputs: outNodes,
	    in: inNodes,
	    out: outNodes
	  };
	
	  return comp;
	};
	
	var Component = function Component(arg) {
	  if (typeof arg === 'function') {
	    return toComponent(arg);
	  } else {
	    return component2(arg);
	  }
	};
	
	exports.default = Component;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Mapper = function Mapper(f) {
	  return (0, _Component2.default)(function (v, next) {
	    return next(f(v));
	  });
	};
	
	exports.default = Mapper;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Filter = function Filter(cond) {
	  return (0, _Component2.default)(function (v, next) {
	    if (cond(v)) next(v);
	  });
	};
	
	exports.default = Filter;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Counter = function Counter() {
	  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	  var value = initial;
	
	  return (0, _Component2.default)(function (v, next) {
	    value++;
	    next(value);
	  });
	};
	
	exports.default = Counter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Accumulator = function Accumulator() {
	  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var obj = initial;
	
	  return (0, _Component2.default)(function (v, next) {
	    if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) !== 'object') return;
	    Object.entries(v).forEach(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          k = _ref2[0],
	          v = _ref2[1];
	
	      obj[k] = v;
	    });
	    next(obj);
	  });
	};
	
	exports.default = Accumulator;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Mapper = __webpack_require__(2);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _Filter = __webpack_require__(3);
	
	var _Filter2 = _interopRequireDefault(_Filter);
	
	var _Accumulator = __webpack_require__(5);
	
	var _Accumulator2 = _interopRequireDefault(_Accumulator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Muxer = function Muxer() {
	  for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
	    inputs[_key] = arguments[_key];
	  }
	
	  var components = {};
	  var connections = [];
	
	  inputs.forEach(function (i) {
	    components[i] = (0, _Mapper2.default)(function (v) {
	      return _defineProperty({}, i, v);
	    });
	    connections.push(['in.' + i, i], [i, 'acc']);
	  });
	
	  components.acc = (0, _Accumulator2.default)();
	  components.filter = (0, _Filter2.default)(function (v) {
	    return inputs.every(function (i) {
	      return v[i] !== undefined;
	    });
	  });
	
	  connections.push(['acc', 'filter'], ['filter', 'out.default']);
	
	  return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs });
	};
	
	exports.default = Muxer;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var flatMap = function flatMap(v) {
	  return [].concat.apply([], v);
	};
	
	var Demuxer = function Demuxer() {
	  for (var _len = arguments.length, outputs = Array(_len), _key = 0; _key < _len; _key++) {
	    outputs[_key] = arguments[_key];
	  }
	
	  return (0, _Component2.default)({
	    components: outputs.reduce(function (acc, output) {
	      acc[output] = (0, _Component2.default)(function (v, next) {
	        if (v[output] !== undefined) next(v[output]);
	      });
	      return acc;
	    }, {}),
	    outputs: outputs,
	    connections: flatMap(outputs.map(function (out) {
	      return [['in.default', out], [out, 'out.' + out]];
	    }))
	  });
	};
	
	exports.default = Demuxer;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Iterator = function Iterator(iterable) {
	  var iterator = iterable[Symbol.iterator]();
	
	  return (0, _Component2.default)(function (v, next) {
	    var _iterator$next = iterator.next(),
	        value = _iterator$next.value,
	        done = _iterator$next.done;
	
	    if (!done) next(value);
	  });
	};
	
	exports.default = Iterator;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Serializer = function Serializer() {
	  return (0, _Component2.default)(function (iterable, next) {
	    if (iterable[Symbol.iterator]) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var i = _step.value;
	          next(i);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  });
	};
	
	exports.default = Serializer;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Repeater = function Repeater() {
	  var times = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	  return (0, _Component2.default)(function (v, next) {
	    for (var i = 1; i <= times; i++) {
	      next(v);
	    }
	  });
	};
	
	exports.default = Repeater;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UniqueFilter = function UniqueFilter(initialValue) {
	  var lastValue = initialValue;
	
	  return (0, _Component2.default)(function (v, next) {
	    if (v !== lastValue) {
	      lastValue = v;
	      next(v);
	    }
	  });
	};
	
	exports.default = UniqueFilter;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Debugger = function Debugger(msg) {
	  var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console.log;
	  return (0, _Component2.default)(function (v, next) {
	    log(msg, v);
	    next(v);
	  });
	};
	
	exports.default = Debugger;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Logger = function Logger() {
	  var log = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : console.log;
	  return (0, _Component2.default)(function (v) {
	    return log(v);
	  });
	};
	
	exports.default = Logger;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Chain = function Chain() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var lastIndex = args.length - 1;
	  var _ref = [args[0], args[lastIndex]],
	      first = _ref[0],
	      last = _ref[1];
	
	
	  var components = args.reduce(function (obj, v, i) {
	    return _extends({}, obj, _defineProperty({}, 'c' + i, v));
	  }, {});
	
	  var inputs = Object.keys(first.inputs);
	  var outputs = Object.keys(last.outputs);
	
	  var connections = [].concat(_toConsumableArray(Array(lastIndex).keys())).map(function (i) {
	    return ['c' + i, 'c' + (i + 1)];
	  }).concat(inputs.map(function (input) {
	    return ['in.' + input, 'c0.' + input];
	  })).concat(outputs.map(function (output) {
	    return ['c' + lastIndex + '.' + output, 'out.' + output];
	  }));
	
	  return (0, _Component2.default)({ components: components, connections: connections, inputs: inputs, outputs: outputs });
	};
	
	exports.default = Chain;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Chain = __webpack_require__(14);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Mapper = __webpack_require__(2);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	var _Demuxer = __webpack_require__(7);
	
	var _Demuxer2 = _interopRequireDefault(_Demuxer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Checker = function Checker(cond) {
	  return (0, _Chain2.default)((0, _Mapper2.default)(function (v) {
	    return cond(v) ? { true: v } : { false: v };
	  }), (0, _Demuxer2.default)('true', 'false'));
	};
	
	exports.default = Checker;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	var _Chain = __webpack_require__(14);
	
	var _Chain2 = _interopRequireDefault(_Chain);
	
	var _Demuxer = __webpack_require__(7);
	
	var _Demuxer2 = _interopRequireDefault(_Demuxer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Guard = function Guard(conds) {
	  return (0, _Chain2.default)((0, _Component2.default)(function (v, next) {
	    Object.entries(conds).forEach(function (_ref) {
	      var _ref2 = _slicedToArray(_ref, 2),
	          name = _ref2[0],
	          cond = _ref2[1];
	
	      var others = [];
	      var match = false;
	
	      if (cond === 'otherwise') {
	        others.push(name);
	      } else if (typeof cond === 'function' && cond(v)) {
	        next(_defineProperty({}, name, v));
	        match = true;
	      }
	
	      if (!match) others.forEach(function (name) {
	        return next(_defineProperty({}, name, v));
	      });
	    });
	  }), _Demuxer2.default.apply(undefined, _toConsumableArray(Object.keys(conds))));
	};
	
	exports.default = Guard;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Mapper = __webpack_require__(2);
	
	var _Mapper2 = _interopRequireDefault(_Mapper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Identity = function Identity() {
	  return (0, _Mapper2.default)(function (v) {
	    return v;
	  });
	};
	
	exports.default = Identity;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Delayer = function Delayer(ms) {
	  return (0, _Component2.default)(function (v, next) {
	    setTimeout(function () {
	      return next(v);
	    }, ms);
	  });
	};
	
	exports.default = Delayer;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Component = __webpack_require__(1);
	
	var _Component2 = _interopRequireDefault(_Component);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Ticker = function Ticker(ms) {
	  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  return (0, _Component2.default)(function (v, next) {
	    setInterval(function () {
	      return next(value);
	    }, ms);
	  });
	};
	
	exports.default = Ticker;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=graflow.js.map