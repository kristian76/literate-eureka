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
    console.log(action);
    fetch("/dist/data.json")
      .then(response => response.json())
      .then(response =>
        store.dispatch({
          type: "RECEIVING_RESOURCES",
          resources: response.resources
        })
      );
  }

  next(action);
};

export default middleware;
