import "./footer_styles.scss";

export function FooterHeader({ label }) {
  return (
    <div className="footer-header">
      <span className="footer-header-label">{label}</span>
    </div>
  );
}
