import React from "react";
import { connect } from "react-redux";

import TaskList from "./tasklist";
// List of day names
// FIXME: Should be translatable
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarView = props => {
  let dates = findStartAndEndDates(props.tasks),
    days = dateRange(dates[0], dates[dates.length - 1]),
    range = days.map((date, i) => (
      <div
        key={i}
        className={`column col-2 ${isWeekend(date) ? "weekend" : "weekday"} ${
          isToday(date) ? "is-today" : ""
        }`}
        style={{ height: 45 }}
      >
        {weekDays[days[i].getDay()]}
        <div className="hide-xs">
          <small>{dateFormat(days[i])}</small>
        </div>
      </div>
    ));

  return (
    <div className="columns col-gapless">
      <div className="column col-12">
        <div className="columns col-gapless">{range}</div>
      </div>
      <div className="column col-12">
        <TaskList startDate={dates[0]} />
      </div>
    </div>
  );
};
// Format date based on locale
// FIXME: Should go into helper library. Locale shouldn't be hardcoded
const dateFormat = date =>
  new Date(Date.parse(date)).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit"
  });
// Helper function to add days to date
// FIXME: Should go to the helper library
Date.prototype.addDays = function(days) {
  let date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
// Create a range of dates between start and end date
const dateRange = (startDate, endDate) => {
  let dates = [];
  /** FIXME: This should be delt with by React lifecycle, checking for undefined
   * is a no no
   */
  if (typeof startDate !== "undefined") {
    let currentDate = startDate;
    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate = currentDate.addDays(1);
    }
  }

  return dates;
};
// Check if day is Sun or Sat
const isWeekend = date => [0, 6].includes(date.getDay());
// Check if date is equal to today's date
const isToday = date => {
  return new Date().getDate() === date.getDate();
};
// Sort tasks by dates
const findStartAndEndDates = tasks => {
  let dates = [];

  Object.keys(tasks).forEach(key => {
    dates.push(new Date(Date.parse(tasks[key].duration.from)));
    dates.push(new Date(Date.parse(tasks[key].duration.to)));
  });
  return dates.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
};

const mapState = state => ({
  tasks: state.tasks
});

export default connect(
  mapState,
  null
)(CalendarView);
