import createToDo from "./create-to-do";
import createProject from "./create-project.js";

export default function projectsDom({
  getProjectArray,
  updateProjectArray,
  deleteProjectArray,
}) {
  // toggle add new project with plus button
  const addProjectButton = document.querySelector("#add-project-button");
  addProjectButton.addEventListener("click", () => {
    toggleCreateNewProject();
  });

  const addNewProject = document.querySelector("#add-new-project");

  let projectDisplay = false;
  const toggleCreateNewProject = () => {
    if (projectDisplay === false) {
      addNewProject.setAttribute("style", "display: flex");
      projectDisplay = true;
    } else {
      addNewProject.setAttribute("style", "display: none");
      projectDisplay = false;
    }
  };

  const displayAllProjects = (projectName) => {
    const newProjectLi = document.createElement("li");
    const newProjectButton = document.createElement("button");
    newProjectButton.textContent = `${projectName}`;
    newProjectButton.setAttribute(`data-${projectName}`, `${projectName}`);
    newProjectLi.appendChild(newProjectButton);
    addNewProject.appendChild(newProjectLi);
  };

  // get user new project name upon form submit and append to project array
  const submitNewProject = document.querySelector("#submit-new-project");
  submitNewProject.addEventListener("submit", (event) => {
    event.preventDefault();

    const newProjectName = document.querySelector("#new-project");
    updateProjectArray(newProjectName.value);
    console.log(getProjectArray);
    toggleCreateNewProject();
  });
}
