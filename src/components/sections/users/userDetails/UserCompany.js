import "../user_styles.scss";

export function UserCompany({ company, index, filteredResults }) {
  return (
    <div
      className={
        !filteredResults ? "user-component-company" : "element-filtered-black"
      }
    >
      {index === 0 && (
        <span
          className="span_1"
          style={{ marginBottom: "40px" }}
        >{`Company`}</span>
      )}
      <span>{company}</span>
    </div>
  );
}
