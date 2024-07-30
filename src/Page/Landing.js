import React from "react";
import BirthdateSelector from "../Component/BirthdateSelector";
import TimeTableSelector from "../Component/TimeTableSelector";
import GenderSelector from "../Component/GenderSelector";
import CalendarSelector from "../Component/CalenderSelector";
import { useState } from "react";
import { useRecoilState } from "recoil";
import userInfo from "../State/UserInfo";

export const Landing = () => {
  const [gender, setGender] = useState("female");
  const [calendarType, setCalendarType] = useState("양력");
  const [birthdate, setBirthdate] = useState({
    year: 0,
    month: 0,
    day: 0,
  });
  const [timetable, setTimeTable] = useState("자시");
  const [info, setInfo] = useRecoilState(userInfo);

  const userInfoDeliver = () => {
    setInfo({
      gender: gender,
      calendarType: calendarType,
      year: birthdate.year,
      month: birthdate.month,
      day: birthdate.day,
      timetable: timetable,
    });
    console.log(info);
  };

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

//다음 버튼 만들기
//로딩창 만들기
//생시 뽑아내기
//생시 바탕으로 컬러 뽑아내기
//결과 보여주기
//연결 버튼 만들기
