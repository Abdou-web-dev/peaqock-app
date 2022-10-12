import { Button, Carousel, Col, Row } from "antd";
import "antd/dist/antd.css"; //this import is essential in antd
import React, { useState } from "react";
import playIcon from "../assets/images/playIcon.svg";
import "./pages_styles.scss";

const Home = () => {
  const [carouselText, setcarouselText] = useState(`Manage operations`);
  const [CarouselBtnText, setCarouselBtnText] = useState(`LEARN MORE`);
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Row className="home" style={{ display: "flex" }}>
      <Col className="home-left-content" xs={2} sm={4} md={6} lg={8} xl={12}>
        <div className="home-left-content-header">
          <span className="home-left-content-header__text">
            {carouselText === `Manage operations` ? (
              <>
                <span>Manage </span> <br />
                <span>operations</span>
              </>
            ) : (
              carouselText
            )}
          </span>
        </div>

        <div className="home-left-content-footer">
          <Button className="home-left-content-footer__btn">
            <span className="home-left-content-footer__text">
              {CarouselBtnText}
            </span>
          </Button>
          <img
            className="home-left-content-footer__img"
            src={playIcon}
            alt=""
          />
        </div>
      </Col>
      <Col className="home-right-content" xs={2} sm={4} md={6} lg={8} xl={12}>
        {/* <HomeCarousel
          setcarouselText={setcarouselText}
          setCarouselBtnText={setCarouselBtnText}
        ></HomeCarousel> */}
        <div>
          <Carousel
            currentSlide={null}
            afterChange={(currentSlide, e) => {
              if (currentSlide === 0) {
                setcarouselText("Manage operations");
              } else if (currentSlide === 1) {
                setcarouselText("test");
              } else if (currentSlide === 2) {
                setcarouselText("test2222");
              } else if (currentSlide === 3) {
                setcarouselText("djdjdjd");
              } else if (currentSlide === 4) {
                setcarouselText("aaa");
              }
            }}
          >
            <div>
              <h3 style={contentStyle}>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, fugit!
                </span>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
          <div>
            <Button></Button>
            {/* //next and prev btns here */}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
