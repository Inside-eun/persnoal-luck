import { React, useState } from 'react';
import { useResetRecoilState } from 'recoil';
import userGanji from '../State/UserGanji';
import userInfo from '../State/UserInfo';
import { SelectZone, SubmitButton } from '../style/PersonInfo.style';

const GoMain = () => {
  const [isDataReady, setIsDataReady] = useState(false);
  const resetUserInfo = useResetRecoilState(userGanji);
  const resetUserGanji = useResetRecoilState(userInfo);

  const handleResetAndNavigate = async (e) => {
    e.preventDefault();

    try {
      await resetUserInfo();
      await resetUserGanji();
      setIsDataReady(true);

      window.location.href = '/';
    } catch (error) {
      console.error('초기화 실패:', error);
    }
  };

  return (
    <SelectZone>
      <SubmitButton onClick={handleResetAndNavigate}>메인 페이지로 이동</SubmitButton>
    </SelectZone>
  );
};

export default GoMain;
