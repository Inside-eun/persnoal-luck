import React, { useEffect, useState, useMemo } from "react";
import { useRecoilState } from "recoil";
import userGanji from "../State/UserGanji";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const GanjiCircleGraph = () => {
  const [ganji, setGanji] = useRecoilState(userGanji);
  const [pointReady, setPointReady] = useState(false);

  const [points, setPoints] = useState({
    fire: 0,
    water: 0,
    earth: 0,
    metal: 0,
    wood: 0,
  });

  useEffect(() => {
    setPointReady(false);
    if (
      ganji.year &&
      ganji.time &&
      ganji.year.length > 1 &&
      ganji.time.length > 1
    ) {
      const fireSource = ["丙", "丁", "午", "巳"];
      const waterSource = ["壬", "癸", "亥", "子"];
      const earthSource = ["戊", "己", "辰", "未", "戌", "丑"];
      const metalSource = ["庚", "辛", "酉"];
      const woodSource = ["甲", "乙", "寅", "卯"];

      const updatedPoints = { fire: 0, water: 0, earth: 0, metal: 0, wood: 0 };

      const updatePoints = (element) => {
        if (fireSource.includes(element)) updatedPoints.fire += 1;
        if (waterSource.includes(element)) updatedPoints.water += 1;
        if (earthSource.includes(element)) updatedPoints.earth += 1;
        if (metalSource.includes(element)) updatedPoints.metal += 1;
        if (woodSource.includes(element)) updatedPoints.wood += 1;
      };

      Object.values(ganji).forEach((elements) => {
        elements.forEach(updatePoints);
      });

      setPoints(updatedPoints);
      setPointReady(true);
    }
  }, [ganji]);

  const data = {
    labels: ["水 (물)", "火 (불)", "木 (나무)", "金 (금)", "土 (흙)"],
    datasets: [
      {
        data: [
          points.water,
          points.fire,
          points.wood,
          points.metal,
          points.earth,
        ],
        backgroundColor: [
          "#587AFF",
          "rgba(255, 99, 132, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(201, 203, 207, 0.7)",
          "rgba(255, 205, 86, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(201, 203, 207, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
    text: "Total: 9000+",
  };

  const options = {
    plugins: {
      legend: {
        display: false, // 범례 숨기기
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}점`;
          },
        },
      },
      datalabels: {
        display: true, // 항상 데이터 표시
        color: "#fff", // 텍스트 색상
        font: {
          size: 14, // 텍스트 크기
          weight: "bold",
        },
        anchor: "center", // 텍스트 위치 기준
        align: "center", // 텍스트 정렬
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value}점`; // 항목과 점수 표시
        },
      },
    },
    cutout: "50%", // 도넛 모양으로 설정
  };

  return (
    <>
      {pointReady ? (
        <div>
          <Doughnut data={data} options={options} />
        </div>
      ) : (
        <div>loding...</div>
      )}
    </>
  );
};

export default GanjiCircleGraph;
