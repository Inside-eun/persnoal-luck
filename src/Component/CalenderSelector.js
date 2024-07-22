import React from "react";

const CalendarSelector = () => {
  return (
    <div>
      <select id="calendar" name="calendar">
        <option value="solar calendar">양력</option>
        <option value="loonar calendar(normal month)">음력(평달)</option>
        <option value="loonar calendar(leap month)">음력(윤달)</option>
      </select>
    </div>
  );
};

export default CalendarSelector;
