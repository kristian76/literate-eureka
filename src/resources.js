const resources = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
    case "RECEIVING_RESOURCES":
      return action.resources;
  }
};

export default resources;
