const tasks = (state = [], action) => {
  switch (action.type) {
    case "RECEIVING_DATA":
      return action.tasks;
    case "EDIT_TASK":
      let tasks = Object.keys(state).map(key => {
        if (action.key === key) {
          return Object.assign({editing: true}, state[key])
        } else {
          let task = state[key]
          delete task.editing
          return task
        }
      })
      return tasks;
    case "ADD_TASK":
      return state
    default:
      return state;
  }
};

export default tasks;
