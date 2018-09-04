/**
 * Tasks Reducer
 */
// FIXME: Change to task instead of tasks
const tasks = (state = {}, action) => {
  switch (action.type) {
    case "FETCHING_TASKS":
      return action.tasks;
    case "ADD_TASK":
      let key = Object.keys(state)
        .filter(key => state[key].hasOwnProperty("editing"))
        .shift();
      if (key) {
        delete state[key].editing;
      }
      let nK = "t" + nextKey(state);
      return {
        ...state,
        [nK]: {
          name: "",
          duration: { from: "", to: "" },
          resources: {},
          progress: 0,
          editing: true,
          color: ""
        }
      };
    case "EDIT_TASK":
      key = Object.keys(state)
        .filter(key => state[key].hasOwnProperty("editing"))
        .shift();
      if (key) {
        delete state[key].editing;
      }
      return {
        ...state,
        [action.key]: Object.assign({ editing: true }, state[action.key])
      };
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
