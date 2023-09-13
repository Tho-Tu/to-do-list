import createToDo from "./create-to-do";
import toDoCardDom from "./dom-card";
import closeSVG from "./components/icons/close.svg";
import addSVG from "./components/icons/add.svg";

// export default function addToDoDom(getProjectArray, currentProjectIndex) {
//   // toggle add new project with plus button
//   const addToDoButton = document.querySelector("#add-to-do-button");
//   addToDoButton.addEventListener("click", () => {
//     toggleAddToDo();
//   });

//   const addToDoCard = document.querySelector(".add-to-do-card");
//   const addToDoForm = document.querySelector("#add-to-do-form");

//   let addToDoDisplay = false;
//   function toggleAddToDo() {
//     const addIcon = new Image();
//     addIcon.src = addSVG;

//     const closeIcon = new Image();
//     closeIcon.src = closeSVG;

//     if (addToDoDisplay === false) {
//       addToDoCard.setAttribute("style", "display: flex");
//       addToDoDisplay = true;
//       addToDoButton.textContent = "";
//       addToDoButton.appendChild(closeIcon);
//     } else {
//       addToDoCard.setAttribute("style", "display: none");
//       addToDoDisplay = false;
//       addToDoButton.textContent = "";
//       addToDoButton.appendChild(addIcon);
//       addToDoForm.reset();
//     }
//   }
//   // create new to do card
//   const toDoTitle = document.querySelector("#to-do-title");
//   const toDoDescription = document.querySelector("#to-do-description");
//   const toDoDueDate = document.querySelector("#to-do-due-date");
//   addToDoForm.addEventListener(
//     "submit",
//     (event) => {
//       event.preventDefault();

//       let newToDo = createToDo(
//         toDoTitle.value,
//         toDoDescription.value,
//         toDoDueDate.value,
//         false,
//         false
//       );
//       // console.log("dom-add-todo index: " + currentProjectIndex);

//       // add newToDo based on current project (inside of whole array)

//       getProjectArray[currentProjectIndex].updateProjectToDo(newToDo);

//       console.log(
//         `project to do according to index: ${currentProjectIndex} ${getProjectArray[
//           currentProjectIndex
//         ].getProjectToDo()}`
//       );

//       toDoCardDom(getProjectArray, currentProjectIndex);

//       addToDoForm.reset();
//       // toggleAddToDo();
//     },
//     false
//   );
// }
