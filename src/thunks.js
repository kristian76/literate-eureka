import axios from "axios";
/**
 * Fetching data
 */
export const fetchData = (src) => {
  return dispatch => {
    axios
      .get(src)
      .then(resp => resp.data)
      .then(data => {
        dispatch({ type: "FETCHING_TASKS", tasks: data.tasks });
        dispatch({ type: "FETCHING_RESOURCES", resources: data.resources });
      });
  };
};

export const addTask = () => {
  return dispatch => {
    dispatch({
      type: "MODAL_ACTIVE",
      active: true,
      content: "taskForm",
      id: null
    });
  };
};

export const editTask = id => {
  return dispatch => {
    dispatch({ type: "MODAL_ACTIVE", active: true, content: "taskForm", id });
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
  };
};
