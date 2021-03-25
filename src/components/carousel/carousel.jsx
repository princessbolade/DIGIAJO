import React, { Component } from "react";
import CarouselImg from "../../assets/carousel1.png";
import CarouselImg2 from "../../assets/carousel2.png";
import CarouselImg3 from "../../assets/carousel3.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className=" text-blue-900 pt-10 pb-48">
        <h2 className="text-center font-bold text-3xl"> THE TRENDY GROUPS </h2>
        <Slider {...settings}>
          <div className="ml-20 mt-20 text-center">
            <img src={CarouselImg} alt="" width="300px" className="mx-auto" />
          </div>
          <div className="ml-20 mt-20 text-center">
            <img src={CarouselImg2} alt="" width="300px" className="mx-auto" />
          </div>
          <div className="mr-20 mt-20 text-center">
            <img src={CarouselImg3} alt="" width="300px" className="mx-auto" />
          </div>
        </Slider>
      </div>
    );
  }
}
