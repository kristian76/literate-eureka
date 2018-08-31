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
      color: "",
      id: null
    };

    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidUpdate() {
    if (this.props.id !== null && this.props.id !== this.state.id) {
      this.setState({
        name: this.props.tasks[this.props.id].name,
        id: this.props.id,
        duration: this.props.tasks[this.props.id].duration,
        progress: this.props.tasks[this.props.id].progress,
        color: this.props.tasks[this.props.id].color,
        resources: this.props.tasks[this.props.id].resources
      });
    }
  }

  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="field-name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="field-name"
            placeholder="Name"
            name="name"
            onChange={this.changeValue}
            value={this.state.name}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="field-progress">
            Progress
          </label>
          <input
            className="slider"
            type="range"
            min="0"
            name="progress"
            max="100"
            value={this.state.progress}
            onChange={this.changeValue}
          />
        </div>
        {Object.keys(this.props.resources).map((key, i) => (
          <div className="columns" key={i}>
            <div className="column col-6">{this.props.resources[key].name}</div>
            <div className="column col-4">
              <div className="form-group">
                <label className="form-switch">
                  <input type="checkbox" />
                  <i className="form-icon" />
                </label>
              </div>
            </div>
            <div className="column col-2">(focus %, role)</div>
          </div>
        ))}
        <div className="columns">
          <div className="column col-6">
            <div className="form-group">
              <label className="form-label" htmlFor="field-from">
                From
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Duration from"
                id="field-from"
              />
            </div>
          </div>
          <div className="column col-6">
            <div className="form-group">
              <label className="form-label" htmlFor="field-to">
                To
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Duration to"
                id="field-to"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
  resources: state.resources
}))(TaskForm);
