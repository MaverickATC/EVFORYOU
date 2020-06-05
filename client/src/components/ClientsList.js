import React from "react";
import { Container, Button } from "react-bootstrap";

export const ClientsList = (props) => {
  if (!props.clients.length) {
    return <p>Клиентов пока нет</p>;
  }

  return (
    <Container>
      <ul className="car-specs">
        {props.clients.map((client, index) => {
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
                    props.delete(client._id);
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
