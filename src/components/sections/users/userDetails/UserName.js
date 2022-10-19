import "../user_styles.scss";

export function UserName({ username, index, filteredResults }) {
  console.log(username);
  return (
    <div
      className={
        !filteredResults ? "user-component-username" : "element-filtered-black"
      }
    >
      {index === 0 && (
        <span
          className="span_1"
          style={{ marginBottom: "40px" }}
        >{`User`}</span>
      )}
      <span>{username}</span>
    </div>
  );
}
