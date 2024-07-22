import React from "react";

const BirthdateSelector = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(101), (val, index) => currentYear - index);

  return (
    <div>
      <label htmlFor="year">출생년도</label>
      <select id="year" name="year">
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="month">월</label>
      <select id="month" name="month">
        {Array.from({ length: 12 }, (v, k) => k + 1).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <label htmlFor="day">일</label>
      <select id="day" name="day">
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
