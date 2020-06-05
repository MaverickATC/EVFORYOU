import React, { Component } from "react";
import "./SpecsItem.css";

export default class SpecsItem extends Component {
  render() {
    return (
      <div className="row mb-3">
        <div className="col-4 p-0 mt-75">
          <img src={this.props.pic} alt="" className="img-fluid" />
        </div>
        <div className="col-8">
          <div className="row font_pfespl">{this.props.s_title}</div>
          <div className="row cat-text-red"><strong>{this.props.s_content}</strong></div>
        </div>
      </div>
    );
  }
}
