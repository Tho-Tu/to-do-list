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
/* harmony import */ var _load_initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-initial */ "./src/load-initial.js");


function projects() {
  let projectArray = [];

  // load default 'general' project
  projectArray.push((0,_load_initial__WEBPACK_IMPORTED_MODULE_0__["default"])());
  let currentProjectIndex = 0;

  // push all to do into single array
  function allToDo() {
    let allToDoArray = [];
    projectArray.forEach((project) => {
      project.forEach((toDo) => {
        allToDoArray.push(toDo);
      });
    });
    return allToDoArray;
  }

  // filter for only important toDo
  function importantToDo() {
    let importantToDoArray = [];
    projectArray.forEach((project) => {
      project.forEach((toDo) => {
        importantToDoArray.push(toDo);
      });
    });
    return importantToDoArray;
  }
  const getProjectArray = () => projectArray;
  const updateProjectArray = (project) => projectArray.push(project);
  const deleteProjectArray = (projectIndex) => {
    // let projectIndex = projectArray.indexOf(project);
    projectArray.splice(projectIndex, 1);
  };

  return {
    getProjectArray,
    updateProjectArray,
    deleteProjectArray,
    currentProjectIndex,
    allToDo,
    importantToDo,
  };
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
function createProject(name) {
  let projectName = name;
  let projectToDo = [];

  const getProjectName = () => projectName;
  const updateProjectName = (update) => (projectName = update);

  const getProjectToDo = () => projectToDo;
  const updateProjectToDo = (toDoObject) => projectToDo.push(toDoObject);
  const deleteProjectToDo = (toDoObject) => {
    let toDoIndex = projectToDo.indexOf(toDoObject);
    projectToDo.splice(toDoIndex, 1);
  };

  return {
    getProjectName,
    updateProjectName,
    getProjectToDo,
    updateProjectToDo,
    deleteProjectToDo,
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

/***/ "./src/dom-add-to-do.js":
/*!******************************!*\
  !*** ./src/dom-add-to-do.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addToDoDom)
/* harmony export */ });
/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-to-do */ "./src/create-to-do.js");
/* harmony import */ var _dom_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-card */ "./src/dom-card.js");
/* harmony import */ var _components_icons_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/icons/close.svg */ "./src/components/icons/close.svg");
/* harmony import */ var _components_icons_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/icons/add.svg */ "./src/components/icons/add.svg");





function addToDoDom(getProjectArray, currentProjectIndex) {
  // toggle add new project with plus button
  const addToDoButton = document.querySelector("#add-to-do-button");
  addToDoButton.addEventListener("click", () => {
    toggleAddToDo();
  });

  const addToDoCard = document.querySelector(".add-to-do-card");
  const addToDoForm = document.querySelector("#add-to-do-form");

  let addToDoDisplay = false;
  function toggleAddToDo() {
    const addIcon = new Image();
    addIcon.src = _components_icons_add_svg__WEBPACK_IMPORTED_MODULE_3__;

    const closeIcon = new Image();
    closeIcon.src = _components_icons_close_svg__WEBPACK_IMPORTED_MODULE_2__;

    if (addToDoDisplay === false) {
      addToDoCard.setAttribute("style", "display: flex");
      addToDoDisplay = true;
      addToDoButton.textContent = "";
      addToDoButton.appendChild(closeIcon);
    } else {
      addToDoCard.setAttribute("style", "display: none");
      addToDoDisplay = false;
      addToDoButton.textContent = "";
      addToDoButton.appendChild(addIcon);
      addToDoForm.reset();
    }
  }

  // create new to do card
  const toDoTitle = document.querySelector("#to-do-title");
  const toDoDescription = document.querySelector("#to-do-description");
  const toDoDueDate = document.querySelector("#to-do-due-date");

  addToDoForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      let newToDo = (0,_create_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])(
        toDoTitle.value,
        toDoDescription.value,
        toDoDueDate.value,
        false,
        false
      );
      console.log("current project index: " + currentProjectIndex);

      // add newToDo based on current project (inside of whole array)

      getProjectArray()[currentProjectIndex].updateProjectToDo(newToDo);

      // console.log(
      //   getProjectArray()[currentProjectIndex].getProjectToDo()[-1].getTitle()
      // );

      (0,_dom_card__WEBPACK_IMPORTED_MODULE_1__["default"])(getProjectArray, currentProjectIndex);

      // addToDoForm.reset();
      // toggleAddToDo();
    },
    false
  );
}


/***/ }),

/***/ "./src/dom-card.js":
/*!*************************!*\
  !*** ./src/dom-card.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDoCardDom)
/* harmony export */ });
/* harmony import */ var _components_icons_check_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/icons/check-box-outline.svg */ "./src/components/icons/check-box-outline.svg");
/* harmony import */ var _components_icons_star_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/icons/star.svg */ "./src/components/icons/star.svg");
/* harmony import */ var _components_icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/icons/edit.svg */ "./src/components/icons/edit.svg");
/* harmony import */ var _components_icons_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/icons/delete.svg */ "./src/components/icons/delete.svg");





