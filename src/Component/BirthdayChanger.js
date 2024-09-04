import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import userGanji from "../State/UserGanji";
import GetGanji from "../api/GetGanji";

const BirthdayChanger = ({ birthday, time }) => {
  const [ganjiYear, setGanjiYear] = useState("");
  const [ganjiMonth, setGanjiMonth] = useState("");
  const [ganjiDay, setGanjiDay] = useState("");
  const [ganjiTime, setGanjiTime] = useState("");

  const [ganji, setGanji] = useRecoilState(userGanji);

  useEffect(() => {
    GetGanji();
  }, []);

  useEffect(() => {
    setGanji((prev) => ({
      ...prev,
      year: ganjiYear,
      month: ganjiMonth,
      day: ganjiDay,
      time: ganjiTime,
    }));
  }, [ganjiYear, ganjiMonth, ganjiDay, ganjiTime]);

  return (
    <div>
      <div>{ganjiYear}</div>
      <div>{ganjiMonth}</div>
      <div>{ganjiDay}</div>
      <div>{ganjiTime}</div>
    </div>
  );
};

export default BirthdayChanger;
