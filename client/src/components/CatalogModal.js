import React, {useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./ServiceModalForm.css";
import { useMessage } from "../hooks/message.hook";
import { useHttp } from "../hooks/http.hook";

function checkTel(phone) {
  const re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  return re.test(String(phone));
}

function CatalogModal(props) {
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
      if(validated){
      if (props.buy) {
        const question = await request("/api/buy/add", "POST", {
          ...formControls,
        });
        message(question.message);
      } else {
        const question = await request("/api/td/add", "POST", {
          ...formControls,
        });
        message(question.message);
      }
      alert("Спасибо, наш менеджер свяжется с вами");
      
      const user = await request("/api/client/add/auto", "POST", {
        ...formControls,
      });
      message(user.message);
     
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
          {props.model}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>         
          {renderInputs()}

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
