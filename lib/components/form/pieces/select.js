'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loadStatus = require('../../utilities/load-status.js');

var _loadStatus2 = _interopRequireDefault(_loadStatus);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var list = this.props.options.map(function (item, i) {
        return _react2.default.createElement(
          'option',
          { key: i, value: _this2.props.valueProperty ? _this2.props.valueProperty : item.value },
          _this2.props.displayProperty ? item[_this2.props.displayProperty] : item.display
        );
      });
      if (this.props.emptyValue) {
        list.unshift(_react2.default.createElement(
          'option',
          { key: 'default', disabled: true },
          this.props.emptyValue
        ));
      }
      return _react2.default.createElement(
        'div',
        { className: 'dropdown-list', style: { position: 'relative' } },
        _react2.default.createElement(
          'select',
          {
            ref: this.props.id,
            type: 'text',
            className: 'dropdown-list-select form-control',
            id: this.props.id,
            name: this.props.id,
            onChange: this.props.onChange,
            value: this.props.value,
            required: this.props.required,
            style: { position: 'relative' },
            disabled: this.props.disabled,
            multiple: this.props.multiselect
          },
          list
        ),
        this.props.multiselect ? '' : _react2.default.createElement(
          'div',
          {
            className: 'dropdown-list-icon text-center',
            style: {
              position: 'absolute',
              margin: 'auto',
              fontSize: '1.25em',
              height: '1.25em',
              width: '2em',
              top: '-0.4em', right: '0.5em', bottom: 0
            }
          },
          this.props.loading ? _react2.default.createElement(_loadStatus2.default, { spins: true, color: 'rgba(51, 51, 51, 0.5)' }) : ''
        ),
        !this.props.error ? '' : _react2.default.createElement(
          'span',
          { className: 'text-left' },
          _react2.default.createElement(
            'small',
            null,
            _react2.default.createElement(
              'strong',
              null,
              'Error (' + this.props.error.code + ')',
              _react2.default.createElement(
                'small',
                null,
                this.props.error.origin
              ),
              this.props.error.message
            )
          )
        )
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.propTypes = {
  options: _propTypes2.default.array,
  emptyValue: _propTypes2.default.string,
  valueProperty: _propTypes2.default.string,
  displayProperty: _propTypes2.default.string,
  id: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  error: _propTypes2.default.object,
  multiselect: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  loading: _propTypes2.default.bool
};

Select.defaultProps = {
  options: [],
  multiselect: false,
  required: false,
  disabled: false,
  loading: false
};

exports.default = Select;
module.exports = exports['default'];
//# sourceMappingURL=select.js.map
