import React, { Component } from "react";

import { connect } from "react-redux";

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      duration: { from: "", to: "" },
      resources: {},
      progress: 0,
      color: ""
    };
  }

  componentDidUpdate() {
    for (let key in this.props.tasks) {
      if (this.props.tasks[key].hasOwnProperty("editing")) {
        console.log(this.props.tasks[key])
      }
    }
  }

  render() {
    return <form>TaskForm {this.state.name}</form>;
  }
}

export default connect(state => ({
  tasks: state.tasks,
  resources: state.resources
}))(TaskForm);
