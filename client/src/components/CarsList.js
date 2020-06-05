import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const CarsList = (props) => {
  const history = useHistory();


  const handleChange = async (id) => {
    try {
      history.push(`/adm/update/${id}`);
    } catch (e) {}
  };

  if (!props.cars.length) {
    return <p>Машин пока нет</p>;
  }

  return (
    <Container fluid>
      <h1>Cars</h1>
      <ul className="car-specs">
        {props.cars.map((car, index) => {
          return (
            <li key={index}>
              <hr />
              <Row>
                <Col xs="4">
                  <img
                    src={car.testdriveImgPath}
                    className="mx-3 img-fluid"
                    alt="..."
                    //style={{ maxWidth: "150px" }}
                  />
                </Col>
                <Col xs="6">
                  <h5 className="mt-2">{car.model}</h5>
                  {car.description}
                  <p className="text-red">
                    Ссылка в каталог:{" "}
                    <span className="text-dark">{`https://evforyou.com//catalog/${car._id}`}</span>
                  </p>
                </Col>
                <Col xs="2" className="text-left">
                  <Link
                    to={`/adm/details/${car._id}`}
                    className="ml-5 mt-3 btn btn-outline-danger"
                  >
                    Просмотреть
                  </Link>
                  <Button
                    variant="warning"
                    className="ml-5 mt-3"
                    onClick={(event) => {
                      handleChange(car._id);
                    }}
                  >
                    Изменить
                  </Button>
                  <Button
                    variant="danger"
                    className="ml-5 mt-3"
                    onClick={() => {
                      props.delete(car._id);
                    }}
                  >
                    {" "}
                    Удалить
                  </Button>
                </Col>
              </Row>

              <hr />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
