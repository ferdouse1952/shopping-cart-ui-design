import React from "react";
import './Navbar.css';
import firstSlider from "../Images/SliderImg01.png";
import secondSlider from "../Images/SliderImg02.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="container pt-5">
        <Slider {...settings}>
          <div className="d-flex align-items-center">
            <div className="col-4">
              <div className="sliderImg">
                <img src={firstSlider} alt="" />
              </div>
            </div>
            <div className="col-8">
              <div className="text">
                <h1>
                  Discover the Latest in Fashion and Comfort with Our Wide Range
                  of Clothes
                </h1>
                <p>Shop stylish, comfortable clothing at affordable prices.</p>
                <button className="rounded-pill">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="col-4">
              <div className="sliderImg">
                <img src={secondSlider} alt="" />
              </div>
            </div>
            <div className="col-8">
              <div className="text">
                <h1>
                  Step Up Your Style Game with Our Collection of Trendy and
                  Elegant Clothing
                </h1>
                <p>
                  Elevate your wardrobe with trendy and high-quality clothes
                  from our website
                </p>
                <button className="rounded-pill">Shop Now</button>
              </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default Sliders;
