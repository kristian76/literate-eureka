import React, { Component } from "react";

import { connect } from "react-redux";

class ResourceForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", key: "" };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    console.log(this.props.resources);
    for (let key in this.props.resources) {
      if (
        this.props.resources[key].hasOwnProperty("editing") &&
        this.props.resources[key].editing === true
      ) {
        this.setState({ name: this.props.resources[key].name, key: key });
      }
    }
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="name-field">
            Name
          </label>
          <input
            className="form-input"
            name="name"
            type="text"
            id="name-field"
            placeholder="Name"
            value={this.state.name}
            onChange={this.changeValue}
          />
        </div>
      </form>
    );
  }
}

export default connect(state => ({
  resources: state.resources
}))(ResourceForm);
