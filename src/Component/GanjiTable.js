import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import userGanji from "../State/UserGanji";
import userInfo from "../State/UserInfo";

const GanjiTable = () => {
  const [info, setInfo] = useRecoilState(userInfo);
  const [ganji, setGanji] = useRecoilState(userGanji);

  const TimeGanjiSky = [
    ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙"],
    ["丙", "丁", "戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁"],
    ["戊", "己", "庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己"],
    ["庚", "辛", "壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛"],
    ["壬", "癸", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
  ];

  const AnimalTable = [
    "子",
    "丑",
    "寅",
    "卯",
    "辰",
    "巳",
    "午",
    "未",
    "申",
    "酉",
    "戌",
    "亥",
  ];

  const GetTimeGanji = () => {
    let wordAnimal = info.time[4];
    let num = AnimalTable.findIndex((el) => el === wordAnimal);
    let wordSky = TimeGanjiSky[num % 5][num];
    console.log(wordSky, wordAnimal);

    setGanji((prv) => ({
      ...prv,
      time: [wordSky, wordAnimal],
    }));
  };

  useEffect(() => {
    GetTimeGanji();
    console.log(ganji);
  }, [info.time]);

  return (
    <>
      <div>{ganji.day}</div>
    </>
  );
};

export default GanjiTable;
