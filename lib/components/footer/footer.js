'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'footer',
        { className: 'main-footer' },
        _react2.default.createElement(
          'div',
          { className: 'pull-right hidden-xs' },
          this.props.content,
          this.props.content && this.props.children ? ' ' : '',
          this.props.children
        ),
        _react2.default.createElement(
          'strong',
          null,
          'Copyright \xA9 ',
          this.props.copyright,
          '\xA0',
          _react2.default.createElement(
            'a',
            {
              href: this.props.link,
              onClick: this.props.onLinkClick ? function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this2.props.onLinkClick();
              } : function () {}
            },
            this.props.company
          ),
          '.'
        ),
        '\xA0',
        _react2.default.createElement(
          'em',
          null,
          'All rights reserved.'
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

Footer.propTypes = {
  content: _propTypes2.default.string,
  copyright: _propTypes2.default.string,
  link: _propTypes2.default.string,
  onLinkClick: _propTypes2.default.func,
  company: _propTypes2.default.string
};
Footer.defaultProps = {
  content: '',
  copyright: '',
  company: ''
};

exports.default = Footer;
module.exports = exports['default'];
//# sourceMappingURL=footer.js.map
