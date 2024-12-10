import React from 'react';
import * as style from '../style/PersonInfo.style';

const BirthdateSelector = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from(new Array(101), (val, index) => currentYear - index);

  return (
    <style.BirthDayWrap>
      <style.BirthDayOneWrap style={{ marginBottom: '7px' }}>
        <style.BirthDaySelector required id="calendar" name="calendar">
          <option value="" disabled selected>
            양/음력
          </option>
          <option value="양력">양력</option>
          <option value="음력(평달)">음력(평달)</option>
          <option value="음력(윤달)">음력(윤달)</option>
        </style.BirthDaySelector>
        <style.BirthDaySelector required id="year" name="year">
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
        <style.BirthDaySelector required id="month" name="month">
          <option value="" disabled selected>
            출생월
          </option>
          {Array.from({ length: 12 }, (v, k) => k + 1).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </style.BirthDaySelector>
        <style.BirthDaySelector id="day" name="day" required>
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
