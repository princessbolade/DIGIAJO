import React, { Component } from "react";
import CarouselImg from "../../assets/carousel1.png";
import CarouselImg2 from "../../assets/carousel2.png";
import CarouselImg3 from "../../assets/carousel3.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className=" container mx-auto text-blue-900 pt-10 pb-48 px-6 hidden md:block">
        <h2 className="text-center font-bold text-3xl"> THE TRENDY GROUPS </h2>
        <Slider {...settings}>
          <div className=" mt-20 text-center" style={{ maxWidth: "300px" }}>
            <img src={CarouselImg} alt="" className="mx-auto w-full" />
          </div>
          <div className=" mt-20 text-center" style={{ maxWidth: "300px" }}>
            <img src={CarouselImg2} alt="" className="mx-auto w-full" />
          </div>
          <div
            className="mr-20 mt-20 text-center"
            style={{ maxWidth: "300px" }}
          >
            <img src={CarouselImg3} alt="" className="mx-auto w-full" />
          </div>
        </Slider>
      </div>
    );
  }
}
