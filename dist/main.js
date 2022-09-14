/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/components/navbar.js\");\n\r\nconst navbar = (0,_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst header_div = () => {\r\n  const header = document.createElement(\"div\");\r\n  header.classList.add(\"header\");\r\n  header.appendChild(navbar);\r\n  return header;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header_div);\r\n\n\n//# sourceURL=webpack://odin-restaurant_page/./src/components/header.js?");

/***/ }),

/***/ "./src/components/links.js":
/*!*********************************!*\
  !*** ./src/components/links.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst links_div = (title) => {\r\n  const links = document.createElement(\"a\");\r\n  links.classList.add(\"link\");\r\n  links.textContent = title;\r\n  links.id = title;\r\n  return links;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (links_div);\r\n\n\n//# sourceURL=webpack://odin-restaurant_page/./src/components/links.js?");

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./links */ \"./src/components/links.js\");\n\r\n\r\nconst navbar_div = () => {\r\n  const navbar = document.createElement(\"div\");\r\n  navbar.classList.add(\"navbar\");\r\n  let home = (0,_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Home\");\r\n  let menu = (0,_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Menu\");\r\n  let order = (0,_links__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Order\");\r\n  navbar.appendChild(home);\r\n  navbar.appendChild(menu);\r\n  navbar.appendChild(order);\r\n\r\n  return navbar;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar_div);\r\n\n\n//# sourceURL=webpack://odin-restaurant_page/./src/components/navbar.js?");

/***/ }),

/***/ "./src/components/page.js":
/*!********************************!*\
  !*** ./src/components/page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab */ \"./src/components/tab.js\");\n\r\nconst tab = (0,_tab__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst main_div = () => {\r\n  const page = document.createElement(\"div\");\r\n\r\n  page.classList.add(\"main\");\r\n  page.appendChild(tab);\r\n\r\n  return page;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main_div);\r\n\n\n//# sourceURL=webpack://odin-restaurant_page/./src/components/page.js?");

/***/ }),

/***/ "./src/components/tab.js":
/*!*******************************!*\
  !*** ./src/components/tab.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tab_div = () => {\r\n  const tab = document.createElement(\"div\");\r\n  tab.classList.add(\"tab\");\r\n\r\n  return tab;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tab_div);\r\n\n\n//# sourceURL=webpack://odin-restaurant_page/./src/components/tab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page */ \"./src/components/page.js\");\n/* harmony import */ var _pages_home_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home */ \"./src/pages/home/home.js\");\n/* harmony import */ var _pages_menu_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu/menu */ \"./src/pages/menu/menu.js\");\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById(\"content\");\r\nconst header = (0,_components_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst main = (0,_components_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nconst home = (0,_pages_home_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\nconst menu = (0,_pages_menu_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\ncontent.appendChild(header);\r\ncontent.appendChild(main);\r\n\r\nconst set_tab = (tab_selector) => {\r\n  let child = main.firstChild.lastChild;\r\n  while (child) {\r\n    main.firstChild.removeChild(child);\r\n    child = main.firstChild.lastChild;\r\n  }\r\n\r\n  switch (tab_selector) {\r\n    case \"Home\":\r\n      main.firstChild.appendChild(home.title);\r\n      main.firstChild.appendChild(home.blurb);\r\n      main.firstChild.appendChild(home.pic);\r\n      break;\r\n    case \"Menu\":\r\n      main.firstChild.appendChild(menu);\r\n      break;\r\n  }\r\n};\r\n\r\nconst links = document.querySelectorAll(\".link\");\r\n\r\nlinks.forEach((link) => {\r\n  link.addEventListener(\"click\", () => {\r\n    console.log(link.getAttribute(\"id\"));\r\n    set_tab(link.getAttribute(\"id\"));\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://odin-restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/pages/home/home.js":
/*!********************************!*\
  !*** ./src/pages/home/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst home_div = () => {\r\n  const title = document.createElement(\"h1\");\r\n  title.classList.add(\"diner-sign\");\r\n  title.innerText = \"Diner on 6th\";\r\n\r\n  const blurb = document.createElement(\"div\");\r\n  blurb.classList.add(\"blurb\");\r\n  blurb.innerText =\r\n    \"Classic and delicous steak burgers, hot fries, and creamy milkshakes! Since the 1950s we have been delivery great food and great serivce to our community\";\r\n\r\n  const pic = document.createElement(\"div\");\r\n  pic.classList.add(\"pic\");\r\n  const image = document.createElement(\"img\");\r\n  image.src = \"/src/assets/images/platter.jpg\";\r\n\r\n  pic.appendChild(image);\r\n\r\n  return { title, blurb, pic };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home_div);\r\n\n\n//# sourceURL=webpack://odin-restaurant_page/./src/pages/home/home.js?");

/***/ }),

/***/ "./src/pages/menu/hotdog.js":
/*!**********************************!*\
  !*** ./src/pages/menu/hotdog.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst hotdog_div = () => {\r\n  const hotdog = document.createElement(\"div\");\r\n  hotdog.classList.add(\"menu-iten\");\r\n\r\n  const pic = document.createElement(\"img\");\r\n  pic.src = \"../src/assets/images/hotdog.jpg\";\r\n  pic.classList.add(\"pic\");\r\n\r\n  const blurb = document.createElement(\"span\");\r\n  blurb.textContent = \"Hot dog\";\r\n\r\n  hotdog.appendChild(pic);\r\n  hotdog.appendChild(blurb);\r\n\r\n  return hotdog;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hotdog_div);\r\n\n\n//# sourceURL=webpack://odin-restaurant_page/./src/pages/menu/hotdog.js?");

/***/ }),

/***/ "./src/pages/menu/menu.js":
/*!********************************!*\
  !*** ./src/pages/menu/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hotdog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hotdog */ \"./src/pages/menu/hotdog.js\");\n\r\n\r\nconst hotdog = (0,_hotdog__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\nconst menu_div = () => {\r\n  const menu = document.createElement(\"div\");\r\n  menu.classList.add(\"menu\");\r\n\r\n  menu.appendChild(hotdog);\r\n\r\n  return menu;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu_div);\r\n\n\n//# sourceURL=webpack://odin-restaurant_page/./src/pages/menu/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;