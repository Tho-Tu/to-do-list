/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/all-projects.js":
/*!*****************************!*\
  !*** ./src/all-projects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projects)
/* harmony export */ });
function projects() {
  let projectArray = [];
  projectArray.push(loadInitial());

  const getProjectArray = () => projectArray;
  const updateProjectArray = () => projectArray.push(project);
  const deleteProjectArray = () => {
    let projectIndex = projectArray.indexOf(project);
    projectArray.splice(projectIndex, 1);
  };

  return { getProjectArray, updateProjectArray, deleteProjectArray };
}


/***/ }),

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

/***/ "./src/dom-project.js":
/*!****************************!*\
  !*** ./src/dom-project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domInteraction)
/* harmony export */ });
/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do */ "./src/create-to-do.js");
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");



function domInteraction() {
  projectsDom();
}

// dashboard

function homeDom() {
  //
}

function projectsDom() {
  // toggle add new project with plus button
  const addProjectButton = document.querySelector("#add-project-button");
  addProjectButton.addEventListener("click", () => {
    toggleCreateNewProject();
  });

  const addNewProject = document.querySelector("#add-new-project");

  let projectDisplay = false;
  const toggleCreateNewProject = () => {
    if (projectDisplay === false) {
      addNewProject.setAttribute("style", "display: flex");
      projectDisplay = true;
    } else {
      addNewProject.setAttribute("style", "display: none");
      projectDisplay = false;
    }
  };

  // get user new project name upon form submit and append to div (project)
  const createNewProjectLi = (projectName) => {
    const newProjectLi = document.createElement("li");
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = `${projectName}`;
    newProjectButton.setAttribute(`data-${projectName}`, `${projectName}`);
    newProjectLi.appendChild(newProjectButton);
    addNewProject.appendChild(newProjectLi);
  };

  const submitNewProject = document.querySelector("#submit-new-project");
  submitNewProject.addEventListener("submit", (event) => {
    event.preventDefault();

    const newProjectName = document.querySelector("#new-project");
    createNewProjectLi(newProjectName.value);
    toggleCreateNewProject();
  });
}

// main content

function addToDoDom() {
  //
}

function toDoCardDom() {
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
/* harmony import */ var _all_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-projects */ "./src/all-projects.js");
/* harmony import */ var _create_to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-to-do.js */ "./src/create-to-do.js");
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");
/* harmony import */ var _load_initial_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./load-initial.js */ "./src/load-initial.js");
/* harmony import */ var _dom_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-project.js */ "./src/dom-project.js");






const userProject = (0,_all_projects__WEBPACK_IMPORTED_MODULE_0__["default"])();

