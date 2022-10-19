import "./usHeader_styles.scss";

export function UserListHeader() {
  return (
    <div className="user-list-header">
      <span>{`User`}</span>
      <span>{`Email`}</span>
      <span>{`Country of residency`}</span>
      <span>{`Company`}</span>
      <span>{`Registration Date`}</span>
      <span>{`Actions`}</span>
    </div>
  );
}
