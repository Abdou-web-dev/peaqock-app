import "./footer_styles.scss";

export function FooterLink({ link, linkLabel }) {
  return (
    <div className="footer-link">
      <a className="footer-link-anchor" href={link}>
        <span className="footer-link__text">{linkLabel}</span>
      </a>
    </div>
  );
}
