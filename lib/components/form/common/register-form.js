'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loadStatus = require('../../utilities/load-status.js');

var _loadStatus2 = _interopRequireDefault(_loadStatus);

var _errorMessage = require('../../utilities/error-message.js');

var _errorMessage2 = _interopRequireDefault(_errorMessage);

var _checkbox = require('../pieces/checkbox.js');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterForm = function (_React$Component) {
  _inherits(RegisterForm, _React$Component);

  function RegisterForm(props) {
    _classCallCheck(this, RegisterForm);

    var _this = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this, props));

    _this.state = {
      name: '',
      username: '',
      password: '',
      agreement: false
    };
    _this.submitForm = _this.submitForm.bind(_this);
    _this.fillForm = _this.fillForm.bind(_this);
    _this.getBetterChildren = _this.getBetterChildren.bind(_this);
    return _this;
  }

  _createClass(RegisterForm, [{
    key: 'getBetterChildren',
    value: function getBetterChildren(children) {
      var _this2 = this;

      return _react2.default.Children.map(children, function (child) {
        if (child.props.children) {
          child = _react2.default.cloneElement(child, {
            children: _this2.getBetterChildren(child.props.children)
          });
        }
        if (['input', 'textarea', 'select', 'option', 'button', 'datalist', 'keygen', 'output'].indexOf(child.type) >= 0) {
          return _react2.default.cloneElement(child, {
            onChange: _this2.fillForm
          });
        } else {
          return child;
        }
      });
    }
  }, {
    key: 'submitForm',
    value: function submitForm(e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onSubmit(this.state);
    }
  }, {
    key: 'fillForm',
    value: function fillForm(e) {
      switch (e.currentTarget.id) {
        case 'username':
          this.setState({ username: e.currentTarget.value });
          break;
        case 'name':
          this.setState({ name: e.currentTarget.value });
          break;
        case 'password':
          this.setState({ password: e.currentTarget.value });
          break;
        case 'confirm-password':
          this.setState({ confirm_password: e.currentTarget.value });
          break;
        case 'agreement':
          this.setState({ agreement: e.currentTarget.checked });
          break;
        default:
          var newStateObj = {};
          newStateObj[e.currentTarget.id.replace('-', '_')] = e.currentTarget.type === 'checkbox' ? e.currentTarget.checked : e.currentTarget.value;
          this.setState(newStateObj);
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var error = this.props.error.message === null ? '' : _react2.default.createElement(_errorMessage2.default, { error: this.props.error, theme: this.props.errorTheme });
      return _react2.default.createElement(
        'div',
        { className: 'register-box' },
        _react2.default.createElement(
          'div',
          { className: 'register-logo' },
          _react2.default.createElement(
            'a',
            {
              href: this.props.logoLink,
              onClick: this.props.onLogoClick ? function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this3.props.onLogoClick();
              } : function () {}
            },
            this.props.clientLogo ? _react2.default.createElement('img', { src: this.props.clientLogo, alt: typeof this.props.clientName === 'string' ? this.props.clientName : 'Brand Logo', style: { width: '60%', height: 'auto' } }) : this.props.clientName
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'register-box-body', style: { position: 'relative' } },
          _react2.default.createElement(
            'div',
            null,
            error,
            _react2.default.createElement(
              'p',
              { className: 'register-box-msg' },
              this.props.headline,
              this.props.subheadline ? _react2.default.createElement(
                'small',
                null,
                _react2.default.createElement('br', null),
                this.props.subheadline
              ) : ''
            )
          ),
          _react2.default.createElement(
            'form',
            null,
            this.props.hideNameField ? '' : _react2.default.createElement(
              'div',
              { className: 'form-group has-feedback' },
              _react2.default.createElement('input', {
                id: 'name',
                name: 'name',
                type: 'text',
                className: 'form-control',
                placeholder: this.props.namePlaceholder,
                onChange: this.fillForm
              }),
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-user form-control-feedback' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group has-feedback' },
              _react2.default.createElement('input', {
                id: 'username',
                name: 'username',
                type: 'text',
                className: 'form-control',
                placeholder: this.props.userPlaceholder,
                onChange: this.fillForm
              }),
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-envelope form-control-feedback' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group has-feedback' },
              _react2.default.createElement('input', {
                id: 'password',
                name: 'password',
                type: 'password',
                className: 'form-control',
                placeholder: this.props.passPlaceholder,
                onChange: this.fillForm
              }),
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-lock form-control-feedback' })
            ),
            this.props.hasConfirmPass ? _react2.default.createElement(
              'div',
              { className: 'form-group has-feedback' },
              _react2.default.createElement('input', {
                id: 'confirm-password',
                name: 'confirm-password',
                type: 'password',
                className: 'form-control',
                placeholder: this.props.confirmPassPlaceholder,
                onChange: this.fillForm
              }),
              _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-in form-control-feedback' })
            ) : '',
            this.getBetterChildren(this.props.children),
            this.props.hasNoAgreement ? '' : _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-12' },
                _react2.default.createElement(_checkbox2.default, {
                  id: 'agreement',
                  label: this.props.agreementText,
                  onChange: this.fillForm,
                  checked: this.state.agreement
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                'div',
                { className: 'col-xs-offset-8 col-xs-4' },
                _react2.default.createElement(
                  'button',
                  {
                    type: 'submit',
                    className: 'btn btn-block btn-flat ' + this.props.submitTheme,
                    onClick: this.submitForm,
                    id: 'login-btn'
                  },
                  this.props.submitText
                )
              )
            )
          ),
          this.props.socials.length > 0 ? _react2.default.createElement(
            'div',
            { className: 'social-auth-links text-center' },
            _react2.default.createElement(
              'p',
              null,
              '- OR -'
            ),
            this.props.socials
          ) : '',
          this.props.registered ? _react2.default.createElement(
            'a',
            {
              className: 'text-center',
              href: this.props.registeredLink,
              onClick: this.props.onRegistered ? function (e) {
                e.preventDefault();
                e.stopPropagation();
                _this3.props.onRegistered();
              } : function () {}
            },
            this.props.registeredText
          ) : '',
          !this.props.loading ? '' : _react2.default.createElement(
            'div',
            {
              className: 'text-center align-middle overlay over-load',
              style: {
                position: 'absolute',
                backgroundColor: 'rgba(236, 240, 245, 0.25)',
                top: '0', right: '0', bottom: '0', left: '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }
            },
            _react2.default.createElement(_loadStatus2.default, { size: '5em', color: 'rgba(51, 51, 51, 0.3)', spins: true })
          )
        )
      );
    }
  }]);

  return RegisterForm;
}(_react2.default.Component);

