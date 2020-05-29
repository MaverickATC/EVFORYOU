import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { useHistory } from "react-router-dom";

export const ClientsList = ({ clients }) => {
  const { request } = useHttp();
  const history = useHistory();

  const handleDelete = async (id) => {
    try {
      await request(`/api/client/del/${id}`, "POST", null, {});
      return history.push(`/adm/clients`);
    } catch (e) {}
  };

  if (!clients.length) {
    return <p>Клиентов пока нет</p>;
  }

  return (
    <Container>
      <ul className="car-specs">
        {clients.map((client, index) => {
          return (
            <li key={index}>
              <hr />
              <div className="media my-5 d-flex">
                
                <div className="">
                  <h5 className="mt-2">{client.fullName}</h5>
                  <p>{client.phone}</p>
                  <p>{client.email}</p>
                  <p>{client.remark}</p>
                </div>
                
                <Button
                  variant="danger"
                  className="ml-5 mt-3"
                  onClick={() => {
                    handleDelete(client._id);
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
