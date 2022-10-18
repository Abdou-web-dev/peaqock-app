import { BackTop, Button, Col, Dropdown, Menu, Row } from "antd";
import { useState } from "react";
import toTop from "../../../assets/images/backto-top.svg";
import call from "../../../assets/images/call.svg";
import findUs from "../../../assets/images/findUs.svg";
import location from "../../../assets/images/location.svg";
import msg from "../../../assets/images/msg.svg";
import supprtIcon from "../../../assets/images/supprt-icon.svg";
import { FooterHeader } from "./FooterHeader";
import { FooterInfo } from "./FooterInfo";
import { FooterLink } from "./FooterLink";
import { FooterSocialLinks } from "./FooterSocialLinks";

import "./footer_styles.scss";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        // label: `Link 1`,
        label: `Link 1`,
      },
      {
        key: "2",
        label: `Link 2`,
        disabled: false,
      },
      {
        key: "3",
        // label: `Link 3`,
        // icon : iconelem
        label: (
          <a target={"_self"} rel="noopener noreferrer" href="/about">
            About
          </a>
        ),
        disabled: false,
      },
    ]}
  />
);
export const PeaqockFooter = ({}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="peaqock-footer">
      <Row className="peaqock-footer-row0">
        <Col
          className="peaqock-footer-col"
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={4}
          offset={18}
        >
          <div className="peaqock-footer-row0-elem1">
            <BackTop
              // visibilityHeight={1500}
              className="peaqock-footer-elem1-backtotop"
              style={{ position: "sticky", scrollBehavior: "smooth" }}
            >
              <img src={toTop} alt="" />
            </BackTop>
          </div>
          <div className="peaqock-footer-row0-elem2">
            <Dropdown
              className="peaqock-footer-row0-elem2-dropdown"
              open={showDropdown}
              overlay={menu}
            >
              <Button
                className="peaqock-footer-elem2-btn"
                onClick={() => {
                  setShowDropdown(true);
                }}
                onMouseOver={() => setShowDropdown(false)}
                onBlur={() => setShowDropdown(false)}
                onKeyDown={() => {
                  setShowDropdown(false);
                }}
              >
                <img src={supprtIcon} alt="" />
                <span>{`Support`} </span>
              </Button>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row justify="center" gutter={0} className="peaqock-footer-row1">
        <Col
          className="peaqock-footer-left-col"
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={12}
        >
          <div className="peaqock-footer-left">
            <div className="peaqock-footer-left-elem1">
              <FooterHeader label={`Contact Us`}></FooterHeader>
            </div>
            <div className="peaqock-footer-left-elem2">
              <p className="peaqock-footer-left__p">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum lectus nunc, sagittis, eros.`}
              </p>
            </div>
            <div className="peaqock-footer-left-elem3">
              <FooterInfo
                icon={location}
                text={`Imm le Zenith II, Lotissement Attaoufik, Route de Nouacer, Sidi Maarouf, Casablanca, 20640, Maroc `}
              />
              <FooterInfo icon={msg} text={`nfo@peaqock.com`} />
              <FooterInfo icon={call} text={`+20-2-24564100/1/2/3`} />
              <FooterInfo icon={call} text={`+20-2-24515201/2`} />
            </div>
          </div>
        </Col>

        <Col
          className="peaqock-footer-middle-col"
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={4}
        >
          <div className="peaqock-footer-middle">
            <div className="peaqock-footer-middle-elem1">
              <FooterHeader label={`About Peaqock`}></FooterHeader>
            </div>
            <div className="peaqock-footer-middle-elem2">
              <FooterLink linkLabel={`Privacy Statement`} link={``} />
              <FooterLink linkLabel={`Term and condition`} link={``} />
              <FooterLink linkLabel={`Accessibility`} link={``} />
              <FooterLink linkLabel={`F.A.Q.`} link={``} />
            </div>
            <div className="peaqock-footer-middle-elem3">
              <FooterSocialLinks />
            </div>
          </div>
        </Col>

        <Col
          className="peaqock-footer-right-col"
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={8}
        >
          <div className="peaqock-footer-right">
            <FooterHeader label={`Locations`}></FooterHeader>
            <div className="peaqock-footer-right__img">
              <img src={findUs} alt="" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="peaqock-footer-row2">
        <Col
          className="peaqock-footer-row2-col1"
          xs={2}
          sm={4}
          md={6}
          lg={8}
          xl={24}
        >
          <div className="peaqock-footer-row2-col1-elem">
            <span>{`Copyright © 2022 . All Rights Reserved.`}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};
