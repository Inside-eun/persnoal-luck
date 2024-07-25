import React from "react";

const BirthdateSelector = ({ birthdate, setBirthdate }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(101), (val, index) => currentYear - index);

  const handleYearChange = (e) => {
    setBirthdate((prevBirthdate) => ({
      ...prevBirthdate,
      year: parseInt(e.target.value, 10),
    }));
  };

  const handleMonthChange = (e) => {
    setBirthdate((prevBirthdate) => ({
      ...prevBirthdate,
      month: parseInt(e.target.value, 10),
    }));
  };

  const handleDayChange = (e) => {
    setBirthdate((prevBirthdate) => ({
      ...prevBirthdate,
      day: parseInt(e.target.value, 10),
    }));
  };

  return (
    <div>
      <label htmlFor="year">출생년도</label>
      <select id="year" name="year" onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="month">월</label>
      <select id="month" name="month" onChange={handleMonthChange}>
        {Array.from({ length: 12 }, (v, k) => k + 1).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <label htmlFor="day">일</label>
      <select id="day" name="day" onChange={handleDayChange}>
        {Array.from({ length: 31 }, (v, k) => k + 1).map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BirthdateSelector;
