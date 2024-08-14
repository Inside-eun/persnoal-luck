import React from "react";
import userInfo from "../State/UserInfo";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment-lunar";

export const ViewReport = () => {
  const [info, setInfo] = useRecoilState(userInfo);
  const [lunarDate, setLunarDate] = useState("");

  useEffect(() => {
    console.log(info);
    if (info.cal === "solarCalendar") {
      const { year, month, day } = info;

      const solarDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
      const lunarDate = solarDate.lunar().format("YYYY-MM-DD");

      setLunarDate(lunarDate);
    } else {
      setLunarDate(`${info.year}-${info.month}-${info.day}`);
    }
  }, [info]);

  return <div>{lunarDate}</div>;
};
