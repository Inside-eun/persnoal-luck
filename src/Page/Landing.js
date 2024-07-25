import React from "react";
import BirthdateSelector from "../Component/BirthdateSelector";
import TimeTableSelector from "../Component/TimeTableSelector";
import GenderSelector from "../Component/GenderSelector";
import CalendarSelector from "../Component/CalenderSelector";
import { useState } from "react";

export const Landing = () => {
  const [gender, setGender] = useState("female");
  const [calendarType, setCalendarType] = useState("양력");
  const [birthdate, setBirthdate] = useState({
    year: 0,
    month: 0,
    day: 0,
  });
  const [timetable, setTimeTable] = useState("자시");

  console.log(gender, birthdate);
  return (
    <div>
      <GenderSelector gender={gender} setGender={setGender} />
      <div>생년월일</div>
      <CalendarSelector
        calendarType={calendarType}
        setCalendarType={setCalendarType}
      />
      <BirthdateSelector birthdate={birthdate} setBirthdate={setBirthdate} />
      <TimeTableSelector timetable={timetable} setTimeTable={setTimeTable} />
    </div>
  );
};
