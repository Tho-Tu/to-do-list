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

  const getCurrentProjectIndex = () => currentProjectIndex;
  const updateCurrentProjectIndex = (update) => (currentProjectIndex = update);

  // push all to do into single array
  function allToDo() {
    let allToDoArray = [];
    projectArray.forEach((project) => {
      project.getProjectToDo().forEach((toDo) => {
        allToDoArray.push(toDo);
      });
    });
    return allToDoArray;
  }

  // filter for only important toDo
  function importantToDo() {
    let importantToDoArray = [];
    projectArray.forEach((project) => {
      project.getProjectToDo().forEach((toDo) => {
        if (toDo.getPriority() === true) {
          importantToDoArray.push(toDo);
        }
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
    getCurrentProjectIndex,
    updateCurrentProjectIndex,
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
  completed,
  currentProject
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
    currentProject,
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
/* harmony export */   "default": () => (/* binding */ toggleAddToDoDom)
/* harmony export */ });
/* harmony import */ var _components_icons_close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/icons/close.svg */ "./src/components/icons/close.svg");
/* harmony import */ var _components_icons_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/icons/add.svg */ "./src/components/icons/add.svg");



function toggleAddToDoDom() {
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
    addIcon.src = _components_icons_add_svg__WEBPACK_IMPORTED_MODULE_1__;

    const closeIcon = new Image();
    closeIcon.src = _components_icons_close_svg__WEBPACK_IMPORTED_MODULE_0__;

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
/* harmony import */ var _components_icons_check_box_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/icons/check-box.svg */ "./src/components/icons/check-box.svg");
/* harmony import */ var _components_icons_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/icons/star.svg */ "./src/components/icons/star.svg");
/* harmony import */ var _components_icons_hotel_class_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/icons/hotel-class.svg */ "./src/components/icons/hotel-class.svg");
/* harmony import */ var _components_icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/icons/edit.svg */ "./src/components/icons/edit.svg");
/* harmony import */ var _components_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/icons/delete.svg */ "./src/components/icons/delete.svg");
/* harmony import */ var _components_icons_done_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/icons/done.svg */ "./src/components/icons/done.svg");








function toDoCardDom(
  getProjectArray,
  currentProjectIndex,
  allImportantProject
) {
  // display all the to do cards of each project

  const toDoSection = document.querySelector("#to-do-section");
  toDoSection.textContent = "";

  // determines whether to load all tasks/important/project
  if (currentProjectIndex === null) {
    allImportantProject().forEach(loadToDo);
  } else {
    getProjectArray[currentProjectIndex].getProjectToDo().forEach(loadToDo);
  }

  function loadToDo(toDoObject, index) {
    const toDoCard = document.createElement("div");
    toDoCard.classList.add("to-do-card");

    const toDoTitle = document.createElement("div");
    const toDoComplete = document.createElement("button");
    toDoComplete.classList.add("to-do-complete");
    toDoComplete.setAttribute("type", "button");
    const checkBoxIcon = new Image();
    if (toDoObject.getCompleted() === false) {
      checkBoxIcon.src = _components_icons_check_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
      toDoTitle.setAttribute("style", "text-decoration: none");
    } else {
      checkBoxIcon.src = _components_icons_check_box_svg__WEBPACK_IMPORTED_MODULE_1__;
      toDoTitle.setAttribute("style", "text-decoration: line-through");
    }
    toDoComplete.appendChild(checkBoxIcon);
    toDoComplete.addEventListener("click", () => {
      completeCheckBox(toDoObject, checkBoxIcon, toDoTitle);
    });
    toDoCard.appendChild(toDoComplete);

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
    starIcon.src = toDoObject.getPriority() === false ? _components_icons_star_svg__WEBPACK_IMPORTED_MODULE_2__ : _components_icons_hotel_class_svg__WEBPACK_IMPORTED_MODULE_3__;
    toDoFavorite.appendChild(starIcon);
    toDoFavorite.addEventListener("click", () => {
      importantStar(toDoObject, starIcon);
    });

    const toDoEdit = document.createElement("button");
    const editIcon = new Image();
    editIcon.src = _components_icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__;
    toDoEdit.appendChild(editIcon);
    toDoEdit.addEventListener("click", () => {
      createToDoEditButton(toDoCard, toDoObject);
    });

    const toDoDelete = document.createElement("button");
    const deleteIcon = new Image();
    deleteIcon.src = _components_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__;
    toDoDelete.appendChild(deleteIcon);
    toDoDelete.addEventListener("click", () => {
      getProjectArray[toDoObject.currentProject].deleteProjectToDo(toDoObject);
      toDoCardDom(getProjectArray, currentProjectIndex, allImportantProject);
    });

    toDoButtons.appendChild(toDoFavorite);
    toDoButtons.appendChild(toDoEdit);
    toDoButtons.appendChild(toDoDelete);

    toDoCard.appendChild(toDoButtons);

    const toDoDescription = document.createElement("div");
    toDoDescription.classList.add("to-do-description");
    toDoDescription.textContent = `${toDoObject.getDescription()}`;

    toDoCard.appendChild(toDoDescription);

    toDoSection.appendChild(toDoCard);
  }

  // when in (all to do/important), cannot allow user to add project

  function completeCheckBox(toDoObject, checkBoxIcon, toDoTitle) {
    if (toDoObject.getCompleted() === false) {
      toDoObject.updateCompleted(true);
      checkBoxIcon.src = _components_icons_check_box_svg__WEBPACK_IMPORTED_MODULE_1__;
      toDoTitle.setAttribute("style", "text-decoration:line-through");
    } else {
      toDoObject.updateCompleted(false);
      checkBoxIcon.src = _components_icons_check_box_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
      toDoTitle.setAttribute("style", "text-decoration:none");
    }
    return checkBoxIcon;
  }

  function importantStar(toDoObject, starIcon) {
    if (toDoObject.getPriority() === false) {
      toDoObject.updatePriority(true);
      starIcon.src = _components_icons_hotel_class_svg__WEBPACK_IMPORTED_MODULE_3__;
    } else {
      toDoObject.updatePriority(false);
      starIcon.src = _components_icons_star_svg__WEBPACK_IMPORTED_MODULE_2__;
    }
    return starIcon;
  }

  function createToDoEditButton(parentEl, toDoObject) {
    const editToDoDiv = document.createElement("div");
    editToDoDiv.setAttribute("style", "position: absolute");
    editToDoDiv.classList.add("edit-to-do-div");

    const editToDoForm = document.createElement("form");
    editToDoForm.setAttribute("action", "./index.html");
    editToDoForm.classList.add("edit-to-do-form");
    editToDoForm.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();

        toDoObject.updateTitle(editToDoTitle.value);
        toDoObject.updateDescription(editToDoDescription.value);
        toDoObject.updateDueDate(editToDoDate.value);
        editToDoDiv.textContent = "";
        toDoCardDom(getProjectArray, currentProjectIndex, allImportantProject);
      },
      false
    );

    const editToDoTitle = document.createElement("input");
    editToDoTitle.setAttribute("type", "text");
    editToDoTitle.setAttribute("placeholder", "Edit To Do Name");
    editToDoTitle.classList.add("edit-to-do-title");
    editToDoForm.appendChild(editToDoTitle);

    const editToDoDescription = document.createElement("input");
    editToDoDescription.setAttribute("type", "text");
    editToDoDescription.setAttribute("placeholder", "Edit To Do Description");
    editToDoDescription.classList.add("edit-to-do-description");
    editToDoForm.appendChild(editToDoDescription);

    const editToDoDate = document.createElement("input");
    editToDoDate.setAttribute("type", "date");
    editToDoDate.setAttribute("placeholder", "Edit To Do Description");
    editToDoDate.classList.add("edit-to-do-date");
    editToDoForm.appendChild(editToDoDate);

    const editToDoConfirm = document.createElement("button");
    editToDoConfirm.setAttribute("type", "submit");
    editToDoConfirm.classList.add("edit-to-do-submit-button");
    const doneIcon = new Image();
    doneIcon.src = _components_icons_done_svg__WEBPACK_IMPORTED_MODULE_6__;
    editToDoConfirm.append(doneIcon);
    editToDoForm.appendChild(editToDoConfirm);

    editToDoDiv.appendChild(editToDoForm);

    parentEl.appendChild(editToDoDiv);
  }
}


