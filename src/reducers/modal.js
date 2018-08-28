/**
 * Modal Reducers
 */
const modal = (state = {}, action) => {
  switch (action.type) {
    case "MODAL_ACTIVE":
      return {
        active: action.active,
        content: action.content
      };
    case "MODAL_INACTIVE":
      return {
        active: false,
        content: null
      };
    default:
      return state;
  }
};

export default modal;
