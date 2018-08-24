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
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidUpdate() {
    if (this.props.modal === "isOpen") {
      this.modalRef.current.classList.add("active");
    } else {
      this.modalRef.current.classList.remove("active");
    }
  }

  closeModal(e) {
    this.props.dispatch({ type: "CLOSE_MODAL" });
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
            <button className="btn btn-link" onClick={this.closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// FIXME: Modal is too generic, should be something else
const mapState = state => ({
  modal: state.ui.modal,
  tasks: state.tasks
});

export default connect(
  mapState,
  null
)(Modal);
