module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layouts/Footer.js":
/*!**************************************!*\
  !*** ./components/Layouts/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("footer", {
      className: "footer-area ptb-100 pb-0 bg-image"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "logo"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/logo2.png */ "./images/logo2.png"),
      alt: "logo2"
    }))), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual."), __jsx("ul", {
      className: "social-list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-linkedin"
    }))))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget pl-5"
    }, __jsx("h3", null, "Company"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "About"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Carrers"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Awards"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "User Program"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      href: "#"
    }, "Locations"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Login")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Products"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Integrations"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "API"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Pricing"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Documentation"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Sign Up"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Release Notes")))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Support"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "About"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Contact"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "FAQ"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Press")))))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "Copyright @ 2019 Crake. All rights reserved")), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Terms & Conditions"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Privacy Policy")))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layouts/Navbar.js":
/*!**************************************!*\
  !*** ./components/Layouts/Navbar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ActiveLink */ "./utils/ActiveLink.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideDrawer */ "./components/Layouts/SideDrawer.js");
/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SearchForm */ "./components/Layouts/SearchForm.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Navbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "state", {
      drawer: false,
      searchForm: false,
      collapsed: true
    });

    _defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });

    _defineProperty(this, "handleDrawer", () => {
      this.setState(prevState => {
        return {
          drawer: !prevState.drawer
        };
      });
    });

    _defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });
  }

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      pathname
    } = this.props.router;
    let {
      products
    } = this.props;
    let layOutCls = 'marketing-navbar';

    let logo = __webpack_require__(/*! ../../images/logo2.png */ "./images/logo2.png");

    if (pathname === '/digital-marketing') {
      layOutCls = 'marketing-navbar';
      logo = __webpack_require__(/*! ../../images/logo2.png */ "./images/logo2.png");
    }

    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
      id: "header"
    }, __jsx("div", {
      id: "navbar",
      className: `crake-nav ${layOutCls}`
    }, __jsx("div", {
      className: "container"
    }, __jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: "/saas"
    }, __jsx("a", {
      className: "navbar-brand"
    }, __jsx("img", {
      src: logo,
      alt: "logo"
    }))), __jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, __jsx("span", {
      className: "navbar-toggler-icon"
    })), __jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, __jsx("ul", {
      className: "navbar-nav nav ml-auto"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/"
    }, __jsx("a", {
      className: "nav-link"
    }, "Home"))), __jsx("li", {
      className: "nav-item"
    }, __jsx("a", {
      href: "#",
      className: "nav-link"
    }, "Pages"), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "About")), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/about/about-one"
    }, __jsx("a", null, "About Us 1"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/about/about-two"
    }, __jsx("a", null, "About Us 2"))))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/features"
    }, __jsx("a", null, "Features"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/services"
    }, __jsx("a", null, "Services"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/gallery"
    }, __jsx("a", null, "Gallery"))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Team")), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/team/team-one"
    }, __jsx("a", null, "Team 1"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/team/team-two"
    }, __jsx("a", null, "Team 2"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Pricing")), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/pricing/pricing-one"
    }, __jsx("a", null, "Pricing 1"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/pricing/pricing-two"
    }, __jsx("a", null, "Pricing 2"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/pricing/pricing-three"
    }, __jsx("a", null, "Pricing 3"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Portfolio")), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/portfolio-one"
    }, __jsx("a", null, "Portfolio 2 Columns"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/portfolio-two"
    }, __jsx("a", null, "Portfolio 3 Columns"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/portfolio-three"
    }, __jsx("a", null, "Portfolio 4 Columns Wide"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/project-details"
    }, __jsx("a", null, "Portfolio Details"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Shop")), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/shop-one"
    }, __jsx("a", null, "Shop 1"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/shop-two"
    }, __jsx("a", null, "Shop 2"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/shop-details"
    }, __jsx("a", null, "Shop Details"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/cart"
    }, __jsx("a", null, "Cart"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/checkout"
    }, __jsx("a", null, "Checkout"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog")), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/blog/blog-one"
    }, __jsx("a", null, "Blog 1"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/blog/blog-two"
    }, __jsx("a", null, "Blog 2"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/blog/blog-details"
    }, __jsx("a", null, "Blog Details"))))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/login"
    }, __jsx("a", null, "Login"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/signup"
    }, __jsx("a", null, "Sign Up"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/coming-soon"
    }, __jsx("a", null, "Coming Soon"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/error"
    }, __jsx("a", null, "404 Error"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/faq"
    }, __jsx("a", null, "FAQ"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Portfolio")), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/portfolio-one"
    }, __jsx("a", null, "Portfolio 2 Columns"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/portfolio-two"
    }, __jsx("a", null, "Portfolio 3 Columns"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/portfolio-three"
    }, __jsx("a", null, "Portfolio 4 Columns Wide"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/project-details"
    }, __jsx("a", null, "Portfolio Details"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Blog")), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/blog/blog-one"
    }, __jsx("a", null, "Blog 1"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/blog/blog-two"
    }, __jsx("a", null, "Blog 2"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/blog/blog-details"
    }, __jsx("a", null, "Blog Details"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      className: "nav-link"
    }, "Shop")), __jsx("ul", {
      className: "dropdown_menu"
    }, __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/shop-one"
    }, __jsx("a", null, "Shop 1"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/shop-two"
    }, __jsx("a", null, "Shop 2"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/shop-details"
    }, __jsx("a", null, "Shop Details"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/cart"
    }, __jsx("a", null, "Cart"))), __jsx("li", null, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/checkout"
    }, __jsx("a", null, "Checkout"))))), __jsx("li", {
      className: "nav-item"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/contact"
    }, __jsx("a", {
      className: "nav-link"
    }, "Contact"))))), __jsx("div", {
      className: "mr-auto others-option"
    }, __jsx("ul", {
      className: "navbar-nav"
    }, __jsx("li", {
      className: "nav-item cart-wrapper"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "/cart"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-shopping-cart cart-icon"
    }), __jsx("span", null, products.length)))), __jsx("li", {
      className: "header-search-box"
    }, __jsx(_utils_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.handleSearchForm();
      },
      title: "Search"
    }, __jsx("i", {
      className: "icofont-search-2"
    })))), __jsx("li", {
      onClick: this.handleDrawer
    }, __jsx("div", {
      className: "side-menu"
    }, __jsx("span", {
      className: "bar-1"
    }), __jsx("span", {
      className: "bar-2"
    }), __jsx("span", {
      className: "bar-3"
    }))))))))), this.state.drawer ? __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onClick: this.handleDrawer
    }) : '', this.state.searchForm ? __jsx(_SearchForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: this.handleSearchForm
    }) : '');
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Navbar)));

