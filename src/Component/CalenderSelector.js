import React from "react";

const CalendarSelector = ({ calendarType, setCalendarType }) => {
  const handleTypeChange = (event) => {
    setCalendarType(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <select id="calendar" name="calendar" onChange={handleTypeChange}>
        <option value="" disabled selected> 선택</option>
        <option value="solarCalendar">양력</option>
        <option value="loonarCalendar(normal month)">음력(평달)</option>
        <option value="loonarCalendar(leap month)">음력(윤달)</option>
      </select>
    </div>
  );
};

export default CalendarSelector;
