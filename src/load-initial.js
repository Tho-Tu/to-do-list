import createToDo from "./create-to-do";
import createProject from "./create-project";

export default function loadInitial() {
  // creates default project and todo
  const generalProject = createProject("General");

  const homework = createToDo(
    "homework",
    "finish todo project",
    "today",
    "important",
    "false"
  );
  generalProject.updateProjectToDo(homework);

  return generalProject;
}
