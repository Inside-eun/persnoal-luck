import React from "react";
import * as style from "../style/PersonInfo.style";
import BirthdateSelector from "../Component/BirthdateSelector";
import TimeTableSelector from "../Component/TimeTableSelector";
import { useRecoilState } from "recoil";
import userInfo from "../State/UserInfo";
import { useNavigate } from "react-router-dom";

export const PersonInfo = () => {
  const [info, setInfo] = useRecoilState(userInfo);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    console.log("data :", data);

    setInfo(() => ({
      ...data,
    }));

    navigate("/result");
  };

  return (
    <>
      <style.ScriptLarge>개인정보 입력</style.ScriptLarge>
      <style.ScriptSmall>
        정확한 분석을 위해 실제 생일 정보를 입력해주세요.
      </style.ScriptSmall>
      <style.SelectZone onSubmit={handleSubmit}>
        <style.OneOption>
          <style.OptionTitle>이름</style.OptionTitle>
          <style.OptionInput
            placeholder="이름을 입력해주세요"
            name="name"
            id="name"
            required
          ></style.OptionInput>
        </style.OneOption>
        <style.OneOption>
          <style.OptionTitle>성별</style.OptionTitle>
          <style.OptionCheckBoxLabel htmlFor="female">
            <style.OptionCheckBox
              id="female"
              type="radio"
              name="gender"
              value="여성"
              defaultChecked
            />
            여성
          </style.OptionCheckBoxLabel>
          <style.OptionCheckBoxLabel htmlFor="male">
            <style.OptionCheckBox
              id="male"
              type="radio"
              name="gender"
              value="남성"
            />
            남성
          </style.OptionCheckBoxLabel>
        </style.OneOption>
        <style.OneOption>
          <style.OptionTitle>생년월일</style.OptionTitle>
          <BirthdateSelector />
        </style.OneOption>
        <style.OneOption>
          <style.OptionTitle>출생시간</style.OptionTitle>
          <TimeTableSelector />
        </style.OneOption>
        <style.SubmitButton type="submit">입력하기</style.SubmitButton>
      </style.SelectZone>
    </>
  );
};
