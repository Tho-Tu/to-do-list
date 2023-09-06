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

/***/ "./src/dom-interaction.js":
/*!********************************!*\
  !*** ./src/dom-interaction.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domInteraction)
/* harmony export */ });
/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do */ "./src/create-to-do.js");
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");



function domInteraction() {
  projects();
}

// dashboard

function home() {
  //
}

function projects() {
  const addProjectButton = document.querySelector("#add-project-button");
  addProjectButton.addEventListener("click", () => {
    toggleCreateNewProject();
  });

  const newProjectLi = document.querySelector("#add-new-project");

  const newProjectInput = document.querySelector("#new-project");
  newProjectInput.addEventListener("click", () => {
    //
  });

  const submitNewProject = document.querySelector("#submit-new-project");
  submitNewProject.addEventListener("click", () => {
    //
  });

  let projectDisplay = false;
  const toggleCreateNewProject = () => {
    if (projectDisplay === false) {
      newProjectLi.setAttribute("style", "display: flex");
      projectDisplay = true;
    } else {
      newProjectLi.setAttribute("style", "display: none");
      projectDisplay = false;
    }
  };

  const createNewProjectLi = (projectName) => {
    const newProjectLi = document.createElement("li");
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = `${projectName}`;
    newProjectButton.setAttribute(`data-${projectName}`, `${projectName}`);
    newProjectLi.appendChild(newProjectButton);
  };
}

// main content

function addToDo() {
  //
}

function toDoCard() {
  //
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
/* harmony import */ var _dom_interaction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-interaction.js */ "./src/dom-interaction.js");





