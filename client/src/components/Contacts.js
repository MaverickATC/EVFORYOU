import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import car from "../assets/4.png";
import tel from "../assets/tel-icon.png";
import mail from "../assets/mail-icon.png";
import adress from "../assets/loc-icon.png";

import insta from "../assets/insta.png";
import facebk from "../assets/fbk.png";
import "./Contacts.css";

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <Container className="contacts mb-5 font_pfespl">
          <Row>
            <Col className="col-2 pt-2">
              <img src={tel} alt=""/>
            </Col>
            <Col className="col-10">
              <Row>
                <a className="contacts-link" href="tel:+38 095 113 85 98">
                  +38 095 113 85 98
                </a>
              </Row>
              <Row>
                <a className="contacts-link" href="tel:+38 095 113 85 98">
                  +38 095 113 85 98
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="col-2">
              <img src={mail} alt="" />
            </Col>
            <Col className="col-10 justify-content-start text-left pl-0">
              <a className="contacts-link" href="mailto:evforyou.com@gmail.com">
              evforyou.com@gmail.com
              </a>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="col-2 pt-1">
              <img src={adress} alt="" />
            </Col>
            <Col className="col-10 justify-content-start text-left pl-0">
              <span className="contacts-link">
                Запорожское ш., 59, Днипро, <br /> Днепропетровская область
              </span>
            </Col>
          </Row>
          <Row className="pl-4 mt-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              <img src={facebk} alt="" />
            </a>
            <a
              href="https://www.instagram.com/evforyou_com?igshid=1xqc1evw4bmox"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img src={insta} alt="" />
            </a>
          </Row>
        </Container>

        <img className="flip" src={car} alt="" width="100%" height="100%" />
      </div>
    );
  }
}