function toDoCardDom(getProjectArray, currentProjectIndex) {
  // display all the to do cards of each project

  const toDoSection = document.querySelector("#to-do-section");
  toDoSection.textContent = "";

  console.log("todoCardDOM current project index: " + currentProjectIndex);

  getProjectArray()
    [currentProjectIndex].getProjectToDo()
    .forEach((toDoObject, index) => {
      console.log(toDoObject.getTitle());
      const toDoCard = document.createElement("div");
      toDoCard.classList.add("to-do-card");

      const toDoComplete = document.createElement("button");
      toDoComplete.classList.add("to-do-complete");
      toDoComplete.setAttribute("type", "button");
      const checkBoxIcon = new Image();
      checkBoxIcon.src = _components_icons_check_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
      toDoComplete.appendChild(checkBoxIcon);
      toDoCard.appendChild(toDoComplete);

      const toDoTitle = document.createElement("div");
      toDoTitle.classList.add("to-do-title");
      toDoTitle.textContent = `${toDoObject.getTitle()}`;
      toDoCard.appendChild(toDoTitle);

      const toDoDueDate = document.createElement("div");
      toDoDueDate.classList.add("to-do-due-date");
      toDoDueDate.textContent = `Due Date: ${toDoObject.getDueDate()}`;
      toDoTitle.appendChild(toDoDueDate);

      const toDoButtons = document.createElement("div");
      toDoButtons.classList.add("to-do-buttons");

      const toDoFavorite = document.createElement("button");
      const starIcon = new Image();
      starIcon.src = _components_icons_star_svg__WEBPACK_IMPORTED_MODULE_1__;
      toDoFavorite.appendChild(starIcon);

      const toDoEdit = document.createElement("button");
      const editIcon = new Image();
      editIcon.src = _components_icons_edit_svg__WEBPACK_IMPORTED_MODULE_2__;
      toDoEdit.appendChild(editIcon);

      const toDoDelete = document.createElement("button");
      const deleteIcon = new Image();
      deleteIcon.src = _components_icons_delete_svg__WEBPACK_IMPORTED_MODULE_3__;
      toDoDelete.appendChild(deleteIcon);

      toDoButtons.appendChild(toDoFavorite);
      toDoButtons.appendChild(toDoEdit);
      toDoButtons.appendChild(toDoDelete);

      toDoCard.appendChild(toDoButtons);

      const toDoDescription = document.createElement("div");
      toDoDescription.classList.add("to-do-description");
      toDoDescription.textContent = `${toDoObject.getDescription()}`;

      toDoCard.appendChild(toDoDescription);

      toDoSection.appendChild(toDoCard);
    });

  // display all to do cards for all projects
  // display only important to do cards
  // when in (all to do/important), cannot allow user to add project
  // all of the above depends on currentProjectIndex
  //
  // each cards need read, title, description, due date, important, edit, delete
}


/***/ }),

/***/ "./src/dom-project.js":
/*!****************************!*\
  !*** ./src/dom-project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsDom)
/* harmony export */ });
/* harmony import */ var _create_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project.js */ "./src/create-project.js");
/* harmony import */ var _dom_add_to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-add-to-do.js */ "./src/dom-add-to-do.js");
/* harmony import */ var _dom_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-card.js */ "./src/dom-card.js");
/* harmony import */ var _components_icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/icons/edit.svg */ "./src/components/icons/edit.svg");
/* harmony import */ var _components_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/icons/delete.svg */ "./src/components/icons/delete.svg");
/* harmony import */ var _components_icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/icons/close.svg */ "./src/components/icons/close.svg");
/* harmony import */ var _components_icons_add_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/icons/add.svg */ "./src/components/icons/add.svg");
/* harmony import */ var _components_icons_done_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/icons/done.svg */ "./src/components/icons/done.svg");









