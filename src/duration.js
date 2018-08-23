import React from "react";

import "./helpers";

const Duration = props => (
  <div className="tile tile-centered">
    <div className="tile-icon">
      <i className="icon icon-time" />
    </div>
    <div className="tile-content">
      <div className="tile-title">
        <small>{"duration".t()}</small>
      </div>
      <div className="tile-subtitle text-gray">
        <small>
          {dateFormat(props.dates.from)} - {dateFormat(props.dates.to)}
        </small>
      </div>
    </div>
  </div>
);

const dateFormat = dateStr =>
  new Date(Date.parse(dateStr)).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit"
  });

const daysBetween = (fd, ed) => {
  let oneDay = 1000 * 60 * 60 * 24;
  let t1 = new Date(Date.parse(fd)).getTime(),
    t2 = new Date(Date.parse(ed)).getTime();

  let mSecDiff = Math.abs(t1 - t2);
  return Math.round(mSecDiff / oneDay);
};

export default Duration;