/***/ }),

/***/ "./components/Layouts/SearchForm.js":
/*!******************************************!*\
  !*** ./components/Layouts/SearchForm.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SearchForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      searchForm: false,
      term: ''
    });

    _defineProperty(this, "closeSearchForm", () => {
      this.props.onClick(this.state.searchForm);
    });

    _defineProperty(this, "handleSearch", e => {
      e.preventDefault();
    });
  }

  render() {
    return __jsx("div", {
      id: "header-search",
      className: "header-search open"
    }, __jsx("button", {
      type: "button",
      onClick: this.closeSearchForm,
      className: "close"
    }, "\xD7"), __jsx("form", {
      onSubmit: this.handleSearch,
      className: "header-search-form"
    }, __jsx("input", {
      type: "search",
      placeholder: "Type here........",
      value: this.state.term,
      onChange: e => this.setState({
        term: e.target.value
      })
    }), __jsx("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Search")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchForm);

/***/ }),

/***/ "./components/Layouts/SideDrawer.js":
/*!******************************************!*\
  !*** ./components/Layouts/SideDrawer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SideDrawer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      drawer: false
    });

    _defineProperty(this, "closeDrawer", () => {
      this.props.onClick(this.state.drawer);
    });
  }

  render() {
    return __jsx("div", {
      className: "sidebar-modal"
    }, __jsx("div", {
      className: "modal right fade show",
      style: {
        display: "block",
        paddingRight: "16px"
      }
    }, __jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("div", {
      className: "modal-header"
    }, __jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeDrawer
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "icofont-close"
    }))), __jsx("h2", {
      className: "modal-title",
      id: "myModalLabel2"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, __jsx("img", {
      src: __webpack_require__(/*! ../../images/logo.png */ "./images/logo.png"),
      alt: "logo"
    }))))), __jsx("div", {
      className: "modal-body"
    }, __jsx("div", {
      className: "sidebar-modal-widget"
    }, __jsx("h3", {
      className: "title"
    }, "Additional Links"), __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/login"
    }, __jsx("a", null, "Login"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/signup"
    }, __jsx("a", null, "Register"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faq"
    }, __jsx("a", null, "FAQ"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Logout"))))), __jsx("div", {
      className: "sidebar-modal-widget"
    }, __jsx("h3", {
      className: "title"
    }, "Contact Info"), __jsx("ul", {
      className: "contact-info"
    }, __jsx("li", null, __jsx("i", {
      className: "icofont-google-map"
    }), "Address", __jsx("span", null, "1660 Travis Street Miramar, FL 33025, California")), __jsx("li", null, __jsx("i", {
      className: "icofont-email"
    }), "Email", __jsx("span", null, "admin@crake.com")), __jsx("li", null, __jsx("i", {
      className: "icofont-phone"
    }), "Phone", __jsx("span", null, "+123 456 7890")))), __jsx("div", {
      className: "sidebar-modal-widget"
    }, __jsx("h3", {
      className: "title"
    }, "Connect With Us"), __jsx("ul", {
      className: "social-list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-linkedin"
    })))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideDrawer);

