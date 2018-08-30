import React, { Component } from "react";

import { connect } from "react-redux";

class ResourceForm extends Component {
  constructor(props) {
    super(props);

    this.state = { name: "", id: null };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    if (this.state.id !== this.props.id) {
      this.setState({
        name: this.props.resources[this.props.id].name,
        id: this.props.id
      });
    }
  }

  render() {
    console.log(this.state);
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
