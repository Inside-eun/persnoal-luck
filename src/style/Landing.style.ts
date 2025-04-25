import styled from 'styled-components';

export const BannerScriptLarge = styled.div`
  width: 100%;
  font-size: 24px;
  text-align: center;
  margin-top: 40px;
`;

export const BannerScriptImogi = styled(BannerScriptLarge)`
  margin-top: 20px;
`;

export const BannerScriptSmall = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
  font-family: 'Pretendard-Light';
  margin: 0 20px;
  line-height: 24px;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  margin-top: 50px;
`;

export const BannerWrap = styled.div`
  width: 100%;
  height: 340px;

  .slider-container {
    width: fit-content;
    height: auto;
  }
`;

export const BannerRowWrap = styled.div`
  position: relative;
  opacity: 0.8;
`;
