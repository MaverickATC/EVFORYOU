import React, { Component } from "react";
import "./FooterContacts.css";
import { Col, Row } from "react-bootstrap";
import tel from "../assets/tel-icon.png";
import mail from "../assets/mail-icon.png";
import adress from "../assets/loc-icon.png";

export default class FooterContacts extends Component {
  render() {
    return (
      <Row className="p-0 m-0 font_pfespl">
        <Col xs="12" sm="12" md="6" className="text-white mt-4 pl-0 pl-md-5">
          <Row className="pl-5">
            <Col className="col-2 pt-2">
              <img className="pt-1" src={tel} alt="" />
            </Col>
            <Col className="col-10 text-left">
              <a className="f-contacts-link" href="tel:+38 095 113 85 98">
                +38 095 113 85 98
              </a>
              <br />
              <a className="f-contacts-link" href="tel:+38 095 113 85 98">
                +38 095 113 85 98
              </a>
            </Col>
          </Row>
          <Row className="mt-3 pl-5">
            <Col className="col-2">
              <img src={mail} alt="" />
            </Col>
            <Col className="col-10 text-left">
              <a className="f-contacts-link" href="mailto:evforyou.com@gmail.com">
                evforyou.com@gmail.com
              </a>
            </Col>
          </Row>
          <Row className="mt-3 pl-5">
            <Col className="col-2">
              <img className="pt-2" src={adress} alt="" />
            </Col>
            <Col className="col-10 text-left">
              <span className="f-contacts-link">
                Запорожское ш., 59, Днипро, <br /> Днепропетровская область
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
