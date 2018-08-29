import React, { Component } from "react";

import { connect } from "react-redux";

class ResourceForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "" };
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
            type="text"
            id="name-field"
            placeholder="Name"
          />
        </div>
      </form>
    );
  }
}

export default ResourceForm;
