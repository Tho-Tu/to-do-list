import createProject from "./create-project.js";
import createToDo from "./create-to-do";
import toggleAddToDoDom from "./dom-add-to-do.js";
import toDoCardDom from "./dom-card.js";
import editSVG from "./components/icons/edit.svg";
import deleteSVG from "./components/icons/delete.svg";
import closeSVG from "./components/icons/close.svg";
import addSVG from "./components/icons/add.svg";
import doneSVG from "./components/icons/done.svg";

export default function projectsDom({
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
    addIcon.src = addSVG;

    const closeIcon = new Image();
    closeIcon.src = closeSVG;

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

      updateProjectArray(createProject(newProjectName.value));
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
    doneIcon.src = doneSVG;
    editProjectConfirm.append(doneIcon);
    editProjectForm.appendChild(editProjectConfirm);

    editProjectDiv.appendChild(editProjectForm);

    parentEl.appendChild(editProjectDiv);
  }

  // display all projects after every project input (add/delete/edit)
  const allProjects = document.querySelector("#projects-list");
  const projectMainHeading = document.querySelector(".main-heading h1");
  // Load on page start up
  toDoCardDom(getProjectArray(), getCurrentProjectIndex(), null);

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
        toDoCardDom(getProjectArray(), getCurrentProjectIndex(), null);
        projectMainHeading.textContent = `${projectName.toUpperCase()}`;
        addToDo.setAttribute("style", "display: flex");
      });

      const editIcon = new Image();
      editIcon.src = editSVG;
      editProjectButton.appendChild(editIcon);
      editProjectButton.setAttribute(`type`, `button`);
      editProjectButton.classList.add("edit-project-button");
      editProjectButton.setAttribute(`data-edit`, `${projectName}`);
      editProjectButton.addEventListener("click", () => {
        createEditButton(newProjectLi, item);
      });

      const deleteIcon = new Image();
      deleteIcon.src = deleteSVG;
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
  toggleAddToDoDom();

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

      let newToDo = createToDo(
        toDoTitle.value,
        toDoDescription.value,
        toDoDueDate.value,
        false,
        false,
        getCurrentProjectIndex()
      );

      getProjectArray()[getCurrentProjectIndex()].updateProjectToDo(newToDo);

      toDoCardDom(getProjectArray(), getCurrentProjectIndex(), null);

      addToDoForm.reset();
      toggleAddToDoDom();
    },
    false
  );
}
