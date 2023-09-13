import projects from "./all-projects";
import createToDo from "./create-to-do";
import projectsDom from "./dom-project";
import toDoDom from "./dom-add-to-do";

// creates all projects object
const userProject = projects();
// loads into DOM
projectsDom(userProject);

window.userProject = userProject;
