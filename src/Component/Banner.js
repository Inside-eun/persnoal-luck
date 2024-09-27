import React from "react";
import * as stlye from "../style/Landing.style";
import SlideBanner from "./SlideBanner";

const Banner = () => {
  return (
    <div>
      <SlideBanner />
      <stlye.BannerScriptLarge>오행이란?</stlye.BannerScriptLarge>
      <stlye.BannerScriptImogi>🌲🔥⏳👑🌊</stlye.BannerScriptImogi>
      <stlye.BannerScriptSmall>
        목, 화, 토, 금, 수 <br />
        다섯 가지 기운을 가진 사주 개념이에요.
        <br />
        <br />
        사람은 5가지 오행 중 하나를 타고나는데, 이 중 특정한 오행 이 부족하거나
        없는 경우에는 그 색에 맞는 물건을 지녀 부족 한 기운을 채울 수 있어요.
        <br />
        <br />
        오행사주에서는 여러분의 사주에서 부족한 색과, 부족한 색을 채울 수 있는
        제품을 큐레이팅 해서 보여줄게요.
      </stlye.BannerScriptSmall>
      <stlye.DivideLine />
    </div>
  );
};

export default Banner;
