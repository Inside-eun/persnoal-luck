import styled from 'styled-components';

export const ScriptLarge = styled.div`
  font-size: 24px;
  margin-top: 50px;
  text-align: center;
  margin-bottom: 10px;
`;
export const ScriptSmall = styled.div`
  text-align: center;
  font-size: 12px;
  font-family: 'Pretendard-Light';
`;

export const SelectZone = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 25px;
`;

export const OneOption = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  margin-bottom: 20px; /* 간격 추가 */
`;

export const OptionTitle = styled.div`
  font-size: 14px;
  margin-bottom: 8px; /* 제목과 입력칸 사이 간격 추가 */
`;

export const OptionInput = styled.input`
  width: 260px;
  height: 32px;
  border: 1px solid #bababa;
  border-radius: 4px;
  font-family: 'Pretendard-Light';
  font-size: 14px;
  margin-left: auto;
`;

export const OptionCheckBoxLabel = styled.label`
  font-family: 'Pretendard-Light';
  font-size: 14px;
  cursor: pointer;
`;

export const OptionCheckBox = styled.input.attrs({ type: 'radio' })``;

export const BirthDaySelector = styled.select`
  width: 125px;
  height: 32px;
  border: 1px solid #bababa;
  border-radius: 4px;
  font-family: 'Pretendard-Light';
  font-size: 14px;
`;

export const BirthTimeSelector = styled(BirthDaySelector)`
  width: 260px;
  margin-left: auto;
  font-family: 'Pretendard-Light';
  font-size: 14px;
`;

export const BirthDayWrap = styled.div`
  width: 260px;
  display: flex;
  margin-left: auto;
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
  font-family: 'Pretendard-Medium';
  cursor: pointer;
`;
