import createToDo from "./create-to-do";

export default function toDoCardDom(currentProject) {
  // display all the to do cards of each project

  currentProject.getProjectToDo().forEach((item, index) => {
    // item = each to do card
  });

  const toDoCard = document.createElement("div");
  toDoCard.classList.add("to-do-card");

  const toDoTitle = document.createElement("div");
  toDoTitle.classList.add("to-do-title");
  const toDoComplete = document.createElement("button");
  toDoComplete.classList.add("to-do-complete");
  toDoComplete.setAttribute("type", "button");
  toDoTitle.appendChild(toDoComplete);

  const toDoButtons = document.createElement("div");
  toDoButtons.classList.add("to-do-buttons");
  // display all to do cards for all projects
  // display only important to do cards
  // when in (all to do/important), cannot allow user to add project
  // all of the above depends on currentProject
  //
  // each cards need read, title, description, due date, important, edit, delete
}
