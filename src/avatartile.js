import React from "react";
import { connect } from "react-redux";

import "./helpers";
import { editResource } from "./thunks";

const AvatarTile = props => (
  <div className="tile tile-centered">
    <div className="tile-icon">
      <figure className="avatar" data-initial={avatarLetter(props.name)} />
    </div>
    <div className="tile-content">
      <div className="tile-title">
        <button
          className="btn btn-link"
          onClick={e => props.editResource(props.id)}
        >
          {props.name}
        </button>
      </div>
      <div className="tile-subtitle text-gray">
        {props.taskCount} {"tasks".t()}
      </div>
    </div>
  </div>
);

const avatarLetter = name =>
  name
    .split(" ")
    .map(word => word.substring(0, 1))
    .join("");

export default connect(
  null,
  { editResource: key => editResource(key) }
)(AvatarTile);