function projectsDom({
  getProjectArray,
  updateProjectArray,
  deleteProjectArray,
  currentProjectIndex,
  allToDo,
  importantToDo,
}) {
  // toggle add new project with plus button
  const addProjectButton = document.querySelector("#add-project-button");
  addProjectButton.addEventListener("click", () => {
    toggleCreateNewProject();
  });

  const newProjectName = document.querySelector("#new-project");
  const addNewProject = document.querySelector("#add-new-project");

  let projectDisplay = false;
  function toggleCreateNewProject() {
    const addIcon = new Image();
    addIcon.src = _components_icons_add_svg__WEBPACK_IMPORTED_MODULE_6__;

    const closeIcon = new Image();
    closeIcon.src = _components_icons_close_svg__WEBPACK_IMPORTED_MODULE_5__;

    if (projectDisplay === false) {
      addNewProject.setAttribute("style", "display: flex");
      projectDisplay = true;
      addProjectButton.textContent = "";
      addProjectButton.appendChild(closeIcon);
    } else {
      addNewProject.setAttribute("style", "display: none");
      projectDisplay = false;
      addProjectButton.textContent = "";
      addProjectButton.appendChild(addIcon);
      submitNewProject.reset();
    }
  }

  // get user new project name upon form submit and append to project array
  const submitNewProject = document.querySelector("#add-new-project");
  submitNewProject.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      updateProjectArray((0,_create_project_js__WEBPACK_IMPORTED_MODULE_0__["default"])(newProjectName.value));
      submitNewProject.reset();
      toggleCreateNewProject();
      displayAllProjects();
    },
    false
  );

  function createEditButton(parentEl, item) {
    const editProjectDiv = document.createElement("div");
    editProjectDiv.setAttribute("style", "position: absolute");
    editProjectDiv.classList.add("edit-project-div");

    const editProjectForm = document.createElement("form");
    editProjectForm.setAttribute("action", "./index.html");
    editProjectForm.classList.add("edit-project-form");
    editProjectForm.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        item.updateProjectName(editProjectInput.value);
        editProjectDiv.textContent = "";
        displayAllProjects();
      },
      false
    );

    const editProjectInput = document.createElement("input");
    editProjectInput.setAttribute("type", "text");
    editProjectInput.setAttribute("placeholder", "Edit Project Name");
    editProjectInput.classList.add("edit-project-input");
    editProjectForm.appendChild(editProjectInput);

    const editProjectConfirm = document.createElement("button");
    editProjectConfirm.setAttribute("type", "submit");
    const doneIcon = new Image();
    doneIcon.src = _components_icons_done_svg__WEBPACK_IMPORTED_MODULE_7__;
    editProjectConfirm.append(doneIcon);
    editProjectForm.appendChild(editProjectConfirm);

    editProjectDiv.appendChild(editProjectForm);

    parentEl.appendChild(editProjectDiv);
  }

  // display all projects after every project input (add/delete/edit)
  const allProjects = document.querySelector("#projects-list");
  const projectMainHeading = document.querySelector(".main-heading h1");

  function displayAllProjects() {
    allProjects.textContent = "";
    getProjectArray().forEach((item, index) => {
      let projectName = item.getProjectName().toLowerCase();

      const newProjectLi = document.createElement("li");
      newProjectLi.setAttribute("style", "position:relative");

      const newProjectButton = document.createElement("button");
      const editProjectButton = document.createElement("button");
      const deleteProjectButton = document.createElement("button");

      newProjectButton.textContent = `${projectName}`;
      newProjectButton.setAttribute(`data-project`, `${projectName}`);
      newProjectButton.addEventListener("click", () => {
        currentProjectIndex = index;

        console.log(`project DOM new button: ${currentProjectIndex}`);

        // ensures creation of to do's are according to each project
        (0,_dom_add_to_do_js__WEBPACK_IMPORTED_MODULE_1__["default"])(getProjectArray, currentProjectIndex);
        // shows to do cards in current project
        (0,_dom_card_js__WEBPACK_IMPORTED_MODULE_2__["default"])(getProjectArray, currentProjectIndex);

        projectMainHeading.textContent = `${projectName.toUpperCase()}`;
      });

      const editIcon = new Image();
      editIcon.src = _components_icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__;
      editProjectButton.appendChild(editIcon);
      editProjectButton.setAttribute(`type`, `button`);
      editProjectButton.classList.add("edit-project-button");
      editProjectButton.setAttribute(`data-edit`, `${projectName}`);
      editProjectButton.addEventListener("click", () => {
        createEditButton(newProjectLi, item);
      });

      const deleteIcon = new Image();
      deleteIcon.src = _components_icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__;
      deleteProjectButton.appendChild(deleteIcon);
      deleteProjectButton.setAttribute(`type`, `button`);
      deleteProjectButton.setAttribute(`data-delete`, `${projectName}`);
      deleteProjectButton.addEventListener("click", () => {
        deleteProjectArray(index);
        displayAllProjects();
      });

      newProjectLi.appendChild(newProjectButton);
      newProjectLi.appendChild(editProjectButton);
      newProjectLi.appendChild(deleteProjectButton);
      allProjects.appendChild(newProjectLi);
    });
  }
  displayAllProjects();
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
    "important",
    "false"
  );
  generalProject.updateProjectToDo(homework);

  return generalProject;
}


/***/ }),

/***/ "./src/components/icons/add.svg":
/*!**************************************!*\
  !*** ./src/components/icons/add.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3be0ea4ac64cead2bf95.svg";

/***/ }),

/***/ "./src/components/icons/check-box-outline.svg":
/*!****************************************************!*\
  !*** ./src/components/icons/check-box-outline.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0d800b8ecd13e0a07667.svg";

/***/ }),

/***/ "./src/components/icons/close.svg":
/*!****************************************!*\
  !*** ./src/components/icons/close.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ded1e99216871d2a3ae.svg";

/***/ }),

/***/ "./src/components/icons/delete.svg":
/*!*****************************************!*\
  !*** ./src/components/icons/delete.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eac1a29b0fcadff53187.svg";

/***/ }),

/***/ "./src/components/icons/done.svg":
/*!***************************************!*\
  !*** ./src/components/icons/done.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f5849afc9f32f8f347c2.svg";

/***/ }),

/***/ "./src/components/icons/edit.svg":
/*!***************************************!*\
  !*** ./src/components/icons/edit.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb174535b66c89089803.svg";

/***/ }),

/***/ "./src/components/icons/star.svg":
/*!***************************************!*\
  !*** ./src/components/icons/star.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0317b43c823307c0a1e0.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _dom_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-project.js */ "./src/dom-project.js");
/* harmony import */ var _dom_add_to_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-add-to-do */ "./src/dom-add-to-do.js");





// creates all projects object
const userProject = (0,_all_projects__WEBPACK_IMPORTED_MODULE_0__["default"])();
// loads into DOM
(0,_dom_project_js__WEBPACK_IMPORTED_MODULE_2__["default"])(userProject);

// toDoDom(userProject);