RegisterForm.propTypes = {
  clientLogo: _propTypes2.default.string,
  clientName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  logoLink: _propTypes2.default.string,
  onLogoClick: _propTypes2.default.func,
  headline: _propTypes2.default.string,
  subheadline: _propTypes2.default.string,
  registered: _propTypes2.default.bool,
  socials: _propTypes2.default.array,
  registeredLink: _propTypes2.default.string,
  registeredText: _propTypes2.default.string,
  onRegistered: _propTypes2.default.func,
  submitTheme: _propTypes2.default.string,
  submitText: _propTypes2.default.string,
  userPlaceholder: _propTypes2.default.string,
  namePlaceholder: _propTypes2.default.string,
  passPlaceholder: _propTypes2.default.string,
  hasConfirmPass: _propTypes2.default.bool,
  confirmPassPlaceholder: _propTypes2.default.string,
  agreementText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  onSubmit: _propTypes2.default.func,
  loading: _propTypes2.default.bool,
  errorTheme: _propTypes2.default.string,
  error: _propTypes2.default.object,
  hideNameField: _propTypes2.default.bool,
  hasNoAgreement: _propTypes2.default.bool
};

RegisterForm.defaultProps = {
  clientLogo: '',
  clientName: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement(
      'b',
      null,
      'Admin'
    ),
    'LTE'
  ),
  headline: 'Register a new membership',
  subheadline: '',
  socials: [],
  registered: false,
  hasConfirmPass: false,
  registeredText: 'I already have a membership',
  submitTheme: 'btn-primary',
  submitText: 'Register',
  agreementText: 'I agree to the terms and policies',
  userPlaceholder: 'Username or Email',
  namePlaceholder: 'Full Name',
  passPlaceholder: 'Password',
  confirmPassPlaceholder: 'Confirm Password',
  onSubmit: function onSubmit() {},
  loading: false,
  errorTheme: 'alert-danger',
  error: {
    code: null,
    origin: null,
    message: null
  },
  hideNameField: false,
  hasNoAgreement: false
};

exports.default = RegisterForm;
module.exports = exports['default'];
//# sourceMappingURL=register-form.js.map
