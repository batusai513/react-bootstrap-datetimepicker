"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _DateTimePickerDate = require("./DateTimePickerDate.js");

var _DateTimePickerDate2 = _interopRequireDefault(_DateTimePickerDate);

var _DateTimePickerTime = require("./DateTimePickerTime.js");

var _DateTimePickerTime2 = _interopRequireDefault(_DateTimePickerTime);

var _Constants = require("./Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePicker = function (_Component) {
  _inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DateTimePicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.renderDatePicker = function () {
      if (_this.props.showDatePicker) {
        return _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(_DateTimePickerDate2.default, {
            addDecade: _this.props.addDecade,
            addMonth: _this.props.addMonth,
            addYear: _this.props.addYear,
            daysOfWeekDisabled: _this.props.daysOfWeekDisabled,
            maxDate: _this.props.maxDate,
            minDate: _this.props.minDate,
            selectedDate: _this.props.selectedDate,
            setSelectedDate: _this.props.setSelectedDate,
            setViewMonth: _this.props.setViewMonth,
            setViewYear: _this.props.setViewYear,
            showToday: _this.props.showToday,
            subtractDecade: _this.props.subtractDecade,
            subtractMonth: _this.props.subtractMonth,
            subtractYear: _this.props.subtractYear,
            viewDate: _this.props.viewDate,
            viewMode: _this.props.viewMode
          })
        );
      }
    }, _this.renderTimePicker = function () {
      if (_this.props.showTimePicker) {
        return _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(_DateTimePickerTime2.default, {
            addHour: _this.props.addHour,
            addMinute: _this.props.addMinute,
            mode: _this.props.mode,
            selectedDate: _this.props.selectedDate,
            setSelectedHour: _this.props.setSelectedHour,
            setSelectedMinute: _this.props.setSelectedMinute,
            subtractHour: _this.props.subtractHour,
            subtractMinute: _this.props.subtractMinute,
            togglePeriod: _this.props.togglePeriod,
            viewDate: _this.props.viewDate
          })
        );
      }
    }, _this.renderSwitchButton = function () {
      return _this.props.mode === _Constants2.default.MODE_DATETIME ? _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          "span",
          { className: "btn picker-switch", onClick: _this.props.togglePicker, style: { width: "100%" } },
          _react2.default.createElement("span", { className: (0, _classnames2.default)("glyphicon", _this.props.showTimePicker ? "glyphicon-calendar" : "glyphicon-time") })
        )
      ) : null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePicker, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)(this.props.widgetClasses), style: this.props.widgetStyle },
        _react2.default.createElement(
          "ul",
          { className: "list-unstyled" },
          this.renderDatePicker(),
          this.renderSwitchButton(),
          this.renderTimePicker()
        )
      );
    }
  }]);

  return DateTimePicker;
}(_react.Component);

DateTimePicker.propTypes = {
  showDatePicker: _react.PropTypes.bool,
  showTimePicker: _react.PropTypes.bool,
  subtractMonth: _react.PropTypes.func.isRequired,
  addMonth: _react.PropTypes.func.isRequired,
  viewDate: _react.PropTypes.object.isRequired,
  selectedDate: _react.PropTypes.object.isRequired,
  showToday: _react.PropTypes.bool,
  viewMode: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  mode: _react.PropTypes.oneOf([_Constants2.default.MODE_DATE, _Constants2.default.MODE_DATETIME, _Constants2.default.MODE_TIME]),
  daysOfWeekDisabled: _react.PropTypes.array,
  setSelectedDate: _react.PropTypes.func.isRequired,
  subtractYear: _react.PropTypes.func.isRequired,
  addYear: _react.PropTypes.func.isRequired,
  setViewMonth: _react.PropTypes.func.isRequired,
  setViewYear: _react.PropTypes.func.isRequired,
  subtractHour: _react.PropTypes.func.isRequired,
  addHour: _react.PropTypes.func.isRequired,
  subtractMinute: _react.PropTypes.func.isRequired,
  addMinute: _react.PropTypes.func.isRequired,
  addDecade: _react.PropTypes.func.isRequired,
  subtractDecade: _react.PropTypes.func.isRequired,
  togglePeriod: _react.PropTypes.func.isRequired,
  minDate: _react.PropTypes.object,
  maxDate: _react.PropTypes.object,
  widgetClasses: _react.PropTypes.object,
  widgetStyle: _react.PropTypes.object,
  togglePicker: _react.PropTypes.func,
  setSelectedHour: _react.PropTypes.func,
  setSelectedMinute: _react.PropTypes.func
};
exports.default = DateTimePicker;