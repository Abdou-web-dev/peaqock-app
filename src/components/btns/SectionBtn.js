import { Button } from "antd";

export function SectionBtn({ btnLabel, subTitle }) {
  return (
    <>
      <Button
        className={subTitle ? "section-about__btn" : "section-content__btn"}
        // loading={loading}
        // onClick={() => {
        //   setLoading(!loading);
        // }}
      >
        <span className="">{btnLabel}</span>
      </Button>
    </>
  );
}
