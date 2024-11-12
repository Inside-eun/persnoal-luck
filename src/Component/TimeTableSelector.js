import * as style from "../style/PersonInfo.style";

import React from "react";

const TimeTableSelector = () => {
  const times = [
    {
      label: "자시 (子時) 23:30 ~ 01:29",
      value: "자시 (子時) 23:30 ~ 01:29",
      key: "자시",
    },
    {
      label: "축시 (丑時) 01:30 ~ 03:29",
      value: "축시 (丑時) 01:30 ~ 03:29",
      key: "축시",
    },
    {
      label: "인시 (寅時) 03:30 ~ 05:29",
      value: "인시 (寅時) 03:30 ~ 05:29",
      key: "인시",
    },
    {
      label: "묘시 (卯時) 05:30 ~ 07:29",
      value: "묘시 (卯時) 05:30 ~ 07:29",
      key: "묘시",
    },
    {
      label: "진시 (辰時) 07:30 ~ 09:29",
      value: "진시 (辰時) 07:30 ~ 09:29",
      key: "진시",
    },
    {
      label: "사시 (巳時) 09:30 ~ 11:29",
      value: "사시 (巳時) 09:30 ~ 11:29",
      key: "사시",
    },
    {
      label: "오시 (午時) 11:30 ~ 13:29",
      value: "오시 (午時) 11:30 ~ 13:29",
      key: "오시",
    },
    {
      label: "미시 (未時) 13:30 ~ 15:29",
      value: "미시 (未時) 13:30 ~ 15:29",
      key: "미시",
    },
    {
      label: "신시 (申時) 15:30 ~ 17:29",
      value: "신시 (申時) 15:30 ~ 17:29",
      key: "신시",
    },
    {
      label: "유시 (酉時) 17:30 ~ 19:29",
      value: "유시 (酉時) 17:30 ~ 19:29",
      key: "유시",
    },
    {
      label: "술시 (戌時) 19:30 ~ 21:29",
      value: "술시 (戌時) 19:30 ~ 21:29",
      key: "술시",
    },
    {
      label: "해시 (亥時) 21:30 ~ 23:29",
      value: "해시 (亥時) 21:30 ~ 23:29",
      key: "해시",
    },
  ];

  return (
    <style.BirthTimeSelector id="time" name="time">
      {times.map((time) => (
        <option key={time.key} value={time.value}>
          {time.label}
        </option>
      ))}
    </style.BirthTimeSelector>
  );
};

export default TimeTableSelector;
