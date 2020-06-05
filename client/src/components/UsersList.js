import React from "react";
import { Container, Button } from "react-bootstrap";
import { useHttp } from "../hooks/http.hook";
import { useHistory } from "react-router-dom";

export const UsersList = ({ users }) => {
  const { request } = useHttp();
  const history = useHistory();

  const handleDelete = async (id) => {
    try {
      await request(`/api/auth/del/${id}`, "POST", null, {});
      return history.push(`/adm/users`);
    } catch (e) {}
  };

  return (
    <Container>
      <ul className="car-specs">
        {users.map((user, index) => {
          return (
            <li key={index}>
              <hr />
              <div className="d-flex my-5">
                  <div>
                <p>{user.name}</p>
                <>
                  {user.admin && (
                    <p className="text-red">
                      <strong>Admin</strong>
                    </p>
                  )}
                </>
                <p>{new Date(user.creationDate).toLocaleDateString()}</p>
                </div>
                <div>
                <Button
                  variant="danger"
                  className="ml-5 mt-3"
                  onClick={() => {
                    handleDelete(user._id);
                  }}
                >
                  {" "}
                  Удалить
                </Button>
                </div>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
