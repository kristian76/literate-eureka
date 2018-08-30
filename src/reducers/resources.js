/**
 * Resources Reducer
 */
// FIXME: Change to resource instead of resources
const resources = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case "RECEIVING_RESOURCES":
      return action.resources;
    case "EDIT_RESOURCE":
      /*
      // FIXME: not the best way to handle this
      let key = Object.keys(state)
        .filter(key => state[key].hasOwnProperty("editing"))
        .shift();
      if (key) {
        delete state[key].editing;
      }
      return {
        ...state,
        [action.key]: Object.assign({ editing: true }, state[action.key])
      };
      */
      return state;
    case "ADD_RESOURCE":
      /*
      // FIXME: not the best way to handle this
      key = Object.keys(state)
        .filter(key => state[key].hasOwnProperty("editing"))
        .shift();
      if (key) {
        delete state[key].editing;
      }
      let nK = "r" + nextKey(state);
      return {
        ...state,
        [nK]: {
          name: "",
          editing: true
        }
      };
      */
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

export default resources;
