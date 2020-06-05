import React from "react";
import { Container, Button } from "react-bootstrap";

export const QuestionsList = (props) => {

  if (!props.asks.length) {
    return <p>Запросов пока нет</p>;
  }

  return (
    <Container>
      <ul className="car-specs">
        {props.asks.map((ask, index) => {
          return (
            <li key={index}>
              <hr />
              <div className="media my-5 d-flex">
                <div className="">
                  <h5 className="mt-2">{ask.fullName}</h5>
                  <p>{ask.phone}</p>
                  <p>{ask.email}</p>
                  <p>{ask.question}</p>
                </div>

                <Button
                  variant="danger"
                  className="ml-5 mt-3"
                  onClick={() => {
                    props.delete(ask._id);
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
