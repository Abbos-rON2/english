/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/cards.js":
/*!***********************!*\
  !*** ./data/cards.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst cards = [\n  ['Действия 1', 'Действия 2', 'Животные', 'Птицы', 'Одежда', 'Эмоции'],\n  [\n    {\n      word: 'cry',\n      translation: 'плакать',\n      image: 'img/cry.jpg',\n      audioSrc: 'audio/cry.mp3',\n    },\n    {\n      word: 'dance',\n      translation: 'танцевать',\n      image: 'img/dance.jpg',\n      audioSrc: 'audio/dance.mp3',\n    },\n    {\n      word: 'dive',\n      translation: 'нырять',\n      image: 'img/dive.jpg',\n      audioSrc: 'audio/dive.mp3',\n    },\n    {\n      word: 'draw',\n      translation: 'рисовать',\n      image: 'img/draw.jpg',\n      audioSrc: 'audio/draw.mp3',\n    },\n    {\n      word: 'fish',\n      translation: 'ловить рыбу',\n      image: 'img/fish.jpg',\n      audioSrc: 'audio/fish.mp3',\n    },\n    {\n      word: 'fly',\n      translation: 'летать',\n      image: 'img/fly.jpg',\n      audioSrc: 'audio/fly.mp3',\n    },\n    {\n      word: 'hug',\n      translation: 'обнимать',\n      image: 'img/hug.jpg',\n      audioSrc: 'audio/hug.mp3',\n    },\n    {\n      word: 'jump',\n      translation: 'прыгать',\n      image: 'img/jump.jpg',\n      audioSrc: 'audio/jump.mp3',\n    },\n  ],\n  [\n    {\n      word: 'open',\n      translation: 'открывать',\n      image: 'img/open.jpg',\n      audioSrc: 'audio/open.mp3',\n    },\n    {\n      word: 'play',\n      translation: 'играть',\n      image: 'img/play.jpg',\n      audioSrc: 'audio/play.mp3',\n    },\n    {\n      word: 'point',\n      translation: 'указывать',\n      image: 'img/point.jpg',\n      audioSrc: 'audio/point.mp3',\n    },\n    {\n      word: 'ride',\n      translation: 'ездить',\n      image: 'img/ride.jpg',\n      audioSrc: 'audio/ride.mp3',\n    },\n    {\n      word: 'run',\n      translation: 'бегать',\n      image: 'img/run.jpg',\n      audioSrc: 'audio/run.mp3',\n    },\n    {\n      word: 'sing',\n      translation: 'петь',\n      image: 'img/sing.jpg',\n      audioSrc: 'audio/sing.mp3',\n    },\n    {\n      word: 'skip',\n      translation: 'пропускать, прыгать',\n      image: 'img/skip.jpg',\n      audioSrc: 'audio/skip.mp3',\n    },\n    {\n      word: 'swim',\n      translation: 'плавать',\n      image: 'img/swim.jpg',\n      audioSrc: 'audio/swim.mp3',\n    },\n  ],\n  [\n    {\n      word: 'cat',\n      translation: 'кот',\n      image: 'img/cat.jpg',\n      audioSrc: 'audio/cat.mp3',\n    },\n    {\n      word: 'chick',\n      translation: 'цыплёнок',\n      image: 'img/chick.jpg',\n      audioSrc: 'audio/chick.mp3',\n    },\n    {\n      word: 'chicken',\n      translation: 'курица',\n      image: 'img/chicken.jpg',\n      audioSrc: 'audio/chicken.mp3',\n    },\n    {\n      word: 'dog',\n      translation: 'собака',\n      image: 'img/dog.jpg',\n      audioSrc: 'audio/dog.mp3',\n    },\n    {\n      word: 'horse',\n      translation: 'лошадь',\n      image: 'img/horse.jpg',\n      audioSrc: 'audio/horse.mp3',\n    },\n    {\n      word: 'pig',\n      translation: 'свинья',\n      image: 'img/pig.jpg',\n      audioSrc: 'audio/pig.mp3',\n    },\n    {\n      word: 'rabbit',\n      translation: 'кролик',\n      image: 'img/rabbit.jpg',\n      audioSrc: 'audio/rabbit.mp3',\n    },\n    {\n      word: 'sheep',\n      translation: 'овца',\n      image: 'img/sheep.jpg',\n      audioSrc: 'audio/sheep.mp3',\n    },\n  ],\n  [\n    {\n      word: 'bird',\n      translation: 'птица',\n      image: 'img/bird.jpg',\n      audioSrc: 'audio/bird.mp3',\n    },\n    {\n      word: 'fish',\n      translation: 'рыба',\n      image: 'img/fish1.jpg',\n      audioSrc: 'audio/fish.mp3',\n    },\n    {\n      word: 'frog',\n      translation: 'жаба',\n      image: 'img/frog.jpg',\n      audioSrc: 'audio/frog.mp3',\n    },\n    {\n      word: 'giraffe',\n      translation: 'жирафа',\n      image: 'img/giraffe.jpg',\n      audioSrc: 'audio/giraffe.mp3',\n    },\n    {\n      word: 'lion',\n      translation: 'лев',\n      image: 'img/lion.jpg',\n      audioSrc: 'audio/lion.mp3',\n    },\n    {\n      word: 'mouse',\n      translation: 'мышь',\n      image: 'img/mouse.jpg',\n      audioSrc: 'audio/mouse.mp3',\n    },\n    {\n      word: 'turtle',\n      translation: 'черепаха',\n      image: 'img/turtle.jpg',\n      audioSrc: 'audio/turtle.mp3',\n    },\n    {\n      word: 'dolphin',\n      translation: 'дельфин',\n      image: 'img/dolphin.jpg',\n      audioSrc: 'audio/dolphin.mp3',\n    },\n  ],\n  [\n    {\n      word: 'blouse',\n      translation: 'блузка',\n      image: 'img/blouse.jpg',\n      audioSrc: 'audio/blouse.mp3',\n    },\n    {\n      word: 'skirt',\n      translation: 'юбка',\n      image: 'img/skirt.jpg',\n      audioSrc: 'audio/skirt.mp3',\n    },\n    {\n      word: 'pants',\n      translation: 'брюки',\n      image: 'img/pants.jpg',\n      audioSrc: 'audio/pants.mp3',\n    },\n    {\n      word: 'dress',\n      translation: 'платье',\n      image: 'img/dress.jpg',\n      audioSrc: 'audio/dress.mp3',\n    },\n    {\n      word: 'boot',\n      translation: 'ботинок',\n      image: 'img/boot.jpg',\n      audioSrc: 'audio/boot.mp3',\n    },\n    {\n      word: 'shirt',\n      translation: 'рубашка',\n      image: 'img/shirt.jpg',\n      audioSrc: 'audio/shirt.mp3',\n    },\n    {\n      word: 'coat',\n      translation: 'пальто',\n      image: 'img/coat.jpg',\n      audioSrc: 'audio/coat.mp3',\n    },\n    {\n      word: 'shoe',\n      translation: 'туфли',\n      image: 'img/shoe.jpg',\n      audioSrc: 'audio/shoe.mp3',\n    },\n  ],\n  [\n    {\n      word: 'sad',\n      translation: 'грустный',\n      image: 'img/sad.jpg',\n      audioSrc: 'audio/sad.mp3',\n    },\n    {\n      word: 'angry',\n      translation: 'сердитый',\n      image: 'img/angry.jpg',\n      audioSrc: 'audio/angry.mp3',\n    },\n    {\n      word: 'happy',\n      translation: 'счастливый',\n      image: 'img/happy.jpg',\n      audioSrc: 'audio/happy.mp3',\n    },\n    {\n      word: 'tired',\n      translation: 'уставший',\n      image: 'img/tired.jpg',\n      audioSrc: 'audio/tired.mp3',\n    },\n    {\n      word: 'surprised',\n      translation: 'удивлённый',\n      image: 'img/surprised.jpg',\n      audioSrc: 'audio/surprised.mp3',\n    },\n    {\n      word: 'scared',\n      translation: 'испуганный',\n      image: 'img/scared.jpg',\n      audioSrc: 'audio/scared.mp3',\n    },\n    {\n      word: 'smile',\n      translation: 'улыбка',\n      image: 'img/smile.jpg',\n      audioSrc: 'audio/smile.mp3',\n    },\n    {\n      word: 'laugh',\n      translation: 'смех',\n      image: 'img/laugh.jpg',\n      audioSrc: 'audio/laugh.mp3',\n    },\n  ],\n];\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cards);\n\n\n//# sourceURL=webpack:///./data/cards.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/cards */ \"./data/cards.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_cardsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cardsPage */ \"./modules/cardsPage.js\");\n // Данные\n // Боковое меню\n\n\nfunction mainPage() { // Отрисовка главной страницы с категориями\n  const container = document.querySelector('.container.main-container');\n  _data_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0].forEach((element, index) => {\n    const a = document.createElement('a');\n    a.className = 'main-card green';\n    a.onclick = () => { localStorage.setItem('page', index); };\n    a.innerHTML = `${element}`;\n    a.href = './cards.html';\n    container.append(a);\n    const img = document.createElement('img');\n    img.src = `./data/${_data_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][index + 1][0].image}`;\n    a.prepend(img);\n  });\n}\n\nif (document.location.href.slice(document.location.href.lastIndexOf('/') + 1) === 'cards.html') {\n  Object(_modules_cardsPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n} else {\n  mainPage();\n  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/cardAudio.js":
