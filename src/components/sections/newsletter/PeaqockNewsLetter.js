import { Alert, Button, Col, Input, Row } from "antd";
import { useState } from "react";
import arrow from "../../../assets/images/right_arrow_news.svg";
import "./newsletter_styles.scss";

export const PeaqockNewsLetter = () => {
  const [Zindex, setZindex] = useState("999");
  const [loading, setLoading] = useState(false);
  const [openAlert, setopenAlert] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [error, setOpenError] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setinputValue(e.target.value);
  };
  const handlePressEnter = (value) => console.log(value);
  const handleInputHover = () => {
    setZindex(999);
  };
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setopenAlert(true);
    }, 1500);
  };

  return (
    <Row justify="center" gutter={0} className="peaqock-newsletter">
      <Col
        className="peaqock-newsletter-left-col"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={10}
      >
        <div className="peaqock-newsletter-left">
          <span>{`newsletter`}</span>
        </div>
      </Col>

      <Col
        className="peaqock-newsletter-right-col"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={14}
      >
        <div className="peaqock-newsletter-right">
          <Input
            style={{
              border:
                error && inputValue.length === 0 ? "1px solid red" : "none",
            }}
            disabled={loading === true ? true : false}
            value={inputValue}
            onMouseOver={handleInputHover}
            className="peaqock-newsletter-right__input"
            placeholder=" &nbsp; Your email adress"
            allowClear
            // suffix={subscribeBtn}
            onChange={(e) => {
              handleChange(e);
            }}
            onPressEnter={handlePressEnter}
          />
          {!loading && openAlert === false && inputValue.length !== 0 ? (
            <Button
              className="peaqock-newsletter-right__btn"
              loading={loading}
              onClick={handleClick}
              style={{ zIndex: Zindex }}
            >
              <span>{`Subscribe`}</span>
              <img src={arrow} alt="" />
            </Button>
          ) : !loading && openAlert === false && inputValue.length === 0 ? (
            <Button
              onClick={() => {
                setOpenError(true);
              }}
              className="peaqock-newsletter-right__btn"
              loading={false}
              style={{ zIndex: Zindex }}
            >
              <span>{`Subscribe`}</span>
              <img src={arrow} alt="" />
            </Button>
          ) : loading && openAlert === true && inputValue.length !== 0 ? (
            <Button
              style={{ zIndex: Zindex }}
              className="peaqock-newsletter-right__btn success_sub"
            >
              <span>{`Subscribed !`}</span>
            </Button>
          ) : loading && openAlert === false && inputValue.length !== 0 ? (
            <Button
              className="peaqock-newsletter-right__btn"
              loading={true}
              style={{ zIndex: Zindex }}
            >
              <span>{`...`}</span>
            </Button>
          ) : null}
        </div>
      </Col>
      <>
        {openAlert && inputValue.length !== 0 && (
          <Alert
            style={{ marginTop: "15px" }}
            closable
            message="Subscribed !"
            type="success"
          />
        )}
      </>
      <>
        {error === true && inputValue.length === 0 && openAlert === false && (
          <div className="peaqock-newsletter__error-msg">
            <span>Please type an email address !</span>
          </div>
        )}
      </>
    </Row>
  );
};
