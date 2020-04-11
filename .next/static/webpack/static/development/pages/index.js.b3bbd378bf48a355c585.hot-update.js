webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/DigitalMarketing/Banner.js":
/*!***********************************************!*\
  !*** ./components/DigitalMarketing/Banner.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var isServer = false;
var WOW = !isServer ? __webpack_require__(/*! wowjs */ "./node_modules/wowjs/dist/wow.js") : null;

var Banner = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Banner, _React$Component);

  var _super = _createSuper(Banner);

  function Banner() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      isOpen: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "openModal", function () {
      _this.setState({
        isOpen: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Banner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 20,
        mobile: true,
        live: true
      }).init();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "main-banner marketing-home"
      }, __jsx("div", {
        className: "d-table"
      }, __jsx("div", {
        className: "d-table-cell"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "row"
      }, __jsx("div", {
        className: "col-lg-6 col-md-12"
      }, __jsx("div", {
        className: "hero-content"
      }, __jsx("h1", null, "Developers Student Clubs ", __jsx("br", null)), __jsx("h1", {
        style: {
          fontWeight: 700
        }
      }, "VJIT"), __jsx("p", null, "DSC VJIT is one of the different Developer Students Club throughout India. Our main goal at DSC VJIT is to increase the skills, collaboration among students and to create a community."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "#"
      }, __jsx("a", {
        className: "btn btn-primary"
      }, "Join DSC VJIT")))), __jsx("div", {
        className: "col-lg-6 col-md-12"
      }, __jsx("div", {
        className: "marketing-image"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img1.png */ "./images/marketing-shape/marketing-img1.png"),
        className: "wow fadeInDown",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img2.png */ "./images/marketing-shape/marketing-img2.png"),
        className: "wow fadeInLeft",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img3.png */ "./images/marketing-shape/marketing-img3.png"),
        className: "wow lightSpeedIn",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img4.png */ "./images/marketing-shape/marketing-img4.png"),
        className: "wow rollIn",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img5.png */ "./images/marketing-shape/marketing-img5.png"),
        className: "wow fadeInUp",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img6.png */ "./images/marketing-shape/marketing-img6.png"),
        className: "wow fadeInDown",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img7.png */ "./images/marketing-shape/marketing-img7.png"),
        className: "wow flip",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img8.png */ "./images/marketing-shape/marketing-img8.png"),
        className: "wow zoomIn",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img9.png */ "./images/marketing-shape/marketing-img9.png"),
        className: "wow fadeInDown",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img10.png */ "./images/marketing-shape/marketing-img10.png"),
        className: "wow fadeInUp",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img11.png */ "./images/marketing-shape/marketing-img11.png"),
        className: "wow flip",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/marketing-img12.png */ "./images/marketing-shape/marketing-img12.png"),
        className: "wow lightSpeedIn",
        "data-wow-delay": "0.4s",
        alt: "img"
      }), __jsx("img", {
        src: __webpack_require__(/*! ../../images/marketing-shape/main-image.png */ "./images/marketing-shape/main-image.png"),
        className: "wow fadeInUp",
        "data-wow-delay": "0.4s",
        alt: "img"
      }))))))), __jsx("div", {
        className: "bg-gray shape-1"
      }), __jsx("div", {
        className: "shape1"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/shape1.png */ "./images/shape1.png"),
        alt: "img"
      })), __jsx("div", {
        className: "shape2"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/shape2.png */ "./images/shape2.png"),
        alt: "img"
      })), __jsx("div", {
        className: "shape3"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/shape3.png */ "./images/shape3.png"),
        alt: "img"
      })), __jsx("div", {
        className: "shape6"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/shape6.png */ "./images/shape6.png"),
        alt: "img"
      })), __jsx("div", {
        className: "shape8 rotateme"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/shape8.svg */ "./images/shape8.svg"),
        alt: "shape"
      })), __jsx("div", {
        className: "shape9"
      }, __jsx("img", {
        src: __webpack_require__(/*! ../../images/shape9.svg */ "./images/shape9.svg"),
        alt: "shape"
      })), __jsx("div", {
        className: "bubble-animate"
      }, __jsx("div", {
        className: "circle small square1"
      }), __jsx("div", {
        className: "circle small square2"
      }), __jsx("div", {
        className: "circle small square3"
      }), __jsx("div", {
        className: "circle small square4"
      }), __jsx("div", {
        className: "circle small square5"
      }), __jsx("div", {
        className: "circle medium square1"
      }), __jsx("div", {
        className: "circle medium square2"
      }), __jsx("div", {
        className: "circle medium square3"
      }), __jsx("div", {
        className: "circle medium square4"
      }), __jsx("div", {
        className: "circle medium square5"
      }), __jsx("div", {
        className: "circle large square1"
      }), __jsx("div", {
        className: "circle large square2"
      }), __jsx("div", {
        className: "circle large square3"
      }), __jsx("div", {
        className: "circle large square4"
      }))), __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_9___default.a, {
        channel: "youtube",
        isOpen: this.state.isOpen,
        videoId: "szuchBiLrEM",
        onClose: function onClose() {
          return _this2.setState({
            isOpen: false
          });
        }
      }));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ })

})
//# sourceMappingURL=index.js.b3bbd378bf48a355c585.hot-update.js.map