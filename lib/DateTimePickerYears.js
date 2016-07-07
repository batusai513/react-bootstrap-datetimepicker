"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePickerYears = function (_Component) {
  _inherits(DateTimePickerYears, _Component);

  function DateTimePickerYears() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePickerYears);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DateTimePickerYears)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.renderYears = function () {
      var classes, i, year, years;
      years = [];
      year = parseInt(_this.props.viewDate.year() / 10, 10) * 10;
      year--;
      i = -1;
      while (i < 11) {
        classes = {
          year: true,
          old: i === -1 | i === 10,
          active: _this.props.selectedDate.year() === year
        };
        years.push(_react2.default.createElement(
          "span",
          { className: (0, _classnames2.default)(classes), key: year, onClick: _this.props.setViewYear },
          year
        ));
        year++;
        i++;
      }
      return years;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePickerYears, [{
    key: "render",
    value: function render() {
      var year;
      year = parseInt(this.props.viewDate.year() / 10, 10) * 10;
      return _react2.default.createElement(
        "div",
        { className: "datepicker-years", style: { display: "block" } },
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
                { className: "prev", onClick: this.props.subtractDecade },
                '‹'
              ),
              _react2.default.createElement(
                "th",
                { className: "switch", colSpan: "5" },
                year,
                " - ",
                year + 9
              ),
              _react2.default.createElement(
                "th",
                { className: "next", onClick: this.props.addDecade },
                '›'
              )
            )
          ),
          _react2.default.createElement(
            "tbody",
            null,
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                { colSpan: "7" },
                this.renderYears()
              )
            )
          )
        )
      );
    }
  }]);

  return DateTimePickerYears;
}(_react.Component);

DateTimePickerYears.propTypes = {
  subtractDecade: _react.PropTypes.func.isRequired,
  addDecade: _react.PropTypes.func.isRequired,
  viewDate: _react.PropTypes.object.isRequired,
  selectedDate: _react.PropTypes.object.isRequired,
  setViewYear: _react.PropTypes.func.isRequired
};
exports.default = DateTimePickerYears;