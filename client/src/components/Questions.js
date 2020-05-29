import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import footerImg from "../assets/footer_main.png";
import GoogleMapReact from "google-map-react";
import Contacts from "./Contacts";
import "./Questions.css";
import WorkHours from "./WorkHours";
import logo from "../assets/logo-black.png";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { useHistory } from "react-router-dom";

export const Questions = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });

  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();
  const history = useHistory();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const addHandler = async () => {
    try {
      const user = await request("/api/client/add", "POST", { ...form });
      message(user.message);
      const question = await request("/api/client/question/add", "POST", {
        ...form,
      });
      message(question.message);

      alert("Спасибо, наш менеджер свяжется с вами");
      return history.push(`/`);
    } catch (e) {}
  };
  const center = {
    lat: 48.401311,
    lng: 35.038175,
  };

  const zoom = 11;

  return (
    <div className="qs-wrapper">
      <Container className="minus">
        <h2 className="d-u-td pt-5">
          ОСТАЛИСЬ <span className="t-hl-bf">ВОПРОСЫ?</span>
        </h2>

        <Row className="mt-3 mt-md-5">
          <Col className="col-12 col-lg-6">
            <Contacts />
          </Col>
          <Col className="col-12 col-lg-6 font_pfespl">
            <Row>
              <Col className="col-12 col-md-6">
                <Form.Group controlId="formBasicFirstName">
                  <Form.Control
                    className="form-rounding"
                    placeholder="Имя"
                    name="firstName"
                    onChange={changeHandler}
                    disabled={loading}
                    value={form.firstName}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                  <Form.Control
                    className="form-rounding"
                    placeholder="Фамилия"
                    name="lastName"
                    onChange={changeHandler}
                    disabled={loading}
                    value={form.lastName}
                  />
                </Form.Group>
              </Col>
              <Col className="col-12 col-md-6">
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    className="form-rounding"
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    disabled={loading}
                    value={form.email}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicTel">
                  <Form.Control
                    className="form-rounding"
                    placeholder="Телефон"
                    name="phone"
                    onChange={changeHandler}
                    disabled={loading}
                    value={form.phone}
                  />
                  <Form.Text className="text-muted">
                    +38-xxx-xxx-xx-xx
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formBasicControlTextarea">
              <Form.Control
                className="form-rounding"
                as="textarea"
                rows="5"
                name="question"
                onChange={changeHandler}
                disabled={loading}
                value={form.question}
              />
              <Form.Text className="text-muted">
                Мы не передаем Ваши данные третьим лицам
              </Form.Text>
            </Form.Group>
            <Button
              variant="danger"
              className="form-button"
              placeholder="Задайте Ваш вопрос"
              onClick={addHandler}
            >
              Задать ворос
            </Button>
          </Col>
        </Row>
      </Container>
      <div className="map-wrapper">
        <GoogleMapReact
          className="f-map"
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <div lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
      <div className="d-none d-sm-block f-img">
        <WorkHours />
      </div>
      <div className="d-block d-sm-none f-m-img-hider">
        <div className="pt-3 pr-4 pl-4 light_grey font_pfespl">
          <img className="img-fluid" src={logo} />
          <p className="pt-3 my-0" style={{ fontSize: "14px" }}>
            “Мы осуществляем продажу электромобилей в наличии и под заказ как
            новых, так и бывших в употреблении.”
          </p>
          <p className="my-0">
            <i
              className="fas fa-calendar-alt d-inline pr-2 light_red"
              style={{ fontSize: "28px" }}
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
            <span className="light_red" style={{ fontSize: "15px", lineHeight: "15px" }}>
              без перерыва и выходных
            </span>
          </p>
        </div>
      </div>
      {/* <WorkHours /> */}
    </div>
  );
};
