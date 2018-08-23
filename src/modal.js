import React from "react";
import { connect } from "react-redux";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.modalRef = React.createRef();
  }

  render() {
    return (
      <div className="modal" id="modal-id" ref={this.modalRef}>
        <a href="#close" className="modal-overlay" aria-label="Close" />
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
          <div className="modal-footer" />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  ui: state.ui
});

export default connect(
  mapState,
  null
)(Modal);
