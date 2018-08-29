/**
 * Resources Reducer
 */
const resources = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case "RECEIVING_RESOURCES":
      return action.resources;
    case "EDIT_RESOURCE":
      return {
        ...state,
        [action.key]: Object.assign({ editing: true }, state[action.key])
      };
    case "ADD_RESOURCE":
      let key = "r" + nextKey(state);
      return {
        ...state,
        [key]: {
          name: "",
          editing: true
        }
      };
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
