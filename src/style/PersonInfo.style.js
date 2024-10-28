import styled from "styled-components";

export const ScriptLarge = styled.div`
  font-size: 24px;
  margin-top: 50px;
  text-align: center;
`;
export const ScriptSmall = styled.div`
  text-align: center;
  font-size: 12px;
  font-family: "Pretendard-Light";
`;

export const SelectZone = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
`;

export const OneOption = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  margin-bottom: 5px;
`;

export const OptionTitle = styled.div`
  font-size: 14px;
  margin-right: 12px;
`;

export const OptionInput = styled.input`
  width: 260px;
  height: 32px;
  border: 1px solid #bababa;
  border-radius: 4px;
  font-family: "Pretendard-Light";
  font-size: 14px;
`;

export const OptionCheckBoxLabel = styled.label`
  font-family: "Pretendard-Light";
  font-size: 14px;
  cursor: pointer;
`;

export const OptionCheckBox = styled.input.attrs({ type: "radio" })``;

export const BirthDaySelector = styled.select`
  width: 125px;
  height: 32px;
  border: 1px solid #bababa;
  border-radius: 4px;
  font-family: "Pretendard-Light";
  font-size: 14px;
`;

export const BirthTimeSelector = styled(BirthDaySelector)`
  width: 100%;
  font-family: "Pretendard-Light";
  font-size: 14px;
`;

export const BirthDayWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BirthDayOneWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 46px;
  border-radius: 4px;
  background-color: #587aff;
  border: none;
  color: #ffffff;
  text-align: center;
  margin-bottom: 40px;
  font-family: "Pretendard-Medium";
  cursor: pointer;
`;
