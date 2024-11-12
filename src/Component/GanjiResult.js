import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import userInfo from "../State/UserInfo";
import userGanji from "../State/UserGanji";
import moment from "moment";
import "moment-lunar";

const GanjiResult = () => {
  const [lunarBirthday, setlunarBirthday] = useState({
    year: 0,
    month: 0,
    day: 0,
  });

  const [info, setInfo] = useRecoilState(userInfo);
  const [ganji, setGanji] = useRecoilState(userGanji);

  useEffect(() => {
    if (info.year && info.month && info.day) {
      if (info.calendar !== "양력") {
        const { year, month, day } = info;

        const lunarDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
        const solarDate = lunarDate.solar().format("YYYY-MM-DD");

        setlunarBirthday({
          year: solarDate.slice(0, 4),
          month: solarDate.slice(5, 7),
          day: solarDate.slice(8, 10),
        });
      } else {
        setlunarBirthday({
          year: info.year,
          month: info.month,
          day: info.day,
        });
      }
    }
  }, [info]);

  useEffect(() => {
    if (lunarBirthday.year && lunarBirthday.month && lunarBirthday.day) {
      fetchData();
    }
  }, [lunarBirthday]);

  useEffect(() => {
    if (ganji.year.length && ganji.month.length && ganji.day.length) {
      GetHoursGanji();
    }
  }, [ganji]);

  const fetchData = async () => {
    try {
      const url =
        "https://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo";
      const params = {
        serviceKey:
          "I5Ehb1LBegC6vD7b80waEqqgALvnUI9hv33TrPfz9iI0DCm2HVCt3zwbpw44BCHvJrYRICU7tBjatXrQWrtCng==",
        solYear: String(lunarBirthday.year),
        solMonth: String(lunarBirthday.month).padStart(2, "0"),
        solDay: String(lunarBirthday.day).padStart(2, "0"),
      };

      const response = await axios.get(url, { params });
      const formattedData = response.data.response.body.items.item;

      setGanji({
        year: [formattedData.lunSecha[3], formattedData.lunSecha[4]],
        month: [formattedData.lunWolgeon[3], formattedData.lunWolgeon[4]],
        day: [formattedData.lunIljin[3], formattedData.lunIljin[4]],
      });
    } catch (error) {
      console.error("Error fetch data:", error);
    }
  };

  const GetHoursGanji = () => {
    console.log("ganji : ", ganji);
  };

  return <>{ganji ? <div>{JSON.stringify(ganji)}</div> : <p>Loading...</p>}</>;
};

export default GanjiResult;