/***/ }),

/***/ "./components/Signup/Banner.js":
/*!*************************************!*\
  !*** ./components/Signup/Banner.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Banner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "page-title-banner"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-12"
    }, __jsx("h2", null, "Signup")))), __jsx("div", {
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
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Signup/SignupBody.js":
/*!*****************************************!*\
  !*** ./components/Signup/SignupBody.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class SignupBody extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "signup-area ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "login-image"
    }, __jsx("img", {
      src: __webpack_require__(/*! ../../images/marketing.png */ "./images/marketing.png"),
      alt: "image"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "signup-form"
    }, __jsx("h3", null, "Create your Account"), __jsx("form", null, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Username"
    }))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "Email"
    }))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "password",
      className: "form-control",
      placeholder: "Password"
    }))), __jsx("div", {
      className: "col-lg-6"
    }, __jsx("div", {
      className: "form-check"
    }, __jsx("input", {
      type: "checkbox",
      className: "form-check-input",
      id: "checkme"
    }), __jsx("label", {
      className: "form-check-label",
      htmlFor: "checkme"
    }, "Keep me Login"))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Signup Now!"), __jsx("br", null), __jsx("span", null, "Already a registered user? ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/login"
    }, __jsx("a", null, "Login!")))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SignupBody);

/***/ }),

/***/ "./images/logo.png":
/*!*************************!*\
  !*** ./images/logo.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/logo2.png":
/*!**************************!*\
  !*** ./images/logo2.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/marketing.png":
/*!******************************!*\
  !*** ./images/marketing.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/marketing-4d5918d3500bad2a7366d1e536148472.png";

/***/ }),

/***/ "./images/shape1.png":
/*!***************************!*\
  !*** ./images/shape1.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACSCAYAAADozTAkAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc1MUE5OUFCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc1MUE5OTlCMTA0MTFFODlGMjdFOEIxOTJFNEM5NjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3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"

/***/ }),

/***/ "./images/shape2.png":
/*!***************************!*\
  !*** ./images/shape2.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAACqCAYAAACJUODIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzZBMzcyNDlCMTAyMTFFOEJBQkNDRkE4MzM2NTAxRkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzZBMzcyNDhCMTAyMTFFOEJBQkNDRkE4MzM2NTAxRkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3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"

/***/ }),

/***/ "./images/shape3.png":
/*!***************************!*\
  !*** ./images/shape3.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACTCAYAAAAjkeOBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzI2M0I4MjNCMTA0MTFFODlBRkJENDA3NDZCOUFGQzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzI2M0I4MjJCMTA0MTFFODlBRkJENDA3NDZCOUFGQzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI5NzhmYzY3LThlYTktYWE0YS04MDA0LTZhOWMyNzY2ZGZkMyIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRmNDBmNWRjLTM2NTYtNTI0Ny04ZTk3LTlmMjg3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"

/***/ }),

/***/ "./images/shape6.png":
/*!***************************!*\
  !*** ./images/shape6.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./images/shape8.svg":
/*!***************************!*\
  !*** ./images/shape8.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmb250LXNpemU6IDI1cHg7CiAgICAgICAgZmlsbDogIzI3ZWFjODsKICAgICAgICB0ZXh0LWFuY2hvcjogbWlkZGxlOwogICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDx0ZXh0IGlkPSJfIiBkYXRhLW5hbWU9IisiIGNsYXNzPSJjbHMtMSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40MzcsIDEuNDM0LCAtMS40MzcsIDEuNDM0LCAtMC44MzIsIDIzLjA2NikiPjx0c3BhbiB4PSIwIj4rPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo="

/***/ }),

/***/ "./images/shape9.svg":
/*!***************************!*\
  !*** ./images/shape9.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOC41NjIiIGhlaWdodD0iMjguNTk0IiB2aWV3Qm94PSIwIDAgMjguNTYyIDI4LjU5NCI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogbm9uZTsKICAgICAgICBzdHJva2U6ICNlMWUxZTE7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzcHg7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMTQuMjgxIiBjeT0iMTQuMjk3IiByPSIxMi43ODEiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _components_Signup_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Signup/Banner */ "./components/Signup/Banner.js");
/* harmony import */ var _components_Signup_SignupBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Signup/SignupBody */ "./components/Signup/SignupBody.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Signup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_Signup_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_Signup_SignupBody__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./utils/ActiveLink.js":
/*!*****************************!*\
  !*** ./utils/ActiveLink.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_0__["withRouter"])(ActiveLink));

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ashfaq\projects\mojosa\mojosa-react-next-landing-page-templates\mojosa-react-next\pages\signup.js */"./pages/signup.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=signup.js.map