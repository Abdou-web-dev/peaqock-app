import { Button } from "antd";
import actions from "../../../../assets/images/actions.svg";
import "../user_styles.scss";

export function UserActions({ index }) {
  return (
    <div className="user-component-actions">
      {index === 0 && (
        <span className="span_1" style={{ marginBottom: "40px" }}>
          Actions
        </span>
      )}
      <Button
        style={{
          background: "none",
          border: "none",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <img src={actions} alt="" />
      </Button>
    </div>
  );
}
