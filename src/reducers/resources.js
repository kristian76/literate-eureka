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
  }
};

export default resources;
