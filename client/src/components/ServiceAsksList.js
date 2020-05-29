import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { useHistory } from "react-router-dom";

export const ServiceAsksList = ({ asks }) => {
  const { request } = useHttp();
  const history = useHistory();

  const handleDelete = async (id) => {
    try {
      await request(`/api/client/service/del/${id}`, "POST", null, {});
      return history.push(`/adm/service`);
    } catch (e) {}
  };

  if (!asks.length) {
    return <p>Запросов пока нет</p>;
  }

  return (
    <Container>
      <ul className="car-specs">
        {asks.map((ask, index) => {
          return (
            <li key={index}>
              <hr />
              <div className="media my-5 d-flex">
                <div className="">
                  <h5 className="mt-2">{ask.fullName}</h5>
                  <p>{ask.phone}</p>
                  <p>{ask.email}</p>
                  <p>{ask.time}</p>
                  <p>{ask.question}</p>
                </div>

                <Button
                  variant="danger"
                  className="ml-5 mt-3"
                  onClick={() => {
                    handleDelete(ask._id);
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
