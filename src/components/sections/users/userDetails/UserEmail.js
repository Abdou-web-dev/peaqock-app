import "../user_styles.scss";

export function UserEmail({ email, index, filteredResults }) {
  return (
    <div
      className={
        !filteredResults ? "user-component-email" : "element-filtered-gray"
      }
    >
      {index === 0 && (
        <span
          className="span_1"
          style={{ marginBottom: "40px" }}
        >{`Email`}</span>
      )}
      <span>{email}</span>
    </div>
  );
}
