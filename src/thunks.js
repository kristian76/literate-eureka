export const addTask = () => {
  console.log("adding new task");

  return dispatch => {
    dispatch({ type: "MODAL_ACTIVE", active: true, content: "taskForm" });

    dispatch({ type: "ADD_TASK" });
  };
};
