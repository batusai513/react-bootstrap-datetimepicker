"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePickerDays = function (_Component) {
  _inherits(DateTimePickerDays, _Component);

  function DateTimePickerDays() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePickerDays);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DateTimePickerDays)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.renderDays = function () {
      var cells, classes, days, html, month, nextMonth, prevMonth, minDate, maxDate, row, year;
      year = _this.props.viewDate.year();
      month = _this.props.viewDate.month();
      prevMonth = _this.props.viewDate.clone().subtract(1, "months");
      days = prevMonth.daysInMonth();
      prevMonth.date(days).startOf("week");
      nextMonth = (0, _moment2.default)(prevMonth).clone().add(42, "d");
      minDate = _this.props.minDate ? _this.props.minDate.clone().subtract(1, "days") : _this.props.minDate;
      maxDate = _this.props.maxDate ? _this.props.maxDate.clone() : _this.props.maxDate;
      html = [];
      cells = [];
      while (prevMonth.isBefore(nextMonth)) {
        classes = {
          day: true
        };
        if (prevMonth.year() < year || prevMonth.year() === year && prevMonth.month() < month) {
          classes.old = true;
        } else if (prevMonth.year() > year || prevMonth.year() === year && prevMonth.month() > month) {
          classes.new = true;
        }
        if (prevMonth.isSame((0, _moment2.default)({
          y: _this.props.selectedDate.year(),
          M: _this.props.selectedDate.month(),
          d: _this.props.selectedDate.date()
        }))) {
          classes.active = true;
        }
        if (_this.props.showToday) {
          if (prevMonth.isSame((0, _moment2.default)(), "day")) {
            classes.today = true;
          }
        }
        if (minDate && prevMonth.isBefore(minDate) || maxDate && prevMonth.isAfter(maxDate)) {
          classes.disabled = true;
        }
        if (_this.props.daysOfWeekDisabled.length > 0) classes.disabled = _this.props.daysOfWeekDisabled.indexOf(prevMonth.day()) !== -1;
        cells.push(_react2.default.createElement(
          "td",
          { className: (0, _classnames2.default)(classes), key: prevMonth.month() + "-" + prevMonth.date(), onClick: _this.props.setSelectedDate },
          prevMonth.date()
        ));
        if (prevMonth.weekday() === (0, _moment2.default)().endOf("week").weekday()) {
          row = _react2.default.createElement(
            "tr",
            { key: prevMonth.month() + "-" + prevMonth.date() },
            cells
          );
          html.push(row);
          cells = [];
        }
        prevMonth.add(1, "d");
      }
      return html;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePickerDays, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "datepicker-days", style: { display: "block" } },
        _react2.default.createElement(
          "table",
          { className: "table-condensed" },
          _react2.default.createElement(
            "thead",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "th",
                { className: "prev", onClick: this.props.subtractMonth },
                _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-left" })
              ),
              _react2.default.createElement(
                "th",
                { className: "switch", colSpan: "5", onClick: this.props.showMonths },
                _moment2.default.months()[this.props.viewDate.month()],
                " ",
                this.props.viewDate.year()
              ),
              _react2.default.createElement(
                "th",
                { className: "next", onClick: this.props.addMonth },
                _react2.default.createElement("span", { className: "glyphicon glyphicon-chevron-right" })
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "th",
                { className: "dow" },
                "Su"
              ),
              _react2.default.createElement(
                "th",
                { className: "dow" },
                "Mo"
              ),
              _react2.default.createElement(
                "th",
                { className: "dow" },
                "Tu"
              ),
              _react2.default.createElement(
                "th",
                { className: "dow" },
                "We"
              ),
              _react2.default.createElement(
                "th",
                { className: "dow" },
                "Th"
              ),
              _react2.default.createElement(
                "th",
                { className: "dow" },
                "Fr"
              ),
              _react2.default.createElement(
                "th",
                { className: "dow" },
                "Sa"
              )
            )
          ),
          _react2.default.createElement(
            "tbody",
            null,
            this.renderDays()
          )
        )
      );
    }
  }]);

  return DateTimePickerDays;
}(_react.Component);

DateTimePickerDays.propTypes = {
  subtractMonth: _react.PropTypes.func.isRequired,
  addMonth: _react.PropTypes.func.isRequired,
  viewDate: _react.PropTypes.object.isRequired,
  selectedDate: _react.PropTypes.object.isRequired,
  showToday: _react.PropTypes.bool,
  daysOfWeekDisabled: _react.PropTypes.array,
  setSelectedDate: _react.PropTypes.func.isRequired,
  showMonths: _react.PropTypes.func.isRequired,
  minDate: _react.PropTypes.object,
  maxDate: _react.PropTypes.object
};
DateTimePickerDays.defaultProps = {
  showToday: true
};
exports.default = DateTimePickerDays;