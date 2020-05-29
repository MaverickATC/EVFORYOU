import React, { Component, useState, useEffect } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./ServiceModalForm.css";
import { useMessage } from "../hooks/message.hook";
import { useHistory } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";

function CatalogModal(props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
     
      if (props.buy) {
        const question = await request("/api/client/buy/add", "POST", {
          ...form,
        });
        message(question.message);
      } else {
        const question = await request("/api/client/td/add", "POST", {
          ...form,
        });
        message(question.message);
      }

      const user = await request("/api/client/add", "POST", { ...form });
      message(user.message);
      alert("Спасибо, наш менеджер свяжется с вами");
      props.onHide();
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
          ОСТАВЬТЕ ВАШИ ДАННЫЕ
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
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-danger"
          className="form-button-send"
          type="submit"
          onClick={addHandler}
        >
          Oк
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

export default CatalogModal;
