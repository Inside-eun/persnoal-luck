import React from "react";
import { useRecoilState } from "recoil";
import userGanji from "../State/UserGanji";

const calculateElementPoints = (sajuObj) => {
  console.log(sajuObj, "tttt");

  const fireSource = ["병", "정", "오", "사"];
  const waterSource = ["임", "계", "해", "자"];
  const earthSource = ["무", "기", "진", "미", "술", "축"];
  const metalSource = ["경", "신", "유"];
  const woodSource = ["갑", "을", "인", "묘"];
  // 속성 초기화
  const points = {
    fire: 0,
    water: 0,
    earth: 0,
    metal: 0,
    wood: 0,
  };

  // 객체의 모든 값 추출 및 분석
  for (let key in sajuObj) {
    const value = sajuObj[key];

    if (typeof value === "string") {
      for (let char of value) {
        if (fireSource.includes(char)) points.fire += 1;
        if (waterSource.includes(char)) points.water += 1;
        if (earthSource.includes(char)) points.earth += 1;
        if (metalSource.includes(char)) points.metal += 1;
        if (woodSource.includes(char)) points.wood += 1;
      }
    }
  }

  return points;
};

const GanjiGraph = () => {
  const [data, setData] = useRecoilState(userGanji);

  const result = calculateElementPoints(data);

  return (
    <div>
      <div>{result.fire}</div>
      <div>{result.water}</div>
      <div>{result.wood}</div>
      <div>{result.metal}</div>
      <div>{result.earth}</div>
    </div>
  );
};

export default GanjiGraph;

//그래프 넣기
//사주 로직 수정하기
//로딩 페이지 만들기
