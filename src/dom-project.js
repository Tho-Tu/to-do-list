import createProject from "./create-project.js";
import editSVG from "./components/icons/edit.svg";
import deleteSVG from "./components/icons/delete.svg";
import closeSVG from "./components/icons/close.svg";
import addSVG from "./components/icons/add.svg";

export default function projectsDom({
  getProjectArray,
  updateProjectArray,
  deleteProjectArray,
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

  function createEditButton(parentEl) {
    const editProjectDiv = document.createElement("div");
    editProjectDiv.setAttribute("style", "position: absolute");
    // editProjectDiv.setAttribute("style", "display: block");

    const editProjectForm = document.createElement("form");
    editProjectForm.setAttribute("action", "./index.html");

    const editProjectInput = document.createElement("input");
    editProjectInput.setAttribute("type", "text");
    editProjectInput.setAttribute("placeholder", "Edit Project Name");
    editProjectForm.appendChild(editProjectInput);

    const editProjectConfirm = document.createElement("button");
    editProjectConfirm.setAttribute("type", "submit");
    editProjectForm.appendChild(editProjectConfirm);

    editProjectDiv.appendChild(editProjectForm);

    parentEl.appendChild(editProjectDiv);
  }

  // get user edit project name upon form submit and edit project array

  // display all projects after every project input (add/delete/edit)
  const allProjects = document.querySelector("#projects-list");
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

      const editIcon = new Image();
      editIcon.src = editSVG;
      editProjectButton.appendChild(editIcon);
      editProjectButton.setAttribute(`type`, `button`);
      editProjectButton.classList.add("edit-project-button");
      editProjectButton.setAttribute(`data-edit`, `${projectName}`);
      editProjectButton.addEventListener("click", () => {
        createEditButton(newProjectLi);
        // displayAllProjects();
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
}
