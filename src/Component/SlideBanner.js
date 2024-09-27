import React from "react";
import * as style from "../style/Landing.style";

const SlideBanner = () => {
  return (
    <style.BannerWrap>
      <style.BannerRowWrap>
        <style.BannerOneImage>
          <img src={process.env.PUBLIC_URL + "/image/image 98.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 99.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 100.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 101.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 102.png"} />
        </style.BannerOneImage>
        <style.BannerOneImage className="clone">
          <img src={process.env.PUBLIC_URL + "/image/image 98.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 99.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 100.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 101.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 102.png"} />
        </style.BannerOneImage>
      </style.BannerRowWrap>
      <style.BannerRowWrapUnder>
        <style.BannerOneImage>
          <img src={process.env.PUBLIC_URL + "/image/image 103.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 104.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 105.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 107.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 108.png"} />
        </style.BannerOneImage>
        <style.BannerOneImage className="clone">
          <img src={process.env.PUBLIC_URL + "/image/image 103.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 104.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 105.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 107.png"} />
          <img src={process.env.PUBLIC_URL + "/image/image 108.png"} />
        </style.BannerOneImage>
      </style.BannerRowWrapUnder>
    </style.BannerWrap>
  );
};

export default SlideBanner;
