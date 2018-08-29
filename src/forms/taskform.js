import React, { Component } from "react";

import { connect } from "react-redux";

class TaskForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      duration: {from: "", to: ""},
      resources: {},
      progress: 0,
      color: ""
    }
  }

  componentDidMount() {
    for (let key in this.props.tasks) {
      if (this.props.tasks[key].hasOwnProperty('editing') && this.props.tasks[key].editing === true) {
        console.log(this.props.tasks[key])
      }
    }
  }

  render() {
    return <form>TaskForm</form>;
  }
}

export default connect(state => ({
  tasks: state.tasks,
  resources: state.resources
}))(TaskForm);
