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
          <style.LargeTextHeader>아무개 | 여성</style.LargeTextHeader>
          <style.SmallTextHeader>
            1999년 9월 9일(양력)
            <br />
            자시 (子時, 자子) 23:30 ~ 01:29
          </style.SmallTextHeader>
        </style.HeaderWrap>
      </style.InsertInfoWrap>
    </>
  );
};
