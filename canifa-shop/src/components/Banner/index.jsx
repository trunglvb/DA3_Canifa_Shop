import React from 'react';
import Slider from 'react-slick';
import './index.scss';

const Banner = (props) => {
  const settings = {
    dots: props?.dots,
    infinite: true,
    speed: 400,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <div className="banner-product">
      <Slider {...settings}>
        <div>
          <img src={props?.img1} alt="" className="w-full" />
        </div>
        <div>
          <img src={props?.img2} alt="" className="w-full" />
        </div>
        {props?.img3 && (
          <div>
            <img src={props?.img3} alt="" className="w-full" />
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Banner;
