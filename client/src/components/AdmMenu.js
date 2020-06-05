import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

export const AdmMenu = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
    history.push("/adm");
  };
  
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="">Admin panel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/adm/cars">Cars</Nav.Link>
          <Nav.Link href="/adm/clients">Clients</Nav.Link>
          <NavDropdown title="Requests" id="basic-nav-dropdown">
            <NavDropdown.Item href="/adm/service">Service</NavDropdown.Item>
            <NavDropdown.Item href="/adm/questions">Questions</NavDropdown.Item>
            <NavDropdown.Item href="/adm/testdrive">TestDrive</NavDropdown.Item>
            <NavDropdown.Item href="/adm/buy">Buy</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Add" id="basic-nav-dropdown">
            <NavDropdown.Item href="/adm/add">Add car</NavDropdown.Item>
            <NavDropdown.Item href="/adm/client/add">
              Add client
            </NavDropdown.Item>
          </NavDropdown>
          <>
            {auth.isAdmin && (
              <NavDropdown title="Users" id="basic-nav-dropdown">
                <NavDropdown.Item href="/adm/add/user">Add user</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/adm/users">Users list</NavDropdown.Item>
              </NavDropdown>
            )}
          </>
          <Nav.Link href="/" className="ml-5">
            Home page
          </Nav.Link>
          <Nav.Link href="/adm" onClick={logoutHandler}>
            LogOut
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
