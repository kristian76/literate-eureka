const tasks = (state = [], action) => {
  switch (action.type) {
    case "RECEIVING_DATA":
      return action.tasks;
    default:
      return state;
  }
};

export default tasks;
