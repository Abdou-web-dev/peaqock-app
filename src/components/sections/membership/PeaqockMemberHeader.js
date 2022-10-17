import { Button } from "antd";
import RightArrow from "../../../assets/images/rightArrow.svg";
import "./member_styles.scss";

export function PeaqockMemberHeader({ paragraph }) {
  return (
    <div className="peaqock-member-header">
      <div className="peaqock-member-header__h3">
        <h3>{`membership`}</h3>
      </div>

      <div className="peaqock-member-header__h1">
        <h1>{`PEAQOCK Membership Packages`}</h1>
      </div>

      <div className="peaqock-member-header__p">
        <p>{paragraph}</p>
      </div>

      <div className="peaqock-member-header-footer">
        <Button className="peaqock-member-header-footer__button">
          <span className="peaqock-member-footer__button-text">{`PACKAGES' DETAILS`}</span>
          <img
            className="peaqock-member-footer__button-img"
            src={RightArrow}
            alt=""
          />
        </Button>
      </div>
    </div>
  );
}
