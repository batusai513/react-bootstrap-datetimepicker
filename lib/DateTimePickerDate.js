"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _DateTimePickerDays = require("./DateTimePickerDays");

var _DateTimePickerDays2 = _interopRequireDefault(_DateTimePickerDays);

var _DateTimePickerMonths = require("./DateTimePickerMonths");

var _DateTimePickerMonths2 = _interopRequireDefault(_DateTimePickerMonths);

var _DateTimePickerYears = require("./DateTimePickerYears");

var _DateTimePickerYears2 = _interopRequireDefault(_DateTimePickerYears);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePickerDate = function (_Component) {
  _inherits(DateTimePickerDate, _Component);

  function DateTimePickerDate(props) {
    _classCallCheck(this, DateTimePickerDate);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateTimePickerDate).call(this, props));

    _this.showMonths = function () {
      return _this.setState({
        daysDisplayed: false,
        monthsDisplayed: true
      });
    };

    _this.showYears = function () {
      return _this.setState({
        monthsDisplayed: false,
        yearsDisplayed: true
      });
    };

    _this.setViewYear = function (e) {
      _this.props.setViewYear(e.target.innerHTML);
      return _this.setState({
        yearsDisplayed: false,
        monthsDisplayed: true
      });
    };

    _this.setViewMonth = function (e) {
      _this.props.setViewMonth(e.target.innerHTML);
      return _this.setState({
        monthsDisplayed: false,
        daysDisplayed: true
      });
    };

    _this.renderDays = function () {
      if (_this.state.daysDisplayed) {
        return _react2.default.createElement(_DateTimePickerDays2.default, {
          addMonth: _this.props.addMonth,
          daysOfWeekDisabled: _this.props.daysOfWeekDisabled,
          maxDate: _this.props.maxDate,
          minDate: _this.props.minDate,
          selectedDate: _this.props.selectedDate,
          setSelectedDate: _this.props.setSelectedDate,
          showMonths: _this.showMonths,
          showToday: _this.props.showToday,
          subtractMonth: _this.props.subtractMonth,
          viewDate: _this.props.viewDate
        });
      } else {
        return null;
      }
    };

    _this.renderMonths = function () {
      if (_this.state.monthsDisplayed) {
        return _react2.default.createElement(_DateTimePickerMonths2.default, {
          addYear: _this.props.addYear,
          selectedDate: _this.props.selectedDate,
          setViewMonth: _this.setViewMonth,
          showYears: _this.showYears,
          subtractYear: _this.props.subtractYear,
          viewDate: _this.props.viewDate
        });
      } else {
        return null;
      }
    };

    _this.renderYears = function () {
      if (_this.state.yearsDisplayed) {
        return _react2.default.createElement(_DateTimePickerYears2.default, {
          addDecade: _this.props.addDecade,
          selectedDate: _this.props.selectedDate,
          setViewYear: _this.setViewYear,
          subtractDecade: _this.props.subtractDecade,
          viewDate: _this.props.viewDate
        });
      } else {
        return null;
      }
    };

    var viewModes = {
      "days": {
        daysDisplayed: true,
        monthsDisplayed: false,
        yearsDisplayed: false
      },
      "months": {
        daysDisplayed: false,
        monthsDisplayed: true,
        yearsDisplayed: false
      },
      "years": {
        daysDisplayed: false,
        monthsDisplayed: false,
        yearsDisplayed: true
      }
    };
    _this.state = viewModes[_this.props.viewMode] || viewModes[Object.keys(viewModes)[_this.props.viewMode]] || viewModes.days;
    return _this;
  }

  _createClass(DateTimePickerDate, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "datepicker" },
        this.renderDays(),
        this.renderMonths(),
        this.renderYears()
      );
    }
  }]);

  return DateTimePickerDate;
}(_react.Component);

DateTimePickerDate.propTypes = {
  subtractMonth: _react.PropTypes.func.isRequired,
  addMonth: _react.PropTypes.func.isRequired,
  viewDate: _react.PropTypes.object.isRequired,
  selectedDate: _react.PropTypes.object.isRequired,
  showToday: _react.PropTypes.bool,
  viewMode: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  daysOfWeekDisabled: _react.PropTypes.array,
  setSelectedDate: _react.PropTypes.func.isRequired,
  subtractYear: _react.PropTypes.func.isRequired,
  addYear: _react.PropTypes.func.isRequired,
  setViewMonth: _react.PropTypes.func.isRequired,
  setViewYear: _react.PropTypes.func.isRequired,
  addDecade: _react.PropTypes.func.isRequired,
  subtractDecade: _react.PropTypes.func.isRequired,
  minDate: _react.PropTypes.object,
  maxDate: _react.PropTypes.object
};
exports.default = DateTimePickerDate;