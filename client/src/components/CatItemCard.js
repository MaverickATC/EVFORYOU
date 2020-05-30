import React, { useState, useEffect, useCallback, Component } from "react";
import { Button, Row, Container, Tab, Tabs } from "react-bootstrap";
import SpecsItem from "./SpecsItem";
import CatItemGallery from "./CatItemGallery";

import "./CatItemCard.css";
import { useHttp } from "../hooks/http.hook";
import { useParams } from "react-router-dom";
import { Loader } from "./Loader";

import pic1 from "../assets/cat-body.png";
import pic2 from "../assets/cat-drive.png";
import pic3 from "../assets/cat-seats.png";
import pic4 from "../assets/cat-max-speed.png";
import pic5 from "../assets/cat-gear.png";
import pic6 from "../assets/cat-power.png";
import pic7 from "../assets/cat-razgon.png";
import pic8 from "../assets/cat-zap-hoda.png";
import CatalogModal from "./CatalogModal";

export default class CatItemCard extends Component {
  constructor(props) {
    super(props);

    this.state = { key: "desc", modalShow: false, buy: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    document.getElementById("target").setAttribute("src", e.currentTarget.src);
  };

  render() {
    const car = this.props.car;

    return (
      <Container>
        <h2 className="pt-3 t-hl-bf">ОПИСАНИЕ</h2>
        <h4 className="d-u-td">ВЫБРАННОЙ МОДЕЛИ</h4>
        <div className="card mb-3 mt-5 w-auto align-items-center b-n">
          <h2 id="model-showed" className="card-title mb-5">
            {car.model}
          </h2>
          <div className="container">
          <div className="row mb-5 no-gutters justify-content-around">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              
              <div className="c-it-wrap">
              <img
                  src={car.catalogImgsPathArr[0]}
                  id="target"
                  className="img-fluid d-inline"
                  alt="Car"
                  
                />
              </div>
              <div className="row mx-0 px-0" style={{height:'100px'}}>
                <div className="col-4" style={{lineHeight:'100px'}}>
                <span><img
                    src={car.catalogImgsPathArr[0]}
                    className="img-fluid"
                    alt="Car"
                    onClick={this.handleClick}
                    
                  /></span>

                </div>
                <div className="col-4" style={{lineHeight:'100px'}}>
                <span><img
                    src={car.catalogImgsPathArr[1]}
                    className="img-fluid"
                    alt="Car"
                    onClick={this.handleClick}
                    style={{maxWidth:"80%"}}
                  /></span>
                </div>
                <div className="col-4" style={{lineHeight:'100px'}}>
                <span><img
                    src={car.catalogImgsPathArr[2]}
                    className="img-fluid"
                    alt="Car"
                    onClick={this.handleClick}
                    
                  /></span>
                </div>
              </div>
              
              {/* <div className="row-cols-1" style={{height:'260px'}}>
                <img
                  src={car.catalogImgsPathArr[0]}
                  id="target"
                  className="card-img img-fluid"
                  alt="Car"
                />
              </div>
              <div className="row">
                <div className="col" style={{eight:'100px'}}>
                <span><img
                    src={car.catalogImgsPathArr[0]}
                    className="card-img img-fluid"
                    alt="Car"
                    onClick={this.handleClick}
                    height="100px"
                  /></span>
                  
                </div>
                <div className="col" style={{lineHeight:'100px'}}>
                <span><img
                    src={car.catalogImgsPathArr[1]}
                    className="card-img img-fluid"
                    alt="Car"
                    onClick={this.handleClick}
                  /></span>
                  
                </div>
                <div className="col" style={{lineHeight:'100px'}}>
                <span><img
                    src={car.catalogImgsPathArr[2]}
                    className="card-img img-fluid"
                    alt="Car"
                    onClick={this.handleClick}
                  /></span>
                  
                </div>
              </div> */}
            </div>
            <div className="col-12 col-sm-10 col-md-10 col-lg-5">
              <div className="card-body text-center pt-0">
                <h4 className="card-title mb-1 mb-lg-4 text-center text-lg-left cat-text-gray text-b mt-5 mt-lg-0">
                  ЦЕНА:
                  <span className="cat-text-red">&nbsp;{car.price}&nbsp;</span>$
                </h4>
                <div className="row justify-content-center my-3">
                  <div className="col-12 col-md-6 text-center">
                    <ul className="car-specs">
                      <SpecsItem
                        pic={pic1}
                        s_title="Тип кузова"
                        s_content={car.bodyType}
                      />
                      <SpecsItem
                        pic={pic2}
                        s_title="Тип привода"
                        s_content={car.drive}
                      />
                      <SpecsItem
                        pic={pic3}
                        s_title="Кол-во мест"
                        s_content={`${car.seats} пассажиров`}
                      />
                      <SpecsItem
                        pic={pic4}
                        s_title="Макс. скорость"
                        s_content={`${car.maxSpeed} км/ч`}
                      />
                    </ul>
                  </div>
                  <div className="col-12 col-md-6 text-center">
                    <ul className="car-specs">
                      <SpecsItem
                        pic={pic5}
                        s_title="КПП"
                        s_content={car.gear}
                      />
                      <SpecsItem
                        pic={pic6}
                        s_title="Мощность"
                        s_content={car.power}
                      />
                      <SpecsItem
                        pic={pic7}
                        s_title="Разгон до 100 км/ч"
                        s_content={`${car.start} сек`}
                      />
                      <SpecsItem
                        pic={pic8}
                        s_title="Запас хода"
                        s_content={`${car.maxCharge} км`}
                      />
                    </ul>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <Button
                    variant="danger"
                    className="card-button mr-3 ml-3 mt-3 b-w"
                    onClick={() => {
                      this.setState({ modalShow: true });
                      this.setState({ buy: true });
                    }}
                  >
                    Купить
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="form-button-send mr-3 ml-3 mt-3 b-w"
                    onClick={() => {
                      this.setState({ modalShow: true });
                      this.setState({ buy: false });
                    }}
                  >
                    Тест-драйв
                  </Button>
                  <CatalogModal
                    buy={this.state.buy}
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
          <Container className="font_pfespl">
            <Tabs
              id="tab"
              className="pb-4 b-bottom justify-content-lg-center"
              activeKey={this.state.key}
              onSelect={(k) => this.setState({ key: k })}
            >
              <Tab className="" eventKey="desc" title="Описание">
                <p className="text-center">{car.description}</p>
              </Tab>
              <Tab eventKey="charcs" title="Характеристики">
                <div className="row">
                  <div className="col-12 col-md-4">
                    <ul className="text-left mb-0">
                      <li className="text-red">
                        <span style={{ color: "#000" }}>
                          Производитель:&nbsp;
                        </span>
                        {car.manufacturer}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>
                          Модель авто:&nbsp;
                        </span>
                        {car.carModel}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>Тип кузова:&nbsp;</span>
                        {car.bodyType}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>Год:&nbsp;</span>
                        {car.year}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>
                          Местонахождение:&nbsp;
                        </span>
                        {car.place}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>Цвет:&nbsp;</span>
                        {car.color}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>
                          Тип топлива:&nbsp;
                        </span>
                        {car.fuel}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>
                          Страна производства:&nbsp;
                        </span>
                        {car.country}
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6">
                    <ul className="text-left mb-0">
                      <li className="text-red">
                        <span style={{ color: "#000" }}>Пробег км:&nbsp;</span>
                        {car.distance}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>Привод:&nbsp;</span>
                        {car.drive}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>Коробка:&nbsp;</span>
                        {car.gear}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>
                          Максимальная скорость:&nbsp;
                        </span>
                        {car.maxSpeed}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>
                          Мощность двигателя:&nbsp;
                        </span>
                        {car.power}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>
                          Разгон до 100 км/ч:&nbsp;
                        </span>
                        {car.start}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>Запас хода:&nbsp;</span>
                        {car.maxCharge}
                      </li>
                      <li className="text-red">
                        <span style={{ color: "#000" }}>Состояние:&nbsp;</span>
                        {car.state}
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="complect" title="Комплектация">
                <div className="row text-left">
                  <div className="col-12 col-md-4">
                    <ul className="text-red">
                      <span>Безопасность</span>
                      {car.complectSafetyArr.map((item, index) => (
                        <li key={index} className="text-red">
                          <span style={{ color: "#000" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-12 col-md-4">
                    <ul className="text-red">
                      Интерьер,комфорт и мультимедиа
                      {car.complectInteriorArr.map((item, index) => (
                        <li key={index} className="text-red">
                          <span style={{ color: "#000" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-12 col-md-4">
                    <ul className="text-red">
                      Климат и обогрев
                      {car.complectClimateArr.map((item, index) => (
                        <li key={index} className="text-red">
                          <span style={{ color: "#000" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="photo" title="Фото">
                <CatItemGallery photos={car.galleryImgsPathArr} />
              </Tab>
            </Tabs>
          </Container>
        </div>
      </Container>
    );
  }
}
