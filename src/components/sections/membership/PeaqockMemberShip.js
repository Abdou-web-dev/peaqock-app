import { Col, Row } from "antd";
import "./member_styles.scss";
import { PeaqockMemberFooter } from "./PeaqockMemberFooter";
import { PeaqockMemberHeader } from "./PeaqockMemberHeader";
import { PeaqockMemberFooterElem } from "./PeaqockMermberFooterElem";

export const PeaqockMemberShip = (PeaqockMemberData) => {
  const paragraph = PeaqockMemberData.p;
  const basicPlan = PeaqockMemberData.basicPlan;
  const standardPlan = PeaqockMemberData.standardPlan;
  const goldPlan = PeaqockMemberData.goldPlan;
  const platinumPlan = PeaqockMemberData.platinumPlan;

  return (
    <Row justify="center" gutter={0} className="peaqock-member">
      <Col
        className="peaqock-member-col-header"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={24}
      >
        <div className="peaqock-member-header-elem">
          <PeaqockMemberHeader {...{ paragraph }}></PeaqockMemberHeader>
        </div>
      </Col>

      <Col
        className="peaqock-member-col-footer"
        xs={2}
        sm={4}
        md={6}
        lg={8}
        xl={23}
        offset={1}
      >
        <div className="peaqock-member-footer-elem">
          <PeaqockMemberFooter>
            <Row className="peaqock-member-footer-elem-row">
              <Col
                className="peaqock-member-footer-elem-col1"
                xs={2}
                sm={4}
                md={6}
                lg={8}
                xl={12}
                offset={0}
              >
                <PeaqockMemberFooterElem plan={basicPlan} />
              </Col>
              <Col
                className="peaqock-member-footer-elem-col2"
                xs={2}
                sm={4}
                md={6}
                lg={8}
                xl={12}
                offset={0}
              >
                <PeaqockMemberFooterElem plan={standardPlan} />
              </Col>
              <Col
                className="peaqock-member-footer-elem-col3"
                xs={2}
                sm={4}
                md={6}
                lg={8}
                xl={12}
                offset={0}
              >
                <PeaqockMemberFooterElem plan={goldPlan} />
              </Col>
              <Col
                className="peaqock-member-footer-elem-col4"
                xs={2}
                sm={4}
                md={6}
                lg={8}
                xl={12}
                offset={0}
              >
                <PeaqockMemberFooterElem plan={platinumPlan} />
              </Col>
            </Row>
          </PeaqockMemberFooter>
        </div>
      </Col>
    </Row>
  );
};
