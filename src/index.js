import createToDo from "./create-to-do.js";
import createProject from "./create-project.js";
import loadInitial from "./load-initial.js";
import domInteraction from "./dom-interaction.js";

loadInitial();

const testOne = createToDo("exercise", "cardio", "today", "medium", "false");
testOne.updateCompleted("true");
console.log(`to do testOne: ${testOne.getCompleted()}`);

const testProject = createProject("Test Project", testOne);

console.log(testProject);
