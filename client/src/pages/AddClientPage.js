import React, { useState, useEffect } from "react";
import { AdmMenu } from "../components/AdmMenu";
import { Button, Form, Container } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AddClientPage = () => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    remark: "",
  });

  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();

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
    } catch (e) {}
  };

  return (
    <div>
      <AdmMenu />
      <h1 className="mt-3 mb-5">Add client</h1>
      <Container className="m-auto">
        <Form>
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
            <Form.Text className="text-muted">xxx-xxx-xxxx</Form.Text>
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
          </Form.Group>

          <Form.Group controlId="formBasicControlTextarea">
            <Form.Control
              className="form-rounding"
              as="textarea"
              rows="5"
              name="remark"
              onChange={changeHandler}
              disabled={loading}
              value={form.remark}
              placeholder="Ремарка"
            />
          </Form.Group>
          <Button className="my-3" variant="primary" onClick={addHandler}>
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
};
