import React from "react";
import userInfo from "../State/UserInfo";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import GanjiGraph from "../Component/GanjiGraph";
import moment from "moment";
import "moment-lunar";
import YourComponent from "../Component/Test";

export const ViewReport = () => {
  const [info, setInfo] = useRecoilState(userInfo);
  const [solarDate, setsolarDate] = useState("");

  useEffect(() => {
    if (info.cal !== "solarCalendar") {
      const { year, month, day } = info;
      const lunarDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
      const solarDate = lunarDate.solar().format("YYYY-MM-DD");
      setsolarDate(solarDate);
    } else {
      setsolarDate(`${info.year}-${info.month}-${info.day}`);
    }
    console.log("info: ", info);
  }, [info]);

  return (
    <div>
      <div>{solarDate}</div>
      <GanjiGraph />
      <YourComponent />
    </div>
  );
};
