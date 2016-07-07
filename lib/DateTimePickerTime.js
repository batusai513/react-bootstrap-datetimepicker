"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DateTimePickerMinutes = require("./DateTimePickerMinutes");

var _DateTimePickerMinutes2 = _interopRequireDefault(_DateTimePickerMinutes);

var _DateTimePickerHours = require("./DateTimePickerHours");

var _DateTimePickerHours2 = _interopRequireDefault(_DateTimePickerHours);

var _Constants = require("./Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePickerTime = function (_Component) {
  _inherits(DateTimePickerTime, _Component);

  function DateTimePickerTime() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePickerTime);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DateTimePickerTime)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      minutesDisplayed: false,
      hoursDisplayed: false
    }, _this.goBack = function () {
      return _this.setState({
        minutesDisplayed: false,
        hoursDisplayed: false
      });
    }, _this.showMinutes = function () {
      return _this.setState({
        minutesDisplayed: true
      });
    }, _this.showHours = function () {
      return _this.setState({
        hoursDisplayed: true
      });
    }, _this.renderMinutes = function () {
      if (_this.state.minutesDisplayed) {
        return _react2.default.createElement(_DateTimePickerMinutes2.default, _extends({}, _this.props, { onSwitch: _this.goBack }));
      } else {
        return null;
      }
    }, _this.renderHours = function () {
      if (_this.state.hoursDisplayed) {
        return _react2.default.createElement(_DateTimePickerHours2.default, _extends({}, _this.props, { onSwitch: _this.goBack }));
      } else {
        return null;
      }
    }, _this.renderPicker = function () {
      if (!_this.state.minutesDisplayed && !_this.state.hoursDisplayed) {
        return _react2.default.createElement(
          "div",
          { className: "timepicker-picker" },
          _react2.default.createElement(
            "table",
            { className: "table-condensed" },
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  null,
                  _react2.default.createElement(
                    "a",
                    { className: "btn", onClick: _this.props.addHour },
                    _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-up" })
                  )
                ),
                _react2.default.createElement("td", { className: "separator" }),
                _react2.default.createElement(
                  "td",
                  null,
                  _react2.default.createElement(
                    "a",
                    { className: "btn", onClick: _this.props.addMinute },
                    _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-up" })
                  )
                ),
                _react2.default.createElement("td", { className: "separator" })
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  null,
                  _react2.default.createElement(
                    "span",
                    { className: "timepicker-hour", onClick: _this.showHours },
                    _this.props.selectedDate.format("h")
                  )
                ),
                _react2.default.createElement(
                  "td",
                  { className: "separator" },
                  ":"
                ),
                _react2.default.createElement(
                  "td",
                  null,
                  _react2.default.createElement(
                    "span",
                    { className: "timepicker-minute", onClick: _this.showMinutes },
                    _this.props.selectedDate.format("mm")
                  )
                ),
                _react2.default.createElement("td", { className: "separator" }),
                _react2.default.createElement(
                  "td",
                  null,
                  _react2.default.createElement(
                    "button",
                    { className: "btn btn-primary", onClick: _this.props.togglePeriod, type: "button" },
                    _this.props.selectedDate.format("A")
                  )
                )
              ),
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "td",
                  null,
                  _react2.default.createElement(
                    "a",
                    { className: "btn", onClick: _this.props.subtractHour },
                    _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-down" })
                  )
                ),
                _react2.default.createElement("td", { className: "separator" }),
                _react2.default.createElement(
                  "td",
                  null,
                  _react2.default.createElement(
                    "a",
                    { className: "btn", onClick: _this.props.subtractMinute },
                    _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-down" })
                  )
                ),
                _react2.default.createElement("td", { className: "separator" })
              )
            )
          )
        );
      } else {
        return "";
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePickerTime, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "timepicker" },
        this.renderPicker(),
        this.renderHours(),
        this.renderMinutes()
      );
    }
  }]);

  return DateTimePickerTime;
}(_react.Component);

DateTimePickerTime.propTypes = {
  setSelectedHour: _react.PropTypes.func.isRequired,
  setSelectedMinute: _react.PropTypes.func.isRequired,
  subtractHour: _react.PropTypes.func.isRequired,
  addHour: _react.PropTypes.func.isRequired,
  subtractMinute: _react.PropTypes.func.isRequired,
  addMinute: _react.PropTypes.func.isRequired,
  viewDate: _react.PropTypes.object.isRequired,
  selectedDate: _react.PropTypes.object.isRequired,
  togglePeriod: _react.PropTypes.func.isRequired,
  mode: _react.PropTypes.oneOf([_Constants2.default.MODE_DATE, _Constants2.default.MODE_DATETIME, _Constants2.default.MODE_TIME])
};
exports.default = DateTimePickerTime;


module.exports = DateTimePickerTime;