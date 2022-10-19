import "../user_styles.scss";

export function UserRegDate({ registrationDate, index, filteredResults }) {
  return (
    <div
      className={
        !filteredResults ? "user-component-reg-date" : "element-filtered-gray"
      }
    >
      {index === 0 && (
        <span
          className="span_1"
          style={{ marginBottom: "40px" }}
        >{`Registration Date`}</span>
      )}
      <span>{registrationDate}</span>
    </div>
  );
}