/*!******************************!*\
  !*** ./modules/cardAudio.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cardAudio; });\nfunction cardAudio(element) {\n  const audio = document.createElement('audio');\n  audio.src = `./data/${element.audioSrc}`;\n  audio.play();\n}\n\n\n//# sourceURL=webpack:///./modules/cardAudio.js?");

/***/ }),

/***/ "./modules/cardItem.js":
/*!*****************************!*\
  !*** ./modules/cardItem.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cardItem; });\n/* harmony import */ var _cardAudio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardAudio */ \"./modules/cardAudio.js\");\n\n\nfunction cardItem(element) {\n  const cardContainer = document.createElement('div');\n  const card = document.createElement('div');\n  const front = document.createElement('div');\n  const back = document.createElement('div');\n  const frontCardHeader = document.createElement('div');\n  const backCardHeader = document.createElement('div');\n  const swap = document.createElement('div');\n  cardContainer.className = 'card-container';\n  card.className = 'card';\n  card.onclick = (e) => { if (e.target !== swap) { Object(_cardAudio__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element); } };\n  card.onmouseleave = () => { card.classList.remove('swap'); };\n  front.className = 'front';\n  back.className = 'back';\n  front.style.backgroundImage = `url('./data/${element.image}')`;\n  frontCardHeader.className = 'card-header';\n  frontCardHeader.innerHTML = element.word;\n  backCardHeader.className = 'card-header';\n  backCardHeader.innerHTML = element.translation;\n  back.style.backgroundImage = `url('./data/${element.image}')`;\n  swap.innerHTML = '&#9851;';\n  swap.className = 'swapBtn';\n  swap.onclick = () => { card.classList.add('swap'); };\n\n  document.querySelector('.container').append(cardContainer);\n  cardContainer.append(card);\n  card.append(front);\n  card.append(back);\n  card.append(swap);\n  front.append(frontCardHeader);\n  back.append(backCardHeader);\n}\n\n\n//# sourceURL=webpack:///./modules/cardItem.js?");

