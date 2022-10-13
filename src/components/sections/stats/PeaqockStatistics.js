import { Col, Row } from "antd";
import { StatisticComponent } from "./StatisticComponent";
import "./stats_styles.scss";

export const PeaqockStatistics = ({ statsData }) => {
  return (
    <Row>
      {statsData.map &&
        statsData?.map((elem, index) => (
          <Col
            offset={
              index === 0
                ? 3
                : index === 1
                ? 2
                : index === 2
                ? 1
                : index === 3
                ? null
                : 1
            }
            span={4}
            key={index}
            style={{ marginLeft: index === 3 ? `3%` : "" }}
            //this is as if offset = 0.5 , for the last item
          >
            <StatisticComponent elem={elem} />
          </Col>
        ))}
    </Row>
  );
};
