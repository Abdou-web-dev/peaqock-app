import "./footer_styles.scss";

export function FooterInfo({ icon, text }) {
  return (
    <div className="footer-info">
      <img className="footer-info-icon" src={icon} alt="" />
      <span className="footer-info-text">{text}</span>
    </div>
  );
}
