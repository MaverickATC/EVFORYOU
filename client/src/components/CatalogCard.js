import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

import "./CatalogCard.css";
import { Link } from "react-router-dom";

export default class CatalogCard extends Component {
  render() {
    return (
      <div className="bg-white py-3 font_pfespl col-10">
        <h4 className="item-price text-red mb-3">{this.props.item.price}$</h4>
        <img
          src={this.props.item.testdriveImgPath}
          // max-width="220"
          className="img-fluid mt-3 item-img mx-auto"
        />
        <h5 className="item-model my-3">{this.props.item.model}</h5>

        <ul className="text-left" style={{listStyle: 'none'}}>
          <li>Кузов: <span className="text-red">{this.props.item.bodyType}</span></li>
          <li>КПП: <span className="text-red">{this.props.item.gear}</span></li>
          <li>Разгон до 100 км/ч: <span className="text-red">{this.props.item.start} с.</span></li>
          <li>Макс. скорость: <span className="text-red">{this.props.item.maxSpeed} км/ч</span></li>
          <li>Мощность: <span className="text-red">{this.props.item.power}</span></li>
          <li>Запас хода: <span className="text-red">{this.props.item.maxCharge} км</span></li>
          <li>Пробег: <span className="text-red">{this.props.item.distance}  км</span></li>
        </ul>
        
        <Link to={`/catalog/${this.props.item._id}`} onClick={()=>{this.props.selected(this.props.item._id)}} className="btn btn-danger item-btn my-3">Подробнее</Link>
        
      </div>
    );
  }
}
