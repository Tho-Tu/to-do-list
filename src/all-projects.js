import loadInitial from "./load-initial";

export default function projects() {
  let projectArray = [];

  // load default 'general' project
  projectArray.push(loadInitial());
  let currentProjectIndex = 0;

  const getCurrentProjectIndex = () => currentProjectIndex;
  const updateCurrentProjectIndex = (update) => (currentProjectIndex = update);

  // push all to do into single array
  function allToDo() {
    let allToDoArray = [];
    projectArray.forEach((project) => {
      project.getProjectToDo().forEach((toDo) => {
        allToDoArray.push(toDo);
      });
    });
    return allToDoArray;
  }

  // filter for only important toDo
  function importantToDo() {
    let importantToDoArray = [];
    projectArray.forEach((project) => {
      project.getProjectToDo().forEach((toDo) => {
        if (toDo.getPriority() === true) {
          importantToDoArray.push(toDo);
        }
      });
    });
    return importantToDoArray;
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
    getCurrentProjectIndex,
    updateCurrentProjectIndex,
    allToDo,
    importantToDo,
  };
}
