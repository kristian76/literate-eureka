import React from "react";
import { connect } from "react-redux";

import TaskForm from "./taskform"
import ResourceForm from "./resourceform"

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };

    this.modalRef = React.createRef();
  }

  componentDidUpdate() {
    
  }

  render() {
    return (
      <div className="modal" ref={this.modalRef}>
        <div className="modal-container">
          <div className="modal-header">
            <a
              href="#close"
              className="btn btn-clear float-right"
              aria-label="Close"
            />
            <div className="modal-title h5">Modal title</div>
          </div>
          <div className="modal-body">
            <div className="content">
              <TaskForm />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-link">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Modal);
