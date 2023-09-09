import projects from "./all-projects";
import createToDo from "./create-to-do.js";
import createProject from "./create-project.js";
import projectsDom from "./dom-project.js";

const userProject = projects();
console.log(
  `index.js project name: ${userProject.getProjectArray()[0].getProjectName()}`
);
console.log(
  `general project to dos: ${userProject
    .getProjectArray()[0]
    .getProjectToDo()[0]
    .getTitle()}`
);

projectsDom(userProject);

const testOne = createToDo("exercise", "cardio", "today", "medium", "false");
testOne.updateCompleted("true");
