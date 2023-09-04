export default function createProject() {
  let projectToDo = [];

  const getProject = () => projectToDo;

  const updateProject = (toDoObject) => projectToDo.push(toDoObject);

  const deleteProject = (toDoObject) => {
    let toDoIndex = projectToDo.indexOf(toDoObject);
    projectToDo.splice(toDoIndex, 1);
  };

  return { getProject, updateProject, deleteProject };
}
