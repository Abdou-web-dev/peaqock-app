import { Button, Col, Row } from "antd";
import "antd/dist/antd.css"; //this import is essential in antd
import React, { useState } from "react";
import playIcon from "../../../assets/images/playIcon.svg";
import { HomeCarousel } from "./HomeCarousel";
import "./intro_styles.scss";

export const HomeIntro = () => {
  const [carouselText, setcarouselText] = useState(`Manage operations`);
  const [CarouselBtnText, setCarouselBtnText] = useState(`LEARN MORE`);

  return (
    <Row className="home-intro" style={{ display: "flex" }}>
      <Col
        className="home-intro-left-content"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={10}
      >
        <div className="home-left-content-header">
          <span className="home-left-content-header__text">{carouselText}</span>
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
      <Col
        className="home-intro-right-content"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={14}
      >
        <div>
          <HomeCarousel
            {...{ setcarouselText, setCarouselBtnText }}
          ></HomeCarousel>
        </div>
      </Col>
    </Row>
  );
};
