import React from "react";

const TimeTableSelector = ({ timetable, setTimeTable }) => {
  const handelTimeChange = (e) => {
    const selectedKey = times.find((time) => time.value === e.target.value).key;
    setTimeTable(selectedKey);
  };
  const times = [
    { label: "자시 (子時, 자子)", value: "23:30 ~ 01:29", key: "자시" },
    { label: "축시 (丑時, 축牛)", value: "01:30 ~ 03:29", key: "축시" },
    { label: "인시 (寅時, 인寅)", value: "03:30 ~ 05:29", key: "인시" },
    { label: "묘시 (卯時, 묘卯)", value: "05:30 ~ 07:29", key: "묘시" },
    { label: "진시 (辰時, 진辰)", value: "07:30 ~ 09:29", key: "진시" },
    { label: "사시 (巳時, 사巳)", value: "09:30 ~ 11:29", key: "사시" },
    { label: "오시 (午時, 오午)", value: "11:30 ~ 13:29", key: "오시" },
    { label: "미시 (未時, 미未)", value: "13:30 ~ 15:29", key: "미시" },
    { label: "신시 (申時, 신申)", value: "15:30 ~ 17:29", key: "신시" },
    { label: "유시 (酉時, 유酉)", value: "17:30 ~ 19:29", key: "유시" },
    { label: "술시 (戌時, 술戌)", value: "19:30 ~ 21:29", key: "술시" },
    { label: "해시 (亥時, 해亥)", value: "21:30 ~ 23:29", key: "해시" },
  ];

  return (
    <div>
      <label htmlFor="time">태어난 시각을 골라주세요</label>
      <select id="time" name="time" onChange={handelTimeChange}>
        {times.map((time) => (
          <option key={time.key} value={time.value}>
            {[time.label, " ", time.value]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimeTableSelector;
