import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BFCarouselItem.css";

export default class BFCarouselItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Row className="my-1">
          <Col className="col-12 col-md-6">
            <div className="bf-text">
              <h5 className="text-uppercase py-4 text-60">{this.props.element.header}</h5>
              <ul>
                {this.props.element.spans.map((span) => 
                  <li key={span.indexOf()} className="mb-3 text-left text-red"><span className="text-75">{span}</span></li>
                )}
              </ul>
            </div>

            <div className="white"></div>
            <div className="red"></div>
          </Col>
          <Col className="col-12 col-md-6">
            <img src={this.props.element.img} className="pic" />
          </Col>
        </Row>
      </div>
    );
  }
}
