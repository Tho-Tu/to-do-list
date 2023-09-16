import checkBoxOutlineSVG from "./components/icons/check-box-outline.svg";
import checkBoxSVG from "./components/icons/check-box.svg";
import starSVG from "./components/icons/star.svg";
import hotelClassSVG from "./components/icons/hotel-class.svg";
import editSVG from "./components/icons/edit.svg";
import deleteSVG from "./components/icons/delete.svg";
import doneSVG from "./components/icons/done.svg";

export default function toDoCardDom(
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
      checkBoxIcon.src = checkBoxOutlineSVG;
      toDoTitle.setAttribute("style", "text-decoration: none");
    } else {
      checkBoxIcon.src = checkBoxSVG;
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
    starIcon.src = toDoObject.getPriority() === false ? starSVG : hotelClassSVG;
    toDoFavorite.appendChild(starIcon);
    toDoFavorite.addEventListener("click", () => {
      importantStar(toDoObject, starIcon);
    });

    const toDoEdit = document.createElement("button");
    const editIcon = new Image();
    editIcon.src = editSVG;
    toDoEdit.appendChild(editIcon);
    toDoEdit.addEventListener("click", () => {
      createToDoEditButton(toDoCard, toDoObject);
    });

    const toDoDelete = document.createElement("button");
    const deleteIcon = new Image();
    deleteIcon.src = deleteSVG;
    toDoDelete.appendChild(deleteIcon);
    toDoDelete.addEventListener("click", () => {
      getProjectArray[toDoObject.currentProject].deleteProjectToDo(toDoObject);
      console.log(`delete current project index: ${currentProjectIndex}`);
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
      checkBoxIcon.src = checkBoxSVG;
      toDoTitle.setAttribute("style", "text-decoration:line-through");
    } else {
      toDoObject.updateCompleted(false);
      checkBoxIcon.src = checkBoxOutlineSVG;
      toDoTitle.setAttribute("style", "text-decoration:none");
    }
    return checkBoxIcon;
  }

  function importantStar(toDoObject, starIcon) {
    if (toDoObject.getPriority() === false) {
      toDoObject.updatePriority(true);
      starIcon.src = hotelClassSVG;
    } else {
      toDoObject.updatePriority(false);
      starIcon.src = starSVG;
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
    const doneIcon = new Image();
    doneIcon.src = doneSVG;
    editToDoConfirm.append(doneIcon);
    editToDoForm.appendChild(editToDoConfirm);

    editToDoDiv.appendChild(editToDoForm);

    parentEl.appendChild(editToDoDiv);
  }
}
