import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import userInfo from "../State/UserInfo";
import moment from "moment";
import "moment-lunar";

const GanjiResult = () => {
  const [data, setData] = useState({ year: 0, month: 0, day: 0 });
  const [processBirthday, setProcessBirthday] = useState({
    year: 0,
    month: 0,
    day: 0,
  });
  const [info, setInfo] = useRecoilState(userInfo);

  useEffect(() => {
    if (info.year && info.month && info.day) {
      if (info.calendar !== "solarCalendar") {
        const { year, month, day } = info;

        const lunarDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
        const solarDate = lunarDate.solar().format("YYYY-MM-DD");

        setProcessBirthday({
          year: solarDate.slice(0, 4),
          month: solarDate.slice(5, 7),
          day: solarDate.slice(8, 10),
        });
      } else {
        setProcessBirthday({
          year: info.year,
          month: info.month,
          day: info.day,
        });
      }

      fetchData();
    }
  }, [info]);

  const fetchData = async () => {
    try {
      const url =
        "https://apis.data.go.kr/B090041/openapi/service/LrsrCldInfoService/getLunCalInfo";
      const params = {
        serviceKey:
          "I5Ehb1LBegC6vD7b80waEqqgALvnUI9hv33TrPfz9iI0DCm2HVCt3zwbpw44BCHvJrYRICU7tBjatXrQWrtCng==",
        solYear: String(processBirthday.year),
        solMonth: String(processBirthday.month).padStart(2, "0"),
        solDay: String(processBirthday.day).padStart(2, "0"),
      };

      const response = await axios.get(url, { params });
      console.log(response.data.response.body.items.item);

      setData(response.data.response.body.items.item);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>{data ? <div>{JSON.stringify(data.lunIljin)}</div> : <p>Loading...</p>}</>
  );
};

export default GanjiResult;
