const middleware = store => next => action => {
  if (action.type === "FETCH_TASKS") {
    fetch("/dist/data.json")
      .then(response => response.json())
      .then(response =>
        store.dispatch({
          type: "RECEIVING_DATA",
          tasks: response.tasks
        })
      )
      .catch(e => console.log(e));
    /** Ugly hack **/
    store.dispatch({ type: "FETCH_RESOURCES" });
  }
  if (action.type === "FETCH_RESOURCES") {
    fetch("/dist/data.json")
      .then(response => response.json())
      .then(response =>
        store.dispatch({
          type: "RECEIVING_RESOURCES",
          resources: response.resources
        })
      );
  }

  if (action.type === "ADD_TASK") {
    store.dispatch({ type: "OPEN_MODAL" });
  }
  if (action.type === "ADD_RESOURCE") {
    store.dispatch({ type: "OPEN_MODAL" });
  }
  if (action.type === "EDIT_TASK") {
    store.dispatch({ type: "OPEN_MODAL" });
  }

  next(action);
};

export default middleware;
