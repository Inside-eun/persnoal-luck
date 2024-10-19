import React from "react";
import * as style from "../style/PersonInfo.style";
import BirthdateSelector from "../Component/BirthdateSelector";
import TimeTableSelector from "../Component/TimeTableSelector";
import GenderSelector from "../Component/GenderSelector";
import CalendarSelector from "../Component/CalenderSelector";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import userInfo from "../State/UserInfo";
import { useNavigate } from "react-router-dom";

export const PersonInfo = () => {
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

  return (
    <>
      <style.ScriptLarge>개인정보 입력</style.ScriptLarge>
      <style.ScriptSmall>
        정확한 분석을 위해 실제 생일 정보를 입력해주세요.
      </style.ScriptSmall>
      <style.SelectZone>
        <style.OneOption>
          <style.OptionTitle>이름</style.OptionTitle>
          <style.OptionInput placeholder="이름을 입력해주세요"></style.OptionInput>
        </style.OneOption>
        <style.OneOption>
          <style.OptionTitle>성별</style.OptionTitle>
          <style.OptionCheckBox />
          여성
          <style.OptionCheckBox />
          남성
        </style.OneOption>
        <style.OneOption>
          <style.OptionTitle>생년월일</style.OptionTitle>
          <BirthdateSelector
            calendarType={calendarType}
            setCalendarType={setCalendarType}
            birthdate={birthdate}
            setBirthdate={setBirthdate}
          />
        </style.OneOption>
        <style.OneOption>
          <style.OptionTitle>출생시간</style.OptionTitle>
          <TimeTableSelector
            timetable={timetable}
            setTimeTable={setTimeTable}
          />
        </style.OneOption>
        <style.SubmitButton onClick={userInfoDeliver}>
          입력하기
        </style.SubmitButton>
      </style.SelectZone>
    </>
  );
};
