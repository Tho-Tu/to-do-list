/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
function createProject(name) {
  let projectName = name;
  let projectToDo = [];

  const getProjectName = () => projectName;
  const updateProjectName = (update) => (projectName = update);

  const getProject = () => projectToDo;

  const updateProject = (toDoObject) => projectToDo.push(toDoObject);

  const deleteProject = (toDoObject) => {
    let toDoIndex = projectToDo.indexOf(toDoObject);
    projectToDo.splice(toDoIndex, 1);
  };

  return {
    getProjectName,
    updateProjectName,
    getProject,
    updateProject,
    deleteProject,
  };
}


/***/ }),

/***/ "./src/createToDo.js":
/*!***************************!*\
  !*** ./src/createToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createToDo)
/* harmony export */ });
function createToDo(
  title,
  description,
  dueDate,
  priority,
  completed
) {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getCompleted = () => completed;

  function updateTitle(update) {
    title = update;
  }
  function updateDescription(update) {
    description = update;
  }
  function updateDueDate(update) {
    dueDate = update;
  }
  function updatePriority(update) {
    priority = update;
  }

  function updateCompleted(update) {
    completed = update;
  }

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getCompleted,
    updateTitle,
    updateDescription,
    updateDueDate,
    updatePriority,
    updateCompleted,
  };
}


/***/ }),

/***/ "./src/loadInitial.js":
/*!****************************!*\
  !*** ./src/loadInitial.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadInitial)
/* harmony export */ });
/* harmony import */ var _createToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo */ "./src/createToDo.js");
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");



function loadInitial() {
  // creates default project and todo
  const generalProject = (0,_createProject__WEBPACK_IMPORTED_MODULE_1__["default"])("General");

  const homework = (0,_createToDo__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "homework",
    "finish todo project",
    "today",
    "high",
    "false"
  );
  generalProject.updateProject(homework);
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createToDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToDo.js */ "./src/createToDo.js");
/* harmony import */ var _createProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createProject.js */ "./src/createProject.js");
/* harmony import */ var _loadInitial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadInitial.js */ "./src/loadInitial.js");




(0,_loadInitial_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ3NDO0FBQ007O0FBRTdCO0FBQ2Y7QUFDQSx5QkFBeUIsMERBQWE7O0FBRXRDLG1CQUFtQix1REFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ007QUFDSjs7QUFFM0MsMkRBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZEluaXRpYWwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIGxldCBwcm9qZWN0TmFtZSA9IG5hbWU7XG4gIGxldCBwcm9qZWN0VG9EbyA9IFtdO1xuXG4gIGNvbnN0IGdldFByb2plY3ROYW1lID0gKCkgPT4gcHJvamVjdE5hbWU7XG4gIGNvbnN0IHVwZGF0ZVByb2plY3ROYW1lID0gKHVwZGF0ZSkgPT4gKHByb2plY3ROYW1lID0gdXBkYXRlKTtcblxuICBjb25zdCBnZXRQcm9qZWN0ID0gKCkgPT4gcHJvamVjdFRvRG87XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9ICh0b0RvT2JqZWN0KSA9PiBwcm9qZWN0VG9Eby5wdXNoKHRvRG9PYmplY3QpO1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAodG9Eb09iamVjdCkgPT4ge1xuICAgIGxldCB0b0RvSW5kZXggPSBwcm9qZWN0VG9Eby5pbmRleE9mKHRvRG9PYmplY3QpO1xuICAgIHByb2plY3RUb0RvLnNwbGljZSh0b0RvSW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdE5hbWUsXG4gICAgdXBkYXRlUHJvamVjdE5hbWUsXG4gICAgZ2V0UHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb0RvKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBjb21wbGV0ZWRcbikge1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgY29uc3QgZ2V0Q29tcGxldGVkID0gKCkgPT4gY29tcGxldGVkO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRpdGxlKHVwZGF0ZSkge1xuICAgIHRpdGxlID0gdXBkYXRlO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZURlc2NyaXB0aW9uKHVwZGF0ZSkge1xuICAgIGRlc2NyaXB0aW9uID0gdXBkYXRlO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZUR1ZURhdGUodXBkYXRlKSB7XG4gICAgZHVlRGF0ZSA9IHVwZGF0ZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVQcmlvcml0eSh1cGRhdGUpIHtcbiAgICBwcmlvcml0eSA9IHVwZGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlZCh1cGRhdGUpIHtcbiAgICBjb21wbGV0ZWQgPSB1cGRhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0Q29tcGxldGVkLFxuICAgIHVwZGF0ZVRpdGxlLFxuICAgIHVwZGF0ZURlc2NyaXB0aW9uLFxuICAgIHVwZGF0ZUR1ZURhdGUsXG4gICAgdXBkYXRlUHJpb3JpdHksXG4gICAgdXBkYXRlQ29tcGxldGVkLFxuICB9O1xufVxuIiwiaW1wb3J0IGNyZWF0ZVRvRG8gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSW5pdGlhbCgpIHtcbiAgLy8gY3JlYXRlcyBkZWZhdWx0IHByb2plY3QgYW5kIHRvZG9cbiAgY29uc3QgZ2VuZXJhbFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwiR2VuZXJhbFwiKTtcblxuICBjb25zdCBob21ld29yayA9IGNyZWF0ZVRvRG8oXG4gICAgXCJob21ld29ya1wiLFxuICAgIFwiZmluaXNoIHRvZG8gcHJvamVjdFwiLFxuICAgIFwidG9kYXlcIixcbiAgICBcImhpZ2hcIixcbiAgICBcImZhbHNlXCJcbiAgKTtcbiAgZ2VuZXJhbFByb2plY3QudXBkYXRlUHJvamVjdChob21ld29yayk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVUb0RvIGZyb20gXCIuL2NyZWF0ZVRvRG8uanNcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZVByb2plY3QuanNcIjtcbmltcG9ydCBsb2FkSW5pdGlhbCBmcm9tIFwiLi9sb2FkSW5pdGlhbC5qc1wiO1xuXG5sb2FkSW5pdGlhbCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9