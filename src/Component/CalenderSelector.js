import React from "react";

const CalendarSelector = ({ calendarType, setCalendarType }) => {
  const handleTypeChange = (event) => {
    setCalendarType(event.target.value);
    return (
      <div>
        <select id="calendar" name="calendar" onChange={handleTypeChange}>
          <option value="solar calendar">양력</option>
          <option value="loonar calendar(normal month)">음력(평달)</option>
          <option value="loonar calendar(leap month)">음력(윤달)</option>
        </select>
      </div>
    );
  };
};

export default CalendarSelector;
