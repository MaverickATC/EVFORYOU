import React, { Component } from "react";
import "./TDCarouselItem.css";
import car1 from "../assets/testdrive1.png";

export default class TDCarouselItem extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.item.testdriveImgPath}
          alt="Car"
          max-width="175"
          max-height="100"
          className="img-fluid-td px-1 op-7"
          onClick={(e) => {
             e.preventDefault();
             document.querySelectorAll("#cars .img-fluid").forEach(element => {
                 element.classList.add('op-7')
             });
              e.target.classList.remove("op-7");
            this.props.selected(this.props.Id);
          }}
        />
      </div>
    );
  }
}