/***/ }),

/***/ "./modules/cardsPage.js":
/*!******************************!*\
  !*** ./modules/cardsPage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cardsPage; });\n/* harmony import */ var _cardItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardItem */ \"./modules/cardItem.js\");\n/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/cards */ \"./data/cards.js\");\n\n\n\nfunction cardsPage() {\n  const page = Number(localStorage.getItem('page')) + 1; // id of category\n\n  _data_cards__WEBPACK_IMPORTED_MODULE_1__[\"default\"][page].map((element) => { Object(_cardItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element); });\n}\n\n\n//# sourceURL=webpack:///./modules/cardsPage.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/cards */ \"./data/cards.js\");\n/* harmony import */ var _menuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuItem */ \"./modules/menuItem.js\");\n\n\n\nfunction menu() {\n  const headerMainItem = document.createElement('a');\n  headerMainItem.innerHTML = 'Главная';\n  headerMainItem.href = 'index.html';\n  headerMainItem.className = 'header-item';\n  document.querySelector('.menu').append(headerMainItem);\n\n  _data_cards__WEBPACK_IMPORTED_MODULE_0__[\"default\"][0].map((element, index) => { Object(_menuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, index); });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/menuItem.js":
/*!*****************************!*\
  !*** ./modules/menuItem.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return menuItem; });\nfunction menuItem(element, index) {\n  const headerItem = document.createElement('a');\n  headerItem.innerHTML = element;\n  headerItem.href = 'cards.html';\n  headerItem.className = 'header-item';\n  headerItem.onclick = () => { localStorage.setItem('page', index); };\n  document.querySelector('.menu').append(headerItem);\n}\n\n\n//# sourceURL=webpack:///./modules/menuItem.js?");

/***/ })

/******/ });