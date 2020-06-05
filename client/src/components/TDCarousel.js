import React, {  useState, useCallback, useEffect } from "react";
import Slider from "react-slick";
import TDCarouselItem from "./TDCarouselItem";
import TDCarouselItemCard from "./TDCarouselItemCard";
import { Row, Col } from "react-bootstrap";
import left_btn from "../assets/arrow_left.png";
import right_btn from "../assets/arrow_right.png";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "./Loader";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div >
    <img
      className={className}
      style={{ ...style, display: "block", background: "transparent", width: '24px', height:"24px"}}
      onClick={onClick}
      src={right_btn}
      alt=""
    />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
    <img
      className={className}
      style={{ ...style, display: "block", background: "transparent", width: '24px', height:"24px" }}
      onClick={onClick}
      src={left_btn}
      alt=""
    />
    </div>
  );
}

export const TDCarousel = () => {
  const [cars, setCars] = useState([]);
  const [show, setShow] = useState(0);
  const { loading, request } = useHttp();

  const getCarToShow = (index) => {
    setShow(index);
  };

  const fetchCars = useCallback(async () => { 
    try {
      const fetched = await request("/api/car", "GET", null, {});
      setCars(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchCars();    
  }, [fetchCars]);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    focusOnSelect: true,
    autoplay: false,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Row>
        
        <Col id="cars" className="col-12">
          <Slider {...settings}>
            {cars.map((car, index) => {
              return <TDCarouselItem key={index} item={car} Id={index} selected={getCarToShow}/>;
            })} 
          </Slider>
        </Col>
        
      </Row>
          <>{cars.length && <TDCarouselItemCard item={cars[show]} />}</>
      
    </div>
  );
};
