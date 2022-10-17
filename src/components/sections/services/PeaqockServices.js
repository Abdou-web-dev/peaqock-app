import { Col, Row } from "antd";
import { SectionsContent } from "../../content/SectionsContent";
// import ImgChart from "../../../assets/images/shape.svg";
import { useState } from "react";
import { PieChart } from "../../charts/PieChart";
import "./services_styles.scss";

export const PeaqockServices = (PeaqockServicesData) => {
  const [paragraph, setparagraph] = useState(PeaqockServicesData.p);
  const [myTitleLeft, setmyTitleLeft] = useState(
    PeaqockServicesData.title.left
  );
  const [myTitleRight, setmyTitleRight] = useState(
    PeaqockServicesData.title.right
  );

  return (
    <Row gutter={0} className="peaqock-services">
      <Col
        className="peaqock-services-left"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={10}
        offset={2}
        // order="2"
        // push
        // pull="1"
        // prefixCls="pref-test"
      >
        <SectionsContent
          {...PeaqockServicesData}
          {...{ paragraph, myTitleLeft, myTitleRight }}
        ></SectionsContent>
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
          <PieChart
            {...{
              setparagraph,
              paragraph,
              myTitleLeft,
              myTitleRight,
              setmyTitleLeft,
              setmyTitleRight,
            }}
          ></PieChart>
        </div>
      </Col>
    </Row>
  );
};
