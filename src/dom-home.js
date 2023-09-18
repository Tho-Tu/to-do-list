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
  const addToDo = document.querySelector(".add-to-do");
  const addToDoCard = document.querySelector(".add-to-do-card");

  const allTasks = document.querySelector(".all-tasks");
  allTasks.addEventListener("click", () => {
    toDoCardDom(getProjectArray(), null, allToDo);
    projectMainHeading.textContent = "All Tasks";
    addToDo.setAttribute("style", "display: none");
    addToDoCard.setAttribute("style", "display: none");
  });

  const importantTasks = document.querySelector(".important-tasks");
  importantTasks.addEventListener("click", () => {
    toDoCardDom(getProjectArray(), null, importantToDo);
    projectMainHeading.textContent = "Important";
    addToDo.setAttribute("style", "display: none");
    addToDoCard.setAttribute("style", "display: none");
  });
}
