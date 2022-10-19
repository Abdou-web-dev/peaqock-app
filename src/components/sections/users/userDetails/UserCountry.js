import "../user_styles.scss";

export function UserCountry({ country, index }) {
  return (
    <div className="user-component-country">
      {index === 0 && (
        <span
          className="span_1"
          style={{ marginBottom: "40px" }}
        >{`Country`}</span>
      )}
      <span>{country}</span>
    </div>
  );
}
