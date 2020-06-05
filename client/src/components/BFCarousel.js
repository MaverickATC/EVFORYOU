import React, { Component } from "react";
import Slider from "react-slick";
import car1 from "../assets/bfs-1.png";
import car2 from "../assets/bfs-2.png";
import car3 from "../assets/bfs-3.png";
import car4 from "../assets/bfs-4.png";
import car5 from "../assets/bfs-5.png";
import car6 from "../assets/bfs-6.png";
import { Row, Col } from "react-bootstrap";

export default class BFCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 9000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    const slides = [
      {
        id: 1,
        img: car1,
        header: "Мы лучший оператор на рынке электромобилей",
        spans: [
          "Наша компания поможет Вам с покупкой, доставкой, уплатой таможенных платежей и постановкой на учет.",
          "Наши специалисты проконсультируют и помогут подобрать модель и модификацию для ваших целей и нужд.",
          "Мы осуществляем продажу электромобилей в наличии и под заказ. Работаем как с новыми машинами, так и с б/у.",
        ],
      },
      {
        id: 2,
        img: car2,
        header: "Подбор и доставка запчастей из США",
        spans: [
          "Техническое оснащение машин в Америке обойдется намного дешевле, нежели в Украине, тогда как многие запчасти к штатовским автомобилям делаются гораздо более качественными и имеют гораздо больший срок эксплуатации.",
          "Доставляем автозапчасти из США большинства известных брендов.",
        ],
      },
      {
        id: 3,
        img: car3,
        header: "электромобили имеют топ-комплектацию",
        spans: [
          "Впечатляющая комплектация таких автомобилей часто выступает решающим фактором при покупке, ведь производители всегда стараются максимально укомплектовать свою продукцию.",
          "Авто в большинстве случаев будет наделено гидроусилителем руля, кондиционером, сигнализацией, полным электропакетом, кожаным салоном и литыми дисками.",
        ],
      },
      {
        id: 4,
        img: car4,
        header: "Мы предлагаем Лучшее за теже деньги!",
        spans: [
          "Популярность электромобилей из Америки ежегодно растет. Украинские водители могут без дополнительных трат найти и привезти хороший лот прямиком со страхового аукциона.",
          "До конца 2022 года ввезти автомобили с электромоторами можно без уплаты НДС и пошлин. Так что у покупателей есть уникальная возможность экономить семейный бюджет и приобрести достойную машину на каждый день.",
        ],
      },
      {
        id: 5,
        img: car5,
        header: "Нами накоплен огромный опыт!",
        spans: [
          "Мы сами эксплуатируем электромобили каждый день на протяжении уже более четырех лет. За это время нами накоплен бесценный опыт эксплуатации и обслуживания электромобилей в условиях Украины.",
          'Мы поможем вам на всех стадиях: выбор автомобиля, покупка, доставка, постановка на учет, "зарядка электромобиля", ежедневная эксплуатация и обслуживание.',
        ],
      },
      {
        id: 6,
        img: car6,
        header: "Мы знаем об электромобилях - все!",
        spans: [
          "Отслеживаем все новости по данной тематике.",
          "Посещаем презентации новых моделей, семинары и сервисные центры.",
          "Находимся в контакте, общаемся, обмениваемся опытом с зарубежными клубами любителей электромобилей и рядовыми владельцами по всему миру.",
        ],
      },
    ];

    return (
      <div className="mt-5 pb-5">
        <Slider {...settings} className="">
          <div className="container-fluid">
            <Row className="my-1">
              <Col className="col-12 col-md-6 bg-white p-0">
                <div className="bf-text">
                  <h5 className="text-uppercase py-4 text-60">
                    {slides[0].header}
                  </h5>
                  <ul className="font_pfespl">
                    {slides[0].spans.map((span,index) => (
                      <li
                        key={index}
                        className="mb-3 text-left text-red"
                      >
                        <span className="text-75">{span}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="red"></div>
              </Col>
              <Col className="col-12 col-md-6 bg-white p-0">
                <img src={slides[0].img} alt="" className="pic img-fluid" />
              </Col>
            </Row>
          </div>
          <div className="container-fluid">
            <Row className="my-1">
              <Col className="col-12 col-md-6 bg-white p-0">
                <div className="bf-text">
                  <h5 className="text-uppercase py-4 text-60">
                    {slides[1].header}
                  </h5>
                  <ul className="font_pfespl">
                    {slides[1].spans.map((span,index) => (
                      <li
                        key={index}
                        className="mb-3 text-left text-red"
                      >
                        <span className="text-75">{span}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="red"></div>
              </Col>
              <Col className="col-12 col-md-6 bg-white p-0">
                <img src={slides[1].img} alt="" className="pic img-fluid" />
              </Col>
            </Row>
          </div>
          <div className="container-fluid">
            <Row className="my-1">
              <Col className="col-12 col-md-6 bg-white p-0">
                <div className="bf-text">
                  <h5 className="text-uppercase py-4 text-60">
                    {slides[2].header}
                  </h5>
                  <ul className="font_pfespl">
                    {slides[2].spans.map((span,index) => (
                      <li
                        key={index}
                        className="mb-3 text-left text-red"
                      >
                        <span className="text-75">{span}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="red"></div>
              </Col>
              <Col className="col-12 col-md-6 bg-white p-0">
                <img src={slides[2].img} alt="" className="pic img-fluid" />
              </Col>
            </Row>
          </div>
          <div className="container-fluid">
            <Row className="my-1">
              <Col className="col-12 col-md-6 bg-white p-0">
                <div className="bf-text">
                  <h5 className="text-uppercase py-4 text-60">
                    {slides[3].header}
                  </h5>
                  <ul className="font_pfespl">
                    {slides[3].spans.map((span,index) => (
                      <li
                        key={index}
                        className="mb-3 text-left text-red"
                      >
                        <span className="text-75">{span}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="red"></div>
              </Col>
              <Col className="col-12 col-md-6 bg-white p-0">
                <img src={slides[3].img} alt="" className="pic img-fluid" />
              </Col>
            </Row>
          </div>
          <div className="container-fluid">
            <Row className="my-1">
              <Col className="col-12 col-md-6 bg-white p-0">
                <div className="bf-text">
                  <h5 className="text-uppercase py-4 text-60">
                    {slides[4].header}
                  </h5>
                  <ul className="font_pfespl">
                    {slides[4].spans.map((span,index) => (
                      <li
                        key={index}
                        className="mb-3 text-left text-red"
                      >
                        <span className="text-75">{span}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="red"></div>
              </Col>
              <Col className="col-12 col-md-6 bg-white p-0">
                <img src={slides[4].img} alt="" className="pic img-fluid" />
              </Col>
            </Row>
          </div>
          <div className="container-fluid">
            <Row className="my-1">
              <Col className="col-12 col-md-6 bg-white p-0">
                <div className="bf-text">
                  <h5 className="text-uppercase py-4 text-60">
                    {slides[5].header}
                  </h5>
                  <ul className="font_pfespl">
                    {slides[5].spans.map((span, index) => (
                      <li
                        key={index}
                        className="mb-3 text-left text-red"
                      >
                        <span className="text-75">{span}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="red"></div>
              </Col>
              <Col className="col-12 col-md-6 bg-white p-0">
                <img src={slides[5].img} alt="" className="pic img-fluid" />
              </Col>
            </Row>
          </div>
        </Slider>
      </div>
    );
  }
}
