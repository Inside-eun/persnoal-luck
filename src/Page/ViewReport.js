import React from "react";
import GanjiCircleGraph from "../Component/GanjiCircleGraph";
import GanjiResult from "../Component/GanjiResult";
import { InsertInfo } from "../Component/InsertInfo";

export const ViewReport = () => {
  return (
    <div>
      <InsertInfo />
      <GanjiResult />
      <GanjiCircleGraph />
    </div>
  );
};
