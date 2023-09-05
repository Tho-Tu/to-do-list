export default function projects() {
  let projectArray = [];
  projectArray.push(loadInitial());

  const getProjectArray = () => projectArray;
  const updateProjectArray = () => projectArray.push(project);
  const deleteProjectArray = () => {
    let projectIndex = projectArray.indexOf(project);
    projectArray.splice(projectIndex, 1);
  };

  return { getProjectArray, updateProjectArray, deleteProjectArray };
}
