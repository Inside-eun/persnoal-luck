import React from "react";
import userInfo from "../State/UserInfo";
import { useRecoilState } from "recoil";
import GanjiGraph from "../Component/GanjiGraph";
import GanjiResult from "../Component/GanjiResult";
import axios from "axios";
import { InsertInfo } from "../Component/InsertInfo";

export const ViewReport = () => {
  const [info, setInfo] = useRecoilState(userInfo);

  return (
    <div>
      <InsertInfo />
      <GanjiResult />
      <GanjiGraph />
    </div>
  );
};
