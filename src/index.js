import projects from "./all-projects";
import createToDo from "./create-to-do.js";
import createProject from "./create-project.js";
// import loadInitial from "./load-initial.js";
import projectsDom from "./dom-project.js";

const userProject = projects();
projectsDom();

// loadInitial();

const testOne = createToDo("exercise", "cardio", "today", "medium", "false");
testOne.updateCompleted("true");
