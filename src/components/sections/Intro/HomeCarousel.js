import { Button, Carousel, Divider } from "antd";
import { useRef, useState } from "react";
import resetIcon from "../../../assets/images/reset.svg";
import { CarouselContent } from "../../content/CarouselContent";
import { LeftArrow } from "../../icons/LeftArrow";
import { RightArrow } from "../../icons/RightArrow";
import "./carousel_styles.scss";

export const HomeCarousel = ({ setcarouselText }) => {
  const ref = useRef();
  const [currentSlide, setcurrentSlide] = useState(0);
  function minTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
  }

  return (
    <div className="home-carousel">
      <div className="home-carousel-header">
        <div className="home-carousel-header-left">
          <span className="home-carousel-header-left__digit">
            {String(currentSlide + 1).padStart(2, "0")}
            {/* {minTwoDigits(currentSlide + 1)}*/}
            {/* gives the same result, adds a leading 0 before the digit when 1 < 10 */}
            <span>.</span>
          </span>
        </div>
        <div className="home-carousel-btns">
          <Button
            onClick={() => {
              ref.current.prev();
            }}
          >
            <LeftArrow></LeftArrow>
          </Button>

          <Button
            className="reset-btn"
            onClick={() => {
              ref.current.goTo(0);
            }}
          >
            <img src={resetIcon} alt="" />
          </Button>

          <Button
            onClick={() => {
              ref.current.next();
            }}
          >
            <RightArrow></RightArrow>
          </Button>
        </div>
      </div>

      <div className="home-carousel-divider" style={{ width: "700px" }}>
        <Divider
          orientation=""
          type="horizontal"
          className="home-carousel-ant-divider"
          style={{ background: "white", width: "100%" }}
        />
      </div>

      <Carousel
        dots
        dotPosition="right"
        className="home-carousel-carousel"
        ref={ref}
        pauseOnHover
        autoplay={true}
        draggable={true}
        currentSlide={currentSlide}
        afterChange={(currentSlide) => {
          setcurrentSlide(currentSlide);
          if (currentSlide === 0) {
            setcarouselText("Manage operations");
          } else if (currentSlide === 1) {
            setcarouselText("Grow Your Business");
          } else if (currentSlide === 2) {
            setcarouselText("Attract more Customers");
          } else if (currentSlide === 3) {
            setcarouselText("Be the Leader in Your Domain");
          } else if (currentSlide === 4) {
            setcarouselText("Strive for The Best");
          } else if (currentSlide === 5) {
            setcarouselText("Switch between Worlds");
          }
        }}
        //all works perfectly
      >
        <CarouselContent //slide 1
          text={`Discover market access rules, check regulatory compliance, latest customs duties, shipping requirements and other documentation. Africa-wide, harmonized, and aggregated trade and investment regulatory information i.e., Foreign Trade Regulations (e.g., Customs procedures, certification, licensing, etc.) and Market Access (trade agreements, tariffs, and non-tariff measures etc.)`}
        />
        <CarouselContent //slide 2
          text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularise`}
        />
        <CarouselContent
          text={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their`}
        />
        <CarouselContent
          text={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical`}
        />
        <CarouselContent
          text={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet`}
        />
        <CarouselContent
          text={` All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition`}
        />
        {/* only text */}
      </Carousel>
    </div>
  );
};
