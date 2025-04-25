import React from "react";
import { useRecoilState } from "recoil";
import userInfo from "../State/UserInfo";
import * as style from "../style/ViewReport.style";

export const InsertInfo = () => {
  const [info, setInfo] = useRecoilState(userInfo);

  return (
    <>
      <style.InsertInfoWrap>
        <style.HeaderWrap>
          <style.LargeTextHeader>
            {info.name} | {info.gender}
          </style.LargeTextHeader>
          <style.SmallTextHeader>
            {info.year}년 {info.month}월 {info.day}일({info.calendar})
            <br />
            {info.time}
          </style.SmallTextHeader>
        </style.HeaderWrap>
      </style.InsertInfoWrap>
    </>
  );
};
