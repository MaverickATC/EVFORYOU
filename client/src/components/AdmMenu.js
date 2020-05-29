import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const AdmMenu = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/adm");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <span className="navbar-brand">
        Admin panel
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/adm/cars">
              Cars <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/adm/add">
              Add
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link ml-5" href="/adm" onClick={logoutHandler}>
              LogOut
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
