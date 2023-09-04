import createToDo from "./createToDo";
import createProject from "./createProject";

export default function loadInitial() {
  // creates default project and todo
  const generalProject = createProject("General");

  const homework = createToDo(
    "homework",
    "finish todo project",
    "today",
    "high",
    "false"
  );
  generalProject.updateProject(homework);
}
