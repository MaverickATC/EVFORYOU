import React, {useState, useCallback, useEffect } from "react";
import { Container, } from "react-bootstrap";
import Slider from "react-slick";
import left_btn from "../assets/arrow_left.png";
import right_btn from "../assets/arrow_right.png";
import CatalogCard from "./CatalogCard";
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
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        <div className="col-10 mx-auto">
          <Slider
            {...settings}
            rows={cars.length < 6 ? 1 : 2}
            arrows={cars.length < 6 ? false : true}
            className="mx-3"
          >
            {cars.map((car, index) => (
              <CatalogCard key={index} item={car} selected={select} />
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};