/***/ }),

/***/ "./src/dom-home.js":
/*!*************************!*\
  !*** ./src/dom-home.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeDom)
/* harmony export */ });
/* harmony import */ var _dom_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-card.js */ "./src/dom-card.js");


function homeDom({
  getProjectArray,
  updateProjectArray,
  deleteProjectArray,
  currentProject,
  allToDo,
  importantToDo,
}) {
  const projectMainHeading = document.querySelector(".main-heading h1");
  const addToDo = document.querySelector(".add-to-do");
  const addToDoCard = document.querySelector(".add-to-do-card");

  const allTasks = document.querySelector(".all-tasks");
  allTasks.addEventListener("click", () => {
    (0,_dom_card_js__WEBPACK_IMPORTED_MODULE_0__["default"])(getProjectArray(), null, allToDo);
    projectMainHeading.textContent = "All Tasks";
    addToDo.setAttribute("style", "display: none");
    addToDoCard.setAttribute("style", "display: none");
  });

  const importantTasks = document.querySelector(".important-tasks");
  importantTasks.addEventListener("click", () => {
    (0,_dom_card_js__WEBPACK_IMPORTED_MODULE_0__["default"])(getProjectArray(), null, importantToDo);
    projectMainHeading.textContent = "Important";
    addToDo.setAttribute("style", "display: none");
    addToDoCard.setAttribute("style", "display: none");
  });
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
/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-to-do */ "./src/create-to-do.js");
/* harmony import */ var _dom_add_to_do_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-add-to-do.js */ "./src/dom-add-to-do.js");
/* harmony import */ var _dom_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-card.js */ "./src/dom-card.js");
/* harmony import */ var _components_icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/icons/edit.svg */ "./src/components/icons/edit.svg");
/* harmony import */ var _components_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/icons/delete.svg */ "./src/components/icons/delete.svg");
/* harmony import */ var _components_icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/icons/close.svg */ "./src/components/icons/close.svg");
/* harmony import */ var _components_icons_add_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/icons/add.svg */ "./src/components/icons/add.svg");
/* harmony import */ var _components_icons_done_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/icons/done.svg */ "./src/components/icons/done.svg");










function projectsDom({
  getProjectArray,
  updateProjectArray,
  deleteProjectArray,
  getCurrentProjectIndex,
  updateCurrentProjectIndex,
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
    addIcon.src = _components_icons_add_svg__WEBPACK_IMPORTED_MODULE_7__;

    const closeIcon = new Image();
    closeIcon.src = _components_icons_close_svg__WEBPACK_IMPORTED_MODULE_6__;

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
    doneIcon.src = _components_icons_done_svg__WEBPACK_IMPORTED_MODULE_8__;
    editProjectConfirm.append(doneIcon);
    editProjectForm.appendChild(editProjectConfirm);

    editProjectDiv.appendChild(editProjectForm);

    parentEl.appendChild(editProjectDiv);
  }

  // display all projects after every project input (add/delete/edit)
  const allProjects = document.querySelector("#projects-list");
  const projectMainHeading = document.querySelector(".main-heading h1");
  // Load on page start up
  (0,_dom_card_js__WEBPACK_IMPORTED_MODULE_3__["default"])(getProjectArray(), getCurrentProjectIndex(), null);

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
        updateCurrentProjectIndex(index);
        (0,_dom_card_js__WEBPACK_IMPORTED_MODULE_3__["default"])(getProjectArray(), getCurrentProjectIndex(), null);
        projectMainHeading.textContent = `${projectName.toUpperCase()}`;
        addToDo.setAttribute("style", "display: flex");
      });

      const editIcon = new Image();
      editIcon.src = _components_icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__;
      editProjectButton.appendChild(editIcon);
      editProjectButton.setAttribute(`type`, `button`);
      editProjectButton.classList.add("edit-project-button");
      editProjectButton.setAttribute(`data-edit`, `${projectName}`);
      editProjectButton.addEventListener("click", () => {
        createEditButton(newProjectLi, item);
      });

      const deleteIcon = new Image();
      deleteIcon.src = _components_icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__;
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
  (0,_dom_add_to_do_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  // create new to do card
  const addToDo = document.querySelector(".add-to-do");
  const toDoTitle = document.querySelector("#to-do-title");
  const toDoDescription = document.querySelector("#to-do-description");
  const toDoDueDate = document.querySelector("#to-do-due-date");

  const addToDoForm = document.querySelector("#add-to-do-form");
  addToDoForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      let newToDo = (0,_create_to_do__WEBPACK_IMPORTED_MODULE_1__["default"])(
        toDoTitle.value,
        toDoDescription.value,
        toDoDueDate.value,
        false,
        false,
        getCurrentProjectIndex()
      );

      getProjectArray()[getCurrentProjectIndex()].updateProjectToDo(newToDo);

      (0,_dom_card_js__WEBPACK_IMPORTED_MODULE_3__["default"])(getProjectArray(), getCurrentProjectIndex(), null);

      addToDoForm.reset();
      (0,_dom_add_to_do_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    },
    false
  );
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
    "2023-09-16",
    false,
    false,
    0
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

