import React from "react";
import BirthdateSelector from "../Component/BirthdateSelector";
import TimeTableSelector from "../Component/TimeTableSelector";
import GenderSelector from "../Component/GenderSelector";
import CalendarSelector from "../Component/CalenderSelector";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import userInfo from "../State/UserInfo";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const [gender, setGender] = useState("female");
  const [calendarType, setCalendarType] = useState("solarCalendar");
  const [birthdate, setBirthdate] = useState({
    year: 0,
    month: 0,
    day: 0,
  });
  const [timetable, setTimeTable] = useState("자시");
  const [info, setInfo] = useRecoilState(userInfo);

  const navigate = useNavigate();

  const userInfoDeliver = () => {
    setInfo((prev) => ({
      ...prev,
      gen: gender,
      cal: calendarType,
      year: birthdate.year,
      month: birthdate.month,
      day: birthdate.day,
      time: timetable,
    }));
    navigate("/result");
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

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
      <button onClick={userInfoDeliver}>Go</button>
    </div>
  );
};
