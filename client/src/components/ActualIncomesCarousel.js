import React, { Component } from "react";
import Slider from "react-slick";
import ActualIncomesCarouselItem from "./ActualIncomesCarouselItem";
import left_btn from "../assets/arrow_left.png";
import right_btn from "../assets/arrow_right.png";

export default class ActualIncomesCarousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };
    return (
      <div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <ActualIncomesCarouselItem />
          <ActualIncomesCarouselItem />
          <ActualIncomesCarouselItem />
          
        </Slider>
        <div className="d-none d-md-block">
          <img
            src={left_btn}
            alt="Left"
            width="30px"
            height="30px"
            onClick={this.previous}
            className="mb-3 mr-4"
          />
          <img
            src={right_btn}
            alt="Left"
            width="30px"
            height="30px"
            onClick={this.next}
            className="mb-3 ml-4"
          />
        </div>
      </div>
    );
  }
}
