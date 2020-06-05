import React, { Component } from "react";
import "./HomePage.css";
import Menu from "../components/Menu";
import { Container, Button } from "react-bootstrap";
import { TestDrive } from "../components/TestDrive";
import Benefits from "../components/Benefits";
//import ActualIncomes from "../components/ActualIncomes";
import Service from "../components/Service";
import { Questions } from "../components/Questions";

export default class HomePage extends Component {
  render() {
    const handleClick = () =>
      document.getElementById("toShow").scrollIntoView(true);
    return (
      <div className="main">
        <div className="main-wrapper">
          <Container className="text-center align-items-center f-h">
            <Menu page="home" />
            <div className="d-none d-md-block">
              <h1 className="text-h mb-3 font_pfespb">
                ЗА РУЛЕМ <span className="t-hl">БУДУЩЕГО</span>
              </h1>
              <p className="text pb-md-4">
                Новые автомобили - Новое мышление - Новые возможности
              </p>
            </div>
            <div className="d-block d-md-none">
              <h1 className="text-h mt-4">ЗА РУЛЕМ</h1>
              <h1 className="t-hl text-h mb-4">БУДУЩЕГО</h1>
              <span className="text mt-4 mt-sm-5 displ-bl">
                Новые автомобили
              </span>
              <br />
              <span className="text displ-bl line-h">- Новое мышление -</span>
              <br />
              <span className="text displ-bl">Новые возможности</span>
              <br />
            </div>
            <Button
              className="mt-3 mt-sm-5 m-btn"
              variant="outline-danger"
              onClick={handleClick}
            >
              Хочу узнать подробности
            </Button>
          </Container>
        </div>
        <TestDrive />
        <Benefits />

        {/* для аукциона*/}
        {/* <ActualIncomes /> */}

        {/*замена для аукциона */}
        {/* <Container className="text-center">
          <h2 className="d-u-td pt-5">
            КАРТИНКА <span className="t-hl-bf ">TESLA</span>
          </h2>
          <img src="" alt="Tesla picture" />
          <p className="font_pfespl">Some text</p>
        </Container> */}

        <Service />
        <Questions />
      </div>
    );
  }
}
