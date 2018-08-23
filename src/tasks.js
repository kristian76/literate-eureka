const tasks = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "RECEIVING_DATA":
      return action.tasks;
    case "EDIT_TASK":
      return state;
    case "ADD_TASK":
      return state;
    default:
      return state;
  }
};

export default tasks;
