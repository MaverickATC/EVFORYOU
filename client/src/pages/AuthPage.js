import React, { useState, useEffect, useContext } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

function checkUN(username) {
  const re = /^\w+@\w+$/;
  return re.test(String(username));
}

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();

  const [validated, setValidated] = useState(false);
  const [formControls, setFormControls] = useState({
    userName: {
      value: "",
      type: "text",
      label: "User name",
      errorMessage: "Enter correct user name",
      valid: false,
      touched: false,
      validation: {
        required: true,
        userName: /^\w+@\w+$/,
      },
    },
    password: {
      value: "",
      type: "password",
      label: "Password",
      errorMessage: "Enter correct password",
      valid: false,
      touched: false,
      validation: {
        required: true,
        minLength: 6,
      },
    },
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.userName) {
      isValid = checkUN(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    
    return isValid;
  };

  const onChangeHandler = (event, controlName) => {
    const newFormControls = { ...formControls };
    const control = { ...newFormControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validateControl(control.value, control.validation);
    newFormControls[controlName] = control;

    let isFormValid = true;
    Object.keys(newFormControls).forEach((name) => {
      isFormValid = newFormControls[name].valid && isFormValid;
    });

    setFormControls(newFormControls);
    setValidated(isFormValid);
  };

  const registerHandler = async () => {
    try {
      if (validated) {
        const data = await request("/api/auth/register", "POST", {
          name: formControls.userName.value,
          password: formControls.password.value,
        });
        message(data.message);
      }
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      if (validated) {
        const data = await request("/api/auth/login", "POST", {
          name: formControls.userName.value,
          password: formControls.password.value,
        });
        auth.login(data.token, data.userId, data.isAdmin);
      }
      //const data = await request("/api/auth/login", "POST", { ...form });
      //auth.login(data.token, data.userId, data.isAdmin);
    } catch (e) {}
  };

  const renderInputs = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];

      return (
        <Form.Group key={controlName + index}>
          <Form.Label>{control.label}</Form.Label>
          <Form.Control
            required
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            errorMessage={control.errorMessage}
            shouldValidate={!!control.validation}
            onChange={(event) => {
              onChangeHandler(event, controlName);
            }}
          />
          <Form.Control.Feedback type="invalid">
            Invalid {controlName}
          </Form.Control.Feedback>
        </Form.Group>
      );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <h1 className="my-5">EVForYou</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row className="justify-content-center">
          <Col xs="10" md="5">
            {/* <Form.Group controlId="email">
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
            </Form.Group> */}

            {renderInputs()}

            <Button
              variant="outline-danger"
              onClick={loginHandler}
              disabled={loading && !validated}
              className="mx-3 mt-3"
            >
              LogIn
            </Button>
            <NavLink to="/" className="btn btn-danger mt-3">
              {" "}
              Homepage{" "}
            </NavLink>
            <Button
              variant="outline-danger"
              onClick={registerHandler}
              disabled={loading && !validated}
              className="mx-3 mt-3"
            >
              Register
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
};
