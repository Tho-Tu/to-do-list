import createToDo from "./create-to-do";
import createProject from "./create-project.js";

export default function domInteraction() {
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
