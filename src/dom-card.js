import createToDo from "./create-to-do";
import checkBoxSVG from "./components/icons/check-box-outline.svg";
import starSVG from "./components/icons/star.svg";
import editSVG from "./components/icons/edit.svg";
import deleteSVG from "./components/icons/delete.svg";

export default function toDoCardDom(currentProject) {
  // display all the to do cards of each project

  const toDoSection = document.querySelector("#to-do-section");
  toDoSection.textContent = "";

  currentProject.getProjectToDo().forEach((toDoObject, index) => {
    // item = each to do card

    const toDoCard = document.createElement("div");
    toDoCard.classList.add("to-do-card");

    const toDoComplete = document.createElement("button");
    toDoComplete.classList.add("to-do-complete");
    toDoComplete.setAttribute("type", "button");
    const checkBoxIcon = new Image();
    checkBoxIcon.src = checkBoxSVG;
    toDoComplete.appendChild(checkBoxIcon);
    toDoCard.appendChild(toDoComplete);

    const toDoTitle = document.createElement("div");
    toDoTitle.classList.add("to-do-title");
    toDoTitle.textContent = `${toDoObject.getTitle()}`;
    toDoCard.appendChild(toDoTitle);

    const toDoButtons = document.createElement("div");
    toDoButtons.classList.add("to-do-buttons");

    const toDoFavorite = document.createElement("button");
    const starIcon = new Image();
    starIcon.src = starSVG;
    toDoFavorite.appendChild(starIcon);

    const toDoEdit = document.createElement("button");
    const editIcon = new Image();
    editIcon.src = editSVG;
    toDoEdit.appendChild(editIcon);

    const toDoDelete = document.createElement("button");
    const deleteIcon = new Image();
    deleteIcon.src = deleteSVG;
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
  // all of the above depends on currentProject
  //
  // each cards need read, title, description, due date, important, edit, delete
}
