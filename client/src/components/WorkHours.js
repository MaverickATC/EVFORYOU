import React, { Component } from "react";
import logo from "../assets/logo-black.png";
import "./WorkHours.css";

export default class WorkHours extends Component {
  render() {
    return (
      <div className="wh-wrapper">
        <div className="pt-3 pr-4 pl-4 light_grey">
          <img className="img-fluid" src={logo} />
          <p className="pt-3 my-0" style={{ fontSize: "14px" }}>
            “Мы осуществляем продажу электромобилей в наличии и под заказ как
            новых, так и бывших в употреблении.”
          </p>
          <p className="my-0">
            <i
              className="fas fa-calendar-alt d-inline pr-2 light_red"
              style={{ fontSize: "40px" }}
            ></i>
            <span style={{ fontSize: "16px" }}>Режим работы</span>
          </p>
          <p className="my-0">
            <span style={{ fontSize: "19px", lineHeight: "1" }}>
              <span className="light_red">пн-пт </span> 8:00 - 18:00
            </span>
            <br />
            <span style={{ fontSize: "19px", lineHeight: "1" }}>
              <span className="light_red">сб-вс </span> 9:00 - 16:00
            </span>
          </p>
          <p className="my-0">
            <span className="light_red" style={{ fontSize: "15px" }}>
              без перерыва и выходных
            </span>
          </p>
        </div>
      </div>
    );
  }
}
