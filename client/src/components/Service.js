import "./Service.css";
import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import pic1 from "../assets/service-main.png";
import ServiceModalForm from "./ServiceModalForm";

export default class Service extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false };
  }

  render() {
    return (
      <div id="showService" className="sv-wrapper gray-bg">
        <Container className="text-center">
          <h2 className="d-u-td pt-5">
            СЕРВИСНОЕ <span className="t-hl-bf">ОБСЛУЖИВАНИЕ</span>
          </h2>
          <div className="card mb-3 mt-2 mt-md-5 w-auto align-items-center b-n bg-transparent">
            <div className="row no-gutters justify-content-around">
              <div className="col-sm-8 col-md-6">
                <div className="card-body text-left">
                  <p className="text-center text-md-left font_pfespl">
                    Мы решаем любые вопросы связанные с обслуживанием
                    электромобилей!
                  </p>
                  <p className="text-center text-md-left font_pfespl">
                    Формат обслуживания и ремонта существенно отличается от
                    процедур с обычными автомобилями.
                  </p>
                  <p className="text-center text-md-left font_pfespl">
                    Концепция ремонта такого типа авто предусматривает упрощение
                    многих процедур. Зачастую эти операции специалисты могут
                    сделать дистанционно.
                  </p>
                  <p className="text-center text-md-left font_pfespl">
                    Так же Вы можете заказать необходимые запчасти для Вашего
                    электромобиля у нас
                  </p>
                  <Button variant="danger" className="card-button mt-2 mt-md-0 mb-2 mb-md-0" onClick={()=>this.setState({modalShow : true})}>
                    Записаться на сервис
                  </Button>
                  <ServiceModalForm
                    show={this.state.modalShow}
                    onHide={()=>this.setState({modalShow : false})}
                  />
                </div>
              </div>
              <div className="col-sm-4 col-md-6">
                <img src={pic1} className="card-img" alt="Car" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
