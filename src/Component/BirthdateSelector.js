import React from "react";
import * as style from "../style/PersonInfo.style";

const BirthdateSelector = ({
  birthdate,
  setBirthdate,
  calendarType,
  setCalendarType,
}) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(101), (val, index) => currentYear - index);

  const handleTypeChange = (event) => {
    setCalendarType(event.target.value);
  };

  const handleYearChange = (e) => {
    const value = e.target.value ? Number(e.target.value) : null;
    setBirthdate((prevBirthdate) => ({
      ...prevBirthdate,
      year: value,
    }));
  };

  const handleMonthChange = (e) => {
    const value = e.target.value ? Number(e.target.value) : null;
    setBirthdate((prevBirthdate) => ({
      ...prevBirthdate,
      month: value,
    }));
  };

  const handleDayChange = (e) => {
    const value = e.target.value ? Number(e.target.value) : null;
    setBirthdate((prevBirthdate) => ({
      ...prevBirthdate,
      day: value,
    }));
  };

  return (
    <style.BirthDayWrap>
      <style.BirthDayOneWrap>
        {" "}
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
        <style.BirthDaySelector
          id="year"
          name="year"
          onChange={handleYearChange}
        >
          <option value="" disabled selected>
            출생년
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </style.BirthDaySelector>
      </style.BirthDayOneWrap>

      <style.BirthDayOneWrap>
        <style.BirthDaySelector
          id="month"
          name="month"
          onChange={handleMonthChange}
        >
          <option value="" disabled selected>
            출생월
          </option>
          {Array.from({ length: 12 }, (v, k) => k + 1).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </style.BirthDaySelector>
        <style.BirthDaySelector id="day" name="day" onChange={handleDayChange}>
          <option value="" disabled selected>
            출생일
          </option>
          {Array.from({ length: 31 }, (v, k) => k + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </style.BirthDaySelector>
      </style.BirthDayOneWrap>
    </style.BirthDayWrap>
  );
};

export default BirthdateSelector;
