export default function createProject(name, toDoObject) {
  let projectName = name;
  let projectToDo = [];

  const getProjectName = () => projectName;
  const updateProjectName = (update) => (projectName = update);

  const getProject = () => projectToDo;
  const updateProject = () => projectToDo.push(toDoObject);
  const deleteProject = () => {
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
