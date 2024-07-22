import React from "react";
import BirthdateSelector from "../Component/BirthdateSelector";
import TimeTableSelector from "../Component/TimeTableSelector";
import GenderSelector from "../Component/GenderSelector";
import CalendarSelector from "../Component/CalenderSelector";
import { useState } from "react";

export const Landing = () => {
  const [gender, setGender] = useState("female");
  const [calendarType, setCalendarType] = useState("양력");
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = setDay(0);
  const [timetable, setTimeTable] = setTimeTable("자시");

  return (
    <div>
      <GenderSelector gender={gender} setGender={setGender} />
      <div>생년월일</div>
      <CalendarSelector
        calendarType={calendarType}
        setCalendarType={setCalendarType}
      />
      <BirthdateSelector />
      <TimeTableSelector />
    </div>
  );
};
