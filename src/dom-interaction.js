import createToDo from "./create-to-do";
import createProject from "./create-project.js";

export default function domInteraction() {
  //
}

// dashboard

function home() {
  //
}

function projects() {
  const addProjectButton = document.querySelector('#add-project-button"');
  addProjectButton.addEventListener("click", () => {
    createNewProjectLi();
    createProject();
  });

  const emptyProjectPrompt = () => {};

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
