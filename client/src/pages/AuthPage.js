import React, { useState, useEffect, useContext } from "react";
import { Container, Form, Button, Col, Toast } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <Container>
      <h1 className="my-5">EVForYou</h1>

      <Form>
        <Form.Row className="justify-content-center">
          <Col xs="10" md="6">
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={changeHandler}
                disabled={loading}
                value={form.email}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={changeHandler}
                disabled={loading}
                value={form.password}
              />
            </Form.Group>

            <Button
              variant="outline-primary"
              onClick={loginHandler}
              disabled={loading}
              className="mx-3 mt-3"
            >
              LogIn
            </Button>
            <Button
              variant="outline-danger"
              onClick={registerHandler}
              disabled={loading}
              className="mx-3 mt-3"
            >
              Register
            </Button>
          </Col>
          
        </Form.Row>
        <NavLink to="/" className="btn btn-primary mt-5"> Go home</NavLink>
      </Form>
    </Container>
  );
};
