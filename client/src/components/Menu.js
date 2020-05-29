import React, { Component } from "react";
import logo from "../assets/logo.png";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "./Menu.css";

export default class Menu extends Component {
  render() {
    // document.querySelectorAll(".menu-item").forEach((element) => {
    //   element.classList.remove("active");
    // });
    // document.getElementById(this.props.page).classList.add("active");
    return (
      <>
        <Navbar collapseOnSelect bg="transparent" expand="md" className="p-5 font_pfespm">
          <Container className="justify-content-md-around">
            <Row className="">
              <Col xs="12" sm="12" md="4" lg="4" >
                <Navbar.Brand href="">
                  <img
                    src={logo}
                    height="50"
                    width="180"
                    className="d-inline-block allign-bottom ml-1"
                    alt="Logo"
                  />
                  <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    className="ml-5"
                  />
                </Navbar.Brand>
              </Col>
              <Col xs="12" sm="12" md="8" lg="4" className="menu-dropped justify-content-end">
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link
                      href="/"
                      className="mr-2 mr-lg-3 mr-xl-4 pt-sm-4 pt-md-0"
                      id="home"
                    >
                      <span className="menu-item">Главная</span>
                    </Nav.Link>
                    <Nav.Link
                      href="/catalog"
                      className="mr-2 mr-lg-3 mr-xl-4 pt-sm-4 pt-md-0"
                      id="catalog"
                    >
                      <span className="menu-item">Наличие</span>
                    </Nav.Link>
                    <>
                      {this.props.page === "home" && (
                        <Nav.Link
                          href="#showService"
                          className="mr-2 mr-lg-3 mr-xl-4 pt-sm-4 pt-md-0"
                        >
                          <span className="menu-item">Сервис</span>
                        </Nav.Link>
                      )}
                    </>
                    <Nav.Link
                      href="/contacts"
                      className="pt-sm-4 pt-md-0"
                      id="contacts"
                    >
                      <span className="menu-item">Контакты</span>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </>
    );
  }
}
