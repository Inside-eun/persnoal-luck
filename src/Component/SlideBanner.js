import React from 'react';
import * as style from '../style/Landing.style';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideBanner = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <style.BannerWrap
      className="slider-container"
      style={{
        width: '480px',
      }}
    >
      <Slider {...settings1}>
        <img src={process.env.PUBLIC_URL + '/image/image 98.png'} loading="lazy" />
        <img src={process.env.PUBLIC_URL + '/image/image 99.png'} loading="lazy" />
        <img src={process.env.PUBLIC_URL + '/image/image 100.png'} loading="lazy" />
        <img src={process.env.PUBLIC_URL + '/image/image 101.png'} loading="lazy" />
        <img src={process.env.PUBLIC_URL + '/image/image 102.png'} loading="lazy" />
      </Slider>
      <Slider {...settings2}>
        <img src={process.env.PUBLIC_URL + '/image/image 98.png'} loading="lazy" />
        <img src={process.env.PUBLIC_URL + '/image/image 99.png'} loading="lazy" />
        <img src={process.env.PUBLIC_URL + '/image/image 100.png'} loading="lazy" />
        <img src={process.env.PUBLIC_URL + '/image/image 101.png'} loading="lazy" />
        <img src={process.env.PUBLIC_URL + '/image/image 102.png'} loading="lazy" />
      </Slider>
    </style.BannerWrap>
  );
};

export default SlideBanner;