(0,_load_initial_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

(0,_dom_interaction_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

const testOne = (0,_create_to_do_js__WEBPACK_IMPORTED_MODULE_0__["default"])("exercise", "cardio", "today", "medium", "false");
testOne.updateCompleted("true");
console.log(`to do testOne: ${testOne.getCompleted()}`);

const testProject = (0,_create_project_js__WEBPACK_IMPORTED_MODULE_1__["default"])("Test Project", testOne);

console.log(testProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUN3QztBQUNROztBQUVqQztBQUNmO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsWUFBWTtBQUNsRCwwQ0FBMEMsWUFBWSxNQUFNLFlBQVk7QUFDeEU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0R3QztBQUNLOztBQUU5QjtBQUNmO0FBQ0EseUJBQXlCLDJEQUFhOztBQUV0QyxtQkFBbUIseURBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDSztBQUNKO0FBQ007O0FBRWxELDREQUFXOztBQUVYLCtEQUFjOztBQUVkLGdCQUFnQiw0REFBVTtBQUMxQjtBQUNBLDhCQUE4Qix1QkFBdUI7O0FBRXJELG9CQUFvQiw4REFBYTs7QUFFakMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXRvLWRvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLWludGVyYWN0aW9uLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1pbml0aWFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgdG9Eb09iamVjdCkge1xuICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lO1xuICBsZXQgcHJvamVjdFRvRG8gPSBbXTtcblxuICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9ICgpID0+IHByb2plY3ROYW1lO1xuICBjb25zdCB1cGRhdGVQcm9qZWN0TmFtZSA9ICh1cGRhdGUpID0+IChwcm9qZWN0TmFtZSA9IHVwZGF0ZSk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdCA9ICgpID0+IHByb2plY3RUb0RvO1xuICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKCkgPT4gcHJvamVjdFRvRG8ucHVzaCh0b0RvT2JqZWN0KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgdG9Eb0luZGV4ID0gcHJvamVjdFRvRG8uaW5kZXhPZih0b0RvT2JqZWN0KTtcbiAgICBwcm9qZWN0VG9Eby5zcGxpY2UodG9Eb0luZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3ROYW1lLFxuICAgIHVwZGF0ZVByb2plY3ROYW1lLFxuICAgIGdldFByb2plY3QsXG4gICAgdXBkYXRlUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVG9EbyhcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBkdWVEYXRlLFxuICBwcmlvcml0eSxcbiAgY29tcGxldGVkXG4pIHtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gIGNvbnN0IGdldENvbXBsZXRlZCA9ICgpID0+IGNvbXBsZXRlZDtcblxuICBmdW5jdGlvbiB1cGRhdGVUaXRsZSh1cGRhdGUpIHtcbiAgICB0aXRsZSA9IHVwZGF0ZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVEZXNjcmlwdGlvbih1cGRhdGUpIHtcbiAgICBkZXNjcmlwdGlvbiA9IHVwZGF0ZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVEdWVEYXRlKHVwZGF0ZSkge1xuICAgIGR1ZURhdGUgPSB1cGRhdGU7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlUHJpb3JpdHkodXBkYXRlKSB7XG4gICAgcHJpb3JpdHkgPSB1cGRhdGU7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZWQodXBkYXRlKSB7XG4gICAgY29tcGxldGVkID0gdXBkYXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIGdldENvbXBsZXRlZCxcbiAgICB1cGRhdGVUaXRsZSxcbiAgICB1cGRhdGVEZXNjcmlwdGlvbixcbiAgICB1cGRhdGVEdWVEYXRlLFxuICAgIHVwZGF0ZVByaW9yaXR5LFxuICAgIHVwZGF0ZUNvbXBsZXRlZCxcbiAgfTtcbn1cbiIsImltcG9ydCBjcmVhdGVUb0RvIGZyb20gXCIuL2NyZWF0ZS10by1kb1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlLXByb2plY3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZG9tSW50ZXJhY3Rpb24oKSB7XG4gIHByb2plY3RzKCk7XG59XG5cbi8vIGRhc2hib2FyZFxuXG5mdW5jdGlvbiBob21lKCkge1xuICAvL1xufVxuXG5mdW5jdGlvbiBwcm9qZWN0cygpIHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlQ3JlYXRlTmV3UHJvamVjdCgpO1xuICB9KTtcblxuICBjb25zdCBuZXdQcm9qZWN0TGkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1uZXctcHJvamVjdFwiKTtcblxuICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0XCIpO1xuICBuZXdQcm9qZWN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvL1xuICB9KTtcblxuICBjb25zdCBzdWJtaXROZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXQtbmV3LXByb2plY3RcIik7XG4gIHN1Ym1pdE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvL1xuICB9KTtcblxuICBsZXQgcHJvamVjdERpc3BsYXkgPSBmYWxzZTtcbiAgY29uc3QgdG9nZ2xlQ3JlYXRlTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdERpc3BsYXkgPT09IGZhbHNlKSB7XG4gICAgICBuZXdQcm9qZWN0TGkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBmbGV4XCIpO1xuICAgICAgcHJvamVjdERpc3BsYXkgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdQcm9qZWN0TGkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpO1xuICAgICAgcHJvamVjdERpc3BsYXkgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlTmV3UHJvamVjdExpID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZX1gO1xuICAgIG5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKGBkYXRhLSR7cHJvamVjdE5hbWV9YCwgYCR7cHJvamVjdE5hbWV9YCk7XG4gICAgbmV3UHJvamVjdExpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICB9O1xufVxuXG4vLyBtYWluIGNvbnRlbnRcblxuZnVuY3Rpb24gYWRkVG9EbygpIHtcbiAgLy9cbn1cblxuZnVuY3Rpb24gdG9Eb0NhcmQoKSB7XG4gIC8vXG59XG4iLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG9cIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRJbml0aWFsKCkge1xuICAvLyBjcmVhdGVzIGRlZmF1bHQgcHJvamVjdCBhbmQgdG9kb1xuICBjb25zdCBnZW5lcmFsUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJHZW5lcmFsXCIpO1xuXG4gIGNvbnN0IGhvbWV3b3JrID0gY3JlYXRlVG9EbyhcbiAgICBcImhvbWV3b3JrXCIsXG4gICAgXCJmaW5pc2ggdG9kbyBwcm9qZWN0XCIsXG4gICAgXCJ0b2RheVwiLFxuICAgIFwiaGlnaFwiLFxuICAgIFwiZmFsc2VcIlxuICApO1xuICBnZW5lcmFsUHJvamVjdC51cGRhdGVQcm9qZWN0KGhvbWV3b3JrKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVRvRG8gZnJvbSBcIi4vY3JlYXRlLXRvLWRvLmpzXCI7XG5pbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdC5qc1wiO1xuaW1wb3J0IGxvYWRJbml0aWFsIGZyb20gXCIuL2xvYWQtaW5pdGlhbC5qc1wiO1xuaW1wb3J0IGRvbUludGVyYWN0aW9uIGZyb20gXCIuL2RvbS1pbnRlcmFjdGlvbi5qc1wiO1xuXG5sb2FkSW5pdGlhbCgpO1xuXG5kb21JbnRlcmFjdGlvbigpO1xuXG5jb25zdCB0ZXN0T25lID0gY3JlYXRlVG9EbyhcImV4ZXJjaXNlXCIsIFwiY2FyZGlvXCIsIFwidG9kYXlcIiwgXCJtZWRpdW1cIiwgXCJmYWxzZVwiKTtcbnRlc3RPbmUudXBkYXRlQ29tcGxldGVkKFwidHJ1ZVwiKTtcbmNvbnNvbGUubG9nKGB0byBkbyB0ZXN0T25lOiAke3Rlc3RPbmUuZ2V0Q29tcGxldGVkKCl9YCk7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcIlRlc3QgUHJvamVjdFwiLCB0ZXN0T25lKTtcblxuY29uc29sZS5sb2codGVzdFByb2plY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9