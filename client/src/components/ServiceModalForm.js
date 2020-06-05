import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./ServiceModalForm.css";
import { useMessage } from "../hooks/message.hook";
import { useHttp } from "../hooks/http.hook";

function checkTel(phone) {
  const re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  return re.test(String(phone));
}

function ServiceModalForm(props) {
  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const [validated, setValidated] = useState(false);
  const [time,setTime] = useState('10:00');
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
      label: "Укажите модель Вашего авто и характер проблеммы",
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

  const changeHandler = (event) => {
    setTime( event.target.value );
  };

  const addHandler = async () => {
    try {
      if (validated) {
      
      const question = await request("/api/service/add", "POST", {
        ...formControls, time
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

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="contained-modal-title-vcenter">
          ЗАПИСЬ НА СЕРВИС
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>        
        {renderInputs()}

        <Form.Group controlId="formBasicControlSelect" className="mb-0">
          <Form.Label>Выберите удобное время</Form.Label>
          <Form.Control
            as="select"
            name="time"
            onChange={changeHandler}
            disabled={loading}
            value={time}
          >
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
          </Form.Control>
        </Form.Group>
        <Form.Text className="text-muted">
          Мы не передаем Ваши данные третьим лицам
        </Form.Text>
        
        </Form>
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
