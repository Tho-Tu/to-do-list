import projects from "./all-projects";
import createToDo from "./create-to-do.js";
import projectsDom from "./dom-project.js";
import toDoDom from "./dom-add-to-do";

const userProject = projects();

projectsDom(userProject);

toDoDom();

const testOne = createToDo("exercise", "cardio", "today", "medium", "false");
testOne.updateCompleted("true");
