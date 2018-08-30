export const addTask = () => {
  return dispatch => {
    dispatch({
      type: "MODAL_ACTIVE",
      active: true,
      content: "taskForm",
      key: null
    });

    dispatch({ type: "ADD_TASK" });
  };
};

export const editTask = key => {
  return dispatch => {
    dispatch({ type: "MODAL_ACTIVE", active: true, content: "taskForm", key });

    dispatch({ type: "EDIT_TASK" });
  };
};

export const addResource = () => {
  return dispatch => {
    dispatch({
      type: "MODAL_ACTIVE",
      active: true,
      content: "resourceForm",
      id: null
    });

    dispatch({ type: "ADD_RESOURCE" });
  };
};

export const editResource = id => {
  return dispatch => {
    dispatch({
      type: "MODAL_ACTIVE",
      active: true,
      content: "resourceForm",
      id
    });

    // dispatch({ type: "EDIT_RESOURCE" });
  };
};
