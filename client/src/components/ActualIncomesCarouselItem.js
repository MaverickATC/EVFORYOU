import React, { Component } from "react";
import { Button } from "react-bootstrap";
import pic1 from "../assets/tesla_head.jpg";

export default class ActualIncomesCarouselItem extends Component {
  render() {
    return (
      <div className="card mb-3 mt-5 w-auto align-items-center b-n">
        <div className="row no-gutters justify-content-around">
          <div className="col-md-4 col-lg-6">
            <img src={pic1} className="card-img" alt="Car" />
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="card-body text-left pl-md-5">
              <h5 className="card-title">TESLA MODEL X 100D 2018</h5>
              <p className="text-center">
                Пригнан из США. Первая регистрация! Пробег 6 тыс. км, полный
                привод, цвет красный металлик, есть все, состояние нового
                автомобиля. Гаражное хранение, первый владелец
              </p>
              <Button variant="danger" className="card-button">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
