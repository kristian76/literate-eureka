/**
 * Modal Reducers
 */
const modal = (state = {}, action) => {
  switch (action.type) {
    case "MODAL_ACTIVE":
      return {
        active: action.active,
        content: action.content,
        key: action.key
      };
    case "MODAL_INACTIVE":
      return {
        active: false,
        content: null,
        key: null
      };
    default:
      return state;
  }
};

export default modal;
