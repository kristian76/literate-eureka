import React from "react";
import { connect } from "react-redux";

class Modal extends React.Component {
  constructor(props) {
    super(props);

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
  /**
   * TODO: Modal content should be changed depending on redux action
   * a content factory builder could be implemented
   */
  render() {
    return (
      <div className="modal" id="modal-id" ref={this.modalRef}>
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
            <div className="content">modal content</div>
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

const mapState = state => ({
  modal: state.ui.modal
});

export default connect(
  mapState,
  null
)(Modal);
