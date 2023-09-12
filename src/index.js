import projects from "./all-projects";
import createToDo from "./create-to-do.js";
import projectsDom from "./dom-project.js";
import toDoDom from "./dom-add-to-do";

// creates all projects object
const userProject = projects();
// loads into DOM
projectsDom(userProject);

// toDoDom(userProject);
