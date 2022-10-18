import { Alert, Button, Col, Input, Row } from "antd";
import { useState } from "react";
import exclamation from "../../../assets/images/exclamation-icon.svg";
import arrow from "../../../assets/images/right_arrow_news.svg";
import "./newsletter_styles.scss";

export const PeaqockNewsLetter = () => {
  const [Zindex, setZindex] = useState("999");
  const [loading, setLoading] = useState(false);
  const [openAlert, setopenAlert] = useState(false);
  const [inputValue, setinputValue] = useState("");
  const [error, setOpenError] = useState(false);
  const [validError, setvalidError] = useState(false);
  const [validErrorIcon, setvalidErrorIcon] = useState(false);

  function isValidEmail(emailAddress) {
    return /\S+@\S+\.\S+/.test(emailAddress);
  }
  const handleChange = (e) => {
    if (!isValidEmail(inputValue)) {
      setvalidError(true);
      console.log("invalid");
    } else {
      setvalidError(false);
      console.log("valid");
    }
    setinputValue(e.target.value);
  };
  const handlePressEnter = () => {
    handleClick();
  };
  const handleInputHover = () => {
    setZindex(999);
  };
  const handleClick = () => {
    if (!isValidEmail(inputValue)) {
      setvalidError(false);
      setvalidErrorIcon(true);
    } else {
      setLoading(true);
      setTimeout(() => {
        setopenAlert(true);
      }, 1500);
    }
  };
  let errors = validErrorIcon || error || validError;
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
              border: openAlert
                ? "1px solid lightgray"
                : isValidEmail(inputValue) &&
                  (inputValue?.length !== 0 || !errors)
                ? "2px solid green"
                : inputValue?.length !== 0 || errors
                ? "2px solid red"
                : "none",
              boxShadow: openAlert
                ? "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
                : "",
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
            onPressEnter={(e) => {
              handlePressEnter(e);
            }}
          />
          {!loading && openAlert === false && inputValue?.length !== 0 ? (
            <Button
              className="peaqock-newsletter-right__btn"
              loading={loading}
              onClick={handleClick}
              style={{ zIndex: Zindex }}
            >
              <span>{`Subscribe`}</span>
              <img src={arrow} alt="" />
            </Button>
          ) : !loading && openAlert === false && inputValue?.length === 0 ? (
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
          ) : loading && openAlert === true && inputValue?.length !== 0 ? (
            <Button
              style={{ zIndex: Zindex }}
              className="peaqock-newsletter-right__btn success_sub"
            >
              <span>{`Subscribed !`}</span>
            </Button>
          ) : loading && openAlert === false && inputValue?.length !== 0 ? (
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
        {openAlert && inputValue?.length !== 0 && (
          <Alert
            style={{ marginTop: "15px" }}
            closable
            message="Subscribed !"
            type="success"
          />
        )}
      </>
      <>
        {error === true && inputValue?.length === 0 && openAlert === false && (
          <div className="peaqock-newsletter__error-msg">
            <span>Please type an email address !</span>
          </div>
        )}
        {validError && inputValue?.length !== 0 && (
          <div className="peaqock-newsletter__error-valid-msg">
            <span>Please type a valid email address !</span>
          </div>
        )}
        {validErrorIcon &&
          !validError &&
          !openAlert &&
          !loading &&
          inputValue?.length !== 0 &&
          !isValidEmail(inputValue) && (
            <div className="peaqock-newsletter__error-valid-msg-with-icon">
              <img src={exclamation} alt="error occured" />
              <span>Please type a valid email address </span>
            </div>
          )}
      </>
    </Row>
  );
};
