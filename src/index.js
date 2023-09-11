import projects from "./all-projects";
import createToDo from "./create-to-do.js";
import projectsDom from "./dom-project.js";
import toDoDom from "./dom-add-to-do";

// creates all projects array
const userProject = projects();
// loads into DOM
projectsDom(userProject);

toDoDom(userProject.currentProject);

const testOne = createToDo("exercise", "cardio", "today", "medium", "false");
testOne.updateCompleted("true");