const testOne = (0,_create_to_do_js__WEBPACK_IMPORTED_MODULE_1__["default"])("exercise", "cardio", "today", "medium", "false");
testOne.updateCompleted("true");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCc0M7QUFDSztBQUNBO0FBQ0w7O0FBRXRDO0FBQ0Esb0JBQW9CLHlEQUFRO0FBQzVCO0FBQ0EsMkRBQVc7O0FBRVg7O0FBRUEsZ0JBQWdCLDREQUFVO0FBQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hbGwtcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZS10by1kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1hZGQtdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tY2FyZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1pbml0aWFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkSW5pdGlhbCBmcm9tIFwiLi9sb2FkLWluaXRpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMoKSB7XG4gIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICAvLyBsb2FkIGRlZmF1bHQgJ2dlbmVyYWwnIHByb2plY3RcbiAgcHJvamVjdEFycmF5LnB1c2gobG9hZEluaXRpYWwoKSk7XG4gIGxldCBjdXJyZW50UHJvamVjdEluZGV4ID0gMDtcblxuICAvLyBwdXNoIGFsbCB0byBkbyBpbnRvIHNpbmdsZSBhcnJheVxuICBmdW5jdGlvbiBhbGxUb0RvKCkge1xuICAgIGxldCBhbGxUb0RvQXJyYXkgPSBbXTtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5mb3JFYWNoKCh0b0RvKSA9PiB7XG4gICAgICAgIGFsbFRvRG9BcnJheS5wdXNoKHRvRG8pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbFRvRG9BcnJheTtcbiAgfVxuXG4gIC8vIGZpbHRlciBmb3Igb25seSBpbXBvcnRhbnQgdG9Eb1xuICBmdW5jdGlvbiBpbXBvcnRhbnRUb0RvKCkge1xuICAgIGxldCBpbXBvcnRhbnRUb0RvQXJyYXkgPSBbXTtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5mb3JFYWNoKCh0b0RvKSA9PiB7XG4gICAgICAgIGltcG9ydGFudFRvRG9BcnJheS5wdXNoKHRvRG8pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGltcG9ydGFudFRvRG9BcnJheTtcbiAgfVxuICBjb25zdCBnZXRQcm9qZWN0QXJyYXkgPSAoKSA9PiBwcm9qZWN0QXJyYXk7XG4gIGNvbnN0IHVwZGF0ZVByb2plY3RBcnJheSA9IChwcm9qZWN0KSA9PiBwcm9qZWN0QXJyYXkucHVzaChwcm9qZWN0KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEFycmF5ID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgIC8vIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0QXJyYXkuaW5kZXhPZihwcm9qZWN0KTtcbiAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRQcm9qZWN0QXJyYXksXG4gICAgdXBkYXRlUHJvamVjdEFycmF5LFxuICAgIGRlbGV0ZVByb2plY3RBcnJheSxcbiAgICBjdXJyZW50UHJvamVjdEluZGV4LFxuICAgIGFsbFRvRG8sXG4gICAgaW1wb3J0YW50VG9EbyxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lO1xuICBsZXQgcHJvamVjdFRvRG8gPSBbXTtcblxuICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9ICgpID0+IHByb2plY3ROYW1lO1xuICBjb25zdCB1cGRhdGVQcm9qZWN0TmFtZSA9ICh1cGRhdGUpID0+IChwcm9qZWN0TmFtZSA9IHVwZGF0ZSk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdFRvRG8gPSAoKSA9PiBwcm9qZWN0VG9EbztcbiAgY29uc3QgdXBkYXRlUHJvamVjdFRvRG8gPSAodG9Eb09iamVjdCkgPT4gcHJvamVjdFRvRG8ucHVzaCh0b0RvT2JqZWN0KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdFRvRG8gPSAodG9Eb09iamVjdCkgPT4ge1xuICAgIGxldCB0b0RvSW5kZXggPSBwcm9qZWN0VG9Eby5pbmRleE9mKHRvRG9PYmplY3QpO1xuICAgIHByb2plY3RUb0RvLnNwbGljZSh0b0RvSW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdE5hbWUsXG4gICAgdXBkYXRlUHJvamVjdE5hbWUsXG4gICAgZ2V0UHJvamVjdFRvRG8sXG4gICAgdXBkYXRlUHJvamVjdFRvRG8sXG4gICAgZGVsZXRlUHJvamVjdFRvRG8sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb0RvKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBjb21wbGV0ZWRcbikge1xuICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcbiAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcbiAgY29uc3QgZ2V0Q29tcGxldGVkID0gKCkgPT4gY29tcGxldGVkO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRpdGxlKHVwZGF0ZSkge1xuICAgIHRpdGxlID0gdXBkYXRlO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZURlc2NyaXB0aW9uKHVwZGF0ZSkge1xuICAgIGRlc2NyaXB0aW9uID0gdXBkYXRlO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZUR1ZURhdGUodXBkYXRlKSB7XG4gICAgZHVlRGF0ZSA9IHVwZGF0ZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVQcmlvcml0eSh1cGRhdGUpIHtcbiAgICBwcmlvcml0eSA9IHVwZGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNvbXBsZXRlZCh1cGRhdGUpIHtcbiAgICBjb21wbGV0ZWQgPSB1cGRhdGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldFRpdGxlLFxuICAgIGdldERlc2NyaXB0aW9uLFxuICAgIGdldER1ZURhdGUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0Q29tcGxldGVkLFxuICAgIHVwZGF0ZVRpdGxlLFxuICAgIHVwZGF0ZURlc2NyaXB0aW9uLFxuICAgIHVwZGF0ZUR1ZURhdGUsXG4gICAgdXBkYXRlUHJpb3JpdHksXG4gICAgdXBkYXRlQ29tcGxldGVkLFxuICB9O1xufVxuIiwiaW1wb3J0IGNyZWF0ZVRvRG8gZnJvbSBcIi4vY3JlYXRlLXRvLWRvXCI7XG5pbXBvcnQgdG9Eb0NhcmREb20gZnJvbSBcIi4vZG9tLWNhcmRcIjtcbmltcG9ydCBjbG9zZVNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGFkZFNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2FkZC5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9Eb0RvbShnZXRQcm9qZWN0QXJyYXksIGN1cnJlbnRQcm9qZWN0SW5kZXgpIHtcbiAgLy8gdG9nZ2xlIGFkZCBuZXcgcHJvamVjdCB3aXRoIHBsdXMgYnV0dG9uXG4gIGNvbnN0IGFkZFRvRG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10by1kby1idXR0b25cIik7XG4gIGFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVBZGRUb0RvKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFRvRG9DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG8tZG8tY2FyZFwiKTtcbiAgY29uc3QgYWRkVG9Eb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10by1kby1mb3JtXCIpO1xuXG4gIGxldCBhZGRUb0RvRGlzcGxheSA9IGZhbHNlO1xuICBmdW5jdGlvbiB0b2dnbGVBZGRUb0RvKCkge1xuICAgIGNvbnN0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBhZGRJY29uLnNyYyA9IGFkZFNWRztcblxuICAgIGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb3NlSWNvbi5zcmMgPSBjbG9zZVNWRztcblxuICAgIGlmIChhZGRUb0RvRGlzcGxheSA9PT0gZmFsc2UpIHtcbiAgICAgIGFkZFRvRG9DYXJkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogZmxleFwiKTtcbiAgICAgIGFkZFRvRG9EaXNwbGF5ID0gdHJ1ZTtcbiAgICAgIGFkZFRvRG9CdXR0b24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgYWRkVG9Eb0J1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRUb0RvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIik7XG4gICAgICBhZGRUb0RvRGlzcGxheSA9IGZhbHNlO1xuICAgICAgYWRkVG9Eb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBhZGRUb0RvQnV0dG9uLmFwcGVuZENoaWxkKGFkZEljb24pO1xuICAgICAgYWRkVG9Eb0Zvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBjcmVhdGUgbmV3IHRvIGRvIGNhcmRcbiAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0by1kby10aXRsZVwiKTtcbiAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0by1kby1kZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvLWRvLWR1ZS1kYXRlXCIpO1xuXG4gIGFkZFRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJzdWJtaXRcIixcbiAgICAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCBuZXdUb0RvID0gY3JlYXRlVG9EbyhcbiAgICAgICAgdG9Eb1RpdGxlLnZhbHVlLFxuICAgICAgICB0b0RvRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIHRvRG9EdWVEYXRlLnZhbHVlLFxuICAgICAgICBmYWxzZSxcbiAgICAgICAgZmFsc2VcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgcHJvamVjdCBpbmRleDogXCIgKyBjdXJyZW50UHJvamVjdEluZGV4KTtcblxuICAgICAgLy8gYWRkIG5ld1RvRG8gYmFzZWQgb24gY3VycmVudCBwcm9qZWN0IChpbnNpZGUgb2Ygd2hvbGUgYXJyYXkpXG5cbiAgICAgIGdldFByb2plY3RBcnJheSgpW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnVwZGF0ZVByb2plY3RUb0RvKG5ld1RvRG8pO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAgIC8vICAgZ2V0UHJvamVjdEFycmF5KClbY3VycmVudFByb2plY3RJbmRleF0uZ2V0UHJvamVjdFRvRG8oKVstMV0uZ2V0VGl0bGUoKVxuICAgICAgLy8gKTtcblxuICAgICAgdG9Eb0NhcmREb20oZ2V0UHJvamVjdEFycmF5LCBjdXJyZW50UHJvamVjdEluZGV4KTtcblxuICAgICAgLy8gYWRkVG9Eb0Zvcm0ucmVzZXQoKTtcbiAgICAgIC8vIHRvZ2dsZUFkZFRvRG8oKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG59XG4iLCJpbXBvcnQgY2hlY2tCb3hTVkcgZnJvbSBcIi4vY29tcG9uZW50cy9pY29ucy9jaGVjay1ib3gtb3V0bGluZS5zdmdcIjtcbmltcG9ydCBzdGFyU1ZHIGZyb20gXCIuL2NvbXBvbmVudHMvaWNvbnMvc3Rhci5zdmdcIjtcbmltcG9ydCBlZGl0U1ZHIGZyb20gXCIuL2NvbXBvbmVudHMvaWNvbnMvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVTVkcgZnJvbSBcIi4vY29tcG9uZW50cy9pY29ucy9kZWxldGUuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRG9DYXJkRG9tKGdldFByb2plY3RBcnJheSwgY3VycmVudFByb2plY3RJbmRleCkge1xuICAvLyBkaXNwbGF5IGFsbCB0aGUgdG8gZG8gY2FyZHMgb2YgZWFjaCBwcm9qZWN0XG5cbiAgY29uc3QgdG9Eb1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvLWRvLXNlY3Rpb25cIik7XG4gIHRvRG9TZWN0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBjb25zb2xlLmxvZyhcInRvZG9DYXJkRE9NIGN1cnJlbnQgcHJvamVjdCBpbmRleDogXCIgKyBjdXJyZW50UHJvamVjdEluZGV4KTtcblxuICBnZXRQcm9qZWN0QXJyYXkoKVxuICAgIFtjdXJyZW50UHJvamVjdEluZGV4XS5nZXRQcm9qZWN0VG9EbygpXG4gICAgLmZvckVhY2goKHRvRG9PYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0b0RvT2JqZWN0LmdldFRpdGxlKCkpO1xuICAgICAgY29uc3QgdG9Eb0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9Eb0NhcmQuY2xhc3NMaXN0LmFkZChcInRvLWRvLWNhcmRcIik7XG5cbiAgICAgIGNvbnN0IHRvRG9Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0b0RvQ29tcGxldGUuY2xhc3NMaXN0LmFkZChcInRvLWRvLWNvbXBsZXRlXCIpO1xuICAgICAgdG9Eb0NvbXBsZXRlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICBjb25zdCBjaGVja0JveEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGNoZWNrQm94SWNvbi5zcmMgPSBjaGVja0JveFNWRztcbiAgICAgIHRvRG9Db21wbGV0ZS5hcHBlbmRDaGlsZChjaGVja0JveEljb24pO1xuICAgICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0NvbXBsZXRlKTtcblxuICAgICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvRG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG8tZG8tdGl0bGVcIik7XG4gICAgICB0b0RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b0RvT2JqZWN0LmdldFRpdGxlKCl9YDtcbiAgICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvRG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1kdWUtZGF0ZVwiKTtcbiAgICAgIHRvRG9EdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3RvRG9PYmplY3QuZ2V0RHVlRGF0ZSgpfWA7XG4gICAgICB0b0RvVGl0bGUuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xuXG4gICAgICBjb25zdCB0b0RvQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b0RvQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwidG8tZG8tYnV0dG9uc1wiKTtcblxuICAgICAgY29uc3QgdG9Eb0Zhdm9yaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGNvbnN0IHN0YXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICBzdGFySWNvbi5zcmMgPSBzdGFyU1ZHO1xuICAgICAgdG9Eb0Zhdm9yaXRlLmFwcGVuZENoaWxkKHN0YXJJY29uKTtcblxuICAgICAgY29uc3QgdG9Eb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGVkaXRJY29uLnNyYyA9IGVkaXRTVkc7XG4gICAgICB0b0RvRWRpdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG5cbiAgICAgIGNvbnN0IHRvRG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgZGVsZXRlSWNvbi5zcmMgPSBkZWxldGVTVkc7XG4gICAgICB0b0RvRGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgICB0b0RvQnV0dG9ucy5hcHBlbmRDaGlsZCh0b0RvRmF2b3JpdGUpO1xuICAgICAgdG9Eb0J1dHRvbnMuYXBwZW5kQ2hpbGQodG9Eb0VkaXQpO1xuICAgICAgdG9Eb0J1dHRvbnMuYXBwZW5kQ2hpbGQodG9Eb0RlbGV0ZSk7XG5cbiAgICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9CdXR0b25zKTtcblxuICAgICAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvRG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG8tZG8tZGVzY3JpcHRpb25cIik7XG4gICAgICB0b0RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0b0RvT2JqZWN0LmdldERlc2NyaXB0aW9uKCl9YDtcblxuICAgICAgdG9Eb0NhcmQuYXBwZW5kQ2hpbGQodG9Eb0Rlc2NyaXB0aW9uKTtcblxuICAgICAgdG9Eb1NlY3Rpb24uYXBwZW5kQ2hpbGQodG9Eb0NhcmQpO1xuICAgIH0pO1xuXG4gIC8vIGRpc3BsYXkgYWxsIHRvIGRvIGNhcmRzIGZvciBhbGwgcHJvamVjdHNcbiAgLy8gZGlzcGxheSBvbmx5IGltcG9ydGFudCB0byBkbyBjYXJkc1xuICAvLyB3aGVuIGluIChhbGwgdG8gZG8vaW1wb3J0YW50KSwgY2Fubm90IGFsbG93IHVzZXIgdG8gYWRkIHByb2plY3RcbiAgLy8gYWxsIG9mIHRoZSBhYm92ZSBkZXBlbmRzIG9uIGN1cnJlbnRQcm9qZWN0SW5kZXhcbiAgLy9cbiAgLy8gZWFjaCBjYXJkcyBuZWVkIHJlYWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlIGRhdGUsIGltcG9ydGFudCwgZWRpdCwgZGVsZXRlXG59XG4iLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGUtcHJvamVjdC5qc1wiO1xuaW1wb3J0IGFkZFRvRG9Eb20gZnJvbSBcIi4vZG9tLWFkZC10by1kby5qc1wiO1xuaW1wb3J0IHRvRG9DYXJkRG9tIGZyb20gXCIuL2RvbS1jYXJkLmpzXCI7XG5pbXBvcnQgZWRpdFNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2VkaXQuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlU1ZHIGZyb20gXCIuL2NvbXBvbmVudHMvaWNvbnMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGNsb3NlU1ZHIGZyb20gXCIuL2NvbXBvbmVudHMvaWNvbnMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgYWRkU1ZHIGZyb20gXCIuL2NvbXBvbmVudHMvaWNvbnMvYWRkLnN2Z1wiO1xuaW1wb3J0IGRvbmVTVkcgZnJvbSBcIi4vY29tcG9uZW50cy9pY29ucy9kb25lLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c0RvbSh7XG4gIGdldFByb2plY3RBcnJheSxcbiAgdXBkYXRlUHJvamVjdEFycmF5LFxuICBkZWxldGVQcm9qZWN0QXJyYXksXG4gIGN1cnJlbnRQcm9qZWN0SW5kZXgsXG4gIGFsbFRvRG8sXG4gIGltcG9ydGFudFRvRG8sXG59KSB7XG4gIC8vIHRvZ2dsZSBhZGQgbmV3IHByb2plY3Qgd2l0aCBwbHVzIGJ1dHRvblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idXR0b25cIik7XG4gIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVDcmVhdGVOZXdQcm9qZWN0KCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdFwiKTtcbiAgY29uc3QgYWRkTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW5ldy1wcm9qZWN0XCIpO1xuXG4gIGxldCBwcm9qZWN0RGlzcGxheSA9IGZhbHNlO1xuICBmdW5jdGlvbiB0b2dnbGVDcmVhdGVOZXdQcm9qZWN0KCkge1xuICAgIGNvbnN0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBhZGRJY29uLnNyYyA9IGFkZFNWRztcblxuICAgIGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb3NlSWNvbi5zcmMgPSBjbG9zZVNWRztcblxuICAgIGlmIChwcm9qZWN0RGlzcGxheSA9PT0gZmFsc2UpIHtcbiAgICAgIGFkZE5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBmbGV4XCIpO1xuICAgICAgcHJvamVjdERpc3BsYXkgPSB0cnVlO1xuICAgICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGNsb3NlSWNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZE5ld1Byb2plY3Quc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpO1xuICAgICAgcHJvamVjdERpc3BsYXkgPSBmYWxzZTtcbiAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgICAgIHN1Ym1pdE5ld1Byb2plY3QucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBnZXQgdXNlciBuZXcgcHJvamVjdCBuYW1lIHVwb24gZm9ybSBzdWJtaXQgYW5kIGFwcGVuZCB0byBwcm9qZWN0IGFycmF5XG4gIGNvbnN0IHN1Ym1pdE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1uZXctcHJvamVjdFwiKTtcbiAgc3VibWl0TmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwic3VibWl0XCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB1cGRhdGVQcm9qZWN0QXJyYXkoY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0TmFtZS52YWx1ZSkpO1xuICAgICAgc3VibWl0TmV3UHJvamVjdC5yZXNldCgpO1xuICAgICAgdG9nZ2xlQ3JlYXRlTmV3UHJvamVjdCgpO1xuICAgICAgZGlzcGxheUFsbFByb2plY3RzKCk7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVkaXRCdXR0b24ocGFyZW50RWwsIGl0ZW0pIHtcbiAgICBjb25zdCBlZGl0UHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdFByb2plY3REaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XG4gICAgZWRpdFByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdC1kaXZcIik7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBlZGl0UHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiLi9pbmRleC5odG1sXCIpO1xuICAgIGVkaXRQcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwiZWRpdC1wcm9qZWN0LWZvcm1cIik7XG4gICAgZWRpdFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInN1Ym1pdFwiLFxuICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaXRlbS51cGRhdGVQcm9qZWN0TmFtZShlZGl0UHJvamVjdElucHV0LnZhbHVlKTtcbiAgICAgICAgZWRpdFByb2plY3REaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBkaXNwbGF5QWxsUHJvamVjdHMoKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZWRpdFByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVkaXQgUHJvamVjdCBOYW1lXCIpO1xuICAgIGVkaXRQcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdC1pbnB1dFwiKTtcbiAgICBlZGl0UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RJbnB1dCk7XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdENvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRQcm9qZWN0Q29uZmlybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIGNvbnN0IGRvbmVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZG9uZUljb24uc3JjID0gZG9uZVNWRztcbiAgICBlZGl0UHJvamVjdENvbmZpcm0uYXBwZW5kKGRvbmVJY29uKTtcbiAgICBlZGl0UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RDb25maXJtKTtcblxuICAgIGVkaXRQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0Rm9ybSk7XG5cbiAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChlZGl0UHJvamVjdERpdik7XG4gIH1cblxuICAvLyBkaXNwbGF5IGFsbCBwcm9qZWN0cyBhZnRlciBldmVyeSBwcm9qZWN0IGlucHV0IChhZGQvZGVsZXRlL2VkaXQpXG4gIGNvbnN0IGFsbFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1saXN0XCIpO1xuICBjb25zdCBwcm9qZWN0TWFpbkhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGVhZGluZyBoMVwiKTtcblxuICBmdW5jdGlvbiBkaXNwbGF5QWxsUHJvamVjdHMoKSB7XG4gICAgYWxsUHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGdldFByb2plY3RBcnJheSgpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgcHJvamVjdE5hbWUgPSBpdGVtLmdldFByb2plY3ROYW1lKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY29uc3QgbmV3UHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbmV3UHJvamVjdExpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwicG9zaXRpb246cmVsYXRpdmVcIik7XG5cbiAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgIG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZX1gO1xuICAgICAgbmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGRhdGEtcHJvamVjdGAsIGAke3Byb2plY3ROYW1lfWApO1xuICAgICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjdXJyZW50UHJvamVjdEluZGV4ID0gaW5kZXg7XG5cbiAgICAgICAgY29uc29sZS5sb2coYHByb2plY3QgRE9NIG5ldyBidXR0b246ICR7Y3VycmVudFByb2plY3RJbmRleH1gKTtcblxuICAgICAgICAvLyBlbnN1cmVzIGNyZWF0aW9uIG9mIHRvIGRvJ3MgYXJlIGFjY29yZGluZyB0byBlYWNoIHByb2plY3RcbiAgICAgICAgYWRkVG9Eb0RvbShnZXRQcm9qZWN0QXJyYXksIGN1cnJlbnRQcm9qZWN0SW5kZXgpO1xuICAgICAgICAvLyBzaG93cyB0byBkbyBjYXJkcyBpbiBjdXJyZW50IHByb2plY3RcbiAgICAgICAgdG9Eb0NhcmREb20oZ2V0UHJvamVjdEFycmF5LCBjdXJyZW50UHJvamVjdEluZGV4KTtcblxuICAgICAgICBwcm9qZWN0TWFpbkhlYWRpbmcudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpfWA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGVkaXRJY29uLnNyYyA9IGVkaXRTVkc7XG4gICAgICBlZGl0UHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICBlZGl0UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoYHR5cGVgLCBgYnV0dG9uYCk7XG4gICAgICBlZGl0UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShgZGF0YS1lZGl0YCwgYCR7cHJvamVjdE5hbWV9YCk7XG4gICAgICBlZGl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjcmVhdGVFZGl0QnV0dG9uKG5ld1Byb2plY3RMaSwgaXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgZGVsZXRlSWNvbi5zcmMgPSBkZWxldGVTVkc7XG4gICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoYHR5cGVgLCBgYnV0dG9uYCk7XG4gICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShgZGF0YS1kZWxldGVgLCBgJHtwcm9qZWN0TmFtZX1gKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVsZXRlUHJvamVjdEFycmF5KGluZGV4KTtcbiAgICAgICAgZGlzcGxheUFsbFByb2plY3RzKCk7XG4gICAgICB9KTtcblxuICAgICAgbmV3UHJvamVjdExpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICAgICAgbmV3UHJvamVjdExpLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnV0dG9uKTtcbiAgICAgIG5ld1Byb2plY3RMaS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgIGFsbFByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3RMaSk7XG4gICAgfSk7XG4gIH1cbiAgZGlzcGxheUFsbFByb2plY3RzKCk7XG59XG4iLCJpbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG9cIjtcbmltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRJbml0aWFsKCkge1xuICAvLyBjcmVhdGVzIGRlZmF1bHQgcHJvamVjdCBhbmQgdG9kb1xuICBjb25zdCBnZW5lcmFsUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJHZW5lcmFsXCIpO1xuXG4gIGNvbnN0IGhvbWV3b3JrID0gY3JlYXRlVG9EbyhcbiAgICBcImhvbWV3b3JrXCIsXG4gICAgXCJmaW5pc2ggdG9kbyBwcm9qZWN0XCIsXG4gICAgXCJ0b2RheVwiLFxuICAgIFwiaW1wb3J0YW50XCIsXG4gICAgXCJmYWxzZVwiXG4gICk7XG4gIGdlbmVyYWxQcm9qZWN0LnVwZGF0ZVByb2plY3RUb0RvKGhvbWV3b3JrKTtcblxuICByZXR1cm4gZ2VuZXJhbFByb2plY3Q7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL2FsbC1wcm9qZWN0c1wiO1xuaW1wb3J0IGNyZWF0ZVRvRG8gZnJvbSBcIi4vY3JlYXRlLXRvLWRvLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNEb20gZnJvbSBcIi4vZG9tLXByb2plY3QuanNcIjtcbmltcG9ydCB0b0RvRG9tIGZyb20gXCIuL2RvbS1hZGQtdG8tZG9cIjtcblxuLy8gY3JlYXRlcyBhbGwgcHJvamVjdHMgb2JqZWN0XG5jb25zdCB1c2VyUHJvamVjdCA9IHByb2plY3RzKCk7XG4vLyBsb2FkcyBpbnRvIERPTVxucHJvamVjdHNEb20odXNlclByb2plY3QpO1xuXG4vLyB0b0RvRG9tKHVzZXJQcm9qZWN0KTtcblxuY29uc3QgdGVzdE9uZSA9IGNyZWF0ZVRvRG8oXCJleGVyY2lzZVwiLCBcImNhcmRpb1wiLCBcInRvZGF5XCIsIFwibWVkaXVtXCIsIFwiZmFsc2VcIik7XG50ZXN0T25lLnVwZGF0ZUNvbXBsZXRlZChcInRydWVcIik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=