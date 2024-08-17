import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import userGanji from "../State/UserGanji";

const BirthdayChanger = ({ birthday, time }) => {
  const [ganjiYear, setGanjiYear] = useState("");
  const [ganjiMonth, setGanjiMonth] = useState("");
  const [ganjiDay, setGanjiDay] = useState("");
  const [ganjiTime, setGanjiTime] = useState("");

  const [ganji, setGanji] = useRecoilState(userGanji);

  const heavenlyStems = [
    "갑",
    "을",
    "병",
    "정",
    "무",
    "기",
    "경",
    "신",
    "임",
    "계",
  ];
  const earthlyBranches = [
    "자",
    "축",
    "인",
    "묘",
    "진",
    "사",
    "오",
    "미",
    "신",
    "유",
    "술",
    "해",
  ];

  useEffect(() => {
    const [year, month, day] = birthday.split("-").map(Number);

    const yearStemIndex = (year - 4) % 10;
    const yearBranchIndex = (year - 4) % 12;
    const newGanjiYear =
      heavenlyStems[yearStemIndex] + earthlyBranches[yearBranchIndex];
    setGanjiYear(newGanjiYear);

    const monthBranchIndex = (month + 1) % 12;
    const newGanjiMonth =
      heavenlyStems[(yearStemIndex * 2 + month) % 10] +
      earthlyBranches[monthBranchIndex];
    setGanjiMonth(newGanjiMonth);

    const baseDate = new Date(1900, 0, 1); // 1900년 1월 1일 기준
    const targetDate = new Date(year, month - 1, day);
    const diffDays = Math.floor(
      (targetDate - baseDate) / (1000 * 60 * 60 * 24)
    );
    const dayStemIndex = (diffDays + 3) % 10; // 1900년 1월 1일은 무오일
    const dayBranchIndex = (diffDays + 3) % 12;
    const newGanjiDay =
      heavenlyStems[dayStemIndex] + earthlyBranches[dayBranchIndex];
    setGanjiDay(newGanjiDay);

    const timeStems = time.substr(0, 1);
    const timeBranchIndex =
      heavenlyStems[earthlyBranches.indexOf(timeStems) % 10];
    const newGanjiTime = timeStems + timeBranchIndex;
    setGanjiTime(newGanjiTime);
  }, [birthday, time]);

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
