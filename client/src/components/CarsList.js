import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { useHistory } from "react-router-dom";

export const CarsList = ({ cars }) => {
  const { request } = useHttp();
  const history = useHistory();

  const handleDelete = async (id) => {
    try {
      await request(`/api/car/del/${id}`, "POST", null, {});
      return history.push(`/adm/cars`);
    } catch (e) {}
  };

  if (!cars.length) {
    return <p>Машин пока нет</p>;
  }

  return (
    <Container>
      <ul className="car-specs">
        {cars.map((car, index) => {
          return (
            <li key={index}>
              <hr />
              <div className="media my-5 d-flex">
                <img
                  src={car.testdriveImgPath}
                  className="mx-3"
                  alt="..."
                  style={{ maxWidth: "150px" }}
                />
                <div className="">
                  <h5 className="mt-2">{car.model}</h5>
                  {car.description}
                </div>
                <Link to={`/adm/details/${car._id}`} className="ml-5 mt-3">
                  Просмотреть
                </Link>
                <Button
                  variant="danger"
                  className="ml-5 mt-3"
                  onClick={() => {
                    handleDelete(car._id);
                  }}
                >
                  {" "}
                  Удалить
                </Button>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
