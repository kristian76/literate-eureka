/**
 * Tasks Reducer
 */
const tasks = (state = [], action) => {
  switch (action.type) {
    case "RECEIVING_DATA":
      return action.tasks;
    case "ADD_TASK":
      let tasks = state,
        key = "t" + nextKey(state);
      tasks[key] = {
        name: "",
        progress: 0,
        resources: {},
        duration: { from: "", to: "" },
        color: "",
        editing: true
      };
      return tasks;
    case "EDIT_TASK":
      console.log(action)
      return state;
    default:
      return state;
  }
};

const nextKey = doc =>
  parseInt(
    Object.keys(doc)
      .sort()
      .pop()
      .replace(/[^\d]/g, "")
  ) + 1;

export default tasks;
