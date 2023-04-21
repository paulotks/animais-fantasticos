/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(list) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Accordion);\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Accordion, [{\n    key: \"toggleAccordion\",\n    value: function toggleAccordion(item) {\n      item.classList.toggle(this.activeClass);\n      item.nextElementSibling.classList.toggle(this.activeClass);\n    }\n\n    // adiciona os eventos ao accordion\n  }, {\n    key: \"addAccordionEvent\",\n    value: function addAccordionEvent() {\n      var _this = this;\n      this.accordionList.forEach(function (item) {\n        item.addEventListener('click', function () {\n          return _this.toggleAccordion(item);\n        });\n      });\n    }\n\n    // iniciar função\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.accordionList.length) {\n        // ativar primeiro item\n        this.toggleAccordion(this.accordionList[0]);\n        this.addAccordionEvent();\n      }\n      return this;\n    }\n  }]);\n  return Accordion;\n}();\n\n\n//# sourceURL=webpack://animais-eslint/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar AnimaNumeros = /*#__PURE__*/function () {\n  function AnimaNumeros(numeros, observerTarget, observerClass) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnimaNumeros);\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(observerTarget);\n    this.observerClass = observerClass;\n\n    // bind do objeto ao callback da mutação\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  // Recebe um elemento do dom, com numero em seu texto\n  // incrementa a partir de 0 até o numero final\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnimaNumeros, [{\n    key: \"animaNumeros\",\n    value:\n    // Ativa incrementar numero para cada numero selecionado do DOM\n    function animaNumeros() {\n      var _this = this;\n      this.numeros.forEach(function (numero) {\n        return _this.constructor.incrementarNumero(numero);\n      });\n    }\n\n    // função que ocorre quando a mutação ocorrer\n  }, {\n    key: \"handleMutation\",\n    value: function handleMutation(mutation) {\n      if (mutation[0].target.classList.contains(this.observerClass)) {\n        this.observer.disconnect();\n        this.animaNumeros();\n      }\n    }\n\n    // adiciona a mutationObserver para verificar quando a classe\n    // ativo é adicionada ao elemento target\n  }, {\n    key: \"addMutationObserver\",\n    value: function addMutationObserver() {\n      this.observer = new MutationObserver(this.handleMutation);\n      this.observer.observe(this.observerTarget, {\n        attributes: true\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.numeros.length && this.observerTarget) {\n        this.addMutationObserver();\n      }\n      return this;\n    }\n  }], [{\n    key: \"incrementarNumero\",\n    value: function incrementarNumero(numero) {\n      var total = +numero.innerText;\n      var incremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    }\n  }]);\n  return AnimaNumeros;\n}();\n\n\n//# sourceURL=webpack://animais-eslint/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initDropdownMenu() {\n  var dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  function handleClick(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], function () {\n      _this.classList.remove('active');\n    });\n  }\n  dropdownMenus.forEach(function (menu) {\n    ['touchstart', 'click'].forEach(function (userEvent) {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\n\nfunction fetchAnimais(url, target) {\n  // Cria a div contendo informações\n  // com o total de animais\n  function createAnimal(animal) {\n    var div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = \"<h3>\".concat(animal.specie, \"</h3><span data-numero>\").concat(animal.total, \"</span>\");\n    return div;\n  }\n\n  // preenche cada animal no DOM\n  var numerosGrid = document.querySelector(target);\n  function preencherAnimais(animal) {\n    var divAnimal = createAnimal(animal);\n    numerosGrid.appendChild(divAnimal);\n  }\n\n  // anima os numeros de cad animal\n  function animaAnimaisNumeros() {\n    var animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-numero]', '.numeros', 'ativo');\n    animaNumeros.init();\n  }\n\n  // Puxa os animais através de um arquivo json\n  // e cria cada animal utilizando createAnimal\n  function criarAnimais() {\n    return _criarAnimais.apply(this, arguments);\n  }\n  function _criarAnimais() {\n    _criarAnimais = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var animaisResponse, animaisJSON;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch(url);\n          case 3:\n            animaisResponse = _context.sent;\n            _context.next = 6;\n            return animaisResponse.json();\n          case 6:\n            animaisJSON = _context.sent;\n            // Após a transformação de json, ativa as funções\n            // para preencher e animar os números\n            animaisJSON.forEach(function (animal) {\n              return preencherAnimais(animal);\n            });\n            animaAnimaisNumeros();\n            _context.next = 14;\n            break;\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            console.log(_context.t0);\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 11]]);\n    }));\n    return _criarAnimais.apply(this, arguments);\n  }\n  return criarAnimais();\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\n  fetch(url).then(function (response) {\n    return response.json();\n  }).then(function (bitcoin) {\n    var btcPreco = document.querySelector(target);\n    btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);\n  })[\"catch\"](function (erro) {\n    return console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  var funcionamento = document.querySelector('[data-semana]');\n  var diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  var horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n  var dataAgora = new Date();\n  var diaAgora = dataAgora.getDay();\n  var horarioAgora = dataAgora.getHours();\n  var semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  var horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initMenuMobile() {\n  var menuButton = document.querySelector('[data-menu=\"button\"]');\n  var menuList = document.querySelector('[data-menu=\"list\"]');\n  var eventos = ['click', 'touchstart'];\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButton.classList.add('active');\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, function () {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n  if (menuButton) {\n    eventos.forEach(function (evento) {\n      return menuButton.addEventListener(evento, openMenu);\n    });\n  }\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(botaoAbrir, botaoFechar, containerModal) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n\n    // bind this ao callback para fazer referência ao objeto da classe\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n\n  // abre ou fecha o modal\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"toggleModal\",\n    value: function toggleModal() {\n      this.containerModal.classList.toggle('ativo');\n    }\n  }, {\n    key: \"eventToggleModal\",\n    value: function eventToggleModal(event) {\n      event.preventDefault();\n      this.toggleModal();\n    }\n\n    // fecha o modal ao clicar do lado de fora\n  }, {\n    key: \"cliqueForaModal\",\n    value: function cliqueForaModal(event) {\n      if (event.target === this.containerModal) {\n        this.toggleModal();\n      }\n    }\n\n    // adiciona os eventos aos elementos do modal\n  }, {\n    key: \"addModalEvents\",\n    value: function addModalEvents() {\n      this.botaoAbrir.addEventListener('click', this.eventToggleModal);\n      this.botaoFechar.addEventListener('click', this.eventToggleModal);\n      this.containerModal.addEventListener('click', this.cliqueForaModal);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n        this.addModalEvents();\n      }\n      return this;\n    }\n  }]);\n  return Modal;\n}();\n\n\n//# sourceURL=webpack://animais-eslint/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        return html.addEventListener(userEvent, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://animais-eslint/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimacaoScroll)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar AnimacaoScroll = /*#__PURE__*/function () {\n  function AnimacaoScroll(sections) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnimacaoScroll);\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.6;\n    this.animaScroll = this.animaScroll.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnimacaoScroll, [{\n    key: \"animaScroll\",\n    value: function animaScroll() {\n      var _this = this;\n      this.sections.forEach(function (section) {\n        var sectionTop = section.getBoundingClientRect().top;\n        var isSectionVisible = sectionTop - _this.windowMetade < 0;\n        if (isSectionVisible) {\n          section.classList.add('ativo');\n        } else if (section.classList.contains('ativo')) {\n          section.classList.remove('ativo');\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.animaScroll();\n      window.addEventListener('scroll', this.animaScroll);\n    }\n  }]);\n  return AnimacaoScroll;\n}();\n\n\n//# sourceURL=webpack://animais-eslint/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: \"smooth\",\n        block: \"start\"\n      };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrollToSection\",\n    value: function scrollToSection(event) {\n      event.preventDefault();\n      var href = event.currentTarget.getAttribute(\"href\");\n      var section = document.querySelector(href);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLinkEvent\",\n    value: function addLinkEvent() {\n      var _this = this;\n      this.linksInternos.forEach(function (link) {\n        link.addEventListener(\"click\", _this.scrollToSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        this.addLinkEvent();\n      }\n      return this;\n    }\n  }]);\n  return ScrollSuave;\n}();\n\n\n//# sourceURL=webpack://animais-eslint/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar TabNav = /*#__PURE__*/function () {\n  function TabNav(menu, content) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TabNav);\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  // ativa a tab de acordo com o index da mesma\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TabNav, [{\n    key: \"activeTab\",\n    value: function activeTab(index) {\n      var _this = this;\n      this.tabContent.forEach(function (section) {\n        section.classList.remove(_this.activeClass);\n      });\n      var direcao = this.tabContent[index].dataset.anime;\n      this.tabContent[index].classList.add(this.activeClass, direcao);\n    }\n\n    // Adiciona os eventos nas tabs\n  }, {\n    key: \"addTabNavEvent\",\n    value: function addTabNavEvent() {\n      var _this2 = this;\n      this.tabMenu.forEach(function (itemMenu, index) {\n        itemMenu.addEventListener('click', function () {\n          return _this2.activeTab(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tabMenu.length && this.tabContent.length) {\n        // ativar primeiro item\n        this.activeTab(0);\n        this.addTabNavEvent();\n      }\n      return this;\n    }\n  }]);\n  return TabNav;\n}();\n\n\n//# sourceURL=webpack://animais-eslint/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Tooltip = /*#__PURE__*/function () {\n  function Tooltip(tooltips) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Tooltip);\n    this.tooltips = document.querySelectorAll(tooltips);\n\n    // bind do objeto da classe aos callbakc\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseOver = this.onMouseOver.bind(this);\n  }\n\n  // move a tooltip com base em seus estilos de acordo com a posição do mouse\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tooltip, [{\n    key: \"onMouseMove\",\n    value: function onMouseMove(event) {\n      this.tooltipBox.style.top = \"\".concat(event.pageY + 20, \"px\");\n      if (event.pageX + 240 > window.innerWidth) {\n        this.tooltipBox.style.left = \"\".concat(event.pageX - 190, \"px\");\n      } else {\n        this.tooltipBox.style.left = \"\".concat(event.pageX + 20, \"px\");\n      }\n    }\n\n    // remove a tooltip e os eventos de mousemove e mouse leave\n  }, {\n    key: \"onMouseLeave\",\n    value: function onMouseLeave(event) {\n      this.tooltipBox.remove();\n      event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n      event.currentTarget.removeEventListener('mousemove', this.onMouseMove);\n    }\n\n    // cria tooltip box e coloca no body\n  }, {\n    key: \"criarTooltipBox\",\n    value: function criarTooltipBox(element) {\n      var tooltipBox = document.createElement('div');\n      var text = element.getAttribute('aria-label');\n      tooltipBox.classList.add('tooltip');\n      tooltipBox.innerText = text;\n      document.body.appendChild(tooltipBox);\n      this.tooltipBox = tooltipBox;\n    }\n\n    // cria a tooltip e adiciona os eventos de mouse move e mouse leave ao target\n  }, {\n    key: \"onMouseOver\",\n    value: function onMouseOver(event) {\n      // cria a tooltipbox e coloca em uma propriedade\n      this.criarTooltipBox(event.currentTarget);\n      event.currentTarget.addEventListener('mousemove', this.onMouseMove);\n      event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n    }\n\n    // adiciona os eventos de mouse over a cada tooltip\n  }, {\n    key: \"addTooltipsEvent\",\n    value: function addTooltipsEvent() {\n      var _this = this;\n      this.tooltips.forEach(function (item) {\n        item.addEventListener('mouseover', _this.onMouseOver);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tooltips.length) {\n        this.addTooltipsEvent();\n      }\n      return this;\n    }\n  }]);\n  return Tooltip;\n}();\n\n\n//# sourceURL=webpack://animais-eslint/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\nvar accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-anime=\"accordion\"] dt');\naccordion.init();\nvar tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\nvar tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]');\ntooltip.init();\nvar scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"scroll\"]');\nscrollAnima.init();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('../../animaisapi.json', '.numeros-grid');\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('https://blockchain.info/ticker', '.btc-preco');\n\n//# sourceURL=webpack://animais-eslint/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\r\nfunction _regeneratorRuntime() {\r\n  \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\r\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\r\n    return exports;\r\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\r\n  var exports = {},\r\n    Op = Object.prototype,\r\n    hasOwn = Op.hasOwnProperty,\r\n    defineProperty = Object.defineProperty || function (obj, key, desc) {\r\n      obj[key] = desc.value;\r\n    },\r\n    $Symbol = \"function\" == typeof Symbol ? Symbol : {},\r\n    iteratorSymbol = $Symbol.iterator || \"@@iterator\",\r\n    asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\r\n    toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\r\n  function define(obj, key, value) {\r\n    return Object.defineProperty(obj, key, {\r\n      value: value,\r\n      enumerable: !0,\r\n      configurable: !0,\r\n      writable: !0\r\n    }), obj[key];\r\n  }\r\n  try {\r\n    define({}, \"\");\r\n  } catch (err) {\r\n    define = function define(obj, key, value) {\r\n      return obj[key] = value;\r\n    };\r\n  }\r\n  function wrap(innerFn, outerFn, self, tryLocsList) {\r\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\r\n      generator = Object.create(protoGenerator.prototype),\r\n      context = new Context(tryLocsList || []);\r\n    return defineProperty(generator, \"_invoke\", {\r\n      value: makeInvokeMethod(innerFn, self, context)\r\n    }), generator;\r\n  }\r\n  function tryCatch(fn, obj, arg) {\r\n    try {\r\n      return {\r\n        type: \"normal\",\r\n        arg: fn.call(obj, arg)\r\n      };\r\n    } catch (err) {\r\n      return {\r\n        type: \"throw\",\r\n        arg: err\r\n      };\r\n    }\r\n  }\r\n  exports.wrap = wrap;\r\n  var ContinueSentinel = {};\r\n  function Generator() {}\r\n  function GeneratorFunction() {}\r\n  function GeneratorFunctionPrototype() {}\r\n  var IteratorPrototype = {};\r\n  define(IteratorPrototype, iteratorSymbol, function () {\r\n    return this;\r\n  });\r\n  var getProto = Object.getPrototypeOf,\r\n    NativeIteratorPrototype = getProto && getProto(getProto(values([])));\r\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\r\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\r\n  function defineIteratorMethods(prototype) {\r\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\r\n      define(prototype, method, function (arg) {\r\n        return this._invoke(method, arg);\r\n      });\r\n    });\r\n  }\r\n  function AsyncIterator(generator, PromiseImpl) {\r\n    function invoke(method, arg, resolve, reject) {\r\n      var record = tryCatch(generator[method], generator, arg);\r\n      if (\"throw\" !== record.type) {\r\n        var result = record.arg,\r\n          value = result.value;\r\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\r\n          invoke(\"next\", value, resolve, reject);\r\n        }, function (err) {\r\n          invoke(\"throw\", err, resolve, reject);\r\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\r\n          result.value = unwrapped, resolve(result);\r\n        }, function (error) {\r\n          return invoke(\"throw\", error, resolve, reject);\r\n        });\r\n      }\r\n      reject(record.arg);\r\n    }\r\n    var previousPromise;\r\n    defineProperty(this, \"_invoke\", {\r\n      value: function value(method, arg) {\r\n        function callInvokeWithMethodAndArg() {\r\n          return new PromiseImpl(function (resolve, reject) {\r\n            invoke(method, arg, resolve, reject);\r\n          });\r\n        }\r\n        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\r\n      }\r\n    });\r\n  }\r\n  function makeInvokeMethod(innerFn, self, context) {\r\n    var state = \"suspendedStart\";\r\n    return function (method, arg) {\r\n      if (\"executing\" === state) throw new Error(\"Generator is already running\");\r\n      if (\"completed\" === state) {\r\n        if (\"throw\" === method) throw arg;\r\n        return doneResult();\r\n      }\r\n      for (context.method = method, context.arg = arg;;) {\r\n        var delegate = context.delegate;\r\n        if (delegate) {\r\n          var delegateResult = maybeInvokeDelegate(delegate, context);\r\n          if (delegateResult) {\r\n            if (delegateResult === ContinueSentinel) continue;\r\n            return delegateResult;\r\n          }\r\n        }\r\n        if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\r\n          if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\r\n          context.dispatchException(context.arg);\r\n        } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\r\n        state = \"executing\";\r\n        var record = tryCatch(innerFn, self, context);\r\n        if (\"normal\" === record.type) {\r\n          if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\r\n          return {\r\n            value: record.arg,\r\n            done: context.done\r\n          };\r\n        }\r\n        \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\r\n      }\r\n    };\r\n  }\r\n  function maybeInvokeDelegate(delegate, context) {\r\n    var methodName = context.method,\r\n      method = delegate.iterator[methodName];\r\n    if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel;\r\n    var record = tryCatch(method, delegate.iterator, context.arg);\r\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\r\n    var info = record.arg;\r\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\r\n  }\r\n  function pushTryEntry(locs) {\r\n    var entry = {\r\n      tryLoc: locs[0]\r\n    };\r\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\r\n  }\r\n  function resetTryEntry(entry) {\r\n    var record = entry.completion || {};\r\n    record.type = \"normal\", delete record.arg, entry.completion = record;\r\n  }\r\n  function Context(tryLocsList) {\r\n    this.tryEntries = [{\r\n      tryLoc: \"root\"\r\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\r\n  }\r\n  function values(iterable) {\r\n    if (iterable) {\r\n      var iteratorMethod = iterable[iteratorSymbol];\r\n      if (iteratorMethod) return iteratorMethod.call(iterable);\r\n      if (\"function\" == typeof iterable.next) return iterable;\r\n      if (!isNaN(iterable.length)) {\r\n        var i = -1,\r\n          next = function next() {\r\n            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\r\n            return next.value = undefined, next.done = !0, next;\r\n          };\r\n        return next.next = next;\r\n      }\r\n    }\r\n    return {\r\n      next: doneResult\r\n    };\r\n  }\r\n  function doneResult() {\r\n    return {\r\n      value: undefined,\r\n      done: !0\r\n    };\r\n  }\r\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", {\r\n    value: GeneratorFunctionPrototype,\r\n    configurable: !0\r\n  }), defineProperty(GeneratorFunctionPrototype, \"constructor\", {\r\n    value: GeneratorFunction,\r\n    configurable: !0\r\n  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\r\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\r\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\r\n  }, exports.mark = function (genFun) {\r\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\r\n  }, exports.awrap = function (arg) {\r\n    return {\r\n      __await: arg\r\n    };\r\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\r\n    return this;\r\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\r\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\r\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\r\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\r\n      return result.done ? result.value : iter.next();\r\n    });\r\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\r\n    return this;\r\n  }), define(Gp, \"toString\", function () {\r\n    return \"[object Generator]\";\r\n  }), exports.keys = function (val) {\r\n    var object = Object(val),\r\n      keys = [];\r\n    for (var key in object) keys.push(key);\r\n    return keys.reverse(), function next() {\r\n      for (; keys.length;) {\r\n        var key = keys.pop();\r\n        if (key in object) return next.value = key, next.done = !1, next;\r\n      }\r\n      return next.done = !0, next;\r\n    };\r\n  }, exports.values = values, Context.prototype = {\r\n    constructor: Context,\r\n    reset: function reset(skipTempReset) {\r\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\r\n    },\r\n    stop: function stop() {\r\n      this.done = !0;\r\n      var rootRecord = this.tryEntries[0].completion;\r\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\r\n      return this.rval;\r\n    },\r\n    dispatchException: function dispatchException(exception) {\r\n      if (this.done) throw exception;\r\n      var context = this;\r\n      function handle(loc, caught) {\r\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\r\n      }\r\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\r\n        var entry = this.tryEntries[i],\r\n          record = entry.completion;\r\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\r\n        if (entry.tryLoc <= this.prev) {\r\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\r\n            hasFinally = hasOwn.call(entry, \"finallyLoc\");\r\n          if (hasCatch && hasFinally) {\r\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\r\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\r\n          } else if (hasCatch) {\r\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\r\n          } else {\r\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\r\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\r\n          }\r\n        }\r\n      }\r\n    },\r\n    abrupt: function abrupt(type, arg) {\r\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\r\n        var entry = this.tryEntries[i];\r\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\r\n          var finallyEntry = entry;\r\n          break;\r\n        }\r\n      }\r\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\r\n      var record = finallyEntry ? finallyEntry.completion : {};\r\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\r\n    },\r\n    complete: function complete(record, afterLoc) {\r\n      if (\"throw\" === record.type) throw record.arg;\r\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\r\n    },\r\n    finish: function finish(finallyLoc) {\r\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\r\n        var entry = this.tryEntries[i];\r\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\r\n      }\r\n    },\r\n    \"catch\": function _catch(tryLoc) {\r\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\r\n        var entry = this.tryEntries[i];\r\n        if (entry.tryLoc === tryLoc) {\r\n          var record = entry.completion;\r\n          if (\"throw\" === record.type) {\r\n            var thrown = record.arg;\r\n            resetTryEntry(entry);\r\n          }\r\n          return thrown;\r\n        }\r\n      }\r\n      throw new Error(\"illegal catch attempt\");\r\n    },\r\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\r\n      return this.delegate = {\r\n        iterator: values(iterable),\r\n        resultName: resultName,\r\n        nextLoc: nextLoc\r\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\r\n    }\r\n  }, exports;\r\n}\r\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-eslint/./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("function _typeof(obj) {\r\n  \"@babel/helpers - typeof\";\r\n\r\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\r\n    return typeof obj;\r\n  } : function (obj) {\r\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\r\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\r\n}\r\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack://animais-eslint/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// TODO(Babel 8): Remove this file.\r\n\r\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\r\nmodule.exports = runtime;\r\n\r\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\r\ntry {\r\n  regeneratorRuntime = runtime;\r\n} catch (accidentalStrictMode) {\r\n  if (typeof globalThis === \"object\") {\r\n    globalThis.regeneratorRuntime = runtime;\r\n  } else {\r\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./node_modules/@babel/runtime/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\r\n  try {\r\n    var info = gen[key](arg);\r\n    var value = info.value;\r\n  } catch (error) {\r\n    reject(error);\r\n    return;\r\n  }\r\n  if (info.done) {\r\n    resolve(value);\r\n  } else {\r\n    Promise.resolve(value).then(_next, _throw);\r\n  }\r\n}\r\nfunction _asyncToGenerator(fn) {\r\n  return function () {\r\n    var self = this,\r\n      args = arguments;\r\n    return new Promise(function (resolve, reject) {\r\n      var gen = fn.apply(self, args);\r\n      function _next(value) {\r\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\r\n      }\r\n      function _throw(err) {\r\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\r\n      }\r\n      _next(undefined);\r\n    });\r\n  };\r\n}\n\n//# sourceURL=webpack://animais-eslint/./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\r\n  if (!(instance instanceof Constructor)) {\r\n    throw new TypeError(\"Cannot call a class as a function\");\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-eslint/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\r\nfunction _defineProperties(target, props) {\r\n  for (var i = 0; i < props.length; i++) {\r\n    var descriptor = props[i];\r\n    descriptor.enumerable = descriptor.enumerable || false;\r\n    descriptor.configurable = true;\r\n    if (\"value\" in descriptor) descriptor.writable = true;\r\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\r\n  }\r\n}\r\nfunction _createClass(Constructor, protoProps, staticProps) {\r\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\r\n  if (staticProps) _defineProperties(Constructor, staticProps);\r\n  Object.defineProperty(Constructor, \"prototype\", {\r\n    writable: false\r\n  });\r\n  return Constructor;\r\n}\n\n//# sourceURL=webpack://animais-eslint/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\r\nfunction _toPrimitive(input, hint) {\r\n  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input) !== \"object\" || input === null) return input;\r\n  var prim = input[Symbol.toPrimitive];\r\n  if (prim !== undefined) {\r\n    var res = prim.call(input, hint || \"default\");\r\n    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(res) !== \"object\") return res;\r\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\r\n  }\r\n  return (hint === \"string\" ? String : Number)(input);\r\n}\n\n//# sourceURL=webpack://animais-eslint/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\r\n\r\nfunction _toPropertyKey(arg) {\r\n  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arg, \"string\");\r\n  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key) === \"symbol\" ? key : String(key);\r\n}\n\n//# sourceURL=webpack://animais-eslint/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\r\n  \"@babel/helpers - typeof\";\r\n\r\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\r\n    return typeof obj;\r\n  } : function (obj) {\r\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\r\n  }, _typeof(obj);\r\n}\n\n//# sourceURL=webpack://animais-eslint/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;