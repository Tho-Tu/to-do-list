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
  const allTasks = document.querySelector(".all-tasks");
  allTasks.addEventListener("click", () => {
    toDoCardDom(getProjectArray(), allToDo());
  });
}
