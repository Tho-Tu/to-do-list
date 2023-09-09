export default function createProject(name) {
  let projectName = name;
  let projectToDo = [];

  const getProjectName = () => projectName;
  const updateProjectName = (update) => (projectName = update);

  const getProjectToDo = () => projectToDo;
  const updateProjectToDo = (toDoObject) => projectToDo.push(toDoObject);
  const deleteProjectToDo = (toDoObject) => {
    let toDoIndex = projectToDo.indexOf(toDoObject);
    projectToDo.splice(toDoIndex, 1);
  };

  return {
    getProjectName,
    updateProjectName,
    getProjectToDo,
    updateProjectToDo,
    deleteProjectToDo,
  };
}
