import { SectionBtn } from "../btns/SectionBtn";
import { SectionTitle } from "../titles/SectionTitle";
import "./content_styes.scss";

export function SectionsContent({
  h3,
  subTitle,
  myTitleLeft,
  myTitleRight,
  p,
  btnLabel,
  paragraph,
  myTitle,
}) {
  console.log(myTitle);
  return (
    <div className="section-content">
      <div className="section-content-header">
        <SectionTitle h3={h3}></SectionTitle>

        <>
          {!subTitle && (
            <div className="section-content-header-subtitle">
              <h3 className="section-content__h3-left">{myTitleLeft}</h3>
              <h3 className="section-content__h3-right">{myTitleRight}</h3>
            </div>
          )}
        </>

        <>
          {subTitle && (
            <div className="section-content-about-subtitle">
              <span className="section-content-about-subtitle__text">
                {subTitle}
              </span>
            </div>
          )}
        </>

        <div
          className="section-content-paragraph"
          style={{ marginBottom: subTitle ? "70px" : "60px" }}
        >
          <p className={subTitle ? "section-about__p" : "section-content__p"}>
            {paragraph || p}
          </p>
        </div>
      </div>
      <div></div>
      <div className="section-content-footer">
        <SectionBtn {...{ btnLabel, subTitle }}></SectionBtn>
      </div>
    </div>
  );
}
