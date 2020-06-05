import React, { Component } from "react";
import "./CatalogCard.css";
import { Link } from "react-router-dom";

export default class CatalogCard extends Component {
  render() {
    return (
      <div className="bg-white pt-3 mt-3 font_pfespl col-10">
        <div className="text-center align-items-center model-wrapper">
        <h4 className="item-price">{this.props.item.model}</h4>
        </div>
        <img
          src={this.props.item.testdriveImgPath}
          alt=""
          className="img-fluid mt-3 item-img mx-auto"
        />

        <h5 className="text-red item-model mt-3">{this.props.item.price}$</h5>
        <ul className="text-left" style={{ listStyle: "none" }}>
          <li>
            Пробег:{" "}
            <span className="text-red">{this.props.item.distance} км</span>
          </li>
          <li>
            Запас хода:{" "}
            <span className="text-red">{this.props.item.maxCharge} км</span>
          </li>
        </ul>

        <Link
          to={`/catalog/${this.props.item._id}`}
          onClick={() => {
            this.props.selected(this.props.item._id);
          }}
          className="btn btn-danger item-btn mb-3"
        >
          Подробнее
        </Link>
      </div>
    );
  }
}
