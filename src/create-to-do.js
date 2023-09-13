export default function createToDo(
  title,
  description,
  dueDate,
  priority,
  completed,
  currentProject
) {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  const getCompleted = () => completed;

  function updateTitle(update) {
    title = update;
  }
  function updateDescription(update) {
    description = update;
  }
  function updateDueDate(update) {
    dueDate = update;
  }
  function updatePriority(update) {
    priority = update;
  }

  function updateCompleted(update) {
    completed = update;
  }

  return {
    getTitle,
    getDescription,
    getDueDate,
    getPriority,
    getCompleted,
    updateTitle,
    updateDescription,
    updateDueDate,
    updatePriority,
    updateCompleted,
    currentProject,
  };
}
