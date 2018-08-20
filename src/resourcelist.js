import React from "react";
import { connect } from "react-redux";

const ResouceList = props =>
  Object.keys(props.resources).map((key, index) => (
    <div key={index}>{props.resources[key].name}</div>
  ));

const mapState = state => ({
  resources: state.resources
});

export default connect(
  mapState,
  null
)(ResouceList);
