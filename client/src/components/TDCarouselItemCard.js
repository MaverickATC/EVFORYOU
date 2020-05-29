import React, { Component } from "react";
import { Card, Button, Container } from "react-bootstrap";
import "./TDCarouselItemCard.css";
import { Link } from "react-router-dom";

export default class TDCarouselItemCard extends Component {
  render() {
    
    const car = this.props.item;
    return (
      <div className="card mb-3 mt-5 w-auto align-items-center b-n">
        <div className="row no-gutters justify-content-around">
          <div className="col-md-4 col-lg-6">
            <img src={car.testdriveImgPath} className="card-img pt-3" alt="Car" />
          </div>
          <div className="col-md-8 col-lg-6">
            <div className="card-body text-left pl-5 pt-0">
              <h3 className="card-title font_pfespl" style={{fontSize: '24px', fontWeight: '700'}}>{car.model}</h3>
              <ul className="car-specs font_pfespl" style={{fontSize: '18px'}}>
                <li>
                  Кузов: <span className="text-col">{car.bodyType}</span>
                </li>
                <li>
                  Пробег: <span className="text-col">{car.distance}&nbsp;км</span>
                </li>
                <li>
                  Двигатель:{" "}
                  <span className="text-col">{car.fuel} (&nbsp;{car.power}&nbsp;)</span>
                </li>
                <li>
                  Привод: <span className="text-col">{car.drive}</span>
                </li>
                <li>
                  Разгон до 100км: <span className="text-col">{car.start}&nbsp;с.</span>
                </li>
                <li>
                  Максимальная скорость:{" "}
                  <span className="text-col">{car.maxSpeed}&nbsp;км/ч</span>
                </li>
              </ul>
              <Link to={`/catalog/${car._id}`} className="btn btn-danger card-button" >Подробнее</Link>
              
            </div>
          </div>
        </div>
        <p className="text-center  font_pfespl"  style={{fontSize: '18px'}}>
          {this.props.item.description} 
        </p>
      </div>
    );
  }
}
