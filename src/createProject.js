export default function createProject(name) {
  let projectName = name;
  let projectToDo = [];

  const getProjectName = () => projectName;
  const updateProjectName = (update) => (projectName = update);

  const getProject = () => projectToDo;

  const updateProject = (toDoObject) => projectToDo.push(toDoObject);

  const deleteProject = (toDoObject) => {
    let toDoIndex = projectToDo.indexOf(toDoObject);
    projectToDo.splice(toDoIndex, 1);
  };

  return {
    getProjectName,
    updateProjectName,
    getProject,
    updateProject,
    deleteProject,
  };
}
