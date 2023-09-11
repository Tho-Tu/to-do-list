import createToDo from "./create-to-do";
import closeSVG from "./components/icons/close.svg";
import addSVG from "./components/icons/add.svg";

export default function toDoDom(
  getProjectArray,
  updateProjectArray,
  deleteProjectArray,
  currentProject
) {
  // toggle add new project with plus button
  const addToDoButton = document.querySelector("#add-to-do-button");
  addToDoButton.addEventListener("click", () => {
    toggleAddToDo();
  });

  const addToDoCard = document.querySelector(".add-to-do-card");
  const addToDoForm = document.querySelector("#add-to-do-form");

  let addToDoDisplay = false;
  function toggleAddToDo() {
    const addIcon = new Image();
    addIcon.src = addSVG;

    const closeIcon = new Image();
    closeIcon.src = closeSVG;

    if (addToDoDisplay === false) {
      addToDoCard.setAttribute("style", "display: flex");
      addToDoDisplay = true;
      addToDoButton.textContent = "";
      addToDoButton.appendChild(closeIcon);
    } else {
      addToDoCard.setAttribute("style", "display: none");
      addToDoDisplay = false;
      addToDoButton.textContent = "";
      addToDoButton.appendChild(addIcon);
      addToDoForm.reset();
    }
  }

  // create new to do card
  const toDoTitle = document.querySelector("#to-do-title");
  const toDoDescription = document.querySelector("#to-do-description");
  const toDoDueDate = document.querySelector("#to-do-due-date");

  addToDoForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const newToDo = createToDo(
        toDoTitle.value,
        toDoDescription.value,
        toDoDueDate.value,
        false,
        false
      );
      console.log("current project name: " + currentProject.getProjectName());
      console.log(currentProject);

      // add newToDo to current project (inside of whole array)
      let index = getProjectArray().indexOf(currentProject);
      console.log(index);
      getProjectArray()[index].updateProjectToDo(newToDo);

      console.log(getProjectArray()[index].getProjectToDo()[1].getTitle());
    },
    false
  );
}
