import { Col, Row } from "antd";
import bgImg1 from "../../../assets/images/bgImg1.PNG";
import bgImg2 from "../../../assets/images/bgImg2.PNG";
import bgImg3 from "../../../assets/images/bgImg3.PNG";
import bgImg4 from "../../../assets/images/bgImg4.PNG";
import bgImg5 from "../../../assets/images/bgImg5.PNG";
import bgImg6 from "../../../assets/images/bgImg6.PNG";
import { SectionsContent } from "../../content/SectionsContent";
import "./about_styles.scss";

export const PeaqockAbout = (PeaqockAboutData) => {
  return (
    <Row gutter={0} className="peaqock-about">
      <Col
        className="peaqock-about-col-left"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={10}
      >
        <div className="peaqock-about-left">
          <SectionsContent {...PeaqockAboutData}></SectionsContent>
        </div>
      </Col>

      <Col
        className="peaqock-about-col-right"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={12}
        offset={2}
      >
        <div className="peaqock-about-right">
          <img className="bgImg1" src={bgImg1} alt="" />
          <img className="bgImg2" src={bgImg2} alt="" />
          <img className="bgImg3" src={bgImg3} alt="" />
          <img className="bgImg4" src={bgImg4} alt="" />
          <img className="bgImg5" src={bgImg5} alt="" />
          <img className="bgImg6" src={bgImg6} alt="" />
        </div>
      </Col>
    </Row>
  );
};
