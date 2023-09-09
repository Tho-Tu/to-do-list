import loadInitial from "./load-initial";

export default function projects() {
  let projectArray = [];
  // load default 'general' project
  projectArray.push(loadInitial());

  const getProjectArray = () => projectArray;
  const updateProjectArray = (project) => projectArray.push(project);
  const deleteProjectArray = (projectIndex) => {
    // let projectIndex = projectArray.indexOf(project);
    projectArray.splice(projectIndex, 1);
  };

  return { getProjectArray, updateProjectArray, deleteProjectArray };
}
