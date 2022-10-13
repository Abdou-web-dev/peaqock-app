import { Button, Col, Row } from "antd";
import { PieChart } from "../../charts/PieChart";
// import ImgChart from "../../../assets/images/shape.svg";
import "./services_styles.scss";

export const PeaqockServices = () => {
  return (
    <Row className="peaqock-services">
      <Col
        className="peaqock-services-left"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={10}
        offset={2}
      >
        <div>
          <h1>our services</h1>
          <h2>Trade Simple</h2>
          <div style={{ width: `560px` }}>
            <p>
              Discover a world of trade opportunities in one place with detailed
              information about imports, market dynamics, tariffs, regulatory
              requirements, potential buyers and more.
            </p>
          </div>
          <Button>Discover Now</Button>
        </div>
      </Col>

      <Col
        className="peaqock-services-right"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={10}
        offset={2}
      >
        <div className="peaqock-services-chart">
          <PieChart></PieChart>
        </div>
      </Col>
    </Row>
  );
};
