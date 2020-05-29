import React, { Component } from "react";
import Menu from "../components/Menu";
import GoogleMapReact from "google-map-react";
import { Col, Row, Container } from "react-bootstrap";
import car from "../assets/tesla_footer_contacts.png";
import tel from "../assets/tel-icon.png";
import mail from "../assets/mail-icon.png";
import adress from "../assets/loc-icon.png";
import "./ContactsPage.css";
import WorkHours from "../components/WorkHours";
import logo from "../assets/logo-black.png";
import insta from "../assets/insta.png";
import facebk from "../assets/fbk.png";

export default class ContactsPage extends Component {
  static defaultProps = {
    center: {
      lat: 48.401311,
      lng: 35.038175,
    },
    zoom: 11,
  };
  render() {
    return (
      <div>
        <div className="h-img">
          <Menu page='contacts'/>
        </div>
        <h2 className="d-n-td pt-3">
          НАШИ <span className="t-hl-bf">КОНТАКТЫ</span>
        </h2>

        <Container className="contacts mb-5 minus">
          <Row className="">
            <Col className="col-12 col-lg-6 justify-content-end mt-5 pl-5 mx-auto font_pfespl">
              <Row className="">
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
            </Col>
            <Col className="col-12 col-lg-6 flip ">
              <img className="mt-5" src={car} width="100%" />
            </Col>
          </Row>
        </Container>

        <div className="map-wrapper-2">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          ></GoogleMapReact>
        </div>
        <div className="d-none d-sm-block f-c-img">
          <WorkHours />
        </div>
        <div className="d-block d-sm-none f-c-img-hider">
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
      </div>
    );
  }
}
