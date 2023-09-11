import loadInitial from "./load-initial";

export default function projects() {
  let projectArray = [];

  // load default 'general' project
  projectArray.push(loadInitial());
  let currentProject = loadInitial();

  // push all to do into single array
  function allToDo() {
    let allToDoArray = [];
    projectArray.forEach((project) => {
      project.forEach((toDo) => {
        allToDoArray.push(toDo);
      });
    });
    currentProject = allToDoArray;
  }

  // filter for only important toDo
  function importantToDo() {
    let importantToDoArray = [];
    projectArray.forEach((project) => {
      project.forEach((toDo) => {
        importantToDoArray.push(toDo);
      });
    });
    currentProject = importantToDoArray;
  }
  const getProjectArray = () => projectArray;
  const updateProjectArray = (project) => projectArray.push(project);
  const deleteProjectArray = (projectIndex) => {
    // let projectIndex = projectArray.indexOf(project);
    projectArray.splice(projectIndex, 1);
  };

  return {
    getProjectArray,
    updateProjectArray,
    deleteProjectArray,
    currentProject,
    allToDo,
    importantToDo,
  };
}
