import { Button } from "antd";
import "./member_styles.scss";

let bgBasic = `linear-gradient(103.12deg, #127682 -9.88%, #20C7AB 99.8%)`;
let bgGold = `linear-gradient(176.51deg, #F7AE28 -3.59%, #FFDE82 132.6%)`;
let bgPlatinum = `linear-gradient(103.12deg, #5339DB -9.88%, #7B61FF 99.8%)`;
let bgStandard = `linear-gradient(103.12deg, #388CBA -9.88%, #4BB1E9 99.8%)`;

export function PeaqockMemberFooterElem({ plan }) {
  const className = "peaqock-member-footer-elem";

  return (
    <div className={`${className}`}>
      <div className={`${className}` + "-left"}>
        <img src={plan?.icon} alt="" />
      </div>

      <div className={`${className}` + "-center"}>
        <div className={`${className}` + "-center-label"}>
          <span>{plan?.label}</span>
        </div>
        <div className={`${className}` + "-center-text"}>
          <p>{plan?.text}</p>
        </div>
      </div>

      <div className={`${className}` + "-right"}>
        <Button
          style={{
            background:
              plan?.label === `Basic`
                ? bgBasic
                : plan?.label === `Standard`
                ? bgStandard
                : plan?.label === `Gold`
                ? bgGold
                : plan?.label === `Platinum`
                ? bgPlatinum
                : "",
          }}
          className={`${className}` + "-right__button"}
        >
          <span className="btn_span1">{plan?.btn?.label}</span>
          <span className="btn_span2">{plan?.btn?.price}</span>
        </Button>
      </div>
    </div>
  );
}
