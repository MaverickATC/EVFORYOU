import React, { Component } from "react";
import "./TDCarouselItem.css";

export default class TDCarouselItem extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.item.testdriveImgPath}
          alt="Car"
          max-width="175"
          max-height="100"
          className="img-fluid-td px-1 td-item"
          onClick={(e) => {
             e.preventDefault();
             document.querySelectorAll("#cars .td-item").forEach(element => {
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
