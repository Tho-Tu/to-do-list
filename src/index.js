import projects from "./all-projects";
import projectsDom from "./dom-project";
import homeDom from "./dom-home";
import toDoDom from "./dom-add-to-do";

// creates all projects object
const userProject = projects();
// loads into DOM
projectsDom(userProject);
homeDom(userProject);

window.userProject = userProject;
