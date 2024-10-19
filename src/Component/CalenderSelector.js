import React from "react";
import * as style from "../style/PersonInfo.style";

const CalendarSelector = ({ calendarType, setCalendarType }) => {
  const handleTypeChange = (event) => {
    setCalendarType(event.target.value);
  };

  return (
    <>
      <style.BirthDaySelector
        id="calendar"
        name="calendar"
        onChange={handleTypeChange}
      >
        <option value="" disabled selected>
          {" "}
          양/음력
        </option>
        <option value="solarCalendar">양력</option>
        <option value="loonarCalendar(normal month)">음력(평달)</option>
        <option value="loonarCalendar(leap month)">음력(윤달)</option>
      </style.BirthDaySelector>
    </>
  );
};

export default CalendarSelector;
