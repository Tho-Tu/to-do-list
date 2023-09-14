import createProject from "./create-project.js";
import toDoCardDom from "./dom-card.js";

export default function homeDom({
  getProjectArray,
  updateProjectArray,
  deleteProjectArray,
  currentProject,
  allToDo,
  importantToDo,
}) {
  const projectMainHeading = document.querySelector(".main-heading h1");

  const allTasks = document.querySelector(".all-tasks");
  allTasks.addEventListener("click", () => {
    toDoCardDom(getProjectArray(), null, allToDo);
    projectMainHeading.textContent = "All Tasks";
  });

  const importantTasks = document.querySelector(".important-tasks");
  importantTasks.addEventListener("click", () => {
    toDoCardDom(getProjectArray(), null, importantToDo);
    projectMainHeading.textContent = "Important";
  });
}
