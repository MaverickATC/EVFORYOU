import "./TestDrive.css";
import React, { Component, useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { TDCarousel } from "./TDCarousel";
import { useHttp } from "../hooks/http.hook";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";

export const TestDrive = () => {
 
  return (
    <div id="toShow" className="td-wrapper">
      <Container className="text-center align-items-center pt-5">
        <h2 className="d-u-td font_pfespl">
          ХОЧЕШЬ БЫТЬ <span className="t-hl-td">ПЕРВЫМ?</span>
        </h2>
        <p className="mt-3 font_pfespl" style={{fontSize: '24px'}}>
          Мы не продаем "красивые картинки" - у нас вы можете "вживую"
          познакомиться со всем модельным рядом электромобилей, а также
          совершить тест-драйв.
        </p>
        <h4 className="font_pfespl">ВЫБЕРИТЕ АВТО ДЛЯ</h4>
        <h2 className="t-hl-td t-b mb-5 font_pfespm" style={{fontSize: '36px'}}>ТЕСТ-ДРАЙВА</h2>

        <TDCarousel />

        <Link to="/catalog" className="btn btn-outline-danger mb-5 m-btn-td">Перейти в каталог</Link>
        
      </Container> 
    </div>
  );
};
