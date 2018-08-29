export const addTask = () => {
  return dispatch => {
    dispatch({ type: "MODAL_ACTIVE", active: true, content: "taskForm" });

    dispatch({ type: "ADD_TASK" });
  };
};

export const addResource = () => {
  return dispatch => {
    dispatch({ type: "MODAL_ACTIVE", active: true, content: "resourceForm" });

    dispatch({ type: "ADD_RESOURCE" });
  };
};

export const editTask = key => {
  return dispatch => {
    dispatch({ type: "MODAL_ACTIVE", active: true, content: "taskForm" });

    dispatch({ type: "EDIT_TASK", key });
  };
};

export const editResource = key => {
  return dispatch => {
    dispatch({ type: "MODAL_ACTIVE", active: true, content: "resourceForm" });

    dispatch({ type: "EDIT_RESOURCE", key: key });
  };
};
