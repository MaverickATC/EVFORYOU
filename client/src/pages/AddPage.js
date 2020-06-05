import React, { useState, useEffect, useCallback } from "react";
import { AdmMenu } from "../components/AdmMenu";
import { Button, Form, Container, Col, Tab, Tabs } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";
import { useHistory, useParams } from "react-router-dom";

export const AddPage = () => {
  const [key, setKey] = useState("main");
  const [form, setForm] = useState({
    creationDate: "",
    model: "",
    price: "",
    description: "",
    manufacturer: "",
    carModel: "",
    bodyType: "",
    year: "",
    place: "",
    color: "",
    fuel: "",
    country: "",
    distance: "",
    drive: "",
    gear: "",
    maxSpeed: "",
    power: "",
    start: "",
    maxCharge: "",
    state: "",
    seats: "",
    testdriveImgPath: "",
    catalogImgsPath: "",
    galleryImgsPath: "",
    catalogImgsPathArr: [],
    galleryImgsPathArr: [],
    complectSafety: "",
    complectInterior: "",
    complectClimate: "",
    complectSafetyArr: [],
    complectInteriorArr: [],
    complectClimateArr: [],
  });

  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();
  const history = useHistory();

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const isUpdate = !!useParams().id;

  const id = useParams().id;

  const fetchCar = useCallback(async () => {
    try {
      const fetched = await request(`/api/car/${id}`, "GET", null, {});
      fetched.catalogImgsPath = fetched.catalogImgsPathArr.join(' ');
      fetched.galleryImgsPath = fetched.galleryImgsPathArr.join(' ');
      fetched.complectSafety = fetched.complectSafetyArr.join();
      fetched.complectInterior = fetched.complectInteriorArr.join();
      fetched.complectClimate = fetched.complectClimateArr.join();
      setForm({...fetched});
    } catch (e) {}
  }, [request, id]);

  useEffect(() => {
    if(id){
    fetchCar();}
  }, [fetchCar, id]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const addHandler = async () => {
    try {
      const data = await request("/api/car/add", "POST", { ...form });
      message(data.message);
      return history.push(`/adm/details/${data.car._id}`);
    } catch (e) {}
  };

  const updateHandler = async () => {
    try {
      const data = await request(`/api/car/update/${id}`, "POST", { ...form });
      message(data.message);
      return history.push(`/adm/details/${data.car._id}`);
    } catch (e) {}
  };

  return (
    <div>
      <AdmMenu />
      <h1 className="mt-3 mb-5">Add page</h1>
      <Container className="m-auto">
        <Form enctype="multipart/form-data">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="main" title="Main">
              <Form.Group controlId="formModel">
                <Form.Label className="mt-3">Model</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Model"
                  name="model"
                  onChange={changeHandler}
                  disabled={loading}
                  value={form.model}
                />
              </Form.Group>
              <Form.Group controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  name="price"
                  onChange={changeHandler}
                  disabled={loading}
                  value={form.price}
                />
              </Form.Group>
              <Form.Group controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  placeholder="Description"
                  name="description"
                  onChange={changeHandler}
                  disabled={loading}
                  value={form.description}
                />
              </Form.Group>
            </Tab>
            <Tab eventKey="characteristics" title="Characteristics">
              <Form.Row className="mt-3 justify-content-center">
                <Col xs="6" className="m-auto">
                  <Form.Group controlId="formManufacturer">
                    <Form.Label>Производитель</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Производитель"
                      name="manufacturer"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.manufacturer}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCarModel">
                    <Form.Label>Модель авто</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Модель авто"
                      name="carModel"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.carModel}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBody">
                    <Form.Label>Тип кузова</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Тип кузова"
                      name="bodyType"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.bodyType}
                    />
                  </Form.Group>
                  <Form.Group controlId="formYear">
                    <Form.Label>Год</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Год"
                      name="year"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.year}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPlace">
                    <Form.Label>Местонахождение</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Местонахождение"
                      name="place"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.place}
                    />
                  </Form.Group>
                  <Form.Group controlId="formColor">
                    <Form.Label>Цвет</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Цвет"
                      name="color"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.color}
                    />
                  </Form.Group>
                  <Form.Group controlId="formFuel">
                    <Form.Label>Тип топлива</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Тип топлива"
                      name="fuel"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.fuel}
                    />
                  </Form.Group>
                  <Form.Group controlId="formCountry">
                    <Form.Label>Страна производства</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Страна производства"
                      name="country"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.country}
                    />
                  </Form.Group>
                </Col>
                <Col xs="6" className="m-auto">
                  <Form.Group controlId="formDistance">
                    <Form.Label>Пробег км</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Пробег км"
                      name="distance"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.distance}
                    />
                  </Form.Group>
                  <Form.Group controlId="formDrive">
                    <Form.Label>Привод</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Привод"
                      name="drive"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.drive}
                    />
                  </Form.Group>
                  <Form.Group controlId="formGear">
                    <Form.Label>Коробка</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Коробка"
                      name="gear"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.gear}
                    />
                  </Form.Group>
                  <Form.Group controlId="formMaxSpeed">
                    <Form.Label>Максимальная скорость</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Максимальная скорость"
                      name="maxSpeed"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.maxSpeed}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPower">
                    <Form.Label>Мощность двигателя</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Мощность двигателя"
                      name="power"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.power}
                    />
                  </Form.Group>
                  <Form.Group controlId="formStart">
                    <Form.Label>Разгон до 100 км/ч</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Разгон до 100 км/ч"
                      name="start"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.start}
                    />
                  </Form.Group>
                  <Form.Group controlId="formMaxCharge">
                    <Form.Label>Запас хода</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Запас хода"
                      name="maxCharge"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.maxCharge}
                    />
                  </Form.Group>
                  <Form.Group controlId="formState">
                    <Form.Label>Состояние</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Состояние"
                      name="state"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.state}
                    />
                  </Form.Group>
                </Col>
                <Form.Group controlId="formSeats">
                  <Form.Label>Кол-во мест</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Кол-во мест"
                    name="seats"
                    onChange={changeHandler}
                    disabled={loading}
                    value={form.seats}
                  />
                </Form.Group>
              </Form.Row>
            </Tab>
            <Tab eventKey="complect" title="Complectation">
              <Form.Row className="mt-3 justify-content-center">
                <Col xs="4" className="m-auto">
                  <Form.Group controlId="formTDImg">
                    <Form.Label>Безопасность</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="complectSafety"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.complectSafety}
                    />
                  </Form.Group>
                </Col>
                <Col xs="4" className="m-auto">
                  <Form.Group controlId="formCatImg">
                    <Form.Label>Интерьер,комфорт и мультимедиа</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="complectInterior"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.complectInterior}
                    />
                  </Form.Group>
                </Col>
                <Col xs="4" className="m-auto">
                  <Form.Group controlId="formCatImg">
                    <Form.Label>Климат и обогрев</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="complectClimate"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.complectClimate}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Tab>
            <Tab eventKey="images" title="Images">
              <Form.Row className="mt-3 justify-content-center">
                <Col xs="4" className="m-auto">
                  <Form.Group controlId="formTDImg">
                    <Form.Label>Фото для тест драйва(1)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Фото для тест драйва"
                      name="testdriveImgPath"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.testdriveImgPath}
                    />
                  </Form.Group>
                </Col>
                <Col xs="4" className="m-auto">
                  <Form.Group controlId="formCatImg">
                    <Form.Label>Фото для каталога(3)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="catalogImgsPath"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.catalogImgsPath}
                    />
                  </Form.Group>
                </Col>
                <Col xs="4" className="m-auto">
                  <Form.Group controlId="formCatImg">
                    <Form.Label>Фото для галереи</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="5"
                      name="galleryImgsPath"
                      onChange={changeHandler}
                      disabled={loading}
                      value={form.galleryImgsPath}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Tab>
          </Tabs>

          <Button
            className="my-3"
            variant="primary"
            onClick={isUpdate ? updateHandler : addHandler}
          >
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
};
