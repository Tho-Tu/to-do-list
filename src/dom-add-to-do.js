import closeSVG from "./components/icons/close.svg";
import addSVG from "./components/icons/add.svg";

export default function toggleAddToDoDom() {
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
}
