const ui = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
    case "OPEN_MODAL":
      return Object.assign({}, state.ui, {
        modal: "isOpen"
      });
    case "CLOSE_MODAL":
      return Object.assign({}, state.ui, {
        modal: "isClosed"
      });
  }
};

const toggleModal = mode => (mode === "isClosed" ? "isOpen" : "isClosed");

export default ui;