/***/ "./src/components/icons/check-box.svg":
/*!********************************************!*\
  !*** ./src/components/icons/check-box.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a19e384855d1f06007c3.svg";

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

/***/ "./src/components/icons/hotel-class.svg":
/*!**********************************************!*\
  !*** ./src/components/icons/hotel-class.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f25736cd46aaefbc283e.svg";

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
/* harmony import */ var _dom_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-project */ "./src/dom-project.js");
/* harmony import */ var _dom_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-home */ "./src/dom-home.js");




// creates all projects object
const userProject = (0,_all_projects__WEBPACK_IMPORTED_MODULE_0__["default"])();
// loads into DOM
(0,_dom_project__WEBPACK_IMPORTED_MODULE_1__["default"])(userProject);
(0,_dom_home__WEBPACK_IMPORTED_MODULE_2__["default"])(userProject);

window.userProject = userProject;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJzQztBQUNFO0FBQ1A7O0FBRWpDO0FBQ0Esb0JBQW9CLHlEQUFRO0FBQzVCO0FBQ0Esd0RBQVc7QUFDWCxxREFBTzs7QUFFUCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWxsLXByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGUtdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20tYWRkLXRvLWRvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLWNhcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20taG9tZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS1wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9hZC1pbml0aWFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBsb2FkSW5pdGlhbCBmcm9tIFwiLi9sb2FkLWluaXRpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHMoKSB7XG4gIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICAvLyBsb2FkIGRlZmF1bHQgJ2dlbmVyYWwnIHByb2plY3RcbiAgcHJvamVjdEFycmF5LnB1c2gobG9hZEluaXRpYWwoKSk7XG4gIGxldCBjdXJyZW50UHJvamVjdEluZGV4ID0gMDtcblxuICBjb25zdCBnZXRDdXJyZW50UHJvamVjdEluZGV4ID0gKCkgPT4gY3VycmVudFByb2plY3RJbmRleDtcbiAgY29uc3QgdXBkYXRlQ3VycmVudFByb2plY3RJbmRleCA9ICh1cGRhdGUpID0+IChjdXJyZW50UHJvamVjdEluZGV4ID0gdXBkYXRlKTtcblxuICAvLyBwdXNoIGFsbCB0byBkbyBpbnRvIHNpbmdsZSBhcnJheVxuICBmdW5jdGlvbiBhbGxUb0RvKCkge1xuICAgIGxldCBhbGxUb0RvQXJyYXkgPSBbXTtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5nZXRQcm9qZWN0VG9EbygpLmZvckVhY2goKHRvRG8pID0+IHtcbiAgICAgICAgYWxsVG9Eb0FycmF5LnB1c2godG9Ebyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWxsVG9Eb0FycmF5O1xuICB9XG5cbiAgLy8gZmlsdGVyIGZvciBvbmx5IGltcG9ydGFudCB0b0RvXG4gIGZ1bmN0aW9uIGltcG9ydGFudFRvRG8oKSB7XG4gICAgbGV0IGltcG9ydGFudFRvRG9BcnJheSA9IFtdO1xuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmdldFByb2plY3RUb0RvKCkuZm9yRWFjaCgodG9EbykgPT4ge1xuICAgICAgICBpZiAodG9Eby5nZXRQcmlvcml0eSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgaW1wb3J0YW50VG9Eb0FycmF5LnB1c2godG9Ebyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBpbXBvcnRhbnRUb0RvQXJyYXk7XG4gIH1cbiAgY29uc3QgZ2V0UHJvamVjdEFycmF5ID0gKCkgPT4gcHJvamVjdEFycmF5O1xuICBjb25zdCB1cGRhdGVQcm9qZWN0QXJyYXkgPSAocHJvamVjdCkgPT4gcHJvamVjdEFycmF5LnB1c2gocHJvamVjdCk7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RBcnJheSA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAvLyBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdEFycmF5LmluZGV4T2YocHJvamVjdCk7XG4gICAgcHJvamVjdEFycmF5LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdEFycmF5LFxuICAgIHVwZGF0ZVByb2plY3RBcnJheSxcbiAgICBkZWxldGVQcm9qZWN0QXJyYXksXG4gICAgZ2V0Q3VycmVudFByb2plY3RJbmRleCxcbiAgICB1cGRhdGVDdXJyZW50UHJvamVjdEluZGV4LFxuICAgIGFsbFRvRG8sXG4gICAgaW1wb3J0YW50VG9EbyxcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lO1xuICBsZXQgcHJvamVjdFRvRG8gPSBbXTtcblxuICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9ICgpID0+IHByb2plY3ROYW1lO1xuICBjb25zdCB1cGRhdGVQcm9qZWN0TmFtZSA9ICh1cGRhdGUpID0+IChwcm9qZWN0TmFtZSA9IHVwZGF0ZSk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdFRvRG8gPSAoKSA9PiBwcm9qZWN0VG9EbztcbiAgY29uc3QgdXBkYXRlUHJvamVjdFRvRG8gPSAodG9Eb09iamVjdCkgPT4gcHJvamVjdFRvRG8ucHVzaCh0b0RvT2JqZWN0KTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdFRvRG8gPSAodG9Eb09iamVjdCkgPT4ge1xuICAgIGxldCB0b0RvSW5kZXggPSBwcm9qZWN0VG9Eby5pbmRleE9mKHRvRG9PYmplY3QpO1xuICAgIHByb2plY3RUb0RvLnNwbGljZSh0b0RvSW5kZXgsIDEpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0UHJvamVjdE5hbWUsXG4gICAgdXBkYXRlUHJvamVjdE5hbWUsXG4gICAgZ2V0UHJvamVjdFRvRG8sXG4gICAgdXBkYXRlUHJvamVjdFRvRG8sXG4gICAgZGVsZXRlUHJvamVjdFRvRG8sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUb0RvKFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGR1ZURhdGUsXG4gIHByaW9yaXR5LFxuICBjb21wbGV0ZWQsXG4gIGN1cnJlbnRQcm9qZWN0XG4pIHtcbiAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG4gIGNvbnN0IGdldENvbXBsZXRlZCA9ICgpID0+IGNvbXBsZXRlZDtcblxuICBmdW5jdGlvbiB1cGRhdGVUaXRsZSh1cGRhdGUpIHtcbiAgICB0aXRsZSA9IHVwZGF0ZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVEZXNjcmlwdGlvbih1cGRhdGUpIHtcbiAgICBkZXNjcmlwdGlvbiA9IHVwZGF0ZTtcbiAgfVxuICBmdW5jdGlvbiB1cGRhdGVEdWVEYXRlKHVwZGF0ZSkge1xuICAgIGR1ZURhdGUgPSB1cGRhdGU7XG4gIH1cbiAgZnVuY3Rpb24gdXBkYXRlUHJpb3JpdHkodXBkYXRlKSB7XG4gICAgcHJpb3JpdHkgPSB1cGRhdGU7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVDb21wbGV0ZWQodXBkYXRlKSB7XG4gICAgY29tcGxldGVkID0gdXBkYXRlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRUaXRsZSxcbiAgICBnZXREZXNjcmlwdGlvbixcbiAgICBnZXREdWVEYXRlLFxuICAgIGdldFByaW9yaXR5LFxuICAgIGdldENvbXBsZXRlZCxcbiAgICB1cGRhdGVUaXRsZSxcbiAgICB1cGRhdGVEZXNjcmlwdGlvbixcbiAgICB1cGRhdGVEdWVEYXRlLFxuICAgIHVwZGF0ZVByaW9yaXR5LFxuICAgIHVwZGF0ZUNvbXBsZXRlZCxcbiAgICBjdXJyZW50UHJvamVjdCxcbiAgfTtcbn1cbiIsImltcG9ydCBjbG9zZVNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGFkZFNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2FkZC5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQWRkVG9Eb0RvbSgpIHtcbiAgLy8gdG9nZ2xlIGFkZCBuZXcgcHJvamVjdCB3aXRoIHBsdXMgYnV0dG9uXG4gIGNvbnN0IGFkZFRvRG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10by1kby1idXR0b25cIik7XG4gIGFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVBZGRUb0RvKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGFkZFRvRG9DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG8tZG8tY2FyZFwiKTtcbiAgY29uc3QgYWRkVG9Eb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10by1kby1mb3JtXCIpO1xuXG4gIGxldCBhZGRUb0RvRGlzcGxheSA9IGZhbHNlO1xuICBmdW5jdGlvbiB0b2dnbGVBZGRUb0RvKCkge1xuICAgIGNvbnN0IGFkZEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBhZGRJY29uLnNyYyA9IGFkZFNWRztcblxuICAgIGNvbnN0IGNsb3NlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb3NlSWNvbi5zcmMgPSBjbG9zZVNWRztcblxuICAgIGlmIChhZGRUb0RvRGlzcGxheSA9PT0gZmFsc2UpIHtcbiAgICAgIGFkZFRvRG9DYXJkLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogZmxleFwiKTtcbiAgICAgIGFkZFRvRG9EaXNwbGF5ID0gdHJ1ZTtcbiAgICAgIGFkZFRvRG9CdXR0b24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgYWRkVG9Eb0J1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRUb0RvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIik7XG4gICAgICBhZGRUb0RvRGlzcGxheSA9IGZhbHNlO1xuICAgICAgYWRkVG9Eb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBhZGRUb0RvQnV0dG9uLmFwcGVuZENoaWxkKGFkZEljb24pO1xuICAgICAgYWRkVG9Eb0Zvcm0ucmVzZXQoKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBjaGVja0JveE91dGxpbmVTVkcgZnJvbSBcIi4vY29tcG9uZW50cy9pY29ucy9jaGVjay1ib3gtb3V0bGluZS5zdmdcIjtcbmltcG9ydCBjaGVja0JveFNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2NoZWNrLWJveC5zdmdcIjtcbmltcG9ydCBzdGFyU1ZHIGZyb20gXCIuL2NvbXBvbmVudHMvaWNvbnMvc3Rhci5zdmdcIjtcbmltcG9ydCBob3RlbENsYXNzU1ZHIGZyb20gXCIuL2NvbXBvbmVudHMvaWNvbnMvaG90ZWwtY2xhc3Muc3ZnXCI7XG5pbXBvcnQgZWRpdFNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2VkaXQuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlU1ZHIGZyb20gXCIuL2NvbXBvbmVudHMvaWNvbnMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGRvbmVTVkcgZnJvbSBcIi4vY29tcG9uZW50cy9pY29ucy9kb25lLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RvQ2FyZERvbShcbiAgZ2V0UHJvamVjdEFycmF5LFxuICBjdXJyZW50UHJvamVjdEluZGV4LFxuICBhbGxJbXBvcnRhbnRQcm9qZWN0XG4pIHtcbiAgLy8gZGlzcGxheSBhbGwgdGhlIHRvIGRvIGNhcmRzIG9mIGVhY2ggcHJvamVjdFxuXG4gIGNvbnN0IHRvRG9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0by1kby1zZWN0aW9uXCIpO1xuICB0b0RvU2VjdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgLy8gZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGxvYWQgYWxsIHRhc2tzL2ltcG9ydGFudC9wcm9qZWN0XG4gIGlmIChjdXJyZW50UHJvamVjdEluZGV4ID09PSBudWxsKSB7XG4gICAgYWxsSW1wb3J0YW50UHJvamVjdCgpLmZvckVhY2gobG9hZFRvRG8pO1xuICB9IGVsc2Uge1xuICAgIGdldFByb2plY3RBcnJheVtjdXJyZW50UHJvamVjdEluZGV4XS5nZXRQcm9qZWN0VG9EbygpLmZvckVhY2gobG9hZFRvRG8pO1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZFRvRG8odG9Eb09iamVjdCwgaW5kZXgpIHtcbiAgICBjb25zdCB0b0RvQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0NhcmQuY2xhc3NMaXN0LmFkZChcInRvLWRvLWNhcmRcIik7XG5cbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRvRG9Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdG9Eb0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1jb21wbGV0ZVwiKTtcbiAgICB0b0RvQ29tcGxldGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICBjb25zdCBjaGVja0JveEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBpZiAodG9Eb09iamVjdC5nZXRDb21wbGV0ZWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgIGNoZWNrQm94SWNvbi5zcmMgPSBjaGVja0JveE91dGxpbmVTVkc7XG4gICAgICB0b0RvVGl0bGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0ZXh0LWRlY29yYXRpb246IG5vbmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrQm94SWNvbi5zcmMgPSBjaGVja0JveFNWRztcbiAgICAgIHRvRG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoXCIpO1xuICAgIH1cbiAgICB0b0RvQ29tcGxldGUuYXBwZW5kQ2hpbGQoY2hlY2tCb3hJY29uKTtcbiAgICB0b0RvQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbXBsZXRlQ2hlY2tCb3godG9Eb09iamVjdCwgY2hlY2tCb3hJY29uLCB0b0RvVGl0bGUpO1xuICAgIH0pO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9Db21wbGV0ZSk7XG5cbiAgICB0b0RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvLWRvLXRpdGxlXCIpO1xuICAgIHRvRG9UaXRsZS50ZXh0Q29udGVudCA9IGAke3RvRG9PYmplY3QuZ2V0VGl0bGUoKX1gO1xuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9UaXRsZSk7XG5cbiAgICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvLWRvLWR1ZS1kYXRlXCIpO1xuICAgIHRvRG9EdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke3RvRG9PYmplY3QuZ2V0RHVlRGF0ZSgpfWA7XG4gICAgdG9Eb1RpdGxlLmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKTtcblxuICAgIGNvbnN0IHRvRG9CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0b0RvQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwidG8tZG8tYnV0dG9uc1wiKTtcblxuICAgIGNvbnN0IHRvRG9GYXZvcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3Qgc3Rhckljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBzdGFySWNvbi5zcmMgPSB0b0RvT2JqZWN0LmdldFByaW9yaXR5KCkgPT09IGZhbHNlID8gc3RhclNWRyA6IGhvdGVsQ2xhc3NTVkc7XG4gICAgdG9Eb0Zhdm9yaXRlLmFwcGVuZENoaWxkKHN0YXJJY29uKTtcbiAgICB0b0RvRmF2b3JpdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGltcG9ydGFudFN0YXIodG9Eb09iamVjdCwgc3Rhckljb24pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9Eb0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZWRpdEljb24uc3JjID0gZWRpdFNWRztcbiAgICB0b0RvRWRpdC5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgdG9Eb0VkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNyZWF0ZVRvRG9FZGl0QnV0dG9uKHRvRG9DYXJkLCB0b0RvT2JqZWN0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvRG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBkZWxldGVJY29uLnNyYyA9IGRlbGV0ZVNWRztcbiAgICB0b0RvRGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgIHRvRG9EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGdldFByb2plY3RBcnJheVt0b0RvT2JqZWN0LmN1cnJlbnRQcm9qZWN0XS5kZWxldGVQcm9qZWN0VG9Ebyh0b0RvT2JqZWN0KTtcbiAgICAgIHRvRG9DYXJkRG9tKGdldFByb2plY3RBcnJheSwgY3VycmVudFByb2plY3RJbmRleCwgYWxsSW1wb3J0YW50UHJvamVjdCk7XG4gICAgfSk7XG5cbiAgICB0b0RvQnV0dG9ucy5hcHBlbmRDaGlsZCh0b0RvRmF2b3JpdGUpO1xuICAgIHRvRG9CdXR0b25zLmFwcGVuZENoaWxkKHRvRG9FZGl0KTtcbiAgICB0b0RvQnV0dG9ucy5hcHBlbmRDaGlsZCh0b0RvRGVsZXRlKTtcblxuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9CdXR0b25zKTtcblxuICAgIGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9Eb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0by1kby1kZXNjcmlwdGlvblwiKTtcbiAgICB0b0RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHt0b0RvT2JqZWN0LmdldERlc2NyaXB0aW9uKCl9YDtcblxuICAgIHRvRG9DYXJkLmFwcGVuZENoaWxkKHRvRG9EZXNjcmlwdGlvbik7XG5cbiAgICB0b0RvU2VjdGlvbi5hcHBlbmRDaGlsZCh0b0RvQ2FyZCk7XG4gIH1cblxuICAvLyB3aGVuIGluIChhbGwgdG8gZG8vaW1wb3J0YW50KSwgY2Fubm90IGFsbG93IHVzZXIgdG8gYWRkIHByb2plY3RcblxuICBmdW5jdGlvbiBjb21wbGV0ZUNoZWNrQm94KHRvRG9PYmplY3QsIGNoZWNrQm94SWNvbiwgdG9Eb1RpdGxlKSB7XG4gICAgaWYgKHRvRG9PYmplY3QuZ2V0Q29tcGxldGVkKCkgPT09IGZhbHNlKSB7XG4gICAgICB0b0RvT2JqZWN0LnVwZGF0ZUNvbXBsZXRlZCh0cnVlKTtcbiAgICAgIGNoZWNrQm94SWNvbi5zcmMgPSBjaGVja0JveFNWRztcbiAgICAgIHRvRG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2hcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvRG9PYmplY3QudXBkYXRlQ29tcGxldGVkKGZhbHNlKTtcbiAgICAgIGNoZWNrQm94SWNvbi5zcmMgPSBjaGVja0JveE91dGxpbmVTVkc7XG4gICAgICB0b0RvVGl0bGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0ZXh0LWRlY29yYXRpb246bm9uZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoZWNrQm94SWNvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltcG9ydGFudFN0YXIodG9Eb09iamVjdCwgc3Rhckljb24pIHtcbiAgICBpZiAodG9Eb09iamVjdC5nZXRQcmlvcml0eSgpID09PSBmYWxzZSkge1xuICAgICAgdG9Eb09iamVjdC51cGRhdGVQcmlvcml0eSh0cnVlKTtcbiAgICAgIHN0YXJJY29uLnNyYyA9IGhvdGVsQ2xhc3NTVkc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvRG9PYmplY3QudXBkYXRlUHJpb3JpdHkoZmFsc2UpO1xuICAgICAgc3Rhckljb24uc3JjID0gc3RhclNWRztcbiAgICB9XG4gICAgcmV0dXJuIHN0YXJJY29uO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVG9Eb0VkaXRCdXR0b24ocGFyZW50RWwsIHRvRG9PYmplY3QpIHtcbiAgICBjb25zdCBlZGl0VG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdFRvRG9EaXYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJwb3NpdGlvbjogYWJzb2x1dGVcIik7XG4gICAgZWRpdFRvRG9EaXYuY2xhc3NMaXN0LmFkZChcImVkaXQtdG8tZG8tZGl2XCIpO1xuXG4gICAgY29uc3QgZWRpdFRvRG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZWRpdFRvRG9Gb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIi4vaW5kZXguaHRtbFwiKTtcbiAgICBlZGl0VG9Eb0Zvcm0uY2xhc3NMaXN0LmFkZChcImVkaXQtdG8tZG8tZm9ybVwiKTtcbiAgICBlZGl0VG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwic3VibWl0XCIsXG4gICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0b0RvT2JqZWN0LnVwZGF0ZVRpdGxlKGVkaXRUb0RvVGl0bGUudmFsdWUpO1xuICAgICAgICB0b0RvT2JqZWN0LnVwZGF0ZURlc2NyaXB0aW9uKGVkaXRUb0RvRGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICB0b0RvT2JqZWN0LnVwZGF0ZUR1ZURhdGUoZWRpdFRvRG9EYXRlLnZhbHVlKTtcbiAgICAgICAgZWRpdFRvRG9EaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICB0b0RvQ2FyZERvbShnZXRQcm9qZWN0QXJyYXksIGN1cnJlbnRQcm9qZWN0SW5kZXgsIGFsbEltcG9ydGFudFByb2plY3QpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcblxuICAgIGNvbnN0IGVkaXRUb0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZWRpdFRvRG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBlZGl0VG9Eb1RpdGxlLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRWRpdCBUbyBEbyBOYW1lXCIpO1xuICAgIGVkaXRUb0RvVGl0bGUuY2xhc3NMaXN0LmFkZChcImVkaXQtdG8tZG8tdGl0bGVcIik7XG4gICAgZWRpdFRvRG9Gb3JtLmFwcGVuZENoaWxkKGVkaXRUb0RvVGl0bGUpO1xuXG4gICAgY29uc3QgZWRpdFRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlZGl0VG9Eb0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGVkaXRUb0RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFZGl0IFRvIERvIERlc2NyaXB0aW9uXCIpO1xuICAgIGVkaXRUb0RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImVkaXQtdG8tZG8tZGVzY3JpcHRpb25cIik7XG4gICAgZWRpdFRvRG9Gb3JtLmFwcGVuZENoaWxkKGVkaXRUb0RvRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZWRpdFRvRG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGVkaXRUb0RvRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBlZGl0VG9Eb0RhdGUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFZGl0IFRvIERvIERlc2NyaXB0aW9uXCIpO1xuICAgIGVkaXRUb0RvRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZWRpdC10by1kby1kYXRlXCIpO1xuICAgIGVkaXRUb0RvRm9ybS5hcHBlbmRDaGlsZChlZGl0VG9Eb0RhdGUpO1xuXG4gICAgY29uc3QgZWRpdFRvRG9Db25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0VG9Eb0NvbmZpcm0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBlZGl0VG9Eb0NvbmZpcm0uY2xhc3NMaXN0LmFkZChcImVkaXQtdG8tZG8tc3VibWl0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBkb25lSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRvbmVJY29uLnNyYyA9IGRvbmVTVkc7XG4gICAgZWRpdFRvRG9Db25maXJtLmFwcGVuZChkb25lSWNvbik7XG4gICAgZWRpdFRvRG9Gb3JtLmFwcGVuZENoaWxkKGVkaXRUb0RvQ29uZmlybSk7XG5cbiAgICBlZGl0VG9Eb0Rpdi5hcHBlbmRDaGlsZChlZGl0VG9Eb0Zvcm0pO1xuXG4gICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoZWRpdFRvRG9EaXYpO1xuICB9XG59XG4iLCJpbXBvcnQgdG9Eb0NhcmREb20gZnJvbSBcIi4vZG9tLWNhcmQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZURvbSh7XG4gIGdldFByb2plY3RBcnJheSxcbiAgdXBkYXRlUHJvamVjdEFycmF5LFxuICBkZWxldGVQcm9qZWN0QXJyYXksXG4gIGN1cnJlbnRQcm9qZWN0LFxuICBhbGxUb0RvLFxuICBpbXBvcnRhbnRUb0RvLFxufSkge1xuICBjb25zdCBwcm9qZWN0TWFpbkhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taGVhZGluZyBoMVwiKTtcbiAgY29uc3QgYWRkVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvLWRvXCIpO1xuICBjb25zdCBhZGRUb0RvQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvLWRvLWNhcmRcIik7XG5cbiAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10YXNrc1wiKTtcbiAgYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b0RvQ2FyZERvbShnZXRQcm9qZWN0QXJyYXkoKSwgbnVsbCwgYWxsVG9Ebyk7XG4gICAgcHJvamVjdE1haW5IZWFkaW5nLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcbiAgICBhZGRUb0RvLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZVwiKTtcbiAgICBhZGRUb0RvQ2FyZC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIik7XG4gIH0pO1xuXG4gIGNvbnN0IGltcG9ydGFudFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbXBvcnRhbnQtdGFza3NcIik7XG4gIGltcG9ydGFudFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9Eb0NhcmREb20oZ2V0UHJvamVjdEFycmF5KCksIG51bGwsIGltcG9ydGFudFRvRG8pO1xuICAgIHByb2plY3RNYWluSGVhZGluZy50ZXh0Q29udGVudCA9IFwiSW1wb3J0YW50XCI7XG4gICAgYWRkVG9Eby5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IG5vbmVcIik7XG4gICAgYWRkVG9Eb0NhcmQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiBub25lXCIpO1xuICB9KTtcbn1cbiIsImltcG9ydCBjcmVhdGVQcm9qZWN0IGZyb20gXCIuL2NyZWF0ZS1wcm9qZWN0LmpzXCI7XG5pbXBvcnQgY3JlYXRlVG9EbyBmcm9tIFwiLi9jcmVhdGUtdG8tZG9cIjtcbmltcG9ydCB0b2dnbGVBZGRUb0RvRG9tIGZyb20gXCIuL2RvbS1hZGQtdG8tZG8uanNcIjtcbmltcG9ydCB0b0RvQ2FyZERvbSBmcm9tIFwiLi9kb20tY2FyZC5qc1wiO1xuaW1wb3J0IGVkaXRTVkcgZnJvbSBcIi4vY29tcG9uZW50cy9pY29ucy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZVNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBjbG9zZVNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGFkZFNWRyBmcm9tIFwiLi9jb21wb25lbnRzL2ljb25zL2FkZC5zdmdcIjtcbmltcG9ydCBkb25lU1ZHIGZyb20gXCIuL2NvbXBvbmVudHMvaWNvbnMvZG9uZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNEb20oe1xuICBnZXRQcm9qZWN0QXJyYXksXG4gIHVwZGF0ZVByb2plY3RBcnJheSxcbiAgZGVsZXRlUHJvamVjdEFycmF5LFxuICBnZXRDdXJyZW50UHJvamVjdEluZGV4LFxuICB1cGRhdGVDdXJyZW50UHJvamVjdEluZGV4LFxuICBhbGxUb0RvLFxuICBpbXBvcnRhbnRUb0RvLFxufSkge1xuICAvLyB0b2dnbGUgYWRkIG5ldyBwcm9qZWN0IHdpdGggcGx1cyBidXR0b25cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlQ3JlYXRlTmV3UHJvamVjdCgpO1xuICB9KTtcblxuICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3RcIik7XG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1uZXctcHJvamVjdFwiKTtcblxuICBsZXQgcHJvamVjdERpc3BsYXkgPSBmYWxzZTtcbiAgZnVuY3Rpb24gdG9nZ2xlQ3JlYXRlTmV3UHJvamVjdCgpIHtcbiAgICBjb25zdCBhZGRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgYWRkSWNvbi5zcmMgPSBhZGRTVkc7XG5cbiAgICBjb25zdCBjbG9zZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjbG9zZUljb24uc3JjID0gY2xvc2VTVkc7XG5cbiAgICBpZiAocHJvamVjdERpc3BsYXkgPT09IGZhbHNlKSB7XG4gICAgICBhZGROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogZmxleFwiKTtcbiAgICAgIHByb2plY3REaXNwbGF5ID0gdHJ1ZTtcbiAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgYWRkUHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjbG9zZUljb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGROZXdQcm9qZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZGlzcGxheTogbm9uZVwiKTtcbiAgICAgIHByb2plY3REaXNwbGF5ID0gZmFsc2U7XG4gICAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGFkZFByb2plY3RCdXR0b24uYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG4gICAgICBzdWJtaXROZXdQcm9qZWN0LnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZ2V0IHVzZXIgbmV3IHByb2plY3QgbmFtZSB1cG9uIGZvcm0gc3VibWl0IGFuZCBhcHBlbmQgdG8gcHJvamVjdCBhcnJheVxuICBjb25zdCBzdWJtaXROZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtbmV3LXByb2plY3RcIik7XG4gIHN1Ym1pdE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcInN1Ym1pdFwiLFxuICAgIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdXBkYXRlUHJvamVjdEFycmF5KGNyZWF0ZVByb2plY3QobmV3UHJvamVjdE5hbWUudmFsdWUpKTtcbiAgICAgIHN1Ym1pdE5ld1Byb2plY3QucmVzZXQoKTtcbiAgICAgIHRvZ2dsZUNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICAgIGRpc3BsYXlBbGxQcm9qZWN0cygpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcblxuICBmdW5jdGlvbiBjcmVhdGVFZGl0QnV0dG9uKHBhcmVudEVsLCBpdGVtKSB7XG4gICAgY29uc3QgZWRpdFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVkaXRQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwicG9zaXRpb246IGFic29sdXRlXCIpO1xuICAgIGVkaXRQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXByb2plY3QtZGl2XCIpO1xuXG4gICAgY29uc3QgZWRpdFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZWRpdFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIi4vaW5kZXguaHRtbFwiKTtcbiAgICBlZGl0UHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdC1mb3JtXCIpO1xuICAgIGVkaXRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJzdWJtaXRcIixcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGl0ZW0udXBkYXRlUHJvamVjdE5hbWUoZWRpdFByb2plY3RJbnB1dC52YWx1ZSk7XG4gICAgICAgIGVkaXRQcm9qZWN0RGl2LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZGlzcGxheUFsbFByb2plY3RzKCk7XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuXG4gICAgY29uc3QgZWRpdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlZGl0UHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGVkaXRQcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFZGl0IFByb2plY3QgTmFtZVwiKTtcbiAgICBlZGl0UHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXByb2plY3QtaW5wdXRcIik7XG4gICAgZWRpdFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgZWRpdFByb2plY3RDb25maXJtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0UHJvamVjdENvbmZpcm0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICBjb25zdCBkb25lSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGRvbmVJY29uLnNyYyA9IGRvbmVTVkc7XG4gICAgZWRpdFByb2plY3RDb25maXJtLmFwcGVuZChkb25lSWNvbik7XG4gICAgZWRpdFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0Q29uZmlybSk7XG5cbiAgICBlZGl0UHJvamVjdERpdi5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEZvcm0pO1xuXG4gICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3REaXYpO1xuICB9XG5cbiAgLy8gZGlzcGxheSBhbGwgcHJvamVjdHMgYWZ0ZXIgZXZlcnkgcHJvamVjdCBpbnB1dCAoYWRkL2RlbGV0ZS9lZGl0KVxuICBjb25zdCBhbGxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtbGlzdFwiKTtcbiAgY29uc3QgcHJvamVjdE1haW5IZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhlYWRpbmcgaDFcIik7XG4gIC8vIExvYWQgb24gcGFnZSBzdGFydCB1cFxuICB0b0RvQ2FyZERvbShnZXRQcm9qZWN0QXJyYXkoKSwgZ2V0Q3VycmVudFByb2plY3RJbmRleCgpLCBudWxsKTtcblxuICBmdW5jdGlvbiBkaXNwbGF5QWxsUHJvamVjdHMoKSB7XG4gICAgYWxsUHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGdldFByb2plY3RBcnJheSgpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgcHJvamVjdE5hbWUgPSBpdGVtLmdldFByb2plY3ROYW1lKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY29uc3QgbmV3UHJvamVjdExpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbmV3UHJvamVjdExpLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwicG9zaXRpb246cmVsYXRpdmVcIik7XG5cbiAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAgIG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0TmFtZX1gO1xuICAgICAgbmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoYGRhdGEtcHJvamVjdGAsIGAke3Byb2plY3ROYW1lfWApO1xuICAgICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB1cGRhdGVDdXJyZW50UHJvamVjdEluZGV4KGluZGV4KTtcbiAgICAgICAgdG9Eb0NhcmREb20oZ2V0UHJvamVjdEFycmF5KCksIGdldEN1cnJlbnRQcm9qZWN0SW5kZXgoKSwgbnVsbCk7XG4gICAgICAgIHByb2plY3RNYWluSGVhZGluZy50ZXh0Q29udGVudCA9IGAke3Byb2plY3ROYW1lLnRvVXBwZXJDYXNlKCl9YDtcbiAgICAgICAgYWRkVG9Eby5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImRpc3BsYXk6IGZsZXhcIik7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGVkaXRJY29uLnNyYyA9IGVkaXRTVkc7XG4gICAgICBlZGl0UHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICBlZGl0UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoYHR5cGVgLCBgYnV0dG9uYCk7XG4gICAgICBlZGl0UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShgZGF0YS1lZGl0YCwgYCR7cHJvamVjdE5hbWV9YCk7XG4gICAgICBlZGl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjcmVhdGVFZGl0QnV0dG9uKG5ld1Byb2plY3RMaSwgaXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgZGVsZXRlSWNvbi5zcmMgPSBkZWxldGVTVkc7XG4gICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoYHR5cGVgLCBgYnV0dG9uYCk7XG4gICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShgZGF0YS1kZWxldGVgLCBgJHtwcm9qZWN0TmFtZX1gKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGVsZXRlUHJvamVjdEFycmF5KGluZGV4KTtcbiAgICAgICAgZGlzcGxheUFsbFByb2plY3RzKCk7XG4gICAgICB9KTtcblxuICAgICAgbmV3UHJvamVjdExpLmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICAgICAgbmV3UHJvamVjdExpLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnV0dG9uKTtcbiAgICAgIG5ld1Byb2plY3RMaS5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgIGFsbFByb2plY3RzLmFwcGVuZENoaWxkKG5ld1Byb2plY3RMaSk7XG4gICAgfSk7XG4gIH1cbiAgZGlzcGxheUFsbFByb2plY3RzKCk7XG4gIHRvZ2dsZUFkZFRvRG9Eb20oKTtcblxuICAvLyBjcmVhdGUgbmV3IHRvIGRvIGNhcmRcbiAgY29uc3QgYWRkVG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvLWRvXCIpO1xuICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvLWRvLXRpdGxlXCIpO1xuICBjb25zdCB0b0RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvLWRvLWRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG8tZG8tZHVlLWRhdGVcIik7XG5cbiAgY29uc3QgYWRkVG9Eb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10by1kby1mb3JtXCIpO1xuICBhZGRUb0RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwic3VibWl0XCIsXG4gICAgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgbmV3VG9EbyA9IGNyZWF0ZVRvRG8oXG4gICAgICAgIHRvRG9UaXRsZS52YWx1ZSxcbiAgICAgICAgdG9Eb0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICB0b0RvRHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBnZXRDdXJyZW50UHJvamVjdEluZGV4KClcbiAgICAgICk7XG5cbiAgICAgIGdldFByb2plY3RBcnJheSgpW2dldEN1cnJlbnRQcm9qZWN0SW5kZXgoKV0udXBkYXRlUHJvamVjdFRvRG8obmV3VG9Ebyk7XG5cbiAgICAgIHRvRG9DYXJkRG9tKGdldFByb2plY3RBcnJheSgpLCBnZXRDdXJyZW50UHJvamVjdEluZGV4KCksIG51bGwpO1xuXG4gICAgICBhZGRUb0RvRm9ybS5yZXNldCgpO1xuICAgICAgdG9nZ2xlQWRkVG9Eb0RvbSgpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcbn1cbiIsImltcG9ydCBjcmVhdGVUb0RvIGZyb20gXCIuL2NyZWF0ZS10by1kb1wiO1xuaW1wb3J0IGNyZWF0ZVByb2plY3QgZnJvbSBcIi4vY3JlYXRlLXByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEluaXRpYWwoKSB7XG4gIC8vIGNyZWF0ZXMgZGVmYXVsdCBwcm9qZWN0IGFuZCB0b2RvXG4gIGNvbnN0IGdlbmVyYWxQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChcIkdlbmVyYWxcIik7XG5cbiAgY29uc3QgaG9tZXdvcmsgPSBjcmVhdGVUb0RvKFxuICAgIFwiaG9tZXdvcmtcIixcbiAgICBcImZpbmlzaCB0b2RvIHByb2plY3RcIixcbiAgICBcIjIwMjMtMDktMTZcIixcbiAgICBmYWxzZSxcbiAgICBmYWxzZSxcbiAgICAwXG4gICk7XG4gIGdlbmVyYWxQcm9qZWN0LnVwZGF0ZVByb2plY3RUb0RvKGhvbWV3b3JrKTtcblxuICByZXR1cm4gZ2VuZXJhbFByb2plY3Q7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHByb2plY3RzIGZyb20gXCIuL2FsbC1wcm9qZWN0c1wiO1xuaW1wb3J0IHByb2plY3RzRG9tIGZyb20gXCIuL2RvbS1wcm9qZWN0XCI7XG5pbXBvcnQgaG9tZURvbSBmcm9tIFwiLi9kb20taG9tZVwiO1xuXG4vLyBjcmVhdGVzIGFsbCBwcm9qZWN0cyBvYmplY3RcbmNvbnN0IHVzZXJQcm9qZWN0ID0gcHJvamVjdHMoKTtcbi8vIGxvYWRzIGludG8gRE9NXG5wcm9qZWN0c0RvbSh1c2VyUHJvamVjdCk7XG5ob21lRG9tKHVzZXJQcm9qZWN0KTtcblxud2luZG93LnVzZXJQcm9qZWN0ID0gdXNlclByb2plY3Q7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=