(0,_load_initial_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

(0,_dom_project_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

const testOne = (0,_create_to_do_js__WEBPACK_IMPORTED_MODULE_1__["default"])("exercise", "cardio", "today", "medium", "false");
testOne.updateCompleted("true");
console.log(`to do testOne: ${testOne.getCompleted()}`);

const testProject = (0,_create_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])("Test Project", testOne);

console.log(testProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFDd0M7QUFDUTs7QUFFakM7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQsMENBQTBDLFlBQVksTUFBTSxZQUFZO0FBQ3hFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R3QztBQUNLOztBQUU5QjtBQUNmO0FBQ0EseUJBQXlCLDJEQUFhOztBQUV0QyxtQkFBbUIseURBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0s7QUFDSztBQUNKO0FBQ0Q7O0FBRTNDLG9CQUFvQix5REFBUTs7QUFFNUIsNERBQVc7O0FBRVgsMkRBQVc7O0FBRVgsZ0JBQWdCLDREQUFVO0FBQzFCO0FBQ0EsOEJBQThCLHVCQUF1Qjs7QUFFckQsb0JBQW9CLDhEQUFhOztBQUVqQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWxsLXByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvYWQtaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0cygpIHtcbiAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuICBwcm9qZWN0QXJyYXkucHVzaChsb2FkSW5pdGlhbCgpKTtcblxuICBjb25zdCBnZXRQcm9qZWN0QXJyYXkgPSAoKSA9PiBwcm9qZWN0QXJyYXk7XG4gIGNvbnN0IHVwZGF0ZVByb2plY3RBcnJheSA9ICgpID0+IHByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QXJyYXkgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RBcnJheS5pbmRleE9mKHByb2plY3QpO1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgfTtcblxuICByZXR1cm4geyBnZXRQcm9qZWN0QXJyYXksIHVwZGF0ZVByb2plY3RBcnJheSwgZGVsZXRlUHJvamVjdEFycmF5IH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUsIHRvRG9PYmplY3QpIHtcbiAgbGV0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgbGV0IHByb2plY3RUb0RvID0gW107XG5cbiAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSAoKSA9PiBwcm9qZWN0TmFtZTtcbiAgY29uc3QgdXBkYXRlUHJvamVjdE5hbWUgPSAodXBkYXRlKSA9PiAocHJvamVjdE5hbWUgPSB1cGRhdGUpO1xuXG4gIGNvbnN0IGdldFByb2plY3QgPSAoKSA9PiBwcm9qZWN0VG9EbztcbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9ICgpID0+IHByb2plY3RUb0RvLnB1c2godG9Eb09iamVjdCk7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IHRvRG9JbmRleCA9IHByb2plY3RUb0RvLmluZGV4T2YodG9Eb09iamVjdCk7XG4gICAgcHJvamVjdFRvRG8uc3BsaWNlKHRvRG9JbmRleCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0TmFtZSxcbiAgICB1cGRhdGVQcm9qZWN0TmFtZSxcbiAgICBnZXRQcm9qZWN0LFxuICAgIHVwZGF0ZVByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvRG8oXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgZHVlRGF0ZSxcbiAgcHJpb3JpdHksXG4gIGNvbXBsZXRlZFxuKSB7XG4gIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4gIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG4gIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICBjb25zdCBnZXRDb21wbGV0ZWQgPSAoKSA9PiBjb21wbGV0ZWQ7XG5cbiAgZnVuY3Rpb24gdXBkYXRlVGl0bGUodXBkYXRlKSB7XG4gICAgdGl0bGUgPSB1cGRhdGU7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlRGVzY3JpcHRpb24odXBkYXRlKSB7XG4gICAgZGVzY3JpcHRpb24gPSB1cGRhdGU7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlRHVlRGF0ZSh1cGRhdGUpIHtcbiAgICBkdWVEYXRlID0gdXBkYXRlO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZVByaW9yaXR5KHVwZGF0ZSkge1xuICAgIHByaW9yaXR5ID0gdXBkYXRlO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ29tcGxldGVkKHVwZGF0ZSkge1xuICAgIGNvbXBsZXRlZCA9IHVwZGF0ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0VGl0bGUsXG4gICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgZ2V0RHVlRGF0ZSxcbiAgICBnZXRQcmlvcml0eSxcbiAgICBnZXRDb21wbGV0ZWQsXG4gICAgdXBkYXRlVGl0bGUsXG4gICAgdXBkYXRlRGVzY3JpcHRpb24sXG4gICAgdXBkYXRlRHVlRGF0ZSxcbiAgICB1cGRhdGVQcmlvcml0eSxcbiAgICB1cGRhdGVDb21wbGV0ZWQsXG4gIH07XG59XG4iLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG9cIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRvbUludGVyYWN0aW9uKCkge1xuICBwcm9qZWN0c0RvbSgpO1xufVxuXG4vLyBkYXNoYm9hcmRcblxuZnVuY3Rpb24gaG9tZURvbSgpIHtcbiAgLy9cbn1cblxuZnVuY3Rpb24gcHJvamVjdHNEb20oKSB7XG4gIC8vIHRvZ2dsZSBhZGQgbmV3IHByb2plY3Qgd2l0aCBwbHVzIGJ1dHRvblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVDcmVhdGVOZXdQcm9qZWN0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1uZXctcHJvamVjdFwiKTtcblxuICBsZXQgcHJvamVjdERpc3BsYXkgPSBmYWxzZTtcbiAgY29uc3QgdG9nZ2xlQ3JlYXRlTmV3UHJvamVjdCA9ICgpID0+IHtcbiAgICBpZiAocHJvamVjdERpc3BsYXkgPT09IGZhbHNlKSB7XG4gICAgICBhZGROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogZmxleFwiKTtcbiAgICAgIHByb2plY3REaXNwbGF5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkTmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIik7XG4gICAgICBwcm9qZWN0RGlzcGxheSA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICAvLyBnZXQgdXNlciBuZXcgcHJvamVjdCBuYW1lIHVwb24gZm9ybSBzdWJtaXQgYW5kIGFwcGVuZCB0byBkaXYgKHByb2plY3QpXG4gIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3RMaSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3RMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gYCR7cHJvamVjdE5hbWV9YDtcbiAgICBuZXdQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShgZGF0YS0ke3Byb2plY3ROYW1lfWAsIGAke3Byb2plY3ROYW1lfWApO1xuICAgIG5ld1Byb2plY3RMaS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcbiAgICBhZGROZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RMaSk7XG4gIH07XG5cbiAgY29uc3Qgc3VibWl0TmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0LW5ldy1wcm9qZWN0XCIpO1xuICBzdWJtaXROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKTtcbiAgICBjcmVhdGVOZXdQcm9qZWN0TGkobmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICAgIHRvZ2dsZUNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgfSk7XG59XG5cbi8vIG1haW4gY29udGVudFxuXG5mdW5jdGlvbiBhZGRUb0RvRG9tKCkge1xuICAvL1xufVxuXG5mdW5jdGlvbiB0b0RvQ2FyZERvbSgpIHtcbiAgLy9cbn1cbiIsImltcG9ydCBjcmVhdGVUb0RvIGZyb20gXCIuL2NyZWF0ZS10by1kb1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEluaXRpYWwoKSB7XG4gIC8vIGNyZWF0ZXMgZGVmYXVsdCBwcm9qZWN0IGFuZCB0b2RvXG4gIGNvbnN0IGdlbmVyYWxQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcIkdlbmVyYWxcIik7XG5cbiAgY29uc3QgaG9tZXdvcmsgPSBjcmVhdGVUb0RvKFxuICAgIFwiaG9tZXdvcmtcIixcbiAgICBcImZpbmlzaCB0b2RvIHByb2plY3RcIixcbiAgICBcInRvZGF5XCIsXG4gICAgXCJoaWdoXCIsXG4gICAgXCJmYWxzZVwiXG4gICk7XG4gIGdlbmVyYWxQcm9qZWN0LnVwZGF0ZVByb2plY3QoaG9tZXdvcmspO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vYWxsLXByb2plY3RzXCI7XG5pbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG8uanNcIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0LmpzXCI7XG5pbXBvcnQgbG9hZEluaXRpYWwgZnJvbSBcIi4vbG9hZC1pbml0aWFsLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNEb20gZnJvbSBcIi4vZG9tLXByb2plY3QuanNcIjtcblxuY29uc3QgdXNlclByb2plY3QgPSBwcm9qZWN0cygpO1xuXG5sb2FkSW5pdGlhbCgpO1xuXG5wcm9qZWN0c0RvbSgpO1xuXG5jb25zdCB0ZXN0T25lID0gY3JlYXRlVG9EbyhcImV4ZXJjaXNlXCIsIFwiY2FyZGlvXCIsIFwidG9kYXlcIiwgXCJtZWRpdW1cIiwgXCJmYWxzZVwiKTtcbnRlc3RPbmUudXBkYXRlQ29tcGxldGVkKFwidHJ1ZVwiKTtcbmNvbnNvbGUubG9nKGB0byBkbyB0ZXN0T25lOiAke3Rlc3RPbmUuZ2V0Q29tcGxldGVkKCl9YCk7XG5cbmNvbnN0IHRlc3RQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcIlRlc3QgUHJvamVjdFwiLCB0ZXN0T25lKTtcblxuY29uc29sZS5sb2codGVzdFByb2plY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9