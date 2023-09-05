/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createProject)
/* harmony export */ });
function createProject(name, toDoObject) {
  let projectName = name;
  let projectToDo = [];

  const getProjectName = () => projectName;
  const updateProjectName = (update) => (projectName = update);

  const getProject = () => projectToDo;
  const updateProject = () => projectToDo.push(toDoObject);
  const deleteProject = () => {
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

/***/ "./src/create-to-do.js":
/*!*****************************!*\
  !*** ./src/create-to-do.js ***!
  \*****************************/
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

/***/ "./src/load-initial.js":
/*!*****************************!*\
  !*** ./src/load-initial.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadInitial)
/* harmony export */ });
/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do */ "./src/create-to-do.js");
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project */ "./src/create-project.js");



function loadInitial() {
  // creates default project and todo
  const generalProject = (0,_create_project__WEBPACK_IMPORTED_MODULE_1__["default"])("General");

  const homework = (0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(
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
/* harmony import */ var _create_to_do_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do.js */ "./src/create-to-do.js");
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");
/* harmony import */ var _load_initial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./load-initial.js */ "./src/load-initial.js");




(0,_load_initial_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

const testOne = (0,_create_to_do_js__WEBPACK_IMPORTED_MODULE_0__["default"])("exercise", "cardio", "today", "medium", "false");
testOne.updateCompleted("true");
console.log(`to do testOne: ${testOne.getCompleted()}`);

const testProject = (0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Test Project", testOne);

console.log(testProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUN3QztBQUNLOztBQUU5QjtBQUNmO0FBQ0EseUJBQXlCLDJEQUFhOztBQUV0QyxtQkFBbUIseURBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNLO0FBQ0o7O0FBRTVDLDREQUFXOztBQUVYLGdCQUFnQiw0REFBVTtBQUMxQjtBQUNBLDhCQUE4Qix1QkFBdUI7O0FBRXJELG9CQUFvQiw4REFBYTs7QUFFakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXRvLWRvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1pbml0aWFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgdG9Eb09iamVjdCkge1xuICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lO1xuICBsZXQgcHJvamVjdFRvRG8gPSBbXTtcblxuICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9ICgpID0+IHByb2plY3ROYW1lO1xuICBjb25zdCB1cGRhdGVQcm9qZWN0TmFtZSA9ICh1cGRhdGUpID0+IChwcm9qZWN0TmFtZSA9IHVwZGF0ZSk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHByb2plY3RUb0RvO1xuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKCkgPT4gcHJvamVjdFRvRG8ucHVzaCh0b0RvT2JqZWN0KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgdG9Eb0luZGV4ID0gcHJvamVjdFRvRG8uaW5kZXhPZih0b0RvT2JqZWN0KTtcbiAgICBwcm9qZWN0VG9Eby5zcGxpY2UodG9Eb0luZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3ROYW1lLFxuICAgIHVwZGF0ZVByb2plY3ROYW1lLFxuICAgIGdldFByb2plY3QsXG4gICAgdXBkYXRlUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9EbyhcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgY29tcGxldGVkXG4pIHtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gIGNvbnN0IGdldENvbXBsZXRlZCA9ICgpID0+IGNvbXBsZXRlZDtcblxuICBmdW5jdGlvbiB1cGRhdGVUaXRsZSh1cGRhdGUpIHtcbiAgICB0aXRsZSA9IHVwZGF0ZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVEZXNjcmlwdGlvbih1cGRhdGUpIHtcbiAgICBkZXNjcmlwdGlvbiA9IHVwZGF0ZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVEdWVEYXRlKHVwZGF0ZSkge1xuICAgIGR1ZURhdGUgPSB1cGRhdGU7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlUHJpb3JpdHkodXBkYXRlKSB7XG4gICAgcHJpb3JpdHkgPSB1cGRhdGU7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZWQodXBkYXRlKSB7XG4gICAgY29tcGxldGVkID0gdXBkYXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIGdldENvbXBsZXRlZCxcbiAgICB1cGRhdGVUaXRsZSxcbiAgICB1cGRhdGVEZXNjcmlwdGlvbixcbiAgICB1cGRhdGVEdWVEYXRlLFxuICAgIHVwZGF0ZVByaW9yaXR5LFxuICAgIHVwZGF0ZUNvbXBsZXRlZCxcbiAgfTtcbn1cbiIsImltcG9ydCBjcmVhdGVUb0RvIGZyb20gXCIuL2NyZWF0ZS10by1kb1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEluaXRpYWwoKSB7XG4gIC8vIGNyZWF0ZXMgZGVmYXVsdCBwcm9qZWN0IGFuZCB0b2RvXG4gIGNvbnN0IGdlbmVyYWxQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcIkdlbmVyYWxcIik7XG5cbiAgY29uc3QgaG9tZXdvcmsgPSBjcmVhdGVUb0RvKFxuICAgIFwiaG9tZXdvcmtcIixcbiAgICBcImZpbmlzaCB0b2RvIHByb2plY3RcIixcbiAgICBcInRvZGF5XCIsXG4gICAgXCJoaWdoXCIsXG4gICAgXCJmYWxzZVwiXG4gICk7XG4gIGdlbmVyYWxQcm9qZWN0LnVwZGF0ZVByb2plY3QoaG9tZXdvcmspO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG8uanNcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0LmpzXCI7XG5pbXBvcnQgbG9hZEluaXRpYWwgZnJvbSBcIi4vbG9hZC1pbml0aWFsLmpzXCI7XG5cbmxvYWRJbml0aWFsKCk7XG5cbmNvbnN0IHRlc3RPbmUgPSBjcmVhdGVUb0RvKFwiZXhlcmNpc2VcIiwgXCJjYXJkaW9cIiwgXCJ0b2RheVwiLCBcIm1lZGl1bVwiLCBcImZhbHNlXCIpO1xudGVzdE9uZS51cGRhdGVDb21wbGV0ZWQoXCJ0cnVlXCIpO1xuY29uc29sZS5sb2coYHRvIGRvIHRlc3RPbmU6ICR7dGVzdE9uZS5nZXRDb21wbGV0ZWQoKX1gKTtcblxuY29uc3QgdGVzdFByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwiVGVzdCBQcm9qZWN0XCIsIHRlc3RPbmUpO1xuXG5jb25zb2xlLmxvZyh0ZXN0UHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=