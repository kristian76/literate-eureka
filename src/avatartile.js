import React from "react";

import "./helpers"

const AvatarTile = props => (
  <div className="tile tile-centered">
    <div className="tile-icon">
      <figure className="avatar" data-initial={avatarLetter(props.data.name)} />
    </div>
    <div className="tile-content">
      <div className="tile-title">{props.data.name}</div>
      <div className="tile-subtitle text-gray">{props.taskCount} {"tasks".t()}</div>
    </div>
  </div>
);

const avatarLetter = name =>
  name
    .split(" ")
    .map(word => word.substring(0, 1))
    .join("");

export default AvatarTile;
