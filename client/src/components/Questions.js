import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import Contacts from "./Contacts";
import "./Questions.css";
import WorkHours from "./WorkHours";
import logo from "../assets/logo-black.png";
import {Pointer} from "./Pointer";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

function checkTel(phone) {
  const re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  return re.test(String(phone));
}

export const Questions = () => {
  const { error, request, clearError } = useHttp();
  const message = useMessage();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const [validated, setValidated] = useState(false);
  const [formControls, setFormControls] = useState({
    firstName: {
      value: "",
      type: "text",
      label: "Имя",
      errorMessage: "Введите имя",
      valid: false,
      touched: false,
      validation: {
        required: true,
      },
    },
    phone: {
      value: "",
      type: "tel",
      label: "Телефон",
      errorMessage: "Введите корректный номер",
      valid: false,
      touched: false,
      validation: {
        required: true,
        tel: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      },
    },
    question: {
      value: "",
      as: "textarea",
      rows: 5,
      label: "Ваш вопрос",
      errorMessage: "Введите вопрос",
      valid: false,
      touched: false,
      validation: {
        required: true,
      },
    },
  });

  const validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;
    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.tel) {
      isValid = checkTel(value) && isValid;
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
    console.log(`Form validation is: ${isFormValid}`);
  };

  const renderInputs = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];

      return (
        <Form.Group key={controlName + index}>
          <Form.Control
            required={!!control.validation.required ? true : false}
            placeholder={control.label}
            type={!!control.type ? control.type : undefined}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            errorMessage={control.errorMessage}
            shouldValidate={!!control.validation}
            as={!!control.as ? control.as : undefined}
            rows={!!control.rows ? control.rows : undefined}
            onChange={(event) => {
              onChangeHandler(event, controlName);
            }}
          />
          <>
            {control.type === "tel" && (
              <Form.Text className="text-muted">000-123-4567</Form.Text>
            )}
          </>
          <Form.Control.Feedback type="invalid">
            {control.errorMessage}
          </Form.Control.Feedback>
        </Form.Group>
      );
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const addHandler = async () => {
    try {
      if (validated) {
        
        const question = await request("/api/question/add", "POST", {
          ...formControls,
        });
        message(question.message);
        const user = await request("/api/client/add/auto", "POST", {
          ...formControls,
        });
        message(user.message);

        alert("Спасибо, наш менеджер свяжется с вами");
      }
    } catch (e) {}
  };
  const center = {
    lat: 48.401311,
    lng: 35.038175,
  };

  const zoom = 17;

  return (
    <div className="qs-wrapper">
      <Container className="minus">
        <h2 className="d-u-td pt-5">
          ОСТАЛИСЬ <span className="t-hl-bf">ВОПРОСЫ?</span>
        </h2>

        <Row className="mt-3 mt-md-5 justify-content-center">
          <Col className="col-12 col-lg-5">
            <Contacts />
          </Col>
          <Col className="col-12 col-lg-5 font_pfespl">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              {renderInputs()}
              
              <Form.Text className="text-muted">
                Мы не передаем Ваши данные третьим лицам
              </Form.Text>

              <Button
                variant="danger"
                className="form-button mt-3"
                placeholder="Задайте Ваш вопрос"
                onClick={addHandler}
              >
                Задать ворос
              </Button>
            </Form>
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
          <Pointer lat={59.955413} lng={30.337844} />
        </GoogleMapReact>
      </div>
      <div className="d-none d-sm-block f-img">
        <WorkHours />
      </div>
      <div className="d-block d-sm-none f-m-img-hider">
        <div className="pt-3 pr-4 pl-4 light_grey font_pfespl">
          <img className="img-fluid" src={logo} alt="evforyoulogo"/>
          <p className="pt-3 my-0" style={{ fontSize: "14px" }}>
            “Мы осуществляем продажу электромобилей в наличии и под заказ как
            новых, так и бывших в употреблении.”
          </p>
          <p className="mb-0 mt-2">
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
            <span
              className="light_red"
              style={{ fontSize: "15px", lineHeight: "15px" }}
            >
              без перерыва и выходных
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
