import React from "react";

const Duration = props => (
  <div>
    <div>
      <span>
        From: {new Date(Date.parse(props.dates.from)).toLocaleDateString()}
      </span>
      <span>
        To: {new Date(Date.parse(props.dates.to)).toLocaleDateString()}
      </span>
    </div>
    <meter className="meter" value={props.progress} min="0" max="100" />
  </div>
);

export default Duration;
