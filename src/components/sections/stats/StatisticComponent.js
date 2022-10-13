import "./stats_styles.scss";

export function StatisticComponent({ elem }) {
  return (
    <div className="stat-comp">
      <div className="stat-comp-header">
        <span className="stat-comp-header__digit">
          <span>+</span>
          {elem.digit}
        </span>
      </div>
      <div className="stat-comp-footer">
        <span className="stat-comp-footer__text">{elem.text}</span>
      </div>
    </div>
  );
}
