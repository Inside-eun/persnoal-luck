import React from "react";

const BirthdateSelector = ({ birthdate, setBirthdate }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(101), (val, index) => currentYear - index);

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
    <div>
      <label htmlFor="year">출생년도</label>
      <select id="year" name="year" onChange={handleYearChange}>
        <option value="" disabled selected>
          선택
        </option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="month">월</label>
      <select id="month" name="month" onChange={handleMonthChange}>
        <option value="" disabled selected>
          선택
        </option>
        {Array.from({ length: 12 }, (v, k) => k + 1).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <label htmlFor="day">일</label>
      <select id="day" name="day" onChange={handleDayChange}>
        <option value="" disabled selected>
          선택
        </option>
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
