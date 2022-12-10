"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
/**
 * 
 * @param {string} InsertText : Main text inside modal
 * @param {string} buttonCloseName : Text of close button
 * @param {function} closeModal : function onClick link to closing button
 * @param {boolean} isOpen : Set if modal is open or not
 * @returns modal component
 */
function Modal(_ref) {
  var _ref$InsertText = _ref.InsertText,
    InsertText = _ref$InsertText === void 0 ? 'Insert Text Here' : _ref$InsertText,
    _ref$buttonCloseName = _ref.buttonCloseName,
    buttonCloseName = _ref$buttonCloseName === void 0 ? 'Close' : _ref$buttonCloseName,
    closeModal = _ref.closeModal,
    _ref$isOpen = _ref.isOpen,
    isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalFullPage ".concat(isOpen ? 'modalActivate' : 'modalDesactivate')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("p", null, InsertText), /*#__PURE__*/_react.default.createElement("button", {
    onClick: closeModal
  }, buttonCloseName)));
}
var _default = Modal;
exports.default = _default;