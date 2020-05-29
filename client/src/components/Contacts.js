import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import car from "../assets/tesla_footer_contacts.png";
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
              <img src={tel} />
            </Col>
            <Col className="col-10">
              <Row>
                <a class="contacts-link" href="tel:+38 095 113 85 98">
                  +38 095 113 85 98
                </a>
              </Row>
              <Row>
                <a class="contacts-link" href="tel:+38 095 113 85 98">
                  +38 095 113 85 98
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="col-2">
              <img src={mail} />
            </Col>
            <Col className="col-10 justify-content-start text-left pl-0">
              <a class="contacts-link" href="mailto:chornyiav@gmail.com">
                chornyiav@gmail.com
              </a>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="col-2 pt-1">
              <img src={adress} />
            </Col>
            <Col className="col-10 justify-content-start text-left pl-0">
              <span class="contacts-link">
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
              <img src={facebk} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img src={insta} />
            </a>
          </Row>
        </Container>

        <img src={car} width="100%" height="100%" />
      </div>
    );
  }
}
