import React, { Component, useState, useEffect } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./ServiceModalForm.css";
import { useMessage } from "../hooks/message.hook";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";

function ServiceModalForm(props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
    time: "09:00",
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
      const question = await request("/api/client/service/add", "POST", {
        ...form,
      });
      message(question.message);

      alert("Спасибо, наш менеджер свяжется с вами");
      return props.onHide;
    } catch (e) {}
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter">
          ЗАПИСЬ НА СЕРВИС
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="col-6">
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
            <Form.Group controlId="formBasicTel">
              <Form.Control
                className="form-rounding"
                placeholder="Телефон"
                name="phone"
                onChange={changeHandler}
                disabled={loading}
                value={form.phone}
              />
              <Form.Text className="text-muted">+38-xxx-xx-xx</Form.Text>
            </Form.Group>
          </Col>
          <Col className="col-6">
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
              <Form.Text className="text-muted">
                Мы не передаем Ваши данные третьим лицам
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
            placeholder="Укажите модель Вашего авто и характер проблеммы"
          />
        </Form.Group>
        <Form.Group controlId="formBasicControlSelect">
          <Form.Label>Выберите удобное время</Form.Label>
          <Form.Control
            as="select"
            name="time"
            onChange={changeHandler}
            disabled={loading}
            value={form.time}
          >
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
          </Form.Control>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-danger"
          className="form-button-send"
          type="submit"
          onClick={addHandler}
        >
          Записаться
        </Button>
        <Button
          variant="danger"
          className=".form-button-cancel"
          onClick={props.onHide}
        >
          Отмена
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ServiceModalForm;
