'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skins = function (_React$Component) {
  (0, _inherits3.default)(Skins, _React$Component);

  function Skins(props) {
    (0, _classCallCheck3.default)(this, Skins);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Skins.__proto__ || (0, _getPrototypeOf2.default)(Skins)).call(this, props));

    _this.state = {
      opened: false
    };
    return _this;
  }

  (0, _createClass3.default)(Skins, [{
    key: 'handleClick',
    value: function handleClick(skin) {
      var onChange = this.props.onChange;


      if (!this.state.opened) {
        this.setState({ opened: true });
      } else {
        this.setState({ opened: false });
        if (skin != this.props.skin) {
          onChange(skin);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var skin = this.props.skin;
      var opened = this.state.opened;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'emoji-mart-skin-swatches ' + (opened ? 'emoji-mart-skin-swatches-opened' : '') },
          [].concat((0, _toConsumableArray3.default)(Array(6))).map(function (_, i) {
            var skinTone = i + 1,
                selected = skinTone == skin;

            return _react2.default.createElement(
              'span',
              { key: 'skin-tone-' + skinTone, className: 'emoji-mart-skin-swatch ' + (selected ? 'emoji-mart-skin-swatch-selected' : '') },
              _react2.default.createElement('span', {
                onClick: function onClick() {
                  return _this2.handleClick(skinTone);
                },
                className: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone })
            );
          })
        )
      );
    }
  }]);
  return Skins;
}(_react2.default.Component);

exports.default = Skins;


Skins.defaultProps = {
  onChange: function onChange() {}
};