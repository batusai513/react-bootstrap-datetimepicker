"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Constants = require("./Constants.js");

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePickerHours = function (_Component) {
  _inherits(DateTimePickerHours, _Component);

  function DateTimePickerHours() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, DateTimePickerHours);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(DateTimePickerHours)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.renderSwitchButton = function () {
      return _this.props.mode === _Constants2.default.MODE_TIME ? _react2.default.createElement(
        "ul",
        { className: "list-unstyled" },
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "span",
            { className: "btn picker-switch", onClick: _this.props.onSwitch, style: { width: "100%" } },
            _react2.default.createElement("span", { className: "glyphicon glyphicon-time" })
          )
        )
      ) : null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateTimePickerHours, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "timepicker-hours", "data-action": "selectHour", style: { display: "block" } },
        this.renderSwitchButton(),
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
                { className: "hour", onClick: this.props.setSelectedHour },
                "01"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "02"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "03"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "04"
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "05"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "06"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "07"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "08"
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "09"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "10"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "11"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "12"
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "13"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "14"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "15"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "16"
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "17"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "18"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "19"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "20"
              )
            ),
            _react2.default.createElement(
              "tr",
              null,
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "21"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "22"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "23"
              ),
              _react2.default.createElement(
                "td",
                { className: "hour", onClick: this.props.setSelectedHour },
                "24"
              )
            )
          )
        )
      );
    }
  }]);

  return DateTimePickerHours;
}(_react.Component);

DateTimePickerHours.propTypes = {
  setSelectedHour: _react.PropTypes.func.isRequired,
  onSwitch: _react.PropTypes.func.isRequired,
  mode: _react.PropTypes.string.isRequired
};
exports.default = DateTimePickerHours;