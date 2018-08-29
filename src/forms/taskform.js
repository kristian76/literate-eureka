import React, { Component } from "react";

import { connect } from "react-redux";

class TaskForm extends Component {
  render() {
    return <form>TaskForm</form>;
  }
}

export default connect(state => ({
  tasks: state.tasks,
  resources: state.resources
}))(TaskForm);
