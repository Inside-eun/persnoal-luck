import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import userGanji from "../State/UserGanji";
import userInfo from "../State/UserInfo";
import {
  TableContainer,
  TableRow,
  TableCell,
} from "../style/GanjiTable.style.js";

const GanjiTable = () => {
  const [info, setInfo] = useRecoilState(userInfo);
  const [ganji, setGanji] = useRecoilState(userGanji);
  const [loading, setLoading] = useState(true);

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

    setGanji((prv) => ({
      ...prv,
      time: [wordSky, wordAnimal],
    }));
  };

  useEffect(() => {
    setLoading(true);
    if (ganji.year && ganji.year.length > 0) {
      GetTimeGanji();
    }
  }, [info, ganji.year]);

  useEffect(() => {
    if (ganji.time && ganji.time !== "" && ganji.time.length > 0) {
      setLoading(false);
    }
  }, [ganji]);

  return (
    <TableContainer>
      {loading ? (
        <div>로딩 중...</div> // 로딩 중 표시
      ) : (
        <>
          <TableRow>
            <TableCell>{ganji.year[0]}</TableCell>
            <TableCell>{ganji.month[0]}</TableCell>
            <TableCell>{ganji.day[0]}</TableCell>
            <TableCell>{ganji.time[0]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{ganji.year[1]}</TableCell>
            <TableCell>{ganji.month[1]}</TableCell>
            <TableCell>{ganji.day[1]}</TableCell>
            <TableCell>{ganji.time[1]}</TableCell>
          </TableRow>
        </>
      )}
    </TableContainer>
  );
};

export default GanjiTable;
