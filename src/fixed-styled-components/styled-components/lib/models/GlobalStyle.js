'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PropTypes = require('prop-types');

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parse = require('../vendor/postcss-safe-parser/parse');

var _parse2 = _interopRequireDefault(_parse);

var _postcssNested = require('../vendor/postcss-nested');

var _postcssNested2 = _interopRequireDefault(_postcssNested);

var _flatten = require('../utils/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _StyleSheet = require('./StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var babelPluginFlowReactPropTypes_proptype_RuleSet = require('../types').babelPluginFlowReactPropTypes_proptype_RuleSet || PropTypes.any;

var ComponentStyle = function () {
  function ComponentStyle(rules, selector) {
    _classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.selector = selector;
  }

  _createClass(ComponentStyle, [{
    key: 'generateAndInject',
    value: function generateAndInject() {
      if (!_StyleSheet2.default.injected) _StyleSheet2.default.inject();
      var flatCSS = (0, _flatten2.default)(this.rules).join('');
      if (this.selector) {
        flatCSS = this.selector + ' {' + flatCSS + '\n}';
      }
      var root = (0, _parse2.default)(flatCSS);
      (0, _postcssNested2.default)(root);
      _StyleSheet2.default.insert(root.toResult().css, { global: true });
    }
  }]);

  return ComponentStyle;
}();

exports.default = ComponentStyle;
module.exports = exports['default'];
