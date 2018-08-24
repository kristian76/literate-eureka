export const addTask = () => {
  console.log("adding new task");

  return dispatch => {
    dispatch({ type: "FETCH_TASKS" });
    return Promise.resolve();
  };
};
