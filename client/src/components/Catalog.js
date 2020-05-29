import React, { Component, useState, useCallback, useEffect } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import Slider from "react-slick";
import left_btn from "../assets/arrow_left.png";
import right_btn from "../assets/arrow_right.png";

import CatalogCard from "./CatalogCard";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "./Loader";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={className}
      style={{ ...style, display: "block", background: "transparent", width: '32px', height:"32px"}}
      onClick={onClick}
      src={right_btn}
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

export const Catalog = ({ select }) => {
  const [cars, setCars] = useState([]);

  const { loading, request } = useHttp();

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
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    //nextArrow: <SampleNextArrow />,
    //prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          //arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          //arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
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
    <Container fluid className="ct-wrapper gray-bg text-center px-3">
      <h2 className="pt-3 t-hl-bf">КАТАЛОГ</h2>
      <h4 className="d-u-td">ДОСТУПНЫХ ЭЛЕКТРОМОБИЛЕЙ</h4>

      <div className="mt-5 pb-5">
        <Slider {...settings} className="mx-3">
          {cars.map((car, index) => (
            <CatalogCard key={index} item={car} selected={select} />
          ))}
        </Slider>
      </div>
    </Container>
  );
};
