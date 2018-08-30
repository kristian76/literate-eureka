import React from "react";
import { connect } from "react-redux";

import TaskForm from "./forms/taskform";
import ResourceForm from "./forms/resourceform";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.modalRef = React.createRef();

    this.state = {
      taskForm: TaskForm,
      resourceForm: ResourceForm,
      title: ""
    };

    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidUpdate() {
    if (this.props.active == true) {
      this.modalRef.current.classList.add("active");
    } else {
      this.modalRef.current.classList.remove("active");
    }
  }

  componentFactory() {
    let Component = this.state[this.props.content || "taskForm"];
    return <Component id={this.props.id} />;
  }

  handleCancel() {
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal" ref={this.modalRef}>
        <div className="modal-container">
          <div className="modal-header">
            <div className="modal-title h5">{this.state.title}</div>
          </div>
          <div className="modal-body">
            <div className="content">{this.componentFactory()}</div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary">Save</button>
            <button className="btn btn-link" onClick={this.handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    active: state.modal.active,
    content: state.modal.content,
    id: state.modal.id
  }),
  dispatch => ({ closeModal: () => dispatch({ type: "MODAL_INACTIVE" }) })
)(Modal);
