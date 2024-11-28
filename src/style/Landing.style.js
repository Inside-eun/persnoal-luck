import styled from "styled-components";

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
  font-family: "Pretendard-Light";
`;

export const DivideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
`;

export const BannerWrap = styled.div`
  width: 100%;
  height: 340px;
`;
export const BannerRowWrap = styled.div`
  position: relative;
  opacity: 0.8;
`;

export const BannerOneImage = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  width: fit-content;
  animation: 10s linear infinite normal none running infiniteAnimation1;

  &.clone {
    position: absolute;
    top: 0%;
    animation: 10s linear infinite infiniteAnimation2;
  }

  @keyframes infiniteAnimation1 {
    0% {
      transform: translateX(0%);
    }
    50% {
      transform: translateX(-100%);
    }
    50.01% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes infiniteAnimation2 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

export const BannerRowWrapUnder = styled(BannerRowWrap)``;
